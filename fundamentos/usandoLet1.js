/* 
    Diferença do let para var
 Let: fica setado pelo escopo onde está
 Var: somente fica setado em função, fora isso
 ela é global.

 Pode se notar que o Let continuar com o valor dele
 e a Var também, um não está interferindo ao outro.
 */

/*var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
*/


/*Por Let ser tipada pelo escopo
logo declarando let no global, não subscreve
a de dentro do outro bloco
*/

/*let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
*/

/*Let da preferencia para variavel declarado dentro de seu escopo
caso não tenha uma, ele busca no escopo anterior*/

let numero = 1
{
    let numero2 = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)