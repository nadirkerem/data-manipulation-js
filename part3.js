// PART 3: FUTURE EXPLORATION
const distance = 1500;
const fuelPrice = 3;
const budget = 175;

/*
There are two tools that would make it much easier to implement the logic we need and to reuse the code to test with different values:
Control flow, which is how we conditionally determine what a program does next. For example, if we exceed our fuel budget, perhaps the program could automatically change the speed it is testing until it finds the optimal speed.
Functions, which are reusable blocks of code, allow us to run pieces of code multiple times without rewriting the code or changing the value of variables in the code itself, like we needed to do above.
*/

// Write a function that calculates the fuel efficiency at a given speed between 25 and 75.
function fuelEfficiencyGenerator(speed) {
  if (25 <= speed && speed <= 75) {
    let fuelEfficiency = {};
    let mpg = 55;
    // mpg is 55 because it's a Prius! :)
    for (let i = 25; i <= 75; i += 1) {
      fuelEfficiency[i] = mpg;
      mpg -= 0.8;
    }
    return fuelEfficiency[speed].toFixed();
  } else {
    return 'Please enter a speed between 25 and 75';
  }
}

// Calculate the optimal trip based on the budget.
function calculateOptimalTrip(speed, firstAttempt = true) {
  const fuelNeeded = distance / fuelEfficiencyGenerator(speed);
  const cost = fuelNeeded * fuelPrice;
  const time = distance / speed;

  if (cost > budget) {
    if (firstAttempt) {
      console.log(
        `Slow down! The budget is not enough for the speed of ${speed} mph.`
      );
      return calculateOptimalTrip(speed - 1, false);
    }

    // recursive call to find the optimal speed
    return calculateOptimalTrip(speed - 1, false);
  }

  console.log(`The optimal speed is ${speed} mph. Here are the details:`);
  return {
    speed,
    fuelNeeded: fuelNeeded.toFixed(2),
    cost: cost.toFixed(2),
    time: time.toFixed(2),
    isBudgetEnough: cost <= budget ? 'Yes' : 'No',
  };
}

// Test the function
console.log(calculateOptimalTrip(72));
