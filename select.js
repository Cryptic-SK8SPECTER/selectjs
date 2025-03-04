const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function encontrarSelect(texto) {
    const palavra = "SELECT";
    const tamanho = palavra.length;
    let ocorrencias = [];

    for (let i = 0; i <= texto.length - tamanho; i++) {
        let corresponde = true;

        for (let j = 0; j < tamanho; j++) {
            if (!(texto[i + j] === palavra[j] || texto[i + j] === palavra[j].toLowerCase())) {
                corresponde = false;
                break;
            }
        }

        if (corresponde) {
            ocorrencias.push(i);
        }
    }

    return ocorrencias;
}

// Solicita entrada do usuário
rl.question("Digite um texto: ", (entrada) => {
    const posicoes = encontrarSelect(entrada);

    if (posicoes.length > 0) {
        console.log(`'SELECT' encontrado nas posições: ${posicoes}`);
    } else {
        console.log("'SELECT' não encontrado.");
    }

    rl.close();
});
