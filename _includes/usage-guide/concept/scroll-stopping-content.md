CustumerJourney.js handles a state per page with two components: the stage and the scrollStopping object.

The scrollStopping object measures the time each user spends on each page of the funnel and the time each user spends on each section of each page.

The events to be measured are configured in the page object.

Let's assume the funnel page is made with the Attention-Interest-Desire-Action framework. Each section has a name that corresponds to the content.
## Page Template

```javascript
    let template =`
        <page-header id="header"></page-header>
        <hero-banner id="atention"></hero-banner>
        <cards-list id="interest"></cards-list>
        <media-list id="desire"></media-list>
        <cards-list id="action"></cards-list>
        <page-footer id=c></page-footer>
        <modal-box id="message"></modal-box>
        `;
```

## Page Object
```javascript
{
    "props":{
        "id":"home",
        "noCache":true,
        "events":{
            "trackViewed":["attention", "interest", "desire", "action"],
            "leavingapp":true,
            "leavedapp":true
            },
        "title":{
            "es":"Demo|CustumerJourney.js",
            "en":"Demo|CustumerJourney.js",
            "fr":"Démo|CustumerJourney.js"

        },
        "description":{
            "es":"Demo de CustomerJourney.js - La herramienta definitiva para crear embudos de ventas hiper-personalizables.",
            "en":"CustomerJourney.js Demo - The ultimate tool to create hyper-customizable sales funnels.",
            "fr":"Démo de CustomerJourney.js - L'outil ultime pour créer des entonnoirs de vente hyper-personnalisables."
        },
        "components":[...]
        }
    }
```
In the events attribute, we configure:
1. **trackViewed**: The sections to measure.
2. **leavingapp**: Whether to trigger an event when the user moves the mouse away from the window.
3. **leavedapp**: When the user leaves the funnel.

All values ​​are optional.
## scrollStopping Object
The status of the sales funnel home page is shown here.
```javascript
{
  home: {
    stage: 'escape',
    scrollStopping: {
        name: 'Demo|CustumerJourney.js',
        session: 'wORLbwyo9TNWpGm6SDmZXoBf4MeXYrcN',
        page: {
            start: 1760590597627,
            end: 1760590615288,
            time: 17661,
            leavingapp: 2,
            views: 3,
            req: {
                uri: '/',
                referrer: '',
                query: null,
                params: {}
            }
        },
        sections: {
            attention: {
                order: 0,
                start: 0,
                end: 0,
                time: 0,
                views: 0
                },
            interest: {
                order: 1,
                start: 1760590603459,
                end: 1760590606457,
                time: 2998,
                views: 1
                },
            desire: {
                order: 2,
                start: 1760590605789,
                end: 1760590608592,
                time: 2803,
                views: 1
                },
            action: {
                order: 3,
                start: 1760590607043,
                end: 1760590615317,
                time: 8274,
                views: 1
                }
        }
    }
  }
}
```