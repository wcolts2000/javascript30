// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);





// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

// console.log(players, team);
// You might think we can just do something like this:
// team[3] = 'Lux';
// console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
team2[3] = "Lux";

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "Towelie";

const team5 = Array.from(players)

// console.log(players, team2, team3, team4, team5);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
name: 'Wes Bos',
age: 80
};
// console.log(person);

// and think we make a copy:
// const captain = person;
// captain.number = 90;

// how do we take a copy instead?
const cap2 = Object.assign([], person, { number: 90 })


// console.log(person, cap2);

// We will hopefully soon see the object ...spread
const cap3 = {...person};
// console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
}

// const dev = Object.assign({}, wes);
const dev = {...wes};
dev.name = 'Wesley';
dev.social.twitter = '@coolman'; // note this changes the original ref of wes too

console.log(wes, dev);

const dev2 = JSON.parse(JSON.stringify(wes)); // Poormans Deep Clone
dev2.social.twitter = "@recraycray";
console.log(wes.social, dev2.social);

