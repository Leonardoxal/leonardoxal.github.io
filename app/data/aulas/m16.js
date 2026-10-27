// Módulo 16 — Projeto de formação intelectual.
// As aulas 1 a 6 conduzem o ensaio final passo a passo; a 7 é a avaliação final; a 8, o plano pós-curso.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm16-1', titulo: 'Escolher a pergunta',
  aprendera: ['O que torna uma pergunta filosófica', 'Como delimitar uma pergunta para um ensaio', 'Exemplos de boas e más perguntas', 'Registrar a pergunta no Caderno com justificativa'],
  prereq: ['Módulo 13 concluído'],
  explicacao: `
<h3>Pergunta filosófica</h3>
<p>Uma pergunta é filosófica quando não se resolve só por observação ou cálculo, exige análise de conceitos e argumentos, e toca princípios (do ser, do conhecer, do agir) ${tag('argumento')}. "Quantos neurônios há no cérebro?" é científica; "o pensamento é só atividade neuronal?" é filosófica.</p>
<h3>Delimitar</h3>
<p>"O que é a justiça?" é grande demais para um ensaio. "A definição de justiça de Tomás (ST II-II, q. 58, a. 1) resiste à crítica de Hayek à justiça social?" é delimitada: tem autores, textos e uma tese testável ${tag('argumento')}.</p>
<h3>Critérios</h3>
<ol>
<li>Clara: uma frase, termos definíveis.</li>
<li>Delimitada: dois ou três autores, textos precisos.</li>
<li>Disputada: há posições razoáveis em mais de um lado.</li>
<li>Relevante para você: ligada ao seu percurso no curso.</li>
<li>Viável: fontes disponíveis em sua língua ou em línguas que lê ${tag('argumento')}.</li>
</ol>
<h3>Exemplos</h3>
<ul>
<li>"A terceira via de Tomás sobrevive à objeção da série infinita?"</li>
<li>"O argumento do conhecimento de Jackson refuta o fisicalismo ou só o fisicalismo de tipo?"</li>
<li>"A crítica de MacIntyre ao projeto iluminista atinge a ética de Kant?"</li>
</ul>`,
  vocabulario: [['Pergunta filosófica', 'Pergunta sobre princípios, resolvida por análise e argumento.'], ['Delimitação', 'Recorte de autores, textos e tese.'], ['Pergunta disputada', 'Com posições razoáveis em mais de um lado.'], ['Viabilidade', 'Fontes e tempo disponíveis.'], ['Tese', 'Resposta proposta à pergunta.']],
  exemplos: '<p>Má pergunta: "Deus existe?" (grande demais). Boa: "O argumento cosmológico kalam resiste à objeção de que o Big Bang não implica começo absoluto?"</p>',
  contexto: `<p>As "questões disputadas" medievais são o modelo de pergunta delimitada e disputada (aula 8-5) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que delimitar (reconstruído)', tag: 'argumento',
    premissas: ['Um ensaio tem espaço limitado.', 'Uma pergunta ampla exige tratar muitos autores e objeções.', 'Tratar muitos superficialmente não estabelece nada.'],
    conclusao: 'Logo, um bom ensaio responde a uma pergunta delimitada com profundidade.',
    nota: 'A pergunta ampla continua como horizonte; o ensaio é um passo nela.' },
  objecoes: [{ objecao: 'Delimitar demais torna o ensaio irrelevante.', tag: 'debate', resposta: 'Uma pergunta delimitada bem escolhida ilumina a grande pergunta. O critério 4 (relevância) protege contra a irrelevância.' }],
  aplicacao: '<p>Escreva no Caderno três perguntas candidatas, avalie cada uma pelos cinco critérios e escolha uma.</p>',
  fonte: { obra: 'Tomás de Aquino, um artigo das Questões Disputadas (Sobre a Verdade, q. 1, a. 1)', link: null, orientacao: '<p>Leia o título e as objeções do artigo. Observe como a pergunta é formulada de modo preciso.</p>' },
  perguntas: [
    { p: 'O que torna uma pergunta filosófica?', r: 'Exige análise de conceitos e argumentos sobre princípios.' },
    { p: 'Quais os cinco critérios?', r: 'Clara, delimitada, disputada, relevante, viável.' },
    { p: 'Qual o modelo medieval?', r: 'As questões disputadas.' },
  ],
  exercicios: [
    mc('Qual é a pergunta mais delimitada?', ['O que é o bem?', 'A crítica de Hume ao argumento do desígnio atinge Paley?', 'Existe verdade?', 'O que é filosofia?'], 1, 'Autores e tese.'),
    mc('"Quantos neurônios há no cérebro?" é pergunta:', ['Filosófica', 'Científica', 'Teológica', 'Retórica'], 1, 'Resolve-se por observação.'),
    mc('Uma pergunta sem posições razoáveis opostas falha no critério:', ['Clareza', 'Disputa', 'Viabilidade', 'Relevância'], 1, 'Disputada.'),
    disc('Formule sua pergunta de ensaio e justifique-a pelos cinco critérios.', ['Pergunta clara', 'Delimitação', 'Disputa', 'Relevância e viabilidade'])],
  resumo: ['Pergunta filosófica.', 'Delimitação.', 'Cinco critérios.', 'Questões disputadas como modelo.', 'Escolha registrada.'],
  referencias: [{ texto: 'Umberto Eco, Como se Faz uma Tese (1977).' }, { texto: 'Tomás de Aquino, Questões Disputadas sobre a Verdade.' }],
  revisao: [['Cinco critérios', 'Clara, delimitada, disputada, relevante, viável.'], ['Delimitação', 'Autores, textos, tese.'], ['Como se Faz uma Tese', 'Eco.']],
  avancado: {
    texto: `<h3>Eco</h3>
<p>Umberto Eco (Como se Faz uma Tese, 1977) dá regras práticas: tema delimitado, fontes acessíveis, uso de fichas ${tag('fato')}.</p>
<h3>Perguntas de pesquisa</h3>
<p>Nível avançado: além da pergunta, formule a hipótese de trabalho e o que a refutaria ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Umberto Eco, Como se Faz uma Tese (1977).' }],
    exercicios: [
      mc('Como se Faz uma Tese é de:', ['Eco', 'Sertillanges', 'Adler', 'Booth'], 0, '1977.'),
      mc('Uma hipótese de trabalho deve indicar:', ['O que a confirma e o que a refutaria', 'Só o que a confirma', 'Nada', 'A conclusão definitiva'], 0, 'Testabilidade.'),
      disc('Formule a hipótese de trabalho do seu ensaio e o que a refutaria.', ['Hipótese', 'Refutador', 'Fontes', 'Clareza'])],
  },
}),

aula({
  id: 'm16-2', titulo: 'Definir conceitos e contexto',
  aprendera: ['Definir os termos centrais da pergunta', 'Distinguir sentidos de um termo em autores diferentes', 'Reconstruir o contexto histórico das fontes', 'Montar um glossário do ensaio'],
  prereq: ['Aula anterior; Módulo 4, aula 2'],
  explicacao: `
<h3>Definir</h3>
<p>Use definição por gênero e diferença quando possível (Módulo 4) e explicite as definições de cada autor ${tag('argumento')}. "Justiça" em Tomás (virtude) e em Rawls (princípios de instituições) não são o mesmo objeto.</p>
<h3>Equívocos</h3>
<p>Muitos debates aparentes são equívocos: "liberdade" negativa × positiva; "natureza" como essência × como mundo físico ${tag('argumento')}. Liste os sentidos antes de argumentar.</p>
<h3>Contexto</h3>
<p>Para cada fonte: data, lugar, interlocutores, problema que o autor enfrentava ${tag('argumento')}. Ler Hume sem Locke, ou Kant sem Hume, distorce ${tag('interpretacao')}.</p>
<h3>Glossário</h3>
<p>Monte no Caderno um glossário: termo, definição adotada no ensaio, sentido em cada autor, fonte ${tag('argumento')}.</p>`,
  vocabulario: [['Glossário', 'Lista de termos com definições adotadas.'], ['Equívoco', 'Mesmo termo com sentidos diferentes.'], ['Contexto', 'Data, lugar, interlocutores, problema.'], ['Definição estipulativa', 'Sentido fixado para o ensaio.'], ['Anacronismo', 'Ler um autor com categorias de outra época.']],
  exemplos: '<p>Ao comparar "lei natural" em Tomás e Grotius, note que Grotius admite hipoteticamente sua validade sem Deus (etiamsi daremus): o termo é o mesmo, o fundamento não.</p>',
  contexto: `<p>A história dos conceitos (Begriffsgeschichte, Reinhart Koselleck) estuda a mudança de sentido dos termos ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que definir antes de argumentar (reconstruído)', tag: 'argumento',
    premissas: ['Argumentos válidos exigem termos com o mesmo sentido em todas as premissas.', 'Termos filosóficos têm vários sentidos.', 'Sem definição, a mudança de sentido passa despercebida (falácia de equívoco).'],
    conclusao: 'Logo, as definições vêm antes da argumentação.',
    nota: 'Definir não é decidir a questão: a definição deve ser aceitável para as posições em debate.' },
  objecoes: [{ objecao: 'Definições no início prejulgam a conclusão.', tag: 'debate', resposta: 'Por isso a definição do ensaio deve ser neutra ou, se estipulativa, declarada como tal e justificada.' }],
  aplicacao: '<p>Monte o glossário do seu ensaio com pelo menos cinco termos.</p>',
  fonte: { obra: 'Aristóteles, Metafísica V (dicionário de termos filosóficos)', link: null, orientacao: '<p>Leia dois verbetes de Metafísica V (por exemplo, "causa" e "natureza") e observe como Aristóteles distingue sentidos.</p>' },
  perguntas: [
    { p: 'O que deve conter o glossário?', r: 'Termo, definição adotada, sentido em cada autor, fonte.' },
    { p: 'O que é anacronismo?', r: 'Ler um autor com categorias de outra época.' },
    { p: 'Qual livro de Aristóteles é um dicionário filosófico?', r: 'Metafísica V.' },
  ],
  exercicios: [
    mc('"Justiça" em Tomás e Rawls é exemplo de:', ['Sinonímia perfeita', 'Termo com objetos diferentes', 'Contradição', 'Tautologia'], 1, 'Virtude × instituições.'),
    mc('Metafísica V é:', ['Teologia', 'Dicionário de termos', 'Física', 'Ética'], 1, 'Distinção de sentidos.'),
    mc('Begriffsgeschichte é associada a:', ['Koselleck', 'Kant', 'Kripke', 'Kelsen'], 0, 'História dos conceitos.'),
    disc('Apresente o glossário do seu ensaio (cinco termos) com os sentidos em cada autor.', ['Cinco termos', 'Sentidos por autor', 'Fontes', 'Definições neutras ou justificadas'])],
  resumo: ['Definir os termos.', 'Equívocos.', 'Contexto das fontes.', 'Glossário.', 'Definição não prejulga.'],
  referencias: [{ texto: 'Aristóteles, Metafísica V.' }, { texto: 'Reinhart Koselleck, Futuro Passado (1979).' }],
  revisao: [['Glossário', 'Termo, definição, sentidos, fonte.'], ['Anacronismo', 'Categorias de outra época.'], ['Metafísica V', 'Dicionário aristotélico.']],
  avancado: {
    texto: `<h3>Skinner</h3>
<p>Quentin Skinner ("Meaning and Understanding in the History of Ideas", 1969) criticou a "mitologia das doutrinas" — atribuir a autores respostas a perguntas que eles não fizeram ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Quentin Skinner, "Meaning and Understanding in the History of Ideas" (1969).' }],
    exercicios: [
      mc('A "mitologia das doutrinas" é crítica de:', ['Koselleck', 'Skinner', 'Gadamer', 'Strauss'], 1, '1969.'),
      mc('Skinner critica atribuir a autores:', ['Textos', 'Respostas a perguntas que não fizeram', 'Datas', 'Nomes'], 1, 'Anacronismo.'),
      disc('Seu ensaio corre o risco da "mitologia das doutrinas"? Como evitá-lo?', ['Identifica o risco', 'Estratégia', 'Exemplo', 'Clareza'])],
  },
}),

aula({
  id: 'm16-3', titulo: 'Fontes primárias',
  aprendera: ['Selecionar fontes primárias e secundárias', 'Ler com fichamento', 'Citar com precisão (edição, seção, parágrafo)', 'Não inventar citações nem páginas'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>Primárias e secundárias</h3>
<p>Fonte primária: o texto do autor estudado. Secundária: estudos sobre ele ${tag('fato')}. O ensaio se apoia nas primárias; as secundárias ajudam a interpretar e mostram o estado do debate ${tag('argumento')}.</p>
<h3>Fichamento</h3>
<p>Para cada passagem: referência completa, resumo com suas palavras, citação curta (se essencial), comentário seu, ligação com a pergunta ${tag('argumento')}.</p>
<h3>Citar com precisão</h3>
<p>Use as referências padronizadas quando existirem: Platão por Stephanus (República 514a), Aristóteles por Bekker (Ética 1094a), Tomás por parte/questão/artigo, Kant pela paginação A/B, Agostinho por livro e capítulo ${tag('fato')}. Indique a tradução usada.</p>
<h3>Honestidade</h3>
<p>Nunca cite de memória como se fosse literal; nunca invente número de página; se não verificou, diga "cf." ou parafraseie com a referência aproximada e a marca "a confirmar" ${tag('argumento')}. Citações célebres atribuídas sem fonte (como a falsa de Chesterton, aula 12-7) são armadilhas comuns.</p>`,
  vocabulario: [['Fonte primária', 'Texto do autor.'], ['Fonte secundária', 'Estudo sobre o autor.'], ['Fichamento', 'Registro estruturado de leitura.'], ['Stephanus/Bekker', 'Paginação padrão de Platão/Aristóteles.'], ['Cf.', '"Confira": referência não literal.']],
  exemplos: '<p>Correto: "Tomás define a lei como ordenação da razão para o bem comum (ST I-II, q. 90, a. 4)". Incorreto: "Tomás diz, na página 132, que..." sem edição.</p>',
  contexto: `<p>A paginação Stephanus vem da edição de Platão de Henri Estienne (1578) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que as primárias decidem (reconstruído)', tag: 'argumento',
    premissas: ['A pergunta é sobre o que os autores sustentam e se isso é verdadeiro.', 'O que sustentam está nos seus textos.', 'Secundárias podem errar ou divergir.'],
    conclusao: 'Logo, as primárias são a instância decisiva; as secundárias, auxiliares.',
    nota: 'Isso não dispensa as secundárias: elas mostram contextos, manuscritos e leituras que o leitor sozinho não veria.' },
  objecoes: [{ objecao: 'Sem conhecer grego, latim ou alemão, a leitura das primárias é sempre indireta.', tag: 'debate', resposta: 'É verdade; por isso compare duas traduções nas passagens decisivas e registre termos originais. Aprender uma língua clássica é objetivo do plano avançado (aula 8).' }],
  aplicacao: '<p>Faça cinco fichas de passagens primárias para o seu ensaio.</p>',
  fonte: { obra: 'As fontes primárias do seu ensaio', link: null, orientacao: '<p>Identifique três passagens primárias decisivas e confira cada uma em duas traduções, se possível.</p>' },
  perguntas: [
    { p: 'Diferença entre fonte primária e secundária?', r: 'Texto do autor × estudo sobre o autor.' },
    { p: 'Como citar Aristóteles?', r: 'Pela paginação Bekker (ex.: 1094a).' },
    { p: 'O que fazer com uma citação não verificada?', r: 'Parafrasear com "cf." e marcar "a confirmar".' },
  ],
  exercicios: [
    mc('"República 514a" usa a paginação:', ['Bekker', 'Stephanus', 'A/B', 'Migne'], 1, 'Platão.'),
    mc('Kant é citado pela paginação:', ['Stephanus', 'A/B das edições da Crítica', 'Bekker', 'Questão/artigo'], 1, '1781/1787.'),
    mc('Inventar número de página é:', ['Aceitável', 'Desonestidade intelectual', 'Estilo', 'Necessário'], 1, 'Regra do curso.'),
    disc('Apresente três fichas de leitura completas das fontes primárias do seu ensaio.', ['Referência completa', 'Resumo próprio', 'Comentário', 'Ligação com a pergunta'])],
  resumo: ['Primárias decidem.', 'Fichamento.', 'Referências padronizadas.', 'Honestidade nas citações.', 'Comparar traduções.'],
  referencias: [{ texto: 'Mortimer Adler e Charles Van Doren, Como Ler um Livro (1972).' }, { texto: 'Umberto Eco, Como se Faz uma Tese (1977), cap. IV.' }],
  revisao: [['Stephanus', 'Platão.'], ['Bekker', 'Aristóteles.'], ['Cf.', 'Referência não literal.']],
  avancado: {
    texto: `<h3>Edições críticas</h3>
<p>Leonina (Tomás), CCSL (Padres latinos), Akademie-Ausgabe (Kant), Gesamtausgabe (Heidegger): saber qual é a edição crítica de um autor é parte do nível avançado ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Mortimer Adler e Charles Van Doren, Como Ler um Livro (1972).' }],
    exercicios: [
      mc('A edição crítica de Kant é a:', ['Leonina', 'Akademie-Ausgabe', 'CCSL', 'Migne'], 1, 'Berlim.'),
      mc('A edição crítica de Tomás é a:', ['Leonina', 'Akademie', 'Gesamtausgabe', 'Oxford'], 0, 'Leão XIII.'),
      disc('Identifique a edição crítica dos autores do seu ensaio e a tradução que usará.', ['Edições', 'Traduções', 'Justificativa', 'Clareza'])],
  },
}),

aula({
  id: 'm16-4', titulo: 'Reconstruir argumentos',
  aprendera: ['Reconstruir três argumentos em premissas numeradas', 'Testar validade e solidez', 'Identificar premissas implícitas', 'Aplicar o princípio de caridade'],
  prereq: ['Módulo 4'],
  explicacao: `
<h3>Reconstrução</h3>
<p>Para cada argumento: tese do autor; premissas numeradas; conclusão; forma lógica; premissas implícitas explicitadas ${tag('argumento')}.</p>
<h3>Testes</h3>
<ol>
<li><strong>Validade</strong>: a conclusão segue das premissas? (Módulo 4, aulas 4–7)</li>
<li><strong>Solidez</strong>: as premissas são verdadeiras ou bem apoiadas?</li>
<li><strong>Termos</strong>: há equívoco entre as premissas?</li>
<li><strong>Premissas implícitas</strong>: o argumento depende de algo não dito? ${tag('argumento')}</li>
</ol>
<h3>Caridade</h3>
<p>Entre reconstruções possíveis, escolha a mais forte compatível com o texto ${tag('argumento')}. Se o argumento parece absurdo, provavelmente você o entendeu mal.</p>
<h3>Três argumentos</h3>
<p>O critério do curso exige reconstruir três argumentos de fontes primárias: o da tese principal, o de uma posição rival e o da objeção mais forte ${tag('argumento')}.</p>`,
  vocabulario: [['Reconstrução', 'Forma explícita de um argumento.'], ['Premissa implícita', 'Premissa necessária não declarada.'], ['Princípio de caridade', 'Escolher a leitura mais forte.'], ['Validade', 'Conclusão segue das premissas.'], ['Solidez', 'Válido e com premissas verdadeiras.']],
  exemplos: '<p>"Sócrates é homem, logo é mortal" tem premissa implícita: "todo homem é mortal". Explicitar mostra onde o argumento pode ser atacado.</p>',
  contexto: `<p>As reconstruções em todas as aulas do curso são modelos ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que reconstruir (reconstruído)', tag: 'argumento',
    premissas: ['Avaliar um argumento exige ver sua estrutura.', 'Textos apresentam argumentos de modo implícito e retórico.', 'A reconstrução torna a estrutura explícita.'],
    conclusao: 'Logo, avaliar exige reconstruir.',
    nota: 'Toda reconstrução é interpretação: deve ser justificada pelo texto.' },
  objecoes: [{ objecao: 'Reconstruir trai o texto, que tem nuances que a forma lógica perde.', tag: 'debate', resposta: 'Por isso a reconstrução acompanha a leitura, não a substitui; e deve citar as passagens que a sustentam.' }],
  aplicacao: '<p>Reconstrua no Caderno os três argumentos do seu ensaio.</p>',
  fonte: { obra: 'As passagens primárias fichadas na aula anterior', link: null, orientacao: '<p>Para cada ficha decisiva, extraia o argumento e reconstrua-o.</p>' },
  perguntas: [
    { p: 'Quais os quatro testes?', r: 'Validade, solidez, termos, premissas implícitas.' },
    { p: 'O que é o princípio de caridade?', r: 'Escolher a leitura mais forte compatível com o texto.' },
    { p: 'Quais três argumentos o ensaio exige?', r: 'Tese principal, posição rival, objeção mais forte.' },
  ],
  exercicios: [
    mc('Um argumento válido com premissa falsa é:', ['Sólido', 'Não sólido', 'Inválido', 'Falácia formal'], 1, 'Validade ≠ solidez.'),
    mc('"Sócrates é homem, logo mortal" omite:', ['A conclusão', 'Uma premissa universal', 'O sujeito', 'Nada'], 1, 'Entimema.'),
    mc('Se um argumento parece absurdo, primeiro:', ['Rejeite', 'Reveja sua leitura', 'Ignore', 'Ridicularize'], 1, 'Caridade.'),
    disc('Apresente as três reconstruções do seu ensaio com os quatro testes.', ['Três argumentos', 'Premissas numeradas', 'Testes aplicados', 'Caridade'])],
  resumo: ['Premissas numeradas.', 'Quatro testes.', 'Premissas implícitas.', 'Caridade.', 'Três argumentos.'],
  referencias: [{ texto: 'Anthony Weston, A Construção do Argumento (1987).' }, { texto: 'Módulo 4 deste curso.' }],
  revisao: [['Entimema', 'Argumento com premissa implícita.'], ['Caridade', 'Leitura mais forte.'], ['Três argumentos', 'Tese, rival, objeção.']],
  avancado: {
    texto: `<h3>Formalização</h3>
<p>No nível avançado, formalize ao menos um argumento em lógica de predicados ou modal e verifique a validade formalmente ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Anthony Weston, A Construção do Argumento (1987).' }],
    exercicios: [
      mc('A Construção do Argumento é de:', ['Weston', 'Copi', 'Toulmin', 'Walton'], 0, '1987.'),
      mc('Formalizar em lógica modal ajuda com argumentos sobre:', ['Necessidade e possibilidade', 'Cores', 'Datas', 'Estilo'], 0, 'Ex.: presciência.'),
      disc('Formalize um dos argumentos do seu ensaio e verifique a validade.', ['Formalização', 'Verificação', 'Comentário', 'Clareza'])],
  },
}),

aula({
  id: 'm16-5', titulo: 'Objeções e comparação',
  aprendera: ['Formular a objeção mais forte (steelman)', 'Responder sem espantalho', 'Comparar posições com critérios explícitos', 'Reconhecer quando uma objeção não tem resposta'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>Steelman</h3>
<p>Formule a objeção na versão que seu melhor defensor aceitaria ${tag('argumento')}. Se possível, use as palavras de um autor real que a defende.</p>
<h3>Responder</h3>
<p>Modos de resposta: negar uma premissa, mostrar equívoco, distinguir (como os escolásticos: "concedo em um sentido, nego em outro"), mostrar que a objeção prova demais ${tag('argumento')}.</p>
<h3>Comparar</h3>
<p>Critérios para comparar posições: coerência interna, poder explicativo, compatibilidade com dados e intuições, simplicidade, custo das premissas ${tag('argumento')}.</p>
<h3>Honestidade</h3>
<p>Se uma objeção não tem boa resposta, diga. Isso não invalida o ensaio; mostra o estado real da questão ${tag('argumento')}. Tomás às vezes responde só com distinções e reconhece mistério.</p>`,
  vocabulario: [['Steelman', 'Versão mais forte de uma posição.'], ['Distinção', 'Conceder em um sentido, negar em outro.'], ['Provar demais', 'Objeção que, se válida, refutaria algo aceito.'], ['Poder explicativo', 'Capacidade de dar conta de dados.'], ['Custo teórico', 'Premissas que uma posição exige aceitar.']],
  exemplos: '<p>Objeção: "se Deus existe, não haveria mal". Resposta por distinção (Tomás, ST I, q. 2, a. 3, ad 1): não haveria mal sem razão; Deus permite o mal para tirar dele um bem maior.</p>',
  contexto: `<p>As respostas às objeções da Suma são o modelo (aula 8-7) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que buscar a objeção mais forte (reconstruído)', tag: 'argumento',
    premissas: ['Uma tese só está estabelecida se resiste às melhores objeções.', 'Responder a objeções fracas não testa a tese.', 'Logo, só a objeção mais forte testa a tese.'],
    conclusao: 'Portanto, o ensaio deve enfrentar a objeção mais forte.',
    nota: 'É o mesmo princípio da aula sobre o método escolástico.' },
  objecoes: [{ objecao: 'Reconhecer objeções sem resposta enfraquece a tese.', tag: 'debate', resposta: 'Enfraquece a pretensão de certeza, não a honestidade do ensaio. Uma tese bem avaliada pode ser "a mais razoável", não "demonstrada".' }],
  aplicacao: '<p>Escreva a objeção mais forte à sua tese e sua melhor resposta.</p>',
  fonte: { obra: 'Tomás, ST I, q. 2, a. 3, ad 1 e ad 2', link: null, orientacao: '<p>Releia as respostas às objeções e identifique o modo de resposta usado (distinção, negação de premissa etc.).</p>' },
  perguntas: [
    { p: 'O que é steelman?', r: 'A versão mais forte de uma posição.' },
    { p: 'Cite um modo de responder a objeções.', r: 'Negar premissa, mostrar equívoco, distinguir, mostrar que prova demais.' },
    { p: 'Cite um critério de comparação.', r: 'Coerência, poder explicativo, dados, simplicidade, custo.' },
  ],
  exercicios: [
    mc('"Concedo em um sentido, nego em outro" é:', ['Espantalho', 'Distinção', 'Ad hominem', 'Petição de princípio'], 1, 'Método escolástico.'),
    mc('Responder só a objeções fracas é:', ['Rigor', 'Espantalho', 'Caridade', 'Steelman'], 1, 'Não testa a tese.'),
    mc('Uma objeção que, se válida, refutaria algo aceito:', ['Prova demais', 'É sólida', 'É analítica', 'É irrelevante'], 0, 'Resposta clássica.'),
    disc('Apresente a objeção mais forte à sua tese, a resposta e uma comparação com a posição rival pelos critérios da aula.', ['Steelman', 'Resposta', 'Critérios de comparação', 'Honestidade'])],
  resumo: ['Steelman.', 'Modos de resposta.', 'Critérios de comparação.', 'Honestidade.', 'Modelo da Suma.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma Teológica I, q. 2, a. 3.' }, { texto: 'Daniel Dennett, Bombas de Intuição (2013), regras de Rapoport.' }],
  revisao: [['Steelman', 'Versão mais forte.'], ['Distinção', 'Resposta escolástica.'], ['Regras de Rapoport', 'Dennett.']],
  avancado: {
    texto: `<h3>Regras de Rapoport</h3>
<p>Dennett (Bombas de Intuição, 2013) resume as "regras de Rapoport": reexpresse a posição do outro tão bem que ele diga "obrigado"; liste pontos de acordo; mencione o que aprendeu; só então critique ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Daniel Dennett, Bombas de Intuição e Outras Ferramentas do Pensamento (2013).' }],
    exercicios: [
      mc('As regras de Rapoport foram popularizadas por:', ['Dennett', 'Rawls', 'Popper', 'Searle'], 0, 'Bombas de Intuição.'),
      mc('A primeira regra de Rapoport é:', ['Criticar', 'Reexpressar a posição do outro', 'Ridicularizar', 'Concordar'], 1, 'Antes da crítica.'),
      disc('Aplique as regras de Rapoport à posição rival do seu ensaio.', ['Reexpressão', 'Acordos', 'Aprendizado', 'Crítica'])],
  },
}),

aula({
  id: 'm16-6', titulo: 'Redação do ensaio',
  aprendera: ['Estrutura de um ensaio filosófico', 'Clareza e precisão na escrita', 'Uso de etiquetas epistêmicas no próprio texto', 'Revisão com a rubrica'],
  prereq: ['Aulas 1 a 5 deste módulo'],
  explicacao: `
<h3>Estrutura</h3>
<ol>
<li><strong>Introdução</strong>: pergunta, tese, roteiro.</li>
<li><strong>Conceitos e contexto</strong>: glossário condensado.</li>
<li><strong>Argumento principal</strong>: reconstrução e defesa.</li>
<li><strong>Posição rival</strong>: reconstrução caridosa.</li>
<li><strong>Objeção e resposta</strong>.</li>
<li><strong>Comparação</strong> com critérios explícitos.</li>
<li><strong>Conclusão</strong>: o que foi estabelecido e com que grau de confiança; o que fica em aberto ${tag('argumento')}.</li>
</ol>
<h3>Estilo</h3>
<p>Frases claras, um parágrafo por ideia, termos constantes, exemplos ${tag('argumento')}. Evite retórica sem argumento e jargão sem definição.</p>
<h3>Etiquetas</h3>
<p>Marque no texto o estatuto das afirmações: fato, argumento, interpretação, hipótese, doutrina, debate — como este curso faz ${tag('argumento')}.</p>
<h3>Revisão</h3>
<p>Releia com a rubrica da avaliação final (critérios da aula 7) e peça a alguém que resuma sua tese: se não conseguir, ela não está clara ${tag('argumento')}.</p>`,
  vocabulario: [['Roteiro', 'Anúncio da estrutura do ensaio.'], ['Grau de confiança', 'Quão estabelecida está a conclusão.'], ['Jargão', 'Termo técnico não definido.'], ['Rubrica', 'Critérios de avaliação.'], ['Parágrafo-ideia', 'Um parágrafo para cada ideia.']],
  exemplos: '<p>Má conclusão: "Assim, fica provado que Tomás estava certo." Boa: "O argumento resiste às objeções A e B; a objeção C exige uma premissa metafísica que defendi só parcialmente."</p>',
  contexto: `<p>O ensaio é o produto final do curso ${tag('fato')}.</p>`,
  argumento: { titulo: 'Clareza como dever intelectual (reconstruído)', tag: 'argumento',
    premissas: ['Escrever filosofia é propor razões a um leitor.', 'Razões obscuras não podem ser avaliadas.', 'O que não pode ser avaliado não pode ser aceito racionalmente.'],
    conclusao: 'Logo, a clareza é dever de quem escreve filosofia.',
    nota: 'Há textos difíceis porque o assunto é difícil; a regra é não acrescentar dificuldade desnecessária.' },
  objecoes: [{ objecao: 'Grandes filósofos (Hegel, Heidegger) são obscuros.', tag: 'debate', resposta: 'Alguns são difíceis pelo assunto; outros, por estilo. Para um ensaio de formação, a clareza é exigência; ela também testa se você entendeu.' }],
  aplicacao: '<p>Escreva o rascunho completo do ensaio (sugestão: 3.000 a 5.000 palavras) e revise-o com a rubrica.</p>',
  fonte: { obra: 'Seu próprio ensaio', link: null, orientacao: '<p>Antes de entregar, peça a alguém que resuma a tese em uma frase e compare com a sua.</p>' },
  perguntas: [
    { p: 'Quais as sete partes do ensaio?', r: 'Introdução, conceitos, argumento, rival, objeção, comparação, conclusão.' },
    { p: 'O que a conclusão deve indicar?', r: 'O que foi estabelecido, com que confiança, e o que fica em aberto.' },
    { p: 'Como testar a clareza?', r: 'Pedir a alguém que resuma a tese.' },
  ],
  exercicios: [
    mc('A introdução deve conter:', ['Só citações', 'Pergunta, tese e roteiro', 'A conclusão inteira', 'Biografia'], 1, 'Estrutura.'),
    mc('Uma boa conclusão:', ['Exagera a certeza', 'Indica o grau de confiança', 'Repete a introdução', 'Introduz tema novo'], 1, 'Honestidade.'),
    mc('Jargão sem definição deve ser:', ['Usado à vontade', 'Evitado ou definido', 'Multiplicado', 'Traduzido apenas'], 1, 'Clareza.'),
    disc('Entregue o resumo do ensaio: pergunta, tese, estrutura e conclusão com grau de confiança.', ['Pergunta', 'Tese', 'Estrutura', 'Conclusão honesta'])],
  resumo: ['Sete partes.', 'Clareza.', 'Etiquetas epistêmicas.', 'Revisão pela rubrica.', 'Conclusão com grau de confiança.'],
  referencias: [{ texto: 'Jim Pryor, "Guidelines on Writing a Philosophy Paper" (texto online).', verificacao: 'a confirmar' }, { texto: 'Umberto Eco, Como se Faz uma Tese (1977), cap. V.' }],
  revisao: [['Estrutura do ensaio', 'Sete partes.'], ['Grau de confiança', 'Na conclusão.'], ['Teste de clareza', 'Resumo por outro leitor.']],
  avancado: {
    texto: `<h3>Revisão por pares</h3>
<p>No nível avançado, submeta o ensaio a um leitor crítico (professor, colega) e responda por escrito às suas objeções ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Umberto Eco, Como se Faz uma Tese (1977), cap. V.' }],
    exercicios: [
      mc('A revisão por pares serve para:', ['Elogios', 'Encontrar objeções que você não viu', 'Aumentar o texto', 'Nada'], 1, 'Crítica.'),
      mc('Responder por escrito às objeções do revisor:', ['É perda de tempo', 'Melhora o ensaio', 'É proibido', 'É opcional sempre'], 1, 'Prática acadêmica.'),
      disc('Registre as objeções de um leitor ao seu ensaio e suas respostas.', ['Objeções', 'Respostas', 'Mudanças feitas', 'Clareza'])],
  },
}),

avaliacao('m16-7', 'Avaliação final', `
<h3>O que esta avaliação verifica</h3>
<p>A avaliação final reúne questões de todo o curso e o projeto do ensaio. Ela verifica se você formula uma pergunta filosófica, reconstrói três argumentos de fontes primárias, enfrenta objeções e conclui com justificação.</p>
<h3>Critério do Degrau 12</h3>
<p>Projeto final completo conforme a rubrica. Lembre: este curso é formação pessoal, não diploma.</p>`,
[], { prova: 'final' }),

aula({
  id: 'm16-8', titulo: 'Plano de estudos avançados',
  aprendera: ['Planejar a continuidade dos estudos após o curso', 'Escolher línguas, autores e áreas de aprofundamento', 'Ritmo e revisão de longo prazo', 'Formação acadêmica formal: quando e como'],
  prereq: ['Avaliação final'],
  explicacao: `
<h3>Depois do curso</h3>
<p>O curso é começo. A formação intelectual continua pela leitura integral dos grandes textos, pelo estudo de línguas e pela escrita ${tag('argumento')}.</p>
<h3>Três eixos</h3>
<ol>
<li><strong>Línguas</strong>: latim (Tomás, Agostinho), grego (Platão, Aristóteles, Novo Testamento) ou alemão (Kant, Hegel, Husserl). Escolha uma e estude de forma contínua.</li>
<li><strong>Autor principal</strong>: escolha um autor para ler integralmente em dois ou três anos (por exemplo, a Suma inteira).</li>
<li><strong>Área</strong>: metafísica, ética, filosofia da mente, filosofia política ou teologia fundamental ${tag('argumento')}.</li>
</ol>
<h3>Ritmo</h3>
<p>Uma hora diária de leitura, uma revisão semanal no Caderno, um ensaio por semestre — ajuste no Plano adaptativo do app ${tag('argumento')}.</p>
<h3>Formação formal</h3>
<p>Para docência ou pesquisa, há licenciatura e bacharelado em filosofia ou teologia, e faculdades eclesiásticas com graus canônicos ${tag('fato')}. Este curso não confere diploma nem título ${tag('fato')}.</p>
<h3>Vida intelectual e vida espiritual</h3>
<p>Sertillanges insiste que a vida intelectual exige oração, silêncio e virtude ${tag('interpretacao')}; Fides et ratio fala das "duas asas" da fé e da razão (proêmio) ${tag('doutrina')}.</p>`,
  vocabulario: [['Leitura integral', 'Ler uma obra inteira, não só trechos.'], ['Graus canônicos', 'Títulos de faculdades eclesiásticas.'], ['Ritmo', 'Frequência sustentável de estudo.'], ['Duas asas', 'Fé e razão (Fides et ratio).'], ['Revisão espaçada', 'Retomar conteúdos em intervalos crescentes.']],
  exemplos: '<p>Plano de exemplo: ano 1 — latim básico e Suma I; ano 2 — latim intermediário e Suma I-II; ano 3 — Suma II-II e um comentador (Pieper ou Torrell).</p>',
  contexto: `<p>O app guarda seu progresso e permite exportar o Caderno ${tag('fato')}.</p>`,
  argumento: { titulo: 'Constância vence intensidade (reconstruído)', tag: 'argumento',
    premissas: ['A compreensão de textos difíceis exige retorno repetido.', 'Estudo intenso e esporádico se perde por esquecimento.', 'Estudo constante e moderado permite retorno e revisão.'],
    conclusao: 'Logo, um plano constante é melhor que um intenso e irregular.',
    nota: 'É também o que a pesquisa sobre memória mostra para revisão espaçada.' },
  objecoes: [{ objecao: 'Sem universidade, o estudo não tem valor.', tag: 'debate', resposta: 'A universidade oferece método, crítica e certificação; o estudo pessoal pode ter valor formativo real, mas sem certificação. Busque também interlocutores críticos.' }],
  aplicacao: '<p>Escreva no Caderno seu plano de três anos com os três eixos e o ritmo semanal.</p>',
  fonte: { obra: 'A.-D. Sertillanges, A Vida Intelectual, caps. 1–4; Fides et ratio, proêmio', link: null, orientacao: '<p>Leia os primeiros capítulos de Sertillanges e o proêmio de Fides et ratio. Escreva o plano à luz deles.</p>' },
  perguntas: [
    { p: 'Quais os três eixos do plano?', r: 'Línguas, autor principal, área.' },
    { p: 'O curso confere diploma?', r: 'Não.' },
    { p: 'O que são as "duas asas"?', r: 'Fé e razão (Fides et ratio).' },
  ],
  exercicios: [
    mc('Para ler Tomás no original, a língua é:', ['Grego', 'Latim', 'Alemão', 'Hebraico'], 1, 'Latim.'),
    mc('Este curso confere:', ['Diploma', 'Formação pessoal sem diploma', 'Grau canônico', 'Licenciatura'], 1, 'Aviso do curso.'),
    mc('"Duas asas" é imagem de:', ['Dei Verbum', 'Fides et ratio', 'Gaudium et spes', 'Dei Filius'], 1, 'Proêmio.'),
    disc('Apresente seu plano de estudos de três anos com justificativa.', ['Três eixos', 'Ritmo realista', 'Autores e obras', 'Justificativa'])],
  resumo: ['Continuidade.', 'Línguas, autor, área.', 'Ritmo constante.', 'Formação formal.', 'Fé e razão.'],
  referencias: [{ texto: 'A.-D. Sertillanges, A Vida Intelectual (1920).' }, { texto: 'João Paulo II, Fides et ratio (1998), proêmio.' }],
  revisao: [['Três eixos', 'Línguas, autor, área.'], ['Duas asas', 'Fides et ratio.'], ['Constância', 'Melhor que intensidade irregular.']],
  avancado: {
    texto: `<h3>Comunidade intelectual</h3>
<p>Ninguém se forma sozinho: procure grupos de leitura, cursos acadêmicos abertos e correspondência com estudiosos ${tag('argumento')}.</p>
<h3>Escrever para publicar</h3>
<p>No nível avançado, transforme um ensaio em artigo e submeta-o a uma revista ou congresso de estudantes ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'A.-D. Sertillanges, A Vida Intelectual (1920), caps. 5–9.' }],
    exercicios: [
      mc('Um grupo de leitura contribui principalmente com:', ['Diploma', 'Crítica e interlocução', 'Dinheiro', 'Nada'], 1, 'Comunidade intelectual.'),
      mc('Transformar um ensaio em artigo exige:', ['Mais adjetivos', 'Diálogo com a literatura secundária', 'Menos fontes', 'Nada'], 1, 'Estado da questão.'),
      disc('Planeje como transformar seu ensaio final em artigo: revista, literatura a incluir, mudanças.', ['Destino', 'Literatura', 'Mudanças', 'Cronograma'])],
  },
}),
];
