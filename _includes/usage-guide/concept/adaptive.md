## A sales funnel for different consumer profiles
There are two methods you can use to adapt the sales funnel to the customer: route parameters and query parameters.
### Route parameters
```text
http://mydomain.com/average/?utm_source=newsletter&utm_medium=email&utm_campaign=black-friday
```
Where **average** is the route parameter

#### Setting the route parameter in App.js
```javascript
import { Router } from "@customerjourney/cj-router";
import { home, bye } from "./app/pages";

export const App = new Router({ hashSensitive:true});
App.on('/', home);
App.on('/{profile}', home);
App.on('/#thanks', bye);
```
The router's callback function receives a request object and a router.Request object containing all the parameter information.
```javascript
export function home(req, router){
    .
    .
    .
}
```

#### Capturing the route parameter
The values ​​of req are
```json
{
    "hostname":"www.mydomain.com",
    "pathname": "/average/",
    "referrer":"",
    "query": {
        "utm_source":"newsletter",
        "utm_medium":"email",
        "utm_campaign":"black-friday"
    },
    "params": {
        "profile": "average"
    }
}
```
### Query parameters
```text
http://mydomain.com/?utm_source=newsletter&utm_medium=email&utm_campaign=black-friday&cjtm_profile=average
```
where cjtm_profile=average sets the customer profile.
#### Capturing the query parameter
The values ​​of req are
```json
{
    "uri": "/?utm_source=newsletter&utm_medium=email&utm_campaign=black-friday&cjtm_profile=average",
    "referrer": "",
    "query": {
            "utm_source":"newslette",
            "utm_medium":"email",
            "utm_campaign":"black-friday",
            "cjtm_profile":"average",
    },
    "params": {}
}
```
### Getting Content
#### Getting local content

```javascript
import { AppPage, PageHeader, PageFooter } from "@customerjourney/cj-core";
import { HeroBanner, LevelCentered, MediaList, CardsList, ModalBox } from "@customerjourney/cj-components";
/* All 4 contents are imported */
import average from  "../data/average.json" assert { type: "json" };
import self-centered from  "../data/self-centered.json" assert { type: "json" };
import reserved from  "../data/reserved.json" assert { type: "json" };
import role-model from  "../data/role-model.json" assert { type: "json" };

export function home(req, router){
    /* The page structure is defined */
    let template =`
    <page-header id="header"></page-header>
    <hero-banner id="atention"></hero-banner>
    <cards-list id="interest"></cards-list>
    <media-list id="desire"></media-list>
    <cards-list id="action"></cards-list>
    <page-footer id="footer"></page-footer>
    <modal-box id="message"></modal-box>
    `;

    data = {};
    /* The content is selected according to cjtm_profile */
    /* In this example it is done by query string */
    switch(req.query.cjtm_profile){
        case "average":
            data = average;
            break;
        case "self-centered":
            data = self-centered;
            break;
        case "reserved":
            data = reserved;
            break;
        case "role-model":
            data = role-model;
        default:
            data = average;
            break;
    }
    /* The page is instantiated and rendered */
    page =  new AppPage(data, template);
}
```
#### Getting remote content
```javascript
import { AppPage, PageHeader, PageFooter } from "@customerjourney/cj-core";
import { HeroBanner, LevelCentered, MediaList, CardsList, ModalBox } from "@customerjourney/cj-components";

export function home(req, router){
    /* The page structure is defined */
    let template =`
    <page-header id="header"></page-header>
    <hero-banner id="atention"></hero-banner>
    <cards-list id="interest"></cards-list>
    <media-list id="desire"></media-list>
    <cards-list id="action"></cards-list>
    <page-footer id="footer"></page-footer>
    <modal-box id="message"></modal-box>
    `;
    /* The page is instantiated */
    page =  new AppPage({}, template);
    /* The page is rendered */
    pag.sendWebhook('https://hook.mydomain.com/lqn51rg16dfgd0qkvm7mc893vuk3m2vewexy', req, currentValue.context)
}
```
## Content, design and animations obtained
```json
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
        "components":[
            {
                "id":"header",
                "brand":{
                    "src":"/images/cj.webp",
                    "srcDark":"/images/cj-light.webp"
                },
                "i18n":{
                    "lang":{"es":"🇲🇽","en":"🇺🇸","fr":"🇫🇷"}
                }
            },
            {
                "id":"atention",
                "backgroundImage":{
                    "url":"/images/crm-hero.webp",
                    "fixed":true
                },
                "classList":["is-fullheight-with-navbar", "is-link"],
                "caption":{
                    "text":{
                        "es":"¿Estás perdiendo ventas por no tener un seguimiento adecuado?",
                        "en":"Are you losing sales due to inadequate follow-up?",
                        "fr":"Perdez-vous des ventes en raison d'un suivi inadéquat ?"
                    },
                    "classList":["has-text-shadow"],
                    "animation":{
                        "effect":"fadeIn",
                        "speed":"slower"
                    }
                },
                "title":{
                    "text":{
                        "es":"¡Incrementa tus ventas y optimiza tu gestión de clientes!",
                        "en":"Increase your sales and optimize your customer management!",
                        "fr":"Augmentez vos ventes et optimisez votre gestion client !"
                    },
                    "classList":["has-text-shadow"],
                    "animation":{
                        "effect":"fadeIn"
                    }
                },
                "subtitle":{
                    "text":{
                        "es":"Nuestro CRM es la herramienta que necesitas para organizar, automatizar y hacer crecer tu negocio. ¡Todo en un solo lugar!",
                        "en":"Our CRM is the tool you need to organize, automate, and grow your business. Everything in one place!",
                        "fr":"Notre CRM est l'outil dont vous avez besoin pour organiser, automatiser et développer votre entreprise. Tout en un seul endroit !"
                    },
                    "classList":["has-text-shadow"],
                    "animation":{
                        "effect":"fadeIn",
                        "speed":"slower"
                    }
                },
                "buttons":{
                    "eventName":"app-click",
                    "classList":["is-centered"],
                    "buttons":[
                        {
                            "id":"atention-button",
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
            },
            {
                "id":"interest",
                "cardsWidth":"is-3",
                "cards":[
                    {
                        "image":{
                            "src":"/images/lead-management.webp",
                            "classList":["is-square"]
                        },
                        "content":{
                            "description":{
                                "text":{
                                    "es":"### Gestión de leads\n\nOrganiza y prioriza tus contactos para un seguimiento efectivo.",
                                    "en":"### Lead Management\n\nOrganize and prioritize your contacts for effective follow-up.",
                                    "fr":"### Gestion des leads\n\nOrganisez et priorisez vos contacts pour un suivi efficace."
                                }
                            }
                        },
                        "animation":{
                            "effect":"bounce"
                        }
                    },
                    {
                        "image":{
                            "src":"/images/automation.webp",
                            "classList":["is-square"]
                        },
                        "content":{
                            "description":{
                                "text":{
                                    "es":"### Automatización\n\nAutomatiza tareas repetitivas y gana tiempo valioso.",
                                    "en":"### Automation\n\nAutomate repetitive tasks and save valuable time.",
                                    "fr":"### Automatisation\n\nAutomatisez les tâches répétitives et gagnez du temps précieux."
                                }
                            }
                        },
                        "animation":{
                            "effect":"bounce"
                        }
                    },
                    {
                        "image":{
                            "src":"/images/data-analysis.webp",
                            "classList":["is-square"]
                        },
                        "content":{
                            "description":{
                                "text":{
                                    "es":"### Análisis de datos\n\nToma decisiones inteligentes con reportes y métricas claras.",
                                    "en":"### Data Analysis\n\nMake smart decisions with clear reports and metrics.",
                                    "fr":"### Analyse des données\n\nPrenez des décisions intelligentes avec des rapports et des métriques clairs."
                                }
                            }
                        },
                        "animation":{
                            "effect":"bounce"
                        }
                    },
                    {
                        "image":{
                            "src":"/images/collaboration.webp",
                            "alt":"Collaboration"
                        },
                        "content":{
                            "description":{
                                "text":{
                                    "es":"### Colaboración\n\nMejora la comunicación entre tus equipos de venta y marketing.",
                                    "en":"### Collaboration\n\nImprove communication between your sales and marketing teams.",
                                    "fr":"### Collaboration\n\nAméliorez la communication entre vos équipes de vente et de marketing."
                                }
                            }
                        },
                        "animation":{
                            "effect":"bounce"
                        }
                    }
                ]
            },
            {
                "id":"desire",
                "title":{
                    "text":{
                        "es":"Lo que dicen nuestros clientes",
                        "en":"What our clients say",
                        "fr":"Ce que disent nos clients"
                    },
                    "classList":["has-text-centered"]
                },
                "subtitle":{
                    "text":{
                        "es":"Historias reales de éxito con nuestro CRM",
                        "en":"Real success stories with our CRM",
                        "fr":"Des histoires de réussite réelles avec notre CRM"
                    },
                    "classList":["has-text-centered","mb-5"]
                },
                "mediaObjects":{
                    "width":"is-8",
                    "animation":{
                        "effect":"flipInX"
                    },
                    "items":[
                        {
                            "imageL":{
                                "src":"/images/social_proof_1.png"
                                },
                            "title":{
                                "text":{
                                    "es":"Juan Pérez, Gerente de Ventas",
                                    "en":"John Smith, Sales Manager",
                                    "fr":"Jean Dupont, Directeur des Ventes"

                                }
                            },
                            "description":{
                                "text":{
                                    "es":"_Desde que implementamos este CRM, hemos reducido nuestro ciclo de ventas en un 30%. La visibilidad que tenemos ahora es increíble._",
                                    "en":"_Since we implemented this CRM, we've reduced our sales cycle by 30%. The visibility we have now is incredible._",
                                    "fr":"_Depuis que nous avons mis en place ce CRM, nous avons réduit notre cycle de vente de 30 %. La visibilité que nous avons maintenant est incroyable._"
                                }
                            }
                        },
                        {
                            "imageL":{
                                "src":"/images/social_proof_2.png"
                                },
                            "title":{
                                "text":{
                                    "es":"Sofía Ramírez, Emprendedora",
                                    "en":"Sophia Johnson, Entrepreneur",
                                    "fr":"Sophie Martin, Entrepreneure"

                                }
                            },
                            "description":{
                                "text":{
                                    "es":"_Como dueña de mi negocio, necesitaba una herramienta simple y potente. Este CRM superó mis expectativas, ¡es mi mano derecha!_",
                                    "en":"_As a business owner, I needed a simple yet powerful tool. This CRM exceeded my expectations, it's my right hand!_",
                                    "fr":"_En tant que propriétaire d'entreprise, j'avais besoin d'un outil simple mais puissant. Ce CRM a dépassé mes attentes, c'est ma main droite !_"
                                }
                            }
                        },
                        {
                            "imageL":{
                                "src":"/images/social_proof_3.png"
                                },
                            "title":{
                                "text":{
                                    "es":"Carlos Gutiérrez, Director de Marketing",
                                    "en":"Charles Brown, Marketing Director",
                                    "fr":"Charles Dubois, Directeur Marketing"
                                }
                            },
                            "description":{
                                "text":{
                                    "es":"_La integración entre marketing y ventas es perfecta. Ahora sé exactamente qué campañas generan los mejores clientes potenciales._",
                                    "en":"_The integration between marketing and sales is seamless. Now I know exactly which campaigns generate the best leads._",
                                    "fr":"_L'intégration entre le marketing et les ventes est parfaite. Maintenant, je sais exactement quelles campagnes génèrent les meilleurs prospects._"
                                }
                            }
                        },
                        {
                            "imageL":{
                                "src":"/images/social_proof_4.png"
                                },
                            "title":{
                                "text":{
                                    "es":"Ana Morales, Asesora de Negocios",
                                    "en":"Anna White, Business Consultant",
                                    "fr":"Anne Lefèvre, Consultante en Affaires"
                                }
                            },
                            "description":{
                                "text":{
                                    "es":"_Me encanta la facilidad de uso y el soporte al cliente. Ha sido un cambio total en la forma en que organizo mis proyectos y doy seguimiento a mis clientes._",
                                    "en":"_I love the ease of use and customer support. It has been a total game-changer in how I organize my projects and follow up with my clients._",
                                    "fr":"_J'adore la facilité d'utilisation et le support client. Cela a été un véritable changement dans la façon dont j'organise mes projets et fais le suivi de mes clients._"
                                }
                            }
                        }
                    ]
            }
            },
            {
                "id":"action",
                "title":{
                    "text":{
                        "es":"Elige el plan perfecto para ti",
                        "en":"Choose the perfect plan for you",
                        "fr":"Choisissez le plan parfait pour vous"
                    },
                    "classList":["has-text-centered"]
                },
                "subtitle":{
                    "text":{
                        "es":"Planes flexibles que se adaptan a las necesidades de tu negocio",
                        "en":"Flexible plans that adapt to your business needs",
                        "fr":"Des plans flexibles qui s'adaptent aux besoins de votre entreprise"
                    },
                    "classList":["has-text-centered","mb-5"]
                },
                "cards":[
                    {
                        "header":{
                            "text":{
                                "es":"Plan Básico",
                                "en":"Basic Plan",
                                "fr":"Plan de Base"
                            }
                        },
                        "content":{
                            "title":{
                                "text":{
                                    "es":"$29 USD / mes",
                                    "en":"$29 USD / month",
                                    "fr":"29 $ USD / mois"
                                    }
                                },
                            "subtitle":{
                                "text":{
                                    "es":"Ideal para pequeñas empresas que están comenzando.",
                                    "en":"Ideal for small businesses that are starting out.",
                                    "fr":"Idéal pour les petites entreprises qui débutent."
                                }
                            },
                            "description":{
                                "text":{
                                    "es":"Características:\n\n- Gestión ilimitada de contactos.\n\n- Múltiples pipelines de ventas.\n\n- Automatización de correos.\n\n- Soporte prioritario. ",
                                    "en":"Features:\n\n- Unlimited contact management.\n\n- Multiple sales pipelines.\n\n- Email automation.\n\n- Priority support.",
                                    "fr":"Caractéristiques :\n\n- Gestion illimitée des contacts.\n\n- Multiples pipelines de vente.\n\n- Automatisation des e-mails.\n\n- Support prioritaire."
                                }
                            }
                        },
                        "footer":{
                            "buttons":[
                                {
                                    "text":{
                                        "es":"¡Comienza tu prueba gratis!",
                                        "en":"Start your free trial!",
                                        "fr":"Commencez votre essai gratuit!"
                                    },
                                    "href":"/#thanks"
                                }
                            ]
                        },
                        "animation":{
                            "effect":"rubberBand"
                        }
                    },
                    {
                        "header":{
                            "text":{
                                "es":"Plan Pro",
                                "en":"Pro Plan",
                                "fr":"Plan Pro"
                            }
                        },
                        "content":{
                            "title":{
                                "text":{
                                    "es":"$59 USD / mes",
                                    "en":"$59 USD / month",
                                    "fr":"59 $ USD / mois"
                                    }
                                },
                            "subtitle":{
                                "text":{
                                    "es":"Perfecto para equipos de ventas en crecimiento.",
                                    "en":"Perfect for growing sales teams.",
                                    "fr":"Parfait pour les équipes de vente en croissance."
                                }
                            },
                            "description":{
                                "text":{
                                    "es":"Características:\n\n- Todo en el Plan Básico.\n\n- Informes avanzados.\n\n- Integraciones con terceros.\n\n- Automatización avanzada.",
                                    "en":"Features:\n\n- Everything in the Basic Plan.\n\n- Advanced reporting.\n\n- Third-party integrations.\n\n- Advanced automation.",
                                    "fr":"Caractéristiques :\n\n- Tout dans le plan de base.\n\n- Rapports avancés.\n\n- Intégrations tierces.\n\n- Automatisation avancée."
                                }
                            }
                        },
                        "footer":{
                            "buttons":[
                                {
                                    "text":{
                                        "es":"¡Comienza tu prueba gratis!",
                                        "en":"Start your free trial!",
                                        "fr":"Commencez votre essai gratuit!"
                                    },
                                    "href":"/#thanks"
                                }
                            ]
                        },
                        "animation":{
                            "effect":"rubberBand"
                        }
                    },
                    {
                        "header":{
                            "text":{
                                "es":"Plan Empresarial",
                                "en":"Business Plan",
                                "fr":"Plan d'Entreprise"
                            }
                        },
                        "content":{
                            "title":{
                                "text":{
                                    "es":"$99 USD / mes",
                                    "en":"$99 USD / month",
                                    "fr":"99 $ USD / mois"
                                    }
                                },
                            "subtitle":{
                                "text":{
                                    "es":"La solución definitiva para grandes equipos y empresas.",
                                    "en":"The ultimate solution for large teams and enterprises.",
                                    "fr":"La solution ultime pour les grandes équipes et entreprises."
                                }
                            },
                            "description":{
                                "text":{
                                    "es":"Características:\n\n- Todo en el Plan Pro.\n\n- Gestión avanzada de usuarios.\n\n- Soporte dedicado.\n\n- Capacitación personalizada.",
                                    "en":"Features:\n\n- Everything in the Pro Plan.\n\n- Advanced user management.\n\n- Dedicated support.\n\n- Personalized training.",
                                    "fr":"Caractéristiques :\n\n- Tout dans le plan Pro.\n\n- Gestion avancée des utilisateurs.\n\n- Support dédié.\n\n- Formation personnalisée."
                                }
                            } 
                        } ,
                        "footer":{
                            "buttons":[
                                {
                                    "text":{
                                        "es":"¡Comienza tu prueba gratis!",
                                        "en":"Start your free trial!",
                                        "fr":"Commencez votre essai gratuit!"
                                    },
                                    "href":"/#thanks"
                                }
                            ]
                        },
                        "animation":{
                            "effect":"rubberBand"
                        }     
                    }
                ]
            },
            {
                "id":"footer",
                "brand":{
                    "src":"/images/cj.webp",
                    "srcDark":"/images/cj-light.webp"
                },
                "content":{
                    "text":{
                        "es":"Open Source CRM | Hecho con ❤️ con CustomerJourney.js",
                        "en":"Open Source CRM | Made with ❤️ with CustomerJourney.js",
                        "fr":"CRM Open Source | Fait avec ❤️ avec CustomerJourney.js"
                    }
                },
                "privacyPolicy":{
                    "text":{
                        "es":"Política de Privacidad",
                        "en":"Privacy Policy",
                        "fr":"Politique de confidentialité"
                    },
                    "url":"https://customerjourney.ninja/privacy-policy/"
                }
            },
            {
                "id":"message",
                "message":{
                    "classList":["is-warning"],
                    "header":{
                        "text":{
                            "es":"¿Te vas? 😏",
                            "en":"You go? 😏",
                            "fr":"Tu t'en vas? 😏"
                        }
            
                    },
                    "body":{
                        "text":{
                            "es":"__Espera:__\n\n _¿Ya sacaste tu cupón de descuento?_\n\n _¡Sacalo de volada que se acaban los muebles!_",
                            "en":"__Wait:__\n\n _Have you already taken out your discount coupon?_\n\n _Take it out quickly, we're running out of furniture!_",
                            "fr":"__Attendez :__\n\n _Avez-vous déjà reçu votre coupon de réduction ?_\n\n _Sortez-le vite car les meubles sont épuisés !_"
                    }
            
                    }
                }
            }
        ]       
    }
}
    
```