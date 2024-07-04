# Deployment

1. Choose to set up either a **_Static Site_** or **_Web Service_**

2. Connect render to github repo / project

3. *Branch* `master`

4. Set Root *Directory* path to that of what which you have in your repo

5. Set **_Build Filter_** to only build when there is a difference. Specially handy when having a monorepo. This way if the backend is updated the frontend wont have to rebuild.

* included paths - `client/**/*.js`
* ignored paths - `client/**/*.test.js`
    
6. Set **_Build Command_**, This will run from the root of the directory that you have set. For instance with a client side application you would have it set to `nmp run build`. The build command cannot be empty so for a node server, set the package.json to  `"build": ""`. This will run the build command but not build anything. 

7. Set **_Publish Directory_**, Set a path for the `build` folder in the root directory.

8. Set **_Auto Deploy_**, this will automatically deploy on every push to the remote repo.

9. Set **_Environmental Variables_**, `.gitignore` is set to ignore files like .env which is where keys and other secrets will be stored. Don't forget to set them so *Render* can use them for the build.