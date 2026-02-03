## Overview
The SSOT JSON has 2 components: the funnel page properties and the webapp context. It has the following syntax:
```json
{
    "props":{...},
    "context":{...}
}
```
Where props defines the content, animations, and appearance of each of the macro components, and context defines the language, theme (dark, light, or system), session id, and any other necessary information to be shared across all pages of the sales funnel.

The web application handles the context, but the props are sent from the backend based on the customer's classification and stage in the customer journey. These props are generated from a neutral Single Sign-On (SSOT) and using available customer data with an AI system to achieve true hyper-personalization.