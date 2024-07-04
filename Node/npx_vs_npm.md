# The Difference between NPM vs npx

## What is NPM

NPM is a couple of things.
* It is an online repository for open source nodeJS packages
* CLI tool that aids in the installation, version and dependencies.

NPM by itself does not run a package, will have have to specify within the **_JSON_** package file.

## What is NPX

It's basically a **_Node Package Executer_**, It will look for all the dependencies in *global*, *local* directories and if not found it will download them.

NPX comes packaged with NPM
Common use cases:
* NPX will save space by not polluting global variables
* Testing package compatibility
* Initialization and one-time use
* Work environment constraints

