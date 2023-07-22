function multiplier(arr){
    const multiplied = arr.reduce((a, b) => {
        return a * b;
    });
    return multiplied;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
const accumulated = multiplier(numbers);
console.log(accumulated);