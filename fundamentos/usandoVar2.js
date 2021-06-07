/*como var está no escopo global
 ele vai subscrever o valor*/

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)