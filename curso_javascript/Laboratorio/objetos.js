// Js antigo
// let celular = function() {
    
//     this.cor = "preto";
    
//     this.ligar = function() {
//         console.log("Ligando...");
//         return "Caixa postal!"
//     }
// }

// let meuCelular = new celular();
// console.log(meuCelular.ligar());


// Js novo
class celular {
    constructor() {
        this.cor = "preto";
    }

    ligar() {
        console.log("Ligando...");
        return "Caixa postal!"
    }
}

let meuCelular = new celular();
console.log(meuCelular);