// Cultura I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Cultura).
// Cultura como cultivo e como modo de vida, cultura e culto; civilização, tradição, patrimônio;
// leitura de fontes, comparação entre civilizações, trabalho de campo; descrição e juízo de valor.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cu1-1', titulo: 'O que é cultura: cultivo do espírito, modo de vida e culto', duracao: '120 min',
  aprendera: ['Distinguir o sentido clássico e o sentido antropológico de cultura', 'Explicar a etimologia comum de cultura e culto', 'Conhecer a definição de cultura da Gaudium et spes', 'Aplicar as duas noções a uma manifestação brasileira'],
  prereq: ['História e Antropologia (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Dizemos que alguém "tem cultura" e também que "cada povo tem sua cultura". São o mesmo sentido? E o que a cultura tem a ver com o culto?</p>
<h3>Cultivo do espírito</h3>
<p>Cícero, nas <em>Disputas tusculanas</em> (II, 13), comparou a alma a um campo que precisa ser cultivado e escreveu que a filosofia é o cultivo da alma (<em>cultura animi</em>) ${tag('fato')}. Nesse sentido clássico, cultura é a formação da pessoa pelo conhecimento, pela arte e pela virtude ${tag('fato')}.</p>
<h3>Modo de vida</h3>
<p>Edward Tylor, em <em>Primitive Culture</em> (1871), definiu cultura como o todo complexo que inclui conhecimento, crença, arte, moral, lei, costume e outras capacidades e hábitos adquiridos pelo homem como membro da sociedade ${tag('fato')}. Nesse sentido antropológico, todo povo tem cultura ${tag('fato')}.</p>
<h3>Cultura e culto</h3>
<p>As palavras vêm do latim <em>colere</em>, que significava cultivar, habitar e honrar ${tag('fato')}. Josef Pieper sustentou que a cultura nasce do ócio, e o ócio, do culto: o tempo livre do trabalho útil, dedicado à contemplação e à celebração ${tag('interpretacao')}.</p>
<h3>A doutrina</h3>
<p>A <em>Gaudium et spes</em> (n. 53) chama cultura a tudo aquilo com que o homem aperfeiçoa e desenvolve as múltiplas capacidades do espírito e do corpo, e reconhece a pluralidade das culturas ${tag('doutrina')}. São João Paulo II, na UNESCO (1980), afirmou que o homem vive uma vida verdadeiramente humana graças à cultura ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Cultura (sentido clássico)', 'Cultivo e formação do espírito humano.'],
    ['Cultura (sentido antropológico)', 'Modo de vida de um povo: crenças, costumes, técnicas e instituições.'],
    ['Colere', 'Verbo latino: cultivar, habitar, honrar.'],
    ['Ócio (Pieper)', 'Tempo livre do trabalho útil, aberto à contemplação.'],
    ['Culto', 'Honra prestada a Deus, especialmente na liturgia.'],
  ],
  exemplos: `<p><strong>O Círio de Nazaré com as duas noções:</strong> no sentido antropológico, é parte do modo de vida paraense — procissão, culinária, música, redes de promessa e devoção. No sentido clássico, pode-se perguntar o que forma nas pessoas: fé, gratidão, solidariedade, senso de pertença. As duas leituras são complementares; o culto está no centro da festa.</p>`,
  contexto: `<p><strong>No mundo:</strong> a UNESCO adotou em 2003 a Convenção para a Salvaguarda do Patrimônio Cultural Imaterial ${tag('fato')}. <strong>No Brasil:</strong> o Círio de Nazaré, em Belém, foi registrado como patrimônio imaterial pelo IPHAN em 2004 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os dois sentidos de cultura não se excluem', tag: 'argumento',
    premissas: ['O sentido antropológico descreve o que um povo faz e pensa.', 'O sentido clássico pergunta se esse modo de vida forma bem as pessoas.', 'Descrever e avaliar são operações diferentes que podem ser feitas sobre o mesmo objeto.'],
    conclusao: 'Logo, é possível descrever uma cultura sem preconceito e, ao mesmo tempo, perguntar pelo seu valor formativo.',
    nota: 'Confundir os dois sentidos leva ou ao elitismo ("povos sem cultura") ou ao relativismo ("nada pode ser avaliado").',
  },
  objecoes: [
    { objecao: 'Falar em "cultivo do espírito" é elitismo; toda cultura vale o mesmo.', tag: 'debate',
      resposta: 'O sentido clássico não nega que todo povo tenha cultura; pergunta o que forma melhor a pessoa. Essa pergunta existe em todas as culturas, que distinguem o sábio do tolo e o virtuoso do vicioso. Reconhecer a dignidade de todos os povos não exige renunciar a critérios de excelência.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escolha uma festa popular brasileira e descreva-a nos dois sentidos de cultura, indicando o lugar do culto quando houver.</p>`,
  fonte: {
    obra: 'Cícero, Disputas tusculanas, II, 13; Concílio Vaticano II, Gaudium et spes (1965), n. 53', link: { url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_po.html', rotulo: 'vatican.va' },
    orientacao: `<p>Em Cícero, a comparação entre a alma e o campo. Na Gaudium et spes, os dois aspectos da cultura (aperfeiçoamento pessoal e pluralidade de culturas). Compare com a definição de Tylor.</p>`,
  },
  perguntas: [
    { p: 'O que é a cultura animi em Cícero?', r: 'O cultivo da alma, que ele identifica com a filosofia.' },
    { p: 'Como Tylor definiu cultura?', r: 'Como o todo complexo de conhecimento, crença, arte, moral, lei, costume e hábitos adquiridos em sociedade.' },
    { p: 'De que verbo latino vêm cultura e culto?', r: 'De colere: cultivar, habitar, honrar.' },
  ],
  exercicios: [
    mc('A expressão cultura animi é de:', ['Tylor', 'Cícero', 'Pieper', 'Herder'], 1, 'Disputas tusculanas.'),
    mc('Primitive Culture (1871) é de:', ['Tylor', 'Boas', 'Eliot', 'Arnold'], 0, 'Sentido antropológico.'),
    mc('Segundo Pieper, a cultura nasce do:', ['Trabalho', 'Ócio enraizado no culto', 'Comércio', 'Estado'], 1, 'Muße und Kult.'),
    mc('A definição de cultura do Vaticano II está na Gaudium et spes, n.:', ['1', '53', '100', '76'], 1, 'Capítulo sobre a cultura.'),
    mc('O Círio de Nazaré foi registrado pelo IPHAN em:', ['1937', '1988', '2004', '2020'], 2, 'Patrimônio imaterial.'),
    disc('Descreva uma festa popular brasileira nos dois sentidos de cultura, indicando o lugar do culto.', ['Sentido antropológico', 'Sentido clássico', 'Culto', 'Fontes']),
  ],
  resumo: ['Cícero: cultura animi.', 'Tylor (1871): modo de vida.', 'Colere: cultivar, habitar, honrar.', 'Pieper: ócio e culto.', 'GS 53; João Paulo II na UNESCO (1980).'],
  referencias: [
    { texto: 'Cícero, Disputas tusculanas.' },
    { texto: 'Edward B. Tylor, Primitive Culture (1871).' },
    { texto: 'Concílio Vaticano II, Gaudium et spes (1965), nn. 53–62.', link: { url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_po.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição da festa', 'Ler os textos indicados'],
  revisao: [['Cícero', 'Cultivo da alma.'], ['Tylor', 'Todo complexo.'], ['GS 53', 'Definição conciliar.']],
  avancado: {
    texto: `<h3>Kultur e Zivilisation</h3>
<p>No pensamento alemão dos séculos XIX e XX, opôs-se muitas vezes <em>Kultur</em> (vida espiritual, arte, filosofia, religião) e <em>Zivilisation</em> (técnica, conforto, organização material) ${tag('fato')}. Norbert Elias (<em>O processo civilizador</em>, 1939) estudou a origem dessa oposição e a história dos costumes à mesa, da higiene e da contenção da violência ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Norbert Elias, O processo civilizador (1939).' }],
    exercicios: [
      mc('Na oposição alemã, Zivilisation designa sobretudo:', ['Religião', 'Técnica e organização material', 'Poesia', 'Filosofia'], 1, 'Kultur e Zivilisation.'),
      mc('O processo civilizador é de:', ['Elias', 'Spengler', 'Weber', 'Freud'], 0, '1939.'),
      mc('Elias estudou, entre outros, os costumes:', ['À mesa', 'Astronômicos', 'Agrícolas apenas', 'Militares apenas'], 0, 'Boas maneiras.'),
      disc('Discuta se a oposição entre cultura e civilização ajuda a entender o Brasil atual.', ['Conceitos', 'Exemplo brasileiro', 'Limites', 'Conclusão'])],
  },
}),

aula({
  id: 'cu1-2', titulo: 'Vocabulário da cultura: civilização, tradição, cultura erudita, popular e de massa, patrimônio', duracao: '150 min',
  aprendera: ['Definir civilização, tradição, costume e instituição', 'Distinguir cultura erudita, popular e de massa', 'Distinguir patrimônio material e imaterial', 'Conhecer os instrumentos legais de proteção no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>"Tradição", "folclore", "cultura pop", "patrimônio": sem precisão, essas palavras viram rótulos de elogio ou de desprezo.</p>
<h3>Conceitos básicos</h3>
<ul>
<li><strong>Civilização</strong>: conjunto amplo de culturas aparentadas, com instituições, escrita e cidades, como a civilização greco-romana ${tag('fato')}.</li>
<li><strong>Tradição</strong>: do latim <em>tradere</em>, entregar; o que é transmitido de geração em geração ${tag('fato')}.</li>
<li><strong>Costume</strong>: prática repetida e aceita num grupo ${tag('fato')}.</li>
<li><strong>Instituição</strong>: forma estável de organizar a vida comum, como família, escola, igreja, tribunal ${tag('fato')}.</li>
</ul>
<h3>Erudita, popular e de massa</h3>
<p>Cultura erudita é a transmitida por escolas, academias e tradições letradas; popular, a transmitida pela convivência, muitas vezes oralmente; de massa, a produzida industrialmente para grande público pelos meios de comunicação ${tag('fato')}. As fronteiras são porosas: Villa-Lobos usou temas populares em obras eruditas ${tag('fato')}.</p>
<h3>Patrimônio</h3>
<p>A Constituição de 1988 define o patrimônio cultural brasileiro como os bens de natureza material e imaterial portadores de referência à identidade, à ação e à memória dos grupos formadores da sociedade (art. 216) ${tag('fato')}. O tombamento, criado pelo Decreto-Lei nº 25/1937, protege bens materiais; o registro, criado pelo Decreto nº 3.551/2000, reconhece bens imateriais nos livros dos Saberes, das Celebrações, das Formas de Expressão e dos Lugares ${tag('fato')}.</p>`,
  vocabulario: [
    ['Tradição', 'O que se transmite de geração em geração (tradere).'],
    ['Cultura popular', 'Cultura transmitida pela convivência, muitas vezes oralmente.'],
    ['Cultura de massa', 'Cultura produzida industrialmente para grande público.'],
    ['Tombamento', 'Proteção legal de um bem material (DL 25/1937).'],
    ['Registro', 'Reconhecimento de um bem imaterial (Decreto 3.551/2000).'],
  ],
  exemplos: `<p><strong>Classificando bens:</strong> o centro histórico de Ouro Preto é patrimônio material, tombado; o ofício das paneleiras de Goiabeiras, no Espírito Santo, é patrimônio imaterial, registrado no Livro dos Saberes; o frevo, no Livro das Formas de Expressão; o Círio de Nazaré, no das Celebrações.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Convenção do Patrimônio Mundial da UNESCO é de 1972 ${tag('fato')}. <strong>No Brasil:</strong> Ouro Preto foi a primeira cidade brasileira inscrita na Lista do Patrimônio Mundial, em 1980 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a tradição não se opõe à criatividade', tag: 'argumento',
    premissas: ['Ninguém cria do nada: toda obra nova usa uma língua, formas e técnicas recebidas.', 'A tradição transmite esse repertório de geração em geração.', 'Grandes inovadores dominaram a tradição antes de transformá-la.'],
    conclusao: 'Logo, a tradição é condição da criatividade, e não seu contrário.',
    nota: 'T. S. Eliot desenvolveu esse argumento em "Tradição e talento individual" (1919).',
  },
  objecoes: [
    { objecao: 'Cultura de massa não é cultura.', tag: 'debate',
      resposta: 'A cultura de massa é parte do modo de vida contemporâneo e, no sentido antropológico, é cultura. A pergunta pelo seu valor formativo é legítima e foi feita por críticos como Adorno e Eliot. Há na cultura de massa obras de valor e produtos descartáveis; julgar exige critérios, não rótulos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um glossário de 20 termos de cultura com um exemplo brasileiro para cada, indicando, quando for o caso, o livro de registro ou o tombamento.</p>`,
  fonte: {
    obra: 'Constituição de 1988, arts. 215–216; Decreto-Lei nº 25/1937; Decreto nº 3.551/2000', link: { url: 'https://www.gov.br/iphan', rotulo: 'IPHAN' },
    orientacao: `<p>No art. 216, os tipos de bens do patrimônio. No Decreto-Lei 25, o que é tombamento. No Decreto 3.551, os quatro livros de registro.</p>`,
  },
  perguntas: [
    { p: 'De que verbo vem "tradição"?', r: 'De tradere, entregar.' },
    { p: 'Quais os livros de registro do patrimônio imaterial?', r: 'Saberes, Celebrações, Formas de Expressão e Lugares.' },
    { p: 'Que lei criou o tombamento?', r: 'O Decreto-Lei nº 25/1937.' },
  ],
  exercicios: [
    mc('O patrimônio cultural brasileiro é definido no artigo:', ['5º', '170', '216', '225'], 2, 'CF 1988.'),
    mc('O registro de bens imateriais foi criado em:', ['1937', '1988', '2000', '2016'], 2, 'Decreto 3.551.'),
    mc('O frevo está registrado no Livro das:', ['Celebrações', 'Formas de Expressão', 'Saberes', 'Lugares'], 1, 'Patrimônio imaterial.'),
    mc('Ouro Preto entrou na Lista do Patrimônio Mundial em:', ['1937', '1972', '1980', '2004'], 2, 'UNESCO.'),
    mc('"Tradição e talento individual" é de:', ['Arnold', 'Eliot', 'Pieper', 'Dawson'], 1, '1919.'),
    disc('Apresente o glossário de 20 termos de cultura com exemplos brasileiros e o instrumento de proteção quando houver.', ['20 termos', 'Definições corretas', 'Exemplos brasileiros', 'Proteção indicada']),
  ],
  resumo: ['Civilização, tradição, costume, instituição.', 'Erudita, popular, de massa.', 'CF art. 216.', 'Tombamento (DL 25/1937) e registro (Dec. 3.551/2000).', 'Eliot: tradição e criatividade.'],
  referencias: [
    { texto: 'Constituição da República Federativa do Brasil (1988), arts. 215–216.' },
    { texto: 'Decreto nº 3.551, de 2000.' },
    { texto: 'T. S. Eliot, "Tradição e talento individual" (1919).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler as normas indicadas'],
  revisao: [['Tradere', 'Entregar.'], ['DL 25/1937', 'Tombamento.'], ['Dec. 3.551/2000', 'Registro imaterial.']],
  avancado: {
    texto: `<h3>Mário de Andrade e o anteprojeto do patrimônio</h3>
<p>Em 1936, Mário de Andrade redigiu um anteprojeto para o serviço de patrimônio que já incluía manifestações populares, como danças, cantos e lendas ${tag('fato')}. A lei de 1937 privilegiou o patrimônio edificado; a proteção ampla do imaterial veio só com a Constituição de 1988 e o Decreto de 2000 ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Mário de Andrade, anteprojeto para o Serviço do Patrimônio Artístico Nacional (1936).' }],
    exercicios: [
      mc('O anteprojeto de Mário de Andrade é de:', ['1922', '1936', '1988', '2000'], 1, 'Patrimônio.'),
      mc('A lei de 1937 privilegiou o patrimônio:', ['Imaterial', 'Edificado', 'Natural', 'Digital'], 1, 'Tombamento.'),
      mc('A proteção ampla do imaterial veio com:', ['A lei de 1937', 'A Constituição de 1988 e o Decreto de 2000', 'A Convenção de 1972', 'Nada'], 1, 'Ampliação.'),
      disc('Compare o anteprojeto de Mário de Andrade com o Decreto-Lei 25/1937 e explique a diferença.', ['Anteprojeto', 'Decreto-Lei', 'Diferença', 'Consequência'])],
  },
}),

aula({
  id: 'cu1-3', titulo: 'Métodos: leitura de obras e fontes, comparação entre civilizações e trabalho de campo', duracao: '150 min',
  aprendera: ['Ler uma obra como documento de cultura', 'Aplicar a comparação entre civilizações com cautela', 'Planejar trabalho de campo e entrevista de história oral', 'Usar o inventário de referências culturais'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como estudar uma cultura sem inventar o que ela significa? Pelas obras, pela comparação e pelo contato direto com quem a vive.</p>
<h3>Obras e fontes</h3>
<p>Obras literárias, artísticas, religiosas e jurídicas são documentos de uma cultura: perguntam-se autor, data, destinatário, gênero e contexto antes de interpretar ${tag('fato')}. A leitura iconográfica e iconológica, estudada em Simbologia, aplica-se a imagens ${tag('fato')}.</p>
<h3>Comparação</h3>
<p>Comparar civilizações, como fizeram Spengler e Toynbee, revela semelhanças de processos, mas exige definir as unidades comparadas e evitar forçar os casos num esquema ${tag('argumento')}.</p>
<h3>Trabalho de campo</h3>
<p>Observação participante, entrevistas e história oral registram cultura viva ${tag('fato')}. A história oral exige roteiro, consentimento do entrevistado, gravação fiel e transcrição ${tag('fato')}. O IPHAN usa o Inventário Nacional de Referências Culturais (INRC) para identificar bens culturais com as comunidades ${tag('fato')}.</p>`,
  vocabulario: [
    ['Fonte', 'Documento ou testemunho usado para conhecer o passado ou uma cultura.'],
    ['Observação participante', 'Pesquisa em que o observador convive com o grupo estudado.'],
    ['História oral', 'Registro sistemático de memórias por entrevistas.'],
    ['Consentimento informado', 'Concordância do entrevistado, sabendo o uso que será feito.'],
    ['INRC', 'Inventário Nacional de Referências Culturais, do IPHAN.'],
  ],
  exemplos: `<p><strong>Um roteiro de entrevista:</strong> para estudar uma festa de padroeiro, perguntar desde quando o entrevistado participa, quem organiza, como era antes, que mudanças percebe, que sentido tem para ele. Registrar nome (se autorizado), data e local; não induzir respostas; transcrever fielmente; separar o que o entrevistado disse do que o pesquisador interpreta.</p>`,
  contexto: `<p><strong>No mundo:</strong> arquivos de história oral foram criados em universidades a partir de meados do século XX ${tag('fato')}. <strong>No Brasil:</strong> o Centro de Pesquisa e Documentação de História Contemporânea do Brasil (CPDOC), da FGV, mantém importante acervo de história oral ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que separar o que o informante diz do que o pesquisador interpreta', tag: 'argumento',
    premissas: ['O relato do informante é dado da pesquisa.', 'A interpretação do pesquisador é hipótese sobre esse dado.', 'Misturá-los impede outros de verificar se a interpretação se apoia nos dados.'],
    conclusao: 'Logo, o registro deve distinguir claramente relato e interpretação.',
    nota: 'O mesmo vale para a leitura de obras: o que o texto diz e o que inferimos dele.',
  },
  objecoes: [
    { objecao: 'Quem é de fora nunca entende uma cultura; só os de dentro podem estudá-la.', tag: 'debate',
      resposta: 'O olhar de dentro tem acesso a sentidos que o de fora pode não perceber; o de fora pode notar o que os de dentro tomam como natural. Os dois se completam. Por isso o método combina convivência, escuta respeitosa e confronto das interpretações com os próprios membros da cultura.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: registre e analise uma manifestação de cultura popular local com observação, uma entrevista (com consentimento) e fontes escritas, separando relato e interpretação.</p>`,
  fonte: {
    obra: 'IPHAN, Inventário Nacional de Referências Culturais: manual de aplicação (2000); CPDOC/FGV, acervo de história oral', link: { url: 'https://www.gov.br/iphan', rotulo: 'IPHAN' },
    orientacao: `<p>No manual do INRC, as categorias de bens e as fichas. No CPDOC, observe como as entrevistas são apresentadas, com dados do entrevistado e transcrição.</p>`,
  },
  perguntas: [
    { p: 'O que se pergunta a uma obra antes de interpretá-la?', r: 'Autor, data, destinatário, gênero e contexto.' },
    { p: 'O que exige a história oral?', r: 'Roteiro, consentimento, gravação fiel e transcrição.' },
    { p: 'O que é o INRC?', r: 'O Inventário Nacional de Referências Culturais do IPHAN.' },
  ],
  exercicios: [
    mc('A pesquisa em que o observador convive com o grupo é a:', ['Survey', 'Observação participante', 'Estatística', 'Experimento'], 1, 'Campo.'),
    mc('Antes da entrevista é preciso obter:', ['Pagamento', 'Consentimento', 'Nada', 'Autorização policial'], 1, 'Ética.'),
    mc('Um grande acervo de história oral no Brasil é o do:', ['CPDOC/FGV', 'INPE', 'TSE', 'IBGE apenas'], 0, 'Fundação Getulio Vargas.'),
    mc('Comparar civilizações exige:', ['Forçar os casos num esquema', 'Definir as unidades e respeitar as diferenças', 'Ignorar datas', 'Só opinião'], 1, 'Cautela.'),
    mc('Misturar relato e interpretação:', ['Melhora a pesquisa', 'Impede a verificação', 'É obrigatório', 'Não importa'], 1, 'Método.'),
    disc('Entregue o registro de uma manifestação de cultura popular com observação, entrevista e fontes, separando relato e interpretação.', ['Observação', 'Entrevista com consentimento', 'Fontes', 'Relato separado da interpretação']),
  ],
  resumo: ['Obras como documentos.', 'Comparação com cautela.', 'Observação participante e história oral.', 'Consentimento e fidelidade.', 'INRC do IPHAN.'],
  referencias: [
    { texto: 'IPHAN, Inventário Nacional de Referências Culturais: manual de aplicação (2000).' },
    { texto: 'Verena Alberti, Manual de história oral (2004).' },
    { texto: 'Clifford Geertz, A interpretação das culturas (1973).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o registro de campo', 'Ler os textos indicados'],
  revisao: [['Fonte', 'Autor, data, gênero.'], ['História oral', 'Consentimento.'], ['INRC', 'IPHAN.']],
  avancado: {
    texto: `<h3>Descrição densa</h3>
<p>Clifford Geertz (<em>A interpretação das culturas</em>, 1973) propôs a "descrição densa": não basta registrar um gesto, é preciso entender o sentido que ele tem para quem o faz — a diferença entre um tique e uma piscadela de cumplicidade ${tag('fato')}. Críticos apontam o risco de o pesquisador projetar seus próprios sentidos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Clifford Geertz, A interpretação das culturas (1973), cap. 1.' }],
    exercicios: [
      mc('A "descrição densa" é de:', ['Geertz', 'Tylor', 'Boas', 'Lévi-Strauss'], 0, '1973.'),
      mc('O exemplo clássico de Geertz contrasta tique e:', ['Piscadela', 'Sorriso', 'Aperto de mão', 'Grito'], 0, 'Sentido.'),
      mc('Um risco da descrição densa é:', ['Excesso de números', 'Projeção dos sentidos do pesquisador', 'Falta de campo', 'Nenhum'], 1, 'Crítica.'),
      disc('Faça uma descrição densa de um gesto ou rito de uma festa brasileira.', ['Gesto descrito', 'Sentidos para os participantes', 'Fontes', 'Cautela'])],
  },
}),

aula({
  id: 'cu1-4', titulo: 'Descrever e julgar: etnocentrismo, empatia metodológica e critérios de valor', duracao: '120 min',
  aprendera: ['Definir etnocentrismo e reconhecê-lo', 'Explicar a empatia metodológica', 'Distinguir relativismo metodológico e normativo', 'Aplicar a dignidade da pessoa como critério de juízo'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Estudar outra cultura exige não julgá-la apressadamente. Mas tudo deve ser aceito? Infanticídio ritual, escravidão, sacrifícios humanos também?</p>
<h3>Etnocentrismo</h3>
<p>Etnocentrismo é julgar outras culturas pelos padrões da própria, como se fossem os únicos válidos ${tag('fato')}. Montaigne, no ensaio "Dos canibais" (1580), já ironizava os europeus que chamavam de bárbaro tudo o que não era seu costume ${tag('fato')}.</p>
<h3>Empatia metodológica</h3>
<p>Para entender uma prática, o pesquisador suspende provisoriamente o juízo e procura o sentido que ela tem para quem a vive ${tag('argumento')}. É o chamado relativismo metodológico ${tag('fato')}.</p>
<h3>Relativismo normativo</h3>
<p>Coisa diferente é afirmar que nenhuma prática pode ser julgada, porque todo valor seria relativo à cultura: é o relativismo normativo ${tag('fato')}. Essa tese impediria condenar a escravidão ou a perseguição de minorias em qualquer cultura, inclusive na própria ${tag('argumento')}.</p>
<h3>Critério</h3>
<p>A doutrina social da Igreja afirma que a dignidade da pessoa humana e os direitos que dela decorrem valem para todos os povos e são critério para julgar as culturas, que devem ser respeitadas e, ao mesmo tempo, purificadas do que contraria essa dignidade (Gaudium et spes, 58; <em>Fides et ratio</em>, 71) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Etnocentrismo', 'Julgar outras culturas pelos padrões da própria.'],
    ['Empatia metodológica', 'Busca do sentido de uma prática para quem a vive.'],
    ['Relativismo metodológico', 'Suspensão provisória do juízo para compreender.'],
    ['Relativismo normativo', 'Tese de que nenhuma prática pode ser julgada fora de sua cultura.'],
    ['Dignidade da pessoa', 'Valor de cada ser humano como fim em si, fonte de direitos.'],
  ],
  exemplos: `<p><strong>Os três passos:</strong> diante de uma prática estranha, (1) descrever com precisão o que se faz; (2) compreender o sentido para os participantes; (3) avaliar com critérios explícitos, como a dignidade das pessoas envolvidas. Saltar o passo 2 é etnocentrismo; parar no passo 2 por princípio é relativismo normativo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Declaração Universal dos Direitos Humanos (1948) afirma direitos válidos para todos os povos ${tag('fato')}. <strong>No Brasil:</strong> a Constituição de 1988 reconhece aos indígenas sua organização social, costumes, línguas, crenças e tradições (art. 231) e garante a todos os direitos fundamentais (art. 5º) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o relativismo normativo se contradiz', tag: 'argumento',
    premissas: ['O relativismo normativo afirma que nenhum valor vale para todas as culturas.', 'Mas defende, como valor para todas, a tolerância entre culturas.', 'Logo, afirma ao menos um valor universal enquanto nega que existam.'],
    conclusao: 'Portanto, o relativismo normativo é autocontraditório.',
    nota: 'O argumento não refuta o relativismo metodológico, que é uma regra de pesquisa, e não uma tese sobre valores.',
  },
  objecoes: [
    { objecao: 'Usar a dignidade da pessoa como critério é impor a cultura ocidental.', tag: 'debate',
      resposta: 'A ideia de dignidade foi formulada com força na tradição judaico-cristã, mas tem correspondentes em muitas culturas, e a Declaração de 1948 foi redigida por pessoas de várias tradições. Além disso, os primeiros a invocar a dignidade contra práticas opressivas são muitas vezes membros da própria cultura que as sofrem.' },
  ],
  aplicacao: `<p>Escolha uma prática cultural controversa (brasileira ou estrangeira) e aplique os três passos: descrição, compreensão e avaliação com critério explícito.</p>`,
  fonte: {
    obra: 'Michel de Montaigne, "Dos canibais", Ensaios I, 31 (1580); Concílio Vaticano II, Gaudium et spes (1965), n. 58', link: { url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_po.html', rotulo: 'vatican.va' },
    orientacao: `<p>Em Montaigne, a ironia contra o etnocentrismo e as informações sobre os tupinambás do Brasil. Na Gaudium et spes, a relação entre Evangelho e culturas.</p>`,
  },
  perguntas: [
    { p: 'O que é etnocentrismo?', r: 'Julgar outras culturas pelos padrões da própria como únicos válidos.' },
    { p: 'Qual a diferença entre relativismo metodológico e normativo?', r: 'O metodológico suspende o juízo para compreender; o normativo nega que se possa julgar.' },
    { p: 'De que povo falava Montaigne em "Dos canibais"?', r: 'Dos tupinambás do Brasil.' },
  ],
  exercicios: [
    mc('"Dos canibais" é de:', ['Montaigne', 'Rousseau', 'Voltaire', 'Pascal'], 0, '1580.'),
    mc('Suspender o juízo para compreender é relativismo:', ['Normativo', 'Metodológico', 'Moral', 'Político'], 1, 'Regra de pesquisa.'),
    mc('O relativismo normativo é autocontraditório porque:', ['Usa dados', 'Afirma um valor universal ao negá-los', 'É antigo', 'É religioso'], 1, 'Tolerância universal.'),
    mc('O reconhecimento dos costumes indígenas está na CF, art.:', ['5º', '216', '225', '231'], 3, 'Povos indígenas.'),
    mc('Para a Igreja, as culturas devem ser:', ['Ignoradas', 'Respeitadas e purificadas do que contraria a dignidade', 'Substituídas', 'Imitadas sem crítica'], 1, 'GS 58.'),
    disc('Aplique os três passos (descrição, compreensão, avaliação) a uma prática cultural controversa.', ['Descrição', 'Compreensão', 'Avaliação com critério', 'Fontes']),
  ],
  resumo: ['Etnocentrismo; Montaigne.', 'Empatia e relativismo metodológico.', 'Relativismo normativo autocontraditório.', 'Dignidade como critério; GS 58; FR 71.', 'CF arts. 5º e 231.'],
  referencias: [
    { texto: 'Michel de Montaigne, Ensaios (1580).' },
    { texto: 'Concílio Vaticano II, Gaudium et spes (1965), n. 58.', link: { url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_po.html', rotulo: 'vatican.va' } },
    { texto: 'São João Paulo II, Fides et ratio (1998), nn. 70–72.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da prática', 'Ler os textos indicados'],
  revisao: [['Etnocentrismo', 'Padrão próprio como único.'], ['Metodológico', 'Compreender.'], ['GS 58', 'Respeitar e purificar.']],
  avancado: {
    texto: `<h3>A Declaração de 1947 da Associação Antropológica Americana</h3>
<p>Em 1947, a Associação Antropológica Americana enviou à ONU uma declaração que advertia contra uma declaração de direitos baseada só em valores ocidentais ${tag('fato')}. Décadas depois, a própria associação reviu sua posição e passou a defender os direitos humanos ${tag('fato')}. O episódio mostra a tensão entre respeito às culturas e universalidade dos direitos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'American Anthropological Association, "Statement on Human Rights" (1947).' }],
    exercicios: [
      mc('A declaração da Associação Antropológica Americana sobre direitos é de:', ['1919', '1947', '1968', '2001'], 1, 'Antes da Declaração Universal.'),
      mc('A associação depois:', ['Manteve a posição', 'Reviu a posição e passou a defender os direitos humanos', 'Foi extinta', 'Proibiu a ONU'], 1, 'Revisão.'),
      mc('O episódio ilustra a tensão entre:', ['Economia e clima', 'Respeito às culturas e universalidade dos direitos', 'Ciência e arte', 'Leste e Oeste'], 1, 'Interpretação.'),
      disc('Discuta a tensão entre respeito às culturas e universalidade dos direitos com um exemplo brasileiro.', ['Tensão', 'Exemplo', 'Critério', 'Conclusão'])],
  },
}),

avaliacao('cu1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os sentidos de cultura, o vocabulário e o patrimônio, os métodos e a distinção entre descrição e juízo, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário e o registro de campo.</li><li>Revise os três passos: descrever, compreender, avaliar.</li></ul>`,
[
  disc('Escolha um bem do patrimônio cultural brasileiro e analise-o nos dois sentidos de cultura, com o instrumento legal de proteção e as fontes.', ['Bem escolhido', 'Dois sentidos de cultura', 'Proteção legal', 'Fontes']),
  disc('Explique por que o estudo das culturas exige empatia metodológica e, ao mesmo tempo, critérios de juízo, com um exemplo e a doutrina da Igreja.', ['Empatia metodológica', 'Critério de juízo', 'Exemplo', 'Doutrina']),
]),
];
