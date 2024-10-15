const nameInput = document.getElementById('name');

const saveButton = document.getElementById('save')
saveButton.addEventListener("click",saveName)

const clearButton = document.getElementById('clear')
clearButton.addEventListener("click",clearName)

const display = document.getElementById('display-name');

function saveName(){
    const name = nameInput.value;
    if (name){
        localStorage.setItem('usersName', name);
        displayName();
    }
}

function displayName() {
    const savedName = localStorage.getItem('usersName')
    if(savedName) {
        display.textContent = `Welcome, ${savedName}!`;
    } else {
        display.textContent = 'Your name will appear here';
    }
}

function clearName(){
    localStorage.removeItem('usersName');
    display.textContent = "Name Cleared";
}

window.addEventListener("load", (event) => { 
    console.log("page is fully loaded");
    displayName();
}); 