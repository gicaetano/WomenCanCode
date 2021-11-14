// function imprimeBomDia() {
//     console.log("Buenos dias...")
// }
// imprimeBomDia();

// ===============================================================

// function imprimeBomDia(nome) {
//     console.log("Buenos dias " + nome)
// }
// imprimeBomDia("Gisele");

// ===============================================================

// function imprimeBomDia(nome) {
//     return "Bom dia, " + nome;
// }
// console.log(imprimeBomDia("Gisele"));

// ===============================================================

// function formataBomDia(nome) {
//     return "Bom dia, " + nome;
// }
// const mensagemBomDia = formataBomDia("Gabriela Fonseca");
// console.log(mensagemBomDia)

// ===============================================================

// const formataBomDiaArrow = (nome) => {
//     return "Bom dia, " + nome;
// }
// const mensagemBomDia = formataBomDiaArrow("Gisele Caetano");
// console.log(mensagemBomDia)

// ===============================================================


// for(let contador = 5; contador >=1; contador--) {
//     console.log(contador);
//     if (contador === 3) {
//         break;
//     }
// }

// ===============================================================

// let contador = 1;
// while(contador <=5){
//     console.log(contador);
//     contador ++;
// }

// ===============================================================

// let contador = 5;
// do{
//     console.log(contador);
//     contador--;
// } while(contador >= 1);

// ===============================================================

// const meuArray = [1,2,3,4,5,6,7,8];

// for(let indice=0; indice < meuArray.length; indice++) {
//     console.log(meuArray[indice]);
// }

// ===============================================================

// const meuArray = [1,2,3,4,5,6,7,8];
// meuArray.forEach(function (numero){
//     console.log(numero);
// })

// ===============================================================

// const meuArray = [1,2,3,4,5,6,7,8];
// const meuNovoArray = meuArray.map(function (numero) {
//     return numero = numero + 1;
// });

// console.log(meuArray);
// console.log("----------------------");
// console.log(meuNovoArray);

// ===============================================================

// const meusNumeros = [1,2,3,4,5,6,7,8,9,10];

// const meusNumerosPares = meusNumeros.filter(function (number) {
//     return number % 2 === 0
// });

// console.log(meusNumerosPares)

// ===============================================================

const meusNumeros = [1,2,3,4,5,6,7,8,9,10];

const meusNumerosPares = meusNumeros.filter(function (number) {
    return number % 2 === 0
});

console.log(meusNumerosPares)