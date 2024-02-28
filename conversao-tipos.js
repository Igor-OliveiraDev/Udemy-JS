let n1 = "10.9943949";
// n1 = parseFloat (n1);
n1 = Number(n1);

let n2 = 2;

console.log(n1 + n2)

//No caso acima, para multiplicação ou divisão, não faria diferença pois o js interpreta que queremos realizar de fato uma operação matematica, porém, caso fossemos realizar uma soma, utilizanndo o sinal de + teriamos problema, pois + no javascrip serve tanto para soma, tanto para concatenação (Para adicionar uma variavel e outra) - Ou seja, juntaria o 10 e o 2 como se fossem strings sendo resultado 102 

//Formas de converter strigs em number - parseFloat, parseInt ou Number()

//Conversão de string para numeros a seguir:

//Decimais - 0 - 9 // hexadecimais 0 - f (15)

n2 = 15;
n2 = n2.toString(2);
console.log(n2, typeof n2);
