// Linguística III — correntes e grandes debates (etapas 6 e 7 do percurso de Linguística).
// Estruturalismo e gerativismo; funcionalismo e sociolinguística; inatismo e aquisição da linguagem;
// língua e pensamento, norma culta e preconceito linguístico.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'li3-1', titulo: 'Estruturalismo e gerativismo: a língua como sistema e como faculdade', duracao: '150 min',
  aprendera: ['Caracterizar o estruturalismo', 'Caracterizar o gerativismo', 'Comparar o que cada um considera dado', 'Avaliar contribuições e limites de ambos'],
  prereq: ['Linguística II (módulo LI2)'],
  explicacao: `
<h3>O problema</h3>
<p>A língua é um sistema social de oposições ou uma capacidade da mente humana? As duas grandes correntes do século XX deram respostas diferentes.</p>
<h3>Estruturalismo</h3>
<p>O estruturalismo, a partir de Saussure, estuda a língua como sistema de relações em que cada elemento vale por oposição aos outros ${tag('fato')}. O Círculo de Praga (Trubetzkoy, Jakobson) desenvolveu a fonologia estrutural; nos Estados Unidos, Leonard Bloomfield (Language, 1933) privilegiou a descrição de dados observáveis ${tag('fato')}.</p>
<h3>Gerativismo</h3>
<p>Chomsky criticou o estruturalismo americano por se limitar a classificar dados e propôs explicar a capacidade de produzir e entender infinitas frases novas ${tag('fato')}. O objeto passou a ser a competência do falante, e o método inclui julgamentos de gramaticalidade ${tag('fato')}.</p>
<h3>O que conta como dado</h3>
<p>Para o estruturalista, dados são enunciados efetivamente produzidos; para o gerativista, também os julgamentos dos falantes sobre frases possíveis e impossíveis ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>O estruturalismo deu métodos rigorosos de descrição; o gerativismo trouxe a pergunta pela mente e pela criatividade linguística ${tag('interpretacao')}. Críticos apontam no primeiro o esquecimento do falante, e no segundo o afastamento do uso real ${tag('debate')}.</p>`,
  vocabulario: [
    ['Estruturalismo', 'Estudo da língua como sistema de relações.'],
    ['Círculo de Praga', 'Grupo de linguistas que desenvolveu a fonologia estrutural.'],
    ['Gerativismo', 'Corrente que explica a capacidade de gerar infinitas frases.'],
    ['Gramaticalidade', 'Conformidade de uma frase com a gramática interna do falante.'],
    ['Criatividade linguística', 'Capacidade de produzir e entender frases nunca ouvidas.'],
  ],
  exemplos: `<p><strong>Uma frase inédita:</strong> "O pinguim de óculos leu Tomás de Aquino na biblioteca de Ouro Preto." Provavelmente ninguém disse isso antes, e você entendeu imediatamente. Para o gerativismo, isso mostra que a língua não é um repertório de frases decoradas, mas um sistema gerador.</p>`,
  contexto: `<p><strong>No mundo:</strong> a resenha crítica de Chomsky ao Comportamento verbal de Skinner (1959) marcou a virada contra o behaviorismo na linguística ${tag('fato')}. <strong>No Brasil:</strong> o estruturalismo de Mattoso Câmara e o gerativismo tiveram grupos de pesquisa importantes nas universidades ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a criatividade linguística desafia o behaviorismo', tag: 'argumento',
    premissas: ['O behaviorismo explica a linguagem como hábitos reforçados por estímulos.', 'Mas falantes produzem e entendem frases que nunca ouviram nem foram reforçadas.', 'Isso exige um sistema de regras interiorizado.'],
    conclusao: 'Logo, a linguagem não se explica só por associação de estímulos e respostas.',
    nota: 'O argumento é de Chomsky contra Skinner (1959).',
  },
  objecoes: [
    { objecao: 'O gerativismo inventa frases artificiais e ignora como as pessoas realmente falam.', tag: 'debate',
      resposta: 'O gerativismo usa frases construídas para testar hipóteses sobre a gramática, o que é legítimo. Mas a crítica aponta que julgamentos de gramaticalidade variam e que a fala real tem fenômenos que o modelo ignora. A linguística de corpus e a sociolinguística responderam a essa lacuna.' },
  ],
  aplicacao: `<p>Inicie o quadro comparativo da etapa: para estruturalismo e gerativismo, descreva como cada um define a língua, o que considera dado relevante e um exemplo de análise.</p>`,
  fonte: {
    obra: 'Noam Chomsky, resenha de Verbal Behavior de B. F. Skinner, Language (1959)', link: null,
    orientacao: `<p>Identifique o argumento da criatividade e a crítica à noção de reforço aplicada à linguagem.</p>`,
  },
  perguntas: [
    { p: 'O que o estruturalismo estuda?', r: 'A língua como sistema de relações.' },
    { p: 'O que é criatividade linguística?', r: 'A capacidade de produzir e entender frases nunca ouvidas.' },
    { p: 'Que dado o gerativismo acrescenta?', r: 'Os julgamentos de gramaticalidade dos falantes.' },
  ],
  exercicios: [
    mc('A fonologia estrutural foi desenvolvida pelo:', ['Círculo de Praga', 'Port-Royal', 'NURC', 'IBGE'], 0, 'Trubetzkoy.'),
    mc('Language, de Bloomfield, é de:', ['1916', '1933', '1957', '1970'], 1, 'Estruturalismo americano.'),
    mc('A resenha de Chomsky a Skinner é de:', ['1957', '1959', '1966', '1970'], 1, 'Behaviorismo.'),
    mc('O objeto do gerativismo é a:', ['Competência', 'Ortografia', 'Etimologia', 'Retórica'], 0, 'Chomsky.'),
    mc('Uma crítica ao gerativismo é o afastamento do:', ['Uso real', 'Sistema', 'Pensamento', 'Latim'], 0, 'Debate.'),
    disc('Compare estruturalismo e gerativismo quanto à definição de língua, ao dado e a um exemplo.', ['Definição', 'Dado', 'Exemplo', 'Avaliação']),
  ],
  resumo: ['Estruturalismo: sistema de relações.', 'Praga; Bloomfield (1933).', 'Gerativismo: competência e criatividade.', 'Chomsky × Skinner (1959).', 'Contribuições e limites.'],
  referencias: [
    { texto: 'Ferdinand de Saussure, Curso de linguística geral (1916).' },
    { texto: 'Noam Chomsky, Estruturas sintáticas (1957).' },
    { texto: 'Joaquim Mattoso Câmara Jr., Princípios de linguística geral (1941).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar o quadro comparativo', 'Ler a fonte indicada'],
  revisao: [['Praga', 'Fonologia.'], ['Competência', 'Gerativismo.'], ['1959', 'Contra Skinner.']],
  avancado: {
    texto: `<h3>Recursividade</h3>
<p>Uma propriedade central da sintaxe é a recursividade: uma estrutura pode conter outra do mesmo tipo, indefinidamente ("o livro que o padre que eu conheço recomendou") ${tag('fato')}. Ela explica como um sistema finito gera infinitas frases ${tag('fato')}. Hauser, Chomsky e Fitch (2002) propuseram que a recursividade seria o traço específico da linguagem humana; a tese é debatida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Noam Chomsky, Estruturas sintáticas (1957).' }],
    exercicios: [
      mc('Recursividade é uma estrutura conter:', ['Outra do mesmo tipo', 'Só palavras', 'Nada', 'Só sons'], 0, 'Definição.'),
      mc('A recursividade explica:', ['Infinitas frases com sistema finito', 'A ortografia', 'O sotaque', 'A etimologia'], 0, 'Geração.'),
      mc('A tese de que a recursividade é o traço específico da linguagem é:', ['Consensual', 'Debatida', 'Refutada', 'Lei'], 1, 'Debate.'),
      disc('Construa uma frase com três níveis de encaixamento e analise sua estrutura.', ['Frase', 'Níveis', 'Análise', 'Recursividade'])],
  },
}),

aula({
  id: 'li3-2', titulo: 'Funcionalismo e sociolinguística: a língua em uso e em variação', duracao: '150 min',
  aprendera: ['Caracterizar o funcionalismo', 'Explicar a variável sociolinguística', 'Conhecer o estudo de Labov sobre o /r/', 'Conhecer a sociolinguística brasileira'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que as pessoas falam diferente conforme a região, a classe, a idade e a situação? E por que as línguas mudam?</p>
<h3>Funcionalismo</h3>
<p>O funcionalismo explica as formas da língua por suas funções na comunicação: informar, interagir, organizar o discurso ${tag('fato')}. Autores como Michael Halliday estudaram como a gramática serve a funções sociais ${tag('fato')}.</p>
<h3>Sociolinguística variacionista</h3>
<p>William Labov mostrou que a variação não é caos, mas sistemática e correlacionada a fatores sociais ${tag('fato')}. Em Nova York, ele perguntou a funcionários de lojas de diferentes prestígios onde ficava um produto no "fourth floor", e verificou que a pronúncia do /r/ variava com o prestígio da loja (The Social Stratification of English in New York City, 1966) ${tag('fato')}.</p>
<h3>Variável</h3>
<p>Uma variável sociolinguística tem variantes (por exemplo, "nós vamos" e "a gente vai"), cuja frequência se correlaciona com idade, escolaridade, região e estilo ${tag('fato')}. A variação de hoje pode ser a mudança de amanhã ${tag('interpretacao')}.</p>
<h3>No Brasil</h3>
<p>Projetos como o PEUL (Rio de Janeiro) e o VARSUL (Região Sul) reuniram corpora de fala para estudar variação no português brasileiro ${tag('fato')}. Fernando Tarallo divulgou o método em A pesquisa sociolinguística (1985) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Funcionalismo', 'Corrente que explica as formas pela função comunicativa.'],
    ['Variável sociolinguística', 'Ponto da língua com formas alternativas.'],
    ['Variante', 'Cada forma alternativa de uma variável.'],
    ['Estilo', 'Grau de formalidade da situação de fala.'],
    ['Mudança em progresso', 'Mudança linguística detectável na comparação de gerações.'],
  ],
  exemplos: `<p><strong>"Tu" e "você":</strong> em Porto Alegre, "tu" é muito usado; em São Paulo, predomina "você"; em partes do Nordeste, "tu" convive com o verbo na 3ª pessoa ("tu vai"). Um sociolinguista conta as ocorrências em gravações, separa por região, idade e situação, e descreve o sistema de cada comunidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> a sociolinguística variacionista expandiu-se a partir dos anos 1960 ${tag('fato')}. <strong>No Brasil:</strong> estudos mostram o avanço de "a gente" como pronome de 1ª pessoa do plural ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a variação não é desordem', tag: 'argumento',
    premissas: ['As variantes não aparecem ao acaso, mas com frequências ligadas a fatores linguísticos e sociais.', 'Essas correlações se repetem em diferentes estudos.', 'Regularidade estatística indica sistema.'],
    conclusao: 'Logo, a variação é parte ordenada da língua, e não sinal de decadência.',
    nota: 'É a aplicação, à língua, do raciocínio estatístico estudado em Estatística.',
  },
  objecoes: [
    { objecao: 'A sociolinguística é ideologia para aceitar qualquer erro.', tag: 'debate',
      resposta: 'A sociolinguística descreve; não prescreve. Ela mostra que formas populares têm regras e que o prestígio das formas é social. Isso não impede ensinar a norma culta; pede apenas que se ensine sem desprezar os falantes. O debate legítimo é pedagógico, não sobre os dados.' },
  ],
  aplicacao: `<p>Complete o quadro comparativo da etapa com funcionalismo e sociolinguística, e aplique a análise variacionista a um fenômeno (por exemplo, "tu" × "você" ou "nós" × "a gente") com pelo menos 20 ocorrências coletadas.</p>`,
  fonte: {
    obra: 'Fernando Tarallo, A pesquisa sociolinguística (1985)', link: null,
    orientacao: `<p>Observe os passos do método: definir a variável, coletar dados, codificar fatores e analisar frequências.</p>`,
  },
  perguntas: [
    { p: 'O que mostrou o estudo de Labov nas lojas de Nova York?', r: 'Que a pronúncia do /r/ variava com o prestígio da loja.' },
    { p: 'O que é variável sociolinguística?', r: 'Um ponto da língua com formas alternativas.' },
    { p: 'Cite um projeto brasileiro de sociolinguística.', r: 'PEUL ou VARSUL.' },
  ],
  exercicios: [
    mc('The Social Stratification of English in New York City é de:', ['1916', '1957', '1966', '1985'], 2, 'Labov.'),
    mc('"Nós vamos" e "a gente vai" são:', ['Variantes', 'Erros', 'Línguas diferentes', 'Fonemas'], 0, 'Variável.'),
    mc('A pesquisa sociolinguística é de:', ['Mattoso', 'Tarallo', 'Bagno', 'Anchieta'], 1, '1985.'),
    mc('O VARSUL estuda a variação na Região:', ['Norte', 'Nordeste', 'Sul', 'Centro-Oeste'], 2, 'Projeto.'),
    mc('O funcionalismo explica as formas pela:', ['Função comunicativa', 'Etimologia', 'Ortografia', 'Inatismo'], 0, 'Corrente.'),
    disc('Aplique a análise variacionista a um fenômeno com 20 ocorrências coletadas.', ['Variável', 'Coleta', 'Fatores', 'Resultados']),
  ],
  resumo: ['Funcionalismo: forma e função.', 'Labov (1966): variação sistemática.', 'Variável e variantes.', 'PEUL, VARSUL; Tarallo (1985).', 'Variação não é desordem.'],
  referencias: [
    { texto: 'William Labov, The Social Stratification of English in New York City (1966).' },
    { texto: 'Fernando Tarallo, A pesquisa sociolinguística (1985).' },
    { texto: 'Marcos Bagno, Preconceito linguístico (1999).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar o quadro comparativo', 'Ler a fonte indicada'],
  revisao: [['Labov', 'Nova York.'], ['Variante', 'Forma alternativa.'], ['Tarallo', 'Método.']],
  avancado: {
    texto: `<h3>Tempo aparente</h3>
<p>Comparar o uso de uma variante entre falantes de diferentes idades, num mesmo momento, permite inferir mudanças em andamento — é o estudo em "tempo aparente" ${tag('fato')}. Se os jovens usam muito mais "a gente" que os idosos, há indício de mudança ${tag('interpretacao')}. Mas pessoas também mudam sua fala ao longo da vida, o que exige cautela ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Fernando Tarallo, A pesquisa sociolinguística (1985).' }],
    exercicios: [
      mc('Tempo aparente compara falantes de:', ['Mesma idade', 'Diferentes idades', 'Diferentes séculos', 'Diferentes línguas'], 1, 'Gerações.'),
      mc('Jovens usarem mais uma variante indica:', ['Prova de mudança', 'Indício de mudança', 'Erro', 'Nada'], 1, 'Cautela.'),
      mc('Uma limitação é que as pessoas:', ['Mudam sua fala ao longo da vida', 'Nunca falam', 'Falam igual', 'Não variam'], 0, 'Interpretação.'),
      disc('Planeje um estudo em tempo aparente sobre um fenômeno do português de sua cidade.', ['Fenômeno', 'Faixas etárias', 'Coleta', 'Cautelas'])],
  },
}),

aula({
  id: 'li3-3', titulo: 'Inatismo e aquisição: como as crianças aprendem a falar?', duracao: '150 min',
  aprendera: ['Explicar o argumento da pobreza do estímulo', 'Conhecer a hipótese do período crítico', 'Conhecer explicações baseadas no uso e na interação', 'Avaliar o debate com dados'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Em poucos anos, sem aulas de gramática, crianças dominam um sistema complexo. Como isso é possível?</p>
<h3>Inatismo</h3>
<p>Chomsky argumentou que os dados que a criança ouve são pobres e fragmentários diante da riqueza do que ela aprende — o "argumento da pobreza do estímulo" — e que, portanto, há uma capacidade linguística inata ${tag('fato')}. As crianças passam por etapas semelhantes em línguas diferentes: balbucio, palavras isoladas, frases de duas palavras, gramática mais complexa ${tag('fato')}.</p>
<h3>Período crítico</h3>
<p>Eric Lenneberg (1967) propôs que a aquisição da língua materna é mais fácil até certa idade ${tag('fato')}. O caso de Genie, menina descoberta em 1970 após anos de isolamento extremo, que não chegou a dominar plenamente a gramática, é citado nesse debate, com cautela devido às muitas privações que sofreu ${tag('fato')}.</p>
<h3>Uso e interação</h3>
<p>Abordagens baseadas no uso, como a de Michael Tomasello, explicam a aquisição pela atenção compartilhada, pela imitação e pela aprendizagem de padrões frequentes ${tag('fato')}. Estudos mostram que bebês detectam regularidades estatísticas nos sons que ouvem ${tag('fato')}.</p>
<h3>O papel da família</h3>
<p>Qualquer que seja a teoria, a interação com adultos que falam com a criança é condição indispensável ${tag('interpretacao')}. A família é a primeira escola da língua ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Pobreza do estímulo', 'Argumento de que os dados ouvidos não bastam para explicar o que se aprende.'],
    ['Período crítico', 'Fase em que a aquisição da língua é mais fácil.'],
    ['Balbucio', 'Fase de produção de sílabas repetidas pelo bebê.'],
    ['Atenção compartilhada', 'Adulto e criança atentos ao mesmo objeto.'],
    ['Aprendizagem estatística', 'Detecção de regularidades na frequência dos sons e palavras.'],
  ],
  exemplos: `<p><strong>"Eu fazi":</strong> uma criança de três anos diz "eu fazi" em vez de "eu fiz". Ela nunca ouviu "fazi" de um adulto; aplicou sozinha a regra regular do pretérito ("comi", "bebi") a um verbo irregular. Esse "erro" mostra que ela não está só imitando, mas extraindo regras — fato que inatistas e teóricos do uso explicam de modos diferentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> a aquisição de línguas de sinais por crianças surdas segue etapas paralelas às das línguas orais ${tag('fato')}. <strong>No Brasil:</strong> a Libras foi reconhecida como meio legal de comunicação e expressão pela Lei nº 10.436/2002 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a regularização infantil revela regras', tag: 'argumento',
    premissas: ['Crianças produzem formas que nunca ouviram ("fazi", "cabi").', 'Essas formas seguem regras regulares da língua.', 'Logo, a criança não apenas imita: generaliza regras.'],
    conclusao: 'Logo, a aquisição envolve construção ativa de um sistema.',
    nota: 'Inatistas e teóricos do uso concordam nisso; divergem sobre de onde vem a capacidade.',
  },
  objecoes: [
    { objecao: 'Se a língua é inata, não importa falar com as crianças.', tag: 'argumento',
      resposta: 'Mesmo para o inatismo, a capacidade precisa de dados para se desenvolver: sem ouvir uma língua, a criança não a adquire. A interação rica favorece vocabulário e compreensão. Inato não significa automático.' },
  ],
  aplicacao: `<p>Observe (com autorização da família) a fala de uma criança pequena por alguns dias e registre cinco exemplos de regularização ou outros fenômenos, explicando-os à luz das teorias estudadas.</p>`,
  fonte: {
    obra: 'Eric Lenneberg, Fundamentos biológicos da linguagem (1967)', link: null,
    orientacao: `<p>Identifique os argumentos biológicos para o período crítico e os dados que o autor usa.</p>`,
  },
  perguntas: [
    { p: 'O que é o argumento da pobreza do estímulo?', r: 'Que os dados ouvidos não bastam para explicar o que a criança aprende.' },
    { p: 'O que sugere o "eu fazi" das crianças?', r: 'Que elas generalizam regras, e não apenas imitam.' },
    { p: 'Que lei reconheceu a Libras?', r: 'A Lei nº 10.436/2002.' },
  ],
  exercicios: [
    mc('O período crítico foi proposto por:', ['Lenneberg', 'Labov', 'Saussure', 'Bagno'], 0, '1967.'),
    mc('Abordagens baseadas no uso enfatizam:', ['Inatismo puro', 'Interação e padrões frequentes', 'Ortografia', 'Etimologia'], 1, 'Tomasello.'),
    mc('"Cabi" em vez de "coube" é exemplo de:', ['Imitação', 'Regularização', 'Fonema', 'Dialeto'], 1, 'Regra.'),
    mc('Crianças surdas adquirem línguas de sinais:', ['Sem etapas', 'Em etapas paralelas às orais', 'Só adultas', 'Nunca'], 1, 'Universal.'),
    mc('Genie foi descoberta em:', ['1950', '1970', '1990', '2002'], 1, 'Isolamento.'),
    disc('Observe a fala de uma criança e explique cinco fenômenos à luz das teorias.', ['Exemplos', 'Explicações', 'Teorias', 'Ética']),
  ],
  resumo: ['Pobreza do estímulo (Chomsky).', 'Período crítico (Lenneberg, 1967).', 'Uso e interação (Tomasello).', 'Regularização infantil.', 'Libras (Lei 10.436/2002).'],
  referencias: [
    { texto: 'Eric Lenneberg, Fundamentos biológicos da linguagem (1967).' },
    { texto: 'Michael Tomasello, Constructing a Language (2003).' },
    { texto: 'Noam Chomsky, Estruturas sintáticas (1957).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a observação', 'Ler a fonte indicada'],
  revisao: [['Pobreza do estímulo', 'Inatismo.'], ['Período crítico', 'Lenneberg.'], ['Fazi', 'Regularização.']],
  avancado: {
    texto: `<h3>Bilinguismo infantil</h3>
<p>Crianças expostas a duas línguas desde cedo podem adquirir ambas, às vezes misturando-as numa fase inicial ${tag('fato')}. Estudos indicam que o bilinguismo não atrasa o desenvolvimento cognitivo; vantagens cognitivas específicas são objeto de debate ${tag('debate')}. Famílias imigrantes no Brasil frequentemente mantêm a língua de origem em casa ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Michael Tomasello, Constructing a Language (2003).' }],
    exercicios: [
      mc('Crianças expostas cedo a duas línguas:', ['Não aprendem nenhuma', 'Podem adquirir ambas', 'Só uma', 'Ficam mudas'], 1, 'Bilinguismo.'),
      mc('Vantagens cognitivas do bilinguismo são:', ['Consenso total', 'Debatidas', 'Refutadas', 'Lei'], 1, 'Debate.'),
      mc('Misturar línguas na infância é:', ['Patologia', 'Fase comum', 'Impossível', 'Proibido'], 1, 'Desenvolvimento.'),
      disc('Proponha orientações a uma família que quer criar os filhos bilíngues.', ['Exposição', 'Rotina', 'Expectativas', 'Fontes'])],
  },
}),

aula({
  id: 'li3-4', titulo: 'Língua e pensamento; norma culta e preconceito linguístico', duracao: '150 min',
  aprendera: ['Distinguir versões forte e fraca da hipótese de Sapir-Whorf', 'Conhecer dados sobre cores e tempo', 'Discutir a norma culta e o preconceito linguístico', 'Escrever o ensaio da etapa com justiça às partes'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Falar português ou hopi muda o modo de pensar? E por que certos modos de falar são desprezados?</p>
<h3>Sapir-Whorf</h3>
<p>A hipótese associada a Edward Sapir e Benjamin Lee Whorf tem uma versão forte (a língua determina o pensamento) e uma fraca (a língua influencia certos aspectos da percepção e da memória) ${tag('fato')}. Whorf afirmou que a língua hopi não teria noção de tempo como a das línguas europeias; Ekkehart Malotki (1983) mostrou que o hopi tem muitos recursos temporais ${tag('fato')}.</p>
<h3>Dados</h3>
<p>Brent Berlin e Paul Kay (1969) encontraram regularidades universais na forma como as línguas nomeiam as cores básicas, enfraquecendo a versão forte ${tag('fato')}. Por outro lado, falantes de russo, que distinguem obrigatoriamente dois azuis, discriminam esses tons um pouco mais rápido em certos testes, apoiando a versão fraca ${tag('fato')}.</p>
<h3>Norma culta e preconceito</h3>
<p>A norma culta é a variedade usada na escrita formal e em situações de prestígio ${tag('fato')}. Marcos Bagno, em Preconceito linguístico (1999), argumentou que desprezar falantes de variedades populares é forma de discriminação social ${tag('fato')}. Em 2011, um livro didático aprovado pelo MEC que discutia formas como "nós pega o peixe" gerou forte polêmica nacional ${tag('fato')}.</p>
<h3>Equilíbrio</h3>
<p>Uma posição equilibrada reconhece a regularidade das variedades populares e o direito de todos de dominar a norma culta, necessária para muitas oportunidades ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Hipótese de Sapir-Whorf', 'Tese de que a língua influencia ou determina o pensamento.'],
    ['Versão forte', 'A língua determina o pensamento.'],
    ['Versão fraca', 'A língua influencia aspectos da percepção e da memória.'],
    ['Norma culta', 'Variedade de prestígio usada na escrita formal.'],
    ['Preconceito linguístico', 'Desvalorização de pessoas por sua forma de falar.'],
  ],
  exemplos: `<p><strong>Ensinar sem humilhar:</strong> um aluno escreve "nós vai". Uma professora pode dizer "está errado, você fala mal", ou pode mostrar que "nós vai" segue uma regra da fala popular e que, no texto escolar formal, a forma esperada é "nós vamos". A segunda abordagem ensina a norma sem desprezar o aluno nem sua família.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate sobre linguagem e pensamento envolve linguistas, psicólogos e antropólogos ${tag('fato')}. <strong>No Brasil:</strong> a BNCC prevê o estudo da variação linguística e o domínio das normas de prestígio ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a versão forte de Sapir-Whorf é implausível', tag: 'argumento',
    premissas: ['Se a língua determinasse o pensamento, seria impossível traduzir ou aprender conceitos novos.', 'Mas traduzimos, aprendemos e criamos palavras para novos conceitos.', 'Além disso, há universais no modo de nomear cores e outras categorias.'],
    conclusao: 'Logo, a língua pode influenciar, mas não determinar o pensamento.',
    nota: 'A tradição clássica afirma que o pensamento é anterior à palavra, que o exprime.',
  },
  objecoes: [
    { objecao: 'Ensinar a norma culta é impor a cultura dos dominantes.', tag: 'debate',
      resposta: 'A norma culta tem origem histórica ligada a grupos de prestígio, mas dominá-la amplia a liberdade e as oportunidades de quem vem de variedades populares. Negá-la aos pobres pode perpetuar a desigualdade. O caminho é ensinar a norma respeitando a variedade de origem.' },
  ],
  aplicacao: `<p>Escreva o ensaio da etapa: a língua determina o pensamento? Responda com dados (cores, tempo, azuis russos), a hipótese de Sapir-Whorf e a tradição filosófica, distinguindo dado, hipótese e tese filosófica.</p>`,
  fonte: {
    obra: 'Marcos Bagno, Preconceito linguístico (1999); Brent Berlin e Paul Kay, Basic Color Terms (1969)', link: null,
    orientacao: `<p>Em Bagno, os "mitos" sobre a língua. Em Berlin e Kay, a sequência universal dos termos de cor.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre as versões forte e fraca de Sapir-Whorf?', r: 'A forte diz que a língua determina o pensamento; a fraca, que o influencia.' },
    { p: 'O que mostraram Berlin e Kay?', r: 'Regularidades universais na nomeação das cores básicas.' },
    { p: 'O que é preconceito linguístico?', r: 'A desvalorização de pessoas por sua forma de falar.' },
  ],
  exercicios: [
    mc('Basic Color Terms é de:', ['1956', '1969', '1983', '1999'], 1, 'Berlin e Kay.'),
    mc('Malotki mostrou que o hopi:', ['Não tem tempo', 'Tem muitos recursos temporais', 'Não existe', 'É indo-europeu'], 1, '1983.'),
    mc('Os dados dos dois azuis russos apoiam a versão:', ['Forte', 'Fraca', 'Nenhuma', 'Ambas igualmente'], 1, 'Influência.'),
    mc('Preconceito linguístico é de:', ['Bagno', 'Tarallo', 'Mattoso', 'Labov'], 0, '1999.'),
    mc('A polêmica do livro didático com "nós pega o peixe" foi em:', ['1999', '2002', '2011', '2017'], 2, 'MEC.'),
    disc('Escreva o ensaio: a língua determina o pensamento?', ['Dados', 'Hipótese', 'Tradição filosófica', 'Distinções']),
  ],
  resumo: ['Sapir-Whorf: forte × fraca.', 'Hopi (Malotki, 1983); cores (1969).', 'Azuis russos: influência.', 'Norma culta; Bagno (1999).', 'Ensinar a norma sem desprezar.'],
  referencias: [
    { texto: 'Marcos Bagno, Preconceito linguístico (1999).' },
    { texto: 'Brent Berlin e Paul Kay, Basic Color Terms (1969).' },
    { texto: 'Edward Sapir, A linguagem (1921).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler as fontes indicadas'],
  revisao: [['Forte/fraca', 'Sapir-Whorf.'], ['Cores', 'Universais.'], ['Bagno', 'Preconceito.']],
  avancado: {
    texto: `<h3>O caso pirahã</h3>
<p>Daniel Everett, ex-missionário que viveu com os Pirahã, no Amazonas, afirmou (2005) que sua língua não teria recursividade nem números exatos, contestando a gramática universal ${tag('fato')}. Outros linguistas contestaram suas análises, e o debate continua ${tag('debate')}. O caso mostra a importância das línguas indígenas brasileiras para a teoria linguística ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Daniel Everett, artigo sobre a língua pirahã em Current Anthropology (2005).' }],
    exercicios: [
      mc('Os Pirahã vivem no:', ['Amazonas', 'Paraná', 'Piauí', 'Rio Grande do Sul'], 0, 'Brasil.'),
      mc('Everett afirmou que o pirahã não teria:', ['Vogais', 'Recursividade', 'Verbos', 'Sons'], 1, 'Gramática universal.'),
      mc('As análises de Everett são:', ['Consenso', 'Contestadas', 'Lei', 'Esquecidas'], 1, 'Debate.'),
      disc('Explique por que o caso pirahã importa para o debate sobre a gramática universal.', ['Caso', 'Tese', 'Críticas', 'Importância'])],
  },
}),

avaliacao('li3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as correntes da linguística e os grandes debates, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu quadro comparativo das correntes.</li><li>Releia seu ensaio sobre língua e pensamento.</li></ul>`,
[
  disc('Compare estruturalismo, gerativismo e sociolinguística quanto à definição de língua e ao que consideram dado, com um exemplo de análise de cada um.', ['Definições', 'Dados', 'Exemplos', 'Avaliação']),
  disc('A língua determina o pensamento? Responda com dados, a hipótese de Sapir-Whorf e a tradição filosófica, e relacione com o debate sobre norma culta.', ['Dados', 'Hipótese', 'Filosofia', 'Norma culta']),
]),
];
