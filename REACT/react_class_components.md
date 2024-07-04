# React Components

In react the idea is to make small reusable blocks of code called components. They are the basic building blocks of react.

A web page can be broken up into different components allowing for different styling and different behaviors. 

Unlike using a single HTML file to mark up a whole webpage, components have more integration and less separation of HTML, CSS an JS. Instead of creating a few large files, a web app will be organized into small reusable components.

Keeping components organized is best practice, so it's good to break up a project and have 1 **_Class_** or **_Functions_** per file so that you can easily find it and import it.

**_Components_** will only show up when they are called.

When using react, building **_components_** will be the main front-end task. Because they are so encapsulated, **_components_** make it easy to reuse the code, test and separate concerns.

---

<br>

## Syntax

###  `Import`

```
import React, {Component} from 'react'
```

This imports the **_React_** methods and the **_Component_** features from the **_'react'_** library

<br>
<br>

### `Class, Extends`
``` 
Class NameOfClass extends Component {
    render () {

        return (
            <h1> Some text </h1>
        )
    }
}
```

This will create a new **_Class_** with a new name, using **_extends_** means it will inherit the capabilities of React.Component

<br>
<br>


### `Render`
``` 
    render () {

        return (
            <h1> Some text </h1>
        )
    }
```
Every **_Component_** at a minium has a **_render()_** method.

* The **_render()_** method controls what is rendered, or displayed on the screen.
* The rendering syntax looks just like **_HTML_**, It's actually **_JSX_**

<br>
<br>


### `Export`
``` 
export default ClassName
```

This will expose the **_ClassName_** to other files. 

So if the new class is in **_App.js_**, then **_App.js_** will need to be **_imported_** and with that comes access to the **_Class_**.

### `Default`
If this file has been imported and the app can't find any what it needs, It will **_default_** to the **_ClassName_**

* Only one default is allowed per file.

