function criptografia(mensagem, chave, converter) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let resultado = "";

    for (let letra of mensagem) {
        if (alfabeto.includes(letra)) {
            resultado += converter(letra, chave, alfabeto);
        }
         else {
            resultado += letra;
        }
    }

    return resultado;
}

function cifraLetra(letra, chave, alfabeto) {
    const indice = alfabeto.indexOf(letra);
    const novoIndice = (indice + chave) % 26;
    return alfabeto[novoIndice];
}

function decifraLetra(letra, chave, alfabeto) {
    const indice = alfabeto.indexOf(letra);
    const novoIndice = (indice - chave + 26) % 26;
    return alfabeto[novoIndice];
}

let mensagem = "weslen";
let chave = 3;

console.log("Mensagem original: ", mensagem);

let mensagemCifrada = criptografia(mensagem, chave, cifraLetra);
console.log("Mensagem cifrada: ", mensagemCifrada);

let mensagemDecifrada = criptografia(mensagemCifrada, chave, decifraLetra);
console.log("Mensagem decifrada: ", mensagemDecifrada);

export default {criptografia, cifraLetra, decifraLetra}