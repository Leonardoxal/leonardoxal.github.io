// Antropologia IV — a antropologia no e do Brasil (etapa 8 do percurso de Antropologia).
// Etnologia indígena, estudos afro-brasileiros e quilombos, antropologia urbana, cultura caipira e religiosidade popular.
// Cada povo e grupo é estudado por suas próprias etnografias, sem generalização.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'an4-1', titulo: 'Etnologia indígena no Brasil: Nimuendajú, Rondon, Darcy Ribeiro e a etnologia contemporânea', duracao: '150 min',
  aprendera: ['Situar os marcos da etnologia indígena brasileira', 'Explicar a política indigenista do SPI à Funai', 'Expor as teses de Darcy Ribeiro e da etnologia contemporânea', 'Estudar um povo indígena por sua etnografia'],
  prereq: ['Antropologia III (módulo AN3)'],
  explicacao: `
<h3>O problema</h3>
<p>O Brasil tem centenas de povos indígenas, com línguas, organizações e histórias próprias. Como a antropologia os estudou, e como o Estado se relacionou com eles?</p>
<h3>Nimuendajú</h3>
<p>Curt Nimuendajú (1883–1945), nascido na Alemanha e radicado no Brasil, viveu décadas entre povos indígenas, recebeu dos Guarani o nome que adotou e produziu o <em>Mapa etno-histórico do Brasil e regiões adjacentes</em> (1944), que localiza centenas de povos ${tag('fato')}.</p>
<h3>Rondon, SPI e Funai</h3>
<p>Cândido Rondon liderou a comissão de linhas telegráficas no Mato Grosso e o Serviço de Proteção aos Índios (SPI), criado em 1910 ${tag('fato')}. Em 1967 o SPI foi substituído pela Fundação Nacional do Índio (Funai), depois de denúncias graves de violência e corrupção ${tag('fato')}. Os irmãos Villas Bôas atuaram na criação do Parque Indígena do Xingu (1961) ${tag('fato')}.</p>
<h3>Darcy Ribeiro</h3>
<p>Darcy Ribeiro (1922–1997), antropólogo e político, estudou o contato interétnico em <em>Os índios e a civilização</em> (1970) e interpretou a formação nacional em <em>O povo brasileiro</em> (1995) ${tag('fato')}. Suas teses sobre a "transfiguração étnica" são influentes e discutidas ${tag('debate')}.</p>
<h3>Etnologia contemporânea</h3>
<p>Manuela Carneiro da Cunha organizou <em>História dos índios no Brasil</em> (1992), que mostra os povos indígenas como sujeitos de sua história ${tag('fato')}. A Constituição de 1988 rompeu com a meta de "integração" e reconheceu direitos originários sobre as terras tradicionalmente ocupadas (art. 231) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Etnologia', 'Estudo comparativo dos povos e de suas culturas.'],
    ['SPI', 'Serviço de Proteção aos Índios (1910).'],
    ['Funai', 'Fundação Nacional do Índio (1967), hoje Fundação Nacional dos Povos Indígenas.'],
    ['Contato interétnico', 'Relações entre povos indígenas e a sociedade nacional.'],
    ['Direitos originários', 'Direitos anteriores ao Estado, reconhecidos pela Constituição de 1988.'],
  ],
  exemplos: `<p><strong>Estudar um povo pela sua etnografia:</strong> em vez de falar de "os índios" em geral, escolha um povo (por exemplo, os Guarani, os Yanomami, os Kayapó, os Ticuna), localize-o no mapa de Nimuendajú e em fontes atuais (Instituto Socioambiental, IBGE), e leia uma etnografia sobre ele. Cada povo tem língua, organização e história próprias.</p>`,
  contexto: `<p><strong>No mundo:</strong> os povos indígenas são reconhecidos em instrumentos internacionais como a Convenção 169 da OIT e a Declaração da ONU de 2007. <strong>No Brasil:</strong> em 2023 a Funai passou a se chamar Fundação Nacional dos Povos Indígenas, e foi criado o Ministério dos Povos Indígenas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a Constituição de 1988 mudou a política indigenista', tag: 'argumento',
    premissas: ['A legislação anterior tinha como meta a integração progressiva dos indígenas à "comunhão nacional".', 'A Constituição de 1988 reconheceu aos índios sua organização social, costumes, línguas, crenças e tradições.', 'Reconhecer a organização própria é incompatível com a meta de dissolvê-la.'],
    conclusao: 'Logo, a Constituição de 1988 substituiu o paradigma da integração pelo do reconhecimento.',
    nota: 'A aplicação concreta (demarcações, saúde, educação) é objeto de conflitos e debates.',
  },
  objecoes: [
    { objecao: 'Os indígenas já estão integrados e não precisam de direitos específicos.', tag: 'debate',
      resposta: 'A situação varia muito entre povos e pessoas. A Constituição não condiciona os direitos a um grau de "isolamento"; reconhece direitos coletivos ligados à organização e ao território. O debate sobre sua aplicação existe, mas não suprime o reconhecimento constitucional.' },
  ],
  aplicacao: `<p>Escolha um povo indígena do Brasil. Localize-o no mapa de Nimuendajú, obtenha dados atuais (população, terra indígena, língua) com fonte e resuma uma etnografia sobre ele, indicando o método do autor.</p>`,
  fonte: {
    obra: 'Curt Nimuendajú, Mapa etno-histórico do Brasil e regiões adjacentes (1944); Constituição Federal de 1988, arts. 231 e 232', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>No mapa de Nimuendajú (edição do IBGE), localize o povo escolhido. Nos arts. 231 e 232, identifique os direitos reconhecidos. Use ambos na aplicação.</p>`,
  },
  perguntas: [
    { p: 'Quando foi criado o SPI?', r: 'Em 1910.' },
    { p: 'O que é o Mapa etno-histórico de Nimuendajú?', r: 'Um mapa de 1944 que localiza centenas de povos indígenas do Brasil e regiões vizinhas.' },
    { p: 'Que paradigma a Constituição de 1988 substituiu?', r: 'O da integração, pelo do reconhecimento.' },
  ],
  exercicios: [
    mc('A Funai foi criada em:', ['1910', '1961', '1967', '1988'], 2, 'Substituiu o SPI.'),
    mc('O Parque Indígena do Xingu foi criado em:', ['1910', '1944', '1961', '1988'], 2, 'Irmãos Villas Bôas.'),
    mc('O povo brasileiro (1995) é de:', ['Darcy Ribeiro', 'Nimuendajú', 'Freyre', 'Viveiros de Castro'], 0, 'Formação nacional.'),
    mc('História dos índios no Brasil (1992) foi organizada por:', ['Darcy Ribeiro', 'Manuela Carneiro da Cunha', 'Rondon', 'Lévi-Strauss'], 1, 'Indígenas como sujeitos.'),
    mc('O art. 231 da Constituição reconhece direitos sobre terras:', ['Compradas', 'Tradicionalmente ocupadas', 'Doadas pelo Estado', 'Urbanas'], 1, 'Direitos originários.'),
    disc('Apresente um povo indígena com localização, dados atuais com fonte e o resumo de uma etnografia, indicando o método do autor.', ['Povo localizado', 'Dados com fonte', 'Etnografia resumida', 'Método identificado']),
  ],
  resumo: ['Nimuendajú (1944): mapa etno-histórico.', 'SPI (1910), Funai (1967), Xingu (1961).', 'Darcy Ribeiro (1970, 1995).', 'História dos índios no Brasil (1992).', 'CF 1988: reconhecimento, art. 231.'],
  referencias: [
    { texto: 'Curt Nimuendajú, Mapa etno-histórico do Brasil e regiões adjacentes (1944).' },
    { texto: 'Darcy Ribeiro, Os índios e a civilização (1970).' },
    { texto: 'Manuela Carneiro da Cunha (org.), História dos índios no Brasil (1992).' },
    { texto: 'Constituição da República Federativa do Brasil (1988), arts. 231 e 232.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Consultar o mapa de Nimuendajú'],
  revisao: [['SPI', '1910.'], ['Funai', '1967.'], ['Art. 231', 'Reconhecimento.']],
  avancado: {
    texto: `<h3>Línguas indígenas</h3>
<p>As línguas indígenas brasileiras pertencem a vários troncos e famílias, como o tronco tupi e o macro-jê, além de famílias como aruak e karib ${tag('fato')}. Muitas estão ameaçadas, e a documentação linguística é tarefa urgente ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Aryon Dall\'Igna Rodrigues, Línguas brasileiras: para o conhecimento das línguas indígenas (1986).' }],
    exercicios: [
      mc('Tupi e macro-jê são:', ['Povos', 'Troncos linguísticos', 'Estados', 'Rios'], 1, 'Classificação linguística.'),
      mc('Línguas brasileiras (1986) é de:', ['Darcy Ribeiro', 'Aryon Rodrigues', 'Nimuendajú', 'Anchieta'], 1, 'Linguística indígena.'),
      mc('A documentação de línguas ameaçadas é:', ['Desnecessária', 'Urgente', 'Proibida', 'Concluída'], 1, 'Muitas em risco.'),
      disc('Pesquise a situação de uma língua indígena brasileira: falantes, transmissão e esforços de documentação, com fontes.', ['Língua', 'Dados', 'Esforços', 'Fontes'])],
  },
}),

aula({
  id: 'an4-2', titulo: 'Estudos afro-brasileiros: Nina Rodrigues, Arthur Ramos, Bastide, Verger e os quilombos', duracao: '150 min',
  aprendera: ['Situar os estudos afro-brasileiros e suas mudanças de perspectiva', 'Distinguir o valor documental e as premissas racistas em Nina Rodrigues', 'Expor a obra de Bastide e Verger', 'Explicar os direitos quilombolas e os dados do Censo'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A presença africana marcou profundamente o Brasil. Como a antropologia estudou religiões, culturas e comunidades afro-brasileiras, e como mudou seu olhar?</p>
<h3>Nina Rodrigues</h3>
<p>Raimundo Nina Rodrigues (1862–1906), médico na Bahia, estudou o candomblé em <em>O animismo fetichista dos negros baianos</em> (1900) ${tag('fato')}. Seus registros têm valor documental, mas partem de premissas racistas sobre inferioridade, hoje rejeitadas pela ciência e contrárias à dignidade humana ${tag('fato')}.</p>
<h3>Arthur Ramos e Édison Carneiro</h3>
<p>Arthur Ramos, em <em>O negro brasileiro</em> (1934), deslocou a explicação da raça para a cultura e a psicologia ${tag('interpretacao')}. Édison Carneiro estudou candomblés e quilombos e participou do Congresso Afro-Brasileiro da Bahia (1937) ${tag('fato')}.</p>
<h3>Bastide e Verger</h3>
<p>Roger Bastide, em <em>As religiões africanas no Brasil</em> (1960), analisou as religiões afro-brasileiras como sistemas próprios em relação com a sociedade ${tag('fato')}. O fotógrafo e etnógrafo Pierre Verger documentou as ligações entre a Bahia e o golfo do Benim ${tag('fato')}.</p>
<h3>Quilombos</h3>
<p>Palmares, destruído em 1694–1695, é o quilombo mais conhecido ${tag('fato')}. O art. 68 do Ato das Disposições Constitucionais Transitórias reconhece a propriedade das terras ocupadas por remanescentes de quilombos ${tag('fato')}. O Censo 2022 contou pela primeira vez a população quilombola: cerca de 1,3 milhão de pessoas ${tag('fato')}.</p>`,
  vocabulario: [
    ['Candomblé', 'Religião afro-brasileira de culto aos orixás (entre outras nações).'],
    ['Quilombo', 'Comunidade formada por escravizados fugidos e seus descendentes.'],
    ['Remanescentes de quilombos', 'Comunidades reconhecidas pelo art. 68 do ADCT.'],
    ['Sincretismo', 'Combinação de elementos de tradições religiosas diferentes.'],
    ['Racismo científico', 'Teorias do século XIX sobre hierarquia de raças, hoje refutadas.'],
  ],
  exemplos: `<p><strong>Ler Nina Rodrigues por partes:</strong> descrições de terreiros, nomes de divindades e rituais da Bahia de 1900 são fonte histórica preciosa; as conclusões sobre "inferioridade" são erro científico e moral. O mesmo princípio de leitura usado com Oliveira Vianna (so4-2) se aplica aqui.</p>`,
  contexto: `<p><strong>No mundo:</strong> o tráfico atlântico trouxe ao Brasil o maior contingente de africanos escravizados das Américas ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 10.639, de 2003, tornou obrigatório o ensino de história e cultura afro-brasileira nas escolas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a passagem da "raça" à "cultura" mudou os estudos afro-brasileiros', tag: 'argumento',
    premissas: ['Explicar práticas pela raça supõe hierarquias biológicas que a ciência refutou.', 'Explicar pela cultura permite compreender práticas como sistemas de sentido transmitidos e transformados.', 'Essa mudança permitiu estudar as religiões afro-brasileiras em seus próprios termos.'],
    conclusao: 'Logo, a passagem da raça à cultura foi condição para estudos afro-brasileiros rigorosos e respeitosos.',
    nota: 'Paralela à virada de Boas (an2-2).',
  },
  objecoes: [
    { objecao: 'Estudar religiões afro-brasileiras é promover o sincretismo.', tag: 'debate',
      resposta: 'Compreender uma religião não é aderir a ela. A Igreja pede respeito às outras religiões e diálogo (Nostra Aetate, 2), sem relativismo doutrinal; o estudo rigoroso serve ao diálogo e combate preconceitos e violências contra terreiros.' },
  ],
  aplicacao: `<p>Com dados do Censo 2022, descreva a população quilombola do seu estado (ou do Brasil) e identifique uma comunidade com título de terra. Registre fonte e data e explique o fundamento constitucional.</p>`,
  fonte: {
    obra: 'Roger Bastide, As religiões africanas no Brasil (1960), introdução; Constituição Federal de 1988, ADCT, art. 68; IBGE, Censo 2022: quilombolas', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>Em Bastide, localize a proposta de estudar as religiões em relação com a sociedade. No ADCT, o art. 68. No IBGE, os dados quilombolas do Censo 2022.</p>`,
  },
  perguntas: [
    { p: 'Qual o valor e o problema da obra de Nina Rodrigues?', r: 'Valor documental sobre o candomblé; premissas racistas hoje rejeitadas.' },
    { p: 'O que reconhece o art. 68 do ADCT?', r: 'A propriedade das terras ocupadas por remanescentes de quilombos.' },
    { p: 'Quantos quilombolas o Censo 2022 contou?', r: 'Cerca de 1,3 milhão de pessoas.' },
  ],
  exercicios: [
    mc('O animismo fetichista dos negros baianos é de:', ['1900', '1934', '1960', '2003'], 0, 'Nina Rodrigues.'),
    mc('O negro brasileiro (1934) é de:', ['Bastide', 'Arthur Ramos', 'Verger', 'Édison Carneiro'], 1, 'Da raça à cultura.'),
    mc('As religiões africanas no Brasil é de:', ['Bastide', 'Verger', 'Freyre', 'Ramos'], 0, '1960.'),
    mc('Palmares foi destruído em:', ['1500', '1694–1695', '1822', '1888'], 1, 'Quilombo.'),
    mc('A Lei 10.639/2003 trata de:', ['Terras quilombolas', 'Ensino de história e cultura afro-brasileira', 'Saúde indígena', 'Patrimônio'], 1, 'Escolas.'),
    disc('Descreva a população quilombola com dados do Censo 2022, identifique uma comunidade titulada e explique o fundamento constitucional.', ['Dados com fonte', 'Comunidade identificada', 'Fundamento constitucional', 'Cautelas']),
  ],
  resumo: ['Nina Rodrigues (1900): documento e racismo.', 'Arthur Ramos (1934); Édison Carneiro; Congresso de 1937.', 'Bastide (1960); Verger.', 'Palmares; ADCT art. 68.', 'Censo 2022: ~1,3 milhão de quilombolas; Lei 10.639/2003.'],
  referencias: [
    { texto: 'Roger Bastide, As religiões africanas no Brasil (1960).' },
    { texto: 'Arthur Ramos, O negro brasileiro (1934).' },
    { texto: 'Raimundo Nina Rodrigues, O animismo fetichista dos negros baianos (1900).' },
    { texto: 'IBGE, Censo Demográfico 2022: quilombolas.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Consultar os dados quilombolas'],
  revisao: [['Nina Rodrigues', 'Documento e racismo.'], ['ADCT 68', 'Quilombos.'], ['Bastide', '1960.']],
  avancado: {
    texto: `<h3>Irmandades negras</h3>
<p>No período colonial e imperial, irmandades católicas de pretos e pardos, como as de Nossa Senhora do Rosário, organizaram culto, assistência mútua e compra de alforrias ${tag('fato')}. São campo de estudo que une história, antropologia e história da Igreja ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Julita Scarano, Devoção e escravidão (1976).' }],
    exercicios: [
      mc('Irmandades de Nossa Senhora do Rosário reuniam sobretudo:', ['Senhores de engenho', 'Pretos e pardos', 'Militares', 'Estrangeiros'], 1, 'Colônia e Império.'),
      mc('As irmandades organizavam:', ['Só festas', 'Culto, assistência e alforrias', 'Partidos', 'Comércio exterior'], 1, 'Funções múltiplas.'),
      mc('Devoção e escravidão (1976) é de:', ['Julita Scarano', 'Bastide', 'Verger', 'Ramos'], 0, 'Irmandades em Minas.'),
      disc('Estude uma irmandade negra histórica da sua região: fundação, fontes, funções e relação com a Igreja.', ['Irmandade', 'Fontes', 'Funções', 'Relação com a Igreja'])],
  },
}),

aula({
  id: 'an4-3', titulo: 'Antropologia urbana e da sociedade brasileira: Gilberto Velho e a cidade', duracao: '150 min',
  aprendera: ['Expor a antropologia urbana de Gilberto Velho', 'Explicar os conceitos de projeto e campo de possibilidades', 'Aplicar o estranhamento à cidade', 'Relacionar a antropologia urbana às interpretações do Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A antropologia não estuda apenas povos distantes: pode estudar o prédio, o bairro e o grupo a que pertencemos. Como fazer etnografia na própria cidade?</p>
<h3>Gilberto Velho</h3>
<p>Gilberto Velho (1945–2012), do Museu Nacional, estudou moradores de um edifício de Copacabana em <em>A utopia urbana</em> (1973) ${tag('fato')}. Em "Observando o familiar" (texto reunido em <em>Individualismo e cultura</em>, 1981), discutiu o estranhamento quando o pesquisador estuda sua própria sociedade ${tag('fato')}. Em <em>Projeto e metamorfose</em> (1994), propôs os conceitos de <strong>projeto</strong> (conduta organizada para atingir fins) e <strong>campo de possibilidades</strong> (alternativas históricas e culturais disponíveis) ${tag('fato')}.</p>
<h3>Familiar não é conhecido</h3>
<p>Para Velho, o que é familiar não é necessariamente conhecido: podemos ver todos os dias o porteiro do prédio sem saber como ele vê a cidade ${tag('interpretacao')}.</p>
<h3>Cidade e sociedade brasileira</h3>
<p>A antropologia urbana dialoga com DaMatta (casa e rua, so4-4) e estuda temas como camadas médias, periferias, religiosidade urbana, trabalho e lazer ${tag('interpretacao')}. Alba Zaluar, em <em>A máquina e a revolta</em> (1985), estudou trabalhadores pobres da Cidade de Deus ${tag('fato')}.</p>`,
  vocabulario: [
    ['Antropologia urbana', 'Estudo antropológico da vida nas cidades.'],
    ['Projeto', 'Conduta organizada para atingir fins (Velho).'],
    ['Campo de possibilidades', 'Alternativas históricas e culturais disponíveis a alguém (Velho).'],
    ['Camadas médias', 'Grupos intermediários da estrutura social urbana.'],
    ['Observar o familiar', 'Etnografia da própria sociedade do pesquisador.'],
  ],
  exemplos: `<p><strong>Projeto e campo de possibilidades:</strong> um jovem da periferia quer ser médico (projeto). Seu campo de possibilidades inclui escola pública, cursinho comunitário, cotas, bolsas, apoio familiar e a paróquia que oferece aulas. Analisar a vida dele com esses conceitos evita tanto o determinismo ("ele não tem chance") quanto o voluntarismo ("basta querer").</p>`,
  contexto: `<p><strong>No mundo:</strong> a Escola de Chicago foi pioneira nos estudos urbanos no início do século XX. <strong>No Brasil:</strong> o Programa de Pós-Graduação em Antropologia Social do Museu Nacional formou gerações de antropólogos urbanos ${tag('fato')}; o incêndio do Museu Nacional, em 2018, destruiu grande parte de seu acervo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o familiar também precisa ser estudado', tag: 'argumento',
    premissas: ['Convivemos diariamente com pessoas e situações sem conhecer seu ponto de vista.', 'A familiaridade cria a ilusão de que já sabemos como as coisas são.', 'A etnografia do familiar revela sentidos e conflitos que a rotina esconde.'],
    conclusao: 'Logo, o que é familiar não é necessariamente conhecido e pode ser objeto de etnografia rigorosa.',
    nota: 'É o estranhamento (an1-1) aplicado à própria cidade.',
  },
  objecoes: [
    { objecao: 'Estudar a própria cidade não é antropologia, é jornalismo.', tag: 'debate',
      resposta: 'A diferença não está no lugar, mas no método: convívio prolongado, diário de campo, conceitos teóricos, comparação e reflexividade. O jornalismo tem outros fins e ritmos. A antropologia urbana é campo consolidado com obras clássicas.' },
  ],
  aplicacao: `<p>Escolha um espaço urbano familiar (prédio, praça, ponto de ônibus, comércio) e faça duas observações com diário de campo. Identifique o projeto e o campo de possibilidades de uma pessoa que você entrevistar ali, com consentimento.</p>`,
  fonte: {
    obra: 'Gilberto Velho, "Observando o familiar", em Individualismo e cultura (1981); Projeto e metamorfose (1994), cap. 1', link: null,
    orientacao: `<p>Em "Observando o familiar", localize a distinção entre familiar e conhecido. Em Projeto e metamorfose, as definições de projeto e campo de possibilidades. Use-os na aplicação.</p>`,
  },
  perguntas: [
    { p: 'O que estudou Gilberto Velho em A utopia urbana?', r: 'Moradores de um edifício de Copacabana.' },
    { p: 'O que é campo de possibilidades?', r: 'As alternativas históricas e culturais disponíveis a alguém.' },
    { p: 'O familiar é necessariamente conhecido?', r: 'Não; a familiaridade pode esconder o ponto de vista dos outros.' },
  ],
  exercicios: [
    mc('A utopia urbana é de:', ['1964', '1973', '1981', '1994'], 1, 'Gilberto Velho.'),
    mc('Projeto e metamorfose é de:', ['1981', '1985', '1994', '2012'], 2, 'Velho.'),
    mc('A máquina e a revolta (1985) é de:', ['Alba Zaluar', 'Gilberto Velho', 'DaMatta', 'Ruth Cardoso'], 0, 'Cidade de Deus.'),
    mc('O incêndio do Museu Nacional ocorreu em:', ['2008', '2013', '2018', '2022'], 2, 'Perda de acervo.'),
    mc('Analisar escolhas sem determinismo nem voluntarismo usa os conceitos de:', ['Projeto e campo de possibilidades', 'Ícone e índice', 'Kula', 'Anomia'], 0, 'Velho.'),
    disc('Entregue as duas observações de um espaço urbano e a análise do projeto e do campo de possibilidades de um entrevistado.', ['Diário de campo', 'Entrevista com consentimento', 'Conceitos aplicados', 'Conclusão proporcional']),
  ],
  resumo: ['Gilberto Velho (1945–2012), Museu Nacional.', 'A utopia urbana (1973).', 'Observar o familiar (1981).', 'Projeto e campo de possibilidades (1994).', 'Alba Zaluar (1985); Museu Nacional (2018).'],
  referencias: [
    { texto: 'Gilberto Velho, A utopia urbana (1973).' },
    { texto: 'Gilberto Velho, Individualismo e cultura (1981).' },
    { texto: 'Gilberto Velho, Projeto e metamorfose (1994).' },
    { texto: 'Alba Zaluar, A máquina e a revolta (1985).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler "Observando o familiar"'],
  revisao: [['Velho', 'Projeto e campo de possibilidades.'], ['Familiar', 'Não é conhecido.'], ['Zaluar', 'Cidade de Deus.']],
  avancado: {
    texto: `<h3>Religião na cidade</h3>
<p>Etnografias urbanas estudam igrejas, terreiros e grupos de oração como espaços de sociabilidade e de construção de sentido em bairros populares ${tag('interpretacao')}. A pastoral urbana da Igreja no Brasil também é tema de documentos da CNBB ${tag('fato')}.</p>`,
    leituras: [{ texto: 'CNBB, Comunidade de comunidades: uma nova paróquia (Documento 100, 2014).' }],
    exercicios: [
      mc('O Documento 100 da CNBB trata de:', ['Liturgia', 'Paróquia como comunidade de comunidades', 'Economia', 'Educação'], 1, '2014.'),
      mc('Igrejas e terreiros em bairros populares são estudados como espaços de:', ['Só culto', 'Sociabilidade e sentido', 'Comércio', 'Política apenas'], 1, 'Etnografia urbana.'),
      mc('A pastoral urbana é tema de:', ['Só sociólogos', 'Documentos da CNBB', 'Leis federais', 'Nenhum documento'], 1, 'Igreja no Brasil.'),
      disc('Faça uma observação etnográfica de uma comunidade religiosa urbana e relacione-a ao Documento 100 da CNBB.', ['Observação', 'Documento citado', 'Relação', 'Separação dos planos'])],
  },
}),

aula({
  id: 'an4-4', titulo: 'Cultura caipira e religiosidade popular: Antonio Candido e Carlos Rodrigues Brandão', duracao: '150 min',
  aprendera: ['Expor a análise de Os parceiros do Rio Bonito', 'Explicar os mínimos vitais e sociais e o bairro rural', 'Expor o estudo da religiosidade popular de Brandão', 'Comparar duas etnografias brasileiras pelo método'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como viviam e como mudaram os camponeses do interior paulista? Como o povo vive a religião fora dos limites da instituição? Duas etnografias brasileiras clássicas respondem.</p>
<h3>Antonio Candido</h3>
<p>Em <em>Os parceiros do Rio Bonito</em> (1964), Antonio Candido estudou o caipira paulista de Bofete: alimentação, trabalho, sociabilidade e as mudanças trazidas pela urbanização ${tag('fato')}. Propôs os conceitos de <strong>mínimos vitais</strong> (alimentação e abrigo suficientes) e <strong>mínimos sociais</strong> (relações e solidariedade necessárias à vida em grupo), e descreveu o <strong>bairro rural</strong> e o <strong>mutirão</strong> como formas de cooperação ${tag('fato')}.</p>
<h3>Carlos Rodrigues Brandão</h3>
<p>Em <em>Os deuses do povo</em> (1980), Carlos Rodrigues Brandão estudou a religião popular numa cidade do interior, com festas, rezadores, devoções e trânsito entre crenças ${tag('fato')}. Brandão também escreveu sobre a cultura e a educação populares ${tag('fato')}.</p>
<h3>A religiosidade popular na Igreja</h3>
<p>O Documento de Aparecida (2007) chamou a piedade popular de "precioso tesouro" da Igreja na América Latina e pediu que seja acompanhada e evangelizada ${tag('doutrina')}. O estudo antropológico ajuda a compreendê-la; o juízo pastoral vem da fé ${tag('argumento')}.</p>
<h3>Comparar etnografias</h3>
<p>Para comparar duas etnografias, pergunte: que grupo, onde e quando; quanto tempo de campo; que métodos (observação, entrevista, dados); que conceitos; que conclusões; que limites o próprio autor reconhece ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Caipira', 'Camponês do interior paulista e regiões vizinhas, com cultura própria (Candido).'],
    ['Mínimos vitais', 'Alimentação e abrigo suficientes para viver.'],
    ['Mínimos sociais', 'Relações e solidariedade necessárias à vida em grupo.'],
    ['Mutirão', 'Trabalho coletivo gratuito entre vizinhos, com festa e retribuição.'],
    ['Piedade popular', 'Expressões de fé do povo: devoções, romarias, festas (Aparecida).'],
  ],
  exemplos: `<p><strong>Mutirão e dádiva:</strong> no mutirão, vizinhos ajudam a colher ou a construir; quem recebe oferece comida e festa e fica obrigado a ajudar quando for chamado. É um caso brasileiro das três obrigações de Mauss (an2-4), descrito por Candido como forma de solidariedade do bairro rural.</p>`,
  contexto: `<p><strong>No mundo:</strong> estudos sobre campesinato e religião popular existem em toda a América Latina. <strong>No Brasil:</strong> festas como a do Divino, a folia de Reis e as festas juninas mantêm tradições estudadas por Candido, Brandão e outros ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a urbanização transformou a cultura caipira (Candido)', tag: 'argumento',
    premissas: ['A cultura caipira dependia de terra, de bairros rurais e de cooperação vizinha.', 'A expansão do latifúndio e da cidade reduziu o acesso à terra e dispersou os bairros.', 'Sem as bases materiais e sociais, as formas de cooperação e as festas perdem força ou mudam.'],
    conclusao: 'Logo, segundo Candido, a cultura caipira se transformou junto com as condições de vida que a sustentavam.',
    nota: 'Candido evitou tanto a idealização do passado quanto a celebração da mudança.',
  },
  objecoes: [
    { objecao: 'A religiosidade popular é superstição a ser eliminada.', tag: 'debate',
      resposta: 'A Igreja reconhece na piedade popular um tesouro a ser acompanhado e evangelizado, não eliminado (Aparecida; Evangelii Gaudium, 122–126). Pode haver desvios a corrigir, mas a resposta pastoral parte do respeito e do conhecimento.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: compare duas etnografias brasileiras (Os parceiros do Rio Bonito e Os deuses do povo, ou outras do módulo) pelos seis critérios — grupo, tempo de campo, métodos, conceitos, conclusões e limites.</p>`,
  fonte: {
    obra: 'Antonio Candido, Os parceiros do Rio Bonito (1964), introdução e cap. sobre mínimos vitais; Documento de Aparecida (2007), n. 258–265 (piedade popular)', link: null,
    orientacao: `<p>Em Candido, localize o método e os conceitos de mínimos vitais e sociais. Em Aparecida, a valorização da piedade popular. Use-os na comparação.</p>`,
  },
  perguntas: [
    { p: 'O que são mínimos vitais e sociais?', r: 'Mínimos vitais: alimentação e abrigo suficientes; mínimos sociais: relações e solidariedade necessárias à vida em grupo.' },
    { p: 'Que obra de Brandão estuda a religião popular?', r: 'Os deuses do povo (1980).' },
    { p: 'Como o Documento de Aparecida chama a piedade popular?', r: '"Precioso tesouro" da Igreja na América Latina.' },
  ],
  exercicios: [
    mc('Os parceiros do Rio Bonito é de:', ['1934', '1964', '1980', '1994'], 1, 'Antonio Candido.'),
    mc('Os deuses do povo é de:', ['Candido', 'Carlos Rodrigues Brandão', 'DaMatta', 'Velho'], 1, '1980.'),
    mc('O mutirão é exemplo de:', ['Mercado', 'Cooperação vizinha e reciprocidade', 'Burocracia', 'Anomia'], 1, 'Bairro rural.'),
    mc('O Documento de Aparecida é de:', ['1968', '1979', '1992', '2007'], 3, 'CELAM.'),
    mc('Comparar etnografias exige olhar, entre outros, o:', ['Tempo de campo e os métodos', 'Número de páginas', 'Editora', 'Preço'], 0, 'Critérios de método.'),
    disc('Entregue a comparação de duas etnografias brasileiras pelos seis critérios: grupo, tempo de campo, métodos, conceitos, conclusões e limites.', ['Duas etnografias', 'Seis critérios', 'Comparação', 'Conclusão']),
  ],
  resumo: ['Candido (1964): caipira, mínimos vitais e sociais, bairro rural, mutirão.', 'Brandão (1980): religião popular.', 'Aparecida (2007): piedade popular como tesouro.', 'Comparar etnografias: seis critérios.', 'Urbanização e mudança cultural.'],
  referencias: [
    { texto: 'Antonio Candido, Os parceiros do Rio Bonito (1964).' },
    { texto: 'Carlos Rodrigues Brandão, Os deuses do povo (1980).' },
    { texto: 'CELAM, Documento de Aparecida (2007).' },
    { texto: 'Papa Francisco, Evangelii Gaudium (2013), n. 122–126.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação de etnografias', 'Ler os trechos indicados'],
  revisao: [['Candido', 'Mínimos vitais e sociais.'], ['Brandão', 'Deuses do povo.'], ['Aparecida', 'Piedade popular.']],
  avancado: {
    texto: `<h3>Festa do Divino</h3>
<p>A Festa do Divino Espírito Santo, de origem portuguesa, é celebrada em muitas regiões do Brasil, com coroação do imperador, folias e distribuição de alimentos ${tag('fato')}; algumas de suas formas foram registradas como patrimônio imaterial ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Iphan, dossiês de registro de bens imateriais (consultar o site do Iphan).' }],
    exercicios: [
      mc('A Festa do Divino tem origem:', ['Africana', 'Portuguesa', 'Indígena', 'Francesa'], 1, 'Tradição ibérica.'),
      mc('Na Festa do Divino há:', ['Coroação do imperador e folias', 'Apenas missas', 'Corrida de touros', 'Nada disso'], 0, 'Elementos típicos.'),
      mc('Bens culturais imateriais são registrados pelo:', ['IBGE', 'Iphan', 'INPE', 'Ipea'], 1, 'Patrimônio.'),
      disc('Descreva uma Festa do Divino ou folia de Reis da sua região com os conceitos de rito, dádiva e piedade popular.', ['Festa descrita', 'Conceitos', 'Fontes', 'Separação dos planos'])],
  },
}),

avaliacao('an4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a antropologia no e do Brasil e duas discursivas de aplicação e comparação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia a comparação de etnografias.</li><li>Revise os dados indígenas e quilombolas.</li></ul>`,
[
  disc('Compare o estudo de um povo indígena e o de uma comunidade quilombola ou caipira: método, conceitos, relação com o Estado e direitos envolvidos.', ['Dois grupos', 'Métodos', 'Conceitos', 'Direitos e Estado']),
  disc('Mostre como a antropologia brasileira passou da explicação racial à cultural, com três autores de épocas diferentes, distinguindo valor documental e premissas rejeitadas.', ['Três autores', 'Passagem explicada', 'Valor documental x premissas', 'Conclusão']),
]),
];
