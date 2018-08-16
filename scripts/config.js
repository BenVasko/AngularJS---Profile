"use strict";

angular
    .module("App")
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/profile", {
            template: "<profile></profile>"
            })
            .when("/edit", {
            template: "<edit-profile></edit-profile>"
            })
            .otherwise({ redirectTo: "/profile" });
            }]);