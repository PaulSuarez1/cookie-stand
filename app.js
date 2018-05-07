'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



var firstAndPike = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    totalCust: null,
    avgCookPerCust: 6.3,
    custPerHour: [],
    cookPerHour: [],
    totalForDay: null,
    render: function () {
        var list = document.getElementById('first-and-pike');
        var newLi = document.createElement('li');
        newLi.textContext = this;
        list.appendChild(newLi);
    }
    
}
    
firstAndPike.custPerHourFunct = function () {
    for ( var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.custPerHour.push(random);
        }
    
}
firstAndPike.custPerHourFunct();
console.log(firstAndPike.custPerHour);