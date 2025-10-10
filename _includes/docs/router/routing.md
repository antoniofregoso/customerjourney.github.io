In the app.js file. The callback functions are located inside the pages folder within the app folder. We have one for home, one for thanks and notFound to style the 404 error. bj-router responds to the 404 error, but can optionally be customized.

```javascript
import { Router } from "@customerjourney/router";
import { home, thanks, notFound } from "./app/pages";

export const App = new bjRouter({ hashSensitive:true});
App.on('/', home);
App.on('/#thanks', thanks).setName("bye");
App.onNotFound(notFound);
```

In the index.js file, redux persistent state and the load function are used to enable Bulma's Page-loader extension to apply styling, and a session id is also assigned if it didn't exist:

```javascript
import config from './.env/conf.json';
import { store, persistor } from './app/store/store';
import { setSession } from './app/store/slices/contextSlice';
import { generateSessionToken, loading, whithAnimations } from "@customerjourney/cj-core"
import 'animate.css';
import '@customerjourney/cj-core/src/pageloader.css';
import { App } from './App';
/**
 * Set Loading element before app run
 */
loading({color:"is-dark", direction:"is-right-to-left"});

let isRehydrated = false;

function startApp() {
    // If you haven't rehydrated, we're leaving.
    if (!isRehydrated) {
        console.warn('Attention! Rehydration is not complete. Waiting...');
        return;
    }

    console.log('✅ Complete rehydration. Data is ready.');

    const currentState = store.getState();
    const session  = currentState?.context?.session;
    if(!session){
        const newSession = generateSessionToken(32);
        store.dispatch(setSession(newSession));
    }
    if(currentState?.context?.theme){
        document.documentElement.setAttribute('data-theme', currentState.context.theme);
    }
    
    App.run();
}

const unsubscribe = persistor.subscribe(() => {

    const persistorState = persistor.getState();

    if (persistorState.bootstrapped && !isRehydrated) {
        isRehydrated = true;
        unsubscribe(); // Stop listening to avoid unnecessary future executions
        startApp();    // Launch the main application!
        whithAnimations();  //Enable animations
    }
});
```