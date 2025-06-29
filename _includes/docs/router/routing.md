In the app.js file. The callback functions are located inside the pages folder within the app folder. We have one for home, one for thanks and notFound to style the 404 error. bj-router responds to the 404 error, but can optionally be customized.

```javascript
import { Router } from "@customerjourney/router";
import { home, thanks, notFound } from "./app/pages";

export const App = new bjRouter({ hashSensitive:true});
App.on('/', home);
App.on('/#thanks', thanks).setName("bye");
App.onNotFound(notFound);
```

In the index.js file using redux persistent state and the loading function to enable Bulma's Page-loader extension for styling :)

```javascript
import { store, persistor } from './app/store/store';
import { loading } from  "@customerjourney/core";
import '@customerourney/core/src/bj.css';
import { App } from './App';

loading({color:"is-dark", direction:"is-right-to-left"});

persistor.subscribe(()=>{
    const rehydratedState = store.getState();  
    App.run();
})
```