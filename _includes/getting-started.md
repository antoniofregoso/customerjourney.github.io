Start playing with the landing page demo. It's very easy.
## 1. Prepare your browser.
Install the  extension to monitor state changes.
- [In Chrome](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).
- [In Firefox](https://addons.mozilla.org/es-ES/firefox/addon/reduxdevtools).

## 2. Install the demo.

```bash
npx @customerjourney/create-cj-demo {app-name}
```
## 3. Go to the project directory.
```bash
cd {app-name}
```
## 4. Install the dependencies.
```bash
npm install
```
## 5. Init the application.
```bash
npm run init
```
## 6. Enjoy.
Go to http://localhost:8000/

![Texto de ejemplo que aparece si la imagen falla](/assets/images/cjjs-demo.webp)

## 7. Observe status changes as you navigate the landing page.
Open the Redux DevTools extension in your browser and watch the magic happen.

![Texto de ejemplo que aparece si la imagen falla](/assets/images/redux.webp)

## 8. Modify the code.
```bash
npm run watch
```
Inside the src/app/data/home.json file make changes and observe the results.
## 9. Integration with AI.
The home.json object describes the landing page's layout, content, and animations, but in production, it's generated in the backend and sent to the application based on route parameters, query parameters, status, and user-specific information from an enterprise management system, such as Odoo. An AI agent can generate a hyper-personalized user experience with all this information using tools like n8n.
## 10. Open Source Project.
This is an open source project licensed under the GPLv3. We invite you to support this project to turn it into a powerful tool for hyper-personalizing the user experience for sales funnels at: [Sponsor](/sponsor/).