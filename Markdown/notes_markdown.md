# What can be created with markdown

## Index

- [Headings](#headings)
- [Text Decoration](#text-decoration)
- [Formatting](#formatting)
- [Links & Anchors](#links--anchors)
- [Lists](#lists)
- [Images](#images)
- [Tables](#tables)
- [Collapsible Section](#collapsible-section)

<br>
<br>
<br>


## Headings
> Heading One and Heading Two will have **_Horizontal_** lines underneath
# Heading One - Largest Heading with Horizontal Rule
## Heading Two - Retains Horizontal Rule
### Heading Three
#### Heading Four
##### Heading Five
###### Heading Six

<br>

As a general rule don't use Heading One or Heading Six more than once.

[Index](#index)

<br>
<br>
<br>

## Text Decoration

I love writhing in **bold** 

This is also also __bold__

This is how you display *italic*

This is how you make text ***bold and italic***

or 

This can also write it like this **_bold and italics_** to make it more legible. 

~~strike through~~ = `~~strike through~~`

<!-- Mark / Highlight text -->
<mark style="background-color: yellow">Marked text</mark>

### Escaping Characters
To avoid markdown from being confused by special characters by using `\`

\*italic\* = `\*italic\*`

[Index](#index)

<br>
<br>
<br>

## Formatting

### Block Quotes

> block quote
>
> with ***multiple*** paragraphs
>
> with ***multiple*** paragraphs

<br>

### Nested Block Quotes
> Blockquote
>
>> Nested Blockquote
>>> Nested, Nested

<br>

## Paragraphs / Soft Breaks

When needing to write paragraphs such as..

Do I contradict myself? 
Very well then I contradict myself,
(I am large, I contain multitudes.)

Should look like this:

> Do I contradict myself?  
Very well then I contradict myself,  
(I am large, I contain multitudes.)  

It will render with the newlines. This requires a soft break at the end of each line. This achieved by using a ***double space***

<br>

## Checkboxes

* Checkboxes usually don't render in vsCode unless they have this extension [**_Markdown Checkboxes_**](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-checkbox 'MarkDown Checkbox'). GitHub will utilise this feature.

- [ ] Mercury
- [x] Venus
- [ ] Earth
- [x] Mars

<br>

## Horizontal Rule
<br>

`---` <---- syntax

---

[Index](#index)

<br>
<br>
<br>

## Links & Anchors
To show a link, use the same method as image, instead of file path use the link

`[ weblink ](https://www.markdownguide.org/)`  
[ weblink ](https://www.markdownguide.org/)


`[ weblink ](https://www.markdownguide.org/ "Title on hover")`  
[weblink](https://www.markdownguide.org/ "Title on hover")


### Reference Links

> Can also use referenced tags for multiple links with the same address, this way you only have to update the one tag. It will not be shown on the rendered Markdown

<!-- reference link set up -->
[website]: www.google.com "Tittle on hover" 
[ google ][ website ] <-- reference link  

`[ google ][ website ]` = `[website]: www.google.com "Tittle on hover"`


### Anchor Links
Anchor links will be useful to provide a shortcut to different headings, allowing for an index at the start of the document.

* implicit #id
* When setting the path, `&` = `--`, e.g. `[Links & Anchors](#links--anchors)`
* lower-case with hyphen

syntax: `[Anchor Title](#headingtitle)`

* The heading title must be *lowercase* with no space!


[Index](#index)

<br>
<br>
<br>


## Lists

### Unordered list (Dot points)
* First item
* Second item
<br>
<br>

#### Dot point with indents
* First item
* Second item
    * Second item, first indent
* 2021\. Having a backslash after a number escapes the period!

* First line
* Second line

    Indented, to preserve the continuity

* Third item
<br>
<br>

#### Dot points with blockquote
* First line
* Second line
    > indented blockquote
* Third line

<br>
<br>


### Ordered Lists
1. First item
2. Second item

#### Ordered Lists & Nested lists
> 1. First item
> 2. Second item
>       1. Nested Second item
> 3. Third item

#### Ordered Lists With Code Block
<!--  -->
1.      tab twice
2.      tab twice

<br>
<br>


<!-- Mix of everything -->
## Nested qoutes with dot points 

> Blockquote
> * dot point
> 1. 
> 2.
> *italic* or **bold** or ***both***

<br>
<br>


<!-- Code blocks -->
### Code blocks
---
#### Inline Code

``` 3 backtick's in a row is used for inline code ```

<br>

#### Multiple Lines Of Code

#### Code block (tab or backtick's)

    <html>
        <head>
            <body>
                <title>
                </title>
            </body>
        </head>

or

```
    <html>
        <head>
            <body>
                <title>
                </title>
            </body>
        </head>
```
<br>


### Dot point with nested code block
* First point

        code block
<br>

### Numbered List with Nested code block
1. Numbered list.
2. Need to tab twice for code blocks in a numbered list. 

        <html>
            <head>
                <title>Test</title>
            </head>
3. Continue with the list
<br>
<br>


## Images

### Images with a File path

> **For security reasons, the markdown preview will only load resources from the following places:**
<br>

* If you open a workspace / folder, you can load resources from inside those folders.

* If you open a single md file, you can load resources that are in the same directory (or child directories) as the md file.

* Best to place all the files in the one directory like assets. Access with relative path: ./image.png, will also work with out ./ (root of current directory)

* The image `filename` has to have `no_spaces.jpeg`

    `file image.jpeg` <-- this wont work
<br>
<br>

1. Open the file containing the Linux mascot. 
2. Marvel at its beauty.

<br>
<br>

<!-- example -->
`![Tux, the Linux mascot](./assets/tux.png "Title of image")`

![Tux, the Linux mascot](./assets/tux.png "Title of image")

<br>
<br>

## Images with a web address
<br>

<!-- example -->
`![Tiger](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg "Title of image")`

![Tiger](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg "Title of image")

<br>
<br>

<!-- example -->
`![markdown logo](./assets/logo_markdown.jpg "Markdown Logo")`

![markdown logo](./assets/logo_markdown.jpg "Markdown Logo")

<br>
<br>

**Reference Images**

Just like reference links you can make reference images.

`![car][Golf]`

![car][Golf]

[Golf]: https://performancedrive.com.au/wp-content/uploads/2014/12/2014-Volkswagen-Golf-R-Pure-White.jpg "Title of image = golf"

<br>
<br>



## Tables

| Syntax    | Description   |
| ---       | ---           | 
| Header    | Title         |
| Paragraph | Text          |

use ***hyphen*** __Not__ *underscore*

<br>

### Tables With Alignment

> Can format the text in the table:

| text to the ***left***    | text in the ***center***  | text to the ***right***   |
| :-                        | :-:                       | -:                        |
| ``` code block   ```      | ``` code block 2 ```      | ``` code block 3 ```      |
| left                      | center                    | right                     |

[Index](#index)

<br>
<br>
<br>

&#124; <---- pipe symbol in html

> ```&#124; ```

each number after **_&#_** represents a special character.

``` <html>
        <head>
            <body>
                <title>
                </title>
            </body>
        </head>
 ```


<br>


## Collapsible Section
This will require tags, Make sure to have an empty line after ``` <summary> & <details> ```. 

``` 
<details>
<summary> Click to expand! </summary>

<!-- empty line -->
## Heading
1. Numbered List
2. Second Item
    * First dot point
    * Second dot point
</details> 
```

<details>
<summary> Click to expand! </summary>

## Heading
1. Numbered List
2. Second Item
    * First dot point
    * Second dot point
</details>

[Index](#index)