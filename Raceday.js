// Randomly assign race numbers to competitors
let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 18;

// Assigns a number to the registered competitors
if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (registeredEarly && runnerAge > 18) {
  console.log(`${raceNumber}, you will race at 09:30 AM.`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`${raceNumber}, you will race at 11:00 AM.`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber}, you will race at 12:30 PM.`);
} else if (runnerAge === 18) {
  console.log('Please see the registration desk.');
}

