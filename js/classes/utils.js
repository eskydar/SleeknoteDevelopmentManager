var utils = {
    findOne: function (haystack, arr) {
        return arr.some(function (v) {
            return haystack.indexOf(v) >= 0;
        });
    },
    camelCaseToDashSeperated: function (val) {
        return val.replace(/([A-Z])/g, '-$1').toLowerCase();
    },
    dashSeperatedToCamelCase: function (val) {
        return val.replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, function( all, letter ) {
            return letter.toUpperCase();
        });
    },
    getAllInputsOfType: function (type) {
        var checkboxArray = [],
            checkboxes = document.getElementsByTagName('input');

        for ( var i = 0; i < checkboxes.length; i++ ) {
            if ( checkboxes[i].type == type ) {
                checkboxArray.push( checkboxes[i] );
            }
        }

        return checkboxArray;
    }
};