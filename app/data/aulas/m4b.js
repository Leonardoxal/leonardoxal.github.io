// Módulo 4 — aulas 7 a 12.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

const V = (argumento, valido, explicacao) => ({ tipo: 'validade', enunciado: 'O argumento é válido?', argumento, valido, explicacao });

export const AULAS = [
aula({
  id: 'm4-7', titulo: 'Figuras e modos do silogismo',
  aprendera: ['As quatro figuras do silogismo', 'Os modos válidos e seus nomes mnemônicos', 'A redução à primeira figura', 'Como usar os nomes para lembrar a validade'],
  prereq: ['Aula 6: O silogismo categórico'],
  explicacao: `
<h3>Figura: a posição do termo médio</h3>
<p>A <strong>figura</strong> de um silogismo depende da posição do termo médio (M) nas premissas ${tag('fato')}:</p>
<ul>
<li><strong>1ª figura</strong>: M é sujeito na maior e predicado na menor (M–P, S–M).</li>
<li><strong>2ª figura</strong>: M é predicado nas duas (P–M, S–M).</li>
<li><strong>3ª figura</strong>: M é sujeito nas duas (M–P, M–S).</li>
<li><strong>4ª figura</strong>: M é predicado na maior e sujeito na menor (P–M, M–S). Aristóteles não a tratou separadamente; a tradição a atribui a Galeno, atribuição duvidosa ${tag('debate')}.</li>
</ul>
<h3>Modo: os tipos de proposições</h3>
<p>O <strong>modo</strong> é a sequência das letras A, E, I, O das três proposições. AAA na primeira figura é "Barbara".</p>
<h3>Os nomes mnemônicos</h3>
<p>Os lógicos medievais criaram versos com os nomes dos modos válidos, em que as vogais indicam as proposições ${tag('fato')}:</p>
<ul>
<li><strong>1ª figura</strong>: Barbara, Celarent, Darii, Ferio.</li>
<li><strong>2ª figura</strong>: Cesare, Camestres, Festino, Baroco.</li>
<li><strong>3ª figura</strong>: Darapti, Disamis, Datisi, Felapton, Bocardo, Ferison.</li>
<li><strong>4ª figura</strong>: Bramantip, Camenes, Dimaris, Fesapo, Fresison.</li>
</ul>
<p>As consoantes também têm significado: a inicial indica o modo da primeira figura ao qual o modo se reduz (Cesare → Celarent); "s" indica conversão simples da proposição anterior; "p", conversão por limitação; "m", troca das premissas; "c", redução pelo absurdo ${tag('fato')}.</p>
<h3>Exemplos</h3>
<ul>
<li><strong>Celarent</strong> (EAE-1): Nenhum M é P; todo S é M; logo, nenhum S é P.</li>
<li><strong>Cesare</strong> (EAE-2): Nenhum P é M; todo S é M; logo, nenhum S é P.</li>
<li><strong>Baroco</strong> (AOO-2): Todo P é M; algum S não é M; logo, algum S não é P.</li>
<li><strong>Disamis</strong> (IAI-3): Algum M é P; todo M é S; logo, algum S é P.</li>
</ul>`,
  vocabulario: [['Figura', 'Posição do termo médio nas premissas.'], ['Modo', 'Sequência dos tipos de proposições (A, E, I, O).'], ['Barbara', 'AAA da primeira figura.'], ['Redução', 'Transformação de um modo em outro da primeira figura.'], ['Modo perfeito', 'Modo da primeira figura, evidente por si.']],
  exemplos: '<p>"Nenhum ser imaterial é corruptível; a alma intelectiva é imaterial; logo, a alma intelectiva é incorruptível" — Celarent (com a menor singular tratada como universal). A validade é garantida; o debate está na premissa menor.</p>',
  contexto: `<p>Os versos "Barbara, Celarent, Darii, Ferioque prioris..." aparecem nas Summulae logicales atribuídas a Pedro Hispano (século XIII), manual de lógica muito usado nas universidades ${tag('fato')}.</p>`,
  argumento: { titulo: 'Redução de Cesare a Celarent', tag: 'argumento',
    premissas: ['Cesare: Nenhum P é M; todo S é M.', 'A conversão simples de "Nenhum P é M" dá "Nenhum M é P" (válida para E).', 'Com "Nenhum M é P" e "Todo S é M" temos Celarent, válido.'],
    conclusao: 'Logo, Cesare é válido, pois se reduz a um modo perfeito.',
    nota: 'O "s" depois do primeiro "e" de Cesare indica justamente essa conversão simples.' },
  objecoes: [{ objecao: 'Darapti (AAI-3) é inválido na lógica moderna.', tag: 'debate', resposta: 'Correto quando não se supõe a existência do sujeito: "Todo unicórnio é branco; todo unicórnio é cavalo; logo, algum cavalo é branco" falha se não há unicórnios. Darapti, Felapton, Bramantip e Fesapo exigem conteúdo existencial.' }],
  aplicacao: '<p>Escreva no Caderno um exemplo filosófico de Barbara, Celarent, Darii e Ferio. Depois, um exemplo de Baroco.</p>',
  fonte: { obra: 'Aristóteles, Analíticos Anteriores I, 4–7', link: null, orientacao: '<p>Leia I, 5 (segunda figura) e compare os modos que Aristóteles valida com a lista de nomes mnemônicos.</p>' },
  perguntas: [
    { p: 'O que define a figura de um silogismo?', r: 'A posição do termo médio nas premissas.' },
    { p: 'Quais são os quatro modos da primeira figura?', r: 'Barbara, Celarent, Darii, Ferio.' },
    { p: 'O que indica a consoante inicial dos nomes?', r: 'O modo da primeira figura ao qual o modo se reduz.' },
  ],
  exercicios: [
    mc('Na segunda figura, o termo médio é:', ['Sujeito nas duas premissas', 'Predicado nas duas premissas', 'Sujeito na maior, predicado na menor', 'Ausente'], 1, 'P–M, S–M.'),
    mc('"Ferio" tem o modo:', ['EIO', 'AAA', 'EAE', 'AII'], 0, 'As vogais: e, i, o.'),
    V(['Nenhum P é M.', 'Todo S é M.', 'Logo, nenhum S é P.'], true, 'Cesare (EAE-2): válido.'),
    V(['Todo P é M.', 'Todo S é M.', 'Logo, todo S é P.'], false, 'AAA-2 não é válido: médio não distribuído.'),
    mc('Cesare se reduz a:', ['Barbara', 'Celarent', 'Darii', 'Ferio'], 1, 'Consoante inicial C.'),
    disc('Construa um silogismo em Baroco com conteúdo filosófico e explique por que ele é válido (use a regra de distribuição).', ['Forma correta AOO-2', 'Conteúdo pertinente', 'Explicação pela distribuição', 'Clareza'])],
  resumo: ['Quatro figuras pela posição do médio.', 'Modo = letras das proposições.', 'Nomes mnemônicos e seu código.', 'Redução à primeira figura.', 'Modos com conteúdo existencial.'],
  referencias: [{ texto: 'Aristóteles, Analíticos Anteriores I, 4–7.' }, { texto: 'Pedro Hispano (atrib.), Summulae logicales.' }],
  revisao: [['Primeira figura', 'Barbara, Celarent, Darii, Ferio.'], ['Figura', 'Posição do termo médio.'], ['Cesare → Celarent', 'Por conversão simples da maior.']],
  avancado: {
    texto: `<h3>A redução por absurdo</h3>
<p>Baroco e Bocardo não se reduzem por conversão; Aristóteles os prova por absurdo: supõe-se a contraditória da conclusão e, com uma das premissas, deduz-se em Barbara a contraditória da outra premissa ${tag('argumento')}. É um dos primeiros usos explícitos da prova por absurdo em lógica.</p>
<h3>Os 24 modos válidos</h3>
<p>Combinando 4 figuras e 64 modos possíveis há 256 combinações. Incluindo os modos "enfraquecidos" (que concluem uma particular quando poderiam concluir a universal), contam-se 24 válidos na interpretação tradicional; 15 na interpretação moderna ${tag('fato')}.</p>
<h3>Leibniz e a combinatória</h3>
<p>Leibniz (De arte combinatoria, 1666) calculou sistematicamente os modos e sonhou com uma "característica universal" que tornasse todo raciocínio um cálculo ${tag('fato')} — projeto que antecipa a lógica matemática.</p>`,
    leituras: [{ texto: 'Aristóteles, Analíticos Anteriores I, 5–6 (provas por absurdo).' }, { texto: 'G. W. Leibniz, De arte combinatoria (1666).' }],
    exercicios: [
      mc('Baroco é provado por Aristóteles:', ['Por conversão', 'Por absurdo', 'Por indução', 'Por definição'], 1, 'Redução per impossibile.'),
      mc('Na interpretação moderna (sem conteúdo existencial), o número de modos válidos é:', ['24', '15', '19', '4'], 1, 'Caem os que exigem existência.'),
      mc('A "característica universal" foi sonho de:', ['Leibniz', 'Kant', 'Boole', 'Descartes'], 0, 'Leibniz.'),
      disc('Prove Baroco por absurdo: escreva a contraditória da conclusão e derive, com a premissa maior, a contraditória da premissa menor em Barbara.', ['Contraditória correta', 'Derivação em Barbara', 'Identifica o absurdo', 'Clareza'])],
  },
}),

aula({
  id: 'm4-8', titulo: 'Lógica proposicional básica',
  aprendera: ['Os conectivos lógicos e suas tabelas de verdade', 'As formas válidas fundamentais: modus ponens, modus tollens, silogismo hipotético e disjuntivo', 'As leis de De Morgan', 'O condicional material e seus paradoxos'],
  explicacao: `
<h3>Proposições inteiras</h3>
<p>A silogística analisa termos; a lógica proposicional analisa proposições inteiras ligadas por conectivos ${tag('fato')}. Usamos letras (p, q, r) para proposições.</p>
<h3>Os conectivos</h3>
<ul>
<li><strong>Negação</strong> (¬p): verdadeira quando p é falsa.</li>
<li><strong>Conjunção</strong> (p ∧ q): verdadeira só quando ambas são verdadeiras.</li>
<li><strong>Disjunção inclusiva</strong> (p ∨ q): falsa só quando ambas são falsas.</li>
<li><strong>Condicional</strong> (p → q): falsa só quando p é verdadeira e q falsa.</li>
<li><strong>Bicondicional</strong> (p ↔ q): verdadeira quando p e q têm o mesmo valor.</li>
</ul>
<h3>Formas válidas fundamentais</h3>
<ul>
<li><strong>Modus ponens</strong>: p → q; p; logo, q.</li>
<li><strong>Modus tollens</strong>: p → q; ¬q; logo, ¬p.</li>
<li><strong>Silogismo hipotético</strong>: p → q; q → r; logo, p → r.</li>
<li><strong>Silogismo disjuntivo</strong>: p ∨ q; ¬p; logo, q.</li>
<li><strong>Dilema construtivo</strong>: (p → q) ∧ (r → s); p ∨ r; logo, q ∨ s.</li>
</ul>
<h3>Leis de De Morgan</h3>
<p>¬(p ∧ q) equivale a ¬p ∨ ¬q; ¬(p ∨ q) equivale a ¬p ∧ ¬q ${tag('fato')}. Exemplo: "não é verdade que ele é rico e feliz" significa "ou não é rico, ou não é feliz".</p>
<h3>O condicional material</h3>
<p>Pela tabela, "se p, então q" é verdadeiro sempre que p é falsa. Assim, "se a Lua é de queijo, então 2 + 2 = 5" é verdadeiro. Esses "paradoxos da implicação material" mostram que o condicional lógico não captura todos os usos de "se" na linguagem comum ${tag('debate')}.</p>
<h3>Testar validade por tabela</h3>
<p>Um argumento proposicional é válido se, em nenhuma linha da tabela de verdade, as premissas são todas verdadeiras e a conclusão falsa.</p>`,
  vocabulario: [['Conectivo', 'Operador que forma proposições compostas.'], ['Tabela de verdade', 'Lista dos valores de uma fórmula em todas as combinações.'], ['Modus ponens', 'Afirmação do antecedente.'], ['Modus tollens', 'Negação do consequente.'], ['Tautologia', 'Fórmula verdadeira em todas as linhas.']],
  exemplos: '<p>"Se Deus não existe, tudo é permitido; nem tudo é permitido; logo, Deus existe." Forma: modus tollens (válida). A discussão está na primeira premissa, atribuída a personagens de Dostoiévski e muito debatida.</p>',
  contexto: `<p>Os estoicos desenvolveram a lógica proposicional na Antiguidade; Boole (1854) e Frege (1879) a formalizaram matematicamente ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que o modus tollens é válido', tag: 'argumento',
    premissas: ['Se p → q é verdadeira, não pode ser que p seja verdadeira e q falsa.', 'Sabemos que q é falsa.', 'Se p fosse verdadeira, teríamos p verdadeira e q falsa, o que é excluído.'],
    conclusao: 'Logo, p é falsa.',
    nota: 'O modus tollens é a forma lógica da refutação: se uma teoria implica uma consequência falsa, a teoria é falsa (base do falsificacionismo de Popper).' },
  objecoes: [{ objecao: 'A lógica formal é artificial: ninguém fala com símbolos.', tag: 'argumento', resposta: 'Os símbolos tornam visível a forma, que na linguagem comum fica escondida por ambiguidades. Traduzir para a forma e voltar à linguagem comum é a habilidade a treinar.' }],
  aplicacao: '<p>Escolha dois argumentos de aulas anteriores e escreva-os em notação proposicional. Identifique a forma (ponens, tollens, disjuntivo, dilema).</p>',
  fonte: { obra: 'Irving Copi, Introdução à Lógica, capítulos de lógica simbólica', link: null, orientacao: '<p>Faça as tabelas de verdade dos cinco conectivos e verifique a validade do modus tollens por tabela.</p>' },
  perguntas: [
    { p: 'Quando o condicional p → q é falso?', r: 'Só quando p é verdadeira e q falsa.' },
    { p: 'Qual a forma do modus tollens?', r: 'p → q; ¬q; logo, ¬p.' },
    { p: 'O que dizem as leis de De Morgan?', r: '¬(p∧q) ≡ ¬p∨¬q; ¬(p∨q) ≡ ¬p∧¬q.' },
  ],
  exercicios: [
    mc('"Não é verdade que ele estuda e trabalha" equivale a:', ['Ele não estuda e não trabalha', 'Ou não estuda, ou não trabalha', 'Ele estuda ou trabalha', 'Ele estuda e não trabalha'], 1, 'Lei de De Morgan.'),
    mc('p ∨ q é falsa quando:', ['p é falsa', 'q é falsa', 'Ambas são falsas', 'Ambas são verdadeiras'], 2, 'Disjunção inclusiva.'),
    V(['Se chove, a rua molha.', 'Não choveu.', 'Logo, a rua não molhou.'], false, 'Negação do antecedente: inválido.'),
    V(['Ou ele está em casa, ou está no trabalho.', 'Não está em casa.', 'Logo, está no trabalho.'], true, 'Silogismo disjuntivo: válido.'),
    mc('"Se a Lua é de queijo, então 2 + 2 = 5" é, no condicional material:', ['Falso', 'Verdadeiro', 'Sem valor', 'Contraditório'], 1, 'Antecedente falso torna o condicional verdadeiro.'),
    disc('Mostre por tabela de verdade que a "afirmação do consequente" (p → q; q; logo, p) é inválida e dê um exemplo da vida real.', ['Tabela correta', 'Identifica a linha do contraexemplo', 'Exemplo real', 'Clareza'])],
  resumo: ['Conectivos: ¬, ∧, ∨, →, ↔.', 'Ponens, tollens, silogismo hipotético e disjuntivo, dilema.', 'De Morgan.', 'Paradoxos do condicional material.', 'Validade por tabela.'],
  referencias: [{ texto: 'Irving Copi, Introdução à Lógica, lógica simbólica.' }, { texto: 'Gottlob Frege, Conceitografia (1879).' }],
  revisao: [['Modus tollens', 'p → q; ¬q; logo, ¬p.'], ['De Morgan', '¬(p∧q) ≡ ¬p∨¬q.'], ['Condicional material', 'Falso só com antecedente verdadeiro e consequente falso.']],
  avancado: {
    texto: `<h3>Lógica de predicados</h3>
<p>A lógica de primeira ordem acrescenta quantificadores (∀, ∃) e predicados, permitindo formalizar "todo homem é mortal" como ∀x(Hx → Mx). Frege criou essa lógica na Conceitografia (1879), superando a silogística em poder expressivo (por exemplo, com relações: "todo número tem um sucessor") ${tag('fato')}.</p>
<h3>Lógica modal</h3>
<p>Operadores de necessidade (□) e possibilidade (◇) permitem formalizar argumentos metafísicos. Saul Kripke (1959–1963) deu à lógica modal uma semântica de "mundos possíveis" ${tag('fato')}. Versões modais do argumento ontológico (Plantinga, 1974) usam esse instrumental ${tag('debate')}.</p>
<h3>Condicionais e relevância</h3>
<p>Para evitar os paradoxos da implicação material, C. I. Lewis propôs a implicação estrita (1912) e outros lógicos desenvolveram lógicas da relevância, em que o antecedente deve ter conexão de conteúdo com o consequente ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Alvin Plantinga, The Nature of Necessity (1974), cap. X.' }, { texto: 'W. V. O. Quine, Methods of Logic (1950).' }],
    exercicios: [
      mc('"Todo número tem um sucessor" exige a lógica:', ['Silogística', 'De predicados com relações', 'Proposicional', 'Modal'], 1, 'Relação binária e quantificadores.'),
      mc('A semântica de mundos possíveis para a lógica modal é associada a:', ['Kripke', 'Frege', 'Boole', 'Mill'], 0, 'Final dos anos 1950 e início dos 1960.'),
      mc('□p significa:', ['p é possível', 'p é necessário', 'p é falso', 'p é provável'], 1, 'Operador de necessidade.'),
      disc('Formalize em lógica de predicados: "Nenhum sofista ama a verdade" e "Todo filósofo ama algum mestre". Explique por que a segunda não cabe na silogística.', ['Formalizações corretas', 'Identifica a relação', 'Explica o limite da silogística', 'Clareza'])],
  },
}),

aula({
  id: 'm4-9', titulo: 'Falácias formais',
  aprendera: ['O que é uma falácia formal', 'As falácias proposicionais: afirmação do consequente, negação do antecedente, afirmação do disjunto', 'As falácias silogísticas: médio não distribuído, ilícitos, quatro termos', 'Como nomear e refutar cada uma'],
  explicacao: `
<h3>Erro de forma</h3>
<p>Uma <strong>falácia formal</strong> é um argumento inválido por sua forma: qualquer argumento com a mesma forma pode ter premissas verdadeiras e conclusão falsa ${tag('argumento')}. Diferem das informais (próxima aula), cujo erro está no conteúdo, na linguagem ou no contexto.</p>
<h3>Falácias proposicionais</h3>
<ul>
<li><strong>Afirmação do consequente</strong>: p → q; q; logo, p. "Se é santo, é bondoso; ele é bondoso; logo, é santo."</li>
<li><strong>Negação do antecedente</strong>: p → q; ¬p; logo, ¬q. "Se estudar, passará; não estudou; logo, não passará."</li>
<li><strong>Afirmação do disjunto</strong> (com "ou" inclusivo): p ∨ q; p; logo, ¬q.</li>
</ul>
<h3>Falácias silogísticas</h3>
<ul>
<li><strong>Médio não distribuído</strong>: "Todo comunista critica o governo; ele critica o governo; logo, é comunista."</li>
<li><strong>Ilícito do maior</strong>: "Todo cão é animal; nenhum gato é cão; logo, nenhum gato é animal."</li>
<li><strong>Ilícito do menor</strong>: "Todo homem é mortal; todo homem é racional; logo, todo racional é mortal."</li>
<li><strong>Quatro termos</strong>: um termo muda de sentido ("o fim da vida é a morte; o fim de algo é sua perfeição...").</li>
<li><strong>Premissas negativas</strong>: "Nenhum A é B; nenhum B é C; logo..." — nada se segue.</li>
</ul>
<h3>Como refutar</h3>
<p>Nomeie a forma e dê um contraexemplo de mesma forma com premissas evidentemente verdadeiras e conclusão evidentemente falsa (aula 5) ${tag('argumento')}. Nomear sem contraexemplo pode soar como jargão; o contraexemplo convence.</p>`,
  vocabulario: [['Falácia formal', 'Argumento inválido por sua forma.'], ['Afirmação do consequente', 'p → q; q; logo, p.'], ['Negação do antecedente', 'p → q; ¬p; logo, ¬q.'], ['Médio não distribuído', 'O termo médio não toma toda a extensão em nenhuma premissa.'], ['Ilícito', 'Termo distribuído na conclusão sem estar na premissa.']],
  exemplos: '<p>Em diagnósticos: "se tiver gripe, terá febre; tem febre; logo, tem gripe" é afirmação do consequente. A febre é compatível com muitas causas — daí a necessidade de outros exames.</p>',
  contexto: `<p>Aristóteles trata a "falácia do consequente" nas Refutações Sofísticas (cap. 5): achar que, se A implica B, B implica A ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que a afirmação do consequente é inválida', tag: 'argumento',
    premissas: ['p → q só exclui o caso p verdadeira e q falsa.', 'O caso p falsa e q verdadeira é compatível com p → q.', 'Nesse caso as premissas (p → q e q) são verdadeiras e a conclusão (p) é falsa.'],
    conclusao: 'Logo, a forma é inválida.',
    nota: 'Cuidado: na ciência, a confirmação de consequências aumenta a probabilidade de uma hipótese (indução), mas não a prova dedutivamente.' },
  objecoes: [{ objecao: 'Os cientistas "afirmam o consequente" o tempo todo ao confirmar hipóteses.', tag: 'debate', resposta: 'É verdade que a confirmação tem essa forma; por isso ela é indutiva e falível. Popper concluiu que a ciência progride antes por refutação (modus tollens). Outros filósofos aceitam a confirmação como raciocínio probabilístico legítimo.' }],
  aplicacao: '<p>Encontre no noticiário ou em propagandas duas falácias formais e escreva um contraexemplo para cada.</p>',
  fonte: { obra: 'Aristóteles, Refutações Sofísticas 5 e 28', link: null, orientacao: '<p>Leia o trecho sobre a falácia do consequente e identifique o exemplo de Aristóteles (a chuva e a terra molhada).</p>' },
  perguntas: [
    { p: 'O que é uma falácia formal?', r: 'Um argumento inválido por sua forma.' },
    { p: 'Qual a forma da negação do antecedente?', r: 'p → q; ¬p; logo, ¬q.' },
    { p: 'Como refutar eficazmente uma falácia formal?', r: 'Com um contraexemplo de mesma forma.' },
  ],
  exercicios: [
    mc('"Se é um bom livro, vende muito; vende muito; logo, é um bom livro" é:', ['Modus ponens', 'Afirmação do consequente', 'Negação do antecedente', 'Válido'], 1, 'Forma p → q; q; logo, p.'),
    V(['Todo cão é animal.', 'Nenhum gato é cão.', 'Logo, nenhum gato é animal.'], false, 'Ilícito do maior.'),
    V(['Todo homem é mortal.', 'Todo homem é racional.', 'Logo, todo racional é mortal.'], false, 'Ilícito do menor: "racional" distribuído na conclusão, não na premissa.'),
    mc('"Ele é rico ou feliz; é rico; logo, não é feliz" (ou inclusivo) é:', ['Silogismo disjuntivo', 'Afirmação do disjunto', 'Válido', 'Dilema'], 1, 'Pode ser ambos.'),
    mc('Qual destas formas é VÁLIDA?', ['p → q; q; logo, p', 'p → q; ¬p; logo, ¬q', 'p → q; ¬q; logo, ¬p', 'p ∨ q; p; logo, ¬q'], 2, 'Modus tollens.'),
    disc('Escolha uma falácia formal frequente em discussões políticas ou religiosas e escreva: o argumento, sua forma, o nome da falácia e um contraexemplo convincente.', ['Argumento real', 'Forma correta', 'Nome correto', 'Contraexemplo eficaz'])],
  resumo: ['Falácia formal: erro de forma.', 'Proposicionais: consequente, antecedente, disjunto.', 'Silogísticas: médio, ilícitos, quatro termos, negativas.', 'Refutar com contraexemplo.'],
  referencias: [{ texto: 'Aristóteles, Refutações Sofísticas.' }, { texto: 'Irving Copi, Introdução à Lógica, cap. sobre falácias.' }],
  revisao: [['Afirmação do consequente', 'p → q; q; logo, p — inválido.'], ['Ilícito do maior', 'Termo maior distribuído só na conclusão.'], ['Refutação de falácia formal', 'Contraexemplo de mesma forma.']],
  avancado: {
    texto: `<h3>Popper e a assimetria</h3>
<p>Karl Popper (A Lógica da Pesquisa Científica, 1934) apoiou-se na assimetria entre verificação e falsificação: nenhum número de confirmações prova uma lei universal (seria afirmar o consequente), mas uma única refutação a derruba (modus tollens) ${tag('argumento')}. Críticos (Duhem, Quine) objetaram que uma hipótese nunca é testada sozinha, mas com hipóteses auxiliares, de modo que a refutação também não é decisiva ${tag('debate')}.</p>
<h3>A tese de Duhem–Quine</h3>
<p>Se H e A (auxiliares) implicam O, e O é falsa, conclui-se apenas que H ou A é falsa. Qual abandonar não é decidido pela lógica ${tag('argumento')}. É um dos argumentos centrais da filosofia da ciência do século XX (Módulo 6).</p>`,
    leituras: [{ texto: 'Karl Popper, A Lógica da Pesquisa Científica, cap. 1.' }, { texto: 'W. V. O. Quine, "Dois dogmas do empirismo" (1951).' }],
    exercicios: [
      mc('A assimetria de Popper se baseia em:', ['Modus ponens', 'Modus tollens', 'Afirmação do consequente', 'Silogismo disjuntivo'], 1, 'Uma refutação derruba uma lei.'),
      mc('A tese de Duhem–Quine afirma que:', ['Toda hipótese é verdadeira', 'Hipóteses são testadas com auxiliares', 'A lógica é inútil', 'A ciência é dogma'], 1, 'Holismo da confirmação.'),
      mc('"Dois dogmas do empirismo" é de:', ['Popper', 'Quine', 'Duhem', 'Kuhn'], 1, '1951.'),
      disc('A tese de Duhem–Quine destrói o falsificacionismo? Use a lógica proposicional para responder.', ['Formaliza o teste', 'Explica a tese', 'Avalia a resposta de Popper', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm4-10', titulo: 'Falácias informais',
  aprendera: ['A classificação aristotélica das refutações sofísticas', 'As principais falácias informais modernas', 'Como distinguir crítica legítima de ataque pessoal', 'Quando um apelo à autoridade é legítimo'],
  explicacao: `
<h3>Erros de conteúdo e de contexto</h3>
<p>Uma <strong>falácia informal</strong> é um argumento defeituoso não pela forma, mas pela linguagem, pela relevância ou pelas premissas ${tag('argumento')}. Muitas parecem convincentes justamente por explorarem emoções e hábitos.</p>
<h3>A classificação de Aristóteles</h3>
<p>Nas Refutações Sofísticas (cap. 4–5), Aristóteles divide as falácias em ${tag('fato')}:</p>
<ul>
<li><strong>Dependentes da linguagem</strong>: equivocação, anfibologia, composição, divisão, acento, forma da expressão.</li>
<li><strong>Independentes da linguagem</strong>: acidente, tomar o relativo como absoluto (<em>secundum quid</em>), ignorância da refutação (<em>ignoratio elenchi</em>), petição de princípio, consequente, falsa causa, muitas perguntas.</li>
</ul>
<h3>Falácias modernas mais frequentes</h3>
<ul>
<li><strong>Ad hominem</strong>: atacar a pessoa em vez do argumento. Variante <strong>tu quoque</strong> ("você também faz").</li>
<li><strong>Espantalho</strong>: refutar uma versão distorcida da tese.</li>
<li><strong>Apelo à autoridade indevida</strong>: citar alguém fora de sua competência ou sem consenso na área.</li>
<li><strong>Apelo à maioria</strong> (<em>ad populum</em>): "todos pensam assim".</li>
<li><strong>Apelo à ignorância</strong>: "ninguém provou o contrário".</li>
<li><strong>Falso dilema</strong>: só duas opções quando há outras.</li>
<li><strong>Ladeira escorregadia</strong>: cadeia de consequências catastróficas sem justificar cada passo.</li>
<li><strong>Post hoc</strong>: "depois disso, logo por causa disso".</li>
<li><strong>Generalização apressada</strong>: poucos casos, conclusão universal.</li>
<li><strong>Petição de princípio</strong>: supor o que se quer provar.</li>
</ul>
<h3>Crítica legítima ou ataque pessoal?</h3>
<p>Apontar que alguém tem interesse financeiro numa conclusão não refuta seu argumento, mas é razão legítima para examinar com mais cuidado as evidências que ele oferece ${tag('argumento')}. O ad hominem é falacioso quando substitui a análise do argumento.</p>
<h3>Autoridade legítima</h3>
<p>Apelar a especialistas é razoável quando: o especialista tem competência na área, há consenso relevante entre especialistas, a afirmação está dentro do campo e não há motivo para suspeitar de viés ${tag('argumento')}. Tomás lembra que a autoridade humana é o argumento mais fraco em filosofia (Suma I, q. 1, a. 8, ad 2).</p>`,
  vocabulario: [['Ad hominem', 'Ataque à pessoa em vez do argumento.'], ['Espantalho', 'Distorção da tese adversária.'], ['Secundum quid', 'Tomar o que vale em certo aspecto como valendo absolutamente.'], ['Ignoratio elenchi', 'Provar outra coisa que não a questão.'], ['Post hoc', 'Confundir sucessão com causalidade.']],
  exemplos: '<p>"Você defende a lei natural, mas é católico; logo, seu argumento não vale." — ad hominem circunstancial. O argumento deve ser avaliado em si, qualquer que seja a fé de quem o propõe — e o mesmo vale ao contrário, para argumentos de ateus.</p>',
  contexto: `<p>Aristóteles escreveu as Refutações Sofísticas para ensinar a reconhecer os truques dos sofistas que buscavam vencer debates, e não a verdade ${tag('fato')}. Schopenhauer retomou o tema em A dialética erística (Módulo 12).</p>`,
  argumento: { titulo: 'Por que o ad hominem é falacioso', tag: 'argumento',
    premissas: ['A validade de um argumento depende da forma; sua solidez, da verdade das premissas.', 'Nenhuma das duas depende do caráter de quem o propõe.', 'O ad hominem conclui pela falsidade da tese a partir do caráter de quem a propõe.'],
    conclusao: 'Logo, o ad hominem não atinge nem a validade nem a solidez do argumento.',
    nota: 'Exceção: quando o argumento depende do testemunho da própria pessoa, sua confiabilidade importa.' },
  objecoes: [{ objecao: 'Todo apelo à autoridade é falacioso.', tag: 'argumento', resposta: 'Não: grande parte do que sabemos vem de testemunho confiável (veja a fé como confiança em testemunho, Módulo 1). O apelo é falacioso quando a autoridade é indevida, não quando é competente.' }],
  aplicacao: '<p>Assista a um debate (TV, internet) e registre no Caderno cinco falácias, com o nome, a frase e como deveria ter sido o argumento correto.</p>',
  fonte: { obra: 'Aristóteles, Refutações Sofísticas 4–5', link: null, orientacao: '<p>Leia os capítulos 4–5 e faça uma tabela com as treze falácias aristotélicas e um exemplo atual de cada.</p>' },
  perguntas: [
    { p: 'Qual a diferença entre falácia formal e informal?', r: 'A formal erra na forma; a informal, no conteúdo, na linguagem ou na relevância.' },
    { p: 'O que é o espantalho?', r: 'Refutar uma versão distorcida da tese adversária.' },
    { p: 'Quando o apelo à autoridade é legítimo?', r: 'Quando há competência na área, consenso relevante e ausência de viés.' },
  ],
  exercicios: [
    mc('"Desde que ele assumiu, choveu menos; logo, ele causou a seca" é:', ['Post hoc', 'Ad hominem', 'Espantalho', 'Falso dilema'], 0, 'Sucessão não é causalidade.'),
    mc('"Você critica o consumismo, mas tem celular" é:', ['Tu quoque', 'Petição de princípio', 'Composição', 'Apelo à maioria'], 0, 'Variante do ad hominem.'),
    mc('"Se permitirmos X, logo virá Y, depois Z, e o fim da civilização" sem justificar os passos é:', ['Ladeira escorregadia', 'Generalização apressada', 'Equivocação', 'Divisão'], 0, 'Slippery slope.'),
    mc('"Os ateus dizem que o universo surgiu do nada por acaso" (quando o ateu não diz isso) é:', ['Espantalho', 'Ad hominem', 'Post hoc', 'Ad populum'], 0, 'Distorção da posição.'),
    mc('Citar um físico famoso sobre teologia moral é, em princípio:', ['Autoridade legítima', 'Autoridade indevida', 'Petição de princípio', 'Composição'], 1, 'Fora da competência.'),
    disc('Escolha uma falácia informal que você mesmo já cometeu e reescreva o argumento de forma correta.', ['Identifica a falácia', 'Explica o erro', 'Reescreve corretamente', 'Honestidade intelectual'])],
  resumo: ['Falácias informais: linguagem, relevância, premissas.', 'Classificação aristotélica.', 'Ad hominem, espantalho, autoridade indevida, maioria, ignorância, falso dilema, ladeira, post hoc, generalização, petição.', 'Crítica legítima × ataque pessoal.'],
  referencias: [{ texto: 'Aristóteles, Refutações Sofísticas.' }, { texto: 'Anthony Weston, A Arte de Argumentar, apêndice sobre falácias.' }],
  revisao: [['Post hoc', 'Depois disso, logo por causa disso.'], ['Espantalho', 'Refutar versão distorcida.'], ['Secundum quid', 'Tomar o relativo como absoluto.']],
  avancado: {
    texto: `<h3>Falácias como desvios de diálogo</h3>
<p>Douglas Walton e Charles Hamblin (Fallacies, 1970) mostraram que muitas "falácias" são esquemas argumentativos legítimos em certos contextos e falaciosos em outros: o apelo à autoridade, o argumento de consequências e até o ad hominem podem ser razoáveis num diálogo de deliberação, por exemplo ${tag('interpretacao')}. A pragma-dialética (van Eemeren e Grootendorst) define falácia como violação de regras de uma discussão crítica ${tag('fato')}.</p>
<h3>Vieses cognitivos</h3>
<p>A psicologia (Kahneman e Tversky, desde os anos 1970) estudou vieses como o de confirmação, ancoragem e disponibilidade, que tornam as falácias persuasivas ${tag('fato')}. Saber nomear falácias não basta: é preciso desconfiar sobretudo de si mesmo.</p>`,
    leituras: [{ texto: 'C. L. Hamblin, Fallacies (1970).' }, { texto: 'Daniel Kahneman, Rápido e Devagar (2011).' }],
    exercicios: [
      mc('"Fallacies" (1970), que renovou o estudo das falácias, é de:', ['Hamblin', 'Copi', 'Kahneman', 'Toulmin'], 0, 'Charles Hamblin.'),
      mc('Para a pragma-dialética, falácia é:', ['Erro de forma', 'Violação de regras de uma discussão crítica', 'Mentira', 'Ignorância'], 1, 'Van Eemeren e Grootendorst.'),
      mc('O viés de confirmação consiste em:', ['Procurar evidências que confirmem o que já se crê', 'Confiar em especialistas', 'Raciocinar dedutivamente', 'Generalizar corretamente'], 0, 'Estudado pela psicologia cognitiva.'),
      disc('Mostre um caso em que um ad hominem é razoável e outro em que é falacioso. O que muda?', ['Dois casos pertinentes', 'Explica a diferença de contexto', 'Usa a teoria do diálogo', 'Conclusão'])],
  },
}),

aula({
  id: 'm4-11', titulo: 'Dialética e retórica',
  aprendera: ['O que Aristóteles entende por dialética e por retórica', 'Os três meios de persuasão: ethos, pathos e logos', 'A diferença entre retórica e erística', 'A ética da argumentação'],
  explicacao: `
<h3>Três artes do discurso</h3>
<p>Aristóteles distingue a <strong>analítica</strong> (demonstração a partir de premissas verdadeiras e primeiras), a <strong>dialética</strong> (raciocínio a partir de opiniões aceitas, os <em>endoxa</em>) e a <strong>retórica</strong> (a faculdade de ver, em cada caso, os meios de persuasão disponíveis — Retórica I, 2) ${tag('fato')}.</p>
<h3>Dialética</h3>
<p>Os Tópicos ensinam a argumentar a partir do que é aceito por todos, pela maioria ou pelos sábios, e a examinar uma tese pelas suas consequências. Serve para o exercício, para as conversas e para as ciências: testando opiniões, chega-se aos princípios ${tag('interpretacao')}.</p>
<h3>Retórica</h3>
<p>A retórica não é arte de enganar, mas a contraparte (<em>antistrophos</em>) da dialética no discurso público (Retórica I, 1) ${tag('fato')}. Há três meios de persuasão:</p>
<ul>
<li><strong>Ethos</strong>: o caráter do orador, que inspira confiança.</li>
<li><strong>Pathos</strong>: a disposição emocional do ouvinte.</li>
<li><strong>Logos</strong>: o próprio argumento, que demonstra ou parece demonstrar.</li>
</ul>
<p>E três gêneros: <strong>deliberativo</strong> (sobre o futuro, o útil), <strong>judiciário</strong> (sobre o passado, o justo) e <strong>epidítico</strong> (louvor e censura, o belo).</p>
<h3>Erística</h3>
<p>A erística busca vencer, não a verdade. Arthur Schopenhauer, em A dialética erística (escrita c. 1830, publicada postumamente), catalogou 38 estratagemas para ganhar debates sem ter razão ${tag('fato')}. Conhecê-los é defesa, não modelo.</p>
<h3>Ética da argumentação</h3>
<p>Sócrates opunha-se aos sofistas por buscar a verdade, não a vitória. Para quem estuda filosofia, a regra é: argumentar para descobrir, não para humilhar; aceitar ser refutado; dar ao adversário sua melhor versão ${tag('argumento')}.</p>`,
  vocabulario: [['Endoxa', 'Opiniões aceitas, ponto de partida da dialética.'], ['Ethos, pathos, logos', 'Caráter, emoção, argumento: meios de persuasão.'], ['Entimema', 'Silogismo retórico.'], ['Erística', 'Arte de vencer debates sem buscar a verdade.'], ['Gêneros retóricos', 'Deliberativo, judiciário, epidítico.']],
  exemplos: '<p>Um sermão usa ethos (a autoridade moral do pregador), pathos (comover a assembleia) e logos (argumento a partir da Escritura). Avaliá-lo filosoficamente é perguntar se o logos se sustenta mesmo sem os outros dois.</p>',
  contexto: `<p>A retórica era o centro da educação grega e romana. Agostinho foi professor de retórica antes da conversão, e A Doutrina Cristã IV adapta a retórica de Cícero à pregação ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que estudar retórica é útil (Retórica I, 1, reconstruído)', tag: 'argumento',
    premissas: ['O verdadeiro e o justo são por natureza mais fortes que seus contrários.', 'Se os julgamentos são maus, é por culpa de quem defende o verdadeiro sem habilidade.', 'Além disso, é preciso saber argumentar dos dois lados para perceber os sofismas do adversário.'],
    conclusao: 'Logo, a retórica é útil para quem defende a verdade.',
    nota: 'Aristóteles acrescenta que a retórica pode ser mal usada, como todo bem, exceto a virtude.' },
  objecoes: [{ objecao: 'A retórica é manipulação; o filósofo deveria usar só lógica.', tag: 'debate', resposta: 'Platão (Górgias) foi severo com a retórica; mas no Fedro admite uma retórica verdadeira, baseada no conhecimento das almas. Aristóteles a integra: o ser humano não é só intelecto, e persuadir bem respeita isso. A manipulação é o mau uso.' }],
  aplicacao: '<p>Analise um discurso político ou um sermão: identifique exemplos de ethos, pathos e logos e avalie se o logos se sustenta sozinho.</p>',
  fonte: { obra: 'Aristóteles, Retórica I, 1–3; Tópicos I, 1–2', link: null, orientacao: '<p>Leia Retórica I, 2 (os três meios de persuasão) e Tópicos I, 1 (definição de raciocínio dialético). Compare dialética e retórica.</p>' },
  perguntas: [
    { p: 'De onde parte a dialética aristotélica?', r: 'De opiniões aceitas (endoxa).' },
    { p: 'Quais os três meios de persuasão?', r: 'Ethos, pathos e logos.' },
    { p: 'O que é erística?', r: 'A arte de vencer debates sem buscar a verdade.' },
  ],
  exercicios: [
    mc('Persuadir pela credibilidade do orador é:', ['Logos', 'Pathos', 'Ethos', 'Endoxa'], 2, 'O caráter de quem fala.'),
    mc('O gênero retórico que trata do justo e do passado é o:', ['Deliberativo', 'Judiciário', 'Epidítico', 'Dialético'], 1, 'Tribunais.'),
    mc('Os 38 estratagemas para vencer debates são de:', ['Aristóteles', 'Schopenhauer', 'Cícero', 'Górgias'], 1, 'A dialética erística.'),
    mc('Para Aristóteles, a retórica é:', ['Arte de enganar', 'Contraparte da dialética', 'Parte da física', 'Inútil'], 1, 'Retórica I, 1.'),
    disc('Escreva um parágrafo persuasivo defendendo uma tese que você aceita usando ethos, pathos e logos — e depois reescreva-o só com logos. O que se perde e o que se ganha?', ['Usa os três meios', 'Reescrita só com logos', 'Análise do que muda', 'Reflexão ética'])],
  resumo: ['Analítica, dialética, retórica.', 'Endoxa e Tópicos.', 'Ethos, pathos, logos; três gêneros.', 'Erística e Schopenhauer.', 'Ética da argumentação.'],
  referencias: [{ texto: 'Aristóteles, Retórica I.' }, { texto: 'Aristóteles, Tópicos I.' }, { texto: 'Arthur Schopenhauer, A dialética erística (Como vencer um debate sem precisar ter razão).' }],
  revisao: [['Ethos, pathos, logos', 'Caráter, emoção, argumento.'], ['Endoxa', 'Opiniões aceitas, base da dialética.'], ['Erística', 'Vencer sem buscar a verdade (Schopenhauer).']],
  avancado: {
    texto: `<h3>A nova retórica</h3>
<p>Chaïm Perelman e Lucie Olbrechts-Tyteca (Tratado da Argumentação: a nova retórica, 1958) recuperaram a retórica como teoria da argumentação razoável em campos em que não há demonstração (direito, ética, política), centrada no "auditório" a que se dirige o orador, inclusive o "auditório universal" ${tag('interpretacao')}.</p>
<h3>Platão: Górgias e Fedro</h3>
<p>No Górgias, Sócrates compara a retórica à culinária: produz prazer, não bem. No Fedro, propõe uma retórica que conhece a verdade do assunto e a natureza das almas a quem fala ${tag('fato')}. A tensão entre os dois diálogos é tema clássico de interpretação ${tag('debate')}.</p>
<h3>Os quatro discursos</h3>
<p>Olavo de Carvalho propôs que poética, retórica, dialética e analítica formam uma escala única de credibilidade (possível, verossímil, provável, certo) — a teoria dos quatro discursos, que você estudará no Módulo 12 ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Platão, Górgias 462b–466a; Fedro 259e–274b.' }, { texto: 'Chaïm Perelman e Lucie Olbrechts-Tyteca, Tratado da Argumentação (1958), introdução.' }],
    exercicios: [
      mc('O "auditório universal" é noção de:', ['Aristóteles', 'Perelman', 'Schopenhauer', 'Cícero'], 1, 'Tratado da Argumentação (1958).'),
      mc('No Górgias, a retórica é comparada a:', ['Medicina', 'Culinária', 'Ginástica', 'Matemática'], 1, 'Produz prazer, não bem.'),
      mc('A teoria dos quatro discursos é de:', ['Perelman', 'Olavo de Carvalho', 'Aristóteles explicitamente', 'Hamblin'], 1, 'Interpretação de Aristóteles proposta pelo autor.'),
      disc('Compare as visões de retórica no Górgias, no Fedro e em Aristóteles. Qual delas permite uma retórica legítima para o filósofo cristão?', ['Expõe as três', 'Usa os textos', 'Compara', 'Conclusão justificada'])],
  },
}),

avaliacao('m4-12', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Identificação de premissas, validade, silogística, lógica proposicional e falácias. Complete também os <a href="#aval-logica-1">Exercícios de lógica I</a> e, no nível avançado, os <a href="#aval-logica-2">Exercícios de lógica II</a>.</p>
<h3>Antes de começar</h3>
<ul><li>Revise as sete regras do silogismo.</li><li>Revise as tabelas de verdade dos conectivos.</li></ul>`,
[
  disc('Escolha um argumento filosófico estudado até aqui (por exemplo, o da contingência, o de Atanásio ou o do Críton). Padronize-o, formalize-o (silogística ou proposicional), avalie a validade, discuta a solidez e aponte a premissa mais vulnerável.', ['Padronização correta', 'Formalização correta', 'Avaliação de validade correta', 'Discussão da solidez', 'Identifica a premissa vulnerável']),
  disc('Analise um texto de opinião real (jornal, blog, rede social): identifique o argumento principal, duas falácias (com nome e explicação) e reescreva o argumento em sua melhor versão.', ['Identifica o argumento', 'Duas falácias corretamente nomeadas', 'Explicações precisas', 'Versão melhorada com caridade']),
]),
];
