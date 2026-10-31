// História da Arte V — aplicações, investigação e avaliação integradora (etapas 9 a 11 do percurso de História da Arte).
// Ler uma igreja; visitar um museu; patrimônio cultural e tombamento; investigação de quatro semanas; avaliação integradora.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ha5-1', titulo: 'Ler uma igreja: espaço, imagens e liturgia', duracao: '150 min',
  aprendera: ['Percorrer uma igreja com roteiro de leitura', 'Identificar programa iconográfico', 'Relacionar espaço e liturgia', 'Preparar uma visita guiada'],
  prereq: ['História da Arte IV (módulo HA4)'],
  explicacao: `
<h3>O problema</h3>
<p>Muitos entram numa igreja histórica e veem apenas "muito ouro" ou "muitos santos". Como ler o que ela diz?</p>
<h3>Um roteiro</h3>
<p>Começa-se pelo exterior: implantação, fachada, torres, portal ${tag('interpretacao')}. No interior, observa-se o eixo da entrada ao altar, a nave, os altares laterais, o arco-cruzeiro, a capela-mor e o retábulo principal ${tag('interpretacao')}. Depois, os forros, os púlpitos, a pia batismal e o coro ${tag('interpretacao')}.</p>
<h3>Programa iconográfico</h3>
<p>Uma igreja costuma ter um programa: um conjunto de imagens organizado em torno do padroeiro, de mistérios da fé ou da ordem religiosa responsável ${tag('fato')}. Na igreja de uma ordem franciscana, por exemplo, aparecem São Francisco, os estigmas e santos da ordem ${tag('fato')}. Identificar o programa exige conhecer os santos, seus atributos e as devoções da época ${tag('interpretacao')}.</p>
<h3>Espaço e liturgia</h3>
<p>O espaço serve à celebração: o altar como centro, o ambão ou púlpito para a Palavra, a pia batismal perto da entrada, o sacrário em lugar digno ${tag('doutrina')}. O Catecismo trata dos lugares da celebração (CIC 1179–1186) ${tag('doutrina')}.</p>
<h3>Respeito</h3>
<p>Visitar uma igreja é entrar num lugar de culto: silêncio, roupa adequada e atenção aos horários de celebração são parte da visita ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Programa iconográfico', 'Conjunto organizado de imagens de um edifício.'],
    ['Arco-cruzeiro', 'Arco que separa a nave da capela-mor.'],
    ['Capela-mor', 'Espaço do altar principal.'],
    ['Ambão', 'Lugar da proclamação da Palavra.'],
    ['Sacrário', 'Lugar onde se guarda a Eucaristia.'],
  ],
  exemplos: `<p><strong>Uma igreja do Carmo:</strong> no retábulo-mor, Nossa Senhora do Carmo entrega o escapulário; nos altares laterais, santos carmelitas como Santa Teresa e São João da Cruz; no forro, a glorificação de Maria. O programa inteiro fala da devoção carmelita. Saber isso transforma a visita.</p>`,
  contexto: `<p><strong>No mundo:</strong> muitas catedrais oferecem roteiros e guias que explicam o programa iconográfico ${tag('fato')}. <strong>No Brasil:</strong> igrejas de ordens terceiras (franciscanas e carmelitas) em Minas, na Bahia e em Pernambuco têm programas iconográficos ricos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que uma igreja é um texto a ser lido', tag: 'argumento',
    premissas: ['Cada imagem e lugar de uma igreja foi pensado com uma função e um sentido.', 'O conjunto forma um programa coerente ligado à fé e à devoção.', 'Ler esse programa exige vocabulário, conhecimento dos textos e atenção ao espaço.'],
    conclusao: 'Logo, uma igreja pode ser lida como um texto visual da fé.',
    nota: 'Essa leitura serve tanto ao historiador quanto ao fiel em oração.',
  },
  objecoes: [
    { objecao: 'Igrejas são para rezar, não para estudar.', tag: 'argumento',
      resposta: 'As igrejas foram feitas para o culto, mas suas imagens foram pensadas para instruir e mover à oração. Conhecê-las melhor ajuda a rezar melhor. O estudo respeitoso serve à finalidade do lugar.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: prepare e conduza a visita a uma igreja histórica de sua região, com roteiro escrito (exterior, eixo, altares, programa iconográfico, espaço litúrgico).</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 1179–1186 (lugares da celebração); Concílio Vaticano II, Sacrosanctum Concilium, nn. 122–128', link: { url: 'https://www.vatican.va', rotulo: 'Documentos oficiais da Santa Sé' },
    orientacao: `<p>Identifique os lugares da celebração descritos no Catecismo e procure-os na igreja visitada.</p>`,
  },
  perguntas: [
    { p: 'O que é programa iconográfico?', r: 'O conjunto organizado de imagens de um edifício.' },
    { p: 'O que separa a nave da capela-mor?', r: 'O arco-cruzeiro.' },
    { p: 'Onde o Catecismo trata dos lugares da celebração?', r: 'Nos §§ 1179–1186.' },
  ],
  exercicios: [
    mc('O espaço do altar principal é a:', ['Nave', 'Capela-mor', 'Torre', 'Sacristia'], 1, 'Partes.'),
    mc('Numa igreja carmelita, espera-se encontrar:', ['Santa Teresa', 'Calvino', 'Buda', 'Zeus'], 0, 'Programa.'),
    mc('O lugar da proclamação da Palavra é o:', ['Sacrário', 'Ambão', 'Batistério', 'Coro'], 1, 'Liturgia.'),
    mc('Os lugares da celebração estão no CIC:', ['1179–1186', '2229', '1883', '159'], 0, 'Catecismo.'),
    mc('Visitar uma igreja exige:', ['Pressa', 'Silêncio e respeito', 'Fotos com flash sempre', 'Nada'], 1, 'Respeito.'),
    disc('Prepare e conduza a visita a uma igreja histórica com roteiro escrito.', ['Exterior', 'Interior', 'Programa', 'Liturgia']),
  ],
  resumo: ['Roteiro: exterior, eixo, altares, forros.', 'Programa iconográfico.', 'Espaço e liturgia (CIC 1179–1186).', 'Ordens terceiras no Brasil.', 'Respeito ao lugar de culto.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1179–1186.', livro: 'cic' },
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963).' },
    { texto: 'Jacopo de Varazze, Legenda Áurea (século XIII).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o roteiro da visita', 'Ler as fontes indicadas'],
  revisao: [['Programa', 'Imagens organizadas.'], ['Arco-cruzeiro', 'Separação.'], ['CIC 1179', 'Lugares.']],
  avancado: {
    texto: `<h3>Atributos dos santos</h3>
<p>Os atributos identificam os santos: as chaves para São Pedro, a espada para São Paulo, a grelha para São Lourenço, o leão para São Jerônimo, as flechas para São Sebastião ${tag('fato')}. Esses atributos vêm de textos — Escritura, atas de martírio, vidas de santos ${tag('fato')}. Conhecê-los é a base da leitura iconográfica ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Jacopo de Varazze, Legenda Áurea (século XIII).' }],
    exercicios: [
      mc('As chaves identificam:', ['São Paulo', 'São Pedro', 'São Jorge', 'São José'], 1, 'Atributo.'),
      mc('A grelha identifica:', ['São Lourenço', 'São Sebastião', 'São Jerônimo', 'Santo Antônio'], 0, 'Martírio.'),
      mc('As flechas identificam:', ['São Sebastião', 'São Lourenço', 'São Pedro', 'São João'], 0, 'Martírio.'),
      disc('Monte uma tabela com dez santos de sua igreja, seus atributos e a fonte de cada atributo.', ['Santos', 'Atributos', 'Fontes', 'Precisão'])],
  },
}),

aula({
  id: 'ha5-2', titulo: 'Visitar um museu: olhar, perguntar e aprender', duracao: '150 min',
  aprendera: ['Planejar uma visita a um museu', 'Observar obras com método', 'Ler etiquetas e textos críticos com atenção', 'Registrar a visita para estudo'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Em museus, muitos passam segundos diante de cada obra e saem cansados sem lembrar de nada. Como visitar para aprender?</p>
<h3>Antes</h3>
<p>Escolha poucas salas ou obras, informe-se sobre o acervo e defina uma pergunta: um período, um tema, uma técnica ${tag('interpretacao')}.</p>
<h3>Durante</h3>
<p>Diante de uma obra, olhe primeiro sem ler a etiqueta: o que se vê, como está feita, o que chama a atenção ${tag('interpretacao')}. Depois leia a etiqueta (autor, data, técnica, procedência) e compare com sua observação ${tag('interpretacao')}. Observar devagar poucas obras ensina mais que ver muitas depressa ${tag('argumento')}.</p>
<h3>Etiquetas e textos</h3>
<p>Etiquetas informam dados técnicos; textos de parede trazem interpretações dos curadores ${tag('fato')}. Essas interpretações podem ser excelentes ou parciais; leia-as como hipóteses a avaliar ${tag('interpretacao')}.</p>
<h3>Depois</h3>
<p>Registre num caderno: obras vistas, descrições, perguntas que surgiram, fontes a consultar ${tag('interpretacao')}. Fotografias ajudam, se permitidas, mas não substituem a descrição escrita ${tag('argumento')}.</p>
<h3>Museus online</h3>
<p>Muitos museus disponibilizam acervos digitalizados em alta resolução, o que permite observar detalhes ${tag('fato')}. A experiência digital complementa, mas não substitui, a presença diante da obra, com sua escala e materialidade ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Acervo', 'Conjunto de obras de um museu.'],
    ['Curadoria', 'Seleção e interpretação das obras numa exposição.'],
    ['Etiqueta', 'Texto com dados técnicos da obra.'],
    ['Procedência', 'Histórico de propriedade e origem de uma obra.'],
    ['Caderno de visita', 'Registro escrito das observações.'],
  ],
  exemplos: `<p><strong>Dez minutos com uma obra:</strong> no primeiro minuto, a impressão geral; do segundo ao quinto, percorra a composição, a luz, os detalhes; no sexto, leia a etiqueta; do sétimo ao nono, compare e faça perguntas; no décimo, escreva três frases. Esse exercício simples muda a forma de ver.</p>`,
  contexto: `<p><strong>No mundo:</strong> os Museus Vaticanos guardam uma das maiores coleções de arte do mundo ${tag('fato')}. <strong>No Brasil:</strong> o Museu Nacional de Belas Artes, o MASP e museus de arte sacra em Salvador, Ouro Preto e São Paulo reúnem obras importantes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ver pouco e bem é melhor que ver muito e mal', tag: 'argumento',
    premissas: ['A atenção é limitada e se cansa rapidamente.', 'Observar com calma revela detalhes, relações e sentidos que o olhar apressado perde.', 'O que se observa com atenção é melhor lembrado.'],
    conclusao: 'Logo, uma visita produtiva concentra-se em poucas obras observadas com método.',
    nota: 'É a aplicação, ao museu, do princípio da contemplação.',
  },
  objecoes: [
    { objecao: 'Para quem não é especialista, museus de arte são inacessíveis.', tag: 'argumento',
      resposta: 'O método de observar, descrever e perguntar está ao alcance de todos, e muitos museus oferecem visitas mediadas e materiais educativos. O vocabulário aprendido neste percurso basta para uma visita rica.' },
  ],
  aplicacao: `<p>Visite um museu (presencialmente ou pelo acervo online), escolha três obras, observe cada uma por dez minutos seguindo o método e registre suas observações num caderno de visita.</p>`,
  fonte: {
    obra: 'Acervo digital de um museu (por exemplo, Museus Vaticanos ou Museu Nacional de Belas Artes)', link: null,
    orientacao: `<p>Escolha uma obra em alta resolução, observe detalhes ampliados e compare com a etiqueta e o texto do museu.</p>`,
  },
  perguntas: [
    { p: 'Por que olhar antes de ler a etiqueta?', r: 'Para observar sem condicionamento e depois comparar.' },
    { p: 'O que é curadoria?', r: 'A seleção e interpretação das obras numa exposição.' },
    { p: 'O acervo digital substitui a visita presencial?', r: 'Não; complementa, mas falta a escala e a materialidade.' },
  ],
  exercicios: [
    mc('O histórico de propriedade de uma obra é a:', ['Curadoria', 'Procedência', 'Etiqueta', 'Técnica'], 1, 'Origem.'),
    mc('Textos de parede trazem:', ['Só dados técnicos', 'Interpretações dos curadores', 'Preços', 'Nada'], 1, 'Leitura crítica.'),
    mc('Uma visita produtiva tende a:', ['Ver todas as salas', 'Concentrar-se em poucas obras', 'Fotografar tudo', 'Ler só etiquetas'], 1, 'Método.'),
    mc('O MASP fica em:', ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Brasília'], 1, 'Museu.'),
    mc('Fotos substituem a descrição escrita?', ['Sim', 'Não', 'Só em museus', 'Só em igrejas'], 1, 'Registro.'),
    disc('Visite um museu, observe três obras por dez minutos cada e registre suas observações.', ['Obras', 'Observação', 'Comparação com etiquetas', 'Registro']),
  ],
  resumo: ['Planejar: poucas obras, uma pergunta.', 'Olhar antes de ler.', 'Etiqueta × texto curatorial.', 'Caderno de visita.', 'Digital complementa.'],
  referencias: [
    { texto: 'Ernst H. Gombrich, A história da arte (1950).' },
    { texto: 'Erwin Panofsky, Estudos de iconologia (1939).' },
    { texto: 'João Paulo II, Carta aos artistas (1999).', livro: 'jp2-artistas' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o caderno de visita', 'Consultar a fonte indicada'],
  revisao: [['Olhar primeiro', 'Depois ler.'], ['Curadoria', 'Interpretação.'], ['Poucas obras', 'Bem vistas.']],
  avancado: {
    texto: `<h3>Procedência e ética</h3>
<p>Museus investigam a procedência de suas obras para verificar se foram adquiridas legalmente; obras saqueadas em guerras ou retiradas ilegalmente podem ser objeto de pedidos de restituição ${tag('fato')}. A Convenção da UNESCO de 1970 trata da prevenção do tráfico ilícito de bens culturais ${tag('fato')}. A ética museológica exige transparência sobre a origem das peças ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'UNESCO, Convenção de 1970 sobre o tráfico ilícito de bens culturais.' }],
    exercicios: [
      mc('A Convenção da UNESCO sobre tráfico ilícito é de:', ['1937', '1964', '1970', '2000'], 2, 'Bens culturais.'),
      mc('Investigar a procedência serve para verificar:', ['A aquisição legal', 'O preço', 'A cor', 'O tamanho'], 0, 'Ética.'),
      mc('Obras saqueadas podem ser objeto de:', ['Restituição', 'Esquecimento obrigatório', 'Destruição', 'Nada'], 0, 'Pedidos.'),
      disc('Discuta um caso de pedido de restituição de obra de arte, com argumentos das partes.', ['Caso', 'Argumentos', 'Critérios', 'Juízo'])],
  },
}),

aula({
  id: 'ha5-3', titulo: 'Patrimônio cultural e tombamento no Brasil', duracao: '150 min',
  aprendera: ['Conhecer a definição constitucional de patrimônio cultural', 'Explicar o tombamento e os livros do tombo', 'Distinguir patrimônio material e imaterial', 'Saber como agir para proteger um bem local'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Casarões, igrejas e festas tradicionais desaparecem todos os anos. Que instrumentos existem para protegê-los?</p>
<h3>A Constituição</h3>
<p>A Constituição define o patrimônio cultural brasileiro como os bens de natureza material e imaterial portadores de referência à identidade, à ação e à memória dos grupos formadores da sociedade (art. 216) ${tag('fato')}. O poder público, com a colaboração da comunidade, deve protegê-lo por inventários, registros, vigilância, tombamento e desapropriação (art. 216, § 1º) ${tag('fato')}.</p>
<h3>Tombamento</h3>
<p>O Decreto-Lei nº 25/1937 organizou a proteção do patrimônio histórico e artístico nacional e criou quatro Livros do Tombo: Arqueológico, Etnográfico e Paisagístico; Histórico; das Belas Artes; e das Artes Aplicadas ${tag('fato')}. O bem tombado não pode ser destruído nem alterado sem autorização do órgão competente ${tag('fato')}. Há tombamentos federais (IPHAN), estaduais e municipais ${tag('fato')}.</p>
<h3>Patrimônio imaterial</h3>
<p>O Decreto nº 3.551/2000 instituiu o registro de bens culturais de natureza imaterial, como saberes, celebrações, formas de expressão e lugares ${tag('fato')}. O Círio de Nazaré, em Belém, foi registrado como patrimônio imaterial brasileiro ${tag('fato')}.</p>
<h3>Participação</h3>
<p>Qualquer cidadão pode pedir a abertura de processo de tombamento e denunciar ameaças a bens protegidos; a ação popular pode ser usada para defender o patrimônio histórico e cultural (CF art. 5º, LXXIII) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Patrimônio cultural', 'Bens materiais e imateriais ligados à identidade e à memória (CF art. 216).'],
    ['Tombamento', 'Ato de proteção legal que restringe alterações de um bem.'],
    ['Livro do Tombo', 'Livro de inscrição dos bens tombados.'],
    ['Patrimônio imaterial', 'Saberes, celebrações, expressões e lugares.'],
    ['Registro', 'Instrumento de proteção do patrimônio imaterial.'],
  ],
  exemplos: `<p><strong>Um casarão ameaçado:</strong> moradores percebem que um casarão do século XIX vai ser demolido. Podem verificar se ele é tombado (federal, estadual ou municipal), pedir ao órgão municipal a abertura de processo de tombamento, levantar documentos e fotos que provem seu valor, e, se houver dano ao patrimônio, recorrer ao Ministério Público ou à ação popular.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Convenção do Patrimônio Mundial da UNESCO é de 1972 ${tag('fato')}. <strong>No Brasil:</strong> sítios como Ouro Preto, o centro histórico de Salvador e o Santuário de Congonhas estão na Lista do Patrimônio Mundial ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o patrimônio imaterial também merece proteção', tag: 'argumento',
    premissas: ['A identidade de um povo está também em festas, saberes e formas de expressão.', 'Esses bens dependem de pessoas vivas e podem desaparecer em uma geração.', 'Registrá-los e apoiar sua transmissão os preserva.'],
    conclusao: 'Logo, a proteção do patrimônio deve incluir os bens imateriais.',
    nota: 'Muitas festas religiosas populares são patrimônio imaterial, o que exige respeito a seu caráter de fé.',
  },
  objecoes: [
    { objecao: 'O tombamento só atrapalha o progresso e o direito de propriedade.', tag: 'debate',
      resposta: 'O tombamento limita o uso da propriedade, o que gera conflitos reais, sobretudo quando o proprietário não recebe apoio para conservar. Mas a propriedade tem função social (CF art. 5º, XXIII), e a memória coletiva é bem comum. O desafio é equilibrar, com incentivos e diálogo.' },
  ],
  aplicacao: `<p>Pesquise os bens tombados de seu município (federal, estadual e municipal), escolha um, levante sua documentação e proponha uma ação simples de valorização (visita, texto, exposição).</p>`,
  fonte: {
    obra: 'Constituição de 1988, art. 216; Decreto-Lei nº 25/1937; Decreto nº 3.551/2000', link: { url: 'https://www.gov.br/iphan', rotulo: 'IPHAN' },
    orientacao: `<p>Leia o art. 216, os artigos do DL 25 sobre os Livros do Tombo e o decreto do patrimônio imaterial; no portal do IPHAN, procure bens de sua região.</p>`,
  },
  perguntas: [
    { p: 'Onde a Constituição define o patrimônio cultural?', r: 'No art. 216.' },
    { p: 'Quantos Livros do Tombo criou o DL 25/1937?', r: 'Quatro.' },
    { p: 'Que decreto instituiu o registro do patrimônio imaterial?', r: 'O Decreto nº 3.551/2000.' },
  ],
  exercicios: [
    mc('O patrimônio cultural está na CF, art.:', ['5º', '205', '216', '226'], 2, 'Definição.'),
    mc('O DL 25 sobre tombamento é de:', ['1888', '1937', '1988', '2000'], 1, 'Patrimônio.'),
    mc('O registro do patrimônio imaterial é do Decreto:', ['25/1937', '3.551/2000', '9.394/1996', '13.140/2015'], 1, 'Imaterial.'),
    mc('O Círio de Nazaré acontece em:', ['Salvador', 'Belém', 'Recife', 'Manaus'], 1, 'Pará.'),
    mc('A Convenção do Patrimônio Mundial da UNESCO é de:', ['1964', '1970', '1972', '1985'], 2, 'UNESCO.'),
    disc('Pesquise um bem tombado de seu município e proponha uma ação de valorização.', ['Bem', 'Documentação', 'Proteção', 'Ação']),
  ],
  resumo: ['CF art. 216: material e imaterial.', 'DL 25/1937: quatro Livros do Tombo.', 'Decreto 3.551/2000: registro imaterial.', 'Tombamento federal, estadual, municipal.', 'Participação cidadã; ação popular.'],
  referencias: [
    { texto: 'Constituição da República Federativa do Brasil (1988), art. 216.' },
    { texto: 'Decreto-Lei nº 25, de 1937.' },
    { texto: 'Decreto nº 3.551, de 2000.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a pesquisa e a proposta', 'Consultar as fontes oficiais'],
  revisao: [['Art. 216', 'Patrimônio.'], ['Quatro livros', 'DL 25.'], ['3.551', 'Imaterial.']],
  avancado: {
    texto: `<h3>Mário de Andrade e o anteprojeto de 1936</h3>
<p>Mário de Andrade redigiu em 1936 um anteprojeto para o serviço de patrimônio que já incluía manifestações populares e saberes, ideia que só seria plenamente acolhida décadas depois, com o registro do patrimônio imaterial ${tag('fato')}. O DL 25/1937, efetivamente adotado, concentrou-se nos bens materiais ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Mário de Andrade, anteprojeto para o Serviço do Patrimônio Artístico Nacional (1936).' }],
    exercicios: [
      mc('O anteprojeto de Mário de Andrade é de:', ['1922', '1936', '1937', '2000'], 1, 'Patrimônio.'),
      mc('Ele já incluía:', ['Manifestações populares e saberes', 'Só edifícios', 'Só museus', 'Nada'], 0, 'Imaterial.'),
      mc('O DL 25/1937 concentrou-se em bens:', ['Imateriais', 'Materiais', 'Digitais', 'Naturais apenas'], 1, 'Material.'),
      disc('Compare a visão de Mário de Andrade com o DL 25/1937 e o Decreto 3.551/2000.', ['Anteprojeto', 'DL 25', 'Decreto 3.551', 'Comparação'])],
  },
}),

aula({
  id: 'ha5-4', titulo: 'Investigação de quatro semanas: uma obra ou edifício local', duracao: '180 min',
  aprendera: ['Escolher uma obra ou edifício local investigável', 'Localizar fontes documentais', 'Combinar observação direta e documentos', 'Redigir um relatório ilustrado'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Quase toda cidade tem uma igreja, um monumento ou uma pintura sobre os quais pouco se escreveu. Como investigá-los com rigor?</p>
<h3>A escolha</h3>
<p>Escolha uma obra acessível, que você possa observar diretamente, e sobre a qual existam algumas fontes ${tag('interpretacao')}. Formule uma pergunta: quem fez, quando, para quem, com que programa, que alterações sofreu ${tag('interpretacao')}.</p>
<h3>As fontes</h3>
<p>Processos de tombamento e inventários do IPHAN ou de órgãos estaduais e municipais ${tag('fato')}. Arquivos paroquiais e diocesanos: livros de tombo, de irmandades, de despesas ${tag('fato')}. Jornais antigos (a Hemeroteca Digital da Biblioteca Nacional oferece acervo digitalizado), fotografias, plantas e testemunhos orais ${tag('fato')}.</p>
<h3>Observação</h3>
<p>Faça a análise formal, iconográfica e iconológica; fotografe (com autorização), desenhe e meça quando possível ${tag('interpretacao')}. Registre o estado de conservação ${tag('interpretacao')}.</p>
<h3>Relatório</h3>
<p>Estrutura: pergunta; descrição da obra; análise; documentação e histórico; estado de conservação; conclusão e limites; fontes ${tag('interpretacao')}. Atribuições e datações sem documento devem ser apresentadas como hipóteses ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Livro de tombo paroquial', 'Livro de registro da história de uma paróquia.'],
    ['Hemeroteca Digital', 'Acervo digitalizado de jornais da Biblioteca Nacional.'],
    ['Testemunho oral', 'Informação colhida de pessoas que viveram os fatos.'],
    ['Estado de conservação', 'Condição física atual de uma obra.'],
    ['Hipótese de atribuição', 'Proposta de autoria ainda não comprovada por documento.'],
  ],
  exemplos: `<p><strong>Uma matriz do interior:</strong> pergunta — quando foi construída a igreja matriz e quem fez seu retábulo? Fontes — processo de tombamento estadual, livro de tombo da paróquia, notícias de jornal sobre a reforma de 1950, fotos antigas de moradores. Resultado — data da construção documentada, retábulo de autoria desconhecida com hipótese estilística, e a descoberta de que a fachada foi alterada no século XX.</p>`,
  contexto: `<p><strong>No mundo:</strong> inventários de patrimônio religioso envolvem cada vez mais voluntários locais ${tag('fato')}. <strong>No Brasil:</strong> a Hemeroteca Digital Brasileira, da Biblioteca Nacional, disponibiliza jornais desde o século XIX ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a pesquisa local tem valor', tag: 'argumento',
    premissas: ['Muitos bens locais nunca foram estudados.', 'Sem documentação, sua história se perde e sua proteção fica mais difícil.', 'Uma pesquisa cuidadosa, mesmo simples, preserva memória e pode subsidiar proteção.'],
    conclusao: 'Logo, investigar uma obra local é contribuição real ao patrimônio.',
    nota: 'Entregar uma cópia do relatório à paróquia ou ao órgão de patrimônio pode ser útil.',
  },
  objecoes: [
    { objecao: 'Sem formação acadêmica, não se pode fazer pesquisa de história da arte.', tag: 'argumento',
      resposta: 'O método — observar, descrever, buscar documentos, distinguir fato e hipótese — está ao alcance de quem estudou este percurso. Muitos inventários locais foram feitos por pesquisadores amadores cuidadosos. O rigor vem do método e da honestidade.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: obra escolhida, pergunta, fontes a consultar (com endereço ou link), autorizações necessárias, cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'IPHAN, processos de tombamento; Biblioteca Nacional, Hemeroteca Digital Brasileira', link: { url: 'https://www.gov.br/iphan', rotulo: 'IPHAN' },
    orientacao: `<p>Verifique se a obra escolhida tem processo de tombamento e procure notícias sobre ela na Hemeroteca.</p>`,
  },
  perguntas: [
    { p: 'Que fontes paroquiais ajudam na pesquisa?', r: 'Livros de tombo, de irmandades e de despesas.' },
    { p: 'Onde encontrar jornais antigos digitalizados?', r: 'Na Hemeroteca Digital da Biblioteca Nacional.' },
    { p: 'Como apresentar uma atribuição sem documento?', r: 'Como hipótese.' },
  ],
  exercicios: [
    mc('A Hemeroteca Digital pertence à:', ['Biblioteca Nacional', 'UNESCO', 'IBGE', 'INEP'], 0, 'Jornais.'),
    mc('Um livro de tombo paroquial registra:', ['A história da paróquia', 'Preços', 'Eleições', 'Nada'], 0, 'Fonte.'),
    mc('Atribuição sem documento é:', ['Fato', 'Hipótese', 'Lei', 'Erro sempre'], 1, 'Honestidade.'),
    mc('Fotografar uma obra numa igreja exige:', ['Autorização', 'Flash', 'Pressa', 'Nada'], 0, 'Respeito.'),
    mc('O relatório deve incluir:', ['Só fotos', 'Pergunta, análise, documentação, limites e fontes', 'Só opinião', 'Só datas'], 1, 'Estrutura.'),
    disc('Apresente o pré-projeto com obra, pergunta, fontes, autorizações, cronograma e rubrica.', ['Obra e pergunta', 'Fontes', 'Autorizações', 'Cronograma e rubrica']),
  ],
  resumo: ['Obra acessível e pergunta clara.', 'IPHAN, arquivos paroquiais, Hemeroteca.', 'Observação em três níveis.', 'Relatório com limites.', 'Hipótese ≠ fato.'],
  referencias: [
    { texto: 'Erwin Panofsky, Estudos de iconologia (1939).' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
    { texto: 'IPHAN, inventários de bens tombados.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a investigação em quatro semanas'],
  revisao: [['Hemeroteca', 'Jornais.'], ['Tombo paroquial', 'História.'], ['Hipótese', 'Sem documento.']],
  avancado: {
    texto: `<h3>História oral</h3>
<p>Entrevistas com moradores antigos, zeladores e párocos podem revelar reformas, doações e mudanças não registradas por escrito ${tag('fato')}. A história oral exige consentimento, registro cuidadoso e confronto com outras fontes, porque a memória falha e reinterpreta ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' }],
    exercicios: [
      mc('A história oral exige:', ['Consentimento e confronto com outras fontes', 'Só gravar', 'Aceitar tudo', 'Nada'], 0, 'Método.'),
      mc('A memória dos entrevistados:', ['Nunca falha', 'Pode falhar e reinterpretar', 'É sempre falsa', 'É lei'], 1, 'Cautela.'),
      mc('Entrevistas podem revelar:', ['Reformas não registradas', 'Nada útil', 'Só lendas', 'Só datas exatas'], 0, 'Valor.'),
      disc('Prepare um roteiro de entrevista sobre a história de uma igreja local.', ['Perguntas', 'Consentimento', 'Registro', 'Confronto'])],
  },
}),

avaliacao('ha5-5', 'Avaliação integradora de História da Arte', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de História da Arte. Reúne questões de todos os módulos (HA1 a HA5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Revise períodos, obras e autores na sua linha do tempo.</li><li>Releia a rubrica da investigação (ha5-4).</li></ul>`,
[
  disc('Analise uma obra não estudada no percurso em três níveis (formal, iconográfico e iconológico), situando-a em seu período e indicando as fontes de cada afirmação.', ['Análise formal', 'Iconografia', 'Iconologia e período', 'Fontes']),
  disc('Mostre, com uma obra ou edifício brasileiro, a relação entre arte, fé e patrimônio, distinguindo fato documentado, interpretação e juízo estético ou teológico.', ['Obra', 'Fé e liturgia', 'Patrimônio', 'Distinções']),
]),
];
