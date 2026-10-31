// Literatura IV — os grandes gêneros (etapa 8 do percurso de Literatura).
// Poesia lírica; romance e conto; teatro; literatura e fé.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lt4-1', titulo: 'Poesia lírica: do Saltério a Drummond e Adélia Prado', duracao: '150 min',
  aprendera: ['Distinguir eu lírico e autor', 'Reconhecer a tradição lírica bíblica e mística', 'Analisar poemas de Bandeira e Drummond', 'Analisar a imagem poética'],
  prereq: ['Literatura III (módulo LT3)'],
  explicacao: `
<h3>O problema</h3>
<p>Um poema lírico parece falar do próprio poeta. Mas quem fala num poema? E o que faz uma imagem poética ficar para sempre na memória?</p>
<h3>Eu lírico</h3>
<p>O eu lírico é a voz que fala no poema; não se confunde necessariamente com o autor real ${tag('fato')}. Fernando Pessoa escreveu que "o poeta é um fingidor" ("Autopsicografia"), indicando a distância entre sentimento vivido e sentimento expresso ${tag('fato')}.</p>
<h3>Tradição bíblica e mística</h3>
<p>Os Salmos e o Cântico dos Cânticos são grandes poemas líricos da tradição judaico-cristã ${tag('fato')}. São João da Cruz, no século XVI, escreveu poemas místicos como "Noite escura", comentados por ele mesmo em tratados de espiritualidade ${tag('fato')}.</p>
<h3>Lírica brasileira moderna</h3>
<p>Manuel Bandeira, em "Vou-me embora pra Pasárgada" (Libertinagem, 1930), imagina um lugar de liberdade e consolo ${tag('fato')}. Carlos Drummond de Andrade, em "No meio do caminho" (publicado em 1928), repete a "pedra" até transformá-la em imagem de obstáculo e memória ${tag('fato')}. Cecília Meireles e Adélia Prado (Bagagem, 1976) uniram lirismo e espiritualidade ${tag('fato')}.</p>
<h3>A imagem</h3>
<p>A imagem poética concentra sensação, emoção e sentido numa figura concreta ${tag('interpretacao')}. Analisá-la exige perguntar o que ela mostra, o que sugere e como se liga ao conjunto do poema ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Eu lírico', 'Voz que fala no poema.'],
    ['Imagem poética', 'Figura concreta que condensa sentido e emoção.'],
    ['Lírica mística', 'Poesia que exprime a experiência da união com Deus.'],
    ['Repetição', 'Recurso de retomada de palavras ou versos com efeito expressivo.'],
    ['Saltério', 'Livro dos Salmos.'],
  ],
  exemplos: `<p><strong>A pedra de Drummond:</strong> "No meio do caminho tinha uma pedra / tinha uma pedra no meio do caminho". A repetição quase obsessiva faz da pedra algo mais que um objeto: torna-se lembrança que não se apaga ("nunca me esquecerei desse acontecimento"). Quando o poema saiu, foi ridicularizado por muitos; hoje é um dos mais conhecidos da língua.</p>`,
  contexto: `<p><strong>No mundo:</strong> os Salmos foram e são rezados diariamente na Liturgia das Horas ${tag('fato')}. <strong>No Brasil:</strong> Adélia Prado foi incentivada por Drummond na publicação de seu primeiro livro ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a poesia lírica é forma de conhecimento', tag: 'argumento',
    premissas: ['A lírica dá forma precisa a experiências interiores difíceis de nomear.', 'Ao lê-la, o leitor reconhece e compreende melhor suas próprias experiências.', 'Os Salmos mostram como a poesia pode ser também oração.'],
    conclusao: 'Logo, a poesia lírica é forma de conhecimento de si e, por vezes, de Deus.',
    nota: 'A tradição chama a poesia de "conhecimento por conaturalidade" (Maritain).',
  },
  objecoes: [
    { objecao: 'Poesia é só expressão de sentimentos pessoais, sem valor universal.', tag: 'argumento',
      resposta: 'O grande poema parte de uma experiência, mas a elabora numa forma que outros reconhecem como própria — por isso Salmos e sonetos atravessam séculos. A universalidade vem da forma e da verdade humana, não da confissão bruta.' },
  ],
  aplicacao: `<p>Analise dois poemas líricos (um brasileiro moderno e um salmo ou poema místico), comparando o eu lírico, as imagens centrais e o movimento de cada um.</p>`,
  fonte: {
    obra: 'Salmo 42 (41); Carlos Drummond de Andrade, "No meio do caminho"; Manuel Bandeira, "Vou-me embora pra Pasárgada"', link: null,
    orientacao: `<p>Compare a sede de Deus do salmista com a busca de Pasárgada e com a pedra de Drummond.</p>`,
  },
  perguntas: [
    { p: 'O que é eu lírico?', r: 'A voz que fala no poema.' },
    { p: 'Em que livro está "Vou-me embora pra Pasárgada"?', r: 'Libertinagem (1930).' },
    { p: 'Quem escreveu "Noite escura"?', r: 'São João da Cruz.' },
  ],
  exercicios: [
    mc('"O poeta é um fingidor" é de:', ['Bandeira', 'Fernando Pessoa', 'Drummond', 'Camões'], 1, '"Autopsicografia".'),
    mc('"No meio do caminho" foi publicado em:', ['1922', '1928', '1956', '1976'], 1, 'Drummond.'),
    mc('Bagagem, de Adélia Prado, é de:', ['1956', '1966', '1976', '1986'], 2, 'Estreia.'),
    mc('O Cântico dos Cânticos é:', ['Lírico', 'Épico', 'Dramático puro', 'Jurídico'], 0, 'Bíblia.'),
    mc('O eu lírico é sempre o autor real?', ['Sim', 'Não necessariamente', 'Só em sonetos', 'Só em salmos'], 1, 'Distinção.'),
    disc('Compare um poema brasileiro moderno e um salmo quanto ao eu lírico, imagens e movimento.', ['Eu lírico', 'Imagens', 'Movimento', 'Comparação']),
  ],
  resumo: ['Eu lírico ≠ autor.', 'Salmos, Cântico, João da Cruz.', 'Bandeira (1930), Drummond (1928).', 'Cecília Meireles, Adélia Prado (1976).', 'Imagem poética.'],
  referencias: [
    { texto: 'Bíblia, Livro dos Salmos.' },
    { texto: 'Carlos Drummond de Andrade, Alguma poesia (1930).' },
    { texto: 'Jacques Maritain, A intuição criadora na arte e na poesia (1953).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise comparada', 'Ler as fontes indicadas'],
  revisao: [['Eu lírico', 'Voz.'], ['Pedra', 'Drummond.'], ['Pasárgada', 'Bandeira.']],
  avancado: {
    texto: `<h3>Os Salmos como poesia</h3>
<p>A poesia hebraica dos Salmos não usa rima, mas paralelismo: o segundo verso repete, contrasta ou completa o primeiro ("Os céus narram a glória de Deus, / o firmamento anuncia a obra de suas mãos", Sl 19) ${tag('fato')}. Robert Lowth descreveu esse paralelismo em 1753 ${tag('fato')}. O recurso sobrevive bem à tradução, o que ajuda a explicar a força universal dos Salmos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Bíblia, Salmo 19 (18).' }],
    exercicios: [
      mc('A poesia hebraica usa principalmente:', ['Rima', 'Paralelismo', 'Métrica silábica', 'Soneto'], 1, 'Salmos.'),
      mc('O paralelismo foi descrito por Lowth em:', ['1611', '1753', '1850', '1928'], 1, 'Estudo.'),
      mc('O paralelismo sobrevive bem à:', ['Tradução', 'Censura', 'Música apenas', 'Prosa'], 0, 'Interpretação.'),
      disc('Identifique três tipos de paralelismo em um salmo à sua escolha.', ['Salmo', 'Paralelismos', 'Efeito', 'Citações'])],
  },
}),

aula({
  id: 'lt4-2', titulo: 'Romance e conto: formas da narrativa moderna', duracao: '150 min',
  aprendera: ['Distinguir romance e conto', 'Conhecer tipos de romance', 'Aplicar a teoria do efeito único de Poe ao conto', 'Analisar contos de Machado, Rosa e Clarice'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que alguns contos de cinco páginas nos marcam tanto quanto um romance de quinhentas? O que distingue as duas formas?</p>
<h3>Romance</h3>
<p>O romance é narrativa longa, com vários personagens, tramas e passagem do tempo, capaz de representar uma sociedade inteira ou uma consciência em profundidade ${tag('fato')}. Há romances de formação (o crescimento de um jovem), realistas, psicológicos, históricos ${tag('fato')}.</p>
<h3>Conto</h3>
<p>Edgar Allan Poe defendeu que o conto deve produzir um efeito único, para o qual cada palavra contribui, e ser lido de uma só vez ${tag('fato')}. O conto concentra-se num episódio, num momento de revelação ou numa virada ${tag('interpretacao')}.</p>
<h3>Contos brasileiros</h3>
<p>Machado de Assis escreveu contos-primas como "A cartomante" e "Missa do galo", em que o não dito pesa tanto quanto o dito ${tag('interpretacao')}. Guimarães Rosa, em "A terceira margem do rio" (Primeiras estórias, 1962), narra um pai que passa a viver numa canoa no meio do rio ${tag('fato')}. Clarice Lispector, em "Amor" (Laços de família, 1960), mostra uma mulher cuja rotina se rompe ao ver um cego mascando chiclete ${tag('fato')}.</p>
<h3>Epifania</h3>
<p>Muitos contos modernos giram em torno de uma epifania: um momento em que algo se revela ao personagem ${tag('fato')}. O termo vem da liturgia (Epifania do Senhor) e foi adaptado à crítica literária, sobretudo a partir de James Joyce ${tag('fato')}.</p>`,
  vocabulario: [
    ['Romance', 'Narrativa longa com vários personagens e tramas.'],
    ['Conto', 'Narrativa breve concentrada num episódio.'],
    ['Romance de formação', 'Romance sobre o amadurecimento de um jovem.'],
    ['Efeito único', 'Unidade de impressão buscada pelo conto (Poe).'],
    ['Epifania', 'Momento de revelação na narrativa.'],
  ],
  exemplos: `<p><strong>"A terceira margem do rio":</strong> o pai sai de casa sem explicação e passa a viver na canoa, sem margem. O filho narra, dividido entre culpa, admiração e medo. O conto não explica o gesto; deixa o leitor diante do mistério, numa "terceira margem" que não existe no mapa. A concentração e o silêncio são a força do conto.</p>`,
  contexto: `<p><strong>No mundo:</strong> Tchekhov e Maupassant são considerados mestres do conto moderno ${tag('fato')}. <strong>No Brasil:</strong> a crônica, gênero próximo do conto, teve mestres como Rubem Braga e Fernando Sabino ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o conto exige economia', tag: 'argumento',
    premissas: ['O conto busca um efeito concentrado numa leitura breve.', 'Cada elemento supérfluo dispersa a atenção e enfraquece o efeito.', 'Por isso o bom contista corta tudo o que não serve ao conjunto.'],
    conclusao: 'Logo, a economia é virtude essencial do conto.',
    nota: 'Tchekhov aconselhava: se há uma espingarda na parede no primeiro ato, ela deve disparar.',
  },
  objecoes: [
    { objecao: 'O romance é superior ao conto por ser mais longo e completo.', tag: 'argumento',
      resposta: 'Romance e conto têm possibilidades diferentes, não hierarquia: o romance desenvolve, o conto concentra. Há contos mais profundos que muitos romances. Julgar pela extensão é confundir quantidade e qualidade.' },
  ],
  aplicacao: `<p>Analise dois contos brasileiros (por exemplo, "A cartomante" e "A terceira margem do rio"), identificando narrador, efeito único, epifania ou virada e o papel do não dito.</p>`,
  fonte: {
    obra: 'Machado de Assis, "A cartomante"; João Guimarães Rosa, "A terceira margem do rio" (1962)', link: { url: 'https://www.dominiopublico.gov.br', rotulo: 'Domínio Público' },
    orientacao: `<p>O conto de Machado está em domínio público; o de Rosa, em edições comerciais. Observe em ambos o final e o que fica sem explicação.</p>`,
  },
  perguntas: [
    { p: 'O que é o efeito único de Poe?', r: 'A unidade de impressão que o conto deve produzir.' },
    { p: 'Em que livro está "A terceira margem do rio"?', r: 'Primeiras estórias (1962).' },
    { p: 'O que é epifania na narrativa?', r: 'Um momento de revelação.' },
  ],
  exercicios: [
    mc('A teoria do efeito único é de:', ['Poe', 'Joyce', 'Machado', 'Rosa'], 0, 'Conto.'),
    mc('Laços de família é de:', ['Clarice Lispector', 'Rachel de Queiroz', 'Cecília Meireles', 'Adélia Prado'], 0, '1960.'),
    mc('O romance sobre o amadurecimento de um jovem é romance de:', ['Formação', 'Cavalaria', 'Tese', 'Aventura'], 0, 'Tipo.'),
    mc('O termo epifania vem da:', ['Liturgia', 'Física', 'Economia', 'Química'], 0, 'Origem.'),
    mc('"A espingarda deve disparar" é conselho atribuído a:', ['Tchekhov', 'Poe', 'Machado', 'Dante'], 0, 'Economia.'),
    disc('Analise dois contos brasileiros quanto a narrador, efeito, epifania e não dito.', ['Conto 1', 'Conto 2', 'Comparação', 'Citações']),
  ],
  resumo: ['Romance: extensão e complexidade.', 'Conto: efeito único (Poe).', 'Machado, Rosa (1962), Clarice (1960).', 'Epifania.', 'Economia do conto.'],
  referencias: [
    { texto: 'Machado de Assis, Várias histórias (1896).' },
    { texto: 'João Guimarães Rosa, Primeiras estórias (1962).' },
    { texto: 'Clarice Lispector, Laços de família (1960).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos contos', 'Ler as fontes indicadas'],
  revisao: [['Efeito único', 'Poe.'], ['Terceira margem', 'Rosa.'], ['Epifania', 'Revelação.']],
  avancado: {
    texto: `<h3>Grande sertão: veredas</h3>
<p>Em Grande sertão: veredas (1956), o ex-jagunço Riobaldo narra, num longo monólogo a um interlocutor silencioso, sua vida no sertão, seu amor por Diadorim e a dúvida sobre ter feito pacto com o diabo ${tag('fato')}. A frase "o diabo na rua, no meio do redemoinho" e a pergunta pela existência do demônio atravessam o livro ${tag('fato')}. É lido como épico, romance de formação e meditação metafísica ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'João Guimarães Rosa, Grande sertão: veredas (1956).', }],
    exercicios: [
      mc('O narrador de Grande sertão: veredas é:', ['Diadorim', 'Riobaldo', 'Zé Bebelo', 'Hermógenes'], 1, 'Monólogo.'),
      mc('Uma questão central do livro é o:', ['Pacto com o diabo', 'Comércio', 'Futebol', 'Mar'], 0, 'Metafísica.'),
      mc('O livro é de:', ['1946', '1956', '1962', '1967'], 1, 'Rosa.'),
      disc('Discuta a pergunta de Riobaldo sobre a existência do diabo à luz da liberdade e da graça.', ['Passagens', 'Pergunta', 'Liberdade', 'Interpretação'])],
  },
}),

aula({
  id: 'lt4-3', titulo: 'Teatro: tragédia, comédia, auto e drama moderno', duracao: '150 min',
  aprendera: ['Distinguir tragédia, comédia e auto', 'Conhecer Gil Vicente e o auto medieval', 'Analisar o Auto da Compadecida', 'Ler o texto teatral considerando a encenação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O teatro é literatura escrita para ser encenada. Como ler uma peça, e que tradições moldaram o teatro em língua portuguesa?</p>
<h3>Tragédia e comédia</h3>
<p>A tragédia apresenta a queda de um herói por um erro, suscitando compaixão e temor; a comédia apresenta personagens comuns em situações que provocam riso e terminam bem ${tag('fato')}.</p>
<h3>O auto</h3>
<p>O auto é peça de origem medieval, muitas vezes religiosa e alegórica ${tag('fato')}. Gil Vicente, em Portugal, escreveu o Auto da barca do inferno (1517), em que almas de diferentes condições sociais são julgadas antes de embarcar para o céu ou o inferno ${tag('fato')}. No Brasil, José de Anchieta escreveu autos para a catequese ${tag('fato')}.</p>
<h3>Suassuna</h3>
<p>No Auto da Compadecida (1955), Ariano Suassuna une o cordel nordestino e a tradição do auto: João Grilo e Chicó enganam poderosos e, no julgamento final, Nossa Senhora intercede por eles diante de Cristo ${tag('fato')}. A peça mistura humor popular, crítica social e teologia da misericórdia ${tag('interpretacao')}.</p>
<h3>Drama moderno</h3>
<p>Nelson Rodrigues, com Vestido de noiva (1943), renovou o teatro brasileiro, alternando planos de realidade, memória e alucinação ${tag('fato')}.</p>
<h3>Ler teatro</h3>
<p>Ao ler uma peça, imagina-se a cena: rubricas (indicações do autor), entradas e saídas, silêncios, espaço do palco ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Auto', 'Peça medieval, frequentemente religiosa e alegórica.'],
    ['Comédia', 'Peça que provoca riso e termina bem.'],
    ['Rubrica', 'Indicação do autor sobre cena, gesto ou fala.'],
    ['Alegoria', 'Representação de ideias por personagens ou figuras.'],
    ['Cordel', 'Literatura popular nordestina em folhetos rimados.'],
  ],
  exemplos: `<p><strong>O julgamento da Compadecida:</strong> no fim da peça, o diabo acusa, Cristo — representado como homem negro, o "Manuel" — julga, e a Compadecida intercede lembrando a fraqueza humana. A cena traduz em linguagem popular a doutrina do juízo e da misericórdia, e faz rir e comover ao mesmo tempo.</p>`,
  contexto: `<p><strong>No mundo:</strong> os autos sacramentais espanhóis, como os de Calderón de la Barca, celebravam a Eucaristia no século XVII ${tag('fato')}. <strong>No Brasil:</strong> o Auto da Compadecida foi adaptado para televisão e cinema (2000) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o riso pode ser religioso', tag: 'argumento',
    premissas: ['O riso nasce do contraste entre o que se pretende e o que se é.', 'A fé cristã vê o homem como pequeno e amado, falho e redimível.', 'A comédia que ri da vaidade humana e termina em misericórdia expressa essa visão.'],
    conclusao: 'Logo, o riso pode servir à verdade religiosa, como no Auto da Compadecida.',
    nota: 'Dante chamou seu poema de "Comédia" porque termina bem, na visão de Deus.',
  },
  objecoes: [
    { objecao: 'Representar Cristo e Nossa Senhora numa comédia é desrespeito.', tag: 'debate',
      resposta: 'O teatro religioso medieval e popular sempre representou figuras sagradas com familiaridade, sem negar sua dignidade. Suassuna, católico, tratou o julgamento com reverência e humor. O critério é se a obra ridiculariza o sagrado ou ri da fraqueza humana diante dele.' },
  ],
  aplicacao: `<p>Leia o Auto da Compadecida (ou o Auto da barca do inferno) e analise a estrutura do julgamento, os tipos sociais, o humor e a teologia implícita, com citações.</p>`,
  fonte: {
    obra: 'Gil Vicente, Auto da barca do inferno (1517); Ariano Suassuna, Auto da Compadecida (1955)', link: null,
    orientacao: `<p>Compare os dois julgamentos: quem acusa, quem defende, que critérios decidem o destino das almas.</p>`,
  },
  perguntas: [
    { p: 'O que é um auto?', r: 'Peça de origem medieval, frequentemente religiosa e alegórica.' },
    { p: 'Quem intercede no julgamento do Auto da Compadecida?', r: 'Nossa Senhora, a Compadecida.' },
    { p: 'Que peça renovou o teatro brasileiro em 1943?', r: 'Vestido de noiva, de Nelson Rodrigues.' },
  ],
  exercicios: [
    mc('O Auto da barca do inferno é de:', ['Gil Vicente', 'Anchieta', 'Suassuna', 'Camões'], 0, '1517.'),
    mc('O Auto da Compadecida é de:', ['1517', '1943', '1955', '2000'], 2, 'Suassuna.'),
    mc('Indicações do autor sobre a cena são:', ['Rubricas', 'Rimas', 'Estrofes', 'Notas de rodapé'], 0, 'Teatro.'),
    mc('Anchieta escreveu autos para a:', ['Catequese', 'Corte', 'Universidade', 'Guerra'], 0, 'Brasil colonial.'),
    mc('Dante chamou seu poema de "Comédia" porque:', ['É engraçado', 'Termina bem', 'É curto', 'É teatral'], 1, 'Final.'),
    disc('Analise o julgamento do Auto da Compadecida ou da Barca do inferno.', ['Estrutura', 'Tipos sociais', 'Humor', 'Teologia']),
  ],
  resumo: ['Tragédia × comédia.', 'Auto: Gil Vicente (1517), Anchieta.', 'Suassuna (1955): humor e misericórdia.', 'Nelson Rodrigues (1943).', 'Ler imaginando a cena.'],
  referencias: [
    { texto: 'Gil Vicente, Auto da barca do inferno (1517).' },
    { texto: 'Ariano Suassuna, Auto da Compadecida (1955).' },
    { texto: 'Aristóteles, Poética.', livro: 'aristoteles-poetica' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da peça', 'Ler as fontes indicadas'],
  revisao: [['Auto', 'Alegoria religiosa.'], ['Compadecida', 'Misericórdia.'], ['Rubrica', 'Indicação.']],
  avancado: {
    texto: `<h3>Os mistérios e a liturgia</h3>
<p>O teatro medieval nasceu em parte da própria liturgia: diálogos como o Quem quaeritis ("Quem procurais?"), cantado na Páscoa entre os anjos e as mulheres no sepulcro, desenvolveram-se em dramas litúrgicos e, depois, em mistérios encenados nas praças ${tag('fato')}. A origem litúrgica explica o caráter sagrado de muito do teatro medieval ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Gil Vicente, Auto da barca do inferno (1517).' }],
    exercicios: [
      mc('O Quem quaeritis era cantado na:', ['Páscoa', 'Quaresma apenas', 'Festa profana', 'Corte'], 0, 'Sepulcro.'),
      mc('Os mistérios eram encenados nas:', ['Praças', 'Universidades', 'Prisões', 'Fábricas'], 0, 'Teatro medieval.'),
      mc('O drama litúrgico nasce da:', ['Liturgia', 'Tragédia grega apenas', 'Imprensa', 'Ópera'], 0, 'Origem.'),
      disc('Explique a relação entre liturgia e teatro medieval com um exemplo.', ['Origem', 'Exemplo', 'Desenvolvimento', 'Sentido'])],
  },
}),

aula({
  id: 'lt4-4', titulo: 'Literatura e fé: de Agostinho a Bernanos, Tolkien e Adélia Prado', duracao: '150 min',
  aprendera: ['Conhecer grandes obras literárias de inspiração cristã', 'Analisar a graça e o pecado na narrativa', 'Conhecer autores católicos brasileiros', 'Ler uma obra religiosa sem reduzi-la a mensagem'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como a fé cristã inspirou grandes obras literárias? E como escrever ou ler literatura religiosa sem cair no sermão disfarçado?</p>
<h3>Grandes obras</h3>
<p>As Confissões de Agostinho e a Divina Comédia são marcos ${tag('fato')}. Em Os irmãos Karamázov (1880), Dostoiévski confronta, nas figuras de Ivan e do starets Zósima, a revolta contra o mal e a resposta do amor ativo ${tag('fato')}. Georges Bernanos, em Diário de um pároco de aldeia (1936), narra a vida humilde de um jovem padre e termina com as palavras "Tudo é graça" ${tag('fato')}. J. R. R. Tolkien, católico, escreveu O Senhor dos Anéis (1954–1955), que ele próprio descreveu como obra fundamentalmente religiosa e católica ${tag('fato')}. Flannery O'Connor escreveu contos sobre a graça em situações violentas ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>Alphonsus de Guimaraens (simbolismo), Jorge de Lima e Murilo Mendes (poesia católica modernista), Ariano Suassuna e Adélia Prado deram expressão literária à fé ${tag('fato')}.</p>
<h3>Sem reduzir</h3>
<p>Grandes obras de fé não são sermões: representam a complexidade humana, o pecado e a dúvida, e deixam a graça agir na narrativa ${tag('interpretacao')}. Flannery O'Connor advertia contra a literatura "piedosa" que falsifica a realidade ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Graça', 'Dom gratuito de Deus que age na vida humana.'],
    ['Starets', 'Monge e guia espiritual na tradição russa.'],
    ['Literatura edificante', 'Literatura que visa explicitamente a edificação moral.'],
    ['Subcriação', 'Criação literária como imitação da criação divina (Tolkien).'],
    ['Simbolismo', 'Movimento poético de sugestão e musicalidade (fim do século XIX).'],
  ],
  exemplos: `<p><strong>O fim do pároco:</strong> o jovem padre de Bernanos morre doente, em casa de um amigo que abandonou o sacerdócio, sem poder receber a tempo os sacramentos de um padre. Diante da tristeza do amigo, diz apenas: "Que importa? Tudo é graça." A frase, preparada por todo o livro, resume a visão de que a graça age até no fracasso aparente.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Senhor dos Anéis está entre os livros mais lidos do século XX ${tag('fato')}. <strong>No Brasil:</strong> a poesia de Adélia Prado une o cotidiano doméstico mineiro e a experiência de Deus ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a boa literatura cristã não é sermão', tag: 'argumento',
    premissas: ['A literatura atua pela representação da vida, não pela exposição doutrinal.', 'A graça, na experiência humana, age em meio ao pecado, à dúvida e ao sofrimento.', 'Uma obra que esconde essa complexidade falsifica tanto a vida quanto a fé.'],
    conclusao: 'Logo, a boa literatura cristã representa a realidade inteira e deixa a graça aparecer nela.',
    nota: 'João Paulo II, na Carta aos artistas, convida os artistas a uma aliança fecunda entre arte e fé.',
  },
  objecoes: [
    { objecao: 'Obras de autores religiosos são propaganda.', tag: 'debate',
      resposta: 'Algumas o são, e são fracas como literatura. Mas Dante, Dostoiévski, Bernanos ou Tolkien são lidos por leitores de todas as crenças pela força artística e humana. A fé do autor não garante nem impede o valor literário.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: estudo comparado de duas obras de gêneros diferentes com o mesmo tema (por exemplo, a graça em Bernanos e em Adélia Prado, ou o mal em Dostoiévski e em Guimarães Rosa), com análise e contexto.</p>`,
  fonte: {
    obra: 'Georges Bernanos, Diário de um pároco de aldeia (1936); Fiódor Dostoiévski, Os irmãos Karamázov (1880), livros V e VI', link: null,
    orientacao: `<p>Em Bernanos, o final. Em Dostoiévski, o "Grande Inquisidor" e as palavras de Zósima.</p>`,
  },
  perguntas: [
    { p: 'Com que palavras termina o Diário de um pároco de aldeia?', r: '"Tudo é graça."' },
    { p: 'Como Tolkien descreveu O Senhor dos Anéis?', r: 'Como obra fundamentalmente religiosa e católica.' },
    { p: 'Cite dois poetas católicos brasileiros.', r: 'Por exemplo, Jorge de Lima e Murilo Mendes, ou Adélia Prado.' },
  ],
  exercicios: [
    mc('Os irmãos Karamázov é de:', ['Tolstói', 'Dostoiévski', 'Tchekhov', 'Gógol'], 1, '1880.'),
    mc('Diário de um pároco de aldeia é de:', ['Mauriac', 'Bernanos', 'Claudel', 'Péguy'], 1, '1936.'),
    mc('O Senhor dos Anéis foi publicado em:', ['1937', '1954–1955', '1965', '1977'], 1, 'Tolkien.'),
    mc('Alphonsus de Guimaraens pertence ao:', ['Simbolismo', 'Arcadismo', 'Modernismo', 'Barroco'], 0, 'Movimento.'),
    mc('Flannery O\'Connor advertia contra a literatura:', ['Realista', '"Piedosa" que falsifica a realidade', 'Fantástica', 'Breve'], 1, 'Interpretação.'),
    disc('Faça o estudo comparado de duas obras de gêneros diferentes com o mesmo tema.', ['Obras', 'Análise', 'Contexto', 'Comparação']),
  ],
  resumo: ['Agostinho, Dante.', 'Dostoiévski (1880), Bernanos (1936).', 'Tolkien (1954–1955), Flannery O\'Connor.', 'Brasil: Alphonsus, Jorge de Lima, Murilo Mendes, Suassuna, Adélia Prado.', 'Literatura de fé não é sermão.'],
  referencias: [
    { texto: 'Georges Bernanos, Diário de um pároco de aldeia (1936).' },
    { texto: 'Fiódor Dostoiévski, Os irmãos Karamázov (1880).' },
    { texto: 'João Paulo II, Carta aos artistas (1999).', livro: 'jp2-artistas' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o estudo comparado', 'Ler as fontes indicadas'],
  revisao: [['Tudo é graça', 'Bernanos.'], ['Zósima', 'Karamázov.'], ['Adélia Prado', 'Fé e cotidiano.']],
  avancado: {
    texto: `<h3>O Grande Inquisidor</h3>
<p>Em Os irmãos Karamázov, Ivan narra a parábola do Grande Inquisidor, que acusa Cristo de ter dado aos homens uma liberdade pesada demais e afirma que a Igreja os aliviou dela com pão, milagre e autoridade ${tag('fato')}. Cristo responde apenas com um beijo ${tag('fato')}. O episódio é lido como meditação sobre liberdade, poder e fé ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Fiódor Dostoiévski, Os irmãos Karamázov (1880), livro V, cap. 5.' }],
    exercicios: [
      mc('A parábola do Grande Inquisidor é narrada por:', ['Aliócha', 'Ivan', 'Dmítri', 'Zósima'], 1, 'Karamázov.'),
      mc('O Inquisidor acusa Cristo de ter dado aos homens:', ['Pão demais', 'Liberdade pesada demais', 'Riqueza', 'Leis'], 1, 'Tese.'),
      mc('Cristo responde com:', ['Um discurso', 'Um beijo', 'Um milagre', 'Silêncio irado'], 1, 'Final.'),
      disc('Interprete o Grande Inquisidor como meditação sobre liberdade e fé.', ['Argumento do Inquisidor', 'Resposta de Cristo', 'Liberdade', 'Interpretação'])],
  },
}),

avaliacao('lt4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre poesia lírica, romance e conto, teatro e literatura e fé, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia suas análises de poemas, contos e peça.</li><li>Releia seu estudo comparado.</li></ul>`,
[
  disc('Faça o estudo comparado de duas obras de gêneros diferentes com o mesmo tema, com análise formal, citações e contexto.', ['Obras', 'Análise formal', 'Contexto', 'Comparação']),
  disc('Analise um conto ou um poema de autor brasileiro mostrando como a forma (narrador, imagem, estrutura) produz o sentido.', ['Obra', 'Forma', 'Sentido', 'Citações']),
]),
];
