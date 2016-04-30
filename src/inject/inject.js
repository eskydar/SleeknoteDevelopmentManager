chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
		}
	}, 10);
});

var storageToDelete = [
	"designer"
];

var sleeknoteCookieNeedle = ["SleekNote", "sleeknote", "sleekNote", "Sleeknote"];

var currentCookiesList = cookieHandler.getCookieNames();

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.action == "removeCookie"){
			//Remove cookie
			var deletedACookie = false;
			currentCookiesList.forEach(function (cookieToDelete) {
				sleeknoteCookieNeedle.forEach(function (cookieToFind) {
					if (cookieToDelete.indexOf(cookieToFind) > -1) {
						cookieHandler.removeCookie(cookieToDelete);
						deletedACookie = true;
					}
				});
			});
			if (deletedACookie) {
				sendResponse({type:'success'});
			} else {
				sendResponse({type:'error'});
			}
		}
		if (request.action == "removeLocalStorage") {
			//Remove local storage
			storageToDelete.forEach(function (item) {
				localStorageHandler.removeFromLocalStorage(item);
			});
			sendResponse({type:'success'})
		}
	}
);

//TODO::Error - success handler. Perhaps the option to add your own cookie keys and storage keys in the popup