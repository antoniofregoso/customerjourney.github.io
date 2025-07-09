## Components
- id _**required**_.
- caption
- title
- subtitle
- calendar
- form

## Default attributes and properties
```json
{
    "eventName":"user:click-form-appoinment",
    "form":{
        "function":{
            "disabled":true
        },
        "company":{
            "disabled":true
        },
        "subject":{
            "disabled":true
        },
        "description":{
            "disabled":true
        }
    },
    "calendar":{
        "initialTime":9,
        "finalTime":17,
        "deltaTime":60
    }
}
```
## Title
```json
{
    "title":{
        "text":{
            "es":"Agenda tu cita",
            "en":"Schedule your appointment",
            "fr":"Planifiez votre rendez-vous"
        },
        "classList":["is-size-2"],
        "animation":{
            "effect":"fadeIn"
        }
    }
}
```
## Calendar

### Options

- **disablePastDays**{boolean}: Disables days before the current date.
- **deltaDays**{integer}: Number how many days is the range of selectable dates from the current day.
- **initialTime**{integer}: Appointments start time in 24-hour format.
- **finalTime**{integer}: Appointments end time in 24-hour format.
- **deltaTime**{integer}: Interval of minutes between appointments in minutes.
- **availableDates**{integer}: Array of dates in _YYYY:MM:DD_ format.

### Basic configuration
```json
"calendar":{
        "initialTime":9,
        "finalTime":17,
        "deltaTime":30
    }
```

### Interval of business days
```json
{
    "disablePastDays":true,
    "deltaDays":15,
    "initialTime":9,
    "finalTime":17,
    "deltaTime":30
}
```
### Available Dates

```json
{
    "initialTime":9,
    "finalTime":17,
    "deltaTime":45,
    "availableDates":[
        "2025-07-01",
        "2025-07-02",
        "2025-07-03",
        "2025-07-04",
        "2025-07-05"
    ]
}
```
## Form

[Form Configuration](/documentation/forms/)

## Example
```json
{
    "id":"appoinment",
    "eventName":"submitappoinment",
    "title":{
        "text":{
            "es":"Agenda tu cita",
            "en":"Schedule your appointment",
            "fr":"Planifiez votre rendez-vous"
        },
        "classList":["is-size-2"]
    },
    "calendar":{
        "disablePastDays":true,
        "deltaDays":15,
        "initialTime":9,
        "finalTime":17,
        "deltaTime":30
    },
    "form":{
        "code":"MX",
        "terms":{
            "disabled":true
        }
    }
}
```


![FormAppoinment View](/assets/images/docs/form_appoinment.webp)
