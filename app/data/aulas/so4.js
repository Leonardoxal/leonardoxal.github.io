// Sociologia IV — a formação social brasileira (etapa 8 do percurso de Sociologia).
// Faoro e o patrimonialismo; Freyre e Oliveira Vianna sobre família e sociedade patriarcal;
// Florestan Fernandes, modernização e classes; DaMatta, cultura e hierarquia. Teses antes das críticas.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'so4-1', titulo: 'Raymundo Faoro e o patrimonialismo: Os donos do poder', duracao: '150 min',
  aprendera: ['Expor a tese de Os donos do poder', 'Explicar estamento burocrático e patrimonialismo a partir de Weber', 'Avaliar a tese com exemplos históricos', 'Identificar o uso do conceito no debate público'],
  prereq: ['Sociologia III (módulo SO3)', 'Sociologia I: tipo ideal (so1-4)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que, no Brasil, o Estado parece estar acima da sociedade e o público se mistura com o privado? Raymundo Faoro (1925–2003) respondeu em <em>Os donos do poder</em> (1958; edição revista e ampliada em 1975) ${tag('fato')}.</p>
<h3>Os conceitos</h3>
<p>Faoro usou tipos ideais de Weber: no <strong>patrimonialismo</strong>, o governante trata o Estado como patrimônio próprio, e cargos e favores dependem de lealdade pessoal ${tag('fato')}. O <strong>estamento burocrático</strong> é o grupo que, ocupando o Estado, governa em nome próprio e não como representante da sociedade ${tag('fato')}.</p>
<h3>A tese</h3>
<p>Para Faoro, desde a formação do Estado português, com a Revolução de Avis (1383–1385), a monarquia centralizou o poder e controlou o comércio; esse padrão foi transplantado para o Brasil e atravessou Colônia, Império e República ${tag('interpretacao')}. O resultado seria um "capitalismo politicamente orientado", em que a riqueza depende do acesso ao Estado ${tag('interpretacao')}.</p>
<h3>Críticas</h3>
<p>Historiadores e sociólogos criticaram a ênfase na continuidade de longa duração, que deixaria pouco espaço à mudança e às classes sociais; outros discutem se o uso de Weber é fiel ${tag('debate')}. Florestan Fernandes, por exemplo, deu mais peso à estrutura de classes e à dependência econômica (aula so4-3) ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Patrimonialismo', 'Dominação em que o governante trata o Estado como patrimônio próprio (Weber).'],
    ['Estamento burocrático', 'Grupo que governa em nome próprio a partir do Estado (Faoro).'],
    ['Capitalismo politicamente orientado', 'Riqueza dependente do acesso ao poder político (Faoro).'],
    ['Revolução de Avis', 'Crise dinástica portuguesa de 1383–1385, com centralização monárquica.'],
    ['Longa duração', 'Continuidade histórica de estruturas por séculos.'],
  ],
  exemplos: `<p><strong>Teste do conceito:</strong> a nomeação de parentes para cargos públicos (nepotismo) é traço patrimonialista. A Súmula Vinculante nº 13 do Supremo Tribunal Federal (2008) proibiu o nepotismo na administração pública ${tag('fato')}. O exemplo mostra o conceito aplicado; não prova sozinho a tese de continuidade de seis séculos.</p>`,
  contexto: `<p><strong>No mundo:</strong> o conceito weberiano de patrimonialismo é usado para analisar Estados na América Latina, na África e na Ásia. <strong>No Brasil:</strong> "patrimonialismo" tornou-se termo do debate público sobre corrupção e reforma do Estado, às vezes em sentido mais frouxo que o de Faoro ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'A tese de Faoro em premissas', tag: 'argumento',
    premissas: ['O Estado português formou-se cedo e centralizado, controlando o comércio e os cargos.', 'Esse Estado foi transplantado para o Brasil com sua burocracia e suas práticas.', 'Independência e República mudaram o regime, mas não a relação entre o estamento burocrático e a sociedade.'],
    conclusao: 'Logo, segundo Faoro, o Estado brasileiro permaneceu patrimonialista e dominado por um estamento.',
    nota: 'A avaliação exige verificar cada premissa com dados de períodos diferentes.',
  },
  objecoes: [
    { objecao: 'O patrimonialismo explica tudo no Brasil.', tag: 'debate',
      resposta: 'Um conceito que explica tudo não explica nada. Faoro oferece uma chave poderosa, mas a mudança institucional (concursos, órgãos de controle, Ministério Público) e as classes sociais também precisam entrar na explicação.' },
  ],
  aplicacao: `<p>Escolha um episódio da história política brasileira (Império, Primeira República ou período recente) e analise-o com os conceitos de Faoro. Indique um dado que reforça e um que enfraquece a tese.</p>`,
  fonte: {
    obra: 'Raymundo Faoro, Os donos do poder (1958; 2ª ed. 1975), cap. I e "Viagem redonda" (conclusão); Max Weber, Economia e sociedade, sobre a dominação patrimonial', link: null,
    orientacao: `<p>No primeiro capítulo, localize a formação do Estado português. Na conclusão, a síntese da tese. Em Weber, a definição de dominação patrimonial. Compare o uso que Faoro faz do conceito.</p>`,
  },
  perguntas: [
    { p: 'O que é patrimonialismo?', r: 'Dominação em que o governante trata o Estado como patrimônio próprio.' },
    { p: 'O que é o estamento burocrático em Faoro?', r: 'O grupo que governa em nome próprio a partir do Estado.' },
    { p: 'Qual a principal crítica a Faoro?', r: 'A ênfase na continuidade de longa duração, com pouco espaço à mudança e às classes.' },
  ],
  exercicios: [
    mc('Os donos do poder foi publicado pela primeira vez em:', ['1933', '1936', '1958', '1975'], 2, 'Ampliado em 1975.'),
    mc('Faoro baseia seus conceitos em:', ['Marx', 'Weber', 'Durkheim', 'Comte'], 1, 'Tipos de dominação.'),
    mc('A Revolução de Avis ocorreu em:', ['1139', '1383–1385', '1500', '1640'], 1, 'Portugal.'),
    mc('A Súmula Vinculante 13 do STF trata de:', ['Impostos', 'Nepotismo', 'Eleições', 'Aborto'], 1, '2008.'),
    mc('"Capitalismo politicamente orientado" significa riqueza dependente de:', ['Inovação', 'Acesso ao Estado', 'Exportação', 'Poupança'], 1, 'Faoro.'),
    disc('Analise um episódio da política brasileira com os conceitos de Faoro, com um dado que reforça e outro que enfraquece a tese.', ['Episódio delimitado', 'Conceitos aplicados', 'Dado a favor', 'Dado contra']),
  ],
  resumo: ['Faoro (1958; 1975): Os donos do poder.', 'Patrimonialismo e estamento burocrático (Weber).', 'Continuidade desde Avis (1383–1385).', 'Capitalismo politicamente orientado.', 'Críticas: longa duração e classes.'],
  referencias: [
    { texto: 'Raymundo Faoro, Os donos do poder (1958; 2ª ed. 1975).' },
    { texto: 'Max Weber, Economia e sociedade (1922).' },
    { texto: 'Simon Schwartzman, Bases do autoritarismo brasileiro (1982).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler o cap. I e a conclusão'],
  revisao: [['Patrimonialismo', 'Estado como patrimônio.'], ['Estamento', 'Governa em nome próprio.'], ['Faoro', '1958/1975.']],
  avancado: {
    texto: `<h3>Neopatrimonialismo</h3>
<p>Simon Schwartzman, em <em>Bases do autoritarismo brasileiro</em> (1982), usou o conceito de neopatrimonialismo para analisar o Estado brasileiro moderno ${tag('interpretacao')}. A literatura internacional aplica o termo a Estados com instituições formais modernas e práticas patrimoniais ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Simon Schwartzman, Bases do autoritarismo brasileiro (1982).' }],
    exercicios: [
      mc('Bases do autoritarismo brasileiro é de:', ['Faoro', 'Schwartzman', 'Florestan', 'DaMatta'], 1, '1982.'),
      mc('Neopatrimonialismo combina:', ['Instituições modernas e práticas patrimoniais', 'Só tradição', 'Só mercado', 'Monarquia absoluta'], 0, 'Conceito.'),
      mc('O conceito de neopatrimonialismo aplica-se a Estados:', ['Apenas medievais', 'Com instituições formais modernas', 'Sem burocracia', 'Teocráticos'], 1, 'Literatura internacional.'),
      disc('Compare patrimonialismo (Faoro) e neopatrimonialismo (Schwartzman) num caso brasileiro.', ['Dois conceitos', 'Caso', 'Comparação', 'Conclusão'])],
  },
}),

aula({
  id: 'so4-2', titulo: 'Família e sociedade patriarcal: Gilberto Freyre e Oliveira Vianna', duracao: '150 min',
  aprendera: ['Expor as teses de Casa-grande & senzala e Sobrados e mucambos', 'Expor a análise de Populações meridionais do Brasil', 'Identificar as críticas a Freyre e as teses raciais rejeitadas em Oliveira Vianna', 'Comparar os dois autores com justiça'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como a família patriarcal e a escravidão moldaram a sociedade brasileira? Gilberto Freyre e Oliveira Vianna deram respostas influentes e muito discutidas.</p>
<h3>Gilberto Freyre (1900–1987)</h3>
<p>Em <em>Casa-grande & senzala</em> (1933), Freyre descreveu a formação da sociedade colonial em torno da família patriarcal rural e da casa-grande, com intensa miscigenação e trocas culturais entre portugueses, africanos e indígenas ${tag('fato')}. Rompeu com o racismo científico ao valorizar a contribuição africana e atribuir as diferenças à cultura, não à raça ${tag('interpretacao')}. Em <em>Sobrados e mucambos</em> (1936), estudou a decadência do patriarcado rural e a urbanização no século XIX ${tag('fato')}.</p>
<h3>Críticas a Freyre</h3>
<p>Críticos apontaram que sua obra suaviza a violência da escravidão e contribuiu para a ideia de "democracia racial", contestada pelos estudos de Florestan Fernandes e Hasenbalg (so3-4) ${tag('debate')}. Defensores lembram que Freyre documentou também a crueldade e que seu método etnográfico e histórico inovou ${tag('interpretacao')}.</p>
<h3>Oliveira Vianna (1883–1951)</h3>
<p>Em <em>Populações meridionais do Brasil</em> (1920), Oliveira Vianna descreveu o "clã parental" e o "insolidarismo" da sociedade rural, que tornariam necessário um Estado forte e centralizado para organizar a nação ${tag('interpretacao')}. Sua obra também contém teses racistas sobre a "arianização" do povo, hoje rejeitadas pela ciência e contrárias à dignidade humana ensinada pela Igreja ${tag('fato')}. Seu pensamento influenciou a legislação trabalhista e corporativa da Era Vargas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Patriarcalismo', 'Organização social centrada na autoridade do chefe de família.'],
    ['Casa-grande', 'Residência do senhor de engenho, centro da vida colonial (Freyre).'],
    ['Miscigenação', 'Mistura entre grupos de origens diferentes.'],
    ['Clã parental', 'Grupo de família e dependentes em torno de um chefe rural (Oliveira Vianna).'],
    ['Insolidarismo', 'Falta de solidariedade social fora do clã (Oliveira Vianna).'],
  ],
  exemplos: `<p><strong>Ler com justiça um autor problemático:</strong> sobre Oliveira Vianna, é possível expor com fidelidade sua descrição do clã rural e avaliá-la com dados, e, ao mesmo tempo, rejeitar suas teses raciais. Separar as partes de uma obra é exigência de honestidade intelectual — não absolvição nem condenação em bloco.</p>`,
  contexto: `<p><strong>No mundo:</strong> Casa-grande & senzala foi traduzida para várias línguas e influenciou estudos sobre sociedades escravistas. <strong>No Brasil:</strong> os dois autores estão entre as "interpretações do Brasil" mais lidas do século XX, ao lado de Sérgio Buarque de Holanda (<em>Raízes do Brasil</em>, 1936) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que uma obra pode conter acertos e erros graves', tag: 'argumento',
    premissas: ['Uma obra reúne descrições, explicações e juízos de valor.', 'Cada parte pode ser verificada ou avaliada separadamente.', 'Um erro grave numa parte (teses raciais) não torna falsa, por si, uma descrição bem documentada em outra.'],
    conclusao: 'Logo, obras como a de Oliveira Vianna devem ser lidas por partes, com critérios distintos para cada uma.',
    nota: 'A regra vale também para elogios: um acerto não valida o resto.',
  },
  objecoes: [
    { objecao: 'Freyre provou que no Brasil não há racismo.', tag: 'debate',
      resposta: 'Freyre não usou a expressão "democracia racial" em Casa-grande & senzala, e estudos empíricos posteriores documentaram desigualdades e discriminação persistentes. A objeção confunde a obra com seu uso posterior.' },
  ],
  aplicacao: `<p>Compare Freyre e Oliveira Vianna num quadro: tema, conceitos, fontes usadas, tese sobre a família rural, visão do Estado e críticas recebidas. Separe descrição, explicação e juízo de valor.</p>`,
  fonte: {
    obra: 'Gilberto Freyre, Casa-grande & senzala (1933), prefácio à 1ª edição; Oliveira Vianna, Populações meridionais do Brasil (1920), parte sobre o clã parental', link: null,
    orientacao: `<p>No prefácio de Freyre, identifique a virada da raça para a cultura. Em Oliveira Vianna, localize a descrição do clã parental. Registre também, separadamente, as passagens com teses raciais.</p>`,
  },
  perguntas: [
    { p: 'Qual a tese central de Casa-grande & senzala?', r: 'A sociedade colonial formou-se em torno da família patriarcal rural, com intensa miscigenação e trocas culturais.' },
    { p: 'O que é o insolidarismo em Oliveira Vianna?', r: 'A falta de solidariedade social fora do clã parental.' },
    { p: 'Qual a principal crítica a Freyre?', r: 'Suavizar a violência da escravidão e alimentar a ideia de democracia racial.' },
  ],
  exercicios: [
    mc('Casa-grande & senzala é de:', ['1920', '1933', '1936', '1958'], 1, 'Freyre.'),
    mc('Sobrados e mucambos trata da:', ['Mineração', 'Decadência do patriarcado rural e urbanização', 'Independência', 'República'], 1, '1936.'),
    mc('Populações meridionais do Brasil é de:', ['Freyre', 'Oliveira Vianna', 'Sérgio Buarque', 'Faoro'], 1, '1920.'),
    mc('Raízes do Brasil (1936) é de:', ['Sérgio Buarque de Holanda', 'Caio Prado Júnior', 'Freyre', 'Florestan'], 0, '"Homem cordial".'),
    mc('As teses de "arianização" em Oliveira Vianna são hoje:', ['Aceitas', 'Rejeitadas', 'Doutrina', 'Neutras'], 1, 'Racismo científico.'),
    disc('Entregue o quadro comparativo de Freyre e Oliveira Vianna, separando descrição, explicação e juízo de valor.', ['Quadro completo', 'Fontes indicadas', 'Três níveis separados', 'Críticas expostas']),
  ],
  resumo: ['Freyre (1933, 1936): patriarcalismo e miscigenação.', 'Da raça à cultura; críticas sobre a escravidão.', 'Oliveira Vianna (1920): clã parental, insolidarismo, Estado forte.', 'Teses raciais rejeitadas.', 'Ler por partes.'],
  referencias: [
    { texto: 'Gilberto Freyre, Casa-grande & senzala (1933).' },
    { texto: 'Gilberto Freyre, Sobrados e mucambos (1936).' },
    { texto: 'Oliveira Vianna, Populações meridionais do Brasil (1920).' },
    { texto: 'Sérgio Buarque de Holanda, Raízes do Brasil (1936).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler as passagens indicadas'],
  revisao: [['Freyre', 'Casa-grande, 1933.'], ['Oliveira Vianna', 'Clã parental, 1920.'], ['Sérgio Buarque', 'Raízes, 1936.']],
  avancado: {
    texto: `<h3>O homem cordial</h3>
<p>Em <em>Raízes do Brasil</em> (1936), Sérgio Buarque de Holanda descreveu o "homem cordial": não o homem bondoso, mas o que age movido pelo coração — afeto e inimizade — em lugar de regras impessoais ${tag('fato')}. O conceito dialoga com o patrimonialismo e com a distinção casa/rua de DaMatta ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Sérgio Buarque de Holanda, Raízes do Brasil (1936).' }],
    exercicios: [
      mc('"Homem cordial" significa:', ['Homem bondoso', 'Homem movido por afeto em lugar de regras impessoais', 'Homem religioso', 'Homem rural'], 1, 'Sérgio Buarque.'),
      mc('O homem cordial dialoga com o conceito de:', ['Patrimonialismo', 'Mais-valia', 'Solidariedade orgânica', 'Anomia'], 0, 'Público e privado.'),
      mc('Raízes do Brasil é de:', ['1920', '1933', '1936', '1958'], 2, 'Sérgio Buarque.'),
      disc('Compare o homem cordial de Sérgio Buarque e o patrimonialismo de Faoro num exemplo atual.', ['Dois conceitos', 'Exemplo', 'Relação', 'Limites'])],
  },
}),

aula({
  id: 'so4-3', titulo: 'Florestan Fernandes: raça, classes e a revolução burguesa no Brasil', duracao: '150 min',
  aprendera: ['Expor a pesquisa de Florestan sobre o negro na sociedade de classes', 'Expor a tese de A revolução burguesa no Brasil', 'Confrontar Florestan e Faoro sobre o Estado brasileiro', 'Avaliar as teses com dados'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A abolição integrou os ex-escravizados à sociedade de classes? E como o Brasil se modernizou sem uma revolução burguesa clássica? Florestan Fernandes (1920–1995), da Universidade de São Paulo, enfrentou as duas perguntas ${tag('fato')}.</p>
<h3>Raça e classes</h3>
<p>No projeto de pesquisa sobre relações raciais apoiado pela UNESCO nos anos 1950, Florestan e Roger Bastide publicaram <em>Brancos e negros em São Paulo</em> (1955) ${tag('fato')}. Em <em>A integração do negro na sociedade de classes</em> (1964), Florestan mostrou que, depois de 1888, a população negra foi deixada à própria sorte e excluída das oportunidades do trabalho livre, e que o preconceito persistia ${tag('interpretacao')}.</p>
<h3>A revolução burguesa</h3>
<p>Em <em>A revolução burguesa no Brasil</em> (1975), Florestan sustentou que a modernização capitalista brasileira se fez de modo dependente e autocrático: as elites incorporaram o capitalismo sem democratizar a sociedade, numa "autocracia burguesa" ${tag('interpretacao')}.</p>
<h3>Florestan e Faoro</h3>
<p>Faoro explica o Estado pela continuidade de um estamento burocrático; Florestan, pela dominação de classe numa economia dependente ${tag('interpretacao')}. São explicações diferentes para fenômenos parecidos (concentração de poder, exclusão), e podem ser testadas em períodos concretos ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Sociedade de classes', 'Sociedade em que a posição depende sobretudo da situação econômica.'],
    ['Capitalismo dependente', 'Desenvolvimento capitalista subordinado às economias centrais.'],
    ['Autocracia burguesa', 'Dominação das elites econômicas sem democratização (Florestan).'],
    ['Projeto UNESCO', 'Pesquisas sobre relações raciais no Brasil nos anos 1950.'],
    ['Escola paulista de sociologia', 'Grupo da USP em torno de Florestan Fernandes.'],
  ],
  exemplos: `<p><strong>Confronto de explicações:</strong> o regime de 1964 pode ser lido com Faoro (o estamento burocrático-militar governa em nome próprio) ou com Florestan (as elites econômicas, aliadas ao capital externo, recorrem à autocracia para garantir a modernização sem democracia). O exercício é perguntar que dados distinguiriam as duas leituras.</p>`,
  contexto: `<p><strong>No mundo:</strong> as teorias da dependência dos anos 1960 e 1970 influenciaram a sociologia latino-americana. <strong>No Brasil:</strong> a escola paulista formou sociólogos como Fernando Henrique Cardoso e Octavio Ianni, e as pesquisas da UNESCO mudaram a imagem internacional das relações raciais no país ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'A tese de Florestan sobre a integração do negro em premissas', tag: 'argumento',
    premissas: ['A abolição (1888) não foi acompanhada de políticas de terra, educação ou trabalho para os libertos.', 'O mercado de trabalho livre em São Paulo privilegiou imigrantes europeus.', 'Preconceito e falta de oportunidades se reforçaram mutuamente.'],
    conclusao: 'Logo, segundo Florestan, a população negra foi integrada de forma marginal à sociedade de classes.',
    nota: 'Cada premissa pode ser verificada com dados históricos e censitários.',
  },
  objecoes: [
    { objecao: 'Florestan era marxista, então sua pesquisa não vale.', tag: 'debate',
      resposta: 'A filiação teórica de um autor não invalida seus dados; o que se avalia é a qualidade da pesquisa e da argumentação. Suas conclusões sobre desigualdade racial foram confirmadas por estudos com outros métodos (Hasenbalg).' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: confronte Faoro e Florestan sobre o Estado brasileiro — tese de cada um, conceitos, dados que cada um usa e um período em que as duas explicações possam ser testadas.</p>`,
  fonte: {
    obra: 'Florestan Fernandes, A integração do negro na sociedade de classes (1964), vol. 1, cap. 1; A revolução burguesa no Brasil (1975), parte III', link: null,
    orientacao: `<p>No primeiro capítulo de A integração, localize a descrição da situação dos libertos depois de 1888. Em A revolução burguesa, a definição de autocracia burguesa. Use-os no confronto com Faoro.</p>`,
  },
  perguntas: [
    { p: 'O que mostrou A integração do negro na sociedade de classes?', r: 'Que a população negra foi integrada de forma marginal depois da abolição, com preconceito persistente.' },
    { p: 'O que é autocracia burguesa em Florestan?', r: 'A dominação das elites econômicas sem democratização da sociedade.' },
    { p: 'Como Faoro e Florestan explicam o Estado brasileiro?', r: 'Faoro pelo estamento burocrático; Florestan pela dominação de classe numa economia dependente.' },
  ],
  exercicios: [
    mc('A integração do negro na sociedade de classes é de:', ['1955', '1964', '1975', '1979'], 1, 'Florestan.'),
    mc('Brancos e negros em São Paulo (1955) é de Florestan e:', ['Gilberto Freyre', 'Roger Bastide', 'Octavio Ianni', 'Faoro'], 1, 'Projeto UNESCO.'),
    mc('A revolução burguesa no Brasil é de:', ['1958', '1964', '1975', '1982'], 2, 'Autocracia burguesa.'),
    mc('Florestan explica o Estado sobretudo por:', ['Estamento burocrático', 'Dominação de classe', 'Clima', 'Religião'], 1, 'Capitalismo dependente.'),
    mc('A escola paulista de sociologia girava em torno de:', ['Gilberto Freyre', 'Florestan Fernandes', 'Oliveira Vianna', 'DaMatta'], 1, 'USP.'),
    disc('Entregue o confronto Faoro x Florestan: teses, conceitos, dados e um período em que as duas explicações possam ser testadas.', ['Duas teses', 'Conceitos', 'Dados', 'Período de teste']),
  ],
  resumo: ['Florestan (1920–1995), USP.', 'UNESCO: Brancos e negros em São Paulo (1955).', 'A integração do negro (1964): integração marginal.', 'A revolução burguesa (1975): autocracia burguesa.', 'Faoro x Florestan: estamento x classe.'],
  referencias: [
    { texto: 'Florestan Fernandes, A integração do negro na sociedade de classes (1964).' },
    { texto: 'Florestan Fernandes, A revolução burguesa no Brasil (1975).' },
    { texto: 'Roger Bastide e Florestan Fernandes, Brancos e negros em São Paulo (1955).' },
    { texto: 'Raymundo Faoro, Os donos do poder (1958; 1975).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o confronto Faoro x Florestan', 'Ler os capítulos indicados'],
  revisao: [['Florestan', 'Integração marginal; autocracia burguesa.'], ['UNESCO', 'Relações raciais, anos 1950.'], ['Faoro x Florestan', 'Estamento x classe.']],
  avancado: {
    texto: `<h3>Dependência e desenvolvimento</h3>
<p>Fernando Henrique Cardoso e Enzo Faletto, em <em>Dependência e desenvolvimento na América Latina</em> (1969), sustentaram que o desenvolvimento é possível em situação de dependência, mas com formas próprias de dominação ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Fernando Henrique Cardoso e Enzo Faletto, Dependência e desenvolvimento na América Latina (1969).' }],
    exercicios: [
      mc('Dependência e desenvolvimento na América Latina é de:', ['1955', '1969', '1975', '1990'], 1, 'Cardoso e Faletto.'),
      mc('Cardoso e Faletto sustentam que, na dependência, o desenvolvimento é:', ['Impossível', 'Possível, com formas próprias de dominação', 'Garantido', 'Irrelevante'], 1, 'Desenvolvimento dependente.'),
      mc('A teoria da dependência é tema também da:', ['Economia (Prebisch, e4-3)', 'Geomorfologia', 'Liturgia', 'Heráldica'], 0, 'CEPAL.'),
      disc('Compare a tese de Florestan sobre a revolução burguesa com a de Cardoso e Faletto sobre o desenvolvimento dependente.', ['Duas teses', 'Semelhanças', 'Diferenças', 'Conclusão'])],
  },
}),

aula({
  id: 'so4-4', titulo: 'Cultura e hierarquia: Roberto DaMatta, a casa e a rua', duracao: '150 min',
  aprendera: ['Expor a análise de Carnavais, malandros e heróis', 'Explicar o ritual do "Você sabe com quem está falando?"', 'Explicar a distinção casa/rua e indivíduo/pessoa', 'Avaliar as interpretações culturais do Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que, no Brasil, as leis convivem com o "jeitinho" e com a pergunta "você sabe com quem está falando?"? O antropólogo Roberto DaMatta (1936–) estudou os rituais da sociedade brasileira para entender sua gramática de hierarquia e igualdade ${tag('fato')}.</p>
<h3>Rituais</h3>
<p>Em <em>Carnavais, malandros e heróis</em> (1979), DaMatta comparou três rituais nacionais: o carnaval (inversão), a parada militar (ordem e hierarquia) e as procissões (mediação religiosa) ${tag('fato')}. Analisou figuras como o malandro, que navega entre a lei e o favor ${tag('interpretacao')}.</p>
<h3>"Você sabe com quem está falando?"</h3>
<p>Para DaMatta, essa pergunta é um ritual que suspende a igualdade perante a lei e restabelece a hierarquia pessoal: o "indivíduo", sujeito às leis impessoais, dá lugar à "pessoa", inserida em relações e protegida por elas ${tag('interpretacao')}.</p>
<h3>A casa e a rua</h3>
<p>Em <em>A casa e a rua</em> (1985), distinguiu o espaço da casa (relações pessoais, afeto, hierarquia familiar) e o da rua (impessoalidade, leis, mercado) ${tag('fato')}. O Brasil oscilaria entre as duas lógicas, com o "jeitinho" como mediação ${tag('interpretacao')}.</p>
<h3>Avaliação</h3>
<p>As interpretações culturais iluminam padrões, mas correm o risco de essencializar um "caráter nacional" e de esquecer diferenças regionais, de classe e de época ${tag('debate')}. Devem ser testadas com dados (pesquisas de valores, de confiança, de corrupção) ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Ritual', 'Sequência formalizada de ações com sentido simbólico.'],
    ['Indivíduo e pessoa', 'Sujeito de leis impessoais x membro de relações hierárquicas (DaMatta).'],
    ['Casa e rua', 'Espaços de relações pessoais e de relações impessoais (DaMatta).'],
    ['Jeitinho', 'Mediação informal entre a regra e o caso pessoal.'],
    ['Malandro', 'Figura que navega entre a lei e o favor.'],
  ],
  exemplos: `<p><strong>Testar uma interpretação cultural:</strong> se o "jeitinho" fosse traço nacional uniforme, pesquisas de opinião mostrariam atitudes semelhantes em todas as regiões e classes. Pesquisas como as de Alberto Carlos Almeida, em <em>A cabeça do brasileiro</em> (2007), mostram variação por escolaridade ${tag('interpretacao')} — o que exige cautela na generalização.</p>`,
  contexto: `<p><strong>No mundo:</strong> a antropologia das sociedades complexas usa rituais e categorias nativas para entender culturas nacionais. <strong>No Brasil:</strong> as obras de DaMatta tornaram-se referência no debate público sobre cidadania, leis e favores ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que "Você sabe com quem está falando?" revela uma tensão', tag: 'argumento',
    premissas: ['A Constituição afirma que todos são iguais perante a lei.', 'A pergunta invoca uma posição pessoal para escapar à regra impessoal.', 'Se funciona, a hierarquia pessoal prevalece, na prática, sobre a igualdade formal.'],
    conclusao: 'Logo, o ritual revela uma tensão entre igualdade formal e hierarquia pessoal na sociedade brasileira.',
    nota: 'É a tese de DaMatta; a frequência e o alcance do fenômeno são questões empíricas.',
  },
  objecoes: [
    { objecao: 'O jeitinho é só criatividade, e não tem nada de errado.', tag: 'debate',
      resposta: 'Há um "jeitinho" que resolve problemas sem prejudicar ninguém e outro que fura a fila, burla a regra e prejudica terceiros. A avaliação moral exige distinguir os casos pelo critério da justiça e do bem comum.' },
  ],
  aplicacao: `<p>Observe ou relembre uma situação em que alguém usou uma posição pessoal para escapar de uma regra. Descreva-a com os conceitos de DaMatta (indivíduo, pessoa, casa, rua) e avalie-a moralmente, separando as duas partes.</p>`,
  fonte: {
    obra: 'Roberto DaMatta, Carnavais, malandros e heróis (1979), cap. IV ("Você sabe com quem está falando?"); A casa e a rua (1985), cap. 1', link: null,
    orientacao: `<p>No capítulo IV, siga a análise do ritual. Em A casa e a rua, localize a distinção dos espaços. Aplique os dois à sua observação.</p>`,
  },
  perguntas: [
    { p: 'Quais rituais DaMatta compara em Carnavais, malandros e heróis?', r: 'O carnaval, a parada militar e as procissões.' },
    { p: 'O que é a "pessoa" em DaMatta?', r: 'O membro de relações hierárquicas, que escapa à lei impessoal.' },
    { p: 'Qual o risco das interpretações culturais do Brasil?', r: 'Essencializar um caráter nacional e esquecer diferenças regionais, de classe e de época.' },
  ],
  exercicios: [
    mc('Carnavais, malandros e heróis é de:', ['1958', '1975', '1979', '1985'], 2, 'DaMatta.'),
    mc('A casa e a rua foi publicado em:', ['1979', '1985', '1990', '2007'], 1, 'DaMatta.'),
    mc('O ritual de inversão, em DaMatta, é o:', ['Carnaval', 'Desfile militar', 'Procissão', 'Casamento'], 0, 'Inversão da ordem.'),
    mc('"Você sabe com quem está falando?" restabelece:', ['A igualdade', 'A hierarquia pessoal', 'A anomia', 'A solidariedade orgânica'], 1, 'Indivíduo x pessoa.'),
    mc('Interpretações culturais do Brasil devem ser:', ['Aceitas como fato', 'Testadas com dados', 'Rejeitadas', 'Ignoradas'], 1, 'Cautela empírica.'),
    disc('Descreva uma situação com os conceitos de DaMatta e avalie-a moralmente, separando descrição e juízo.', ['Situação descrita', 'Conceitos corretos', 'Avaliação moral com critério', 'Separação das partes']),
  ],
  resumo: ['DaMatta (1979): carnaval, parada, procissão.', '"Você sabe com quem está falando?": indivíduo x pessoa.', 'A casa e a rua (1985).', 'Jeitinho e malandro.', 'Risco de essencializar; testar com dados.'],
  referencias: [
    { texto: 'Roberto DaMatta, Carnavais, malandros e heróis (1979).' },
    { texto: 'Roberto DaMatta, A casa e a rua (1985).' },
    { texto: 'Alberto Carlos Almeida, A cabeça do brasileiro (2007).' },
    { texto: 'Sérgio Buarque de Holanda, Raízes do Brasil (1936).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os capítulos indicados'],
  revisao: [['DaMatta', 'Rituais e hierarquia.'], ['Casa e rua', '1985.'], ['Pessoa', 'Relações acima da lei.']],
  avancado: {
    texto: `<h3>Confiança social</h3>
<p>Pesquisas internacionais de valores, como o World Values Survey, medem a confiança interpessoal; o Brasil costuma aparecer com níveis baixos de confiança em desconhecidos ${tag('interpretacao')}. Esses dados permitem testar interpretações como as de DaMatta e Sérgio Buarque ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'World Values Survey (dados públicos).' }],
    exercicios: [
      mc('O World Values Survey mede, entre outras coisas:', ['PIB', 'Confiança interpessoal', 'Clima', 'Desmatamento'], 1, 'Valores.'),
      mc('Dados de confiança permitem:', ['Testar interpretações culturais', 'Substituir a ética', 'Provar dogmas', 'Nada'], 0, 'Evidência empírica.'),
      mc('Baixa confiança em desconhecidos dialoga com:', ['Casa e rua', 'Anéis de von Thünen', 'Lei dos três estados', 'Tipologia bíblica'], 0, 'Relações pessoais x impessoais.'),
      disc('Use dados de uma pesquisa de valores para avaliar uma tese de DaMatta ou de Sérgio Buarque.', ['Dados com fonte', 'Tese escolhida', 'Avaliação', 'Limites'])],
  },
}),

avaliacao('so4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as interpretações da formação social brasileira e duas discursivas de confronto entre autores.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o confronto Faoro x Florestan.</li><li>Revise o quadro Freyre x Oliveira Vianna.</li></ul>`,
[
  disc('Escolha um fenômeno brasileiro atual (por exemplo, o nepotismo ou a desigualdade racial) e explique-o com dois intérpretes do Brasil, indicando dados que favorecem cada explicação.', ['Fenômeno delimitado', 'Dois intérpretes', 'Dados com fonte', 'Avaliação comparativa']),
  disc('Avalie as interpretações culturais do Brasil (Sérgio Buarque, DaMatta): o que iluminam, que riscos trazem e como testá-las com dados.', ['Teses expostas', 'Contribuições', 'Riscos', 'Proposta de teste']),
]),
];
