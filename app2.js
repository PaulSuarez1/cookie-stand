'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];

var storeTable = document.getElementById('stores');

function Store(name, minCust, maxCust, totalCust, avgCookPerCust, custPerHour, cookPerHour, totalForDay) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.totalCust = totalCust;
    this.avgCookPerCust = avgCookPerCust;
    this.custPerHour = [];
    this.cookPerHour = [];
    this.totalForDay = 0;
    allStores.push(this);
}

new Store('1st and Pike', 23, 65, 0, 6.3);
new Store('SeaTac Airport', 3, 24, 0, 1.2);
new Store('Seattle Center', 11, 38, 0, 3.7);
new Store('Capitol Hill', 20, 38, 0, 2.3);
new Store('Alki', 2, 16, 0, 4.6);


// Header of table
Store.prototype.header = function () {

    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');

    thEl.textContent = 'Store Names';
    trEl.appendChild(thEl);
    thEl = document.createElement('th');

    for (var i in hours) {
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
        thEl = document.createElement('th');
    }

    thEl.textContent = 'Totals for the Day';
    trEl.appendChild(thEl);
    thEl = document.createElement('th');

    storeTable.appendChild(trEl);
}
// first math function
Store.prototype.custPerHourFunct = function () {
    for (var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.custPerHour.push(random);
    }
}
// second math function
Store.prototype.cookPerHourFunct = function () {
    this.custPerHourFunct();
    for (var j = 0; j < hours.length; j++) {
        var arrayTimesAvg = Math.floor(this.custPerHour[j] * this.avgCookPerCust);
        this.cookPerHour.push(arrayTimesAvg);
        this.totalForDay += arrayTimesAvg;
    }
}

// Body of table (cookies per hour)
Store.prototype.render = function () {
    this.cookPerHourFunct();

    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');

    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');

    for (var i in hours) {
        tdEl.textContent = this.cookPerHour[i];
        trEl.appendChild(tdEl);
        tdEl = document.createElement('td');
    }

    tdEl.textContent = this.totalForDay;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');

    storeTable.appendChild(trEl);
}

function renderAllStores() {
    for (var i in allStores) {
        allStores[i].render();
    }
}

Store.prototype.header();
renderAllStores();
console.table(allStores);