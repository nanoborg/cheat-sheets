# Setting Up **_.profile_**

## Alias for the Terminal

Setting up an alias is like setting a variable, It will point to the actual data.

For example:

> ` alias python=python3 `

Typing `python` in terminal will act as if you have typed in `python3`

<br> 

## Bash Prompt

The bash prompt is the first line of text that appears in the terminal.

> `Tims-MacBook-Pro:~ tim$ `

The default prompt setting can be found by entering

> ` echo $PS1 `

This will return the prompt formatting, in this case

> ` \h:\W \u\$ `

<br>

## Customizing The Bash Prompt

There is a way to edit the prompt with different options.

> ` \d = Current Date `  
` \t = Current Time `  
` \h = Host Name `  
` \# = Command Number `  
` \u = User Name `
` \W = Current Working Directory (Uppercase W) `  
` \w = Current Working Directory, full path (Lowercase w) `

To edit the prompt to show user and working directory:

> ` export PS1="\u:\w$ " `

This will output

> ` tim:~$ `


