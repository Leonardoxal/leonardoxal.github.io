// Estatística IV — inferência estatística (etapa 8 do percurso de Estatística).
// Probabilidade e distribuições; estimação e intervalos de confiança; testes de hipóteses; regressão linear.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'es4-1', titulo: 'Probabilidade e distribuições: binomial e normal', duracao: '150 min',
  aprendera: ['Aplicar as regras básicas da probabilidade', 'Calcular probabilidades binomiais simples', 'Usar a regra 68–95–99,7 da normal', 'Calcular e interpretar o escore z'],
  prereq: ['Estatística III (módulo ES3)'],
  explicacao: `
<h3>O problema</h3>
<p>Para tirar conclusões de amostras, precisamos saber como os resultados variam por acaso. As distribuições de probabilidade descrevem essa variação.</p>
<h3>Regras básicas</h3>
<p>A probabilidade vai de 0 a 1; a de um evento e a de seu complemento somam 1 ${tag('fato')}. Para eventos que não podem ocorrer juntos, somam-se as probabilidades; para eventos independentes, a probabilidade de ambos é o produto ${tag('fato')}.</p>
<h3>Binomial</h3>
<p>A distribuição binomial conta sucessos em n tentativas independentes com a mesma probabilidade p de sucesso ${tag('fato')}. Em 4 lances de moeda, a probabilidade de exatamente 2 caras é 6 × (1/2)<sup>4</sup> = 6/16 = 0,375, pois há 6 ordens possíveis ${tag('fato')}. A média de uma binomial é n × p ${tag('fato')}.</p>
<h3>Normal</h3>
<p>A distribuição normal é simétrica, em forma de sino, definida pela média e pelo desvio-padrão ${tag('fato')}. Cerca de 68% dos valores ficam a até 1 desvio-padrão da média, 95% a até 2 e 99,7% a até 3 ${tag('fato')}. Se alturas adultas têm média 170 cm e desvio-padrão 7 cm, cerca de 95% estão entre 156 e 184 cm ${tag('fato')}.</p>
<h3>Escore z</h3>
<p>O escore z indica quantos desvios-padrão um valor está acima ou abaixo da média: z = (valor − média) ÷ desvio-padrão ${tag('fato')}. Uma pessoa de 184 cm, nesse exemplo, tem z = 2 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Eventos independentes', 'Eventos em que a ocorrência de um não altera a chance do outro.'],
    ['Distribuição binomial', 'Número de sucessos em n tentativas independentes.'],
    ['Distribuição normal', 'Distribuição simétrica em forma de sino.'],
    ['Regra 68–95–99,7', 'Proporções a 1, 2 e 3 desvios-padrão da média na normal.'],
    ['Escore z', 'Distância à média em desvios-padrão.'],
  ],
  exemplos: `<p><strong>Notas padronizadas:</strong> João tirou 80 numa prova com média 70 e desvio-padrão 5 (z = 2); Maria tirou 85 noutra prova com média 80 e desvio-padrão 10 (z = 0,5). Embora a nota de Maria seja maior, o desempenho relativo de João foi bem mais destacado. O escore z permite comparar medidas de escalas diferentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> provas padronizadas usam escalas baseadas em escores z ${tag('fato')}. <strong>No Brasil:</strong> o ENEM usa a teoria de resposta ao item, que também produz notas em escala padronizada ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a normal aparece tanto', tag: 'argumento',
    premissas: ['Muitas medidas resultam da soma de muitas causas pequenas e independentes.', 'O teorema central do limite diz que tais somas tendem à normal.', 'Também médias de amostras tendem à normal, qualquer que seja a forma da população, se a amostra for grande.'],
    conclusao: 'Logo, a normal é uma boa aproximação em muitos fenômenos e, sobretudo, para médias amostrais.',
    nota: 'Nem tudo é normal: rendas, por exemplo, são fortemente assimétricas.',
  },
  objecoes: [
    { objecao: 'Tudo na natureza segue a curva normal.', tag: 'argumento',
      resposta: 'Muitas medidas são aproximadamente normais, mas outras não: rendas, tamanhos de cidades e tempos de espera têm distribuições assimétricas. Supor normalidade sem verificar pode levar a erros graves, sobretudo ao estimar eventos extremos.' },
  ],
  aplicacao: `<p>Com as alturas ou idades de um grupo, calcule média e desvio-padrão, verifique que porcentagem dos valores fica a até 1 e 2 desvios-padrão da média e compare com a regra 68–95.</p>`,
  fonte: {
    obra: 'David Freedman, Robert Pisani e Roger Purves, Statistics, capítulos sobre a curva normal', link: null,
    orientacao: `<p>Observe como os autores usam a normal para aproximar histogramas e quando ela falha.</p>`,
  },
  perguntas: [
    { p: 'Qual a probabilidade de exatamente 2 caras em 4 lances?', r: '6/16 = 0,375.' },
    { p: 'Que porcentagem fica a até 2 desvios-padrão da média na normal?', r: 'Cerca de 95%.' },
    { p: 'Como se calcula o escore z?', r: '(valor − média) ÷ desvio-padrão.' },
  ],
  exercicios: [
    mc('Probabilidade de duas caras em dois lances independentes:', ['1/2', '1/4', '1/8', '3/4'], 1, 'Produto.'),
    mc('Média de uma binomial com n = 20 e p = 0,3:', ['3', '6', '10', '14'], 1, 'n × p.'),
    mc('Média 170, desvio 7: cerca de 68% entre:', ['156 e 184', '163 e 177', '149 e 191', '170 e 177'], 1, '1 desvio.'),
    mc('Valor 184 com média 170 e desvio 7 tem z:', ['1', '2', '3', '14'], 1, '14 ÷ 7.'),
    mc('Distribuição tipicamente assimétrica:', ['Alturas', 'Erros de medida', 'Rendas', 'Médias amostrais grandes'], 2, 'Assimetria.'),
    disc('Verifique a regra 68–95 com dados reais de um grupo e comente o resultado.', ['Dados', 'Cálculos', 'Comparação', 'Interpretação']),
  ],
  resumo: ['Regras da soma e do produto.', 'Binomial: média n × p.', 'Normal: 68–95–99,7.', 'Escore z.', 'Nem tudo é normal.'],
  referencias: [
    { texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics.' },
    { texto: 'Blaise Pascal, Tratado do triângulo aritmético (1665).', livro: 'pascal-triangulo' },
    { texto: 'Stephen M. Stigler, The History of Statistics (1986).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a verificação da regra 68–95', 'Ler a fonte indicada'],
  revisao: [['n × p', 'Média binomial.'], ['68–95–99,7', 'Normal.'], ['z', 'Desvios da média.']],
  avancado: {
    texto: `<h3>Eventos raros e caudas pesadas</h3>
<p>Em distribuições de "caudas pesadas", valores extremos são muito mais frequentes do que a normal preveria ${tag('fato')}. Crises financeiras e catástrofes naturais mostraram os riscos de modelar com a normal o que tem caudas pesadas ${tag('interpretacao')}. Nassim Taleb popularizou o tema com a ideia de "cisne negro" (2007) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Nassim Nicholas Taleb, A lógica do cisne negro (2007).' }],
    exercicios: [
      mc('Em caudas pesadas, extremos são:', ['Mais raros que na normal', 'Mais frequentes que na normal', 'Impossíveis', 'Iguais'], 1, 'Definição.'),
      mc('A ideia de "cisne negro" foi popularizada por:', ['Taleb', 'Fisher', 'Galton', 'Huff'], 0, '2007.'),
      mc('Modelar crises com a normal tende a:', ['Superestimar extremos', 'Subestimar extremos', 'Acertar sempre', 'Nada'], 1, 'Interpretação.'),
      disc('Dê um exemplo de fenômeno com caudas pesadas e explique o risco de supor normalidade.', ['Exemplo', 'Distribuição', 'Risco', 'Prudência'])],
  },
}),

aula({
  id: 'es4-2', titulo: 'Estimação e intervalos de confiança: a margem de erro', duracao: '150 min',
  aprendera: ['Explicar a distribuição amostral', 'Calcular o erro-padrão de uma proporção', 'Construir um intervalo de 95% de confiança', 'Interpretar corretamente a margem de erro'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Uma pesquisa com 1.000 pessoas dá 50% para um candidato, "com margem de erro de 3 pontos". De onde vem esse número?</p>
<h3>Distribuição amostral</h3>
<p>Se repetíssemos a pesquisa com muitas amostras diferentes, a proporção obtida variaria de amostra para amostra; a distribuição desses resultados é a distribuição amostral ${tag('fato')}. Para amostras grandes, ela é aproximadamente normal, centrada na proporção verdadeira ${tag('fato')}.</p>
<h3>Erro-padrão</h3>
<p>O desvio-padrão da distribuição amostral chama-se erro-padrão; para uma proporção p numa amostra aleatória de tamanho n, é a raiz de p(1 − p)/n ${tag('fato')}. Com p = 0,5 e n = 1.000: raiz de 0,25/1.000 ≈ 0,0158 ${tag('fato')}.</p>
<h3>Intervalo de 95%</h3>
<p>O intervalo de 95% de confiança é a estimativa mais ou menos cerca de 1,96 erro-padrão ${tag('fato')}. No exemplo: 1,96 × 0,0158 ≈ 0,031, ou cerca de 3 pontos percentuais — daí a margem de erro ${tag('fato')}. Para reduzir a margem pela metade, é preciso quadruplicar a amostra ${tag('fato')}.</p>
<h3>Interpretação</h3>
<p>A margem cobre só o erro de amostragem aleatória; não cobre vieses de seleção, perguntas mal feitas ou mudanças de opinião ${tag('fato')}. Quando dois candidatos estão a 2 pontos de distância com margem de 3, a pesquisa não permite dizer quem lidera ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Distribuição amostral', 'Distribuição de uma estatística em amostras repetidas.'],
    ['Erro-padrão', 'Desvio-padrão da distribuição amostral.'],
    ['Intervalo de confiança', 'Faixa construída por um método que acerta numa proporção dada das amostras.'],
    ['Margem de erro', 'Metade da amplitude do intervalo de confiança.'],
    ['Nível de confiança', 'Proporção de acertos do método (por exemplo, 95%).'],
  ],
  exemplos: `<p><strong>Quadruplicar a amostra:</strong> com n = 1.000 e p = 0,5, a margem é cerca de 3,1 pontos. Com n = 4.000, o erro-padrão cai pela metade (raiz de 4 = 2), e a margem fica em cerca de 1,5 ponto. Por isso pesquisas muito precisas são muito caras.</p>`,
  contexto: `<p><strong>No mundo:</strong> pesquisas nacionais de opinião costumam usar amostras de 1.000 a 3.000 pessoas ${tag('fato')}. <strong>No Brasil:</strong> a margem de erro e o nível de confiança devem constar no registro das pesquisas eleitorais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o tamanho da população quase não importa', tag: 'argumento',
    premissas: ['O erro-padrão de uma proporção depende de p e de n, o tamanho da amostra.', 'Quando a amostra é pequena em relação à população, o tamanho da população quase não entra na fórmula.', 'Uma colherada de sopa bem mexida informa o sabor, seja a panela pequena ou grande.'],
    conclusao: 'Logo, uma amostra de 2.000 pessoas serve tanto para uma cidade grande quanto para um país, se bem sorteada.',
    nota: 'O que importa é o sorteio e o tamanho da amostra, não a fração da população.',
  },
  objecoes: [
    { objecao: 'Um intervalo de 95% significa que há 95% de chance de o valor verdadeiro estar nele.', tag: 'debate',
      resposta: 'Na interpretação frequentista, o valor verdadeiro é fixo; o que tem 95% de acerto é o método, em amostras repetidas. A frase do enunciado corresponde ao intervalo de credibilidade bayesiano. Na prática, os dois coincidem muitas vezes, mas o significado é diferente.' },
  ],
  aplicacao: `<p>Calcule a margem de erro de 95% para p = 0,5 com n = 400, 1.000 e 2.500, e analise uma pesquisa eleitoral recente: os candidatos estão empatados tecnicamente?</p>`,
  fonte: {
    obra: 'Registro de uma pesquisa eleitoral no sistema da Justiça Eleitoral (PesqEle)', link: { url: 'https://www.tse.jus.br', rotulo: 'Tribunal Superior Eleitoral' },
    orientacao: `<p>Localize amostra, margem de erro, nível de confiança e metodologia declarados.</p>`,
  },
  perguntas: [
    { p: 'Qual o erro-padrão de uma proporção?', r: 'A raiz de p(1 − p)/n.' },
    { p: 'Qual a margem de 95% para p = 0,5 e n = 1.000?', r: 'Cerca de 3 pontos percentuais.' },
    { p: 'O que a margem de erro não cobre?', r: 'Vieses de seleção, perguntas mal feitas e mudanças de opinião.' },
  ],
  exercicios: [
    mc('Para reduzir a margem à metade, a amostra deve:', ['Dobrar', 'Triplicar', 'Quadruplicar', 'Crescer 50%'], 2, 'Raiz.'),
    mc('O multiplicador aproximado para 95% de confiança é:', ['1', '1,64', '1,96', '3'], 2, 'Normal.'),
    mc('Com p = 0,5 e n = 400, o erro-padrão é:', ['0,025', '0,05', '0,0158', '0,1'], 0, 'Raiz de 0,25/400.'),
    mc('A margem de erro cobre:', ['Todo tipo de erro', 'Só o erro de amostragem aleatória', 'Vieses', 'Mentiras'], 1, 'Limite.'),
    mc('Candidatos com 2 pontos de diferença e margem de 3:', ['Liderança clara', 'Empate técnico', 'Erro da pesquisa', 'Vitória certa'], 1, 'Interpretação.'),
    disc('Calcule margens para três tamanhos de amostra e analise uma pesquisa eleitoral.', ['Cálculos', 'Pesquisa', 'Empate técnico', 'Limites']),
  ],
  resumo: ['Distribuição amostral.', 'Erro-padrão: raiz de p(1 − p)/n.', 'IC 95%: ± 1,96 EP.', 'n = 1.000 → ~3 pontos.', 'Margem só cobre o acaso.'],
  referencias: [
    { texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics.' },
    { texto: 'Jerzy Neyman, artigo sobre intervalos de confiança (1937).' },
    { texto: 'Tribunal Superior Eleitoral, normas sobre registro de pesquisas eleitorais.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os cálculos e a análise', 'Consultar a fonte indicada'],
  revisao: [['EP', 'Raiz de p(1 − p)/n.'], ['1,96', '95%.'], ['×4', 'Margem à metade.']],
  avancado: {
    texto: `<h3>Intervalo para a média</h3>
<p>Para a média de uma amostra, o erro-padrão é o desvio-padrão dividido pela raiz de n ${tag('fato')}. Com amostras pequenas e desvio-padrão estimado, usa-se a distribuição t de Student, publicada por William Gosset em 1908 sob o pseudônimo "Student", quando trabalhava na cervejaria Guinness ${tag('fato')}.</p>`,
    leituras: [{ texto: '"Student" (William S. Gosset), "The probable error of a mean" (1908).' }],
    exercicios: [
      mc('Erro-padrão da média = desvio-padrão ÷:', ['n', 'Raiz de n', 'n²', '2'], 1, 'Fórmula.'),
      mc('A distribuição t foi publicada por:', ['Gosset', 'Fisher', 'Neyman', 'Galton'], 0, '1908.'),
      mc('Gosset trabalhava na:', ['Universidade de Oxford', 'Cervejaria Guinness', 'Royal Society', 'Igreja'], 1, 'Pseudônimo Student.'),
      disc('Calcule um intervalo aproximado de 95% para a média de um conjunto de dados que você coletou.', ['Média', 'Desvio', 'Erro-padrão', 'Intervalo'])],
  },
}),

aula({
  id: 'es4-3', titulo: 'Testes de hipóteses: da pergunta à decisão', duracao: '150 min',
  aprendera: ['Formular hipóteses nula e alternativa', 'Calcular um teste z simples', 'Interpretar o resultado com tamanho de efeito', 'Relacionar testes e intervalos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Uma moeda deu 60 caras em 100 lances. Ela é viciada ou foi acaso?</p>
<h3>Os passos</h3>
<p>1) Formular a hipótese nula (a moeda é honesta, p = 0,5) e a alternativa (p ≠ 0,5). 2) Escolher o nível de significância antes de ver os dados, por exemplo 5%. 3) Calcular a estatística de teste. 4) Obter o valor-p. 5) Decidir e interpretar ${tag('fato')}.</p>
<h3>O cálculo</h3>
<p>Sob a nula, o número de caras em 100 lances tem média 50 e desvio-padrão raiz de 100 × 0,5 × 0,5 = 5 ${tag('fato')}. O escore é z = (60 − 50) ÷ 5 = 2 ${tag('fato')}. A probabilidade de um |z| ≥ 2 sob a normal é cerca de 0,046 ${tag('fato')}. Como 0,046 < 0,05, rejeita-se a nula ao nível de 5% ${tag('fato')}.</p>
<h3>Interpretação</h3>
<p>Rejeitar a nula não prova que a moeda é viciada; diz que 60 caras seriam pouco comuns se fosse honesta ${tag('fato')}. É preciso olhar também o tamanho do efeito — aqui, uma proporção estimada de 0,6 — e seu intervalo ${tag('interpretacao')}. Não rejeitar a nula não prova que ela é verdadeira: pode faltar poder ${tag('fato')}.</p>
<h3>Testes e intervalos</h3>
<p>Um teste bilateral de 5% rejeita a nula exatamente quando o valor da nula fica fora do intervalo de 95% de confiança ${tag('fato')}. O intervalo informa mais, porque mostra os valores compatíveis com os dados ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Hipótese nula', 'Hipótese de ausência de efeito ou diferença, que o teste põe à prova.'],
    ['Hipótese alternativa', 'Hipótese de que há efeito ou diferença.'],
    ['Nível de significância', 'Limiar escolhido antes do teste (por exemplo, 5%).'],
    ['Estatística de teste', 'Número calculado dos dados para avaliar a nula.'],
    ['Teste bilateral', 'Teste em que interessam desvios nos dois sentidos.'],
  ],
  exemplos: `<p><strong>Comparando duas turmas:</strong> a turma A, com novo método, teve média 7,2; a turma B, 6,8. Antes de comemorar, pergunta-se: a diferença de 0,4 é grande em relação à variação esperada por acaso? Se o intervalo de 95% para a diferença for de −0,3 a 1,1, os dados são compatíveis com nenhum efeito — e também com um efeito razoável. É preciso mais dados.</p>`,
  contexto: `<p><strong>No mundo:</strong> agências reguladoras exigem testes estatísticos pré-especificados para aprovar medicamentos ${tag('fato')}. <strong>No Brasil:</strong> a Anvisa avalia ensaios clínicos no registro de medicamentos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que fixar o nível antes de ver os dados', tag: 'argumento',
    premissas: ['Se o limiar é escolhido depois de ver o resultado, pode ser ajustado para dar a conclusão desejada.', 'Isso torna o teste uma justificativa a posteriori, não uma prova.', 'Fixar antes protege contra esse viés.'],
    conclusao: 'Logo, as regras do teste devem ser decididas antes da análise.',
    nota: 'É o princípio do pré-registro, aplicado a um único teste.',
  },
  objecoes: [
    { objecao: 'Se p = 0,06, o resultado não vale nada; se p = 0,04, está provado.', tag: 'argumento',
      resposta: 'A diferença entre 0,04 e 0,06 é pequena e não marca a fronteira entre verdade e falsidade. O correto é relatar o valor-p, o tamanho do efeito e o intervalo, e interpretar o conjunto com a qualidade do estudo.' },
  ],
  aplicacao: `<p>Lance uma moeda ou um dado muitas vezes (ou use dados de uma pesquisa), formule hipóteses, faça um teste z simples ao nível de 5% e relate valor-p, tamanho do efeito e intervalo.</p>`,
  fonte: {
    obra: 'Ronald A. Fisher, O planejamento de experimentos (1935), cap. II', link: null,
    orientacao: `<p>Compare o raciocínio da senhora que provava chá com os passos do teste moderno.</p>`,
  },
  perguntas: [
    { p: 'Qual o z para 60 caras em 100 lances de moeda honesta?', r: '2.' },
    { p: 'Rejeitar a nula prova a alternativa?', r: 'Não; indica que os dados seriam pouco comuns sob a nula.' },
    { p: 'Qual a relação entre teste de 5% e intervalo de 95%?', r: 'Rejeita-se a nula quando seu valor fica fora do intervalo.' },
  ],
  exercicios: [
    mc('Desvio-padrão do número de caras em 100 lances honestos:', ['2,5', '5', '10', '25'], 1, 'Raiz de 25.'),
    mc('O valor-p bilateral para z = 2 é cerca de:', ['0,01', '0,046', '0,16', '0,5'], 1, 'Normal.'),
    mc('O nível de significância deve ser escolhido:', ['Depois dos dados', 'Antes dos dados', 'Nunca', 'Pelo leitor'], 1, 'Pré-registro.'),
    mc('Não rejeitar a nula significa:', ['Nula provada', 'Dados compatíveis com a nula', 'Erro', 'Efeito grande'], 1, 'Cautela.'),
    mc('O que informa mais sobre o efeito:', ['Só o valor-p', 'O intervalo de confiança', 'O título', 'A amostra'], 1, 'Valores compatíveis.'),
    disc('Faça um teste z com dados próprios e relate valor-p, efeito e intervalo.', ['Hipóteses', 'Cálculo', 'Resultado', 'Interpretação']),
  ],
  resumo: ['Hipóteses, nível, estatística, valor-p, decisão.', '60 caras em 100: z = 2, p ≈ 0,046.', 'Rejeitar ≠ provar.', 'Tamanho do efeito.', 'Teste ↔ intervalo.'],
  referencias: [
    { texto: 'Ronald A. Fisher, O planejamento de experimentos (1935).' },
    { texto: 'Jerzy Neyman e Egon Pearson, artigo sobre testes eficientes de hipóteses (1933).' },
    { texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o teste com dados próprios', 'Ler a fonte indicada'],
  revisao: [['z = 2', 'p ≈ 0,046.'], ['Antes', 'Fixar o nível.'], ['IC', 'Informa mais.']],
  avancado: {
    texto: `<h3>O teste qui-quadrado</h3>
<p>O teste qui-quadrado de Pearson compara frequências observadas com as esperadas sob a nula: soma-se (observado − esperado)² ÷ esperado em cada categoria ${tag('fato')}. Num dado lançado 60 vezes, espera-se 10 de cada face; grandes desvios em conjunto indicam dado viciado ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Karl Pearson, artigo sobre o critério qui-quadrado (1900).' }],
    exercicios: [
      mc('Num dado lançado 60 vezes, o esperado por face é:', ['6', '10', '12', '60'], 1, '60 ÷ 6.'),
      mc('O qui-quadrado soma (O − E)² dividido por:', ['O', 'E', 'n', '2'], 1, 'Fórmula.'),
      mc('O teste qui-quadrado é de:', ['Pearson (1900)', 'Fisher (1935)', 'Bayes (1763)', 'Graunt (1662)'], 0, 'Frequências.'),
      disc('Lance um dado 60 vezes, calcule o qui-quadrado e comente se há indício de vício.', ['Frequências', 'Cálculo', 'Comparação', 'Conclusão'])],
  },
}),

aula({
  id: 'es4-4', titulo: 'Regressão linear: relação entre variáveis e previsão', duracao: '150 min',
  aprendera: ['Calcular a reta de mínimos quadrados em dados pequenos', 'Interpretar inclinação e intercepto', 'Interpretar o R²', 'Reconhecer os limites da regressão'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Mais horas de estudo, notas maiores? Quanto, em média? A regressão linear responde a perguntas assim.</p>
<h3>A reta de mínimos quadrados</h3>
<p>A regressão linear ajusta a reta ŷ = a + b·x que minimiza a soma dos quadrados das distâncias verticais entre os pontos e a reta ${tag('fato')}. A inclinação é b = Σ(x − x̄)(y − ȳ) ÷ Σ(x − x̄)², e o intercepto é a = ȳ − b·x̄ ${tag('fato')}.</p>
<h3>Um cálculo</h3>
<p>Com x = 1, 2, 3, 4, 5 e y = 2, 4, 5, 4, 5: x̄ = 3 e ȳ = 4 ${tag('fato')}. Os produtos dos desvios somam 6 e os quadrados dos desvios de x somam 10; logo b = 0,6 e a = 4 − 0,6 × 3 = 2,2 ${tag('fato')}. A reta é ŷ = 2,2 + 0,6x: cada unidade a mais de x associa-se, em média, a 0,6 a mais de y ${tag('fato')}.</p>
<h3>R²</h3>
<p>O coeficiente de determinação R² indica a fração da variação de y explicada pela reta; vai de 0 a 1 ${tag('fato')}. Na regressão simples, é o quadrado do coeficiente de correlação ${tag('fato')}.</p>
<h3>Limites</h3>
<p>A regressão descreve associação, não prova causa ${tag('fato')}. Extrapolar para fora da faixa observada é arriscado ${tag('fato')}. Valores extremos podem puxar a reta, e relações curvas não são bem descritas por retas ${tag('fato')}. Sempre olhe o gráfico de dispersão antes de calcular ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Regressão linear', 'Ajuste de uma reta que descreve a relação média entre duas variáveis.'],
    ['Mínimos quadrados', 'Critério que minimiza a soma dos quadrados dos resíduos.'],
    ['Inclinação', 'Variação média de y para cada unidade de x.'],
    ['Resíduo', 'Diferença entre o valor observado e o previsto pela reta.'],
    ['R²', 'Fração da variação de y explicada pelo modelo.'],
  ],
  exemplos: `<p><strong>O quarteto de Anscombe:</strong> em 1973, Francis Anscombe construiu quatro conjuntos de dados com quase as mesmas médias, variâncias, correlação e reta de regressão, mas gráficos completamente diferentes — um curvo, outro com um único ponto extremo. A lição: calcule, mas olhe os dados.</p>`,
  contexto: `<p><strong>No mundo:</strong> a regressão é a ferramenta mais usada em economia, medicina e ciências sociais ${tag('fato')}. <strong>No Brasil:</strong> estudos do IPEA usam regressões para avaliar políticas públicas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que extrapolar é perigoso', tag: 'argumento',
    premissas: ['A reta é ajustada na faixa de x observada.', 'Fora dela, nada garante que a relação continue a mesma.', 'Muitas relações mudam de forma em valores extremos (saturação, limites físicos).'],
    conclusao: 'Logo, previsões fora da faixa observada devem ser tratadas com grande cautela.',
    nota: 'Uma reta de horas de estudo × nota não prevê nota 15 para 30 horas.',
  },
  objecoes: [
    { objecao: 'Um R² alto prova que x causa y.', tag: 'argumento',
      resposta: 'O R² mede o ajuste da reta, não a causalidade. Duas séries que crescem com o tempo podem ter R² altíssimo sem relação causal. A causalidade exige desenho de estudo e raciocínio sobre mecanismos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: com um conjunto de dados públicos (por exemplo, gasto por aluno e IDEB de municípios, ou renda e escolaridade), calcule a regressão simples e um intervalo de confiança, interpretando com cautela.</p>`,
  fonte: {
    obra: 'Francis J. Anscombe, "Graphs in statistical analysis", The American Statistician (1973)', link: null,
    orientacao: `<p>Desenhe os quatro gráficos do quarteto e compare-os com as estatísticas idênticas.</p>`,
  },
  perguntas: [
    { p: 'Qual a reta para x = 1…5 e y = 2, 4, 5, 4, 5?', r: 'ŷ = 2,2 + 0,6x.' },
    { p: 'O que significa uma inclinação de 0,6?', r: 'Que cada unidade a mais de x associa-se, em média, a 0,6 a mais de y.' },
    { p: 'O que ensina o quarteto de Anscombe?', r: 'Que estatísticas iguais podem esconder dados muito diferentes; é preciso olhar o gráfico.' },
  ],
  exercicios: [
    mc('Na reta ŷ = 2,2 + 0,6x, para x = 10, ŷ =', ['6,2', '8,2', '6', '2,8'], 1, '2,2 + 6.'),
    mc('O intercepto é a = ȳ − b·x̄. Com ȳ = 4, b = 0,6 e x̄ = 3:', ['1,8', '2,2', '4', '3,4'], 1, '4 − 1,8.'),
    mc('Correlação de 0,8 na regressão simples dá R²:', ['0,8', '0,64', '0,4', '1,6'], 1, 'Quadrado.'),
    mc('Prever fora da faixa observada é:', ['Interpolação segura', 'Extrapolação arriscada', 'Proibido', 'Sempre exato'], 1, 'Cautela.'),
    mc('O quarteto de Anscombe é de:', ['1908', '1925', '1973', '2016'], 2, 'Gráficos.'),
    disc('Faça a regressão com dados públicos e interprete inclinação, R² e limites.', ['Dados', 'Cálculos', 'Interpretação', 'Limites']),
  ],
  resumo: ['ŷ = a + b·x por mínimos quadrados.', 'b = Σ(x − x̄)(y − ȳ) ÷ Σ(x − x̄)².', 'R² = fração explicada.', 'Associação ≠ causa.', 'Anscombe: olhe o gráfico.'],
  referencias: [
    { texto: 'Francis J. Anscombe, "Graphs in statistical analysis" (1973).' },
    { texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics, capítulos sobre regressão.' },
    { texto: 'Francis Galton, "Regression towards mediocrity in hereditary stature" (1886).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise de regressão', 'Ler a fonte indicada'],
  revisao: [['b', 'Inclinação.'], ['R²', 'Fração explicada.'], ['Anscombe', 'Olhe os dados.']],
  avancado: {
    texto: `<h3>Regressão múltipla e controle</h3>
<p>Na regressão múltipla, várias variáveis explicativas entram no modelo; o coeficiente de cada uma estima sua associação com y mantendo as outras constantes ${tag('fato')}. Isso permite "controlar" confundidores observados, mas não os não observados ${tag('fato')}. Incluir variáveis em excesso ou inadequadas também pode distorcer resultados ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'David Freedman, Statistical Models: Theory and Practice (2005).' }],
    exercicios: [
      mc('Na regressão múltipla, o coeficiente estima a associação mantendo:', ['As outras variáveis constantes', 'Nada', 'Só a média', 'O R² fixo'], 0, 'Controle.'),
      mc('A regressão múltipla controla confundidores:', ['Observados', 'Não observados', 'Todos', 'Nenhum'], 0, 'Limite.'),
      mc('Incluir variáveis inadequadas pode:', ['Distorcer resultados', 'Sempre melhorar', 'Não ter efeito', 'Provar causa'], 0, 'Cautela.'),
      disc('Proponha uma regressão múltipla para explicar o IDEB municipal e discuta que confundidores ficariam de fora.', ['Variáveis', 'Hipóteses', 'Confundidores', 'Limites'])],
  },
}),

avaliacao('es4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre distribuições, intervalos de confiança, testes de hipóteses e regressão, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça à mão o cálculo da margem de erro, do teste z e da reta.</li><li>Releia sua análise com dados públicos.</li></ul>`,
[
  disc('Uma pesquisa com 1.600 eleitores dá 52% ao candidato A. Calcule a margem de erro de 95%, construa o intervalo e diga se é possível afirmar que A tem maioria, explicando os limites da conclusão.', ['Erro-padrão', 'Intervalo', 'Conclusão', 'Limites']),
  disc('Com cinco pares de dados à sua escolha, calcule a reta de regressão, interprete a inclinação e discuta se a relação pode ser causal.', ['Cálculos', 'Inclinação', 'Causalidade', 'Cautelas']),
]),
];
