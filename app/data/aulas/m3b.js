// Módulo 3 — Introdução à filosofia: aulas 2 a 6.
import { tag, LINKS } from '../fontes.js';
import { aula, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm3-2', titulo: 'O que é filosofia?',
  aprendera: ['A origem da palavra e da atividade filosófica', 'O espanto como começo da filosofia', 'As grandes partes da filosofia', 'Em que a filosofia difere da ciência e da teologia'],
  prereq: ['Aula 1: Como ler textos filosóficos'],
  explicacao: `
<h3>Amor à sabedoria</h3>
<p>"Filosofia" vem do grego <em>philo</em> (amigo, amante) e <em>sophia</em> (sabedoria). Uma tradição antiga, relatada por Cícero e Diógenes Laércio, atribui a palavra a Pitágoras, que teria preferido chamar-se "amigo da sabedoria" a "sábio" ${tag('fato')}. A historicidade do episódio é incerta ${tag('debate')}, mas a ideia é exata: o filósofo não possui a sabedoria, busca-a.</p>
<h3>O espanto</h3>
<p>Platão (Teeteto 155d) e Aristóteles (Metafísica I, 2, 982b) dizem que a filosofia começa pelo espanto (<em>thaumazein</em>): admirar-se diante do que parecia óbvio ${tag('fato')}. Quem nunca se pergunta "o que é o tempo?", "por que existe algo?", "o que é justo?" ainda não começou a filosofar.</p>
<h3>Perguntas filosóficas</h3>
<p>Uma pergunta é filosófica quando é <strong>radical</strong> (vai aos fundamentos), <strong>universal</strong> (vale para todos os casos) e não pode ser resolvida só por observação ou experimento. "Quanto pesa este objeto?" é pergunta científica; "o que é um objeto?" é filosófica.</p>
<h3>As partes da filosofia</h3>
<ul>
<li><strong>Lógica</strong>: as regras do raciocínio correto (Módulo 4).</li>
<li><strong>Metafísica e ontologia</strong>: o ser, as causas primeiras (Módulo 7).</li>
<li><strong>Epistemologia</strong>: o conhecimento e seus limites (Módulo 6).</li>
<li><strong>Filosofia da natureza</strong>: mudança, tempo, causalidade no mundo físico.</li>
<li><strong>Antropologia filosófica e filosofia da mente</strong>: o ser humano, a alma, a consciência (Módulo 15).</li>
<li><strong>Ética</strong>: o bem e a vida boa; <strong>política</strong>: a vida em comum (Módulo 13).</li>
<li><strong>Estética</strong>: o belo e a arte.</li>
</ul>
<h3>Filosofia, ciência e teologia</h3>
<p>A ciência moderna investiga fenômenos mensuráveis por método experimental; a filosofia examina os conceitos e pressupostos de todo conhecimento (inclusive da ciência); a teologia revelada parte da fé. Até o século XVII, "filosofia natural" incluía o que hoje chamamos física — os Principia de Newton (1687) se intitulam Princípios matemáticos da filosofia natural ${tag('fato')}.</p>`,
  vocabulario: [['Filosofia', 'Amor à sabedoria; busca racional dos fundamentos.'], ['Thaumazein', 'Espantar-se, admirar-se: começo da filosofia.'], ['Pergunta radical', 'A que vai aos fundamentos.'], ['Filosofia natural', 'Antigo nome do estudo filosófico e científico da natureza.'], ['Metafilosofia', 'Reflexão sobre o que é a própria filosofia.']],
  exemplos: '<p>"Este ato foi justo?" é pergunta prática; "o que é a justiça?" é pergunta filosófica; "quantas pessoas consideram este ato justo?" é pergunta sociológica. As três são legítimas, mas pedem métodos diferentes.</p>',
  contexto: `<p>A filosofia grega nasce no século VI a.C. nas colônias jônicas da Ásia Menor (veja a aba "Ideias": filosofia jônica) e se desenvolve em Atenas no século V–IV a.C. ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que não se pode fugir da filosofia (argumento clássico, atribuído a Aristóteles no Protréptico)', tag: 'argumento',
    premissas: ['Ou devemos filosofar, ou não devemos.', 'Se devemos, é preciso filosofar.', 'Se não devemos, precisamos dar razões disso — e dar razões sobre o valor da filosofia já é filosofar.'],
    conclusao: 'Logo, em qualquer caso, é preciso filosofar.',
    nota: 'O Protréptico de Aristóteles está perdido; o argumento é conhecido por citações de autores posteriores. É um dilema construtivo: as duas alternativas levam à mesma conclusão.' },
  objecoes: [{ objecao: 'A filosofia não progride como a ciência: discute as mesmas perguntas há 2500 anos.', tag: 'debate', resposta: 'Defensores respondem que a filosofia progride ao esclarecer conceitos, eliminar respostas falsas e fazer nascer ciências (física, psicologia, lógica matemática). Críticos mantêm que suas perguntas centrais seguem abertas. O debate sobre o progresso filosófico é ele mesmo filosófico.' }],
  aplicacao: '<p>Escreva no Caderno cinco perguntas que você já se fez e classifique-as como científicas, filosóficas, teológicas ou práticas. Para cada filosófica, diga a qual parte da filosofia pertence.</p>',
  fonte: { obra: 'Aristóteles, Metafísica I, 1–2; Platão, Teeteto 155c–d', link: null, orientacao: '<p>Leia Metafísica I, 1–2 (cerca de 6 páginas). Reconstrua a hierarquia do saber (sensação, memória, experiência, arte, ciência, sabedoria) e explique por que a sabedoria é "a mais livre" das ciências.</p>' },
  perguntas: [
    { p: 'Segundo Platão e Aristóteles, como começa a filosofia?', r: 'Pelo espanto (thaumazein).' },
    { p: 'O que torna uma pergunta filosófica?', r: 'Ser radical, universal e não resolvível apenas por observação.' },
    { p: 'Como Newton chamou seu tratado de física?', r: 'Princípios matemáticos da filosofia natural.' },
  ],
  exercicios: [
    mc('"O que é um número?" é pergunta principalmente:', ['Científica', 'Filosófica', 'Teológica', 'Histórica'], 1, 'Pergunta pelos fundamentos, não por um cálculo.'),
    mc('A ética estuda:', ['O raciocínio válido', 'O bem e a vida boa', 'O ser enquanto ser', 'O belo'], 1, 'Parte prática da filosofia.'),
    mc('O argumento "é preciso filosofar mesmo para negar a filosofia" é um:', ['Silogismo categórico', 'Dilema', 'Ad hominem', 'Argumento indutivo'], 1, 'Dilema construtivo.'),
    mc('Para Aristóteles, a sabedoria é a ciência:', ['Mais útil', 'Das causas primeiras', 'Dos números', 'Da política'], 1, 'Metafísica I, 2.'),
    disc('Defina com suas palavras o que é filosofia e explique sua relação com a ciência e com a teologia. Use pelo menos um exemplo de cada.', ['Definição precisa', 'Distingue as três atividades', 'Exemplos adequados', 'Texto claro'])],
  resumo: ['Filosofia: amor à sabedoria.', 'Começa pelo espanto.', 'Perguntas radicais e universais.', 'Partes: lógica, metafísica, epistemologia, ética, política, estética.', 'Distinta da ciência e da teologia revelada.'],
  referencias: [{ texto: 'Aristóteles, Metafísica I, 1–2.' }, { texto: 'Platão, Teeteto 155c–d.' }, { texto: 'Josef Pieper, O que é filosofar? (1948).' }],
  revisao: [['Começo da filosofia', 'O espanto (Teeteto 155d; Metafísica I, 2).'], ['Pergunta filosófica', 'Radical, universal, não decidida só por experimento.'], ['Philosophia', 'Amor (philo) à sabedoria (sophia).']],
  avancado: {
    texto: `<h3>Concepções rivais de filosofia</h3>
<ul>
<li><strong>Filosofia como ciência das causas primeiras</strong> (Aristóteles, Tomás): saber teórico, demonstrativo.</li>
<li><strong>Filosofia como modo de vida</strong> (Pierre Hadot): nas escolas antigas, filosofar era praticar "exercícios espirituais" para transformar a si mesmo ${tag('interpretacao')}.</li>
<li><strong>Filosofia como ócio contemplativo</strong> (Josef Pieper, Ócio e culto, 1948): o filosofar exige liberdade em relação ao mundo do trabalho total ${tag('interpretacao')}.</li>
<li><strong>Filosofia como terapia da linguagem</strong> (Wittgenstein, Investigações Filosóficas): muitos problemas filosóficos nascem de confusões no uso das palavras; a tarefa é dissolvê-los ${tag('interpretacao')}.</li>
<li><strong>Filosofia como fundamentação rigorosa</strong> (Husserl, A filosofia como ciência rigorosa, 1911).</li>
</ul>
<p>O estudante avançado deve perceber que cada concepção já é uma tese filosófica e que comparar concepções é parte do ofício ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Pierre Hadot, O que é a Filosofia Antiga? (1995), introdução.' }, { texto: 'Josef Pieper, Ócio e culto (1948).' }, { texto: 'Martin Heidegger, Que é isto — a filosofia? (1955).' }],
    exercicios: [
      mc('A ideia de filosofia antiga como "exercícios espirituais" é de:', ['Pieper', 'Hadot', 'Husserl', 'Tomás'], 1, 'Pierre Hadot.'),
      mc('Para o segundo Wittgenstein, muitos problemas filosóficos:', ['São científicos', 'Nascem de confusões no uso da linguagem', 'São insolúveis por falta de dados', 'São teológicos'], 1, 'Filosofia como terapia.'),
      mc('"A filosofia como ciência rigorosa" (1911) é de:', ['Husserl', 'Kant', 'Hegel', 'Russell'], 0, 'Artigo programático da fenomenologia.'),
      disc('Escolha duas das concepções de filosofia apresentadas e avalie qual descreve melhor o que você tem feito neste curso.', ['Expõe as duas com precisão', 'Compara com a prática do curso', 'Argumenta', 'Conclusão pessoal justificada'])],
  },
}),

aula({
  id: 'm3-3', titulo: 'Opinião, crença e conhecimento',
  aprendera: ['A distinção entre opinião (doxa) e conhecimento (episteme)', 'A análise do conhecimento como crença verdadeira justificada', 'A imagem das estátuas de Dédalo no Mênon', 'O problema de Gettier'],
  explicacao: `
<h3>Achar não é saber</h3>
<p>Todos temos opiniões; poucas vezes sabemos de fato. Platão distingue <em>doxa</em> (opinião) de <em>episteme</em> (conhecimento científico). A opinião pode ser verdadeira, mas é instável; o conhecimento é firme porque sabe <em>por que</em> algo é assim ${tag('interpretacao')}.</p>
<h3>As estátuas de Dédalo</h3>
<p>No Mênon (97d–98a), Sócrates compara as opiniões verdadeiras às estátuas de Dédalo, que, segundo a lenda, fugiam se não fossem amarradas. As opiniões verdadeiras são preciosas, mas fogem da alma até que sejam amarradas por um raciocínio causal; amarradas, tornam-se conhecimento ${tag('fato')}.</p>
<h3>Crença verdadeira justificada</h3>
<p>Inspirada no Teeteto (201c–d), a epistemologia do século XX formulou a análise clássica: S sabe que p se e somente se ${tag('argumento')}:</p>
<ol><li>p é verdadeira;</li><li>S crê que p;</li><li>S está justificado em crer que p.</li></ol>
<p>Cada condição exclui um erro: não se "sabe" o falso; não se sabe o que não se crê; e acertar por sorte não é saber.</p>
<h3>Gettier</h3>
<p>Em um artigo de três páginas (1963), Edmund Gettier apresentou casos em que alguém tem crença verdadeira e justificada, mas, intuitivamente, não sabe ${tag('fato')}. Exemplo adaptado: você olha o relógio da praça, que marca 15h, e conclui que são 15h; de fato são 15h, mas o relógio parou exatamente às 15h do dia anterior. Sua crença é verdadeira e justificada (relógios costumam funcionar), mas a verdade foi coincidência. Desde então, epistemólogos propõem uma quarta condição ou outra análise ${tag('debate')}.</p>
<h3>Graus</h3>
<p>Entre a ignorância e a certeza há graus: suspeita, opinião provável, certeza moral, certeza demonstrativa. Muitos erros vêm de tratar o provável como certo, ou de recusar agir enquanto não houver certeza absoluta ${tag('argumento')}.</p>`,
  vocabulario: [['Doxa', 'Opinião.'], ['Episteme', 'Conhecimento firme, científico.'], ['Justificação', 'Razões ou fundamentos que tornam uma crença adequada.'], ['Caso Gettier', 'Crença verdadeira e justificada que não é conhecimento.'], ['Certeza moral', 'Certeza suficiente para agir, sem demonstração.']],
  exemplos: '<p>Acertar o resultado de um jogo por palpite: crença verdadeira, sem justificação. Um médico que diagnostica por exames: crença verdadeira e justificada.</p>',
  contexto: `<p>O Teeteto termina sem definição satisfatória: a hipótese "opinião verdadeira acompanhada de explicação (logos)" é examinada e rejeitada em suas versões ${tag('fato')}. A análise clássica moderna é, portanto, uma retomada crítica de Platão.</p>`,
  argumento: { titulo: 'O caso do relógio parado (estrutura de um caso Gettier)', tag: 'argumento',
    premissas: ['João crê que são 15h porque o relógio da praça marca 15h.', 'É razoável confiar em relógios públicos: a crença é justificada.', 'São de fato 15h: a crença é verdadeira.', 'O relógio estava parado; João acertou por coincidência.'],
    conclusao: 'Logo, João tem crença verdadeira justificada, mas não conhecimento — e a análise clássica é insuficiente.',
    nota: 'Exemplo usado por Bertrand Russell antes de Gettier, retomado na literatura posterior.' },
  objecoes: [{ objecao: 'Basta exigir que a justificação não dependa de nenhuma premissa falsa.', tag: 'debate', resposta: 'É a proposta "sem lemas falsos". Críticos construíram casos em que não há premissa falsa explícita e o problema persiste. Outras propostas: confiabilismo (processo confiável), virtudes epistêmicas.' }],
  aplicacao: '<p>Escreva no Caderno três crenças suas e classifique cada uma: opinião, crença justificada, conhecimento, certeza. Indique a justificação de cada uma.</p>',
  fonte: { obra: 'Platão, Mênon 96d–98b; Teeteto 200d–201c', link: null, orientacao: '<p>Leia o passo das estátuas de Dédalo no Mênon. Reconstrua o argumento: o que transforma opinião verdadeira em conhecimento?</p>' },
  perguntas: [
    { p: 'O que são as "estátuas de Dédalo" no Mênon?', r: 'Imagem das opiniões verdadeiras, que fogem se não forem amarradas por um raciocínio causal.' },
    { p: 'Quais as três condições da análise clássica?', r: 'Verdade, crença e justificação.' },
    { p: 'O que mostrou Gettier?', r: 'Que crença verdadeira justificada pode não ser conhecimento.' },
  ],
  exercicios: [
    mc('Acertar um número sorteado por palpite falha qual condição?', ['Verdade', 'Crença', 'Justificação', 'Nenhuma'], 2, 'A crença é verdadeira, mas sem justificação.'),
    mc('Episteme, em Platão, significa:', ['Opinião', 'Conhecimento firme', 'Sensação', 'Imaginação'], 1, 'Oposta a doxa.'),
    mc('O artigo de Gettier (1963) é famoso por:', ['Defender o ceticismo', 'Mostrar contraexemplos à análise clássica', 'Provar Deus', 'Criticar Platão'], 1, 'Casos Gettier.'),
    mc('"Certeza moral" é:', ['Certeza de que algo é moralmente bom', 'Certeza suficiente para agir, sem demonstração', 'Certeza matemática', 'Dúvida'], 1, 'Grau prático de certeza.'),
    disc('Construa um caso Gettier original e explique por que ele desafia a análise clássica. Proponha uma quarta condição e teste-a no seu caso.', ['Caso original e correto', 'Explica a falha', 'Propõe condição', 'Testa honestamente'])],
  resumo: ['Doxa × episteme.', 'Estátuas de Dédalo: amarrar a opinião pela causa.', 'Crença verdadeira justificada.', 'Gettier (1963).', 'Graus de certeza.'],
  referencias: [{ texto: 'Platão, Mênon 96d–98b; Teeteto 201c–210b.' }, { texto: 'Edmund Gettier, "Is Justified True Belief Knowledge?", Analysis 23 (1963).' }],
  revisao: [['Estátuas de Dédalo', 'Mênon 97d–98a: opinião verdadeira amarrada pela causa vira conhecimento.'], ['Análise clássica', 'Conhecimento = crença verdadeira justificada.'], ['Gettier (1963)', 'Contraexemplos à análise clássica.']],
  avancado: {
    texto: `<h3>Respostas a Gettier</h3>
<ul>
<li><strong>Confiabilismo</strong> (Alvin Goldman): conhecimento é crença verdadeira produzida por um processo confiável ${tag('debate')}.</li>
<li><strong>Epistemologia das virtudes</strong> (Ernest Sosa, Linda Zagzebski): conhecer é acertar <em>por causa</em> do exercício de uma virtude intelectual, e não por sorte.</li>
<li><strong>Garantia</strong> (Alvin Plantinga): faculdades funcionando bem, num ambiente adequado, segundo um plano orientado para a verdade.</li>
<li><strong>Conhecimento primeiro</strong> (Timothy Williamson, Knowledge and its Limits, 2000): conhecimento não se analisa em componentes mais simples.</li>
</ul>
<h3>Internalismo e externalismo</h3>
<p>Internalistas exigem que a justificação seja acessível à consciência do sujeito; externalistas aceitam fatores que o sujeito não percebe (como a confiabilidade de um processo). Esse debate atravessa toda a epistemologia contemporânea ${tag('debate')}.</p>
<h3>E a tradição clássica?</h3>
<p>Para Aristóteles (Analíticos Posteriores I, 2), saber cientificamente é conhecer a causa pela qual a coisa é, que não pode ser de outro modo. Essa noção é mais exigente que a moderna e se aproxima da imagem do Mênon ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Linda Zagzebski, Virtues of the Mind (1996).' }, { texto: 'Aristóteles, Analíticos Posteriores I, 2.' }],
    exercicios: [
      mc('O confiabilismo é associado a:', ['Goldman', 'Zagzebski', 'Platão', 'Williamson'], 0, 'Alvin Goldman.'),
      mc('"Conhecimento primeiro" é tese de:', ['Plantinga', 'Williamson', 'Sosa', 'Gettier'], 1, 'Knowledge and its Limits (2000).'),
      mc('O externalismo admite que a justificação:', ['Seja sempre consciente', 'Dependa de fatores não acessíveis ao sujeito', 'Não exista', 'Seja apenas emocional'], 1, 'Por exemplo, a confiabilidade de um processo.'),
      disc('Compare a noção aristotélica de ciência (conhecer pela causa) com a análise clássica moderna. Qual resiste melhor aos casos Gettier?', ['Expõe as duas noções', 'Aplica aos casos Gettier', 'Argumenta', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm3-4', titulo: 'O que é a verdade?',
  aprendera: ['A definição clássica da verdade como correspondência', 'As teorias rivais: coerência, pragmatismo, deflacionismo', 'Por que o relativismo total se refuta', 'A distinção entre verdade lógica e verdade ontológica'],
  explicacao: `
<h3>Uma pergunta antiga</h3>
<p>Pilatos perguntou a Jesus: "Que é a verdade?" (Jo 18,38). A filosofia dá várias respostas, e saber distingui-las evita confusões em qualquer debate.</p>
<h3>Correspondência</h3>
<p>Aristóteles: dizer do que é que é, e do que não é que não é, é verdadeiro; dizer do que é que não é, ou do que não é que é, é falso (Metafísica IV, 7, 1011b) ${tag('fato')}. Tomás formula: a verdade é a adequação entre o intelecto e a coisa (<em>adaequatio intellectus et rei</em>), noção que ele atribui a Isaac Israeli (Questões sobre a Verdade, q. 1, a. 1) ${tag('fato')}.</p>
<h3>Teorias rivais</h3>
<ul>
<li><strong>Coerência</strong>: uma crença é verdadeira se se integra de modo coerente num sistema de crenças (idealistas britânicos como F. H. Bradley). Objeção: um romance pode ser coerente e falso ${tag('debate')}.</li>
<li><strong>Pragmatismo</strong>: verdade é o que "funciona" ou o que a investigação aceitaria no limite (William James, C. S. Peirce). Objeção: crenças úteis podem ser falsas.</li>
<li><strong>Deflacionismo</strong>: dizer "p é verdadeira" não acrescenta nada a dizer p (F. P. Ramsey). Defensores mantêm que não há uma "natureza" da verdade a explicar.</li>
</ul>
<h3>O relativismo se refuta</h3>
<p>No Teeteto (171a–b), Sócrates mostra que a tese de Protágoras ("o homem é a medida de todas as coisas") se volta contra si: se toda opinião é verdadeira para quem a tem, é verdadeira também a opinião de quem diz que Protágoras está errado ${tag('argumento')}. A frase "não existe verdade absoluta" pretende ser absolutamente verdadeira — e, se for, é falsa.</p>
<h3>Verdade lógica e verdade ontológica</h3>
<p>A verdade dos juízos (lógica) é diferente da verdade das coisas (ontológica): dizemos "ouro verdadeiro" quando a coisa corresponde ao que deve ser. Para a tradição escolástica, o ser e o verdadeiro se convertem (<em>ens et verum convertuntur</em>): tudo o que é, enquanto é, é inteligível ${tag('interpretacao')}.</p>`,
  vocabulario: [['Correspondência', 'Verdade como adequação entre juízo e realidade.'], ['Coerência', 'Verdade como integração num sistema de crenças.'], ['Pragmatismo', 'Verdade ligada ao que funciona ou ao fim da investigação.'], ['Deflacionismo', 'Tese de que "é verdade" não acrescenta conteúdo.'], ['Autorrefutação (peritropē)', 'Tese que, aplicada a si mesma, se nega.']],
  exemplos: '<p>"Está chovendo" é verdadeiro se, e somente se, está chovendo. Simples, mas esclarecedor: a verdade da frase depende do mundo, não de quem a diz.</p>',
  contexto: `<p>O lógico Alfred Tarski (1933) deu forma rigorosa a essa intuição para linguagens formais, com a "convenção T" ${tag('fato')}.</p>`,
  argumento: { titulo: 'A autorrefutação do relativismo total (Teeteto 171a, reconstruído)', tag: 'argumento',
    premissas: ['O relativista afirma: toda verdade é relativa ao sujeito.', 'Essa afirmação pretende valer para todos, não só para quem a diz.', 'Se vale para todos, há ao menos uma verdade não relativa.'],
    conclusao: 'Logo, o relativismo total contradiz a si mesmo.',
    nota: 'O argumento atinge o relativismo global. Formas restritas de relativismo (sobre gostos, por exemplo) não são atingidas e precisam ser discutidas caso a caso.' },
  objecoes: [{ objecao: 'O relativista pode dizer que sua tese é verdadeira só para ele.', tag: 'debate', resposta: 'Nesse caso deixa de afirmar algo sobre todos e não pode criticar quem discorda. Filósofos discutem se esse relativismo "modesto" ainda é uma tese filosófica.' }],
  aplicacao: '<p>Anote no Caderno três frases comuns ("cada um tem sua verdade", "isso é verdade para você") e analise o que significam em cada teoria da verdade.</p>',
  fonte: { obra: 'Aristóteles, Metafísica IV, 7; Tomás, Questões sobre a Verdade, q. 1, a. 1', link: null, orientacao: '<p>Leia o artigo 1 da questão 1 sobre a Verdade (há traduções em coletâneas de Tomás). Identifique a definição de verdade e o argumento dos "transcendentais".</p>' },
  perguntas: [
    { p: 'Qual a definição clássica de verdade?', r: 'Adequação entre o intelecto e a coisa.' },
    { p: 'Por que o relativismo total se refuta?', r: 'Porque pretende ser verdadeiro para todos, o que nega a própria tese.' },
    { p: 'O que é verdade ontológica?', r: 'A verdade das coisas, enquanto correspondem ao que devem ser e são inteligíveis.' },
  ],
  exercicios: [
    mc('"Dizer do que é que é" é definição de verdade de:', ['Kant', 'Aristóteles', 'James', 'Ramsey'], 1, 'Metafísica IV, 7.'),
    mc('A objeção "um romance pode ser coerente e falso" atinge a teoria:', ['Da correspondência', 'Da coerência', 'Deflacionária', 'Nenhuma'], 1, 'Coerência não basta.'),
    mc('"Não existe verdade absoluta" é uma frase:', ['Neutra', 'Autorrefutante, se pretende valer absolutamente', 'Científica', 'Sempre verdadeira'], 1, 'Peritropē.'),
    mc('"Ens et verum convertuntur" significa:', ['O ser e o verdadeiro se convertem', 'A verdade é relativa', 'O ser é ilusão', 'Só Deus é verdadeiro'], 0, 'Tese dos transcendentais.'),
    disc('Compare a teoria da correspondência com a pragmatista e avalie qual explica melhor por que a ciência pode errar e corrigir-se.', ['Expõe as duas', 'Aplica ao erro científico', 'Argumenta', 'Conclusão justificada'])],
  resumo: ['Correspondência (Aristóteles, Tomás).', 'Coerência, pragmatismo, deflacionismo.', 'Relativismo total se refuta.', 'Verdade lógica × ontológica.'],
  referencias: [{ texto: 'Aristóteles, Metafísica IV, 7.' }, { texto: 'Tomás de Aquino, Questões Disputadas sobre a Verdade, q. 1.' }, { texto: 'Platão, Teeteto 170a–171d.' }],
  revisao: [['Adaequatio intellectus et rei', 'Definição clássica da verdade (Tomás).'], ['Autorrefutação do relativismo', 'Teeteto 171a.'], ['Teorias da verdade', 'Correspondência, coerência, pragmatismo, deflacionismo.']],
  avancado: {
    texto: `<h3>Tarski e a convenção T</h3>
<p>Alfred Tarski ("O conceito de verdade nas linguagens formalizadas", 1933) mostrou que uma definição adequada de verdade para uma linguagem deve implicar todas as frases da forma "'neve é branca' é verdadeira se e somente se neve é branca". Para evitar paradoxos (como o do mentiroso: "esta frase é falsa"), a definição deve ser feita numa metalinguagem ${tag('fato')}. Debate-se se Tarski defendeu uma teoria da correspondência ou uma forma de deflacionismo ${tag('debate')}.</p>
<h3>O paradoxo do mentiroso</h3>
<p>"Esta frase é falsa": se é verdadeira, é falsa; se é falsa, é verdadeira. O paradoxo, conhecido desde Eubúlides (século IV a.C.), é testado por todas as teorias da verdade; soluções incluem hierarquias de linguagens (Tarski), lacunas de valor de verdade (Kripke, 1975) e lógicas paraconsistentes ${tag('debate')}.</p>
<h3>Verdade e pessoa</h3>
<p>Na tradição cristã, Cristo diz "Eu sou a verdade" (Jo 14,6). Teólogos distinguem a verdade dos juízos, a verdade das coisas e a Verdade como atributo de Deus, fonte da inteligibilidade de tudo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Alfred Tarski, "A concepção semântica da verdade" (1944).' }, { texto: 'Saul Kripke, "Outline of a Theory of Truth" (1975).' }],
    exercicios: [
      mc('A convenção T exige frases do tipo:', ['"p" é verdadeira se e somente se p', 'p é útil', 'p é coerente', 'p é aceita'], 0, 'Tarski, 1933.'),
      mc('O paradoxo do mentiroso é atribuído na Antiguidade a:', ['Zenão', 'Eubúlides', 'Sócrates', 'Pirro'], 1, 'Escola megárica.'),
      mc('Kripke (1975) propôs para o mentiroso:', ['Hierarquia de linguagens', 'Lacunas de valor de verdade', 'Abandonar a lógica', 'Um dogma'], 1, 'Teoria do ponto fixo.'),
      disc('O paradoxo do mentiroso ameaça a teoria da correspondência? Apresente uma solução e avalie seu custo.', ['Explica o paradoxo', 'Expõe uma solução', 'Discute o custo', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm3-5', titulo: 'Sócrates e a Apologia',
  aprendera: ['Quem foi Sócrates e por que foi condenado', 'O episódio do oráculo de Delfos', 'O método do exame (elenchos)', 'O "problema socrático" das fontes'],
  explicacao: `
<h3>Um filósofo que não escreveu</h3>
<p>Sócrates (c. 470–399 a.C.) não deixou textos. Conhecemo-lo por Platão, Xenofonte, pela comédia As Nuvens de Aristófanes (423 a.C.) e por Aristóteles, fontes que nem sempre concordam — é o "problema socrático" ${tag('debate')}.</p>
<h3>O processo (399 a.C.)</h3>
<p>Meleto, Ânito e Lícon acusaram Sócrates de corromper a juventude e de não reconhecer os deuses da cidade, introduzindo novas divindades ${tag('fato')}. A Apologia de Platão apresenta sua defesa, em três partes: o discurso de defesa, a proposta de pena após a condenação e as palavras finais.</p>
<h3>O oráculo</h3>
<p>Querefonte perguntou ao oráculo de Delfos se havia alguém mais sábio que Sócrates; a resposta foi "ninguém". Espantado, Sócrates examinou políticos, poetas e artesãos e concluiu que era mais sábio apenas por não pensar saber o que não sabia (Apologia 21a–23b) ${tag('fato')}. A famosa fórmula "só sei que nada sei" é uma simplificação posterior desse passo.</p>
<h3>O método</h3>
<p>O <em>elenchos</em> (refutação, exame) consiste em pedir a definição de algo (coragem, piedade, justiça), deduzir consequências e mostrar que elas contradizem outras crenças do interlocutor. O resultado costuma ser a <em>aporia</em> (impasse), que desperta para a busca ${tag('interpretacao')}.</p>
<h3>Duas frases centrais</h3>
<ul>
<li>Sócrates diz que obedecerá antes ao deus que aos atenienses e não deixará de filosofar (29d) ${tag('fato')}.</li>
<li>Diz que uma vida sem exame não vale a pena ser vivida (38a) ${tag('fato')}.</li>
</ul>
<p>Condenado, propõe ironicamente como "pena" ser alimentado no Pritaneu, honra dada a benfeitores; recebe a pena de morte e bebe a cicuta (narrada no Fédon).</p>`,
  vocabulario: [['Elenchos', 'Exame refutativo de uma tese.'], ['Aporia', 'Impasse que surge do exame.'], ['Daimonion', 'Sinal divino que, segundo Sócrates, o desviava de certas ações.'], ['Ironia socrática', 'Fingir ignorância para conduzir o exame.'], ['Problema socrático', 'Dificuldade de reconstruir o Sócrates histórico pelas fontes.']],
  exemplos: '<p>Pergunte a um amigo "o que é a coragem?". Se ele responder "não fugir na batalha", peça um exemplo de coragem fora da batalha. Você estará fazendo elenchos — como Sócrates no Laques.</p>',
  contexto: `<p>Atenas acabava de perder a Guerra do Peloponeso (404 a.C.) e viver o governo dos Trinta Tiranos, entre os quais estava Crítias, ex-companheiro de Sócrates. Muitos historiadores veem nesse contexto um motivo político do processo ${tag('debate')}.</p>`,
  argumento: { titulo: 'Por que Sócrates é o mais sábio (Apologia 21–23, reconstruído)', tag: 'argumento',
    premissas: ['Os que examinei pensavam saber o que não sabiam.', 'Eu não sei essas coisas, mas também não penso que sei.', 'Quem não se engana sobre a própria ignorância está em situação melhor do que quem se engana.'],
    conclusao: 'Logo, sou mais sábio que eles nisto: não penso saber o que não sei.',
    nota: 'A sabedoria humana é reconhecer seus limites. Note a precisão: Sócrates não diz que nada sabe em sentido absoluto; ele afirma saber, por exemplo, que é vergonhoso desobedecer a quem é melhor (29b).' },
  objecoes: [{ objecao: 'A Apologia é uma criação de Platão, não um registro do que Sócrates disse.', tag: 'debate', resposta: 'Platão estava presente no julgamento (Apologia 34a, 38b), o que dá peso ao texto; mas é uma obra literária. Muitos estudiosos consideram que preserva o essencial; outros, que expressa sobretudo a visão de Platão.' }],
  aplicacao: '<p>Escolha uma convicção sua importante e faça com ela um "exame socrático" de três perguntas: o que exatamente afirmo? Que exemplo a contradiz? Que definição resiste ao exemplo?</p>',
  fonte: { obra: 'Platão, Apologia de Sócrates', link: null, orientacao: '<p>Leia a obra inteira (cerca de 30 páginas). Faça a ficha de leitura da aula 1: pergunta central, termos ("sabedoria", "deus", "alma"), tese e argumento. Marque 21a–23b, 29d–30b e 38a.</p>' },
  perguntas: [
    { p: 'Quais eram as acusações contra Sócrates?', r: 'Corromper a juventude e não reconhecer os deuses da cidade, introduzindo novas divindades.' },
    { p: 'O que o oráculo de Delfos respondeu?', r: 'Que ninguém era mais sábio que Sócrates.' },
    { p: 'O que é o elenchos?', r: 'O exame refutativo de uma tese.' },
  ],
  exercicios: [
    mc('Sócrates foi condenado em:', ['429 a.C.', '399 a.C.', '347 a.C.', '322 a.C.'], 1, 'Atenas, 399 a.C.'),
    mc('Segundo a Apologia, a sabedoria de Sócrates consiste em:', ['Saber tudo', 'Não pensar saber o que não sabe', 'Saber retórica', 'Conhecer os deuses'], 1, 'Apologia 21d.'),
    mc('A comédia que ridiculariza Sócrates é:', ['As Rãs', 'As Nuvens', 'Lisístrata', 'As Aves'], 1, 'Aristófanes, 423 a.C.'),
    mc('"Aporia" significa:', ['Definição', 'Impasse', 'Sentença', 'Oráculo'], 1, 'Resultado frequente do exame.'),
    disc('Sócrates diz que obedecerá ao deus antes que aos atenienses (29d). Avalie: há conflito entre isso e a obediência às leis defendida no Críton (próxima aula)?', ['Usa o texto da Apologia', 'Antecipa o Críton', 'Analisa o possível conflito', 'Conclusão justificada'])],
  resumo: ['Sócrates não escreveu; problema socrático.', 'Acusações: corrupção da juventude e impiedade.', 'Oráculo: sabedoria humana.', 'Elenchos e aporia.', 'Vida sem exame não vale a pena (38a).'],
  referencias: [{ texto: 'Platão, Apologia de Sócrates.' }, { texto: 'Xenofonte, Apologia de Sócrates e Memoráveis.' }, { texto: 'Aristófanes, As Nuvens.' }],
  revisao: [['Oráculo de Delfos', 'Ninguém mais sábio que Sócrates (Apologia 21a).'], ['Vida sem exame', 'Não vale a pena ser vivida (Apologia 38a).'], ['Elenchos', 'Exame refutativo.']],
  avancado: {
    texto: `<h3>O Sócrates de Vlastos</h3>
<p>Gregory Vlastos (Socrates, Ironist and Moral Philosopher, 1991) propôs distinguir os diálogos "socráticos" (iniciais) dos "médios" de Platão, atribuindo ao Sócrates histórico as teses dos primeiros: busca de definições morais, elenchos, ausência da teoria das Formas ${tag('interpretacao')}. Outros estudiosos (como Charles Kahn) criticaram a cronologia e leram os diálogos curtos como construções literárias de Platão ${tag('debate')}.</p>
<h3>Os paradoxos socráticos</h3>
<p>Duas teses surpreendentes: ninguém erra voluntariamente (quem faz o mal o faz por ignorância do bem) e a virtude é conhecimento ${tag('argumento')}. Aristóteles (Ética a Nicômaco VII) objetará com o fenômeno da <em>akrasia</em> (fraqueza da vontade): saber o bem e fazer o mal ${tag('debate')}.</p>
<h3>Ironia</h3>
<p>A "ironia socrática" (eironeia) foi entendida como fingimento pedagógico, como modéstia sincera ou como ironia complexa (Vlastos); Kierkegaard escreveu sua tese sobre o conceito de ironia em Sócrates (1841) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Gregory Vlastos, Socrates, Ironist and Moral Philosopher (1991), caps. 1–2.' }, { texto: 'Aristóteles, Ética a Nicômaco VII, 1–3 (akrasia).' }],
    exercicios: [
      mc('Para Vlastos, o Sócrates histórico está melhor representado nos diálogos:', ['Tardios', 'Iniciais', 'Médios', 'De Xenofonte'], 1, 'Tese discutida.'),
      mc('"Ninguém erra voluntariamente" é um:', ['Paradoxo socrático', 'Dogma cristão', 'Princípio estoico', 'Teorema lógico'], 0, 'Ligado à tese de que a virtude é conhecimento.'),
      mc('A objeção da akrasia vem de:', ['Platão', 'Aristóteles', 'Xenofonte', 'Pirro'], 1, 'Ética a Nicômaco VII.'),
      disc('Defenda ou critique o paradoxo "ninguém erra voluntariamente" usando a objeção da akrasia e um exemplo da vida real.', ['Expõe o paradoxo', 'Expõe a objeção', 'Usa exemplo', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm3-6', titulo: 'Críton: justiça e leis',
  aprendera: ['O argumento de Sócrates para não fugir da prisão', 'O princípio de não retribuir a injustiça', 'O discurso das Leis', 'A relação entre o Críton e a Apologia'],
  prereq: ['Aula 5: Sócrates e a Apologia'],
  explicacao: `
<h3>A situação</h3>
<p>Dias antes da execução, Críton, amigo rico, vai à prisão e propõe a fuga: tudo está preparado, e a opinião pública julgará os amigos covardes se Sócrates morrer ${tag('fato')}. Sócrates responde que não se deve dar importância à opinião da maioria, mas à de quem entende do justo, e que a pergunta é se fugir é justo.</p>
<h3>Princípios</h3>
<p>Antes do argumento, Sócrates fixa premissas aceitas por ambos (Críton 48b–49e) ${tag('fato')}:</p>
<ul>
<li>Importa não simplesmente viver, mas viver bem — isto é, de modo justo e belo.</li>
<li>Nunca se deve cometer injustiça, nem mesmo em retribuição a uma injustiça sofrida.</li>
<li>Deve-se cumprir os acordos justos.</li>
</ul>
<p>O segundo princípio rompia com a moral grega comum de "fazer bem aos amigos e mal aos inimigos" ${tag('interpretacao')}.</p>
<h3>O discurso das Leis</h3>
<p>Sócrates imagina as Leis de Atenas falando com ele (50a–54d) ${tag('argumento')}:</p>
<ol>
<li>Fugir seria tentar destruir as Leis, pois uma cidade não subsiste se as sentenças não têm força.</li>
<li>As Leis são como pais e educadores: deram-lhe nascimento, criação e educação.</li>
<li>Sócrates fez com elas um acordo tácito: viveu setenta anos em Atenas, podendo partir, e nem no julgamento propôs o exílio.</li>
<li>Cabia-lhe "persuadir ou obedecer": tentar convencer a cidade, por meios legais, ou acatar a decisão.</li>
</ol>
<h3>Uma lição de método</h3>
<p>O diálogo mostra a coerência entre argumento e vida: Sócrates aplica a si mesmo os princípios que ensinou, mesmo ao custo da vida.</p>`,
  vocabulario: [['Acordo tácito', 'Consentimento manifestado por atos, não por palavras.'], ['Persuadir ou obedecer', 'Alternativa que as Leis propõem ao cidadão.'], ['Retribuição', 'Devolver o mal recebido; Sócrates a rejeita.'], ['Opinião da maioria', 'Que Sócrates opõe à do entendido.']],
  exemplos: '<p>Um cidadão discorda de uma lei: pode recorrer, votar, manifestar-se, buscar reformá-la ("persuadir") — ou cumpri-la. O Críton discute se é justo descumpri-la às escondidas em benefício próprio.</p>',
  contexto: `<p>A execução de Sócrates foi adiada por um mês porque Atenas não executava ninguém enquanto o navio sagrado enviado a Delos não voltasse ${tag('fato')}. O Críton se passa no fim desse prazo.</p>`,
  argumento: { titulo: 'O argumento do acordo (Críton 51c–53a, reconstruído)', tag: 'argumento',
    premissas: ['Deve-se cumprir os acordos justos.', 'Ao permanecer em Atenas podendo partir, Sócrates concordou em obedecer às suas leis.', 'O acordo é justo: a cidade lhe deu a possibilidade de persuadir ou de partir.', 'Fugir seria descumprir o acordo.'],
    conclusao: 'Logo, fugir seria injusto.',
    nota: 'Muitos veem aqui um antecedente das teorias do contrato social (Locke, Rousseau). A premissa 2 é a mais discutida: permanecer equivale a consentir?' },
  objecoes: [
    { objecao: 'Permanecer num país não é consentir: muitos não têm meios de partir.', tag: 'debate', resposta: 'Objeção de Hume ("Do contrato original", 1748) contra o consentimento tácito. No caso de Sócrates, o texto insiste em que ele teve todas as oportunidades de partir, inclusive o exílio como pena.' },
    { objecao: 'Há contradição com a Apologia, onde Sócrates diz que desobedeceria se lhe proibissem filosofar.', tag: 'debate', resposta: 'Uma leitura comum: na Apologia, recusaria fazer o injusto; no Críton, recusa cometer injustiça fugindo. Em ambos o princípio é o mesmo: nunca cometer injustiça. Estudiosos discutem se a conciliação funciona.' },
  ],
  aplicacao: '<p>Escreva no Caderno um caso atual de desobediência civil e avalie-o pelos três princípios de Sócrates.</p>',
  fonte: { obra: 'Platão, Críton', link: null, orientacao: '<p>Leia o diálogo inteiro (cerca de 20 páginas). Reconstrua em premissas o discurso das Leis (50a–54d). Identifique qual premissa você considera mais frágil.</p>' },
  perguntas: [
    { p: 'Que princípio rompe com a moral grega comum?', r: 'Nunca cometer injustiça, nem em retribuição.' },
    { p: 'O que as Leis propõem ao cidadão?', r: 'Persuadir ou obedecer.' },
    { p: 'Por que a execução foi adiada?', r: 'Por causa da viagem do navio sagrado a Delos.' },
  ],
  exercicios: [
    mc('Críton propõe a Sócrates:', ['Recorrer ao tribunal', 'Fugir da prisão', 'Pedir perdão', 'Exilar-se legalmente'], 1, 'Tudo estava preparado.'),
    mc('Para Sócrates, a opinião que importa é a:', ['Da maioria', 'De quem entende do justo', 'Dos amigos', 'Dos deuses'], 1, 'Críton 47a–d.'),
    mc('A objeção ao consentimento tácito por permanência é associada a:', ['Hume', 'Kant', 'Tomás', 'Platão'], 0, '"Do contrato original" (1748).'),
    mc('O argumento do acordo antecipa:', ['O utilitarismo', 'As teorias do contrato social', 'O ceticismo', 'O nominalismo'], 1, 'Locke, Rousseau.'),
    disc('Reconstrua o discurso das Leis e avalie se Sócrates deveria ter fugido. Considere a objeção de Hume.', ['Reconstrução fiel', 'Avalia cada premissa', 'Usa a objeção de Hume', 'Conclusão justificada'])],
  resumo: ['Viver bem, não apenas viver.', 'Não retribuir injustiça com injustiça.', 'Leis como pais; acordo tácito; persuadir ou obedecer.', 'Coerência entre argumento e vida.'],
  referencias: [{ texto: 'Platão, Críton.' }, { texto: 'David Hume, "Do contrato original" (1748).' }],
  revisao: [['Princípio do Críton', 'Nunca cometer injustiça, nem em retribuição (49b–d).'], ['Persuadir ou obedecer', 'Alternativa das Leis ao cidadão.'], ['Acordo tácito', 'Sócrates permaneceu em Atenas podendo partir.']],
  avancado: {
    texto: `<h3>Sócrates e o Estado</h3>
<p>Richard Kraut (Socrates and the State, 1984) argumentou que o "persuadir ou obedecer" permite desobediência quando o cidadão, após tentar persuadir, tem boas razões para julgar injusta a ordem — o que reconciliaria Críton e Apologia ${tag('interpretacao')}. Outros leem o Críton como defesa quase absoluta da obediência ${tag('debate')}.</p>
<h3>Lei injusta</h3>
<p>Agostinho (O Livre-Arbítrio I, 5) afirma que uma lei injusta não parece ser lei; Tomás (Suma I-II, q. 96, a. 4) explica que leis injustas não obrigam em consciência, salvo para evitar escândalo ou desordem, e que leis contrárias ao bem divino nunca devem ser obedecidas ${tag('argumento')}. Martin Luther King Jr. citou Agostinho e Tomás na Carta da prisão de Birmingham (1963) ${tag('fato')}.</p>
<h3>Comparação</h3>
<p>O Críton, Agostinho, Tomás e King oferecem quatro respostas à pergunta "quando desobedecer?". O exercício avançado é ordená-las do mais ao menos exigente e justificar.</p>`,
    leituras: [{ texto: 'Tomás de Aquino, Suma I-II, q. 96, a. 4.' }, { texto: 'Martin Luther King Jr., Carta da prisão de Birmingham (1963).' }, { texto: 'Richard Kraut, Socrates and the State (1984).' }],
    exercicios: [
      mc('Para Tomás, uma lei contrária ao bem divino:', ['Deve ser obedecida sempre', 'Nunca deve ser obedecida', 'É indiferente', 'Obriga só os clérigos'], 1, 'Suma I-II, q. 96, a. 4.'),
      mc('A Carta da prisão de Birmingham cita:', ['Hume e Kant', 'Agostinho e Tomás', 'Sócrates e Hobbes', 'Marx e Engels'], 1, 'King, 1963.'),
      mc('Kraut lê o "persuadir ou obedecer" como:', ['Obediência absoluta', 'Abertura à desobediência justificada após tentativa de persuadir', 'Anarquismo', 'Indiferença política'], 1, 'Socrates and the State (1984).'),
      disc('Compare as respostas do Críton, de Tomás e de King à pergunta "quando é justo desobedecer a uma lei?".', ['Expõe as três', 'Compara critérios', 'Aplica a um caso', 'Conclusão justificada'])],
  },
}),
];
