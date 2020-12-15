let currentDate = new Date().getFullYear();

let findTheOldest = function (lst) {
  let oldestPerson;
  let person;
  for (let el in lst) {
    person = lst[el];
    if (person.hasOwnProperty("yearOfDeath")) {
      person.age = person.yearOfDeath - person.yearOfBirth;
    } else {
      person.age = currentDate - person.yearOfBirth;
    }
    if (!oldestPerson) {
      oldestPerson = person;
    }

    if (person.age > oldestPerson.age) {
      oldestPerson = person;
    }
  }
  console.log(
    "Oldest found: " + oldestPerson.name + " at age " + oldestPerson.age
  );
  return oldestPerson;
};

module.exports = findTheOldest;
