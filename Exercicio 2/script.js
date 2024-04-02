const estudantes = [
    {"nome": "João", "nota1": 7.5, "nota2": 8.0},
    {"nome": "Letícia", "nota1": 6.0, "nota2": 7.5},
    {"nome": "Diego", "nota1": 8.0, "nota2": 9.0},
    {"nome": "Julia", "nota1": 7.0, "nota2": 6.5},
]

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function verificarSucesso(media) {
    return media >= 7 ? "Parabéns você foi aprovado(a) no concurso!" : "Não foi dessa vez, Tente novamente!";
}

estudantes.forEach(estudante => {
    const { nome, nota1, nota2 } = estudante;
    const media = calcularMedia(nota1, nota2);
    const resultado = verificarSucesso(media);
    alert(`A média do(a) aluno(a): ${nome} é: ${media}, ${resultado}`);
});