//Var pode ser visivel fora de blocos

{ { { { var sera = 'Será???'
console.log(sera)
 } } } }
 console.log(sera)

//Var não será visivel fora de uma function
 function teste(){
     var local = 123
     console.log(local)
 }

teste()
// console.log(local) // vai ocorrer um erro
