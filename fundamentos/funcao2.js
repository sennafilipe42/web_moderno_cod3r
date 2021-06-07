//armazenando uma funcao em uma variavel

const imprimirSioma = function(a, b){

    console.log(a + b)
}

imprimirSioma(2,3)

//armazanando uma funcao arrow em, uma variavel

const soma = (a, b) =>{
    return a + b
}

console.log(soma(2, 3))

//retorno implicito(apenas quando tem uma linha)
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!')