# ROLLBACK TO A PREVIOUS COMMIT

1. `git log` -  View all previous commits for this repo
2. `git checkout <commit hash>` - This run in detached head mode (no branch)
3. `git checkout -b <new branch>` - Create a new branch and switch to it.
4. `git merge <commit hash>` - Insert all the code into the current branch
5. `git commit -am 'initial merge'` - add and commit the work locally
6. `git push -u origin <branch name>` - Link the local repo to remote
7. `git push -f` - If the remote repo is ahead, and the local code is correct, force it to push
