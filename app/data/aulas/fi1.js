// Física I — o que é física, grandezas e unidades, medida e modelos (etapas 1 a 3 do percurso de Física).
// Objeto e método da física; Sistema Internacional e ordens de grandeza; medida, erro e incerteza;
// gráficos, proporcionalidade e análise dimensional.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'fi1-1', titulo: 'O que é física: natureza, medida e modelo', duracao: '150 min',
  aprendera: ['Explicar o objeto e o método da física', 'Distinguir física e filosofia da natureza', 'Distinguir lei, modelo e teoria', 'Reconhecer os limites de validade de um modelo'],
  prereq: ['Degrau 0: método de estudo', 'Filosofia da natureza (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que uma pedra cai? Aristóteles respondia falando da natureza da pedra; Galileu, medindo quanto ela cai a cada segundo. As duas respostas falam do mesmo fenômeno, mas fazem perguntas diferentes.</p>
<h3>Objeto e método</h3>
<p>A física estuda a matéria, o movimento, a energia e suas interações por meio da medida e da matemática ${tag('fato')}. Seu método une observação, experimento controlado, formulação de modelos matemáticos e teste de suas previsões ${tag('fato')}.</p>
<h3>Física e filosofia da natureza</h3>
<p>A filosofia da natureza pergunta o que são o movimento, o tempo, a causa; a física mede como os corpos se movem e prevê seu comportamento ${tag('argumento')}. Pierre Duhem defendeu que a teoria física é um sistema de proposições matemáticas que representa as leis experimentais, sem pretender explicar a essência das coisas ${tag('interpretacao')}. Essa distinção evita tanto confundir física com metafísica quanto negar que a física conheça algo real ${tag('interpretacao')}.</p>
<h3>Lei, modelo e teoria</h3>
<p>Uma lei física descreve uma regularidade expressa matematicamente, como a lei da queda dos corpos ${tag('fato')}. Um modelo é uma representação simplificada de um sistema — por exemplo, tratar um planeta como um ponto ${tag('fato')}. Uma teoria reúne leis e modelos num sistema explicativo, como a mecânica newtoniana ${tag('fato')}.</p>
<h3>Limites de validade</h3>
<p>Todo modelo vale num domínio: a mecânica de Newton funciona muito bem para velocidades pequenas em relação à da luz e objetos não muito pequenos, mas precisa ser corrigida pela relatividade e pela mecânica quântica fora desse domínio ${tag('fato')}.</p>`,
  vocabulario: [
    ['Física', 'Ciência da matéria, do movimento, da energia e de suas interações por medida e matemática.'],
    ['Lei física', 'Regularidade da natureza expressa matematicamente.'],
    ['Modelo', 'Representação simplificada de um sistema físico.'],
    ['Teoria', 'Sistema de leis e modelos com poder explicativo e preditivo.'],
    ['Domínio de validade', 'Faixa de condições em que um modelo funciona bem.'],
  ],
  exemplos: `<p><strong>Um modelo simples:</strong> para calcular quanto tempo uma bola leva para cair de um prédio, despreza-se a resistência do ar. Para uma bola de ferro caindo de 10 metros, o erro é pequeno; para uma pena, o modelo falha. O mesmo modelo é bom ou ruim conforme o caso — e o físico precisa saber quando usá-lo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a palavra "física" vem do grego <em>physis</em>, natureza; a Física de Aristóteles foi por séculos o tratado de referência sobre o movimento ${tag('fato')}. <strong>No Brasil:</strong> o Centro Brasileiro de Pesquisas Físicas (CBPF), no Rio de Janeiro, foi fundado em 1949 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a física precisa de matemática', tag: 'argumento',
    premissas: ['A física quer prever quanto, quando e onde, e não só o quê.', 'Respostas quantitativas exigem medidas e relações entre números.', 'A matemática é a linguagem das relações quantitativas.'],
    conclusao: 'Logo, a física moderna é inseparável da matemática.',
    nota: 'Galileu escreveu que o livro da natureza está escrito em linguagem matemática (O ensaiador, 1623).',
  },
  objecoes: [
    { objecao: 'Se a física explica tudo pela matéria, não há lugar para a filosofia nem para Deus.', tag: 'debate',
      resposta: 'A física descreve como a matéria se comporta, mas não responde por que existe algo, nem o que fundamenta as próprias leis, nem questões de sentido e valor. Muitos físicos foram crentes, e a Igreja ensina que não há contradição real entre fé e ciência (CIC 159). O conflito surge quando uma das partes ultrapassa seu domínio.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: em cinco afirmações sobre a natureza (por exemplo, "a energia se conserva", "o átomo é como um sistema solar", "o universo tem uma causa"), distinga lei física, modelo e tese filosófica.</p>`,
  fonte: {
    obra: 'Pierre Duhem, A teoria física: seu objeto e sua estrutura (1906), primeira parte', link: null,
    orientacao: `<p>Identifique a distinção entre explicar e representar, e a crítica de Duhem às teorias que pretendem revelar a essência da matéria.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre lei e modelo?', r: 'A lei descreve uma regularidade; o modelo é uma representação simplificada de um sistema.' },
    { p: 'O que é domínio de validade?', r: 'A faixa de condições em que um modelo funciona bem.' },
    { p: 'O que a física não responde por si mesma?', r: 'Por que existe algo, o fundamento das leis e questões de sentido e valor.' },
  ],
  exercicios: [
    mc('"Física" vem do grego physis, que significa:', ['Número', 'Natureza', 'Movimento', 'Força'], 1, 'Etimologia.'),
    mc('Tratar um planeta como um ponto é exemplo de:', ['Lei', 'Modelo', 'Dogma', 'Medida'], 1, 'Simplificação.'),
    mc('A mecânica de Newton precisa de correção para:', ['Velocidades pequenas', 'Velocidades próximas à da luz', 'Objetos do cotidiano', 'Nenhum caso'], 1, 'Relatividade.'),
    mc('O CBPF foi fundado em:', ['1827', '1934', '1949', '1988'], 2, 'Rio de Janeiro.'),
    mc('A tese de que não há contradição real entre fé e ciência está no CIC:', ['159', '1883', '2229', '2402'], 0, 'Doutrina.'),
    disc('Distinga lei física, modelo e tese filosófica em cinco afirmações sobre a natureza.', ['Afirmações', 'Classificação', 'Justificativa', 'Limites']),
  ],
  resumo: ['Física: matéria, movimento, energia, por medida e matemática.', 'Lei, modelo, teoria.', 'Domínio de validade.', 'Física ≠ filosofia da natureza.', 'CIC 159: fé e ciência.'],
  referencias: [
    { texto: 'Pierre Duhem, A teoria física: seu objeto e sua estrutura (1906).' },
    { texto: 'Aristóteles, Física, livros I e II.', livro: 'aristoteles-fisica' },
    { texto: 'Catecismo da Igreja Católica (1992), § 159.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação das afirmações', 'Ler a fonte indicada'],
  revisao: [['Modelo', 'Simplificação.'], ['Domínio', 'Onde vale.'], ['CIC 159', 'Fé e ciência.']],
  avancado: {
    texto: `<h3>A tese de Duhem</h3>
<p>Duhem observou que um experimento nunca testa uma hipótese isolada, mas um conjunto de hipóteses (sobre os instrumentos, as condições, as leis auxiliares); se a previsão falha, não se sabe com certeza qual hipótese está errada ${tag('fato')}. Essa tese, depois ampliada por Quine, é central na filosofia da ciência ${tag('fato')}. Duhem, católico e historiador da ciência, também mostrou a importância da física medieval ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Pierre Duhem, A teoria física: seu objeto e sua estrutura (1906), segunda parte.' }],
    exercicios: [
      mc('Segundo Duhem, um experimento testa:', ['Uma hipótese isolada', 'Um conjunto de hipóteses', 'Nenhuma hipótese', 'Só a matemática'], 1, 'Holismo.'),
      mc('A tese foi depois ampliada por:', ['Quine', 'Newton', 'Aristóteles', 'Galileu'], 0, 'Duhem–Quine.'),
      mc('Duhem também estudou a história da física:', ['Medieval', 'Chinesa', 'Do século XXI', 'Nenhuma'], 0, 'Historiador.'),
      disc('Dê um exemplo de experimento cuja falha poderia ser atribuída a mais de uma hipótese.', ['Experimento', 'Hipóteses', 'Ambiguidade', 'Como decidir'])],
  },
}),

aula({
  id: 'fi1-2', titulo: 'Grandezas e unidades: Sistema Internacional e ordens de grandeza', duracao: '150 min',
  aprendera: ['Conhecer as sete unidades de base do SI', 'Converter unidades com segurança', 'Usar notação científica', 'Estimar ordens de grandeza'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Uma sonda espacial americana foi perdida em 1999 porque uma equipe usou unidades inglesas e outra, métricas ${tag('fato')}. Unidades não são detalhe: são parte da medida.</p>
<h3>O Sistema Internacional</h3>
<p>O SI tem sete unidades de base: metro (comprimento), quilograma (massa), segundo (tempo), ampere (corrente elétrica), kelvin (temperatura), mol (quantidade de matéria) e candela (intensidade luminosa) ${tag('fato')}. Desde 2019, todas são definidas a partir de constantes da natureza, como a velocidade da luz e a constante de Planck ${tag('fato')}. No Brasil, o INMETRO é responsável pela metrologia oficial ${tag('fato')}.</p>
<h3>Unidades derivadas</h3>
<p>Outras unidades derivam das de base: newton (força, kg·m/s²), joule (energia, N·m), watt (potência, J/s) ${tag('fato')}.</p>
<h3>Conversões</h3>
<p>Para converter km/h em m/s, divide-se por 3,6, porque 1 km/h = 1.000 m ÷ 3.600 s ${tag('fato')}. Assim, 72 km/h = 20 m/s ${tag('fato')}.</p>
<h3>Notação científica e ordens de grandeza</h3>
<p>Na notação científica, um número é escrito como a × 10<sup>n</sup>, com 1 ≤ a < 10: a distância Terra–Sol, cerca de 150 milhões de km, é 1,5 × 10<sup>11</sup> m ${tag('fato')}. A ordem de grandeza é a potência de 10 mais próxima; estimá-la permite checar se um resultado faz sentido ${tag('fato')}.</p>`,
  vocabulario: [
    ['SI', 'Sistema Internacional de Unidades.'],
    ['Unidade de base', 'Uma das sete unidades fundamentais do SI.'],
    ['Unidade derivada', 'Unidade formada pela combinação das de base.'],
    ['Notação científica', 'Escrita a × 10ⁿ, com 1 ≤ a < 10.'],
    ['Ordem de grandeza', 'Potência de 10 mais próxima de um valor.'],
  ],
  exemplos: `<p><strong>Estimativa de Fermi:</strong> quantas batidas o coração dá numa vida? Cerca de 70 por minuto × 60 minutos × 24 horas × 365 dias × 75 anos ≈ 2,8 × 10<sup>9</sup>. A ordem de grandeza é 10<sup>9</sup> — alguns bilhões. Sem dados precisos, a estimativa já diz muito.</p>`,
  contexto: `<p><strong>No mundo:</strong> o sistema métrico nasceu na França revolucionária, nos anos 1790 ${tag('fato')}. <strong>No Brasil:</strong> o sistema métrico decimal foi adotado oficialmente no Império, em 1862 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que definir unidades por constantes da natureza', tag: 'argumento',
    premissas: ['Padrões materiais (como um cilindro de metal) podem mudar com o tempo e só existem num lugar.', 'Constantes da natureza são as mesmas em qualquer lugar e tempo.', 'Definir unidades por constantes torna a medida estável e reproduzível em qualquer laboratório.'],
    conclusao: 'Logo, a redefinição de 2019 tornou o SI mais estável e universal.',
    nota: 'O quilograma foi, até 2019, definido por um cilindro guardado perto de Paris.',
  },
  objecoes: [
    { objecao: 'Unidades são convenções; portanto a física é arbitrária.', tag: 'argumento',
      resposta: 'A escolha da unidade é convencional, mas a relação entre grandezas não: a distância entre duas cidades é a mesma em metros ou em milhas, só muda o número. As leis físicas valem em qualquer sistema coerente de unidades.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: converta unidades e estime ordens de grandeza em dez situações cotidianas (velocidade de um carro em m/s, energia de um banho, número de grãos de arroz num quilo, etc.).</p>`,
  fonte: {
    obra: 'INMETRO, O Sistema Internacional de Unidades (tradução oficial do Bureau Internacional de Pesos e Medidas)', link: { url: 'https://www.gov.br/inmetro', rotulo: 'INMETRO' },
    orientacao: `<p>Localize a tabela das sete unidades de base e as constantes que as definem desde 2019.</p>`,
  },
  perguntas: [
    { p: 'Quais são as sete unidades de base do SI?', r: 'Metro, quilograma, segundo, ampere, kelvin, mol e candela.' },
    { p: 'Quanto é 72 km/h em m/s?', r: '20 m/s.' },
    { p: 'Como se escreve 150 milhões de km em metros, em notação científica?', r: '1,5 × 10¹¹ m.' },
  ],
  exercicios: [
    mc('A unidade de força no SI é o:', ['Joule', 'Newton', 'Watt', 'Pascal'], 1, 'kg·m/s².'),
    mc('108 km/h equivalem a:', ['20 m/s', '30 m/s', '36 m/s', '108 m/s'], 1, '108 ÷ 3,6.'),
    mc('A unidade de base de temperatura é o:', ['Grau Celsius', 'Kelvin', 'Fahrenheit', 'Joule'], 1, 'SI.'),
    mc('Desde 2019, as unidades do SI são definidas por:', ['Padrões materiais', 'Constantes da natureza', 'Decretos', 'Média de medidas'], 1, 'Redefinição.'),
    mc('0,00045 em notação científica:', ['4,5 × 10⁻⁴', '45 × 10⁻⁵', '4,5 × 10⁴', '0,45 × 10⁻³'], 0, '1 ≤ a < 10.'),
    disc('Converta unidades e estime ordens de grandeza em dez situações cotidianas.', ['Conversões', 'Estimativas', 'Raciocínio', 'Verificação']),
  ],
  resumo: ['SI: sete unidades de base.', 'Redefinição de 2019 por constantes.', 'Derivadas: N, J, W.', 'km/h ÷ 3,6 = m/s.', 'Notação científica e ordens de grandeza.'],
  referencias: [
    { texto: 'INMETRO, O Sistema Internacional de Unidades.' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vol. 1, cap. 1.' },
    { texto: 'Richard Feynman, Lições de física, vol. 1.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as conversões e estimativas', 'Consultar a fonte indicada'],
  revisao: [['SI', 'Sete unidades.'], ['÷ 3,6', 'km/h para m/s.'], ['10ⁿ', 'Ordem de grandeza.']],
  avancado: {
    texto: `<h3>Grandezas vetoriais</h3>
<p>Grandezas escalares têm só valor (massa, tempo, energia); vetoriais têm valor, direção e sentido (deslocamento, velocidade, força) ${tag('fato')}. Andar 3 km para leste e 4 km para norte resulta num deslocamento de 5 km, pela soma vetorial (teorema de Pitágoras), embora a distância percorrida seja 7 km ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Moysés Nussenzveig, Curso de física básica, vol. 1.' }],
    exercicios: [
      mc('É grandeza vetorial:', ['Massa', 'Tempo', 'Força', 'Energia'], 2, 'Direção.'),
      mc('3 km a leste e 4 km ao norte: deslocamento de:', ['1 km', '5 km', '7 km', '12 km'], 1, 'Pitágoras.'),
      mc('Na mesma situação, a distância percorrida é:', ['5 km', '7 km', '1 km', '12 km'], 1, 'Soma dos trechos.'),
      disc('Explique a diferença entre distância e deslocamento com um trajeto seu.', ['Trajeto', 'Distância', 'Deslocamento', 'Diferença'])],
  },
}),

aula({
  id: 'fi1-3', titulo: 'Medida, erro e incerteza: o pêndulo como laboratório', duracao: '150 min',
  aprendera: ['Distinguir erros sistemáticos e aleatórios', 'Usar algarismos significativos', 'Calcular média e incerteza de medidas repetidas', 'Comparar medidas com um modelo'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Meça o mesmo período de um pêndulo cinco vezes e você obterá cinco números diferentes. Qual é o "verdadeiro"?</p>
<h3>Tipos de erro</h3>
<p>Erros aleatórios variam de uma medida a outra (tempo de reação ao apertar o cronômetro); erros sistemáticos deslocam todas as medidas no mesmo sentido (régua mal calibrada) ${tag('fato')}. Repetir medidas reduz o efeito dos aleatórios, não dos sistemáticos ${tag('fato')}.</p>
<h3>Média e incerteza</h3>
<p>Com medidas repetidas, usa-se a média como melhor estimativa e o desvio-padrão da média (desvio-padrão dividido pela raiz do número de medidas) como incerteza ${tag('fato')}. Um resultado se escreve como valor ± incerteza, com unidade: T = (2,01 ± 0,02) s ${tag('fato')}.</p>
<h3>Algarismos significativos</h3>
<p>Os algarismos significativos indicam a precisão: um comprimento de 1,00 m foi medido com precisão de centímetro; escrever 1 m perde essa informação ${tag('fato')}. Resultados de cálculos não devem ter mais precisão que os dados ${tag('fato')}.</p>
<h3>O pêndulo</h3>
<p>Para pequenas oscilações, o período de um pêndulo simples é T = 2π√(L/g), independente da massa ${tag('fato')}. Com L = 1,00 m e g = 9,8 m/s², T ≈ 2,0 s ${tag('fato')}. Galileu já observara que o período quase não depende da amplitude, para oscilações pequenas ${tag('fato')}. Cronometrar 10 oscilações e dividir por 10 reduz o efeito do tempo de reação ${tag('fato')}.</p>`,
  vocabulario: [
    ['Erro aleatório', 'Variação imprevisível entre medidas repetidas.'],
    ['Erro sistemático', 'Desvio constante num mesmo sentido.'],
    ['Incerteza', 'Faixa provável em torno do valor medido.'],
    ['Algarismos significativos', 'Dígitos que expressam a precisão de uma medida.'],
    ['Pêndulo simples', 'Massa presa a um fio que oscila em torno do equilíbrio.'],
  ],
  exemplos: `<p><strong>Cinco medidas de 10 oscilações:</strong> 20,1 s; 19,9 s; 20,3 s; 20,0 s; 20,2 s. Média: 100,5 ÷ 5 = 20,1 s; período: 2,01 s. O modelo prevê cerca de 2,0 s para L = 1,00 m. A diferença é pequena e compatível com a incerteza; se fosse grande, procuraríamos um erro sistemático (fio mais longo, amplitude grande).</p>`,
  contexto: `<p><strong>No mundo:</strong> pêndulos regularam relógios precisos por séculos, desde Christiaan Huygens (1656) ${tag('fato')}. <strong>No Brasil:</strong> o Observatório Nacional, criado em 1827, é responsável pela hora legal brasileira ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que uma medida sem incerteza está incompleta', tag: 'argumento',
    premissas: ['Toda medida tem limitações de instrumento e de procedimento.', 'Sem incerteza, não se sabe se duas medidas diferentes são compatíveis.', 'Comparar teoria e experimento exige saber quão precisa é a medida.'],
    conclusao: 'Logo, toda medida científica deve vir com sua incerteza.',
    nota: 'Honestidade na medida é virtude científica: não arredondar a favor da hipótese.',
  },
  objecoes: [
    { objecao: 'Se toda medida tem erro, a física nunca sabe nada com certeza.', tag: 'argumento',
      resposta: 'Saber com incerteza conhecida é saber muito: a física prevê eclipses ao segundo. A incerteza delimita o conhecimento em vez de anulá-lo. Certeza absoluta não é a medida do conhecimento empírico.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um pêndulo com fio e um peso, meça o tempo de 10 oscilações cinco vezes para três comprimentos diferentes, calcule períodos e incertezas e compare com T = 2π√(L/g).</p>`,
  fonte: {
    obra: 'Galileu Galilei, Duas novas ciências (1638), Primeira Jornada, passagem sobre os pêndulos', link: null,
    orientacao: `<p>Observe as afirmações de Galileu sobre o isocronismo e a relação entre comprimento e período.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre erro aleatório e sistemático?', r: 'O aleatório varia entre medidas; o sistemático desloca todas no mesmo sentido.' },
    { p: 'O período do pêndulo depende da massa?', r: 'Não, para o pêndulo simples com pequenas oscilações.' },
    { p: 'Por que cronometrar 10 oscilações?', r: 'Para reduzir o efeito do tempo de reação.' },
  ],
  exercicios: [
    mc('Uma régua mal calibrada causa erro:', ['Aleatório', 'Sistemático', 'Nenhum', 'Estatístico'], 1, 'Mesmo sentido.'),
    mc('Repetir medidas reduz principalmente o erro:', ['Sistemático', 'Aleatório', 'De unidade', 'De cálculo'], 1, 'Média.'),
    mc('Para L = 1 m e g = 9,8 m/s², o período é cerca de:', ['1 s', '2 s', '3 s', '6 s'], 1, '2π√0,102.'),
    mc('Se L quadruplica, o período:', ['Dobra', 'Quadruplica', 'Fica igual', 'Cai à metade'], 0, 'Raiz.'),
    mc('O Observatório Nacional foi criado em:', ['1808', '1827', '1949', '1872'], 1, 'Hora legal.'),
    disc('Meça o período de um pêndulo para três comprimentos, calcule incertezas e compare com o modelo.', ['Medidas', 'Incertezas', 'Comparação', 'Discussão']),
  ],
  resumo: ['Erros aleatórios e sistemáticos.', 'Média ± incerteza.', 'Algarismos significativos.', 'T = 2π√(L/g).', 'Cronometrar várias oscilações.'],
  referencias: [
    { texto: 'Galileu Galilei, Duas novas ciências (1638).' },
    { texto: 'John R. Taylor, Introdução à análise de erros.' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vol. 2 (oscilações).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o relatório do pêndulo', 'Ler a fonte indicada'],
  revisao: [['Sistemático', 'Mesmo sentido.'], ['± incerteza', 'Sempre.'], ['T ∝ √L', 'Pêndulo.']],
  avancado: {
    texto: `<h3>Medindo g com o pêndulo</h3>
<p>Da fórmula do período, g = 4π²L ÷ T² ${tag('fato')}. Com L = 1,00 m e T = 2,01 s, g ≈ 39,48 ÷ 4,04 ≈ 9,77 m/s² ${tag('fato')}. O valor de g varia levemente com a latitude e a altitude, e medidas precisas revelaram a forma achatada da Terra ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Moysés Nussenzveig, Curso de física básica, vol. 2.' }],
    exercicios: [
      mc('De T = 2π√(L/g), segue g =', ['4π²L ÷ T²', 'T² ÷ L', '2πL ÷ T', 'L ÷ T'], 0, 'Álgebra.'),
      mc('Com L = 1,00 m e T = 2,01 s, g ≈', ['9,77 m/s²', '4,9 m/s²', '19,6 m/s²', '1 m/s²'], 0, 'Cálculo.'),
      mc('g varia com:', ['Latitude e altitude', 'A cor do pêndulo', 'A massa do pêndulo', 'Nada'], 0, 'Geodésia.'),
      disc('Calcule g com suas medidas do pêndulo e compare com 9,8 m/s², discutindo a diferença.', ['Cálculo', 'Comparação', 'Fontes de erro', 'Conclusão'])],
  },
}),

aula({
  id: 'fi1-4', titulo: 'Gráficos, proporcionalidade e análise dimensional', duracao: '150 min',
  aprendera: ['Ler gráficos de posição e velocidade', 'Reconhecer proporcionalidade direta, inversa e quadrática', 'Verificar fórmulas pela análise dimensional', 'Linearizar dados para testar um modelo'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Uma tabela de números esconde a relação entre grandezas; um bom gráfico a revela. E uma fórmula errada pode ser descoberta sem nenhum experimento.</p>
<h3>Gráficos de movimento</h3>
<p>No gráfico posição × tempo, a inclinação é a velocidade; no gráfico velocidade × tempo, a inclinação é a aceleração e a área sob a curva é o deslocamento ${tag('fato')}. Um carro a 20 m/s constantes por 10 s percorre 200 m — a área do retângulo ${tag('fato')}.</p>
<h3>Proporcionalidade</h3>
<p>Proporção direta: dobrar x dobra y (distância e tempo a velocidade constante) ${tag('fato')}. Inversa: dobrar x reduz y à metade (tempo de viagem e velocidade, para distância fixa) ${tag('fato')}. Quadrática: dobrar x quadruplica y (distância de queda e tempo, d = ½gt²) ${tag('fato')}.</p>
<h3>Análise dimensional</h3>
<p>Os dois lados de uma equação física devem ter as mesmas dimensões ${tag('fato')}. Em T = 2π√(L/g), L/g tem dimensão de comprimento ÷ (comprimento/tempo²) = tempo², e a raiz dá tempo — coerente ${tag('fato')}. Se alguém propõe T = 2π√(g/L), a dimensão sai 1/tempo: a fórmula está errada ${tag('fato')}.</p>
<h3>Linearização</h3>
<p>Para testar T = 2π√(L/g), faz-se o gráfico de T² contra L: se o modelo vale, os pontos ficam sobre uma reta que passa pela origem, com inclinação 4π²/g ${tag('fato')}. Retas são fáceis de reconhecer e ajustar ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Inclinação', 'Taxa de variação de uma grandeza em relação a outra no gráfico.'],
    ['Proporção direta', 'Relação em que dobrar x dobra y.'],
    ['Proporção quadrática', 'Relação em que dobrar x quadruplica y.'],
    ['Dimensão', 'Natureza física de uma grandeza (comprimento, massa, tempo).'],
    ['Linearização', 'Transformar variáveis para que o modelo vire uma reta.'],
  ],
  exemplos: `<p><strong>Queda livre:</strong> d = ½gt². Em 1 s, uma pedra cai cerca de 4,9 m; em 2 s, cerca de 19,6 m — quatro vezes mais, não duas. Um gráfico de d × t é uma parábola; um gráfico de d × t² é uma reta. Galileu chegou a essa relação estudando bolas em planos inclinados.</p>`,
  contexto: `<p><strong>No mundo:</strong> Enrico Fermi era famoso por estimativas rápidas com análise dimensional e ordens de grandeza ${tag('fato')}. <strong>No Brasil:</strong> a Olimpíada Brasileira de Física propõe problemas que exigem esse tipo de raciocínio ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a análise dimensional é um filtro poderoso', tag: 'argumento',
    premissas: ['Grandezas de naturezas diferentes não podem ser iguais (metros não são segundos).', 'Toda equação física correta é dimensionalmente coerente.', 'Logo, uma equação incoerente está certamente errada.'],
    conclusao: 'Logo, verificar dimensões elimina muitos erros sem experimento.',
    nota: 'Coerência dimensional é condição necessária, não suficiente: o 2π, por exemplo, ela não determina.',
  },
  objecoes: [
    { objecao: 'Se a fórmula dá o número certo uma vez, está certa.', tag: 'argumento',
      resposta: 'Uma fórmula pode acertar por coincidência num caso. Coerência dimensional e acerto em muitos casos diferentes são exigências mínimas. A ciência testa modelos em condições variadas justamente para evitar acertos casuais.' },
  ],
  aplicacao: `<p>Com os dados do pêndulo da aula anterior, faça o gráfico de T² contra L, ajuste uma reta e calcule g pela inclinação, verificando antes a coerência dimensional.</p>`,
  fonte: {
    obra: 'Galileu Galilei, Duas novas ciências (1638), Terceira Jornada (movimento naturalmente acelerado)', link: null,
    orientacao: `<p>Observe como Galileu relaciona distâncias percorridas e tempos na queda, e a regra dos números ímpares.</p>`,
  },
  perguntas: [
    { p: 'O que representa a área sob o gráfico velocidade × tempo?', r: 'O deslocamento.' },
    { p: 'Na queda livre, dobrar o tempo faz a distância...', r: 'Quadruplicar.' },
    { p: 'Por que T = 2π√(g/L) está errada?', r: 'Porque dimensionalmente dá 1/tempo, não tempo.' },
  ],
  exercicios: [
    mc('A inclinação do gráfico posição × tempo é a:', ['Aceleração', 'Velocidade', 'Força', 'Massa'], 1, 'Taxa.'),
    mc('Carro a 15 m/s por 4 s percorre:', ['19 m', '45 m', '60 m', '3,75 m'], 2, 'Área.'),
    mc('Em 3 s de queda livre (g ≈ 9,8 m/s²), a distância é cerca de:', ['14,7 m', '29,4 m', '44,1 m', '88,2 m'], 2, '½ × 9,8 × 9.'),
    mc('Distância fixa: dobrar a velocidade faz o tempo:', ['Dobrar', 'Cair à metade', 'Quadruplicar', 'Ficar igual'], 1, 'Inversa.'),
    mc('Para linearizar o pêndulo, plota-se:', ['T contra L', 'T² contra L', 'T contra L²', 'L contra g'], 1, 'Reta.'),
    disc('Faça o gráfico de T² contra L do seu pêndulo, ajuste a reta e calcule g.', ['Gráfico', 'Ajuste', 'Cálculo de g', 'Comparação']),
  ],
  resumo: ['Inclinação = taxa; área = acumulado.', 'Direta, inversa, quadrática.', 'd = ½gt².', 'Análise dimensional.', 'Linearizar para testar.'],
  referencias: [
    { texto: 'Galileu Galilei, Duas novas ciências (1638).' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vol. 1.' },
    { texto: 'Richard Feynman, Lições de física, vol. 1.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o gráfico linearizado', 'Ler a fonte indicada'],
  revisao: [['Área v × t', 'Deslocamento.'], ['½gt²', 'Quadrática.'], ['Dimensões', 'Filtro.']],
  avancado: {
    texto: `<h3>A regra dos números ímpares</h3>
<p>Galileu mostrou que, num movimento uniformemente acelerado a partir do repouso, as distâncias percorridas em intervalos de tempo iguais e sucessivos estão na razão 1 : 3 : 5 : 7… ${tag('fato')}. Somando, as distâncias totais crescem como 1, 4, 9, 16 — os quadrados dos tempos ${tag('fato')}. Essa regularidade simples sustenta a lei d ∝ t² ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Galileu Galilei, Duas novas ciências (1638), Terceira Jornada.' }],
    exercicios: [
      mc('As distâncias em intervalos iguais sucessivos estão na razão:', ['1:2:3:4', '1:3:5:7', '1:4:9:16', '1:1:1:1'], 1, 'Ímpares.'),
      mc('Somando 1 + 3 + 5, obtém-se:', ['6', '9', '15', '8'], 1, 'Quadrado de 3.'),
      mc('A regra sustenta a lei:', ['d ∝ t', 'd ∝ t²', 'd ∝ 1/t', 'd constante'], 1, 'Quadrática.'),
      disc('Mostre por que a soma dos primeiros n ímpares é n² e relacione com a queda livre.', ['Soma', 'Prova', 'Relação', 'Galileu'])],
  },
}),

avaliacao('fi1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o que é física, unidades, medida e incerteza, gráficos e análise dimensional, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça as conversões e o cálculo do período do pêndulo.</li><li>Releia seu relatório experimental.</li></ul>`,
[
  disc('Apresente o experimento do pêndulo: medidas, incertezas, gráfico linearizado, valor de g obtido e comparação com o modelo, indicando possíveis erros sistemáticos.', ['Medidas', 'Incertezas', 'Gráfico e g', 'Discussão de erros']),
  disc('Distinga lei, modelo e teoria e explique por que um modelo tem domínio de validade, com um exemplo da física e uma observação sobre a relação entre física e filosofia da natureza.', ['Distinções', 'Domínio de validade', 'Exemplo', 'Física e filosofia']),
]),
];
