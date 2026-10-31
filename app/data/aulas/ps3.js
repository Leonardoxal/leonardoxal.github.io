// Psicologia III — escolas e debates (etapas 6 e 7 do percurso de Psicologia).
// Behaviorismo e psicanálise; humanismo, cognitivismo e evidências; mente, cérebro e liberdade; psicologia, fé e moral.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ps3-1', titulo: 'Behaviorismo e psicanálise', duracao: '150 min',
  aprendera: ['Expor os princípios do behaviorismo', 'Distinguir reforço e punição', 'Expor os princípios e técnicas da psicanálise', 'Avaliar as duas escolas'],
  prereq: ['Psicologia II (módulo PS2)'],
  explicacao: `
<h3>O problema</h3>
<p>Duas escolas dominaram boa parte do século XX com visões opostas: uma só olhava o comportamento observável, a outra buscava o inconsciente. O que cada uma propõe?</p>
<h3>Behaviorismo</h3>
<p>Para Watson e Skinner, a psicologia deve estudar o comportamento observável e suas relações com o ambiente ${tag('fato')}. No condicionamento operante, reforço aumenta a frequência de um comportamento (positivo: acrescentando algo agradável; negativo: retirando algo desagradável) e punição a diminui ${tag('fato')}. Skinner imaginou uma sociedade planejada pelo condicionamento em Walden II (1948) ${tag('fato')}. Noam Chomsky, numa resenha de 1959 a O comportamento verbal, argumentou que o behaviorismo não explica a linguagem ${tag('fato')}.</p>
<h3>Psicanálise</h3>
<p>A psicanálise investiga o inconsciente por associação livre, interpretação de sonhos e análise da transferência (sentimentos do paciente dirigidos ao analista) ${tag('fato')}. Propõe mecanismos de defesa, como repressão e projeção ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>O behaviorismo deu técnicas eficazes (por exemplo, para fobias e no ensino de habilidades), mas reduz a pessoa ao comportamento ${tag('interpretacao')}. A psicanálise chamou a atenção para motivos não conscientes, mas muitas de suas teses são difíceis de testar ${tag('debate')}.</p>`,
  vocabulario: [
    ['Reforço positivo', 'Acrescentar algo agradável após um comportamento, aumentando-o.'],
    ['Reforço negativo', 'Retirar algo desagradável após um comportamento, aumentando-o.'],
    ['Punição', 'Consequência que diminui a frequência de um comportamento.'],
    ['Associação livre', 'Técnica psicanalítica de dizer tudo o que vem à mente.'],
    ['Mecanismo de defesa', 'Processo inconsciente que protege o ego da angústia.'],
  ],
  exemplos: `<p><strong>Reforço negativo não é punição:</strong> o motorista coloca o cinto para fazer parar o apito do carro. O comportamento (pôr o cinto) aumenta porque algo desagradável é retirado: é reforço negativo. Punição seria uma multa que diminui o comportamento de dirigir sem cinto.</p>`,
  contexto: `<p><strong>No mundo:</strong> a análise do comportamento aplicada é usada em intervenções com pessoas com autismo, com debates sobre métodos ${tag('fato')}. <strong>No Brasil:</strong> a psicanálise teve grande difusão em universidades e consultórios, e a análise do comportamento tem tradição forte, com Carolina Bori entre os pioneiros ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o behaviorismo radical não explica a pessoa inteira', tag: 'argumento',
    premissas: ['O behaviorismo radical explica o comportamento por histórias de reforço e estímulos atuais.', 'A linguagem humana é criativa: produzimos e entendemos frases nunca ouvidas.', 'Essa criatividade não se explica só por reforços passados.'],
    conclusao: 'Logo, o behaviorismo radical não explica toda a vida psíquica humana.',
    nota: 'É o núcleo da crítica de Chomsky (1959).',
  },
  objecoes: [
    { objecao: 'O behaviorismo é desumano e deve ser rejeitado inteiro.', tag: 'debate',
      resposta: 'Suas técnicas, usadas com ética e consentimento, ajudam muitas pessoas. O problema está na tese filosófica de que a pessoa é só comportamento condicionado. Pode-se usar técnicas sem aceitar a antropologia redutora.' },
  ],
  aplicacao: `<p>Classifique dez situações cotidianas como reforço positivo, reforço negativo ou punição; e identifique, num relato literário ou de filme, dois possíveis mecanismos de defesa, justificando.</p>`,
  fonte: {
    obra: 'B. F. Skinner, Ciência e comportamento humano (1953), capítulos sobre o condicionamento operante', link: null,
    orientacao: `<p>Observe como Skinner define reforço e por que evita falar de estados mentais.</p>`,
  },
  perguntas: [
    { p: 'O que é reforço negativo?', r: 'Retirar algo desagradável após um comportamento, aumentando sua frequência.' },
    { p: 'Quais as técnicas da psicanálise?', r: 'Associação livre, interpretação de sonhos e análise da transferência.' },
    { p: 'Qual a crítica de Chomsky?', r: 'Que o behaviorismo não explica a criatividade da linguagem.' },
  ],
  exercicios: [
    mc('Walden II é de:', ['Skinner', 'Watson', 'Freud', 'Chomsky'], 0, '1948.'),
    mc('A resenha de Chomsky é de:', ['1959', '1913', '1948', '1971'], 0, 'Linguagem.'),
    mc('Retirar o apito ao pôr o cinto é:', ['Reforço negativo', 'Punição', 'Reforço positivo', 'Extinção'], 0, 'Exemplo.'),
    mc('Transferência é:', ['Sentimentos do paciente dirigidos ao analista', 'Mudança de cidade', 'Reforço', 'Um teste'], 0, 'Psicanálise.'),
    mc('Repressão e projeção são:', ['Mecanismos de defesa', 'Reforços', 'Testes', 'Escalas'], 0, 'Freud.'),
    disc('Faça a classificação das dez situações e a análise dos mecanismos de defesa.', ['Classificação', 'Justificativas', 'Mecanismos', 'Cautela']),
  ],
  resumo: ['Behaviorismo: comportamento observável.', 'Reforço e punição.', 'Chomsky (1959).', 'Psicanálise: associação livre, transferência.', 'Avaliação crítica.'],
  referencias: [
    { texto: 'B. F. Skinner, Ciência e comportamento humano (1953).' },
    { texto: 'Sigmund Freud, A interpretação dos sonhos (1900).' },
    { texto: 'Noam Chomsky, resenha de O comportamento verbal, de Skinner (1959).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as classificações', 'Ler a fonte indicada'],
  revisao: [['Reforço', 'Aumenta.'], ['Punição', 'Diminui.'], ['Transferência', 'Psicanálise.']],
  avancado: {
    texto: `<h3>Esquemas de reforço</h3>
<p>Skinner estudou esquemas de reforço: contínuo (toda resposta é reforçada) e intermitente (só algumas) ${tag('fato')}. O reforço de razão variável, em que o prêmio vem após um número imprevisível de respostas, produz comportamento muito persistente ${tag('fato')}. É o esquema das máquinas de aposta e de muitos aplicativos que prendem a atenção ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'B. F. Skinner, Ciência e comportamento humano (1953).' }],
    exercicios: [
      mc('O esquema mais persistente é o de razão:', ['Variável', 'Fixa', 'Contínua', 'Nula'], 0, 'Imprevisível.'),
      mc('Reforço contínuo reforça:', ['Toda resposta', 'Nenhuma resposta', 'Só a primeira', 'Ao acaso'], 0, 'Definição.'),
      mc('Máquinas de aposta usam reforço de:', ['Razão variável', 'Intervalo fixo', 'Contínuo', 'Punição'], 0, 'Exemplo.'),
      disc('Analise como um aplicativo de rede social usa esquemas de reforço e proponha duas medidas de autodomínio.', ['Esquemas', 'Exemplos', 'Medidas', 'Virtude'])],
  },
}),

aula({
  id: 'ps3-2', titulo: 'Humanismo, cognitivismo e a prática baseada em evidências', duracao: '150 min',
  aprendera: ['Expor a psicologia humanista de Maslow e Rogers', 'Expor o modelo cognitivo de Beck', 'Explicar a prática baseada em evidências', 'Comparar as escolas num quadro'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Depois do behaviorismo e da psicanálise, que outras visões da pessoa e da terapia surgiram, e como saber quais funcionam?</p>
<h3>Humanismo</h3>
<p>Abraham Maslow propôs em 1943 uma hierarquia de necessidades, das fisiológicas à autorrealização ${tag('fato')}. Carl Rogers desenvolveu a abordagem centrada na pessoa, com empatia, autenticidade (congruência) e aceitação incondicional ${tag('fato')}. O humanismo valorizou a liberdade e o crescimento pessoal ${tag('interpretacao')}.</p>
<h3>Cognitivismo</h3>
<p>Aaron Beck desenvolveu nos anos 1960 a terapia cognitiva, segundo a qual pensamentos automáticos distorcidos influenciam emoções e comportamentos ${tag('fato')}. Albert Ellis criou a terapia racional-emotiva ${tag('fato')}. A terapia cognitivo-comportamental (TCC) combina essas ideias com técnicas comportamentais ${tag('fato')}.</p>
<h3>Evidências</h3>
<p>A prática baseada em evidências integra a melhor pesquisa disponível, a experiência clínica e as características e preferências do paciente ${tag('fato')}. Ensaios clínicos mostram eficácia de várias abordagens para diferentes problemas, e a relação terapêutica é fator importante em todas ${tag('fato')}.</p>
<h3>Uma leitura cristã</h3>
<p>A ideia de que pensamentos influenciam emoções e de que se pode reeducá-los tem paralelos com a tradição ascética, como o combate aos "pensamentos" em Evágrio Pôntico ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Hierarquia de necessidades', 'Modelo de Maslow das motivações humanas em níveis.'],
    ['Abordagem centrada na pessoa', 'Terapia de Rogers baseada em empatia e aceitação.'],
    ['Pensamento automático', 'Pensamento rápido e espontâneo que influencia emoções.'],
    ['Distorção cognitiva', 'Padrão de pensamento que deforma a realidade.'],
    ['TCC', 'Terapia cognitivo-comportamental.'],
  ],
  exemplos: `<p><strong>Uma distorção:</strong> um estudante tira nota baixa e pensa "sou um fracasso, nunca vou conseguir". A TCC chama isso de generalização excessiva. O exercício é examinar as evidências (já teve boas notas antes? o que pode mudar?) e formular um pensamento mais realista: "essa prova foi mal; vou rever como estudei".</p>`,
  contexto: `<p><strong>No mundo:</strong> a TCC está entre as psicoterapias mais pesquisadas ${tag('fato')}. <strong>No Brasil:</strong> há associações profissionais de diferentes abordagens, e o Conselho Federal de Psicologia regula a prática ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que buscar evidências na terapia', tag: 'argumento',
    premissas: ['Pessoas em sofrimento confiam na ajuda que recebem.', 'Algumas intervenções funcionam melhor que outras para problemas específicos.', 'Usar o que se sabe funcionar é exigência de justiça para com quem sofre.'],
    conclusao: 'Logo, a prática psicológica deve buscar apoio em evidências.',
    nota: 'Evidência não elimina a sabedoria clínica nem a singularidade da pessoa.',
  },
  objecoes: [
    { objecao: 'A autorrealização de Maslow é egocêntrica e contrária ao cristianismo.', tag: 'debate',
      resposta: 'Uma leitura individualista da autorrealização pode ser egocêntrica. O próprio Maslow, mais tarde, falou de autotranscendência. A visão cristã afirma que a pessoa se realiza no dom de si (Gaudium et spes, 24), o que corrige e completa a ideia.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: quadro comparativo de quatro escolas (behaviorismo, psicanálise, humanismo, cognitivismo), com objeto, método, visão da pessoa, exemplo de técnica e limites.</p>`,
  fonte: {
    obra: 'Carl Rogers, Tornar-se pessoa (1961), capítulos iniciais', link: null,
    orientacao: `<p>Observe as condições que Rogers considera necessárias para o crescimento pessoal.</p>`,
  },
  perguntas: [
    { p: 'Quais as condições da abordagem de Rogers?', r: 'Empatia, autenticidade e aceitação incondicional.' },
    { p: 'O que é um pensamento automático?', r: 'Um pensamento rápido e espontâneo que influencia emoções.' },
    { p: 'O que integra a prática baseada em evidências?', r: 'Pesquisa, experiência clínica e características do paciente.' },
  ],
  exercicios: [
    mc('A hierarquia de necessidades é de:', ['Maslow', 'Rogers', 'Beck', 'Skinner'], 0, '1943.'),
    mc('A terapia cognitiva foi desenvolvida por:', ['Aaron Beck', 'Freud', 'Watson', 'Jung'], 0, 'Anos 1960.'),
    mc('"Sou um fracasso" após uma nota baixa é:', ['Generalização excessiva', 'Reforço', 'Arquétipo', 'Transferência'], 0, 'Distorção.'),
    mc('Tornar-se pessoa é de:', ['Rogers', 'Maslow', 'Frankl', 'Ellis'], 0, '1961.'),
    mc('Fator importante em todas as terapias é a:', ['Relação terapêutica', 'Cor da sala', 'Duração fixa', 'Nenhuma'], 0, 'Evidência.'),
    disc('Monte o quadro comparativo das quatro escolas.', ['Objeto e método', 'Visão da pessoa', 'Técnicas', 'Limites']),
  ],
  resumo: ['Maslow (1943).', 'Rogers: empatia, autenticidade, aceitação.', 'Beck e a TCC.', 'Distorções cognitivas.', 'Prática baseada em evidências.'],
  referencias: [
    { texto: 'Carl Rogers, Tornar-se pessoa (1961).' },
    { texto: 'Aaron T. Beck, Terapia cognitiva da depressão (1979).' },
    { texto: 'Concílio Vaticano II, Gaudium et spes (1965), n. 24.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro', 'Ler a fonte indicada'],
  revisao: [['Maslow', 'Necessidades.'], ['Rogers', 'Centrada na pessoa.'], ['Beck', 'Cognitiva.']],
  avancado: {
    texto: `<h3>Evágrio e os oito pensamentos</h3>
<p>Evágrio Pôntico (século IV), monge do deserto, descreveu oito "pensamentos" (logismoi) que tentam a alma: gula, luxúria, avareza, tristeza, ira, acídia, vanglória e orgulho ${tag('fato')}. A lista, transmitida por João Cassiano e reorganizada por Gregório Magno, está na origem dos sete pecados capitais ${tag('fato')}. Evágrio propunha observar e responder aos pensamentos, o que alguns autores comparam a técnicas cognitivas ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Evágrio Pôntico, Tratado prático.' }],
    exercicios: [
      mc('Evágrio viveu no século:', ['IV', 'XII', 'XVII', 'XX'], 0, 'Deserto.'),
      mc('Os oito pensamentos estão na origem dos:', ['Sete pecados capitais', 'Dez mandamentos', 'Cinco sentidos', 'Doze apóstolos'], 0, 'Tradição.'),
      mc('A acídia é uma forma de:', ['Desânimo espiritual', 'Gula', 'Alegria', 'Coragem'], 0, 'Termo.'),
      disc('Compare o método de Evágrio com a TCC, indicando semelhanças e diferenças de fim.', ['Evágrio', 'TCC', 'Semelhanças', 'Diferenças'])],
  },
}),

aula({
  id: 'ps3-3', titulo: 'Mente, cérebro e liberdade', duracao: '150 min',
  aprendera: ['Expor as principais posições sobre a relação mente–cérebro', 'Conhecer o experimento de Libet e suas críticas', 'Distinguir determinismo, compatibilismo e libertarismo', 'Avaliar se a neurociência elimina a liberdade'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Se tudo o que pensamos corresponde a atividade cerebral, somos realmente livres? Ou o cérebro decide por nós?</p>
<h3>Posições sobre mente e cérebro</h3>
<p>Dualismo de substâncias (Descartes): mente e cérebro são substâncias distintas ${tag('fato')}. Fisicalismo: só existem realidades físicas, e a mente é o cérebro ou função dele ${tag('fato')}. Hilemorfismo (Aristóteles, Tomás): a alma é forma do corpo; o homem é uma substância única, e o intelecto tem uma operação não corporal ${tag('fato')}.</p>
<h3>Libet</h3>
<p>Benjamin Libet relatou em 1983 que um sinal cerebral (o potencial de prontidão) começava antes de os participantes relatarem a intenção de mover o dedo ${tag('fato')}. Alguns concluíram que a liberdade é ilusão ${tag('interpretacao')}. Críticos apontam que o experimento trata de movimentos triviais sem razões, que o relato do momento da intenção é impreciso e que pesquisas posteriores reinterpretaram o sinal ${tag('debate')}.</p>
<h3>Liberdade</h3>
<p>Determinismo: tudo é efeito necessário de causas anteriores ${tag('fato')}. Compatibilismo: liberdade é agir segundo os próprios motivos, mesmo num mundo determinado ${tag('fato')}. Libertarismo: há escolhas não determinadas por causas anteriores ${tag('fato')}. A Igreja ensina que o homem é livre e responsável, embora a imputabilidade possa ser diminuída por fatores como ignorância, medo, hábitos e fatores psíquicos (CIC 1735) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Fisicalismo', 'Tese de que só existem realidades físicas.'],
    ['Hilemorfismo', 'Tese de que os seres naturais são compostos de matéria e forma.'],
    ['Potencial de prontidão', 'Sinal elétrico cerebral que precede movimentos voluntários.'],
    ['Compatibilismo', 'Tese de que liberdade e determinismo são compatíveis.'],
    ['Imputabilidade', 'Grau em que um ato pode ser atribuído moralmente a alguém.'],
  ],
  exemplos: `<p><strong>Decidir mudar de curso:</strong> uma jovem pondera durante meses se troca de faculdade, conversa, reza, pesa razões e decide. Esse tipo de decisão, com deliberação e razões, é muito diferente de mover um dedo ao acaso, como no experimento de Libet. Generalizar do segundo para o primeiro é um salto discutível.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate sobre neurociência e responsabilidade chegou aos tribunais em alguns países ${tag('fato')}. <strong>No Brasil:</strong> o Código Penal prevê a inimputabilidade de quem, por doença mental, era incapaz de entender o caráter ilícito do fato (art. 26) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que negar a liberdade se autorrefuta na prática', tag: 'argumento',
    premissas: ['Quem argumenta que não somos livres espera que o ouvinte avalie razões e mude de opinião por elas.', 'Avaliar razões e aderir à melhor supõe alguma liberdade intelectual.', 'Logo, o próprio ato de argumentar contra a liberdade a pressupõe.'],
    conclusao: 'Logo, a negação total da liberdade tem dificuldade de se sustentar coerentemente.',
    nota: 'O argumento não prova o libertarismo, mas mostra o custo da negação total.',
  },
  objecoes: [
    { objecao: 'A neurociência provou que o livre-arbítrio é ilusão.', tag: 'debate',
      resposta: 'Nenhum experimento mostrou isso de modo conclusivo. Os estudos tratam de decisões simples e são interpretados de formas diversas. Que fatores cerebrais influenciem as decisões é compatível com a liberdade na visão hilemórfica e compatibilista. A questão é filosófica.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ensaio "a neurociência elimina a liberdade?", apresentando o experimento de Libet, duas interpretações, uma posição filosófica e a doutrina da Igreja, distinguindo dado, interpretação e tese.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 1730–1738 (a liberdade do homem)', link: null,
    orientacao: `<p>Observe a definição de liberdade e os fatores que podem diminuir a imputabilidade.</p>`,
  },
  perguntas: [
    { p: 'O que relatou Libet?', r: 'Que um sinal cerebral começava antes do relato da intenção de mover o dedo.' },
    { p: 'O que é o compatibilismo?', r: 'A tese de que liberdade e determinismo são compatíveis.' },
    { p: 'Que fatores podem diminuir a imputabilidade segundo o CIC 1735?', r: 'Ignorância, violência, medo, hábitos, afetos desordenados e fatores psíquicos ou sociais.' },
  ],
  exercicios: [
    mc('O experimento de Libet é de:', ['1983', '1879', '1959', '2015'], 0, 'Potencial de prontidão.'),
    mc('O hilemorfismo vê o homem como:', ['Uma substância única de alma e corpo', 'Duas substâncias', 'Só matéria', 'Só espírito'], 0, 'Tomás.'),
    mc('O art. 26 do Código Penal trata da:', ['Inimputabilidade por doença mental', 'Música', 'Educação', 'Trânsito'], 0, 'Brasil.'),
    mc('Para o libertarismo, há escolhas:', ['Não determinadas por causas anteriores', 'Sempre determinadas', 'Impossíveis', 'Só físicas'], 0, 'Definição.'),
    mc('Uma crítica a Libet é que ele estudou:', ['Movimentos triviais sem razões', 'Decisões de vida', 'Animais apenas', 'Sonhos'], 0, 'Limite.'),
    disc('Escreva o ensaio sobre neurociência e liberdade.', ['Experimento', 'Interpretações', 'Posição filosófica', 'Doutrina']),
  ],
  resumo: ['Dualismo, fisicalismo, hilemorfismo.', 'Libet (1983) e críticas.', 'Determinismo, compatibilismo, libertarismo.', 'CIC 1730–1738.', 'Negar a liberdade se autorrefuta.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1730–1738.', livro: 'cic' },
    { texto: 'Santo Tomás de Aquino, Questões disputadas sobre a alma.', livro: 'tomas-alma' },
    { texto: 'Ludwig Wittgenstein, Observações sobre a filosofia da psicologia.', livro: 'wittgenstein-psicologia' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler a fonte indicada'],
  revisao: [['Libet', '1983.'], ['Compatibilismo', 'Liberdade e determinismo.'], ['CIC 1735', 'Imputabilidade.']],
  avancado: {
    texto: `<h3>O problema difícil da consciência</h3>
<p>David Chalmers chamou de "problema difícil" (1995) a questão de por que processos físicos são acompanhados de experiência subjetiva ${tag('fato')}. Explicar funções (discriminar cores, relatar estados) seria o "problema fácil"; explicar por que há algo como "ver vermelho" seria o difícil ${tag('fato')}. O tema permanece aberto ${tag('debate')}.</p>`,
    leituras: [{ texto: 'David Chalmers, "Facing up to the problem of consciousness" (1995).' }],
    exercicios: [
      mc('O "problema difícil" é de:', ['Chalmers', 'Libet', 'Skinner', 'Freud'], 0, '1995.'),
      mc('O problema difícil pergunta por que há:', ['Experiência subjetiva', 'Neurônios', 'Comportamento', 'Linguagem'], 0, 'Consciência.'),
      mc('Discriminar cores é, para Chalmers, problema:', ['Fácil', 'Difícil', 'Insolúvel', 'Moral'], 0, 'Funções.'),
      disc('Explique o problema difícil e como uma visão hilemórfica poderia abordá-lo.', ['Problema', 'Exemplos', 'Hilemorfismo', 'Avaliação'])],
  },
}),

aula({
  id: 'ps3-4', titulo: 'Psicologia, fé e moral', duracao: '150 min',
  aprendera: ['Distinguir psicoterapia e direção espiritual', 'Conhecer o que a Igreja ensina sobre o uso das ciências humanas', 'Avaliar pesquisas sobre religião e saúde mental', 'Reconhecer situações que exigem encaminhamento profissional'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Fé e psicologia são rivais ou podem colaborar? Quando um problema é espiritual, psicológico ou ambos?</p>
<h3>Ensinamento da Igreja</h3>
<p>O Concílio Vaticano II pede que, na pastoral, se conheçam e usem não só os princípios teológicos, mas também as descobertas das ciências profanas, sobretudo a psicologia e a sociologia (Gaudium et spes, 62) ${tag('doutrina')}. Ao mesmo tempo, rejeita reduzir a pessoa a dimensões que neguem sua liberdade e sua abertura a Deus ${tag('doutrina')}.</p>
<h3>Distinções</h3>
<p>A psicoterapia trata sofrimento e transtornos com métodos psicológicos; a direção espiritual acompanha o crescimento na vida cristã; a confissão é sacramento ${tag('fato')}. São distintas e podem se complementar ${tag('interpretacao')}. Escrúpulos, por exemplo, podem ter dimensão espiritual e também de transtorno obsessivo, exigindo ajuda dupla ${tag('interpretacao')}.</p>
<h3>Pesquisa</h3>
<p>Revisões de estudos, como as reunidas por Harold Koenig e colaboradores, encontraram associação entre práticas religiosas e alguns indicadores de saúde mental, como menor risco de suicídio e depressão em certos grupos ${tag('fato')}. Associação não prova causalidade, e experiências religiosas negativas também podem prejudicar ${tag('fato')}.</p>
<h3>Encaminhar</h3>
<p>Ideação suicida, sintomas graves e persistentes ou risco a si e a outros exigem encaminhamento imediato a profissionais e serviços de saúde ${tag('fato')}. No Brasil, o CVV atende pelo telefone 188 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Psicoterapia', 'Tratamento de sofrimento psíquico por métodos psicológicos.'],
    ['Direção espiritual', 'Acompanhamento do crescimento na vida cristã.'],
    ['Escrúpulo', 'Medo excessivo e persistente de ter pecado.'],
    ['Encaminhamento', 'Indicação de serviço ou profissional adequado.'],
    ['Associação', 'Relação estatística entre variáveis, sem prova de causa.'],
  ],
  exemplos: `<p><strong>Um jovem em sofrimento:</strong> um rapaz conta ao catequista que não dorme há semanas, perdeu o interesse por tudo e pensa que seria melhor não existir. O catequista escuta com atenção, não minimiza, reza com ele se ele quiser, e o ajuda a procurar imediatamente um serviço de saúde, envolvendo a família. Fé e cuidado profissional andam juntos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Organização Mundial da Saúde estima mais de 700 mil mortes por suicídio por ano no mundo ${tag('fato')}. <strong>No Brasil:</strong> a campanha Setembro Amarelo promove a prevenção do suicídio, e o CVV atende gratuitamente pelo 188 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que fé e psicologia podem colaborar', tag: 'argumento',
    premissas: ['A pessoa é unidade de corpo, psique e espírito.', 'Sofrimentos podem ter causas em qualquer dessas dimensões, ou em várias.', 'Cada saber ilumina uma dimensão sem esgotar as outras.'],
    conclusao: 'Logo, fé e psicologia podem colaborar, respeitando a competência de cada uma.',
    nota: 'Colaborar exige que a psicologia não negue a dimensão espiritual nem a pastoral ignore a psíquica.',
  },
  objecoes: [
    { objecao: 'Quem tem fé verdadeira não precisa de psicólogo.', tag: 'debate',
      resposta: 'A fé não dispensa a medicina para doenças do corpo, nem a psicologia e a psiquiatria para transtornos psíquicos. Santos e pessoas de fé profunda também sofreram de enfermidades. Procurar ajuda é prudência, não falta de fé.' },
  ],
  aplicacao: `<p>Escreva um guia de uma página para catequistas ou líderes de grupo: sinais de alerta, como acolher, o que não fazer, e para onde encaminhar (serviços de saúde, CVV 188, profissionais), distinguindo apoio espiritual e tratamento.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Gaudium et spes, n. 62', link: null,
    orientacao: `<p>Observe como o Concílio pede o diálogo entre teologia e ciências humanas.</p>`,
  },
  perguntas: [
    { p: 'O que pede Gaudium et spes 62 sobre as ciências humanas?', r: 'Que a pastoral conheça e use suas descobertas, sobretudo da psicologia e da sociologia.' },
    { p: 'Qual a diferença entre psicoterapia e direção espiritual?', r: 'A psicoterapia trata sofrimento psíquico; a direção espiritual acompanha a vida cristã.' },
    { p: 'O que fazer diante de ideação suicida?', r: 'Encaminhar imediatamente a profissionais e serviços de saúde, envolvendo a família.' },
  ],
  exercicios: [
    mc('O CVV atende pelo número:', ['188', '190', '192', '193'], 0, 'Brasil.'),
    mc('Gaudium et spes menciona explicitamente:', ['Psicologia e sociologia', 'Só teologia', 'Física e química', 'Música'], 0, 'GS 62.'),
    mc('Associação entre religião e saúde mental:', ['Não prova causalidade sozinha', 'Prova que a religião cura tudo', 'Não existe', 'Prova o contrário'], 0, 'Método.'),
    mc('Escrúpulos podem exigir:', ['Ajuda espiritual e psicológica', 'Só mais confissões', 'Só medicação', 'Nada'], 0, 'Distinção.'),
    mc('O Setembro Amarelo trata da prevenção do:', ['Suicídio', 'Câncer', 'Trânsito', 'Dengue'], 0, 'Campanha.'),
    disc('Escreva o guia para catequistas da aplicação.', ['Sinais', 'Acolhida', 'O que não fazer', 'Encaminhamento']),
  ],
  resumo: ['GS 62: diálogo com as ciências.', 'Psicoterapia, direção espiritual, confissão.', 'Religião e saúde: associação.', 'Encaminhar sempre que houver risco.', 'CVV 188.'],
  referencias: [
    { texto: 'Concílio Vaticano II, Gaudium et spes (1965).' },
    { texto: 'Harold G. Koenig, Michael McCullough e David Larson, Handbook of Religion and Health (2001).' },
    { texto: 'Viktor Frankl, Em busca de sentido (1946).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o guia', 'Ler a fonte indicada'],
  revisao: [['GS 62', 'Ciências.'], ['188', 'CVV.'], ['Encaminhar', 'Risco.']],
  avancado: {
    texto: `<h3>Discernimento dos espíritos</h3>
<p>Santo Inácio de Loyola, nos Exercícios espirituais, propôs regras para discernir movimentos interiores de consolação e desolação ${tag('fato')}. Ensinou, por exemplo, a não mudar decisões em tempo de desolação ${tag('fato')}. Diretores espirituais experientes sabem distinguir desolação espiritual de depressão, que pede ajuda médica ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Inácio de Loyola, Exercícios espirituais, regras de discernimento.' }],
    exercicios: [
      mc('As regras de discernimento estão nos:', ['Exercícios espirituais', 'Princípios de psicologia', 'Tornar-se pessoa', 'DSM-5'], 0, 'Inácio.'),
      mc('Em tempo de desolação, Inácio aconselha:', ['Não mudar decisões', 'Mudar tudo', 'Abandonar a oração', 'Nada'], 0, 'Regra.'),
      mc('Desolação espiritual e depressão:', ['Devem ser distinguidas', 'São sempre a mesma coisa', 'Não existem', 'Não importam'], 0, 'Discernimento.'),
      disc('Explique a diferença entre desolação espiritual e depressão e por que a distinção é importante.', ['Desolação', 'Depressão', 'Sinais', 'Encaminhamento'])],
  },
}),

avaliacao('ps3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as escolas e os debates da psicologia, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu quadro comparativo.</li><li>Releia seu ensaio.</li></ul>`,
[
  disc('Compare behaviorismo, psicanálise, humanismo e cognitivismo quanto à visão da pessoa, e indique o que cada um acerta e o que deixa de fora segundo uma antropologia cristã.', ['Quatro escolas', 'Visão da pessoa', 'Acertos', 'Limites']),
  disc('Discuta se a neurociência elimina a liberdade, usando o experimento de Libet, uma posição filosófica e o Catecismo, e explique como fé e psicologia podem colaborar no cuidado das pessoas.', ['Libet', 'Filosofia', 'Catecismo', 'Colaboração']),
]),
];
