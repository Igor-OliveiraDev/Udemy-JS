// strings, number (Inteiros/Decimais,floats), boolean (true/false)
//variavel não pode começar com números -  ex / var = 9var 

let minhaVar = "Minha string"; //String são identificados por aspas duplas ""
let minhaVar2 = 'Minha "string" com aspas duplas';
let minhaVar3 = `Minha template literal`;

let idade = 40;
let msg = `Eu tenho ${idade} Anos`;

console.log(msg);

//Para verificar o tipo de uma variavel, se escreve -Console.log("Typeof msg, typeof idade") para que no console, indique se é string, number etc

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo do n1 é ${typeof n1} e seu valor é ${n1}`)
console.log(`o tipo do n2 é ${typeof n2} e seu valor é ${n2}`)
//Independente se o número é decimail, ou flutuante = o type dele será sempre NUMBER

//Boolean existem 2 opções = Ou é verdadeiro ou é falso.

const isValid = true;
console.log(`isValid ${isValid}`);

//Undefined, null & symbol
    //Undefined = Crio uma variável e não atribuo valor a ela
        //null para criar variáveis que não tenham valores.

/*let varTeste;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;     
console.log(typeof varTeste, varTeste);*/

let varTeste = null;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;     
console.log(typeof varTeste, varTeste);
