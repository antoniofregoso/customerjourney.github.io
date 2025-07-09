## Description
MultiSlider is a macro component based on [Swiper](https://swiperjs.com/). It allows you to generate one or more stacked sliders, each completely independent in their configuration. Its appearance can be modified according to the bulma classes.

## Components
- id _**required**_.
- caption.
- title.
- subtitle.
- swipers.

Swipers are a set of objects that represent a slide swiper. Sliders stack on top of each other and can be completely different.

### Swipers
Each swiper has two components: setup and slides.

## Setup options
All configuration attributes are optional, but the "setup":{} attribute must be declared.
- **navigation**{boolean}: Add navigation arrows.
- **navigationColor**{string}: Color in hexadecimal or rgb format.
- **pagination**{string}:
    1. dots: One point for each slide located under the swiper.
    2. fraction: n/total.
    3. progressbar: It is located at the top of the swiper.
    4. dynamic: Few points of different sizes.
    5. bullets: Large numbered balls. They look like pool balls.
- **paginationColor**{string}: Color in hexadecimal or rgb format.
- **paginationGap**{boolean}: Adds 30 pixels of additional space to navigation indicators.
- **cards**{boolean}: Change image for Bulma cards.
- **autoplay**{integer}:Duration of each slide in milliseconds.
- **loop**{boolean}:After the last slide comes the first one.
- **spaceBetween**{integer}:
- **slidesPerView**{integer}: Number of images displayed on the screen in the slider. On mobile phones, only one image can be displayed.
- **speed**{integer}:Speed ​​in milliseconds.
- **centeredSlides**{boolean}:
- **parallaxImage**{string}:
- **effect**{string}:
    1. default:
    2. fade:
    3. coverflow:
    4. Parallax:

## Slides
There are three types of slides: an image with optional text above it, product cards, and text only with a background image for all slides.
### Image
#### Simple
```json
{
    "image":{
        "src":"",
        "ratio":"is-16by9"
    }
}
```
#### With text over the image
```json
{
    "image":{
        "src":"",
        "ratio":"is-16by9"
    },
    "content":{
        "title":{
            "text":{},
            "classList":[]
            },
        "subtitle":{
            "text":{},
            "classList":[]
            },
        "description":{
            "text":{},
            "classList":[]
            }
    }
}
```
### Parallax

```json
{
    "title":{
        "text":{},
        "classList":[]
    },
    "subtitle":{
        "text":{},
        "classList":[]
    },
    "description":{
        "text":{},
        "classList":[]
    }
}
```

### Cards
```json
{
    "id":"sdsf",
    "header":{
        "text":{},
        "classList":[]
    },
    "image":{
        "src":"",
        "classList":[]
    },
    "content":{
        "title":{
            "text":{},
        "classList":[]
        },

        "subtitle":{
            "text":{},
        "classList":[]
        },
        "description":{
            "text":{},
        "classList":[]
        }
    },
    "footer":{
        "buttons":[
            {
                "id":"",
                "text":{}
            }
        ],
        "classList":[]
    }
}
```


```json
{
    "id":"",
    "caption":{
    "text":{ },
    "classList":{},
    "animation":{}   
    },
    "title":{
    "text":{},
    "classList":[],
    "animation":{}
    },
    "subtitle":{
    "text":{},
    "classList":[],
    "animation":{}  
    },
    "swipers":[
    {
        "id":"slider1",
        "setup":{
            "cards":true,
            "effect":"coverflow",
            "navigation":true,
            "navigationColor":"#ffb70f",
            "pagination":"bullets",
            "paginationColor":"#ffb70f",
            "paginationGap":true
        },
        "slides":[]
    }]
}
```