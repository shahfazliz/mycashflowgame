'use strict';
angular.module('mycashflowgame', ['ngAnimate']).controller('cashflowgame', ['$scope','$interval','dice1','dice2',function($scope,$interval,dice1,dice2){
    $scope.player = {
        name : ''
    }
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
        gameTapaks[22], 
        gameTapaks[23], 
        gameTapaks[0],
        gameTapaks[1],
        gameTapaks[2]
    ];
    
    $scope.dice1 = dice1.generatedNumber;
    $scope.moveDice1 = function(){
        $scope.dice1 = dice1.resetNumber();
        $interval(swapTapak,100,$scope.dice1);
    };
    
    $scope.dice2 = dice2.generatedNumber;
    $scope.moveDice2 = function(){
        $scope.dice2 = dice2.resetNumber();
        $interval(swapTapak,100,$scope.dice2);
    };
    
    function swapTapak(){
        $scope.gameTapakInView[3].players[0] = $scope.gameTapakInView[2].players[0];
        $scope.gameTapakInView[2].players[0] = null;
        
        var lastId = $scope.gameTapakInView[4].id;
        $scope.gameTapakInView.shift();
        if(lastId == 23) $scope.gameTapakInView.push(gameTapaks[0]);
        else $scope.gameTapakInView.push(gameTapaks[lastId+1]);
    };
}]);