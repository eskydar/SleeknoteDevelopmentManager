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

var sleeknoteCookieRegex = /sleeknote/i;

var currentCookiesList = cookieHandler.getCookieNames();

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.action == "removeCookie"){
			//Remove cookie
			var deletedACookie = false;
			console.log(cookieHandler.getCookieNames())
			currentCookiesList.forEach(function (cookieToDelete) {
				console.log('Lets see if there is a cookie named', cookieToDelete);
				if (cookieToDelete.match(sleeknoteCookieRegex)) {
					console.log('WE ARE GOING TO DELETE', cookieToDelete);
					cookieHandler.removeCookie(cookieToDelete);
					deletedACookie = true;
				}
			});
			if (deletedACookie) {
				console.log(cookieHandler.getCookieNames())
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