// Estatística II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Estatística).
// Censos e aritmética política; nascimento da probabilidade; Graunt, Pascal, Bernoulli e Laplace;
// Galton, Pearson, Fisher, Neyman e Bayes.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'es2-1', titulo: 'Censos, boletins de mortalidade e aritmética política', duracao: '150 min',
  aprendera: ['Conhecer censos antigos e medievais', 'Explicar a contribuição de Graunt', 'Conhecer a aritmética política e a Statistik alemã', 'Situar os marcos brasileiros'],
  prereq: ['Estatística I (módulo ES1)'],
  explicacao: `
<h3>O problema</h3>
<p>Antes de fórmulas e computadores, como os governos e estudiosos contavam pessoas e descobriam regularidades na vida social?</p>
<h3>Censos antigos</h3>
<p>Impérios antigos contavam habitantes para cobrar impostos e recrutar soldados; Roma realizava o census periódico ${tag('fato')}. O Evangelho de Lucas situa o nascimento de Jesus num recenseamento ordenado por César Augusto (Lc 2,1–5) ${tag('fato')}. Na Inglaterra, o Domesday Book (1086) registrou terras e bens após a conquista normanda ${tag('fato')}.</p>
<h3>Graunt e os boletins de mortalidade</h3>
<p>Em 1662, John Graunt publicou Observações naturais e políticas sobre os boletins de mortalidade de Londres ${tag('fato')}. Organizando registros semanais de batismos e enterros, encontrou regularidades: nasciam mais meninos que meninas, numa razão próxima de 14 para 13, e certas causas de morte se mantinham estáveis de ano a ano ${tag('fato')}. É considerado um dos fundadores da demografia e da estatística ${tag('interpretacao')}.</p>
<h3>Aritmética política e Statistik</h3>
<p>William Petty chamou de "aritmética política" o uso de números para o governo ${tag('fato')}. Na Alemanha do século XVIII, a Statistik, associada a Gottfried Achenwall, era a descrição dos Estados; daí o nome da disciplina ${tag('fato')}. Em 1710, John Arbuthnot observou que em 82 anos seguidos os batismos de meninos superaram os de meninas em Londres e argumentou que isso não podia ser acaso — raciocínio considerado precursor dos testes de significância ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>O primeiro recenseamento geral do Brasil foi realizado em 1872, ainda no Império, e registrou inclusive a população escravizada ${tag('fato')}. O IBGE foi criado em 1936 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Census', 'Recenseamento periódico da Roma antiga.'],
    ['Boletins de mortalidade', 'Registros semanais de enterros e batismos em Londres.'],
    ['Aritmética política', 'Uso de números para o governo (Petty).'],
    ['Statistik', 'Descrição dos Estados na tradição alemã do século XVIII.'],
    ['Razão de sexo ao nascer', 'Número de nascimentos masculinos por feminino.'],
  ],
  exemplos: `<p><strong>O raciocínio de Arbuthnot:</strong> se meninos e meninas nascessem com igual chance e fosse puro acaso qual sexo predomina em cada ano, a chance de os meninos predominarem em 82 anos seguidos seria (1/2)<sup>82</sup>, um número minúsculo. Logo, concluiu ele, há uma causa — que atribuiu à Providência. O cálculo é o mesmo de um teste de significância moderno ${tag('interpretacao')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> os registros paroquiais de batismos, casamentos e óbitos, mantidos pela Igreja, foram fonte essencial da demografia histórica ${tag('fato')}. <strong>No Brasil:</strong> registros paroquiais do período colonial e imperial são usados por historiadores para estudar a população ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que contar revela o que a observação isolada não vê', tag: 'argumento',
    premissas: ['Um nascimento ou uma morte isolados parecem fruto de circunstâncias particulares.', 'Reunidos aos milhares, mostram proporções estáveis.', 'Essas regularidades só aparecem na contagem sistemática.'],
    conclusao: 'Logo, a estatística revela ordem no que, caso a caso, parece acaso.',
    nota: 'Regularidade do conjunto não elimina a liberdade de cada pessoa.',
  },
  objecoes: [
    { objecao: 'Se as taxas de morte e casamento são estáveis, as pessoas não são livres.', tag: 'debate',
      resposta: 'A regularidade estatística descreve o conjunto, não determina cada ato individual. Muitas decisões livres, sujeitas a condições semelhantes, produzem proporções estáveis. O debate sobre "estatística e livre-arbítrio" foi intenso no século XIX, mas a regularidade não prova determinismo.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com os marcos dos censos e da aritmética política, incluindo 1872 e 1936, com data, autor ou instituição e ideia central.</p>`,
  fonte: {
    obra: 'John Graunt, Observações naturais e políticas sobre os boletins de mortalidade (1662), prefácio e capítulo sobre nascimentos', link: null,
    orientacao: `<p>Observe como Graunt organiza os dados e que perguntas faz a eles.</p>`,
  },
  perguntas: [
    { p: 'Que regularidade Graunt encontrou nos nascimentos?', r: 'Nasciam mais meninos que meninas, numa razão próxima de 14 para 13.' },
    { p: 'De onde vem o nome "estatística"?', r: 'Da Statistik alemã, a descrição dos Estados.' },
    { p: 'Quando foi o primeiro recenseamento geral do Brasil?', r: 'Em 1872.' },
  ],
  exercicios: [
    mc('As Observações de Graunt são de:', ['1086', '1662', '1710', '1872'], 1, 'Londres.'),
    mc('"Aritmética política" é expressão de:', ['Petty', 'Pascal', 'Fisher', 'Laplace'], 0, 'Governo.'),
    mc('Arbuthnot analisou batismos em Londres durante:', ['10 anos', '82 anos', '200 anos', '1 ano'], 1, '1710.'),
    mc('O Domesday Book é de:', ['1086', '1500', '1662', '1872'], 0, 'Inglaterra.'),
    mc('O recenseamento ordenado por Augusto está em:', ['Mt 2', 'Lc 2,1–5', 'Jo 1', 'At 2'], 1, 'Natividade.'),
    disc('Inicie a linha do tempo com os marcos dos censos e da aritmética política.', ['Marcos', 'Datas', 'Ideias', 'Brasil']),
  ],
  resumo: ['Censos antigos; Lc 2; Domesday (1086).', 'Graunt (1662): regularidades.', 'Petty e a aritmética política; Statistik.', 'Arbuthnot (1710): precursor dos testes.', 'Brasil: 1872 e IBGE (1936).'],
  referencias: [
    { texto: 'John Graunt, Observações naturais e políticas sobre os boletins de mortalidade (1662).' },
    { texto: 'Ian Hacking, O surgimento da probabilidade (1975).' },
    { texto: 'Stephen M. Stigler, The History of Statistics (1986).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1662', 'Graunt.'], ['1710', 'Arbuthnot.'], ['1872', 'Censo do Império.']],
  avancado: {
    texto: `<h3>Süssmilch e a ordem divina</h3>
<p>Johann Peter Süssmilch, pastor luterano, publicou em 1741 A ordem divina, em que reuniu dados de nascimentos, casamentos e mortes para mostrar regularidades que atribuía à providência de Deus ${tag('fato')}. Sua obra é marco da demografia e mostra que, nos inícios da estatística, a regularidade era lida como sinal de ordem no mundo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Ian Hacking, The Taming of Chance (1990).' }],
    exercicios: [
      mc('A ordem divina, de Süssmilch, é de:', ['1662', '1741', '1835', '1925'], 1, 'Demografia.'),
      mc('Süssmilch atribuía as regularidades à:', ['Sorte', 'Providência', 'Política', 'Economia'], 1, 'Interpretação.'),
      mc('Süssmilch era:', ['Matemático francês', 'Pastor luterano', 'Rei', 'Médico inglês'], 1, 'Fato.'),
      disc('Discuta se regularidades estatísticas podem ser lidas como sinal de ordem no mundo.', ['Tese', 'Objeção', 'Distinções', 'Avaliação'])],
  },
}),

aula({
  id: 'es2-2', titulo: 'O nascimento da probabilidade: de Pascal e Fermat à curva normal', duracao: '150 min',
  aprendera: ['Resolver o problema dos pontos', 'Explicar a lei dos grandes números', 'Conhecer a origem da curva normal', 'Explicar o "homem médio" de Quetelet'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como raciocinar com rigor sobre o que é incerto? A resposta moderna começou com uma pergunta sobre jogos interrompidos.</p>
<h3>O problema dos pontos</h3>
<p>Em 1654, Pascal e Fermat trocaram cartas sobre como dividir o prêmio de um jogo interrompido antes do fim ${tag('fato')}. Se vence quem fizer 3 pontos, A tem 2 e B tem 1, B só vence se ganhar as duas próximas rodadas: chance de 1/2 × 1/2 = 1/4; a divisão justa dá 3/4 do prêmio a A e 1/4 a B ${tag('fato')}. Em 1657, Christiaan Huygens publicou o primeiro tratado impresso sobre o cálculo nos jogos de azar ${tag('fato')}.</p>
<h3>A lei dos grandes números</h3>
<p>Jacob Bernoulli, na Ars conjectandi (publicada postumamente em 1713), demonstrou que, com muitas repetições, a frequência observada de um evento se aproxima de sua probabilidade ${tag('fato')}. Ao lançar uma moeda dez vezes, obter 7 caras é comum; em dez mil lançamentos, a proporção fica muito perto de 1/2 ${tag('fato')}.</p>
<h3>A curva normal</h3>
<p>Abraham de Moivre (1733) obteve a curva em forma de sino como aproximação de probabilidades binomiais ${tag('fato')}. Gauss (1809) a usou para erros de observação astronômica, com o método dos mínimos quadrados, e Laplace demonstrou uma forma do teorema central do limite: somas de muitas causas pequenas e independentes tendem à distribuição normal ${tag('fato')}.</p>
<h3>Quetelet</h3>
<p>Adolphe Quetelet aplicou a curva normal a medidas humanas, como a circunferência do tórax de soldados, e criou a ideia do "homem médio" (1835) ${tag('fato')}. A tentação de ver o médio como ideal foi criticada: a média descreve o conjunto, não define a pessoa ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Problema dos pontos', 'Como dividir o prêmio de um jogo interrompido.'],
    ['Lei dos grandes números', 'Com muitas repetições, a frequência se aproxima da probabilidade.'],
    ['Distribuição normal', 'Curva em forma de sino, simétrica em torno da média.'],
    ['Teorema central do limite', 'Somas de muitas parcelas independentes tendem à normal.'],
    ['Homem médio', 'Conceito de Quetelet para o tipo médio de uma população.'],
  ],
  exemplos: `<p><strong>A falácia do jogador:</strong> depois de cinco caras seguidas, muita gente aposta que virá coroa, "para equilibrar". Mas a moeda não tem memória: a chance continua 1/2. A lei dos grandes números não diz que os resultados se compensam no curto prazo; diz que, no longo prazo, as flutuações se diluem na proporção.</p>`,
  contexto: `<p><strong>No mundo:</strong> a correspondência entre Pascal e Fermat é considerada o marco inicial da teoria matemática da probabilidade ${tag('fato')}. <strong>No Brasil:</strong> loterias oficiais divulgam as probabilidades de acerto, que mostram por que o jogo é, em média, desfavorável ao apostador ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a sorte tem regras', tag: 'argumento',
    premissas: ['Um único lance de dado é imprevisível.', 'Mas as proporções em muitos lances seguem a probabilidade (lei dos grandes números).', 'Logo, é possível raciocinar com rigor sobre conjuntos de eventos incertos.'],
    conclusao: 'Logo, a incerteza individual convive com regularidade coletiva calculável.',
    nota: 'Isso fundamenta seguros, pesquisas por amostragem e controle de qualidade.',
  },
  objecoes: [
    { objecao: 'Depois de muitas derrotas, a vitória está "garantida".', tag: 'argumento',
      resposta: 'É a falácia do jogador. Eventos independentes não se lembram do passado; a lei dos grandes números fala de proporções em longo prazo, não de compensações. Quem joga com essa crença tende a perder mais.' },
  ],
  aplicacao: `<p>Lance uma moeda 50 vezes (ou simule), registre a proporção de caras após 10, 20, 30, 40 e 50 lances e mostre num gráfico como ela se aproxima de 1/2, comentando à luz da lei dos grandes números.</p>`,
  fonte: {
    obra: 'Correspondência entre Pascal e Fermat (1654), carta de Pascal de 29 de julho', link: null,
    orientacao: `<p>Acompanhe o raciocínio de Pascal para dividir o prêmio e compare com a solução de Fermat por enumeração.</p>`,
  },
  perguntas: [
    { p: 'Em um jogo até 3 pontos com A 2 × 1 B, como dividir o prêmio?', r: '3/4 para A e 1/4 para B.' },
    { p: 'O que diz a lei dos grandes números?', r: 'Que, com muitas repetições, a frequência se aproxima da probabilidade.' },
    { p: 'O que é a falácia do jogador?', r: 'Achar que eventos independentes se compensam no curto prazo.' },
  ],
  exercicios: [
    mc('A correspondência de Pascal e Fermat é de:', ['1654', '1713', '1809', '1925'], 0, 'Problema dos pontos.'),
    mc('A Ars conjectandi é de:', ['Pascal', 'Jacob Bernoulli', 'Gauss', 'Quetelet'], 1, '1713.'),
    mc('Após cinco caras, a chance de coroa no próximo lance é:', ['Maior que 1/2', '1/2', 'Menor que 1/2', 'Zero'], 1, 'Independência.'),
    mc('O "homem médio" é conceito de:', ['Quetelet', 'Graunt', 'Fisher', 'Huygens'], 0, '1835.'),
    mc('Somas de muitas causas pequenas e independentes tendem à:', ['Uniforme', 'Normal', 'Moda', 'Mediana'], 1, 'Teorema central do limite.'),
    disc('Registre a proporção de caras em 50 lances e comente a lei dos grandes números.', ['Registro', 'Gráfico', 'Interpretação', 'Falácia evitada']),
  ],
  resumo: ['Pascal e Fermat (1654): problema dos pontos.', 'Huygens (1657).', 'Bernoulli (1713): lei dos grandes números.', 'De Moivre, Gauss, Laplace: normal e teorema central.', 'Quetelet (1835): homem médio.'],
  referencias: [
    { texto: 'Blaise Pascal, Tratado do triângulo aritmético (1665).', livro: 'pascal-triangulo' },
    { texto: 'Jacob Bernoulli, Ars conjectandi (1713).' },
    { texto: 'Ian Hacking, O surgimento da probabilidade (1975).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o experimento da moeda', 'Ler a fonte indicada'],
  revisao: [['1654', 'Pascal e Fermat.'], ['1713', 'Grandes números.'], ['Normal', 'Sino.']],
  avancado: {
    texto: `<h3>O triângulo de Pascal e as combinações</h3>
<p>No Tratado do triângulo aritmético, Pascal organizou os números de combinações num triângulo em que cada número é a soma dos dois acima ${tag('fato')}. A linha 4 (1, 4, 6, 4, 1) dá as maneiras de obter 0 a 4 caras em 4 lances; somam 16, e a chance de exatamente 2 caras é 6/16 = 3/8 ${tag('fato')}. O triângulo era conhecido antes em outras tradições matemáticas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Blaise Pascal, Tratado do triângulo aritmético (1665).', livro: 'pascal-triangulo' }],
    exercicios: [
      mc('A linha 4 do triângulo de Pascal é:', ['1, 4, 6, 4, 1', '1, 3, 3, 1', '1, 5, 10, 10, 5, 1', '1, 2, 1'], 0, 'Combinações.'),
      mc('A chance de exatamente 2 caras em 4 lances é:', ['1/4', '3/8', '1/2', '1/16'], 1, '6/16.'),
      mc('Cada número do triângulo é a soma dos:', ['Dois acima', 'Três ao lado', 'Extremos', 'Anteriores na linha'], 0, 'Regra.'),
      disc('Use o triângulo para calcular a chance de 3 caras em 5 lances e explique o raciocínio.', ['Linha', 'Cálculo', 'Resultado', 'Explicação'])],
  },
}),

aula({
  id: 'es2-3', titulo: 'Pascal, Bernoulli e Laplace: probabilidade, decisão e conhecimento', duracao: '150 min',
  aprendera: ['Explicar o valor esperado e a aposta de Pascal', 'Explicar a "certeza moral" em Bernoulli', 'Expor a visão de Laplace sobre a probabilidade', 'Avaliar o determinismo laplaciano'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A probabilidade mede o acaso no mundo ou a nossa ignorância? E como decidir quando o resultado é incerto?</p>
<h3>Valor esperado e a aposta</h3>
<p>Em jogos, o valor esperado é a soma de cada ganho multiplicado por sua probabilidade ${tag('fato')}. Pascal, nos Pensamentos, aplicou esse raciocínio à fé: se Deus existe, apostar nele traz um ganho infinito; se não existe, perde-se pouco; logo, é razoável apostar ${tag('fato')}. O argumento é discutido até hoje e não pretende provar a existência de Deus, mas mostrar a razoabilidade de buscá-lo ${tag('interpretacao')}.</p>
<h3>Bernoulli e a certeza moral</h3>
<p>Jacob Bernoulli distinguiu a certeza absoluta da "certeza moral", uma probabilidade tão alta que basta para agir na vida prática ${tag('fato')}. Ele queria aplicar o cálculo a questões civis, morais e econômicas, como testemunhos e decisões jurídicas ${tag('fato')}.</p>
<h3>Laplace</h3>
<p>No Ensaio filosófico sobre as probabilidades (1814), Laplace definiu a probabilidade clássica como a razão entre casos favoráveis e casos possíveis igualmente prováveis ${tag('fato')}. Imaginou uma inteligência que, conhecendo todas as forças e posições, preveria todo o futuro, e via a probabilidade como medida de nossa ignorância ${tag('fato')}. Afirmou que a teoria das probabilidades é, no fundo, o bom senso reduzido a cálculo ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>O determinismo de Laplace foi questionado pela física do século XX e por argumentos filosóficos sobre a liberdade ${tag('debate')}. A tradição cristã afirma a liberdade humana e uma providência que não se reduz a mecanismo ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Valor esperado', 'Soma dos resultados multiplicados por suas probabilidades.'],
    ['Aposta de Pascal', 'Argumento de que é razoável apostar na existência de Deus.'],
    ['Certeza moral', 'Probabilidade alta o bastante para agir (Bernoulli).'],
    ['Probabilidade clássica', 'Casos favoráveis sobre casos possíveis igualmente prováveis.'],
    ['Determinismo laplaciano', 'Tese de que, conhecido o estado presente, todo o futuro seria previsível.'],
  ],
  exemplos: `<p><strong>Valor esperado de uma rifa:</strong> 1.000 bilhetes a R$ 5, um prêmio de R$ 3.000. Valor esperado de um bilhete: 1/1.000 × R$ 3.000 = R$ 3; como custa R$ 5, a perda esperada é R$ 2. Se a rifa é de uma obra de caridade, a pessoa pode aceitar a perda esperada como doação — a decisão envolve valores, não só cálculo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a teoria da decisão e a economia usam o valor esperado e suas variantes ${tag('fato')}. <strong>No Brasil:</strong> o processo judicial lida com prova e convicção do juiz, temas próximos da "certeza moral" ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que agir com certeza moral é racional', tag: 'argumento',
    premissas: ['Na vida prática, raramente temos certeza absoluta.', 'Esperar certeza absoluta para agir paralisaria a vida.', 'Uma probabilidade muito alta, avaliada com prudência, é razão suficiente para agir.'],
    conclusao: 'Logo, agir com certeza moral é racional e prudente.',
    nota: 'É o que a tradição chama de prudência: agir bem em circunstâncias contingentes.',
  },
  objecoes: [
    { objecao: 'A aposta de Pascal reduz a fé a um cálculo interesseiro.', tag: 'debate',
      resposta: 'Pascal propõe a aposta a quem não crê, como passo inicial; nos Pensamentos ele insiste que a fé é dom e que o coração tem razões. O argumento quer remover a indiferença, não substituir a conversão. Críticos, porém, discutem se é possível "decidir" crer.' },
  ],
  aplicacao: `<p>Faça a ficha de leitura de um capítulo do Ensaio filosófico sobre as probabilidades, de Laplace, conforme o método do Degrau 0, e escreva um parágrafo avaliando sua visão da probabilidade.</p>`,
  fonte: {
    obra: 'Pierre-Simon Laplace, Ensaio filosófico sobre as probabilidades (1814), introdução; Blaise Pascal, Pensamentos, fragmento da aposta', link: null,
    orientacao: `<p>Em Laplace, identifique a definição clássica e a imagem da inteligência onisciente. Em Pascal, reconstrua o argumento da aposta.</p>`,
  },
  perguntas: [
    { p: 'O que é valor esperado?', r: 'A soma dos resultados multiplicados por suas probabilidades.' },
    { p: 'O que é certeza moral para Bernoulli?', r: 'Uma probabilidade tão alta que basta para agir.' },
    { p: 'Para Laplace, a probabilidade mede o quê?', r: 'Nossa ignorância.' },
  ],
  exercicios: [
    mc('Rifa de 1.000 bilhetes, prêmio de R$ 3.000: valor esperado de um bilhete:', ['R$ 1', 'R$ 3', 'R$ 5', 'R$ 30'], 1, '3.000 ÷ 1.000.'),
    mc('O Ensaio filosófico sobre as probabilidades é de:', ['1654', '1713', '1814', '1925'], 2, 'Laplace.'),
    mc('A aposta está nos:', ['Pensamentos', 'Ars conjectandi', 'Elementos', 'Principia'], 0, 'Pascal.'),
    mc('Probabilidade clássica = casos favoráveis sobre casos:', ['Observados', 'Possíveis igualmente prováveis', 'Raros', 'Contrários'], 1, 'Definição.'),
    mc('"Certeza moral" é expressão de:', ['Bernoulli', 'Fisher', 'Quetelet', 'Graunt'], 0, 'Ação.'),
    disc('Faça a ficha de leitura de um capítulo de Laplace e avalie sua visão da probabilidade.', ['Tese', 'Argumentos', 'Conceitos', 'Avaliação']),
  ],
  resumo: ['Valor esperado.', 'Aposta de Pascal.', 'Certeza moral (Bernoulli).', 'Laplace: probabilidade clássica e ignorância.', 'Determinismo em debate.'],
  referencias: [
    { texto: 'Pierre-Simon Laplace, Ensaio filosófico sobre as probabilidades (1814).' },
    { texto: 'Blaise Pascal, Pensamentos.' },
    { texto: 'Ian Hacking, O surgimento da probabilidade (1975).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de Laplace', 'Ler as fontes indicadas'],
  revisao: [['Valor esperado', 'Soma ponderada.'], ['Certeza moral', 'Basta para agir.'], ['Laplace', 'Ignorância.']],
  avancado: {
    texto: `<h3>A regra de sucessão</h3>
<p>Laplace propôs calcular a probabilidade de o sol nascer amanhã, dado que nasceu em todos os dias observados: com n sucessos em n tentativas, a probabilidade do próximo sucesso seria (n + 1) ÷ (n + 2) ${tag('fato')}. A regra mostra o raciocínio bayesiano aplicado à indução, e também seus limites: depende de supor que não sabemos nada antes de observar ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Pierre-Simon Laplace, Ensaio filosófico sobre as probabilidades (1814).' }],
    exercicios: [
      mc('Com 3 sucessos em 3 tentativas, a regra de sucessão dá:', ['3/4', '4/5', '1', '1/2'], 1, '(3 + 1) ÷ (3 + 2).'),
      mc('A regra de sucessão aplica o raciocínio:', ['Bayesiano', 'Retórico', 'Jurídico', 'Gráfico'], 0, 'Indução.'),
      mc('Um limite da regra é supor:', ['Conhecimento prévio nenhum', 'Excesso de dados', 'Normalidade', 'Experimento'], 0, 'Interpretação.'),
      disc('Discuta se a regra de sucessão resolve o problema da indução.', ['Regra', 'Problema', 'Limites', 'Avaliação'])],
  },
}),

aula({
  id: 'es2-4', titulo: 'Galton, Pearson, Fisher, Neyman e Bayes: a estatística moderna', duracao: '150 min',
  aprendera: ['Explicar a regressão à média', 'Conhecer a correlação de Pearson', 'Explicar as contribuições de Fisher e de Neyman e Pearson', 'Conhecer o teorema de Bayes e a ligação histórica com a eugenia'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Entre o fim do século XIX e meados do XX surgiram quase todas as ferramentas usadas hoje: regressão, correlação, testes, intervalos. Quem as criou, e com que intenções?</p>
<h3>Galton e a regressão</h3>
<p>Francis Galton estudou alturas de pais e filhos e observou que filhos de pais muito altos tendem a ser altos, mas, em média, menos extremos que os pais: a "regressão à média" (1886) ${tag('fato')}. O fenômeno aparece sempre que duas medidas são imperfeitamente correlacionadas ${tag('fato')}.</p>
<h3>Pearson</h3>
<p>Karl Pearson desenvolveu o coeficiente de correlação, que varia de −1 a 1, e o teste qui-quadrado (1900) ${tag('fato')}.</p>
<h3>Fisher</h3>
<p>Ronald A. Fisher, trabalhando com experimentos agrícolas, criou a análise de variância, o método da máxima verossimilhança e o planejamento de experimentos com aleatorização; em Métodos estatísticos para pesquisadores (1925) difundiu o uso do nível de 5% ${tag('fato')}.</p>
<h3>Neyman e Pearson</h3>
<p>Jerzy Neyman e Egon Pearson formularam em 1933 a teoria dos testes com hipótese nula e alternativa e os erros do tipo I (rejeitar a nula verdadeira) e do tipo II (não rejeitar a nula falsa); Neyman desenvolveu os intervalos de confiança ${tag('fato')}.</p>
<h3>Bayes</h3>
<p>O ensaio de Thomas Bayes, ministro presbiteriano, publicado postumamente por Richard Price em 1763, deu origem ao teorema que atualiza probabilidades à luz de novas evidências ${tag('fato')}.</p>
<h3>Uma sombra</h3>
<p>Galton cunhou o termo "eugenia", e Pearson e Fisher a defenderam ${tag('fato')}. A eugenia levou a esterilizações forçadas em vários países e foi condenada pela Igreja, entre outros por Pio XI na Casti connubii (1930) ${tag('fato')}. Reconhecer a validade técnica de suas ferramentas não implica aceitar seus usos ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Regressão à média', 'Tendência de medidas extremas serem seguidas por medidas menos extremas.'],
    ['Coeficiente de correlação', 'Medida de associação linear entre −1 e 1 (Pearson).'],
    ['Máxima verossimilhança', 'Escolher o valor do parâmetro que torna os dados observados mais prováveis.'],
    ['Erro do tipo I', 'Rejeitar a hipótese nula quando ela é verdadeira.'],
    ['Teorema de Bayes', 'Regra para atualizar probabilidades à luz de evidências.'],
  ],
  exemplos: `<p><strong>Regressão à média na escola:</strong> os 10 alunos com piores notas na primeira prova fazem reforço e melhoram na segunda. O reforço funcionou? Parte da melhora pode ser regressão à média: quem foi muito mal por azar tende a ir menos mal da próxima vez, mesmo sem reforço. Só um grupo de comparação permite separar os efeitos.</p>`,
  contexto: `<p><strong>No mundo:</strong> universidades e sociedades científicas renomearam prédios e prêmios ligados a estatísticos eugenistas, num debate sobre memória e mérito ${tag('debate')}. <strong>No Brasil:</strong> houve um movimento eugenista nas primeiras décadas do século XX, com sociedades e congressos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a ciência precisa de limites morais', tag: 'argumento',
    premissas: ['As ferramentas estatísticas são neutras em si, como um bisturi.', 'Mas os fins a que servem não são neutros.', 'A eugenia mostrou como ciência sem limites morais pode violar a dignidade humana.'],
    conclusao: 'Logo, o uso da estatística deve subordinar-se ao respeito à dignidade de cada pessoa.',
    nota: 'A Igreja ensina que a pesquisa científica deve servir à pessoa (CIC 2293–2295).',
  },
  objecoes: [
    { objecao: 'Se Fisher e Pearson eram eugenistas, suas ferramentas devem ser abandonadas.', tag: 'debate',
      resposta: 'A validade de um método matemático não depende das opiniões de quem o criou. O correto é usar as ferramentas, reconhecer a história e rejeitar os usos que ferem a dignidade humana. Confundir as duas coisas é falácia genética.' },
  ],
  aplicacao: `<p>Complete a linha do tempo da etapa com os marcos de Galton a Neyman e com Bayes, e escreva um parágrafo sobre a relação entre estatística e eugenia, distinguindo fato, método e juízo moral.</p>`,
  fonte: {
    obra: 'Ronald A. Fisher, Métodos estatísticos para pesquisadores (1925), introdução; Pio XI, Casti connubii (1930), sobre a eugenia', link: { url: 'https://www.vatican.va', rotulo: 'Documentos oficiais da Santa Sé' },
    orientacao: `<p>Em Fisher, observe o propósito dos métodos. Em Pio XI, os argumentos contra a esterilização eugênica.</p>`,
  },
  perguntas: [
    { p: 'O que é regressão à média?', r: 'A tendência de medidas extremas serem seguidas por medidas menos extremas.' },
    { p: 'O que é erro do tipo I?', r: 'Rejeitar a hipótese nula quando ela é verdadeira.' },
    { p: 'Que documento da Igreja condenou a eugenia?', r: 'A Casti connubii, de Pio XI (1930), entre outros.' },
  ],
  exercicios: [
    mc('A regressão à média foi descrita por:', ['Galton', 'Bayes', 'Neyman', 'Graunt'], 0, '1886.'),
    mc('O coeficiente de correlação varia entre:', ['0 e 1', '−1 e 1', '0 e 100', '−∞ e ∞'], 1, 'Pearson.'),
    mc('A teoria de Neyman e Pearson é de:', ['1763', '1900', '1925', '1933'], 3, 'Testes.'),
    mc('O ensaio de Bayes foi publicado por:', ['Laplace', 'Richard Price', 'Fisher', 'Galton'], 1, '1763.'),
    mc('Não rejeitar a nula falsa é erro do tipo:', ['I', 'II', 'III', 'Nenhum'], 1, 'Definição.'),
    disc('Complete a linha do tempo e escreva sobre estatística e eugenia, distinguindo fato, método e juízo moral.', ['Linha do tempo', 'Fato', 'Método', 'Juízo moral']),
  ],
  resumo: ['Galton (1886): regressão à média.', 'Pearson: correlação; qui-quadrado (1900).', 'Fisher (1925; 1935).', 'Neyman e Pearson (1933): erros I e II.', 'Bayes (1763); eugenia condenada (1930).'],
  referencias: [
    { texto: 'Ronald A. Fisher, Métodos estatísticos para pesquisadores (1925).' },
    { texto: 'Stephen M. Stigler, The History of Statistics (1986).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2292–2296.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler as fontes indicadas'],
  revisao: [['Galton', 'Regressão.'], ['Neyman–Pearson', 'Erros I e II.'], ['Bayes', 'Atualização.']],
  avancado: {
    texto: `<h3>Correlação não é causalidade</h3>
<p>Duas variáveis podem estar correlacionadas porque uma causa a outra, porque ambas dependem de uma terceira, ou por coincidência ${tag('fato')}. A venda de sorvetes e os afogamentos crescem juntos no verão: o calor é a causa comum ${tag('fato')}. Por isso a correlação é ponto de partida para investigar causas, não prova delas ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics, capítulos sobre correlação.' }],
    exercicios: [
      mc('Sorvetes e afogamentos crescem juntos por causa:', ['Do sorvete', 'Do calor (causa comum)', 'Dos afogamentos', 'Do acaso apenas'], 1, 'Confusão.'),
      mc('Correlação de 0 indica:', ['Causalidade', 'Ausência de associação linear', 'Associação perfeita', 'Erro'], 1, 'Linear.'),
      mc('Correlação de −0,9 indica associação:', ['Fraca', 'Forte e negativa', 'Nula', 'Positiva'], 1, 'Sinal.'),
      disc('Dê três exemplos de correlação sem causalidade direta e explique cada um.', ['Exemplo 1', 'Exemplo 2', 'Exemplo 3', 'Explicações'])],
  },
}),

avaliacao('es2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da estatística e da probabilidade e sobre os grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o problema dos pontos e o cálculo do valor esperado.</li><li>Releia sua linha do tempo e sua ficha de Laplace.</li></ul>`,
[
  disc('Trace a formação da estatística de Graunt a Neyman, com cinco marcos datados, incluindo um marco brasileiro, explicando a ideia central de cada um.', ['Marcos', 'Datas', 'Ideias', 'Brasil']),
  disc('Explique a lei dos grandes números e a regressão à média com um exemplo de cada, e mostre um erro comum de interpretação que cada uma ajuda a evitar.', ['Lei dos grandes números', 'Regressão à média', 'Exemplos', 'Erros evitados']),
]),
];
