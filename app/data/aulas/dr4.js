// Direito IV — os grandes ramos do direito brasileiro (etapa 8 do percurso de Direito).
// Direito constitucional e direitos fundamentais; direito civil (pessoa, família, contratos, propriedade, sucessões);
// direito penal e processo; direito administrativo e tributário.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dr4-1', titulo: 'Direito constitucional: estrutura da Constituição, direitos fundamentais e remédios', duracao: '150 min',
  aprendera: ['Descrever a estrutura da Constituição de 1988', 'Identificar os princípios fundamentais', 'Conhecer as cláusulas pétreas', 'Distinguir os remédios constitucionais'],
  prereq: ['Direito III (módulo DR3)'],
  explicacao: `
<h3>O problema</h3>
<p>A Constituição é a lei maior. Como está organizada, que direitos garante e como se protegem esses direitos?</p>
<h3>Estrutura</h3>
<p>A Constituição de 1988 começa pelos princípios fundamentais (arts. 1º a 4º): soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, e pluralismo político ${tag('fato')}. Seguem os direitos e garantias fundamentais (arts. 5º a 17), a organização do Estado e dos Poderes, a tributação, a ordem econômica e a ordem social ${tag('fato')}.</p>
<h3>Cláusulas pétreas</h3>
<p>Não pode ser objeto de deliberação proposta de emenda tendente a abolir a forma federativa, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais (art. 60, § 4º) ${tag('fato')}.</p>
<h3>Remédios constitucionais</h3>
<p>O habeas corpus protege a liberdade de locomoção; o mandado de segurança, direito líquido e certo contra ato ilegal de autoridade; o habeas data, o acesso e a retificação de dados pessoais; o mandado de injunção, o exercício de direito inviabilizado por falta de norma; a ação popular permite a qualquer cidadão anular ato lesivo ao patrimônio público (art. 5º, LXVIII a LXXIII) ${tag('fato')}.</p>
<h3>Liberdade religiosa</h3>
<p>A Constituição garante a liberdade de consciência e de crença e o livre exercício dos cultos (art. 5º, VI) e veda ao Estado estabelecer cultos ou subvencioná-los, ressalvada a colaboração de interesse público (art. 19, I) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Princípios fundamentais', 'Bases do Estado brasileiro (CF, arts. 1º a 4º).'],
    ['Cláusula pétrea', 'Conteúdo que não pode ser abolido por emenda (art. 60, § 4º).'],
    ['Habeas corpus', 'Remédio que protege a liberdade de locomoção.'],
    ['Mandado de segurança', 'Remédio contra ato ilegal de autoridade que fere direito líquido e certo.'],
    ['Ação popular', 'Ação de qualquer cidadão contra ato lesivo ao patrimônio público.'],
  ],
  exemplos: `<p><strong>Escolhendo o remédio:</strong> uma pessoa presa sem ordem judicial nem flagrante — habeas corpus. Um candidato aprovado em concurso cuja nomeação é negada contra a lei — mandado de segurança. Um cidadão que vê a prefeitura vender um imóvel público por preço vil — ação popular. Cada remédio tem objeto próprio.</p>`,
  contexto: `<p><strong>No mundo:</strong> o habeas corpus tem raízes na tradição inglesa, consolidada pelo Habeas Corpus Act de 1679 ${tag('fato')}. <strong>No Brasil:</strong> a Constituição de 1988 foi chamada por Ulysses Guimarães de "Constituição cidadã" ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que existem cláusulas pétreas', tag: 'argumento',
    premissas: ['Maiorias ocasionais podem querer suprimir direitos ou concentrar o poder.', 'Certos elementos — direitos individuais, separação dos Poderes, voto livre, federação — protegem as condições da própria democracia.', 'Torná-los imunes a emendas impede que sejam abolidos por maiorias passageiras.'],
    conclusao: 'Logo, as cláusulas pétreas protegem a democracia contra sua autodestruição.',
    nota: 'Há debate sobre se é legítimo que uma geração limite as escolhas das seguintes.',
  },
  objecoes: [
    { objecao: 'A Constituição de 1988 é longa demais e por isso não funciona.', tag: 'debate',
      resposta: 'A Constituição é extensa e muito emendada, o que é criticado por constitucionalistas. Mas também ampliou direitos e instituições de controle. Avaliar seu funcionamento exige distinguir problemas do texto de problemas de aplicação e de contexto político.' },
  ],
  aplicacao: `<p>Leia os arts. 1º a 5º da Constituição e identifique três direitos fundamentais, o remédio constitucional que protege cada um e um caso concreto de aplicação.</p>`,
  fonte: {
    obra: 'Constituição de 1988, arts. 1º a 5º, 19 e 60', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Nos arts. 1º a 4º, os princípios fundamentais. No art. 5º, os direitos e remédios. No art. 60, as cláusulas pétreas.</p>`,
  },
  perguntas: [
    { p: 'Quais são as cláusulas pétreas?', r: 'Forma federativa; voto direto, secreto, universal e periódico; separação dos Poderes; direitos e garantias individuais.' },
    { p: 'Que remédio protege a liberdade de locomoção?', r: 'O habeas corpus.' },
    { p: 'Onde está a liberdade religiosa na Constituição?', r: 'No art. 5º, VI (e art. 19, I).' },
  ],
  exercicios: [
    mc('A dignidade da pessoa humana é fundamento da República no art.:', ['1º', '3º', '5º', '60'], 0, 'Inciso III.'),
    mc('Para anular ato lesivo ao patrimônio público, o cidadão usa:', ['Habeas data', 'Ação popular', 'Habeas corpus', 'Mandado de injunção'], 1, 'Art. 5º, LXXIII.'),
    mc('O acesso a dados pessoais em registros públicos é garantido pelo:', ['Habeas data', 'Mandado de segurança', 'Habeas corpus', 'Ação popular'], 0, 'Art. 5º, LXXII.'),
    mc('A separação dos Poderes é cláusula pétrea pelo art.:', ['2º', '5º', '60, § 4º', '102'], 2, 'Emendas.'),
    mc('"Constituição cidadã" foi expressão de:', ['Ulysses Guimarães', 'Rui Barbosa', 'Getúlio Vargas', 'Tancredo Neves'], 0, '1988.'),
    disc('Identifique três direitos fundamentais, o remédio que protege cada um e um caso de aplicação.', ['Três direitos', 'Remédios', 'Casos', 'Artigos']),
  ],
  resumo: ['Princípios fundamentais (arts. 1º–4º).', 'Direitos e garantias (arts. 5º–17).', 'Cláusulas pétreas (art. 60, § 4º).', 'Remédios: HC, MS, HD, MI, ação popular.', 'Liberdade religiosa (art. 5º, VI; art. 19, I).'],
  referencias: [
    { texto: 'Constituição da República Federativa do Brasil (1988).' },
    { texto: 'José Afonso da Silva, Curso de direito constitucional positivo.' },
    { texto: 'Concílio Vaticano II, Dignitatis humanae (1965).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos direitos e remédios', 'Ler os artigos indicados'],
  revisao: [['Art. 60, § 4º', 'Cláusulas pétreas.'], ['HC', 'Locomoção.'], ['Art. 5º, VI', 'Liberdade religiosa.']],
  avancado: {
    texto: `<h3>Direitos sociais</h3>
<p>A Constituição enumera como direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância e a assistência aos desamparados (art. 6º) ${tag('fato')}. Sua efetivação depende de políticas e recursos, e a judicialização desses direitos, como no caso de medicamentos, é tema de debate ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Constituição da República Federativa do Brasil (1988), art. 6º.' }],
    exercicios: [
      mc('Os direitos sociais estão no art.:', ['5º', '6º', '60', '196'], 1, 'Rol.'),
      mc('A judicialização da saúde envolve pedidos de:', ['Medicamentos e tratamentos', 'Votos', 'Impostos', 'Licenças ambientais'], 0, 'Debate.'),
      mc('A efetivação dos direitos sociais depende de:', ['Só da lei', 'Políticas e recursos', 'Nada', 'Só dos juízes'], 1, 'Interpretação.'),
      disc('Discuta os benefícios e riscos da judicialização da saúde no Brasil.', ['Benefícios', 'Riscos', 'Exemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'dr4-2', titulo: 'Direito civil: contratos, propriedade, família e sucessões', duracao: '150 min',
  aprendera: ['Explicar a função social do contrato e a boa-fé objetiva', 'Explicar a função social da propriedade', 'Conhecer as normas básicas de família e sucessões', 'Relacionar propriedade e destinação universal dos bens'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>O direito civil regula a vida cotidiana: contratos, casa, família, herança. Que princípios o orientam?</p>
<h3>Contratos</h3>
<p>O Código Civil afirma que a liberdade contratual será exercida nos limites da função social do contrato (art. 421) e que os contratantes devem guardar a boa-fé na conclusão e na execução do contrato (art. 422) ${tag('fato')}.</p>
<h3>Propriedade</h3>
<p>A Constituição garante o direito de propriedade e determina que ela atenda à sua função social (art. 5º, XXII e XXIII) ${tag('fato')}. O Catecismo ensina a destinação universal dos bens: a propriedade privada é legítima, mas os bens da criação se destinam a todo o gênero humano, e o proprietário deve administrá-los também em benefício dos outros (CIC 2402–2406) ${tag('doutrina')}.</p>
<h3>Família</h3>
<p>A Constituição afirma que a família, base da sociedade, tem especial proteção do Estado (art. 226) ${tag('fato')}. O Código Civil regula casamento, regime de bens, filiação e poder familiar ${tag('fato')}.</p>
<h3>Sucessões</h3>
<p>São herdeiros necessários os descendentes, os ascendentes e o cônjuge (art. 1.845); a eles pertence de pleno direito a metade dos bens da herança, a legítima (art. 1.846) ${tag('fato')}. A outra metade pode ser disposta em testamento ${tag('fato')}.</p>`,
  vocabulario: [
    ['Função social do contrato', 'Limite da liberdade contratual pelo interesse social (CC art. 421).'],
    ['Boa-fé objetiva', 'Dever de lealdade e cooperação entre contratantes (CC art. 422).'],
    ['Função social da propriedade', 'Exigência de que a propriedade atenda ao bem comum (CF art. 5º, XXIII).'],
    ['Herdeiros necessários', 'Descendentes, ascendentes e cônjuge (CC art. 1.845).'],
    ['Legítima', 'Metade da herança reservada aos herdeiros necessários.'],
  ],
  exemplos: `<p><strong>Calculando a legítima:</strong> uma pessoa deixa patrimônio de R$ 600 mil, com dois filhos. A legítima é a metade: R$ 300 mil, dividida entre os herdeiros necessários segundo a lei. A outra metade, R$ 300 mil, pode ser deixada em testamento a quem a pessoa quiser, por exemplo a uma obra de caridade. Sem testamento, tudo segue a ordem legal.</p>`,
  contexto: `<p><strong>No mundo:</strong> a função social da propriedade aparece em constituições do século XX, como a de Weimar (1919) ${tag('fato')}. <strong>No Brasil:</strong> a Constituição prevê a usucapião especial urbana e rural e a desapropriação de imóvel que não cumpre função social ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a boa-fé objetiva protege a confiança nos contratos', tag: 'argumento',
    premissas: ['Contratos não podem prever todas as situações.', 'Nas lacunas, a parte desleal poderia aproveitar-se da outra.', 'A boa-fé impõe deveres de lealdade, informação e cooperação mesmo onde o contrato silencia.'],
    conclusao: 'Logo, a boa-fé objetiva protege a confiança e a justiça nas relações contratuais.',
    nota: 'A tradição moral chama isso de justiça comutativa nas trocas (CIC 2411).',
  },
  objecoes: [
    { objecao: 'A função social da propriedade é o primeiro passo para abolir a propriedade privada.', tag: 'debate',
      resposta: 'A Constituição garante a propriedade e exige sua função social; a doutrina da Igreja defende a propriedade privada como direito natural e afirma sua hipoteca social. Ambas recusam tanto a abolição da propriedade quanto o uso sem qualquer responsabilidade social. O equilíbrio é o ponto.' },
  ],
  aplicacao: `<p>Analise um contrato do cotidiano (aluguel, compra parcelada, prestação de serviço) indicando como se aplicam a função social, a boa-fé e uma cláusula que poderia ser abusiva.</p>`,
  fonte: {
    obra: 'Lei nº 10.406/2002 (Código Civil), arts. 421, 422, 1.845 e 1.846; Constituição de 1988, arts. 5º, XXII–XXIII, e 226; Catecismo, §§ 2402–2406', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>No Código Civil, contratos e sucessões. Na Constituição, propriedade e família. No Catecismo, a destinação universal dos bens.</p>`,
  },
  perguntas: [
    { p: 'Quem são os herdeiros necessários?', r: 'Descendentes, ascendentes e cônjuge.' },
    { p: 'O que é a legítima?', r: 'A metade da herança reservada aos herdeiros necessários.' },
    { p: 'O que ensina o Catecismo sobre a propriedade?', r: 'Que é legítima, mas os bens se destinam a todos e devem beneficiar também os outros.' },
  ],
  exercicios: [
    mc('A boa-fé nos contratos está no CC, art.:', ['104', '421', '422', '1.845'], 2, 'Boa-fé objetiva.'),
    mc('Patrimônio de R$ 800 mil: a legítima é de:', ['R$ 200 mil', 'R$ 400 mil', 'R$ 600 mil', 'R$ 800 mil'], 1, 'Metade.'),
    mc('A função social da propriedade está na CF, art. 5º, inciso:', ['XXII', 'XXIII', 'LXVIII', 'VI'], 1, 'Função social.'),
    mc('A destinação universal dos bens está no CIC:', ['2402–2406', '1883', '2242', '337'], 0, 'Doutrina.'),
    mc('A família tem especial proteção do Estado pela CF, art.:', ['5º', '205', '226', '231'], 2, 'Base da sociedade.'),
    disc('Analise um contrato cotidiano com função social, boa-fé e uma cláusula possivelmente abusiva.', ['Contrato', 'Função social', 'Boa-fé', 'Cláusula abusiva']),
  ],
  resumo: ['CC art. 421: função social do contrato.', 'CC art. 422: boa-fé.', 'CF art. 5º, XXIII: função social da propriedade; CIC 2402.', 'CF art. 226: família.', 'CC arts. 1.845–1.846: legítima.'],
  referencias: [
    { texto: 'Lei nº 10.406, de 2002 (Código Civil).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2402–2406.', livro: 'cic' },
    { texto: 'Constituição da República Federativa do Brasil (1988).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do contrato', 'Ler os artigos indicados'],
  revisao: [['421/422', 'Função social e boa-fé.'], ['Legítima', 'Metade.'], ['CIC 2402', 'Destinação universal.']],
  avancado: {
    texto: `<h3>Responsabilidade civil</h3>
<p>Quem, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, comete ato ilícito (Código Civil, art. 186) e fica obrigado a repará-lo (art. 927) ${tag('fato')}. Em certos casos, a responsabilidade independe de culpa, como nas atividades de risco ${tag('fato')}. A tradição moral ensina o dever de reparar o dano injustamente causado (CIC 2412) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Lei nº 10.406, de 2002 (Código Civil), arts. 186 e 927.' }],
    exercicios: [
      mc('O ato ilícito está definido no CC, art.:', ['104', '186', '421', '1.845'], 1, 'Responsabilidade.'),
      mc('O dever de reparar o dano está no CC, art.:', ['186', '422', '927', '1.846'], 2, 'Indenização.'),
      mc('A responsabilidade sem culpa aplica-se a:', ['Nenhum caso', 'Certas atividades de risco', 'Todos os casos', 'Só contratos'], 1, 'Objetiva.'),
      disc('Analise um caso de dano (acidente, vazamento) com os arts. 186 e 927 e o CIC 2412.', ['Caso', 'Ilícito', 'Reparação', 'Doutrina'])],
  },
}),

aula({
  id: 'dr4-3', titulo: 'Direito penal e processo penal: princípios, crime, pena e garantias', duracao: '150 min',
  aprendera: ['Conhecer os princípios do direito penal', 'Explicar os elementos do crime', 'Conhecer as finalidades da pena', 'Conhecer o ensino da Igreja sobre a pena'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quando o Estado pode punir, como, e para quê?</p>
<h3>Princípios</h3>
<p>Legalidade e anterioridade (não há crime sem lei anterior), presunção de inocência (ninguém será considerado culpado até o trânsito em julgado da sentença penal condenatória, art. 5º, LVII), individualização da pena, proibição de penas cruéis e de morte (salvo guerra declarada) ${tag('fato')}.</p>
<h3>Crime</h3>
<p>Na doutrina penal predominante, crime é fato típico (descrito na lei), ilícito (contrário ao direito, sem excludente como a legítima defesa) e culpável (praticado por agente imputável que podia agir de outro modo) ${tag('fato')}. O Código Penal é o Decreto-Lei nº 2.848/1940, com a parte geral reformada em 1984 ${tag('fato')}.</p>
<h3>Processo</h3>
<p>O Código de Processo Penal é de 1941; o processo deve respeitar o contraditório, a ampla defesa e o devido processo legal (art. 5º, LIV e LV) ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>O Catecismo ensina que a pena tem por fim reparar a desordem causada pela falta, preservar a ordem pública e a segurança das pessoas, e contribuir para a emenda do culpado (CIC 2266) ${tag('doutrina')}. Em 2018, o Catecismo foi revisado para afirmar que a pena de morte é inadmissível, porque atenta contra a inviolabilidade e a dignidade da pessoa (CIC 2267) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Fato típico', 'Conduta descrita na lei como crime.'],
    ['Ilicitude', 'Contrariedade ao direito, sem causa justificante.'],
    ['Culpabilidade', 'Reprovabilidade do agente que podia agir de outro modo.'],
    ['Presunção de inocência', 'Ninguém é culpado antes da condenação definitiva.'],
    ['Legítima defesa', 'Repulsa moderada a agressão injusta, que exclui a ilicitude.'],
  ],
  exemplos: `<p><strong>Analisando um fato:</strong> alguém fere um assaltante que o atacava com faca, usando meios moderados. O fato é típico (lesão corporal), mas não ilícito, pela legítima defesa (Código Penal, art. 25). Sem ilicitude, não há crime. A análise em três passos evita conclusões apressadas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a maioria dos países aboliu a pena de morte na lei ou na prática ${tag('fato')}. <strong>No Brasil:</strong> a população carcerária está entre as maiores do mundo, e o STF reconheceu em 2015 um "estado de coisas inconstitucional" no sistema prisional ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a pena deve visar também a emenda do culpado', tag: 'argumento',
    premissas: ['O condenado continua sendo pessoa, com dignidade e capacidade de mudar.', 'Uma pena só retributiva ignora essa capacidade.', 'A maioria dos condenados voltará ao convívio social.'],
    conclusao: 'Logo, a pena deve buscar também a emenda do condenado, para o bem dele e da sociedade.',
    nota: 'A Lei de Execução Penal (Lei nº 7.210/1984) afirma como objetivo a integração social do condenado.',
  },
  objecoes: [
    { objecao: 'Presunção de inocência só protege criminosos.', tag: 'debate',
      resposta: 'A presunção de inocência protege todos, inclusive inocentes acusados injustamente, e obriga o Estado a provar a culpa. A história mostra condenações de inocentes quando essa garantia falha. A garantia não impede punir culpados; exige que a culpa seja provada.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise um caso hipotético aplicando normas de dois ramos (por exemplo, penal e civil: um acidente com lesão e dano material), indicando crime, responsabilidade civil e garantias processuais.</p>`,
  fonte: {
    obra: 'Decreto-Lei nº 2.848/1940 (Código Penal), arts. 1º, 23 e 25; Constituição de 1988, art. 5º, LIV, LV e LVII; Catecismo, §§ 2266–2267', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>No Código Penal, a legalidade e as excludentes de ilicitude. Na Constituição, as garantias processuais. No Catecismo, a finalidade da pena e a revisão de 2018.</p>`,
  },
  perguntas: [
    { p: 'Quais os elementos do crime na doutrina predominante?', r: 'Fato típico, ilícito e culpável.' },
    { p: 'Quais as finalidades da pena segundo o Catecismo?', r: 'Reparar a desordem, preservar a ordem pública e contribuir para a emenda do culpado.' },
    { p: 'O que afirma o CIC 2267 revisado em 2018?', r: 'Que a pena de morte é inadmissível.' },
  ],
  exercicios: [
    mc('O Código Penal brasileiro é de:', ['1830', '1890', '1940', '1988'], 2, 'DL 2.848.'),
    mc('A legítima defesa exclui a:', ['Tipicidade', 'Ilicitude', 'Pena apenas', 'Prova'], 1, 'CP art. 25.'),
    mc('A presunção de inocência está na CF, art. 5º, inciso:', ['III', 'XXXIX', 'LVII', 'VI'], 2, 'Trânsito em julgado.'),
    mc('O CIC 2267 foi revisado em:', ['1997', '2005', '2018', '2023'], 2, 'Pena de morte.'),
    mc('A Lei de Execução Penal é de:', ['1940', '1984', '1995', '2019'], 1, 'Lei 7.210.'),
    disc('Analise um caso hipotético aplicando normas penais e civis, com as garantias processuais.', ['Fatos', 'Análise penal', 'Análise civil', 'Garantias']),
  ],
  resumo: ['Legalidade, presunção de inocência, proibição de penas cruéis.', 'Crime: típico, ilícito, culpável.', 'CP (1940/1984); CPP (1941).', 'CIC 2266: finalidades da pena.', 'CIC 2267 (2018): pena de morte inadmissível.'],
  referencias: [
    { texto: 'Decreto-Lei nº 2.848, de 1940 (Código Penal).' },
    { texto: 'Lei nº 7.210, de 1984 (Lei de Execução Penal).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2266–2267.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do caso', 'Ler os artigos indicados'],
  revisao: [['Típico, ilícito, culpável', 'Crime.'], ['Art. 5º, LVII', 'Inocência.'], ['CIC 2267', 'Pena de morte.']],
  avancado: {
    texto: `<h3>As APACs</h3>
<p>As Associações de Proteção e Assistência aos Condenados (APAC), surgidas em São José dos Campos em 1972 por iniciativa de voluntários cristãos liderados por Mário Ottoboni, administram unidades prisionais com participação dos próprios presos, sem agentes armados ${tag('fato')}. Seus defensores apontam reincidência menor que a do sistema comum; a comparação exige cuidado com a seleção dos presos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Mário Ottoboni, Vamos matar o criminoso? (método APAC).' }],
    exercicios: [
      mc('As APACs surgiram em:', ['1940', '1972', '1988', '2015'], 1, 'São José dos Campos.'),
      mc('O fundador associado às APACs é:', ['Mário Ottoboni', 'Rui Barbosa', 'Beccaria', 'Ulpiano'], 0, 'Voluntários cristãos.'),
      mc('Comparar a reincidência das APACs exige cuidado com:', ['O clima', 'A seleção dos presos', 'A arquitetura', 'Nada'], 1, 'Debate.'),
      disc('Avalie o método APAC à luz do CIC 2266 e dos dados disponíveis.', ['Método', 'Doutrina', 'Dados', 'Limites'])],
  },
}),

aula({
  id: 'dr4-4', titulo: 'Direito administrativo e tributário: princípios da administração, licitações e tributos', duracao: '150 min',
  aprendera: ['Conhecer os princípios da administração pública', 'Saber o que é licitação e por que existe', 'Distinguir as espécies tributárias', 'Conhecer os princípios tributários e a reforma de 2023'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como o Estado deve agir ao gastar dinheiro público e ao cobrar tributos?</p>
<h3>Administração pública</h3>
<p>A Constituição determina que a administração obedeça aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência (art. 37) ${tag('fato')}. Na administração, legalidade significa que o agente só pode fazer o que a lei autoriza ${tag('fato')}.</p>
<h3>Licitações</h3>
<p>Compras e contratações públicas exigem, em regra, licitação, para garantir igualdade entre interessados e a proposta mais vantajosa ${tag('fato')}. A Lei nº 14.133/2021 é a nova lei de licitações e contratos ${tag('fato')}.</p>
<h3>Tributos</h3>
<p>O Código Tributário Nacional é a Lei nº 5.172/1966 ${tag('fato')}. Espécies: impostos (sem contraprestação específica), taxas (por serviço ou poder de polícia), contribuições de melhoria, empréstimos compulsórios e contribuições especiais ${tag('fato')}. Princípios: legalidade tributária (art. 150, I), anterioridade, e capacidade contributiva (art. 145, § 1º) ${tag('fato')}. A Emenda Constitucional nº 132/2023 aprovou a reforma tributária do consumo, com a criação do IBS e da CBS ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>O Catecismo ensina que a submissão à autoridade e a corresponsabilidade pelo bem comum exigem moralmente pagar os impostos (CIC 2240) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['LIMPE', 'Legalidade, impessoalidade, moralidade, publicidade e eficiência (CF art. 37).'],
    ['Licitação', 'Procedimento de escolha da proposta mais vantajosa para a administração.'],
    ['Imposto', 'Tributo sem contraprestação específica do Estado.'],
    ['Taxa', 'Tributo ligado a serviço público ou poder de polícia.'],
    ['Capacidade contributiva', 'Graduação dos impostos segundo a capacidade econômica.'],
  ],
  exemplos: `<p><strong>Imposto ou taxa?</strong> O IPTU incide sobre a propriedade urbana sem contraprestação específica: é imposto. A taxa de coleta de lixo remunera um serviço específico prestado ao contribuinte: é taxa. A distinção importa para saber o que pode ser cobrado e com que base.</p>`,
  contexto: `<p><strong>No mundo:</strong> a regra "nenhum tributo sem representação" está nas origens do parlamentarismo inglês e da independência americana ${tag('fato')}. <strong>No Brasil:</strong> a Inconfidência Mineira (1789) teve entre seus motivos a cobrança da derrama ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a impessoalidade protege o cidadão', tag: 'argumento',
    premissas: ['A administração gere recursos e poderes que pertencem a todos.', 'Se agisse por favoritismo, beneficiaria uns em prejuízo de outros.', 'A impessoalidade exige critérios iguais para todos, como na licitação e no concurso público.'],
    conclusao: 'Logo, a impessoalidade protege a igualdade dos cidadãos diante do Estado.',
    nota: 'O nepotismo é contrário a esse princípio; o STF editou a Súmula Vinculante 13 sobre o tema.',
  },
  objecoes: [
    { objecao: 'Imposto é roubo; não há dever moral de pagar.', tag: 'debate',
      resposta: 'A doutrina da Igreja ensina o dever de pagar impostos justos para o bem comum (CIC 2240) e, ao mesmo tempo, exige que os tributos sejam proporcionais e bem empregados. Criticar impostos excessivos ou mal usados é legítimo; negar todo dever tributário é incompatível com a responsabilidade pelo bem comum.' },
  ],
  aplicacao: `<p>Consulte no Portal da Transparência ou no portal de compras públicas uma licitação do seu município ou estado e descreva objeto, modalidade, participantes e vencedor, avaliando à luz dos princípios do art. 37.</p>`,
  fonte: {
    obra: 'Constituição de 1988, arts. 37, 145 e 150; Lei nº 14.133/2021; Lei nº 5.172/1966 (CTN); Catecismo, § 2240', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>No art. 37, os princípios. Na Lei 14.133, as modalidades de licitação. No CTN, as espécies de tributos. No Catecismo, o dever tributário.</p>`,
  },
  perguntas: [
    { p: 'Quais os princípios da administração pública?', r: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' },
    { p: 'Qual a nova lei de licitações?', r: 'A Lei nº 14.133/2021.' },
    { p: 'O que criou a EC 132/2023?', r: 'A reforma tributária do consumo, com o IBS e a CBS.' },
  ],
  exercicios: [
    mc('Os princípios da administração estão na CF, art.:', ['5º', '37', '145', '226'], 1, 'LIMPE.'),
    mc('A taxa de coleta de lixo é:', ['Imposto', 'Taxa', 'Contribuição de melhoria', 'Empréstimo'], 1, 'Serviço específico.'),
    mc('O Código Tributário Nacional é de:', ['1946', '1966', '1988', '2023'], 1, 'Lei 5.172.'),
    mc('O dever moral de pagar impostos está no CIC:', ['2240', '2242', '1883', '2402'], 0, 'Bem comum.'),
    mc('A Súmula Vinculante 13 trata do:', ['Nepotismo', 'Habeas corpus', 'IPTU', 'Divórcio'], 0, 'Impessoalidade.'),
    disc('Descreva uma licitação do seu município ou estado e avalie-a à luz do art. 37.', ['Objeto e modalidade', 'Participantes', 'Vencedor', 'Avaliação']),
  ],
  resumo: ['Art. 37: LIMPE.', 'Licitação; Lei 14.133/2021.', 'CTN (1966); espécies tributárias.', 'Legalidade, anterioridade, capacidade contributiva.', 'EC 132/2023; CIC 2240.'],
  referencias: [
    { texto: 'Lei nº 14.133, de 2021 (Licitações e Contratos).' },
    { texto: 'Lei nº 5.172, de 1966 (Código Tributário Nacional).' },
    { texto: 'Catecismo da Igreja Católica (1992), § 2240.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da licitação', 'Consultar as fontes oficiais'],
  revisao: [['LIMPE', 'Art. 37.'], ['14.133', 'Licitações.'], ['CIC 2240', 'Impostos.']],
  avancado: {
    texto: `<h3>Improbidade administrativa</h3>
<p>A Lei de Improbidade Administrativa (Lei nº 8.429/1992), alterada pela Lei nº 14.230/2021, pune atos de agentes públicos que causam enriquecimento ilícito, prejuízo ao erário ou violam princípios da administração ${tag('fato')}. A reforma de 2021 passou a exigir dolo para a configuração da improbidade ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Lei nº 8.429, de 1992, com as alterações da Lei nº 14.230, de 2021.' }],
    exercicios: [
      mc('A Lei de Improbidade é de:', ['1988', '1992', '2013', '2021'], 1, 'Lei 8.429.'),
      mc('A reforma de 2021 passou a exigir:', ['Culpa leve', 'Dolo', 'Nada', 'Flagrante'], 1, 'Lei 14.230.'),
      mc('Enriquecimento ilícito de agente público é:', ['Ato de improbidade', 'Direito', 'Tributo', 'Licitação'], 0, 'Lei 8.429.'),
      disc('Explique os tipos de improbidade e o efeito da exigência de dolo.', ['Tipos', 'Dolo', 'Efeito', 'Avaliação'])],
  },
}),

avaliacao('dr4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre direito constitucional, civil, penal, administrativo e tributário, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia a análise de caso com dois ramos.</li><li>Revise os artigos da Constituição e dos códigos estudados.</li></ul>`,
[
  disc('Analise um caso hipotético que envolva pelo menos dois ramos do direito brasileiro, com os artigos aplicáveis e as garantias constitucionais.', ['Fatos', 'Primeiro ramo', 'Segundo ramo', 'Garantias']),
  disc('Mostre como um princípio da doutrina social da Igreja (função social da propriedade, finalidade da pena ou dever tributário) aparece e se diferencia no direito brasileiro.', ['Princípio', 'Direito brasileiro', 'Semelhanças e diferenças', 'Fontes']),
]),
];
