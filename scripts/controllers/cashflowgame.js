'use strict';
angular.module('app')
    .controller('cashflowgame', ['$scope','$interval','dice1','dice2','thisPlayer','thisStatement','thisProfession','ngAudio',
                                function($scope,$interval,dice1,dice2,thisplayer,thisStatement,thisProfession,ngAudio){
        // var backgroundMusic = ngAudio.load('audio/261830__setuniman__never-mind-1l23.mp3');
        // backgroundMusic.volume = 0.8;
        // backgroundMusic.loop = true;
        // backgroundMusic.play();
        
        $scope.player     = thisplayer;
        $scope.statement  = thisStatement;
        for(var i in thisProfession){
            $scope.statement[i] = thisProfession[i];
        }
        
        $scope.updateTest = function(){
            $scope.statement.numberOfChildren += 1;
            $scope.statement.monthly_expenses.child[0].value = $scope.statement.numberOfChildren * $scope.statement.expensesPerChild;
        };
        
        var gameTapaks = [{
            id      : 0,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[$scope.player]
        },{
            id      : 1,
            type    :'doodads',
            text    :'Doodads',
            subText :'',
            players :[]
        },{
            id      : 2,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 3,
            type    :'charity',
            text    :'Charity',
            subText :'Donate 10% of your Total Income, use 2 dice for next 3 turns.',
            players :[]
        },{
            id      : 4,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 5,
            type    :'pay-check',
            text    :'Pay Check',
            subText :'',
            players :[]
        },{
            id      : 6,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 7,
            type    :'the-market',
            text    :'The Market',
            subText :'',
            players :[]
        },{
            id      : 8,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 9,
            type    :'doodads',
            text    :'Doodads',
            subText :'',
            players :[]
        },{
            id      : 10,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 11,
            type    :'baby',
            text    :'Baby',
            subText :'Congratulations! Add 1 baby to your child expenses.',
            players :[]
        },{
            id      : 12,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 13,
            type    :'pay-check',
            text    :'Pay Check',
            subText :'',
            players :[]
        },{
            id      : 14,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 15,
            type    :'the-market',
            text    :'The Market',
            subText :'',
            players :[]
        },{
            id      : 16,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 17,
            type    :'doodads',
            text    :'Doodads',
            subText :'',
            players :[]
        },{
            id      : 18,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 19,
            type    :'downsized',
            text    :'Downsized',
            subText :'Loose 2 turns and pay amount of Total Expensed.',
            players :[]
        },{
            id      : 20,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 21,
            type    :'pay-check',
            text    :'Pay Check',
            subText :'',
            players :[]
        },{
            id      : 22,
            type    :'opportunity',
            text    :'Opportunity',
            subText :'Big/Small Deal',
            players :[]
        },{
            id      : 23,
            type    :'the-market',
            text    :'The Market',
            subText :'',
            players :[]
        }];
        
        $scope.gameTapakInView = [
            gameTapaks[3], 
            gameTapaks[2], 
            gameTapaks[1],
            gameTapaks[0],
            gameTapaks[23]
        ];
        
        function swapTapak(){
            var tapakSound = ngAudio.load('audio/switch-3.wav');
            tapakSound.volume = 0.2;
            tapakSound.play();
            $scope.gameTapakInView[2].players[0] = $scope.gameTapakInView[3].players[0];
            $scope.gameTapakInView[3].players[0] = null;
            
            var frontId = $scope.gameTapakInView[0].id;
            $scope.gameTapakInView.pop();
            if(frontId == 23) $scope.gameTapakInView.unshift(gameTapaks[0]);
            else $scope.gameTapakInView.unshift(gameTapaks[frontId+1]);
        }
        
        $scope.dice1 = dice1.generatedNumber;
        $scope.moveDice1 = function(){
            $scope.dice1 = dice1.resetNumber();
            $interval(swapTapak,200,$scope.dice1);
        };
        
        $scope.dice2 = dice2.generatedNumber;
        $scope.moveDice2 = function(){
            $scope.dice2 = dice2.resetNumber();
            $interval(swapTapak,200,$scope.dice2);
        };
    }]);