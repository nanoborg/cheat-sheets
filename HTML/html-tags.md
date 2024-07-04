# HTML - Tags

## Index

- [Layout Tags](#layout-tags)
- [Text Tags](#text-tags)
- [Forms & Input Tags](#forms-and-input-tags)
- [Media Tags](#media-tags)
- [Interactive Elements](#interactive-elements)
- [Other Tags](#other-tags)

<br>
<br>

## Layout Tags

| Tag               | Attributes                            | Description                                                                   |
|---------------    |---------------------------------      |-----------------------------------------------------------------------------  |
| `<div>`           | `style`                               | Defines a division or section in a document.                                  |
| `<span>`          | `style`                               | Defines a section in a document, often used for styling.                      |
| `<header>`        | `style`                               | Defines a header for a document or section.                                   |
| `<footer>`        | `style`                               | Defines a footer for a document or section.                                   |
| `<main>`          | `style`                               | Defines the main content of a document.                                       |
| `<section>`       | `style`                               | Defines a section in a document.                                              |
| `<article>`       | `style`                               | Defines an independent, self-contained content.                               |
| `<aside>`         | `style`                               | Defines content aside from the content it is placed in (like a sidebar).      |
| `<nav>`           | `style`                               | Defines a section for navigation links.                                       |
| `<figure>`        | `style`                               | Specifies self-contained content, like illustrations, diagrams, or photos.    |
| `<figcaption>`    | `style`                               | Defines a caption for a `<figure>` element.                                   |
| `<details>`       | `open`, `style`                       | Defines additional details that the user can view or hide.                    |
| `<summary>`       | `style`                               | Defines a visible heading for a `<details>` element.                          |
| `<table>`         | `style`                               | Defines a table.                                                              |
| `<tr>`            | `style`                               | Defines a row in a table. Used inside `<table>`.                              |
| `<th>`            | `style`, `scope`, `colspan`, `rowspan`| Defines a header cell in a table. Used inside `<tr>`.                         |
| `<td>`            | `style`, `colspan`, `rowspan`         | Defines a cell in a table. Used inside `<tr>`.                                |
| `<thead>`         | `style`                               | Groups header content in a table.                                             |
| `<tbody>`         | `style`                               | Groups body content in a table.                                               |
| `<tfoot>`         | `style`                               | Groups footer content in a table.                                             |
| `<colgroup>`      | `style`, `span`                       | Specifies a group of one or more columns in a table for formatting.           |
| `<col>`           | `style`, `span`                       | Specifies column properties for each column within a `<colgroup>`.            |

* [Index](#index)


<br>
<br>

## Text Tags

| Tag               | Attributes         | Description                                                           |
|---------------    |------------------  |-------------------------------------------------------------------    |
| `<p>`             | `style`            | Defines a paragraph.                                                  |
| `<h1>` to `<h6>`  | `style`            | Define HTML headings, from largest `<h1>` to smallest `<h6>`.         |
| `<strong>`        | `style`            | Defines important text. Renders as bold.                              |
| `<b>`             | `style`            | Defines bold text.                                                    |
| `<em>`            | `style`            | Defines emphasized text. Renders as italic.                           |
| `<i>`             | `style`            | Defines italic text.                                                  |
| `<u>`             | `style`            | Defines underlined text.                                              |
| `<cite>`          | `style`            | Defines a reference to a piece of creative work                       |
| `<mark>`          | `style`            | Defines highlighted text.                                             |
| `<small>`         | `style`            | Defines smaller text.                                                 |
| `<del>`           | `style`            | Defines deleted text (strikethrough).                                 |
| `<ins>`           | `style`            | Defines inserted text (underline).                                    |
| `<sup>`           | `style`            | Defines superscripted text, above text like E = mc²                   |
| `<sub>`           | `style`            | Defines subscripted text, bellow text like CO₂                        |
| `<blockquote>`    | `cite`, `style`    | Defines a section quoted from another source.                         |
| `<pre>`           | `style`            | Defines preformatted text. Preserves both spaces and line breaks.     |
| `<code>`          | `style`            | Defines a piece of computer code.                                     |
| `<br>`            | None               | Inserts a single line break.                                          |
| `<hr>`            | `style`            | Defines a thematic change in the content.                             |

* [Index](#index)


<br>
<br>

## Forms and Input Tags

| Tag           | Attributes                                                                            | Description                                                       |
|---------------|--------------------------------------------------------------------------------       |-----------------------------------------------------------------  |
| `<form>`      | `action`, `method`, `style`                                                           | Defines a form for user input.                                    |
| `<input>`     | `type`, `name`, `value`, `placeholder`, `style`, `checked`, `disabled`, `readonly`, `required`, `maxlength`, `min`, `max`, `step`  | Defines an input control.              |
| `<textarea>`  | `name`, `rows`, `cols`, `style`, `placeholder`, `maxlength`, `readonly`, `required`   | Defines a multi-line text input control.                          |
| `<button>`    | `type`, `onclick`, `style`, `disabled`, `name`, `value`                               | Defines a clickable button.                                       |
| `<select>`    | `name`, `style`, `multiple`, `size`, `disabled`, `required`                           | Defines a drop-down list.                                         |
| `<option>`    | `value`, `selected`, `style`, `disabled`                                              | Defines an option in a drop-down list. Used inside `<select>`.    |
| `<label>`     | `for`, `style`                                                                        | Defines a label for an `<input>` element.                         |
| `<fieldset>`  | `style`, `disabled`                                                                   | Groups related elements in a form.                                |
| `<legend>`    | `style`                                                                               | Defines a caption for a `<fieldset>`.                             |
| `<datalist>`  | `style`                                                                               | Contains a set of `<option>` elements for an `<input>` element.   |
| `<output>`    | `for`, `name`, `style`                                                                | Represents the result of a calculation.                           |
| `<progress>`  | `value`, `max`, `style`                                                               | Represents the completion progress of a task.                     |
| `<meter>`     | `value`, `min`, `max`, `low`, `high`, `optimum`, `style`                              | Represents a scalar measurement.                                  |

* [Index](#index)


<br>
<br>

## Media Tags

| Tag           | Attributes                                                                            | Description                                                       |
|---------------|------------------------------------------------------------                           |--------------------------------------------------------------     |
| `<img>`       | `src`, `alt`, `width`, `height`, `style`, `title`                                     | Embeds an image.                                                  |
| `<audio>`     | `src`, `controls`, `autoplay`, `loop`, `muted`, `style`                               | Defines embedded sound content.                                   |
| `<video>`     | `src`, `controls`, `autoplay`, `loop`, `muted`, `width`, `height`, `style`, `poster`  | Defines embedded video content.                             |
| `<source>`    | `src`, `type`, `style`                                                                | Specifies multiple media resources for `<audio>` or `<video>`.    |
| `<track>`     | `kind`, `src`, `srclang`, `label`, `default`, `style`                                 | Defines text tracks for `<video>` or `<audio>`.                   |
| `<picture>`   | `style`                                                                               | Contains zero or more `<source>` elements and one `<img>` element.|
| `<iframe>`    | `src`, `width`, `height`, `style`, `frameborder`, `allow`, `allowfullscreen`          | Defines an inline frame (iframe).                                 |
| `<embed>`     | `src`, `type`, `width`, `height`, `style`                                             | Embeds external content or applications.                          |
| `<object>`    | `data`, `type`, `width`, `height`, `style`, `name`, `usemap`                          | Defines an embedded object.                                       |
| `<param>`     | `name`, `value`, `style`                                                              | Defines parameters for an `<object>`.                             |
| `<canvas>`    | `width`, `height`, `style`                                                            | Defines a canvas for drawing graphics.                            |
| `<svg>`       | `style`, `width`, `height`, `viewBox`                                                 | Defines a container for SVG graphics.                             |
| `<map>`       | `name`, `style`                                                                       | Defines an image map.                                             |
| `<area>`      | `shape`, `coords`, `href`, `alt`, `style`, `target`                                   | Defines an area inside an image map.                              |

* [Index](#index)


<br>
<br>

## Interactive Elements

| Tag           | Attributes                                                     | Description                                                       |
|---------------|------------------------------------------------------------    |----------------------------------------------------------------   |
| `<a>`         | `href`, `target`, `rel`, `style`, `download`                   | Defines a hyperlink.                                              |
| `<button>`    | `type`, `onclick`, `style`, `disabled`, `name`, `value`        | Defines a clickable button.                                       |
| `<details>`   | `open`, `style`                                                | Defines additional details that the user can view or hide.        |
| `<summary>`   | `style`                                                        | Defines a visible heading for a `<details>` element.              |
| `<dialog>`    | `style`, `open`                                                | Defines a dialog box or other interactive component.              |

* [Index](#index)


<br>
<br>

## Other Tags

| Tag           | Attributes                                            | Description                                                                       |
|---------------|---------------------------------------------------    |-----------------------------------------------------------------------------      |
| `<script>`    | `src`, `type`, `async`, `defer`, `style`              | Defines client-side script.                                                       |
| `<noscript>`  | `style`                                               | Defines an alternate content for users that do not support client-side scripts.   |
| `<link>`      | `href`, `rel`, `type`, `style`, `media`               | Defines the relationship between a document and an external resource (most used to link to stylesheets). |
| `<style>`     | `type`, `style`, `media`                              | Defines style information for a document.                                         |
| `<meta>`      | `name`, `content`, `charset`, `http-equiv`, `style`   | Defines metadata about an HTML document.                                          |
| `<base>`      | `href`, `target`, `style`                             | Specifies the base URL/target for all relative URLs in a document.                |
| `<title>`     | `style`                                               | Defines the title of the document.                                                |
| `<html>`      | `lang`, `style`                                       | Defines the root of an HTML document.                                             |
| `<head>`      | `style`                                               | Contains metadata/information for the document.                                   |
| `<body>`      | `style`                                               | Defines the document's body.                                                      |

* [Index](#index)


<br>
<br>
