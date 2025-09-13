## App structure
```text
┣ 📂src
 ┃ ┣ 📂.env
 ┃ ┃ ┗ 📜conf.json
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┣ 📜bye.json
 ┃ ┃ ┃ ┗ 📜home.json
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📂updaters
 ┃ ┃ ┃ ┃ ┣ 📜byeUpdater.js
 ┃ ┃ ┃ ┃ ┗ 📜homeUpdater.js
 ┃ ┃ ┃ ┣ 📜bye.js
 ┃ ┃ ┃ ┣ 📜home.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂scss
 ┃ ┃ ┃ ┗ 📜assets.scss
 ┃ ┃ ┗ 📂store
 ┃ ┃ ┃ ┣ 📂slices
 ┃ ┃ ┃ ┃ ┣ 📜byeSlice.js
 ┃ ┃ ┃ ┃ ┣ 📜contextSlice.js
 ┃ ┃ ┃ ┃ ┣ 📜homeSlice.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📜App.js
 ┃ ┗ 📜index.js
```

### index.js

```javascript
import config from './.env/conf.json';
import { store, persistor } from './app/store/store';
import { loading, whithAnimations } from "@customerjourney/cj-core"
import { setStage } from "./app/store/slices/homeSlice"
import 'animate.css';
import '@customerjourney/cj-core/src/pageloader.css';
import { App } from './App';

loading({color:"is-dark", direction:"is-right-to-left"});

let currentValue = store.getState();
    let theme = currentValue?.context?.theme;
    if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

persistor.subscribe(()=>{
    const rehydratedState = store.getState();  
})
App.run();
whithAnimations();
```
### App.js
```javascript
import { Router } from "@customerjourney/cj-router";
import { home, bye } from "./app/pages";

export const App = new Router({ hashSensitive:true});
App.on('/', home);
App.on('/#thanks', bye).setName("bye");
```
### store.js
```javascript
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contextSlice from "./slices/contextSlice";
import homeSlice from "./slices/homeSlice";
import byeSlice from "./slices/byeSlice";

const persistConfig = {
    key: 'root',
    storage
  };

  const rootReducer = combineReducers({
    context: contextSlice,
    home: homeSlice,
    bye: byeSlice
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer
  });

  const persistor = persistStore(store); 

  export { store, persistor };
```

### homeSlice.js
```javascript
import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: 'home',
    initialState:{
        stage:'awaiting',
        breadcrumb:[]
        
    },
    reducers:{
        setStage:(state, action) => {
            state.stage = action.payload;
        },
        setBreadcrumb:(state, action) => {
            state.breadcrumb = action.payload;
        } 
    }
});

export const { setStage, setBreadcrumb } =  homeSlice.actions;
export default homeSlice.reducer;
```
### contextSlice.js
```javascript
import { createSlice } from '@reduxjs/toolkit';
import { generateSessionToken } from '@customerjourney/cj-core';
const contextSlice = createSlice({
    name: 'context',
    initialState:{
        lang:'es',
        theme:'light',
        sessionToken:generateSessionToken(32)
    },
    reducers:{
        setLanguaje:(state, action) => {
            state.lang = action.payload;
        },
        setTheme:(state, action) => {
            state.theme = action.payload;
            document.documentElement.setAttribute('data-theme', action.payload);
        }
    }
});

export const { setLanguaje,  setTheme } =  contextSlice.actions;
export default contextSlice.reducer;
```

### home.js
```javascript
import { AppPage, PageHeader, PageFooter } from "@customerjourney/cj-core";
import { HeroBanner, LevelCentered, MediaList, CardsList, ModalBox } from "@customerjourney/cj-components";
import { setStage, setBreadcrumb } from "../store/slices/homeSlice";
import { setLanguaje, setTheme } from "../store/slices/contextSlice"
import { store } from "../store/store";
import { homeUpdater } from "./updaters/homeUpdater";
import data from "../data/home.json";

export function home(req, router){

    let go = Date.now();

    let counter = {go:go, time:0, atention:0, interest:0, desire:0, action:0, conversion:0, leavingapp:0, leavedapp:0 }

    let template =`
    <page-header id="header"></page-header>
    <hero-banner id="atention"></hero-banner>
    <cards-list id="interest"></cards-list>
    <media-list id="desire"></media-list>
    <cards-list id="action"></cards-list>
    <page-footer id="footer"></page-footer>
    <modal-box id="message"></modal-box>
    `;
    
    let currentValue = store.getState();
    store.dispatch(setStage('start'));
    data.context = currentValue;    ;
    page =  new AppPage(data, template);
    const pageEvents = {
        handleEvent: (e) => {
            switch(e.type){
                case 'user:select-lang':
                    store.dispatch(setLanguaje(e.detail));
                    break;
                case 'user:select-theme':
                    store.dispatch(setTheme(e.detail));
                    break;
                case 'app-click':
                    switch (e.detail.source){
                        case "appoinment-button":
                            counter.leavingapp++; 
                            store.dispatch(setStage('action/open'));
                            break;
                        case "landing-button":
                            store.dispatch(setStage('landing/click'));
                            break;
                    }
                    break;
                case 'viewedelement':
                    switch (e.detail.source){
                        case 'landing':
                            if (counter.landing===0) {
                                store.dispatch(setStage('landing/viewed'));
                                counter.landing++;
                            }
                            break;
                        case 'attention':
                            if (counter.atention===0) {
                                store.dispatch(setStage('attention/viewed'));
                                counter.atention++;
                            }
                            break;
                        case 'interest':
                            if (counter.interest===0) {
                                store.dispatch(setStage('interest/viewed'));
                                counter.interest++;
                            }
                            break;
                        case 'desire':
                            if (counter.desire===0) {
                                store.dispatch(setStage('desire/viewed'));
                                counter.desire++;
                            }
                            break;
                        case 'action':
                            if (counter.action===0) {
                                store.dispatch(setStage('action/viewed'));
                                counter.action++;
                            }
                            break;
                        case 'conversion':
                            if (counter.conversion===0) {
                                store.dispatch(setStage('conversion/viewed'));
                                counter.conversion++;
                            }
                            break;
                        }
                    break;
                case 'unviewedelement':
                    switch (e.detail.source){
                        case 'landing':
                            if (counter.landing>0) {
                                store.dispatch(setStage('landing/unviewed'));
                            }
                            break;
                        case 'attention':
                            if (counter.atention>0) {
                                store.dispatch(setStage('attention/unviewed'));
                            }
                            break;
                        case 'interest':
                            if (counter.interest>0) {
                                store.dispatch(setStage('interest/unviewed'));
                            }
                            break;
                        case 'desire':
                            if (counter.desire>0) {
                                store.dispatch(setStage('desire/unviewed'));
                            }
                            break;
                        case 'action':
                            if (counter.action>0) {
                                store.dispatch(setStage('action/unviewed'));
                            }
                            break;
                        }
                    break;
                case 'leavingapp':
                    if (counter.leavingapp===0)
                        {
                            store.dispatch(setStage('escape'));
                            document.getElementById("message").setAttribute("active", "")
                            counter.leavingapp++;
                        };
                    break;
                case 'leavedapp':
                    counter.leavedapp++;
                    counter.time = Math.round((Date.now() - go) / 1000);
                    store.dispatch(setBreadcrumb(counter));
                    break;
            }}
            
        }

    function handleChange(){
            let previousValue = currentValue;
            currentValue = store.getState();
            if (previousValue !== currentValue) {
                homeUpdater(previousValue, currentValue);
              }
        }

    page.setEvents(pageEvents);

    store.subscribe(handleChange);
}
```

## homeUpdater.js
```javascript
export function homeUpdater(previousValue, currentValue){
    let page = document.querySelector('app-page');
    
    if (previousValue.context.lang!=currentValue.context.lang||previousValue.context.theme!=currentValue.context.theme){
        page.data.context = currentValue.context;
        page.loadData();
    }else if(previousValue.home.stage!=currentValue.home.stage){
        let appoinment = page.querySelector('#appoinment');
        switch (currentValue.home.stage){
            case 'landing/click':
                document.getElementById("action").scrollIntoView({ behavior: "smooth"});
                break;
            case 'action/open':
               appoinment.setAttribute('stage', 'open');
                break;
            case 'action/close':
                appoinment.setAttribute('stage', 'awaiting');
                break;
            case 'action/appoinment':
                appoinment.setAttribute('stage', 'appoinment');
                break;
        }
    }
}
```

```css
@use "bulma/sass" with (
  $family-primary: '"Play", sans-serif'
);


@import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap");


.has-text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
```

## Project structure

```html
<!DOCTYPE html>
<html lang="es" >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator" content="CustumerJourneyJS"/>
    <link rel="stylesheet" href="/assets.css">
    <link rel="stylesheet" href="/index.css">
</head>
<body>
    <div id="app"></div>  
    <script  src="/index.js"></script> 
</body>
</html>
```
```text
📦cj-demo
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┃ ┣ 🖼️social_proof_1.png
 ┃ ┃ ┣ 🖼️social_proof_2.png
 ┃ ┣ 📜assets.css
 ┃ ┣ 📜assets.css.map
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.html
 ┃ ┣ 📜index.js
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂.env
 ┃ ┃ ┗ 📜conf.json
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┣ 📜bye.json
 ┃ ┃ ┃ ┗ 📜home.json
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📂updaters
 ┃ ┃ ┃ ┃ ┣ 📜byeUpdater.js
 ┃ ┃ ┃ ┃ ┗ 📜homeUpdater.js
 ┃ ┃ ┃ ┣ 📜bye.js
 ┃ ┃ ┃ ┣ 📜home.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂scss
 ┃ ┃ ┃ ┗ 📜assets.scss
 ┃ ┃ ┗ 📂store
 ┃ ┃ ┃ ┣ 📂slices
 ┃ ┃ ┃ ┃ ┣ 📜byeSlice.js
 ┃ ┃ ┃ ┃ ┣ 📜contextSlice.js
 ┃ ┃ ┃ ┃ ┣ 📜homeSlice.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📜App.js
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜install.sh
 ┣ 📜package-lock.json
 ┗ 📜package.json
```