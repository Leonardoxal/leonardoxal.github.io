// Módulo 0 — método de estudo: fichamento, resumo crítico, citação, referência e avaliação de fontes.
// Complementa a aula de leitura ativa (m3-1) com as ferramentas de registro que todas as disciplinas pedem.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm0-2', titulo: 'Fichamento e resumo crítico: registrar o que se leu', duracao: '90 min',
  aprendera: ['Preencher uma ficha de leitura com referência, tese, argumentos, citações e dúvidas', 'Distinguir resumo, resenha crítica e comentário próprio', 'Separar o que o autor diz do que você pensa'],
  prereq: ['Aula m3-1: leitura ativa'],
  explicacao: `
<h3>O problema</h3>
<p>Quem lê sem registrar esquece em poucas semanas o que leu, e quem registra copiando trechos longos não entendeu o texto. O fichamento serve para o leitor mostrar a si mesmo que compreendeu.</p>
<h3>A ficha de leitura</h3>
<p>Uma ficha útil tem seis campos: a referência completa da edição lida; a tese central, em uma frase sua; os argumentos principais, na ordem em que aparecem; as citações importantes, com o número da página; as dúvidas; e, por último, o seu comentário crítico, separado de tudo o que veio do autor ${tag('interpretacao')}.</p>
<h3>Resumo, resenha e comentário</h3>
<p>O resumo diz o que o texto afirma, sem avaliar. A resenha crítica resume e depois avalia, apontando acertos, limites e perguntas. O comentário próprio é o que você acrescenta: objeção, aplicação, relação com outro autor ${tag('interpretacao')}. Misturar os três é o erro mais comum: o leitor atribui ao autor o que é seu, ou o contrário.</p>
<h3>Regra de ouro</h3>
<p>Toda frase da ficha deve poder ser classificada em um destes tipos: citação (entre aspas, com página), paráfrase (suas palavras, com referência) ou comentário (marcado como seu).</p>`,
  vocabulario: [
    ['Fichamento', 'Registro organizado de uma leitura, em campos fixos.'],
    ['Tese', 'A afirmação central que o texto defende.'],
    ['Paráfrase', 'Reescrita das ideias do autor com palavras próprias, mantendo a referência.'],
    ['Resenha crítica', 'Resumo seguido de avaliação argumentada.'],
    ['Comentário', 'Observação do leitor, distinta do que o autor afirma.'],
  ],
  exemplos: `<p><strong>Mesmo trecho, três registros.</strong> Citação: "o que não se pode demonstrar não se deve afirmar como demonstrado" (p. 12). Paráfrase: o autor recusa dar como provado o que só foi suposto (p. 12). Comentário: parece-me que a regra, aplicada a ele mesmo, exigiria provar o seu primeiro princípio.</p>`,
  contexto: `<p><strong>No estudo:</strong> a mesma ficha serve para um livro, um artigo, uma aula ou um filme; muda a "referência" e, no caso de obras sem páginas, usa-se o minuto ou o capítulo. As obras obrigatórias do curso pedem uma análise escrita que aproveita a ficha.</p>`,
  argumento: {
    titulo: 'Por que registrar com campos fixos', tag: 'argumento',
    premissas: ['Compreender é conseguir reconstruir a tese e os argumentos com palavras próprias.', 'Campos fixos obrigam a procurar a tese e os argumentos em vez de copiar trechos.', 'Separar o comentário do resumo evita atribuir ao autor o que é do leitor.'],
    conclusao: 'Logo, a ficha de leitura com campos fixos é um meio de verificar a própria compreensão e de manter honesta a distinção entre o autor e o leitor.',
    nota: 'Método geral de leitura analítica descrito em Adler e Van Doren, Como ler livros.',
  },
  objecoes: [
    { objecao: 'Fichar toda leitura toma tempo demais.', tag: 'debate',
      resposta: 'Para leituras de estudo, a ficha curta (tese, argumentos, três citações e uma dúvida) cabe em uma página. Para leitura de lazer, ela não é exigida. O curso a exige nas obras obrigatórias.' },
  ],
  aplicacao: `<p>Escolha um capítulo de um dos livros do degrau e faça a ficha com os seis campos. Marque cada frase como citação, paráfrase ou comentário.</p>`,
  fonte: {
    obra: 'Mortimer Adler e Charles Van Doren, Como ler livros (seção sobre leitura analítica)', link: null,
    orientacao: `<p>Observe a passagem em que os autores pedem que o leitor enuncie a unidade do livro em poucas frases e liste suas partes principais.</p>`,
  },
  perguntas: [
    { p: 'Quais são os seis campos da ficha?', r: 'Referência, tese, argumentos, citações com página, dúvidas e comentário próprio.' },
    { p: 'Qual a diferença entre resumo e resenha crítica?', r: 'O resumo só expõe; a resenha expõe e avalia.' },
    { p: 'Como classificar cada frase da ficha?', r: 'Como citação, paráfrase ou comentário.' },
  ],
  exercicios: [
    mc('A tese de um texto é:', ['A afirmação central que ele defende', 'O seu título', 'A primeira frase', 'O número de páginas'], 0, 'Campo da ficha.'),
    mc('Uma paráfrase deve:', ['Usar palavras próprias e manter a referência', 'Copiar sem aspas', 'Omitir o autor', 'Incluir só opinião do leitor'], 0, 'Com referência.'),
    mc('O comentário próprio deve ficar:', ['Separado do resumo', 'Misturado ao resumo', 'Sem marcação', 'Atribuído ao autor'], 0, 'Distinção autor/leitor.'),
    mc('A resenha crítica:', ['Resume e avalia', 'Só resume', 'Só avalia sem ler', 'Copia o prefácio'], 0, 'Resumo mais avaliação.'),
    mc('Toda citação da ficha leva:', ['Aspas e página', 'Só o nome do autor', 'Nada', 'Um símbolo'], 0, 'Regra de ouro.'),
    disc('Entregue a ficha de leitura de um capítulo, com os seis campos e cada frase marcada como citação, paráfrase ou comentário.', ['Seis campos', 'Tese em uma frase', 'Citações com página', 'Comentário separado']),
  ],
  resumo: ['Ficha com seis campos.', 'Resumo, resenha e comentário são coisas distintas.', 'Toda frase: citação, paráfrase ou comentário.', 'Registrar é verificar a compreensão.'],
  referencias: [
    { texto: 'Mortimer J. Adler e Charles Van Doren, Como ler livros.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler a fonte indicada'],
  revisao: [['Fichamento', 'Registro em campos fixos.'], ['Paráfrase', 'Palavras próprias, com referência.'], ['Resenha crítica', 'Resume e avalia.']],
  avancado: {
    texto: `<h3>Fichar obras que não são livros</h3>
<p>Para filme, música ou obra de arte, a ficha troca a página pelo minuto, o compasso ou a localização da peça, e acrescenta o campo "contexto de produção" (autor, data, lugar, destino da obra) ${tag('interpretacao')}. A distinção entre o que a obra apresenta e o que o espectador acrescenta continua a mesma.</p>`,
    leituras: [],
    exercicios: [
      mc('Em um filme, a "página" da citação é substituída por:', ['O minuto da cena', 'O nome do ator', 'O preço', 'O cartaz'], 0, 'Localização.'),
      mc('O campo acrescentado para obras não escritas é o de:', ['Contexto de produção', 'Número de páginas', 'Índice remissivo', 'Tiragem'], 0, 'Contexto.'),
      mc('A distinção entre obra e espectador:', ['Permanece', 'Desaparece', 'Vale só para livros', 'É proibida'], 0, 'Mesma regra.'),
      disc('Ficha de uma obra não escrita (filme ou música) com localização e contexto de produção.', ['Localização', 'Contexto', 'Tese', 'Comentário'])],
  },
}),

aula({
  id: 'm0-3', titulo: 'Citação, referência e fontes: honestidade intelectual no estudo', duracao: '90 min',
  aprendera: ['Citar e referenciar uma obra de modo que o leitor a encontre', 'Distinguir fonte primária, secundária e de referência geral', 'Avaliar uma fonte pela autoria, edição e data', 'Explicar por que copiar sem indicar a origem é falta de honestidade intelectual'],
  prereq: ['Aula m0-2: fichamento e resumo crítico'],
  explicacao: `
<h3>O problema</h3>
<p>Uma afirmação sem fonte é opinião; uma fonte mal indicada não pode ser conferida. A citação e a referência permitem que o leitor verifique o que você diz.</p>
<h3>Citação e referência</h3>
<p>A citação reproduz palavras do autor entre aspas, com página; a paráfrase reproduz as ideias com palavras suas, também com referência. A referência completa traz autor, título, edição, local, editora e ano ${tag('fato')}. No Brasil, as normas da ABNT (a NBR 6023, sobre referências, e a NBR 10520, sobre citações) padronizam esses elementos ${tag('fato')}; o curso aceita qualquer modelo consistente, desde que o leitor possa encontrar a obra.</p>
<h3>Fontes primárias, secundárias e gerais</h3>
<p>Fonte primária é o texto do próprio autor ou o documento da época (a Suma Teológica, uma encíclica, uma carta). Fonte secundária é o estudo sobre ele. Obras de referência geral (dicionário, enciclopédia, catecismo) orientam, mas não substituem as primárias ${tag('interpretacao')}. Em teologia, o Catecismo da Igreja Católica remete às fontes bíblicas, patrísticas e conciliares: use-o como porta de entrada para elas ${tag('fato')}.</p>
<h3>Avaliar uma fonte</h3>
<p>Pergunte: quem é o autor e com que competência fala? Qual a edição e quem traduziu? Qual a data original e a data da edição? A afirmação é apoiada em documentos ou apenas repetida? ${tag('interpretacao')}</p>
<h3>Honestidade intelectual</h3>
<p>Apresentar como seu o que é de outro é plágio. A lei brasileira de direitos autorais (Lei 9.610/1998) permite citar passagens de obra para estudo, crítica ou polêmica, na medida justificada, indicando autor e origem ${tag('fato')}. Indicar a origem é, ao mesmo tempo, uma exigência legal e uma exigência da verdade.</p>`,
  vocabulario: [
    ['Fonte primária', 'Texto do próprio autor ou documento da época estudada.'],
    ['Fonte secundária', 'Estudo ou comentário sobre uma fonte primária.'],
    ['Referência', 'Dados completos que permitem encontrar a obra.'],
    ['Citação', 'Reprodução literal de palavras do autor, entre aspas, com página.'],
    ['Plágio', 'Apresentar como próprio o texto ou as ideias de outro.'],
  ],
  exemplos: `<p><strong>Referência incompleta e completa.</strong> Incompleta: "Tomás, Suma". Completa: TOMÁS DE AQUINO. Suma Teológica, parte I, questão 2, artigo 3. Indicar a edição e a tradução usadas permite a outro leitor conferir a mesma passagem.</p>`,
  contexto: `<p><strong>No curso:</strong> cada aula traz uma fonte primária para leitura e uma lista de referências. Nas obras obrigatórias, a análise escrita deve indicar a edição ou a versão consultada, e marcar o que é citação, paráfrase e comentário.</p>`,
  argumento: {
    titulo: 'Por que indicar a fonte', tag: 'argumento',
    premissas: ['Quem afirma algo deve poder ser conferido por quem lê.', 'Sem a indicação da origem, o leitor não pode conferir a afirmação nem reconhecer o mérito do autor citado.', 'Apresentar como próprio o que é de outro engana o leitor sobre a origem da afirmação.'],
    conclusao: 'Logo, indicar a fonte é exigência da verdade e da justiça para com o autor, além de ser necessária para o debate.',
    nota: 'Lei 9.610/1998, art. 46, III (citação para estudo, crítica ou polêmica, com indicação de autor e origem).',
  },
  objecoes: [
    { objecao: 'Se a ideia está na minha cabeça, não preciso dizer de onde veio.', tag: 'debate',
      resposta: 'Ideias que você reformulou depois de estudar continuam devendo a origem a quem as formulou. Quando já não se lembra da origem, diga que a ideia é de uma leitura anterior e procure a fonte antes de afirmá-la como fato.' },
  ],
  aplicacao: `<p>Escolha três afirmações de uma aula do curso. Para cada uma, escreva a referência completa da fonte primária que a sustenta e classifique a fonte (primária, secundária ou geral).</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, nota sobre as referências ao final de cada parágrafo (como seguir as remissões às fontes)', link: null,
    orientacao: `<p>Escolha um parágrafo do Catecismo, siga uma das remissões e compare o trecho citado com o contexto do documento original.</p>`,
  },
  perguntas: [
    { p: 'O que é fonte primária?', r: 'O texto do próprio autor ou documento da época.' },
    { p: 'O que a referência completa deve permitir?', r: 'Que o leitor encontre a obra e a passagem.' },
    { p: 'O que a Lei 9.610/1998 permite quanto à citação?', r: 'Citar passagens para estudo, crítica ou polêmica, na medida justificada, indicando autor e origem.' },
  ],
  exercicios: [
    mc('A Suma Teológica, estudada para conhecer o pensamento de Tomás, é fonte:', ['Primária', 'Secundária', 'Geral', 'Jornalística'], 0, 'Do próprio autor.'),
    mc('Um estudo moderno sobre Tomás é fonte:', ['Secundária', 'Primária', 'Anônima', 'Litúrgica'], 0, 'Estudo sobre o autor.'),
    mc('A referência completa serve para:', ['O leitor encontrar a obra', 'Enfeitar o texto', 'Substituir a citação', 'Evitar a leitura'], 0, 'Conferência.'),
    mc('A origem de uma ideia que você reformulou:', ['Deve ser indicada', 'Pode ser omitida', 'É sempre sua', 'Não importa'], 0, 'Honestidade.'),
    mc('O Catecismo da Igreja Católica deve ser usado como:', ['Porta de entrada para as fontes', 'Substituto de toda leitura', 'Obra sem referências', 'Texto literário'], 0, 'Remissões.'),
    disc('Entregue três afirmações de uma aula com a referência completa da fonte primária e a classificação de cada fonte.', ['Três afirmações', 'Referências completas', 'Classificação', 'Edição indicada']),
  ],
  resumo: ['Citação e referência permitem conferir.', 'Fonte primária, secundária e geral.', 'Avaliar autoria, edição e data.', 'Indicar a origem é honestidade intelectual.'],
  referencias: [
    { texto: 'Associação Brasileira de Normas Técnicas, NBR 6023 (referências) e NBR 10520 (citações).' },
    { texto: 'Brasil, Lei 9.610, de 19 de fevereiro de 1998 (direitos autorais), art. 46.' },
    { texto: 'Catecismo da Igreja Católica.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as referências', 'Ler a fonte indicada'],
  revisao: [['Fonte primária', 'Texto do próprio autor.'], ['Referência', 'Permite encontrar a obra.'], ['Plágio', 'Apresentar como seu o que é de outro.']],
  avancado: {
    texto: `<h3>Traduções e edições</h3>
<p>Uma tradução é uma interpretação: a mesma frase pode mudar de sentido conforme a escolha do tradutor ${tag('interpretacao')}. Ao citar uma obra traduzida, indique o tradutor e, quando a questão depender de uma palavra, confira o original ou uma segunda tradução.</p>`,
    leituras: [],
    exercicios: [
      mc('Ao citar obra traduzida, convém indicar:', ['O tradutor', 'Só o editor', 'Só o preço', 'Nada'], 0, 'Edição.'),
      mc('Quando o argumento depende de uma palavra, convém:', ['Conferir o original ou outra tradução', 'Ignorar a tradução', 'Mudar a palavra', 'Omitir a citação'], 0, 'Cautela.'),
      mc('Uma tradução é:', ['Uma interpretação', 'Uma cópia perfeita', 'Um plágio', 'Uma fonte geral'], 0, 'Escolhas do tradutor.'),
      disc('Compare duas traduções de um mesmo trecho curto e explique uma diferença de sentido.', ['Trecho', 'Duas traduções', 'Diferença', 'Juízo'])],
  },
}),

avaliacao('m0-4', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre leitura ativa, ficha de leitura, citação, referência e fontes, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas m3-1, m0-2 e m0-3.</li><li>Releia sua ficha de leitura e suas referências.</li></ul>`,
[
  disc('Explique, com um exemplo de um livro do curso, como a ficha de leitura separa citação, paráfrase e comentário.', ['Os três tipos', 'Exemplo', 'Separação', 'Referência']),
  disc('Escolha uma afirmação de uma aula, indique a fonte primária que a sustenta, avalie a edição usada e diga o que faria se não encontrasse a fonte.', ['Fonte primária', 'Avaliação da edição', 'Decisão sem fonte', 'Honestidade']),
]),
];
