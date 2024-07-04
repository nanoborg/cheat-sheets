# Deployment 

## Deploying for React with a server file

1. ### Make sure the `.gitignore` is set up. 
    Files & Folders not to upload:

* `/node_modules` directory
* `.env`
* `/build` directory 

<br>
<br>

2. ## Server Setup
    React is great for development, but this is not how machines read code. This will need to be compiled into a static `/build` directory that will be accessed and served through the `server.js` file. 

    <br>

    ### Ports:
    As we develop locally we can manually set the **_ports_** to send & listen on. In **_Heroku_** there will be an unknown amount of ports being used so we will never know which **_port_** to set, They way to get around this is by setting  an **_OR_** variable.

    This will read from left to right, looking (--> right) if (left !<--) is not true   

    `const port = process.env.PORT || 3001;`
    
    <br>

    ### Build & Path

    To setup:  
    * Import path from js
    ```
    const path = require("path")
    ```

    * incase you need to redirect
    ```
    const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
    ```

    * if the server is not serving the whole app, create the variable ("production") in heroku
    ```
    const production = process.env.NODE_ENV;
    ```

    * look for the production variable, if true set the static directory to ./build & set the home page to run "index.html" from the ./build folder.
    ```
    if (production === "production") {
        app.use(express.static(path.join(__dirname, "./build")));

        app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
    }
    ```

<br>
<br>

3. ## React Setup
    ### Package json
    Continuing on from the server setup, react will need to craete a **_./build_** directory for the server to be able to use. There will need to be some configuration on the **_package.json_**.

    ### Change `package.json` scripts
    * `"start": "react-scripts start"` to --> `"start": "node server.js"`
    * Create `"dev": "nodemon server.js"` for further development
    * Alternatively set `"dev": "concurrently \"nodemon server.js\" \"npm start\" ",` for running locally with `npm run dev`

    <br>

    ### Create ./build
    * Run `npm run build`, This will compile all the changes & settings ready to push to heroku.   
    Note: This will need to be done when changed have been made locally need to be pushed to heroku!


<br>
<br>

4. ## Heroku Setup
    ### CLI Process
    * Login into **_Heroku_** through the CLI:   
    `heroku login`

    * Create New Heroku project:  
    `heroku create app_name`

    * Go through the git process:  
    `add, commit`

    * Add remote:  
    `heroku git:remote -a app_name`

    * Push to heroku:   
    `git push heroku master`

    <br>

    ### Set environmental variables
    *  Within config vars, set all the environmental variable needed that match the react project:


    ![config vars](./images/Screen%20Shot%202022-04-07%20at%201.14.42%20pm.png)

