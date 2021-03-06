// Git makes it easy to track the versions of our project, collaborate with others, revert to previous versions of our code, and back up our code
// Git is like having different save files for our code, so we can go to different parts in case we run into issues at some point
// Git needs to be installed on the machine
// Git has four stages- untracked files, unsteaged changes, staged changes, and commits- our code falls into one of these categories depending on where we are with our code commitments
// A repository is where Git stores our code- we start by creating one of these for an individual project
// Git does not know about untracked files
// To track our files, we use git add- this takes them from being untracked files to staged changes
// Staged changes makes up everything that is going to be in the next commit
// Staged changes arent being tracked by git- we need to commit them for git to track them
// git commit is the command that lets us commit our files/changes so that git tracks them
// when we make changes to a commited file, it shows up under unstaged changes- these are things git is tracking but that we have changed, and git isnt tracking those changes yet
// git add takes files from unstaged changes to staged changes
// git commit then takes our staged changes and makes them commits
// now we have two git commits- our initial commit, and the changed commits- this is where git is super useful, as we can check on our most updated code or the way it was before we made the changes
// to initialize our project for github, we need to run git init- this creates a new git repo
// this creates a .git directory that is managed directly by git
// git status gives us a look at our files, showing what is untracked
// we only want git to track the files we wrote
// we dont need to track node_modules, it is too big and will slow things down, plus we can regenerate it at any time
// we create a .gitignore file in the root of our project- here we can list the files we want git to ignore when we are adding them
// when we run git add, it takes an argument- the files we want to add
// if we want to add all the files- run git add .
// run git commit- then provide the -m flag, then a message in double quotes- this describes what changed in this commit
// the working tree refers to our files, the ones we edit in VSC
// the working tree is clean when our files match up with the last commit
// once we change something in our code, the git status changes
// git log is a read only command that logs the commits that make up our repository
// the next step is to get our code on github- here we can collaborate with others, back up our code, and take advantage of all github's features
// now we need to create a new repository in our github account
// pick a repository name for the project, description is optional, set to public or private, initialize with a file if we want (probably dont)
// to push our code to github, copy the HTTPS url, then use git remote add origin pastedurlfromgithub
// use git push -u (only for the first time we push) origin main- this takes all the local commits to our branch and pushes them to github
// 