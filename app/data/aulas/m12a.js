// Módulo 12 — Olavo de Carvalho: aulas 1 a 6.
// Cada aula expõe tese, argumento, fonte primária, contexto, leituras alternativas, objeções
// e uma classificação do que é confirmado, controverso ou insuficientemente fundamentado.
import { tag } from '../fontes.js';
import { aula, mc, disc } from './_modelo.js';

const classificacao = (confirmado, controverso, insuficiente) => `
<h3>Classificação</h3>
<ul>
<li><strong>Confirmado</strong> ${tag('fato')}: ${confirmado}</li>
<li><strong>Controverso</strong> ${tag('debate')}: ${controverso}</li>
<li><strong>Insuficientemente fundamentado</strong> ${tag('hipotese')}: ${insuficiente}</li>
</ul>`;

export const AULAS = [
aula({
  id: 'm12-1', titulo: 'Vida, obra e contexto',
  aprendera: ['Dados biográficos essenciais de Olavo de Carvalho', 'As obras principais e suas datas', 'O contexto intelectual e político de sua recepção', 'Como separar a obra filosófica das polêmicas públicas'],
  prereq: ['Módulos 4 e 5'],
  explicacao: `
<h3>O autor</h3>
<p>Olavo de Carvalho (1947–2022) nasceu em Campinas (SP), foi jornalista, astrólogo nos anos 1980, conferencista e professor fora da universidade ${tag('fato')}. Relatou ter participado, nos anos 1980, da confraria sufi ligada a Frithjof Schuon, de quem depois se afastou e a quem criticou ${tag('fato')}. Viveu nos Estados Unidos a partir de 2005 e morreu na Virgínia em janeiro de 2022 ${tag('fato')}.</p>
<h3>Obras principais</h3>
<ul>
<li>A Nova Era e a Revolução Cultural (1994).</li>
<li>O Jardim das Aflições (1995).</li>
<li>O Imbecil Coletivo (1996).</li>
<li>Aristóteles em Nova Perspectiva: Introdução à Teoria dos Quatro Discursos (1996).</li>
<li>Como Vencer um Debate sem Precisar Ter Razão (1997), comentário à Dialética Erística de Schopenhauer.</li>
<li>O Futuro do Pensamento Brasileiro (1997).</li>
<li>A Filosofia e seu Inverso (2012); O Mínimo que Você Precisa Saber para Não Ser um Idiota (2013, coletânea organizada por Felipe Moura Brasil) ${tag('fato')}.</li>
</ul>
<p>Confira as datas na edição que você usar; há reedições com títulos e conteúdos revistos.</p>
<h3>Ensino</h3>
<p>A partir de 2009, manteve o Seminário de Filosofia, curso online com milhares de alunos ${tag('fato')}. Grande parte do seu ensino está em aulas gravadas e transcrições, não em livros revisados — o que exige cuidado ao citar ${tag('fato')}.</p>
<h3>Recepção</h3>
<p>Tornou-se figura influente na direita brasileira nos anos 2010 ${tag('fato')}. Suas afirmações públicas sobre temas científicos e políticos foram fortemente criticadas por especialistas e jornalistas; parte delas resultou em processos judiciais ${tag('fato')}. Este módulo estuda as teses filosóficas com o mesmo método usado para todo autor, sem adesão nem rejeição prévia.</p>
${classificacao('as datas e títulos das obras; a atuação como professor fora da universidade; a influência pública.', 'a importância filosófica da obra; o peso de suas teses no debate brasileiro.', 'qualquer avaliação global ("gênio", "charlatão") feita sem exame de argumentos.')}`,
  vocabulario: [['Seminário de Filosofia', 'Curso online de Olavo (a partir de 2009).'], ['Recepção', 'Modo como uma obra foi lida.'], ['Obra × polêmica', 'Separação metódica entre argumentos filosóficos e intervenções públicas.'], ['Transcrição', 'Texto de aula oral, sem revisão do autor em muitos casos.'], ['Avaliação global', 'Juízo sobre o autor inteiro, em vez de teses.']],
  exemplos: '<p>Ao ouvir "Olavo provou X", pergunte: em que texto? Com que argumento? Revisado pelo autor ou transcrição? É tese filosófica ou opinião política?</p>',
  contexto: `<p>O ambiente intelectual brasileiro dos anos 1990 foi marcado, segundo Olavo, pela hegemonia da esquerda nas universidades; ele construiu parte da obra como crítica a esse ambiente ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Por que separar obra e polêmica (reconstruído)', tag: 'argumento',
    premissas: ['A validade de um argumento não depende do caráter ou das outras opiniões de quem o formula.', 'Rejeitar uma tese pelas polêmicas do autor é falácia ad hominem.', 'Aceitar uma tese pela admiração ao autor é apelo à autoridade.'],
    conclusao: 'Logo, cada tese deve ser julgada por seus argumentos e fontes.',
    nota: 'Isso não impede avaliar a confiabilidade de um autor em matérias de fato, quando ele erra repetidamente nelas.' },
  objecoes: [{ objecao: 'Os erros públicos de um autor em temas de fato afetam sua credibilidade como intérprete de textos.', tag: 'debate', resposta: 'Afetam a confiança em afirmações não verificadas; por isso a regra é verificar cada afirmação histórica e textual na fonte. A credibilidade não substitui a verificação, em nenhum sentido.' }],
  aplicacao: '<p>Monte no Caderno uma ficha: obras (com datas conferidas), temas filosóficos centrais e uma lista separada de "intervenções públicas" que você não usará como argumento.</p>',
  fonte: { obra: 'Olavo de Carvalho, O Jardim das Aflições, introdução', link: null, orientacao: '<p>Leia a introdução e anote como o autor apresenta seu método e seus objetivos. Separe declarações de método de declarações de fato.</p>' },
  perguntas: [
    { p: 'Quais os anos de vida de Olavo de Carvalho?', r: '1947–2022.' },
    { p: 'Por que cuidado com transcrições?', r: 'Muitas não foram revisadas pelo autor.' },
    { p: 'Que falácias a separação obra/polêmica evita?', r: 'Ad hominem e apelo à autoridade.' },
  ],
  exercicios: [
    mc('O Jardim das Aflições é de:', ['1990', '1995', '2005', '2012'], 1, 'Data da primeira edição.'),
    mc('Como Vencer um Debate sem Precisar Ter Razão comenta:', ['Aristóteles', 'Schopenhauer', 'Platão', 'Kant'], 1, 'Dialética Erística.'),
    mc('Rejeitar uma tese porque o autor fez afirmações polêmicas em outro tema é:', ['Argumento válido', 'Ad hominem', 'Petição de princípio', 'Dedução'], 1, 'Módulo 4.'),
    mc('O Seminário de Filosofia começou em:', ['1990', '2009', '2015', '2020'], 1, 'Curso online.'),
    disc('Proponha um protocolo para estudar com rigor um autor cuja obra está em boa parte em aulas gravadas.', ['Distingue livro revisado e transcrição', 'Verificação de fontes', 'Evita falácias', 'Clareza'])],
  resumo: ['1947–2022.', 'Obras principais e datas.', 'Seminário de Filosofia.', 'Recepção polarizada.', 'Separar obra e polêmica.'],
  referencias: [{ texto: 'Olavo de Carvalho, O Jardim das Aflições (1995).' }, { texto: 'Olavo de Carvalho, Aristóteles em Nova Perspectiva (1996).' }, { texto: 'Olavo de Carvalho, A Filosofia e seu Inverso (2012).' }],
  revisao: [['Olavo de Carvalho', '1947–2022.'], ['Obra × polêmica', 'Separação metódica.'], ['Transcrições', 'Exigem cautela ao citar.']],
  avancado: {
    texto: `<h3>Fontes biográficas</h3>
<p>Há entrevistas, perfis jornalísticos e depoimentos de ex-alunos com versões diferentes de episódios biográficos ${tag('fato')}. Para cada episódio, registre a fonte e se é autodeclaração, testemunho de terceiro ou documento ${tag('argumento')}.</p>
<h3>Tradicionalismo</h3>
<p>Para entender a relação com Schuon, Guénon e o "tradicionalismo perenialista", consulte Mark Sedgwick, Against the Modern World (2004), estudo acadêmico do movimento ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Mark Sedgwick, Against the Modern World: Traditionalism and the Secret Intellectual History of the Twentieth Century (2004).' }],
    exercicios: [
      mc('Against the Modern World estuda:', ['O marxismo', 'O tradicionalismo perenialista', 'O tomismo', 'O positivismo'], 1, 'Sedgwick, 2004.'),
      mc('Um episódio biográfico relatado só pelo próprio autor é:', ['Documento', 'Autodeclaração', 'Testemunho de terceiro', 'Fato provado'], 1, 'Classifique a fonte.'),
      mc('Frithjof Schuon é associado ao:', ['Tomismo', 'Perenialismo', 'Positivismo', 'Existencialismo'], 1, 'Tradicionalismo.'),
      disc('Faça a crítica de fontes de um episódio biográfico de Olavo de Carvalho, classificando cada fonte.', ['Episódio definido', 'Fontes classificadas', 'Avaliação', 'Conclusão honesta'])],
  },
}),

aula({
  id: 'm12-2', titulo: 'O método de estudo proposto pelo autor',
  aprendera: ['A noção de "paralaxe cognitiva"', 'O exame de consciência e o "necrológio" como exercícios', 'O papel da imaginação e da leitura de literatura', 'Comparação com Sertillanges e com a tradição clássica'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>Tese</h3>
<p>Olavo sustenta que a formação filosófica exige primeiro uma formação da personalidade: sinceridade consigo, unidade entre pensamento e vida, e um imaginário amplo, nutrido pela literatura ${tag('interpretacao')}.</p>
<h3>Paralaxe cognitiva</h3>
<p>Ele chama "paralaxe cognitiva" o deslocamento entre o eixo de uma teoria e o eixo da experiência real do próprio autor — por exemplo, uma teoria que nega a liberdade humana, formulada por quem escolhe livremente argumentar ${tag('interpretacao')}. Olavo aplica o diagnóstico a autores modernos como Maquiavel, Descartes, Marx e outros ${tag('fato')}.</p>
<h3>Exercícios</h3>
<ul>
<li><strong>Necrológio</strong>: escrever o próprio obituário ideal, para descobrir o que se quer da vida.</li>
<li><strong>Exame de consciência</strong>: registrar com honestidade o que se sabe e o que não se sabe.</li>
<li><strong>Leitura de literatura</strong>: ampliar o imaginário com grandes romances antes da filosofia técnica ${tag('fato')}.</li>
</ul>
<h3>Comparações</h3>
<p>A ideia de que o estudo exige virtudes pessoais é clássica: Hugo de São Vítor (Didascálicon, século XII), Tomás (carta "De modo studendi", atribuída) e A.-D. Sertillanges (A Vida Intelectual, 1920) ${tag('fato')}. A noção de "contradição performativa" (Apel, Habermas) é próxima da paralaxe ${tag('interpretacao')}.</p>
${classificacao('a existência desses exercícios no ensino do autor; sua proximidade com a tradição clássica do estudo.', 'a eficácia comparada desses exercícios; se a "paralaxe" é conceito novo ou rebatização de autorrefutação/contradição performativa.', 'o diagnóstico de paralaxe aplicado a autores específicos, quando não acompanhado de análise textual detalhada.')}`,
  vocabulario: [['Paralaxe cognitiva', 'Deslocamento entre a teoria e a experiência do autor.'], ['Necrológio', 'Exercício de escrever o próprio obituário.'], ['Contradição performativa', 'Afirmar algo que o próprio ato de afirmar nega.'], ['Imaginário', 'Repertório de imagens e experiências possíveis.'], ['Vida intelectual', 'Estudo como vocação com virtudes próprias.']],
  exemplos: '<p>"Não existe verdade" dito como verdade é contradição performativa. Uma teoria do determinismo total, defendida por quem pede ao leitor que "escolha" aceitá-la, seria caso de paralaxe na terminologia de Olavo.</p>',
  contexto: `<p>Os exercícios aparecem sobretudo nas aulas do Seminário e em textos curtos ${tag('fato')}.</p>`,
  argumento: { titulo: 'A paralaxe invalida uma teoria? (reconstruído)', tag: 'argumento',
    premissas: ['Uma teoria pretende valer para todos os homens.', 'O autor é um homem.', 'Se a teoria é incompatível com as condições de sua própria formulação, ela se aplica mal ao seu autor.'],
    conclusao: 'Logo, uma teoria em paralaxe tem um defeito interno.',
    nota: 'A conclusão é forte quando há incompatibilidade estrita (autorrefutação). Quando se trata só de incoerência biográfica, cai-se no ad hominem tu quoque: a teoria pode ser verdadeira mesmo que o autor não a viva.' },
  objecoes: [{ objecao: 'A paralaxe confunde a validade da teoria com a vida do autor (tu quoque).', tag: 'debate', resposta: 'A distinção decisiva é entre incompatibilidade lógica (a teoria nega condições do próprio ato de teorizar: defeito real) e incoerência moral (o autor não pratica o que prega: não refuta a teoria). Use o conceito só no primeiro sentido.' }],
  aplicacao: '<p>Escreva o seu necrológio ideal (meia página) e, ao lado, o que você estuda hoje. Há coerência?</p>',
  fonte: { obra: 'Olavo de Carvalho, aulas e textos sobre paralaxe cognitiva (Seminário de Filosofia; artigos reunidos em coletâneas)', link: null, orientacao: '<p>Localize um texto em que o autor define a paralaxe. Anote a definição exata e a fonte (livro, artigo ou aula transcrita). Compare com Sertillanges, A Vida Intelectual, cap. 1.</p>' },
  perguntas: [
    { p: 'O que é paralaxe cognitiva?', r: 'Deslocamento entre a teoria e a experiência real do autor.' },
    { p: 'Para que serve o necrológio?', r: 'Descobrir o que se quer da vida.' },
    { p: 'Que obra clássica trata das virtudes do estudo?', r: 'A Vida Intelectual de Sertillanges (também o Didascálicon).' },
  ],
  exercicios: [
    mc('A Vida Intelectual (1920) é de:', ['Gilson', 'Sertillanges', 'Maritain', 'Garrigou'], 1, 'Dominicano.'),
    mc('Paralaxe usada como "você não vive o que prega" é:', ['Autorrefutação', 'Tu quoque', 'Dedução', 'Indução'], 1, 'Falácia.'),
    mc('O Didascálicon é de:', ['Tomás', 'Hugo de São Vítor', 'Boaventura', 'Abelardo'], 1, 'Século XII.'),
    mc('"Não existe verdade" dito como verdade é:', ['Contradição performativa', 'Tautologia', 'Hipótese', 'Analogia'], 0, 'Autorrefutação.'),
    disc('A paralaxe cognitiva é conceito filosófico útil? Distinga seu uso legítimo (autorrefutação) do ilegítimo (tu quoque) com exemplos.', ['Define o conceito', 'Uso legítimo', 'Uso ilegítimo', 'Conclusão justificada'])],
  resumo: ['Formação da personalidade.', 'Paralaxe cognitiva.', 'Necrológio e exame de consciência.', 'Literatura e imaginário.', 'Tradição clássica do estudo.'],
  referencias: [{ texto: 'A.-D. Sertillanges, A Vida Intelectual (1920).' }, { texto: 'Hugo de São Vítor, Didascálicon.' }, { texto: 'Olavo de Carvalho, textos sobre paralaxe cognitiva (coletâneas).', verificacao: 'a confirmar' }],
  revisao: [['Paralaxe cognitiva', 'Teoria × experiência do autor.'], ['Tu quoque', 'Uso ilegítimo da paralaxe.'], ['Sertillanges', 'A Vida Intelectual (1920).']],
  avancado: {
    texto: `<h3>Argumentos transcendentais</h3>
<p>Kant, Strawson e Apel usaram argumentos que mostram condições necessárias de uma prática (pensar, falar, argumentar) ${tag('fato')}. A versão forte da paralaxe pode ser reformulada assim: "a teoria nega uma condição necessária da prática de teorizar" ${tag('argumento')}.</p>
<h3>Hadot</h3>
<p>Pierre Hadot (Exercícios Espirituais e Filosofia Antiga, 1981) mostrou que a filosofia antiga era modo de vida com exercícios ${tag('fato')}. Compare com os exercícios propostos por Olavo.</p>`,
    leituras: [{ texto: 'Pierre Hadot, Exercícios Espirituais e Filosofia Antiga (1981).' }, { texto: 'Karl-Otto Apel, Transformação da Filosofia (1973).' }],
    exercicios: [
      mc('Exercícios Espirituais e Filosofia Antiga é de:', ['Foucault', 'Hadot', 'Apel', 'Strawson'], 1, '1981.'),
      mc('Um argumento transcendental mostra:', ['Fatos empíricos', 'Condições necessárias de uma prática', 'Probabilidades', 'Emoções'], 1, 'Kant, Strawson.'),
      mc('A versão legítima da paralaxe aproxima-se de:', ['Tu quoque', 'Argumento transcendental', 'Espantalho', 'Indução'], 1, 'Condição da prática.'),
      disc('Reformule a paralaxe cognitiva como argumento transcendental e aplique-a a uma teoria determinista.', ['Formulação', 'Aplicação', 'Objeção', 'Conclusão'])],
  },
}),

aula({
  id: 'm12-3', titulo: 'Retórica e erística: Schopenhauer comentado',
  aprendera: ['O que é a Dialética Erística de Schopenhauer', 'Os estratagemas e como reconhecê-los', 'A proposta do comentário de Olavo', 'Distinguir dialética, retórica e erística'],
  prereq: ['Módulo 4: falácias'],
  explicacao: `
<h3>A obra de Schopenhauer</h3>
<p>Arthur Schopenhauer (1788–1860) deixou inédito um manuscrito, publicado postumamente como Dialética Erística (c. 1830–1831), com 38 estratagemas para "ter razão" num debate, com ou sem verdade ${tag('fato')}. Ele distingue a verdade objetiva de uma proposição e sua validade aos olhos dos ouvintes ${tag('fato')}.</p>
<h3>Exemplos de estratagemas</h3>
<ul>
<li>Ampliação: exagerar a tese do adversário para torná-la mais fácil de refutar (espantalho).</li>
<li>Usar homônimos para estender uma refutação a outro sentido (equívoco).</li>
<li>Irritar o adversário para que argumente mal.</li>
<li>Último estratagema: tornar-se pessoal, ofensivo (ad personam) ${tag('fato')}.</li>
</ul>
<h3>O comentário de Olavo</h3>
<p>Em Como Vencer um Debate sem Precisar Ter Razão (1997), Olavo publica uma tradução com comentários e argumenta que conhecer os estratagemas é defesa contra eles ${tag('fato')}. O livro foi usado como manual de defesa retórica ${tag('interpretacao')}.</p>
<h3>Dialética, retórica, erística</h3>
<p>Para Aristóteles: dialética examina opiniões em busca do verdadeiro (Tópicos); retórica busca persuadir um auditório (Retórica I, 2); erística busca vencer, com argumentos aparentes (Refutações Sofísticas) ${tag('fato')}.</p>
${classificacao('o conteúdo dos estratagemas de Schopenhauer; a distinção aristotélica entre dialética, retórica e erística.', 'se manuais de erística servem mais à defesa ou ao ataque; o uso público do livro.', 'afirmações de que certos grupos usam sistematicamente estratagemas, quando não acompanhadas de análise de casos.')}`,
  vocabulario: [['Erística', 'Arte de vencer o debate, com ou sem verdade.'], ['Estratagema', 'Manobra de debate.'], ['Ampliação', 'Exagero da tese adversária.'], ['Ad personam', 'Ataque à pessoa.'], ['Refutações Sofísticas', 'Tratado de Aristóteles sobre argumentos aparentes.']],
  exemplos: '<p>A: "Precisamos reduzir o desperdício no orçamento." B: "Então você quer acabar com a saúde pública?" — B usa a ampliação (estratagema I). A defesa é restringir: "não disse isso; disse desperdício".</p>',
  contexto: `<p>Schopenhauer não publicou o texto; ele próprio parece tê-lo considerado moralmente ambíguo ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Conhecer a erística protege contra ela (reconstruído)', tag: 'argumento',
    premissas: ['Estratagemas funcionam melhor quando não são percebidos.', 'Quem os conhece tende a percebê-los.', 'Percebidos, podem ser nomeados e neutralizados.'],
    conclusao: 'Logo, estudar a erística é defesa legítima.',
    nota: 'A premissa 2 vale para quem estuda também lógica e falácias; sem isso, o manual pode ensinar a usar os estratagemas.' },
  objecoes: [{ objecao: 'Um manual de erística ensina a manipular.', tag: 'debate', resposta: 'O mesmo vale para o estudo das falácias (Módulo 4). O que decide é a finalidade: buscar a verdade (dialética) ou vencer (erística). O curso usa o material para defesa e autoexame.' }],
  aplicacao: '<p>Escolha um debate público recente e identifique três estratagemas de Schopenhauer. Como você responderia a cada um?</p>',
  fonte: { obra: 'Schopenhauer, Dialética Erística (em qualquer tradução, inclusive a comentada por Olavo)', link: null, orientacao: '<p>Leia a introdução e os dez primeiros estratagemas. Para cada um, dê o nome da falácia correspondente do Módulo 4.</p>' },
  perguntas: [
    { p: 'Quantos estratagemas Schopenhauer lista?', r: '38.' },
    { p: 'Qual o último estratagema?', r: 'Tornar-se pessoal, ofensivo.' },
    { p: 'Diferença entre dialética e erística?', r: 'Dialética busca o verdadeiro; erística, vencer.' },
  ],
  exercicios: [
    mc('A Dialética Erística foi publicada:', ['Por Schopenhauer em vida', 'Postumamente', 'Por Hegel', 'Em 1997 pela primeira vez'], 1, 'Manuscrito inédito.'),
    mc('Exagerar a tese adversária corresponde à falácia do:', ['Espantalho', 'Ad hominem', 'Petição de princípio', 'Falso dilema'], 0, 'Ampliação.'),
    mc('As Refutações Sofísticas são de:', ['Platão', 'Aristóteles', 'Cícero', 'Schopenhauer'], 1, 'Organon.'),
    mc('A retórica, para Aristóteles, busca:', ['A verdade demonstrada', 'Persuadir um auditório', 'Vencer a qualquer custo', 'Definir'], 1, 'Retórica I, 2.'),
    disc('Analise um debate real com os estratagemas de Schopenhauer e as falácias do Módulo 4. Avalie se o manual ajuda a buscar a verdade.', ['Identifica estratagemas', 'Liga a falácias', 'Propõe respostas', 'Avaliação'])],
  resumo: ['Dialética Erística: 38 estratagemas.', 'Verdade × validade aparente.', 'Comentário de Olavo.', 'Dialética, retórica, erística.', 'Estudo para defesa.'],
  referencias: [{ texto: 'Arthur Schopenhauer, Dialética Erística.' }, { texto: 'Olavo de Carvalho (trad. e comentário), Como Vencer um Debate sem Precisar Ter Razão (1997).' }, { texto: 'Aristóteles, Refutações Sofísticas.' }],
  revisao: [['Erística', 'Vencer com ou sem verdade.'], ['38 estratagemas', 'Schopenhauer.'], ['Dialética × retórica × erística', 'Aristóteles.']],
  avancado: {
    texto: `<h3>Teoria da argumentação</h3>
<p>Chaïm Perelman (Tratado da Argumentação, 1958, com Olbrechts-Tyteca) e Douglas Walton (teoria das falácias como esquemas argumentativos) renovaram o estudo da retórica e da dialética ${tag('fato')}. A pragma-dialética (van Eemeren e Grootendorst) formula regras para discussões críticas ${tag('fato')}.</p>
<h3>Ética do debate</h3>
<p>Compare as regras da pragma-dialética com a "honestidade intelectual" deste curso (steelman, princípio de caridade) ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Chaïm Perelman e Lucie Olbrechts-Tyteca, Tratado da Argumentação (1958).' }, { texto: 'Frans van Eemeren e Rob Grootendorst, A Systematic Theory of Argumentation (2004).' }],
    exercicios: [
      mc('O Tratado da Argumentação (1958) é de:', ['Walton', 'Perelman e Olbrechts-Tyteca', 'Toulmin', 'Hamblin'], 1, 'Nova retórica.'),
      mc('A pragma-dialética é de:', ['van Eemeren e Grootendorst', 'Perelman', 'Schopenhauer', 'Walton'], 0, 'Discussão crítica.'),
      mc('Walton tratou falácias como:', ['Sempre inválidas', 'Esquemas argumentativos', 'Emoções', 'Dogmas'], 1, 'Teoria das falácias.'),
      disc('Compare os estratagemas de Schopenhauer com as regras da pragma-dialética: que regra cada estratagema viola?', ['Cinco estratagemas', 'Regras correspondentes', 'Justificativa', 'Clareza'])],
  },
}),

aula({
  id: 'm12-4', titulo: 'A teoria dos quatro discursos',
  aprendera: ['A tese central da teoria', 'As fontes em Aristóteles e na tradição árabe', 'Os quatro discursos e seus graus de credibilidade', 'Objeções e leituras alternativas'],
  prereq: ['Módulo 5: Aristóteles'],
  explicacao: `
<h3>Tese</h3>
<p>Em Aristóteles em Nova Perspectiva (1996), Olavo sustenta que poética, retórica, dialética e analítica (lógica) formam para Aristóteles uma ciência única do discurso, com quatro modos que vão do possível ao certo ${tag('interpretacao')}:</p>
<ol>
<li><strong>Poético</strong>: o possível; dirige-se à imaginação.</li>
<li><strong>Retórico</strong>: o verossímil; visa a persuasão e a decisão.</li>
<li><strong>Dialético</strong>: o provável; examina opiniões em confronto.</li>
<li><strong>Analítico</strong>: o certo; demonstração a partir de premissas verdadeiras ${tag('interpretacao')}.</li>
</ol>
<h3>Fontes</h3>
<p>Na tradição árabe medieval (al-Fārābī, Avicena, Averróis), Retórica e Poética foram incluídas no Organon, e os silogismos foram classificados segundo graus de assentimento ${tag('fato')}. Olavo afirma que desenvolve essa intuição e a atribui ao próprio Aristóteles ${tag('interpretacao')}.</p>
<h3>Argumento</h3>
<p>O conhecimento humano começa pelo imaginário, passa pela persuasão e pelo debate e só depois alcança a certeza; os quatro discursos seriam etapas de um mesmo processo ${tag('argumento')}.</p>
<h3>Leituras alternativas</h3>
<p>Estudiosos de Aristóteles costumam tratar Poética e Retórica como obras de outro tipo (produtivas, não instrumentais) e o Organon como obra organizada por editores posteriores (Andrônico de Rodes) ${tag('fato')}. A atribuição da teoria ao próprio Aristóteles é o ponto mais debatido ${tag('debate')}.</p>
${classificacao('a inclusão árabe de Retórica e Poética no Organon; a existência de graus de assentimento nessa tradição.', 'a tese de que Aristóteles mesmo concebia os quatro como uma ciência única.', 'a afirmação de que a teoria é "nova" sem confronto com a literatura sobre al-Fārābī e Averróis.')}`,
  vocabulario: [['Quatro discursos', 'Poético, retórico, dialético, analítico.'], ['Organon', 'Conjunto das obras lógicas de Aristóteles.'], ['Graus de assentimento', 'Possível, verossímil, provável, certo.'], ['Andrônico de Rodes', 'Editor das obras de Aristóteles (século I a.C.).'], ['al-Fārābī', 'Filósofo árabe (c. 870–950) que classificou silogismos.']],
  exemplos: '<p>Um romance mostra o possível (uma vida com certas escolhas); um advogado persuade o júri (verossímil); dois juristas debatem a melhor interpretação (provável); um matemático demonstra (certo).</p>',
  contexto: `<p>O livro reúne uma conferência e textos de 1994–1996 ${tag('fato')}.</p>`,
  argumento: { titulo: 'Os quatro discursos como unidade (reconstruído)', tag: 'argumento',
    premissas: ['Todo discurso visa produzir algum grau de assentimento.', 'Os graus de assentimento formam uma escala: possível, verossímil, provável, certo.', 'A cada grau corresponde um modo de discurso com regras próprias.'],
    conclusao: 'Logo, poética, retórica, dialética e analítica formam uma única ciência do discurso.',
    nota: 'A conclusão sistemática pode valer mesmo que a atribuição histórica ao próprio Aristóteles seja discutível. Separe a tese filosófica da tese historiográfica.' },
  objecoes: [{ objecao: 'Aristóteles classifica a Poética entre as ciências produtivas, não entre as instrumentais.', tag: 'argumento', resposta: 'Olavo poderia responder que a unidade está na função cognitiva do discurso, não no lugar da obra na classificação. A objeção atinge a tese historiográfica mais que a sistemática.' }],
  aplicacao: '<p>Classifique cinco textos que você leu nesta semana (notícia, romance, sermão, artigo científico, debate) nos quatro discursos.</p>',
  fonte: { obra: 'Olavo de Carvalho, Aristóteles em Nova Perspectiva (1996), primeira parte; Aristóteles, Retórica I, 1–2', link: null, orientacao: '<p>Leia a exposição da teoria e compare com Retórica I, 1–2, onde Aristóteles relaciona retórica e dialética.</p>' },
  perguntas: [
    { p: 'Quais os quatro discursos?', r: 'Poético, retórico, dialético, analítico.' },
    { p: 'Que tradição incluiu Retórica e Poética no Organon?', r: 'A árabe medieval (al-Fārābī, Avicena, Averróis).' },
    { p: 'Qual o ponto mais debatido?', r: 'A atribuição da teoria ao próprio Aristóteles.' },
  ],
  exercicios: [
    mc('O discurso retórico visa:', ['O certo', 'O verossímil', 'O possível', 'O provável'], 1, 'Persuasão.'),
    mc('Andrônico de Rodes foi:', ['Comentador árabe', 'Editor das obras de Aristóteles', 'Discípulo de Platão', 'Escolástico'], 1, 'Século I a.C.'),
    mc('A Retórica, para Aristóteles, é "antístrofe" da:', ['Poética', 'Dialética', 'Analítica', 'Ética'], 1, 'Retórica I, 1.'),
    mc('Separar tese sistemática e historiográfica permite:', ['Aceitar ou rejeitar ambas juntas', 'Avaliar cada uma por seus critérios', 'Ignorar Aristóteles', 'Nada'], 1, 'Distinção metódica.'),
    disc('Avalie a teoria dos quatro discursos separando a tese sistemática e a historiográfica. Use Retórica I, 1 e a tradição árabe.', ['Separa as duas teses', 'Usa fontes', 'Avalia cada uma', 'Conclusão justificada'])],
  resumo: ['Quatro discursos e graus de assentimento.', 'Tradição árabe.', 'Unidade da ciência do discurso.', 'Atribuição a Aristóteles debatida.', 'Tese sistemática × historiográfica.'],
  referencias: [{ texto: 'Olavo de Carvalho, Aristóteles em Nova Perspectiva (1996).' }, { texto: 'Aristóteles, Retórica I, 1–2.' }, { texto: 'Deborah Black, Logic and Aristotle\'s Rhetoric and Poetics in Medieval Arabic Philosophy (1990).' }],
  revisao: [['Quatro discursos', 'Possível, verossímil, provável, certo.'], ['Organon árabe', 'Inclui Retórica e Poética.'], ['Andrônico', 'Editor de Aristóteles.']],
  avancado: {
    texto: `<h3>Deborah Black</h3>
<p>Deborah Black (1990) estudou a inclusão da Retórica e da Poética no Organon pelos filósofos árabes e a teoria dos graus de assentimento ${tag('fato')}. Ler esse estudo é o melhor modo de avaliar o que há de original na proposta de Olavo ${tag('argumento')}.</p>
<h3>Averróis e os três tipos de pessoas</h3>
<p>No Tratado Decisivo, Averróis distingue pessoas persuadidas por argumentos demonstrativos, dialéticos e retóricos ${tag('fato')}. Compare com os quatro discursos.</p>`,
    leituras: [{ texto: 'Deborah Black, Logic and Aristotle\'s Rhetoric and Poetics in Medieval Arabic Philosophy (1990).' }, { texto: 'Averróis, Tratado Decisivo (Faṣl al-maqāl).' }],
    exercicios: [
      mc('O estudo acadêmico sobre Retórica e Poética no Organon árabe é de:', ['Black', 'Gutas', 'Wolfson', 'Mahdi'], 0, '1990.'),
      mc('No Tratado Decisivo, Averróis distingue:', ['Dois tipos de verdade', 'Três tipos de pessoas e argumentos', 'Quatro causas', 'Cinco vias'], 1, 'Demonstrativo, dialético, retórico.'),
      mc('Avaliar a originalidade de uma teoria exige:', ['Fama', 'Confronto com a literatura anterior', 'Concordância', 'Rejeição'], 1, 'Método.'),
      disc('Compare os quatro discursos com o Tratado Decisivo de Averróis. O que Olavo acrescenta?', ['Expõe Averróis', 'Expõe Olavo', 'Identifica o acréscimo', 'Conclusão honesta'])],
  },
}),

aula({
  id: 'm12-5', titulo: 'Filosofia da cultura',
  aprendera: ['A tese sobre "revolução cultural" e hegemonia', 'O diagnóstico de A Nova Era e a Revolução Cultural', 'O uso de Gramsci na análise', 'Como avaliar teses de história cultural'],
  prereq: ['Módulo 10, aula 2: Marx'],
  explicacao: `
<h3>Tese</h3>
<p>Em A Nova Era e a Revolução Cultural (1994), Olavo sustenta que, no Brasil, setores da esquerda adotaram a estratégia de Antonio Gramsci: conquistar a hegemonia cultural (escolas, imprensa, universidades) antes do poder político ${tag('interpretacao')}. O mesmo livro critica a "Nova Era" (espiritualidades difusas) como fenômeno cultural paralelo ${tag('fato')}.</p>
<h3>Gramsci</h3>
<p>Antonio Gramsci (1891–1937), nos Cadernos do Cárcere, desenvolveu os conceitos de hegemonia, "intelectual orgânico" e "guerra de posição" ${tag('fato')}. É fato documentado que Gramsci foi muito lido e editado no Brasil a partir dos anos 1960–1970 ${tag('fato')}.</p>
<h3>Argumento</h3>
<p>Se uma estratégia de hegemonia cultural foi formulada, difundida e adotada por intelectuais e organizações, é de esperar mudanças observáveis em instituições culturais ${tag('argumento')}. Olavo apresenta exemplos de textos, programas e declarações ${tag('interpretacao')}.</p>
<h3>Leituras alternativas</h3>
<p>Historiadores e sociólogos explicam mudanças culturais por causas múltiplas (secularização, urbanização, mercado, mídia de massa), sem um plano central ${tag('debate')}. Críticos acusam a tese de "teoria conspiratória"; defensores respondem que estratégias declaradas não são conspirações ocultas ${tag('debate')}.</p>
${classificacao('a existência e a difusão dos conceitos gramscianos no Brasil; a adoção declarada da noção de hegemonia por alguns intelectuais e organizações.', 'o grau de causalidade dessa estratégia nas mudanças culturais; a extensão da influência.', 'afirmações de coordenação ampla não acompanhadas de documentação proporcional.')}`,
  vocabulario: [['Hegemonia', 'Direção cultural e moral de uma sociedade (Gramsci).'], ['Intelectual orgânico', 'Intelectual ligado a uma classe e seu projeto.'], ['Guerra de posição', 'Conquista gradual das instituições culturais.'], ['Nova Era', 'Movimento de espiritualidades difusas.'], ['Multicausalidade', 'Explicação por várias causas.']],
  exemplos: '<p>Para testar a tese, compare currículos escolares de décadas diferentes e pergunte: as mudanças foram declaradamente inspiradas em autores específicos? Há outras causas?</p>',
  contexto: `<p>Os anos 1990 foram de redemocratização e debates sobre educação e imprensa no Brasil ${tag('fato')}.</p>`,
  argumento: { titulo: 'Inferência a partir de estratégia declarada (reconstruído)', tag: 'argumento',
    premissas: ['Uma estratégia de hegemonia cultural foi formulada e difundida.', 'Atores relevantes declararam adotá-la.', 'Mudanças culturais compatíveis com ela ocorreram.'],
    conclusao: 'Logo, a estratégia é uma das causas dessas mudanças.',
    nota: 'O argumento é indutivo. Sua força depende de mostrar mecanismos e excluir explicações rivais; a mera compatibilidade não basta (cum hoc).' },
  objecoes: [{ objecao: 'Mudanças culturais semelhantes ocorreram em países onde Gramsci era pouco lido.', tag: 'debate', resposta: 'Isso sugere causas comuns mais amplas (secularização, mídia). A tese pode ser reformulada: a estratégia acelerou ou orientou processos que tinham outras causas. Avalie a versão forte e a fraca.' }],
  aplicacao: '<p>Escreva no Caderno a versão forte e a versão fraca da tese e diga que evidência confirmaria ou refutaria cada uma.</p>',
  fonte: { obra: 'Olavo de Carvalho, A Nova Era e a Revolução Cultural (1994); Gramsci, Cadernos do Cárcere (seleção sobre hegemonia)', link: null, orientacao: '<p>Leia os capítulos sobre Gramsci e confira as citações de Gramsci no original ou em tradução.</p>' },
  perguntas: [
    { p: 'O que é hegemonia para Gramsci?', r: 'Direção cultural e moral de uma sociedade.' },
    { p: 'Qual a tese de A Nova Era e a Revolução Cultural?', r: 'Setores da esquerda adotaram a estratégia gramsciana de hegemonia cultural no Brasil.' },
    { p: 'Que tipo de argumento é usado?', r: 'Indutivo, a partir de estratégia declarada e mudanças observadas.' },
  ],
  exercicios: [
    mc('"Guerra de posição" é conceito de:', ['Lenin', 'Gramsci', 'Marx', 'Lukács'], 1, 'Cadernos do Cárcere.'),
    mc('A Nova Era e a Revolução Cultural é de:', ['1990', '1994', '2002', '2012'], 1, 'Data.'),
    mc('Compatibilidade entre estratégia e mudanças prova causalidade?', ['Sim', 'Não sem mecanismo e exclusão de rivais', 'Sempre', 'Nunca'], 1, 'Cum hoc.'),
    mc('Explicar mudanças por secularização e mídia é:', ['Leitura alternativa', 'Refutação definitiva', 'Doutrina', 'Irrelevante'], 0, 'Multicausalidade.'),
    disc('Avalie a tese da revolução cultural gramsciana no Brasil em suas versões forte e fraca. Que evidência seria decisiva?', ['Duas versões', 'Evidências', 'Leituras alternativas', 'Conclusão justificada'])],
  resumo: ['Hegemonia cultural.', 'Gramsci no Brasil.', 'Argumento indutivo.', 'Leituras alternativas.', 'Versão forte × fraca.'],
  referencias: [{ texto: 'Olavo de Carvalho, A Nova Era e a Revolução Cultural (1994).' }, { texto: 'Antonio Gramsci, Cadernos do Cárcere.' }, { texto: 'Lincoln Secco, Gramsci e o Brasil (2002).', verificacao: 'a confirmar' }],
  revisao: [['Hegemonia', 'Gramsci.'], ['Guerra de posição', 'Conquista gradual das instituições.'], ['Versão forte × fraca', 'Método de avaliação.']],
  avancado: {
    texto: `<h3>Recepção de Gramsci no Brasil</h3>
<p>Carlos Nelson Coutinho e Leandro Konder foram editores e divulgadores de Gramsci no Brasil ${tag('fato')}. Estudos acadêmicos sobre essa recepção permitem testar empiricamente parte da tese ${tag('argumento')}.</p>
<h3>Secularização</h3>
<p>Charles Taylor (Uma Era Secular, 2007) explica a mudança cultural do Ocidente por processos longos que não dependem de estratégias políticas ${tag('fato')}. Compare as duas explicações.</p>`,
    leituras: [{ texto: 'Charles Taylor, Uma Era Secular (2007).' }, { texto: 'Carlos Nelson Coutinho, Gramsci: um Estudo sobre seu Pensamento Político (1981).' }],
    exercicios: [
      mc('Uma Era Secular é de:', ['MacIntyre', 'Taylor', 'Berger', 'Weber'], 1, '2007.'),
      mc('Um divulgador de Gramsci no Brasil foi:', ['Carlos Nelson Coutinho', 'Mário Ferreira', 'Miguel Reale', 'Gustavo Corção'], 0, 'Edições brasileiras.'),
      mc('A explicação de Taylor enfatiza:', ['Uma estratégia política', 'Processos culturais longos', 'Um conspirador', 'A economia apenas'], 1, 'Secularização.'),
      disc('Compare a explicação de Olavo com a de Taylor para a mudança cultural. São rivais ou complementares?', ['Expõe Olavo', 'Expõe Taylor', 'Compara', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm12-6', titulo: 'A filosofia e seu inverso',
  aprendera: ['A tese de que há um "inverso" da filosofia', 'A distinção entre busca da verdade e uso instrumental do pensamento', 'Os autores analisados como exemplos', 'Comparação com a crítica clássica à sofística'],
  prereq: ['Aula 2 deste módulo'],
  explicacao: `
<h3>Tese</h3>
<p>Em A Filosofia e seu Inverso (2012), Olavo distingue a filosofia como busca desinteressada da verdade, enraizada na consciência individual, e seu "inverso": o uso do pensamento como instrumento de poder ou de projeto coletivo, que subordina a verdade a fins práticos ${tag('interpretacao')}.</p>
<h3>Argumento</h3>
<p>A filosofia começa com a sinceridade do indivíduo diante do real (Sócrates). Quando o pensamento passa a servir a um projeto que define antecipadamente o que deve ser verdade, inverte-se a ordem: a verdade torna-se meio ${tag('argumento')}.</p>
<h3>Exemplos</h3>
<p>O autor discute autores modernos como exemplos de inversão, retomando o diagnóstico de paralaxe (aula 2) ${tag('interpretacao')}. Para cada caso, confira na fonte primária a passagem analisada.</p>
<h3>Comparações</h3>
<p>Platão já opunha filósofo e sofista (Górgias, Sofista) ${tag('fato')}. Julien Benda (A Traição dos Intelectuais, 1927) acusou intelectuais de abandonar o universal pelas paixões políticas ${tag('fato')}. Eric Voegelin falou de "gnosticismo" moderno como substituição da realidade por projetos ${tag('interpretacao')}.</p>
${classificacao('a distinção clássica entre filosofia e sofística; a existência de diagnósticos semelhantes (Benda, Voegelin).', 'a aplicação do diagnóstico a autores modernos específicos.', 'generalizações sobre movimentos inteiros sem análise de textos representativos.')}`,
  vocabulario: [['Inverso da filosofia', 'Pensamento subordinado ao poder ou a projetos.'], ['Sofística', 'Uso do discurso para vencer ou ganhar, sem busca da verdade.'], ['Traição dos intelectuais', 'Tese de Benda (1927).'], ['Gnosticismo (Voegelin)', 'Substituição da realidade por projetos de salvação imanente.'], ['Sinceridade', 'Fidelidade do pensamento à experiência real.']],
  exemplos: '<p>Um pesquisador que esconde dados porque contrariam a causa que defende inverteu a ordem: a causa vem antes da verdade. Isso pode ocorrer em qualquer campo político ou religioso.</p>',
  contexto: `<p>O livro reúne ensaios de diferentes épocas ${tag('fato')}.</p>`,
  argumento: { titulo: 'A inversão da ordem entre verdade e fim (reconstruído)', tag: 'argumento',
    premissas: ['A filosofia busca a verdade antes de qualquer fim prático.', 'Quando um fim prático define antecipadamente o que deve ser verdade, a verdade se torna meio.', 'Um pensamento em que a verdade é meio não é filosofia no sentido próprio.'],
    conclusao: 'Logo, há um "inverso" da filosofia que usa seu vocabulário para outro fim.',
    nota: 'O critério vale para qualquer posição, inclusive a do próprio autor e de seus leitores. Aplicá-lo só aos adversários seria exemplo da própria inversão.' },
  objecoes: [{ objecao: 'Todo pensamento tem interesses; a "busca desinteressada" é ilusão (Marx, Nietzsche, Foucault).', tag: 'debate', resposta: 'A objeção, se universal, se autorrefuta (também ela seria apenas interesse). Pode-se admitir que interesses influenciam sem concluir que a verdade é inalcançável.' }],
  aplicacao: '<p>Examine uma posição sua: há casos em que uma causa que você defende decidiu antes o que deveria ser verdade? Registre com honestidade.</p>',
  fonte: { obra: 'Olavo de Carvalho, A Filosofia e seu Inverso (2012); Julien Benda, A Traição dos Intelectuais (1927)', link: null, orientacao: '<p>Leia o ensaio que dá título ao livro. Compare com o prefácio de Benda.</p>' },
  perguntas: [
    { p: 'O que é o "inverso" da filosofia?', r: 'Pensamento que subordina a verdade ao poder ou a projetos.' },
    { p: 'Quem escreveu A Traição dos Intelectuais?', r: 'Julien Benda (1927).' },
    { p: 'Por que o critério deve ser aplicado a todos?', r: 'Aplicá-lo só aos adversários seria a própria inversão.' },
  ],
  exercicios: [
    mc('A Filosofia e seu Inverso é de:', ['1995', '2012', '1996', '2022'], 1, 'Coletânea.'),
    mc('A oposição filósofo × sofista está em:', ['Platão', 'Kant', 'Hegel', 'Benda'], 0, 'Górgias, Sofista.'),
    mc('"Todo pensamento é só interesse", se universal:', ['É verdadeiro', 'Se autorrefuta', 'É dogma', 'É analítico'], 1, 'Aplica-se a si mesmo.'),
    mc('"Gnosticismo" moderno é diagnóstico de:', ['Voegelin', 'Benda', 'Foucault', 'Nietzsche'], 0, 'A Nova Ciência da Política.'),
    disc('Aplique o critério da "inversão" a duas posições opostas e avalie se ele é imparcial.', ['Define o critério', 'Aplica a duas posições', 'Avalia imparcialidade', 'Conclusão justificada'])],
  resumo: ['Filosofia × inverso.', 'Verdade antes do fim.', 'Platão e a sofística.', 'Benda e Voegelin.', 'Critério universal.'],
  referencias: [{ texto: 'Olavo de Carvalho, A Filosofia e seu Inverso (2012).' }, { texto: 'Julien Benda, A Traição dos Intelectuais (1927).' }, { texto: 'Eric Voegelin, A Nova Ciência da Política (1952).' }],
  revisao: [['Inverso da filosofia', 'Verdade como meio.'], ['Benda', 'A Traição dos Intelectuais.'], ['Voegelin', 'Gnosticismo moderno.']],
  avancado: {
    texto: `<h3>Voegelin</h3>
<p>Voegelin (A Nova Ciência da Política, 1952; Ordem e História) analisou movimentos modernos como "gnósticos": imanentizam o eschaton (esperam salvação histórica) ${tag('fato')}. Olavo foi leitor de Voegelin ${tag('fato')}. Críticos questionam o uso amplo do termo "gnosticismo" ${tag('debate')}.</p>
<h3>Ética da crença</h3>
<p>W. K. Clifford ("The Ethics of Belief", 1877) e William James ("The Will to Believe", 1896) debateram o dever de crer só com evidência ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Eric Voegelin, A Nova Ciência da Política (1952).' }, { texto: 'W. K. Clifford, "The Ethics of Belief" (1877).' }],
    exercicios: [
      mc('"Imanentizar o eschaton" é expressão associada a:', ['Benda', 'Voegelin', 'Clifford', 'James'], 1, 'A Nova Ciência da Política.'),
      mc('"The Ethics of Belief" é de:', ['James', 'Clifford', 'Peirce', 'Mill'], 1, '1877.'),
      mc('O uso amplo de "gnosticismo" por Voegelin é:', ['Consenso', 'Debatido', 'Dogma', 'Irrelevante'], 1, 'Críticas.'),
      disc('Compare a "inversão" de Olavo com o "gnosticismo" de Voegelin. São o mesmo diagnóstico?', ['Expõe os dois', 'Compara', 'Avalia', 'Conclusão'])],
  },
}),
];
