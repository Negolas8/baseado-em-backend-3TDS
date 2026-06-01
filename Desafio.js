const destino = "Foz do Iguaçu";
const origem = "Curitiba";
const nomeViajante = "Arthur";
let duracao = 8;
let transporte = "Carro";

// Declarar 5 variáveis para cadastrar alunos/jogador

const jogador = "Felipe";
const nomeJogador = "Ice";
const time = "Hunters";
const jogo = "Apex";
let funcao = "Jogador profissional";

// Saída interpolada

console.log(`${jogador} ganhou todos os jogos pelo time ${time} no jogo ${jogo} e está pronto para exercer seu cargo de ${nomeJogador}.`);

// 2) Criar duas variáveis numéricas com os pontos da fase 1 e fase 2

let fase1 = 1200;
let fase2 = 1800;

console.log("Pontos da fase 1:", fase1);
console.log("Pontos da fase 2:", fase2);

// 3) Calcular total de pontos, diferença entre fases,
// nível atual e pontos faltando para o próximo nível

let totalPontos = fase1 + fase2;
let diferenca = fase2 - fase1;

// Exemplo: a cada 1000 pontos sobe 1 nível
let nivelAtual = Math.floor(totalPontos / 1000);

// Próximo nível
let proximoNivel = (nivelAtual + 1) * 1000;

// Pontos faltando
let pontosFaltando = proximoNivel - totalPontos;

console.log("Total de pontos:", totalPontos);
console.log("Diferença entre as fases:", diferenca);
console.log("Nível atual:", nivelAtual);
console.log("Pontos faltando para o próximo nível:", pontosFaltando);

// 4) Declarar níveis e verificar pontuação

let pontos = totalPontos;

if (pontos >= 3000) {
console.log("Pontuação muito alta! Jogador de alto padrão 🔥");
} else if (pontos >= 1500) {
console.log("Pontuação média. Continue evoluindo 👍");
} else {
console.log("Pontuação baixa. Jogador poderá ser banido ⚠️");
}