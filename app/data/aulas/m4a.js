// Módulo 4 — Lógica e argumentação: aulas 1 a 6.
import { tag } from '../fontes.js';
import { aula, mc, disc } from './_modelo.js';

const V = (argumento, valido, explicacao) => ({ tipo: 'validade', enunciado: 'O argumento é válido?', argumento, valido, explicacao });
const P = (frases, papeis, explicacao) => ({ tipo: 'premissas', enunciado: 'Classifique cada frase.', frases, papeis, explicacao });

export const AULAS = [
aula({
  id: 'm4-1', titulo: 'Premissas e conclusões',
  aprendera: ['O que é um argumento e como reconhecê-lo', 'Indicadores de premissa e de conclusão', 'A diferença entre argumento e explicação', 'Como padronizar um argumento e achar premissas implícitas'],
  prereq: ['Módulo 3, aula 1: leitura ativa'],
  explicacao: `
<h3>O que é um argumento</h3>
<p>Em lógica, argumento não é briga: é um conjunto de proposições em que uma, a <strong>conclusão</strong>, é apresentada como apoiada pelas outras, as <strong>premissas</strong> ${tag('argumento')}. Toda a filosofia se faz com argumentos; reconhecê-los é a primeira habilidade lógica.</p>
<h3>Indicadores</h3>
<ul>
<li><strong>De conclusão</strong>: logo, portanto, por isso, segue-se que, consequentemente, assim.</li>
<li><strong>De premissa</strong>: porque, pois, visto que, já que, dado que, uma vez que.</li>
</ul>
<p>Os indicadores ajudam, mas não decidem: às vezes faltam, e às vezes "porque" introduz uma explicação, não uma premissa.</p>
<h3>Argumento ou explicação?</h3>
<p>"O vidro quebrou porque caiu" não tenta provar que o vidro quebrou (todos já sabem); explica por quê. Num <strong>argumento</strong>, a conclusão é o que está em dúvida e se quer estabelecer; numa <strong>explicação</strong>, o fato é aceito e se busca sua causa ${tag('argumento')}.</p>
<h3>Padronizar</h3>
<p>Padronizar é reescrever o argumento numerando as premissas e pondo a conclusão no fim, sem repetições, ironias ou ornamentos. Exemplo:</p>
<p><em>"Não adianta discutir com ele: quem não aceita evidências não muda de ideia, e ele não aceita nenhuma."</em></p>
<ol><li>Quem não aceita evidências não muda de ideia.</li><li>Ele não aceita evidências.</li><li>[Implícita] Se alguém não muda de ideia, não adianta discutir com ele.</li></ol>
<p>Conclusão: não adianta discutir com ele.</p>
<h3>Premissas implícitas (entimemas)</h3>
<p>Argumentos cotidianos omitem premissas consideradas óbvias. Aristóteles chamou de <em>entimema</em> o raciocínio retórico com premissa subentendida ${tag('fato')}. Tornar explícita a premissa oculta é muitas vezes o modo mais eficaz de avaliar — ou de refutar — um argumento.</p>`,
  vocabulario: [['Argumento', 'Premissas apresentadas como apoio de uma conclusão.'], ['Premissa', 'Proposição que dá apoio.'], ['Conclusão', 'Proposição apoiada.'], ['Explicação', 'Indica a causa de um fato aceito.'], ['Entimema', 'Argumento com premissa implícita.'], ['Padronização', 'Reescrita numerada do argumento.']],
  exemplos: '<p>"Você deveria estudar lógica, pois ela ajuda em qualquer disciplina." — Conclusão: deveria estudar lógica. Premissa: ajuda em qualquer disciplina. Premissa implícita: deve-se estudar o que ajuda em qualquer disciplina.</p>',
  contexto: `<p>Aristóteles organizou os escritos lógicos que depois foram chamados Órganon ("instrumento"): Categorias, Da Interpretação, Analíticos Anteriores e Posteriores, Tópicos e Refutações Sofísticas ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que tornar explícitas as premissas ocultas', tag: 'argumento',
    premissas: ['Um argumento só é tão bom quanto suas premissas.', 'Premissas ocultas não podem ser avaliadas enquanto ocultas.', 'Muitos argumentos dependem justamente da premissa oculta.'],
    conclusao: 'Logo, para avaliar um argumento é preciso explicitar suas premissas ocultas.',
    nota: 'Ao explicitar, use o princípio de caridade: escolha a premissa mais plausível que torne o argumento válido.' },
  objecoes: [{ objecao: 'Explicitar premissas é atribuir ao autor algo que ele não disse.', tag: 'argumento', resposta: 'Por isso a regra de caridade: a premissa acrescentada deve ser a mais plausível e a mínima necessária. Se o autor rejeitar a premissa, deverá oferecer outra.' }],
  aplicacao: '<p>Copie no Caderno três argumentos de uma notícia, de um sermão ou de uma conversa e padronize cada um, marcando as premissas implícitas.</p>',
  fonte: { obra: 'Anthony Weston, A Arte de Argumentar, cap. 1', link: null, orientacao: '<p>Leia o capítulo 1 e as regras sobre identificar premissas e conclusão. Aplique-as a um parágrafo de Platão (por exemplo, Apologia 29a–b).</p>' },
  perguntas: [
    { p: 'O que distingue um argumento de uma explicação?', r: 'No argumento, a conclusão está em dúvida e se quer provar; na explicação, o fato é aceito e se busca a causa.' },
    { p: 'O que é um entimema?', r: 'Argumento com premissa implícita.' },
    { p: 'Dê dois indicadores de premissa.', r: 'Porque, pois, visto que, já que.' },
  ],
  exercicios: [
    mc('"Ele está doente, por isso faltou." Trata-se provavelmente de:', ['Argumento', 'Explicação', 'Definição', 'Pergunta'], 1, 'O fato (faltou) é aceito; indica-se a causa.'),
    mc('"Portanto" costuma indicar:', ['Premissa', 'Conclusão', 'Objeção', 'Exemplo'], 1, 'Indicador de conclusão.'),
    P(['Todo ser humano erra,', 'e você é humano;', 'logo, você também erra.'], ['p', 'p', 'c'], 'Duas premissas e conclusão.'),
    P(['A biblioteca fecha às 18h.', 'Já são 19h.', 'Gosto muito de ler.', 'Portanto, a biblioteca está fechada.'], ['p', 'p', 'x', 'c'], '"Gosto de ler" não apoia a conclusão.'),
    mc('"Ele é político, logo mente." A premissa implícita é:', ['Alguns políticos mentem', 'Todo político mente', 'Ninguém mente', 'Ele é honesto'], 1, 'Só "todo político mente" torna o argumento válido — e é discutível.'),
    disc('Escolha um argumento real (notícia, debate, rede social), padronize-o, explicite a premissa oculta e diga se ela é aceitável.', ['Padronização correta', 'Premissa oculta adequada', 'Avaliação da premissa', 'Aplicação do princípio de caridade'])],
  resumo: ['Argumento: premissas + conclusão.', 'Indicadores ajudam, mas não decidem.', 'Argumento ≠ explicação.', 'Padronizar e explicitar premissas ocultas.'],
  referencias: [{ texto: 'Anthony Weston, A Arte de Argumentar, cap. 1.' }, { texto: 'Aristóteles, Retórica I, 2 (o entimema).' }],
  revisao: [['Argumento × explicação', 'Argumento prova o duvidoso; explicação dá a causa do aceito.'], ['Entimema', 'Argumento com premissa implícita.'], ['Indicadores de conclusão', 'Logo, portanto, por isso, segue-se que.']],
  avancado: {
    texto: `<h3>Diagramas de argumentos</h3>
<p>Argumentos complexos têm estruturas diferentes ${tag('argumento')}: <strong>convergente</strong> (cada premissa apoia sozinha a conclusão), <strong>ligada</strong> (as premissas só apoiam juntas), <strong>em cadeia</strong> (a conclusão de um argumento é premissa do seguinte) e <strong>divergente</strong> (uma premissa apoia duas conclusões). Mapear isso, com caixas e setas, é técnica usada no ensino de pensamento crítico (Stephen Toulmin, Os usos do argumento, 1958, propôs um modelo com dados, garantia, apoio, qualificador e refutação) ${tag('fato')}.</p>
<h3>O modelo de Toulmin</h3>
<p>Para Toulmin, um argumento real tem: alegação (conclusão), dados, garantia (a regra que liga dados e alegação), apoio da garantia, qualificador ("provavelmente") e reservas ("a menos que") ${tag('interpretacao')}. O modelo é útil para argumentos jurídicos e práticos, em que a dedução estrita é rara.</p>`,
    leituras: [{ texto: 'Stephen Toulmin, Os Usos do Argumento (1958), cap. III.' }, { texto: 'Irving Copi, Introdução à Lógica, cap. 1.' }],
    exercicios: [
      mc('Num argumento "ligado", as premissas:', ['Apoiam sozinhas', 'Só apoiam juntas', 'Não apoiam', 'São conclusões'], 1, 'Dependência mútua.'),
      mc('No modelo de Toulmin, a regra que liga dados e alegação é a:', ['Garantia', 'Reserva', 'Conclusão', 'Premissa menor'], 0, 'Warrant.'),
      mc('"A conclusão de um argumento serve de premissa para outro" descreve a estrutura:', ['Convergente', 'Em cadeia', 'Divergente', 'Circular'], 1, 'Argumento em cadeia.'),
      disc('Diagrame (em texto) o argumento do Críton sobre o acordo com as Leis, indicando a estrutura (ligada, convergente, em cadeia) e a garantia no sentido de Toulmin.', ['Identifica premissas e conclusão', 'Indica a estrutura', 'Identifica a garantia', 'Clareza'])],
  },
}),

aula({
  id: 'm4-2', titulo: 'Conceitos, termos e definições',
  aprendera: ['A diferença entre conceito, termo e coisa', 'Compreensão e extensão de um conceito', 'Termos unívocos, equívocos e análogos', 'Os tipos de definição e seus usos'],
  explicacao: `
<h3>Três níveis</h3>
<p>Quando digo "cavalo", há três coisas: a <strong>palavra</strong> (termo, sinal falado ou escrito), o <strong>conceito</strong> (o que penso ao entendê-la) e a <strong>coisa</strong> (o cavalo real). Aristóteles (Da Interpretação 1) diz que as palavras são sinais das afecções da alma, e estas são semelhanças das coisas ${tag('fato')}. Confundir os três níveis gera erros: discutir palavras pensando discutir coisas.</p>
<h3>Compreensão e extensão</h3>
<p>A <strong>compreensão</strong> (intensão) de um conceito é o conjunto de notas que ele inclui; a <strong>extensão</strong>, o conjunto de seres a que se aplica. "Animal" tem pouca compreensão e grande extensão; "cão" tem mais compreensão e menor extensão. Regra clássica: quanto maior a compreensão, menor a extensão ${tag('argumento')}.</p>
<h3>Unívoco, equívoco, análogo</h3>
<ul>
<li><strong>Unívoco</strong>: mesmo nome, mesmo sentido ("animal" dito do cão e do gato).</li>
<li><strong>Equívoco</strong>: mesmo nome, sentidos sem relação ("manga" da camisa e a fruta).</li>
<li><strong>Análogo</strong>: mesmo nome, sentidos diferentes mas relacionados ("saudável" dito do corpo, do alimento e da cor do rosto — exemplo do próprio Aristóteles, Metafísica IV, 2) ${tag('fato')}.</li>
</ul>
<p>A analogia é decisiva em metafísica e teologia: quando dizemos que Deus é "bom", não dizemos o mesmo que de uma pessoa, nem algo sem relação (Tomás, Suma I, q. 13, a. 5) ${tag('argumento')}.</p>
<h3>Tipos de definição</h3>
<ul>
<li><strong>Nominal</strong>: explica o significado da palavra.</li>
<li><strong>Real</strong>: diz o que a coisa é; a clássica é por <strong>gênero próximo e diferença específica</strong> ("homem é animal racional").</li>
<li><strong>Estipulativa</strong>: fixa um sentido para uso num contexto.</li>
<li><strong>Operacional</strong>: define pelo procedimento de medida.</li>
<li><strong>Ostensiva</strong>: aponta exemplos.</li>
</ul>`,
  vocabulario: [['Termo', 'Sinal linguístico de um conceito.'], ['Conceito', 'Representação intelectual de algo.'], ['Compreensão', 'Notas incluídas no conceito.'], ['Extensão', 'Seres a que o conceito se aplica.'], ['Análogo', 'Termo com sentidos diferentes, mas relacionados.'], ['Gênero e diferença', 'Componentes da definição real clássica.']],
  exemplos: '<p>"Liberdade" é usada em sentidos diferentes: política (não ser coagido pelo Estado), psicológica (livre-arbítrio), moral (domínio de si). Discutir "se o ser humano é livre" sem distinguir esses sentidos produz falsa discordância.</p>',
  contexto: `<p>A doutrina dos predicáveis (gênero, espécie, diferença, próprio, acidente) foi fixada por Porfírio na Isagoge (século III) e transmitida por Boécio à Idade Média, onde gerou a querela dos universais (Módulo 8) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que muitas discussões são verbais (reconstrução)', tag: 'argumento',
    premissas: ['Duas pessoas só discordam de fato se afirmam e negam a mesma proposição.', 'Se usam o mesmo termo em sentidos diferentes, não afirmam e negam a mesma proposição.', 'Muitas discussões usam termos-chave em sentidos diferentes sem perceber.'],
    conclusao: 'Logo, muitas discussões são apenas verbais e se dissolvem ao definir os termos.',
    nota: 'Por isso o curso pede sempre: defina antes de argumentar.' },
  objecoes: [{ objecao: 'Há conceitos que não se definem por gênero e diferença (por exemplo, "ser" ou "cor").', tag: 'argumento', resposta: 'Correto: os conceitos mais gerais (como "ser") não têm gênero acima deles, e as qualidades sensíveis simples se definem melhor ostensivamente. Aristóteles e Tomás reconhecem isso; a definição por gênero e diferença vale para as espécies.' }],
  aplicacao: '<p>Escolha um termo importante do curso (fé, razão, verdade, justiça) e escreva: uma definição nominal, uma real, um exemplo de uso unívoco, um equívoco e um análogo.</p>',
  fonte: { obra: 'Aristóteles, Categorias 1 e Da Interpretação 1', link: null, orientacao: '<p>Leia o capítulo 1 das Categorias (homônimos, sinônimos, parônimos) e compare com a distinção unívoco–equívoco–análogo desta aula.</p>' },
  perguntas: [
    { p: 'Qual a relação entre compreensão e extensão?', r: 'Quanto maior a compreensão, menor a extensão.' },
    { p: 'O que é um termo análogo?', r: 'Mesmo nome com sentidos diferentes, mas relacionados.' },
    { p: 'Como se compõe a definição real clássica?', r: 'Gênero próximo e diferença específica.' },
  ],
  exercicios: [
    mc('"Manga" (fruta e parte da camisa) é termo:', ['Unívoco', 'Equívoco', 'Análogo', 'Técnico'], 1, 'Sentidos sem relação.'),
    mc('"Saudável" dito do corpo e do alimento é termo:', ['Unívoco', 'Equívoco', 'Análogo', 'Nenhum'], 2, 'O alimento é dito saudável por relação à saúde do corpo.'),
    mc('Qual conceito tem maior extensão?', ['Cão', 'Mamífero', 'Animal', 'Poodle'], 2, 'Menos notas, mais seres.'),
    mc('"Homem é animal racional": "animal" é o:', ['Gênero', 'Diferença', 'Próprio', 'Acidente'], 0, '"Racional" é a diferença.'),
    disc('Mostre que uma discussão pública atual é, em parte, verbal: identifique o termo ambíguo e os sentidos em disputa.', ['Escolhe caso real', 'Identifica o termo', 'Distingue os sentidos', 'Mostra o ganho da distinção'])],
  resumo: ['Termo, conceito, coisa.', 'Compreensão × extensão.', 'Unívoco, equívoco, análogo.', 'Definições: nominal, real, estipulativa, operacional, ostensiva.'],
  referencias: [{ texto: 'Aristóteles, Categorias 1; Da Interpretação 1.' }, { texto: 'Jacques Maritain, Lógica Menor, parte I.' }, { texto: 'Tomás de Aquino, Suma I, q. 13 (os nomes de Deus).' }],
  revisao: [['Compreensão × extensão', 'Relação inversa.'], ['Analogia', 'Mesmo nome, sentidos relacionados ("saudável").'], ['Definição real', 'Gênero próximo + diferença específica.']],
  avancado: {
    texto: `<h3>Analogia de atribuição e de proporcionalidade</h3>
<p>Os comentadores de Tomás distinguem a analogia de <strong>atribuição</strong> (um termo dito primeiro de um analogado principal e dos outros por relação a ele: "saudável") e a de <strong>proporcionalidade</strong> (semelhança de relações: a visão está para o olho como o entendimento para a alma). Caetano (Sobre a analogia dos nomes, 1498) privilegiou a proporcionalidade; estudiosos posteriores (como Bernard Montagnes) argumentaram que Tomás privilegiou a atribuição ${tag('debate')}.</p>
<h3>Escoto e a univocidade do ser</h3>
<p>Duns Escoto sustentou que "ser" é unívoco entre Deus e criaturas num nível mínimo, para que o conhecimento natural de Deus seja possível ${tag('fato')}. A tese é um dos grandes debates da metafísica medieval, retomado no século XX (por exemplo, na crítica da "ontoteologia") ${tag('debate')}.</p>
<h3>Sentido e referência</h3>
<p>Frege (1892) distinguiu o <em>sentido</em> (modo de apresentação) da <em>referência</em> (o objeto): "estrela da manhã" e "estrela da tarde" têm sentidos diferentes e a mesma referência (Vênus) ${tag('fato')}. A distinção corresponde, em parte, à de compreensão e extensão.</p>`,
    leituras: [{ texto: 'Tomás de Aquino, Suma I, q. 13, a. 5.' }, { texto: 'Gottlob Frege, "Sobre o sentido e a referência" (1892).' }],
    exercicios: [
      mc('"A visão está para o olho como o entendimento para a alma" é analogia de:', ['Atribuição', 'Proporcionalidade', 'Equivocidade', 'Univocidade'], 1, 'Semelhança de relações.'),
      mc('A univocidade do ser foi defendida por:', ['Tomás', 'Duns Escoto', 'Caetano', 'Agostinho'], 1, 'Escoto.'),
      mc('"Estrela da manhã" e "estrela da tarde" têm:', ['Mesmo sentido e referência', 'Sentidos diferentes e mesma referência', 'Referências diferentes', 'Nenhuma referência'], 1, 'Exemplo de Frege.'),
      disc('Por que a doutrina da analogia é necessária para falar de Deus sem antropomorfismo nem agnosticismo? Compare com a posição de Escoto.', ['Explica a analogia', 'Explica os dois riscos evitados', 'Expõe Escoto', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm4-3', titulo: 'Proposições e o quadrado das oposições',
  aprendera: ['As quatro proposições categóricas A, E, I, O', 'Qualidade, quantidade e distribuição dos termos', 'As relações do quadrado das oposições', 'Conversão, obversão e contraposição'],
  prereq: ['Aula 2: Conceitos, termos e definições'],
  explicacao: `
<h3>Proposições categóricas</h3>
<p>Uma proposição categórica afirma ou nega que um sujeito (S) pertença a um predicado (P). Pela <strong>quantidade</strong> (universal ou particular) e pela <strong>qualidade</strong> (afirmativa ou negativa), há quatro tipos, com letras tradicionais tiradas de <em>AffIrmo</em> e <em>nEgO</em> ${tag('fato')}:</p>
<ul>
<li><strong>A</strong>: Todo S é P (universal afirmativa).</li>
<li><strong>E</strong>: Nenhum S é P (universal negativa).</li>
<li><strong>I</strong>: Algum S é P (particular afirmativa).</li>
<li><strong>O</strong>: Algum S não é P (particular negativa).</li>
</ul>
<h3>Distribuição</h3>
<p>Um termo está <strong>distribuído</strong> quando a proposição fala de toda a sua extensão. Regra prática: o sujeito é distribuído nas universais (A, E); o predicado é distribuído nas negativas (E, O) ${tag('argumento')}. Essa noção será decisiva para as regras do silogismo.</p>
<h3>O quadrado das oposições</h3>
<ul>
<li><strong>Contraditórias</strong> (A–O, E–I): não podem ser ambas verdadeiras nem ambas falsas.</li>
<li><strong>Contrárias</strong> (A–E): não podem ser ambas verdadeiras, mas podem ser ambas falsas.</li>
<li><strong>Subcontrárias</strong> (I–O): não podem ser ambas falsas, mas podem ser ambas verdadeiras.</li>
<li><strong>Subalternas</strong> (A–I, E–O): se a universal é verdadeira, a particular também é (na lógica tradicional, supondo que S exista).</li>
</ul>
<h3>Inferências imediatas</h3>
<ul>
<li><strong>Conversão</strong>: trocar S e P. Válida para E e I ("Nenhum S é P" → "Nenhum P é S"); para A, só "por limitação" (Todo S é P → Algum P é S).</li>
<li><strong>Obversão</strong>: mudar a qualidade e negar o predicado ("Todo S é P" → "Nenhum S é não-P").</li>
<li><strong>Contraposição</strong>: válida para A e O ("Todo S é P" → "Todo não-P é não-S").</li>
</ul>`,
  vocabulario: [['Quantidade', 'Universal ou particular.'], ['Qualidade', 'Afirmativa ou negativa.'], ['Distribuição', 'Referência a toda a extensão de um termo.'], ['Contraditórias', 'Uma verdadeira, outra falsa sempre.'], ['Conversão', 'Troca de sujeito e predicado.']],
  exemplos: '<p>Para refutar "Todo político é corrupto" (A), basta um contraexemplo: "Algum político não é corrupto" (O, contraditória). Não é preciso afirmar "Nenhum político é corrupto" (E, contrária), que é muito mais forte e provavelmente falsa.</p>',
  contexto: `<p>As relações do quadrado estão em Aristóteles (Da Interpretação 7); o diagrama em forma de quadrado aparece na tradição latina, associado a Boécio e a Apuleio ${tag('fato')}.</p>`,
  argumento: { titulo: 'Como refutar uma universal', tag: 'argumento',
    premissas: ['A contraditória de uma proposição verdadeira é falsa, e vice-versa.', 'A contraditória de "Todo S é P" é "Algum S não é P".', 'Um único caso de S que não é P torna verdadeira "Algum S não é P".'],
    conclusao: 'Logo, um único contraexemplo basta para refutar uma universal afirmativa.',
    nota: 'Regra de ouro da crítica: universais são fortes de afirmar e fáceis de refutar.' },
  objecoes: [{ objecao: 'Na lógica moderna, "Todo S é P" não implica "Algum S é P".', tag: 'debate', resposta: 'É verdade: na lógica de Boole e Frege, "Todo unicórnio é branco" é verdadeira se não há unicórnios, e então "Algum unicórnio é branco" é falsa. A lógica tradicional supõe a existência do sujeito (o "conteúdo existencial"). Veja o aprofundamento.' }],
  aplicacao: '<p>Escreva no Caderno quatro afirmações que você ouviu e classifique-as em A, E, I, O. Para cada uma, escreva a contraditória.</p>',
  fonte: { obra: 'Aristóteles, Da Interpretação 6–7', link: null, orientacao: '<p>Leia os capítulos 6 e 7 e identifique onde Aristóteles define as contraditórias e as contrárias.</p>' },
  perguntas: [
    { p: 'Qual a contraditória de "Nenhum S é P"?', r: '"Algum S é P".' },
    { p: 'Em quais proposições o predicado está distribuído?', r: 'Nas negativas, E e O.' },
    { p: 'A conversão simples é válida para quais proposições?', r: 'E e I.' },
  ],
  exercicios: [
    mc('"Algum filósofo não é cético" é proposição:', ['A', 'E', 'I', 'O'], 3, 'Particular negativa.'),
    mc('A e E são:', ['Contraditórias', 'Contrárias', 'Subcontrárias', 'Subalternas'], 1, 'Não podem ser ambas verdadeiras.'),
    mc('Para refutar "Todo cisne é branco" basta:', ['Mostrar que nenhum cisne é branco', 'Mostrar um cisne não branco', 'Mostrar muitos cisnes brancos', 'Definir cisne'], 1, 'A contraditória é particular.'),
    mc('A conversão de "Todo S é P" em "Todo P é S" é:', ['Válida', 'Inválida', 'Contrária', 'Obversa'], 1, 'Só por limitação: "Algum P é S".'),
    disc('Explique o quadrado das oposições com exemplos próprios e mostre como ele ajuda a evitar exageros numa discussão.', ['Explica as quatro relações', 'Exemplos corretos', 'Aplicação a discussão', 'Clareza'])],
  resumo: ['A, E, I, O.', 'Distribuição: sujeito nas universais, predicado nas negativas.', 'Contraditórias, contrárias, subcontrárias, subalternas.', 'Conversão, obversão, contraposição.'],
  referencias: [{ texto: 'Aristóteles, Da Interpretação 6–7.' }, { texto: 'Irving Copi, Introdução à Lógica, cap. sobre proposições categóricas.' }],
  revisao: [['Contraditórias', 'A–O e E–I: valores opostos sempre.'], ['Distribuição', 'Sujeito nas universais; predicado nas negativas.'], ['Contraposição válida', 'Para A e O.']],
  avancado: {
    texto: `<h3>O problema do conteúdo existencial</h3>
<p>George Boole (1854) e a lógica moderna interpretam "Todo S é P" como "para todo x, se x é S, então x é P", sem supor que haja S. Com isso, caem a subalternação e algumas inferências tradicionais (como os modos Darapti e Felapton) ${tag('fato')}. A lógica tradicional pode ser preservada acrescentando a premissa de que o sujeito existe ${tag('argumento')}.</p>
<h3>Quantificadores</h3>
<p>Na notação moderna: A: ∀x(Sx → Px); E: ∀x(Sx → ¬Px); I: ∃x(Sx ∧ Px); O: ∃x(Sx ∧ ¬Px). Note que "Algum S é P" se traduz com conjunção, não com condicional — erro comum de iniciantes ${tag('fato')}.</p>
<h3>Proposições singulares e modais</h3>
<p>"Sócrates é mortal" é singular; a tradição a tratava como universal (o sujeito toma toda sua extensão). Proposições modais ("é necessário que", "é possível que") têm seu próprio quadrado, estudado por Aristóteles (Da Interpretação 12–13) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'George Boole, As Leis do Pensamento (1854), caps. selecionados.' }, { texto: 'Aristóteles, Da Interpretação 12–13.' }],
    exercicios: [
      mc('Na lógica moderna, "Algum S é P" se escreve:', ['∀x(Sx → Px)', '∃x(Sx ∧ Px)', '∃x(Sx → Px)', '∀x(Sx ∧ Px)'], 1, 'Existencial com conjunção.'),
      mc('Sem supor que o sujeito exista, deixa de valer:', ['A contradição A–O', 'A subalternação A → I', 'A conversão de E', 'A obversão'], 1, 'Problema do conteúdo existencial.'),
      mc('"Sócrates é mortal" é proposição:', ['Particular', 'Singular', 'Modal', 'Disjuntiva'], 1, 'Tratada tradicionalmente como universal.'),
      disc('Traduza para a notação moderna as quatro proposições: "Todo filósofo ama a verdade", "Nenhum sofista ama a verdade", "Algum grego é filósofo", "Algum filósofo não é grego". Explique o erro de traduzir I com condicional.', ['Traduções corretas', 'Explica o erro', 'Usa exemplo', 'Clareza'])],
  },
}),

aula({
  id: 'm4-4', titulo: 'Dedução, indução e abdução',
  aprendera: ['As três formas de inferência', 'Por que a dedução preserva a verdade', 'A força e o problema da indução', 'A inferência para a melhor explicação'],
  explicacao: `
<h3>Três modos de raciocinar</h3>
<ul>
<li><strong>Dedução</strong>: se as premissas são verdadeiras, a conclusão é necessariamente verdadeira. "Todo homem é mortal; Sócrates é homem; logo, Sócrates é mortal."</li>
<li><strong>Indução</strong>: de casos observados a uma generalização provável. "Todos os corvos observados são pretos; logo, todos os corvos são pretos."</li>
<li><strong>Abdução</strong> (C. S. Peirce): de um fato surpreendente à hipótese que, se verdadeira, o explicaria. "A grama está molhada; se tivesse chovido, estaria molhada; logo, provavelmente choveu." ${tag('fato')}</li>
</ul>
<h3>Força e risco</h3>
<p>A dedução é segura mas não amplia o conhecimento além do que estava implícito nas premissas. A indução e a abdução ampliam, mas são <strong>falíveis</strong>: a conclusão pode ser falsa mesmo com premissas verdadeiras. Por isso, em vez de "válida", diz-se que uma indução é <strong>forte</strong> ou <strong>fraca</strong> ${tag('argumento')}.</p>
<h3>Critérios para induções fortes</h3>
<p>Amostra grande e representativa, variedade de casos, ausência de contraexemplos, conhecimento do mecanismo causal. A generalização apressada viola o primeiro critério (aula 10).</p>
<h3>O problema da indução</h3>
<p>David Hume (Investigação, seção IV) perguntou: o que justifica esperar que o futuro se assemelhe ao passado? Não é uma verdade lógica (o contrário não é contraditório) nem pode ser provado pela experiência sem círculo (usaríamos a própria indução) ${tag('argumento')}. É um dos problemas mais discutidos da filosofia (Módulo 6).</p>
<h3>Inferência para a melhor explicação</h3>
<p>Na prática científica, jurídica e cotidiana, escolhemos a hipótese que melhor explica os dados, segundo critérios como poder explicativo, simplicidade, coerência com o que já sabemos e fecundidade ${tag('interpretacao')}. Você a viu aplicada à ressurreição (Módulo 1, aula 7).</p>`,
  vocabulario: [['Dedução', 'Inferência em que a verdade das premissas garante a da conclusão.'], ['Indução', 'De casos a generalização provável.'], ['Abdução', 'Do fato à hipótese explicativa (Peirce).'], ['Força indutiva', 'Grau de apoio das premissas a uma conclusão provável.'], ['Problema da indução', 'Questão de Hume sobre a justificação da inferência indutiva.']],
  exemplos: '<p>Um médico vê febre, manchas e garganta inflamada (fatos) e propõe "sarampo" (abdução); testa a hipótese com exame (dedução de consequências); confirma com dados de muitos casos (indução). Os três modos trabalham juntos.</p>',
  contexto: `<p>Aristóteles já distinguia dedução (sullogismos) e indução (epagōgē) (Tópicos I, 12). Francis Bacon (Novum Organum, 1620) propôs uma indução metódica; Peirce, no século XIX, deu nome à abdução ${tag('fato')}.</p>`,
  argumento: { titulo: 'O problema da indução (Hume, Investigação IV, reconstruído)', tag: 'argumento',
    premissas: ['Toda inferência indutiva supõe que a natureza é uniforme.', 'A uniformidade da natureza não é verdade lógica, pois seu contrário não é contraditório.', 'Também não pode ser provada pela experiência, pois essa prova seria ela mesma indutiva (círculo).'],
    conclusao: 'Logo, a indução não tem justificação racional demonstrativa.',
    nota: 'Hume não conclui que devemos parar de induzir, mas que o fazemos por hábito. Respostas: Kant, Popper, bayesianismo, confiabilismo.' },
  objecoes: [{ objecao: 'A indução sempre funcionou; logo, é justificada.', tag: 'argumento', resposta: 'É exatamente o círculo de Hume: justificar a indução pelo sucesso passado é usar a indução. Respostas mais sofisticadas tentam escapar do círculo.' }],
  aplicacao: '<p>Identifique no noticiário uma conclusão baseada em indução e avalie sua força pelos critérios da aula (tamanho, representatividade, variedade, mecanismo).</p>',
  fonte: { obra: 'David Hume, Investigação sobre o Entendimento Humano, seção IV', link: null, orientacao: '<p>Leia a seção IV, partes 1 e 2. Reconstrua o argumento com suas palavras e identifique a distinção entre "relações de ideias" e "questões de fato".</p>' },
  perguntas: [
    { p: 'O que distingue dedução de indução?', r: 'Na dedução a conclusão é necessária se as premissas forem verdadeiras; na indução é apenas provável.' },
    { p: 'Quem deu nome à abdução?', r: 'Charles S. Peirce.' },
    { p: 'Qual é o problema da indução?', r: 'Justificar a suposição de que o futuro se assemelhará ao passado sem cair em círculo.' },
  ],
  exercicios: [
    mc('"O sol nasceu todos os dias; logo, nascerá amanhã" é:', ['Dedução', 'Indução', 'Abdução', 'Definição'], 1, 'De casos passados a previsão provável.'),
    mc('Um detetive que conclui quem é o culpado a partir de pistas usa sobretudo:', ['Dedução pura', 'Abdução', 'Definição', 'Analogia de atribuição'], 1, 'Inferência para a melhor explicação.'),
    mc('Uma indução se avalia como:', ['Válida ou inválida', 'Forte ou fraca', 'Verdadeira ou falsa apenas', 'Unívoca ou análoga'], 1, 'É falível por natureza.'),
    V(['Todo metal conduz eletricidade.', 'O cobre é metal.', 'Logo, o cobre conduz eletricidade.'], true, 'Dedução válida (e sólida, se as premissas forem verdadeiras).'),
    mc('O problema da indução foi formulado de modo clássico por:', ['Aristóteles', 'Hume', 'Bacon', 'Peirce'], 1, 'Investigação, seção IV.'),
    disc('Dê um exemplo próprio de cada modo de inferência e explique, para cada um, como poderia falhar.', ['Exemplos corretos', 'Explica a falibilidade', 'Distingue validade e força', 'Clareza'])],
  resumo: ['Dedução: necessidade.', 'Indução: probabilidade; forte ou fraca.', 'Abdução: hipótese explicativa.', 'Problema de Hume.', 'Inferência para a melhor explicação.'],
  referencias: [{ texto: 'David Hume, Investigação sobre o Entendimento Humano, seção IV.' }, { texto: 'Aristóteles, Tópicos I, 12.' }, { texto: 'C. S. Peirce, "Deduction, Induction, and Hypothesis" (1878).' }],
  revisao: [['Abdução', 'Do fato surpreendente à hipótese explicativa (Peirce).'], ['Indução', 'Avaliada como forte ou fraca.'], ['Problema da indução', 'Hume, Investigação IV.']],
  avancado: {
    texto: `<h3>Os métodos de Mill</h3>
<p>John Stuart Mill (Sistema de Lógica, 1843) propôs métodos para descobrir causas: concordância, diferença, método conjunto, resíduos e variações concomitantes ${tag('fato')}. São a base da metodologia experimental, com limites conhecidos (causas múltiplas, variáveis ocultas).</p>
<h3>O "novo enigma" de Goodman</h3>
<p>Nelson Goodman (Fato, Ficção e Previsão, 1955) inventou o predicado "verdul" (verde se observado antes de certa data, azul depois). Todas as esmeraldas observadas são verdes e também "verdulas"; por que projetamos "verde" e não "verdul"? O enigma mostra que a indução depende da escolha dos predicados ${tag('debate')}.</p>
<h3>Bayesianismo</h3>
<p>O teorema de Bayes permite atualizar a probabilidade de uma hipótese à luz de novas evidências: P(H|E) = P(E|H)·P(H)/P(E). Muitos filósofos da ciência modelam a confirmação assim; críticos discutem a origem das probabilidades iniciais ${tag('debate')}.</p>`,
    leituras: [{ texto: 'John Stuart Mill, Sistema de Lógica, livro III, cap. 8.' }, { texto: 'Nelson Goodman, Fato, Ficção e Previsão (1955), cap. 3.' }],
    exercicios: [
      mc('O "método da diferença" é de:', ['Bacon', 'Mill', 'Hume', 'Popper'], 1, 'Sistema de Lógica (1843).'),
      mc('O predicado "verdul" foi criado por:', ['Goodman', 'Hempel', 'Mill', 'Kuhn'], 0, 'Novo enigma da indução.'),
      mc('No teorema de Bayes, P(H) é:', ['A probabilidade da evidência', 'A probabilidade inicial da hipótese', 'A verossimilhança', 'A certeza'], 1, 'Probabilidade a priori.'),
      disc('Explique o novo enigma de Goodman e por que ele mostra que o problema da indução não é só o de Hume.', ['Explica "verdul"', 'Explica a projeção', 'Compara com Hume', 'Clareza'])],
  },
}),

aula({
  id: 'm4-5', titulo: 'Validade, verdade e solidez',
  aprendera: ['A diferença entre validade e verdade', 'O que é um argumento sólido', 'O método do contraexemplo', 'Por que forma lógica importa'],
  explicacao: `
<h3>A distinção mais importante da lógica</h3>
<p><strong>Verdade</strong> é propriedade das proposições; <strong>validade</strong> é propriedade dos argumentos. Um argumento é válido quando é impossível que as premissas sejam verdadeiras e a conclusão falsa ${tag('argumento')}. A validade depende da forma, não do conteúdo.</p>
<h3>As quatro combinações</h3>
<ul>
<li>Válido, premissas verdadeiras, conclusão verdadeira: "Todo mamífero respira; o cão é mamífero; logo, o cão respira."</li>
<li>Válido, premissa falsa, conclusão falsa: "Todo peixe voa; o tubarão é peixe; logo, o tubarão voa."</li>
<li>Válido, premissa falsa, conclusão verdadeira: "Todo peixe é mamífero; toda baleia é peixe; logo, toda baleia é mamífero." As duas premissas são falsas e a conclusão é verdadeira: a falsidade das premissas não impede a verdade da conclusão.</li>
<li>Inválido, com tudo verdadeiro: "Todo cão é mamífero; todo cão é vertebrado; logo, todo mamífero é vertebrado." As três frases são verdadeiras, mas a conclusão não se segue (ilícito do menor, aula 6): a verdade das frases não salva a forma ruim.</li>
</ul>
<p>O único caso impossível: <strong>válido com premissas verdadeiras e conclusão falsa</strong>.</p>
<h3>Solidez</h3>
<p>Um argumento é <strong>sólido</strong> quando é válido e todas as premissas são verdadeiras. Só argumentos sólidos garantem a verdade da conclusão ${tag('argumento')}. Por isso há duas maneiras de criticar um argumento: atacar a forma (mostrar invalidade) ou atacar o conteúdo (mostrar premissa falsa).</p>
<h3>O método do contraexemplo</h3>
<p>Para mostrar que uma forma é inválida, construa outro argumento com a <strong>mesma forma</strong>, premissas obviamente verdadeiras e conclusão obviamente falsa ${tag('argumento')}. Exemplo: "Todos os comunistas defendem a educação pública; Fulano defende a educação pública; logo, Fulano é comunista." Mesma forma: "Todos os cães são mamíferos; meu gato é mamífero; logo, meu gato é cão." Forma inválida.</p>`,
  vocabulario: [['Validade', 'Impossibilidade de premissas verdadeiras com conclusão falsa.'], ['Solidez', 'Validade + premissas verdadeiras.'], ['Forma lógica', 'Estrutura do argumento, abstraída do conteúdo.'], ['Contraexemplo', 'Argumento de mesma forma com premissas verdadeiras e conclusão falsa.']],
  exemplos: '<p>"Se eu ganhar na loteria, ficarei rico; não ganhei; logo, não ficarei rico." Contraexemplo: "Se ele é cachorro, é animal; ele não é cachorro (é gato); logo, não é animal." A forma (negar o antecedente) é inválida.</p>',
  contexto: `<p>Aristóteles foi o primeiro a estudar a validade pela forma, usando letras no lugar de termos (Analíticos Anteriores) — o nascimento da lógica formal ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que a validade é uma questão de forma', tag: 'argumento',
    premissas: ['Se a validade dependesse do conteúdo, poderíamos ter dois argumentos de mesma forma, um válido e outro não.', 'Mas a validade consiste numa impossibilidade que decorre da estrutura das proposições.', 'Essa estrutura é a mesma em todos os argumentos de mesma forma.'],
    conclusao: 'Logo, todos os argumentos de mesma forma são igualmente válidos ou inválidos.',
    nota: 'Por isso o método do contraexemplo funciona: basta um caso da forma com premissas verdadeiras e conclusão falsa.' },
  objecoes: [{ objecao: 'Há argumentos bons que não são dedutivamente válidos.', tag: 'argumento', resposta: 'Correto: induções fortes e abduções podem ser boas sem validade dedutiva. A validade é critério dos argumentos dedutivos.' }],
  aplicacao: '<p>Encontre um argumento inválido num debate e construa um contraexemplo com a mesma forma.</p>',
  fonte: { obra: 'Irving Copi, Introdução à Lógica, cap. 1 (dedução e validade)', link: null, orientacao: '<p>Leia a seção sobre validade e verdade e faça os exercícios do capítulo.</p>' },
  perguntas: [
    { p: 'Qual combinação é impossível?', r: 'Argumento válido com premissas verdadeiras e conclusão falsa.' },
    { p: 'O que é um argumento sólido?', r: 'Válido e com premissas verdadeiras.' },
    { p: 'Como funciona o método do contraexemplo?', r: 'Constrói-se um argumento de mesma forma com premissas verdadeiras e conclusão falsa.' },
  ],
  exercicios: [
    V(['Todo peixe voa.', 'O tubarão é peixe.', 'Logo, o tubarão voa.'], true, 'Válido, mas não sólido: a primeira premissa é falsa.'),
    V(['Todo cão é mamífero.', 'Todo gato é mamífero.', 'Logo, todo gato é cão.'], false, 'Inválido: termo médio não distribuído.'),
    mc('Um argumento válido com conclusão falsa:', ['É impossível', 'Tem ao menos uma premissa falsa', 'Tem todas as premissas verdadeiras', 'É sólido'], 1, 'Se todas fossem verdadeiras, a conclusão seria verdadeira.'),
    mc('Para mostrar que uma forma é inválida, basta:', ['Mostrar que a conclusão é falsa', 'Um contraexemplo de mesma forma', 'Mostrar que uma premissa é falsa', 'Citar uma autoridade'], 1, 'Método do contraexemplo.'),
    mc('Solidez = ', ['Validade + premissas verdadeiras', 'Verdade da conclusão', 'Força indutiva', 'Coerência'], 0, 'Definição.'),
    disc('Escolha um argumento filosófico estudado (por exemplo, o da contingência ou o do acordo no Críton). Diga se é válido e discuta se é sólido, indicando a premissa mais controversa.', ['Avalia a validade corretamente', 'Identifica a premissa controversa', 'Distingue forma e conteúdo', 'Conclusão justificada'])],
  resumo: ['Verdade: proposições; validade: argumentos.', 'Impossível: válido, premissas verdadeiras, conclusão falsa.', 'Solidez = validade + verdade das premissas.', 'Contraexemplo de mesma forma.'],
  referencias: [{ texto: 'Irving Copi, Introdução à Lógica, cap. 1.' }, { texto: 'Anthony Weston, A Arte de Argumentar, cap. 6.' }],
  revisao: [['Validade', 'Impossível premissas verdadeiras e conclusão falsa.'], ['Solidez', 'Válido + premissas verdadeiras.'], ['Contraexemplo', 'Mesma forma, premissas verdadeiras, conclusão falsa.']],
  avancado: {
    texto: `<h3>Consequência lógica</h3>
<p>Tarski (1936) definiu: uma proposição é consequência lógica de outras quando toda interpretação que torna verdadeiras as premissas torna verdadeira a conclusão. Distinguem-se a consequência <strong>semântica</strong> (por interpretações) e a <strong>sintática</strong> (por regras de dedução); os teoremas de correção e completude (Gödel, 1930, para a lógica de primeira ordem) mostram que coincidem ${tag('fato')}.</p>
<h3>Validade formal e material</h3>
<p>"João é solteiro; logo, João não é casado" parece válido, mas sua validade depende do significado de "solteiro", não só da forma. Lógicos discutem se essas "consequências materiais" são lógicas ou dependem de premissas analíticas implícitas ${tag('debate')}.</p>
<h3>Petição de princípio e validade</h3>
<p>"Deus existe; logo, Deus existe" é válido (é impossível premissa verdadeira e conclusão falsa), mas inútil: não persuade quem duvida. A validade não basta para um bom argumento; é preciso também que as premissas sejam mais aceitáveis que a conclusão ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Alfred Tarski, "Sobre o conceito de consequência lógica" (1936).' }, { texto: 'Aristóteles, Refutações Sofísticas 5 (petição de princípio).' }],
    exercicios: [
      mc('"P; logo, P" é:', ['Inválido', 'Válido, mas circular', 'Sólido em todo caso', 'Indutivo'], 1, 'Válido e inútil para persuadir.'),
      mc('A completude da lógica de primeira ordem foi provada por:', ['Tarski', 'Gödel (1930)', 'Frege', 'Russell'], 1, 'Teorema da completude.'),
      mc('"João é solteiro; logo, não é casado" depende:', ['Só da forma', 'Do significado de "solteiro"', 'De indução', 'De autoridade'], 1, 'Consequência material.'),
      disc('Por que um argumento válido pode ser inútil? Use a petição de princípio e um exemplo filosófico.', ['Explica a petição de princípio', 'Mostra a validade', 'Exemplo filosófico', 'Conclusão'])],
  },
}),

aula({
  id: 'm4-6', titulo: 'O silogismo categórico',
  aprendera: ['A estrutura do silogismo: termos maior, menor e médio', 'Premissa maior e menor', 'As regras de validade do silogismo', 'Como testar um silogismo'],
  prereq: ['Aula 3: Proposições e o quadrado das oposições'],
  explicacao: `
<h3>Estrutura</h3>
<p>Um silogismo categórico tem três proposições categóricas e três termos, cada um usado duas vezes ${tag('fato')}:</p>
<ul>
<li><strong>Termo maior</strong> (P): predicado da conclusão.</li>
<li><strong>Termo menor</strong> (S): sujeito da conclusão.</li>
<li><strong>Termo médio</strong> (M): aparece nas duas premissas, não na conclusão; é o que "liga".</li>
</ul>
<p>A premissa que contém o termo maior é a <strong>premissa maior</strong>; a que contém o menor, a <strong>premissa menor</strong>.</p>
<p>Exemplo: "Todo animal é mortal (maior); todo homem é animal (menor); logo, todo homem é mortal." M = animal, P = mortal, S = homem.</p>
<h3>As regras clássicas</h3>
<p>A tradição formulou regras que garantem a validade ${tag('argumento')}:</p>
<ol>
<li>Deve haver exatamente três termos, com o mesmo sentido (senão: <em>quatro termos</em>).</li>
<li>O termo médio deve estar distribuído ao menos uma vez.</li>
<li>Nenhum termo pode estar distribuído na conclusão sem estar distribuído na premissa (senão: <em>ilícito do maior</em> ou <em>do menor</em>).</li>
<li>De duas premissas negativas nada se conclui.</li>
<li>Se uma premissa é negativa, a conclusão deve ser negativa; e só há conclusão negativa com uma premissa negativa.</li>
<li>De duas particulares nada se conclui (regra derivada).</li>
<li>Se uma premissa é particular, a conclusão deve ser particular (regra derivada).</li>
</ol>
<h3>Como testar</h3>
<p>Identifique S, P e M; classifique as proposições (A, E, I, O); marque os termos distribuídos; aplique as regras. Se uma regra for violada, o silogismo é inválido, e a regra violada nomeia a falácia.</p>`,
  vocabulario: [['Termo médio', 'O que aparece nas duas premissas e não na conclusão.'], ['Termo maior', 'Predicado da conclusão.'], ['Termo menor', 'Sujeito da conclusão.'], ['Ilícito do maior', 'Termo maior distribuído na conclusão sem estar na premissa.'], ['Quatro termos', 'Falácia de usar um termo em dois sentidos.']],
  exemplos: '<p>"Nenhum réptil é mamífero; alguns animais de estimação são répteis; logo, alguns animais de estimação não são mamíferos." Médio: réptil (distribuído na maior, E). Válido (modo Ferio).</p>',
  contexto: `<p>Aristóteles definiu o silogismo como discurso em que, postas certas coisas, algo diferente delas resulta necessariamente, pelo simples fato de elas serem postas (Analíticos Anteriores I, 1, 24b) ${tag('fato')}. A silogística foi o núcleo da lógica ocidental até o século XIX.</p>`,
  argumento: { titulo: 'Por que o termo médio deve estar distribuído', tag: 'argumento',
    premissas: ['O termo médio liga o maior e o menor.', 'Se em nenhuma premissa ele é tomado em toda a sua extensão, o maior pode referir-se a uma parte de M e o menor a outra parte.', 'Nesse caso, não há ligação garantida entre S e P.'],
    conclusao: 'Logo, o termo médio deve estar distribuído ao menos uma vez.',
    nota: 'Exemplo: "Todo cão é animal; todo gato é animal": cães e gatos estão em partes diferentes de "animal".' },
  objecoes: [{ objecao: 'Ninguém raciocina em silogismos na vida real.', tag: 'argumento', resposta: 'Raciocinamos em entimemas, que são silogismos com premissas implícitas. Reconstruí-los como silogismos mostra exatamente onde está o erro ou a premissa duvidosa.' }],
  aplicacao: '<p>Escreva três silogismos sobre temas do curso (por exemplo, sobre a alma, a virtude ou a fé), dois válidos e um inválido, e indique a regra violada.</p>',
  fonte: { obra: 'Aristóteles, Analíticos Anteriores I, 1–7', link: null, orientacao: '<p>Leia I, 1 (definição de silogismo) e I, 4 (primeira figura). Observe como Aristóteles usa letras (A, B, C) no lugar dos termos.</p>' },
  perguntas: [
    { p: 'O que é o termo médio?', r: 'O que aparece nas duas premissas e não na conclusão.' },
    { p: 'O que se conclui de duas premissas negativas?', r: 'Nada.' },
    { p: 'O que é o ilícito do maior?', r: 'O termo maior aparece distribuído na conclusão sem estar distribuído na premissa maior.' },
  ],
  exercicios: [
    V(['Todo M é P.', 'Todo S é M.', 'Logo, todo S é P.'], true, 'Modo Barbara: válido.'),
    V(['Nenhum M é P.', 'Nenhum S é M.', 'Logo, nenhum S é P.'], false, 'Duas negativas: nada se conclui.'),
    V(['Algum M é P.', 'Algum S é M.', 'Logo, algum S é P.'], false, 'Duas particulares e médio não distribuído.'),
    mc('"O fim de uma coisa é sua perfeição; a morte é o fim da vida; logo..." viola a regra:', ['Do médio distribuído', 'Dos três termos (equívoco em "fim")', 'Das duas negativas', 'Nenhuma'], 1, 'Quatro termos.'),
    mc('O termo maior é:', ['O sujeito da conclusão', 'O predicado da conclusão', 'O que não aparece na conclusão', 'O mais universal'], 1, 'Por definição.'),
    disc('Formalize como silogismo o argumento "Ele deve ser culpado, porque só um culpado fugiria" e avalie-o pelas regras.', ['Identifica S, P e M', 'Classifica as proposições', 'Aplica as regras', 'Conclusão correta'])],
  resumo: ['Três termos: maior, menor, médio.', 'Premissa maior e menor.', 'Regras: três termos, médio distribuído, ilícitos, negativas, particulares.', 'Testar marcando distribuição.'],
  referencias: [{ texto: 'Aristóteles, Analíticos Anteriores I.' }, { texto: 'Jacques Maritain, Lógica Menor, parte III.' }],
  revisao: [['Termo médio', 'Nas duas premissas, não na conclusão; deve ser distribuído ao menos uma vez.'], ['Duas negativas', 'Nada se conclui.'], ['Quatro termos', 'Termo usado em dois sentidos.']],
  avancado: {
    texto: `<h3>Diagramas de Venn</h3>
<p>John Venn (1880) propôs testar silogismos com três círculos sobrepostos: sombrear as regiões vazias (universais) e marcar com "x" as regiões não vazias (particulares). Se, após representar as premissas, a conclusão já aparece representada, o silogismo é válido ${tag('fato')}. O método supõe a interpretação moderna (sem conteúdo existencial).</p>
<h3>A silogística como sistema</h3>
<p>Jan Łukasiewicz (A silogística de Aristóteles, 1951) reconstruiu a silogística como sistema axiomático, mostrando que Aristóteles reduz todos os modos aos da primeira figura, tomados como "perfeitos" ${tag('interpretacao')}.</p>
<h3>Silogismos hipotéticos e disjuntivos</h3>
<p>Os estoicos (Crisipo) desenvolveram uma lógica de proposições inteiras ("se o primeiro, então o segundo"), com "indemonstráveis" equivalentes ao modus ponens, modus tollens e silogismo disjuntivo ${tag('fato')}. A lógica proposicional moderna (aula 8) retoma esse ramo.</p>`,
    leituras: [{ texto: 'Jan Łukasiewicz, Aristotle\'s Syllogistic (1951).' }, { texto: 'Diógenes Laércio, Vidas VII (lógica estoica).' }],
    exercicios: [
      mc('Os diagramas para testar silogismos com três círculos são de:', ['Euler', 'Venn', 'Boole', 'Leibniz'], 1, 'John Venn, 1880.'),
      mc('Os "indemonstráveis" de Crisipo pertencem à lógica:', ['Dos termos', 'Das proposições', 'Modal', 'Indutiva'], 1, 'Lógica estoica.'),
      mc('Aristóteles considerava "perfeitos" os modos da:', ['Primeira figura', 'Segunda figura', 'Terceira figura', 'Quarta figura'], 0, 'Analíticos Anteriores I, 4.'),
      disc('Teste com diagramas de Venn (descreva em palavras as regiões) o silogismo: "Nenhum M é P; todo S é M; logo, nenhum S é P".', ['Representa a maior', 'Representa a menor', 'Verifica a conclusão', 'Conclusão correta'])],
  },
}),
];
