'use-strict';

//Global variables for DOM access
var salmonForm = document.getElementById('salmonForm');
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
  if (this.max < this.min){
    let temp = this.max;
    this.max = this.min;
    this.min = temp;
  }

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

  for(var i in hourly){
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
new SalmonShop('Seattle Center', 50, 80, 2.4);
new SalmonShop('Capitol Hill', 20, 40, 2.0);
new SalmonShop('Alki', 1, 50, 5.3);

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Name';
  trEl.appendChild(thEl);

  for( var i in hourly){
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
  trEl.appendChild(tdEl);

  salmonTable.appendChild(trEl);
}

// This function is the event handler for the submission of store data
function formSubmission(event){
  //debug on console to display user input
  console.log('log of the event object', event);
  console.log('log of the event.target', event.target);
  console.log('log of the event.target.name', event.target.name);
  console.log('log of event.target.name.value', event.target.name.value);

  // Helps to not reset the page after form submission
  event.preventDefault();

  var storeName = event.target.name.value;
  var minInput = event.target.min.value;
  var maxInput = event.target.max.value;
  var avgInput = event.target.avg.value;
  new SalmonShop(storeName, minInput, maxInput, avgInput);
  
  //calculate new store values then display tables again!
  salmonTable.innerHTML = '';
  makeHeaderRow();
  allTotalSales();
  renderAllSalmonShops();
  footerRow();

  // Empties the form fields after the data has been grabbed
  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}

// Event listener for comment submission form
salmonForm.addEventListener('submit', formSubmission);

// Invokes function to display salmon table
makeHeaderRow();
allTotalSales();
renderAllSalmonShops();
footerRow();
