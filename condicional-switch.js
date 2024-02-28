let diaSemana = 5

if (diaSemana === 0){
    console.log("Hoje é domingo")
} else if (diaSemana === 1) {
    console.log("Hoje é segunda")
} else if (diaSemana === 2) {
    console.log("Hoje é terça")
} else if (diaSemana === 3) {
    console.log("Hoje é quarta-feira")
} else if (diaSemana === 4) {
    console.log("Hoje é quinta-feira")
} else if (diaSemana === 5) {
    console.log("Hoje é sexta-feira")
} else if (diaSemana === 6){
    console.log("Hoje é sabado")
} else {
    console.log("Insira números de 0 a 6")
}

let dia = ""
//Break tem a utilidade de não permitir ir pra proxima linha, no caso, se meu dia é 3, vou receber quarta feira, porém, sem o break, ele vai ir até a linha onde tiver alguma trava, que no caso seria o break.

switch (diaSemana) {
    case 0:
        dia = "Segunda"
        break
    case 1:
        dia = "Terça"   
        break
    case 2: 
        dia = "Quarta"
        break
    case 3:
        dia = "Quinta"
        break
    case 4:
        dia = "Sexta"
        break
    case 5:
        dia = "Sabado"
        break
    case 6:
        dia = "Domingo"
        break
    default:
        dia = " -- "
}

console.log(`Hoje é ${dia}`);

