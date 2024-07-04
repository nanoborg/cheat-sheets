# Environmental Variables

When using **_API_** keys in REACT it's a good idea to hide them so no one else can access them. One way this can be done is with `.env` (Environmental Variables)

1. Create `.env` file in the root of the project.

2. Variable name must start with `REACT_APP_`

3. Complete syntax:

```
REACT_APP_APP_NAME = api_key_here
```

4. The server must be reset to take effect.

5. Access the api key by `process.env.REACT_APP_APP_NAME`

<br>
<br>
<br>

## Using the dotenv approach

1. Install **_dotenv_** `npm install --save dotenv`, this will add dotenv to the dependencies in the package.json

2. Create a file in the root of the project called `.env.local` (accept system warnings)

3. Same process as before:
    Variable name must start with `REACT_APP_`

    Complete syntax:

    ```
    REACT_APP_APP_NAME = api_key_here
    ```

4. Reset the development server

5. Point the application to the dotenv file
    ```
    import dotenv from 'dotenv'
    dotenv.config()
    ```