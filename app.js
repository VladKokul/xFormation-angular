var app = angular.module("ngFormation", ["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/#", {
        templateUrl : "index.html",
    })
    .when("/github", {
        templateUrl : "views/github.html"

    })
    .when("/contributors", {
        templateUrl : "views/contributors.html"

    });
});


