 const valores = [7.7, 8.9, 6.3, 9.2]
 console.log(valores[0], valores[3])
 console.log(valores[4])

 valores[1]=10
 console.log(valores)
 console.log(valores.length) //tamanho da array

 //acrescentando valores na array
 valores.push({id:3}, false, null, 'teste')
 console.log(valores)

//retirar o último valor do array
 console.log(valores.pop())

 console.log(typeof valores)

