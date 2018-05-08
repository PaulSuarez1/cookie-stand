'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// first store
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
    this.custPerHourFunct();
    for ( var j = 0; j < hours.length; j++) {
        var arrayTimesAvg = Math.floor(this.custPerHour[j] * this.avgCookPerCust);
        this.cookPerHour.push(arrayTimesAvg);
        this.totalForDay += arrayTimesAvg;
        }
    }

firstAndPike.renderList = function () {
    var list = document.getElementById('totalName');
    var storeName = document.getElementById('totalName');
    var newH = document.createElement('li');
    newH.classList = ('storeName');
    newH.textContent = this.name;
    storeName.appendChild(newH);

    this.cookPerHourFunct();

    for (var h = 0; h < this.cookPerHour.length; h++) {
        var newLi = document.createElement('li');
        newLi.classList=('nameList');
        newLi.textContent = '' + hours[h] + ': ' + this.cookPerHour[h] + ' cookies';
        list.appendChild(newLi);
        }
        var totalName = document.getElementById('totalName');
        var newT = document.createElement('li');
        newT.classList=('totalNameList');
        newT.textContent = 'Total for the day: ' + this.totalForDay + ' cookies!';
        totalName.appendChild(newT);
    }

  
    


console.log('this is our array for customers per hour ' + firstAndPike.custPerHour);
console.log('this is our array for cookies being sold per hour in total ' + firstAndPike.cookPerHour);
console.log('this is how many in total we sold for the day ' + firstAndPike.totalForDay);






// second store
var seaTacAirport = {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    totalCust: 0,
    avgCookPerCust: 1.2,
    custPerHour: [],
    cookPerHour: [],
    totalForDay: 0,
}
    
seaTacAirport.custPerHourFunct = function () {
    for ( var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.custPerHour.push(random);
        }
    }

seaTacAirport.cookPerHourFunct = function () {
    this.custPerHourFunct();
    for ( var j = 0; j < hours.length; j++) {
        var arrayTimesAvg = Math.floor(this.custPerHour[j] * this.avgCookPerCust);
        this.cookPerHour.push(arrayTimesAvg);
        this.totalForDay += arrayTimesAvg;
        }
    }

seaTacAirport.renderList = function () {
    var list = document.getElementById('totalName');
    var storeName = document.getElementById('totalName');
    var newH = document.createElement('li');
    newH.classList = ('storeName');
    newH.textContent = this.name;
    storeName.appendChild(newH);

    this.cookPerHourFunct();

    for (var h = 0; h < this.cookPerHour.length; h++) {
        var newLi = document.createElement('li');
        newLi.classList=('nameList');
        newLi.textContent = '' + hours[h] + ': ' + this.cookPerHour[h] + ' cookies';
        list.appendChild(newLi);
        }
        var totalName = document.getElementById('totalName');
        var newT = document.createElement('li');
        newT.classList=('totalNameList');
        newT.textContent = 'Total for the day: ' + this.totalForDay + ' cookies!';
        totalName.appendChild(newT);
    }

  
    


console.log('this is our array for customers per hour ' + seaTacAirport.custPerHour);
console.log('this is our array for cookies being sold per hour in total ' + seaTacAirport.cookPerHour);
console.log('this is how many in total we sold for the day ' + seaTacAirport.totalForDay);







// third store
var seattleCenter = {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    totalCust: 0,
    avgCookPerCust: 3.7,
    custPerHour: [],
    cookPerHour: [],
    totalForDay: 0,
}
    
seattleCenter.custPerHourFunct = function () {
    for ( var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.custPerHour.push(random);
        }
    }

seattleCenter.cookPerHourFunct = function () {
    this.custPerHourFunct();
    for ( var j = 0; j < hours.length; j++) {
        var arrayTimesAvg = Math.floor(this.custPerHour[j] * this.avgCookPerCust);
        this.cookPerHour.push(arrayTimesAvg);
        this.totalForDay += arrayTimesAvg;
        }
    }

seattleCenter.renderList = function () {
    var list = document.getElementById('totalName');
    var storeName = document.getElementById('totalName');
    var newH = document.createElement('li');
    newH.classList = ('storeName');
    newH.textContent = this.name;
    storeName.appendChild(newH);

    this.cookPerHourFunct();

    for (var h = 0; h < this.cookPerHour.length; h++) {
        var newLi = document.createElement('li');
        newLi.classList=('nameList');
        newLi.textContent = '' + hours[h] + ': ' + this.cookPerHour[h] + ' cookies';
        list.appendChild(newLi);
        }
        var totalName = document.getElementById('totalName');
        var newT = document.createElement('li');
        newT.classList=('totalNameList');
        newT.textContent = 'Total for the day: ' + this.totalForDay + ' cookies!';
        totalName.appendChild(newT);
    }

  
    


console.log('this is our array for customers per hour ' + seattleCenter.custPerHour);
console.log('this is our array for cookies being sold per hour in total ' + seattleCenter.cookPerHour);
console.log('this is how many in total we sold for the day ' + seattleCenter.totalForDay);









// fourth store
var capitolHill = {
    name: 'Capitol Hill',
    minCust: 30,
    maxCust: 28,
    totalCust: 0,
    avgCookPerCust: 2.3,
    custPerHour: [],
    cookPerHour: [],
    totalForDay: 0,
}
    
capitolHill.custPerHourFunct = function () {
    for ( var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.custPerHour.push(random);
        }
    }

capitolHill.cookPerHourFunct = function () {
    this.custPerHourFunct();
    for ( var j = 0; j < hours.length; j++) {
        var arrayTimesAvg = Math.floor(this.custPerHour[j] * this.avgCookPerCust);
        this.cookPerHour.push(arrayTimesAvg);
        this.totalForDay += arrayTimesAvg;
        }
    }

capitolHill.renderList = function () {
    var list = document.getElementById('totalName');
    var storeName = document.getElementById('totalName');
    var newH = document.createElement('li');
    newH.classList = ('storeName');
    newH.textContent = this.name;
    storeName.appendChild(newH);

    this.cookPerHourFunct();

    for (var h = 0; h < this.cookPerHour.length; h++) {
        var newLi = document.createElement('li');
        newLi.classList=('nameList');
        newLi.textContent = '' + hours[h] + ': ' + this.cookPerHour[h] + ' cookies';
        list.appendChild(newLi);
        }
        var totalName = document.getElementById('totalName');
        var newT = document.createElement('li');
        newT.classList=('totalNameList');
        newT.textContent = 'Total for the day: ' + this.totalForDay + ' cookies!';
        totalName.appendChild(newT);
    }

  
    


console.log('this is our array for customers per hour ' + capitolHill.custPerHour);
console.log('this is our array for cookies being sold per hour in total ' + capitolHill.cookPerHour);
console.log('this is how many in total we sold for the day ' + capitolHill.totalForDay);









// firth store
var Alki = {
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    totalCust: 0,
    avgCookPerCust: 4.6,
    custPerHour: [],
    cookPerHour: [],
    totalForDay: 0,
}
    
Alki.custPerHourFunct = function () {
    for ( var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.custPerHour.push(random);
        }
    }

Alki.cookPerHourFunct = function () {
    this.custPerHourFunct();
    for ( var j = 0; j < hours.length; j++) {
        var arrayTimesAvg = Math.floor(this.custPerHour[j] * this.avgCookPerCust);
        this.cookPerHour.push(arrayTimesAvg);
        this.totalForDay += arrayTimesAvg;
        }
    }

Alki.renderList = function () {
    var list = document.getElementById('totalName');
    var storeName = document.getElementById('totalName');
    var newH = document.createElement('li');
    newH.classList = ('storeName');
    newH.textContent = this.name;
    storeName.appendChild(newH);

    this.cookPerHourFunct();

    for (var h = 0; h < this.cookPerHour.length; h++) {
        var newLi = document.createElement('li');
        newLi.classList=('nameList');
        newLi.textContent = '' + hours[h] + ': ' + this.cookPerHour[h] + ' cookies';
        list.appendChild(newLi);
        }
        var totalName = document.getElementById('totalName');
        var newT = document.createElement('li');
        newT.classList=('totalNameList');
        newT.textContent = 'Total for the day: ' + this.totalForDay + ' cookies!';
        totalName.appendChild(newT);
    }

  
    


console.log('this is our array for customers per hour ' + Alki.custPerHour);
console.log('this is our array for cookies being sold per hour in total ' + Alki.cookPerHour);
console.log('this is how many in total we sold for the day ' + Alki.totalForDay);












firstAndPike.renderList();
seaTacAirport.renderList();
seattleCenter.renderList();
capitolHill.renderList();
Alki.renderList();