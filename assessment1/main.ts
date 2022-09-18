// Use type and mentioned in the name of the variable
// Assign an appropriate value
const aNumber: any = null;
const aString: any = null;
const aBigInt: any = null;
const anArray: any = null
const anUnknown: any = null;
const anObject: any = null;
const aTuple: any = null;
const anEnum: any = null;

// Implement this function any type accordingly
function isEven(number): any {

}

// Type the following following function and variable
type Person = {
    name: string
}

type Developer = {
    role: string
}

const jane: any = {
    name: 'Jane'
}

const joe: any = {
    role: 'Devops'
}

const people: any[] =  [
    jane, joe
]

function printPeople(people: any[]): any {
    // Print the name of person or the role in this function
}

// Type the encrpyt function correctly
const encryptText = (plainText: any, shift: any) => {
    let cipherArr: any[] = []
    let cipherLetter

    plainText.split("").map(letter => {
      let code = letter.charCodeAt(letter)
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


// Solve using a literal union type
let vegetable: any; // :Vegetable:
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