let valor //não inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
/* não tem como acessar
    não tenho valor
console.log(valor.toString())
*/

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco=3.50
console.log(produto)

produto.preco = undefined // não atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)