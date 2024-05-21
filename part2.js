// PART 2: PRACTICAL MATH

/*
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
*/

/*
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
*/

// Define the parameters for the road trip
const distance = 1500;
const fuelPrice = 3;
const budget = 175;
const fuelEfficiency = {
  55: 30,
  60: 28,
  75: 23,
};

// Calculate the trip at each speed
function calculateTrip(speed) {
  const fuelNeeded = distance / fuelEfficiency[speed];
  const cost = fuelNeeded * fuelPrice;
  const time = distance / speed;

  return {
    speed,
    fuelNeeded: fuelNeeded.toFixed(2),
    cost: cost.toFixed(2),
    time: time.toFixed(2),
    isBudgetEnough: cost <= budget ? 'Yes' : 'No',
  };
}

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

// Calculate and display the details for the speeds
const speeds = [55, 60, 75];

speeds.forEach((speed) => {
  const trip = calculateTrip(speed);
  console.log(
    `At ${trip.speed} mph, you need ${trip.fuelNeeded} gallons of fuel, costing $${trip.cost}. The trip takes ${trip.time} hours. Is the budget enough for this trip? ${trip.isBudgetEnough}.`
  );
});
