// Antropologia II — formação da disciplina e autores clássicos (etapas 4 e 5 do percurso de Antropologia).
// Evolucionismo e Frazer, Boas e o particularismo histórico, Malinowski e Evans-Pritchard, Mauss e Lévi-Strauss.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'an2-1', titulo: 'O evolucionismo cultural: Tylor, Morgan e Frazer', duracao: '150 min',
  aprendera: ['Expor as teses evolucionistas de Tylor, Morgan e Frazer', 'Explicar os conceitos de sobrevivência e de animismo', 'Identificar os pressupostos e os erros do evolucionismo', 'Relacionar o evolucionismo ao racismo científico do século XIX'],
  prereq: ['Antropologia I (módulo AN1)'],
  explicacao: `
<h3>O problema</h3>
<p>A antropologia do século XIX procurou ordenar todas as sociedades numa escala única, das "primitivas" às "civilizadas". Entender essa tentativa e seus erros é entender por que a disciplina mudou.</p>
<h3>Tylor</h3>
<p>Em <em>A cultura primitiva</em> (1871), Tylor propôs uma ciência da cultura baseada na comparação. Chamou de <strong>sobrevivências</strong> os costumes que persistem depois de perder sua função original, e de <strong>animismo</strong> a crença em seres espirituais, que considerou a forma mínima de religião ${tag('fato')}.</p>
<h3>Morgan</h3>
<p>Lewis Henry Morgan, em <em>A sociedade antiga</em> (1877), dividiu a história humana em selvageria, barbárie e civilização, cada uma com subfases definidas por inventos técnicos ${tag('fato')}. Sua obra influenciou Engels em <em>A origem da família, da propriedade privada e do Estado</em> (1884) ${tag('fato')}.</p>
<h3>Frazer</h3>
<p>James Frazer, em <em>O ramo de ouro</em> (1890), sustentou uma sequência universal de magia, religião e ciência ${tag('fato')}. Trabalhou com relatos de terceiros, sem pesquisa de campo ${tag('fato')}.</p>
<h3>Crítica</h3>
<p>O evolucionismo supunha uma linha única de progresso, tomava a sociedade europeia como ápice e usava dados arrancados de seus contextos ${tag('interpretacao')}. Em versões biológicas, foi associado ao racismo científico, hoje refutado ${tag('fato')}. A sequência "magia, religião, ciência" de Frazer não corresponde aos dados históricos nem à visão cristã, para a qual fé e razão não se excluem (<em>Fides et Ratio</em>, 1998) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Evolucionismo cultural', 'Tese de que as sociedades passam por estágios em linha única.'],
    ['Sobrevivência', 'Costume que persiste depois de perder a função original (Tylor).'],
    ['Animismo', 'Crença em seres espirituais, para Tylor a religião mínima.'],
    ['Selvageria, barbárie, civilização', 'Estágios da história humana segundo Morgan.'],
    ['Antropologia de gabinete', 'Trabalho feito só com relatos de terceiros, sem campo.'],
  ],
  exemplos: `<p><strong>Uma "sobrevivência":</strong> Tylor citava costumes que perderam a razão de ser e permaneceram como hábito. Um exemplo atual seria o aperto de mão, que alguns explicam como antigo sinal de mão desarmada. A explicação é plausível, mas difícil de provar: o conceito exige documentação histórica para não virar adivinhação.</p>`,
  contexto: `<p><strong>No mundo:</strong> o evolucionismo serviu de justificativa ideológica a políticas coloniais ${tag('interpretacao')}. <strong>No Brasil:</strong> teorias raciais evolucionistas influenciaram autores do fim do século XIX, como Raimundo Nina Rodrigues, cujos estudos sobre religiões afro-brasileiras têm valor documental mas partem de premissas racistas hoje rejeitadas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a escala única do evolucionismo falha', tag: 'argumento',
    premissas: ['O evolucionismo ordena sociedades por um critério (técnica, por exemplo) e conclui que estão mais ou menos "avançadas" em tudo.', 'Sociedades com técnica simples podem ter sistemas de parentesco, línguas e mitologias muito complexos.', 'Logo, o critério técnico não mede o conjunto da cultura.'],
    conclusao: 'Logo, uma escala única de progresso aplicada a culturas inteiras é falsa.',
    nota: 'Não nega que haja progresso técnico; nega que ele meça tudo.',
  },
  objecoes: [
    { objecao: 'Se não há escala única, todas as sociedades são igualmente boas em tudo.', tag: 'debate',
      resposta: 'Recusar a escala única não obriga a negar comparações parciais: pode-se dizer que uma técnica é mais eficiente ou que uma prática viola a dignidade humana. O que se recusa é classificar povos inteiros como superiores ou inferiores.' },
  ],
  aplicacao: `<p>Escolha um costume brasileiro que poderia ser chamado de "sobrevivência". Investigue sua história com fontes e diga se o conceito de Tylor se aplica ou se a explicação é especulativa.</p>`,
  fonte: {
    obra: 'Lewis Henry Morgan, A sociedade antiga (1877), parte I, cap. 1; James Frazer, O ramo de ouro (1890), cap. sobre magia e religião', link: null,
    orientacao: `<p>Em Morgan, localize os estágios e seus critérios. Em Frazer, a distinção entre magia e religião. Identifique, em cada um, os pressupostos sobre o progresso.</p>`,
  },
  perguntas: [
    { p: 'O que é uma sobrevivência para Tylor?', r: 'Um costume que persiste depois de perder sua função original.' },
    { p: 'Quais os estágios de Morgan?', r: 'Selvageria, barbárie e civilização.' },
    { p: 'Qual a sequência proposta por Frazer?', r: 'Magia, religião e ciência.' },
  ],
  exercicios: [
    mc('A sociedade antiga é de:', ['Tylor', 'Morgan', 'Frazer', 'Boas'], 1, '1877.'),
    mc('O ramo de ouro é de:', ['1871', '1877', '1890', '1922'], 2, 'Frazer.'),
    mc('Para Tylor, a forma mínima de religião é o:', ['Totemismo', 'Animismo', 'Monoteísmo', 'Magia'], 1, 'Crença em seres espirituais.'),
    mc('A origem da família, da propriedade privada e do Estado é de:', ['Marx', 'Engels', 'Morgan', 'Tylor'], 1, '1884, inspirado em Morgan.'),
    mc('Trabalhar só com relatos de terceiros é antropologia:', ['De campo', 'De gabinete', 'Aplicada', 'Interpretativa'], 1, 'Frazer.'),
    disc('Exponha a tese evolucionista e mostre dois erros dela com exemplos, sem negar que haja progresso técnico.', ['Tese exposta', 'Dois erros', 'Exemplos', 'Distinção sobre progresso']),
  ],
  resumo: ['Tylor (1871): sobrevivências, animismo.', 'Morgan (1877): selvageria, barbárie, civilização.', 'Frazer (1890): magia, religião, ciência.', 'Escala única falsa; racismo científico refutado.', 'Fé e razão não se excluem (Fides et Ratio).'],
  referencias: [
    { texto: 'Edward B. Tylor, A cultura primitiva (1871).' },
    { texto: 'Lewis Henry Morgan, A sociedade antiga (1877).' },
    { texto: 'James Frazer, O ramo de ouro (1890).' },
    { texto: 'São João Paulo II, Fides et Ratio (1998).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os capítulos indicados'],
  revisao: [['Tylor', 'Sobrevivências.'], ['Morgan', 'Três estágios.'], ['Frazer', 'Magia, religião, ciência.']],
  avancado: {
    texto: `<h3>O monoteísmo primitivo</h3>
<p>O padre e etnólogo Wilhelm Schmidt, em <em>A origem da ideia de Deus</em> (1912–1955), sustentou que a crença num Ser Supremo aparece entre povos de técnica muito simples, contra a sequência evolucionista ${tag('interpretacao')}. Sua tese foi debatida e criticada por métodos difusionistas ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Wilhelm Schmidt, A origem da ideia de Deus (1912–1955).' }],
    exercicios: [
      mc('Wilhelm Schmidt estudou a ideia de:', ['Progresso técnico', 'Ser Supremo entre povos de técnica simples', 'Parentesco', 'Mercado'], 1, 'Monoteísmo primitivo.'),
      mc('A tese de Schmidt contraria a sequência:', ['Evolucionista', 'Estruturalista', 'Funcionalista', 'Interpretativa'], 0, 'Animismo antes do monoteísmo.'),
      mc('A tese de Schmidt é:', ['Consenso', 'Debatida', 'Doutrina', 'Lei'], 1, 'Críticas de método.'),
      disc('Compare a sequência de Frazer e a tese de Schmidt, com os dados que cada um usa e uma avaliação.', ['Duas teses', 'Dados', 'Avaliação', 'Conclusão'])],
  },
}),

aula({
  id: 'an2-2', titulo: 'Franz Boas: a crítica ao evolucionismo e o particularismo histórico', duracao: '150 min',
  aprendera: ['Expor a crítica de Boas ao método comparativo', 'Explicar o particularismo histórico e o relativismo cultural', 'Explicar o estudo de Boas sobre imigrantes e a crítica ao racismo', 'Situar a influência de Boas no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Se as culturas não seguem uma linha única, como estudá-las? Franz Boas (1858–1942), antropólogo nascido na Alemanha e radicado nos Estados Unidos, propôs estudar a história particular de cada cultura ${tag('fato')}.</p>
<h3>Crítica ao método comparativo</h3>
<p>No artigo "As limitações do método comparativo da antropologia" (1896), Boas argumentou que fenômenos semelhantes em culturas diferentes podem ter origens distintas; antes de generalizar, é preciso reconstituir a história de cada caso ${tag('fato')}.</p>
<h3>Particularismo histórico e relativismo</h3>
<p>Cada cultura deve ser compreendida em seus próprios termos e em sua história, com pesquisa de campo e domínio da língua ${tag('fato')}. Daí veio o relativismo cultural como princípio de método ${tag('interpretacao')}.</p>
<h3>Raça, língua e cultura</h3>
<p>Boas mediu descendentes de imigrantes nos Estados Unidos e mostrou mudanças na forma do corpo em uma geração, publicando os resultados em 1912; concluiu que características tidas como raciais fixas eram influenciadas pelo ambiente ${tag('fato')}. Separou raça, língua e cultura como variáveis independentes, contra o racismo científico ${tag('fato')}.</p>
<h3>Influência no Brasil</h3>
<p>Gilberto Freyre estudou na Universidade Columbia e, no prefácio de <em>Casa-grande & senzala</em>, atribuiu a Boas a lição de distinguir raça e cultura ${tag('fato')}.</p>`,
  vocabulario: [
    ['Particularismo histórico', 'Estudo da história própria de cada cultura (Boas).'],
    ['Método comparativo', 'Comparação ampla entre culturas para generalizar.'],
    ['Difusão', 'Passagem de traços culturais de um povo a outro.'],
    ['Raça, língua e cultura', 'Variáveis independentes, segundo Boas.'],
    ['Relativismo cultural', 'Princípio de compreender cada cultura em seus termos.'],
  ],
  exemplos: `<p><strong>A lição de 1896 aplicada:</strong> máscaras rituais aparecem em muitos povos. O evolucionista concluiria que correspondem a um mesmo estágio; Boas perguntaria: de onde vem cada uma, como é usada, que significa no seu contexto, houve contato entre esses povos? Só depois disso se compara.</p>`,
  contexto: `<p><strong>No mundo:</strong> os alunos de Boas — Ruth Benedict, Margaret Mead, Edward Sapir — formaram a antropologia norte-americana ${tag('fato')}. <strong>No Brasil:</strong> a influência de Boas sobre Freyre marcou a passagem da explicação racial para a explicação cultural na interpretação do país ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que semelhança cultural não prova estágio comum (Boas)', tag: 'argumento',
    premissas: ['Um mesmo traço pode surgir por invenção independente, por difusão ou por causas diferentes.', 'O método comparativo evolucionista supõe uma única causa (o estágio).', 'Sem a história de cada caso, não se sabe qual explicação vale.'],
    conclusao: 'Logo, a semelhança de traços não prova que culturas estejam no mesmo estágio; exige investigação histórica.',
    nota: 'Mesma regra do comparativismo em simbologia (sb3-1).',
  },
  objecoes: [
    { objecao: 'Se cada cultura é particular, nenhuma generalização é possível.', tag: 'debate',
      resposta: 'Boas não proibiu generalizar; exigiu que a generalização viesse depois do estudo cuidadoso dos casos. Seus próprios trabalhos concluíram generalizações, como a independência entre raça e cultura.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: compare a definição de cultura de Tylor (1871) com a crítica de Boas ao método comparativo (1896), expondo as duas posições e a razão da crítica, com citações.</p>`,
  fonte: {
    obra: 'Franz Boas, "As limitações do método comparativo da antropologia" (1896); Gilberto Freyre, Casa-grande & senzala (1933), prefácio à 1ª edição', link: null,
    orientacao: `<p>No artigo de Boas, localize os exemplos de traços semelhantes com origens diferentes. No prefácio de Freyre, a menção a Boas. Use ambos na comparação.</p>`,
  },
  perguntas: [
    { p: 'Qual a crítica de Boas ao método comparativo?', r: 'Fenômenos semelhantes podem ter origens distintas; é preciso reconstituir a história de cada caso.' },
    { p: 'O que mostrou o estudo de Boas sobre imigrantes?', r: 'Que características tidas como raciais fixas mudavam com o ambiente em uma geração.' },
    { p: 'Que autor brasileiro estudou com Boas?', r: 'Gilberto Freyre.' },
  ],
  exercicios: [
    mc('"As limitações do método comparativo" é de:', ['1871', '1896', '1912', '1922'], 1, 'Boas.'),
    mc('Para Boas, raça, língua e cultura são:', ['A mesma coisa', 'Variáveis independentes', 'Determinadas pela raça', 'Irrelevantes'], 1, 'Contra o racismo.'),
    mc('Os resultados sobre descendentes de imigrantes foram publicados em:', ['1896', '1912', '1934', '1949'], 1, 'Mudança corporal.'),
    mc('Uma aluna de Boas é:', ['Ruth Benedict', 'Margaret Thatcher', 'Simone Weil', 'Hannah Arendt'], 0, 'Padrões de cultura.'),
    mc('A passagem de um traço cultural entre povos é a:', ['Invenção', 'Difusão', 'Sobrevivência', 'Liminaridade'], 1, 'Difusionismo.'),
    disc('Compare Tylor e Boas: definição de cultura, método e razão da crítica de Boas, com citações.', ['Posição de Tylor', 'Posição de Boas', 'Razão da crítica', 'Citações']),
  ],
  resumo: ['Boas (1858–1942).', '1896: limites do método comparativo.', 'Particularismo histórico; relativismo como método.', 'Imigrantes (1912): raça, língua e cultura independentes.', 'Influência em Freyre.'],
  referencias: [
    { texto: 'Franz Boas, "As limitações do método comparativo da antropologia" (1896).' },
    { texto: 'Franz Boas, Raça, língua e cultura (1940).' },
    { texto: 'Gilberto Freyre, Casa-grande & senzala (1933).' },
    { texto: 'George Stocking, Race, Culture, and Evolution (1968).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação Tylor x Boas', 'Ler o artigo de 1896'],
  revisao: [['Boas', 'Particularismo histórico.'], ['1912', 'Imigrantes.'], ['Freyre', 'Aluno de Boas.']],
  avancado: {
    texto: `<h3>Difusionismo</h3>
<p>Escolas difusionistas, na Alemanha e na Inglaterra, explicaram semelhanças culturais por difusão a partir de centros; algumas versões, como a que fazia tudo derivar do Egito, foram abandonadas por falta de prova ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'George Stocking, Race, Culture, and Evolution (1968).' }],
    exercicios: [
      mc('O difusionismo explica semelhanças culturais por:', ['Invenção independente', 'Difusão a partir de centros', 'Raça', 'Clima'], 1, 'Contato.'),
      mc('A tese de que tudo derivaria do Egito foi:', ['Confirmada', 'Abandonada por falta de prova', 'Doutrina', 'Lei'], 1, 'Hiperdifusionismo.'),
      mc('Boas admitia a difusão como:', ['Única explicação', 'Uma das explicações possíveis', 'Impossível', 'Irrelevante'], 1, 'Junto com invenção independente.'),
      disc('Escolha um traço cultural presente em várias regiões do Brasil e avalie se é melhor explicado por difusão ou invenção independente.', ['Traço', 'Hipóteses', 'Evidência', 'Conclusão'])],
  },
}),

aula({
  id: 'an2-3', titulo: 'Malinowski e Evans-Pritchard: o kula, a feitiçaria azande e os Nuer', duracao: '150 min',
  aprendera: ['Explicar o kula e o funcionalismo de Malinowski', 'Expor a análise da bruxaria azande de Evans-Pritchard', 'Explicar a segmentaridade dos Nuer', 'Discutir a racionalidade de sistemas de crença diferentes'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como explicar práticas que parecem estranhas — trocar colares que ninguém usa, consultar oráculos com veneno de galinha — sem chamá-las de irracionais? Dois clássicos britânicos mostraram como.</p>
<h3>Malinowski e o kula</h3>
<p>Em <em>Argonautas do Pacífico Ocidental</em> (1922), Malinowski descreveu o <strong>kula</strong> das ilhas Trobriand: colares circulam num sentido e braceletes no sentido contrário, entre parceiros de ilhas diferentes, em viagens rituais ${tag('fato')}. O kula não é comércio de utilidade, mas sistema de prestígio, aliança e obrigação, ligado a trocas econômicas ${tag('interpretacao')}. Malinowski explicou as instituições pelas necessidades humanas que satisfazem (funcionalismo) ${tag('fato')}.</p>
<h3>Evans-Pritchard e os Azande</h3>
<p>Em <em>Bruxaria, oráculos e magia entre os Azande</em> (1937), E. E. Evans-Pritchard mostrou que a crença na bruxaria explicava por que um infortúnio atingia aquela pessoa naquele momento — o celeiro desaba porque os cupins o roeram, mas a bruxaria explica por que desabou quando certas pessoas estavam sentadas sob ele ${tag('fato')}. O sistema era coerente por dentro ${tag('interpretacao')}.</p>
<h3>Os Nuer</h3>
<p>Em <em>Os Nuer</em> (1940), Evans-Pritchard analisou uma sociedade sem Estado organizada por linhagens que se unem ou se opõem conforme o nível do conflito — a <strong>segmentaridade</strong> ${tag('fato')}. Evans-Pritchard converteu-se ao catolicismo em 1944 e escreveu sobre a religião nuer com atenção à experiência religiosa ${tag('fato')}.</p>`,
  vocabulario: [
    ['Kula', 'Circuito trobriandês de troca ritual de colares e braceletes.'],
    ['Funcionalismo (Malinowski)', 'Explicação das instituições pelas necessidades que satisfazem.'],
    ['Bruxaria (Azande)', 'Explicação de infortúnios pela ação de bruxos.'],
    ['Oráculo', 'Procedimento de consulta para obter respostas sobre causas e decisões.'],
    ['Segmentaridade', 'Organização por grupos que se unem ou se opõem conforme o nível do conflito.'],
  ],
  exemplos: `<p><strong>O celeiro azande:</strong> a explicação física (cupins) responde ao "como"; a bruxaria responde ao "por que comigo, agora". Nossa cultura também faz a pergunta do "por que comigo" diante de desgraças; a diferença está no tipo de resposta. O exemplo ajuda a compreender sem aprovar a crença.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate sobre a racionalidade dos Azande inspirou discussões filosóficas sobre crença e compreensão, como as de Peter Winch ${tag('fato')}. <strong>No Brasil:</strong> etnografias sobre feitiçaria, cura e religiões populares dialogam com Evans-Pritchard ao estudar como as pessoas explicam o infortúnio ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a crença azande não é simplesmente irracional', tag: 'argumento',
    premissas: ['A crença na bruxaria não nega as causas físicas: os Azande sabem que os cupins derrubam celeiros.', 'Ela responde a outra pergunta: por que aquele infortúnio atingiu aquelas pessoas naquele momento.', 'Dentro de seus pressupostos, o sistema é coerente e usado com regras.'],
    conclusao: 'Logo, a crença azande é um sistema coerente de explicação, ainda que seus pressupostos possam ser julgados falsos.',
    nota: 'Coerência interna não é verdade; a distinção é central no debate sobre relativismo.',
  },
  objecoes: [
    { objecao: 'Compreender a bruxaria azande é aceitar que ela é verdadeira.', tag: 'debate',
      resposta: 'Evans-Pritchard escreveu que não acreditava em bruxos, embora tenha usado os oráculos para organizar sua vida durante a pesquisa. Compreender a lógica de uma crença e julgar sua verdade são atos diferentes.' },
  ],
  aplicacao: `<p>Compare como duas pessoas (ou dois grupos) que você conhece explicam um infortúnio (doença, acidente): que pergunta cada explicação responde — o "como" ou o "por que comigo"?</p>`,
  fonte: {
    obra: 'E. E. Evans-Pritchard, Bruxaria, oráculos e magia entre os Azande (1937), cap. IV ("O conceito de bruxaria explica infortúnios"); Bronisław Malinowski, Argonautas do Pacífico Ocidental (1922), cap. III (o kula)', link: null,
    orientacao: `<p>Em Evans-Pritchard, siga o exemplo do celeiro. Em Malinowski, a descrição do circuito do kula. Identifique, em cada um, como o autor evita chamar a prática de irracional.</p>`,
  },
  perguntas: [
    { p: 'O que é o kula?', r: 'Um circuito de troca ritual de colares e braceletes entre ilhas Trobriand.' },
    { p: 'Que pergunta a bruxaria azande responde?', r: 'Por que um infortúnio atingiu aquelas pessoas naquele momento.' },
    { p: 'O que é segmentaridade?', r: 'Organização por grupos que se unem ou se opõem conforme o nível do conflito.' },
  ],
  exercicios: [
    mc('Bruxaria, oráculos e magia entre os Azande é de:', ['1922', '1937', '1940', '1949'], 1, 'Evans-Pritchard.'),
    mc('No kula, colares e braceletes circulam:', ['No mesmo sentido', 'Em sentidos opostos', 'Só para o chefe', 'Como moeda comum'], 1, 'Circuito.'),
    mc('Os Nuer são analisados como sociedade:', ['Com Estado centralizado', 'Sem Estado, segmentar', 'Industrial', 'Escravista'], 1, '1940.'),
    mc('Evans-Pritchard converteu-se ao catolicismo em:', ['1922', '1937', '1944', '1973'], 2, 'Fato biográfico.'),
    mc('Coerência interna de uma crença prova sua verdade?', ['Sim', 'Não', 'Às vezes', 'Sempre na antropologia'], 1, 'Coerência ≠ verdade.'),
    disc('Explique a análise da bruxaria azande e distinga compreender a lógica de uma crença de julgar sua verdade.', ['Análise exposta', 'Exemplo do celeiro', 'Distinção clara', 'Aplicação a outro caso']),
  ],
  resumo: ['Malinowski (1922): kula; funcionalismo das necessidades.', 'Evans-Pritchard (1937): bruxaria explica o "por que comigo".', 'Os Nuer (1940): segmentaridade.', 'Coerência interna não é verdade.', 'Evans-Pritchard católico (1944).'],
  referencias: [
    { texto: 'E. E. Evans-Pritchard, Bruxaria, oráculos e magia entre os Azande (1937).' },
    { texto: 'E. E. Evans-Pritchard, Os Nuer (1940).' },
    { texto: 'Bronisław Malinowski, Argonautas do Pacífico Ocidental (1922).' },
    { texto: 'Peter Winch, "Understanding a Primitive Society" (1964).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os capítulos indicados'],
  revisao: [['Kula', 'Troca ritual.'], ['Azande', '"Por que comigo".'], ['Nuer', 'Segmentaridade.']],
  avancado: {
    texto: `<h3>A religião nuer</h3>
<p>Em <em>A religião nuer</em> (1956), Evans-Pritchard descreveu a noção nuer de Deus (Kwoth) e criticou as teorias que reduzem a religião a outra coisa (psicologia ou sociedade) ${tag('fato')}. Em <em>Teorias da religião primitiva</em> (1965), avaliou criticamente Tylor, Frazer e Durkheim ${tag('fato')}.</p>`,
    leituras: [{ texto: 'E. E. Evans-Pritchard, Teorias da religião primitiva (1965).' }],
    exercicios: [
      mc('A religião nuer é de:', ['1940', '1956', '1965', '1973'], 1, 'Evans-Pritchard.'),
      mc('Teorias da religião primitiva critica:', ['Tylor, Frazer e Durkheim', 'Só Malinowski', 'Geertz', 'Boas'], 0, '1965.'),
      mc('Evans-Pritchard criticou teorias que:', ['Descrevem a religião', 'Reduzem a religião a outra coisa', 'Estudam línguas', 'Usam estatística'], 1, 'Reducionismo.'),
      disc('Exponha a crítica de Evans-Pritchard às teorias reducionistas da religião e relacione-a à aula so2-4 sobre Durkheim.', ['Crítica exposta', 'Relação com Durkheim', 'Avaliação', 'Conclusão'])],
  },
}),

aula({
  id: 'an2-4', titulo: 'Mauss e Lévi-Strauss: a dádiva, o parentesco e o Brasil de Tristes trópicos', duracao: '180 min',
  aprendera: ['Fazer a ficha de leitura do Ensaio sobre a dádiva', 'Expor a teoria da aliança de Lévi-Strauss', 'Situar a pesquisa de Lévi-Strauss no Brasil', 'Aplicar a dádiva a uma prática atual'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que damos presentes e nos sentimos obrigados a retribuir? Por que todas as sociedades regulam com quem se pode casar? Mauss e Lévi-Strauss responderam com a ideia de troca.</p>
<h3>Mauss</h3>
<p>Marcel Mauss (1872–1950), sobrinho e colaborador de Durkheim, mostrou no <em>Ensaio sobre a dádiva</em> (1925) que as trocas em muitas sociedades são "fatos sociais totais": econômicos, jurídicos, religiosos e morais ao mesmo tempo, regidos por dar, receber e retribuir ${tag('fato')}. No fim do ensaio, defendeu que as sociedades modernas recuperassem formas de solidariedade baseadas na dádiva ${tag('interpretacao')}.</p>
<h3>Lévi-Strauss</h3>
<p>Claude Lévi-Strauss (1908–2009), em <em>As estruturas elementares do parentesco</em> (1949), estendeu a ideia de troca ao casamento: o tabu do incesto obriga os grupos a trocar cônjuges e cria alianças ${tag('fato')}. É a <strong>teoria da aliança</strong>, que contrasta com a ênfase britânica na descendência ${tag('interpretacao')}.</p>
<h3>No Brasil</h3>
<p>Lévi-Strauss lecionou na Universidade de São Paulo nos anos 1930 e fez pesquisas entre os Bororo, os Nambikwara e os Kadiwéu; narrou a experiência em <em>Tristes trópicos</em> (1955) ${tag('fato')}. O mito bororo que abre <em>O cru e o cozido</em> (1964) vem dessa tradição de pesquisa ${tag('fato')}.</p>
<h3>Leitura cristã</h3>
<p>A dádiva ilumina a vida social, mas a caridade cristã vai além da reciprocidade: dar sem esperar retorno (Lc 6,35); Bento XVI propôs a "lógica do dom" e da gratuidade na economia (<em>Caritas in Veritate</em>, 34–39) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Fato social total', 'Fenômeno ao mesmo tempo econômico, jurídico, religioso e moral (Mauss).'],
    ['Teoria da aliança', 'Explicação do parentesco pela troca matrimonial entre grupos (Lévi-Strauss).'],
    ['Troca restrita e generalizada', 'Formas de circulação de cônjuges entre dois ou mais grupos.'],
    ['Gratuidade', 'Dom sem expectativa de retorno (Caritas in Veritate).'],
    ['Tristes trópicos', 'Relato de Lévi-Strauss (1955) sobre suas viagens e pesquisas no Brasil.'],
  ],
  exemplos: `<p><strong>Dádiva hoje:</strong> no casamento, os convidados dão presentes; os noivos oferecem festa e lembranças; quem não comparece sem justificativa pode ofender. As três obrigações de Mauss aparecem; e a festa cria ou reforça alianças entre famílias, como Lévi-Strauss enfatizaria.</p>`,
  contexto: `<p><strong>No mundo:</strong> a dádiva inspirou estudos sobre doação de sangue e de órgãos e sobre economia solidária. <strong>No Brasil:</strong> a passagem de Lévi-Strauss pela USP e suas pesquisas no Mato Grosso ligam a fundação do estruturalismo à etnologia brasileira ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a dádiva cria laços sociais (Mauss)', tag: 'argumento',
    premissas: ['Quem recebe um dom fica obrigado a retribuir.', 'A obrigação de retribuir liga quem deu e quem recebeu ao longo do tempo.', 'Uma rede de dons e contradons forma relações duradouras.'],
    conclusao: 'Logo, a dádiva não é só troca de bens: é produção de vínculos sociais.',
    nota: 'A caridade cristã acrescenta o dom gratuito, que não cria dívida.',
  },
  objecoes: [
    { objecao: 'Se a dádiva obriga a retribuir, nenhum presente é gratuito.', tag: 'debate',
      resposta: 'Mauss descreve a regra social predominante; não nega que haja dons gratuitos. A tradição cristã afirma a possibilidade e o dever do dom gratuito, cujo modelo é o dom de Deus. A objeção confunde o que é frequente com o que é possível.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura do Ensaio sobre a dádiva — referência, tese, as três obrigações, o conceito de fato social total, um exemplo etnográfico do texto, um exemplo atual e uma objeção.</p>`,
  fonte: {
    obra: 'Marcel Mauss, Ensaio sobre a dádiva (1925), introdução e conclusão; Claude Lévi-Strauss, Tristes trópicos (1955), partes sobre os Bororo e os Nambikwara', link: null,
    orientacao: `<p>Em Mauss, localize as três obrigações e a conclusão moral. Em Tristes trópicos, escolha um capítulo sobre um povo e registre o método e as observações do autor.</p>`,
  },
  perguntas: [
    { p: 'O que é um fato social total?', r: 'Um fenômeno ao mesmo tempo econômico, jurídico, religioso e moral.' },
    { p: 'O que é a teoria da aliança?', r: 'A explicação do parentesco pela troca matrimonial entre grupos, imposta pelo tabu do incesto.' },
    { p: 'Que povos Lévi-Strauss estudou no Brasil?', r: 'Bororo, Nambikwara e Kadiwéu, entre outros.' },
  ],
  exercicios: [
    mc('As estruturas elementares do parentesco é de:', ['1925', '1940', '1949', '1955'], 2, 'Lévi-Strauss.'),
    mc('Tristes trópicos foi publicado em:', ['1935', '1949', '1955', '1964'], 2, 'Viagens ao Brasil.'),
    mc('Mauss era sobrinho de:', ['Comte', 'Durkheim', 'Weber', 'Tylor'], 1, 'Escola francesa.'),
    mc('A ênfase na troca matrimonial é da teoria da:', ['Descendência', 'Aliança', 'Evolução', 'Difusão'], 1, 'Lévi-Strauss.'),
    mc('A "lógica do dom" na economia aparece em:', ['Rerum Novarum', 'Caritas in Veritate', 'Dei Filius', 'Gaudium et Spes'], 1, 'Bento XVI, 2009.'),
    disc('Entregue a ficha de leitura do Ensaio sobre a dádiva: tese, três obrigações, fato social total, exemplo do texto, exemplo atual e objeção.', ['Tese', 'Três obrigações', 'Exemplos', 'Objeção']),
  ],
  resumo: ['Mauss (1925): dádiva, fato social total.', 'Lévi-Strauss (1949): teoria da aliança.', 'USP e pesquisas no Brasil; Tristes trópicos (1955).', 'Dádiva cria vínculos.', 'Gratuidade (Caritas in Veritate).'],
  referencias: [
    { texto: 'Marcel Mauss, Ensaio sobre a dádiva (1925).' },
    { texto: 'Claude Lévi-Strauss, As estruturas elementares do parentesco (1949).' },
    { texto: 'Claude Lévi-Strauss, Tristes trópicos (1955).' },
    { texto: 'Bento XVI, Caritas in Veritate (2009).', link: { url: 'https://www.vatican.va/content/benedict-xvi/pt/encyclicals/documents/hf_ben-xvi_enc_20090629_caritas-in-veritate.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha do Ensaio sobre a dádiva', 'Ler os trechos indicados'],
  revisao: [['Mauss', 'Fato social total.'], ['Lévi-Strauss', 'Aliança, 1949.'], ['Tristes trópicos', '1955.']],
  avancado: {
    texto: `<h3>Dádiva e sociedade moderna</h3>
<p>Richard Titmuss, em <em>The Gift Relationship</em> (1970), comparou sistemas de doação de sangue voluntária e paga e defendeu a superioridade do primeiro em qualidade e segurança ${tag('interpretacao')}; o debate continua ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Richard Titmuss, The Gift Relationship (1970).' }],
    exercicios: [
      mc('The Gift Relationship trata de:', ['Presentes de Natal', 'Doação de sangue', 'Comércio exterior', 'Casamento'], 1, 'Titmuss, 1970.'),
      mc('Titmuss defendeu a doação de sangue:', ['Paga', 'Voluntária', 'Obrigatória', 'Proibida'], 1, 'Qualidade e segurança.'),
      mc('A tese de Titmuss é:', ['Consenso', 'Debatida', 'Doutrina', 'Lei'], 1, 'Debate atual.'),
      disc('Analise a doação de sangue ou de órgãos no Brasil com Mauss, Titmuss e a ideia cristã de gratuidade.', ['Dados da prática', 'Mauss aplicado', 'Titmuss', 'Gratuidade'])],
  },
}),

avaliacao('an2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a formação da antropologia e os autores clássicos, e duas discursivas de comparação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia a comparação Tylor x Boas.</li><li>Releia sua ficha do Ensaio sobre a dádiva.</li></ul>`,
[
  disc('Compare o evolucionismo e o particularismo histórico: tese, método, uso dos dados e consequências para a imagem dos povos estudados.', ['Duas posições', 'Métodos', 'Uso dos dados', 'Consequências']),
  disc('Escolha uma prática que pareça irracional vista de fora e explique-a com Evans-Pritchard ou Mauss, distinguindo compreender e aprovar.', ['Prática descrita', 'Autor aplicado', 'Compreender x aprovar', 'Conclusão']),
]),
];
