// PART 1: MATH PROBLEMS

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
/*
Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
*/
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(
  `The four numbers are valid according to the provided criteria: ${isValid}.`
);

// Check if all numbers are divisible by 5.
const allDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;

// Check if the first number is larger than the last.
const isFirstLargerThanLast = n1 > n4;

/*
Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
*/
const arithmetic = (n2 - n1 + n3) % n4;

// Log the results.
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}.`);

console.log(
  `The first number is larger than the last: ${isFirstLargerThanLast}.`
);

console.log(`The result of the arithmetic chain is: ${arithmetic}.`);

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

/*
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
*/

// Calculate and display the details for the speeds
const speeds = [55, 60, 75];

speeds.forEach((speed) => {
  const trip = calculateTrip(speed);
  console.log(
    `At ${trip.speed} mph, you need ${trip.fuelNeeded} gallons of fuel, costing $${trip.cost}. The trip takes ${trip.time} hours. Is the budget enough for this trip? ${trip.isBudgetEnough}.`
  );
});
