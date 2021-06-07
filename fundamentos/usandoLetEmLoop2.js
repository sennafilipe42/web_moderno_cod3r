/*Let funciona normalmente pois ele é declaro pelos escopos
logo não afeta os externos*/
const funcs = []

for(let i = 0; i < 10; i++){

    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()