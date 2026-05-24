const secretCode = "1234";

function loginUser() {

    const username = document.getElementById("username").value;
    const code = document.getElementById("code").value;
    const message = document.getElementById("message");

    if(username.trim() === ""){
        message.innerText = "Please enter your name";
        return;
    }

    
    if(code !== secretCode){
        message.innerText = "Wrong Secret Code!";
        return;
    }
    

    localStorage.setItem("gymUser", username);

    window.location.href = "tranning.html";
}