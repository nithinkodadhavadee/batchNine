# Git
Git is called a version control system.
- tracking code changes
- tracking who made the change
- collaborations.

Working Directory; this is where you do all the changes to your project
Staged: you add all the files that went through changes to something called a staging area. this is where git notes every change that has been made.

changes include
- renaming a file. 
- changing a line
- fixing a typo in any part of the file
- creating a new file
- creating a new module
Commited: commit the changes. This is where git saves the changes made to the project. 


## Configuring Git:
configurating part is required only ones on every computer,
the reason for that is the usage of the `--global` flag

```
git config --global user.name "Your Name"
git config --global user.email "your@e.mail"
```

## Initialize 
to make any folder or directory git trackable, you'll have to initialize it. 
```
git init
```

## Status
to check the status of your git directory 
```
git status
```

## Add
to add any file to the staging area
```
git add <filename>
```

## Commit
to commitg the changes 
```
git commit 
```

### Editors
There are a few things that might happen when you execute the `git commit` command.
- one following text editors
    - vim (mostly set to default.)
        1. as soon as you enter vim, you are inside something called a command mode
        1. to start editing the file, you'll have to go to insert or append mode by pressing `i`
        1. to go back to command made press `esc`
        1. now in command mode execute the command `:w` to save the file
        1. exectute the command `:q` to exit the editor. 
    - nano
        1. start typing the commit message
        1. press `ctrl+o` to save
        1. it asks you to enter the file name, do not change anything and just press enter
        1. press `ctrl+x` to exit.
    - vs code
    - atom
    - sublime text

### Change default editor
to change the editor to write the commit message
``` 
git config --global core.editor "nano/atom/code..."
```

## Log
to check the logs of commited messages
```
git log
```

## Ignore
to ignore files or directories from being tracked
1. create a file named `.gitignore` (without any extension)
1. if you are using windows, so create a file `.gitigore.` to create a file without extension
1. save every file and folders to be ignored in seperate lines inside the `.gitignore` file