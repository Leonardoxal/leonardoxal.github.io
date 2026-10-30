// Biologia II — história da biologia e fundadores da biologia moderna (etapas 4 e 5 do percurso).
// Aristóteles, Galeno e Vesálio; Harvey e os microscopistas; Lineu e Darwin; Mendel, Watson, Crick e Franklin.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'bi2-1', titulo: 'Aristóteles biólogo, Galeno e Vesálio: da observação antiga à anatomia moderna', duracao: '150 min',
  aprendera: ['Expor o método biológico de Aristóteles e a causa final', 'Explicar a anatomia de Galeno e seus limites', 'Explicar a correção de Vesálio pela dissecção humana', 'Avaliar a herança antiga sem anacronismo'],
  prereq: ['Biologia I (módulo BI1)'],
  explicacao: `
<h3>O problema</h3>
<p>A biologia não começou no século XIX. Aristóteles observou e classificou centenas de animais; os médicos antigos e renascentistas estudaram o corpo por dissecção.</p>
<h3>Aristóteles</h3>
<p>Em <em>História dos animais</em>, <em>Partes dos animais</em> e <em>Geração dos animais</em>, Aristóteles descreveu e comparou cerca de 500 espécies, inclusive animais marinhos observados em Lesbos ${tag('fato')}. Acompanhou o desenvolvimento do embrião de pintinho em ovos abertos dia a dia ${tag('fato')}. Explicava as partes pela função a que servem — a <strong>causa final</strong> ${tag('interpretacao')}. Algumas observações, como a do comportamento reprodutivo de certos polvos, só foram confirmadas no século XIX ${tag('fato')}.</p>
<h3>Galeno</h3>
<p>Galeno de Pérgamo (século II), médico em Roma, dissecou animais — macacos, porcos — e escreveu tratados de anatomia e fisiologia que dominaram a medicina por mais de mil anos ${tag('fato')}. Por não dissecar corpos humanos, transferiu ao homem estruturas de animais ${tag('fato')}.</p>
<h3>Vesálio</h3>
<p>Andreas Vesálio publicou <em>Da estrutura do corpo humano</em> (<em>De humani corporis fabrica</em>) em 1543 — o mesmo ano do livro de Copérnico —, com dissecções humanas e ilustrações detalhadas, corrigindo erros de Galeno ${tag('fato')}. O método de ver por si, e não apenas ler a autoridade, marcou a anatomia moderna ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Causa final', 'Explicação pela finalidade ou função de uma parte (Aristóteles).'],
    ['Embriologia', 'Estudo do desenvolvimento do embrião.'],
    ['Dissecção', 'Abertura de um corpo para estudo anatômico.'],
    ['Anatomia', 'Estudo da estrutura dos seres vivos.'],
    ['Fisiologia', 'Estudo das funções dos seres vivos.'],
  ],
  exemplos: `<p><strong>Causa final hoje:</strong> dizer que "o coração existe para bombear o sangue" é explicação funcional que a biologia ainda usa. A diferença é que a biologia moderna explica também como essa função surgiu (por evolução) e como funciona (por mecanismos); a pergunta aristotélica pelo "para quê" continua presente na linguagem das funções ${tag('interpretacao')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> as obras biológicas de Aristóteles foram traduzidas para o árabe e o latim e estudadas nas universidades medievais. <strong>No Brasil:</strong> o ensino de anatomia nas primeiras escolas de medicina (Bahia e Rio de Janeiro, criadas em 1808) seguia a tradição de Vesálio ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que Vesálio pôde corrigir Galeno', tag: 'argumento',
    premissas: ['Galeno descreveu a anatomia humana a partir de dissecções de animais.', 'Vesálio dissecou corpos humanos e comparou o que via com o texto de Galeno.', 'Onde havia diferença, a observação direta do corpo humano era a evidência mais forte.'],
    conclusao: 'Logo, a dissecção humana permitiu corrigir os erros de Galeno sobre o corpo humano.',
    nota: 'Não diminui Galeno, cujo trabalho foi notável para seus meios.',
  },
  objecoes: [
    { objecao: 'A biologia de Aristóteles era só especulação.', tag: 'debate',
      resposta: 'Aristóteles teve erros, mas sua obra contém observações cuidadosas e comparações sistemáticas, algumas confirmadas séculos depois. Darwin escreveu que seus heróis, Lineu e Cuvier, eram "meros escolares" diante de Aristóteles.' },
  ],
  aplicacao: `<p>Repita em pequena escala o método de Aristóteles: observe um animal comum (formiga, lagartixa, pássaro) por uma semana, registre comportamento e estrutura, e escreva uma explicação funcional ("para que serve") de uma parte, com uma pergunta sobre como ela funciona.</p>`,
  fonte: {
    obra: 'Aristóteles, História dos animais, livro VI (desenvolvimento do pintinho); Andreas Vesálio, Da estrutura do corpo humano (1543), prefácio', link: null,
    orientacao: `<p>Em Aristóteles, siga a descrição do embrião de pintinho por dias. No prefácio de Vesálio, a crítica à anatomia apenas livresca. Compare os dois métodos de observação.</p>`,
  },
  perguntas: [
    { p: 'Como Aristóteles estudou o desenvolvimento do pintinho?', r: 'Abrindo ovos dia a dia e observando o embrião.' },
    { p: 'Qual o limite da anatomia de Galeno?', r: 'Transferiu ao homem estruturas observadas em animais.' },
    { p: 'Quando Vesálio publicou sua obra?', r: 'Em 1543.' },
  ],
  exercicios: [
    mc('A explicação de uma parte pela função é a causa:', ['Material', 'Eficiente', 'Final', 'Formal'], 2, 'Aristóteles.'),
    mc('Galeno viveu no século:', ['IV a.C.', 'II', 'XVI', 'XVII'], 1, 'Roma.'),
    mc('De humani corporis fabrica é de:', ['Galeno', 'Vesálio', 'Harvey', 'Hooke'], 1, '1543.'),
    mc('Galeno dissecava sobretudo:', ['Corpos humanos', 'Animais', 'Plantas', 'Insetos'], 1, 'Macacos, porcos.'),
    mc('As escolas de medicina da Bahia e do Rio foram criadas em:', ['1500', '1808', '1889', '1934'], 1, 'Chegada da corte.'),
    disc('Entregue o registro de uma semana de observação de um animal e a explicação funcional de uma parte, com uma pergunta sobre seu mecanismo.', ['Registros datados', 'Explicação funcional', 'Pergunta de mecanismo', 'Método descrito']),
  ],
  resumo: ['Aristóteles: ~500 espécies; embriologia; causa final.', 'Galeno (séc. II): anatomia animal transferida ao homem.', 'Vesálio (1543): dissecção humana.', 'Ver por si, além da autoridade.', 'Escolas médicas no Brasil (1808).'],
  referencias: [
    { texto: 'Aristóteles, História dos animais.', livro: 'aristoteles-historia-animais' },
    { texto: 'Aristóteles, Partes dos animais.', livro: 'aristoteles-partes-animais' },
    { texto: 'Andreas Vesálio, Da estrutura do corpo humano (1543).' },
    { texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o registro de observação', 'Ler os trechos indicados'],
  revisao: [['Causa final', 'Função.'], ['Galeno', 'Anatomia animal.'], ['Vesálio', '1543.']],
  avancado: {
    texto: `<h3>Santo Alberto Magno</h3>
<p>Santo Alberto Magno (século XIII), padroeiro dos cientistas naturais, escreveu <em>Dos animais</em> e <em>Dos vegetais</em>, comentando Aristóteles e acrescentando observações próprias, e insistiu em verificar pela experiência o que os livros afirmavam ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Santo Alberto Magno, Dos animais (século XIII).' }],
    exercicios: [
      mc('Santo Alberto Magno é padroeiro dos:', ['Médicos', 'Cientistas naturais', 'Navegadores', 'Astrônomos apenas'], 1, 'Proclamado em 1941.'),
      mc('Santo Alberto escreveu:', ['Dos animais', 'Origem das espécies', 'Micrographia', 'Systema Naturae'], 0, 'Século XIII.'),
      mc('Santo Alberto insistia em:', ['Ignorar a experiência', 'Verificar pela experiência', 'Só ler Aristóteles', 'Rejeitar Aristóteles'], 1, 'Método.'),
      disc('Exponha a contribuição de Santo Alberto Magno à história da biologia com um exemplo de observação própria.', ['Obra', 'Exemplo', 'Método', 'Avaliação'])],
  },
}),

aula({
  id: 'bi2-2', titulo: 'Harvey e a circulação do sangue; Malpighi e Leeuwenhoek', duracao: '150 min',
  aprendera: ['Reconstruir o argumento quantitativo de Harvey', 'Explicar o papel das válvulas venosas', 'Explicar a descoberta dos capilares por Malpighi', 'Descrever as observações de Leeuwenhoek'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Galeno ensinava que o sangue era produzido continuamente no fígado e consumido pelos órgãos. Como provar que ele circula?</p>
<h3>Harvey</h3>
<p>William Harvey publicou <em>Do movimento do coração e do sangue nos animais</em> em 1628 ${tag('fato')}. Seu argumento central foi quantitativo: estimando o volume de sangue lançado a cada batimento e multiplicando pelo número de batimentos, a quantidade bombeada em poucas horas excede muito o peso do corpo; logo, o sangue não pode ser produzido e consumido continuamente, mas deve circular ${tag('fato')}.</p>
<h3>Válvulas</h3>
<p>Seu mestre Fabrício de Acquapendente descrevera as válvulas das veias; Harvey mostrou, com experimentos de compressão do braço, que elas só permitem o sangue correr em direção ao coração ${tag('fato')}.</p>
<h3>Capilares</h3>
<p>Harvey não viu como o sangue passa das artérias às veias. Marcello Malpighi, com o microscópio, observou em 1661 os capilares no pulmão de rã, completando o circuito ${tag('fato')}.</p>
<h3>Leeuwenhoek</h3>
<p>Antonie van Leeuwenhoek, comerciante de tecidos em Delft, descreveu a partir dos anos 1670 micro-organismos, espermatozoides e hemácias, em cartas à Royal Society ${tag('fato')}.</p>`,
  vocabulario: [
    ['Circulação', 'Movimento contínuo do sangue do coração às artérias, capilares, veias e de volta.'],
    ['Válvulas venosas', 'Estruturas que impedem o refluxo do sangue nas veias.'],
    ['Capilares', 'Vasos finíssimos que ligam artérias e veias.'],
    ['Argumento quantitativo', 'Argumento baseado em medidas e cálculos.'],
    ['Hemácia', 'Glóbulo vermelho do sangue.'],
  ],
  exemplos: `<p><strong>Refazendo a conta de Harvey:</strong> se o coração lança cerca de 60 mL por batimento e bate 70 vezes por minuto, bombeia 60 × 70 = 4.200 mL por minuto, ou cerca de 250 litros por hora — muito mais que o peso de uma pessoa. Nenhum órgão poderia produzir e consumir tanto sangue: ele precisa circular.</p>`,
  contexto: `<p><strong>No mundo:</strong> a descoberta da circulação é exemplo clássico de raciocínio quantitativo em biologia. <strong>No Brasil:</strong> as doenças cardiovasculares estão entre as principais causas de morte, segundo dados do Ministério da Saúde ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'O argumento de Harvey em premissas', tag: 'argumento',
    premissas: ['A cada batimento, o coração lança uma quantidade mensurável de sangue nas artérias.', 'Multiplicando pelo número de batimentos, a quantidade lançada em poucas horas excede o peso do corpo.', 'Nenhum órgão poderia produzir nem os tecidos consumir tal quantidade.'],
    conclusao: 'Logo, o mesmo sangue deve voltar ao coração: ele circula.',
    nota: 'Mesmo com estimativas grosseiras, a conclusão vale: é um argumento por ordem de grandeza.',
  },
  objecoes: [
    { objecao: 'Harvey não provou a circulação porque não viu os capilares.', tag: 'debate',
      resposta: 'O argumento quantitativo e os experimentos com as válvulas tornavam a circulação a única explicação viável; os capilares, vistos por Malpighi em 1661, confirmaram a previsão. Uma inferência pode ser sólida antes da observação direta do mecanismo.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: meça sua frequência cardíaca em repouso, refaça a conta de Harvey com um volume de 70 mL por batimento e explique como o argumento demonstra a circulação.</p>`,
  fonte: {
    obra: 'William Harvey, Do movimento do coração e do sangue nos animais (1628), caps. IX e XIII', link: null,
    orientacao: `<p>No cap. IX, localize o cálculo da quantidade de sangue. No cap. XIII, os experimentos com as válvulas venosas. Reconstrua o argumento em premissas.</p>`,
  },
  perguntas: [
    { p: 'Qual o argumento quantitativo de Harvey?', r: 'A quantidade de sangue bombeada em poucas horas excede o peso do corpo; logo, o sangue deve circular.' },
    { p: 'Quem viu primeiro os capilares?', r: 'Marcello Malpighi, em 1661, no pulmão de rã.' },
    { p: 'O que mostram as válvulas venosas?', r: 'Que o sangue nas veias corre em direção ao coração.' },
  ],
  exercicios: [
    mc('A obra de Harvey sobre a circulação é de:', ['1543', '1628', '1665', '1859'], 1, 'Do movimento do coração.'),
    mc('Com 70 mL por batimento e 60 batimentos por minuto, o coração bombeia por minuto:', ['420 mL', '4.200 mL', '42 L', '7 L'], 1, '70 × 60.'),
    mc('Malpighi observou os capilares em:', ['1628', '1661', '1700', '1838'], 1, 'Pulmão de rã.'),
    mc('Leeuwenhoek era de profissão:', ['Médico', 'Comerciante de tecidos', 'Padre', 'Astrônomo'], 1, 'Delft.'),
    mc('Segundo Galeno, o sangue era:', ['Circulante', 'Produzido continuamente no fígado', 'Feito no coração', 'Inexistente'], 1, 'Teoria superada.'),
    disc('Entregue a medida da frequência cardíaca, a conta de Harvey e a explicação de como o argumento demonstra a circulação.', ['Medida', 'Cálculo', 'Argumento reconstruído', 'Limites']),
  ],
  resumo: ['Harvey (1628): argumento quantitativo.', 'Válvulas venosas (Fabrício; experimentos de Harvey).', 'Malpighi (1661): capilares.', 'Leeuwenhoek: micro-organismos (anos 1670).', 'Inferência antes da observação do mecanismo.'],
  referencias: [
    { texto: 'William Harvey, Do movimento do coração e do sangue nos animais (1628).' },
    { texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' },
    { texto: 'Ministério da Saúde, dados de mortalidade (DATASUS).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a conta de Harvey', 'Ler os capítulos indicados'],
  revisao: [['Harvey', 'Circulação, 1628.'], ['Malpighi', 'Capilares, 1661.'], ['Conta', 'Volume × batimentos.']],
  avancado: {
    texto: `<h3>Circulação pulmonar</h3>
<p>A passagem do sangue pelos pulmões foi descrita antes de Harvey por Ibn al-Nafis (século XIII) e, na Europa, por Miguel Servet (1553) e Realdo Colombo (1559) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'William Harvey, Do movimento do coração e do sangue nos animais (1628).' }],
    exercicios: [
      mc('A circulação pulmonar foi descrita no século XIII por:', ['Galeno', 'Ibn al-Nafis', 'Harvey', 'Malpighi'], 1, 'Medicina árabe.'),
      mc('Miguel Servet descreveu a circulação pulmonar em:', ['1243', '1553', '1628', '1661'], 1, 'Europa.'),
      mc('Harvey descreveu a circulação:', ['Só pulmonar', 'Geral (sistêmica e pulmonar)', 'Só cerebral', 'Linfática'], 1, 'Circuito completo.'),
      disc('Explique a diferença entre a circulação pulmonar e a sistêmica e quem descreveu cada uma.', ['Duas circulações', 'Autores', 'Datas', 'Clareza'])],
  },
}),

aula({
  id: 'bi2-3', titulo: 'Lineu e Darwin: a ordem dos seres vivos e a seleção natural', duracao: '150 min',
  aprendera: ['Expor o projeto de classificação de Lineu', 'Explicar a teoria da seleção natural de Darwin', 'Situar a viagem do Beagle e a passagem de Darwin pelo Brasil', 'Fazer a ficha de leitura do capítulo IV de A origem das espécies'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como organizar a imensa variedade dos seres vivos, e como explicar sua origem e sua adaptação?</p>
<h3>Lineu</h3>
<p>Carlos Lineu (1707–1778) organizou os seres vivos em reino, classe, ordem, gênero e espécie, e via na classificação a descoberta da ordem posta pelo Criador ${tag('interpretacao')}. Considerava, de início, as espécies fixas; mais tarde admitiu a formação de novas variedades por hibridação ${tag('fato')}.</p>
<h3>Darwin</h3>
<p>Charles Darwin viajou no navio Beagle de 1831 a 1836; passou pelo Brasil em 1832, em Salvador e no Rio de Janeiro, onde descreveu a mata tropical e condenou a escravidão em seu diário ${tag('fato')}. Em 1858, ele e Alfred Russel Wallace apresentaram juntos a ideia da seleção natural; em 1859, Darwin publicou <em>A origem das espécies</em> ${tag('fato')}.</p>
<h3>Seleção natural</h3>
<p>O argumento: (1) os indivíduos de uma espécie variam; (2) parte dessa variação é hereditária; (3) nascem mais indivíduos do que podem sobreviver; (4) os que têm variações mais vantajosas no ambiente tendem a deixar mais descendentes; (5) ao longo de muitas gerações, as populações mudam e podem originar novas espécies ${tag('fato')}. Darwin não conhecia o mecanismo da herança, que a genética explicaria depois ${tag('fato')}.</p>
<h3>Fritz Müller no Brasil</h3>
<p>O naturalista Fritz Müller, que viveu em Santa Catarina, publicou <em>Para Darwin</em> (1864), testando a teoria com crustáceos; correspondia-se com Darwin, que o admirava ${tag('fato')}.</p>`,
  vocabulario: [
    ['Seleção natural', 'Maior sucesso reprodutivo de variações vantajosas no ambiente.'],
    ['Variação', 'Diferenças entre indivíduos da mesma espécie.'],
    ['Adaptação', 'Característica que aumenta a sobrevivência ou a reprodução num ambiente.'],
    ['Ancestralidade comum', 'Tese de que espécies diferentes descendem de ancestrais comuns.'],
    ['Fixismo', 'Tese de que as espécies não mudam.'],
  ],
  exemplos: `<p><strong>Seleção natural em ação:</strong> o uso intenso de antibióticos elimina bactérias sensíveis; as poucas resistentes sobrevivem e se multiplicam. Em pouco tempo, a população é majoritariamente resistente. É seleção natural observável, e por isso os antibióticos devem ser usados só com prescrição.</p>`,
  contexto: `<p><strong>No mundo:</strong> a teoria de Darwin é a base da biologia moderna. <strong>No Brasil:</strong> a passagem de Darwin pela Bahia e pelo Rio (1832) e a obra de Fritz Müller ligam o país à história da teoria da evolução ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'O argumento da seleção natural em premissas', tag: 'argumento',
    premissas: ['Indivíduos variam e parte da variação é hereditária.', 'Nascem mais indivíduos do que os recursos permitem sobreviver.', 'Variações vantajosas aumentam a chance de sobreviver e deixar descendentes.'],
    conclusao: 'Logo, ao longo das gerações, as variações vantajosas tendem a tornar-se mais frequentes nas populações.',
    nota: 'O argumento explica a adaptação; a filosofia e a fé tratam de perguntas que ele não responde (sentido, origem última).',
  },
  objecoes: [
    { objecao: 'A seleção natural é só "lei do mais forte".', tag: 'debate',
      resposta: '"Mais apto" significa mais bem-sucedido em sobreviver e reproduzir-se num ambiente, o que pode envolver cooperação, camuflagem ou resistência, não força. Transpor a seleção natural para a moral humana ("darwinismo social") foi erro e serviu a injustiças.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura do capítulo IV de A origem das espécies (seleção natural) — referência, tese, as premissas do argumento, dois exemplos usados por Darwin, o que ele não sabia (herança) e uma citação curta localizada.</p>`,
  fonte: {
    obra: 'Charles Darwin, A origem das espécies (1859), cap. IV; Charles Darwin, Diário da viagem do Beagle (1839), passagens sobre o Brasil', link: null,
    orientacao: `<p>No cap. IV, reconstrua o argumento da seleção natural. No Diário, localize as descrições da Bahia e do Rio e a passagem sobre a escravidão.</p>`,
  },
  perguntas: [
    { p: 'Quando Darwin passou pelo Brasil?', r: 'Em 1832, em Salvador e no Rio de Janeiro.' },
    { p: 'Quem apresentou a seleção natural junto com Darwin em 1858?', r: 'Alfred Russel Wallace.' },
    { p: 'O que Darwin não conhecia?', r: 'O mecanismo da herança.' },
  ],
  exercicios: [
    mc('A origem das espécies é de:', ['1831', '1858', '1859', '1866'], 2, 'Darwin.'),
    mc('A viagem do Beagle durou de:', ['1831 a 1836', '1858 a 1859', '1800 a 1804', '1866 a 1870'], 0, 'Volta ao mundo.'),
    mc('Para Darwin é de:', ['Wallace', 'Fritz Müller', 'Mendel', 'Lineu'], 1, '1864, Santa Catarina.'),
    mc('A resistência de bactérias a antibióticos é exemplo de:', ['Geração espontânea', 'Seleção natural', 'Fixismo', 'Biogênese'], 1, 'Evolução observável.'),
    mc('Lineu via a classificação como descoberta da ordem:', ['Do acaso', 'Do Criador', 'Do Estado', 'Do mercado'], 1, 'Interpretação de Lineu.'),
    disc('Entregue a ficha de leitura do capítulo IV de A origem das espécies, com o argumento reconstruído e o que Darwin não sabia.', ['Tese', 'Premissas', 'Exemplos', 'Limite (herança)', 'Citação']),
  ],
  resumo: ['Lineu: classificação; ordem da criação.', 'Darwin: Beagle (1831–1836); Brasil (1832).', 'Darwin e Wallace (1858); Origem (1859).', 'Seleção natural: variação, herança, superprodução, sucesso diferencial.', 'Fritz Müller (1864).'],
  referencias: [
    { texto: 'Charles Darwin, A origem das espécies (1859).' },
    { texto: 'Charles Darwin, Diário da viagem do Beagle (1839).' },
    { texto: 'Fritz Müller, Para Darwin (1864).' },
    { texto: 'Étienne Gilson, De Aristóteles a Darwin (e volta) (1971).', livro: 'gilson-darwin' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha do capítulo IV', 'Ler as passagens do Diário'],
  revisao: [['Darwin', '1859.'], ['Wallace', '1858.'], ['Fritz Müller', 'Santa Catarina, 1864.']],
  avancado: {
    texto: `<h3>Wallace e a linha de Wallace</h3>
<p>Alfred Russel Wallace também pesquisou na Amazônia (1848–1852), com Henry Bates, antes de ir ao arquipélago malaio, onde identificou a fronteira entre faunas asiática e australiana, chamada linha de Wallace ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Henry Walter Bates, O naturalista no rio Amazonas (1863).' }],
    exercicios: [
      mc('Wallace pesquisou na Amazônia com:', ['Darwin', 'Henry Bates', 'Fritz Müller', 'Humboldt'], 1, '1848–1852.'),
      mc('A linha de Wallace separa faunas:', ['Africana e europeia', 'Asiática e australiana', 'Americana e africana', 'Amazônica e andina'], 1, 'Arquipélago malaio.'),
      mc('O naturalista no rio Amazonas é de:', ['Wallace', 'Bates', 'Darwin', 'Agassiz'], 1, '1863.'),
      disc('Explique a contribuição da Amazônia para a formação de Wallace e Bates como naturalistas.', ['Viagem', 'Observações', 'Influência', 'Fontes'])],
  },
}),

aula({
  id: 'bi2-4', titulo: 'Mendel, a genética e a dupla hélice: Watson, Crick e Rosalind Franklin', duracao: '150 min',
  aprendera: ['Explicar os experimentos e as leis de Mendel', 'Resolver cruzamentos simples', 'Explicar a descoberta da estrutura do DNA e o papel de Franklin', 'Situar a genética no Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Darwin não sabia como as características passam de pais para filhos. A resposta veio de um monge e, um século depois, da estrutura de uma molécula.</p>
<h3>Mendel</h3>
<p>Gregor Mendel, frade agostiniano e depois abade em Brno, cruzou ervilhas entre 1856 e 1863 e publicou em 1866 <em>Experimentos sobre híbridos de plantas</em> ${tag('fato')}. Concluiu que as características dependem de "fatores" (hoje, genes) herdados em pares, que se separam na formação dos gametas — <strong>lei da segregação</strong> — e que fatores de características diferentes se distribuem de modo independente — <strong>lei da segregação independente</strong> ${tag('fato')}. Seu trabalho foi redescoberto em 1900 por de Vries, Correns e Tschermak ${tag('fato')}.</p>
<h3>A dupla hélice</h3>
<p>Em 1953, James Watson e Francis Crick propuseram que o DNA é uma dupla hélice de duas cadeias com bases pareadas (A com T, C com G) ${tag('fato')}. O modelo usou dados de difração de raios X obtidos no laboratório de Rosalind Franklin, especialmente a "fotografia 51", e trabalhos de Maurice Wilkins ${tag('fato')}. Watson, Crick e Wilkins receberam o Nobel em 1962; Franklin morrera em 1958, e o prêmio não é dado postumamente ${tag('fato')}.</p>
<h3>Genética no Brasil</h3>
<p>O geneticista Theodosius Dobzhansky trabalhou no Brasil nos anos 1940 e 1950, colaborando na formação de geneticistas brasileiros ${tag('fato')}.</p>`,
  vocabulario: [
    ['Alelo', 'Forma alternativa de um gene.'],
    ['Dominante e recessivo', 'Alelo que se manifesta em dose simples x só em dose dupla.'],
    ['Genótipo e fenótipo', 'Constituição genética x característica observável.'],
    ['Lei da segregação', 'Os alelos de um par se separam na formação dos gametas.'],
    ['Dupla hélice', 'Estrutura do DNA proposta em 1953.'],
  ],
  exemplos: `<p><strong>Cruzamento de Mendel:</strong> ervilhas amarelas (AA) cruzadas com verdes (aa) dão todas amarelas (Aa) na primeira geração. Cruzando Aa × Aa, a segunda geração tem AA, Aa, Aa, aa: três amarelas para uma verde (3:1), a proporção que Mendel encontrou ao contar milhares de sementes.</p>`,
  contexto: `<p><strong>No mundo:</strong> a genética é base da medicina, da agricultura e da biotecnologia. <strong>No Brasil:</strong> o melhoramento genético de plantas pela Embrapa e por universidades transformou a produtividade agrícola ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a proporção 3:1 indica fatores em pares', tag: 'argumento',
    premissas: ['Na primeira geração, todas as plantas eram amarelas, mas na segunda reapareceu o verde.', 'O verde não sumiu: estava presente, mas oculto, na primeira geração.', 'A proporção 3:1 é a esperada se cada planta tem dois fatores e transmite um ao acaso.'],
    conclusao: 'Logo, as características dependem de fatores em pares que se separam na formação dos gametas.',
    nota: 'Mendel chegou à conclusão contando e calculando proporções — biologia matemática.',
  },
  objecoes: [
    { objecao: 'Mendel, sendo frade, fazia ciência apesar da Igreja.', tag: 'debate',
      resposta: 'Mendel fez seus experimentos no mosteiro, com apoio de sua comunidade agostiniana, que mantinha atividades científicas. O caso mostra a compatibilidade entre vida religiosa e ciência, não oposição.' },
  ],
  aplicacao: `<p>Resolva três cruzamentos: Aa × aa, AaBb × aabb e um caso de característica humana recessiva (por exemplo, albinismo) numa família fictícia, com o quadro de Punnett e as proporções esperadas.</p>`,
  fonte: {
    obra: 'Gregor Mendel, Experimentos sobre híbridos de plantas (1866); James Watson e Francis Crick, "Molecular Structure of Nucleic Acids" (1953)', link: null,
    orientacao: `<p>Em Mendel, localize as contagens da segunda geração e a explicação dos fatores. No artigo de 1953, a frase final sobre o mecanismo de cópia sugerido pelo pareamento. Relacione os dois.</p>`,
  },
  perguntas: [
    { p: 'Quais as leis de Mendel?', r: 'Lei da segregação e lei da segregação independente.' },
    { p: 'Quem redescobriu Mendel em 1900?', r: 'De Vries, Correns e Tschermak.' },
    { p: 'Qual o papel de Rosalind Franklin na descoberta do DNA?', r: 'Seus dados de difração de raios X, como a fotografia 51, foram decisivos para o modelo.' },
  ],
  exercicios: [
    mc('O artigo de Mendel foi publicado em:', ['1856', '1866', '1900', '1953'], 1, 'Híbridos de plantas.'),
    mc('Aa × Aa dá, para o fenótipo dominante e o recessivo, a proporção:', ['1:1', '3:1', '9:3:3:1', '1:2:1'], 1, 'Segunda geração.'),
    mc('Aa × aa dá:', ['Todos dominantes', '1 dominante : 1 recessivo', '3:1', 'Todos recessivos'], 1, 'Retrocruzamento.'),
    mc('No DNA, a adenina pareia com:', ['Citosina', 'Guanina', 'Timina', 'Uracila'], 2, 'A–T, C–G.'),
    mc('O Nobel pela estrutura do DNA foi em:', ['1953', '1958', '1962', '1977'], 2, 'Watson, Crick, Wilkins.'),
    disc('Resolva os três cruzamentos com quadros de Punnett e proporções, explicando o raciocínio.', ['Três cruzamentos', 'Quadros corretos', 'Proporções', 'Explicação']),
  ],
  resumo: ['Mendel (1856–1863; 1866): segregação e segregação independente.', 'Redescoberta em 1900.', 'Watson e Crick (1953): dupla hélice; A–T, C–G.', 'Franklin: fotografia 51; Nobel de 1962.', 'Dobzhansky no Brasil.'],
  referencias: [
    { texto: 'Gregor Mendel, Experimentos sobre híbridos de plantas (1866).' },
    { texto: 'James Watson e Francis Crick, "Molecular Structure of Nucleic Acids" (1953).' },
    { texto: 'Brenda Maddox, Rosalind Franklin: a dama negra do DNA (2002).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Resolver os três cruzamentos', 'Ler os trechos indicados'],
  revisao: [['Mendel', 'Segregação.'], ['3:1', 'Aa × Aa.'], ['Franklin', 'Fotografia 51.']],
  avancado: {
    texto: `<h3>O código genético</h3>
<p>Nos anos 1960, Marshall Nirenberg, Har Gobind Khorana e outros decifraram o código genético: cada sequência de três bases (códon) do RNA mensageiro especifica um aminoácido ${tag('fato')}. O código é praticamente universal entre os seres vivos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Bruce Alberts e outros, Biologia molecular da célula (manual).' }],
    exercicios: [
      mc('Um códon tem:', ['Uma base', 'Duas bases', 'Três bases', 'Quatro bases'], 2, 'Trinca.'),
      mc('O código genético foi decifrado nos anos:', ['1900', '1953', '1960', '2003'], 2, 'Nirenberg e Khorana.'),
      mc('O código genético é:', ['Diferente em cada espécie', 'Praticamente universal', 'Só humano', 'Desconhecido'], 1, 'Evidência de ancestralidade comum.'),
      disc('Explique por que a universalidade do código genético é evidência de ancestralidade comum.', ['Fato', 'Raciocínio', 'Alternativas', 'Conclusão'])],
  },
}),

avaliacao('bi2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da biologia, de Aristóteles ao DNA, com cálculos e cruzamentos, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça a conta de Harvey e os cruzamentos de Mendel.</li><li>Releia a ficha do capítulo IV da Origem.</li></ul>`,
[
  disc('Compare o método de Aristóteles, o de Harvey e o de Mendel: o que observavam, como raciocinavam e que tipo de conclusão obtinham.', ['Três métodos', 'Observação', 'Raciocínio', 'Conclusões']),
  disc('Explique como a genética de Mendel e a dupla hélice completaram a teoria de Darwin, e o que permaneceu fora da explicação científica.', ['Lacuna de Darwin', 'Contribuição de Mendel', 'Contribuição do DNA', 'Limites da explicação']),
]),
];
