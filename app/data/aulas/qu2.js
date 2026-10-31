// Química II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Química).
// Dos elementos gregos a Lavoisier; de Dalton ao século XX e a química no Brasil; Lavoisier, Dalton e Mendeleiev; Marie Curie e Linus Pauling.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'qu2-1', titulo: 'Dos elementos gregos à revolução de Lavoisier', duracao: '150 min',
  aprendera: ['Conhecer as teorias gregas da matéria', 'Situar a alquimia e a iatroquímica', 'Explicar a contribuição de Boyle', 'Explicar a revolução química de Lavoisier'],
  prereq: ['Química I (módulo QU1)'],
  explicacao: `
<h3>O problema</h3>
<p>Antes de átomos e tabelas, como se pensava a composição das coisas, e como nasceu a química moderna?</p>
<h3>Grécia</h3>
<p>Empédocles propôs quatro raízes: terra, água, ar e fogo ${tag('fato')}. Leucipo e Demócrito propuseram átomos indivisíveis movendo-se no vazio ${tag('fato')}. Aristóteles ligou os elementos às qualidades quente, frio, seco e úmido e rejeitou o vazio ${tag('fato')}.</p>
<h3>Alquimia</h3>
<p>A alquimia, no mundo islâmico e na Europa medieval, buscou transmutar metais e produzir remédios, e desenvolveu técnicas como a destilação ${tag('fato')}. Paracelso (século XVI) voltou a alquimia para a medicina (iatroquímica) ${tag('fato')}.</p>
<h3>Boyle</h3>
<p>Robert Boyle, em O químico cético (1661), criticou as teorias dos elementos de base especulativa e defendeu a experimentação ${tag('fato')}. Deu nome à lei segundo a qual, a temperatura constante, pressão e volume de um gás são inversamente proporcionais ${tag('fato')}.</p>
<h3>Lavoisier</h3>
<p>Antoine Lavoisier explicou a combustão pela combinação com o oxigênio, contra a teoria do flogisto ${tag('fato')}. Com colegas, propôs uma nova nomenclatura química (1787) e publicou o Tratado elementar de química (1789) ${tag('fato')}. Foi guilhotinado em 1794, durante o Terror, por ter sido coletor de impostos ${tag('fato')}.</p>`,
  vocabulario: [
    ['Quatro elementos', 'Terra, água, ar e fogo, na tradição grega.'],
    ['Atomismo antigo', 'Tese de Leucipo e Demócrito sobre partículas indivisíveis.'],
    ['Alquimia', 'Prática que buscava a transmutação e remédios.'],
    ['Flogisto', 'Suposto princípio liberado na combustão, teoria superada.'],
    ['Lei de Boyle', 'A temperatura constante, PV é constante.'],
  ],
  exemplos: `<p><strong>A calcinação do estanho:</strong> aquecido em recipiente fechado, o estanho forma uma "cal" mais pesada que o metal. Lavoisier mostrou que o aumento de massa correspondia a algo retirado do ar do recipiente. Para a teoria do flogisto, o metal deveria perder algo; a balança mostrou o contrário.</p>`,
  contexto: `<p><strong>No mundo:</strong> a nomenclatura de 1787 está na origem dos nomes químicos sistemáticos usados até hoje ${tag('fato')}. <strong>No Brasil:</strong> a mineração colonial de ouro e diamantes envolveu técnicas químicas e metalúrgicas, e a Escola de Minas de Ouro Preto foi fundada em 1876 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a experimentação venceu a especulação', tag: 'argumento',
    premissas: ['Teorias antigas dos elementos eram difíceis de testar quantitativamente.', 'Boyle e Lavoisier exigiram medidas e experimentos reprodutíveis.', 'Teorias testáveis podem ser corrigidas e aperfeiçoadas.'],
    conclusao: 'Logo, a química moderna nasceu da união entre teoria e medida.',
    nota: 'Isso não torna inúteis as perguntas filosóficas sobre a matéria; separa-as das perguntas experimentais.',
  },
  objecoes: [
    { objecao: 'A alquimia era pura superstição sem relação com a química.', tag: 'debate',
      resposta: 'Havia elementos místicos e fraudes, mas também técnicas de laboratório (destilação, sublimação) e conhecimento de substâncias que passaram à química. Historiadores recentes mostram que Boyle e Newton também praticaram alquimia. A ruptura foi gradual.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com seis marcos (Empédocles, Demócrito, Aristóteles, alquimia, Boyle, Lavoisier), com ideia central e uma evidência ou argumento de cada um.</p>`,
  fonte: {
    obra: 'Robert Boyle, O químico cético (1661), prefácio e primeira parte', link: null,
    orientacao: `<p>Observe a forma de diálogo e as críticas às teorias dos elementos.</p>`,
  },
  perguntas: [
    { p: 'O que propuseram Leucipo e Demócrito?', r: 'Átomos indivisíveis movendo-se no vazio.' },
    { p: 'O que diz a lei de Boyle?', r: 'A temperatura constante, pressão e volume de um gás são inversamente proporcionais.' },
    { p: 'Como Lavoisier explicou a combustão?', r: 'Pela combinação com o oxigênio.' },
  ],
  exercicios: [
    mc('O químico cético é de:', ['1661', '1789', '1808', '1869'], 0, 'Boyle.'),
    mc('A nova nomenclatura química é de:', ['1787', '1661', '1869', '1913'], 0, 'Lavoisier e colegas.'),
    mc('Se a pressão dobra a temperatura constante, o volume:', ['Cai pela metade', 'Dobra', 'Não muda', 'Quadruplica'], 0, 'Boyle.'),
    mc('Paracelso voltou a alquimia para a:', ['Medicina', 'Música', 'Astronomia', 'Política'], 0, 'Iatroquímica.'),
    mc('Lavoisier morreu em:', ['1794', '1789', '1808', '1750'], 0, 'Terror.'),
    disc('Monte a linha do tempo com seis marcos.', ['Marcos', 'Ideias', 'Evidências', 'Ordem']),
  ],
  resumo: ['Empédocles e Aristóteles: elementos.', 'Demócrito: átomos.', 'Alquimia e Paracelso.', 'Boyle (1661).', 'Lavoisier: oxigênio, nomenclatura, 1789.'],
  referencias: [
    { texto: 'Aristóteles, Da geração e da corrupção.', livro: 'aristoteles-geracao' },
    { texto: 'Robert Boyle, O químico cético (1661).' },
    { texto: 'Antoine Lavoisier, Tratado elementar de química (1789).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1661', 'Boyle.'], ['1789', 'Tratado.'], ['Flogisto', 'Superado.']],
  avancado: {
    texto: `<h3>Priestley, Scheele e o oxigênio</h3>
<p>O oxigênio foi isolado por Carl Wilhelm Scheele e por Joseph Priestley na década de 1770, de modo independente ${tag('fato')}. Priestley interpretou o gás como "ar deflogisticado" ${tag('fato')}. Lavoisier deu-lhe o nome de oxigênio e o interpretou corretamente na combustão ${tag('fato')}. O caso mostra que descobrir algo e compreendê-lo podem ser passos diferentes ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Antoine Lavoisier, Tratado elementar de química (1789).' }],
    exercicios: [
      mc('Priestley chamou o oxigênio de:', ['Ar deflogisticado', 'Ar fixo', 'Hidrogênio', 'Azoto'], 0, 'Flogisto.'),
      mc('O nome "oxigênio" é de:', ['Lavoisier', 'Priestley', 'Scheele', 'Boyle'], 0, 'Nomenclatura.'),
      mc('O oxigênio foi isolado na década de:', ['1770', '1660', '1800', '1860'], 0, 'Data.'),
      disc('Explique por que descobrir e compreender o oxigênio foram passos distintos.', ['Descoberta', 'Interpretação', 'Lavoisier', 'Lição'])],
  },
}),

aula({
  id: 'qu2-2', titulo: 'De Dalton ao século XX, e a química no Brasil', duracao: '150 min',
  aprendera: ['Situar a teoria atômica de Dalton', 'Conhecer os modelos atômicos do século XX', 'Conhecer grandes avanços da química moderna', 'Conhecer marcos da química no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como a hipótese do átomo se tornou ciência, e o que a química fez no século XX?</p>
<h3>Século XIX</h3>
<p>John Dalton propôs em 1808 uma teoria atômica: cada elemento tem átomos de massa característica, que se combinam em proporções simples ${tag('fato')}. Avogadro propôs em 1811 que volumes iguais de gases, nas mesmas condições, têm o mesmo número de moléculas ${tag('fato')}. Friedrich Wöhler sintetizou a ureia em 1828 a partir de substância inorgânica ${tag('fato')}. Mendeleiev publicou a tabela periódica em 1869 ${tag('fato')}.</p>
<h3>Modelos atômicos</h3>
<p>J. J. Thomson identificou o elétron (1897); Rutherford propôs o núcleo atômico (1911); Bohr, órbitas quantizadas (1913); a mecânica quântica, nos anos 1920, deu o modelo de orbitais ${tag('fato')}.</p>
<h3>Século XX</h3>
<p>O processo Haber-Bosch de síntese da amônia permitiu fertilizantes em grande escala ${tag('fato')}. Polímeros sintéticos, como o náilon (Carothers, década de 1930), mudaram a indústria ${tag('fato')}. A estrutura do DNA (1953) uniu química e biologia ${tag('fato')}. Paul Anastas e John Warner propuseram em 1998 os doze princípios da química verde ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>José Bonifácio de Andrada e Silva, atuando como mineralogista na Europa, descreveu novos minerais ${tag('fato')}. A Escola de Minas de Ouro Preto (1876) formou engenheiros e químicos ${tag('fato')}. O Programa Nacional do Álcool (Proálcool), de 1975, estimulou o etanol combustível ${tag('fato')}. A Sociedade Brasileira de Química foi fundada em 1977 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Teoria atômica de Dalton', 'Elementos formados por átomos de massa característica.'],
    ['Lei de Avogadro', 'Volumes iguais de gases contêm o mesmo número de moléculas.'],
    ['Química orgânica', 'Química dos compostos de carbono.'],
    ['Orbital', 'Região de maior probabilidade de encontrar o elétron.'],
    ['Polímero', 'Molécula grande formada pela repetição de unidades.'],
  ],
  exemplos: `<p><strong>A ureia de Wöhler:</strong> acreditava-se que compostos dos seres vivos só podiam ser produzidos por uma "força vital". Wöhler obteve ureia, presente na urina, a partir de cianato de amônio. O resultado contribuiu para abandonar o vitalismo na química, embora o processo tenha sido gradual.</p>`,
  contexto: `<p><strong>No mundo:</strong> estima-se que grande parte da população mundial dependa de alimentos produzidos com fertilizantes nitrogenados sintéticos ${tag('fato')}. <strong>No Brasil:</strong> o Brasil é um dos maiores produtores mundiais de etanol de cana-de-açúcar ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o processo Haber-Bosch é ambíguo', tag: 'argumento',
    premissas: ['A síntese da amônia permitiu fertilizantes que alimentam bilhões de pessoas.', 'A mesma química serviu à produção de explosivos nas guerras.', 'O uso excessivo de fertilizantes causa poluição de águas.'],
    conclusao: 'Logo, uma descoberta química pode servir ao bem ou ao mal, e seu uso exige juízo moral.',
    nota: 'Fritz Haber também liderou o uso de gases tóxicos na Primeira Guerra Mundial.',
  },
  objecoes: [
    { objecao: 'A química moderna trouxe mais males (poluição, armas) que bens.', tag: 'debate',
      resposta: 'A química trouxe também medicamentos, saneamento, alimentos e materiais que prolongaram a vida. Os males vêm de usos irresponsáveis e de efeitos não previstos. A resposta é responsabilidade, não rejeição da ciência.' },
  ],
  aplicacao: `<p>Complete a linha do tempo com oito marcos de Dalton à química verde, incluindo três marcos brasileiros (José Bonifácio, Escola de Minas, Proálcool ou SBQ).</p>`,
  fonte: {
    obra: 'John Dalton, Novo sistema de filosofia química (1808), capítulo sobre a síntese química', link: null,
    orientacao: `<p>Observe as regras de combinação dos átomos e os símbolos que Dalton usa.</p>`,
  },
  perguntas: [
    { p: 'O que propôs Dalton?', r: 'Que cada elemento tem átomos de massa característica, que se combinam em proporções simples.' },
    { p: 'Quem propôs o núcleo atômico?', r: 'Rutherford, em 1911.' },
    { p: 'O que foi o Proálcool?', r: 'Programa brasileiro de 1975 de estímulo ao etanol combustível.' },
  ],
  exercicios: [
    mc('A teoria atômica de Dalton é de:', ['1808', '1789', '1869', '1911'], 0, 'Data.'),
    mc('O elétron foi identificado por:', ['Thomson', 'Bohr', 'Dalton', 'Rutherford'], 0, '1897.'),
    mc('A síntese da ureia por Wöhler é de:', ['1828', '1808', '1869', '1953'], 0, 'Vitalismo.'),
    mc('Os doze princípios da química verde são de:', ['1998', '1977', '1953', '1869'], 0, 'Anastas e Warner.'),
    mc('A Sociedade Brasileira de Química foi fundada em:', ['1977', '1876', '1975', '1952'], 0, 'SBQ.'),
    disc('Complete a linha do tempo com oito marcos e três brasileiros.', ['Marcos', 'Brasil', 'Datas', 'Ideias']),
  ],
  resumo: ['Dalton (1808), Avogadro (1811).', 'Wöhler (1828), Mendeleiev (1869).', 'Thomson, Rutherford, Bohr, orbitais.', 'Haber-Bosch, polímeros, DNA, química verde.', 'Brasil: José Bonifácio, Ouro Preto, Proálcool, SBQ.'],
  referencias: [
    { texto: 'John Dalton, Novo sistema de filosofia química (1808).' },
    { texto: 'Dmitri Mendeleiev, Princípios de química (1868–1870).' },
    { texto: 'Primo Levi, A tabela periódica (1975).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1808', 'Dalton.'], ['1911', 'Núcleo.'], ['1975', 'Proálcool.']],
  avancado: {
    texto: `<h3>O experimento de Rutherford</h3>
<p>Partículas alfa lançadas contra uma lâmina fina de ouro em geral atravessavam, mas algumas eram fortemente desviadas, até para trás ${tag('fato')}. Rutherford concluiu que a massa e a carga positiva do átomo se concentram num núcleo muito pequeno ${tag('fato')}. O experimento foi realizado por Geiger e Marsden sob sua direção ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química, capítulo sobre o átomo.' }],
    exercicios: [
      mc('A maioria das partículas alfa:', ['Atravessava a lâmina', 'Voltava', 'Era absorvida', 'Explodia'], 0, 'Resultado.'),
      mc('Os desvios fortes indicaram:', ['Um núcleo pequeno e denso', 'Átomos vazios sem núcleo', 'Elétrons pesados', 'Nada'], 0, 'Conclusão.'),
      mc('O experimento foi realizado por:', ['Geiger e Marsden', 'Bohr e Pauling', 'Curie e Becquerel', 'Dalton e Avogadro'], 0, 'Equipe.'),
      disc('Explique como o experimento da lâmina de ouro refutou o modelo de Thomson.', ['Modelo de Thomson', 'Resultado', 'Modelo nuclear', 'Conclusão'])],
  },
}),

aula({
  id: 'qu2-3', titulo: 'Lavoisier, Dalton e Mendeleiev', duracao: '150 min',
  aprendera: ['Expor o método de Lavoisier', 'Expor a teoria de Dalton e suas limitações', 'Expor o raciocínio de Mendeleiev', 'Comparar os três como modelos de ciência'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Três cientistas deram à química sua forma moderna. O que cada um ensina sobre o modo de fazer ciência?</p>
<h3>Lavoisier</h3>
<p>No prefácio do Tratado elementar de química, Lavoisier afirma que uma ciência depende de fatos, de ideias que os evocam e de palavras que os exprimem, e que reformar a linguagem é reformar a ciência ${tag('fato')}. Seu método une medida rigorosa, linguagem precisa e teoria ${tag('interpretacao')}.</p>
<h3>Dalton</h3>
<p>Dalton explicou as leis das proporções definidas e múltiplas supondo átomos de massas características ${tag('fato')}. Errou ao supor fórmulas simples (como HO para a água), o que a hipótese de Avogadro ajudaria a corrigir ${tag('fato')}.</p>
<h3>Mendeleiev</h3>
<p>Mendeleiev ordenou os elementos por massa atômica e propriedades, inverteu a ordem quando as propriedades o exigiam e deixou lacunas com previsões ${tag('fato')}. O "eka-silício" que previu correspondeu ao germânio, descoberto em 1886 ${tag('fato')}.</p>
<h3>Lição comum</h3>
<p>Os três mostram que a ciência avança quando une dados precisos, hipóteses ousadas e disposição para corrigir erros ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Lei das proporções definidas', 'Uma substância tem sempre a mesma proporção em massa de seus elementos.'],
    ['Lei das proporções múltiplas', 'Massas de um elemento que se combinam com massa fixa de outro estão em razão simples.'],
    ['Eka-silício', 'Nome dado por Mendeleiev ao elemento previsto abaixo do silício.'],
    ['Nomenclatura', 'Sistema de nomes de uma ciência.'],
    ['Previsão', 'Afirmação sobre algo ainda não observado, derivada de uma teoria.'],
  ],
  exemplos: `<p><strong>Proporções múltiplas:</strong> com 12 g de carbono, combinam-se 16 g de oxigênio (monóxido de carbono) ou 32 g (dióxido). As massas de oxigênio estão na razão simples 1:2. Dalton viu nisso a marca de átomos inteiros se combinando.</p>`,
  contexto: `<p><strong>No mundo:</strong> o elemento 101 recebeu o nome mendelévio em homenagem a Mendeleiev ${tag('fato')}. <strong>No Brasil:</strong> a nomenclatura química em português segue as recomendações da IUPAC, adaptadas por sociedades científicas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a linguagem precisa importa na ciência', tag: 'argumento',
    premissas: ['Nomes vagos escondem diferenças reais entre substâncias.', 'Uma nomenclatura sistemática faz o nome indicar a composição.', 'Assim, a linguagem passa a orientar o raciocínio.'],
    conclusao: 'Logo, reformar a linguagem foi parte da revolução química.',
    nota: 'É a tese do prefácio de Lavoisier, inspirada em Condillac.',
  },
  objecoes: [
    { objecao: 'Dalton errou fórmulas; logo, sua teoria não valia.', tag: 'debate',
      resposta: 'Uma teoria pode ser fecunda mesmo com erros de detalhe. O núcleo da teoria de Dalton (átomos com massas características) se manteve, e os erros foram corrigidos por outros. Assim avança a ciência.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura do prefácio do Tratado elementar de química, de Lavoisier, conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Antoine Lavoisier, Tratado elementar de química (1789), discurso preliminar', link: null,
    orientacao: `<p>Observe a relação entre fatos, ideias e palavras e a crítica às denominações antigas.</p>`,
  },
  perguntas: [
    { p: 'Qual a tese do prefácio de Lavoisier?', r: 'Que uma ciência depende de fatos, ideias e palavras, e reformar a linguagem é reformar a ciência.' },
    { p: 'Qual o erro de Dalton sobre a água?', r: 'Supor a fórmula HO.' },
    { p: 'Que elemento correspondeu ao eka-silício?', r: 'O germânio, descoberto em 1886.' },
  ],
  exercicios: [
    mc('O germânio foi descoberto em:', ['1886', '1869', '1808', '1911'], 0, 'Previsão confirmada.'),
    mc('CO e CO₂ ilustram a lei das proporções:', ['Múltiplas', 'Definidas', 'Recíprocas', 'Volumétricas'], 0, '1:2.'),
    mc('O elemento 101 chama-se:', ['Mendelévio', 'Daltônio', 'Lavoisiério', 'Curiério'], 0, 'Homenagem.'),
    mc('Lavoisier inspirou-se, quanto à linguagem, em:', ['Condillac', 'Kant', 'Hegel', 'Darwin'], 0, 'Prefácio.'),
    mc('Mendeleiev deixou na tabela:', ['Lacunas com previsões', 'Só elementos conhecidos', 'Números atômicos', 'Orbitais'], 0, 'Método.'),
    disc('Faça a ficha de leitura do prefácio de Lavoisier.', ['Tese', 'Argumentos', 'Conceitos', 'Avaliação']),
  ],
  resumo: ['Lavoisier: fatos, ideias, palavras.', 'Dalton: proporções e átomos.', 'Erros corrigidos.', 'Mendeleiev: lacunas e previsões.', 'Germânio (1886).'],
  referencias: [
    { texto: 'Antoine Lavoisier, Tratado elementar de química (1789).' },
    { texto: 'John Dalton, Novo sistema de filosofia química (1808).' },
    { texto: 'Dmitri Mendeleiev, Princípios de química (1868–1870).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler a fonte indicada'],
  revisao: [['Prefácio', 'Linguagem.'], ['HO', 'Erro de Dalton.'], ['Eka-silício', 'Germânio.']],
  avancado: {
    texto: `<h3>As previsões de Mendeleiev</h3>
<p>Mendeleiev previu, para o eka-silício, massa atômica próxima de 72 e densidade próxima de 5,5 g/cm³ ${tag('fato')}. O germânio descoberto por Clemens Winkler apresentou valores muito próximos ${tag('fato')}. Previu também o eka-alumínio (gálio, 1875) e o eka-boro (escândio, 1879) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Dmitri Mendeleiev, Princípios de química (1868–1870).' }],
    exercicios: [
      mc('O eka-alumínio correspondeu ao:', ['Gálio', 'Germânio', 'Escândio', 'Silício'], 0, '1875.'),
      mc('O germânio foi descoberto por:', ['Winkler', 'Mendeleiev', 'Dalton', 'Curie'], 0, 'Descoberta.'),
      mc('O eka-boro correspondeu ao:', ['Escândio', 'Gálio', 'Boro', 'Alumínio'], 0, '1879.'),
      disc('Explique por que previsões confirmadas fortalecem uma teoria mais do que explicações de dados já conhecidos.', ['Previsão', 'Explicação', 'Exemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'qu2-4', titulo: 'Marie Curie e Linus Pauling', duracao: '150 min',
  aprendera: ['Conhecer a obra de Marie Curie sobre radioatividade', 'Conhecer a teoria da ligação química de Pauling', 'Avaliar a relação entre ciência, ética e vida pessoal', 'Reconhecer a contribuição das mulheres à química'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Dois cientistas do século XX transformaram a química e viveram seu trabalho com intensidade e polêmicas. O que deixaram?</p>
<h3>Marie Curie</h3>
<p>Marie Skłodowska Curie (1867–1934), polonesa radicada na França, estudou a radioatividade, termo que difundiu ${tag('fato')}. Com Pierre Curie, descobriu o polônio e o rádio em 1898 ${tag('fato')}. Recebeu o Nobel de Física de 1903 (com Pierre Curie e Henri Becquerel) e o de Química de 1911, sendo a primeira pessoa a receber dois prêmios Nobel ${tag('fato')}. Morreu de doença provavelmente ligada à exposição à radiação ${tag('fato')}.</p>
<h3>Linus Pauling</h3>
<p>Linus Pauling (1901–1994) aplicou a mecânica quântica à ligação química em A natureza da ligação química (1939) ${tag('fato')}. Propôs uma escala de eletronegatividade e a estrutura em hélice alfa das proteínas ${tag('fato')}. Recebeu o Nobel de Química (1954) e o da Paz (1962), por sua campanha contra os testes nucleares ${tag('fato')}. Sua defesa de altas doses de vitamina C não foi confirmada por pesquisas posteriores ${tag('fato')}.</p>
<h3>Lições</h3>
<p>Curie mostra perseverança e rigor em condições difíceis; Pauling, a força das ideias unificadoras e o risco de defender teses sem evidência suficiente ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Radioatividade', 'Emissão espontânea de radiação por núcleos instáveis.'],
    ['Polônio', 'Elemento descoberto pelos Curie, nomeado em honra da Polônia.'],
    ['Eletronegatividade', 'Tendência de um átomo a atrair elétrons numa ligação.'],
    ['Hélice alfa', 'Estrutura em espiral de cadeias de proteínas.'],
    ['Ligação química', 'Interação que mantém átomos unidos.'],
  ],
  exemplos: `<p><strong>Os cadernos de Curie:</strong> os cadernos de laboratório de Marie Curie ainda são radioativos e guardados com cuidados especiais. O fato lembra o preço pessoal que pioneiros pagaram antes de se conhecerem os riscos da radiação.</p>`,
  contexto: `<p><strong>No mundo:</strong> Marie Curie foi a primeira mulher a receber um prêmio Nobel ${tag('fato')}. <strong>No Brasil:</strong> a radioterapia e a medicina nuclear, herdeiras do estudo da radioatividade, são oferecidas em hospitais do SUS ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que até grandes cientistas precisam de evidência', tag: 'argumento',
    premissas: ['Pauling foi um dos maiores químicos do século e acertou em muitas teses.', 'Sua defesa de megadoses de vitamina C não foi confirmada por estudos controlados.', 'A autoridade de um cientista não substitui a evidência.'],
    conclusao: 'Logo, cada afirmação científica deve ser julgada pela evidência, não pelo prestígio de quem a faz.',
    nota: 'O apelo à autoridade é legítimo apenas dentro da competência e com apoio de evidências.',
  },
  objecoes: [
    { objecao: 'A descoberta da radioatividade só trouxe a bomba atômica.', tag: 'debate',
      resposta: 'A radioatividade também deu a radioterapia, a medicina nuclear, a datação por carbono-14 e a energia nuclear para eletricidade. Como em outros casos, o uso depende de decisões humanas.' },
  ],
  aplicacao: `<p>Faça uma ficha biográfica e científica de Marie Curie e de Linus Pauling (datas, descobertas, prêmios, controvérsias) e escreva um parágrafo sobre o que cada um ensina a um estudante de ciência.</p>`,
  fonte: {
    obra: 'Marie Curie, Pesquisas sobre substâncias radioativas (1903), introdução', link: null,
    orientacao: `<p>Observe a descrição do método de medida da radioatividade e da separação dos novos elementos.</p>`,
  },
  perguntas: [
    { p: 'Que elementos os Curie descobriram em 1898?', r: 'O polônio e o rádio.' },
    { p: 'Quais Nobel recebeu Marie Curie?', r: 'Física (1903) e Química (1911).' },
    { p: 'O que é eletronegatividade?', r: 'A tendência de um átomo a atrair elétrons numa ligação.' },
  ],
  exercicios: [
    mc('A natureza da ligação química é de:', ['1939', '1903', '1954', '1911'], 0, 'Pauling.'),
    mc('Pauling recebeu o Nobel da Paz em:', ['1962', '1954', '1939', '1911'], 0, 'Testes nucleares.'),
    mc('O polônio homenageia:', ['A Polônia', 'Pierre Curie', 'Paris', 'Becquerel'], 0, 'Nome.'),
    mc('A defesa de megadoses de vitamina C por Pauling:', ['Não foi confirmada', 'Foi provada', 'Nunca existiu', 'Recebeu o Nobel'], 0, 'Evidência.'),
    mc('Marie Curie foi a primeira pessoa a receber:', ['Dois prêmios Nobel', 'O Nobel de Medicina', 'A Medalha Fields', 'Um Oscar'], 0, 'Recorde.'),
    disc('Faça as fichas de Curie e Pauling e o parágrafo de lições.', ['Curie', 'Pauling', 'Controvérsias', 'Lições']),
  ],
  resumo: ['Curie: radioatividade, polônio, rádio.', 'Dois Nobel (1903, 1911).', 'Pauling: ligação química (1939).', 'Eletronegatividade, hélice alfa.', 'Evidência acima do prestígio.'],
  referencias: [
    { texto: 'Marie Curie, Pesquisas sobre substâncias radioativas (1903).' },
    { texto: 'Linus Pauling, A natureza da ligação química (1939).' },
    { texto: 'Primo Levi, A tabela periódica (1975).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as fichas', 'Ler a fonte indicada'],
  revisao: [['1898', 'Polônio e rádio.'], ['1939', 'Pauling.'], ['Dois Nobel', 'Curie.']],
  avancado: {
    texto: `<h3>Meia-vida</h3>
<p>A meia-vida é o tempo para metade dos núcleos de uma amostra radioativa decair ${tag('fato')}. O carbono-14 tem meia-vida de cerca de 5 730 anos, o que permite datar materiais orgânicos de até dezenas de milhares de anos ${tag('fato')}. Após três meias-vidas, resta um oitavo da quantidade inicial ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química, capítulo sobre química nuclear.' }],
    exercicios: [
      mc('Após duas meias-vidas resta:', ['1/4', '1/2', '1/8', '0'], 0, '(1/2)².'),
      mc('A meia-vida do carbono-14 é de cerca de:', ['5 730 anos', '57 anos', '1 milhão de anos', '10 dias'], 0, 'Datação.'),
      mc('A datação por carbono-14 serve para materiais:', ['Orgânicos', 'Metálicos', 'Rochas muito antigas', 'Plásticos'], 0, 'Aplicação.'),
      disc('Calcule a idade aproximada de uma amostra que tem 25% do carbono-14 original.', ['Meias-vidas', 'Cálculo', 'Resultado', 'Limites'])],
  },
}),

avaliacao('qu2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da química e seus grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo.</li><li>Releia a ficha do prefácio de Lavoisier.</li></ul>`,
[
  disc('Trace a história da química em oito marcos, dos gregos à química verde, incluindo dois marcos brasileiros, com a ideia ou descoberta central de cada um.', ['Marcos', 'Ideias', 'Brasil', 'Ordem']),
  disc('Compare o método de Lavoisier, Dalton e Mendeleiev e explique, com o caso de Pauling, por que a evidência prevalece sobre a autoridade na ciência.', ['Três métodos', 'Comparação', 'Pauling', 'Conclusão']),
]),
];
