function calcularMedia() {
    const notas = [
        document.getElementById("nota1").value,
        document.getElementById("nota2").value,
        document.getElementById("nota3").value,
        document.getElementById("nota4").value
    ];

    if (notas.some(nota => nota === "")) {
        alert("Por favor, preencha todas as notas.");
        return;
    }

    const notasNumericas = notas.map(nota => parseFloat(nota));
    const media = notasNumericas.reduce((acc, nota) => acc + nota, 0) / notasNumericas.length;
    const resultado = media < 6 ? "Reprovado" : "Aprovado";

    alert(`A média das notas foi de ${media.toFixed(2)}! (${resultado})`);
}