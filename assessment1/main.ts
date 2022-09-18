// Use type and mentioned in the name of the variable
// Assign an appropriate value
const aNumber: number = 5;
const aString: string = 'string';
const aBigInt: BigInt = 13333333n;
const anArray: Array<number> = [1]
const anUnknown: unknown = null;
const anObject: object = {};
const aTuple: [number,string] = [10, 'Mamé'];
enum Size 
{ Small=1 ,
  Medium,
  Large 
};

// Implement this function any type accordingly
function isEven(number: number): boolean {
    return number % 2 === 0;
}

// Type the following following function and variable
type Person = {
    name: string
}

type Developer = {
    role: string
}

const jane: Person = {
    name: 'Jane'
}

const joe: Developer = {
    role: 'Devops'
}

type People = (Person | Developer)[];
   

function printPeople(people: People): void {
    // Print the name of person or the role in this function
    // const printResult = people.name | people.role
    people.forEach(element => {
        console.log('first', element)
    });
    
}
// Type the encrpyt function correctly
const encryptText = (plainText: string, shift: number) => {
    let cipherArr: string[] = []
    let cipherLetter

    plainText.split("").map(letter => {
      let code = letter.charCodeAt(0)
      if(letter === " ") {
        return cipherArr.push(letter)
      }
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65)
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97)
      }
      return cipherArr.push(cipherLetter)
    })  
    return cipherArr.join("")
}

type Vegetable = 'Cucumber' | 'Eggplant' | 'Cabbage';
// Solve using a literal union type
let vegetable: Vegetable;
vegetable = "Cucumber";
vegetable = "Eggplant";
vegetable = "Cabbage";


// Solve the following exercise with an intersection type
type Complainer = {
    complains: () => void
}

type Beerdrinker = {
    drinkBeer: () => void
}

type ChocolateLover = {
    eatChocolate: () => void
}

type Belgian = Complainer & Beerdrinker & ChocolateLover;
function doBelgianThings(belgian: Belgian): void
{
    belgian.complains();
    belgian.drinkBeer();
    belgian.eatChocolate();
}

module.exports = {
    isEven,
    print,
    encryptText
};