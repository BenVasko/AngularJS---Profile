"use strict";

const editProfile = {
    template: `
    <p class="edit-statement">Use the form below to update your profile.</p>
    <label>Name</label>  
        <input type="text" ng-model="$ctrl.profile.name">    
    <label>Contact</label>  
        <input type="text" ng-model="$ctrl.profile.info">
    <label>Bio</label>  
    <textarea type="text" ng-model="$ctrl.profile.bio"></textarea>
    <button type="button" ng-click="$ctrl.updateProfile($ctrl.profile); $ctrl.changePath('/profile');">Update</button>
    `,
    controller: ["ProfileService", "$location", function(ProfileService, $location) {
        const vm = this;
        vm.profile = ProfileService.getUserProfile();
        vm.updateProfile = (newInfo) => {
            vm.profile = ProfileService.setUserProfile(newInfo);
        }
        vm.changePath = (path) => {
            $location.path(path);
        }
    }]
};

angular
    .module("App")
    .component("editProfile", editProfile)