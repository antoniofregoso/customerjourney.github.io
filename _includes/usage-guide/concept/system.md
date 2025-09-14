## Imputs

1. **Query parameters**: The app can accept query parameters in the URL to customize its behavior or display specific data. For example, you might use a query parameter to filter results or set a default value for a form field.
2. **Path parameters**: The app can also accept path parameters in the URL to identify specific resources or entities. For example, you might use a path parameter to specify a user ID or a product ID.
3. **user behavior**: The app can respond to user behavior, such as clicks, form submissions, or other interactions. This allows the app to provide a dynamic and interactive experience for users.
4. **App state**: The app can maintain its own state, which can be used to store information about the user's session, preferences, or other data. This state can be updated based on user interactions or other events.
5. **External data sources**: app The can integrate with external data sources, such as APIs or databases, to retrieve or store information. This allows the app to provide up-to-date and relevant data to users.
6. **AI-generated content, images, design and animation**: The app can leverage AI technologies to generate content, images, design elements, and animations. This can enhance the user experience by providing personalized and dynamic content.

## Outputs
1. **n8n Integration**: Data transfer via webhook to trigger automations with AI agents.
2. **Odoo Integration**: Integration with Odoo models via Json RPC API using @customerjourney/cj-odoo
3. **User Behavior**: User behavior is stored in the app state and can be sent to the backend along with route parameters and queried to generate hyper-personalized content and design by AI.