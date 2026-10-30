// Antropologia III — escolas e debates (etapas 6 e 7 do percurso de Antropologia).
// Estrutural-funcionalismo e cultura e personalidade; estruturalismo e antropologia interpretativa;
// relativismo, direitos humanos e lei natural; missão e inculturação.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'an3-1', titulo: 'Estrutural-funcionalismo britânico e a escola de cultura e personalidade', duracao: '150 min',
  aprendera: ['Expor o estrutural-funcionalismo de Radcliffe-Brown', 'Expor as teses de Ruth Benedict e Margaret Mead', 'Explicar a controvérsia Mead-Freeman', 'Avaliar as duas correntes'],
  prereq: ['Antropologia II (módulo AN2)'],
  explicacao: `
<h3>O problema</h3>
<p>Depois dos fundadores, a antropologia se dividiu entre quem estudava a estrutura social e quem estudava a relação entre cultura e personalidade.</p>
<h3>Radcliffe-Brown</h3>
<p>A. R. Radcliffe-Brown, influenciado por Durkheim, estudou a sociedade como estrutura de relações cujas instituições contribuem para manter o todo; seus ensaios foram reunidos em <em>Estrutura e função na sociedade primitiva</em> (1952) ${tag('fato')}. Diferentemente de Malinowski, que partia das necessidades individuais, Radcliffe-Brown partia da estrutura social ${tag('interpretacao')}.</p>
<h3>Cultura e personalidade</h3>
<p>Ruth Benedict, em <em>Padrões de cultura</em> (1934), descreveu culturas como configurações integradas, comparando por exemplo o estilo "apolíneo" dos Zuni ao "dionisíaco" de outros povos das planícies ${tag('fato')}. Margaret Mead, em <em>Adolescência em Samoa</em> (1928), sustentou que a adolescência sem crises que observou mostrava o peso da cultura sobre fases tidas como biológicas ${tag('fato')}.</p>
<h3>A controvérsia</h3>
<p>Em 1983, Derek Freeman publicou uma crítica dura ao trabalho de Mead, sustentando que ela fora enganada por informantes e idealizara Samoa ${tag('fato')}. O debate sobre a crítica de Freeman, por sua vez, continua ${tag('debate')}. A lição metodológica é a importância de duração do campo, domínio da língua e verificação cruzada de informações ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Estrutural-funcionalismo', 'Estudo das instituições pela contribuição à manutenção da estrutura social (Radcliffe-Brown).'],
    ['Estrutura social', 'Rede de relações sociais estáveis entre pessoas e grupos.'],
    ['Padrão de cultura', 'Configuração integrada de valores e condutas (Benedict).'],
    ['Cultura e personalidade', 'Escola que estudou a influência da cultura na formação da personalidade.'],
    ['Verificação cruzada', 'Confronto de informações de várias fontes.'],
  ],
  exemplos: `<p><strong>A lição de Samoa:</strong> imagine estudar a juventude de uma comunidade em poucos meses, sem falar bem a língua, ouvindo sobretudo duas jovens. O risco de generalizar a partir de poucas vozes é alto. A controvérsia Mead-Freeman ensina a diversificar informantes e a comparar o que se diz com o que se observa.</p>`,
  contexto: `<p><strong>No mundo:</strong> as obras de Benedict e Mead tiveram grande impacto público nos Estados Unidos. <strong>No Brasil:</strong> a antropologia social britânica influenciou a formação de antropólogos brasileiros, e conceitos de estrutura social foram usados em estudos de comunidades rurais ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que uma etnografia precisa de várias vozes', tag: 'argumento',
    premissas: ['Cada informante tem posição, interesses e conhecimento parciais.', 'Uma descrição apoiada em poucos informantes tende a reproduzir seus pontos de vista.', 'Confrontar várias vozes e a observação reduz esse viés.'],
    conclusao: 'Logo, a qualidade de uma etnografia depende da diversidade de informantes e da verificação cruzada.',
    nota: 'É a lição metodológica da controvérsia sobre Samoa.',
  },
  objecoes: [
    { objecao: 'A controvérsia prova que a antropologia não é ciência.', tag: 'debate',
      resposta: 'A controvérsia mostra o contrário: pesquisas foram refeitas, dados confrontados e conclusões revistas. A revisão crítica é sinal de ciência, não de seu fracasso.' },
  ],
  aplicacao: `<p>Escolha uma instituição local (festa, associação, igreja) e descreva-a duas vezes: uma com Radcliffe-Brown (estrutura e função), outra com Benedict (padrão de valores). Compare o que cada olhar mostra.</p>`,
  fonte: {
    obra: 'A. R. Radcliffe-Brown, Estrutura e função na sociedade primitiva (1952), introdução; Ruth Benedict, Padrões de cultura (1934), cap. I', link: null,
    orientacao: `<p>Em Radcliffe-Brown, localize a definição de estrutura social. Em Benedict, a ideia de padrão de cultura. Use-as na aplicação.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre Malinowski e Radcliffe-Brown?', r: 'Malinowski parte das necessidades individuais; Radcliffe-Brown, da estrutura social.' },
    { p: 'O que sustentou Mead sobre Samoa?', r: 'Que a adolescência sem crises que observou mostrava o peso da cultura sobre fases tidas como biológicas.' },
    { p: 'Qual a lição metodológica da controvérsia Mead-Freeman?', r: 'A importância de duração do campo, domínio da língua e verificação cruzada.' },
  ],
  exercicios: [
    mc('Padrões de cultura é de:', ['Mead', 'Benedict', 'Radcliffe-Brown', 'Freeman'], 1, '1934.'),
    mc('Adolescência em Samoa é de:', ['1922', '1928', '1934', '1983'], 1, 'Mead.'),
    mc('A crítica a Mead foi publicada por Derek Freeman em:', ['1952', '1969', '1983', '2001'], 2, 'Controvérsia.'),
    mc('Estrutura e função na sociedade primitiva é de:', ['Malinowski', 'Radcliffe-Brown', 'Mauss', 'Boas'], 1, '1952.'),
    mc('Confrontar várias fontes é:', ['Verificação cruzada', 'Etnocentrismo', 'Difusão', 'Liminaridade'], 0, 'Método.'),
    disc('Descreva uma instituição local com Radcliffe-Brown e com Benedict e compare o que cada olhar mostra.', ['Duas descrições', 'Conceitos corretos', 'Comparação', 'Limites']),
  ],
  resumo: ['Radcliffe-Brown (1952): estrutural-funcionalismo.', 'Benedict (1934): padrões de cultura.', 'Mead (1928): Samoa.', 'Freeman (1983): crítica; debate.', 'Várias vozes e verificação cruzada.'],
  referencias: [
    { texto: 'A. R. Radcliffe-Brown, Estrutura e função na sociedade primitiva (1952).' },
    { texto: 'Ruth Benedict, Padrões de cultura (1934).' },
    { texto: 'Margaret Mead, Adolescência em Samoa (1928).' },
    { texto: 'Derek Freeman, Margaret Mead and Samoa (1983).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os textos indicados'],
  revisao: [['Radcliffe-Brown', 'Estrutura.'], ['Benedict', 'Padrões.'], ['Mead-Freeman', 'Controvérsia.']],
  avancado: {
    texto: `<h3>O crisântemo e a espada</h3>
<p>Ruth Benedict escreveu <em>O crisântemo e a espada</em> (1946) sobre a cultura japonesa, sem pesquisa de campo no Japão, por causa da guerra ${tag('fato')}. O livro é exemplo de "estudo da cultura à distância", com valor e limites ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Ruth Benedict, O crisântemo e a espada (1946).' }],
    exercicios: [
      mc('O crisântemo e a espada trata da cultura:', ['Chinesa', 'Japonesa', 'Indígena', 'Samoana'], 1, 'Benedict, 1946.'),
      mc('Benedict escreveu o livro:', ['Após longo campo no Japão', 'Sem campo no Japão', 'Com estatística apenas', 'Como romance'], 1, 'Estudo à distância.'),
      mc('O "estudo à distância" tem:', ['Só valor', 'Valor e limites', 'Só limites', 'Nenhum uso'], 1, 'Cautela.'),
      disc('Avalie os riscos de estudar uma cultura "à distância" e proponha como reduzi-los.', ['Riscos', 'Exemplo', 'Propostas', 'Conclusão'])],
  },
}),

aula({
  id: 'an3-2', titulo: 'Estruturalismo e antropologia interpretativa: Lévi-Strauss e Geertz', duracao: '150 min',
  aprendera: ['Explicar a análise estrutural dos mitos', 'Expor a definição de religião como sistema cultural (Geertz)', 'Explicar a análise da briga de galos balinesa', 'Comparar as duas correntes'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A cultura é um sistema de estruturas inconscientes ou um tecido de significados que se interpreta? Lévi-Strauss e Geertz responderam de modos opostos.</p>
<h3>Estruturalismo</h3>
<p>Em <em>Antropologia estrutural</em> (1958), Lévi-Strauss aplicou à cultura o modelo da linguística estrutural (Saussure, sb1-4): os elementos de um mito ou de um sistema de parentesco ganham sentido pelas relações e oposições entre eles (alto/baixo, cru/cozido, natureza/cultura) ${tag('fato')}. Nas <em>Mitológicas</em> (1964–1971), analisou centenas de mitos ameríndios, muitos de povos do Brasil ${tag('fato')}.</p>
<h3>Antropologia interpretativa</h3>
<p>Clifford Geertz, em <em>A interpretação das culturas</em> (1973), definiu a cultura como "teias de significado" tecidas pelo próprio homem; sua análise é interpretativa, à procura de significados ${tag('fato')}. Em "A religião como sistema cultural", definiu a religião como sistema de símbolos que estabelece disposições e motivações por meio de concepções de uma ordem geral da existência ${tag('fato')}. Em "Um jogo absorvente: notas sobre a briga de galos balinesa", leu a briga de galos como texto em que os balineses "contam uma história sobre si mesmos" ${tag('fato')}.</p>
<h3>Comparação e crítica</h3>
<p>O estruturalismo busca estruturas universais do espírito humano; a antropologia interpretativa, sentidos locais ${tag('interpretacao')}. Críticas: o estruturalismo seria abstrato demais; a interpretação, difícil de verificar ${tag('debate')}. Talal Asad criticou a definição de religião de Geertz por universalizar uma noção moderna e privatizada de religião ${tag('debate')}.</p>`,
  vocabulario: [
    ['Estruturalismo', 'Análise da cultura pelas relações e oposições entre elementos (Lévi-Strauss).'],
    ['Oposição binária', 'Par de termos contrários que organiza o sentido (cru/cozido).'],
    ['Teias de significado', 'Definição de cultura de Geertz.'],
    ['Religião como sistema cultural', 'Definição de Geertz pela função dos símbolos religiosos.'],
    ['Cultura como texto', 'Leitura das práticas como narrativas que se interpretam.'],
  ],
  exemplos: `<p><strong>Duas leituras de uma festa junina:</strong> estruturalista — oposições entre campo e cidade (roupas "caipiras" na escola urbana), fogo e frio (fogueira no inverno), casamento sério e casamento cômico; interpretativa — o que a festa "diz" aos participantes sobre suas origens rurais, sua religiosidade popular e sua comunidade. As duas não se excluem, mas fazem perguntas diferentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> o estruturalismo marcou a filosofia e a crítica literária francesas; Geertz influenciou a história cultural. <strong>No Brasil:</strong> as Mitológicas usam extensamente mitos de povos como os Bororo e os Jê, e a etnologia brasileira dialoga até hoje com Lévi-Strauss ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a definição de religião de Geertz é útil e incompleta', tag: 'argumento',
    premissas: ['A definição descreve bem como os símbolos religiosos orientam ações e emoções.', 'Ela é funcional: diz o que a religião faz, não se aquilo em que se crê é verdadeiro.', 'A fé religiosa afirma uma realidade que transcende os símbolos (para o cristão, Deus que se revela).'],
    conclusao: 'Logo, a definição de Geertz é útil para descrever, mas não esgota o que a religião é para quem crê.',
    nota: 'Distingue o método das ciências sociais da pergunta teológica.',
  },
  objecoes: [
    { objecao: 'O estruturalismo mostra que todos os mitos dizem a mesma coisa.', tag: 'debate',
      resposta: 'Lévi-Strauss buscou operações mentais comuns (oposições, mediações), não um conteúdo idêntico. Mitos diferentes podem usar a mesma lógica e afirmar coisas muito diferentes. A objeção confunde forma e conteúdo.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: quadro comparativo das quatro correntes (funcionalismo britânico, cultura e personalidade, estruturalismo, antropologia interpretativa) — objeto, método, autor e conceito central de cada uma.</p>`,
  fonte: {
    obra: 'Clifford Geertz, A interpretação das culturas (1973), caps. 1 e 4; Claude Lévi-Strauss, Antropologia estrutural (1958), cap. XI ("A estrutura dos mitos")', link: null,
    orientacao: `<p>Em Geertz, localize a definição de cultura e a de religião. Em Lévi-Strauss, o método de análise do mito de Édipo. Use-os no quadro.</p>`,
  },
  perguntas: [
    { p: 'Como Geertz define a cultura?', r: 'Como teias de significado tecidas pelo próprio homem.' },
    { p: 'Qual o modelo do estruturalismo?', r: 'A linguística estrutural: o sentido vem das relações e oposições entre elementos.' },
    { p: 'Qual a crítica de Talal Asad a Geertz?', r: 'Universalizar uma noção moderna e privatizada de religião.' },
  ],
  exercicios: [
    mc('Antropologia estrutural é de:', ['1949', '1958', '1964', '1973'], 1, 'Lévi-Strauss.'),
    mc('A interpretação das culturas é de:', ['1958', '1966', '1973', '1986'], 2, 'Geertz.'),
    mc('Cru/cozido é exemplo de:', ['Rito de passagem', 'Oposição binária', 'Dádiva', 'Sobrevivência'], 1, 'Estruturalismo.'),
    mc('A briga de galos analisada por Geertz é de:', ['Bali', 'Samoa', 'Trobriand', 'Bororo'], 0, 'Cultura como texto.'),
    mc('A definição funcional de religião de Geertz:', ['Decide a verdade da fé', 'Descreve o que a religião faz', 'Nega a religião', 'É teológica'], 1, 'Método das ciências sociais.'),
    disc('Entregue o quadro das quatro correntes com objeto, método, autor e conceito central.', ['Quatro correntes', 'Objeto e método', 'Autores corretos', 'Conceitos centrais']),
  ],
  resumo: ['Lévi-Strauss (1958): estrutura e oposições; Mitológicas (1964–1971).', 'Geertz (1973): teias de significado.', 'Religião como sistema cultural; briga de galos.', 'Críticas: abstração; verificação; Asad.', 'Definição funcional não esgota a fé.'],
  referencias: [
    { texto: 'Clifford Geertz, A interpretação das culturas (1973).' },
    { texto: 'Claude Lévi-Strauss, Antropologia estrutural (1958).' },
    { texto: 'Claude Lévi-Strauss, O cru e o cozido (1964).' },
    { texto: 'Talal Asad, Genealogies of Religion (1993).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro das correntes', 'Ler os capítulos indicados'],
  revisao: [['Lévi-Strauss', 'Oposições.'], ['Geertz', 'Teias de significado.'], ['Asad', 'Crítica a Geertz.']],
  avancado: {
    texto: `<h3>Perspectivismo ameríndio</h3>
<p>Eduardo Viveiros de Castro, em <em>A inconstância da alma selvagem</em> (2002), propôs o "perspectivismo ameríndio": em muitas cosmologias indígenas, humanos e animais partilham uma mesma cultura e diferem pelo corpo e pelo ponto de vista ${tag('interpretacao')}. A proposta é influente e discutida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Eduardo Viveiros de Castro, A inconstância da alma selvagem (2002).' }],
    exercicios: [
      mc('O perspectivismo ameríndio é proposta de:', ['Lévi-Strauss', 'Viveiros de Castro', 'Geertz', 'Darcy Ribeiro'], 1, '2002.'),
      mc('No perspectivismo, humanos e animais diferem sobretudo pelo:', ['Espírito', 'Corpo e ponto de vista', 'Idioma', 'Território'], 1, 'Cosmologias indígenas.'),
      mc('A proposta é:', ['Consenso', 'Influente e discutida', 'Doutrina', 'Lei'], 1, 'Debate.'),
      disc('Exponha o perspectivismo ameríndio com um exemplo etnográfico e uma objeção.', ['Tese', 'Exemplo', 'Objeção', 'Conclusão'])],
  },
}),

aula({
  id: 'an3-3', titulo: 'Relativismo cultural, direitos humanos e lei natural', duracao: '150 min',
  aprendera: ['Expor o debate entre relativismo e universalismo', 'Explicar a crítica da Associação Americana de Antropologia à Declaração Universal (1947)', 'Expor a doutrina da lei natural', 'Escrever o ensaio da etapa distinguindo relativismo metodológico e moral'],
  prereq: ['Aulas anteriores do módulo', 'Antropologia I: relativismo (an1-2)'],
  explicacao: `
<h3>O problema</h3>
<p>Se cada cultura tem seus valores, existem direitos que valem para todos? O debate opõe relativistas e universalistas e toca o núcleo da ética.</p>
<h3>O relativismo de 1947</h3>
<p>Em 1947, durante a preparação da Declaração Universal dos Direitos Humanos, a Associação Americana de Antropologia publicou uma declaração advertindo que normas de uma cultura não deveriam ser impostas como universais ${tag('fato')}. Depois, a própria antropologia revisou essa posição diante de violações graves ${tag('interpretacao')}.</p>
<h3>A Declaração Universal</h3>
<p>A Declaração Universal dos Direitos Humanos foi adotada pela Assembleia Geral da ONU em 10 de dezembro de 1948 ${tag('fato')}. Seu artigo 1º afirma que todos os seres humanos nascem livres e iguais em dignidade e direitos ${tag('fato')}.</p>
<h3>A lei natural</h3>
<p>A tradição católica ensina que a lei natural, inscrita na razão humana, é universal em seus preceitos e permanente, ainda que sua aplicação varie com as culturas (CIC 1956–1957) ${tag('doutrina')}. João Paulo II, na <em>Veritatis Splendor</em> (1993), afirmou a existência de atos intrinsecamente maus, que nenhuma circunstância ou cultura justifica ${tag('doutrina')}.</p>
<h3>Duas distinções</h3>
<p>(1) Relativismo <strong>metodológico</strong> (compreender antes de julgar) e relativismo <strong>moral</strong> (negar o bem e o mal universais) ${tag('argumento')}. (2) Preceitos universais e suas aplicações culturais: todos os povos honram os mortos, de modos diferentes; nem todo modo de honrar é imposto pela lei natural ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Universalismo', 'Tese de que há valores e direitos que valem para todos.'],
    ['Relativismo moral', 'Tese de que não há bem nem mal universais.'],
    ['Lei natural', 'Lei moral inscrita na razão humana, universal e permanente (CIC 1956).'],
    ['Ato intrinsecamente mau', 'Ato mau por seu objeto, em qualquer circunstância (Veritatis Splendor).'],
    ['Declaração Universal', 'Documento da ONU adotado em 10 de dezembro de 1948.'],
  ],
  exemplos: `<p><strong>Aplicando as distinções:</strong> os modos de cumprimentar, vestir e casar variam legitimamente entre culturas — aplicações diversas. Já tirar a vida de inocentes ou escravizar pessoas é condenado pela lei natural em qualquer cultura. O antropólogo compreende o sentido local de uma prática; o juízo moral sobre ela usa critérios universais.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate reaparece em temas como mutilação genital feminina, casamento infantil e liberdade religiosa. <strong>No Brasil:</strong> a Constituição de 1988 protege a cultura e a organização dos povos indígenas (art. 231) e, ao mesmo tempo, os direitos fundamentais de toda pessoa (art. 5º), o que exige equilíbrio em casos concretos ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o relativismo moral se contradiz', tag: 'argumento',
    premissas: ['O relativismo moral afirma que nenhuma cultura pode julgar outra.', 'Essa afirmação é apresentada como verdadeira para todas as culturas.', 'Se vale para todas, é um princípio moral universal — o que o relativismo nega existir.'],
    conclusao: 'Logo, o relativismo moral estrito se contradiz; a tolerância que ele defende pressupõe um valor universal.',
    nota: 'O argumento não atinge o relativismo metodológico.',
  },
  objecoes: [
    { objecao: 'Os direitos humanos são uma invenção ocidental imposta aos outros.', tag: 'debate',
      resposta: 'A formulação histórica da Declaração é ocidental em parte, e seus redatores incluíram representantes de várias tradições. Mais importante: a dignidade humana não depende de quem a formulou primeiro, mas da natureza comum que todos partilham — e as vítimas de violações em qualquer cultura reconhecem a injustiça que sofrem.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ensaio — o relativismo cultural é compatível com a afirmação de uma dignidade humana universal? Distinga relativismo metodológico e moral, use a declaração de 1947, a Declaração Universal e o Catecismo, e analise um caso.</p>`,
  fonte: {
    obra: 'Declaração Universal dos Direitos Humanos (1948), preâmbulo e arts. 1–3; Catecismo da Igreja Católica, §§ 1954–1960; São João Paulo II, Veritatis Splendor (1993), n. 79–83', link: null,
    orientacao: `<p>Na Declaração, localize o fundamento na dignidade. No Catecismo, as propriedades da lei natural. Na Veritatis Splendor, os atos intrinsecamente maus. Use os três no ensaio.</p>`,
  },
  perguntas: [
    { p: 'Quando foi adotada a Declaração Universal dos Direitos Humanos?', r: 'Em 10 de dezembro de 1948.' },
    { p: 'O que é a lei natural segundo o Catecismo?', r: 'A lei moral inscrita na razão humana, universal e permanente.' },
    { p: 'Por que o relativismo moral se contradiz?', r: 'Porque afirma como universal que não há valores universais.' },
  ],
  exercicios: [
    mc('A declaração da Associação Americana de Antropologia sobre direitos humanos é de:', ['1945', '1947', '1948', '1993'], 1, 'Antes da Declaração Universal.'),
    mc('A Declaração Universal foi adotada em:', ['1945', '1948', '1966', '1989'], 1, '10 de dezembro.'),
    mc('Veritatis Splendor é de:', ['1965', '1979', '1993', '2005'], 2, 'João Paulo II.'),
    mc('Variar os modos de cumprimentar entre culturas é exemplo de:', ['Violação da lei natural', 'Aplicação cultural legítima', 'Relativismo moral', 'Ato intrinsecamente mau'], 1, 'Distinção.'),
    mc('O relativismo metodológico consiste em:', ['Negar o bem e o mal', 'Compreender antes de julgar', 'Proibir julgamentos', 'Impor valores'], 1, 'Método.'),
    disc('Entregue o ensaio da etapa sobre relativismo e dignidade universal, com as duas distinções, os três documentos e um caso.', ['Duas distinções', 'Documentos citados', 'Caso analisado', 'Conclusão fundamentada']),
  ],
  resumo: ['AAA (1947): advertência relativista.', 'Declaração Universal (10/12/1948), art. 1º.', 'Lei natural universal (CIC 1956–1957).', 'Atos intrinsecamente maus (VS, 1993).', 'Relativismo metodológico ≠ moral; preceitos x aplicações.'],
  referencias: [
    { texto: 'Organização das Nações Unidas, Declaração Universal dos Direitos Humanos (1948).' },
    { texto: 'American Anthropological Association, "Statement on Human Rights" (1947).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1954–1960.', livro: 'cic' },
    { texto: 'São João Paulo II, Veritatis Splendor (1993).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio da etapa', 'Ler os documentos indicados'],
  revisao: [['1948', 'Declaração Universal.'], ['Lei natural', 'Universal e permanente.'], ['Relativismo moral', 'Contradiz-se.']],
  avancado: {
    texto: `<h3>Jacques Maritain e a Declaração</h3>
<p>Jacques Maritain participou dos debates da UNESCO sobre os fundamentos dos direitos humanos e observou que pessoas de filosofias opostas podiam concordar sobre uma lista de direitos sem concordar sobre seu fundamento ${tag('fato')}. Para Maritain, o fundamento último é a lei natural ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Jacques Maritain, O homem e o Estado (1951), cap. IV.' }],
    exercicios: [
      mc('Maritain participou dos debates sobre os direitos humanos na:', ['OTAN', 'UNESCO', 'OIT', 'OEA'], 1, 'Fundamentos.'),
      mc('Para Maritain, o fundamento último dos direitos é:', ['O contrato', 'A lei natural', 'A maioria', 'O Estado'], 1, 'O homem e o Estado.'),
      mc('Maritain observou acordo sobre direitos com:', ['Mesmo fundamento', 'Fundamentos diferentes', 'Nenhuma base', 'Imposição'], 1, 'Acordo prático.'),
      disc('Avalie a tese de Maritain sobre acordo prático e desacordo de fundamentos, com um exemplo atual.', ['Tese', 'Exemplo', 'Avaliação', 'Conclusão'])],
  },
}),

aula({
  id: 'an3-4', titulo: 'Antropologia, missão e inculturação', duracao: '150 min',
  aprendera: ['Explicar o conceito de inculturação nos documentos da Igreja', 'Analisar casos históricos de missão e cultura', 'Expor as críticas antropológicas à missão e as respostas', 'Aplicar critérios a um caso brasileiro'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Anunciar o Evangelho a outros povos transforma suas culturas. Isso é destruição, enriquecimento ou as duas coisas? A antropologia e a teologia da missão discutem essa pergunta.</p>
<h3>Os documentos</h3>
<p>Paulo VI, na <em>Evangelii Nuntiandi</em> (1975), afirmou que a ruptura entre Evangelho e cultura é "o drama da nossa época" e pediu a evangelização das culturas (n. 20) ${tag('doutrina')}. João Paulo II usou o termo <strong>inculturação</strong> na <em>Catechesi Tradendae</em> (1979, n. 53) e o desenvolveu na <em>Redemptoris Missio</em> (1990, n. 52–54): encarnação do Evangelho nas culturas e introdução delas na vida da Igreja, purificando o que é contrário ao Evangelho ${tag('doutrina')}.</p>
<h3>Casos históricos</h3>
<p>No Brasil, os jesuítas estudaram o tupi: José de Anchieta escreveu sua gramática e autos teatrais na língua ${tag('fato')}. Na China, Matteo Ricci adaptou a apresentação da fé à cultura confuciana; a "questão dos ritos" chineses dividiu missionários e Roma por décadas ${tag('fato')}.</p>
<h3>Críticas e respostas</h3>
<p>Críticos apontam que a missão esteve ligada à colonização e causou perdas culturais ${tag('interpretacao')}. A Igreja reconheceu e pediu perdão por pecados cometidos na evangelização, por exemplo no Jubileu de 2000 ${tag('fato')}. Ao mesmo tempo, missionários registraram línguas, defenderam povos (Las Casas, an1-1) e muitas comunidades indígenas são hoje cristãs por escolha própria ${tag('interpretacao')}.</p>
<h3>Amazônia</h3>
<p>Após o Sínodo para a Amazônia (2019), o Papa Francisco publicou <em>Querida Amazônia</em> (2020), com um "sonho cultural" de preservar a riqueza cultural dos povos amazônicos ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Inculturação', 'Encarnação do Evangelho nas culturas e introdução delas na vida da Igreja (RM 52).'],
    ['Evangelização das culturas', 'Ação de impregnar as culturas com o Evangelho (EN 20).'],
    ['Questão dos ritos', 'Controvérsia sobre ritos chineses e a fé cristã (séculos XVII–XVIII).'],
    ['Aculturação', 'Mudança cultural pelo contato prolongado entre culturas.'],
    ['Purificação', 'Exclusão do que, numa cultura, é contrário ao Evangelho.'],
  ],
  exemplos: `<p><strong>Critério aplicado:</strong> traduzir a liturgia para uma língua indígena e usar sua música é inculturação; manter um rito que inclui sacrifício humano não é, porque contraria a dignidade da pessoa. Entre os dois extremos, muitas práticas exigem discernimento pastoral e conhecimento antropológico.</p>`,
  contexto: `<p><strong>No mundo:</strong> a inculturação é tema de teologia, liturgia e antropologia em todos os continentes. <strong>No Brasil:</strong> o Conselho Indigenista Missionário (Cimi), ligado à CNBB, foi criado em 1972 ${tag('fato')}; o trabalho missionário entre povos indígenas é objeto de cooperação e de controvérsia ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a inculturação exige conhecimento antropológico', tag: 'argumento',
    premissas: ['Inculturar é encarnar o Evangelho numa cultura concreta e purificar o que lhe é contrário.', 'Para isso é preciso conhecer o sentido das práticas, não apenas sua aparência.', 'A antropologia oferece métodos para compreender o sentido das práticas.'],
    conclusao: 'Logo, a inculturação bem feita exige conhecimento antropológico rigoroso.',
    nota: 'O critério do discernimento, porém, vem da fé.',
  },
  objecoes: [
    { objecao: 'Toda missão é colonialismo cultural.', tag: 'debate',
      resposta: 'A missão esteve historicamente ligada a projetos coloniais, e isso foi reconhecido. Mas anunciar uma mensagem e convidar à adesão livre não é o mesmo que impor pela força, e a Igreja ensina que o ato de fé deve ser livre (Dignitatis Humanae, 10). A avaliação exige distinguir os casos.' },
  ],
  aplicacao: `<p>Analise um caso brasileiro de missão entre povos indígenas (histórico ou atual): práticas adotadas, efeitos culturais, posição dos próprios indígenas e avaliação com os critérios da Redemptoris Missio, separando descrição e juízo.</p>`,
  fonte: {
    obra: 'São João Paulo II, Redemptoris Missio (1990), n. 52–54; São Paulo VI, Evangelii Nuntiandi (1975), n. 18–20; Francisco, Querida Amazônia (2020), cap. II', link: null,
    orientacao: `<p>Na Redemptoris Missio, localize a definição de inculturação e seus critérios. Na Evangelii Nuntiandi, o "drama da nossa época". Em Querida Amazônia, o sonho cultural. Use-os na análise.</p>`,
  },
  perguntas: [
    { p: 'O que é inculturação segundo a Redemptoris Missio?', r: 'A encarnação do Evangelho nas culturas e a introdução delas na vida da Igreja, purificando o que é contrário ao Evangelho.' },
    { p: 'Onde Paulo VI chama a ruptura entre Evangelho e cultura de drama da época?', r: 'Na Evangelii Nuntiandi, n. 20.' },
    { p: 'Quando foi criado o Cimi?', r: 'Em 1972.' },
  ],
  exercicios: [
    mc('Evangelii Nuntiandi é de:', ['1965', '1975', '1990', '2020'], 1, 'Paulo VI.'),
    mc('Redemptoris Missio é de:', ['1979', '1990', '1993', '2005'], 1, 'João Paulo II.'),
    mc('Querida Amazônia foi publicada em:', ['2015', '2019', '2020', '2023'], 2, 'Após o Sínodo de 2019.'),
    mc('A "questão dos ritos" envolveu missões na:', ['Índia', 'China', 'Amazônia', 'África'], 1, 'Ricci.'),
    mc('O ato de fé, segundo Dignitatis Humanae, deve ser:', ['Imposto', 'Livre', 'Coletivo', 'Estatal'], 1, 'DH 10.'),
    disc('Analise um caso brasileiro de missão entre povos indígenas com os critérios da Redemptoris Missio, separando descrição e juízo.', ['Caso descrito', 'Efeitos', 'Voz dos indígenas', 'Critérios aplicados']),
  ],
  resumo: ['Evangelii Nuntiandi (1975): evangelização das culturas.', 'Inculturação: Catechesi Tradendae (1979); Redemptoris Missio (1990).', 'Anchieta e o tupi; Ricci e os ritos.', 'Pedido de perdão (2000); fé livre (DH 10).', 'Querida Amazônia (2020); Cimi (1972).'],
  referencias: [
    { texto: 'São João Paulo II, Redemptoris Missio (1990).' },
    { texto: 'São Paulo VI, Evangelii Nuntiandi (1975).' },
    { texto: 'Francisco, Querida Amazônia (2020).' },
    { texto: 'Concílio Vaticano II, Dignitatis Humanae (1965), n. 10.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os documentos indicados'],
  revisao: [['Inculturação', 'RM 52.'], ['EN 20', 'Drama da época.'], ['Querida Amazônia', '2020.']],
  avancado: {
    texto: `<h3>Inculturação e liturgia</h3>
<p>A Constituição <em>Sacrosanctum Concilium</em> (1963), n. 37–40, admite adaptações da liturgia ao gênio e às tradições dos povos, mantida a unidade substancial do rito romano ${tag('doutrina')}. A instrução <em>Varietates legitimae</em> (1994) detalha os critérios ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963), n. 37–40.' }],
    exercicios: [
      mc('As adaptações litúrgicas aparecem em Sacrosanctum Concilium nos n.:', ['1–5', '37–40', '100–105', '128–130'], 1, 'Gênio dos povos.'),
      mc('Varietates legitimae é de:', ['1963', '1975', '1994', '2007'], 2, 'Critérios de adaptação.'),
      mc('As adaptações devem manter:', ['Nada', 'A unidade substancial do rito romano', 'Só a língua latina', 'Só a música'], 1, 'SC 38.'),
      disc('Analise uma adaptação litúrgica existente no Brasil (música, língua, gestos) com os critérios de Sacrosanctum Concilium.', ['Adaptação descrita', 'Critérios', 'Avaliação', 'Fontes'])],
  },
}),

avaliacao('an3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as escolas antropológicas e os debates sobre relativismo e inculturação, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro das quatro correntes.</li><li>Releia seu ensaio sobre relativismo e dignidade.</li></ul>`,
[
  disc('Analise uma prática cultural brasileira com duas correntes antropológicas e diga o que cada uma permite compreender, sem confundir compreensão e aprovação.', ['Prática delimitada', 'Duas correntes aplicadas', 'Comparação', 'Compreender x aprovar']),
  disc('Responda: a antropologia obriga ao relativismo moral? Use a distinção entre relativismo metodológico e moral, a lei natural e um caso concreto.', ['Distinção exposta', 'Lei natural citada', 'Caso', 'Conclusão fundamentada']),
]),
];
