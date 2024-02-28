// + - * / % **

let n1 = 10;
let n2 = 5

//OPERADORES ARITIMETICOS
console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);
console.log(n1%n2);
console.log(2 ** 3);

//OPERADORES DE ATRIBUIÇÃO

let n3 = 20;
n3 = n3 + 15;

// ICREMENTO E DECREMENTO

let i = 0;
//i += 1;
//i = i + 1;
i++;
console.log(i);

// OPERADORES DE COMPARAÇÃO
/*
Igualdade de valor ==
Igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/

console.log(n1, n2, n3);

console.log(n1 != "10");
console.log(n1 !== "10");

//OPERADORES LÓGICOS
/*
Para uma pessoa viajar para o exterior:
Precisa ter 18 anos
Ou
Acompanhado pelos pais
E
Ter comprado o bilhete
*/

let idade = 18;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete
console.log(`Pode viajar: ${podeViajar}`);


n1 = 6
n2 = 8
let media = (n1 + n2) / 2 
console.log(`media: ${media}`);
console.log((3 * 2) ** 2);
