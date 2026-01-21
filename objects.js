// An object in Js
const student = {
  fullName: "Amon Melly",
  age: 31,
  isEnrolled: true,
  modules: ["Mathematics", "Physics", "Chemistry"],
  address: {
    county: "Nandi",
    subCounty: "Aldai",
    Ward: "Kaptumo Kaboi",
  },
  Clan: "Kaptuiya",
  submitAssignment: function sendingEmailAssignment(subject) {
    console.log("A simulation of submitting an Assignment for " + subject);
  },
};

// An object is a collection of labelled related data, stored under one variable name
// An object has property: value pairs, separated by commas
// The value of an object can be of any data type including a function
// We use the dot notation to access the properties of an object

console.log(student.age);

// sub county of the student
console.log(student.address.subCounty);
student.submitAssignment("Math");
//ASSIGNMENT: Why are we not using the name of the function while calling it - SendingEmailAssignment

// ARRAY is a special type of object used to store ordered/indexed collection/lists of items
console.log(student.modules[0]); // mathematics
console.log(student.modules[2]); // chemistry
