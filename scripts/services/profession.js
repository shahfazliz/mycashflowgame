'use strict';
angular.module('app').service('thisProfession',function(){
    this.teacher = {};
    this.teacher.name = 'Teacher';
    this.teacher.monthly_income = {
        salary:[{
            value: 3300
        }]
        // interests:[{
        //     item    : '',
        //     value   : ''
        // }],
        // dividens:[{
        //     item    : '',
        //     value   : ''
        // }],
        // realEstates:[{
        //     item    : '',
        //     value   : ''
        // }],
        // business:[{
        //     item    : 'VeryGood4U',
        //     value   : 300
        // },
        // {
        //     item    : 'SuperGood4U',
        //     value   : 200
        // }]
    };
    this.teacher.numberOfChildren = 0;
    this.teacher.expensesPerChild = 0;
    this.teacher.monthly_expenses = {
        tax:[{
            value   : 630
        }],
        homeLoan:[{
            value   : 500
        }],
        studyLoan:[{
            value   : 60
        }],
        carLoan: [{
            value   : 100
        }],
        creditCard: [{
            value   : 90
        }],
        retail: [{
            value   : 50
        }],
        others: [{
            value   : 760
        }],
        child: [{
            value   : (this.teacher.numberOfChildren*this.teacher.expensesPerChild)
        }],
        bankLoan:[{
            value   : 0
        }]
    };
    this.teacher.assets = {
        cash:[{
            value:400
        }]
    };
    this.teacher.liabilities = {
        homeMortgage : [{
            value   : 50000
        }],
        studyLoans : [{
            value   : 12000
        }],
        carLoans : [{
            value   : 5000
        }],
        creditCards : [{
            value   : 3000
        }],
        retailDebts : [{
            value   : 1000
        }],
        rEMortgages : [{
            item    : '',
            value   : 0
        }]
    };
    
    this.teacher.totalIncome = function(){
        var total = 0;
        for(var i in this.teacher.monthly_income){
            for(var j in this.teacher.monthly_income[i]){
                total += this.teacher.monthly_income[i][j].value;
            }
        }
        return total;
    };
    
    this.teacher.passiveIncome = function(){
        return this.teacher.totalIncome() - this.teacher.monthly_income.salary[0].value;
    };
});