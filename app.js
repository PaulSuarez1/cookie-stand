'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



var firstAndPike = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    totalCust: 0,
    avgCookPerCust: 6.3,
    custPerHour: [],
    cookPerHour: [],
    totalForDay: 0,
}
    
firstAndPike.custPerHourFunct = function () {
    for ( var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.custPerHour.push(random);
        }
    }

firstAndPike.cookPerHourFunct = function () {
    for ( var j = 0; j < hours.length; j++) {
        var arrayTimesAvg = Math.floor(firstAndPike.custPerHour[j] * firstAndPike.avgCookPerCust);
        this.cookPerHour.push(arrayTimesAvg);
        firstAndPike.totalForDay += arrayTimesAvg;
        }
    }

firstAndPike.renderList = function () {
    var list = document.getElementById('firstAndPike');
    for (var h = 0; h < this.cookPerHour.length; h++) {
        var newLi = document.createElement('li');
        newLi.textContent = '' + hours[h] + ': ' + this.cookPerHour[h] + ' cookies';
        list.appendChild(newLi);
        }
    }

firstAndPike.custPerHourFunct();
firstAndPike.cookPerHourFunct();
firstAndPike.renderList();

console.log('this is our array for customers per hour ' + firstAndPike.custPerHour);
console.log('this is our array for cookies being sold per hour in total ' + firstAndPike.cookPerHour);
console.log('this is how many in total we sold for the day ' + firstAndPike.totalForDay);
