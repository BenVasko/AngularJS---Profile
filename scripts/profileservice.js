"use strict";

function ProfileService() {
    const vm = this;
    vm.user = {
        name: "Ben Vasko",
        info: "ben@notanactualemailaddress.com",
        bio: "Hello, my name is Ben Vasko. I am a student at Grand Circus and you are an awesome person. I like cool things."
    };
    vm.getUserProfile = () => {
        return vm.user;
    };
    vm.setUserProfile = (update) => {
        vm.user = update;
        return vm.user;
    };
}


angular
    .module("App")
    .service("ProfileService", ProfileService);