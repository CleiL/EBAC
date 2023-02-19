
fetch(`https://api.github.com/users/cleil`).then(respose => {
    return respose.json()
}).then(value => {
    document.getElementById("profile-name").innerHTML = value.login;
    document.getElementById("profile-username").innerHTML = value.name;
    document.getElementById("numbers-item-s").innerHTML = value.followers;
    document.getElementById("numbers-item-ss").innerHTML = value.following;
    document.getElementById("numbers-item-r").innerHTML = value.public_repos;
})