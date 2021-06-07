/*problema historico do JS, como Var não tem escopo
Ele vai imprimir para tudo o valor do 10*/

const funcs = []

for(var i = 0; i < 10; i++){

    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
