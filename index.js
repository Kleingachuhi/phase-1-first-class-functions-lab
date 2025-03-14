const returnFirstTwoDrivers = function() {
const firstName  = 'Antonia';
const secondName = 'Nuru';
const thirdName = 'Amari';
const fourthName = 'Mo';
const twoNames = ['Antonia', 'Nuru'];

return twoNames;

};

const returnLastTwoDrivers = function () {
    const firstName  = 'Antonia';
const secondName = 'Nuru';
const thirdName = 'Amari';
const fourthName = 'Mo';
const lastNames = ['Amari', 'Mo'];
 return lastNames;
};

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
console.log(createFareMultiplier())

 function fareDoubler(value) {  
return value * 2;
};
fareDoubler(45);

function fareTripler(num) {
    return num  * 3;
};
fareTripler(45);
const returnTheFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnTheLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
  }
  const returnOnlyFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnOnlyLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
  }
  const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
  console.log(selectDifferentDrivers(drivers, returnOnlyFirstTwoDrivers));
  console.log(selectDifferentDrivers(drivers, returnOnlyLastTwoDrivers)); 
