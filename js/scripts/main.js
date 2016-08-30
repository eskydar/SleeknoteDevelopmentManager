(function () {
    var checkboxes = utils.getAllInputsOfType('checkbox');
    checkboxes.forEach(function (checkbox) {
        var id = checkbox.getAttribute('id');
        var formattedId = utils.dashSeperatedToCamelCase(id);
        console.log(formattedId)
    });

})();