// Química IV — estudos avançados (etapa 8 do percurso de Química).
// Estrutura atômica e ligações; termodinâmica e cinética; equilíbrio, ácidos e bases; química orgânica.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'qu4-1', titulo: 'Estrutura atômica, ligações e geometria molecular', duracao: '150 min',
  aprendera: ['Escrever configurações eletrônicas simples', 'Distinguir ligações iônica, covalente e metálica', 'Prever polaridade e geometria de moléculas simples', 'Reconhecer forças intermoleculares'],
  prereq: ['Química III (módulo QU3)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o sal é sólido e quebradiço, a água é líquida e o metal conduz eletricidade? A resposta está nos elétrons.</p>
<h3>Configuração eletrônica</h3>
<p>Os elétrons ocupam níveis e subníveis (s, p, d, f) em ordem crescente de energia ${tag('fato')}. O sódio (Z = 11): 1s² 2s² 2p⁶ 3s¹ ${tag('fato')}. Os elétrons da camada de valência determinam o comportamento químico ${tag('fato')}.</p>
<h3>Ligações</h3>
<p>Iônica: transferência de elétrons entre metal e não metal, formando íons que se atraem (NaCl) ${tag('fato')}. Covalente: compartilhamento de pares de elétrons entre não metais (H₂O) ${tag('fato')}. Metálica: elétrons deslocalizados entre cátions, o que explica a condução elétrica ${tag('fato')}.</p>
<h3>Polaridade e geometria</h3>
<p>Diferenças de eletronegatividade tornam ligações polares ${tag('fato')}. A teoria da repulsão dos pares de elétrons (VSEPR) prevê geometrias: CO₂ linear (apolar), H₂O angular (polar), CH₄ tetraédrica ${tag('fato')}.</p>
<h3>Forças intermoleculares</h3>
<p>Ligações de hidrogênio, dipolo-dipolo e forças de dispersão explicam pontos de ebulição ${tag('fato')}. As ligações de hidrogênio explicam a temperatura de ebulição relativamente alta da água ${tag('fato')}.</p>`,
  vocabulario: [
    ['Camada de valência', 'Camada mais externa de elétrons.'],
    ['Ligação iônica', 'Atração entre íons de cargas opostas.'],
    ['Ligação covalente', 'Compartilhamento de pares de elétrons.'],
    ['Molécula polar', 'Molécula com distribuição desigual de carga.'],
    ['Ligação de hidrogênio', 'Interação forte entre H ligado a F, O ou N e outro átomo eletronegativo.'],
  ],
  exemplos: `<p><strong>Por que o gelo flutua:</strong> no gelo, as ligações de hidrogênio organizam as moléculas de água numa rede aberta, menos densa que a água líquida. Por isso o gelo flutua, e lagos congelam de cima para baixo, protegendo a vida aquática embaixo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a teoria VSEPR é ensinada em cursos de química de todo o mundo como primeira aproximação da geometria molecular ${tag('fato')}. <strong>No Brasil:</strong> o estudo das ligações faz parte do currículo de química do ensino médio ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a estrutura explica as propriedades', tag: 'argumento',
    premissas: ['As propriedades macroscópicas (ponto de fusão, condução, solubilidade) dependem das interações entre partículas.', 'Essas interações dependem do tipo de ligação e da geometria.', 'Logo, conhecer a estrutura permite prever propriedades.'],
    conclusao: 'Logo, a estrutura microscópica explica as propriedades das substâncias.',
    nota: 'É o programa explicativo central da química moderna.',
  },
  objecoes: [
    { objecao: 'Ligações químicas são "coisas" reais como bastões entre bolas.', tag: 'debate',
      resposta: 'Os modelos de bolas e bastões são representações úteis. Na teoria quântica, a ligação é descrita por distribuições de elétrons. Há debate na filosofia da química sobre em que sentido as ligações são reais; os modelos não devem ser tomados literalmente.' },
  ],
  aplicacao: `<p>Escreva a configuração eletrônica de cinco elementos, classifique dez substâncias quanto ao tipo de ligação e preveja a geometria e a polaridade de cinco moléculas simples.</p>`,
  fonte: {
    obra: 'Linus Pauling, A natureza da ligação química (1939), capítulos iniciais', link: null,
    orientacao: `<p>Observe a definição de eletronegatividade e o uso de estruturas de ressonância.</p>`,
  },
  perguntas: [
    { p: 'Qual a configuração eletrônica do sódio?', r: '1s² 2s² 2p⁶ 3s¹.' },
    { p: 'Por que metais conduzem eletricidade?', r: 'Por terem elétrons deslocalizados.' },
    { p: 'Por que o CO₂ é apolar?', r: 'Porque é linear e os dipolos das ligações se anulam.' },
  ],
  exercicios: [
    mc('NaCl tem ligação:', ['Iônica', 'Covalente', 'Metálica', 'De hidrogênio'], 0, 'Metal e não metal.'),
    mc('A geometria do metano é:', ['Tetraédrica', 'Linear', 'Angular', 'Plana'], 0, 'VSEPR.'),
    mc('A água é:', ['Polar', 'Apolar', 'Metálica', 'Iônica'], 0, 'Angular.'),
    mc('O gelo flutua por causa das:', ['Ligações de hidrogênio', 'Ligações metálicas', 'Forças nucleares', 'Íons'], 0, 'Rede aberta.'),
    mc('Os elétrons que determinam o comportamento químico são os da:', ['Camada de valência', 'Camada K sempre', 'Núcleo', 'Nenhuma'], 0, 'Valência.'),
    disc('Faça as configurações, classificações e previsões da aplicação.', ['Configurações', 'Ligações', 'Geometria', 'Polaridade']),
  ],
  resumo: ['Configuração eletrônica.', 'Iônica, covalente, metálica.', 'Eletronegatividade e polaridade.', 'VSEPR.', 'Forças intermoleculares.'],
  referencias: [
    { texto: 'Linus Pauling, A natureza da ligação química (1939).' },
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
    { texto: 'Peter Atkins e Loretta Jones, Princípios de química.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os exercícios', 'Ler a fonte indicada'],
  revisao: [['Na', '1s² 2s² 2p⁶ 3s¹.'], ['H₂O', 'Angular, polar.'], ['Gelo', 'Ligações de hidrogênio.']],
  avancado: {
    texto: `<h3>Ressonância</h3>
<p>Algumas moléculas não são bem representadas por uma única estrutura de Lewis ${tag('fato')}. No benzeno, as seis ligações carbono–carbono têm o mesmo comprimento, intermediário entre simples e dupla ${tag('fato')}. As estruturas de ressonância são modos de representar essa distribuição real dos elétrons, e não formas que a molécula alterna ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Linus Pauling, A natureza da ligação química (1939).' }],
    exercicios: [
      mc('No benzeno, as ligações C–C são:', ['Todas iguais', 'Alternadas simples e duplas reais', 'Todas triplas', 'Iônicas'], 0, 'Ressonância.'),
      mc('Estruturas de ressonância representam:', ['Uma distribuição real única', 'Formas que se alternam', 'Isômeros', 'Erros'], 0, 'Conceito.'),
      mc('O ozônio também é descrito por:', ['Ressonância', 'Ligação metálica', 'Ligação iônica', 'Nada'], 0, 'O₃.'),
      disc('Desenhe as estruturas de ressonância do ozônio e explique o que representam.', ['Estruturas', 'Comprimento das ligações', 'Interpretação', 'Erro comum'])],
  },
}),

aula({
  id: 'qu4-2', titulo: 'Termodinâmica e cinética: energia e velocidade das reações', duracao: '150 min',
  aprendera: ['Distinguir reações exotérmicas e endotérmicas', 'Usar a lei de Hess', 'Explicar entropia e energia livre de forma qualitativa', 'Identificar fatores que afetam a velocidade das reações'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que algumas reações liberam calor e outras absorvem? Por que algumas são rápidas como uma explosão e outras lentas como a ferrugem?</p>
<h3>Entalpia</h3>
<p>A variação de entalpia (ΔH) mede o calor trocado a pressão constante ${tag('fato')}. Reações exotérmicas liberam calor (ΔH < 0), como a combustão; endotérmicas absorvem (ΔH > 0), como a decomposição térmica do calcário ${tag('fato')}. Pela lei de Hess, o ΔH de uma reação é a soma dos ΔH das etapas, qualquer que seja o caminho ${tag('fato')}.</p>
<h3>Entropia e energia livre</h3>
<p>A entropia (S) relaciona-se ao número de modos de distribuir energia e matéria ${tag('fato')}. A espontaneidade, a temperatura e pressão constantes, depende da energia livre de Gibbs: ΔG = ΔH − TΔS; se ΔG < 0, a reação é espontânea ${tag('fato')}. Espontânea não significa rápida ${tag('fato')}.</p>
<h3>Cinética</h3>
<p>A velocidade aumenta com a concentração, a temperatura, a superfície de contato e a presença de catalisador ${tag('fato')}. A energia de ativação é a barreira que os reagentes precisam vencer; o catalisador oferece um caminho com barreira menor ${tag('fato')}. As enzimas são catalisadores biológicos ${tag('fato')}.</p>`,
  vocabulario: [
    ['Entalpia', 'Grandeza cuja variação mede o calor a pressão constante.'],
    ['Exotérmica', 'Reação que libera calor.'],
    ['Entropia', 'Medida relacionada à dispersão de energia e matéria.'],
    ['Energia livre de Gibbs', 'ΔG = ΔH − TΔS, critério de espontaneidade.'],
    ['Energia de ativação', 'Energia mínima para a reação ocorrer.'],
  ],
  exemplos: `<p><strong>O diamante e o grafite:</strong> a transformação do diamante em grafite é espontânea nas condições ambientes (ΔG < 0), mas é tão lenta que diamantes duram bilhões de anos. Termodinâmica diz se pode acontecer; cinética diz com que rapidez.</p>`,
  contexto: `<p><strong>No mundo:</strong> conversores catalíticos de automóveis usam metais como platina para acelerar a transformação de gases poluentes ${tag('fato')}. <strong>No Brasil:</strong> a fermentação alcoólica nas usinas, catalisada por enzimas de leveduras, produz o etanol ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que espontâneo não quer dizer rápido', tag: 'argumento',
    premissas: ['A espontaneidade depende do sinal de ΔG, que compara estados inicial e final.', 'A velocidade depende do caminho e da energia de ativação.', 'Estados e caminhos são coisas diferentes.'],
    conclusao: 'Logo, uma reação pode ser espontânea e muito lenta.',
    nota: 'Por isso a vida depende de enzimas, que tornam rápidas reações espontâneas mas lentas.',
  },
  objecoes: [
    { objecao: 'A entropia sempre aumenta; logo, a ordem da vida contradiz a termodinâmica.', tag: 'debate',
      resposta: 'A segunda lei diz que a entropia total de um sistema isolado não diminui. Seres vivos não são isolados: liberam calor e resíduos, aumentando a entropia do ambiente. A ordem local é compatível com a lei. Isso não resolve, por si, questões sobre a origem da vida.' },
  ],
  aplicacao: `<p>Calcule ΔH de uma reação pela lei de Hess a partir de duas etapas dadas; classifique cinco reações como exotérmicas ou endotérmicas; e planeje um experimento caseiro seguro sobre o efeito da temperatura na velocidade (por exemplo, comprimido efervescente em água fria e quente).</p>`,
  fonte: {
    obra: 'Peter Atkins e Loretta Jones, Princípios de química, capítulos sobre termodinâmica e cinética', link: null,
    orientacao: `<p>Observe a distinção entre funções de estado e grandezas que dependem do caminho.</p>`,
  },
  perguntas: [
    { p: 'O que indica ΔH < 0?', r: 'Reação exotérmica, que libera calor.' },
    { p: 'Qual o critério de espontaneidade a T e P constantes?', r: 'ΔG < 0.' },
    { p: 'Como age um catalisador?', r: 'Oferecendo um caminho com menor energia de ativação.' },
  ],
  exercicios: [
    mc('A combustão é:', ['Exotérmica', 'Endotérmica', 'Nem uma nem outra', 'Nuclear'], 0, 'Libera calor.'),
    mc('ΔG = ', ['ΔH − TΔS', 'ΔH + TΔS', 'TΔS − ΔH', 'ΔS/T'], 0, 'Gibbs.'),
    mc('Aumentar a temperatura em geral:', ['Aumenta a velocidade', 'Diminui a velocidade', 'Não muda', 'Para a reação'], 0, 'Cinética.'),
    mc('Enzimas são:', ['Catalisadores biológicos', 'Reagentes consumidos', 'Produtos', 'Solventes'], 0, 'Biologia.'),
    mc('Diamante virando grafite é:', ['Espontâneo e muito lento', 'Rápido', 'Impossível', 'Endotérmico explosivo'], 0, 'Exemplo.'),
    disc('Faça os cálculos, classificações e o planejamento do experimento.', ['Lei de Hess', 'Classificação', 'Experimento', 'Segurança']),
  ],
  resumo: ['ΔH: exo e endo.', 'Lei de Hess.', 'ΔG = ΔH − TΔS.', 'Fatores de velocidade.', 'Catalisador e enzimas.'],
  referencias: [
    { texto: 'Peter Atkins e Loretta Jones, Princípios de química.' },
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
    { texto: 'Paul Anastas e John Warner, Green Chemistry: Theory and Practice (1998).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar cálculos e planejamento', 'Ler a fonte indicada'],
  revisao: [['ΔH < 0', 'Exotérmica.'], ['ΔG < 0', 'Espontânea.'], ['Catalisador', 'Menor Ea.']],
  avancado: {
    texto: `<h3>A equação de Arrhenius</h3>
<p>Svante Arrhenius propôs em 1889 que a constante de velocidade varia com a temperatura segundo k = A·e^(−Ea/RT) ${tag('fato')}. A equação explica por que pequenos aumentos de temperatura podem acelerar muito uma reação ${tag('fato')}. Uma regra prática aproximada diz que a velocidade de muitas reações dobra a cada 10 °C, mas ela não vale para todas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química.' }],
    exercicios: [
      mc('A equação de Arrhenius é de:', ['1889', '1789', '1929', '1998'], 0, 'Data.'),
      mc('Na equação, aumentar Ea:', ['Diminui k', 'Aumenta k', 'Não muda k', 'Zera k'], 0, 'Exponencial negativa.'),
      mc('A regra de "dobrar a cada 10 °C" é:', ['Aproximação que não vale para todas', 'Lei exata', 'Falsa sempre', 'Teorema'], 0, 'Cautela.'),
      disc('Explique por que alimentos duram mais na geladeira, usando a cinética.', ['Temperatura', 'Velocidade', 'Arrhenius', 'Exemplo'])],
  },
}),

aula({
  id: 'qu4-3', titulo: 'Equilíbrio químico, ácidos e bases', duracao: '150 min',
  aprendera: ['Explicar o equilíbrio dinâmico e a constante de equilíbrio', 'Aplicar o princípio de Le Chatelier', 'Usar as definições de Arrhenius e de Brønsted-Lowry', 'Calcular e interpretar o pH'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Muitas reações não vão até o fim: chegam a um ponto em que reagentes e produtos coexistem. O que é esse equilíbrio, e o que é um ácido?</p>
<h3>Equilíbrio</h3>
<p>No equilíbrio químico, as reações direta e inversa ocorrem com a mesma velocidade, e as concentrações ficam constantes ${tag('fato')}. A constante de equilíbrio K relaciona as concentrações de produtos e reagentes ${tag('fato')}. Pelo princípio de Le Chatelier, um sistema em equilíbrio perturbado desloca-se para reduzir a perturbação ${tag('fato')}.</p>
<h3>Ácidos e bases</h3>
<p>Para Arrhenius, ácidos liberam H⁺ em água e bases liberam OH⁻ ${tag('fato')}. Para Brønsted e Lowry (1923), ácido é doador e base é receptor de próton ${tag('fato')}.</p>
<h3>pH</h3>
<p>pH = −log[H⁺] ${tag('fato')}. A 25 °C, pH 7 é neutro, abaixo é ácido e acima é básico ${tag('fato')}. Cada unidade de pH corresponde a um fator 10 na concentração de H⁺ ${tag('fato')}. O sangue humano tem pH próximo de 7,4, mantido por sistemas tampão ${tag('fato')}.</p>`,
  vocabulario: [
    ['Equilíbrio dinâmico', 'Estado em que reações direta e inversa têm a mesma velocidade.'],
    ['Constante de equilíbrio', 'Razão entre concentrações de produtos e reagentes no equilíbrio.'],
    ['Le Chatelier', 'Princípio do deslocamento do equilíbrio diante de perturbações.'],
    ['pH', '−log[H⁺], medida de acidez.'],
    ['Tampão', 'Solução que resiste a variações de pH.'],
  ],
  exemplos: `<p><strong>O refrigerante:</strong> o gás carbônico dissolvido está em equilíbrio com o ácido carbônico. Ao abrir a garrafa, a pressão cai, o equilíbrio se desloca e o gás escapa em bolhas (Le Chatelier). O refrigerante tem pH ácido, em torno de 3, também pela presença de outros ácidos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a acidificação dos oceanos, pela absorção de CO₂, preocupa por afetar organismos com conchas de carbonato ${tag('fato')}. <strong>No Brasil:</strong> a calagem, aplicação de calcário para corrigir a acidez, é prática comum em solos agrícolas do Cerrado ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o equilíbrio é dinâmico e não estático', tag: 'argumento',
    premissas: ['Experimentos com isótopos mostram troca contínua de átomos entre reagentes e produtos no equilíbrio.', 'Mesmo assim, as concentrações não mudam.', 'Logo, há reações ocorrendo em sentidos opostos com a mesma velocidade.'],
    conclusao: 'Logo, o equilíbrio químico é dinâmico.',
    nota: 'Imagem útil: uma escada rolante em que se sobe e desce no mesmo ritmo.',
  },
  objecoes: [
    { objecao: 'Ácido é sempre perigoso e base é sempre segura.', tag: 'argumento',
      resposta: 'Há ácidos fracos em alimentos (vinagre, limão) e bases fortes muito corrosivas (soda cáustica). A periculosidade depende da força e da concentração, não de ser ácido ou base.' },
  ],
  aplicacao: `<p>Calcule o pH de três soluções a partir de [H⁺]; aplique Le Chatelier a três perturbações de um equilíbrio; e, com repolho roxo como indicador caseiro, classifique cinco produtos domésticos seguros quanto à acidez, registrando cores e cuidados.</p>`,
  fonte: {
    obra: 'Theodore L. Brown e outros, Química: a ciência central, capítulos sobre equilíbrio e ácido-base', link: null,
    orientacao: `<p>Observe os exemplos de aplicação de Le Chatelier e o cálculo do pH.</p>`,
  },
  perguntas: [
    { p: 'O que é o equilíbrio químico?', r: 'Estado em que as reações direta e inversa têm a mesma velocidade.' },
    { p: 'O que diz o princípio de Le Chatelier?', r: 'Que o sistema perturbado se desloca para reduzir a perturbação.' },
    { p: 'Qual o pH de [H⁺] = 10⁻³ mol/L?', r: '3.' },
  ],
  exercicios: [
    mc('Para Brønsted-Lowry, ácido é:', ['Doador de próton', 'Receptor de próton', 'Doador de elétron', 'Base'], 0, '1923.'),
    mc('pH 9 é:', ['Básico', 'Ácido', 'Neutro', 'Impossível'], 0, 'Acima de 7.'),
    mc('pH 3 tem [H⁺] quantas vezes maior que pH 5?', ['100', '2', '10', '1000'], 0, 'Fator 10².'),
    mc('O pH do sangue é próximo de:', ['7,4', '2', '10', '5'], 0, 'Tampão.'),
    mc('Abrir o refrigerante desloca o equilíbrio por:', ['Queda de pressão', 'Aumento de pressão', 'Catalisador', 'Luz'], 0, 'Le Chatelier.'),
    disc('Faça os cálculos, as aplicações de Le Chatelier e o teste com repolho roxo.', ['pH', 'Le Chatelier', 'Indicador', 'Segurança']),
  ],
  resumo: ['Equilíbrio dinâmico e K.', 'Le Chatelier.', 'Arrhenius e Brønsted-Lowry.', 'pH = −log[H⁺].', 'Tampões; sangue 7,4.'],
  referencias: [
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
    { texto: 'Peter Atkins e Loretta Jones, Princípios de química.' },
    { texto: 'Sociedade Brasileira de Química, Química Nova na Escola.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar cálculos e experimento', 'Ler a fonte indicada'],
  revisao: [['Le Chatelier', 'Reduz perturbação.'], ['pH 7', 'Neutro a 25 °C.'], ['Brønsted', 'Próton.']],
  avancado: {
    texto: `<h3>O processo Haber e Le Chatelier</h3>
<p>Na síntese da amônia (N₂ + 3 H₂ ⇌ 2 NH₃, exotérmica), alta pressão favorece os produtos, pois há menos mols de gás à direita ${tag('fato')}. Baixa temperatura favoreceria o rendimento, mas tornaria a reação lenta; por isso usa-se temperatura intermediária e catalisador ${tag('fato')}. É um compromisso entre termodinâmica e cinética ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química.' }],
    exercicios: [
      mc('Alta pressão no processo Haber favorece:', ['Os produtos', 'Os reagentes', 'Nada', 'A decomposição'], 0, 'Menos mols de gás.'),
      mc('Baixa temperatura favoreceria o rendimento, mas:', ['A reação seria lenta', 'A reação explodiria', 'Não haveria equilíbrio', 'Nada mudaria'], 0, 'Cinética.'),
      mc('Usa-se catalisador para:', ['Acelerar', 'Mudar K', 'Mudar o sinal de ΔH', 'Consumi-lo'], 0, 'Velocidade.'),
      disc('Explique o compromisso entre termodinâmica e cinética no processo Haber.', ['Equilíbrio', 'Velocidade', 'Condições', 'Compromisso'])],
  },
}),

aula({
  id: 'qu4-4', titulo: 'Química orgânica: o carbono e as moléculas da vida', duracao: '150 min',
  aprendera: ['Explicar a versatilidade do carbono', 'Reconhecer as principais funções orgânicas', 'Nomear compostos simples', 'Conhecer polímeros e biomoléculas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que há milhões de compostos de carbono, e por que a vida é baseada nele?</p>
<h3>O carbono</h3>
<p>O carbono forma quatro ligações (tetravalência, proposta por Kekulé em 1858) e liga-se a si mesmo em cadeias e anéis ${tag('fato')}. Kekulé propôs em 1865 a estrutura em anel do benzeno ${tag('fato')}.</p>
<h3>Hidrocarbonetos e funções</h3>
<p>Hidrocarbonetos contêm só carbono e hidrogênio (metano, etano, eteno, benzeno) ${tag('fato')}. Funções orgânicas: álcool (–OH, etanol), aldeído e cetona (C=O), ácido carboxílico (–COOH, ácido acético), éster (aromas de frutas), amina (–NH₂) ${tag('fato')}.</p>
<h3>Nomenclatura</h3>
<p>Na nomenclatura IUPAC, o prefixo indica o número de carbonos (met-, et-, prop-, but-), o infixo o tipo de ligação (-an-, -en-, -in-) e o sufixo a função (-o, -ol, -al, -ona, -oico) ${tag('fato')}.</p>
<h3>Polímeros e biomoléculas</h3>
<p>Polímeros sintéticos (polietileno, PET, náilon) e naturais (celulose, amido, proteínas, DNA) são cadeias de unidades repetidas ${tag('fato')}. Carboidratos, lipídios, proteínas e ácidos nucleicos são as grandes classes de biomoléculas ${tag('fato')}.</p>`,
  vocabulario: [
    ['Tetravalência', 'Capacidade do carbono de formar quatro ligações.'],
    ['Hidrocarboneto', 'Composto de carbono e hidrogênio.'],
    ['Função orgânica', 'Grupo de átomos que confere propriedades características.'],
    ['Éster', 'Composto formado de ácido e álcool, frequentemente aromático.'],
    ['Biomolécula', 'Molécula característica dos seres vivos.'],
  ],
  exemplos: `<p><strong>Do etanol ao vinagre:</strong> o etanol (CH₃CH₂OH), oxidado, transforma-se em ácido acético (CH₃COOH), que dá o sabor ao vinagre. A mudança de um grupo funcional muda completamente as propriedades: de combustível e bebida a tempero ácido.</p>`,
  contexto: `<p><strong>No mundo:</strong> a maior parte dos medicamentos são moléculas orgânicas ${tag('fato')}. <strong>No Brasil:</strong> o Brasil desenvolveu o plástico "verde", polietileno produzido a partir de etanol de cana ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a vida é baseada no carbono', tag: 'argumento',
    premissas: ['O carbono forma ligações estáveis consigo mesmo e com H, O, N, S e P.', 'Isso permite cadeias longas, anéis e grande variedade estrutural.', 'A vida exige moléculas grandes e variadas que guardem informação e catalisem reações.'],
    conclusao: 'Logo, as propriedades do carbono o tornam adequado como base da química da vida.',
    nota: 'Especula-se sobre vida baseada em silício, sem evidência até hoje.',
  },
  objecoes: [
    { objecao: 'Substâncias "químicas" são artificiais e más; as naturais são boas.', tag: 'debate',
      resposta: 'Tudo é feito de substâncias químicas, naturais ou sintéticas. Há venenos naturais potentes e sintéticos que salvam vidas. A segurança depende da substância e da dose, não da origem.' },
  ],
  aplicacao: `<p>Identifique as funções orgânicas em dez moléculas (etanol, ácido acético, acetona, aspirina, cafeína etc.), nomeie cinco compostos simples pela IUPAC e encontre, em rótulos, três substâncias orgânicas com sua função.</p>`,
  fonte: {
    obra: 'Primo Levi, A tabela periódica (1975), capítulo "Carbono"', link: null,
    orientacao: `<p>Observe como Levi narra a trajetória de um átomo de carbono pela natureza e pelos seres vivos.</p>`,
  },
  perguntas: [
    { p: 'Quem propôs a tetravalência do carbono?', r: 'Kekulé, em 1858.' },
    { p: 'Qual a função do etanol?', r: 'Álcool (–OH).' },
    { p: 'O que indica o sufixo "-oico"?', r: 'Ácido carboxílico.' },
  ],
  exercicios: [
    mc('A estrutura em anel do benzeno foi proposta em:', ['1865', '1858', '1828', '1939'], 0, 'Kekulé.'),
    mc('O propano tem quantos carbonos?', ['3', '2', '4', '1'], 0, 'Prefixo prop-.'),
    mc('Ésteres costumam ter:', ['Aromas de frutas', 'Cheiro de amônia', 'Cor azul', 'Radioatividade'], 0, 'Propriedade.'),
    mc('O ácido acético está no:', ['Vinagre', 'Sal', 'Açúcar', 'Ferro'], 0, 'Cotidiano.'),
    mc('O DNA é um:', ['Polímero natural', 'Hidrocarboneto', 'Sal', 'Metal'], 0, 'Biomolécula.'),
    disc('Faça a identificação, a nomenclatura e a pesquisa nos rótulos.', ['Funções', 'Nomenclatura', 'Rótulos', 'Correção']),
  ],
  resumo: ['Tetravalência (1858).', 'Benzeno (1865).', 'Funções orgânicas.', 'Nomenclatura IUPAC.', 'Polímeros e biomoléculas.'],
  referencias: [
    { texto: 'Primo Levi, A tabela periódica (1975).' },
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
    { texto: 'Peter Atkins e Loretta Jones, Princípios de química.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a identificação e a nomenclatura', 'Ler a fonte indicada'],
  revisao: [['Tetravalência', 'Kekulé.'], ['–OH', 'Álcool.'], ['-oico', 'Ácido.']],
  avancado: {
    texto: `<h3>Talidomida e quiralidade</h3>
<p>A talidomida, vendida nos anos 1950 e 1960 contra enjoos na gravidez, causou malformações em milhares de bebês ${tag('fato')}. A molécula tem duas formas espelhadas, e o caso levou a exigências mais rigorosas de testes de medicamentos ${tag('fato')}. No organismo, as duas formas se interconvertem, de modo que separar uma delas não teria resolvido o problema ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química, capítulo sobre estereoquímica.' }],
    exercicios: [
      mc('A talidomida causou:', ['Malformações em bebês', 'Câncer de pele', 'Nada', 'Cegueira'], 0, 'Tragédia.'),
      mc('O caso levou a:', ['Testes de medicamentos mais rigorosos', 'Fim da química orgânica', 'Proibição de todos os remédios', 'Nada'], 0, 'Regulação.'),
      mc('No organismo, as formas da talidomida:', ['Se interconvertem', 'Ficam separadas', 'Desaparecem', 'Viram metais'], 0, 'Fato.'),
      disc('Explique o caso da talidomida e o que ensina sobre ética e ciência.', ['Caso', 'Química', 'Regulação', 'Ética'])],
  },
}),

avaliacao('qu4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas de estrutura e ligações, termodinâmica e cinética, equilíbrio e ácido-base, química orgânica, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça cálculos de pH e de Hess.</li><li>Revise as funções orgânicas.</li></ul>`,
[
  disc('Para a reação N₂ + 3 H₂ ⇌ 2 NH₃ (exotérmica), explique o tipo de ligação nas moléculas envolvidas, o efeito da pressão e da temperatura sobre o equilíbrio e a velocidade, e o papel do catalisador.', ['Ligações', 'Equilíbrio', 'Cinética', 'Catalisador']),
  disc('Escolha uma molécula orgânica do cotidiano, identifique suas funções, explique uma propriedade pela estrutura e discuta um cuidado de segurança ou ética ligado a ela.', ['Molécula', 'Funções', 'Propriedade', 'Segurança e ética']),
]),
];
