// Sociologia III — escolas e debates (etapas 6 e 7 do percurso de Sociologia).
// Funcionalismo, sociologia compreensiva e interacionismo; teoria crítica e construcionismo;
// secularização; desigualdade, mobilidade e a Doutrina Social da Igreja diante das teorias.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'so3-1', titulo: 'Funcionalismo, sociologia compreensiva e interacionismo simbólico', duracao: '150 min',
  aprendera: ['Expor o funcionalismo de Parsons e Merton', 'Distinguir funções manifestas e latentes', 'Explicar a sociologia compreensiva e o interacionismo simbólico', 'Aplicar as correntes a uma instituição'],
  prereq: ['Sociologia II (módulo SO2)'],
  explicacao: `
<h3>O problema</h3>
<p>Depois dos clássicos, a sociologia dividiu-se em correntes que fazem perguntas diferentes: para que serve uma instituição? Que sentido as pessoas dão ao que fazem? Como as interações cotidianas constroem a ordem social?</p>
<h3>Funcionalismo</h3>
<p>Talcott Parsons, em <em>The Social System</em> (1951), analisou a sociedade como sistema cujas partes desempenham funções para sua manutenção ${tag('fato')}. Robert Merton, em <em>Teoria e estrutura sociais</em> (1949), distinguiu funções <strong>manifestas</strong> (pretendidas e reconhecidas) e <strong>latentes</strong> (não pretendidas nem reconhecidas), e introduziu as <strong>disfunções</strong> ${tag('fato')}. Crítica: o funcionalismo tende a explicar a estabilidade melhor que a mudança e o conflito ${tag('debate')}.</p>
<h3>Sociologia compreensiva</h3>
<p>Herdeira de Weber, procura compreender a ação pelo sentido que os agentes lhe atribuem, usando tipos ideais e comparação ${tag('fato')}.</p>
<h3>Interacionismo simbólico</h3>
<p>Herbert Blumer cunhou a expressão "interacionismo simbólico" e, em 1969, sistematizou suas premissas: as pessoas agem em relação às coisas segundo o significado que elas têm; esse significado nasce da interação e é modificado pela interpretação ${tag('fato')}. Erving Goffman, em <em>A representação do eu na vida cotidiana</em> (1959), analisou a interação como representação teatral, com fachada e bastidores ${tag('fato')}.</p>`,
  vocabulario: [
    ['Função manifesta', 'Consequência pretendida e reconhecida (Merton).'],
    ['Função latente', 'Consequência não pretendida nem reconhecida (Merton).'],
    ['Disfunção', 'Consequência que prejudica a adaptação do sistema.'],
    ['Interacionismo simbólico', 'Corrente que estuda como os significados nascem na interação (Blumer).'],
    ['Fachada', 'Parte da representação visível aos outros (Goffman).'],
  ],
  exemplos: `<p><strong>Funções de uma festa de padroeiro:</strong> manifesta — honrar o santo e celebrar a fé; latentes — reforçar laços entre famílias, movimentar o comércio local, reunir quem mudou de cidade. Uma disfunção possível: excessos que geram conflitos. A análise funcional não substitui a pergunta teológica sobre o sentido da festa; responde outra pergunta.</p>`,
  contexto: `<p><strong>No mundo:</strong> o funcionalismo dominou a sociologia norte-americana nos anos 1950; as críticas dos anos 1960 abriram espaço a outras correntes. <strong>No Brasil:</strong> Florestan Fernandes usou a análise funcional em estudos sobre os tupinambás, como <em>A função social da guerra na sociedade tupinambá</em> (1952) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que funções latentes mostram limites das intenções', tag: 'argumento',
    premissas: ['Instituições são criadas com propósitos declarados.', 'Produzem também consequências que ninguém pretendeu.', 'Algumas dessas consequências podem ser mais importantes que as pretendidas.'],
    conclusao: 'Logo, avaliar uma instituição só pelas intenções declaradas é insuficiente; é preciso observar suas consequências reais.',
    nota: 'Liga-se às falhas de governo e efeitos não intencionais (aula e3-3).',
  },
  objecoes: [
    { objecao: 'Se algo tem função, então é bom e deve ser mantido.', tag: 'debate',
      resposta: 'Função é conceito descritivo: indica contribuição para a manutenção de um sistema, não aprovação moral. Um sistema injusto também tem instituições funcionais para ele. O juízo moral exige outro critério.' },
  ],
  aplicacao: `<p>Escolha uma instituição (escola, paróquia, clube) e identifique duas funções manifestas, duas latentes e uma disfunção. Depois descreva uma interação cotidiana nela com os conceitos de Goffman.</p>`,
  fonte: {
    obra: 'Robert Merton, Teoria e estrutura sociais (1949), cap. sobre funções manifestas e latentes; Erving Goffman, A representação do eu na vida cotidiana (1959), introdução', link: null,
    orientacao: `<p>Em Merton, localize a definição de funções manifestas e latentes e o exemplo da cerimônia da chuva hopi. Em Goffman, a noção de representação. Use-os na aplicação.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre função manifesta e latente?', r: 'A manifesta é pretendida e reconhecida; a latente, não.' },
    { p: 'Quem sistematizou o interacionismo simbólico?', r: 'Herbert Blumer, em 1969.' },
    { p: 'Qual a principal crítica ao funcionalismo?', r: 'Explica melhor a estabilidade que a mudança e o conflito.' },
  ],
  exercicios: [
    mc('The Social System (1951) é de:', ['Merton', 'Parsons', 'Blumer', 'Goffman'], 1, 'Funcionalismo.'),
    mc('Funções manifestas e latentes são conceitos de:', ['Parsons', 'Merton', 'Weber', 'Durkheim'], 1, '1949.'),
    mc('A representação do eu na vida cotidiana é de:', ['Goffman', 'Blumer', 'Berger', 'Habermas'], 0, '1959.'),
    mc('Reforçar laços familiares numa festa religiosa é função:', ['Manifesta', 'Latente', 'Disfunção', 'Nenhuma'], 1, 'Não pretendida diretamente.'),
    mc('Para o interacionismo, os significados nascem:', ['Da natureza', 'Da interação', 'Do Estado', 'Da economia apenas'], 1, 'Blumer.'),
    disc('Analise uma instituição com funções manifestas, latentes e uma disfunção, e uma interação nela com os conceitos de Goffman.', ['Funções corretas', 'Disfunção', 'Conceitos de Goffman', 'Descrição separada de juízo']),
  ],
  resumo: ['Parsons (1951): sistema social.', 'Merton (1949): funções manifestas, latentes; disfunções.', 'Sociologia compreensiva (Weber).', 'Interacionismo simbólico (Blumer, 1969).', 'Goffman (1959): fachada e bastidores.'],
  referencias: [
    { texto: 'Robert Merton, Teoria e estrutura sociais (1949).' },
    { texto: 'Talcott Parsons, The Social System (1951).' },
    { texto: 'Erving Goffman, A representação do eu na vida cotidiana (1959).' },
    { texto: 'Herbert Blumer, Symbolic Interactionism (1969).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os textos indicados'],
  revisao: [['Merton', 'Manifesta e latente.'], ['Blumer', 'Interacionismo simbólico.'], ['Goffman', 'Representação do eu.']],
  avancado: {
    texto: `<h3>Profecia autorrealizável</h3>
<p>Merton formulou a "profecia autorrealizável": uma definição falsa da situação provoca um comportamento que a torna verdadeira (o boato de falência que leva à corrida bancária) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Robert Merton, Teoria e estrutura sociais (1949).' }],
    exercicios: [
      mc('A profecia autorrealizável é conceito de:', ['Parsons', 'Merton', 'Goffman', 'Weber'], 1, 'Definição falsa que se torna verdadeira.'),
      mc('Um boato de falência que provoca saques e quebra o banco é exemplo de:', ['Função manifesta', 'Profecia autorrealizável', 'Anomia', 'Tipo ideal'], 1, 'Merton.'),
      mc('A profecia autorrealizável começa com uma definição:', ['Verdadeira', 'Falsa', 'Científica', 'Legal'], 1, 'Que gera o fato.'),
      disc('Identifique um caso brasileiro que possa ser explicado como profecia autorrealizável e avalie a explicação.', ['Caso', 'Mecanismo', 'Evidência', 'Limites'])],
  },
}),

aula({
  id: 'so3-2', titulo: 'Teoria crítica e construcionismo: Frankfurt, Habermas, Berger e Luckmann', duracao: '150 min',
  aprendera: ['Expor o programa da teoria crítica da Escola de Frankfurt', 'Explicar a teoria do agir comunicativo de Habermas', 'Expor a construção social da realidade de Berger e Luckmann', 'Distinguir construção social das instituições e realidade das coisas'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A ciência social deve apenas descrever a sociedade ou também criticá-la? E se as instituições são construídas socialmente, o que é real? Duas correntes respondem de modos distintos.</p>
<h3>Teoria crítica</h3>
<p>O Instituto de Pesquisa Social de Frankfurt foi fundado em 1923 ${tag('fato')}. Max Horkheimer, em "Teoria tradicional e teoria crítica" (1937), defendeu uma teoria que vise à emancipação, e não apenas à descrição ${tag('fato')}. Com Adorno, escreveu a <em>Dialética do esclarecimento</em> (1947), que criticou a razão instrumental e a "indústria cultural" ${tag('fato')}. Jürgen Habermas, na <em>Teoria do agir comunicativo</em> (1981), distinguiu a ação estratégica, orientada ao êxito, e a comunicativa, orientada ao entendimento por razões ${tag('fato')}.</p>
<h3>Construcionismo</h3>
<p>Peter Berger e Thomas Luckmann, em <em>A construção social da realidade</em> (1966), descreveram três momentos: <strong>exteriorização</strong> (as pessoas criam instituições), <strong>objetivação</strong> (as instituições passam a parecer realidades dadas) e <strong>interiorização</strong> (as novas gerações as aprendem como evidentes) ${tag('fato')}. Berger, sociólogo luterano, sustentou que isso não decide a verdade ou falsidade da religião: a sociologia descreve como as crenças se mantêm, não se são verdadeiras ${tag('interpretacao')}.</p>
<h3>Limites</h3>
<p>Dizer que uma instituição é construída socialmente não implica que tudo seja construção: a gravidade, a morte e a natureza humana não dependem de acordo ${tag('argumento')}. O realismo filosófico estudado no curso distingue o que é convenção e o que é natureza ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Teoria crítica', 'Teoria social orientada à emancipação (Escola de Frankfurt).'],
    ['Razão instrumental', 'Razão reduzida a cálculo de meios para fins dados.'],
    ['Agir comunicativo', 'Ação orientada ao entendimento por razões (Habermas).'],
    ['Objetivação', 'Momento em que as instituições parecem realidades dadas (Berger e Luckmann).'],
    ['Construcionismo', 'Estudo de como realidades sociais são produzidas e mantidas.'],
  ],
  exemplos: `<p><strong>O que é construído e o que não é:</strong> o dinheiro, as fronteiras e os títulos acadêmicos existem porque há acordos e instituições — são construções sociais reais. A fome, a doença e a morte não dependem de acordo; o que é construído é o modo de lidar com elas. Confundir as duas coisas leva ao relativismo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a teoria crítica influenciou estudos culturais e debates sobre mídia e democracia. <strong>No Brasil:</strong> a recepção da Escola de Frankfurt foi forte nas universidades a partir dos anos 1970; Habermas é referência em teoria democrática e direito ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que "socialmente construído" não significa "arbitrário" ou "irreal"', tag: 'argumento',
    premissas: ['Uma instituição construída socialmente existe por causa de práticas e acordos.', 'Existindo, ela produz efeitos reais: o dinheiro compra, a lei pune.', 'Além disso, construções sociais podem ser mais ou menos conformes à natureza humana e ao bem comum.'],
    conclusao: 'Logo, "construído" não quer dizer irreal nem arbitrário; e as construções podem ser avaliadas por critérios.',
    nota: 'O critério da Doutrina Social é a dignidade da pessoa e o bem comum.',
  },
  objecoes: [
    { objecao: 'Se a realidade social é construída, a verdade é só uma convenção.', tag: 'debate',
      resposta: 'Que crenças se mantêm por processos sociais não prova que sejam falsas; as crenças da física também são aprendidas socialmente. A gênese social de uma crença é uma questão; sua verdade, outra.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: quadro comparativo das quatro correntes (funcionalismo, sociologia compreensiva, teoria crítica, construcionismo), com objeto, método, autor principal e uma pergunta típica de cada uma.</p>`,
  fonte: {
    obra: 'Peter Berger e Thomas Luckmann, A construção social da realidade (1966), introdução e parte II; Max Horkheimer, "Teoria tradicional e teoria crítica" (1937)', link: null,
    orientacao: `<p>Em Berger e Luckmann, localize os três momentos e a advertência sobre a sociologia do conhecimento. Em Horkheimer, a distinção entre os dois tipos de teoria. Use-os no quadro.</p>`,
  },
  perguntas: [
    { p: 'Quais os três momentos da construção social da realidade?', r: 'Exteriorização, objetivação e interiorização.' },
    { p: 'O que Habermas distingue em ação estratégica e comunicativa?', r: 'A estratégica busca o êxito; a comunicativa, o entendimento por razões.' },
    { p: 'A gênese social de uma crença decide sua verdade?', r: 'Não; são questões distintas.' },
  ],
  exercicios: [
    mc('O Instituto de Pesquisa Social de Frankfurt foi fundado em:', ['1904', '1923', '1947', '1966'], 1, 'Escola de Frankfurt.'),
    mc('Dialética do esclarecimento é de:', ['Habermas', 'Adorno e Horkheimer', 'Berger e Luckmann', 'Marcuse'], 1, '1947.'),
    mc('Teoria do agir comunicativo é de:', ['1937', '1966', '1981', '1999'], 2, 'Habermas.'),
    mc('O momento em que instituições parecem dadas é a:', ['Exteriorização', 'Objetivação', 'Interiorização', 'Racionalização'], 1, 'Berger e Luckmann.'),
    mc('"Socialmente construído" significa:', ['Irreal', 'Existente por práticas e acordos', 'Falso', 'Natural'], 1, 'Com efeitos reais.'),
    disc('Entregue o quadro das quatro correntes com objeto, método, autor e pergunta típica de cada uma.', ['Quatro correntes', 'Objeto e método corretos', 'Autores corretos', 'Perguntas típicas']),
  ],
  resumo: ['Frankfurt (1923); Horkheimer (1937): teoria crítica.', 'Dialética do esclarecimento (1947): razão instrumental.', 'Habermas (1981): agir comunicativo.', 'Berger e Luckmann (1966): exteriorização, objetivação, interiorização.', 'Construído não é irreal; gênese não decide verdade.'],
  referencias: [
    { texto: 'Peter Berger e Thomas Luckmann, A construção social da realidade (1966).' },
    { texto: 'Max Horkheimer, "Teoria tradicional e teoria crítica" (1937).' },
    { texto: 'Theodor Adorno e Max Horkheimer, Dialética do esclarecimento (1947).' },
    { texto: 'Jürgen Habermas, Teoria do agir comunicativo (1981).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro das quatro correntes', 'Ler os textos indicados'],
  revisao: [['Frankfurt', '1923.'], ['Habermas', 'Agir comunicativo, 1981.'], ['Berger e Luckmann', 'Três momentos.']],
  avancado: {
    texto: `<h3>Habermas e Ratzinger</h3>
<p>Em 2004, Jürgen Habermas e o cardeal Joseph Ratzinger debateram em Munique os fundamentos pré-políticos do Estado democrático; Habermas admitiu que tradições religiosas podem oferecer recursos de sentido à sociedade secular ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Jürgen Habermas e Joseph Ratzinger, Dialética da secularização (2005).' }],
    exercicios: [
      mc('O debate entre Habermas e Ratzinger ocorreu em:', ['1981', '1999', '2004', '2013'], 2, 'Munique.'),
      mc('O tema do debate foi:', ['Economia', 'Fundamentos pré-políticos do Estado democrático', 'Arte', 'Ciência natural'], 1, 'Razão e fé.'),
      mc('Dialética da secularização reúne textos de:', ['Adorno e Horkheimer', 'Habermas e Ratzinger', 'Berger e Luckmann', 'Weber e Marx'], 1, '2005.'),
      disc('Exponha a posição de Habermas e a de Ratzinger no debate de 2004 e avalie os pontos de convergência.', ['Posição de Habermas', 'Posição de Ratzinger', 'Convergências', 'Conclusão'])],
  },
}),

aula({
  id: 'so3-3', titulo: 'Secularização: a tese, as críticas e os dados brasileiros', duracao: '150 min',
  aprendera: ['Distinguir os sentidos de secularização', 'Expor a tese clássica e as críticas de Berger, Casanova e Taylor', 'Ler dados censitários sobre religião no Brasil', 'Separar descrição sociológica e juízo teológico'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A modernidade faz a religião desaparecer? A "tese da secularização" respondeu que sim por boa parte do século XX. Os dados de várias regiões do mundo levaram a revisá-la.</p>
<h3>Três sentidos</h3>
<p>José Casanova, em <em>Public Religions in the Modern World</em> (1994), distinguiu três sentidos: (1) <strong>diferenciação</strong> das esferas (Estado, economia, ciência) em relação à religião; (2) <strong>declínio</strong> das crenças e práticas; (3) <strong>privatização</strong> da religião ${tag('fato')}. Para ele, o primeiro é o núcleo defensável; os outros dois não são necessários ${tag('interpretacao')}.</p>
<h3>Revisões</h3>
<p>Peter Berger, que defendera a secularização em <em>O dossel sagrado</em> (1967), escreveu depois que o mundo era "tão furiosamente religioso como sempre", em "A dessecularização do mundo" (1999) ${tag('fato')}. Charles Taylor, em <em>Uma era secular</em> (2007), descreveu a secularidade como mudança nas condições da fé: crer tornou-se uma opção entre outras ${tag('interpretacao')}.</p>
<h3>Brasil</h3>
<p>Pelos Censos do IBGE, a proporção de católicos caiu de 91,8% em 1970 para 64,6% em 2010, enquanto a de evangélicos subiu para 22,2% e a dos sem religião para 8,0% em 2010 ${tag('fato')}. Para os resultados de religião do Censo 2022, consulte diretamente o IBGE e registre a data. O quadro brasileiro mostra mais <strong>diversificação</strong> e trânsito religioso que desaparecimento da religião ${tag('interpretacao')}.</p>
<h3>Sociologia e teologia</h3>
<p>A sociologia descreve crenças e práticas; não decide se Deus existe nem se a Igreja é verdadeira ${tag('argumento')}. O Concílio Vaticano II reconheceu a justa autonomia das realidades terrenas e advertiu contra uma autonomia que pretenda prescindir de Deus (<em>Gaudium et Spes</em>, 36) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Secularização', 'Processo pelo qual a religião perde centralidade em esferas da vida social.'],
    ['Diferenciação', 'Separação das esferas (Estado, economia, ciência) em relação à religião.'],
    ['Privatização da religião', 'Recuo da religião para a vida privada.'],
    ['Dessecularização', 'Retorno ou persistência da religião na vida pública (Berger, 1999).'],
    ['Trânsito religioso', 'Mudança de pertença religiosa ao longo da vida.'],
  ],
  exemplos: `<p><strong>Lendo os números com cuidado:</strong> a queda da proporção de católicos não significa, sozinha, queda da religiosidade: parte da mudança é passagem para outras confissões. Já o crescimento dos "sem religião" inclui pessoas que creem em Deus sem pertencer a uma igreja. Cada categoria precisa ser lida com a definição do IBGE.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Europa Ocidental registra queda da prática religiosa, enquanto a África, partes da Ásia e as Américas mostram vitalidade religiosa. <strong>No Brasil:</strong> o crescimento pentecostal desde os anos 1980 é um dos fenômenos sociais mais estudados ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que diferenciação não implica declínio', tag: 'argumento',
    premissas: ['Diferenciação significa que o Estado, a economia e a ciência funcionam com regras próprias.', 'As pessoas podem continuar crendo e praticando enquanto essas esferas se diferenciam.', 'Há sociedades muito diferenciadas e muito religiosas (por exemplo, os Estados Unidos).'],
    conclusao: 'Logo, a diferenciação das esferas não acarreta necessariamente o declínio da religião.',
    nota: 'É a distinção central de Casanova.',
  },
  objecoes: [
    { objecao: 'A queda dos católicos no Censo prova que a Igreja está acabando no Brasil.', tag: 'debate',
      resposta: 'A proporção caiu, mas os católicos continuam o maior grupo religioso, e números absolutos e intensidade de prática são outras variáveis. Juízos sobre o futuro exigem séries, definições e cautela — e a esperança cristã não depende de estatísticas.' },
  ],
  aplicacao: `<p>No SIDRA, obtenha a distribuição por religião nos Censos de 1970 a 2022 (a última disponível). Faça uma tabela, registre fonte e data, e escreva três conclusões que os dados sustentam e uma que não sustentam.</p>`,
  fonte: {
    obra: 'José Casanova, Public Religions in the Modern World (1994), cap. 1; Peter Berger (org.), The Desecularization of the World (1999), cap. 1', link: { url: 'https://sidra.ibge.gov.br', rotulo: 'SIDRA (IBGE)' },
    orientacao: `<p>Em Casanova, localize os três sentidos de secularização. Em Berger, a revisão de sua própria tese. Aplique-os aos dados do SIDRA.</p>`,
  },
  perguntas: [
    { p: 'Quais os três sentidos de secularização em Casanova?', r: 'Diferenciação, declínio e privatização.' },
    { p: 'Qual era a proporção de católicos no Brasil em 1970 e em 2010?', r: '91,8% em 1970 e 64,6% em 2010.' },
    { p: 'A sociologia decide se uma religião é verdadeira?', r: 'Não; descreve crenças e práticas.' },
  ],
  exercicios: [
    mc('O dossel sagrado é de:', ['Taylor', 'Berger', 'Casanova', 'Weber'], 1, '1967.'),
    mc('Uma era secular (2007) é de:', ['Charles Taylor', 'Habermas', 'Berger', 'Durkheim'], 0, 'Condições da fé.'),
    mc('Em 2010, os evangélicos eram cerca de:', ['8%', '15%', '22%', '40%'], 2, '22,2% pelo Censo.'),
    mc('O sentido de secularização considerado núcleo defensável por Casanova é a:', ['Privatização', 'Diferenciação', 'Extinção', 'Declínio'], 1, 'Separação das esferas.'),
    mc('A justa autonomia das realidades terrenas está em:', ['Rerum Novarum', 'Gaudium et Spes, 36', 'Dei Filius', 'Lumen Gentium, 1'], 1, 'Vaticano II.'),
    disc('Analise a religião no Brasil com dados dos Censos (tabela com fonte), os três sentidos de Casanova e uma conclusão proporcional.', ['Tabela com fonte e data', 'Sentidos aplicados', 'Conclusão proporcional', 'Descrição separada de juízo teológico']),
  ],
  resumo: ['Casanova (1994): diferenciação, declínio, privatização.', 'Berger: O dossel sagrado (1967) e revisão (1999).', 'Taylor (2007): crer como opção.', 'Brasil: católicos 91,8% (1970) a 64,6% (2010); evangélicos 22,2%.', 'GS 36: justa autonomia.'],
  referencias: [
    { texto: 'José Casanova, Public Religions in the Modern World (1994).' },
    { texto: 'Peter Berger (org.), The Desecularization of the World (1999).' },
    { texto: 'Charles Taylor, Uma era secular (2007).' },
    { texto: 'IBGE, Censo Demográfico 2010: características gerais da população, religião e pessoas com deficiência.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a tabela e as conclusões', 'Ler os capítulos indicados'],
  revisao: [['Casanova', 'Três sentidos.'], ['Berger', 'Revisou a tese (1999).'], ['Censo 2010', 'Católicos 64,6%.']],
  avancado: {
    texto: `<h3>Pentecostalismo no Brasil</h3>
<p>Estudos sociológicos distinguem ondas do pentecostalismo brasileiro, desde a chegada da Congregação Cristã e da Assembleia de Deus no início do século XX (1910 e 1911) ${tag('fato')}. As explicações de seu crescimento — urbanização, redes de apoio, mensagem e organização — são debatidas ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Ricardo Mariano, Neopentecostais: sociologia do novo pentecostalismo no Brasil (1999).' }],
    exercicios: [
      mc('A Assembleia de Deus chegou ao Brasil em:', ['1822', '1911', '1950', '1977'], 1, 'Belém do Pará.'),
      mc('As explicações para o crescimento pentecostal são:', ['Consensuais', 'Debatidas', 'Inexistentes', 'Apenas econômicas'], 1, 'Vários fatores.'),
      mc('Neopentecostais (1999) é de:', ['Ricardo Mariano', 'Gilberto Freyre', 'Florestan Fernandes', 'DaMatta'], 0, 'Sociologia da religião.'),
      disc('Apresente duas explicações sociológicas para o crescimento pentecostal no Brasil e avalie a evidência de cada uma.', ['Duas explicações', 'Evidência', 'Avaliação', 'Conclusão'])],
  },
}),

aula({
  id: 'so3-4', titulo: 'Desigualdade, mobilidade e a Doutrina Social da Igreja diante das teorias sociológicas', duracao: '150 min',
  aprendera: ['Medir desigualdade e mobilidade social com indicadores', 'Expor estudos clássicos sobre mobilidade e raça no Brasil', 'Comparar a visão de sociedade da Rerum Novarum com a de um clássico', 'Distinguir doutrina, teoria e evidência'],
  prereq: ['Aulas anteriores do módulo', 'Economia: desigualdade (aula e3-4)'],
  explicacao: `
<h3>O problema</h3>
<p>Uma sociedade pode ser desigual e ter muita mobilidade, ou ser menos desigual e mais rígida. Medir as duas coisas e julgar o que é justo são tarefas diferentes.</p>
<h3>Medidas</h3>
<p>A desigualdade de renda é medida, por exemplo, pelo índice de Gini; a <strong>mobilidade intergeracional</strong> compara a posição dos filhos com a dos pais ${tag('fato')}. O IBGE publica a <em>Síntese de Indicadores Sociais</em>, com dados sobre renda, educação e trabalho ${tag('fato')}.</p>
<h3>Estudos brasileiros</h3>
<p>José Pastore, em <em>Desigualdade e mobilidade social no Brasil</em> (1979), mostrou grande mobilidade estrutural, ligada à urbanização e à industrialização ${tag('interpretacao')}. Carlos Hasenbalg, em <em>Discriminação e desigualdades raciais no Brasil</em> (1979), mostrou desvantagens persistentes de pretos e pardos na mobilidade, questionando a ideia de "democracia racial" ${tag('interpretacao')}.</p>
<h3>A Doutrina Social diante das teorias</h3>
<p>A <em>Rerum Novarum</em> (1891) vê a sociedade como corpo de partes desiguais em funções, chamadas à cooperação e não à luta; reconhece a injustiça da condição operária; defende a propriedade privada, o salário justo e as associações de trabalhadores ${tag('doutrina')}. Diferentemente de Marx, nega que o conflito de classes seja a lei da história; diferentemente do liberalismo econômico, nega que o mercado resolva por si a justiça ${tag('doutrina')}. Diferentemente das teorias sociológicas, a encíclica não é descrição empírica, mas ensino moral, que se apoia na natureza humana ${tag('argumento')}.</p>
<h3>Três níveis</h3>
<p>Em cada debate, distinga: <strong>doutrina</strong> (o que a Igreja ensina), <strong>teoria</strong> (o que um autor propõe para explicar) e <strong>evidência</strong> (o que os dados mostram) ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Mobilidade intergeracional', 'Mudança de posição social entre pais e filhos.'],
    ['Mobilidade estrutural', 'Mobilidade causada por mudança na estrutura de ocupações.'],
    ['Democracia racial', 'Ideia de que no Brasil não haveria barreiras raciais, criticada por estudos empíricos.'],
    ['Salário justo', 'Remuneração suficiente para o sustento digno do trabalhador e da família (Rerum Novarum).'],
    ['Doutrina, teoria e evidência', 'Três níveis distintos de afirmação num debate social.'],
  ],
  exemplos: `<p><strong>Três níveis num debate:</strong> doutrina — "o trabalhador tem direito a salário que permita viver com dignidade" (Rerum Novarum); teoria — "o salário mínimo reduz a pobreza sem grande perda de empregos, até certo nível"; evidência — séries de renda e emprego depois de reajustes, com método. Misturar os três gera confusão: a doutrina não decide sozinha a eficácia de uma política, e os dados não decidem sozinhos o que é justo.</p>`,
  contexto: `<p><strong>No mundo:</strong> estudos comparativos mostram que países com mais desigualdade tendem a ter menos mobilidade, relação discutida ${tag('debate')}. <strong>No Brasil:</strong> a desigualdade racial na renda e na educação é documentada pelo IBGE em <em>Desigualdades sociais por cor ou raça no Brasil</em> ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a doutrina social não compete com a sociologia empírica', tag: 'argumento',
    premissas: ['A sociologia empírica descreve e explica como a sociedade funciona.', 'A doutrina social ensina como a sociedade deve ser ordenada à dignidade da pessoa e ao bem comum.', 'Uma afirmação sobre o que é não decide sozinha o que deve ser, e vice-versa.'],
    conclusao: 'Logo, doutrina e sociologia respondem a perguntas diferentes e podem cooperar: os dados mostram problemas; a doutrina oferece critérios para julgá-los.',
    nota: 'A própria Igreja pede o uso das ciências sociais (Compêndio da DSI, 78).',
  },
  objecoes: [
    { objecao: 'Toda desigualdade é injusta.', tag: 'debate',
      resposta: 'A Rerum Novarum admite desigualdades naturais de talento e função; o que condena é a miséria, a exploração e a exclusão. O debate sobre quais desigualdades são aceitáveis exige critérios morais explícitos e dados sobre suas causas.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ensaio comparando a visão de sociedade da Rerum Novarum com a de um clássico (Durkheim, Weber ou Marx), distinguindo doutrina, teoria e evidência e citando os textos.</p>`,
  fonte: {
    obra: 'Leão XIII, Rerum Novarum (1891); Compêndio da Doutrina Social da Igreja (2004), n. 76–78', link: { url: 'https://www.vatican.va/content/leo-xiii/pt/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html', rotulo: 'Rerum Novarum (vatican.va)' },
    orientacao: `<p>Na Rerum Novarum, localize a crítica à luta de classes, a defesa da propriedade e o salário justo. No Compêndio, a relação entre doutrina social e ciências humanas. Use-os no ensaio.</p>`,
  },
  perguntas: [
    { p: 'O que mostrou Hasenbalg em 1979?', r: 'Desvantagens persistentes de pretos e pardos na mobilidade social, contra a ideia de democracia racial.' },
    { p: 'Como a Rerum Novarum vê o conflito de classes?', r: 'Nega que seja lei da história; propõe a cooperação das partes da sociedade.' },
    { p: 'Quais os três níveis a distinguir num debate social?', r: 'Doutrina, teoria e evidência.' },
  ],
  exercicios: [
    mc('Desigualdade e mobilidade social no Brasil (1979) é de:', ['Hasenbalg', 'José Pastore', 'Florestan Fernandes', 'Faoro'], 1, 'Mobilidade estrutural.'),
    mc('Discriminação e desigualdades raciais no Brasil é de:', ['Carlos Hasenbalg', 'Gilberto Freyre', 'DaMatta', 'Oliveira Vianna'], 0, '1979.'),
    mc('A mobilidade causada pela mudança das ocupações disponíveis é:', ['Individual', 'Estrutural', 'Intrageracional apenas', 'Nula'], 1, 'Urbanização e industrialização.'),
    mc('"O mercado resolve por si a justiça" é negado pela:', ['Rerum Novarum', 'Teoria crítica apenas', 'Tese de Pastore', 'Ninguém'], 0, 'Crítica ao liberalismo econômico.'),
    mc('"Salário mínimo reduz a pobreza até certo nível" é afirmação de nível:', ['Doutrina', 'Teoria a testar com evidência', 'Dogma', 'Tipo ideal'], 1, 'Empírica.'),
    disc('Entregue o ensaio comparando a Rerum Novarum com um clássico, distinguindo doutrina, teoria e evidência, com citações.', ['Visão da encíclica exposta', 'Visão do clássico exposta', 'Três níveis distinguidos', 'Citações localizadas']),
  ],
  resumo: ['Gini e mobilidade intergeracional.', 'Pastore (1979): mobilidade estrutural.', 'Hasenbalg (1979): desigualdade racial.', 'Rerum Novarum: cooperação, propriedade, salário justo.', 'Doutrina, teoria e evidência.'],
  referencias: [
    { texto: 'Leão XIII, Rerum Novarum (1891).', link: { url: 'https://www.vatican.va/content/leo-xiii/pt/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html', rotulo: 'vatican.va' } },
    { texto: 'Carlos Hasenbalg, Discriminação e desigualdades raciais no Brasil (1979).' },
    { texto: 'José Pastore, Desigualdade e mobilidade social no Brasil (1979).' },
    { texto: 'Pontifício Conselho Justiça e Paz, Compêndio da Doutrina Social da Igreja (2004).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio da etapa', 'Ler a Rerum Novarum'],
  revisao: [['Hasenbalg', 'Raça e mobilidade, 1979.'], ['Rerum Novarum', 'Cooperação, salário justo.'], ['Três níveis', 'Doutrina, teoria, evidência.']],
  avancado: {
    texto: `<h3>A curva do Grande Gatsby</h3>
<p>Economistas chamaram de "curva do Grande Gatsby" a relação observada entre maior desigualdade de renda e menor mobilidade intergeracional entre países ${tag('fato')}; a interpretação causal dessa relação é debatida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'IBGE, Síntese de Indicadores Sociais (edição mais recente).' }],
    exercicios: [
      mc('A curva do Grande Gatsby relaciona:', ['PIB e inflação', 'Desigualdade e mobilidade', 'Juros e câmbio', 'Religião e renda'], 1, 'Entre países.'),
      mc('A interpretação causal dessa curva é:', ['Consenso', 'Debatida', 'Doutrina', 'Lei'], 1, 'Correlação entre países.'),
      mc('A Síntese de Indicadores Sociais é publicada pelo:', ['Ipea', 'IBGE', 'BCB', 'INEP'], 1, 'Dados sociais.'),
      disc('Use a Síntese de Indicadores Sociais para descrever a desigualdade de renda por cor ou raça no Brasil, com fonte e ano.', ['Dados com fonte', 'Descrição', 'Interpretação cautelosa', 'Juízo separado'])],
  },
}),

avaliacao('so3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as correntes sociológicas e os debates sobre secularização e desigualdade, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro das quatro correntes.</li><li>Releia seu ensaio sobre a Rerum Novarum.</li></ul>`,
[
  disc('Analise a religião no Brasil com duas correntes sociológicas (por exemplo, funcionalismo e construcionismo) e com os dados do Censo, distinguindo o que a sociologia pode e o que não pode afirmar.', ['Duas correntes aplicadas', 'Dados com fonte', 'Limites da sociologia', 'Conclusão']),
  disc('Avalie um debate sobre desigualdade no Brasil distinguindo doutrina (Rerum Novarum ou Compêndio), teoria (um autor) e evidência (dados do IBGE).', ['Doutrina citada', 'Teoria exposta', 'Evidência com fonte', 'Três níveis distinguidos']),
]),
];
