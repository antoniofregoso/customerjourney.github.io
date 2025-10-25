## About
bj-router is a lightweight client-side router made with javascript with a delicious vanilla flavor.

- Features include:
- Standard or hash routing
- Routing with route parameters
- Query parameter detection
- Named routes
- Customizable 404 error
- Redux compatible

## Install
```
npm i @custumerjourney/router
```
## Options
router has two options.

1. hashSensitive default is **false**.
2. caseInsensitive defaults is **true**.

## Routing
```javascript
import { Router } from "@buyerjourney/router";
const App = new Router();
App.on('/', (req, router)=>{console.log(req)});
App.run();
```
## Routing with hash
```javascript
import { Router } from "@buyerjourney/router";

const App = new Router({ hashSensitive:true});
App.on('/', (req, router)=>{console.log(req)});
App.on('/#products', (req, router)=>{console.log(req)});
App.run();
```
## Routing whit path parameters
```javascript
import { Router } from "@buyerjourney/router";

export const App = new Router({ hashSensitive:true});
App.on('/', (req, router)=>{console.log(req)});
App.on('/blog/{article}', (req, router)=>{console.log(req)});
App.on('/store/{product}/{model}', (req, router)=>{console.log(req)})
App.run();
```
### Object req
The req object is passed by bj-router to the callback function. It contains the route parameters, the query parameters, the URL requested by the client and the referrer (the URI of the page that linked to the current page).

With the router configuration above we make the following request: http://localhost:8000/store/headphones/JVC-0HAFX29BTW?utm_source=facebook&utm_medium=landingpage&utm_campaign=christmas&utm_content=op-23 
```json
{
    "hostname":"www.mydomain.com",
    "pathname": "/store/headphones/JVC-0HAFX29BTW",
    "referrer":"",
    "query": {
        "utm_source": "facebook",
        "utm_medium": "landingpage",
        "utm_campaign": "christmas",
        "utm_content": "op-23"
    },
    "params": {
        "product": "headphones",
        "model": "JVC-0HAFX29BTW"
    }
}
```
## Named routes
```javascript
import { Router } from "@buyerjourney/router";
import { home, thanks } from "./app/pages";

export const App = new Router({ hashSensitive:true});
App.on('/', home);
App.on('/#thanks', thanks).setName("bye");
App.run();
```
The router object passed to the callback function has the pathFor(name) function to retrieve the url associated with the name.
```javascript
window.location.href = router.pathFor("bye");
```
## Repository
To propose features, report bugs or collaborate: [https://github.com/antoniofregoso/cj-router.git](https://github.com/antoniofregoso/cj-router.git).
