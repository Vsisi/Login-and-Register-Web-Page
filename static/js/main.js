window.onload = function() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceWorker.js', {scope:"/"}).then(function(registration) {
            console.log("Service worker registered successfully with scope: ", registration);
        }, function(err) {
            console.error("Service worker registration failed: ", err);
        })
    }else {
        document.write("PWA is not supported");
    }
}


if ("Notification" in window) {
    if(Notification.permission === "default") {
        Notification.requestPermission();
    }else if(Notification.permission === "granted") {
        if (!navigator.onLine) {
            new Notification("Notification:", {
                body: "Current Network is unavailable"
            });
        }
        window.addEventListener('online', () =>{
            new Notification("Notification", {
                body: "Network is available"
            });
        }, false)
    }
}