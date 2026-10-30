// Direito I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Direito).
// Direito, moral e justiça; fontes, ramos, pessoa e negócio jurídico; hierarquia das normas e interpretação;
// jurisprudência, precedentes e o método de análise de casos.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dr1-1', titulo: 'O que é o direito: justiça, moral, norma e sanção', duracao: '120 min',
  aprendera: ['Definir justiça segundo a tradição romana', 'Distinguir direito e moral', 'Explicar a norma jurídica e a sanção', 'Distinguir direito natural e direito positivo'],
  prereq: ['Filosofia do direito (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>O que torna uma regra "direito"? Basta que o Estado a imponha, ou ela precisa ser justa?</p>
<h3>Justiça</h3>
<p>O jurista romano Ulpiano definiu a justiça como a vontade constante e perpétua de dar a cada um o seu direito, e resumiu os preceitos do direito em viver honestamente, não lesar outrem e dar a cada um o que é seu (Digesto 1.1.10) ${tag('fato')}.</p>
<h3>Direito e moral</h3>
<p>Direito e moral regulam condutas, mas diferem: a moral alcança também as intenções e se dirige à consciência; o direito regula sobretudo atos externos e conta com sanção organizada pelo Estado ${tag('fato')}. Muitas normas coincidem (não matar, não roubar); outras são só morais (gratidão) ou só jurídicas (o lado da via em que se dirige) ${tag('fato')}.</p>
<h3>Norma e sanção</h3>
<p>A norma jurídica prescreve uma conduta e, em geral, uma consequência para o descumprimento ${tag('fato')}. A Lei de Introdução às Normas do Direito Brasileiro afirma que ninguém se escusa de cumprir a lei alegando que não a conhece (art. 3º) ${tag('fato')}.</p>
<h3>Direito natural e positivo</h3>
<p>Direito positivo é o estabelecido pela autoridade humana; direito natural, o conjunto de princípios de justiça acessíveis à razão, que fundam e limitam o positivo ${tag('fato')}. Santo Tomás ensina que a lei humana deriva da lei natural e que a lei contrária a ela não é propriamente lei (I-II, q. 95, a. 2) ${tag('doutrina')}. O Catecismo trata da lei natural nos §§ 1954–1960 ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Justiça (Ulpiano)', 'Vontade constante e perpétua de dar a cada um o seu direito.'],
    ['Norma jurídica', 'Regra de conduta com consequência para o descumprimento.'],
    ['Sanção', 'Consequência prevista para quem descumpre a norma.'],
    ['Direito positivo', 'Direito estabelecido pela autoridade humana.'],
    ['Direito natural', 'Princípios de justiça acessíveis à razão que fundam e limitam o positivo.'],
  ],
  exemplos: `<p><strong>Três situações:</strong> agradecer a quem nos ajudou é dever moral, sem sanção jurídica; dirigir pela direita é dever jurídico sem conteúdo moral próprio (poderia ser pela esquerda, como em outros países); não furtar é dever moral e jurídico ao mesmo tempo. Distinguir os casos ajuda a entender o que o direito pode e não pode fazer.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Digesto, compilado por ordem de Justiniano no século VI, reuniu trechos de juristas romanos como Ulpiano ${tag('fato')}. <strong>No Brasil:</strong> a Constituição de 1988 define o país como Estado democrático de direito (art. 1º) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o direito não pode ser só a vontade do mais forte', tag: 'argumento',
    premissas: ['Se o direito fosse apenas o que o poder impõe, qualquer ordem do poder seria direito, inclusive a mais injusta.', 'Mas julgamos que certas ordens — perseguir inocentes, escravizar — são injustas mesmo quando impostas por lei.', 'Esse juízo supõe um critério de justiça anterior à vontade do poder.'],
    conclusao: 'Logo, o direito positivo pressupõe um critério de justiça que não se reduz à força.',
    nota: 'Os julgamentos de Nuremberg, após a Segunda Guerra, recolocaram essa questão de modo dramático.',
  },
  objecoes: [
    { objecao: 'Falar em direito natural é impor uma religião ao direito.', tag: 'debate',
      resposta: 'A tradição do direito natural sustenta princípios acessíveis à razão de qualquer pessoa, independentemente da fé, e foi formulada também por autores não cristãos, como Aristóteles e Cícero. A fé confirma e ilumina esses princípios, mas eles podem ser discutidos racionalmente por todos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: em três situações cotidianas, distinga o que é dever moral, dever jurídico ou ambos, justificando com a norma quando houver.</p>`,
  fonte: {
    obra: 'Digesto 1.1.10 (Ulpiano); Santo Tomás de Aquino, Suma Teológica I-II, q. 95, a. 2; Decreto-Lei nº 4.657/1942 (LINDB), art. 3º', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Em Ulpiano, a definição de justiça e os três preceitos. Em Tomás, a relação entre lei humana e lei natural. Na LINDB, o dever de cumprir a lei.</p>`,
  },
  perguntas: [
    { p: 'Como Ulpiano define a justiça?', r: 'Como a vontade constante e perpétua de dar a cada um o seu direito.' },
    { p: 'Qual a diferença entre direito e moral?', r: 'A moral alcança intenções e se dirige à consciência; o direito regula atos externos com sanção organizada.' },
    { p: 'O que diz o art. 3º da LINDB?', r: 'Que ninguém se escusa de cumprir a lei alegando que não a conhece.' },
  ],
  exercicios: [
    mc('"Dar a cada um o seu" é fórmula de:', ['Kelsen', 'Ulpiano', 'Montesquieu', 'Beccaria'], 1, 'Digesto 1.1.10.'),
    mc('Dirigir pela direita é dever:', ['Só moral', 'Só jurídico', 'Moral e jurídico', 'Nenhum'], 1, 'Convenção legal.'),
    mc('Para Tomás, a lei humana contrária à lei natural:', ['É lei perfeita', 'Não é propriamente lei', 'É doutrina', 'É costume'], 1, 'I-II, q. 95, a. 2.'),
    mc('O Estado democrático de direito está na CF, art.:', ['1º', '5º', '60', '225'], 0, 'Princípios fundamentais.'),
    mc('O Digesto foi compilado sob:', ['Augusto', 'Justiniano', 'Carlos Magno', 'Napoleão'], 1, 'Século VI.'),
    disc('Distinga em três situações cotidianas o dever moral, o jurídico ou ambos, com justificativa.', ['Três situações', 'Classificação', 'Normas citadas', 'Justificativa']),
  ],
  resumo: ['Ulpiano: justiça e três preceitos.', 'Direito e moral.', 'Norma e sanção; LINDB art. 3º.', 'Direito natural e positivo.', 'Tomás I-II q. 95; CIC 1954–1960.'],
  referencias: [
    { texto: 'Justiniano, Digesto (533).' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica I-II, qq. 90–97.' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1954–1960.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a distinção das três situações', 'Ler os textos indicados'],
  revisao: [['Ulpiano', 'Dar a cada um o seu.'], ['LINDB 3º', 'Ninguém alega ignorância.'], ['Tomás', 'Lei injusta não é lei.']],
  avancado: {
    texto: `<h3>A fórmula de Radbruch</h3>
<p>Gustav Radbruch, jurista alemão, após a experiência nazista, propôs em 1946 que a lei positiva deve ser aplicada mesmo quando injusta, salvo quando a contradição com a justiça atinge grau tão insuportável que a lei deve ceder à justiça ${tag('fato')}. A fórmula foi usada por tribunais alemães em julgamentos posteriores ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Gustav Radbruch, "Injustiça legal e direito supralegal" (1946).' }],
    exercicios: [
      mc('A fórmula de Radbruch é de:', ['1919', '1946', '1961', '1988'], 1, 'Após a guerra.'),
      mc('Para Radbruch, a lei injusta deve ceder quando a injustiça é:', ['Pequena', 'Insuportável', 'Qualquer', 'Nunca'], 1, 'Grau extremo.'),
      mc('A fórmula foi usada por tribunais:', ['Brasileiros', 'Alemães', 'Romanos', 'Nenhum'], 1, 'Julgamentos posteriores.'),
      disc('Compare a fórmula de Radbruch com a tese de Tomás sobre a lei injusta.', ['Radbruch', 'Tomás', 'Semelhanças e diferenças', 'Avaliação'])],
  },
}),

aula({
  id: 'dr1-2', titulo: 'Vocabulário jurídico: fontes, ramos, pessoa, capacidade e negócio jurídico', duracao: '150 min',
  aprendera: ['Identificar as fontes do direito brasileiro', 'Distinguir os ramos do direito público e privado', 'Explicar personalidade e capacidade no Código Civil', 'Identificar os requisitos de validade do negócio jurídico'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>"Lei", "jurisprudência", "capacidade", "negócio jurídico": sem vocabulário preciso, não se lê uma norma nem se entende uma decisão.</p>
<h3>Fontes</h3>
<p>No Brasil, a principal fonte é a lei; quando a lei é omissa, o juiz decide de acordo com a analogia, os costumes e os princípios gerais de direito (LINDB, art. 4º) ${tag('fato')}. A jurisprudência (decisões reiteradas dos tribunais) e a doutrina (obras dos juristas) orientam a interpretação ${tag('fato')}.</p>
<h3>Ramos</h3>
<p>O direito público regula a organização do Estado e suas relações com os particulares — constitucional, administrativo, tributário, penal, processual; o privado regula as relações entre particulares — civil e empresarial ${tag('fato')}. O direito do trabalho combina elementos dos dois ${tag('interpretacao')}.</p>
<h3>Pessoa e capacidade</h3>
<p>A personalidade civil da pessoa começa do nascimento com vida, mas a lei põe a salvo, desde a concepção, os direitos do nascituro (Código Civil, art. 2º) ${tag('fato')}. A maioridade civil se atinge aos 18 anos (art. 5º); os menores de 16 anos são absolutamente incapazes de exercer pessoalmente os atos da vida civil (art. 3º) ${tag('fato')}.</p>
<h3>Negócio jurídico</h3>
<p>A validade do negócio jurídico requer agente capaz, objeto lícito, possível e determinado ou determinável, e forma prescrita ou não proibida em lei (Código Civil, art. 104) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Fonte do direito', 'Origem das normas jurídicas: lei, costume, jurisprudência, doutrina, princípios.'],
    ['Jurisprudência', 'Conjunto de decisões reiteradas dos tribunais.'],
    ['Personalidade', 'Aptidão para ser titular de direitos e deveres.'],
    ['Capacidade de fato', 'Aptidão para exercer pessoalmente os atos da vida civil.'],
    ['Negócio jurídico', 'Declaração de vontade destinada a produzir efeitos jurídicos, como o contrato.'],
  ],
  exemplos: `<p><strong>Um contrato inválido:</strong> um menino de 14 anos vende sozinho a moto do pai a um vizinho. O negócio falha em dois requisitos do art. 104: o agente é incapaz (menor de 16) e o objeto não lhe pertence. O vocabulário permite dizer com precisão por que o contrato não vale.</p>`,
  contexto: `<p><strong>No mundo:</strong> a divisão entre direito público e privado remonta ao direito romano ${tag('fato')}. <strong>No Brasil:</strong> o Código Civil de 2002 (Lei nº 10.406) substituiu o de 1916 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lei protege os direitos do nascituro', tag: 'argumento',
    premissas: ['O nascituro é um ser humano em desenvolvimento, já concebido.', 'Seus interesses — herança, saúde, vida — podem ser afetados antes do nascimento.', 'O Código Civil põe a salvo esses direitos desde a concepção (art. 2º).'],
    conclusao: 'Logo, mesmo antes da personalidade plena, o direito brasileiro reconhece e protege o nascituro.',
    nota: 'A doutrina da Igreja afirma que a vida humana deve ser respeitada e protegida desde a concepção (CIC 2270).',
  },
  objecoes: [
    { objecao: 'Jurisprudência e doutrina são só opinião; só a lei vale.', tag: 'debate',
      resposta: 'A lei é a fonte principal, mas precisa ser interpretada e aplicada, e as decisões reiteradas dos tribunais dão estabilidade a essa interpretação. No Brasil, súmulas vinculantes e precedentes obrigatórios têm efeito vinculante previsto em lei. A doutrina, embora não obrigue, orienta juízes e advogados.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um glossário de 20 termos jurídicos com o artigo correspondente da Constituição ou do Código Civil para cada um.</p>`,
  fonte: {
    obra: 'Decreto-Lei nº 4.657/1942 (LINDB), arts. 3º e 4º; Lei nº 10.406/2002 (Código Civil), arts. 1º a 5º e 104', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na LINDB, as fontes em caso de omissão. No Código Civil, personalidade, capacidade e requisitos do negócio jurídico.</p>`,
  },
  perguntas: [
    { p: 'O que o juiz faz quando a lei é omissa?', r: 'Decide de acordo com a analogia, os costumes e os princípios gerais de direito (LINDB, art. 4º).' },
    { p: 'Quando começa a personalidade civil?', r: 'Do nascimento com vida, ressalvados os direitos do nascituro desde a concepção.' },
    { p: 'Quais os requisitos do negócio jurídico?', r: 'Agente capaz, objeto lícito, possível e determinável, e forma prescrita ou não proibida.' },
  ],
  exercicios: [
    mc('A maioridade civil no Brasil é aos:', ['16 anos', '18 anos', '21 anos', '14 anos'], 1, 'CC art. 5º.'),
    mc('São absolutamente incapazes os menores de:', ['12 anos', '16 anos', '18 anos', '21 anos'], 1, 'CC art. 3º.'),
    mc('O direito penal pertence ao direito:', ['Privado', 'Público', 'Canônico', 'Internacional privado'], 1, 'Ramos.'),
    mc('Os requisitos do negócio jurídico estão no CC, art.:', ['2º', '5º', '104', '186'], 2, 'Validade.'),
    mc('O Código Civil vigente é de:', ['1916', '1988', '2002', '2015'], 2, 'Lei 10.406.'),
    disc('Apresente o glossário de 20 termos jurídicos com artigos da Constituição ou do Código Civil.', ['20 termos', 'Definições', 'Artigos citados', 'Clareza']),
  ],
  resumo: ['Fontes: lei; LINDB art. 4º.', 'Jurisprudência e doutrina.', 'Público e privado.', 'Personalidade e nascituro (CC art. 2º); capacidade.', 'Negócio jurídico (CC art. 104).'],
  referencias: [
    { texto: 'Decreto-Lei nº 4.657, de 1942 (LINDB).' },
    { texto: 'Lei nº 10.406, de 2002 (Código Civil).' },
    { texto: 'Catecismo da Igreja Católica (1992), § 2270.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler os artigos indicados'],
  revisao: [['LINDB 4º', 'Omissão da lei.'], ['CC 2º', 'Nascituro.'], ['CC 104', 'Negócio jurídico.']],
  avancado: {
    texto: `<h3>Pessoa jurídica</h3>
<p>Além das pessoas naturais, o direito reconhece pessoas jurídicas — associações, fundações, sociedades, entes públicos — capazes de ter direitos e deveres próprios (Código Civil, arts. 40 a 44) ${tag('fato')}. As organizações religiosas são pessoas jurídicas de direito privado, e é vedado ao poder público negar-lhes reconhecimento (art. 44, IV e § 1º) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Lei nº 10.406, de 2002 (Código Civil), arts. 40–69.' }],
    exercicios: [
      mc('Organizações religiosas são pessoas jurídicas de direito:', ['Público', 'Privado', 'Internacional', 'Canônico apenas'], 1, 'CC art. 44.'),
      mc('Uma fundação é pessoa:', ['Natural', 'Jurídica', 'Incapaz', 'Inexistente'], 1, 'Arts. 62 e seguintes.'),
      mc('O poder público pode negar reconhecimento a organizações religiosas?', ['Sim, sempre', 'Não, é vedado', 'Só aos domingos', 'Só às novas'], 1, 'Art. 44, § 1º.'),
      disc('Explique por que o direito reconhece pessoas jurídicas e dê dois exemplos de sua cidade.', ['Conceito', 'Fundamento', 'Exemplos', 'Artigos'])],
  },
}),

aula({
  id: 'dr1-3', titulo: 'Hierarquia das normas, interpretação e precedentes', duracao: '150 min',
  aprendera: ['Ordenar as normas pela hierarquia', 'Aplicar os métodos de interpretação', 'Explicar o controle de constitucionalidade', 'Conhecer súmulas vinculantes e precedentes obrigatórios'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quando duas normas parecem dizer coisas diferentes, qual prevalece? E como interpretar uma norma ambígua?</p>
<h3>Hierarquia</h3>
<p>A Constituição está no topo; abaixo, as leis complementares, ordinárias e medidas provisórias; abaixo, decretos e atos administrativos ${tag('fato')}. Hans Kelsen representou essa ordem como uma pirâmide em que cada norma retira sua validade da superior ${tag('fato')}. Norma contrária à Constituição é inconstitucional, e o Supremo Tribunal Federal é o guardião da Constituição (art. 102) ${tag('fato')}.</p>
<h3>Interpretação</h3>
<p>Friedrich Carl von Savigny distinguiu os elementos gramatical, lógico, histórico e sistemático da interpretação ${tag('fato')}. A interpretação teleológica busca o fim da norma; a LINDB manda o juiz atender aos fins sociais da lei e às exigências do bem comum (art. 5º) ${tag('fato')}.</p>
<h3>Precedentes</h3>
<p>A Emenda Constitucional nº 45/2004 criou as súmulas vinculantes do STF (art. 103-A) ${tag('fato')}. O Código de Processo Civil de 2015 determinou que juízes e tribunais observem precedentes como súmulas vinculantes e julgamentos de casos repetitivos (art. 927) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Hierarquia normativa', 'Ordem de prevalência entre as normas.'],
    ['Inconstitucionalidade', 'Contradição de uma norma com a Constituição.'],
    ['Interpretação sistemática', 'Leitura da norma em conjunto com o sistema.'],
    ['Interpretação teleológica', 'Leitura da norma segundo seu fim.'],
    ['Súmula vinculante', 'Enunciado do STF de observância obrigatória (CF art. 103-A).'],
  ],
  exemplos: `<p><strong>Uma placa ambígua:</strong> "Proibida a entrada de veículos no parque." Uma ambulância pode entrar para socorrer alguém? A leitura gramatical diria que não; a teleológica pergunta pelo fim da regra (proteger os frequentadores) e conclui que a ambulância serve a esse fim. O exemplo, clássico na teoria do direito, mostra por que a interpretação não é mecânica.</p>`,
  contexto: `<p><strong>No mundo:</strong> no common law, os precedentes judiciais têm papel central; nos sistemas romano-germânicos, como o brasileiro, a lei escrita é a fonte principal ${tag('fato')}. <strong>No Brasil:</strong> o CPC de 2015 aproximou o sistema brasileiro de uma cultura de precedentes ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a hierarquia das normas garante a segurança jurídica', tag: 'argumento',
    premissas: ['Sem critério de prevalência, normas conflitantes deixariam as pessoas sem saber o que vale.', 'A hierarquia indica qual norma prevalece em caso de conflito.', 'Saber o que vale permite planejar a vida e confiar nas regras.'],
    conclusao: 'Logo, a hierarquia das normas é condição da segurança jurídica.',
    nota: 'Há outros critérios de solução de conflitos, como o da norma especial e o da norma posterior.',
  },
  objecoes: [
    { objecao: 'Interpretar é sempre inventar; o juiz faz o que quer.', tag: 'debate',
      resposta: 'Toda aplicação exige interpretação, e há margem real de escolha, mas a interpretação é limitada pelo texto, pelo sistema, pela história e pelos precedentes. Decisões devem ser fundamentadas (CF, art. 93, IX) e podem ser revistas. Reconhecer a margem não equivale a dizer que tudo é arbitrário.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: localize um artigo da Constituição, a lei que o regulamenta e uma decisão do STF ou do STJ sobre o tema, e interprete-os com dois métodos.</p>`,
  fonte: {
    obra: 'Constituição de 1988, arts. 59, 93, IX, 102 e 103-A; Decreto-Lei nº 4.657/1942 (LINDB), art. 5º; Lei nº 13.105/2015 (CPC), art. 927', link: { url: 'https://portal.stf.jus.br', rotulo: 'Supremo Tribunal Federal' },
    orientacao: `<p>Na Constituição, as espécies normativas (art. 59) e a súmula vinculante. Na LINDB, os fins sociais. No CPC, o rol de precedentes obrigatórios.</p>`,
  },
  perguntas: [
    { p: 'Qual norma está no topo da hierarquia?', r: 'A Constituição.' },
    { p: 'Quais os elementos da interpretação segundo Savigny?', r: 'Gramatical, lógico, histórico e sistemático.' },
    { p: 'Que emenda criou as súmulas vinculantes?', r: 'A EC nº 45/2004.' },
  ],
  exercicios: [
    mc('A pirâmide normativa é associada a:', ['Kelsen', 'Savigny', 'Beccaria', 'Ulpiano'], 0, 'Teoria pura.'),
    mc('O guardião da Constituição é o:', ['STJ', 'STF', 'TSE', 'Senado'], 1, 'Art. 102.'),
    mc('Os fins sociais da lei estão na LINDB, art.:', ['3º', '4º', '5º', '6º'], 2, 'Teleológica.'),
    mc('O rol de precedentes obrigatórios está no CPC, art.:', ['1º', '489', '927', '1.015'], 2, '2015.'),
    mc('Ler a norma em conjunto com outras é interpretação:', ['Gramatical', 'Sistemática', 'Histórica', 'Literal'], 1, 'Sistema.'),
    disc('Localize um artigo constitucional, a lei regulamentadora e uma decisão superior, interpretando-os com dois métodos.', ['Fontes', 'Dois métodos', 'Decisão', 'Conclusão']),
  ],
  resumo: ['Hierarquia: Constituição no topo.', 'Kelsen: pirâmide.', 'Savigny: quatro elementos; teleológica (LINDB art. 5º).', 'STF guardião; súmula vinculante (EC 45/2004).', 'CPC 2015, art. 927.'],
  referencias: [
    { texto: 'Hans Kelsen, Teoria pura do direito (1934).' },
    { texto: 'Lei nº 13.105, de 2015 (Código de Processo Civil).' },
    { texto: 'Constituição da República Federativa do Brasil (1988).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a interpretação com fontes', 'Consultar as fontes oficiais'],
  revisao: [['Kelsen', 'Pirâmide.'], ['Savigny', 'Quatro elementos.'], ['103-A', 'Súmula vinculante.']],
  avancado: {
    texto: `<h3>Controle concentrado e difuso</h3>
<p>No Brasil, qualquer juiz pode deixar de aplicar uma lei inconstitucional num caso concreto (controle difuso), e o STF pode declarar a inconstitucionalidade de uma lei com efeito geral em ações como a ADI (controle concentrado) ${tag('fato')}. O sistema combina tradições americana e europeia ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Constituição da República Federativa do Brasil (1988), arts. 97, 102 e 103.' }],
    exercicios: [
      mc('O controle feito por qualquer juiz num caso concreto é o:', ['Concentrado', 'Difuso', 'Político', 'Prévio'], 1, 'Caso concreto.'),
      mc('A ADI é instrumento de controle:', ['Difuso', 'Concentrado', 'Administrativo', 'Eleitoral'], 1, 'STF.'),
      mc('O sistema brasileiro combina tradições:', ['Americana e europeia', 'Só inglesa', 'Só romana', 'Nenhuma'], 0, 'Interpretação.'),
      disc('Explique a diferença entre controle difuso e concentrado com um exemplo.', ['Difuso', 'Concentrado', 'Exemplo', 'Efeitos'])],
  },
}),

aula({
  id: 'dr1-4', titulo: 'Analisar casos e pesquisar fontes: método, ética e acesso à justiça', duracao: '150 min',
  aprendera: ['Aplicar o método de análise de casos (fatos, questão, norma, aplicação, conclusão)', 'Pesquisar legislação e jurisprudência em fontes oficiais', 'Conhecer princípios da ética profissional jurídica', 'Conhecer meios de acesso à justiça'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como raciocinar sobre um caso jurídico de modo ordenado, com fontes confiáveis e honestidade?</p>
<h3>O método do caso</h3>
<p>Uma análise ordenada segue cinco passos: fatos relevantes; questão jurídica; norma aplicável; aplicação da norma aos fatos; conclusão ${tag('fato')}. O método é conhecido em inglês pela sigla IRAC ${tag('fato')}.</p>
<h3>Fontes oficiais</h3>
<p>Leis devem ser consultadas na versão atualizada do Portal da Legislação do Planalto; decisões, nos sites dos tribunais ${tag('fato')}. Textos de terceiros podem estar desatualizados ou errados ${tag('argumento')}.</p>
<h3>Ética</h3>
<p>O Estatuto da Advocacia (Lei nº 8.906/1994) e o Código de Ética da OAB regulam a atuação dos advogados ${tag('fato')}. Rui Barbosa, na <em>Oração aos moços</em> (1921), advertiu que justiça atrasada não é justiça, senão injustiça qualificada e manifesta ${tag('fato')}.</p>
<h3>Acesso à justiça</h3>
<p>A Constituição garante assistência jurídica integral e gratuita aos que comprovarem insuficiência de recursos, por meio da Defensoria Pública (arts. 5º, LXXIV, e 134) ${tag('fato')}. Os Juizados Especiais (Lei nº 9.099/1995) julgam causas de menor complexidade com procedimento simplificado ${tag('fato')}.</p>`,
  vocabulario: [
    ['Questão jurídica', 'A pergunta de direito que o caso coloca.'],
    ['Subsunção', 'Enquadramento dos fatos na hipótese da norma.'],
    ['Defensoria Pública', 'Instituição que presta assistência jurídica gratuita.'],
    ['Juizado Especial', 'Órgão para causas de menor complexidade (Lei 9.099/1995).'],
    ['Fundamentação', 'Exposição das razões de uma decisão.'],
  ],
  exemplos: `<p><strong>Um caso em cinco passos:</strong> (1) Fatos: Ana comprou uma geladeira que parou em 20 dias; a loja recusou a troca. (2) Questão: Ana tem direito a reparo, troca ou devolução? (3) Norma: Código de Defesa do Consumidor, art. 18. (4) Aplicação: há vício do produto; o fornecedor tem 30 dias para sanar; não sanado, o consumidor pode escolher a troca, a devolução do valor ou o abatimento. (5) Conclusão: Ana pode exigir o reparo em 30 dias e, se não houver, escolher uma das alternativas.</p>`,
  contexto: `<p><strong>No mundo:</strong> o acesso à justiça foi estudado por Mauro Cappelletti e Bryant Garth, que descreveram "ondas" de reformas para torná-lo efetivo ${tag('fato')}. <strong>No Brasil:</strong> a Defensoria Pública está prevista na Constituição de 1988 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a fundamentação das decisões é exigência de justiça', tag: 'argumento',
    premissas: ['Uma decisão sem razões não pode ser compreendida nem contestada.', 'As partes têm direito de saber por que perderam ou ganharam.', 'A fundamentação permite controlar o arbítrio e recorrer.'],
    conclusao: 'Logo, decisões judiciais devem ser fundamentadas, como exige a Constituição (art. 93, IX).',
    nota: 'O mesmo vale para os trabalhos do estudante: conclusões sem razões não valem como análise jurídica.',
  },
  objecoes: [
    { objecao: 'Basta pesquisar na internet; não é preciso fonte oficial.', tag: 'debate',
      resposta: 'Leis mudam com frequência e muitos sites trazem versões antigas ou resumos imprecisos. Uma análise baseada em norma revogada é errada, por melhor que seja o raciocínio. A fonte oficial atualizada é o ponto de partida obrigatório.' },
  ],
  aplicacao: `<p>Analise um caso simples do cotidiano (consumo, vizinhança, trânsito) com os cinco passos, citando a norma na fonte oficial atualizada.</p>`,
  fonte: {
    obra: 'Rui Barbosa, Oração aos moços (1921); Lei nº 8.078/1990 (Código de Defesa do Consumidor), art. 18; Lei nº 9.099/1995', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Em Rui Barbosa, as passagens sobre o dever do juiz e a lentidão da justiça. No CDC, o regime do vício do produto. Na Lei 9.099, a competência dos Juizados.</p>`,
  },
  perguntas: [
    { p: 'Quais os cinco passos da análise de caso?', r: 'Fatos, questão, norma, aplicação e conclusão.' },
    { p: 'Que instituição presta assistência jurídica gratuita?', r: 'A Defensoria Pública.' },
    { p: 'O que disse Rui Barbosa sobre a justiça atrasada?', r: 'Que não é justiça, senão injustiça qualificada e manifesta.' },
  ],
  exercicios: [
    mc('O primeiro passo da análise de caso é:', ['Conclusão', 'Fatos relevantes', 'Norma', 'Recurso'], 1, 'Método.'),
    mc('A Oração aos moços é de:', ['Rui Barbosa', 'Clóvis Beviláqua', 'Pontes de Miranda', 'Joaquim Nabuco'], 0, '1921.'),
    mc('Os Juizados Especiais são regulados pela Lei:', ['8.078/1990', '9.099/1995', '8.906/1994', '10.406/2002'], 1, 'Menor complexidade.'),
    mc('O Estatuto da Advocacia é a Lei:', ['8.906/1994', '9.099/1995', '13.105/2015', '8.078/1990'], 0, 'OAB.'),
    mc('A fundamentação das decisões é exigida pela CF, art.:', ['5º', '93, IX', '102', '226'], 1, 'Controle do arbítrio.'),
    disc('Analise um caso do cotidiano com os cinco passos e a norma na fonte oficial.', ['Fatos e questão', 'Norma', 'Aplicação', 'Conclusão']),
  ],
  resumo: ['Cinco passos: fatos, questão, norma, aplicação, conclusão.', 'Fontes oficiais atualizadas.', 'Estatuto da Advocacia; Rui Barbosa.', 'Defensoria Pública; Juizados (Lei 9.099/1995).', 'Fundamentação (CF art. 93, IX).'],
  referencias: [
    { texto: 'Rui Barbosa, Oração aos moços (1921).' },
    { texto: 'Mauro Cappelletti e Bryant Garth, Acesso à justiça (1978).' },
    { texto: 'Lei nº 8.078, de 1990 (Código de Defesa do Consumidor).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do caso', 'Consultar as fontes oficiais'],
  revisao: [['Cinco passos', 'Método do caso.'], ['Defensoria', 'Gratuita.'], ['Rui Barbosa', 'Justiça atrasada.']],
  avancado: {
    texto: `<h3>Meios consensuais de solução de conflitos</h3>
<p>Mediação e conciliação buscam que as próprias partes cheguem a um acordo, com auxílio de terceiro imparcial ${tag('fato')}. A Lei de Mediação (Lei nº 13.140/2015) e o CPC de 2015 incentivam esses meios ${tag('fato')}. A tradição cristã valoriza a reconciliação antes do litígio (Mt 5,25) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Lei nº 13.140, de 2015 (Lei de Mediação).' }],
    exercicios: [
      mc('A Lei de Mediação é de:', ['1995', '2002', '2015', '2020'], 2, 'Lei 13.140.'),
      mc('Na mediação, quem decide o acordo são:', ['O juiz', 'As próprias partes', 'O mediador', 'O Ministério Público'], 1, 'Consenso.'),
      mc('A reconciliação antes do litígio aparece em:', ['Mt 5,25', 'Gn 1,1', 'Ap 21', 'Sl 1'], 0, 'Evangelho.'),
      disc('Compare mediação e processo judicial para um conflito de vizinhança.', ['Mediação', 'Processo', 'Vantagens e limites', 'Recomendação'])],
  },
}),

avaliacao('dr1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o conceito de direito, o vocabulário, a hierarquia, a interpretação e o método do caso, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário e a análise de caso.</li><li>Revise os artigos da LINDB e do Código Civil estudados.</li></ul>`,
[
  disc('Analise um caso hipotético com os cinco passos, indicando a hierarquia das normas envolvidas e o método de interpretação usado.', ['Cinco passos', 'Hierarquia', 'Interpretação', 'Conclusão fundamentada']),
  disc('Explique a relação entre direito natural e direito positivo com Ulpiano, Tomás e o Catecismo, e aplique-a a uma lei brasileira.', ['Ulpiano', 'Tomás', 'Catecismo', 'Aplicação']),
]),
];
