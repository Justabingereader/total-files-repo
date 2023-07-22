function filtered(arr){
    const oddNumbers = arr.filter((num) => {
        return num & 2 !== 0;
    });
        return oddNumbers;
};

const numbers = [1,2,3,4,5,6,7,8,9,10];
const oddGotten = filtered(numbers);
console.log(oddGotten);