/* com o template string 
 se usa o ${} para poder fazer alterações entre
 os ``
 */

const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

//expressoes...

console.log(`1+1 = ${1 + 1}`)

/* usando a function arrow
podemos notar o uso do template String
*/
const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)
