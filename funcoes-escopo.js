let n = "global"

function mostraN(){

    let n1 = "n1 local"

    if(true) {
        let n1 = "n1 Dentro de if com let"
    }

    console.log("Valor de n1: " + n1)

}

mostraN()

console.log("Valor de N no escopo global: " + n)