CustomerJourney.js are libraries specialized in creating sales funnels and landing pages based on macro components with a focus on hyper-personalization with AI. Each macro component represents a section of a page. These sections are developed using the [Bulma CSS Framework](https://bulma.io/).

The paradigm used is OOP, and JavaScript natively has HTMLElement and Template literals, so I decided to go bare-bones without using React, Vue, or any other aids.

The necessary router is very simple and runs on the client side, so we created a simple, fast one that fits the needs of CustomerJourney.js.
## Simple router
```javascript
import { Router } from "@customerjourney/cj-router";
import { home, bye } from "./app/pages";

/**
 * Main application router
 */
export const App = new Router({ hashSensitive:true});
App.on('/', home);
App.on('/#thanks', bye).setName("bye");
```
## Simple page
```javascript
import { AppPage, PageHeader, PageFooter } from "@customerjourney/cj-core";
import { HeroBanner, MediaList, CardsList, ModalBox } from "@customerjourney/cj-components";
import { store } from "../store/store";
/**
 * Declare callback funtion for home page
 * @param {object} req 
 * @param {object} router 
 */
export function home(req, router){
    /**
     * current state of the app
     * @type {object}
     */
    let currentValue = store.getState();
    /**
     * Template for the page
     */
    let template =`
        <page-header id="header"></page-header>
        <hero-banner id="atention"></hero-banner>
        <cards-list id="interest"></cards-list>
        <media-list id="desire"></media-list>
        <cards-list id="action"></cards-list>
        <page-footer id=c></page-footer>
        <modal-box id="message"></modal-box>
        `;
    /**
     * Page instance
     */
    page =  new AppPage({}, template);
    /**
     * Get hyper-personalized AI-generated design, content, and animations for the client in json mode.
     */
    pag.sendWebhook('https://webhook-url', req, currentValue.context)
}
```
### Simple copy, design and animations
An AI-generated setting HeroBanner section in CustumerJourney.js style
```json
{
    "id":"atention",
    "backgroundImage":{
        "url":"/images/crm-hero.webp",
        "fixed":true
    },
    "classList":["is-fullheight-with-navbar", "hero is-link"],
    "caption":{
        "text":{
            "es":"¿Estás perdiendo ventas por no tener un seguimiento adecuado?",
            "en":"Are you losing sales due to inadequate follow-up?"
        },
        "classList":["has-text-shadow"]
    },
    "title":{
        "text":{
            "es":"¡Incrementa tus ventas y optimiza tu gestión de clientes!",
            "en":"Increase your sales and optimize your customer management!",
            "fr":"Augmentez vos ventes et optimisez votre gestion client !"
        },
        "classList":["has-text-shadow"],
        "animation":{
            "effect":"zoomIn"
        }
    },
    "subtitle":{
        "text":{
            "es":"Nuestro CRM es la herramienta que necesitas para organizar, automatizar y hacer crecer tu negocio. ¡Todo en un solo lugar!",
            "en":"Our CRM is the tool you need to organize, automate, and grow your business. Everything in one place!",
            "fr":"Notre CRM est l'outil dont vous avez besoin pour organiser, automatiser et développer votre entreprise. Tout en un seul endroit !"
        },
        "classList":["has-text-shadow"]
    },
    "buttons":{
        "eventName":"appclick",
        "classList":["is-centered"],
        "buttons":[
            {
                "id":"landing-button",
                "text":{
                    "es":"¡Pruébalo gratis ahora!",
                    "en":"Try it for free now!",
                    "fr":"Essayez-le gratuitement maintenant!"
                },
                "classList":["is-rounded","is-info"]
                }
        ]
    },
    "scrollButton":{
        "color":"has-text-info"
    }
}
```

The result

![Hero Banner](/assets/images/usage-guide/hero-banner.webp)