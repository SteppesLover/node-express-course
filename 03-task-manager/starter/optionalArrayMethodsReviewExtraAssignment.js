const stuff = [1, 2, 'fish', { id: 3 }];

const object = {
  data: 1,
  behavior: function() {
    this.data++;
    console.log('OOP demo:', this.data);
  }
}


object.behavior()
object.behavior()
object.behavior()
object.behavior()
object.behavior()

  const integers = [1, 2, 3, 4, 5];
  const evenNumbers = integers.filter((integer) => {
    return integer % 2 === 0
  })

   const numbers = [1, 2, 3];
   const doubles = numbers.map((i) => i * 2);

   evenNumbers.forEach((thingy) => console.log('even', thingy));
   doubles.forEach((d) => console.log('doubled!', d));

  const lastNames = ['Smith', 'Toure', 'Hernandez']
  const initialValue = 0;
  const totalLettersInNames = lastNames.reduce((runningTotal, currentName) => {
    return runningTotal + currentName.length;
  }, initialValue)
  console.log({totalLettersInNames});


  const people = [{id: 1, name: 'tim'}, {id: 2, name: 'jane'}];
  const peopleIdMap = people.reduce((map, person) => {
    map[person.id] = person;
    return map;
  }, {} );

  console.log({lookedUpPerson1: peopleIdMap[1]})
  console.log({lookedUpPerson2: peopleIdMap[2]});

  const peopleNameMap = people.reduce((map, person) => ({
    ...map,
    [person.name]: person
  }), {});

  console.log({lookupTim: peopleNameMap['tim']})
  console.log({lookupJane: peopleNameMap['jane']});

const names = [
  'Dimitry SantiAgo',
  'Carlos d. Perez',
  'tam  person',
  'Mariana Gomez',
  'Amy You'
];


const everyonesLastName = names.map((name) => {
  const eachWordSeparated = name.split(" ")
  const lastName = eachWordSeparated.pop();
  return lastName;
});
console.log('everyone last name', everyonesLastName);


const rightFormat = /^\w+ \w+$/;
const matchesTeachersPedanticFormattingRule = names.filter((name) => {
  return name.match(rightFormat);
});
console.log('good students', matchesTeachersPedanticFormattingRule)


const titledNames = names.map((name) => {
  const eachWordSeparated = name.split(" ")

  const titledName = eachWordSeparated.map((inputWord) => {
    const inputLetters = inputWord.split("");
    const wordWithFirstLetterUppercase = inputLetters
      .map((letter, idx) => (
        idx === 0
          ? letter.toUpperCase()
          : letter.toLowerCase()
      ))
      .join("")
    return wordWithFirstLetterUppercase
  });
  return titledName.join(" ")
});
console.log('titledNames', titledNames);


const transformWordIntoTitle = (characterInWord, indexOfCharacter) => {
  if (indexOfCharacter === 0) {
    return characterInWord.toUpperCase();
  } 
  return characterInWord.toLowerCase();
}


const transformStringIntoTitledWords = (wordInString) => {
  const letters = wordInString.split('');
  const titleCaseLetters = letters.map(transformWordIntoTitle);
  return titleCaseLetters.join('');
}


const transformNameIntoTitleCase = (name) => {
  const nameWords = name.split(/ +/);
  const titleCaseWords = nameWords.map(transformStringIntoTitledWords)
  return titleCaseWords.join(' ');
}

console.log(
  'titledNames verbose',
  names.map(transformNameIntoTitleCase)
)



const result = names
  .filter((name) => name.match(rightFormat))
  .map(transformNameIntoTitleCase)
  .filter((name) => {
    const lastLetter = name.slice(-1);
    return lastLetter.toLowerCase() !== 'z'
  })
  .map((name) => `
    Hey there ${name}!
    Want to buy my thing?
  `);

console.log('result', result);
