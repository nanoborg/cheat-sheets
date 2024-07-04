
# [Git commands](https://git-scm.com/docs/git-config 'git commands')

## Setup & Config
Command                                             | Action
 ---                                                | ---           
git config --global user.name "My Name"             | Set user name
git config --global user.email tborg84@gmail.com    | Set email
git config --global core.editor "code --wait"       | Set the editor to vscode
git config --global -e                              | Open .gitconfig with editor 
git config --global core.autocrlf input             | Set how to handle end of lines, remove & add carriage return for windows but not mac as it doest not need it. Windows - `true`,  for both ways / mac - `input`, only to catch it before the repo
git config --help                                   | Settings for .gitconfig
git config -h                                       | Short hand list
git help                                            | List help commands
q                                                   | Quit
<br>

## Flags
Command                     | Action
 ---                        | ---           
-b                          | Automatically switch to new branch after creating it
-u                          | Set upstream, so local & remote can be linked, less syntax
-f                          | Force, when local codebase is behind the remote
-e                          | Initialize git folder in the directory
-a                          | Download a repo from git hub
-m                          | Copying a project with the intent to merge again

<br>

## Creating & Collaborating
Command                     | Action
 ---                        | ---           
git init                    | Initialize git folder in the directory
git clone <http://>         | Download a repo from git hub
git fork                    | Copying a project with the intent to merge again

<br>

## Creating & Edit Snapshots  
Command                         | Action
 ---                            | ---
git init                        | Initialize the project
git add (/folder/path or .)     | Add a file, files or folder to staging
git commit -m "message"         | Commit change to git
git commit -am "message"        | Skip the stage area
git rm file.txt                 | Removes from working directory and staging
git rm --cached file.txt        | Removes only from staging
git stash                       | Temporarily store untracked changes??
git stash apply                 | Apply the last stash
git stash pop                   | Apply the last stash and remove from stash

<br>

## Viewing  
Command                         | Action
 ---                            | ---
git status                      | See if a stage file has changed. `-s` for **_shorthand_**
git diff branch                 | See the difference between branches
git log                         | View a history of the commits
git log --oneline               | Less information, showing commit messages

<br>

## Branching and Merging
Command                             | Action
 ---                                | ---
git branch                          | Show the available branch in the project 
git branch new_branch               | Create a new branch
git switch branch_name              | Switch to the branch name 
git checkout <branch>               | Switch to the specified branch
git checkout <commit>               | This will put you in detached head, NOT A BRANCH
git merge <branch> or <commit>      | Merge the files from one the current list
git tag                             |
git work tree

<br>

## Sharing and Updating
Command                                 | Action
 ---                                    | ---         
git remote -v                           | Show remote repos added to local machine  
git remote add origin http://           | Add a new remote repo connection
git remote add upstream origin http://  | Add the original codebase remote to be able to fetch and merge if needed.
git remote set-url origin http://       | Replace origin with new repo address
git fetch                               | Get all branches
git pull origin branch                  | Download repo files to local
git push origin branch                  | Upload local to repo
git push -u origin branch               | Set          
git rebase                              | Update branch files from "master"

<br>

## Reverting
Command                                 | Action
 ---                                    | ---         
git reset --soft <hash>                 | Keeps changes in the working directory and staging area
git reset --mixed <hash>                | Keeps changes in the working directory but *not* in the staging area
git reset --hard <hash>                 | Discards all changes made and reverts to the specified commit hash
git revert <hash>                       | Create a *new* commit that reverses the changes


<br>

## Patching
    git apply
    git cherry-pick
    git diff
    git rebase
    git revert





```
git init  
git status  
git add -A <!-- add all  -->  
git add file.file_name  
git add . <!--  add current directory -->  
git commit -m "message"  
git push origin master  
git log <!--  -->  
git log --oneline  
git branch name_of_branch <!-- describe what the change is / it will make a new branch with that name -->  
git branch - shows what branches are part of the project
*master <!-- current master branch -->  
feature
git switch name_of_branch <!-- switch branch  -->  
git checkout name_of_branch  
git remote add url


git clone url

git reset HEAD < file >  
git checkout -- < file >  
git stash -u (untracked files) saves everything temporarily  
git stash pop
```


<!--  -->


    git remote set-url origin https://YOUR_TOKEN_HERE@github.com/your_user/your_project.git

https://gist.github.com/kasun-maldeni/cb03c08241959d0f9d0b7d353b376491


GitLord
- create file structure sinatra new / npm init
    git add 
- git commit -m "message"
- create new repo on gitHub
- git add remote url <!-- url of repo -->

## Others in group
1. Fork repo
2. Clone git clone url
    * ` git remove remote origin `
    * Remove the origin url so that I can push a new branch to my own repo ` git remote add origin https://github.com/kasun-maldeni/project3.git `
    -  ` git remote -v ` show remote repositories connect to local machine



Recurring workflow
- git branch branch_name
- git switch
- git add -A
- git commit -m ""
- git fetch origin <!-- gitlord / download commit -->
- git fetch gitlord <!-- others / download commit -->

- git rebase origin/master <!-- gitlord / add to branch -->
- git rebase gitlord/master <!-- others / add to branch -->

- git push origin branch_name <!-- -->

fork
!New pull request!

- select branch that we are working from


- git branch branch_name
- git switch

==============================
        
        Small changes

        pull regularly
        
==============================

## Conflicts

git status
    git add < fileName >
        git rebase --continue

<br>

## Git Commands
| Command               |   Action  
| ---                   | ---
| `q`                   | Quit  
| `space `              | Page down 
| `git config --help`   | Command list in terminal 
| `git config -h`       | Short hand list of commands 
| `git diff `           | Show the difference between working file and what has been committed
 `git ls-files`         | Show the files in the working directory
