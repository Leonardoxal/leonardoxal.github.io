// Simbologia I — o signo e as teorias do signo (itens 1 a 4 da trilha de Simbologia).
// Fundamentos, história da semiótica, Peirce e Saussure. Distingue sempre teoria, fato histórico e interpretação.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'sb1-1', titulo: 'Fundamentos: signo, símbolo, ícone, índice e sinal', duracao: '120 min',
  aprendera: ['Definir signo e distinguir significante, significado e referente', 'Distinguir signos naturais e convencionais', 'Classificar exemplos como ícone, índice, símbolo ou sinal', 'Distinguir denotação e conotação'],
  prereq: ['Degrau de lógica (termos e definições)', 'Introdução à filosofia'],
  explicacao: `
<h3>O problema</h3>
<p>Fumaça indica fogo; a palavra "fogo" também. Um retrato mostra uma pessoa; a cruz lembra a Paixão. Todos "remetem a outra coisa", mas não do mesmo modo. Sem distinguir esses modos, a interpretação de símbolos vira adivinhação.</p>
<h3>Signo</h3>
<p>A tradição escolástica resumiu: signo é "algo que está no lugar de outra coisa" (<em>aliquid stat pro aliquo</em>) para alguém ${tag('fato')}. Santo Agostinho definiu o signo como algo que, além da forma que oferece aos sentidos, faz vir ao pensamento outra coisa (<em>A doutrina cristã</em>, II, 1) ${tag('fato')}.</p>
<h3>Natural e convencional</h3>
<p>Agostinho distinguiu os signos <strong>naturais</strong>, que significam sem intenção de significar (a fumaça indica o fogo), dos signos <strong>dados</strong> ou convencionais, que alguém usa para comunicar (as palavras) ${tag('fato')}.</p>
<h3>Ícone, índice, símbolo, sinal</h3>
<ul>
<li><strong>Ícone</strong>: significa por semelhança (retrato, mapa).</li>
<li><strong>Índice</strong>: significa por conexão real, de causa ou contiguidade (fumaça, pegada, febre).</li>
<li><strong>Símbolo</strong> (no sentido técnico de Peirce): significa por convenção ou hábito (palavra, bandeira) ${tag('fato')}.</li>
<li><strong>Sinal</strong>: signo que provoca uma ação ou reação (sirene, semáforo) ${tag('interpretacao')}.</li>
</ul>
<p>Atenção: no uso religioso e literário, "símbolo" tem um sentido mais rico — algo que, por semelhança e tradição, abre a uma realidade que o ultrapassa (a água no Batismo). O Catecismo fala de "sinais e símbolos" na liturgia (CIC 1145–1152) ${tag('doutrina')}. Este curso sempre indica em que sentido usa o termo.</p>
<h3>Denotação e conotação</h3>
<p><strong>Denotação</strong> é o sentido literal e estável; <strong>conotação</strong>, os sentidos associados num contexto ("rosa" denota a flor; pode conotar amor, juventude) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Signo', 'Algo que está no lugar de outra coisa para alguém.'],
    ['Signo natural', 'Significa sem intenção (fumaça indica fogo).'],
    ['Signo convencional', 'Usado por alguém para comunicar (palavra).'],
    ['Ícone', 'Signo por semelhança.'],
    ['Índice', 'Signo por conexão real.'],
    ['Símbolo (técnico)', 'Signo por convenção ou hábito.'],
    ['Conotação', 'Sentido associado num contexto, além do literal.'],
  ],
  exemplos: `<p><strong>Uma placa de "curva perigosa":</strong> o desenho da curva é icônico (parece a estrada); a cor e a forma triangular de advertência são convencionais (definidas pela regulamentação de trânsito); a placa como um todo funciona como sinal (provoca a redução de velocidade). Um mesmo objeto pode combinar modos de significar.</p>`,
  contexto: `<p><strong>No mundo:</strong> sinais de trânsito, ícones de aplicativos e emojis tornaram a classificação dos signos questão prática de projeto. <strong>No Brasil:</strong> o Código de Trânsito Brasileiro (Lei nº 9.503, de 1997) e as resoluções do Contran padronizam os sinais viários ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a fumaça é índice e não símbolo', tag: 'argumento',
    premissas: ['O índice significa por conexão real com o que significa.', 'A fumaça é efeito físico do fogo; significa porque está causalmente ligada a ele.', 'Nenhuma convenção é necessária para que a fumaça indique o fogo.'],
    conclusao: 'Logo, a fumaça é índice (signo natural), não símbolo no sentido técnico.',
    nota: 'Uma fumaça usada como sinal combinado (fumaça branca na eleição do papa) passa a funcionar também como signo convencional.',
  },
  objecoes: [
    { objecao: 'Todo signo é convencional; até a fumaça só significa fogo porque aprendemos.', tag: 'debate',
      resposta: 'Aprender a ler um índice não o torna convencional: a conexão entre fumaça e fogo existe antes de qualquer acordo. O que é aprendido é a interpretação; a relação significante é real. É a distinção agostiniana entre signos naturais e dados.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: classifique 20 exemplos (fumaça, palavra "casa", bandeira do Brasil, retrato, cruz, pegada, semáforo, mapa, febre, aliança de casamento, sirene, emoji, brasão, termômetro, fotografia, aplauso, sino, placa de "pare", gráfico, hóstia consagrada) e justifique cada classificação. Para a hóstia, indique por que ela não se reduz a nenhuma dessas categorias segundo a fé católica (CIC 1374).</p>`,
  fonte: {
    obra: 'Santo Agostinho, A doutrina cristã, livro II, caps. 1–3', link: null,
    orientacao: `<p>Localize a definição de signo e a distinção entre signos naturais e dados. Identifique os exemplos que Agostinho usa e verifique se a classificação de hoje (índice, símbolo) corresponde à dele.</p>`,
  },
  perguntas: [
    { p: 'Como Agostinho define o signo?', r: 'Algo que, além da forma que oferece aos sentidos, faz vir ao pensamento outra coisa.' },
    { p: 'Qual a diferença entre ícone e índice?', r: 'O ícone significa por semelhança; o índice, por conexão real.' },
    { p: 'O que é conotação?', r: 'O sentido associado num contexto, além do literal.' },
  ],
  exercicios: [
    mc('Uma pegada na areia é:', ['Ícone', 'Índice', 'Símbolo convencional', 'Sinal sonoro'], 1, 'Conexão real com o pé que a deixou.'),
    mc('Um mapa é principalmente:', ['Índice', 'Ícone', 'Sinal', 'Conotação'], 1, 'Semelhança de relações espaciais.'),
    mc('A palavra "árvore" é, em Peirce:', ['Ícone', 'Índice', 'Símbolo', 'Sintoma'], 2, 'Convenção.'),
    mc('Para Agostinho, a fumaça que indica o fogo é signo:', ['Dado', 'Natural', 'Litúrgico', 'Arbitrário'], 1, 'Significa sem intenção.'),
    mc('"Rosa" significando amor é exemplo de:', ['Denotação', 'Conotação', 'Índice', 'Sinal'], 1, 'Sentido associado.'),
    disc('Entregue a classificação justificada dos 20 exemplos do exercício da etapa, usando o vocabulário técnico.', ['20 exemplos classificados', 'Justificativa com o vocabulário', 'Casos mistos reconhecidos', 'Distinção técnica x religiosa']),
  ],
  resumo: ['Signo: algo no lugar de outra coisa para alguém.', 'Agostinho: signos naturais e dados.', 'Ícone (semelhança), índice (conexão), símbolo (convenção), sinal (ação).', 'Sentido religioso de símbolo é mais rico.', 'Denotação e conotação.'],
  referencias: [
    { texto: 'Santo Agostinho, A doutrina cristã (397–426), livro II.', livro: 'agostinho-doutrina-crista' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1145–1152.', livro: 'cic' },
    { texto: 'Umberto Eco, Tratado geral de semiótica (1975).' },
    { texto: 'Lúcia Santaella, O que é semiótica (1983).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação dos 20 exemplos', 'Ler o livro II de A doutrina cristã, caps. 1–3'],
  revisao: [['Ícone', 'Semelhança.'], ['Índice', 'Conexão real.'], ['Símbolo', 'Convenção.']],
  avancado: {
    texto: `<h3>Signo formal e instrumental</h3>
<p>João de Santo Tomás (João Poinsot), no <em>Tratado dos signos</em> (1632), distinguiu o signo <strong>instrumental</strong>, que é conhecido primeiro e leva a outra coisa (a palavra escrita), do signo <strong>formal</strong>, que leva a outra coisa sem ser primeiro conhecido como objeto (o conceito) ${tag('fato')}. Para a tradição tomista, o conceito é signo formal da coisa ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'João de Santo Tomás (João Poinsot), Tratado dos signos (1632).' }],
    exercicios: [
      mc('Para Poinsot, o conceito é signo:', ['Instrumental', 'Formal', 'Natural apenas', 'Convencional'], 1, 'Leva à coisa sem ser conhecido primeiro.'),
      mc('A palavra escrita é signo:', ['Formal', 'Instrumental', 'Icônico', 'Indicial'], 1, 'Vista primeiro, leva a outra coisa.'),
      mc('O Tratado dos signos é de:', ['1270', '1632', '1690', '1916'], 1, 'João de Santo Tomás.'),
      disc('Explique a distinção entre signo formal e instrumental e por que ela importa para o realismo do conhecimento.', ['Definições', 'Exemplos', 'Relação com o realismo', 'Conclusão'])],
  },
}),

aula({
  id: 'sb1-2', titulo: 'História da teoria dos signos: de Agostinho a Eco', duracao: '150 min',
  aprendera: ['Situar os grandes marcos da teoria do signo', 'Explicar os modos de significar da escolástica', 'Explicar a origem do termo "semiótica" em Locke', 'Montar a linha do tempo da etapa com fontes primárias'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A semiótica parece ciência do século XX, mas a reflexão sobre o signo é antiga e passa pela teologia cristã. Conhecer essa história evita reinventar distinções e permite ler as teorias modernas com critério.</p>
<h3>Antiguidade e Agostinho</h3>
<p>Os estoicos já distinguiam o significante, o significado e o objeto ${tag('fato')}. Agostinho, em <em>A doutrina cristã</em> (397–426), fez do signo o instrumento para interpretar a Escritura: "toda doutrina é de coisas ou de signos" ${tag('fato')}.</p>
<h3>Escolástica</h3>
<p>Os gramáticos especulativos ("modistas") estudaram os <em>modos de significar</em>: como as palavras significam as coisas segundo modos de ser e de entender ${tag('fato')}. A <em>Gramática especulativa</em> de Tomás de Erfurt (c. 1300) foi por muito tempo atribuída a Duns Escoto; Martin Grabmann demonstrou a autoria correta no início do século XX ${tag('fato')}. João de Santo Tomás sistematizou a doutrina do signo em 1632 ${tag('fato')}.</p>
<h3>Locke</h3>
<p>No <em>Ensaio sobre o entendimento humano</em> (1690), livro IV, cap. 21, John Locke chamou de <em>semiotiké</em> a "doutrina dos signos", uma das três partes da ciência ${tag('fato')}.</p>
<h3>Século XX</h3>
<p>Charles S. Peirce desenvolveu uma teoria geral dos signos (semiótica); Ferdinand de Saussure propôs uma ciência dos signos na vida social (semiologia), no <em>Curso de linguística geral</em>, publicado postumamente em 1916 por seus alunos ${tag('fato')}. Umberto Eco, no <em>Tratado geral de semiótica</em> (1975), procurou unificar as tradições ${tag('fato')}. No Brasil, Lúcia Santaella difundiu a semiótica peirceana ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Semiótica', 'Teoria geral dos signos (termo de Locke e Peirce).'],
    ['Semiologia', 'Ciência dos signos na vida social (Saussure).'],
    ['Modistas', 'Gramáticos escolásticos dos modos de significar.'],
    ['Modos de significar', 'Maneiras pelas quais as palavras significam as coisas.'],
    ['Gramática especulativa', 'Obra de Tomás de Erfurt (c. 1300).'],
  ],
  exemplos: `<p><strong>Uma atribuição corrigida:</strong> durante séculos, a Gramática especulativa circulou como obra de Duns Escoto, e até Heidegger escreveu sua tese de habilitação (1915) sobre ela com essa atribuição. A pesquisa de Grabmann mostrou que o autor era Tomás de Erfurt. Exemplo de como a história das ideias depende da crítica de fontes (aula h1-3).</p>`,
  contexto: `<p><strong>No mundo:</strong> a semiótica tornou-se disciplina universitária nas décadas de 1960 e 1970. <strong>No Brasil:</strong> há programas de pós-graduação em comunicação e semiótica, como o da PUC de São Paulo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a teoria do signo nasceu ligada à interpretação da Escritura', tag: 'argumento',
    premissas: ['A Escritura é texto: chega ao leitor por signos.', 'Para interpretá-la corretamente, é preciso saber como os signos significam e onde podem enganar.', 'Agostinho escreveu A doutrina cristã para formar intérpretes da Escritura.'],
    conclusao: 'Logo, a primeira grande teoria cristã do signo nasceu como instrumento da exegese.',
    nota: 'Liga esta trilha ao módulo de Bíblia e interpretação simbólica (item 6).',
  },
  objecoes: [
    { objecao: 'A semiótica moderna nada deve à escolástica.', tag: 'debate',
      resposta: 'Peirce leu e citou os escolásticos, especialmente Duns Escoto, e Poinsot antecipou distinções retomadas no século XX. Pode-se discutir o grau da influência, mas não a negar por completo.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: uma linha do tempo da teoria do signo com sete marcos (estoicos, Agostinho, modistas, Poinsot, Locke, Peirce, Saussure) e uma fonte primária para cada época, com autor, obra, data e tese.</p>`,
  fonte: {
    obra: 'John Locke, Ensaio sobre o entendimento humano (1690), livro IV, cap. 21', link: null,
    orientacao: `<p>Leia o capítulo final do Ensaio. Identifique as três partes da ciência e a definição de semiótica. Compare com Agostinho.</p>`,
  },
  perguntas: [
    { p: 'Quem criou o termo "semiótica" no sentido moderno?', r: 'John Locke, no Ensaio (1690), livro IV, cap. 21.' },
    { p: 'Quem é o autor da Gramática especulativa?', r: 'Tomás de Erfurt, embora tenha sido atribuída a Duns Escoto.' },
    { p: 'Quando foi publicado o Curso de linguística geral?', r: 'Em 1916, postumamente.' },
  ],
  exercicios: [
    mc('"Toda doutrina é de coisas ou de signos" é de:', ['Locke', 'Agostinho', 'Peirce', 'Saussure'], 1, 'A doutrina cristã.'),
    mc('A Gramática especulativa é de:', ['Duns Escoto', 'Tomás de Erfurt', 'João de Santo Tomás', 'Boécio'], 1, 'Atribuição corrigida por Grabmann.'),
    mc('O Ensaio de Locke é de:', ['1632', '1690', '1781', '1916'], 1, 'Livro IV, cap. 21.'),
    mc('O Tratado geral de semiótica é de:', ['Barthes', 'Eco', 'Peirce', 'Santaella'], 1, '1975.'),
    mc('"Semiologia" é o termo de:', ['Peirce', 'Saussure', 'Locke', 'Agostinho'], 1, 'Vida dos signos na sociedade.'),
    disc('Entregue a linha do tempo da etapa: sete marcos com autor, obra, data, tese e uma fonte primária por época.', ['Sete marcos', 'Datas corretas', 'Teses expostas', 'Fontes primárias indicadas']),
  ],
  resumo: ['Estoicos: significante, significado, objeto.', 'Agostinho: signo e exegese.', 'Modistas; Tomás de Erfurt (c. 1300); Poinsot (1632).', 'Locke (1690): semiotiké.', 'Peirce, Saussure (1916), Eco (1975).'],
  referencias: [
    { texto: 'Santo Agostinho, A doutrina cristã (397–426).', livro: 'agostinho-doutrina-crista' },
    { texto: 'John Locke, Ensaio sobre o entendimento humano (1690).' },
    { texto: 'Umberto Eco, Tratado geral de semiótica (1975).' },
    { texto: 'Lúcia Santaella, O que é semiótica (1983).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a linha do tempo', 'Ler o cap. 21 do livro IV do Ensaio'],
  revisao: [['Locke', 'Semiotiké, 1690.'], ['Erfurt', 'Gramática especulativa.'], ['Saussure', 'Curso, 1916.']],
  avancado: {
    texto: `<h3>John Deely</h3>
<p>O filósofo norte-americano John Deely defendeu, em <em>Four Ages of Understanding</em> (2001), que Poinsot é elo decisivo entre a semiótica escolástica e a contemporânea ${tag('interpretacao')}.</p>
<h3>Os estoicos</h3>
<p>A distinção estoica entre o que significa, o que é significado (o <em>lektón</em>) e o objeto é transmitida sobretudo por Sexto Empírico ${tag('fato')}.</p>`,
    leituras: [{ texto: 'John Deely, Four Ages of Understanding (2001).' }],
    exercicios: [
      mc('O lektón estoico é:', ['O som', 'O que é significado', 'O objeto', 'A escrita'], 1, 'Conteúdo significado.'),
      mc('A doutrina estoica do signo é transmitida sobretudo por:', ['Agostinho', 'Sexto Empírico', 'Locke', 'Eco'], 1, 'Fonte antiga.'),
      mc('John Deely destacou o papel de:', ['Saussure', 'Poinsot', 'Barthes', 'Locke apenas'], 1, 'Elo entre escolástica e semiótica moderna.'),
      disc('Avalie a tese de Deely sobre Poinsot: o que ela afirma, que evidência usa e uma objeção.', ['Tese', 'Evidência', 'Objeção', 'Conclusão'])],
  },
}),

aula({
  id: 'sb1-3', titulo: 'Charles Sanders Peirce: signo, objeto e interpretante', duracao: '150 min',
  aprendera: ['Explicar a tríade signo, objeto e interpretante', 'Aplicar a divisão ícone, índice e símbolo', 'Explicar a semiose e a abdução', 'Analisar uma placa e um retrato pela tríade'],
  prereq: ['Aulas anteriores do módulo', 'Lógica: dedução e indução'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o mesmo signo pode ser entendido de modos diferentes, e como a interpretação avança? Charles Sanders Peirce (1839–1914), lógico e filósofo norte-americano, respondeu com uma teoria triádica do signo ${tag('fato')}.</p>
<h3>A tríade</h3>
<p>Para Peirce, todo signo envolve três termos: o <strong>signo</strong> (ou representâmen), o <strong>objeto</strong> a que se refere e o <strong>interpretante</strong>, o efeito de sentido que produz numa mente ${tag('fato')}. Diferentemente de um modelo de dois termos, a interpretação faz parte do próprio signo ${tag('interpretacao')}.</p>
<h3>Ícone, índice e símbolo</h3>
<p>Pela relação com o objeto, o signo é <strong>ícone</strong> (semelhança), <strong>índice</strong> (conexão real) ou <strong>símbolo</strong> (lei, hábito ou convenção) ${tag('fato')}. É a classificação usada na aula sb1-1.</p>
<h3>Semiose</h3>
<p>O interpretante é, por sua vez, um signo que pode ser interpretado: o processo de interpretação (semiose) pode prosseguir indefinidamente ${tag('fato')}. Isso não significa, em Peirce, que não haja verdade: a investigação tende a uma opinião final sobre o real ${tag('interpretacao')}.</p>
<h3>Abdução</h3>
<p>Peirce distinguiu três inferências: dedução, indução e <strong>abdução</strong>, que propõe uma hipótese capaz de explicar um fato surpreendente ${tag('fato')}. A abdução é o modo de raciocinar do detetive e do médico diante de sintomas ${tag('interpretacao')}.</p>
<h3>Fontes</h3>
<p>A obra de Peirce foi reunida nos <em>Collected Papers</em> (1931–1958); o artigo "Como tornar claras nossas ideias" (1878) é texto clássico do pragmatismo ${tag('fato')}.</p>`,
  vocabulario: [
    ['Representâmen', 'O signo como veículo, em Peirce.'],
    ['Objeto', 'Aquilo a que o signo se refere.'],
    ['Interpretante', 'Efeito de sentido do signo numa mente.'],
    ['Semiose', 'Processo de interpretação de signos.'],
    ['Abdução', 'Inferência que propõe a hipótese que explicaria um fato.'],
  ],
  exemplos: `<p><strong>Febre:</strong> para o médico, a febre é índice (conexão real com uma infecção). O interpretante é a ideia "há algo errado"; a abdução propõe "talvez seja infecção"; a dedução tira consequências ("se for, haverá tal sinal no exame"); a indução testa nos exames. As três inferências trabalham juntas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a semiótica de Peirce é usada em design, comunicação, linguística e ciências cognitivas. <strong>No Brasil:</strong> a tradição peirceana é forte nos estudos de comunicação, com Lúcia Santaella como principal divulgadora ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a interpretação faz parte do signo em Peirce', tag: 'argumento',
    premissas: ['Algo só funciona como signo se representa algo para alguém.', 'Esse "para alguém" é o interpretante.', 'Sem interpretante possível, não há representação, apenas uma coisa.'],
    conclusao: 'Logo, o interpretante é constitutivo do signo, e não um acréscimo posterior.',
    nota: 'Compare com a fórmula escolástica "algo no lugar de outra coisa para alguém" (sb1-1).',
  },
  objecoes: [
    { objecao: 'Se a semiose é ilimitada, qualquer interpretação vale.', tag: 'debate',
      resposta: 'Peirce não tirou essa conclusão: a interpretação é controlada pelo objeto e tende, na comunidade de investigação, a uma opinião final. Umberto Eco escreveu Os limites da interpretação (1990) justamente contra o uso relativista da semiose ilimitada.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise uma placa de trânsito e um retrato segundo a tríade de Peirce (signo, objeto, interpretante) e a divisão ícone, índice e símbolo.</p>`,
  fonte: {
    obra: 'Charles S. Peirce, "Como tornar claras nossas ideias" (1878); Collected Papers, vol. 2, §§ 227–308 (divisão dos signos)', link: null,
    orientacao: `<p>No artigo de 1878, identifique a máxima pragmática. Nos parágrafos sobre a divisão dos signos, localize as definições de ícone, índice e símbolo e transcreva cada uma.</p>`,
  },
  perguntas: [
    { p: 'Quais os três termos do signo em Peirce?', r: 'Signo (representâmen), objeto e interpretante.' },
    { p: 'O que é abdução?', r: 'A inferência que propõe a hipótese capaz de explicar um fato surpreendente.' },
    { p: 'A semiose ilimitada implica relativismo em Peirce?', r: 'Não; a interpretação é controlada pelo objeto e tende a uma opinião final.' },
  ],
  exercicios: [
    mc('O efeito de sentido do signo numa mente é o:', ['Objeto', 'Interpretante', 'Representâmen', 'Referente'], 1, 'Terceiro termo.'),
    mc('O raciocínio do detetive que propõe um suspeito é:', ['Dedução', 'Indução', 'Abdução', 'Analogia'], 2, 'Hipótese explicativa.'),
    mc('"Como tornar claras nossas ideias" é de:', ['1878', '1916', '1931', '1975'], 0, 'Pragmatismo.'),
    mc('Os Collected Papers foram publicados entre:', ['1878 e 1900', '1931 e 1958', '1960 e 1975', '1990 e 2001'], 1, 'Obra reunida.'),
    mc('Os limites da interpretação (1990) é de:', ['Peirce', 'Eco', 'Barthes', 'Santaella'], 1, 'Contra o relativismo.'),
    disc('Entregue a análise da placa e do retrato pela tríade de Peirce, com a classificação de cada aspecto em ícone, índice ou símbolo.', ['Tríade aplicada aos dois', 'Classificação correta', 'Interpretante descrito', 'Uso correto dos termos']),
  ],
  resumo: ['Peirce (1839–1914): teoria triádica.', 'Signo, objeto, interpretante.', 'Ícone, índice, símbolo.', 'Semiose controlada pelo objeto.', 'Abdução, dedução, indução.'],
  referencias: [
    { texto: 'Charles S. Peirce, Collected Papers (1931–1958).' },
    { texto: 'Charles S. Peirce, "Como tornar claras nossas ideias" (1878).' },
    { texto: 'Umberto Eco, Os limites da interpretação (1990).' },
    { texto: 'Lúcia Santaella, O que é semiótica (1983).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da placa e do retrato', 'Ler o artigo de 1878'],
  revisao: [['Tríade', 'Signo, objeto, interpretante.'], ['Abdução', 'Hipótese explicativa.'], ['Eco', 'Limites da interpretação.']],
  avancado: {
    texto: `<h3>As categorias de Peirce</h3>
<p>Peirce organizou a realidade em três categorias: primeiridade (qualidade), secundidade (reação, fato bruto) e terceiridade (lei, mediação) ${tag('fato')}. Ícone, índice e símbolo correspondem a elas ${tag('interpretacao')}.</p>
<h3>Peirce e Escoto</h3>
<p>Peirce declarou-se "realista escotista" quanto aos universais, opondo-se ao nominalismo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Charles S. Peirce, Collected Papers (1931–1958), vol. 1.' }],
    exercicios: [
      mc('A categoria da lei e da mediação é a:', ['Primeiridade', 'Secundidade', 'Terceiridade', 'Quartidade'], 2, 'Corresponde ao símbolo.'),
      mc('Quanto aos universais, Peirce declarou-se:', ['Nominalista', 'Realista escotista', 'Cético', 'Platônico estrito'], 1, 'Contra o nominalismo.'),
      mc('O índice corresponde à:', ['Primeiridade', 'Secundidade', 'Terceiridade', 'Nenhuma'], 1, 'Reação, fato.'),
      disc('Relacione o realismo de Peirce com o realismo moderado tomista estudado no curso: concordâncias e diferenças.', ['Posição de Peirce', 'Posição tomista', 'Comparação', 'Conclusão'])],
  },
}),

aula({
  id: 'sb1-4', titulo: 'Ferdinand de Saussure, a semiologia e Barthes', duracao: '150 min',
  aprendera: ['Explicar significante, significado e arbitrariedade do signo', 'Distinguir língua e fala, sincronia e diacronia', 'Expor a semiologia da cultura de Barthes', 'Comparar Peirce e Saussure num quadro'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A palavra "árvore" não se parece com uma árvore. Por que, então, significa árvore? Ferdinand de Saussure (1857–1913), linguista suíço, explicou o signo linguístico pela relação entre seus elementos dentro de um sistema ${tag('fato')}.</p>
<h3>O signo linguístico</h3>
<p>Para Saussure, o signo une um <strong>significante</strong> (a imagem acústica) a um <strong>significado</strong> (o conceito) ${tag('fato')}. O laço entre eles é <strong>arbitrário</strong>: nada na sequência de sons "árvore" exige o conceito de árvore, como mostram as diferentes línguas ${tag('fato')}.</p>
<h3>Língua e fala; sincronia e diacronia</h3>
<p>A <strong>língua</strong> (<em>langue</em>) é o sistema social; a <strong>fala</strong> (<em>parole</em>), o uso individual ${tag('fato')}. O estudo <strong>sincrônico</strong> descreve o sistema num momento; o <strong>diacrônico</strong>, sua mudança no tempo ${tag('fato')}. No sistema, cada signo vale pela diferença em relação aos outros ${tag('fato')}.</p>
<h3>Semiologia</h3>
<p>Saussure propôs uma ciência "que estude a vida dos signos no seio da vida social" — a semiologia, da qual a linguística seria parte ${tag('fato')}. Roland Barthes aplicou-a à cultura: em <em>Mitologias</em> (1957), analisou propaganda, esporte e moda como sistemas de sentido; em <em>Elementos de semiologia</em> (1964), sistematizou o método, com a distinção entre denotação e conotação ${tag('fato')}.</p>
<h3>Peirce e Saussure</h3>
<p>Peirce: modelo triádico, foco na lógica e na interpretação, signos de todo tipo. Saussure: modelo diádico, foco na língua como sistema social ${tag('interpretacao')}. Confundir os dois vocabulários ("símbolo" tem sentidos diferentes em cada um) é erro comum ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Significante', 'Imagem acústica do signo, em Saussure.'],
    ['Significado', 'Conceito associado ao significante.'],
    ['Arbitrariedade', 'Ausência de laço natural entre significante e significado.'],
    ['Língua (langue)', 'Sistema social de signos.'],
    ['Sincronia', 'Estudo do sistema num momento dado.'],
    ['Mito (Barthes)', 'Sistema de conotação que naturaliza um sentido cultural.'],
  ],
  exemplos: `<p><strong>Valor pela diferença:</strong> em português, "rio" e "riacho" dividem o campo dos cursos d'água; o francês distingue "fleuve" (que deságua no mar) de "rivière". O sentido de cada palavra depende das outras do sistema, não só da coisa. É o que Saussure chama de valor.</p>`,
  contexto: `<p><strong>No mundo:</strong> o estruturalismo, inspirado em Saussure, marcou a antropologia (Lévi-Strauss) e a crítica literária. <strong>No Brasil:</strong> Joaquim Mattoso Câmara Jr. introduziu a linguística estrutural no país, com <em>Princípios de linguística geral</em> (1941) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o signo linguístico é arbitrário', tag: 'argumento',
    premissas: ['Se houvesse laço natural entre som e conceito, as línguas tenderiam a usar os mesmos sons para o mesmo conceito.', 'As línguas usam sons muito diferentes para o mesmo conceito ("árvore", "tree", "Baum").', 'Logo, o laço não é natural, mas estabelecido no sistema de cada língua.'],
    conclusao: 'Logo, o signo linguístico é arbitrário, embora uma vez estabelecido o falante não possa mudá-lo sozinho.',
    nota: 'Onomatopeias são exceções parciais, que o próprio Saussure discute.',
  },
  objecoes: [
    { objecao: 'Se o signo é arbitrário, a linguagem não diz nada sobre a realidade.', tag: 'debate',
      resposta: 'A arbitrariedade refere-se ao laço entre o som e o conceito, não entre o conceito e a coisa. A tradição realista sustenta que os conceitos apreendem a realidade; a variedade de sons nas línguas não refuta isso.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: um quadro comparando Peirce e Saussure (número de termos, objeto de estudo, sentido de "símbolo", lugar da interpretação) e aplique os dois a um mesmo exemplo — a bandeira do Brasil.</p>`,
  fonte: {
    obra: 'Ferdinand de Saussure, Curso de linguística geral (1916), introdução, cap. III, e primeira parte, cap. I; Roland Barthes, Mitologias (1957), "O mito, hoje"', link: null,
    orientacao: `<p>No Curso, localize a definição de semiologia e o princípio da arbitrariedade. Em Barthes, identifique como o mito acrescenta um segundo sentido ao primeiro. Aplique ambos a um anúncio.</p>`,
  },
  perguntas: [
    { p: 'Quais os dois elementos do signo em Saussure?', r: 'Significante e significado.' },
    { p: 'O que é a semiologia para Saussure?', r: 'A ciência que estuda a vida dos signos no seio da vida social.' },
    { p: 'Quem introduziu a linguística estrutural no Brasil?', r: 'Joaquim Mattoso Câmara Jr.' },
  ],
  exercicios: [
    mc('O laço entre significante e significado, para Saussure, é:', ['Natural', 'Arbitrário', 'Icônico', 'Indicial'], 1, 'Princípio da arbitrariedade.'),
    mc('O sistema social da língua é a:', ['Fala', 'Língua', 'Diacronia', 'Conotação'], 1, 'Langue.'),
    mc('Mitologias é de:', ['Saussure', 'Barthes', 'Eco', 'Peirce'], 1, '1957.'),
    mc('O modelo de Peirce é:', ['Diádico', 'Triádico', 'Monádico', 'Tetrádico'], 1, 'Signo, objeto, interpretante.'),
    mc('O estudo da mudança da língua no tempo é:', ['Sincrônico', 'Diacrônico', 'Semântico', 'Pragmático'], 1, 'Diacronia.'),
    disc('Entregue o quadro Peirce x Saussure e a aplicação dos dois à bandeira do Brasil, sem confundir os vocabulários.', ['Quadro completo', 'Aplicação peirceana', 'Aplicação saussuriana', 'Distinção dos vocabulários']),
  ],
  resumo: ['Saussure (1857–1913): significante e significado.', 'Arbitrariedade do signo.', 'Língua e fala; sincronia e diacronia; valor.', 'Semiologia; Barthes (1957, 1964).', 'Peirce triádico x Saussure diádico.'],
  referencias: [
    { texto: 'Ferdinand de Saussure, Curso de linguística geral (1916).' },
    { texto: 'Roland Barthes, Mitologias (1957).' },
    { texto: 'Roland Barthes, Elementos de semiologia (1964).' },
    { texto: 'Joaquim Mattoso Câmara Jr., Princípios de linguística geral (1941).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler os capítulos indicados'],
  revisao: [['Significante', 'Imagem acústica.'], ['Arbitrariedade', 'Laço não natural.'], ['Barthes', 'Mitologias, 1957.']],
  avancado: {
    texto: `<h3>Hjelmslev e os planos</h3>
<p>Louis Hjelmslev reformulou Saussure distinguindo plano da expressão e plano do conteúdo, cada um com forma e substância ${tag('fato')}; Barthes usou esse modelo para definir a conotação como um sistema cujo plano da expressão já é um signo ${tag('fato')}.</p>
<h3>Crítica pós-estruturalista</h3>
<p>Autores como Jacques Derrida criticaram a estabilidade do sistema saussuriano ${tag('fato')}; a avaliação dessa crítica é debate filosófico ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Roland Barthes, Elementos de semiologia (1964).' }],
    exercicios: [
      mc('Hjelmslev distinguiu:', ['Ícone e índice', 'Plano da expressão e do conteúdo', 'Língua e fala apenas', 'Mito e rito'], 1, 'Com forma e substância.'),
      mc('Para Barthes, a conotação é um sistema cujo plano da expressão:', ['É vazio', 'Já é um signo', 'É natural', 'É índice'], 1, 'Signo sobre signo.'),
      mc('A crítica à estabilidade do sistema saussuriano é associada a:', ['Mattoso Câmara', 'Derrida', 'Peirce', 'Agostinho'], 1, 'Pós-estruturalismo.'),
      disc('Analise um anúncio com o modelo de Barthes: denotação, conotação e o "mito" que ele naturaliza.', ['Denotação', 'Conotação', 'Mito identificado', 'Avaliação separada da descrição'])],
  },
}),

avaliacao('sb1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os fundamentos do signo, a história da semiótica, Peirce e Saussure, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua classificação dos 20 exemplos.</li><li>Releia o quadro Peirce x Saussure.</li></ul>`,
[
  disc('Analise um mesmo objeto (por exemplo, o sino de uma igreja) com as categorias de Agostinho, de Peirce e de Saussure, mostrando o que cada teoria permite ver.', ['Três teorias aplicadas', 'Vocabulário correto de cada uma', 'Comparação', 'Conclusão']),
  disc('Responda a quem afirma que "qualquer interpretação de um símbolo vale": use Peirce, Eco e a distinção entre doutrina, fato e interpretação.', ['Objeção exposta com justiça', 'Peirce e Eco mobilizados', 'Distinções do curso aplicadas', 'Conclusão fundamentada']),
]),
];
