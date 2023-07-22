let numbers = [];
for(let i = 1; i < 101; i++){
    switch(i % 2){
        case 0:
            numbers.push(i);
            break;
    }
}
console.log(numbers);