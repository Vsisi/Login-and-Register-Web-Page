APP_NAME = "TEST UI"

replaceAppNameDomain()

function replaceAppNameDomain(params) {
    var appNameDomains = document.getElementsByClassName("appName")
    
    for (var i = 0; i < appNameDomains.length; i++) {
        appNameDomains[i].innerHTML = APP_NAME
    }
}
