//create Vue App
const errMsgApp = Vue.createApp({
    data() {
        return {
            registerErrMsg: ""
        }
    }
}).mount("#registerErrMsgBox")

const formApp = Vue.createApp({
    data() {
        return {
            seen: false,
            phase: 1,
            email: '',
            username: '',
            password: '',
            captcha: '',
            isDisabled: true,
            lockInput: false
        }
    },
    computed: {
        seenUsername: function() {
            return this.phase >= 2
        },
        seenPassword: function() {
            return this.phase >= 3
        },
        seenCaptcha: function() {
            return this.phase >= 4
        },
        seenContinue: function() {
            return this.phase < 4
        },
        seenSubmit: function() {
            return this.phase == 4
        },
    },
    watch: {
        email(newEmail) {
            if (!isValidEmailAddress(newEmail)) {
                this.isDisabled = true
                errMsgApp.$data.registerErrMsg = "Invalid Email."
            }else {
                this.isDisabled = false
                errMsgApp.$data.registerErrMsg = ""
            }
        },
        username(newUsername) {
            if (!isValidUsername(newUsername)) {
                this.isDisabled = true
                errMsgApp.$data.registerErrMsg = "User name cannot be empty."
            }else {
                this.isDisabled = false
                errMsgApp.$data.registerErrMsg = ""
            }
        },
        password(newPassword) {
            if (!isValidPassword(newPassword)) {
                this.isDisabled = true
                errMsgApp.$data.registerErrMsg = "Password cannot be less than 8 characters."
            }else {
                this.isDisabled = false
                errMsgApp.$data.registerErrMsg = ""
            }
        },
        captcha(newCaptcha) {
            if (!isValidCaptcha(newCaptcha)) {
                this.isDisabled = true
                errMsgApp.$data.registerErrMsg = "Captcha cannot be empty."
            }else {
                this.isDisabled = false
                errMsgApp.$data.registerErrMsg = ""
            }
        }
    }
}).mount("#registerForm")
//create Vue App End


function nextStep() {
    if(formApp.$data.phase == 1) { //email phase
        // future extension
        formApp.$data.isDisabled = true
    }else if(formApp.$data.phase == 2) { //User name phase
        // future extension
        formApp.$data.isDisabled = true
    }else if(formApp.$data.phase == 3) { //password phase
        // future extension
        formApp.$data.isDisabled = true
        sendCaptchaEmail();
        formApp.$data.lockInput = true
    }else if(formApp.$data.phase == 4) { //Verification Code phase
        //future extension
    }
    formApp.$data.phase++;
    return true
}

function unlockInput() {
    formApp.$data.lockInput = false
}

function sendCaptchaEmail() {
    emailAddr = formApp.$data.email
    alert("Verification code email sent to " + emailAddr)
}

function isValidCaptcha(str) {
    return str != ""
}
function isValidPassword(str) {
    return str.length >= 8
}
function isValidUsername(str) {
    return str != ""
}
function isValidEmailAddress(str) {
    var re = /^[0-9A-Za-z\-]+@[0-9a-zA-Z\-]+\.[a-zA-Z]+$/
    return re.test(str)
}