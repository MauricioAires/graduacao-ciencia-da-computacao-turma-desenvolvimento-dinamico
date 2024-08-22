const values = [8, 1, 7, 2, 9];

console.log("Valores invertido", values.reverse());

// Interações
for (var i = 0; i < values.length; i++) {
  console.log("Posição : " + i + values[i]);
}

// Calcular a media de valores de um array

let soma = 0;

for (var i = 0; i < values.length; i++) {
  soma += values[i];
}

console.log(`Media de valores: ${soma / values.length}`);

// Métodos de array

/**
 * join - juntar array
 * shift - retorna o primeiro
 * sort
 * reverse
 * slice
 * length
 * push - adiciona no final
 * pop - retorna o ultimo
 */

let item = [6, 2, 3, 4, 5, 9];

// console.log(`Join: ${item.join("|")}`);

// const primeiro = item.shift();

// console.log(primeiro);
// console.log(item);

// console.log(item.pop());

console.log(item.indexOf(4));

console.log(item.unshift(5));

console.log(item);

/**
 * A função splice serve tando para adicionar quanto para remover
 * um item do array ... uma função muito legal mas é utilizada
 * para situações muitos especificas
 */

const array1 = [1, 2, 3, 4, 5];

console.log(array1.splice(2, 1, "sumiu"));
console.log(array1);

/**
 *  Métodos de array
 *
 *  Filter
 *  every
 *  some
 *  map
 *  reducer
 *  forEach
 *  concat
 *  slice - cria um novo array
 *  splice - altera o array original
 */

console.log("--------------------------------");

const array2 = ["Eduardo", "Joana", "Wallace", "Rosana"];

const pessoas3 = array2.slice(1, 2);

console.log(pessoas3);
console.log(array2);
