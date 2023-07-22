function popped(arr, element){
    while(arr.length > 3){
        arr.pop(element);
    }
    return arr;
};
const numbers = [1,2,3,4,5,6];

const reduced = popped(numbers);
console.log(reduced);