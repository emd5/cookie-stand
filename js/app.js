'use-strict';

var allSalmonShopsArray = [];

var salmonTable = document.getElementById('salmonTable');

var hourly = ['6am','7am','8am','9am','10am','11am','12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];

function SalmonShop(shopLocation, min, max, avgCookiePerCustomer){
  this.shopLocation = shopLocation;
  this.min = min;
  this.max = max;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.totalDailyCookies = 0;
  this.cookiesEachHour = [];
  allSalmonShopsArray.push(this);
}

console.table(allSalmonShopsArray);

SalmonShop.prototype.calcCookiesEachHour = function(){
  for (var i=0; i< hourly.length; i++){
    var customersEachHour = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    var oneHour = Math.ceil(customersEachHour * this.avgCookiePerCustomer);
    this.totalDailyCookies += oneHour;
    this.cookiesEachHour.push(oneHour);
  }
};

SalmonShop.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  trEl.textContent = this.shopLocation;

  for(var i=0; i< hourly.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailyCookies;
  trEl.appendChild(tdEl);

  salmonTable.appendChild(trEl);

};

new SalmonShop('1st And Pike', 2, 20, 1.4);
new SalmonShop('SeaTac Airport', 30, 40, 1.3);
new SalmonShop('Seattle Center', 1, 80, 2.4);
new SalmonShop('Capitol Hill', 20, 40, 2.0);
new SalmonShop('Alki', 1, 50, 5.3);

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Name';
  trEl.appendChild(thEl);

  for( var i=0; i<hourly.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hourly[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  salmonTable.appendChild(trEl);

}

function renderAllSalmonShops(){
  for (var i=0; i<allSalmonShopsArray.length; i++){
    allSalmonShopsArray[i].render();
  }
}

function allTotalSales(){
  for( var i in allSalmonShopsArray){
    allSalmonShopsArray[i].calcCookiesEachHour();
  }
}

function footerRow(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);

  var totalHours = 0;

  for (var i=0; i< hourly.length; i++){

    var hourTotal = 0;

    for(var j=0; j<allSalmonShopsArray.length; j++){

      hourTotal += allSalmonShopsArray[j].cookiesEachHour[i];
    }

    totalHours += hourTotal;
    tdEl = document.createElement('td');
    tdEl.textContent = hourTotal;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalHours;
  trEl.appendChild(trEl);

  salmonTable.appendChild(trEl);

}

makeHeaderRow();
allTotalSales();
renderAllSalmonShops();
footerRow();
