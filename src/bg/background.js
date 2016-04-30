function addToContextMenu(title, contexts, cb) {
    chrome.contextMenus.create({
        "title": title,
        "contexts": contexts,
        "onclick" : cb
    });
}

function showNotification(options) {
    var stamp = new Date().getTime();
    if (!options.hasOwnProperty("iconUrl")) {
        options.iconUrl = "icons/icon128.png";
    }
    chrome.notifications.create("sleeknote-notification-" + stamp , options, function() {
        console.log("Notification created");
    });
}

addToContextMenu("Remove Sleeknote cookie", ["all"], function(e) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "removeCookie"}, function(response) {
            var options = {
                type: "basic"
            };
            if (response.type == "success") {
                options.title = "Sleeknote cookies";
                options.message = "The Sleeknote cookies have successfully been deleted!"
                showNotification(options);
            }
        });
    });
});

addToContextMenu("Remove Sleeknote storage", ["all"], function(e) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "removeLocalStorage"}, function(response) {
            var options = {
                type: "basic"
            };
            if (response.type == "success") {
                options.title = "Sleeknote local storage";
                options.message = "The Sleeknote local storage has successfully been deleted!"
                showNotification(options);
            }
        });
    });
});