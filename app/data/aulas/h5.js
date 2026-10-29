// História V — aplicações, avaliação integradora e pesquisa independente (etapas 9 a 11 do percurso).
// O século XX e o Brasil republicano, a história no espaço público e o projeto de pesquisa.
// Temas contemporâneos e politicamente sensíveis: fatos com data e fonte; nomenclaturas e juízos marcados.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'h5-1', titulo: 'O século XX: guerras mundiais, totalitarismos, Guerra Fria e descolonização', duracao: '150 min',
  aprendera: ['Situar os grandes acontecimentos do século XX com datas', 'Explicar o conceito de totalitarismo e suas críticas', 'Conhecer a posição documentada da Igreja diante dos totalitarismos', 'Relacionar o Brasil aos conflitos mundiais'],
  prereq: ['História IV (módulo H4)', 'Ética, política e direito (Degrau 12), recomendado'],
  explicacao: `
<h3>O problema</h3>
<p>O século XX está perto de nós: há testemunhas vivas, arquivos recém-abertos e memórias em disputa. Isso torna seu estudo indispensável para entender o presente e, ao mesmo tempo, exige mais cuidado com a distinção entre fato, interpretação e posição política.</p>

<h3>Guerras e revoluções</h3>
<p>A Primeira Guerra Mundial (1914–1918) destruiu impérios (alemão, austro-húngaro, russo, otomano) ${tag('fato')}. Em 1917, a Revolução Russa levou os bolcheviques ao poder ${tag('fato')}. O Tratado de Versalhes (1919) impôs à Alemanha perdas territoriais e reparações ${tag('fato')}. A crise de 1929 espalhou desemprego pelo mundo ${tag('fato')}.</p>

<h3>Totalitarismos</h3>
<p>Mussolini chegou ao poder na Itália em 1922; Hitler tornou-se chanceler da Alemanha em 1933; Stálin consolidou o poder na União Soviética no fim dos anos 1920 ${tag('fato')}. Hannah Arendt, em <em>Origens do totalitarismo</em> (1951), analisou nazismo e stalinismo como uma forma nova de dominação, baseada em ideologia, terror e mobilização de massas ${tag('interpretacao')}. Críticos discutem se fascismo italiano, nazismo e stalinismo cabem no mesmo conceito ${tag('debate')}.</p>
<p>Pio XI condenou documentalmente os três: a encíclica <em>Non abbiamo bisogno</em> (1931), contra a pretensão do fascismo de monopolizar a educação da juventude; <em>Mit brennender Sorge</em> (1937), escrita em alemão e lida nas igrejas da Alemanha, contra o nazismo; e <em>Divini Redemptoris</em> (1937), contra o comunismo ateu ${tag('fato')}. A atuação de Pio XII durante a guerra continua objeto de pesquisa, ampliada pela abertura dos arquivos de seu pontificado em 2020 ${tag('debate')}.</p>

<h3>A Segunda Guerra e o pós-guerra</h3>
<p>A Segunda Guerra Mundial (1939–1945) foi o conflito mais mortífero da história ${tag('fato')}. No Holocausto, o regime nazista assassinou cerca de seis milhões de judeus, além de outros grupos ${tag('fato')}. Em 1945 criou-se a ONU; em 1948, a Assembleia Geral aprovou a Declaração Universal dos Direitos Humanos ${tag('fato')}. A Guerra Fria opôs Estados Unidos e União Soviética até a queda do Muro de Berlim (1989) e o fim da URSS (1991) ${tag('fato')}. Entre 1945 e 1975, a maior parte das colônias da Ásia e da África tornou-se independente; a Índia, em 1947 ${tag('fato')}. O Concílio Vaticano II (1962–1965) marcou a vida da Igreja no período ${tag('fato')}.</p>

<h3>O Brasil no século XX mundial</h3>
<p>O Brasil entrou na Segunda Guerra em 1942 e enviou a Força Expedicionária Brasileira à Itália (1944–1945), onde tomou Monte Castelo em fevereiro de 1945 ${tag('fato')}. Na Guerra Fria, o país alinhou-se em geral ao bloco ocidental, com variações (a "política externa independente" do início dos anos 1960) ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Totalitarismo', 'Regime que pretende controlar todas as esferas da vida (Arendt).'],
    ['Holocausto (Shoah)', 'Genocídio de cerca de seis milhões de judeus pelo nazismo.'],
    ['Guerra Fria', 'Rivalidade entre EUA e URSS de 1947 a 1991, sem guerra direta entre eles.'],
    ['Descolonização', 'Independência das colônias europeias na Ásia e na África após 1945.'],
    ['Encíclica', 'Carta do papa à Igreja sobre doutrina ou situação do mundo.'],
  ],
  exemplos: `<p><strong>Ler uma encíclica como fonte histórica:</strong> <em>Mit brennender Sorge</em> é documento doutrinal e, ao mesmo tempo, ato político num contexto preciso (1937). O historiador pergunta como foi redigida, distribuída e lida, como o regime reagiu e o que ela diz e não diz — sem confundir esse estudo com a avaliação teológica do texto.</p>`,
  contexto: `<p><strong>No mundo:</strong> o século XX é o tempo das guerras totais, da tecnologia e da globalização. <strong>No Brasil:</strong> a participação na Segunda Guerra, a industrialização e a urbanização acelerada ligam a história nacional aos processos mundiais; a próxima aula estuda o Brasil republicano.</p>`,
  argumento: {
    titulo: 'Por que a negação do Holocausto é falsificação, não interpretação', tag: 'argumento',
    premissas: ['O Holocausto é atestado por documentos do próprio regime, testemunhos de vítimas e perpetradores, evidências materiais e julgamentos.', 'Essas fontes são independentes entre si e convergem.', 'Negar um fato atestado por fontes independentes e convergentes exige omitir ou adulterar as evidências.'],
    conclusao: 'Logo, a negação do Holocausto não é uma interpretação possível, mas falsificação.',
    nota: 'Retoma os critérios da aula h3-3 e o caso Irving (2000).',
  },
  objecoes: [
    { objecao: 'Comparar nazismo e comunismo sob o nome de totalitarismo é manobra política.', tag: 'debate',
      resposta: 'O conceito tem críticos e defensores na historiografia. A comparação não afirma identidade: examina semelhanças (partido único, terror, ideologia oficial) e diferenças, com fontes. O debate se decide pelas evidências, não pela conveniência.' },
  ],
  aplicacao: `<p>Escolha um acontecimento do século XX que ainda divide opiniões. Registre no Caderno: os fatos bem estabelecidos (com fontes), as interpretações em disputa e os termos usados por cada lado.</p>`,
  fonte: {
    obra: 'Pio XI, Mit brennender Sorge (1937); Declaração Universal dos Direitos Humanos (1948)', link: { url: 'https://www.vatican.va/content/pius-xi/pt/encyclicals/documents/hf_p-xi_enc_14031937_mit-brennender-sorge.html', rotulo: 'Mit brennender Sorge (vatican.va)' },
    orientacao: `<p>Leia os primeiros parágrafos da encíclica e identifique as acusações feitas ao regime. Na Declaração de 1948, leia os artigos 1 a 3 e 18 e relacione-os às experiências totalitárias da época.</p>`,
  },
  perguntas: [
    { p: 'Que encíclicas de Pio XI se opuseram aos totalitarismos?', r: 'Non abbiamo bisogno (1931), Mit brennender Sorge e Divini Redemptoris (ambas de 1937).' },
    { p: 'Quando a FEB tomou Monte Castelo?', r: 'Em fevereiro de 1945, na Itália.' },
    { p: 'Quando terminou a União Soviética?', r: 'Em 1991.' },
  ],
  exercicios: [
    mc('A Revolução Russa ocorreu em:', ['1905', '1917', '1922', '1933'], 1, '1917.'),
    mc('Origens do totalitarismo (1951) é de:', ['Hannah Arendt', 'Eric Hobsbawm', 'Raymond Aron', 'Karl Popper'], 0, 'Hannah Arendt.'),
    mc('Mit brennender Sorge (1937) dirigia-se contra:', ['O fascismo italiano', 'O nazismo', 'O comunismo', 'O liberalismo'], 1, 'Escrita em alemão e lida nas igrejas da Alemanha.'),
    mc('A Declaração Universal dos Direitos Humanos foi aprovada em:', ['1919', '1945', '1948', '1962'], 2, 'Pela Assembleia Geral da ONU.'),
    mc('A Força Expedicionária Brasileira combateu:', ['Na França', 'Na Itália', 'No norte da África', 'No Pacífico'], 1, '1944–1945.'),
    disc('Escolha um dos totalitarismos estudados e analise-o com três tipos de fonte (documento do regime, testemunho de vítima, documento externo, como uma encíclica), distinguindo fato e interpretação.', ['Três tipos de fonte', 'Crítica de cada uma', 'Distingue fato e interpretação', 'Conclusão fundamentada']),
  ],
  resumo: ['1914–1918; 1917; Versalhes (1919); 1929.', 'Totalitarismos e Arendt (1951); debate sobre o conceito.', 'Pio XI: 1931 e 1937 (duas encíclicas).', '1939–1945; Holocausto; ONU e Declaração (1948).', 'Guerra Fria até 1991; descolonização; FEB na Itália.'],
  referencias: [
    { texto: 'Pio XI, Non abbiamo bisogno (1931); Mit brennender Sorge (1937); Divini Redemptoris (1937).' },
    { texto: 'Hannah Arendt, Origens do totalitarismo (1951).' },
    { texto: 'Eric Hobsbawm, Era dos extremos (1994).' },
    { texto: 'Tony Judt, Pós-guerra (2005).' },
    { texto: 'Declaração Universal dos Direitos Humanos (1948).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['Pio XI', 'Non abbiamo bisogno (1931); Mit brennender Sorge e Divini Redemptoris (1937).'], ['Arendt', 'Origens do totalitarismo (1951).'], ['FEB', 'Itália, 1944–1945; Monte Castelo.']],
  avancado: {
    texto: `<h3>História do tempo presente</h3>
<p>O estudo do passado recente enfrenta problemas próprios: fontes abundantes e desiguais, arquivos ainda fechados, testemunhas vivas e interesses atuais. A "história do tempo presente" desenvolveu métodos de história oral e de confronto entre testemunho e arquivo ${tag('interpretacao')}.</p>
<h3>Interpretações do século XX</h3>
<p>Hobsbawm chamou o período de 1914 a 1991 de "breve século XX" e "era dos extremos" ${tag('interpretacao')}; François Furet, em <em>O passado de uma ilusão</em> (1995), estudou a atração exercida pelo comunismo sobre intelectuais ocidentais ${tag('interpretacao')}. Ler os dois é exercício de comparar autores com posições políticas opostas pelos mesmos critérios.</p>`,
    leituras: [{ texto: 'Eric Hobsbawm, Era dos extremos (1994).' }, { texto: 'François Furet, O passado de uma ilusão (1995).' }],
    exercicios: [
      mc('A expressão "breve século XX" (1914–1991) é de:', ['Hobsbawm', 'Furet', 'Arendt', 'Judt'], 0, 'Era dos extremos.'),
      mc('O passado de uma ilusão (1995) estuda:', ['A economia soviética', 'A atração do comunismo sobre intelectuais', 'A Primeira Guerra', 'A descolonização'], 1, 'François Furet.'),
      mc('Um problema específico da história do tempo presente é:', ['Falta absoluta de fontes', 'Testemunhas vivas e arquivos ainda fechados', 'Ausência de interesse público', 'Uso de latim'], 1, 'Exige métodos próprios.'),
      disc('Compare Hobsbawm e Furet sobre o século XX: o que cada um explica melhor e onde a posição política de cada um aparece na interpretação?', ['Expõe os dois', 'Compara pelas evidências', 'Identifica a posição de cada um', 'Conclusão'])],
  },
}),

aula({
  id: 'h5-2', titulo: 'O Brasil republicano: da Primeira República à Constituição de 1988', duracao: '150 min',
  aprendera: ['Situar as fases da República brasileira com datas', 'Ler Os sertões como fonte e como interpretação', 'Distinguir fatos e nomenclaturas em disputa (1930, 1964)', 'Relacionar instituições atuais à sua formação histórica'],
  prereq: ['Aula anterior', 'A formação do Brasil (aula h4-4)'],
  explicacao: `
<h3>O problema</h3>
<p>A República brasileira teve várias constituições, rupturas e reconstruções. Muitas de suas instituições e conflitos continuam presentes. Estudar esse período exige separar o que está documentado do modo como cada grupo o nomeia e o julga.</p>

<h3>Primeira República (1889–1930)</h3>
<p>A Constituição de 1891 adotou o federalismo e o presidencialismo ${tag('fato')}. No governo de Campos Sales (1898–1902) organizou-se a "política dos governadores", acordo entre o governo federal e as oligarquias estaduais ${tag('fato')}. Conflitos sociais marcaram o período: a guerra de Canudos (1896–1897), narrada por Euclides da Cunha em <em>Os sertões</em> (1902); a Revolta da Vacina (1904); o movimento tenentista nos anos 1920 ${tag('fato')}. A Semana de Arte Moderna (1922) é marco cultural ${tag('fato')}.</p>

<h3>A Era Vargas (1930–1945)</h3>
<p>O movimento de 1930 levou Getúlio Vargas ao poder ${tag('fato')}; chamá-lo de "revolução" é a nomenclatura dos vencedores, que a historiografia discute ${tag('debate')}. Em 1937 instituiu-se o Estado Novo, regime autoritário com nova Constituição outorgada ${tag('fato')}. A Consolidação das Leis do Trabalho é de 1943 ${tag('fato')}. Vargas foi deposto em 1945 ${tag('fato')}.</p>

<h3>De 1946 a 1964</h3>
<p>A Constituição de 1946 restabeleceu o regime representativo ${tag('fato')}. Vargas voltou eleito (1951) e suicidou-se em 1954 ${tag('fato')}. No governo de Juscelino Kubitschek inaugurou-se Brasília (1960) ${tag('fato')}. A CNBB foi fundada em 1952, com participação de D. Hélder Câmara ${tag('fato')}.</p>

<h3>O regime militar (1964–1985)</h3>
<p>Em 31 de março e 1º de abril de 1964 o presidente João Goulart foi deposto, e os militares assumiram o poder até 1985 ${tag('fato')}. A historiografia acadêmica predominante chama o evento de golpe; seus apoiadores, na época, o chamaram de revolução; outros discutem a participação civil e o termo "civil-militar" ${tag('debate')}. O Ato Institucional nº 5 (dezembro de 1968) suspendeu garantias e ampliou a repressão ${tag('fato')}. A Lei da Anistia é de 1979; a campanha das Diretas Já, de 1984 ${tag('fato')}. Em 1985, Tancredo Neves foi eleito pelo Colégio Eleitoral e José Sarney assumiu a presidência ${tag('fato')}.</p>

<h3>A Nova República</h3>
<p>A Constituição de 1988 ampliou direitos e restabeleceu eleições diretas ${tag('fato')}. O Plano Real (1994) controlou a inflação ${tag('fato')}. A Economia e a Ciência Política retomam esses fatos com seus próprios métodos.</p>`,
  vocabulario: [
    ['Política dos governadores', 'Acordo entre governo federal e oligarquias estaduais (Campos Sales).'],
    ['Tenentismo', 'Movimento de jovens oficiais nos anos 1920.'],
    ['Estado Novo', 'Regime autoritário de Vargas (1937–1945).'],
    ['Ato Institucional', 'Norma do regime militar acima da Constituição.'],
    ['Nomenclatura em disputa', 'Nomes diferentes dados ao mesmo fato por grupos diferentes.'],
  ],
  exemplos: `<p><strong>Os sertões como fonte dupla:</strong> Euclides da Cunha esteve em Canudos como correspondente e descreveu a destruição do arraial; ao mesmo tempo, sua interpretação depende de teorias raciais e geográficas de seu tempo, hoje rejeitadas. O livro é testemunho, obra literária e documento da mentalidade de 1902.</p>`,
  contexto: `<p><strong>No mundo:</strong> as fases da República acompanham o entreguerras, a Segunda Guerra, a Guerra Fria e a redemocratização latino-americana dos anos 1980. <strong>No Brasil:</strong> a Constituição vigente (1988) e muitas instituições (CLT, Brasília, sistema federativo) resultam desse percurso; conhecê-lo é condição para estudar Ciência Política e Direito.</p>`,
  argumento: {
    titulo: 'Por que registrar a nomenclatura e não apenas escolher uma', tag: 'argumento',
    premissas: ['Grupos diferentes dão nomes diferentes ao mesmo acontecimento (1930, 1964).', 'O nome usado na época é ele próprio uma fonte sobre quem o usava e com que intenção.', 'O estudante precisa conhecer o fato, os nomes em disputa e as razões de cada um para avaliar o debate.'],
    conclusao: 'Logo, o historiador registra os fatos documentados, informa a nomenclatura predominante na historiografia e expõe as alternativas com suas razões.',
    nota: 'Isso não é relativismo: os fatos (deposição de um presidente, atos institucionais, repressão documentada) não dependem do nome.',
  },
  objecoes: [
    { objecao: 'Estudar a história recente é fazer política, não história.', tag: 'debate',
      resposta: 'O risco existe, e por isso o método é o mesmo de qualquer período: fontes, crítica, distinção entre fato e interpretação. Evitar o tema não o torna neutro; estudá-lo com rigor é o que permite discuti-lo honestamente.' },
  ],
  aplicacao: `<p>Escolha um artigo da Constituição de 1988 e reconstitua sua origem histórica (de que experiência anterior ele procura proteger o país?), citando a fonte de cada afirmação.</p>`,
  fonte: {
    obra: 'Euclides da Cunha, Os sertões (1902), "Nota preliminar"; Constituição da República Federativa do Brasil (1988), preâmbulo e art. 5º', link: null,
    orientacao: `<p>Na nota preliminar, identifique como Euclides justifica o livro. Na Constituição de 1988, leia o preâmbulo e os primeiros incisos do art. 5º e relacione-os com acontecimentos estudados nesta aula.</p>`,
  },
  perguntas: [
    { p: 'O que foi a política dos governadores?', r: 'Acordo entre o governo federal e as oligarquias estaduais, organizado sob Campos Sales.' },
    { p: 'Quando foi instituído o Estado Novo?', r: 'Em 1937.' },
    { p: 'O que foi o AI-5?', r: 'Ato Institucional de dezembro de 1968 que suspendeu garantias e ampliou a repressão.' },
  ],
  exercicios: [
    mc('A guerra de Canudos ocorreu em:', ['1889–1891', '1896–1897', '1904', '1922'], 1, 'Narrada em Os sertões (1902).'),
    mc('A Consolidação das Leis do Trabalho é de:', ['1930', '1937', '1943', '1946'], 2, '1943.'),
    mc('Brasília foi inaugurada em:', ['1950', '1954', '1960', '1964'], 2, 'No governo Kubitschek.'),
    mc('A CNBB foi fundada em:', ['1922', '1952', '1964', '1988'], 1, '1952.'),
    mc('A Lei da Anistia é de:', ['1968', '1979', '1984', '1988'], 1, '1979.'),
    disc('Explique o debate sobre como nomear os acontecimentos de 1964: os fatos documentados, os termos em disputa e as razões de cada um, e sua conclusão.', ['Fatos com datas e fontes', 'Termos e razões', 'Distingue fato e nome', 'Conclusão fundamentada']),
  ],
  resumo: ['1891: federalismo; política dos governadores; Canudos.', '1930; Estado Novo (1937); CLT (1943).', '1946–1964: Vargas, Brasília (1960), CNBB (1952).', '1964–1985: regime militar; AI-5 (1968); Anistia (1979).', 'Constituição de 1988; Plano Real (1994).'],
  referencias: [
    { texto: 'Euclides da Cunha, Os sertões (1902).' },
    { texto: 'Constituição da República Federativa do Brasil (1988).' },
    { texto: 'Boris Fausto, História do Brasil (1994).' },
    { texto: 'José Murilo de Carvalho, Cidadania no Brasil: o longo caminho (2001).' },
    { texto: 'Lilia Schwarcz e Heloisa Starling, Brasil: uma biografia (2015).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['1937', 'Estado Novo.'], ['1968', 'AI-5.'], ['1988', 'Constituição vigente.']],
  avancado: {
    texto: `<h3>Cidadania em ordem invertida</h3>
<p>José Murilo de Carvalho, em <em>Cidadania no Brasil</em> (2001), argumentou que, ao contrário da sequência inglesa descrita por T. H. Marshall (direitos civis, depois políticos, depois sociais), no Brasil os direitos sociais vieram antes, sob o autoritarismo de Vargas ${tag('interpretacao')}.</p>
<h3>Igreja e sociedade no século XX brasileiro</h3>
<p>O período inclui a Ação Católica, a fundação da CNBB, a recepção do Vaticano II e o papel de bispos e leigos em diferentes posições diante do regime militar ${tag('fato')}; a historiografia discute essa diversidade sem reduzi-la a um único lado ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'José Murilo de Carvalho, Cidadania no Brasil (2001).' }, { texto: 'T. H. Marshall, Cidadania, classe social e status (1950).' }],
    exercicios: [
      mc('A sequência "direitos civis, políticos, sociais" foi descrita para a Inglaterra por:', ['T. H. Marshall', 'Max Weber', 'Tocqueville', 'Faoro'], 0, 'Cidadania, classe social e status (1950).'),
      mc('Para José Murilo de Carvalho, no Brasil vieram primeiro os direitos:', ['Civis', 'Políticos', 'Sociais', 'Religiosos'], 2, 'Sob Vargas.'),
      mc('Cidadania no Brasil: o longo caminho é de:', ['Boris Fausto', 'José Murilo de Carvalho', 'Sérgio Buarque', 'Florestan Fernandes'], 1, '2001.'),
      disc('A tese da "cidadania invertida" se aplica ao Brasil de hoje? Use dados e fatos do período republicano para responder.', ['Expõe a tese', 'Usa fatos do período', 'Avalia a aplicação atual', 'Conclusão'])],
  },
}),

aula({
  id: 'h5-3', titulo: 'História no espaço público: patrimônio, arquivos e uso do passado', duracao: '120 min',
  aprendera: ['Explicar o papel do patrimônio e dos arquivos', 'Usar a Lei de Acesso à Informação e arquivos eclesiásticos na pesquisa', 'Verificar citações e afirmações históricas que circulam publicamente', 'Distinguir história, memória e propaganda'],
  prereq: ['Aulas anteriores do módulo', 'Crítica das fontes (h1-3)'],
  explicacao: `
<h3>O problema</h3>
<p>A história não vive só nos livros: está em monumentos, museus, arquivos, datas comemorativas, debates públicos e redes sociais. Aplicar o método histórico fora da sala de aula é uma das finalidades do percurso.</p>

<h3>Patrimônio</h3>
<p>No Brasil, o Serviço do Patrimônio Histórico e Artístico Nacional foi criado em 1937 (hoje IPHAN) ${tag('fato')}. Tombamentos protegem igrejas coloniais, centros históricos e acervos. O incêndio do Museu Nacional, no Rio de Janeiro, em 2 de setembro de 2018, destruiu grande parte de um acervo de cerca de vinte milhões de itens ${tag('fato')} — lembrança de que preservar fontes é condição da própria história.</p>

<h3>Arquivos</h3>
<ul>
<li><strong>Públicos</strong>: Arquivo Nacional, arquivos estaduais e municipais. A Lei de Acesso à Informação (Lei nº 12.527/2011) regula o acesso a informações públicas ${tag('fato')}.</li>
<li><strong>Eclesiásticos</strong>: os livros de batismo, casamento e óbito das paróquias e as cúrias diocesanas guardam fontes essenciais para a história social desde a Colônia ${tag('fato')}.</li>
<li><strong>Digitais</strong>: hemerotecas e acervos digitalizados permitem consultar jornais antigos, com o cuidado de verificar a origem e a integridade das imagens.</li>
</ul>

<h3>Uso público do passado</h3>
<p>Frases atribuídas a personagens históricos circulam sem fonte; datas e números são repetidos sem verificação. Os procedimentos do módulo H1 aplicam-se diretamente: buscar a fonte primária, conferir a data, verificar se várias reproduções derivam de uma só origem, perguntar quem divulga e com que intenção ${tag('argumento')}.</p>
<p>A memória pública tem função legítima (comemorar, homenagear, lembrar vítimas), mas pode tornar-se propaganda quando seleciona o passado para servir a um projeto atual sem admitir crítica ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Patrimônio', 'Bens materiais e imateriais reconhecidos como herança a preservar.'],
    ['Tombamento', 'Ato que protege legalmente um bem de valor histórico ou cultural.'],
    ['Arquivo eclesiástico', 'Acervo documental de paróquias, dioceses e ordens religiosas.'],
    ['Hemeroteca', 'Acervo de jornais e periódicos.'],
    ['Uso público do passado', 'Mobilização da história em debates, comemorações e políticas atuais.'],
  ],
  exemplos: `<p><strong>Verificar uma citação:</strong> uma frase atribuída a D. Pedro II circula em redes sociais. Procedimento: buscar a frase em edições de seus diários e cartas; buscar a primeira ocorrência em jornais digitalizados; se a fonte mais antiga for recente e sem referência, a atribuição não se sustenta até prova em contrário.</p>`,
  contexto: `<p><strong>No mundo:</strong> a "história pública" é campo reconhecido em muitos países, ligado a museus, documentários e educação. <strong>No Brasil:</strong> IPHAN, Arquivo Nacional, arquivos eclesiásticos e institutos históricos estaduais formam a rede de fontes que o estudante pode usar diretamente.</p>`,
  argumento: {
    titulo: 'Por que uma citação sem fonte primária não deve ser usada como prova', tag: 'argumento',
    premissas: ['Uma citação só prova o que alguém disse se puder ser rastreada até o momento em que foi dita ou escrita.', 'Reproduções sucessivas sem referência não acrescentam acesso à origem.', 'Citações falsas ou adulteradas circulam com frequência.'],
    conclusao: 'Logo, sem fonte primária localizada, uma citação pode ser mencionada como "atribuída", mas não usada como prova.',
    nota: 'Vale para qualquer autor, inclusive santos e autores católicos, cujas frases também são frequentemente inventadas.',
  },
  objecoes: [
    { objecao: 'Se a frase é inspiradora, pouco importa se é autêntica.', tag: 'debate',
      resposta: 'Pode-se aproveitar uma ideia sem atribuí-la falsamente. Atribuir a alguém o que não disse é falso testemunho sobre essa pessoa e corrompe a confiança nas fontes.' },
  ],
  aplicacao: `<p>Escolha uma frase "histórica" que circula na internet e faça a verificação completa: primeira ocorrência, fonte primária (se houver), conclusão. Registre no Caderno com os links e as datas de consulta.</p>`,
  fonte: {
    obra: 'Lei nº 12.527, de 18 de novembro de 2011 (Lei de Acesso à Informação), arts. 1º a 8º; livro de batismos de uma paróquia (acervo diocesano ou digitalizado)', link: null,
    orientacao: `<p>Na Lei de Acesso à Informação, identifique o que pode ser pedido e em que prazo. Se tiver acesso a um livro paroquial digitalizado, transcreva um assento e identifique as informações que ele oferece ao historiador.</p>`,
  },
  perguntas: [
    { p: 'Quando foi criado o serviço federal de patrimônio no Brasil?', r: 'Em 1937 (hoje IPHAN).' },
    { p: 'Que fontes os arquivos paroquiais oferecem?', r: 'Assentos de batismo, casamento e óbito, essenciais para a história social.' },
    { p: 'Como tratar uma citação sem fonte primária?', r: 'Como atribuída, não como prova, até que a origem seja localizada.' },
  ],
  exercicios: [
    mc('O serviço federal de patrimônio histórico do Brasil foi criado em:', ['1838', '1922', '1937', '1988'], 2, 'SPHAN, hoje IPHAN.'),
    mc('O incêndio do Museu Nacional ocorreu em:', ['1978', '2008', '2018', '2020'], 2, '2 de setembro de 2018.'),
    mc('A Lei de Acesso à Informação é a:', ['Lei 5.700/1971', 'Lei 12.527/2011', 'Lei 12.528/2011', 'Lei 3.353/1888'], 1, 'A 12.528 criou a Comissão da Verdade.'),
    mc('Várias páginas reproduzem a mesma frase sem fonte. Isso:', ['Prova a autenticidade', 'Não acrescenta prova se derivam da mesma origem', 'Prova que é falsa', 'Dispensa verificar'], 1, 'Testemunhos dependentes.'),
    mc('Memória pública vira propaganda quando:', ['Homenageia vítimas', 'Seleciona o passado para um projeto atual sem admitir crítica', 'Usa monumentos', 'É organizada pelo Estado'], 1, 'O critério é a recusa da crítica.'),
    disc('Escolha um monumento ou data comemorativa da sua cidade e analise-o como fonte de história da memória: quem o criou, quando, o que celebra, o que omite.', ['Identifica criação e data', 'Explica o que celebra', 'Aponta omissões', 'Usa fontes']),
  ],
  resumo: ['Patrimônio: SPHAN (1937), hoje IPHAN.', 'Museu Nacional (2018): preservar fontes.', 'Arquivos públicos, eclesiásticos e digitais; Lei 12.527/2011.', 'Verificar citações até a fonte primária.', 'Memória legítima x propaganda.'],
  referencias: [
    { texto: 'Lei nº 12.527, de 18 de novembro de 2011 (Lei de Acesso à Informação).' },
    { texto: 'Decreto-lei nº 25, de 30 de novembro de 1937 (organização da proteção do patrimônio).' },
    { texto: 'Pierre Nora (dir.), Les lieux de mémoire (1984–1992).' },
    { texto: 'Jacques Le Goff, História e memória.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Fazer a verificação de uma citação'],
  revisao: [['IPHAN', 'Criado em 1937 como SPHAN.'], ['Lei 12.527/2011', 'Acesso à informação.'], ['Citação sem fonte', 'Atribuída, não prova.']],
  avancado: {
    texto: `<h3>Arquivos digitais e autenticidade</h3>
<p>Imagens de documentos podem ser editadas; a crítica externa digital verifica a procedência (que instituição publicou a imagem), metadados e a coerência com outras cópias ${tag('interpretacao')}. Repositórios institucionais com identificador estável são preferíveis a reproduções em redes sociais.</p>
<h3>História oral</h3>
<p>Entrevistas gravadas são fontes para a história recente; exigem consentimento informado, transcrição cuidadosa e crítica como qualquer testemunho (memória, intenção, contexto da entrevista) ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Verena Alberti, Manual de história oral (2004).' }, { texto: 'Paul Thompson, A voz do passado (1978).' }],
    exercicios: [
      mc('A voz do passado (1978), sobre história oral, é de:', ['Paul Thompson', 'E. P. Thompson', 'Pierre Nora', 'Le Goff'], 0, 'Paul Thompson.'),
      mc('Na história oral, é indispensável:', ['Dispensar a crítica', 'Consentimento informado e crítica do testemunho', 'Publicar sem transcrição', 'Usar só entrevistados famosos'], 1, 'Ética e método.'),
      mc('Para verificar um documento digitalizado, deve-se priorizar:', ['A imagem mais compartilhada', 'Repositórios institucionais com procedência', 'A versão com melhor resolução', 'A legenda da postagem'], 1, 'Procedência.'),
      disc('Planeje uma entrevista de história oral com um idoso da sua família sobre um acontecimento do século XX: objetivo, perguntas, cuidados éticos e como confrontará o testemunho com outras fontes.', ['Objetivo claro', 'Perguntas abertas e não indutoras', 'Cuidados éticos', 'Plano de confronto com fontes'])],
  },
}),

aula({
  id: 'h5-4', titulo: 'Projeto de pesquisa histórica: do problema à redação', duracao: '180 min',
  aprendera: ['Formular um problema de pesquisa delimitado', 'Montar um levantamento de fontes primárias e secundárias', 'Organizar fichamento, argumento e redação', 'Citar e referenciar segundo normas, sem plágio'],
  prereq: ['Todas as aulas anteriores de História'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina quando o estudante faz o que estudou: investigar uma questão com fontes e escrever uma conclusão proporcional às provas. Esta aula é o roteiro do trabalho final de História.</p>

<h3>1. Do tema ao problema</h3>
<p>Tema é um assunto ("as irmandades em Minas"); problema é uma pergunta que admite resposta pelas fontes ("como as irmandades de pretos de Vila Rica financiavam suas igrejas entre 1730 e 1780?"). Delimite tempo, lugar e objeto. Umberto Eco, em <em>Como se faz uma tese</em> (1977), insiste: quanto mais restrito o campo, melhor se trabalha e com mais segurança ${tag('interpretacao')}.</p>

<h3>2. Hipótese e fontes</h3>
<p>Formule uma hipótese provisória e pergunte que fontes poderiam confirmá-la ou refutá-la. Faça um levantamento: fontes primárias (onde estão, se são acessíveis, em que língua e grafia) e bibliografia secundária (o que já se sabe). Se as fontes não existem ou não são acessíveis, troque o problema.</p>

<h3>3. Fichamento e crítica</h3>
<p>Para cada fonte: referência completa, localização (arquivo, códice, página), transcrição dos trechos usados, crítica externa e interna. Para cada obra secundária: tese, argumentos, fontes usadas pelo autor. Use o Caderno com vínculos ao livro ou à disciplina.</p>

<h3>4. Argumento e redação</h3>
<p>Organize o texto como argumento: problema; estado da questão; fontes e método; análise; conclusão. Cada afirmação importante deve indicar sua fonte. Apresente as objeções e as evidências contrárias. A conclusão não deve afirmar mais do que as provas permitem ${tag('argumento')}.</p>

<h3>5. Citação, referência e honestidade</h3>
<p>No Brasil, as normas da ABNT orientam citações (NBR 10520) e referências (NBR 6023) ${tag('fato')}. Citar é obrigação: usar ideias ou palavras alheias sem indicar a fonte é plágio. Transcrever fontes com fidelidade inclui indicar supressões e intervenções do pesquisador.</p>

<h3>Rubrica do trabalho final</h3>
<ul>
<li>Problema delimitado e relevante.</li>
<li>Fontes primárias pertinentes, localizadas e criticadas.</li>
<li>Diálogo com a bibliografia.</li>
<li>Argumento claro, com objeções consideradas.</li>
<li>Conclusão proporcional às provas; distinção entre fato, interpretação e hipótese.</li>
<li>Citações e referências corretas.</li>
</ul>`,
  vocabulario: [
    ['Problema de pesquisa', 'Pergunta delimitada que as fontes podem responder.'],
    ['Hipótese', 'Resposta provisória a ser testada.'],
    ['Estado da questão', 'O que a bibliografia já sabe sobre o problema.'],
    ['Fichamento', 'Registro organizado de fontes e leituras.'],
    ['Plágio', 'Uso de ideias ou palavras alheias sem indicar a fonte.'],
  ],
  exemplos: `<p><strong>De tema a problema:</strong> "A escravidão no Brasil" (tema amplo) → "A escravidão em Minas no século XVIII" (ainda amplo) → "Padrões de alforria nos testamentos de Mariana, 1750–1780" (problema pesquisável, com fonte definida: testamentos do arquivo da arquidiocese ou do fórum).</p>`,
  contexto: `<p><strong>No mundo:</strong> as regras da pesquisa histórica são as mesmas da universidade em qualquer país: problema, fontes, crítica, argumento, referências. <strong>No Brasil:</strong> arquivos estaduais, municipais, eclesiásticos e o Arquivo Nacional oferecem fontes abertas para pesquisas de iniciação; as normas da ABNT padronizam a apresentação.</p>`,
  argumento: {
    titulo: 'Por que a conclusão deve ser proporcional às provas', tag: 'argumento',
    premissas: ['Uma conclusão vale na medida em que as evidências a sustentam.', 'Afirmar mais do que as evidências permitem é apresentar como conhecido o que é apenas suposto.', 'Isso engana o leitor sobre o grau de certeza da pesquisa.'],
    conclusao: 'Logo, a conclusão honesta indica o que está provado, o que é provável e o que permanece aberto.',
    nota: 'Os rótulos usados em todo o curso (fato, interpretação, hipótese, debate) servem exatamente para isso.',
  },
  objecoes: [
    { objecao: 'Sem acesso a arquivos, não é possível fazer pesquisa histórica.', tag: 'debate',
      resposta: 'Muitos acervos estão digitalizados (jornais, legislação, coleções de fontes), e arquivos locais e paroquiais são frequentemente acessíveis. O problema deve ser escolhido de acordo com as fontes disponíveis.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: tema, problema, hipótese, três fontes primárias localizadas, três obras secundárias e o plano de capítulos. Este pré-projeto será a base do trabalho final.</p>`,
  fonte: {
    obra: 'Umberto Eco, Como se faz uma tese (1977), caps. II e IV; Wayne Booth e outros, A arte da pesquisa (1995)', link: null,
    orientacao: `<p>Em Eco, leia os capítulos sobre escolha do tema e fichamento. Em Booth, leia a passagem de tópico a pergunta e a problema. Aplique os dois ao seu pré-projeto.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre tema e problema?', r: 'Tema é um assunto; problema é uma pergunta delimitada que as fontes podem responder.' },
    { p: 'O que fazer se as fontes não existem ou não são acessíveis?', r: 'Trocar ou reformular o problema.' },
    { p: 'Quais normas da ABNT tratam de citações e referências?', r: 'NBR 10520 (citações) e NBR 6023 (referências).' },
  ],
  exercicios: [
    mc('Qual destes é um problema de pesquisa, e não apenas um tema?', ['A Idade Média', 'A Igreja no Brasil', 'Como as irmandades de Vila Rica financiavam suas igrejas entre 1730 e 1780?', 'A história de Minas'], 2, 'Pergunta delimitada no tempo, no lugar e no objeto.'),
    mc('Como se faz uma tese (1977) é de:', ['Marc Bloch', 'Umberto Eco', 'Wayne Booth', 'E. H. Carr'], 1, 'Umberto Eco.'),
    mc('A norma da ABNT para referências é a:', ['NBR 10520', 'NBR 6023', 'NBR 14724', 'NBR 6028'], 1, 'NBR 6023; a 10520 trata de citações.'),
    mc('Usar ideias de outro autor sem indicar a fonte é:', ['Paráfrase legítima', 'Plágio', 'Fichamento', 'Estado da questão'], 1, 'Mesmo sem copiar as palavras.'),
    mc('Uma conclusão honesta deve:', ['Afirmar tudo com certeza', 'Indicar o que está provado, o provável e o aberto', 'Evitar mencionar objeções', 'Repetir a hipótese inicial'], 1, 'Proporcional às provas.'),
    disc('Apresente seu pré-projeto: tema, problema, hipótese, fontes primárias localizadas, bibliografia e justificativa da viabilidade.', ['Problema delimitado', 'Hipótese testável', 'Fontes localizadas e acessíveis', 'Bibliografia pertinente', 'Viabilidade justificada']),
  ],
  resumo: ['Do tema ao problema delimitado.', 'Hipótese e levantamento de fontes.', 'Fichamento com crítica.', 'Argumento, objeções e conclusão proporcional.', 'ABNT: NBR 10520 e 6023; nada de plágio.'],
  referencias: [
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
    { texto: 'Wayne C. Booth, Gregory G. Colomb e Joseph M. Williams, A arte da pesquisa (1995).', livro: 'booth-pesquisa' },
    { texto: 'ABNT, NBR 10520 (citações) e NBR 6023 (referências).' },
    { texto: 'Marc Bloch, Apologia da história (1949).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto na questão discursiva', 'Ler os capítulos indicados'],
  revisao: [['Problema', 'Pergunta delimitada respondível pelas fontes.'], ['ABNT', 'NBR 10520 citações; NBR 6023 referências.'], ['Conclusão', 'Proporcional às provas.']],
  avancado: {
    texto: `<h3>Paleografia</h3>
<p>Documentos coloniais exigem leitura de escritas antigas, abreviaturas e grafias da época. A paleografia ensina a transcrevê-los; normas de transcrição indicam como tratar abreviaturas e intervenções do pesquisador ${tag('interpretacao')}.</p>
<h3>Métodos quantitativos</h3>
<p>Séries de registros paroquiais, inventários ou preços permitem análises quantitativas (demografia histórica, história econômica). A Estatística da fase multidisciplinar fornece os instrumentos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Umberto Eco, Como se faz uma tese (1977).' }, { texto: 'Manuais de paleografia luso-brasileira (consultar edições de arquivos estaduais).' }],
    exercicios: [
      mc('A paleografia estuda:', ['Fósseis', 'Escritas antigas e sua leitura', 'Moedas', 'Inscrições em pedra apenas'], 1, 'Leitura e transcrição de manuscritos.'),
      mc('Uma série de registros de batismo de várias décadas permite estudos de:', ['Demografia histórica', 'Astronomia', 'Numismática', 'Heráldica'], 0, 'Natalidade, nomes, compadrio.'),
      mc('Na transcrição de uma fonte, as intervenções do pesquisador devem ser:', ['Omitidas', 'Indicadas', 'Misturadas ao texto', 'Proibidas'], 1, 'Fidelidade à fonte.'),
      disc('Proponha um uso quantitativo de uma série documental para o seu pré-projeto: que fonte, que variáveis, que pergunta e que limite.', ['Fonte e variáveis', 'Pergunta', 'Limites da série', 'Relação com o problema'])],
  },
}),

avaliacao('h5-5', 'Avaliação integradora de História', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de História. Reúne questões de todos os módulos (H1 a H5) e pede duas discursivas de síntese. A conclusão do percurso exige também o trabalho final de pesquisa, planejado na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça as linhas do tempo e os quadros comparativos.</li><li>Releia os critérios de verdade histórica (h3-3) e a rubrica do trabalho final (h5-4).</li></ul>`,
[
  disc('Escolha um problema da história do Brasil e mostre como o estudaria com o que aprendeu em todo o percurso: método e crítica de fontes, uma escola historiográfica, uma interpretação do Brasil, o contexto mundial e o uso público do tema.', ['Problema delimitado', 'Método e fontes', 'Escola e interpretação mobilizadas', 'Contexto mundial', 'Uso público analisado', 'Conclusão proporcional']),
  disc('Responda como historiador: o que a história pode e o que não pode afirmar com certeza? Use três exemplos de módulos diferentes.', ['Distingue fato, interpretação, hipótese e debate', 'Três exemplos de módulos diferentes', 'Argumentação clara', 'Conclusão fundamentada']),
]),
];
