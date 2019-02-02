const array = [1,3,4,5,8,9];

// const newArray = array.map(function(item) {
//     return item*2;
// });

const newArray = array.map(function(item, index) {
    return item + index;
});

console.log(newArray);

const sum = array.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = array.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = array.find(function(item) {
    return item === 4;
});

console.log(find);