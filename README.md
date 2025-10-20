# BuyerJourney.Js
Open-source JavaScript libraries for creating hyper-personalized sales funnels without code

## Code for No-Code
If you are using no-code tools to build your landing pages and sales funnels, but you need more customization and hyper-personalization, CustumerJourney.js is for you.

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
CustomerJourney uses macro components, each representing a section of a funnel page. Content, design, and animations can be generated in workflow systems with AI agents like n8n, with the level of customization limited only by your data and your imagination.

## Libraries
- [cj-router](https://github.com/antoniofregoso/cj-router.git).
- [cj-core](https://github.com/antoniofregoso/cj-core.git).
- [cj-components](https://github.com/antoniofregoso/cj-components.git).
- [cj-forms](https://github.com/antoniofregoso/cj-forms.git).
- [cj-sliders](https://github.com/antoniofregoso/cj-sliders.git).
- [cj-linkin-bio](https://github.com/antoniofregoso/cj-linkin-bio.git).
- [cj-gamification](https://github.com/antoniofregoso/cj-gamification.git).
- [cj-odoo](https://github.com/antoniofregoso/cj-odoo.git).