# HTML history

## What is HTML?
* Hyper
* Text
* Markup
* Language

It was initially created for the purpose of publishing documents, which is why the tags are similar to the typical elements you see in a word document.

## HTML Basic Structure
* !DOCTYPE html -  
This will tell the browser its html 5

* Head -  
It will not be visible to the user. This is where meta data will go like language, fonts, links to styesheets, tab title. Content can still render without the head.

* Body -  
This is where all the content will be placed the can viewed by the end user. 

* Script -
This can be placed in the head or in the body, but!! If the script needs to access a element it's better placed at the bottom so there is elements render first. 


``` 
<!DOCTYPE html>
    <html>
        <head>
            <title> Tab Title For Web Page </title>
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <h1> Heading Content </h1>
            <p>
                This is where the main content goes
            </p>

        <script>
            // Javascript at the end of the body so any elements needs can load first
        </script>
        </body>
    </html>
```
