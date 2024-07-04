# REGULAR EXPRESSIONS (REGEX)

## What is REGEX
It's a set of patterns that are used to match character combinations allowing for search a string for validation or advanced search and replace.

<br>
<br>

## Creating REGEX pattern

There are 2 ways to use **_regex_**

1. Using expression literals, pattern enclosed between forward slashes akin to a string with double quotes.
` const re = /ab+c/ ` 

2. Calling the constructor for the RegExp object
` const re = new RegExp('ab+c') `

<br>
<br>

## Flags
These are scopes for the string in question

Command                     | Action
 ---                        | ---           
g                           | global, match all in the string
i                           | case insensitive, match all lower and upper case
m                           | multiline
s                           | single line (dotall)
u                           | unicode  
y                           | sticky


 <br>
 <br>

## Character Classes



 <br>
 <br>


 ## Quantifiers & Alternation

 Command        | Action
  ---           | ---  
\*              | 0 or more, match as many if there any
\+              | 1 or more, match min of 1
?               | 0 or 1, preceding is optional
{2}             | match exactly 2
{2,}            | match 2 or more
{2,4}           | match between 2 and 4