function checkLegality() {
    username = document.getElementById("username")
    password = document.getElementById("password")
    errMsgUsername = document.getElementById("errMsgUsername")
    errMsgPassword = document.getElementById("errMsgPassword")

    if(username.value == "" || password.value == "") {
        if(username.value == "") {
            errMsgUsername.innerHTML = "Please input your username."
        }else {
            errMsgUsername = ""
        }
        if(password.value == "") {
            errMsgPassword.innerHTML = "Please input your password."
        }else {
            errMsgPassword.innerHTML = ""
        }
        return false;
    }else {
        errMsgUsername.innerHTML = ""
        errMsgPassword.innerHTML = ""
        return true;
    }
}