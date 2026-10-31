// Linguística IV — os níveis de análise aprofundados (etapa 8 do percurso de Linguística).
// Fonologia do português; morfologia e formação de palavras; sintaxe da frase; semântica, pragmática e atos de fala.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'li4-1', titulo: 'Fonologia do português: sílaba, acento e processos', duracao: '150 min',
  aprendera: ['Descrever a estrutura da sílaba em português', 'Explicar o papel distintivo do acento', 'Reconhecer processos fonológicos do português do Brasil', 'Relacionar fonologia e ortografia'],
  prereq: ['Linguística III (módulo LI3)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que muitos brasileiros dizem "falá" em vez de "falar", "ôro" em vez de "ouro" e "pexe" em vez de "peixe"? Não são descuidos aleatórios, mas processos regulares.</p>
<h3>A sílaba</h3>
<p>A sílaba tem um núcleo, sempre uma vogal em português, que pode ter consoantes antes (ataque) e depois (coda) ${tag('fato')}. O padrão mais comum é consoante + vogal (CV), como em "ca-sa" ${tag('fato')}.</p>
<h3>O acento</h3>
<p>Em português, o acento distingue palavras: "sábia", "sabia" e "sabiá" diferem pela sílaba tônica ${tag('fato')}. A maioria das palavras é paroxítona ${tag('fato')}.</p>
<h3>Processos</h3>
<p>Apagamento do -r final em verbos no infinitivo ("falá") é muito frequente na fala espontânea ${tag('fato')}. Monotongação reduz ditongos: "ouro" → "ôro", "peixe" → "pexe" ${tag('fato')}. Palatalização: /t/ e /d/ antes de [i] viram [tʃ] e [dʒ] em grande parte do país ${tag('fato')}. Alçamento das vogais átonas finais: "leite" → [i], "carro" → [u] ${tag('fato')}.</p>
<h3>Fonologia e ortografia</h3>
<p>Esses processos explicam erros ortográficos frequentes, como "pexe" ou "falá" na escrita de alfabetizandos ${tag('interpretacao')}. Conhecê-los ajuda o professor a entender e corrigir com método ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Núcleo silábico', 'Vogal central da sílaba.'],
    ['Coda', 'Consoante após o núcleo, no fim da sílaba.'],
    ['Paroxítona', 'Palavra com acento na penúltima sílaba.'],
    ['Monotongação', 'Redução de ditongo a vogal simples.'],
    ['Apagamento', 'Queda de um som, como o -r final.'],
  ],
  exemplos: `<p><strong>Um ditado de alfabetização:</strong> a criança escreve "caxa" (caixa), "falá" (falar), "mininu" (menino). Cada "erro" reflete um processo fonológico da fala: monotongação, apagamento do -r e alçamento das vogais átonas. A professora que sabe disso não vê descuido, mas uma hipótese da criança baseada em sua fala — e pode ensinar a convenção ortográfica com precisão.</p>`,
  contexto: `<p><strong>No mundo:</strong> processos de redução semelhantes ocorrem em muitas línguas na fala rápida ${tag('fato')}. <strong>No Brasil:</strong> o apagamento do -r final é documentado em todas as regiões, com frequências diferentes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que conhecer a fonologia ajuda a ensinar ortografia', tag: 'argumento',
    premissas: ['Muitos erros ortográficos reproduzem processos regulares da fala.', 'Saber qual processo está em jogo permite explicar a diferença entre fala e escrita.', 'Explicações precisas são mais eficazes que correções genéricas.'],
    conclusao: 'Logo, o conhecimento fonológico melhora o ensino da ortografia.',
    nota: 'A ortografia é convenção que precisa ser ensinada explicitamente.',
  },
  objecoes: [
    { objecao: 'Se "falá" é regular, a escrita deveria seguir a fala.', tag: 'debate',
      resposta: 'A ortografia unifica a escrita de falantes de regiões e épocas diferentes; se seguisse cada pronúncia, deixaria de ser comum. Por isso convém manter uma ortografia convencional e ensinar a relação entre ela e as diferentes falas.' },
  ],
  aplicacao: `<p>Colete dez exemplos de processos fonológicos (em gravação autorizada ou em textos de alfabetizandos), classifique cada um e explique como ensinaria a forma ortográfica correspondente.</p>`,
  fonte: {
    obra: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970), capítulos de fonologia', link: null,
    orientacao: `<p>Observe a descrição da sílaba, do acento e das vogais átonas.</p>`,
  },
  perguntas: [
    { p: 'Que palavras mostram o acento distintivo?', r: 'Sábia, sabia e sabiá.' },
    { p: 'O que é monotongação?', r: 'A redução de um ditongo a uma vogal simples, como ouro → ôro.' },
    { p: 'Que processo explica a escrita "falá"?', r: 'O apagamento do -r final.' },
  ],
  exercicios: [
    mc('O núcleo da sílaba em português é sempre:', ['Consoante', 'Vogal', 'Semivogal', 'Nasal'], 1, 'Estrutura.'),
    mc('"Peixe" → "pexe" é:', ['Apagamento', 'Monotongação', 'Palatalização', 'Nasalização'], 1, 'Ditongo.'),
    mc('"Mininu" reflete:', ['Alçamento de vogais átonas', 'Ditongação', 'Acento', 'Erro aleatório'], 0, 'Processo.'),
    mc('A maioria das palavras do português é:', ['Oxítona', 'Paroxítona', 'Proparoxítona', 'Monossílaba'], 1, 'Acento.'),
    mc('O padrão silábico mais comum é:', ['CV', 'CCVCC', 'VC', 'CVCC'], 0, 'Ca-sa.'),
    disc('Classifique dez processos fonológicos coletados e explique como ensinaria a ortografia.', ['Exemplos', 'Classificação', 'Ensino', 'Ética']),
  ],
  resumo: ['Sílaba: ataque, núcleo, coda.', 'Acento distintivo; paroxítonas.', 'Apagamento, monotongação, palatalização, alçamento.', 'Erros ortográficos têm explicação.', 'Ortografia é convenção.'],
  referencias: [
    { texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' },
    { texto: 'Marcos Bagno, Preconceito linguístico (1999).' },
    { texto: 'Projeto ALiB, Atlas Linguístico do Brasil (2014).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação', 'Ler a fonte indicada'],
  revisao: [['Sabiá', 'Acento.'], ['Pexe', 'Monotongação.'], ['Falá', 'Apagamento.']],
  avancado: {
    texto: `<h3>Epêntese</h3>
<p>Em encontros consonantais estranhos à estrutura silábica do português, muitos falantes inserem uma vogal: "advogado" → "adevogado", "pneu" → "peneu" ${tag('fato')}. É a epêntese, que adapta palavras ao padrão silábico preferido ${tag('fato')}. O mesmo ocorre na adaptação de empréstimos, como "stress" → "estresse" ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' }],
    exercicios: [
      mc('"Peneu" por "pneu" é:', ['Epêntese', 'Apagamento', 'Monotongação', 'Acento'], 0, 'Inserção.'),
      mc('"Stress" → "estresse" mostra adaptação ao padrão:', ['Silábico', 'Ortográfico apenas', 'Semântico', 'Sintático'], 0, 'Empréstimo.'),
      mc('A epêntese insere:', ['Uma consoante', 'Uma vogal', 'Um acento', 'Uma palavra'], 1, 'Definição.'),
      disc('Encontre cinco empréstimos adaptados ao português por epêntese ou outros processos.', ['Palavras', 'Processos', 'Explicação', 'Fontes'])],
  },
}),

aula({
  id: 'li4-2', titulo: 'Morfologia e formação de palavras', duracao: '150 min',
  aprendera: ['Distinguir flexão e derivação', 'Analisar derivação prefixal e sufixal', 'Distinguir composição por justaposição e aglutinação', 'Reconhecer neologismos e empréstimos'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Todos os dias surgem palavras novas: "deletar", "printar", "home office". Como a língua cria e incorpora palavras?</p>
<h3>Flexão e derivação</h3>
<p>A flexão marca categorias gramaticais sem criar palavra nova: número (menino/meninos), gênero, tempo, pessoa ${tag('fato')}. A derivação cria palavras novas a partir de outras ${tag('fato')}.</p>
<h3>Derivação</h3>
<p>Na derivação prefixal, acrescenta-se um prefixo: "fazer" → "refazer"; na sufixal, um sufixo: "feliz" → "felicidade"; na parassintética, prefixo e sufixo ao mesmo tempo: "triste" → "entristecer" ${tag('fato')}. Na derivação regressiva, retira-se um elemento: "debater" → "debate" ${tag('fato')}.</p>
<h3>Composição</h3>
<p>Na justaposição, as palavras se unem sem alteração ("guarda-chuva", "girassol"); na aglutinação, com perda de sons ("planalto", de plano + alto; "aguardente", de água + ardente) ${tag('fato')}.</p>
<h3>Neologismos e empréstimos</h3>
<p>Empréstimos vêm de outras línguas e podem ser adaptados ("futebol", de football) ou mantidos ("software") ${tag('fato')}. Verbos novos entram geralmente na 1ª conjugação: "deletar", "printar", "googlar" ${tag('fato')}. A Academia Brasileira de Letras registra palavras no Vocabulário Ortográfico da Língua Portuguesa (VOLP) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Flexão', 'Variação de forma para marcar categorias gramaticais.'],
    ['Derivação', 'Formação de palavra nova por afixos ou supressão.'],
    ['Parassíntese', 'Derivação com prefixo e sufixo simultâneos.'],
    ['Aglutinação', 'Composição com perda de sons.'],
    ['Empréstimo', 'Palavra tomada de outra língua.'],
  ],
  exemplos: `<p><strong>Uma família de palavras:</strong> "terra" → "terreno", "terrestre", "enterrar" (parassíntese), "desenterrar" (prefixação), "terremoto" (composição com "moto", movimento). Analisar a família mostra como a língua reaproveita uma raiz para muitos sentidos.</p>`,
  contexto: `<p><strong>No mundo:</strong> o inglês é hoje a principal fonte de empréstimos em muitas línguas ${tag('fato')}. <strong>No Brasil:</strong> o VOLP, da Academia Brasileira de Letras, é a referência oficial da ortografia ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que verbos novos entram na 1ª conjugação', tag: 'argumento',
    premissas: ['A 1ª conjugação (-ar) é a mais numerosa e regular em português.', 'Falantes aplicam a regra mais produtiva a palavras novas.', 'Por isso "deletar", "printar" e "zapear" seguem o modelo de "cantar".'],
    conclusao: 'Logo, a criação de verbos novos mostra a produtividade das regras morfológicas.',
    nota: 'É o mesmo mecanismo da regularização infantil ("fazi").',
  },
  objecoes: [
    { objecao: 'Empréstimos estrangeiros destroem a língua portuguesa.', tag: 'debate',
      resposta: 'O português sempre recebeu empréstimos — do árabe, do tupi, de línguas africanas, do francês — e se enriqueceu. O excesso de estrangeirismos desnecessários pode ser criticado por clareza e estilo, mas a língua não é "destruída" por eles. O debate é sobre uso adequado, não sobre pureza.' },
  ],
  aplicacao: `<p>Analise vinte palavras de um texto jornalístico quanto à formação (flexão, derivação, composição, empréstimo), e liste cinco neologismos recentes com sua origem.</p>`,
  fonte: {
    obra: 'Academia Brasileira de Letras, Vocabulário Ortográfico da Língua Portuguesa (VOLP)', link: { url: 'https://www.academia.org.br', rotulo: 'Academia Brasileira de Letras' },
    orientacao: `<p>Verifique se os neologismos que você listou estão registrados e com que grafia.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre flexão e derivação?', r: 'A flexão marca categorias sem criar palavra nova; a derivação cria palavras novas.' },
    { p: 'Que processo forma "entristecer"?', r: 'A parassíntese.' },
    { p: '"Planalto" é composição por:', r: 'Aglutinação.' },
  ],
  exercicios: [
    mc('"Meninos" em relação a "menino" é:', ['Derivação', 'Flexão', 'Composição', 'Empréstimo'], 1, 'Número.'),
    mc('"Refazer" é derivação:', ['Prefixal', 'Sufixal', 'Parassintética', 'Regressiva'], 0, 'Prefixo.'),
    mc('"Guarda-chuva" é composição por:', ['Aglutinação', 'Justaposição', 'Derivação', 'Flexão'], 1, 'Sem perda.'),
    mc('"Debate" a partir de "debater" é derivação:', ['Prefixal', 'Regressiva', 'Sufixal', 'Parassintética'], 1, 'Supressão.'),
    mc('Verbos novos entram geralmente na conjugação:', ['1ª (-ar)', '2ª (-er)', '3ª (-ir)', 'Nenhuma'], 0, 'Produtividade.'),
    disc('Analise a formação de vinte palavras de um texto e liste cinco neologismos.', ['Análise', 'Processos', 'Neologismos', 'Fontes']),
  ],
  resumo: ['Flexão × derivação.', 'Prefixal, sufixal, parassintética, regressiva.', 'Justaposição × aglutinação.', 'Empréstimos e neologismos.', 'VOLP.'],
  referencias: [
    { texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' },
    { texto: 'Academia Brasileira de Letras, VOLP.' },
    { texto: 'Ferdinand de Saussure, Curso de linguística geral (1916).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Consultar a fonte indicada'],
  revisao: [['Flexão', 'Categoria.'], ['Parassíntese', 'En-trist-ecer.'], ['Aglutinação', 'Planalto.']],
  avancado: {
    texto: `<h3>Arabismos no português</h3>
<p>Séculos de presença árabe na Península Ibérica deixaram centenas de palavras: muitas começam com "al-", vestígio do artigo árabe — "algodão", "alface", "almofada", "alfaiate" ${tag('fato')}. Também "azeite", "arroz", "açúcar" e "oxalá" têm origem árabe ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Joaquim Mattoso Câmara Jr., História e estrutura da língua portuguesa (1975).' }],
    exercicios: [
      mc('O "al-" de "algodão" vem do:', ['Artigo árabe', 'Latim', 'Grego', 'Tupi'], 0, 'Arabismo.'),
      mc('É de origem árabe:', ['Azeite', 'Mesa', 'Casa', 'Pão'], 0, 'Empréstimo.'),
      mc('"Oxalá" vem do:', ['Árabe', 'Latim', 'Inglês', 'Quimbundo'], 0, 'Origem.'),
      disc('Liste dez arabismos do português e verifique sua origem num dicionário etimológico.', ['Palavras', 'Origem', 'Fonte', 'Precisão'])],
  },
}),

aula({
  id: 'li4-3', titulo: 'Sintaxe: constituintes, funções e ambiguidade', duracao: '150 min',
  aprendera: ['Identificar constituintes com testes', 'Reconhecer funções sintáticas', 'Analisar ambiguidades estruturais', 'Conhecer fenômenos sintáticos do português do Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>"Vi o homem com o binóculo." Quem tinha o binóculo? A frase tem dois sentidos porque tem duas estruturas possíveis.</p>
<h3>Constituintes</h3>
<p>As palavras se agrupam em constituintes (sintagmas): "o homem alto" funciona como unidade ${tag('fato')}. Testes identificam constituintes: substituição por pronome ("Vi o homem alto" → "Vi-o"), deslocamento ("O homem alto, eu vi") e resposta a pergunta ("Quem você viu? O homem alto") ${tag('fato')}.</p>
<h3>Funções</h3>
<p>Na oração, distinguem-se sujeito, predicado, complementos (objeto direto e indireto) e adjuntos ${tag('fato')}. Em "Maria deu um livro ao irmão", "Maria" é sujeito, "um livro" objeto direto e "ao irmão" objeto indireto ${tag('fato')}.</p>
<h3>Ambiguidade estrutural</h3>
<p>Em "Vi o homem com o binóculo", "com o binóculo" pode ligar-se ao verbo (instrumento da visão) ou a "homem" (o homem que tinha o binóculo) ${tag('fato')}. A ambiguidade é estrutural, não de vocabulário ${tag('fato')}.</p>
<h3>Português do Brasil</h3>
<p>Estudos de sociolinguística sugerem que o português brasileiro usa cada vez mais sujeitos pronominais explícitos ("eu acho que eu vou"), enquanto o europeu omite mais o sujeito ${tag('interpretacao')}. O pronome "você" e a construção "a gente" alteraram o sistema de pronomes ${tag('fato')}.</p>`,
  vocabulario: [
    ['Constituinte', 'Grupo de palavras que funciona como unidade.'],
    ['Sintagma', 'Constituinte organizado em torno de um núcleo.'],
    ['Objeto direto', 'Complemento do verbo sem preposição obrigatória.'],
    ['Adjunto', 'Termo acessório que acrescenta circunstância.'],
    ['Ambiguidade estrutural', 'Duplo sentido por duas estruturas possíveis.'],
  ],
  exemplos: `<p><strong>Desfazendo a ambiguidade:</strong> "Vi o homem com o binóculo" pode ser reescrita como "Com o binóculo, vi o homem" (instrumento) ou "Vi o homem que tinha o binóculo" (posse). A reescrita torna explícita a estrutura. É uma técnica útil para redigir textos jurídicos, científicos e religiosos sem duplo sentido.</p>`,
  contexto: `<p><strong>No mundo:</strong> a análise em árvores sintáticas difundiu-se com o gerativismo ${tag('fato')}. <strong>No Brasil:</strong> o ensino escolar de análise sintática segue em geral a Nomenclatura Gramatical Brasileira ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a estrutura determina o sentido', tag: 'argumento',
    premissas: ['Frases com as mesmas palavras podem ter sentidos diferentes.', 'A diferença está em como as palavras se agrupam e se relacionam.', 'Logo, compreender exige reconhecer a estrutura.'],
    conclusao: 'Logo, a sintaxe é parte essencial da interpretação de textos.',
    nota: 'Na leitura da Escritura e de documentos, a análise sintática evita interpretações erradas.',
  },
  objecoes: [
    { objecao: 'Análise sintática é inútil fora da escola.', tag: 'argumento',
      resposta: 'Saber reconhecer a estrutura ajuda a redigir sem ambiguidade, a interpretar leis e contratos e a ler textos difíceis com precisão. O problema é o ensino mecânico, não a análise em si.' },
  ],
  aplicacao: `<p>Analise cinco frases (incluindo duas ambíguas) identificando constituintes com testes, funções sintáticas e, nas ambíguas, as duas estruturas e reescritas que desfaçam a ambiguidade.</p>`,
  fonte: {
    obra: 'Noam Chomsky, Estruturas sintáticas (1957), capítulos sobre estrutura de constituintes', link: null,
    orientacao: `<p>Observe como Chomsky representa frases em constituintes e como explica ambiguidades.</p>`,
  },
  perguntas: [
    { p: 'Como testar se um grupo de palavras é constituinte?', r: 'Por substituição, deslocamento ou resposta a pergunta.' },
    { p: 'Em "Maria deu um livro ao irmão", qual o objeto indireto?', r: '"Ao irmão".' },
    { p: 'Por que "Vi o homem com o binóculo" é ambígua?', r: 'Porque "com o binóculo" pode ligar-se ao verbo ou a "homem".' },
  ],
  exercicios: [
    mc('Substituir "o homem alto" por "o" é teste de:', ['Constituência', 'Fonologia', 'Etimologia', 'Ortografia'], 0, 'Sintaxe.'),
    mc('Em "Pedro comeu a maçã", "a maçã" é:', ['Sujeito', 'Objeto direto', 'Objeto indireto', 'Adjunto'], 1, 'Função.'),
    mc('"Ontem" em "Saí ontem" é:', ['Sujeito', 'Objeto', 'Adjunto adverbial', 'Predicativo'], 2, 'Circunstância.'),
    mc('A ambiguidade de "com o binóculo" é:', ['Lexical', 'Estrutural', 'Fonética', 'Ortográfica'], 1, 'Estrutura.'),
    mc('O português brasileiro tende a usar mais sujeito:', ['Omitido', 'Explícito', 'Inexistente', 'Latino'], 1, 'Variação.'),
    disc('Analise cinco frases, incluindo duas ambíguas, com testes, funções e reescritas.', ['Constituintes', 'Funções', 'Ambiguidades', 'Reescritas']),
  ],
  resumo: ['Constituintes e testes.', 'Sujeito, predicado, complementos, adjuntos.', 'Ambiguidade estrutural.', 'Sujeito explícito no PB.', 'Estrutura e sentido.'],
  referencias: [
    { texto: 'Noam Chomsky, Estruturas sintáticas (1957).' },
    { texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' },
    { texto: 'Fernando Tarallo, A pesquisa sociolinguística (1985).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as análises', 'Ler a fonte indicada'],
  revisao: [['Testes', 'Constituintes.'], ['Objeto direto', 'Sem preposição.'], ['Binóculo', 'Ambiguidade.']],
  avancado: {
    texto: `<h3>Ambiguidade na Escritura e no direito</h3>
<p>Em Lc 23,43, a frase de Jesus ao bom ladrão pode ser pontuada de modos diferentes, alterando a referência de "hoje"; a tradição católica e a maioria das traduções leem "Hoje estarás comigo no paraíso" ${tag('fato')}. Em textos legais, ambiguidades estruturais podem gerar disputas judiciais ${tag('fato')}. A técnica legislativa recomenda redação clara e ordem direta ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Lei Complementar nº 95, de 1998 (técnica de redação das leis).' }],
    exercicios: [
      mc('Em Lc 23,43, a ambiguidade envolve a palavra:', ['Paraíso', 'Hoje', 'Comigo', 'Estarás'], 1, 'Pontuação.'),
      mc('A técnica de redação das leis está na LC:', ['95/1998', '8.078/1990', '9.394/1996', '25/1937'], 0, 'Legística.'),
      mc('Para evitar ambiguidade, recomenda-se:', ['Ordem direta e clareza', 'Frases longas', 'Pronomes vagos', 'Nada'], 0, 'Interpretação.'),
      disc('Encontre uma ambiguidade num texto oficial ou jornalístico e proponha redação clara.', ['Texto', 'Ambiguidade', 'Estruturas', 'Reescrita'])],
  },
}),

aula({
  id: 'li4-4', titulo: 'Semântica, pragmática e atos de fala', duracao: '150 min',
  aprendera: ['Distinguir sentido e referência', 'Reconhecer pressuposições', 'Aplicar as máximas de Grice', 'Distinguir os atos de fala de Austin'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>"Você parou de fumar?" Qualquer resposta, sim ou não, admite que você fumava. Como a linguagem diz mais do que diz?</p>
<h3>Sentido e referência</h3>
<p>Gottlob Frege (1892) distinguiu o sentido de uma expressão (o modo de apresentar) e sua referência (o objeto designado): "a estrela da manhã" e "a estrela da tarde" têm sentidos diferentes e a mesma referência, o planeta Vênus ${tag('fato')}.</p>
<h3>Pressuposição</h3>
<p>Pressuposições são conteúdos tomados como dados: "Você parou de fumar?" pressupõe que a pessoa fumava ${tag('fato')}. Perguntas com pressuposições falsas são armadilha retórica conhecida ${tag('argumento')}.</p>
<h3>Implicaturas</h3>
<p>H. Paul Grice (1975) propôs que a conversa segue um princípio de cooperação com máximas: quantidade (dizer o suficiente), qualidade (dizer a verdade), relação (ser relevante) e modo (ser claro) ${tag('fato')}. Quando alguém parece violar uma máxima, o ouvinte infere um sentido implícito — a implicatura ${tag('fato')}.</p>
<h3>Atos de fala</h3>
<p>J. L. Austin, em Quando dizer é fazer (1962), observou que certos enunciados realizam ações: "Prometo", "Declaro aberta a sessão" ${tag('fato')}. Distinguiu o ato locucionário (dizer algo), o ilocucionário (o que se faz ao dizer: prometer, ordenar) e o perlocucionário (o efeito produzido) ${tag('fato')}.</p>
<h3>Palavra que realiza</h3>
<p>Na liturgia, a forma sacramental — por exemplo, "Eu te batizo em nome do Pai, e do Filho, e do Espírito Santo" — é palavra eficaz, que realiza o que significa pela ação de Cristo (CIC 1084, 1127) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Sentido', 'Modo de apresentar o objeto (Frege).'],
    ['Referência', 'Objeto designado por uma expressão.'],
    ['Pressuposição', 'Conteúdo tomado como dado num enunciado.'],
    ['Implicatura', 'Sentido inferido a partir das máximas conversacionais.'],
    ['Ato ilocucionário', 'Ação realizada ao dizer algo (prometer, ordenar).'],
  ],
  exemplos: `<p><strong>Uma carta de recomendação:</strong> "O candidato tem ótima caligrafia e sempre chegou pontualmente." Nada de negativo foi dito, mas o leitor infere que não há qualidades mais importantes a destacar — uma implicatura pela máxima da quantidade. Grice usou exemplo semelhante.</p>`,
  contexto: `<p><strong>No mundo:</strong> a filosofia da linguagem comum, em Oxford, desenvolveu a teoria dos atos de fala ${tag('fato')}. <strong>No Brasil:</strong> a pragmática é estudada em cursos de Letras e aplicada à análise de discursos e à argumentação jurídica ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que dizer pode ser fazer', tag: 'argumento',
    premissas: ['Certos enunciados não descrevem fatos, mas os criam (prometer, batizar, nomear).', 'Para isso, exigem condições: pessoa autorizada, circunstância adequada, intenção.', 'Satisfeitas as condições, o ato se realiza pela palavra.'],
    conclusao: 'Logo, a linguagem não serve só para descrever: também age no mundo.',
    nota: 'Austin chamou de "infelizes" os atos que falham por falta de condições.',
  },
  objecoes: [
    { objecao: 'A eficácia dos sacramentos é só um ato de fala humano.', tag: 'debate',
      resposta: 'A teoria de Austin mostra que palavras humanas podem realizar ações sociais. A doutrina católica afirma algo mais: nos sacramentos, quem age é Cristo, pela palavra e pelo sinal (ex opere operato, CIC 1128). A análise linguística ilumina a forma, mas não esgota a realidade sacramental.' },
  ],
  aplicacao: `<p>Analise um diálogo real ou de ficção identificando pressuposições, implicaturas (com a máxima envolvida) e atos de fala (com seu tipo ilocucionário).</p>`,
  fonte: {
    obra: 'J. L. Austin, Quando dizer é fazer (1962), conferências I e VIII; H. P. Grice, "Lógica e conversação" (1975)', link: null,
    orientacao: `<p>Em Austin, os performativos e a tripla distinção. Em Grice, o princípio de cooperação e as máximas.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre sentido e referência?', r: 'Sentido é o modo de apresentar; referência é o objeto designado.' },
    { p: 'Quais as máximas de Grice?', r: 'Quantidade, qualidade, relação e modo.' },
    { p: 'O que é o ato ilocucionário?', r: 'A ação realizada ao dizer algo.' },
  ],
  exercicios: [
    mc('"Estrela da manhã" e "estrela da tarde" têm a mesma:', ['Referência', 'Grafia', 'Sentido', 'Pronúncia'], 0, 'Vênus.'),
    mc('"Você parou de bater no seu cachorro?" pressupõe que:', ['Você batia', 'Você não tem cachorro', 'Nada', 'Você é veterinário'], 0, 'Pressuposição.'),
    mc('Dizer a verdade é a máxima de:', ['Quantidade', 'Qualidade', 'Relação', 'Modo'], 1, 'Grice.'),
    mc('"Prometo voltar" realiza um ato:', ['Só descritivo', 'Ilocucionário de promessa', 'Fonético', 'Nenhum'], 1, 'Austin.'),
    mc('Quando dizer é fazer é de:', ['1892', '1962', '1975', '1999'], 1, 'Austin.'),
    disc('Analise um diálogo identificando pressuposições, implicaturas e atos de fala.', ['Pressuposições', 'Implicaturas', 'Atos de fala', 'Explicação']),
  ],
  resumo: ['Frege (1892): sentido × referência.', 'Pressuposição.', 'Grice (1975): cooperação e máximas.', 'Austin (1962): locucionário, ilocucionário, perlocucionário.', 'Forma sacramental (CIC 1084, 1127).'],
  referencias: [
    { texto: 'J. L. Austin, Quando dizer é fazer (1962).' },
    { texto: 'Gottlob Frege, "Sobre o sentido e a referência" (1892).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1084, 1127–1128.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do diálogo', 'Ler as fontes indicadas'],
  revisao: [['Frege', 'Sentido e referência.'], ['Grice', 'Máximas.'], ['Austin', 'Atos de fala.']],
  avancado: {
    texto: `<h3>Polidez</h3>
<p>Penelope Brown e Stephen Levinson estudaram a polidez como estratégia para preservar a "face" dos interlocutores ${tag('fato')}. Pedidos indiretos ("Será que você poderia...?") reduzem a imposição ao ouvinte ${tag('fato')}. As formas de polidez variam entre culturas e situações ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Penelope Brown e Stephen Levinson, Politeness (1987).' }],
    exercicios: [
      mc('A teoria da polidez é de:', ['Brown e Levinson', 'Grice', 'Frege', 'Saussure'], 0, '1987.'),
      mc('Pedidos indiretos servem para:', ['Reduzir a imposição', 'Aumentar a ordem', 'Enganar', 'Nada'], 0, 'Face.'),
      mc('As formas de polidez:', ['São universais iguais', 'Variam entre culturas', 'Não existem', 'São só escritas'], 1, 'Interpretação.'),
      disc('Compare formas de pedido em três situações (família, trabalho, Igreja) quanto à polidez.', ['Situações', 'Formas', 'Estratégias', 'Análise'])],
  },
}),

avaliacao('li4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre fonologia, morfologia, sintaxe, semântica e pragmática, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça suas análises de frases e palavras.</li><li>Releia sua análise de diálogo.</li></ul>`,
[
  disc('Analise um texto curto (cerca de cinco frases) em todos os níveis: processos fonológicos prováveis na leitura em voz alta, formação de palavras, estrutura sintática, sentido e atos de fala.', ['Fonologia', 'Morfologia', 'Sintaxe', 'Semântica e pragmática']),
  disc('Escolha uma frase ambígua de um texto real, mostre as duas estruturas e as implicações de cada leitura, e proponha uma redação sem ambiguidade.', ['Frase', 'Estruturas', 'Implicações', 'Reescrita']),
]),
];
