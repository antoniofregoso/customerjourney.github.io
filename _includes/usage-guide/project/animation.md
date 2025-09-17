The animations are generated with the [Animate.css](https://animate.style/) library by [Daniel Eden](https://daneden.me/) and [friends](https://animate.style/#contributorss). Animations are applied to various components of macro-components such as buttons, title, subtitle, images, content, etc.

## Attributes to animate components
### Efect
#### Attention seekers
bounce, flash, pulse, rubberBand, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat.

#### Back entrances
backInDown, backInLeft, backInRight, backInUp.

#### Back exits
backOutDown, backOutLeft, backOutRight, backOutUp.

#### Bouncing entrances
bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp.

#### Bouncing exits
bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp.

#### Fading entrances
fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig, fadeInTopLeft, fadeInTopRight, fadeInBottomLeft, fadeInBottomRight.

#### Fading exits
fadeOut, fadeOutDown, fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig, fadeOutTopLeft, fadeOutTopRight, fadeOutBottomRight, fadeOutBottomLeft.

#### Flippers
flip, flipInX, flipInY, flipOutX, flipOutY.

#### Lightspeed
lightSpeedInRight, lightSpeedInLeft, lightSpeedOutRight, lightSpeedOutLeft.

#### Rotating entrances
rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight.

#### Rotating exits
rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight.

#### Specials
hinge, jackInTheBox, rollIn, rollOut.

#### Zooming entrances
zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp.

#### Zooming exits
zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp.

#### Sliding entrances
slideInDown, slideInLeft, slideInRight, slideInUp.

#### Sliding exits
slideOutDown, slideOutLeft, slideOutRight, slideOutUp.

### Speed
slow, slower, fast, faster.
### Repeat
1, 2, 3, infinite
### Delay
2s, 3s, 4s, 5s.

## Example

```json
{
     "animation":{
            "effect":"fadeIn",
            "speed":"slower",
            "repeat":"2",
            "delay":"4s"
            } 
}
```
Animations use IntersectionObserver and are activated and deactivated by the user's scrolling.
They are enabled as follows in src/index.js:
```javascript
App.run();
whithAnimations();
```