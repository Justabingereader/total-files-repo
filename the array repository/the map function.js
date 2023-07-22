function doubled(arr){
    const doubledNumber = arr.map((num) => {
        return num * 2;
    });
    return doubledNumber;
};

const number = [1, 2, 3, 4, 5];
const doubler = doubled(number);
console.log(doubler);