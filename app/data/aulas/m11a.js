// Módulo 11 — Mário Ferreira dos Santos: aulas 1 a 6.
import { tag } from '../fontes.js';
import { aula, mc, disc } from './_modelo.js';

const AVISO_EDICOES = `<p><strong>Sobre as edições:</strong> muitas obras saíram pela editora do próprio autor (Logos, São Paulo), com revisões irregulares; datas de primeira edição variam entre fontes. Confirme dados bibliográficos na edição que você usar ${tag('fato')}.</p>`;

export const AULAS = [
aula({
  id: 'm11-1', titulo: 'Vida, obra e contexto',
  aprendera: ['Os dados biográficos essenciais de Mário Ferreira dos Santos', 'O projeto da Enciclopédia de Ciências Filosóficas e Sociais', 'O lugar do autor na história da filosofia no Brasil', 'Como estudar um autor com recepção acadêmica pequena'],
  prereq: ['Módulos 4, 5 e 7'],
  explicacao: `
<h3>O autor</h3>
<p>Mário Ferreira dos Santos (1907–1968) nasceu em Tietê (SP), passou a juventude em Pelotas (RS), formou-se em Direito e Ciências Sociais em Porto Alegre e viveu em São Paulo a partir dos anos 1940 ${tag('fato')}. Foi tradutor (Nietzsche, Aristóteles, Pitágoras, Walt Whitman, entre outros), editor, conferencista e autor de dezenas de volumes ${tag('fato')}.</p>
<h3>A Enciclopédia</h3>
<p>Entre os anos 1950 e 1960 publicou a Enciclopédia de Ciências Filosóficas e Sociais, série de volumes que inclui Filosofia e Cosmovisão, Lógica e Dialéctica, Teoria do Conhecimento, Ontologia e Cosmologia, Tratado de Simbólica, Filosofia da Crise, Noologia Geral, Filosofia Concreta, Filosofia Concreta dos Valores, entre outros ${tag('fato')}. A grafia "dialéctica" é a do autor.</p>
${AVISO_EDICOES}
<h3>Um pensador à margem da universidade</h3>
<p>Mário não fez carreira universitária e foi pouco estudado pela academia brasileira em vida e nas décadas seguintes ${tag('fato')}. A partir dos anos 2000, reedições (sobretudo pela É Realizações) e a divulgação de Olavo de Carvalho, que o chamou de maior filósofo brasileiro, aumentaram seu público ${tag('fato')}. Essa avaliação é <strong>interpretação de um leitor</strong>, não consenso acadêmico ${tag('debate')}.</p>
<h3>Influências</h3>
<p>Mário dialoga com Pitágoras e Platão, Aristóteles, a escolástica (Tomás, Escoto, Suárez), Leibniz, Hegel e Nietzsche — este último traduzido e comentado por ele na juventude ${tag('interpretacao')}. Ele próprio apresenta seu sistema como síntese que quer recuperar o melhor de cada tradição ("filosofia positiva" no sentido de afirmativa, não comtiano) ${tag('interpretacao')}.</p>
<h3>Como estudá-lo aqui</h3>
<p>Com o mesmo rigor aplicado a qualquer autor: tese, argumento, fonte primária, contexto, interpretações alternativas, objeções, e a classificação do que está bem fundado, do que é controverso e do que é insuficientemente fundamentado ${tag('argumento')}.</p>`,
  vocabulario: [['Enciclopédia', 'Série de obras sistemáticas de Mário.'], ['Filosofia positiva', 'Para Mário: filosofia afirmativa, que busca o que há de verdadeiro nas doutrinas.'], ['Logos', 'Editora do próprio autor.'], ['Recepção', 'Modo como uma obra foi lida e discutida.'], ['Dialéctica', 'Grafia do autor para dialética.']],
  exemplos: '<p>Ao ler um elogio ("o maior filósofo brasileiro") ou uma rejeição ("autodidata eclético"), classifique: é fato, argumento ou interpretação? Quem disse e com que fundamento?</p>',
  contexto: `<p>O Brasil dos anos 1950 tinha poucos cursos de filosofia; a USP formava-se sob influência francesa (missão de professores estrangeiros a partir de 1934) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que estudar um autor pouco recebido (reconstruído)', tag: 'argumento',
    premissas: ['O valor de uma filosofia depende de seus argumentos, não de sua fama.', 'A falta de recepção acadêmica pode ter causas históricas, não só de mérito.', 'Mas fama recente também não prova mérito.'],
    conclusao: 'Logo, o modo justo é examinar os argumentos diretamente, com os mesmos critérios usados para outros autores.',
    nota: 'O princípio vale nos dois sentidos: nem desprezo prévio, nem adesão prévia.' },
  objecoes: [{ objecao: 'Se fosse grande filósofo, a academia o teria reconhecido.', tag: 'debate', resposta: 'O argumento confunde reconhecimento com mérito (apelo à autoridade coletiva). Por outro lado, a pouca discussão crítica é um dado real: muitas teses de Mário ainda não foram testadas por debate público rigoroso.' }],
  aplicacao: '<p>Monte no Caderno uma ficha do autor: dados biográficos confirmados, obras principais, influências declaradas, e uma coluna "a confirmar" para dados incertos.</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Filosofia e Cosmovisão, introdução', link: null, orientacao: '<p>Leia a introdução do primeiro volume da Enciclopédia. Anote como o autor descreve seu projeto e quais tradições ele invoca.</p>' },
  perguntas: [
    { p: 'Quando viveu Mário Ferreira dos Santos?', r: '1907–1968.' },
    { p: 'O que é a Enciclopédia de Ciências Filosóficas e Sociais?', r: 'A série de volumes sistemáticos de sua obra.' },
    { p: 'O que significa "filosofia positiva" para Mário?', r: 'Filosofia afirmativa, que busca o verdadeiro nas doutrinas; não o positivismo de Comte.' },
  ],
  exercicios: [
    mc('Mário nasceu em:', ['Pelotas', 'Tietê', 'Porto Alegre', 'São Paulo'], 1, '1907.'),
    mc('A expressão "o maior filósofo brasileiro" é:', ['Fato histórico', 'Consenso acadêmico', 'Interpretação de leitores como Olavo de Carvalho', 'Título oficial'], 2, 'Classifique a afirmação.'),
    mc('"Filosofia positiva" em Mário significa:', ['Positivismo comtiano', 'Filosofia afirmativa', 'Filosofia otimista', 'Filosofia jurídica'], 1, 'Não confundir com Comte.'),
    mc('Mário traduziu, entre outros:', ['Kant', 'Nietzsche', 'Heidegger', 'Wittgenstein'], 1, 'Na juventude.'),
    disc('Quais são as dificuldades para estudar com rigor um autor de pouca recepção acadêmica e edições irregulares? Proponha um método.', ['Identifica dificuldades', 'Propõe método', 'Evita apelo à fama ou ao desprezo', 'Clareza'])],
  resumo: ['1907–1968; Tietê, Pelotas, São Paulo.', 'Enciclopédia de Ciências Filosóficas e Sociais.', 'Edições irregulares: confirmar dados.', 'Recepção acadêmica pequena; reedições recentes.', 'Estudo com critérios uniformes.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Filosofia e Cosmovisão.', verificacao: 'a confirmar' }, { texto: 'Mário Ferreira dos Santos, Filosofia Concreta (reedição É Realizações).', verificacao: 'a confirmar' }],
  revisao: [['Mário Ferreira dos Santos', '1907–1968.'], ['Enciclopédia', 'Série sistemática de volumes.'], ['Filosofia positiva', 'Afirmativa, não comtiana.']],
  avancado: {
    texto: `<h3>História da filosofia no Brasil</h3>
<p>Para situar Mário, compare com outros pensadores brasileiros: Farias Brito (1862–1917), Leonel Franca (1893–1948), Vicente Ferreira da Silva (1916–1963), Miguel Reale (1910–2006), Henrique de Lima Vaz (1921–2002) ${tag('fato')}.</p>
<h3>O problema do autodidatismo</h3>
<p>Críticos apontam ecletismo, citações sem referência precisa e falta de diálogo com a filosofia acadêmica do século XX; defensores respondem que o projeto é sistemático e deve ser julgado pelas demonstrações ${tag('debate')}.</p>
<h3>Exercício de crítica de fontes</h3>
<p>Escolha uma afirmação histórica de Mário sobre um autor antigo e confira-a na fonte primária. Esse é o modo de construir uma avaliação própria ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Henrique C. de Lima Vaz, Escritos de Filosofia (vários volumes).' }, { texto: 'Antonio Paim, História das Ideias Filosóficas no Brasil.', verificacao: 'a confirmar' }],
    exercicios: [
      mc('Qual destes é pensador brasileiro contemporâneo de Mário?', ['Vicente Ferreira da Silva', 'Ortega y Gasset', 'Maritain', 'Gilson'], 0, '1916–1963.'),
      mc('A crítica de ecletismo a Mário é:', ['Fato provado', 'Debate aberto', 'Doutrina', 'Irrelevante'], 1, 'Avalie com textos.'),
      mc('O método recomendado para avaliar uma afirmação histórica de Mário é:', ['Confiar no autor', 'Conferir na fonte primária', 'Ignorar', 'Perguntar a um seguidor'], 1, 'Crítica de fontes.'),
      disc('Faça a crítica de fontes de uma afirmação histórica de Mário sobre Pitágoras, Platão ou Aristóteles.', ['Identifica a afirmação', 'Confere a fonte primária', 'Avalia a precisão', 'Conclusão honesta'])],
  },
}),

aula({
  id: 'm11-2', titulo: 'Filosofia e cosmovisão',
  aprendera: ['A distinção entre filosofia e cosmovisão', 'A noção de "perspectivas" e sua integração', 'O papel da crítica e da síntese', 'Comparações com Dilthey e Jaspers'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>Cosmovisão</h3>
<p>Em Filosofia e Cosmovisão, Mário distingue a cosmovisão (visão de mundo vivida, muitas vezes não examinada, com componentes afetivos, culturais e religiosos) da filosofia, que busca fundamentar racionalmente essa visão ${tag('interpretacao')}. Todos têm uma cosmovisão; nem todos filosofam.</p>
<h3>Perspectivas</h3>
<p>Cada doutrina vê o real de uma perspectiva e capta algo verdadeiro, mas tende a absolutizar o seu ângulo ${tag('interpretacao')}. A tarefa filosófica seria integrar as perspectivas sem cair no relativismo: perguntar o que cada uma afirma de positivo e onde exagera ${tag('argumento')}.</p>
<h3>Crítica e síntese</h3>
<p>Mário propõe não refutar por refutar, mas extrair o que há de verdadeiro e mostrar as condições em que uma tese vale — atitude que ele chama "positiva" ${tag('interpretacao')}. Isso lembra o "princípio de caridade" deste curso e o método escolástico das objeções.</p>
<h3>Comparações</h3>
<p>Wilhelm Dilthey (Os Tipos de Concepção do Mundo, 1911) classificou cosmovisões em naturalismo, idealismo da liberdade e idealismo objetivo ${tag('fato')}. Karl Jaspers (Psicologia das Concepções do Mundo, 1919) também estudou as visões de mundo ${tag('fato')}. Diferentemente deles, Mário não se contenta em tipificar: quer uma verdade que julgue as cosmovisões ${tag('interpretacao')}.</p>`,
  vocabulario: [['Cosmovisão', 'Visão de mundo vivida.'], ['Perspectiva', 'Ângulo parcial de uma doutrina sobre o real.'], ['Absolutização', 'Tomar a parte pelo todo.'], ['Síntese', 'Integração do verdadeiro de várias perspectivas.'], ['Weltanschauung', 'Termo alemão para cosmovisão.']],
  exemplos: '<p>O materialista vê com razão que o homem tem corpo e depende da matéria; erra ao dizer que é só matéria. O espiritualista vê a dimensão espiritual; erra se desprezar o corpo. A síntese busca a verdade de ambos.</p>',
  contexto: `<p>O tema das cosmovisões era central na filosofia alemã do início do século XX ${tag('fato')}.</p>`,
  argumento: { titulo: 'Toda doutrina capta algo do real (reconstruído)', tag: 'argumento',
    premissas: ['Uma doutrina que não capta nada do real não seria crível para ninguém.', 'Doutrinas duradouras são cridas por muitos com alguma razão.', 'Logo, captam algum aspecto real.', 'O erro está em absolutizar esse aspecto.'],
    conclusao: 'Portanto, a crítica filosófica deve extrair o verdadeiro e corrigir a absolutização.',
    nota: 'A premissa 1 é discutível: crenças podem durar por causas não racionais (interesse, medo).' },
  objecoes: [{ objecao: 'Integrar perspectivas leva ao ecletismo: juntar peças incompatíveis.', tag: 'debate', resposta: 'A integração só é legítima se houver um critério superior (para Mário, as teses demonstradas da Filosofia Concreta). Sem esse critério, a síntese seria mera colagem.' }],
  aplicacao: '<p>Descreva no Caderno sua cosmovisão em cinco proposições. Quais delas você já examinou filosoficamente?</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Filosofia e Cosmovisão', link: null, orientacao: '<p>Leia os capítulos iniciais sobre o conceito de filosofia e de cosmovisão. Anote as definições com suas próprias palavras.</p>' },
  perguntas: [
    { p: 'Diferença entre cosmovisão e filosofia?', r: 'Cosmovisão é visão vivida; filosofia busca fundamentá-la racionalmente.' },
    { p: 'Qual o erro típico de uma perspectiva?', r: 'Absolutizar seu ângulo.' },
    { p: 'Quem classificou tipos de concepção do mundo?', r: 'Dilthey.' },
  ],
  exercicios: [
    mc('A atitude que busca o verdadeiro em cada doutrina é chamada por Mário de:', ['Negativa', 'Positiva', 'Cética', 'Relativista'], 1, 'Filosofia positiva.'),
    mc('Os Tipos de Concepção do Mundo é de:', ['Jaspers', 'Dilthey', 'Scheler', 'Husserl'], 1, '1911.'),
    mc('A objeção principal ao método de integração é o risco de:', ['Dogmatismo', 'Ecletismo', 'Ceticismo', 'Fideísmo'], 1, 'Colagem sem critério.'),
    mc('Integrar perspectivas sem critério superior resulta em:', ['Síntese', 'Colagem', 'Demonstração', 'Dialética'], 1, 'Precisa de critério.'),
    disc('A integração de perspectivas é diferente do relativismo? Use o exemplo materialismo × espiritualismo.', ['Define os dois', 'Mostra a diferença', 'Usa o exemplo', 'Conclusão justificada'])],
  resumo: ['Cosmovisão × filosofia.', 'Perspectivas parciais.', 'Absolutização como erro.', 'Atitude positiva.', 'Dilthey e Jaspers.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Filosofia e Cosmovisão.', verificacao: 'a confirmar' }, { texto: 'Wilhelm Dilthey, Os Tipos de Concepção do Mundo (1911).' }],
  revisao: [['Cosmovisão', 'Visão de mundo vivida.'], ['Absolutização', 'Tomar a parte pelo todo.'], ['Dilthey', 'Tipologia das cosmovisões.']],
  avancado: {
    texto: `<h3>Perspectivismo: Nietzsche e Ortega</h3>
<p>Nietzsche falou de perspectivismo sem verdade absoluta; Ortega y Gasset (O Tema de Nosso Tempo, 1923) defendeu que a perspectiva é componente da realidade ${tag('fato')}. Mário, leitor de Nietzsche, quer conservar a parcialidade das perspectivas sem renunciar à verdade ${tag('interpretacao')}.</p>
<h3>Tomás e as autoridades</h3>
<p>Tomás também procurava "salvar" o que havia de verdadeiro nos autores, por interpretação benigna (<em>exponere reverenter</em>) ${tag('interpretacao')}. Compare com a atitude positiva de Mário.</p>`,
    leituras: [{ texto: 'José Ortega y Gasset, O Tema de Nosso Tempo (1923).' }],
    exercicios: [
      mc('"O tema de nosso tempo" (1923) é de:', ['Unamuno', 'Ortega y Gasset', 'Zubiri', 'Marías'], 1, 'Perspectivismo.'),
      mc('"Exponere reverenter" designa:', ['Refutar duramente', 'Interpretar benignamente as autoridades', 'Citar sem ler', 'Traduzir'], 1, 'Prática escolástica.'),
      mc('Mário quer conservar das perspectivas:', ['O relativismo', 'O que há de verdadeiro', 'Nada', 'Só as modernas'], 1, 'Sem abandonar a verdade.'),
      disc('Compare o perspectivismo de Nietzsche, o de Ortega e a integração de perspectivas de Mário.', ['Três posições', 'Papel da verdade', 'Compara', 'Conclusão'])],
  },
}),

aula({
  id: 'm11-3', titulo: 'Lógica e dialéctica',
  aprendera: ['Como Mário relaciona lógica formal e dialética', 'A decadialética: os campos de análise', 'A pentadialética e os planos do real', 'Comparação com Aristóteles e Hegel'],
  prereq: ['Módulo 4: Lógica e argumentação'],
  explicacao: `
<h3>Lógica e dialética</h3>
<p>Em Lógica e Dialéctica e em Métodos Lógicos e Dialécticos, Mário trata a lógica formal como indispensável e a completa com uma dialética que examina os conceitos em suas relações, oposições e graus ${tag('interpretacao')}. Diferentemente de Hegel, ele não aceita que a contradição esteja no próprio ser: a dialética é método de análise, sujeito ao princípio de não contradição ${tag('interpretacao')}.</p>
<h3>Decadialética</h3>
<p>A "decadialética" propõe examinar um tema em dez campos de oposição, como sujeito e objeto, atual e virtual, intensidade e extensidade, entre outros ${tag('fato')}. O objetivo é evitar análises unilaterais, obrigando o pensamento a considerar todos os aspectos de um objeto ${tag('interpretacao')}. Confira a lista exata dos dez campos na obra; as exposições secundárias às vezes variam.</p>
<h3>Pentadialética</h3>
<p>A "pentadialética" considera um objeto em cinco planos: como unidade, como parte de uma totalidade, como série, como sistema e como universo ${tag('interpretacao')}. Um ser humano, por exemplo, é unidade (pessoa), parte de uma família, membro de uma série (gerações), de um sistema (sociedade) e do universo.</p>
<h3>Aristóteles e Hegel</h3>
<p>Para Aristóteles, a dialética é raciocínio a partir de opiniões aceitas (Tópicos I, 1), útil para examinar princípios ${tag('fato')}. Para Hegel, é o movimento do próprio real (aula 10-1). Mário fica mais perto de Aristóteles e da escolástica quanto ao estatuto, embora amplie os instrumentos ${tag('interpretacao')}.</p>`,
  vocabulario: [['Decadialética', 'Análise em dez campos de oposição.'], ['Pentadialética', 'Análise em cinco planos: unidade, totalidade, série, sistema, universo.'], ['Intensidade e extensidade', 'Qualidade/grau × quantidade/extensão.'], ['Atual e virtual', 'O que é em ato × o que está em potência.'], ['Dialética (Aristóteles)', 'Raciocínio a partir de opiniões aceitas.']],
  exemplos: '<p>Aplique a pentadialética a uma árvore: unidade (este carvalho), totalidade (a floresta), série (gerações de carvalhos), sistema (ecossistema), universo (a natureza viva).</p>',
  contexto: `<p>Mário escreveu num contexto em que o marxismo divulgava a "lógica dialética" como superação da lógica formal; ele rejeita essa tese ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'A dialética não suspende a não contradição (reconstruído)', tag: 'argumento',
    premissas: ['Toda afirmação, inclusive a de uma dialética, pretende ser verdadeira e não falsa ao mesmo tempo.', 'Isso supõe o princípio de não contradição.', 'Uma dialética que negasse esse princípio se autorrefutaria.'],
    conclusao: 'Logo, a dialética legítima opera dentro da lógica, examinando oposições sem afirmar contradições reais.',
    nota: 'O argumento é o de Aristóteles em Metafísica IV contra quem nega a não contradição (Módulo 4).' },
  objecoes: [{ objecao: 'Os esquemas (dez campos, cinco planos) são classificações arbitrárias.', tag: 'debate', resposta: 'Avalie pelo uso: ajudam a ver aspectos esquecidos? Se sim, têm valor heurístico, mesmo que a lista não seja demonstrada como completa. A completude é ponto controverso.' }],
  aplicacao: '<p>Aplique a pentadialética a um tema (uma lei, uma obra de arte, você mesmo) e registre no Caderno o que cada plano revelou.</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Lógica e Dialéctica; Métodos Lógicos e Dialécticos', link: null, orientacao: '<p>Leia a exposição da decadialética e da pentadialética. Faça uma tabela com cada campo/plano e um exemplo seu.</p>' },
  perguntas: [
    { p: 'Para Mário, a dialética suspende a não contradição?', r: 'Não; é método de análise dentro da lógica.' },
    { p: 'Quais os cinco planos da pentadialética?', r: 'Unidade, totalidade, série, sistema, universo.' },
    { p: 'O que é dialética para Aristóteles?', r: 'Raciocínio a partir de opiniões aceitas.' },
  ],
  exercicios: [
    mc('A decadialética examina um tema em:', ['Três momentos', 'Cinco planos', 'Dez campos', 'Doze categorias'], 2, 'Campos de oposição.'),
    mc('Mário, quanto ao estatuto da dialética, está mais perto de:', ['Hegel', 'Aristóteles e a escolástica', 'Marx', 'Kant'], 1, 'Não contradição.'),
    mc('Na pentadialética, a família é para o indivíduo uma:', ['Unidade', 'Totalidade', 'Série', 'Universo'], 1, 'Parte de um todo.'),
    mc('A objeção de arbitrariedade dos esquemas é:', ['Fato', 'Debate aberto', 'Doutrina', 'Falácia'], 1, 'Avalie pelo uso.'),
    disc('A dialética de Mário é útil ou arbitrária? Aplique-a a um exemplo e avalie.', ['Aplica corretamente', 'Mostra ganhos', 'Considera a objeção', 'Conclusão justificada'])],
  resumo: ['Lógica formal indispensável.', 'Dialética como método, não contradição real.', 'Decadialética: dez campos.', 'Pentadialética: cinco planos.', 'Perto de Aristóteles, longe de Hegel.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Lógica e Dialéctica.', verificacao: 'a confirmar' }, { texto: 'Mário Ferreira dos Santos, Métodos Lógicos e Dialécticos.', verificacao: 'a confirmar' }, { texto: 'Aristóteles, Tópicos I, 1–2.' }],
  revisao: [['Decadialética', 'Dez campos de oposição.'], ['Pentadialética', 'Unidade, totalidade, série, sistema, universo.'], ['Dialética em Aristóteles', 'Tópicos I, 1.']],
  avancado: {
    texto: `<h3>Opostos em Aristóteles</h3>
<p>Categorias 10 distingue quatro tipos de opostos: relativos, contrários, privação e posse, afirmação e negação ${tag('fato')}. Compare com os campos da decadialética: quais são contrários, quais são relativos?</p>
<h3>Lógica paraconsistente</h3>
<p>Newton da Costa (1929–2024), lógico brasileiro, desenvolveu lógicas paraconsistentes, que toleram contradições sem trivialidade ${tag('fato')}. Isso não implica que o real seja contraditório: é um instrumento formal discutido entre lógicos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Aristóteles, Categorias 10–11.' }, { texto: 'Newton C. A. da Costa, Ensaio sobre os Fundamentos da Lógica (1980).' }],
    exercicios: [
      mc('Categorias 10 distingue quantos tipos de opostos?', ['Dois', 'Quatro', 'Cinco', 'Dez'], 1, 'Relativos, contrários, privação, contradição.'),
      mc('Lógicas paraconsistentes foram desenvolvidas por:', ['Mário', 'Newton da Costa', 'Vicente Ferreira da Silva', 'Reale'], 1, 'Lógico brasileiro.'),
      mc('Lógica paraconsistente implica que o real é contraditório?', ['Sim', 'Não necessariamente', 'Sempre', 'Só em física'], 1, 'Instrumento formal.'),
      disc('Classifique os campos da decadialética segundo os quatro tipos de opostos de Aristóteles.', ['Usa Categorias 10', 'Classificação justificada', 'Nota limites', 'Clareza'])],
  },
}),

aula({
  id: 'm11-4', titulo: 'Teoria do conhecimento',
  aprendera: ['O problema do conhecimento em Mário', 'A crítica ao ceticismo absoluto', 'Realismo e o papel do sujeito', 'Comparação com Tomás e Kant'],
  prereq: ['Módulo 6: Epistemologia'],
  explicacao: `
<h3>O problema</h3>
<p>Em Teoria do Conhecimento, Mário examina as posições clássicas (dogmatismo, ceticismo, criticismo, relativismo, pragmatismo) e suas versões ${tag('interpretacao')}. Seu método é o mesmo da atitude positiva: o que cada uma vê de verdadeiro?</p>
<h3>Contra o ceticismo absoluto</h3>
<p>O cético absoluto afirma que nada se pode saber — mas pretende saber isso. A posição se autorrefuta ${tag('argumento')}. Mário reconhece, contudo, o valor do ceticismo moderado como disciplina contra a precipitação ${tag('interpretacao')}.</p>
<h3>Realismo crítico</h3>
<p>O conhecimento é adequação entre o intelecto e a coisa, como na definição escolástica (<em>adaequatio intellectus et rei</em>) ${tag('fato')}. Mas o sujeito não é passivo: conhece segundo seus esquemas e seu modo de ser (o "modo do conhecedor", princípio escolástico: "o que é recebido é recebido segundo o modo de quem recebe") ${tag('interpretacao')}. Mário integra assim a contribuição do sujeito, que Kant absolutizou, sem negar o acesso ao real ${tag('interpretacao')}.</p>
<h3>Graus do conhecimento</h3>
<p>Do sensível ao intelectual, há graus de abstração; o conhecimento humano é real mas sempre perfectível, nunca exaustivo ${tag('interpretacao')}. Compare com Maritain, Os Graus do Saber (1932) ${tag('fato')}.</p>`,
  vocabulario: [['Adaequatio', 'Adequação entre intelecto e coisa.'], ['Ceticismo absoluto', 'Tese de que nada se pode saber.'], ['Realismo crítico', 'Acesso real, mediado pelo modo do sujeito.'], ['Esquema', 'Estrutura pela qual o sujeito assimila.'], ['Graus de abstração', 'Níveis do conhecimento: físico, matemático, metafísico.']],
  exemplos: '<p>Um daltônico e você veem a mesma maçã. Ambos conhecem algo real (forma, tamanho), mas segundo seu modo. Isso não prova que ninguém conhece a maçã — prova que conhecer é sempre a partir de um sujeito.</p>',
  contexto: `<p>O texto dialoga com a neoescolástica e com as epistemologias modernas ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'O ceticismo absoluto se autorrefuta (reconstruído)', tag: 'argumento',
    premissas: ['O cético absoluto afirma: "nada pode ser conhecido".', 'Se a afirmação é conhecida como verdadeira, há algo conhecido.', 'Se não é conhecida, não há razão para aceitá-la.'],
    conclusao: 'Logo, o ceticismo absoluto não pode ser sustentado racionalmente.',
    nota: 'Os pirrônicos antigos evitavam afirmar a tese, apenas suspendiam o juízo (Sexto Empírico). O argumento atinge o ceticismo dogmático, não necessariamente o pirrônico.' },
  objecoes: [{ objecao: 'O pirrônico não afirma nada; apenas suspende o juízo.', tag: 'debate', resposta: 'Mas age e fala como se algumas coisas fossem melhores que outras; a suspensão total é impossível na vida (Hume também notou isso). A objeção limita o alcance do argumento.' }],
  aplicacao: '<p>Escolha uma crença que você tem e explique o que nela vem do objeto e o que vem do seu "modo de receber".</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Teoria do Conhecimento', link: null, orientacao: '<p>Leia os capítulos sobre o ceticismo e sobre o realismo. Compare com Tomás, Suma I, q. 84–85.</p>' },
  perguntas: [
    { p: 'Por que o ceticismo absoluto se autorrefuta?', r: 'Porque pretende saber que nada se sabe.' },
    { p: 'O que é a adaequatio?', r: 'Adequação entre intelecto e coisa: definição de verdade.' },
    { p: 'Que contribuição do sujeito Mário admite?', r: 'O modo de receber, sem negar o acesso ao real.' },
  ],
  exercicios: [
    mc('"O que é recebido é recebido segundo o modo de quem recebe" é princípio:', ['Kantiano', 'Escolástico', 'Cético', 'Positivista'], 1, 'Quidquid recipitur...'),
    mc('Os Graus do Saber é de:', ['Gilson', 'Maritain', 'Mário', 'Garrigou-Lagrange'], 1, '1932.'),
    mc('O argumento da autorrefutação atinge principalmente:', ['O pirronismo', 'O ceticismo dogmático', 'O realismo', 'O criticismo'], 1, 'Quem afirma a tese.'),
    mc('Para Mário, Kant:', ['Errou em tudo', 'Absolutizou a contribuição do sujeito', 'Estava certo em tudo', 'Era cético'], 1, 'Atitude positiva.'),
    disc('Compare o realismo crítico de Mário com Tomás e com Kant. Onde ele se aproxima de cada um?', ['Expõe Mário', 'Expõe Tomás', 'Expõe Kant', 'Conclusão justificada'])],
  resumo: ['Exame das posições.', 'Ceticismo absoluto se autorrefuta.', 'Adaequatio.', 'Modo do conhecedor.', 'Graus do conhecimento.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Teoria do Conhecimento.', verificacao: 'a confirmar' }, { texto: 'Jacques Maritain, Os Graus do Saber (1932).' }, { texto: 'Tomás de Aquino, Suma Teológica I, qq. 84–85.' }],
  revisao: [['Adaequatio intellectus et rei', 'Definição escolástica de verdade.'], ['Quidquid recipitur', 'Recebe-se segundo o modo de quem recebe.'], ['Ceticismo absoluto', 'Autorrefutação.']],
  avancado: {
    texto: `<h3>Pirronismo</h3>
<p>Sexto Empírico (Esboços Pirrônicos) apresenta os "modos" de Enesidemo e Agripa para suspender o juízo; o trilema de Agripa (regresso, círculo, hipótese) continua no centro da epistemologia ${tag('fato')}.</p>
<h3>Lonergan</h3>
<p>Bernard Lonergan (Insight, 1957) propôs um "realismo crítico" baseado na estrutura do conhecer: experiência, compreensão, juízo ${tag('fato')}. Compare com Mário.</p>`,
    leituras: [{ texto: 'Sexto Empírico, Esboços Pirrônicos, livro I.' }, { texto: 'Bernard Lonergan, Insight (1957).' }],
    exercicios: [
      mc('O trilema de Agripa inclui:', ['Regresso, círculo, hipótese', 'Tese, antítese, síntese', 'Ato, potência, forma', 'Ser, nada, devir'], 0, 'Pirronismo.'),
      mc('Insight (1957) é de:', ['Maritain', 'Lonergan', 'Gilson', 'Rahner'], 1, 'Realismo crítico.'),
      mc('Lonergan estrutura o conhecer em:', ['Sentir e querer', 'Experiência, compreensão, juízo', 'Intuição e dedução', 'Fé e razão'], 1, 'Insight.'),
      disc('O realismo crítico responde ao trilema de Agripa? Use Mário ou Lonergan.', ['Expõe o trilema', 'Expõe a resposta', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm11-5', titulo: 'Ontologia e cosmologia',
  aprendera: ['A ontologia como estudo do ser enquanto ser em Mário', 'Ato e potência, essência e existência na sua leitura', 'A cosmologia: o mundo como ordem', 'O diálogo com a escolástica'],
  prereq: ['Módulo 7: Metafísica'],
  explicacao: `
<h3>Ser enquanto ser</h3>
<p>Em Ontologia e Cosmologia, Mário retoma a ontologia clássica (Aristóteles, Metafísica IV; escolástica) e a organiza segundo seu método ${tag('interpretacao')}. Trata do ser, dos transcendentais (uno, verdadeiro, bom), de ato e potência, essência e existência, substância e acidente ${tag('interpretacao')}.</p>
<h3>Leitura escolástica</h3>
<p>Mário dialoga especialmente com Tomás, Duns Escoto e Suárez, e se interessa pelas distinções entre eles — por exemplo, sobre a distinção real ou de razão entre essência e existência ${tag('interpretacao')}. Muitas vezes procura conciliar as escolas, o que é ponto de debate ${tag('debate')}.</p>
<h3>Cosmologia</h3>
<p>A cosmologia filosófica estuda o mundo como ordem (<em>kosmos</em>): unidade e multiplicidade, tempo, espaço, causalidade, finalidade ${tag('fato')}. Mário defende que a ordem do mundo exige princípios que não se reduzem à matéria ${tag('interpretacao')}.</p>
<h3>O pitagorismo</h3>
<p>Mário valoriza Pitágoras e o "número" como princípio de proporção e ordem, não só quantidade (Pitágoras e o Tema do Número) ${tag('fato')}. Historiadores lembram que quase nada sabemos do Pitágoras histórico; muito do "pitagorismo" é posterior ${tag('fato')}.</p>`,
  vocabulario: [['Ontologia', 'Estudo do ser enquanto ser.'], ['Transcendentais', 'Uno, verdadeiro, bom: propriedades de todo ente.'], ['Cosmologia filosófica', 'Estudo do mundo como ordem.'], ['Número (pitagórico)', 'Proporção e ordem.'], ['Distinção real', 'Distinção entre realidades, não só conceitos.']],
  exemplos: '<p>Uma melodia não é só sons: é proporção entre eles. Pitagóricos viram nisso um sinal de que a ordem do mundo é "numérica" no sentido de proporcional.</p>',
  contexto: `<p>A neoescolástica (Mercier, Garrigou-Lagrange, Gilson) era a referência metafísica católica nas décadas em que Mário escreveu ${tag('fato')}.</p>`,
  argumento: { titulo: 'A ordem exige princípio de ordem (reconstruído)', tag: 'argumento',
    premissas: ['O mundo apresenta ordem: regularidades, proporções, fins.', 'Ordem é relação de partes segundo uma medida.', 'A medida não se explica pelas partes isoladas.'],
    conclusao: 'Logo, a ordem do mundo exige um princípio que não se reduz às partes materiais.',
    nota: 'O argumento se aproxima da quinta via de Tomás. Naturalistas respondem com auto-organização e seleção natural.' },
  objecoes: [{ objecao: 'Sistemas físicos se auto-organizam sem princípio externo (Prigogine).', tag: 'debate', resposta: 'Defensores dizem que a auto-organização supõe leis e disposições que já são ordem; a questão se desloca para a origem das leis. O debate é aberto.' }],
  aplicacao: '<p>Aplique as noções de ato e potência a um processo da natureza (uma semente, um rio) e registre no Caderno.</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Ontologia e Cosmologia', link: null, orientacao: '<p>Leia a parte sobre ato e potência e a sobre essência e existência. Compare com Tomás, O Ente e a Essência.</p>' },
  perguntas: [
    { p: 'Quais os transcendentais clássicos?', r: 'Uno, verdadeiro, bom (entre outros, como "algo" e "coisa").' },
    { p: 'O que estuda a cosmologia filosófica?', r: 'O mundo como ordem.' },
    { p: 'O que é o "número" para os pitagóricos, segundo Mário?', r: 'Proporção e ordem, não só quantidade.' },
  ],
  exercicios: [
    mc('A distinção real entre essência e existência é tese característica de:', ['Suárez', 'Tomás (segundo a leitura tomista)', 'Ockham', 'Hume'], 1, 'Suárez a nega.'),
    mc('Sobre o Pitágoras histórico, sabemos:', ['Muito, pelos seus livros', 'Muito pouco; muito do pitagorismo é posterior', 'Tudo por Aristóteles', 'Nada'], 1, 'Cuidado historiográfico.'),
    mc('A objeção da auto-organização é associada a:', ['Prigogine', 'Pitágoras', 'Suárez', 'Tomás'], 0, 'Termodinâmica de não equilíbrio.'),
    mc('A tendência de Mário de conciliar escolas é:', ['Fato pacífico', 'Ponto de debate', 'Dogma', 'Irrelevante'], 1, 'Avalie caso a caso.'),
    disc('O argumento da ordem resiste à objeção da auto-organização? Argumente.', ['Reconstrói', 'Expõe a objeção', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Ontologia clássica.', 'Diálogo com Tomás, Escoto, Suárez.', 'Cosmologia como ordem.', 'Pitagorismo e número.', 'Cuidado com o Pitágoras histórico.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Ontologia e Cosmologia.', verificacao: 'a confirmar' }, { texto: 'Mário Ferreira dos Santos, Pitágoras e o Tema do Número.', verificacao: 'a confirmar' }, { texto: 'Walter Burkert, Lore and Science in Ancient Pythagoreanism (1972).' }],
  revisao: [['Transcendentais', 'Uno, verdadeiro, bom.'], ['Cosmologia filosófica', 'Mundo como ordem.'], ['Número pitagórico', 'Proporção.']],
  avancado: {
    texto: `<h3>Burkert e o pitagorismo</h3>
<p>Walter Burkert (1962; tradução inglesa 1972) mostrou que muito do pitagorismo "matemático" deve-se a Filolau e a platônicos posteriores, e que o Pitágoras histórico era sobretudo figura religiosa ${tag('fato')}. Confronte essa leitura com a de Mário ${tag('debate')}.</p>
<h3>Suárez</h3>
<p>Francisco Suárez (Disputationes metaphysicae, 1597) negou a distinção real entre essência e existência e influenciou a metafísica moderna (Descartes, Wolff) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Francisco Suárez, Disputationes metaphysicae, disp. 31.' }, { texto: 'Walter Burkert, Lore and Science in Ancient Pythagoreanism (1972).' }],
    exercicios: [
      mc('As Disputationes metaphysicae são de:', ['Tomás', 'Suárez', 'Escoto', 'Caetano'], 1, '1597.'),
      mc('Burkert viu o Pitágoras histórico sobretudo como:', ['Matemático', 'Figura religiosa', 'Político', 'Físico'], 1, 'Lore and Science.'),
      mc('Suárez sobre essência e existência:', ['Distinção real', 'Nega a distinção real', 'Identidade em todos os entes', 'Não tratou'], 1, 'Disp. 31.'),
      disc('Confronte a imagem de Pitágoras em Mário com a de Burkert. O que isso muda na avaliação do pitagorismo de Mário?', ['Expõe Mário', 'Expõe Burkert', 'Avalia', 'Conclusão honesta'])],
  },
}),

aula({
  id: 'm11-6', titulo: 'Filosofia Concreta: o método das teses',
  aprendera: ['O projeto da Filosofia Concreta', 'A demonstração "apodítica" e o modelo geométrico', 'O ponto de partida: "alguma coisa há"', 'Critérios para avaliar uma demonstração'],
  prereq: ['Módulo 4: validade e solidez'],
  explicacao: `
<h3>Um projeto ambicioso</h3>
<p>Filosofia Concreta (primeira edição no fim dos anos 1950, ampliada depois) é a obra que Mário considerava central ${tag('fato')}. Propõe construir a filosofia como série de teses demonstradas, à maneira geométrica (<em>more geometrico</em>), de modo que cada uma decorra das anteriores ou de evidências ${tag('interpretacao')}.</p>
<h3>Apodítico</h3>
<p>"Apodítico" (do grego <em>apodeixis</em>, demonstração) designa juízos necessários, cujo contrário é impossível. Mário quer que as teses fundamentais tenham essa necessidade, e não sejam apenas prováveis ${tag('interpretacao')}.</p>
<h3>"Alguma coisa há"</h3>
<p>A primeira tese afirma que alguma coisa há — e que o nada absoluto não há ${tag('fato')}. Negá-la seria afirmar algo (a negação), o que já é haver alguma coisa ${tag('argumento')}. A partir daí, Mário procura demonstrar propriedades do ser: que o nada absoluto não pode ser causa, que algo sempre houve, que há um ser que não depende de outro ${tag('interpretacao')}.</p>
<h3>Modelos</h3>
<p>O ideal geométrico lembra Espinosa (Ética, 1677) ${tag('fato')}; o conteúdo, porém, é próximo da metafísica clássica e escolástica ${tag('interpretacao')}. "Concreta" significa, para Mário, que considera o ser em todas as suas relações, não abstraído delas ${tag('interpretacao')}.</p>
<h3>Como avaliar</h3>
<p>Para cada tese: (1) os termos estão definidos? (2) a inferência é válida? (3) as premissas são evidentes ou demonstradas? (4) há equívocos de sentido entre "nada", "ser", "haver"? ${tag('argumento')}</p>`,
  vocabulario: [['Filosofia Concreta', 'Sistema de teses demonstradas de Mário.'], ['Apodítico', 'Necessário, cujo contrário é impossível.'], ['More geometrico', 'À maneira geométrica.'], ['Nada absoluto', 'Ausência total de qualquer coisa.'], ['Concreto', 'O ser considerado em todas as suas relações.']],
  exemplos: '<p>Tente negar "alguma coisa há". Para negar, você pensa, fala, escreve — tudo isso é algo. A tese parece imune à negação; o trabalho é ver o que se pode legitimamente deduzir dela.</p>',
  contexto: `<p>O método dialoga com a tradição racionalista (Espinosa, Wolff) e com a escolástica ${tag('interpretacao')}.</p>`,
  argumento: { titulo: '"Alguma coisa há" (reconstruído)', tag: 'argumento',
    premissas: ['Para negar que alguma coisa há, é preciso que haja a negação.', 'A negação é alguma coisa.', 'Logo, a negação da tese a confirma.'],
    conclusao: 'Portanto, "alguma coisa há" é indubitável.',
    nota: 'A tese é análoga ao cogito, mas sem centrar no sujeito. O ponto controverso não é a primeira tese, e sim as passagens seguintes (por exemplo, de "algo há" para "algo sempre houve").' },
  objecoes: [{ objecao: 'Teses tão gerais são verdadeiras, mas vazias: delas não se deduz nada substantivo sem premissas extras.', tag: 'debate', resposta: 'Mário pretende que delas se deduzam teses sobre a eternidade do ser e a existência de um ser necessário. Avalie cada passo: onde entram premissas não declaradas?' }],
  aplicacao: '<p>Escolha uma tese da Filosofia Concreta e aplique os quatro critérios de avaliação. Registre no Caderno.</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Filosofia Concreta, primeiras teses', link: null, orientacao: '<p>Leia as primeiras teses e suas demonstrações. Reconstrua cada uma em premissas numeradas.</p>' },
  perguntas: [
    { p: 'O que significa "apodítico"?', r: 'Necessário, cujo contrário é impossível.' },
    { p: 'Qual a primeira tese?', r: 'Alguma coisa há; o nada absoluto não há.' },
    { p: 'O que significa "concreta" em Filosofia Concreta?', r: 'O ser considerado em todas as suas relações.' },
  ],
  exercicios: [
    mc('O ideal more geometrico lembra:', ['Hume', 'Espinosa', 'Kierkegaard', 'Pascal'], 1, 'Ética (1677).'),
    mc('A negação de "alguma coisa há":', ['A refuta', 'A confirma', 'É neutra', 'É impossível de formular'], 1, 'A negação é algo.'),
    mc('O ponto mais controverso do sistema tende a estar:', ['Na primeira tese', 'Nas passagens seguintes', 'No prefácio', 'Nas notas'], 1, 'Verifique cada passo.'),
    mc('Qual não é critério para avaliar uma tese?', ['Termos definidos', 'Validade da inferência', 'Fama do autor', 'Premissas evidentes'], 2, 'Apelo à autoridade.'),
    disc('Reconstrua as três primeiras teses da Filosofia Concreta e avalie cada passagem com os quatro critérios.', ['Reconstrução fiel', 'Aplica os critérios', 'Identifica premissas ocultas', 'Conclusão justificada'])],
  resumo: ['Filosofia como teses demonstradas.', 'Apodítico.', '"Alguma coisa há."', 'Modelo geométrico.', 'Quatro critérios de avaliação.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Filosofia Concreta.', verificacao: 'a confirmar' }, { texto: 'Espinosa, Ética demonstrada à maneira dos geômetras (1677).' }],
  revisao: [['Apodítico', 'Necessário.'], ['Primeira tese', 'Alguma coisa há.'], ['More geometrico', 'Modelo de Espinosa.']],
  avancado: {
    texto: `<h3>Comparação com Parmênides</h3>
<p>Parmênides: "o ser é, o não-ser não é" (fr. 2 e 6) ${tag('fato')}. Mário quer evitar a conclusão parmenidiana de que a multiplicidade e o movimento são ilusórios, distinguindo nada absoluto e nada relativo (privação) ${tag('interpretacao')}.</p>
<h3>Leibniz</h3>
<p>Leibniz perguntou: "por que há algo em vez de nada?" (Princípios da Natureza e da Graça, 1714, §7) ${tag('fato')}. Compare a pergunta com a primeira tese de Mário: uma parte do fato de haver algo; a outra pede sua razão.</p>`,
    leituras: [{ texto: 'Parmênides, Fragmentos 2, 6 e 8.' }, { texto: 'Leibniz, Princípios da Natureza e da Graça (1714), §7.' }],
    exercicios: [
      mc('"Por que há algo em vez de nada?" é de:', ['Heidegger apenas', 'Leibniz', 'Mário', 'Parmênides'], 1, 'Princípios da Natureza e da Graça, §7.'),
      mc('Para evitar Parmênides, Mário distingue:', ['Ato e potência', 'Nada absoluto e nada relativo', 'Fé e razão', 'Sujeito e objeto'], 1, 'Privação.'),
      mc('"O ser é, o não-ser não é" é de:', ['Heráclito', 'Parmênides', 'Pitágoras', 'Zenão'], 1, 'Fragmentos.'),
      disc('A distinção entre nada absoluto e nada relativo resolve o problema de Parmênides? Compare com Aristóteles (ato e potência).', ['Expõe Parmênides', 'Expõe Mário', 'Expõe Aristóteles', 'Conclusão justificada'])],
  },
}),
];
