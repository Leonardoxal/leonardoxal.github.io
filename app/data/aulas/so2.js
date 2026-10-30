// Sociologia II — formação da sociologia e autores clássicos (etapas 4 e 5 do percurso de Sociologia).
// Montesquieu e Tocqueville, Comte e o positivismo, a tradição sociológica de Nisbet, Durkheim, Weber e Marx.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'so2-1', titulo: 'Precursores: Montesquieu e Tocqueville', duracao: '150 min',
  aprendera: ['Expor as teses sociológicas de O espírito das leis', 'Expor a análise da democracia de Tocqueville', 'Explicar a "tirania da maioria" e o papel das associações', 'Aplicar Tocqueville à sociedade brasileira'],
  prereq: ['Sociologia I (módulo SO1)'],
  explicacao: `
<h3>O problema</h3>
<p>Antes de a palavra "sociologia" existir, autores já explicavam leis, costumes e regimes políticos pelas condições sociais. Montesquieu e Tocqueville são precursores reconhecidos por Durkheim e por Raymond Aron ${tag('fato')}.</p>
<h3>Montesquieu</h3>
<p>Em <em>O espírito das leis</em> (1748), Montesquieu definiu as leis como "relações necessárias que derivam da natureza das coisas" e procurou explicá-las por fatores como clima, território, religião, comércio e costumes ${tag('fato')}. Distinguiu três tipos de governo — república, monarquia e despotismo — com seus princípios: virtude, honra e medo ${tag('fato')}. Durkheim dedicou-lhe sua tese latina (1892) ${tag('fato')}. A ênfase no clima foi criticada como determinista (aula g2-3) ${tag('debate')}.</p>
<h3>Tocqueville</h3>
<p>Alexis de Tocqueville viajou aos Estados Unidos em 1831–1832 e publicou <em>A democracia na América</em> (1835–1840) ${tag('fato')}. Sua tese central: a modernidade é marcada pela crescente <strong>igualdade de condições</strong>, que traz liberdades e riscos ${tag('fato')}. Entre os riscos, a <strong>tirania da maioria</strong> e um "despotismo brando", em que indivíduos isolados entregam tudo a um Estado tutelar ${tag('fato')}. Entre os remédios, as <strong>associações</strong> voluntárias, as liberdades locais e a religião, que, para ele, sustentava os costumes da liberdade americana ${tag('interpretacao')}.</p>
<p>Em <em>O Antigo Regime e a Revolução</em> (1856), Tocqueville mostrou a continuidade da centralização administrativa francesa antes e depois de 1789 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Espírito das leis', 'Conjunto de relações que explicam as leis de um povo (Montesquieu).'],
    ['Igualdade de condições', 'Tendência moderna à equalização social (Tocqueville).'],
    ['Tirania da maioria', 'Opressão das minorias pela opinião ou pelo poder majoritário.'],
    ['Despotismo brando', 'Poder tutelar que torna os cidadãos passivos (Tocqueville).'],
    ['Associação voluntária', 'Grupo livre de cidadãos para fins comuns.'],
  ],
  exemplos: `<p><strong>Tocqueville no bairro:</strong> associação de moradores, conselho paroquial, cooperativa, clube de mães: para Tocqueville, são escolas de vida pública, em que as pessoas aprendem a resolver problemas comuns sem esperar tudo do Estado. Sua ausência deixa o indivíduo isolado diante do poder.</p>`,
  contexto: `<p><strong>No mundo:</strong> Tocqueville é referência nos debates sobre sociedade civil e democracia. <strong>No Brasil:</strong> a pergunta sobre a força ou a fraqueza do associativismo e das liberdades locais atravessa as interpretações do país (etapa 8) ${tag('interpretacao')}; o IBGE publica estudos sobre fundações privadas e associações sem fins lucrativos (FASFIL) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a igualdade pode ameaçar a liberdade (Tocqueville)', tag: 'argumento',
    premissas: ['A igualdade de condições enfraquece os laços hierárquicos que ligavam as pessoas (senhor, corporação, aldeia).', 'Indivíduos isolados e iguais tendem a recolher-se na vida privada.', 'Isolados, entregam ao Estado o cuidado de cada vez mais coisas.'],
    conclusao: 'Logo, sem associações e liberdades locais, a igualdade pode gerar um despotismo brando.',
    nota: 'Tocqueville não rejeita a igualdade: quer torná-la compatível com a liberdade.',
  },
  objecoes: [
    { objecao: 'Tocqueville idealizou os Estados Unidos e ignorou a escravidão.', tag: 'debate',
      resposta: 'Tocqueville dedicou longas páginas à escravidão e à situação dos indígenas, prevendo graves conflitos raciais. A objeção procede quanto a outros silêncios, mas não quanto à escravidão.' },
  ],
  aplicacao: `<p>Escolha uma associação voluntária da sua cidade e analise-a com Tocqueville: quem participa, que problemas resolve, que relação tem com o poder público e o que aconteceria se deixasse de existir.</p>`,
  fonte: {
    obra: 'Alexis de Tocqueville, A democracia na América (1835–1840), vol. II, parte II, caps. 5–7, e parte IV, cap. 6; Montesquieu, O espírito das leis (1748), livro I, cap. 1', link: null,
    orientacao: `<p>Em Tocqueville, localize o papel das associações e a descrição do despotismo brando. Em Montesquieu, a definição de lei. Compare as duas maneiras de explicar as instituições.</p>`,
  },
  perguntas: [
    { p: 'Qual a tese central de A democracia na América?', r: 'A modernidade é marcada pela crescente igualdade de condições, com liberdades e riscos.' },
    { p: 'Quais os princípios dos três governos em Montesquieu?', r: 'Virtude (república), honra (monarquia) e medo (despotismo).' },
    { p: 'Que remédio Tocqueville propõe contra o despotismo brando?', r: 'As associações voluntárias, as liberdades locais e a religião.' },
  ],
  exercicios: [
    mc('O espírito das leis é de:', ['1690', '1748', '1789', '1835'], 1, 'Montesquieu.'),
    mc('O princípio da monarquia, para Montesquieu, é a:', ['Virtude', 'Honra', 'Medo', 'Igualdade'], 1, 'Três governos.'),
    mc('A democracia na América foi publicada entre:', ['1748 e 1750', '1835 e 1840', '1856 e 1860', '1893 e 1897'], 1, 'Dois volumes.'),
    mc('O Antigo Regime e a Revolução enfatiza a continuidade da:', ['Monarquia', 'Centralização administrativa', 'Escravidão', 'Religião'], 1, '1856.'),
    mc('Para Tocqueville, as associações são:', ['Ameaça à democracia', 'Escolas de vida pública', 'Órgãos do Estado', 'Irrelevantes'], 1, 'Contra o isolamento.'),
    disc('Analise uma associação voluntária da sua cidade com os conceitos de Tocqueville e indique uma objeção à aplicação.', ['Associação descrita', 'Conceitos aplicados', 'Relação com o Estado', 'Objeção']),
  ],
  resumo: ['Montesquieu (1748): leis como relações; clima; três governos.', 'Tocqueville (1835–1840): igualdade de condições.', 'Tirania da maioria; despotismo brando.', 'Associações e liberdades locais.', 'O Antigo Regime e a Revolução (1856).'],
  referencias: [
    { texto: 'Alexis de Tocqueville, A democracia na América (1835–1840).', livro: 'tocqueville-democracia' },
    { texto: 'Montesquieu, O espírito das leis (1748).' },
    { texto: 'Raymond Aron, As etapas do pensamento sociológico (1967).' },
    { texto: 'Alexis de Tocqueville, O Antigo Regime e a Revolução (1856).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os capítulos indicados'],
  revisao: [['Montesquieu', 'Virtude, honra, medo.'], ['Tocqueville', 'Igualdade de condições.'], ['Associações', 'Remédio ao despotismo brando.']],
  avancado: {
    texto: `<h3>Aron e os precursores</h3>
<p>Raymond Aron, em <em>As etapas do pensamento sociológico</em> (1967), apresenta Montesquieu, Comte, Marx, Tocqueville, Durkheim, Pareto e Weber como fundadores ${tag('fato')}; sua inclusão de Tocqueville ajudou a recuperar o autor na França ${tag('interpretacao')}.</p>
<h3>Capital social</h3>
<p>Robert Putnam, em <em>Comunidade e democracia</em> (1993), relacionou o desempenho de governos regionais italianos ao "capital social" — redes de confiança e associação —, retomando Tocqueville ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Raymond Aron, As etapas do pensamento sociológico (1967).' }],
    exercicios: [
      mc('As etapas do pensamento sociológico é de:', ['Nisbet', 'Aron', 'Putnam', 'Weber'], 1, '1967.'),
      mc('"Capital social" em Putnam refere-se a:', ['Dinheiro investido', 'Redes de confiança e associação', 'Impostos', 'Patrimônio público'], 1, 'Comunidade e democracia.'),
      mc('Putnam estudou governos regionais da:', ['França', 'Itália', 'Brasil', 'Alemanha'], 1, '1993.'),
      disc('Aplique o conceito de capital social a duas cidades brasileiras com dados de associações ou participação.', ['Conceito', 'Dados', 'Comparação', 'Limites'])],
  },
}),

aula({
  id: 'so2-2', titulo: 'Auguste Comte e o positivismo, com sua influência no Brasil', duracao: '150 min',
  aprendera: ['Expor a lei dos três estados e a classificação das ciências', 'Explicar a origem do termo "sociologia"', 'Descrever a religião da Humanidade e o positivismo brasileiro', 'Avaliar o positivismo do ponto de vista filosófico e católico'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Quem deu nome à sociologia, e por que seu lema está na bandeira do Brasil? Auguste Comte (1798–1857) propôs uma ciência da sociedade e uma reforma da humanidade ${tag('fato')}.</p>
<h3>A lei dos três estados</h3>
<p>No <em>Curso de filosofia positiva</em> (1830–1842), Comte sustentou que o conhecimento humano passa por três estados: <strong>teológico</strong> (explicação por agentes sobrenaturais), <strong>metafísico</strong> (por entidades abstratas) e <strong>positivo</strong> (por leis observáveis entre fenômenos) ${tag('fato')}.</p>
<h3>A sociologia</h3>
<p>Comte cunhou o termo "sociologia" no <em>Curso</em> e a colocou no topo da classificação das ciências, depois da matemática, da astronomia, da física, da química e da biologia ${tag('fato')}. Distinguiu estática social (ordem) e dinâmica social (progresso) ${tag('fato')}.</p>
<h3>A religião da Humanidade</h3>
<p>Na fase final, Comte fundou uma "religião da Humanidade", com culto, calendário e sacerdócio ${tag('fato')}. A fórmula "o amor por princípio, a ordem por base, o progresso por fim" está na origem do lema da bandeira brasileira (aula sb3-2) ${tag('fato')}.</p>
<h3>Positivismo no Brasil</h3>
<p>Miguel Lemos e Raimundo Teixeira Mendes organizaram a Igreja Positivista do Brasil (1881), e o Templo da Humanidade foi construído no Rio de Janeiro ${tag('fato')}. Benjamin Constant Botelho de Magalhães difundiu o positivismo entre os militares ${tag('fato')}. A influência sobre a República, a educação militar e o Rio Grande do Sul (Júlio de Castilhos) é amplamente estudada ${tag('interpretacao')}.</p>
<h3>Avaliação</h3>
<p>A lei dos três estados é uma filosofia da história, não uma lei demonstrada por observação ${tag('argumento')}. A afirmação de que só o conhecimento positivo é conhecimento não é ela mesma conhecimento positivo — objeção clássica ${tag('argumento')}. A Igreja afirma que a razão pode conhecer verdades metafísicas e a existência de Deus (Concílio Vaticano I, <em>Dei Filius</em>, 1870) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Positivismo', 'Doutrina de Comte: só se conhecem leis entre fenômenos observáveis.'],
    ['Lei dos três estados', 'Teológico, metafísico e positivo (Comte).'],
    ['Estática social', 'Estudo da ordem social.'],
    ['Dinâmica social', 'Estudo do progresso social.'],
    ['Religião da Humanidade', 'Culto positivista criado por Comte.'],
  ],
  exemplos: `<p><strong>Os três estados aplicados ao raio:</strong> teológico — Zeus lança raios; metafísico — uma "força ígnea" própria da natureza os produz; positivo — descargas elétricas entre nuvens e solo, descritas por leis físicas. O exemplo mostra a intuição de Comte; não prova que toda forma de saber (inclusive a metafísica) deva desaparecer.</p>`,
  contexto: `<p><strong>No mundo:</strong> o positivismo influenciou a ciência e a política do século XIX, e o positivismo lógico do século XX é movimento distinto, com outras teses. <strong>No Brasil:</strong> o lema "Ordem e Progresso" e a presença positivista na Proclamação da República tornam Comte autor indispensável para entender o país ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o positivismo estrito se refuta a si mesmo', tag: 'argumento',
    premissas: ['O positivismo estrito afirma que só é conhecimento válido o que se verifica pela observação de fenômenos.', 'Essa afirmação não é verificada pela observação de fenômenos: é uma tese filosófica sobre o conhecimento.', 'Logo, pelo próprio critério, ela não seria conhecimento válido.'],
    conclusao: 'Logo, o positivismo estrito é autorrefutante; a ciência empírica não precisa dele para ser legítima.',
    nota: 'O argumento atinge a versão estrita, não o valor do método científico.',
  },
  objecoes: [
    { objecao: 'A história mostra que a ciência substituiu a religião, como Comte previu.', tag: 'debate',
      resposta: 'A ciência substituiu explicações religiosas de fenômenos naturais, mas não respondeu às perguntas sobre sentido, valor e fundamento, que permanecem. E a religião persiste em muitas sociedades altamente científicas — dado que alimenta o debate sobre secularização.' },
  ],
  aplicacao: `<p>Pesquise a presença do positivismo na Proclamação da República: identifique três figuras, um documento (como o Decreto nº 4 de 1889) e uma instituição, com fontes, separando fato documentado e interpretação.</p>`,
  fonte: {
    obra: 'Auguste Comte, Curso de filosofia positiva (1830–1842), lição 1; José Murilo de Carvalho, A formação das almas (1990), cap. sobre os positivistas', link: null,
    orientacao: `<p>Na primeira lição do Curso, localize a lei dos três estados. Em José Murilo de Carvalho, identifique o papel dos positivistas na República. Relacione os dois.</p>`,
  },
  perguntas: [
    { p: 'Quais são os três estados de Comte?', r: 'Teológico, metafísico e positivo.' },
    { p: 'Quem organizou a Igreja Positivista do Brasil?', r: 'Miguel Lemos e Raimundo Teixeira Mendes, em 1881.' },
    { p: 'Por que o positivismo estrito é autorrefutante?', r: 'Porque sua tese central não é verificável pela observação, segundo o próprio critério.' },
  ],
  exercicios: [
    mc('O Curso de filosofia positiva foi publicado entre:', ['1789 e 1799', '1830 e 1842', '1867 e 1894', '1895 e 1905'], 1, 'Comte.'),
    mc('No topo da classificação das ciências de Comte está a:', ['Matemática', 'Biologia', 'Sociologia', 'Física'], 2, 'Ciência mais complexa.'),
    mc('A Igreja Positivista do Brasil foi organizada em:', ['1822', '1881', '1889', '1930'], 1, 'Miguel Lemos.'),
    mc('O estudo da ordem social, em Comte, é a:', ['Dinâmica social', 'Estática social', 'Metafísica', 'Teologia'], 1, 'Ordem.'),
    mc('A constituição Dei Filius é do:', ['Concílio de Trento', 'Vaticano I', 'Vaticano II', 'Niceia II'], 1, '1870.'),
    disc('Apresente a pesquisa sobre o positivismo na Proclamação: três figuras, um documento e uma instituição, com fontes, separando fato e interpretação.', ['Três figuras', 'Documento citado', 'Instituição', 'Fato e interpretação separados']),
  ],
  resumo: ['Comte (1798–1857): lei dos três estados.', 'Sociologia: termo e topo da classificação.', 'Estática e dinâmica; ordem e progresso.', 'Religião da Humanidade; Igreja Positivista do Brasil (1881).', 'Positivismo estrito autorrefutante; Dei Filius (1870).'],
  referencias: [
    { texto: 'Auguste Comte, Curso de filosofia positiva (1830–1842).' },
    { texto: 'José Murilo de Carvalho, A formação das almas (1990).' },
    { texto: 'Concílio Vaticano I, Dei Filius (1870).' },
    { texto: 'Raymond Aron, As etapas do pensamento sociológico (1967).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler a primeira lição do Curso'],
  revisao: [['Três estados', 'Teológico, metafísico, positivo.'], ['1881', 'Igreja Positivista do Brasil.'], ['Autorrefutação', 'Tese não verificável.']],
  avancado: {
    texto: `<h3>Positivismo lógico</h3>
<p>O Círculo de Viena (anos 1920–1930) propôs o critério de verificabilidade do significado ${tag('fato')}; as críticas, entre elas a de Karl Popper com o critério de falseabilidade, levaram ao abandono da versão estrita ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Karl Popper, A lógica da pesquisa científica (1934).' }],
    exercicios: [
      mc('O critério de falseabilidade é de:', ['Comte', 'Popper', 'Carnap', 'Durkheim'], 1, 'Lógica da pesquisa científica.'),
      mc('O Círculo de Viena propôs o critério de:', ['Falseabilidade', 'Verificabilidade', 'Autoridade', 'Tradição'], 1, 'Significado.'),
      mc('O positivismo lógico é:', ['Igual ao de Comte', 'Movimento distinto do século XX', 'Do século XVII', 'Doutrina católica'], 1, 'Outras teses.'),
      disc('Compare o positivismo de Comte e o positivismo lógico: teses, alcance e críticas.', ['Duas versões', 'Diferenças', 'Críticas', 'Conclusão'])],
  },
}),

aula({
  id: 'so2-3', titulo: 'A tradição sociológica segundo Nisbet: as duas revoluções e as ideias-elemento', duracao: '120 min',
  aprendera: ['Expor a tese de Nisbet sobre a origem da sociologia', 'Explicar as cinco ideias-elemento', 'Relacionar a sociologia às reações à Revolução Francesa e à Revolução Industrial', 'Avaliar a tese de Nisbet'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que a sociologia nasceu no século XIX, e por que seus temas são comunidade, autoridade e religião? Robert Nisbet respondeu em <em>A tradição sociológica</em> (1966) ${tag('fato')}.</p>
<h3>As duas revoluções</h3>
<p>Para Nisbet, a sociologia nasceu da reflexão sobre as consequências de duas revoluções: a Revolução Francesa, que desfez antigas instituições políticas, religiosas e corporativas, e a Revolução Industrial, que transformou o trabalho, a propriedade e a cidade ${tag('interpretacao')}.</p>
<h3>Ideias-elemento</h3>
<p>Nisbet identificou cinco ideias-elemento da sociologia, cada uma com sua antítese: <strong>comunidade</strong> (e sociedade), <strong>autoridade</strong> (e poder), <strong>status</strong> (e classe), <strong>sagrado</strong> (e secular) e <strong>alienação</strong> (e progresso) ${tag('fato')}.</p>
<h3>A tese conservadora</h3>
<p>Nisbet sustentou que, embora muitos sociólogos fossem liberais ou socialistas, os temas da sociologia vieram em grande parte dos críticos conservadores da Revolução — Edmund Burke (<em>Reflexões sobre a Revolução na França</em>, 1790), Louis de Bonald e Joseph de Maistre —, que insistiam no valor das comunidades, da autoridade e da religião ${tag('interpretacao')}. Durkheim (a coesão, o sagrado) e Tocqueville (as associações) são exemplos que ele analisa ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>A tese ilumina a origem dos temas, mas é discutida: Marx e outros autores partem de tradições diferentes, e a sociologia empírica também deve muito à estatística e ao reformismo social ${tag('debate')}.</p>`,
  vocabulario: [
    ['Ideia-elemento', 'Conceito básico e duradouro de uma disciplina (Nisbet).'],
    ['Comunidade', 'Laços de proximidade, tradição e pertença.'],
    ['Autoridade', 'Poder reconhecido como legítimo.'],
    ['Sagrado', 'Domínio separado e venerado, distinto do profano.'],
    ['Alienação', 'Estranhamento do homem em relação ao trabalho, aos outros ou a si mesmo.'],
  ],
  exemplos: `<p><strong>Burke e a comunidade:</strong> Burke defendeu os "pequenos pelotões" a que pertencemos — família, vizinhança, corporação — como primeiro elo do afeto público. Tocqueville (associações) e Durkheim (grupos intermediários contra a anomia) retomam, por caminhos próprios, a mesma intuição.</p>`,
  contexto: `<p><strong>No mundo:</strong> o livro de Nisbet influenciou a história da sociologia e o pensamento conservador norte-americano. <strong>No Brasil:</strong> a reflexão sobre comunidades e grupos intermediários reaparece no debate sobre famílias, paróquias e associações num país de urbanização rápida ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que as duas revoluções tornaram a sociedade um problema', tag: 'argumento',
    premissas: ['Antes, a ordem social parecia dada pela tradição, pela religião e pela política.', 'As revoluções Francesa e Industrial desfizeram rapidamente instituições antigas.', 'Quando a ordem deixa de ser evidente, surge a pergunta sobre o que mantém a sociedade unida.'],
    conclusao: 'Logo, as duas revoluções tornaram a sociedade objeto de investigação própria.',
    nota: 'É a tese de Nisbet; outras explicações destacam a estatística e o Estado moderno.',
  },
  objecoes: [
    { objecao: 'A sociologia é por natureza progressista, não conservadora.', tag: 'debate',
      resposta: 'Nisbet não diz que os sociólogos são conservadores, mas que muitos de seus temas vieram de críticos conservadores da Revolução. A tese é sobre a genealogia dos conceitos e pode ser avaliada pelos textos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: explique, em uma página, por que Nisbet liga a sociologia às reações à Revolução Francesa, usando as cinco ideias-elemento e um exemplo de autor.</p>`,
  fonte: {
    obra: 'Robert Nisbet, A tradição sociológica (1966), cap. 1 ("As ideias-elemento da sociologia") e cap. 2 ("As duas revoluções")', link: null,
    orientacao: `<p>Localize a definição de ideia-elemento e a lista das cinco. No cap. 2, identifique o que Nisbet atribui a cada revolução. Use para o exercício.</p>`,
  },
  perguntas: [
    { p: 'Quais são as cinco ideias-elemento de Nisbet?', r: 'Comunidade, autoridade, status, sagrado e alienação.' },
    { p: 'Quais as duas revoluções na origem da sociologia, segundo Nisbet?', r: 'A Revolução Francesa e a Revolução Industrial.' },
    { p: 'De onde vieram muitos temas da sociologia, segundo Nisbet?', r: 'Dos críticos conservadores da Revolução Francesa.' },
  ],
  exercicios: [
    mc('A tradição sociológica é de:', ['Aron', 'Nisbet', 'Burke', 'Comte'], 1, '1966.'),
    mc('A antítese de "status" em Nisbet é:', ['Poder', 'Classe', 'Secular', 'Progresso'], 1, 'Pares de ideias.'),
    mc('Reflexões sobre a Revolução na França é de:', ['Bonald', 'Burke', 'De Maistre', 'Tocqueville'], 1, '1790.'),
    mc('Para Nisbet, a sociologia nasceu da reflexão sobre:', ['A Reforma', 'As revoluções Francesa e Industrial', 'As Cruzadas', 'O Renascimento'], 1, 'Duas revoluções.'),
    mc('A tese de Nisbet é:', ['Consenso absoluto', 'Interpretação discutida', 'Doutrina', 'Lei estatística'], 1, 'Debate sobre a origem.'),
    disc('Explique por que Nisbet liga a sociologia às reações à Revolução Francesa, com as cinco ideias-elemento e um autor como exemplo.', ['Tese exposta', 'Cinco ideias-elemento', 'Exemplo de autor', 'Uma objeção']),
  ],
  resumo: ['Nisbet (1966): a tradição sociológica.', 'Duas revoluções: Francesa e Industrial.', 'Ideias-elemento: comunidade, autoridade, status, sagrado, alienação.', 'Temas dos críticos conservadores (Burke, Bonald, De Maistre).', 'Tese discutida.'],
  referencias: [
    { texto: 'Robert Nisbet, A tradição sociológica (1966).' },
    { texto: 'Edmund Burke, Reflexões sobre a Revolução na França (1790).' },
    { texto: 'Alexis de Tocqueville, O Antigo Regime e a Revolução (1856).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação da tese de Nisbet', 'Ler os caps. 1 e 2'],
  revisao: [['Ideias-elemento', 'Cinco pares.'], ['Duas revoluções', 'Francesa e Industrial.'], ['Burke', 'Reflexões, 1790.']],
  avancado: {
    texto: `<h3>The Quest for Community</h3>
<p>Em <em>The Quest for Community</em> (1953), Nisbet argumentou que o enfraquecimento dos grupos intermediários deixa o indivíduo exposto ao Estado centralizado ${tag('interpretacao')}. O princípio de subsidiariedade da Doutrina Social da Igreja (Quadragesimo Anno, 79) defende os grupos intermediários por outra via ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Robert Nisbet, The Quest for Community (1953).' }],
    exercicios: [
      mc('O princípio de subsidiariedade está formulado em:', ['Rerum Novarum, 1', 'Quadragesimo Anno, 79', 'Laudato si\', 1', 'Dei Filius'], 1, 'Pio XI, 1931.'),
      mc('The Quest for Community é de:', ['1953', '1966', '1990', '2001'], 0, 'Nisbet.'),
      mc('Grupos intermediários ficam entre:', ['Dois países', 'O indivíduo e o Estado', 'Duas classes', 'Duas religiões'], 1, 'Família, associações, corpos.'),
      disc('Compare a defesa dos grupos intermediários em Nisbet e no princípio de subsidiariedade: fundamento e alcance.', ['Nisbet', 'Subsidiariedade', 'Diferença de fundamento', 'Conclusão'])],
  },
}),

aula({
  id: 'so2-4', titulo: 'Os clássicos: Durkheim, Weber e Marx — três visões da sociedade', duracao: '180 min',
  aprendera: ['Expor a visão de sociedade de Durkheim, Weber e Marx com citação', 'Explicar a tese de A ética protestante', 'Explicar classe e modo de produção em Marx', 'Avaliar as três visões à luz da Doutrina Social da Igreja'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O que é a sociedade? Os três clássicos dão respostas diferentes, e boa parte da sociologia posterior combina ou critica essas respostas.</p>
<h3>Durkheim (1858–1917)</h3>
<p>A sociedade é uma realidade própria, que não se reduz à soma dos indivíduos; seus fatos se explicam por outros fatos sociais (<em>As regras do método sociológico</em>, 1895) ${tag('fato')}. Em <em>As formas elementares da vida religiosa</em> (1912), sustentou que a religião expressa e reforça a coesão do grupo ${tag('fato')} — tese que a fé cristã não aceita como explicação completa da religião ${tag('doutrina')}.</p>
<h3>Weber (1864–1920)</h3>
<p>A sociologia compreende a ação social pelo sentido que os agentes lhe dão ${tag('fato')}. Em <em>A ética protestante e o "espírito" do capitalismo</em> (1904–1905), sustentou uma "afinidade eletiva" entre a ética do protestantismo ascético — vocação, trabalho metódico, poupança — e o espírito do capitalismo moderno ${tag('fato')}. Weber não disse que o protestantismo causou sozinho o capitalismo ${tag('fato')}; a tese é debatida com dados históricos ${tag('debate')}.</p>
<h3>Marx (1818–1883)</h3>
<p>A sociedade se explica pelo <strong>modo de produção</strong>: as forças produtivas e as relações de produção formam a base sobre a qual se ergue a superestrutura jurídica, política e ideológica (Prefácio à <em>Contribuição à crítica da economia política</em>, 1859) ${tag('fato')}. A história é a história das lutas de classes (<em>Manifesto comunista</em>, 1848, com Engels) ${tag('fato')}.</p>
<h3>Avaliação católica</h3>
<p>Leão XIII rejeitou a luta de classes como lei e a abolição da propriedade privada (<em>Rerum Novarum</em>, 1891), e João Paulo II identificou no socialismo um "erro antropológico": considerar o homem simples elemento do organismo social (<em>Centesimus Annus</em>, 13) ${tag('doutrina')}. A Igreja reconhece, porém, a realidade dos conflitos sociais e a injustiça das condições operárias que esses autores descreveram ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Holismo metodológico', 'Explicar fatos sociais por fatos sociais (Durkheim).'],
    ['Individualismo metodológico', 'Explicar fenômenos sociais pelas ações com sentido (Weber).'],
    ['Afinidade eletiva', 'Correspondência entre uma ética e um modo de vida econômico (Weber).'],
    ['Modo de produção', 'Unidade de forças produtivas e relações de produção (Marx).'],
    ['Superestrutura', 'Instituições jurídicas, políticas e ideias erguidas sobre a base econômica (Marx).'],
  ],
  exemplos: `<p><strong>A mesma greve, três leituras:</strong> Durkheim — sintoma de anomia, falta de normas que regulem as relações de trabalho; Weber — ação coletiva cujo sentido os participantes dão (salário, dignidade, solidariedade); Marx — manifestação da luta entre capital e trabalho. A Doutrina Social acrescenta um critério: a justiça das reivindicações e o bem comum (Laborem Exercens, 20).</p>`,
  contexto: `<p><strong>No mundo:</strong> os três clássicos continuam a ser ensinados em todas as faculdades de ciências sociais. <strong>No Brasil:</strong> a recepção de Marx marcou a sociologia universitária a partir dos anos 1950 e 1960, e Weber foi central nas interpretações do Estado brasileiro (Faoro, etapa 8) ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que Weber não é o "anti-Marx" que às vezes se diz', tag: 'argumento',
    premissas: ['Weber reconhecia o peso dos interesses materiais na ação humana.', 'Ele sustentava que ideias religiosas também orientam a ação, como "manobreiros de trilhos" que definem a direção dos interesses.', 'Logo, Weber recusa o determinismo econômico, mas não a importância da economia.'],
    conclusao: 'Logo, Weber propõe uma explicação multicausal, não a substituição da economia pelas ideias.',
    nota: 'A imagem dos manobreiros de trilhos está na introdução à Ética econômica das religiões mundiais.',
  },
  objecoes: [
    { objecao: 'Estudar Marx é aderir ao marxismo.', tag: 'debate',
      resposta: 'Compreender um autor é condição para avaliá-lo; a própria Doutrina Social da Igreja dialogou criticamente com Marx (Rerum Novarum, Centesimus Annus). Estudar não é aderir; é expor com fidelidade e julgar com critérios.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha comparativa — o que é a sociedade para Durkheim, Weber e Marx —, cada posição exposta com uma citação localizada (obra, capítulo, página da edição usada) e uma avaliação à luz da Doutrina Social.</p>`,
  fonte: {
    obra: 'Max Weber, A ética protestante e o "espírito" do capitalismo (1904–1905), cap. V; Karl Marx, Prefácio à Contribuição à crítica da economia política (1859); Leão XIII, Rerum Novarum (1891)', link: { url: 'https://www.vatican.va/content/leo-xiii/pt/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html', rotulo: 'Rerum Novarum (vatican.va)' },
    orientacao: `<p>Em Weber, leia o capítulo final sobre ascese e espírito do capitalismo. No Prefácio de Marx, localize a passagem sobre base e superestrutura. Na Rerum Novarum, a crítica à luta de classes. Use-os na ficha.</p>`,
  },
  perguntas: [
    { p: 'Qual a tese de A ética protestante?', r: 'Há uma afinidade eletiva entre a ética do protestantismo ascético e o espírito do capitalismo moderno.' },
    { p: 'O que é a superestrutura em Marx?', r: 'As instituições jurídicas, políticas e as ideias erguidas sobre a base econômica.' },
    { p: 'Qual o "erro antropológico" do socialismo segundo Centesimus Annus?', r: 'Considerar o homem simples elemento do organismo social.' },
  ],
  exercicios: [
    mc('As formas elementares da vida religiosa é de:', ['1895', '1905', '1912', '1922'], 2, 'Durkheim.'),
    mc('A ética protestante foi publicada em:', ['1867', '1893', '1904–1905', '1920'], 2, 'Weber.'),
    mc('O Manifesto comunista é de:', ['1848', '1859', '1867', '1891'], 0, 'Marx e Engels.'),
    mc('Explicar fatos sociais por fatos sociais é o princípio de:', ['Weber', 'Durkheim', 'Marx', 'Comte'], 1, 'Holismo metodológico.'),
    mc('"Erro antropológico" do socialismo está em:', ['Rerum Novarum', 'Centesimus Annus', 'Quadragesimo Anno', 'Laudato si\''], 1, 'João Paulo II, 1991.'),
    disc('Entregue a ficha comparativa: o que é a sociedade para Durkheim, Weber e Marx, com uma citação localizada de cada e avaliação à luz da Doutrina Social.', ['Três posições expostas', 'Citações localizadas', 'Avaliação com fontes da Igreja', 'Distinção entre exposição e juízo']),
  ],
  resumo: ['Durkheim: sociedade como realidade própria; religião e coesão (1912).', 'Weber: ação com sentido; ética protestante (1904–1905).', 'Marx: modo de produção, base e superestrutura (1859); luta de classes (1848).', 'Weber multicausal.', 'Rerum Novarum e Centesimus Annus 13.'],
  referencias: [
    { texto: 'Émile Durkheim, As formas elementares da vida religiosa (1912).' },
    { texto: 'Max Weber, A ética protestante e o "espírito" do capitalismo (1904–1905).' },
    { texto: 'Karl Marx, O capital, livro I (1867).', livro: 'marx-capital-i' },
    { texto: 'São João Paulo II, Centesimus Annus (1991).', link: { url: 'https://www.vatican.va/content/john-paul-ii/pt/encyclicals/documents/hf_jp-ii_enc_01051991_centesimus-annus.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha comparativa', 'Ler os textos indicados'],
  revisao: [['Durkheim', 'Holismo; Formas elementares.'], ['Weber', 'Afinidade eletiva.'], ['Marx', 'Base e superestrutura.']],
  avancado: {
    texto: `<h3>Simmel e Pareto</h3>
<p>Georg Simmel estudou as formas de interação (conflito, troca, sociabilidade) e a vida nas metrópoles ("As grandes cidades e a vida do espírito", 1903) ${tag('fato')}. Vilfredo Pareto analisou a circulação das elites ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Georg Simmel, "As grandes cidades e a vida do espírito" (1903).' }],
    exercicios: [
      mc('"As grandes cidades e a vida do espírito" é de:', ['Weber', 'Simmel', 'Pareto', 'Tönnies'], 1, '1903.'),
      mc('A circulação das elites é tema de:', ['Pareto', 'Durkheim', 'Comte', 'Linton'], 0, 'Elites.'),
      mc('Simmel estudou sobretudo:', ['Formas de interação', 'Modo de produção', 'Fato social coercitivo', 'Estados da mente'], 0, 'Sociologia formal.'),
      disc('Aplique a análise de Simmel sobre a vida nas grandes cidades a uma metrópole brasileira.', ['Tese de Simmel', 'Aplicação', 'Dados ou observação', 'Limites'])],
  },
}),

avaliacao('so2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a formação da sociologia e os clássicos, e duas discursivas de comparação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua ficha comparativa de Durkheim, Weber e Marx.</li><li>Revise as ideias-elemento de Nisbet.</li></ul>`,
[
  disc('Compare Tocqueville e Marx sobre a sociedade moderna: o que cada um considera o traço central, o principal risco e o remédio, com citações.', ['Traço central de cada', 'Risco de cada', 'Remédio de cada', 'Citações localizadas']),
  disc('Avalie a afirmação "a sociologia mostrou que a religião é apenas um produto social", usando Durkheim, Weber, Comte e a doutrina da Igreja.', ['Afirmação exposta com justiça', 'Três autores mobilizados', 'Doutrina citada', 'Distinção entre explicação parcial e total']),
]),
];
