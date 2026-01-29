## Overview


## 1. Store

```javascript
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contextSlice from "./slices/contextSlice";
import homeSlice from "./slices/homeSlice";
import byeSlice from "./slices/byeSlice";
/**
 * Configure the Redux store with slices and persistence.
 */
const persistConfig = {
  key: 'root',
  storage
};
/**
 * Combine the slices into a root reducer.
 */
const rootReducer = combineReducers({
  context: contextSlice,
  home: homeSlice,
  bye: byeSlice
});
/**
 * Create a persisted reducer using the root reducer and persistence configuration.
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);
/**
 * Configure the Redux store with the persisted reducer.
 */
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
/**
 * Create a persistor to manage the persistence of the store.
 */
const persistor = persistStore(store);

export { store, persistor };
```

## 2. Slices

```javascript
import { createSlice } from '@reduxjs/toolkit';
/**
 * Home slice to manage the state of the home component, including stage and scroll stoping.
 */
const homeSlice = createSlice({
    name: 'home',
    initialState:{
        stage:'awaiting',
        scrollStopping:{
            page:{
                req:{},
                name:'',
                session:'',
                start:0,
                end:0,
                time:0,
                leavingApp:0,
                views:0
            },
        }
        
    },
    reducers:{
        setStage:(state, action) => {
            state.stage = action.payload;
        },
        setScrollStopping:(state, action) => {
            state.scrollStopping = action.payload;
        },
        setSectionTracking:(state, action) => {
            let section = Object.keys(action.payload)[0];
            state.scrollStopping.sections[section] = action.payload[section];
        },
        setEscapeAttempt:(state, action) => {
            state.scrollStopping.page.leavingapp = action.payload;
        },
        setPageQuit:(state, action) => {
            state.scrollStopping.page = action.payload;
        }
    }
});

export const { setStage, setScrollStopping, setSectionTracking, setEscapeAttempt, setPageQuit } =  homeSlice.actions;
export default homeSlice.reducer;
```

## 3. Updaters

```javascript
import { store } from "../../store/store";
import { setSectionTracking, setEscapeAttempt, setPageQuit } from "../../store/slices/homeSlice";
/**
 * Manage changes in the home page state
 * @param {object} previousState 
 * @param {object} currentState 
 */ 
export function homeUpdater(previousState, currentState){
    /**
     * Page instance
     * @type {object}
     */
    let page = document.querySelector('app-page');
    /**
     * If there are changes in language or theme, update the context and reload data.
     * If there are changes in the home stage, update the appoinment component accordingly.
     */
    if (previousState.context.lang!=currentState.context.lang||previousState.context.theme!=currentState.context.theme){
        page.data.context = currentState.context;
        page.loadData();
    }else if(previousState.home.stage!=currentState.home.stage){
        let track = currentState.home.scrollStopping;
        let payload = {};
        console.log(`Home stage changed to ${currentState.home.stage}`);
        switch (true){
            case currentState.home.stage === 'attention/click':
                document.getElementById("action").scrollIntoView({ behavior: "smooth"});
                break;
            case currentState.home.stage.startsWith('action/click-'):
                payload = page.setPageQuit(track.page);
                store.dispatch(setPageQuit(payload));
                window.location.href = `/#thanks?product=${currentState.home.stage.match(/click-([\w-]+)$/)?.[1]}`
                break;
            case currentState.home.stage === 'atenttion/viewed':
                payload = page.setSectionViewed('attention',track.sections.attention);
                store.dispatch(setSectionTracking(payload));
                break;
            case currentState.home.stage === 'interest/viewed':
                payload = page.setSectionViewed('interest',track.sections.interest);
                store.dispatch(setSectionTracking(payload));
                break;
            case currentState.home.stage === 'desire/viewed':
                payload = page.setSectionViewed('desire',track.sections.desire);
                store.dispatch(setSectionTracking(payload));
                break;
            case currentState.home.stage === 'action/viewed':
                payload = page.setSectionViewed('action',track.sections.action);
                store.dispatch(setSectionTracking(payload));
                break;
            case currentState.home.stage === 'attention/unviewed':
                payloasd = page.setSectionUnviewed('attention',track.sections.attention);
                store.dispatch(setSectionTracking(payload));
                break;
            case currentState.home.stage === 'interest/unviewed':
                payload = page.setSectionUnviewed('interest',track.sections.interest);
                store.dispatch(setSectionTracking(payload));
                break;
            case currentState.home.stage === 'desire/unviewed':
                payload = page.setSectionUnviewed('desire',track.sections.desire);
                store.dispatch(setSectionTracking(payload));
                break;
            case currentState.home.stage === 'action/unviewed':
                payload = page.setSectionUnviewed('action',track.sections.action);
                store.dispatch(setSectionTracking(payload));
                break;                
            case currentState.home.stage === 'escape':
                let leavingApp = track.page.leavingapp + 1;
                store.dispatch(setEscapeAttempt(leavingApp));
                if (leavingApp===1){
                    document.getElementById("message").setAttribute("active", "")
                }
                break;
            case currentState.home.stage === 'quit':
                payload = page.setPageQuit(track.page);
                store.dispatch(setPageQuit(payload));
                break;
        }
    }
}

```