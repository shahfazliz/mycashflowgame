'use strict';
angular.module('app', ['ngAnimate','ngAudio','ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        
        $stateProvider
            .state('home', {
                url: "/",
                views:{
                    'financial-statement'   :{templateUrl:'views/statment.html'},
                    'board-game-tapak'      :{templateUrl:'views/tapak.html'},
                    'game-dice'             :{templateUrl:'views/dice.html'}
                }
            });
    });