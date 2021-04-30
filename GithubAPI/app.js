const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);

}

function getData(e){

    let username = nameInput.value.trim();

    if(username === ""){
        ui.showError("Arama yapmak icin istediginiz ismi giriniz !");

    }else{

        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                alert("Aradiginiz kullanici bulunamadi...")
            }else{
                ui.showLastUsers(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })
        .catch( err => console.log(err));
        
    }
    ui.clearInput();
    e.preventDefault();
}
function clearAllSearched(e){

    ui.deleteAllUsers();
    e.preventDefault();
}
function getAllSearched(e){

    let users = Storage.getSearchUsersFromStorage();

    let result = "";
    users.forEach(function(user){
        result = `<li class="list-group-item">${user}</li>`
    });

    lastUsers.innerHTML = result;
    //storage dan arananlari al ui a ekle
    e.preventDefault();
}