var valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function criaPares(valores){
for(let indice = 0; indice < valoresNum.length; indice++) 
    if (valores % 2 == 0)
    return valores;
}
var numerosPares = valoresNum.filter(criaPares);
console.log(numerosPares);

