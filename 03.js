let lista = [32, 68, 12, 44]

let verificaPares = lista.every(function(itens){
    return itens % 2 == 0
})

if(verificaPares){
    console.log("Todos são pares!")
}else{
    console.log("Nem todos são pares!")
}
