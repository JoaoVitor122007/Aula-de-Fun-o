function calcule(largura, profundidade){
    let areaTotal = largura * profundidade
    return areaTotal
}

let medidaMansao = calcule(100, 100)
let medidaPadrao = calcule(50, 40)
let medidaSobrado = calcule(30,40)
let medidaComercial = calcule(40, 40)

console.log(medidaMansao + "m²")
console.log(medidaPadrao + "m²")
console.log(medidaSobrado + "m²")
console.log(medidaComercial + "m²")
