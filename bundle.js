"use strict";

var array = [1, 3, 4, 5, 8, 9]; // const newArray = array.map(function(item) {
//     return item * 2;
// });
// Arrow function

var newArray = array.map(function (item) {
  return item * 2;
}); //const teste = () => 'teste';
//const teste = () => [1,2,3];
// const teste = () => 1;
//const teste = () => { nome: 'Reginaldo' }; //nao funciona
// const teste = () => {
//     return { nome: 'Reginaldo'}
// }

var teste = function teste() {
  return {
    nome: 'Teste'
  };
};

console.log(newArray);
console.log(teste());
