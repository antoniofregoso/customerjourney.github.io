```javascript
import { AppPage, PageHeader, PageFooter } from "@customerjourney/cj-core";
import { HeroBanner, MediaList, CardsList, ModalBox } from "@customerjourney/cj-components";
import { store } from "../store/store";

export function home(req, router){
    let currentValue = store.getState();
    let template =`
        <page-header id="header"></page-header>
        <hero-banner id="atention"></hero-banner>
        <cards-list id="interest"></cards-list>
        <media-list id="desire"></media-list>
        <cards-list id="action"></cards-list>
        <page-footer id=c></page-footer>
        <modal-box id="message"></modal-box>
        `;
    page =  new AppPage({}, template);
     pag.sendWebhook('https://webhook-url', req, currentValue.context)
}
```