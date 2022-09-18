
const sumOfMultiple = (limit: number): number => {

    const numberOne: number = 3
    const numberTwo: number = 5;
    let total: number = 0;

    for (let index = 0; index < limit; index++) {
    const resultOne = (index)%(numberOne);
    const resultTwo = (index)%(numberTwo); 

    if(resultOne === 0 || resultTwo === 0) {
        total += index;
    }
    }

    return total; 
    
} 

module.exports = sumOfMultiple;