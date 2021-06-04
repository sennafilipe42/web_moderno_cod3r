
const raio=5.6

/*calcula da area do raio,
    chamando o objeto Math, que tem PI como constante
    multiplico pelo Power de Math(pow)
    aonde é uma função que calcula a potencia
    raio tem expoente 2, raio²
    armazenando tudo isso na constante area

*/
const area=Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(area.toFixed(2))

console.log(typeof Math)