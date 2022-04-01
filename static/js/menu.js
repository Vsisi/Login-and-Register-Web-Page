const MENU_TRANSITION_TIME = 100;
const MENU_TRANSITION_STEP = 2;

function menuDisp() {
    menu = document.getElementById("menu");
    content = document.getElementById("content")
    footer = document.getElementById("footer")
    menu.style.display = "block";
    content.style.filter = "blur(2px) grayscale(50%)"
    footer.style.filter = "blur(2px) grayscale(50%)"
    menu.style.opacity = 0;

    var alpha = 0.0;
    tid = self.setInterval(function() {
        alpha = alpha + MENU_TRANSITION_STEP;
        if(alpha >= 100) {
            menu.style.opacity = 1.0;
            self.clearInterval(tid);
            return;
        }else {
            menu.style.opacity = alpha / 100;
        }
    }, MENU_TRANSITION_TIME / 100)
    return;
}
function menuHide() {
    menu = document.getElementById("menu");
    content = document.getElementById("content")
    footer = document.getElementById("footer")
    if(menu.style.display != "block" || menu.style.opacity != 1 || document.body.offsetWidth > 1300) {
        return;
    }

    var synSign = false;
    var alpha = 100.0;
    tid = self.setInterval(function() {
        alpha = alpha - MENU_TRANSITION_STEP;
        if(alpha <= 0) {
            menu.style.opacity = "";
            self.clearInterval(tid);
            synSign = true;
            return;
        }else {
            menu.style.opacity = alpha / 100;
        }
    }, MENU_TRANSITION_TIME / 100)

    tidSyn = self.setInterval(function() {
        if(synSign) {
            menu.style.display = "";
            content.style.filter = ""
            footer.style.filter = ""
            self.clearInterval(tidSyn)
            return;
        }
    }, MENU_TRANSITION_TIME / 100)
}

document.getElementById("content").onclick = function () {
    menuHide();
}

window.onresize = function () {
    if(document.body.offsetWidth > 1300) {
        menu = document.getElementById("menu");
        content = document.getElementById("content")
        footer = document.getElementById("footer")
        menu.style.display = "";
        content.style.filter = ""
        footer.style.filter = ""
        menu.style.opacity = "";
    }
    console.log(document.body.offsetWidth);
}