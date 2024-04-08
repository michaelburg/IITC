// JS Boolean Expressions:

let age = 40;
let isSingle = false;
let isYomKippur = false;

// Check if a person is old enough to drink beer 👇
const isOldEnoughForBeer = age >= 18;
console.log("isOldEnoughForBeer is", isOldEnoughForBeer);

// Check if a person is old enough to have some wisdom 👇
const hasSomeWisdom = age > 70;
console.log("hasSomeWisdom is", hasSomeWisdom);

// Check if a person is single *and* 30 years old or older 👇
const shouldBeMarried = age > 30 && isSingle === false;
console.log("shouldBeMarried is", shouldBeMarried);

// Check if a person is old enough to cross the street alone *or* it's Yom Kippur 👇
const canCrossTheStreetAlone =  age > 9 || isYomKippur;
console.log("canCrossTheStreetAlone is", canCrossTheStreetAlone);

// NOTE: Boolean values named using "is" / "has" / "should" / "can" are common in JavaScript.