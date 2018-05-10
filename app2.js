'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];

var storeTable = document.getElementById('storeTable');
var storeForm = document.getElementById('storeForm');
var clearStoreTable = document.getElementById('clearStoreTable');

function Store(name, minCust, maxCust, avgCookPerCust, totalCust, custPerHour, cookPerHour, totalForDay) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookPerCust = avgCookPerCust;
    this.totalCust = totalCust;
    this.custPerHour = [];
    this.cookPerHour = [];
    this.totalForDay = 0;
    allStores.push(this);
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


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


//===================================================

function handleStoreSubmit(event) {

    event.preventDefault();

    if (!event.target.name.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookPerCust.value) {
        return alert('Please fill all of the fields below!');
    }

    var newName = event.target.name.value;
    var newMin = event.target.minCust.value;
    var newMax = event.target.maxCust.value;
    var newAvg = event.target.avgCookPerCust.value;

    event.target.name.value = null;
    event.target.minCust.value = null;
    event.target.maxCust.value = null;
    event.target.avgCookPerCust.value = null;

    var newStore = new Store(newName, newMin, newMax, newAvg);


    var custPerHourFunct = function () {
        for (var i = 0; i < hours.length; i++) {
            var random = Math.floor(Math.random() * (newStore.maxCust - newStore.minCust + 1)) + newStore.minCust;
            newStore.custPerHour.push(random);
            console.log(random);
        }
    }
    // second math function
    var cookPerHourFunct = function () {
        newStore.custPerHourFunct();
        for (var j = 0; j < hours.length; j++) {
            var arrayTimesAvg = Math.floor(newStore.custPerHour[j] * newStore.avgCookPerCust);
            newStore.cookPerHour.push(arrayTimesAvg);
            newStore.totalForDay += arrayTimesAvg;
        }
    }

    // Body of table (cookies per hour)
    var render = function () {
        newStore.cookPerHourFunct();

        var trEl = document.createElement('tr');
        var tdEl = document.createElement('td');

        tdEl.textContent = newStore.name;
        trEl.appendChild(tdEl);
        tdEl = document.createElement('td');

        for (var i in hours) {
            tdEl.textContent = newStore.cookPerHour[i];
            trEl.appendChild(tdEl);
            tdEl = document.createElement('td');
        }

        tdEl.textContent = newStore.totalForDay;
        trEl.appendChild(tdEl);
        tdEl = document.createElement('td');

        storeTable.appendChild(trEl);
    }

    render();

    allStores.unshift(newStore);


}

storeForm.addEventListener('submit', handleStoreSubmit);






console.table(allStores);