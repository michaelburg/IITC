const driveToGasStation = new Promise((resolve, reject) => {
  resolve("Drive to gas station");
});
const fillTheCar = new Promise((resolve, reject) => {
  resolve("Fill the car");
});
const driveToResturant = new Promise((resolve, reject) => {
  resolve("drive to restaurant");
});

driveToGasStation.then((message) => {
  console.log(message);
  return fillTheCar;
});
fillTheCar.then((message) => {
  console.log(message);
  return driveToResturant;
});
driveToResturant.then((message) => {
  console.log(message);
});
// Drive to gas station
// Fill the car
// drive to resturant'
