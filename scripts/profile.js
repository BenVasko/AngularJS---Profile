"use strict";

const profile = {
    template: `
    <section class="profile-pic">
        <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/17499278_1467033243309972_2750049903729425913_n.jpg?_nc_cat=0&oh=39a053ee2af1bfe1414f3d72a5e5e747&oe=5C066944">
    </section>
    <section class="profile-text">
        <p class="profile-name">{{$ctrl.profile.name}}</p>
        <p class="profile-info">{{$ctrl.profile.info}}</p>
        <p class="profile-bio">{{$ctrl.profile.bio}}</p>
        <button type="button" ng-click="$ctrl.changePath('/edit');">Edit</button>
    </section>
    `,
    controller: ["ProfileService", "$location", function(ProfileService, $location) {
        const vm = this;
        vm.profile = ProfileService.getUserProfile();
        vm.changePath = (path) => {
            $location.path(path);
        }
    }]

    
};

angular
    .module("App")
    .component("profile", profile)