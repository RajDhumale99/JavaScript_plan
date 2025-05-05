// let name = "Pratik";
// let age = 18;
// let isLoggedIn = false;
// let state = null;
// // number => 2 to power of 53
// // bigInt
// // string => " "
// // boolean => true/false
// // null => standalone value => object
// // undefined =>
// // symbol => unique



// console.log(typeof(state))

// declare variables to hold
// parts of speech and print them
// noun = dragon , verb = dance , adjactive = sparkling

// let story = `Behold a ${adjactive} &{noun}
// that loves to &{verb}`
// then print this story on screen

// let noun = "dragon";
// let verb = "dance";
// const adjactive = "sparkling";

// let story = `Behold a ${adjactive} ${noun} that loves to ${verb}`;
// console.log(story)


//2. Temperatur converter (Number & Typeconverion)
// const celsius = "25";
// const Cnum = parseFloat(celsius)

// const fahrenheit = (Cnum * 9) / 5 + 32;

// console.log(`${Cnum}C is ${fahrenheit}F`)

// 3. Mini contact book (Objects, Arrays & Null)
const contacts = [
  { name: "Alice", phone: "123-456" },
  { name: "Bob", phone: null },
];

contacts.forEach((c) => {
  const display = c.phone === null ? "N/A" : c.phone;
  console.log(`${c.name}: ${display}`);
});
