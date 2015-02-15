(function () {
    var app = angular.module('makerHubMobile', ['ngCordova']);

    app.controller('ButtonController', function () {
        this.value = 0;
        this.increment = function () {
            this.value++;
        };
    });

})();