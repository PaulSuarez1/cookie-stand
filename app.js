'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var firstAndPike = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    totalCust: random(minCust, maxCust),
    avgCookPerCust: 6.3,
    custPerHour: [],
    cookPerHour: [],
    totalForDay: totalCust * avgCookPerCust,
    display: function render() {
        var list = document.getElementById('first-and-pike')

    }
}

