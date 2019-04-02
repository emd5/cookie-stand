'use-strict';

// Calculates cookies from a range between max and min
function randomCookies(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates random number of customers
function generateCustomer(numberOfCustomers) {
  return Math.floor(Math.random() * Math.floor(numberOfCustomers));
}

// A list of hours
var hourly = ['6am','7am','8am','9am','10am','11am','12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm', '8pm'];

var location0 = {
  name: '1st and Pike',
  min: 1,
  max: 10,
  avg: 1.3,
  customer: generateCustomer(30),
  numberOfCookies: [],
  totalCookies: 140,
  render(){
    document.getElementById('location'+0).innerHTML = this.name;
    //displays hours with number of cookies
    let ulEl = document.getElementById('locationData'+0);
    for(let i= 0; i< hourly.length; i++) {
      var liEl = document.createElement('li');
      this.numberOfCookies = randomCookies(this.min, this.max);
      liEl.textContent = hourly[i] + ': ' + this.numberOfCookies + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};
location0.render();

var location1 = {
  name: 'SeaTac Airport',
  min: 10,
  max: 20,
  avg: 4.5,
  customer: generateCustomer(30),
  numberOfCookies: [],
  totalCookies: 140,
  render(){
    document.getElementById('location'+1).innerHTML = location1.name;
    //displays hours with number of cookies
    var ulEl1 = document.getElementById('locationData'+1);
    for(let i= 0; i< hourly.length; i++) {
      let liEl = document.createElement('li');
      location1.numberOfCookies = randomCookies(location1.min, location1.max);
      liEl.textContent = hourly[i] + ': ' + location1.numberOfCookies + ' cookies';
      ulEl1.appendChild(liEl);
    }
  }
};
location1.render();


var location2 = {
  name: 'Seattle Center',
  min: 15,
  max: 40,
  avg: 1.2,
  customer: generateCustomer(30),
  numberOfCookies: [],
  totalCookies: 140,
  render(){
    document.getElementById('location'+2).innerHTML = location2.name;
    //displays hours with number of cookies
    var ulEl2 = document.getElementById('locationData'+2);
    for(let i= 0; i< hourly.length; i++) {
      let liEl = document.createElement('li');
      location2.numberOfCookies = randomCookies(location2.min, location2.max);
      liEl.textContent = hourly[i] + ': ' + location2.numberOfCookies + ' cookies';
      ulEl2.appendChild(liEl);
    }
  }
};
location2.render();


var location3 = {
  name: 'Capitol Hill',
  min: 80,
  max: 100,
  avg: 8.0,
  customer: generateCustomer(30),
  numberOfCookies: [],
  totalCookies: 140,
  render(){
    document.getElementById('location'+3).innerHTML = location3.name;
    //displays hours with number of cookies
    var ulEl3 = document.getElementById('locationData'+3);
    for(let i= 0; i< hourly.length; i++) {
      let liEl = document.createElement('li');
      location3.numberOfCookies = randomCookies(location3.min, location3.max);
      liEl.textContent = hourly[i] + ': ' + location3.numberOfCookies + ' cookies';
      ulEl3.appendChild(liEl);
    }
  }
};
location3.render();

var location4 = {
  name: 'Alki',
  min: 15,
  max: 40,
  avg: 6.0,
  customer: generateCustomer(30),
  numberOfCookies: [],
  totalCookies: 140,
  render(){
    document.getElementById('location'+4).innerHTML = location4.name;
    //displays hours with number of cookies
    var ulEl4 = document.getElementById('locationData'+4);
    for(let i= 0; i< hourly.length; i++) {
      let liEl = document.createElement('li');
      location4.numberOfCookies = randomCookies(location4.min, location4.max);
      liEl.textContent = hourly[i] + ': ' + location4.numberOfCookies + ' cookies';
      ulEl4.appendChild(liEl);
    }
  }
};
location4.render();

