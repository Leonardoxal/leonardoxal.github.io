// Química I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Química).
// O que é a química; átomo, mol e tabela periódica; laboratório, medida e segurança; equações e estequiometria.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'qu1-1', titulo: 'O que é a química: matéria, substância e transformação', duracao: '150 min',
  aprendera: ['Definir matéria, substância e mistura', 'Distinguir transformações físicas e químicas', 'Reconhecer evidências de reação', 'Situar a química na filosofia da natureza'],
  prereq: ['Lógica (módulo M4)'],
  explicacao: `
<h3>O problema</h3>
<p>O ferro enferruja, o pão cresce, a vela queima. O que muda nessas coisas, e o que a química estuda?</p>
<h3>Matéria e substância</h3>
<p>Matéria é tudo o que tem massa e ocupa lugar no espaço ${tag('fato')}. Substância pura tem composição constante (água, cloreto de sódio); mistura reúne substâncias que conservam suas propriedades (água com sal, ar) ${tag('fato')}. Misturas podem ser homogêneas (uma fase) ou heterogêneas (mais de uma fase) ${tag('fato')}.</p>
<h3>Transformações</h3>
<p>Na transformação física, a substância continua a mesma (gelo derretendo); na química, formam-se substâncias novas (madeira queimando) ${tag('fato')}. Evidências de reação: mudança de cor, liberação de gás, formação de sólido, variação de energia (calor, luz) ${tag('fato')}. Nenhuma evidência isolada prova reação; é preciso verificar se surgiu substância nova ${tag('argumento')}.</p>
<h3>Química e filosofia</h3>
<p>Aristóteles, em Da geração e da corrupção, distinguiu alteração (mudança de qualidade) e geração (surgimento de nova substância), e discutiu a "mistura" em que os componentes formam algo novo ${tag('fato')}. Santo Tomás, no opúsculo A mistura dos elementos, sustentou que os elementos permanecem no composto não como substâncias atuais, mas "virtualmente", por suas qualidades ${tag('fato')}. A química moderna explica a combinação por átomos e ligações, e filósofos discutem até hoje como essas duas descrições se relacionam ${tag('debate')}.</p>`,
  vocabulario: [
    ['Matéria', 'Tudo o que tem massa e ocupa lugar no espaço.'],
    ['Substância pura', 'Matéria de composição constante.'],
    ['Mistura', 'Reunião de substâncias que conservam suas propriedades.'],
    ['Transformação química', 'Processo em que se formam substâncias novas.'],
    ['Fase', 'Porção uniforme de um sistema.'],
  ],
  exemplos: `<p><strong>A esponja de aço:</strong> deixada úmida, a esponja de aço escurece e esfarela: o ferro reage com oxigênio e água e forma óxidos e hidróxidos de ferro, substâncias novas. Já cortá-la em pedaços é transformação física: continua sendo ferro, só que em partes menores.</p>`,
  contexto: `<p><strong>No mundo:</strong> a União Internacional de Química Pura e Aplicada (IUPAC) padroniza nomes e símbolos ${tag('fato')}. <strong>No Brasil:</strong> a indústria química é um dos setores importantes da economia, e a química integra o currículo do ensino médio pela BNCC ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a química precisa distinguir mistura e combinação', tag: 'argumento',
    premissas: ['Numa mistura, os componentes conservam propriedades e podem ser separados por meios físicos.', 'Numa combinação química, surgem propriedades novas, e a separação exige reação.', 'Logo, os dois casos são diferentes na realidade, não só na descrição.'],
    conclusao: 'Logo, a distinção entre mistura e combinação é fundamental para a química.',
    nota: 'A mesma distinção ocupava Aristóteles e Tomás, com outros conceitos.',
  },
  objecoes: [
    { objecao: 'A química antiga e medieval não tem valor algum hoje.', tag: 'debate',
      resposta: 'As teorias antigas dos quatro elementos foram superadas. Mas perguntas como "o que permanece numa combinação?" continuam filosóficas e são discutidas por filósofos da química. O valor delas é conceitual, não experimental.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: classifique vinte fenômenos do cotidiano (ferver água, cozinhar ovo, dissolver açúcar, enferrujar, queimar gás) como transformação física ou química, justificando pelas evidências.</p>`,
  fonte: {
    obra: 'Aristóteles, Da geração e da corrupção, livro I, cap. 10 (a mistura)', link: null,
    orientacao: `<p>Observe a distinção entre mistura verdadeira e simples justaposição.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre substância pura e mistura?', r: 'A substância pura tem composição constante; a mistura reúne substâncias que conservam propriedades.' },
    { p: 'Cite duas evidências de reação química.', r: 'Mudança de cor e liberação de gás (também formação de sólido e variação de energia).' },
    { p: 'Como Tomás diz que os elementos permanecem no composto?', r: 'Virtualmente, por suas qualidades, não como substâncias atuais.' },
  ],
  exercicios: [
    mc('Gelo derretendo é transformação:', ['Física', 'Química', 'Nuclear', 'Nenhuma'], 0, 'Mesma substância.'),
    mc('Ar atmosférico é:', ['Mistura', 'Substância pura', 'Elemento', 'Íon'], 0, 'Vários gases.'),
    mc('Água e óleo formam mistura:', ['Heterogênea', 'Homogênea', 'Pura', 'Nenhuma'], 0, 'Duas fases.'),
    mc('Formação de substância nova indica transformação:', ['Química', 'Física', 'Mecânica', 'Ótica'], 0, 'Definição.'),
    mc('Da geração e da corrupção é de:', ['Aristóteles', 'Lavoisier', 'Tomás', 'Dalton'], 0, 'Obra.'),
    disc('Classifique os vinte fenômenos com justificativa.', ['Classificação', 'Evidências', 'Justificativa', 'Clareza']),
  ],
  resumo: ['Matéria, substância, mistura.', 'Homogênea e heterogênea.', 'Física e química.', 'Evidências de reação.', 'Aristóteles e Tomás: a mistura.'],
  referencias: [
    { texto: 'Aristóteles, Da geração e da corrupção.', livro: 'aristoteles-geracao' },
    { texto: 'Santo Tomás de Aquino, A mistura dos elementos.', livro: 'tomas-opusculos-naturais' },
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação', 'Ler a fonte indicada'],
  revisao: [['Mistura', 'Conserva propriedades.'], ['Química', 'Substância nova.'], ['Virtualmente', 'Tomás.']],
  avancado: {
    texto: `<h3>Separação de misturas</h3>
<p>Misturas se separam por processos físicos: filtração (sólido de líquido), decantação (líquidos imiscíveis ou sólido que sedimenta), destilação (por diferença de temperatura de ebulição), cromatografia (por diferença de afinidade com uma fase) ${tag('fato')}. A destilação fracionada separa os componentes do petróleo ${tag('fato')}. Escolher o método exige conhecer as propriedades dos componentes ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Theodore L. Brown e outros, Química: a ciência central, capítulo 1.' }],
    exercicios: [
      mc('Para separar areia de água usa-se:', ['Filtração', 'Destilação fracionada', 'Cromatografia', 'Eletrólise'], 0, 'Sólido e líquido.'),
      mc('Para separar componentes do petróleo usa-se:', ['Destilação fracionada', 'Filtração', 'Peneiração', 'Imantação'], 0, 'Ebulição.'),
      mc('A cromatografia separa por diferença de:', ['Afinidade', 'Cor apenas', 'Massa apenas', 'Volume'], 0, 'Fases.'),
      disc('Proponha um procedimento para separar sal, areia e água.', ['Etapas', 'Métodos', 'Justificativa', 'Segurança'])],
  },
}),

aula({
  id: 'qu1-2', titulo: 'Átomo, elemento, mol e tabela periódica', duracao: '150 min',
  aprendera: ['Definir átomo, elemento, molécula e íon', 'Usar número atômico e de massa', 'Calcular quantidade de matéria em mol', 'Ler a tabela periódica'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como contar partículas tão pequenas que nem os melhores microscópios ópticos as mostram?</p>
<h3>Átomo e elemento</h3>
<p>O átomo tem núcleo com prótons e nêutrons e, ao redor, elétrons ${tag('fato')}. O número atômico (Z) é o número de prótons e define o elemento ${tag('fato')}. Isótopos são átomos do mesmo elemento com números diferentes de nêutrons ${tag('fato')}. Molécula é um grupo de átomos ligados; íon é átomo ou grupo com carga ${tag('fato')}.</p>
<h3>Mol</h3>
<p>O mol é a unidade de quantidade de matéria do Sistema Internacional ${tag('fato')}. Desde 2019, define-se fixando a constante de Avogadro em exatamente 6,022 140 76 × 10²³ por mol ${tag('fato')}. Massa molar é a massa de um mol: água, H₂O, cerca de 18 g/mol ${tag('fato')}.</p>
<h3>Concentração</h3>
<p>A concentração em quantidade de matéria é n/V, em mol/L ${tag('fato')}.</p>
<h3>Tabela periódica</h3>
<p>Mendeleiev organizou em 1869 os elementos por massa e propriedades, deixando lacunas para elementos ainda não descobertos ${tag('fato')}. A tabela atual ordena por número atômico, em grupos (colunas) com propriedades semelhantes e períodos (linhas), e tem 118 elementos reconhecidos ${tag('fato')}.</p>`,
  vocabulario: [
    ['Número atômico', 'Número de prótons, que define o elemento.'],
    ['Isótopo', 'Átomo do mesmo elemento com número diferente de nêutrons.'],
    ['Íon', 'Átomo ou grupo de átomos com carga elétrica.'],
    ['Mol', 'Unidade de quantidade de matéria (6,022 × 10²³ entidades).'],
    ['Massa molar', 'Massa de um mol de uma substância, em g/mol.'],
  ],
  exemplos: `<p><strong>Quantas moléculas num copo de água?</strong> 180 g de água, com massa molar de cerca de 18 g/mol, são 10 mol. Multiplicando por 6,02 × 10²³, obtêm-se cerca de 6 × 10²⁴ moléculas. O mol permite passar da balança à contagem de partículas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a redefinição do Sistema Internacional de 2019 fixou valores exatos para constantes como a de Avogadro ${tag('fato')}. <strong>No Brasil:</strong> o Inmetro é a instituição responsável pela metrologia científica e industrial ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a tabela de Mendeleiev foi uma vitória científica', tag: 'argumento',
    premissas: ['Mendeleiev deixou lacunas e previu propriedades de elementos desconhecidos.', 'Elementos como o gálio e o germânio foram descobertos depois com propriedades próximas às previstas.', 'Previsões confirmadas são forte indício de que uma teoria capta algo real.'],
    conclusao: 'Logo, a tabela periódica revelou uma ordem real na natureza dos elementos.',
    nota: 'A explicação dessa ordem veio depois, com a estrutura eletrônica.',
  },
  objecoes: [
    { objecao: 'Se ninguém vê átomos, eles são só ficção útil.', tag: 'debate',
      resposta: 'No início do século XX, houve cientistas céticos. Mas o estudo do movimento browniano por Einstein (1905) e as medidas de Perrin convenceram a maioria. Hoje há imagens de átomos por microscopia de tunelamento. O realismo atômico é amplamente aceito.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: glossário de vinte termos e dez cálculos de quantidade de matéria (massa ↔ mol ↔ número de partículas ↔ concentração).</p>`,
  fonte: {
    obra: 'Dmitri Mendeleiev, artigo de 1869 sobre a relação entre propriedades e massas atômicas', link: null,
    orientacao: `<p>Observe como Mendeleiev usa as lacunas para fazer previsões.</p>`,
  },
  perguntas: [
    { p: 'O que define um elemento?', r: 'O número atômico, isto é, o número de prótons.' },
    { p: 'Qual o valor da constante de Avogadro?', r: '6,022 140 76 × 10²³ por mol, exato desde 2019.' },
    { p: 'Como se ordena a tabela atual?', r: 'Por número atômico, em grupos e períodos.' },
  ],
  exercicios: [
    mc('O carbono-12 e o carbono-14 são:', ['Isótopos', 'Íons', 'Moléculas', 'Elementos diferentes'], 0, 'Nêutrons.'),
    mc('36 g de água correspondem a:', ['2 mol', '1 mol', '18 mol', '0,5 mol'], 0, '36/18.'),
    mc('0,5 mol em 2 L dão concentração de:', ['0,25 mol/L', '1 mol/L', '4 mol/L', '2,5 mol/L'], 0, 'n/V.'),
    mc('A tabela de Mendeleiev é de:', ['1869', '1789', '1808', '1913'], 0, 'Data.'),
    mc('Os elementos reconhecidos hoje são:', ['118', '92', '103', '150'], 0, 'IUPAC.'),
    disc('Faça o glossário e os dez cálculos.', ['Termos', 'Cálculos', 'Unidades', 'Correção']),
  ],
  resumo: ['Prótons, nêutrons, elétrons.', 'Z define o elemento.', 'Mol e Avogadro (2019).', 'Massa molar e concentração.', 'Tabela: grupos e períodos.'],
  referencias: [
    { texto: 'Dmitri Mendeleiev, Princípios de química (1868–1870).' },
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
    { texto: 'Primo Levi, A tabela periódica (1975).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar glossário e cálculos', 'Ler a fonte indicada'],
  revisao: [['Z', 'Prótons.'], ['Mol', '6,022 × 10²³.'], ['1869', 'Mendeleiev.']],
  avancado: {
    texto: `<h3>Massa atômica média</h3>
<p>A massa atômica de um elemento na tabela é a média ponderada das massas de seus isótopos naturais ${tag('fato')}. O cloro tem cerca de 75% de cloro-35 e 25% de cloro-37, o que dá massa média de cerca de 35,5 ${tag('fato')}. Por isso massas atômicas raramente são números inteiros ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química, capítulo sobre átomos.' }],
    exercicios: [
      mc('A massa atômica média é:', ['Média ponderada dos isótopos', 'Soma dos isótopos', 'Massa do isótopo mais pesado', 'Número atômico'], 0, 'Definição.'),
      mc('A massa média do cloro é cerca de:', ['35,5', '35', '37', '36'], 0, '0,75·35 + 0,25·37.'),
      mc('Massas atômicas raramente são inteiras porque:', ['Há mistura de isótopos', 'Há erro de medida', 'É convenção', 'Não há nêutrons'], 0, 'Razão.'),
      disc('Calcule a massa média de um elemento com 60% de massa 10 e 40% de massa 11.', ['Cálculo', 'Ponderação', 'Resultado', 'Comentário'])],
  },
}),

aula({
  id: 'qu1-3', titulo: 'Laboratório: segurança, medida e erro', duracao: '150 min',
  aprendera: ['Conhecer regras de segurança em laboratório', 'Ler pictogramas de perigo', 'Distinguir exatidão e precisão', 'Usar algarismos significativos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como fazer experimentos com segurança e registrar medidas de modo honesto e útil?</p>
<h3>Segurança</h3>
<p>Usar óculos de proteção e jaleco, nunca provar ou cheirar diretamente substâncias, trabalhar com orientação, conhecer a localização de chuveiro e lava-olhos, e descartar resíduos corretamente ${tag('fato')}. A Ficha com Dados de Segurança (FDS) informa perigos, primeiros socorros e manuseio de cada produto ${tag('fato')}. Os pictogramas do Sistema Globalmente Harmonizado (GHS) indicam perigos como inflamável, corrosivo e tóxico ${tag('fato')}.</p>
<h3>Medida</h3>
<p>Exatidão é a proximidade do valor verdadeiro; precisão é a proximidade entre medidas repetidas ${tag('fato')}. Erros sistemáticos desviam sempre no mesmo sentido; erros aleatórios variam ${tag('fato')}.</p>
<h3>Algarismos significativos</h3>
<p>Os algarismos significativos indicam a confiança da medida: 12,30 mL tem quatro ${tag('fato')}. Em multiplicações e divisões, o resultado tem tantos significativos quanto o dado menos preciso ${tag('fato')}.</p>
<h3>Honestidade</h3>
<p>Registrar no caderno os dados como obtidos, sem "arredondar para dar certo", é exigência de honestidade científica ${tag('argumento')}.</p>`,
  vocabulario: [
    ['FDS', 'Ficha com Dados de Segurança de um produto químico.'],
    ['GHS', 'Sistema Globalmente Harmonizado de classificação e rotulagem.'],
    ['Exatidão', 'Proximidade do valor verdadeiro.'],
    ['Precisão', 'Proximidade entre medidas repetidas.'],
    ['Algarismo significativo', 'Dígito que indica confiança na medida.'],
  ],
  exemplos: `<p><strong>Alvo de dardos:</strong> dardos agrupados longe do centro são precisos mas não exatos (erro sistemático, como uma balança mal calibrada). Dardos espalhados em volta do centro são exatos em média, mas pouco precisos. O ideal é agrupados no centro.</p>`,
  contexto: `<p><strong>No mundo:</strong> o GHS foi desenvolvido no âmbito da ONU para padronizar a comunicação de perigos químicos ${tag('fato')}. <strong>No Brasil:</strong> a norma ABNT NBR 14725 trata da FDS e da rotulagem de produtos químicos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a segurança vem antes do experimento', tag: 'argumento',
    premissas: ['Acidentes químicos podem causar danos graves e irreversíveis.', 'A maioria dos acidentes é prevenível com regras simples.', 'Nenhum conhecimento obtido justifica expor pessoas a risco evitável.'],
    conclusao: 'Logo, a segurança é condição do experimento, não um acessório.',
    nota: 'Em casa, só se fazem experimentos com materiais seguros e com supervisão adequada.',
  },
  objecoes: [
    { objecao: 'Experimentos caseiros com produtos de limpeza são inofensivos.', tag: 'argumento',
      resposta: 'Não: misturar água sanitária com produtos ácidos ou com amônia libera gases tóxicos. Produtos domésticos também têm FDS e advertências. Nunca se devem misturar produtos de limpeza.' },
  ],
  aplicacao: `<p>Leia a FDS (ou o rótulo) de dois produtos domésticos, identifique os pictogramas e os cuidados, e resolva cinco exercícios de algarismos significativos e de exatidão × precisão.</p>`,
  fonte: {
    obra: 'ABNT NBR 14725 (FDS e rotulagem de produtos químicos), seções de identificação de perigos', link: null,
    orientacao: `<p>Observe as seções obrigatórias da ficha e o significado dos pictogramas.</p>`,
  },
  perguntas: [
    { p: 'O que informa a FDS?', r: 'Perigos, primeiros socorros e manuseio de um produto.' },
    { p: 'Qual a diferença entre exatidão e precisão?', r: 'Exatidão é proximidade do valor verdadeiro; precisão, proximidade entre medidas.' },
    { p: 'Por que nunca misturar água sanitária com amônia?', r: 'Porque libera gases tóxicos.' },
  ],
  exercicios: [
    mc('12,30 mL tem quantos algarismos significativos?', ['4', '3', '2', '5'], 0, 'O zero final conta.'),
    mc('Medidas agrupadas longe do valor verdadeiro são:', ['Precisas, não exatas', 'Exatas, não precisas', 'Exatas e precisas', 'Nenhuma'], 0, 'Erro sistemático.'),
    mc('2,0 × 3,15 com significativos corretos dá:', ['6,3', '6,30', '6', '6,300'], 0, 'Menor: 2.'),
    mc('O GHS foi desenvolvido no âmbito da:', ['ONU', 'IUPAC', 'Inmetro', 'SBQ'], 0, 'Padronização.'),
    mc('Diante de respingo nos olhos, deve-se:', ['Lavar abundantemente e buscar socorro', 'Esfregar', 'Esperar passar', 'Usar colírio qualquer'], 0, 'Segurança.'),
    disc('Faça a leitura das FDS e os cinco exercícios.', ['Pictogramas', 'Cuidados', 'Exercícios', 'Correção']),
  ],
  resumo: ['Regras de segurança.', 'FDS e GHS.', 'Exatidão × precisão.', 'Algarismos significativos.', 'Registro honesto.'],
  referencias: [
    { texto: 'ABNT NBR 14725.' },
    { texto: 'Peter Atkins e Loretta Jones, Princípios de química.' },
    { texto: 'Sociedade Brasileira de Química, Química Nova na Escola.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar leitura e exercícios', 'Ler a fonte indicada'],
  revisao: [['FDS', 'Segurança.'], ['Precisão', 'Repetição.'], ['Significativos', 'Confiança.']],
  avancado: {
    texto: `<h3>Média e desvio-padrão</h3>
<p>Repetir uma medida e calcular a média reduz o efeito dos erros aleatórios ${tag('fato')}. O desvio-padrão indica a dispersão das medidas ${tag('fato')}. Erros sistemáticos não diminuem com repetições; exigem calibração e comparação com padrões ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química, apêndice sobre medidas.' }],
    exercicios: [
      mc('Repetir medidas reduz o efeito de erros:', ['Aleatórios', 'Sistemáticos', 'Todos', 'Nenhum'], 0, 'Média.'),
      mc('Erros sistemáticos exigem:', ['Calibração', 'Mais repetições apenas', 'Arredondar', 'Nada'], 0, 'Padrões.'),
      mc('O desvio-padrão mede a:', ['Dispersão', 'Exatidão', 'Massa', 'Concentração'], 0, 'Estatística.'),
      disc('Calcule a média e o desvio-padrão de cinco medidas de volume e comente.', ['Média', 'Desvio', 'Interpretação', 'Algarismos'])],
  },
}),

aula({
  id: 'qu1-4', titulo: 'Equações químicas e estequiometria', duracao: '150 min',
  aprendera: ['Escrever e balancear equações químicas', 'Explicar a lei de conservação da massa', 'Fazer cálculos estequiométricos', 'Identificar reagente limitante'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quanto gás carbônico sai da queima de um litro de gasolina? Como prever as quantidades numa reação?</p>
<h3>Conservação da massa</h3>
<p>Lavoisier mostrou, com pesagens cuidadosas em recipientes fechados, que a massa total se conserva nas reações ${tag('fato')}. A frase "nada se perde, nada se cria, tudo se transforma" é uma síntese popular atribuída a ele ${tag('fato')}.</p>
<h3>Equações</h3>
<p>Uma equação química indica reagentes e produtos: CH₄ + 2 O₂ → CO₂ + 2 H₂O ${tag('fato')}. Balancear é ajustar coeficientes para que o número de átomos de cada elemento seja igual nos dois lados ${tag('fato')}.</p>
<h3>Estequiometria</h3>
<p>Os coeficientes dão proporções em mol ${tag('fato')}. Roteiro: converter dados para mol, usar a proporção da equação, converter o resultado para a unidade pedida ${tag('fato')}.</p>
<h3>Reagente limitante</h3>
<p>O reagente que acaba primeiro limita a quantidade de produto; o outro fica em excesso ${tag('fato')}. O rendimento real costuma ser menor que o teórico ${tag('fato')}.</p>`,
  vocabulario: [
    ['Reagente', 'Substância que reage.'],
    ['Produto', 'Substância formada.'],
    ['Coeficiente', 'Número que indica a proporção em mol na equação.'],
    ['Estequiometria', 'Cálculo das quantidades em reações químicas.'],
    ['Reagente limitante', 'Reagente que acaba primeiro e limita o produto.'],
  ],
  exemplos: `<p><strong>Queima do metano:</strong> CH₄ + 2 O₂ → CO₂ + 2 H₂O. Queimando 16 g de metano (1 mol), formam-se 1 mol de CO₂, isto é, 44 g. A massa dos reagentes (16 + 64 = 80 g) é igual à dos produtos (44 + 36 = 80 g), como pede a lei de Lavoisier.</p>`,
  contexto: `<p><strong>No mundo:</strong> inventários de emissões de gases de efeito estufa usam cálculos estequiométricos a partir do consumo de combustíveis ${tag('fato')}. <strong>No Brasil:</strong> o etanol de cana, C₂H₅OH, é amplamente usado como combustível veicular ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a conservação da massa transformou a química', tag: 'argumento',
    premissas: ['Antes de Lavoisier, a combustão era explicada pela perda de "flogisto".', 'Pesagens cuidadosas mostraram que metais calcinados ganham massa, absorvendo algo do ar.', 'A conservação da massa permitiu contabilizar reagentes e produtos com rigor.'],
    conclusao: 'Logo, a balança tornou a química uma ciência quantitativa.',
    nota: 'O "algo do ar" foi identificado como oxigênio.',
  },
  objecoes: [
    { objecao: 'Na queima, a madeira vira cinza leve; logo, a massa diminui.', tag: 'argumento',
      resposta: 'A massa parece diminuir porque gases (CO₂ e vapor de água) escapam. Num recipiente fechado, a massa total se conserva. A observação ingênua engana quando não se contam todos os produtos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: balanceie dez equações e resolva cinco problemas de estequiometria, um deles com reagente limitante.</p>`,
  fonte: {
    obra: 'Antoine Lavoisier, Tratado elementar de química (1789), parte I, capítulo sobre a fermentação vinosa', link: null,
    orientacao: `<p>Observe como Lavoisier enuncia o princípio de conservação e organiza o "balanço" da reação.</p>`,
  },
  perguntas: [
    { p: 'O que diz a lei de Lavoisier?', r: 'Que a massa total se conserva numa reação química.' },
    { p: 'O que é balancear uma equação?', r: 'Ajustar coeficientes para igualar os átomos de cada elemento nos dois lados.' },
    { p: 'O que é reagente limitante?', r: 'O que acaba primeiro e limita a quantidade de produto.' },
  ],
  exercicios: [
    mc('Em 2 H₂ + O₂ → 2 H₂O, 4 mol de H₂ formam:', ['4 mol de H₂O', '2 mol de H₂O', '8 mol de H₂O', '1 mol de H₂O'], 0, 'Proporção 1:1.'),
    mc('O Tratado elementar de química é de:', ['1789', '1661', '1808', '1869'], 0, 'Lavoisier.'),
    mc('Queimar 16 g de CH₄ produz de CO₂:', ['44 g', '16 g', '32 g', '88 g'], 0, '1 mol.'),
    mc('Com 2 mol de H₂ e 2 mol de O₂ em 2 H₂ + O₂ → 2 H₂O, o limitante é:', ['H₂', 'O₂', 'Nenhum', 'H₂O'], 0, 'O₂ sobra.'),
    mc('A teoria superada por Lavoisier foi a do:', ['Flogisto', 'Átomo', 'Mol', 'Orbital'], 0, 'História.'),
    disc('Balanceie as dez equações e resolva os cinco problemas.', ['Balanceamento', 'Conversões', 'Limitante', 'Unidades']),
  ],
  resumo: ['Conservação da massa.', 'Equação e balanceamento.', 'Coeficientes em mol.', 'Roteiro estequiométrico.', 'Limitante e rendimento.'],
  referencias: [
    { texto: 'Antoine Lavoisier, Tratado elementar de química (1789).' },
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
    { texto: 'Peter Atkins e Loretta Jones, Princípios de química.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar balanceamentos e problemas', 'Ler a fonte indicada'],
  revisao: [['Lavoisier', 'Massa conservada.'], ['Coeficientes', 'Mol.'], ['Limitante', 'Acaba primeiro.']],
  avancado: {
    texto: `<h3>Rendimento e economia atômica</h3>
<p>O rendimento percentual compara o produto obtido com o teórico ${tag('fato')}. A "economia atômica", conceito da química verde proposto por Barry Trost (1991), mede quanto dos átomos dos reagentes termina no produto desejado ${tag('fato')}. Processos com alta economia atômica geram menos resíduos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química.' }],
    exercicios: [
      mc('Obter 8 g quando o teórico é 10 g dá rendimento de:', ['80%', '8%', '125%', '20%'], 0, '8/10.'),
      mc('A economia atômica foi proposta por:', ['Barry Trost', 'Lavoisier', 'Dalton', 'Pauling'], 0, '1991.'),
      mc('Alta economia atômica significa:', ['Menos resíduos', 'Mais resíduos', 'Mais energia sempre', 'Nada'], 0, 'Química verde.'),
      disc('Calcule a economia atômica de uma reação simples de sua escolha.', ['Reação', 'Massas', 'Cálculo', 'Comentário'])],
  },
}),

avaliacao('qu1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre matéria, transformações, átomo, mol, segurança, medida e estequiometria, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça cinco cálculos de mol.</li><li>Refaça um problema com reagente limitante.</li></ul>`,
[
  disc('Na reação N₂ + 3 H₂ → 2 NH₃, calcule a massa de amônia obtida a partir de 28 g de N₂ e 10 g de H₂, identificando o reagente limitante e verificando a conservação da massa.', ['Conversão em mol', 'Limitante', 'Massa de produto', 'Verificação']),
  disc('Explique a diferença entre mistura e combinação química com exemplos e relacione-a com a posição de Aristóteles ou de Santo Tomás sobre a mistura.', ['Mistura', 'Combinação', 'Exemplos', 'Filosofia']),
]),
];
