// Array of git commands and description.

var gitCommands = [
    {
        command : "git init",
        description : "Initialize a local Git repository"
    },
    {
        command : "git clone ssh://git@github.com/[username]/[repository-name].git",
        description : "Create a local copy of a remote repository"
    },
    {
        command : "git status",
        description : "Check status of your local repository"
    },
    {
        command : "git add [file-name.txt]",
        description : "Add a file to the staging area"
    },
    {
        command : "git add -A",
        description : "Add all new and changed files to the staging area"
    },
    {
        command : "git commit -m \"[commit message]\"",
        description : "Commit (save) changes"
    },
    {
        command : "git rm -r [file-name.txt]",
        description : "Remove a file (or folder)"
    },
    {
        command : "git branch",
        description : "List branches (the asterisk denotes the current branch)"
    },
    {
        command : "git branch -a",
        description : "List all branches (local and remote)"
    },
    {
        command : "git branch [branch name]",
        description : "Create a new branch"
    },
    {
        command : "git branch -d [branch name]",
        description : "Delete a branch"
    },
    {
        command : "git push origin --delete [branch name]",
        description : "Delete a remote branch"
    },
    {
        command : "git checkout -b [branch name]",
        description : "Create a new branch and switch to it"
    },
    {
        command : "git checkout [branch name]",
        description : "Switch to a branch"
    },
    {
        command : "git checkout -",
        description : "Switch to a branch last checked out"
    },
    {
        command : "git checkout -- [file-name.txt]",
        description : "Discard changes to a file"
    },
    {
        command : "git merge [branch name]",
        description : "Merge a branch into the active branch"
    },
    {
        command : "git merge [source branch] [target branch]",
        description : "Merge a branch into target branch"
    },
    {
        command : "git stash",
        description : "Stash changes in a dirty working directory"
    },
    {
        command : "git push origin [branch name]",
        description : "Push a branch to your remote repository"
    },
    {
        command : "git push -u origin [branch name]",
        description : "Push changes to remote repository (and remember the branch)"
    },
    {
        command : "git push",
        description : "Push changes to remote repository (remembered branch)"
    },
    {
        command : "git push origin --delete [branch name]"  ,
        description : "Delete a remote branch"
    },
    {
        command : "git pull",
        description : "Update local repository to the newest commit"
    },
    {
        command : "git pull origin [branch name]",
        description : "Pull changes from remote repository"
    },
    {
        command : "git remote add origin ssh://git@github.com/[username]/[repository-name].git",
        description : "Add a remote repository"
    },
    {
        command : "git remote set-url origin ssh://git@github.com/[username]/[repository-name].git",
        description : "Set a repository's origin branch to SSH"
    },
    {
        command : "git log",
        description : "View changes"
    },
    {
        command : "git log --summary",
        description : "View changes (detailed)"
    },
    {
        command : "git diff [source branch] [target branch]",
        description : "Preview changes before merging"
    },

];

// Toggle bw dark mode and light mode.

document.body.classList.add("dark-theme"); // default theme

var theme1 = document.querySelector("#btn1");
theme1.classList.add("light-theme");  // default button theme

var theme2 = document.querySelector("#btn2");
theme2.classList.add("dark-theme");

// Change theme when clicked on button

theme1.addEventListener("click", function() {
    document.body.classList.add("light-theme");
    this.style.display = "none";
    theme2.style.display = "block";
});
theme2.addEventListener("click", function() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    theme2.classList.add("dark-theme");
    this.style.display = "none";
    theme1.style.display = "block";
});

// Displaying random git command and description on page load.

var command = document.querySelector(".command");
var description = document.querySelector(".description");

var random1 = Math.floor(Math.random()*gitCommands.length);

command.innerText = `${gitCommands[random1].command}`;
description.innerText = `${gitCommands[random1].description}`

// On space bar keydown.

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 32) {
        var command = document.querySelector(".command");
        var description = document.querySelector(".description");

        var random2 = Math.floor(Math.random()*gitCommands.length);

        command.innerText = `${gitCommands[random2].command}`;
        description.innerText = `${gitCommands[random2].description}`
    }
});

// Search Functionality

var searchInput = document.querySelector(".search");
searchInput.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {

        document.querySelector(".command").style.display = "none";
        document.querySelector(".description").style.display = "none";

        var ul = document.querySelector(".search-list");
        ul.style.marginTop = "-150px";

        var filterItem = gitCommands.filter((element, index) => {
            return element.description.toLowerCase().includes(searchInput.value);
        });

        filterItem.forEach((element) => {
            var li = document.createElement("li");
            li.style.padding = "10px";
            li.innerHTML = `${element.command} <br>`;
            ul.appendChild(li);
        });

        searchInput.value = "";
    }
});