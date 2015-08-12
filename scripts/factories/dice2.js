'use strict';
/*
    author: jebat
    version: 1.1
    last updated: 09/08/2015
*/
angular.module('app')
    .factory('dice2', function(){
        var thisFactory = {};
        var min = 1;
        var max = 6;
        
        // private function
        function randomNumber(min, max){
            return Math.floor(Math.random()*(max+1-min)+min);
        }
        
        thisFactory.generatedNumber = randomNumber(min, max);
        
        thisFactory.testNumber = function(key){
            if(key == thisFactory.generatedKey) return true;
            else return false;
        }
        
        thisFactory.resetNumber = function(){
            thisFactory.generatedNumber = randomNumber(min, max);
            return thisFactory.generatedNumber;
        }
        
        return thisFactory;
    });