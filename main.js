// Array of git commands and description.

var gitCommands = [
    {
        command : "git init",
        description : "Initialize a local Git repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520init"></iframe>'
    },
    {
        command : "git clone ssh://git@github.com/[username]/[repository-name].git",
        description : "Create a local copy of a remote repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520clone ssh://git@github.com/[username]/[repository-name].git"></iframe>'
    },
    {
        command : "git status",
        description : "Check status of your local repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520status"></iframe>'
    },
    {
        command : "git add [file-name.txt]",
        description : "Add a file to the staging area",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520add [file-name.txt]"></iframe>'
    },
    {
        command : "git add -A",
        description : "Add all new and changed files to the staging area",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520add -A"></iframe>'
    },
    {
        command : "git commit -m \"[commit message]\"",
        description : "Commit (save) changes",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520commit -m \"[commit message]\"""></iframe>'
    },
    {
        command : "git rm -r [file-name.txt]",
        description : "Remove a file (or folder)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520rm -r [file-name.txt]"></iframe>'
    },
    {
        command : "git branch",
        description : "List branches (the asterisk denotes the current branch)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520branch"></iframe>'
    },
    {
        command : "git branch -a",
        description : "List all branches (local and remote)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520branch -a"></iframe>'
    },
    {
        command : "git branch [branch name]",
        description : "Create a new branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520branch [branch name]"></iframe>'
    },
    {
        command : "git branch -d [branch name]",
        description : "Delete a branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520branch -d [branch name]"></iframe>'
    },
    {
        command : "git push origin --delete [branch name]",
        description : "Delete a remote branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520push origin --delete [branch name]"></iframe>'
    },
    {
        command : "git checkout -b [branch name]",
        description : "Create a new branch and switch to it",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520checkout -b [branch name]"></iframe>'
    },
    {
        command : "git checkout [branch name]",
        description : "Switch to a branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520checkout [branch name]"></iframe>'
    },
    {
        command : "git checkout -",
        description : "Switch to a branch last checked out",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520checkout -"></iframe>'
    },
    {
        command : "git checkout -- [file-name.txt]",
        description : "Discard changes to a file",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520checkout -- [file-name.txt]"></iframe>'
    },
    {
        command : "git merge [branch name]",
        description : "Merge a branch into the active branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520merge [branch name]"></iframe>'
    },
    {
        command : "git merge [source branch] [target branch]",
        description : "Merge a branch into target branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520merge [source branch] [target branch]"></iframe>'
    },
    {
        command : "git stash",
        description : "Stash changes in a dirty working directory",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520stash"></iframe>'
    },
    {
        command : "git push origin [branch name]",
        description : "Push a branch to your remote repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520push origin [branch name]"></iframe>'
    },
    {
        command : "git push -u origin [branch name]",
        description : "Push changes to remote repository (and remember the branch)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520push -u origin [branch name]"></iframe>'
    },
    {
        command : "git push",
        description : "Push changes to remote repository (remembered branch)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520init"></iframe>'
    },
    {
        command : "git pull",
        description : "Update local repository to the newest commit",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520pull"></iframe>'
    },
    {
        command : "git pull origin [branch name]",
        description : "Pull changes from remote repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520pull origin [branch name]"></iframe>'
    },
    {
        command : "git remote add origin ssh://git@github.com/[username]/[repository-name].git",
        description : "Add a remote repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520remote add origin ssh://git@github.com/[username]/[repository-name].git"></iframe>'
    },
    {
        command : "git remote set-url origin ssh://git@github.com/[username]/[repository-name].git",
        description : "Set a repository's origin branch to SSH",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520remote set-url origin ssh://git@github.com/[username]/[repository-name].git"></iframe>'
    },
    {
        command : "git log",
        description : "View changes",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520log"></iframe>'
    },
    {
        command : "git log --summary",
        description : "View changes (detailed)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520log --summary"></iframe>'
    },
    {
        command : "git diff [source branch] [target branch]",
        description : "Preview changes before merging",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520diff [source branch] [target branch]"></iframe>'
    },

];

// Toggle bw dark mode and light mode.

document.body.classList.add("dark-theme"); // default theme

var theme1 = document.querySelector("#btn1");
theme1.classList.add("light-theme");  // default button theme

var theme2 = document.querySelector("#btn2");
theme2.classList.add("dark-theme");

var searchInput = document.querySelector(".search");

// Change theme when clicked on button

theme1.addEventListener("click", function() {
    document.body.classList.add("light-theme");
    this.style.display = "none";
    theme2.style.display = "block";

    searchInput.style.backgroundColor = "#ecefe7";
    searchInput.style.border = "1px solid #100d15";
    searchInput.style.color = "#100d15";

});
theme2.addEventListener("click", function() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    theme2.classList.add("dark-theme");
    this.style.display = "none";
    theme1.style.display = "block";

    searchInput.style.backgroundColor = "#100d15";
    searchInput.style.border = "1px solid #ecefe7";
    searchInput.style.color = "#ecefe7";
});

// Displaying random git command and description on page load.

var command = document.querySelector(".command");
var description = document.querySelector(".description");

var random1 = Math.floor(Math.random()*gitCommands.length);

command.innerHTML = `${gitCommands[random1].snippet}`;
description.innerText = `${gitCommands[random1].description}`

// On space bar keydown.

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 32) {
        var random2 = Math.floor(Math.random()*gitCommands.length);

        command.innerHTML = `${gitCommands[random2].snippet}`;
        description.innerText = `${gitCommands[random2].description}`
    }
});

// Search Functionality

searchInput.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        document.querySelector(".search-list").innerHTML = "";

        command.style.display = "none";
        description.style.display = "none";

        var ul = document.querySelector(".search-list");
        ul.style.marginTop = "-150px";

        var filterItem = gitCommands.filter((element, index) => {
            return element.description.toLowerCase().includes(searchInput.value);
        });

        filterItem.forEach((element) => {
            var li = document.createElement("li");
            li.style.paddingTop = "10px";
            li.innerHTML = `${element.snippet} <br>`;
            ul.appendChild(li);
        });

        searchInput.value = "";
    }
});