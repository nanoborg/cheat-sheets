## Installing git

1. Install git by typing into terminal
    > `brew install git`

## Setup
1. Set global variables
    > ` git config --global user.name "Tim Borg" `

    <!-- There is no space in an email so no need for double quotes -->
    > ` git config --global user.email tborg84@gmail.com`


2. Set editor
    > ` git config --global core.editor "code --wait" `


3. Open **_config_** file editor
    > ` git config --global -e`


4. Check to see the details have been updated.
    > ` git config --list`

5. Handle end of line input (carriage return line feed)
    * Windows
    > ` git config --global core.autocrlf true`

    * Mac
    > ` git config --global core.autocrlf input `




