const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//acima criação das constantes JS dos elementos HTML
const perguntas = [
    {
        enunciado: "Encontro-me na cozinha após o jantar e me deparo com restos de comida e embalagens. Qual o destino correto?",
        alternativas: [
            {
                texto: "Separar rigorosamente o lixo orgânico do reciclável, limpando as embalagens antes de descartar.",
                afirmacao: "Você demonstra um compromisso claro com a coleta seletiva e o reaproveitamento de materiais, reduzindo o volume de resíduos que chegam aos aterros sanitários."
            },
            {
                texto: "Descartar tudo no mesmo saco de lixo por falta de tempo ou de postos de coleta por perto.",
                afirmacao: "Você ainda encontra dificuldades práticas ou estruturais para gerenciar seus resíduos, o que pode sobrecarregar o sistema de limpeza urbana."
            }
        ]
    },
    {
        enunciado: "Ao sair de um cômodo da casa que ficará vazio por algumas horas, qual é a sua conduta habitual?",
        alternativas: [
            {
                texto: "Desligar todas as luzes e aparelhos eletrônicos da tomada.",
                afirmacao: "manifesta uma forte consciência sobre a eficiência energética e o combate ao desperdício silencioso de eletricidade."
            },
            {
                texto: "Deixar a TV ou a luz acesa, pois pretende voltar ao cômodo mais tarde e prefere a conveniência.",
                afirmacao: "revela hábitos que aumentam desnecessariamente o consumo de energia e a pegada de carbono doméstica."
            }
        ]
    },
    {
        enunciado: "Para percorrer uma distância de aproximadamente dois quilômetros em um dia de clima ameno, qual meio de transporte você escolhe?",
        alternativas: [
            {
                texto: "Ir a pé, de bicicleta ou utilizar o transporte público da sua cidade.",
                afirmacao: "prioriza a mobilidade urbana sustentável, escolhendo caminhos que poluem menos o ar e fazem bem à saúde."
            },
            {
                texto: "Retirar o carro da garagem ou solicitar um veículo por aplicativo para garantir maior conforto.",
                afirmacao: "tende a depender excessivamente de transportes individuais motorizados, colaborando para as emissões de gases e o trânsito urbano."
            }
        ]
    },
    {
        enunciado: "No supermercado ou nas compras do mês, como você se comporta em relação às embalagens e sacolas?",
        alternativas: [
            {
                texto: "Levar sacolas retornáveis (ecobags) e dar preferência a produtos a granel ou com embalagens biodegradáveis/recicláveis.",
                afirmacao: "pratica o consumo consciente ao evitar o plástico de uso único e valorizar marcas que respeitam o meio ambiente."
            },
            {
                texto: "Utilizar as sacolas plásticas oferecidas pelo estabelecimento e priorizar o preço ou a marca, independente da embalagem.",
                afirmacao: "adota uma postura de consumo tradicional, onde a praticidade imediata acaba gerando mais resíduos plásticos descartáveis"
            }
        ]
    },
    {
        enunciado: "Durante as atividades de higiene diária, como escovar os dentes ou tomar banho, qual é a sua postura?",
        alternativas: [
            {
                texto: "Fechar a torneira enquanto escova os dentes e monitorar o tempo no chuveiro para que o banho seja rápido.",
                afirmacao: "e valoriza a água como um recurso vital e finito, adotando práticas ativas de economia no seu dia a dia."
            },
            {
                texto: "Deixar a água correndo para manter a temperatura ou por distração enquanto realiza a tarefa.",
                afirmacao: "e acaba desperdiçando grandes volumes de água potável devido a pequenos descuidos na rotina diária."
            } //fechamento do objeto do texto e afirmação da lista de alternativas
        ] //fechamento da lista de alternativas
    }, //fechamento do objeto com enunciado e lista de alternativas da lista de perguntas
]; //fechamento da lista de perguntas


let atual = 0; //variavel do inicio da lista de perguntas
let perguntaAtual; //variavel correspondente a pergunta atual selecionada
let historiaFinal = ""; //variavel que guarda os textos das afirmações para formar a frase final da IA

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
//função que verifica se a ordem da pergunta atual é maior ou igual a das outras perguntas da lista. Se j[a foi todas, exibe o texto final]
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
} // codigo que mostra o texto de pergunta atual extraido do item enunciado.

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } //Para a constante alternativa das alternativas é criado um botão novo com alternativa diferente a cada vez que seleciona uma resposta pelo clique
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
} //uma função seleciona as resposta e que vai juntando as afirmaçÕes delas em uma variavel historiaFinal selecionadas de acordo com as opçÕes selecionadas

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
} //função que mostra o Resultado final iniciando com nov um breve texto na caixa de perguntas e que o resultado do final é inserido com o texto guardado na varivel historiaFInal com um espaçamento vazio criado na caixa de alternativas.

mostraPergunta(); //função geral que mostra a pergunta