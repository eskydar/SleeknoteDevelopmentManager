var localStorageHandler = {
    localStorageExists: function ( storageKey ) {
        return null != localStorage.getItem(storageKey);
    },
    addToLocalStorage: function (storageKey, value) {
      localStorage.setItem(storageKey, value)
    },
    editLocalStorage: function ( storageKey, propertyKey, propertyValue ) {
        var storage = localStorage.getItem(storageKey);
        storage[propertyKey] = propertyValue;
    },
    removeFromLocalStorage: function ( key ) {
        localStorage.removeItem(key);
    }
};

/*
Addon settings in storage:
var settings = {
    refreshOnCookieClear: false,
    clearCacheOnCookieClear: true,
    refreshOnStorageClear: true,
    clearCacheOnStorageClear: true
}
 */