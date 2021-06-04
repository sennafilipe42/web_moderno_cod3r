/* lembrando que se começa a contar do 0, logo
            0 1 2 3 4
            s e n n a
*/
const escola = "Senna"
console.log(escola.charAt(4)) //busca o indice 4
console.log(escola.charAt(5))//não existe, então n mostra
console.log(escola.charCodeAt(3))//traz o valor da tabela unicode 
console.log(escola.indexOf('S'))//traz o indice aonde está 
console.log(escola.substring(0,3))//vai do indice 0 e me de 3 caracteres: Sen
console.log(escola.substring(1))//a partir do indice 1 enna
//não acrescenta, apenas concatena
console.log('Estudante '.concat(escola).concat("!"))
console.log('Estudante '+ escola + ("!"))//outro modo

//imprimindo a constante escola, ainda permanece Senna
console.log(escola)

console.log(escola.replace('a', '2')) //substitui o valor
console.log(escola.replace(/\w/g, 'e'))//regex, substitui todas letras e números por e
console.log(escola.replace(/\d/, 'e'))//regex, substitui todos números por e

/*criando uma array a partir de um virgula
    usando a função split, declara o que vc quer
    colocar para separar as strings
    logo criando uma array
*/
console.log('Ana, Maria, Pedro'.split(','))
console.log('Ana, Maria, Pedro'.split(/,/))//modelo usando regex
