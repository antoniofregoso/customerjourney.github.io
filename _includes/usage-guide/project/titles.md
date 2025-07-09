Titles are header components for most macro components. They are generated within a div with the [Bulma content class](https://bulma.io/documentation/elements/content/), so without adding classes, they already have a Bulma appearance. [Classes can be added](https://bulma.io/documentation/helpers/typography-helpers/) to modify their appearance.

## Types of titles
- caption: Short sentence about the title.
- title: The main message.
- subtitle: Message under the title to reinforce the idea.

## Components
- Multi-language text.
- classList: Bulma or custom class..
- animation: It is configured in the [CJ style](/usage-guide/project/animations/).



## Example

```json
{
    "caption":{
            "text":{
                "es":"No son anteojos. Es una declaración silenciosa.",
                "en":"They are not glasses. It's a silent statement.",
                "fr":"Ce ne sont pas des lunettes. C'est une déclaration silencieuse."
            },
            "animation":{
                "effect":"fadeIn",
                "speed":"slower"
            }   
        },
    "title":{
        "text":{
            "es":"Diseñados para los que no necesitan pedir atención. La imponen.",
            "en":"Designed for those who don't need to ask for attention. They impose it.",
            "fr":"Conçus pour ceux qui n'ont pas besoin de demander de l'attention. Ils l'imposent."
        },
        "classList":["is-size-2"],
        "animation":{
            "effect":"fadeIn"
        }
    },
    "subtitle":{
        "text":{
            "es":"Hechos a mano. Inspirados en el poder. Llevados por quienes deciden las reglas.",
            "en":"Handmade. Inspired by power. Worn by those who set the rules.",
            "fr":"Faits à la main. Inspirés par le pouvoir. Portés par ceux qui décident des règles."
        },
        "classList":["is-size-4"],
        "animation":{
            "effect":"fadeIn",
            "speed":"slower"
        }  
    }
}
```

![Titles](/assets/images/usage-guide/titles.webp)