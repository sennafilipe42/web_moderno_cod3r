// novo recuso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//retire do atributo obj pessoa, nome e idade
const{ nome, idade } = pessoa
console.log(nome,idade)

console.log(pessoa)

//altere o atributo dentro do obj
const{ nome: n, idade: i } = pessoa
console.log(n, i)

console.log(pessoa)


/*atributos que não existem no objeto
    sobrenome =  undefined, pois não foi atribuido a nenhum valor
    bemHumorada = true, pois caso não ache o atributo, volte como true
*/ 
const{ sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)
console.log(pessoa)


const{ endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
console.log(pessoa.endereco)


/*conta não foi definida
entao ao tentar definir ag e num, vai ocorrer erro
*/
//const { conta: {ag, num}} = pessoa
//console.log(ag, num)