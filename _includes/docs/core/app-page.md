## Overview
AppPage is the core of every CustomerJourney.js page. It renders all macro-components, applies the design, content, and animations to each macro-component, and communicates all events to the callback function that contains it so that the necessary state changes can be processed.
## AppPage instance
Instantiating AppPage is very simple. All that's required is the template with the macrocomponent layout and the [SSOT JSON]({{ '/documentation/core/ssot/' | relative_url }}) props object, which can be passed along with the template or called from the backend by passing the necessary information to hyper-customize the customer experience, as shown in the example below.

```javascript
import { AppPage, PageHeader, PageFooter } from "@customerjourney/cj-core";
import { HeroBanner, LevelCentered, MediaList, CardsList, ModalBox } from "@customerjourney/cj-components";

export function home(req, router){

let template =`
    <page-header id="header"></page-header>
    <hero-banner id="attention"></hero-banner>
    <cards-list id="interest"></cards-list>
    <media-list id="desire"></media-list>
    <cards-list id="action"></cards-list>
    <page-footer id="footer"></page-footer>
    <modal-box id="message"></modal-box>
    `;

let page = new AppPage({},template)

}

```

## Props
The props object defines the page's head: Title, description, the meta elements for Facebook and X, the classList style classes that are applied to the body, as well as any tracking events that you want to use.

In `**components: []** goes the JSON object of each of the macro-components included in the sales funnel page layout template

```json
{
  "props": {
    "id": "home",
    "title": {
      "es": "Demo|CustumerJourney.js",
      "en": "Demo|CustumerJourney.js",
      "fr": "Démo|CustumerJourney.js"
    },
    "description": {
      "es": "Demo de CustomerJourney.js - La herramienta definitiva para crear embudos de ventas hiper-personalizables.",
      "en": "CustomerJourney.js Demo - The ultimate tool to create hyper-customizable sales funnels.",
      "fr": "Démo de CustomerJourney.js - L'outil ultime pour créer des entonnoirs de vente hyper-personnalisables."
    },
      "image":"https://image-for-social-media.png",
      "type":"business.business",
      "canonical":"url",
      "classList":[],
      "components": []
  }
}
```
### Disable cache
Sometimes it's necessary to disable the browser cache. This is very easy to do.

```json
{
    "props":{
        "id":"home",
        "Cache":false,
        .
        .
        .
    }
}

```

## Data management
Initial data handling is handled by AppPage. A webhook sends all the request information so the backend can process it using AI and return the SSOT JSON object for page rendering. State changes resulting from client actions are handled by the callback function based on events sent by AppPage.

```javascript

...
  let page = new AppPage({},template)
  page.sendWebhook('https://hook.url', req, currentValue.context)
...

```

While the webhook waits for the SSOT JSON, it displays a page loader element that is configured with the [loading()]({{ '/documentation/core/functions/' | relative_url }}) function.

### Event management
### Page events
There are three types of page events:
1. `trackViewed`: This is initialized with the IDs of the macro-components to be monitored. It sends two events:
	1. `viewedelement`: When the macro-component enters the client's view.
	2. `unviewedelement`: When the macro-component leaves the client's view.
2. `leavingapp`: When the mouse pointer leaves the page's display area. This event can be used to send messages or offers to retain the client.
3. `leavedapp`: When the client leaves the page. This event can be used for post-mortem actions, such as saving the last state for hyper-personalization the next time the client returns.

```json
{
  "props": {
    "id": "home",
    "events": {
      "trackViewed": [
        "macro-component 1 ID",
        "macro-component 2 ID",
      ],
      "leavingapp": true,
      "leavedapp": true
    },
    .
    .
    .
  }

```

### Macro-components events
Macrocomponent events are automatically generated using the `eventName:"name"` property described in the JSON of each macrocomponent.

## Implementation of event management
The `page.setEvents(object)` property defines the object that manages events. Each event must modify the state so that this change triggers the updater for each page and generates the necessary actions, such as modifying the page, sending information, requesting information from the backend, etc.

```javascript

  const pageEvents = {
      handleEvent(e) { 
          switch(e.type) { ... }
      }
  };

  let pag = new AppPage({},template)
  page.setEvents(pageEvents);
  page.sendWebhook('https://hook.url', req, currentValue.context)

```

