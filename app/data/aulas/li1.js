// Linguística I — linguagem, níveis de análise, fonética e métodos (etapas 1 a 3 do percurso de Linguística).
// Linguagem, língua e fala; descrição e norma; níveis de análise; fonética e transcrição; coleta de dados e comparação.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'li1-1', titulo: 'O que é linguagem e o que estuda a linguística', duracao: '150 min',
  aprendera: ['Distinguir linguagem, língua e fala', 'Distinguir descrição e norma', 'Explicar o signo linguístico em Saussure', 'Relacionar linguagem e natureza humana'],
  prereq: ['Degrau 0: método de estudo', 'Filosofia da linguagem (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Todos falamos, mas poucos sabem dizer o que é uma língua. Ela é um conjunto de regras da gramática escolar, um hábito social, uma faculdade da mente?</p>
<h3>Linguagem, língua e fala</h3>
<p>Linguagem é a capacidade humana de comunicar por signos; língua é um sistema particular, como o português; fala é o uso concreto de uma pessoa num momento ${tag('fato')}. Ferdinand de Saussure distinguiu a língua (langue), sistema social, e a fala (parole), ato individual (Curso de linguística geral, 1916) ${tag('fato')}.</p>
<h3>Descrição e norma</h3>
<p>A linguística é descritiva: registra como as pessoas efetivamente falam ${tag('fato')}. A gramática normativa prescreve formas recomendadas em contextos formais ${tag('fato')}. "Nós vai" é forma registrada no português popular; dizer que não é aceita na escrita formal é juízo normativo, não descrição ${tag('argumento')}.</p>
<h3>O signo</h3>
<p>Para Saussure, o signo linguístico une um conceito (significado) e uma imagem acústica (significante), e essa união é arbitrária: nada no som "árvore" exige o conceito de árvore ${tag('fato')}. No Crátilo, Platão já discutia se os nomes são naturais ou convencionais ${tag('fato')}.</p>
<h3>Linguagem e homem</h3>
<p>Aristóteles afirmou que só o homem, entre os animais, tem logos, a palavra que exprime o justo e o injusto (Política I) ${tag('fato')}. A tradição cristã vê na palavra humana um reflexo do Verbo divino (Jo 1,1) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Linguagem', 'Capacidade humana de comunicar por signos.'],
    ['Língua', 'Sistema particular de signos de uma comunidade.'],
    ['Fala', 'Uso concreto da língua por uma pessoa.'],
    ['Significante', 'Forma sonora ou escrita do signo.'],
    ['Significado', 'Conceito associado ao signo.'],
  ],
  exemplos: `<p><strong>Descrever ou corrigir:</strong> um linguista registra que, em muitas regiões, se diz "a gente vamos". Ele descreve quem fala assim, em que situações e com que regularidade. Um professor de redação ensina que, em textos formais, a concordância padrão é "a gente vai". As duas tarefas são legítimas e diferentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> estima-se que existam cerca de 7 mil línguas faladas hoje ${tag('interpretacao')}. <strong>No Brasil:</strong> além do português e da Libras, há centenas de línguas indígenas e línguas de imigração ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que descrever não é aprovar', tag: 'argumento',
    premissas: ['Descrever é dizer como algo é; prescrever é dizer como deve ser.', 'O linguista descreve formas usadas, sem julgar seu valor social.', 'A norma escolhe formas para certos usos (escrita formal, documentos).'],
    conclusao: 'Logo, descrição e norma são tarefas distintas, e confundi-las gera falsos debates.',
    nota: 'Conhecer a norma culta é direito de todos, porque abre acesso a espaços sociais.',
  },
  objecoes: [
    { objecao: 'Se a linguística aceita tudo, não existe erro de português.', tag: 'debate',
      resposta: 'Há "erros" em relação à norma de um gênero (uma petição, uma redação de vestibular) e formas que nenhum falante nativo usaria. A linguística não diz que tudo vale em qualquer contexto, mas que formas populares têm regras próprias. O debate é sobre como ensinar a norma sem desprezar os falantes.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: classifique dez afirmações sobre a língua (por exemplo, "o certo é dizer houveram", "no Nordeste se usa tu com verbo na 3ª pessoa") como descritivas ou normativas, justificando.</p>`,
  fonte: {
    obra: 'Ferdinand de Saussure, Curso de linguística geral (1916), introdução e primeira parte, cap. 1', link: null,
    orientacao: `<p>Identifique as distinções entre língua e fala e a definição do signo e de sua arbitrariedade.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre língua e fala em Saussure?', r: 'Língua é o sistema social; fala é o ato individual.' },
    { p: 'O que significa dizer que o signo é arbitrário?', r: 'Que não há relação natural entre o som e o conceito.' },
    { p: 'Qual a diferença entre linguística e gramática normativa?', r: 'A linguística descreve; a gramática normativa prescreve.' },
  ],
  exercicios: [
    mc('O Curso de linguística geral foi publicado em:', ['1857', '1916', '1957', '1970'], 1, 'Saussure.'),
    mc('"Em textos formais, use a gente vai" é afirmação:', ['Descritiva', 'Normativa', 'Fonética', 'Semântica'], 1, 'Prescrição.'),
    mc('A forma sonora do signo é o:', ['Significado', 'Significante', 'Referente', 'Morfema'], 1, 'Saussure.'),
    mc('O diálogo de Platão sobre a justeza dos nomes é o:', ['Mênon', 'Crátilo', 'Fédon', 'Timeu'], 1, 'Natureza ou convenção.'),
    mc('Para Aristóteles, só o homem tem:', ['Voz', 'Logos', 'Memória', 'Sentidos'], 1, 'Política I.'),
    disc('Classifique dez afirmações sobre a língua como descritivas ou normativas.', ['Afirmações', 'Classificação', 'Justificativa', 'Precisão']),
  ],
  resumo: ['Linguagem, língua, fala.', 'Descrição × norma.', 'Signo: significante + significado, arbitrário.', 'Crátilo: natureza ou convenção.', 'Logos e Verbo.'],
  referencias: [
    { texto: 'Ferdinand de Saussure, Curso de linguística geral (1916).' },
    { texto: 'Platão, Crátilo.', livro: 'platao-cratilo' },
    { texto: 'Marcos Bagno, Preconceito linguístico (1999).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação', 'Ler a fonte indicada'],
  revisao: [['Langue/parole', 'Saussure.'], ['Arbitrário', 'Signo.'], ['Descrever', 'Não é aprovar.']],
  avancado: {
    texto: `<h3>A dupla articulação</h3>
<p>André Martinet observou que as línguas humanas têm dupla articulação: os enunciados se dividem em unidades com sentido (morfemas) e estas em unidades sem sentido (fonemas) ${tag('fato')}. Com algumas dezenas de fonemas, formam-se milhares de palavras e infinitas frases ${tag('fato')}. Essa economia distingue a linguagem humana dos sistemas de comunicação animal conhecidos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'André Martinet, Elementos de linguística geral (1960).' }],
    exercicios: [
      mc('A dupla articulação é conceito de:', ['Martinet', 'Saussure', 'Chomsky', 'Platão'], 0, '1960.'),
      mc('Unidades sem sentido próprio são os:', ['Morfemas', 'Fonemas', 'Sintagmas', 'Textos'], 1, 'Segunda articulação.'),
      mc('A dupla articulação permite:', ['Poucas palavras', 'Infinitas frases com poucos elementos', 'Só sons', 'Nada'], 1, 'Economia.'),
      disc('Explique a dupla articulação com uma palavra do português.', ['Palavra', 'Morfemas', 'Fonemas', 'Economia'])],
  },
}),

aula({
  id: 'li1-2', titulo: 'Os níveis da língua: sons, palavras, frases, sentidos e usos', duracao: '150 min',
  aprendera: ['Distinguir fonética e fonologia', 'Segmentar palavras em morfemas', 'Reconhecer a estrutura sintática da frase', 'Distinguir semântica e pragmática'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Uma frase simples envolve sons, partes de palavras, ordem das palavras, sentido e intenção. Como separar esses níveis?</p>
<h3>Fonética e fonologia</h3>
<p>A fonética estuda os sons da fala como eventos físicos e articulatórios; a fonologia, os sons que distinguem significados numa língua ${tag('fato')}. /p/ e /b/ são fonemas distintos em português, porque "pato" e "bato" têm sentidos diferentes ${tag('fato')}.</p>
<h3>Morfologia</h3>
<p>A morfologia estuda a estrutura das palavras; o morfema é a menor unidade com sentido ${tag('fato')}. "Infelizmente" = in- (negação) + feliz + -mente (advérbio) ${tag('fato')}.</p>
<h3>Sintaxe</h3>
<p>A sintaxe estuda como as palavras se combinam em frases; "O menino viu o cão" e "O cão viu o menino" têm as mesmas palavras e sentidos diferentes por causa da ordem e das funções ${tag('fato')}.</p>
<h3>Semântica e pragmática</h3>
<p>A semântica estuda o sentido das expressões; a pragmática, o sentido no uso, conforme o contexto e a intenção ${tag('fato')}. "Você tem horas?" significa literalmente uma pergunta sobre posse de relógio, mas pragmaticamente é um pedido para dizer a hora ${tag('fato')}.</p>
<h3>Variação</h3>
<p>Todos os níveis variam conforme região, grupo social, situação e época ${tag('fato')}.</p>`,
  vocabulario: [
    ['Fonema', 'Unidade sonora que distingue significados.'],
    ['Morfema', 'Menor unidade com sentido.'],
    ['Sintaxe', 'Estudo da combinação das palavras em frases.'],
    ['Semântica', 'Estudo do sentido das expressões.'],
    ['Pragmática', 'Estudo do sentido no uso e no contexto.'],
  ],
  exemplos: `<p><strong>Uma frase, cinco níveis:</strong> "Os meninos chegaram cedo." Fonética: como cada som é pronunciado. Fonologia: /m/ e /n/ distinguem "mato" e "nato". Morfologia: menin-o-s (raiz, gênero, plural). Sintaxe: sujeito "os meninos", predicado "chegaram cedo". Pragmática: dita por uma mãe aflita, pode ser um alívio; por um professor irritado, uma ironia.</p>`,
  contexto: `<p><strong>No mundo:</strong> a distinção entre fonética e fonologia consolidou-se no Círculo Linguístico de Praga, nos anos 1920–1930 ${tag('fato')}. <strong>No Brasil:</strong> a Nomenclatura Gramatical Brasileira (1959) padronizou termos da gramática escolar ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o sentido não está só nas palavras', tag: 'argumento',
    premissas: ['A mesma frase pode servir a atos diferentes: perguntar, pedir, ironizar.', 'O ouvinte interpreta considerando contexto, intenção e conhecimento compartilhado.', 'Logo, entender exige mais que o dicionário e a gramática.'],
    conclusao: 'Logo, a pragmática é parte necessária do estudo da linguagem.',
    nota: 'Isso tem consequências para a interpretação de textos, inclusive bíblicos e jurídicos.',
  },
  objecoes: [
    { objecao: 'Gramática é só decorar regras; não há ciência nisso.', tag: 'argumento',
      resposta: 'A gramática escolar pode ser ensinada como decoreba, mas a análise linguística descobre regularidades em todos os níveis, testa hipóteses com dados e compara línguas. É um estudo rigoroso das estruturas de uma capacidade humana fundamental.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: glossário de 20 termos de linguística com um exemplo do português do Brasil para cada um.</p>`,
  fonte: {
    obra: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970), capítulos iniciais', link: null,
    orientacao: `<p>Observe como Mattoso Câmara define fonema e morfema e os aplica ao português.</p>`,
  },
  perguntas: [
    { p: 'Por que /p/ e /b/ são fonemas distintos em português?', r: 'Porque distinguem significados, como em pato e bato.' },
    { p: 'Quais os morfemas de "infelizmente"?', r: 'in- + feliz + -mente.' },
    { p: 'O que estuda a pragmática?', r: 'O sentido no uso, conforme o contexto e a intenção.' },
  ],
  exercicios: [
    mc('A menor unidade com sentido é o:', ['Fonema', 'Morfema', 'Sintagma', 'Texto'], 1, 'Morfologia.'),
    mc('"O cão viu o menino" × "O menino viu o cão" mostra a importância da:', ['Fonética', 'Sintaxe', 'Morfologia', 'Ortografia'], 1, 'Ordem e função.'),
    mc('"Você tem horas?" como pedido é fenômeno:', ['Fonológico', 'Pragmático', 'Morfológico', 'Ortográfico'], 1, 'Uso.'),
    mc('Os sons como eventos físicos são estudados pela:', ['Fonologia', 'Fonética', 'Semântica', 'Sintaxe'], 1, 'Articulação.'),
    mc('A Nomenclatura Gramatical Brasileira é de:', ['1916', '1959', '1988', '2009'], 1, 'Padronização.'),
    disc('Monte o glossário de 20 termos de linguística com exemplos do português do Brasil.', ['Termos', 'Definições', 'Exemplos', 'Precisão']),
  ],
  resumo: ['Fonética × fonologia.', 'Morfema: menor unidade com sentido.', 'Sintaxe: combinação.', 'Semântica × pragmática.', 'Variação em todos os níveis.'],
  referencias: [
    { texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' },
    { texto: 'Ferdinand de Saussure, Curso de linguística geral (1916).' },
    { texto: 'J. L. Austin, Quando dizer é fazer (1962).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler a fonte indicada'],
  revisao: [['Pato/bato', 'Fonemas.'], ['In-feliz-mente', 'Morfemas.'], ['Tem horas?', 'Pragmática.']],
  avancado: {
    texto: `<h3>Pares mínimos</h3>
<p>Para descobrir os fonemas de uma língua, procuram-se pares mínimos: palavras que diferem por um único som e têm sentidos diferentes, como "faca" e "vaca" ${tag('fato')}. Em português, "avó" e "avô" mostram que /ɔ/ (ó aberto) e /o/ (ô fechado) são fonemas distintos ${tag('fato')}. Em outras línguas, os mesmos sons podem não ter valor distintivo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' }],
    exercicios: [
      mc('"Faca" e "vaca" formam um:', ['Par mínimo', 'Sinônimo', 'Antônimo', 'Morfema'], 0, 'Fonologia.'),
      mc('"Avó" e "avô" mostram a oposição entre:', ['ó e ô', 'a e o', 'v e b', 'Nada'], 0, 'Vogais médias.'),
      mc('Um som com valor distintivo numa língua:', ['Tem em todas', 'Pode não ter em outra', 'Nunca muda', 'É sempre letra'], 1, 'Sistema.'),
      disc('Encontre cinco pares mínimos do português e indique os fonemas que opõem.', ['Pares', 'Fonemas', 'Explicação', 'Precisão'])],
  },
}),

aula({
  id: 'li1-3', titulo: 'Fonética e transcrição: como soa o português do Brasil', duracao: '150 min',
  aprendera: ['Descrever consoantes por ponto e modo de articulação', 'Conhecer as vogais orais e nasais do português', 'Usar símbolos básicos do Alfabeto Fonético Internacional', 'Reconhecer variações regionais de pronúncia'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A escrita engana: "tia" é pronunciada de modos diferentes no Rio e em Recife, e a letra "x" tem vários sons. Como registrar com precisão o que se ouve?</p>
<h3>Articulação</h3>
<p>As consoantes se descrevem pelo ponto de articulação (lábios, dentes, céu da boca), pelo modo (oclusiva, fricativa, nasal, lateral) e pela vibração das cordas vocais (surda ou sonora) ${tag('fato')}. /p/ é oclusiva bilabial surda; /b/, oclusiva bilabial sonora ${tag('fato')}.</p>
<h3>Vogais</h3>
<p>O português do Brasil tem, em posição tônica, sete vogais orais: /a/, /ɛ/ (é), /e/ (ê), /i/, /ɔ/ (ó), /o/ (ô), /u/ ${tag('fato')}. Tem também vogais nasais, como em "lã", "lindo", "som" ${tag('fato')}.</p>
<h3>O Alfabeto Fonético Internacional</h3>
<p>O AFI (IPA) atribui um símbolo a cada som, independentemente da ortografia; transcrições fonéticas vêm entre colchetes ${tag('fato')}. "Casa" pode ser transcrita [ˈkazɐ] ${tag('fato')}.</p>
<h3>Variação</h3>
<p>Em grande parte do Brasil, /t/ e /d/ antes de [i] são pronunciados como [tʃ] e [dʒ] ("tchia", "djia"); em outras regiões, não ${tag('fato')}. O "r" em final de sílaba varia entre vibrante, tepe, aspirado e retroflexo, conforme a região ${tag('fato')}. O Atlas Linguístico do Brasil documenta essas variações ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ponto de articulação', 'Lugar onde o som é produzido na boca.'],
    ['Modo de articulação', 'Forma como o ar é obstruído ou liberado.'],
    ['Consoante sonora', 'Produzida com vibração das cordas vocais.'],
    ['AFI', 'Alfabeto Fonético Internacional.'],
    ['Palatalização', 'Mudança de um som em direção ao palato, como t → tʃ.'],
  ],
  exemplos: `<p><strong>"Porta" em três cidades:</strong> em São Paulo capital, o "r" costuma ser um tepe ([ɾ]); no Rio de Janeiro, uma fricativa ([x] ou [χ]); no interior paulista, um "r" retroflexo. A escrita é a mesma; a fala, diferente. A transcrição fonética registra a diferença que a ortografia esconde.</p>`,
  contexto: `<p><strong>No mundo:</strong> o AFI foi criado pela Associação Fonética Internacional no fim do século XIX ${tag('fato')}. <strong>No Brasil:</strong> o projeto do Atlas Linguístico do Brasil (ALiB) publicou seus primeiros volumes em 2014 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a ortografia não basta para estudar a fala', tag: 'argumento',
    premissas: ['A ortografia é uma convenção estável que não acompanha toda variação de pronúncia.', 'Uma mesma letra representa sons diferentes, e um mesmo som pode ser grafado de vários modos.', 'Para estudar a fala real, é preciso um sistema que registre sons, não letras.'],
    conclusao: 'Logo, a transcrição fonética é instrumento indispensável da linguística.',
    nota: 'A ortografia continua necessária para a escrita comum; são instrumentos diferentes.',
  },
  objecoes: [
    { objecao: 'Existe uma pronúncia "certa" do português, e as outras são erradas.', tag: 'debate',
      resposta: 'Há pronúncias de prestígio em certos contextos (como no rádio e na televisão), mas não há uma pronúncia natural mais correta: todas as variedades regionais têm sistemas regulares. O preconceito contra sotaques é social, não linguístico.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: grave (com autorização) um trecho curto de fala espontânea, transcreva-o ortográfica e foneticamente (pelo menos dez palavras) e identifique três fenômenos de pronúncia.</p>`,
  fonte: {
    obra: 'Associação Fonética Internacional, tabela do Alfabeto Fonético Internacional', link: null,
    orientacao: `<p>Localize na tabela as consoantes do português e os símbolos das vogais orais.</p>`,
  },
  perguntas: [
    { p: 'Como se descreve /b/?', r: 'Oclusiva bilabial sonora.' },
    { p: 'Quantas vogais orais tônicas tem o português do Brasil?', r: 'Sete.' },
    { p: 'O que é palatalização de /t/ antes de [i]?', r: 'A pronúncia [tʃ], como em "tchia".' },
  ],
  exercicios: [
    mc('/p/ e /b/ diferem em:', ['Ponto', 'Modo', 'Sonoridade', 'Nada'], 2, 'Cordas vocais.'),
    mc('Transcrições fonéticas vêm entre:', ['Aspas', 'Colchetes', 'Parênteses', 'Chaves'], 1, 'Convenção.'),
    mc('O Atlas Linguístico do Brasil publicou os primeiros volumes em:', ['1959', '1988', '2014', '2022'], 2, 'ALiB.'),
    mc('Vogal nasal aparece em:', ['Casa', 'Lã', 'Pé', 'Bola'], 1, 'Nasalidade.'),
    mc('O "r" em final de sílaba no Brasil:', ['É igual em todo lugar', 'Varia conforme a região', 'Não existe', 'É sempre mudo'], 1, 'Variação.'),
    disc('Grave, transcreva e analise três fenômenos de pronúncia de um trecho de fala espontânea.', ['Gravação autorizada', 'Transcrição', 'Fenômenos', 'Explicação']),
  ],
  resumo: ['Ponto, modo, sonoridade.', 'Sete vogais orais tônicas; vogais nasais.', 'AFI entre colchetes.', 'Palatalização; variação do "r".', 'ALiB (2014).'],
  referencias: [
    { texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' },
    { texto: 'Associação Fonética Internacional, Handbook of the International Phonetic Association (1999).' },
    { texto: 'Projeto ALiB, Atlas Linguístico do Brasil (2014).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a transcrição', 'Consultar a fonte indicada'],
  revisao: [['Sonora', 'Cordas vibram.'], ['Sete vogais', 'Orais tônicas.'], ['[tʃ]', 'Palatalização.']],
  avancado: {
    texto: `<h3>Neutralização das vogais átonas</h3>
<p>Em posição átona final, muitas variedades do português do Brasil reduzem as vogais: "leite" soa [ˈlejtʃi] e "carro" soa [ˈkahu] ou semelhante ${tag('fato')}. As sete vogais tônicas reduzem-se a menos oposições em posição átona, fenômeno chamado neutralização ${tag('fato')}. Mattoso Câmara descreveu essa redução no sistema vocálico ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' }],
    exercicios: [
      mc('Em posição átona final, muitas variedades reduzem as:', ['Consoantes', 'Vogais', 'Sílabas', 'Palavras'], 1, 'Neutralização.'),
      mc('"Leite" pronunciado com [i] final mostra:', ['Neutralização e palatalização', 'Erro', 'Nasalização', 'Nada'], 0, 'Fenômenos.'),
      mc('Quem descreveu o sistema vocálico do português foi:', ['Mattoso Câmara', 'Saussure', 'Chomsky', 'Anchieta'], 0, 'Estrutura.'),
      disc('Transcreva cinco palavras terminadas em -e e -o e descreva as reduções vocálicas.', ['Palavras', 'Transcrição', 'Reduções', 'Variação'])],
  },
}),

aula({
  id: 'li1-4', titulo: 'Métodos: corpus, coleta ética e comparação entre línguas', duracao: '150 min',
  aprendera: ['Planejar a coleta de dados linguísticos', 'Respeitar a ética da coleta', 'Usar corpora e frequências', 'Comparar línguas e identificar cognatos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Afirmações sobre a língua ("ninguém mais usa o pronome vós", "os jovens falam pior") precisam de dados. Como obtê-los?</p>
<h3>Coleta de dados</h3>
<p>Dados linguísticos vêm de gravações de fala espontânea, entrevistas, questionários, textos escritos e julgamentos de falantes ${tag('fato')}. A coleta deve registrar quem fala (idade, região, escolaridade) e a situação ${tag('fato')}.</p>
<h3>Ética</h3>
<p>Gravar pessoas exige consentimento informado; com menores, também autorização dos responsáveis; os dados devem ser anonimizados ao publicar ${tag('fato')}.</p>
<h3>Corpus</h3>
<p>Um corpus é uma coleção organizada de textos ou falas usada para pesquisa ${tag('fato')}. Contar frequências num corpus mostra, por exemplo, quanto "a gente" substituiu "nós" na fala ${tag('fato')}. O projeto NURC (Norma Urbana Culta), iniciado nos anos 1970, gravou a fala culta de cinco capitais brasileiras ${tag('fato')}.</p>
<h3>Comparação</h3>
<p>Palavras de línguas diferentes com origem comum são cognatas: "pai", "padre" (espanhol), "père" (francês) vêm do latim pater ${tag('fato')}. A comparação sistemática de correspondências sonoras permitiu reconstruir parentescos, como o da família indo-europeia ${tag('fato')}. A lei de Grimm descreve correspondências regulares, como p latino ↔ f germânico (pater ↔ father) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Corpus', 'Coleção organizada de textos ou falas para pesquisa.'],
    ['Consentimento informado', 'Concordância esclarecida de quem é gravado.'],
    ['Anonimização', 'Retirada de dados que identificam a pessoa.'],
    ['Cognato', 'Palavra de origem comum em línguas diferentes.'],
    ['Lei de Grimm', 'Correspondências sonoras regulares entre o germânico e outras línguas indo-europeias.'],
  ],
  exemplos: `<p><strong>"Nós" e "a gente":</strong> numa gravação de 30 minutos de conversa entre amigos, contam-se 40 ocorrências de "a gente" e 5 de "nós". Numa entrevista formal com as mesmas pessoas, a proporção muda. Os números mostram variação por situação — dado que nenhuma impressão substitui.</p>`,
  contexto: `<p><strong>No mundo:</strong> grandes corpora eletrônicos permitem estudar milhões de palavras ${tag('fato')}. <strong>No Brasil:</strong> o projeto NURC gravou fala culta em Recife, Salvador, Rio de Janeiro, São Paulo e Porto Alegre ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que afirmações sobre a língua precisam de dados', tag: 'argumento',
    premissas: ['Nossa percepção da própria fala é imprecisa.', 'Impressões sobre "como os outros falam" sofrem de preconceito e de exemplos marcantes.', 'Contagens em dados reais corrigem essas distorções.'],
    conclusao: 'Logo, afirmações sobre uso linguístico devem apoiar-se em dados coletados com método.',
    nota: 'É o mesmo princípio estudado em Estatística: impressão não substitui contagem.',
  },
  objecoes: [
    { objecao: 'Semelhança de som prova parentesco entre línguas.', tag: 'debate',
      resposta: 'Semelhanças isoladas podem ser coincidência ou empréstimo. O método comparativo exige correspondências regulares em muitas palavras de vocabulário básico. Por isso propostas de parentesco baseadas em poucas semelhanças são vistas com cautela.' },
  ],
  aplicacao: `<p>Planeje uma pequena coleta: escolha um fenômeno (por exemplo, "nós" × "a gente" ou "tu" × "você"), defina informantes, situação, termo de consentimento e forma de contagem.</p>`,
  fonte: {
    obra: 'Ferdinand de Saussure, Curso de linguística geral (1916), parte sobre linguística diacrônica', link: null,
    orientacao: `<p>Observe a distinção entre sincronia e diacronia e o papel das correspondências fonéticas.</p>`,
  },
  perguntas: [
    { p: 'O que é um corpus?', r: 'Uma coleção organizada de textos ou falas para pesquisa.' },
    { p: 'O que exige a gravação de pessoas?', r: 'Consentimento informado e anonimização ao publicar.' },
    { p: 'De que palavra latina vêm "pai", "padre" e "père"?', r: 'De pater.' },
  ],
  exercicios: [
    mc('O projeto NURC gravou a fala de:', ['Duas capitais', 'Cinco capitais', 'Todo o interior', 'Nenhuma'], 1, 'Norma urbana culta.'),
    mc('Pater ↔ father exemplifica a:', ['Lei de Grimm', 'Lei de Ohm', 'Regra de Merton', 'Lei de Hooke'], 0, 'Correspondência.'),
    mc('Para publicar dados de fala, deve-se:', ['Mostrar nomes', 'Anonimizar', 'Inventar', 'Nada'], 1, 'Ética.'),
    mc('Cognatos são palavras de:', ['Mesmo som por acaso', 'Origem comum', 'Sentido oposto', 'Mesma escrita'], 1, 'Parentesco.'),
    mc('Parentesco entre línguas exige:', ['Uma semelhança', 'Correspondências regulares', 'Mesmo país', 'Mesma religião'], 1, 'Método comparativo.'),
    disc('Planeje uma coleta sobre um fenômeno de variação, com informantes, consentimento e contagem.', ['Fenômeno', 'Informantes', 'Consentimento', 'Contagem']),
  ],
  resumo: ['Dados: gravação, entrevista, textos.', 'Consentimento e anonimização.', 'Corpus e frequências; NURC.', 'Cognatos; lei de Grimm.', 'Dados > impressões.'],
  referencias: [
    { texto: 'Ferdinand de Saussure, Curso de linguística geral (1916).' },
    { texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de coleta', 'Ler a fonte indicada'],
  revisao: [['Corpus', 'Coleção.'], ['Consentimento', 'Ética.'], ['Grimm', 'p ↔ f.']],
  avancado: {
    texto: `<h3>Do latim ao português</h3>
<p>O português vem do latim falado na Península Ibérica ${tag('fato')}. Mudanças regulares explicam formas atuais: o -l- entre vogais caiu (dolore → dor), o -n- entre vogais caiu nasalizando (luna → lua, com nasalização antiga), e pl- inicial virou ch- (plorare → chorar) ${tag('fato')}. Essas regularidades permitem prever e explicar formas ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Joaquim Mattoso Câmara Jr., História e estrutura da língua portuguesa (1975).' }],
    exercicios: [
      mc('Plorare → chorar mostra a mudança:', ['pl- → ch-', 'l → r', 'o → u', 'Nada'], 0, 'Regularidade.'),
      mc('Dolore → dor mostra a queda de:', ['-l- entre vogais', '-d- inicial', '-r final', 'Nada'], 0, 'Lenição.'),
      mc('O português vem do latim:', ['Clássico escrito', 'Falado', 'Grego', 'Árabe'], 1, 'Latim vulgar.'),
      disc('Explique três mudanças do latim ao português com exemplos.', ['Mudanças', 'Exemplos', 'Regularidade', 'Fontes'])],
  },
}),

avaliacao('li1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre linguagem, níveis de análise, fonética e métodos, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário.</li><li>Releia sua transcrição e seu plano de coleta.</li></ul>`,
[
  disc('Analise a frase "A gente chegamos tarde ontem" em todos os níveis (fonético, morfológico, sintático, semântico e pragmático), distinguindo descrição e norma.', ['Níveis', 'Precisão', 'Descrição e norma', 'Terminologia']),
  disc('Apresente a transcrição de um trecho de fala que você gravou, com três fenômenos identificados e os cuidados éticos tomados.', ['Transcrição', 'Fenômenos', 'Ética', 'Método']),
]),
];
