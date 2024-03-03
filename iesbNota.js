function calcularMedia(notas) {
    const pesoP1 = 0.4;
    const pesoP2 = 0.6;
    const notasP3 = [6, 0, 2, 0, 7];
    const resultados = {};

    // sobre cada aluno
    for (let aluno in notas.p1) {
        // Calcular a média da P1 e P2 para cada aluno
        const mediaP1 = notas.p1[aluno];
        const mediaP2 = notas.p2[aluno];

        // Calcular a média final ponderada
        let mediaFinal = mediaP1 * pesoP1 + mediaP2 * pesoP2;

        // Verificar se o aluno está em recuperação
        if (mediaFinal < 5) {
            // Calcular a nota da P3 substituindo a menor nota entre P1 e P2
            const menorNota = Math.min(mediaP1, mediaP2);
            const notaP3 = notasP3[Object.keys(notas.p1).indexOf(aluno)];

            // Substituir a menor nota pela nota da P3
            mediaFinal = mediaFinal - menorNota + notaP3;
        }

        // Verificar se o aluno está aprovado, em recuperação ou reprovado
        let status = "";
        if (mediaFinal >= 5) {
            status = "Aprovado";
        } else {
            status = "Recuperação";
        }

        // Armazenar os resultados para o aluno
        resultados[aluno] = {
            status: status,
            p1: mediaP1,
            p2: mediaP2,
            p3: mediaFinal >= 5 ? null : notasP3[Object.keys(notas.p1).indexOf(aluno)], // Nota da P3 só é relevante se o aluno estiver em recuperação
            mediaFinal: mediaFinal
        };
    }

    return resultados;
}

function verificarStatus(resultados) {
    for (let aluno in resultados) {
        console.log("Aluno:", aluno);
        console.log("Status:", resultados[aluno].status);
        console.log("Nota P1:", resultados[aluno].p1);
        console.log("Nota P2:", resultados[aluno].p2);
        if (resultados[aluno].status === "Recuperação") {
            console.log("Nota P3:", resultados[aluno].p3);
        }
        console.log("Média Final:", resultados[aluno].mediaFinal);
        console.log("-----------------------------");
    }
}

const notas = {
    p1: { aluno1: 5, aluno2: 6, aluno3: 7, aluno4: 9, aluno5: 4 },
    p2: { aluno1: 4, aluno2: 5, aluno3: 1, aluno4: 3, aluno5: 4 }
};

const resultados = calcularMedia(notas);
verificarStatus(resultados);
