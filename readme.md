binar-challengech5


Step-by-step to run the app
Clone the repository.
Open directory.
Run in terminal : npm install to install all required packages that listed in packages.json.
Run Server in terminal : npm start
To test if the routes work, try to click the 1st image of carousel (Rock Paper Scissor image).
Try to go to undefined routes (ex: localhost:3000/abcde or localhost:3000/12345) and you will be redirected into 404 page.
Packages used :
Babel : Transcompiler
Express : Node.js Framework
EJS : View Engine
ESLint : Linter - airbnb based
Morgan : Logger (see the log on node console)
Folders :
controllers -> act as controller in MVC pattern.
models -> act as data model in MVC pattern.
routes -> web routes
views -> act as views in MVC pattern using EJS.
public -> Serve static files (css, images, js)
