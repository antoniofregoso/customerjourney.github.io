All macro components of type fom have a form component with the same properties as described here.
## Elements
- form 
- name
- function
- email
- phone
- company
- subject
- description
- terms
- termsLink
- submit
- cancel

## Default attributes and properties
```json
{"form":{
    {
        "name":{
            "label":{
                "es":"Nombre",
                "en":"Name",
                "fr":"Nom"
            },
            "help":{
                "es":"El campo Nombre es obligatorio.",
                "en":"The Name field is required.",
                "fr":"Il est requis de compléter le champ correspondant au nom."
            }
        },
        "function":{
            "label":{
                "es":"Puesto de Trabajo",
                "en":"Job Position",
                "fr":"Poste"
            },
            "help":{
                "es":"El campo Puesto de Trabajo es obligatorio.",
                "en":"The Job Position field is required.",
                "fr":"Le champ Poste est obligatoire."
            }
        },
        "email":{
            "label":{
                "es":"Correo Electrónico",
                "en":"e-mail",
                "fr":"e-mail"
            },
        "help":{
            "es":"El campo Correo Electrónico es obligatorio.",
            "en":"The Email field is required.",
            "fr":"Le champ E-mail est obligatoire."
        },
        "help2":{
            "es":"El correo electrónico es invalido.",
            "en":"Email is invalid.",
            "fr":"Le courriel est invalide."
        }
        },
        "phone":{
            "label":{
                "es":"Teléfono",
                "en":"Phone",
                "fr":"Téléphone"
            },
            "help":{
                "es":"El campo Teléfono es obligatorio.",
                "en":"The Telephone field is required.",
                "fr":"Le champ Téléphone est obligatoire."
            },
            "help2":{
                "es":"El Número Telefónico es inválido.",
                "en":"The Telephone Number is invalid.",
                "fr":"Le numéro de téléphone n'est pas valide."
            }
        },
        "company":{
            "label":{
                "es":"Compañía",
                "en":"Company",
                "fr":"Entreprise"
            },
            "help":{
                "es":"El campo Compañia es obligatorio.",
                "en":"The Company field is required.",
                "fr":"Le champ Société est obligatoire."
            }
        },
        "subject":{
            "label":{
                "es":"Asunto",
                "en":"Subject",
                "fr":"Objet"
            },
            "help":{
                "es":"El campo Asunto es obligatorio.",
                "en":"The Subject field is required.",
                "fr":"Le champ Objet est obligatoire."
            }
        },
        "description":{
            "label":{
                "es":"Descripción",
                "en":"Description",
                "fr":"Description"
            },
            "help":{
                "es":"El campo Descripción es obligatorio.",
                "en":"The Description field is required.",
                "fr":"Le champ Description est obligatoire."
            }
        },
        "terms":{
            "text":{
                "es":"Estoy de acuerdo con los",
                "en":"I agree to the",
                "fr":"J'accepte les"
            },
            "help":{
                "es":"Tienes que aceptar los Términos y Condiciones.",
                "en":"You have to accept the Terms and Conditions.",
                "fr":"Vous devez accepter les termes et conditions."
            },
        "required":true
        },
        "termsLink":{
            "text":{
                "es":"términos y condiciones",
                "en":"terms and conditions",
                "fr":"termes et conditions"
            }
        },
        "submit":{
            "text":{
                "es":"Enviar",
                "en":"Submit",
                "fr":"Soumettre"
            }
        },
        "cancel":{
            "text":{
                "es":"Cancelar",
                "en":"Cancel",
                "fr":"Annuler"
            }
        },
        "context":{
            "lang":"en"
        }
    }
}}
```

## Form
### Options
- **classList**: Array of bulma and custom classes.
- **animation**: Animation of the completed form.
- **code**: Default country code in the phone field in 2-letter format._US_, _MX_, etc.
- **phoneCodes**: Array of country codes to limit the selection to certain countries.

## Imput fields
Fields function, email, phone, company, subject and description are controlled in the same way.
### Options
- **disabled**{boolean}:If true the field is not generated.
- **animation**{object}: Animation [description](/usage-guide/project/animations/).
- **label**{object}:[Multitext](/usage-guide/project/i18n/).
- **placeholder**{object}:[Multitext](/usage-guide/project/i18n/).
- **required**{boolean}:
- **help**{object}:[Multitext](/usage-guide/project/i18n/) Error message in required fields.
- **help2**{object}:[Multitext](/usage-guide/project/i18n/). Bad format error message in phone and email fields. Error messages and label text are default for Spanish, English, and French.

## terms
Checkbox to accept terms and conditions.
### Options
- **disabled**{boolean}:If true the field is not generated.
- **text**{object}:[Multitext](/usage-guide/project/i18n/).
## termsLink
### Options
- **url**{string}: Link to the terms and conditions page.
- **text**{object}:[Multitext](/usage-guide/project/i18n/).

## Buttons
The submit and cancel buttons are controlled in the same way.

### Options
- **animation**{object}: Animation [description](/usage-guide/project/animations/).
- **classList**: Array of bulma and custom classes.
- **text**{object}:[Multitext](/usage-guide/project/i18n/).
