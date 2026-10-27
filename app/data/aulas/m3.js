// Módulo 3 — aula 1 (conteúdo completo). É também a aula de entrada do Degrau 0.
import { tag, LINKS } from '../fontes.js';

export const AULAS_M3 = [
{
  id: 'm3-1', titulo: 'Como ler textos filosóficos: leitura ativa', duracao: '90 min',
  aprendera: ['Os quatro níveis de leitura descritos por Adler e Van Doren', 'Como identificar a pergunta central de um texto', 'Como registrar termos, proposições e argumentos', 'Por que só se critica depois de compreender'],
  prereq: ['Nenhum. Recomenda-se fazer esta aula antes ou junto com a aula 1 do Módulo 1.'],
  explicacao: `
<h3>O problema</h3>
<p>Você abre a Ética a Nicômaco, lê dez páginas e percebe que não sabe dizer o que leu. Isso não indica falta de inteligência: indica falta de método. Textos filosóficos foram escritos para serem <em>trabalhados</em>, não apenas percorridos. Esta aula dá o método que você usará em todos os degraus.</p>

<h3>Quatro níveis de leitura</h3>
<p>Mortimer Adler e Charles Van Doren, em <em>Como Ler Livros</em>, distinguem quatro níveis cumulativos ${tag('interpretacao')}:</p>
<ol>
<li><strong>Elementar</strong>: decifrar o que as frases dizem.</li>
<li><strong>Inspecional</strong>: em pouco tempo, descobrir de que trata o livro e como está organizado (título, sumário, prefácio, índice, primeiras e últimas páginas dos capítulos).</li>
<li><strong>Analítica</strong>: leitura completa e minuciosa, com o objetivo de compreender o livro como o autor o entendeu.</li>
<li><strong>Sintópica</strong>: ler vários livros sobre o mesmo assunto, comparando-os em torno de questões comuns. É o que você fará no Degrau 12.</li>
</ol>
<p>A classificação é uma proposta didática dos autores, não uma lei; ela é útil porque separa etapas que o leitor iniciante costuma misturar.</p>

<h3>Antes de ler: a inspeção</h3>
<p>Em quinze minutos, responda: Que tipo de livro é este (tratado, diálogo, coletânea, manual)? Qual o assunto geral? Como está dividido? Isso evita o erro mais comum: ler um diálogo de Platão como se fosse um tratado, ou um tratado de Tomás como se fosse um romance.</p>

<h3>Durante a leitura: quatro perguntas</h3>
<p>Adler e Van Doren propõem perguntas que o leitor ativo deve fazer a todo livro. Em forma adaptada:</p>
<ol>
<li><strong>De que trata o texto como um todo?</strong> Formule em uma ou duas frases a pergunta central e a resposta do autor.</li>
<li><strong>O que está sendo dito em detalhe, e como?</strong> Identifique os <em>termos</em> (palavras usadas em sentido técnico), as <em>proposições</em> (afirmações principais) e os <em>argumentos</em> (as razões que ligam as proposições).</li>
<li><strong>O texto é verdadeiro, no todo ou em parte?</strong> Só depois de responder às duas primeiras.</li>
<li><strong>E daí?</strong> Que importância isso tem, para o problema e para você?</li>
</ol>

<h3>Termos, proposições, argumentos</h3>
<ul>
<li><strong>Termo</strong>: uma palavra usada pelo autor com sentido preciso. Em Aristóteles, "substância" (<em>ousia</em>) não significa "material químico". Ao encontrar uma palavra-chave, pergunte: em que sentido o autor a usa aqui? Consulte o dicionário de filosofia — mas confira com o próprio texto.</li>
<li><strong>Proposição</strong>: o que o autor afirma ou nega. Muitas vezes está escondida em frases longas; reescreva-a com suas palavras.</li>
<li><strong>Argumento</strong>: a sequência de proposições pela qual o autor chega a uma conclusão. Procure palavras como "portanto", "logo", "porque", "pois", "segue-se que".</li>
</ul>

<h3>A regra de ouro: compreender antes de julgar</h3>
<p>A recomendação mais importante do livro de Adler é não criticar antes de poder dizer, com honestidade, "compreendo". Concordar, discordar ou suspender o juízo são respostas legítimas — mas só depois da compreensão, e sempre com razões ${tag('interpretacao')}. Esse princípio é o coração deste curso: <strong>compreender → definir → argumentar → investigar → comparar → criticar → sintetizar</strong>.</p>

<h3>Ferramentas práticas</h3>
<ul>
<li><strong>Caderno de leitura</strong>: use o Caderno intelectual do aplicativo; vincule cada nota ao livro e à página.</li>
<li><strong>Marcações</strong>: sublinhe as proposições principais; numere os passos de um argumento na margem.</li>
<li><strong>Ficha por capítulo</strong>: pergunta central / termos / tese / argumento / dúvidas.</li>
<li><strong>Velocidade</strong>: textos difíceis rendem de 5 a 15 páginas por hora no início. Isso é normal; o plano de estudos do aplicativo considera esse ritmo.</li>
</ul>`,
  vocabulario: [
    ['Leitura inspecional', 'Exame rápido para saber de que trata e como se organiza um livro.'],
    ['Leitura analítica', 'Leitura completa visando compreender o livro como o autor o entendeu.'],
    ['Leitura sintópica', 'Comparação de vários livros em torno de uma mesma questão.'],
    ['Termo', 'Palavra usada em sentido técnico preciso por um autor.'],
    ['Proposição', 'Afirmação ou negação que pode ser verdadeira ou falsa.'],
    ['Argumento', 'Conjunto de proposições em que uma (conclusão) é apoiada pelas outras (premissas).'],
  ],
  exemplos: `<p><strong>Aplicação à Apologia de Sócrates.</strong> Inspeção: é um discurso de defesa em tribunal, em três partes (defesa, proposta de pena, palavras finais). Pergunta central: por que Sócrates vive como vive e por que não abandonará a filosofia, mesmo diante da morte? Termo a esclarecer: "sabedoria" — Sócrates distingue a sabedoria humana (saber que não sabe) da pretensão de saber.</p>`,
  contexto: `<p><em>How to Read a Book</em> foi publicado por Adler em 1940 e revisado com Charles Van Doren em 1972 ${tag('fato')}. Adler foi um dos idealizadores do programa de "Grandes Livros" nos Estados Unidos.</p>`,
  argumento: {
    titulo: 'Por que compreender antes de criticar', tag: 'argumento',
    premissas: ['Criticar uma tese é mostrar que ela é falsa, mal justificada ou incompleta.', 'Só se pode mostrar isso de uma tese que se identificou corretamente.', 'Identificar corretamente uma tese exige compreender o texto.'],
    conclusao: 'Logo, a crítica legítima pressupõe a compreensão.',
    nota: 'Argumento válido. A crítica sem compreensão costuma atacar uma versão distorcida da tese — o que, em lógica, chama-se falácia do espantalho (Degrau 3).'
  },
  objecoes: [
    { objecao: 'Ler "como o autor entendeu" é impossível; toda leitura é interpretação.', tag: 'debate',
      resposta: 'É verdade que toda leitura envolve interpretação, e a hermenêutica contemporânea discute isso a fundo (Módulo 15). Mas há interpretações mais e menos fiéis ao texto, e é possível corrigir uma leitura com o próprio texto. O ideal de compreender o autor funciona como norma, mesmo que nunca seja atingido perfeitamente.' },
  ],
  aplicacao: `<p>Faça a leitura inspecional de um livro que você tem em casa (pode ser a sua Bíblia ou o Catecismo). Em quinze minutos, registre no Caderno: tipo de livro, assunto, divisão em partes, e uma pergunta central que você espera que ele responda.</p>`,
  fonte: {
    obra: 'Adler e Van Doren, Como Ler Livros, partes I e II (alternativa gratuita: Prólogo do Catecismo)', link: LINKS.cicPrologo,
    orientacao: `<p>Se tiver o livro, leia os capítulos sobre leitura inspecional e as regras da leitura analítica (primeira e segunda partes). Se não tiver, aplique o método desta aula ao Prólogo do Catecismo (§1–25), disponível gratuitamente no site do Vaticano (link abaixo).</p>`,
  },
  perguntas: [
    { p: 'Quais são os quatro níveis de leitura?', r: 'Elementar, inspecional, analítica e sintópica.' },
    { p: 'Por que fazer a leitura inspecional antes da analítica?', r: 'Para saber que tipo de texto é e como se organiza, evitando ler um gênero como se fosse outro.' },
    { p: 'Quando a crítica é legítima?', r: 'Depois de compreender o texto, e sempre com razões.' },
  ],
  exercicios: [
    { tipo: 'mc', enunciado: 'Comparar o que Platão, Aristóteles e Tomás dizem sobre a justiça é um exemplo de leitura:', opcoes: ['Elementar', 'Inspecional', 'Analítica', 'Sintópica'], correta: 3,
      explicacao: 'Sintópica: vários livros em torno da mesma questão.' },
    { tipo: 'mc', enunciado: 'Qual palavra mais provavelmente indica uma conclusão?', opcoes: ['Porque', 'Pois', 'Portanto', 'Visto que'], correta: 2,
      explicacao: '"Portanto" introduz conclusão; "porque", "pois" e "visto que" costumam introduzir premissas.' },
    { tipo: 'mc', enunciado: 'Um "termo", no sentido desta aula, é:', opcoes: ['Qualquer palavra difícil', 'Uma palavra usada pelo autor em sentido preciso', 'O fim de um capítulo', 'Uma conclusão'], correta: 1,
      explicacao: 'Termo é a palavra com sentido técnico definido pelo uso do autor.' },
    { tipo: 'mc', enunciado: 'Criticar uma tese que você não entendeu tende a produzir:', opcoes: ['Uma refutação forte', 'Uma falácia do espantalho', 'Um silogismo válido', 'Uma leitura sintópica'], correta: 1,
      explicacao: 'Atacar uma versão distorcida da tese é o espantalho.' },
    { tipo: 'disc', enunciado: 'Escolha um capítulo curto de qualquer livro sério que você tenha (ou o Prólogo do Catecismo) e preencha a ficha: pergunta central, três termos com seus sentidos, a tese principal e o argumento em premissas.',
      criterios: ['Pergunta central bem formulada', 'Termos definidos conforme o uso do autor', 'Tese reescrita com fidelidade', 'Argumento organizado em premissas e conclusão'] },
  ],
  resumo: ['Quatro níveis: elementar, inspecional, analítica, sintópica.', 'Inspecione antes de ler a fundo.', 'Identifique termos, proposições e argumentos.', 'Compreender antes de julgar.', 'Use fichas e o Caderno, com páginas.'],
  referencias: [
    { texto: 'Mortimer J. Adler e Charles Van Doren, Como Ler Livros (orig. 1940; ed. revista 1972).' },
    { texto: 'Hilton Japiassú e Danilo Marcondes, Dicionário Básico de Filosofia (para consulta de termos).' },
  ],
  criterios: ['Acertar pelo menos 70% do questionário', 'Preencher uma ficha de leitura', 'Fazer a leitura inspecional de um livro'],
  revisao: [['Quatro níveis de leitura (Adler)', 'Elementar, inspecional, analítica, sintópica.'], ['Quatro perguntas ao texto', 'De que trata? O que diz e como? É verdadeiro? E daí?'], ['Regra de ouro', 'Compreender antes de criticar.']],
},
];
