// Direito II — formação e autores (etapas 4 e 5 do percurso de Direito).
// Direito romano; direito canônico e o tratado da lei de Tomás; Escola de Salamanca e direito das gentes;
// Montesquieu, Beccaria, codificação e constitucionalismo, com os marcos brasileiros.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dr2-1', titulo: 'Direito romano: das Doze Tábuas a Justiniano e Bolonha', duracao: '150 min',
  aprendera: ['Situar a Lei das Doze Tábuas', 'Explicar o papel dos jurisconsultos e das Institutas de Gaio', 'Descrever as partes do Corpus Iuris Civilis', 'Explicar a redescoberta do direito romano em Bolonha'],
  prereq: ['Direito I (módulo DR1)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o direito de um império antigo ainda organiza os códigos civis de hoje, inclusive o brasileiro?</p>
<h3>As Doze Tábuas</h3>
<p>Por volta de 451–450 a.C., Roma fixou por escrito a Lei das Doze Tábuas, tornando as regras conhecidas por todos ${tag('fato')}.</p>
<h3>Os jurisconsultos</h3>
<p>Juristas como Gaio, Papiniano, Paulo e Ulpiano desenvolveram conceitos precisos — pessoa, coisa, obrigação, contrato, posse ${tag('fato')}. As <em>Institutas</em> de Gaio, do século II, organizaram o direito em pessoas, coisas e ações; o texto, perdido por séculos, foi redescoberto num manuscrito em Verona em 1816 ${tag('fato')}.</p>
<h3>Justiniano</h3>
<p>Entre 529 e 534, o imperador Justiniano mandou compilar o direito romano: o Código (leis imperiais), o Digesto (trechos dos juristas), as Institutas (manual) e, depois, as Novelas (leis novas); o conjunto ficou conhecido como <em>Corpus Iuris Civilis</em> ${tag('fato')}.</p>
<h3>Bolonha</h3>
<p>No fim do século XI e no século XII, o estudo do Digesto renasceu em Bolonha, com Irnério e os glosadores, dando origem à formação universitária dos juristas na Europa ${tag('fato')}. O direito romano estudado nas universidades formou, com o canônico, o <em>ius commune</em> europeu ${tag('fato')}.</p>`,
  vocabulario: [
    ['Lei das Doze Tábuas', 'Primeira codificação escrita do direito romano (c. 451–450 a.C.).'],
    ['Jurisconsulto', 'Jurista romano que respondia a consultas e escrevia sobre o direito.'],
    ['Corpus Iuris Civilis', 'Compilação de Justiniano (529–534).'],
    ['Glosadores', 'Juristas medievais que anotavam o texto do Digesto.'],
    ['Ius commune', 'Direito comum europeu formado pelo direito romano e canônico.'],
  ],
  exemplos: `<p><strong>A divisão de Gaio no Código Civil:</strong> o Código Civil brasileiro tem uma Parte Geral sobre pessoas, bens e fatos jurídicos e uma Parte Especial sobre obrigações, empresa, coisas, família e sucessões. A ordem pessoas–coisas–ações das Institutas de Gaio, transformada ao longo dos séculos, ainda se reconhece nessa estrutura.</p>`,
  contexto: `<p><strong>No mundo:</strong> os códigos civis da Europa continental e da América Latina pertencem à família romano-germânica ${tag('fato')}. <strong>No Brasil:</strong> as Ordenações Filipinas, de 1603, vigoraram no Brasil em matéria civil até o Código Civil de 1916 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a escrita das leis protege os mais fracos', tag: 'argumento',
    premissas: ['Leis conhecidas só pelos poderosos podem ser aplicadas arbitrariamente.', 'Leis escritas e públicas podem ser conhecidas e invocadas por todos.', 'Assim, os mais fracos podem exigir que a regra valha também para eles.'],
    conclusao: 'Logo, a publicidade das leis é garantia contra o arbítrio.',
    nota: 'Segundo a tradição, as Doze Tábuas resultaram de reivindicação dos plebeus.',
  },
  objecoes: [
    { objecao: 'Direito romano é história antiga; não serve para quem estuda direito brasileiro.', tag: 'debate',
      resposta: 'Conceitos como obrigação, contrato, posse, propriedade e capacidade vêm do direito romano e foram transmitidos pelo ius commune até os códigos modernos. Conhecer a origem ajuda a entender por que as regras são como são e como interpretá-las.' },
  ],
  aplicacao: `<p>Escolha um instituto do Código Civil (contrato de compra e venda, posse, usufruto) e reconstrua sua origem romana, com o trecho do Digesto ou das Institutas correspondente.</p>`,
  fonte: {
    obra: 'Gaio, Institutas, I, 8; Justiniano, Institutas, I, 1–2', link: null,
    orientacao: `<p>Em Gaio, a divisão em pessoas, coisas e ações. Nas Institutas de Justiniano, as definições de justiça e de direito natural.</p>`,
  },
  perguntas: [
    { p: 'Quando foi fixada a Lei das Doze Tábuas?', r: 'Por volta de 451–450 a.C.' },
    { p: 'Quais as partes do Corpus Iuris Civilis?', r: 'Código, Digesto, Institutas e Novelas.' },
    { p: 'Onde renasceu o estudo do Digesto?', r: 'Em Bolonha, no fim do século XI e no século XII.' },
  ],
  exercicios: [
    mc('As Institutas de Gaio foram redescobertas em Verona em:', ['1516', '1716', '1816', '1916'], 2, 'Manuscrito.'),
    mc('O Digesto reúne:', ['Leis imperiais', 'Trechos dos juristas', 'Leis novas', 'Decisões papais'], 1, 'Justiniano.'),
    mc('O glosador associado ao início de Bolonha é:', ['Irnério', 'Graciano', 'Tomás', 'Vitória'], 0, 'Século XII.'),
    mc('As Ordenações Filipinas são de:', ['1446', '1603', '1824', '1916'], 1, 'Vigoraram no Brasil.'),
    mc('A ordem pessoas, coisas e ações é de:', ['Gaio', 'Beccaria', 'Montesquieu', 'Kelsen'], 0, 'Institutas.'),
    disc('Reconstrua a origem romana de um instituto do Código Civil, com o trecho correspondente.', ['Instituto', 'Origem romana', 'Trecho', 'Continuidade']),
  ],
  resumo: ['Doze Tábuas (c. 451–450 a.C.).', 'Jurisconsultos; Gaio (1816).', 'Corpus Iuris Civilis (529–534).', 'Bolonha: Irnério, glosadores.', 'Ius commune; Ordenações Filipinas.'],
  referencias: [
    { texto: 'Gaio, Institutas (século II).' },
    { texto: 'Justiniano, Corpus Iuris Civilis (529–534).' },
    { texto: 'José Reinaldo de Lima Lopes, O direito na história.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a reconstrução do instituto', 'Ler os textos indicados'],
  revisao: [['Doze Tábuas', 'Publicidade.'], ['Justiniano', 'Corpus.'], ['Bolonha', 'Irnério.']],
  avancado: {
    texto: `<h3>Teixeira de Freitas</h3>
<p>Augusto Teixeira de Freitas organizou a <em>Consolidação das Leis Civis</em> (1858) e redigiu o <em>Esboço</em> de código civil (1860–1865), que não foi adotado no Brasil mas influenciou o Código Civil argentino ${tag('fato')}. É considerado um dos maiores civilistas do século XIX ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Augusto Teixeira de Freitas, Consolidação das Leis Civis (1858).' }],
    exercicios: [
      mc('A Consolidação das Leis Civis é de:', ['1824', '1858', '1916', '2002'], 1, 'Teixeira de Freitas.'),
      mc('O Esboço de Teixeira de Freitas influenciou o código civil:', ['Francês', 'Argentino', 'Alemão', 'Português'], 1, 'Vélez Sarsfield.'),
      mc('O Esboço foi adotado no Brasil?', ['Sim', 'Não', 'Em parte', 'Só em São Paulo'], 1, 'Fato.'),
      disc('Explique a importância de Teixeira de Freitas para o direito civil brasileiro e latino-americano.', ['Obras', 'Influência', 'Contexto', 'Avaliação'])],
  },
}),

aula({
  id: 'dr2-2', titulo: 'Direito canônico e o tratado da lei de Santo Tomás', duracao: '150 min',
  aprendera: ['Conhecer o Decreto de Graciano e o Corpus Iuris Canonici', 'Expor a definição tomista de lei', 'Distinguir lei eterna, natural, humana e divina', 'Explicar a contribuição canônica ao direito ocidental'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Qual foi o papel da Igreja na formação do direito ocidental, e o que Tomás de Aquino ensinou sobre a lei?</p>
<h3>Direito canônico</h3>
<p>Por volta de 1140, Graciano, em Bolonha, reuniu e harmonizou cânones de concílios, papas e Padres no <em>Decreto</em>, base do estudo do direito canônico ${tag('fato')}. Com as coleções de decretais posteriores, formou-se o <em>Corpus Iuris Canonici</em> ${tag('fato')}. O direito canônico contribuiu com ideias como o consentimento como essência do matrimônio e a exigência de processo regular com prova ${tag('interpretacao')}.</p>
<h3>O tratado da lei</h3>
<p>Na <em>Suma Teológica</em> (I-II, qq. 90–97), Tomás define a lei como ordenação da razão para o bem comum, promulgada por quem tem o cuidado da comunidade (q. 90, a. 4) ${tag('fato')}. Distingue quatro leis: eterna (a razão divina que governa o universo), natural (participação da lei eterna na criatura racional), humana (determinações da lei natural pela autoridade) e divina (revelada) ${tag('fato')}.</p>
<h3>Lei humana</h3>
<p>A lei humana deriva da natural por conclusão (não matar) ou por determinação (como punir) (q. 95, a. 2) ${tag('fato')}. Não deve proibir todos os vícios, mas sobretudo os mais graves, que prejudicam os outros e a convivência (q. 96, a. 2) ${tag('fato')}.</p>
<h3>Hoje</h3>
<p>O Código de Direito Canônico vigente foi promulgado por São João Paulo II em 1983 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Decreto de Graciano', 'Compilação de cânones de c. 1140, base do direito canônico.'],
    ['Lei eterna', 'A razão divina que governa o universo.'],
    ['Lei natural', 'Participação da lei eterna na criatura racional.'],
    ['Determinação', 'Concretização, pela autoridade, do que a lei natural deixa em aberto.'],
    ['Código de Direito Canônico', 'Código da Igreja latina, de 1983.'],
  ],
  exemplos: `<p><strong>Conclusão e determinação:</strong> a lei natural diz que não se deve causar dano injusto ao próximo; daí se conclui que o homicídio deve ser proibido (conclusão). Mas a lei natural não diz se a velocidade máxima numa rodovia deve ser 80 ou 110 km/h; a autoridade a fixa por prudência (determinação). As duas são legítimas, com vínculos diferentes à lei natural.</p>`,
  contexto: `<p><strong>No mundo:</strong> as universidades medievais ofereciam o grau em "ambos os direitos", civil e canônico ${tag('fato')}. <strong>No Brasil:</strong> no período colonial e imperial, o casamento era regido pelo direito canônico até a instituição do casamento civil em 1890 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lei humana não deve proibir todos os vícios', tag: 'argumento',
    premissas: ['A lei humana é feita para uma multidão de pessoas, a maioria não perfeitamente virtuosa.', 'Proibir todos os vícios exigiria o que a maioria não consegue cumprir e geraria males maiores.', 'Por isso a lei humana proíbe sobretudo os vícios mais graves, que prejudicam os outros.'],
    conclusao: 'Logo, a lei humana não deve proibir todos os vícios (I-II, q. 96, a. 2).',
    nota: 'Isso não significa que tudo o que não é proibido seja bom; significa que a lei civil tem fins limitados.',
  },
  objecoes: [
    { objecao: 'Se a lei civil não pune todos os vícios, ela é moralmente indiferente.', tag: 'debate',
      resposta: 'Tomás ensina que a lei humana visa conduzir as pessoas à virtude gradualmente e proteger o bem comum; não é indiferente, mas prudente. O que é tolerado pela lei civil continua sujeito ao juízo moral e à lei de Deus.' },
  ],
  aplicacao: `<p>Escolha duas leis brasileiras e classifique-as como "conclusão" ou "determinação" da lei natural, justificando com Tomás.</p>`,
  fonte: {
    obra: 'Santo Tomás de Aquino, Suma Teológica I-II, q. 90, a. 4; q. 91; q. 95, a. 2; q. 96, a. 2', link: null,
    orientacao: `<p>Na q. 90, a definição de lei. Na q. 91, as quatro leis. Na q. 95, conclusão e determinação. Na q. 96, os limites da lei humana.</p>`,
  },
  perguntas: [
    { p: 'Quais as quatro leis segundo Tomás?', r: 'Eterna, natural, humana e divina.' },
    { p: 'Quando Graciano compôs o Decreto?', r: 'Por volta de 1140.' },
    { p: 'Quando foi promulgado o Código de Direito Canônico vigente?', r: 'Em 1983.' },
  ],
  exercicios: [
    mc('A lei natural é, para Tomás:', ['A razão divina em si', 'Participação da lei eterna na criatura racional', 'A lei do Estado', 'A Bíblia'], 1, 'q. 91, a. 2.'),
    mc('Fixar a velocidade máxima numa rodovia é:', ['Conclusão da lei natural', 'Determinação', 'Lei divina', 'Lei eterna'], 1, 'Prudência.'),
    mc('O Decreto de Graciano é de cerca de:', ['540', '1140', '1540', '1917'], 1, 'Bolonha.'),
    mc('O casamento civil foi instituído no Brasil em:', ['1824', '1890', '1916', '1977'], 1, 'República.'),
    mc('Para Tomás, a lei humana deve proibir:', ['Todos os vícios', 'Sobretudo os mais graves, que prejudicam os outros', 'Nenhum vício', 'Só os pensamentos'], 1, 'q. 96, a. 2.'),
    disc('Classifique duas leis brasileiras como conclusão ou determinação da lei natural, com Tomás.', ['Duas leis', 'Classificação', 'Justificativa', 'Texto de Tomás']),
  ],
  resumo: ['Graciano (c. 1140); Corpus Iuris Canonici.', 'Tomás: lei como ordenação da razão.', 'Quatro leis.', 'Conclusão e determinação; limites da lei humana.', 'Código de Direito Canônico (1983).'],
  referencias: [
    { texto: 'Santo Tomás de Aquino, Suma Teológica I-II, qq. 90–97.' },
    { texto: 'Código de Direito Canônico (1983).' },
    { texto: 'Harold Berman, Direito e revolução (1983).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação das leis', 'Ler as questões indicadas'],
  revisao: [['Quatro leis', 'Eterna, natural, humana, divina.'], ['Graciano', 'c. 1140.'], ['1983', 'Código canônico.']],
  avancado: {
    texto: `<h3>Berman e a revolução papal</h3>
<p>Harold Berman (<em>Direito e revolução</em>, 1983) sustentou que a reforma gregoriana do século XI, ao separar a jurisdição da Igreja da dos poderes seculares, deu origem ao primeiro sistema jurídico moderno do Ocidente e à tradição jurídica ocidental ${tag('interpretacao')}. A tese é influente e discutida por historiadores ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Harold Berman, Direito e revolução (1983).' }],
    exercicios: [
      mc('Direito e revolução é de:', ['Berman', 'Kelsen', 'Hart', 'Graciano'], 0, '1983.'),
      mc('Berman situa a origem da tradição jurídica ocidental na:', ['Revolução Francesa', 'Reforma gregoriana', 'Renascença', 'Revolução Industrial'], 1, 'Século XI.'),
      mc('A tese de Berman é:', ['Consenso absoluto', 'Influente e discutida', 'Refutada', 'Doutrina'], 1, 'Debate.'),
      disc('Explique a tese de Berman sobre a reforma gregoriana e avalie-a.', ['Tese', 'Argumentos', 'Críticas', 'Avaliação'])],
  },
}),

aula({
  id: 'dr2-3', titulo: 'Escola de Salamanca e direito das gentes: Vitória, Suárez e Grócio', duracao: '150 min',
  aprendera: ['Expor a defesa dos direitos dos indígenas por Vitória', 'Conhecer a bula Sublimis Deus', 'Explicar a teoria da lei de Suárez', 'Situar Grócio na formação do direito internacional'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Com a chegada dos europeus à América, surgiu a pergunta: os povos indígenas têm direitos? E que regras valem entre povos diferentes?</p>
<h3>Vitória</h3>
<p>Francisco de Vitória, dominicano e professor em Salamanca, na preleção <em>De Indis</em> (1539), sustentou que os indígenas eram verdadeiros donos de suas terras e governos, e que nem o pecado nem a infidelidade lhes tiravam esses direitos ${tag('fato')}. Desenvolveu a noção de um direito das gentes que vale entre os povos ${tag('fato')}.</p>
<h3>Sublimis Deus</h3>
<p>Em 1537, o papa Paulo III, na bula <em>Sublimis Deus</em>, afirmou que os indígenas são verdadeiros homens, capazes de receber a fé, e que não podem ser privados de sua liberdade nem de seus bens ${tag('fato')}.</p>
<h3>Suárez</h3>
<p>Francisco Suárez, jesuíta, no tratado <em>De legibus</em> (1612), sistematizou a teoria da lei e sustentou que o poder político vem de Deus por meio da comunidade ${tag('fato')}. Suárez lecionou em Coimbra ${tag('fato')}.</p>
<h3>Grócio</h3>
<p>Hugo Grócio, em <em>O direito da guerra e da paz</em> (1625), sistematizou o direito entre as nações e afirmou que o direito natural valeria mesmo que se admitisse, por hipótese, que Deus não existe — afirmação que ele mesmo dizia não poder ser feita sem impiedade ${tag('fato')}. É considerado um dos fundadores do direito internacional ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Escola de Salamanca', 'Grupo de teólogos e juristas do século XVI ligados à Universidade de Salamanca.'],
    ['Direito das gentes', 'Direito que vale entre os povos.'],
    ['Dominium', 'Domínio, propriedade e governo legítimo.'],
    ['Guerra justa', 'Doutrina sobre as condições em que a guerra é lícita.'],
    ['Direito internacional', 'Direito que regula as relações entre Estados.'],
  ],
  exemplos: `<p><strong>O argumento de Vitória:</strong> alguns diziam que os indígenas, por serem infiéis ou viverem em pecado, não tinham direito a suas terras. Vitória respondeu que o domínio se funda na natureza racional do homem, e não na fé ou na graça; por isso, infiéis e pecadores continuam sendo donos legítimos. A conclusão negava um fundamento comum da conquista.</p>`,
  contexto: `<p><strong>No mundo:</strong> Vitória e Grócio são considerados precursores do direito internacional ${tag('interpretacao')}. <strong>No Brasil:</strong> o padre Antônio Vieira, no século XVII, defendeu a liberdade dos indígenas em sermões e escritos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que, para Vitória, a infidelidade não retira o domínio', tag: 'argumento',
    premissas: ['O domínio sobre bens e governo funda-se na natureza racional do ser humano.', 'Os indígenas têm natureza racional, como todo ser humano.', 'A fé e a graça são dons sobrenaturais que não criam nem destroem direitos naturais.'],
    conclusao: 'Logo, os indígenas, ainda que não cristãos, são verdadeiros donos de suas terras e governos.',
    nota: 'O argumento aplica a distinção tomista entre ordem natural e ordem da graça.',
  },
  objecoes: [
    { objecao: 'A Igreja apoiou sem crítica a conquista da América.', tag: 'debate',
      resposta: 'Houve clérigos que justificaram a conquista, mas também teólogos, bispos e papas que a criticaram e defenderam os indígenas: Vitória, Las Casas, a Sublimis Deus, Vieira. A história é de conflito interno, e a defesa dos direitos dos indígenas tem raízes nessa tradição.' },
  ],
  aplicacao: `<p>Leia trechos de De Indis e da Sublimis Deus e compare-os com o art. 231 da Constituição de 1988 sobre os direitos dos indígenas.</p>`,
  fonte: {
    obra: 'Francisco de Vitória, Relectio de Indis (1539); Paulo III, Sublimis Deus (1537); Constituição de 1988, art. 231', link: null,
    orientacao: `<p>Em Vitória, a primeira parte sobre o domínio dos indígenas. Na Sublimis Deus, a afirmação da humanidade e da liberdade dos indígenas. No art. 231, o reconhecimento constitucional.</p>`,
  },
  perguntas: [
    { p: 'Qual a tese de Vitória sobre os indígenas?', r: 'Que eram verdadeiros donos de suas terras e governos, mesmo não sendo cristãos.' },
    { p: 'O que afirmou a Sublimis Deus?', r: 'Que os indígenas são verdadeiros homens, capazes da fé, e não podem ser privados de liberdade e bens.' },
    { p: 'Qual obra de Grócio fundou o direito internacional?', r: 'O direito da guerra e da paz (1625).' },
  ],
  exercicios: [
    mc('A preleção De Indis é de:', ['1492', '1539', '1612', '1625'], 1, 'Vitória.'),
    mc('A Sublimis Deus é do papa:', ['Alexandre VI', 'Paulo III', 'Pio V', 'Bento XIV'], 1, '1537.'),
    mc('De legibus (1612) é de:', ['Suárez', 'Vitória', 'Grócio', 'Bellarmino'], 0, 'Jesuíta.'),
    mc('O direito da guerra e da paz é de:', ['Grócio', 'Hobbes', 'Vattel', 'Pufendorf'], 0, '1625.'),
    mc('No Brasil, a liberdade dos indígenas foi defendida no século XVII por:', ['Antônio Vieira', 'Rui Barbosa', 'José Bonifácio', 'Anchieta apenas'], 0, 'Sermões.'),
    disc('Compare De Indis, a Sublimis Deus e o art. 231 da Constituição.', ['Vitória', 'Sublimis Deus', 'Art. 231', 'Continuidade e diferenças']),
  ],
  resumo: ['Vitória (1539): domínio dos indígenas; direito das gentes.', 'Sublimis Deus (1537).', 'Suárez (1612): De legibus; Coimbra.', 'Grócio (1625): direito internacional.', 'Vieira no Brasil.'],
  referencias: [
    { texto: 'Francisco de Vitória, Relectio de Indis (1539).' },
    { texto: 'Francisco Suárez, De legibus (1612).' },
    { texto: 'Hugo Grócio, O direito da guerra e da paz (1625).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação', 'Ler os textos indicados'],
  revisao: [['Vitória', 'De Indis.'], ['1537', 'Sublimis Deus.'], ['Grócio', '1625.']],
  avancado: {
    texto: `<h3>A controvérsia de Valladolid</h3>
<p>Em 1550–1551, em Valladolid, Bartolomé de las Casas e Juan Ginés de Sepúlveda debateram perante uma junta de teólogos e juristas se era justa a guerra contra os indígenas ${tag('fato')}. Sepúlveda invocou a tese aristotélica da "servidão natural"; Las Casas defendeu a plena humanidade e os direitos dos indígenas ${tag('fato')}. A junta não proferiu sentença formal ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Bartolomé de las Casas, Brevíssima relação da destruição das Índias (1552).' }],
    exercicios: [
      mc('A controvérsia de Valladolid foi em:', ['1492–1493', '1550–1551', '1600–1601', '1700–1701'], 1, 'Junta.'),
      mc('A tese da servidão natural foi invocada por:', ['Las Casas', 'Sepúlveda', 'Vitória', 'Suárez'], 1, 'Aristóteles.'),
      mc('A junta de Valladolid:', ['Condenou Las Casas', 'Não proferiu sentença formal', 'Aprovou a escravidão', 'Foi cancelada'], 1, 'Fato.'),
      disc('Exponha os argumentos de Las Casas e Sepúlveda e avalie-os à luz da doutrina sobre a dignidade humana.', ['Las Casas', 'Sepúlveda', 'Doutrina', 'Avaliação'])],
  },
}),

aula({
  id: 'dr2-4', titulo: 'Montesquieu, Beccaria, codificação e constitucionalismo: do Iluminismo ao Brasil', duracao: '150 min',
  aprendera: ['Expor os princípios penais de Beccaria', 'Relacionar Montesquieu ao constitucionalismo', 'Conhecer o Código Napoleão e a codificação', 'Situar as constituições e os códigos brasileiros'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como surgiram os princípios penais modernos, os códigos e as constituições escritas que organizam o direito brasileiro?</p>
<h3>Beccaria</h3>
<p>Cesare Beccaria, em <em>Dos delitos e das penas</em> (1764), defendeu que só a lei pode definir crimes e penas, que as penas devem ser proporcionais e úteis, e combateu a tortura e a pena de morte ${tag('fato')}.</p>
<h3>Montesquieu</h3>
<p>Montesquieu, em <em>O espírito das leis</em> (1748), sustentou que a liberdade exige que o poder freie o poder, separando legislativo, executivo e judiciário (estudado em cp2-3) ${tag('fato')}.</p>
<h3>Codificação</h3>
<p>O Código Civil francês, de 1804, conhecido como Código Napoleão, tornou-se modelo de codificação ${tag('fato')}. O Código Civil alemão (BGB), de 1900, foi outro modelo influente ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>A Constituição do Império (1824) foi seguida pelo Código Criminal de 1830, inspirado em ideias iluministas ${tag('fato')}. A República trouxe a Constituição de 1891; vieram depois as de 1934, 1937, 1946, 1967 e a de 1988 ${tag('fato')}. O Código Civil de 1916, projeto de Clóvis Beviláqua, vigorou até o de 2002 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Princípio da legalidade', 'Não há crime nem pena sem lei anterior que os defina.'],
    ['Proporcionalidade da pena', 'Adequação da pena à gravidade do delito.'],
    ['Codificação', 'Organização sistemática do direito de uma matéria num código.'],
    ['Constitucionalismo', 'Limitação do poder por uma constituição.'],
    ['Constituição outorgada', 'Constituição imposta, sem assembleia eleita.'],
  ],
  exemplos: `<p><strong>Beccaria na Constituição de 1988:</strong> "não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal" (art. 5º, XXXIX); "ninguém será submetido a tortura" (art. 5º, III); "não haverá penas de morte, salvo em caso de guerra declarada" (art. 5º, XLVII). As ideias de 1764 estão no texto constitucional brasileiro.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Constituição dos Estados Unidos (1787) e a Declaração dos Direitos do Homem e do Cidadão (1789) marcaram o constitucionalismo moderno ${tag('fato')}. <strong>No Brasil:</strong> a Constituição de 1988 é a sétima constituição do país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a legalidade penal protege a liberdade', tag: 'argumento',
    premissas: ['Se o crime pudesse ser definido depois do fato, ninguém saberia o que pode fazer.', 'A definição prévia em lei permite a cada um conhecer os limites de sua conduta.', 'Isso impede que o poder puna arbitrariamente quem lhe desagrada.'],
    conclusao: 'Logo, o princípio da legalidade penal é garantia da liberdade.',
    nota: 'Está no art. 5º, XXXIX, da Constituição e no art. 1º do Código Penal.',
  },
  objecoes: [
    { objecao: 'O Iluminismo jurídico foi hostil à Igreja; logo, seus princípios devem ser rejeitados.', tag: 'debate',
      resposta: 'Alguns iluministas eram hostis à Igreja, mas princípios como a proporcionalidade das penas e a recusa da tortura têm raízes também na tradição cristã e foram acolhidos pelo Magistério. O critério é a verdade e a justiça do princípio, não a biografia de quem o formulou. O Catecismo condena a tortura (CIC 2297–2298).' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte uma linha do tempo do direito ocidental com uma obra ou código por marco (das Doze Tábuas à Constituição de 1988), incluindo marcos brasileiros.</p>`,
  fonte: {
    obra: 'Cesare Beccaria, Dos delitos e das penas (1764), §§ 3, 12, 16 e 28; Constituição de 1988, art. 5º, III, XXXIX e XLVII', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Em Beccaria, os capítulos sobre legalidade, finalidade das penas, tortura e pena de morte. Na Constituição, os incisos correspondentes do art. 5º.</p>`,
  },
  perguntas: [
    { p: 'Que princípios Beccaria defendeu?', r: 'Legalidade, proporcionalidade e utilidade das penas, contra a tortura e a pena de morte.' },
    { p: 'Quando foi promulgado o Código Napoleão?', r: 'Em 1804.' },
    { p: 'Quantas constituições o Brasil já teve?', r: 'Sete, sendo a de 1988 a atual.' },
  ],
  exercicios: [
    mc('Dos delitos e das penas é de:', ['1748', '1764', '1804', '1830'], 1, 'Beccaria.'),
    mc('O Código Criminal do Império é de:', ['1824', '1830', '1891', '1940'], 1, 'Iluminismo.'),
    mc('A proibição da tortura está na CF, art. 5º, inciso:', ['III', 'XXXIX', 'XLVII', 'LXXIV'], 0, 'Beccaria.'),
    mc('O BGB alemão é de:', ['1804', '1900', '1916', '1942'], 1, 'Código civil.'),
    mc('A condenação da tortura está no CIC:', ['2297–2298', '1883', '2372', '337'], 0, 'Doutrina.'),
    disc('Apresente a linha do tempo do direito ocidental com uma obra ou código por marco e marcos brasileiros.', ['Marcos em ordem', 'Obras e códigos', 'Marcos brasileiros', 'Ideia central']),
  ],
  resumo: ['Beccaria (1764): legalidade, proporcionalidade, contra tortura.', 'Montesquieu (1748).', 'Código Napoleão (1804); BGB (1900).', 'Brasil: 1824, 1830, 1891... 1988; CC 1916 e 2002.', 'CF art. 5º; CIC 2297–2298.'],
  referencias: [
    { texto: 'Cesare Beccaria, Dos delitos e das penas (1764).' },
    { texto: 'Montesquieu, O espírito das leis (1748).' },
    { texto: 'Constituição da República Federativa do Brasil (1988), art. 5º.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a linha do tempo', 'Ler os textos indicados'],
  revisao: [['Beccaria', 'Legalidade.'], ['1804', 'Napoleão.'], ['Sete', 'Constituições brasileiras.']],
  avancado: {
    texto: `<h3>A abolição da escravidão e o direito</h3>
<p>A abolição no Brasil foi gradual em termos legais: a Lei Eusébio de Queirós (1850) proibiu o tráfico; a Lei do Ventre Livre (1871) declarou livres os filhos de escravas nascidos a partir dela; a Lei dos Sexagenários (1885) libertou os idosos; a Lei Áurea (1888) aboliu a escravidão ${tag('fato')}. Juristas e advogados abolicionistas, como Luís Gama, usaram as leis para libertar escravizados nos tribunais ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Lei nº 3.353, de 13 de maio de 1888 (Lei Áurea).' }],
    exercicios: [
      mc('A Lei do Ventre Livre é de:', ['1850', '1871', '1885', '1888'], 1, 'Filhos de escravas.'),
      mc('A Lei Áurea é de:', ['1850', '1871', '1888', '1891'], 2, 'Abolição.'),
      mc('Luís Gama foi:', ['Imperador', 'Advogado abolicionista', 'Papa', 'General'], 1, 'Tribunais.'),
      disc('Explique como o direito foi usado tanto para manter quanto para combater a escravidão no Brasil.', ['Manutenção', 'Combate', 'Exemplos', 'Juízo moral'])],
  },
}),

avaliacao('dr2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a formação do direito ocidental e os grandes autores, e duas discursivas de comparação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo e a ficha de Beccaria.</li><li>Revise as quatro leis de Tomás.</li></ul>`,
[
  disc('Mostre como uma ideia do direito romano, do direito canônico ou da Escola de Salamanca chegou ao direito brasileiro atual, com o artigo correspondente.', ['Ideia de origem', 'Transmissão', 'Artigo atual', 'Fontes']),
  disc('Compare Tomás de Aquino e Beccaria sobre a finalidade da lei e da pena, distinguindo fato histórico, interpretação e doutrina.', ['Tomás', 'Beccaria', 'Comparação', 'Distinção dos planos']),
]),
];
