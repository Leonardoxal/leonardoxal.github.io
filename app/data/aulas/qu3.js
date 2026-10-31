// Química III — escolas e debates (etapas 6 e 7 do percurso de Química).
// Atomismo e hilemorfismo; química verde e sustentabilidade; reducionismo e emergência; química e origem da vida.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'qu3-1', titulo: 'Atomismo, hilemorfismo e a natureza da substância', duracao: '150 min',
  aprendera: ['Comparar atomismo e hilemorfismo', 'Discutir o que permanece numa combinação química', 'Conhecer a posição de Duhem', 'Avaliar a relevância filosófica da química'],
  prereq: ['Química II (módulo QU2)'],
  explicacao: `
<h3>O problema</h3>
<p>A água é "apenas" átomos de hidrogênio e oxigênio arranjados, ou é uma substância nova com natureza própria?</p>
<h3>Atomismo</h3>
<p>Para o atomismo, as substâncias são arranjos de partículas, e as propriedades do todo resultam das partes e de suas relações ${tag('fato')}. O atomismo moderno, apoiado em experimentos, é a base da química ${tag('fato')}.</p>
<h3>Hilemorfismo</h3>
<p>Para Aristóteles e Tomás, uma substância é composta de matéria e forma; na combinação, surge uma nova forma substancial, e os elementos permanecem "virtualmente" ${tag('fato')}. Filósofos contemporâneos de orientação aristotélica sustentam que as propriedades novas dos compostos (a água não é inflamável como o hidrogênio, nem comburente como o oxigênio) indicam uma unidade real ${tag('interpretacao')}.</p>
<h3>Duhem</h3>
<p>Pierre Duhem, em Le mixte et la combinaison chimique (1902), discutiu a história da noção de "mistura" e defendeu que a química não precisa assumir uma imagem mecânica dos átomos para ser rigorosa ${tag('fato')}.</p>
<h3>Uma conciliação</h3>
<p>Muitos autores propõem que a teoria atômica descreve a estrutura material dos compostos, enquanto a pergunta pela unidade e natureza da substância é filosófica, e as duas respostas não se excluem ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Atomismo', 'Tese de que as substâncias são arranjos de partículas.'],
    ['Hilemorfismo', 'Tese de que os seres naturais são compostos de matéria e forma.'],
    ['Forma substancial', 'Princípio que faz algo ser o tipo de substância que é.'],
    ['Propriedade emergente', 'Propriedade do todo que não pertence às partes isoladas.'],
    ['Filosofia da química', 'Área que estuda os conceitos e métodos da química.'],
  ],
  exemplos: `<p><strong>O sal de cozinha:</strong> o sódio é um metal que reage violentamente com a água; o cloro é um gás tóxico. Combinados, formam o cloreto de sódio, que salgamos na comida. O exemplo mostra propriedades novas no composto, ponto de partida tanto da explicação química (íons e rede cristalina) quanto da reflexão filosófica sobre a unidade da substância.</p>`,
  contexto: `<p><strong>No mundo:</strong> a filosofia da química se consolidou como área a partir dos anos 1990, com revistas e sociedades próprias ${tag('fato')}. <strong>No Brasil:</strong> a história e a filosofia da química são estudadas em programas de ensino de ciências ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que propriedades novas pedem reflexão filosófica', tag: 'interpretacao',
    premissas: ['Compostos têm propriedades que seus componentes isolados não têm.', 'A química explica como essas propriedades surgem das ligações e da estrutura.', 'Resta perguntar se o composto é uma unidade real ou só um agregado.'],
    conclusao: 'Logo, a química levanta perguntas que pertencem também à filosofia da natureza.',
    nota: 'A resposta hilemórfica é uma entre várias; o debate continua.',
  },
  objecoes: [
    { objecao: 'O hilemorfismo é ciência medieval superada pela química moderna.', tag: 'debate',
      resposta: 'As teorias medievais sobre os quatro elementos foram superadas. Mas o hilemorfismo como tese filosófica sobre unidade e natureza das substâncias é discutido por filósofos atuais e não compete com a química experimental, pois responde a outra pergunta.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (parte 1): quadro comparativo de três concepções sobre o que é uma substância química (atomismo mecânico, hilemorfismo, emergentismo), com tese, autor, exemplo e objeção.</p>`,
  fonte: {
    obra: 'Santo Tomás de Aquino, A mistura dos elementos (De mixtione elementorum)', link: null,
    orientacao: `<p>Observe as opiniões que Tomás rejeita e sua solução: os elementos permanecem virtualmente.</p>`,
  },
  perguntas: [
    { p: 'O que diz o atomismo sobre as substâncias?', r: 'Que são arranjos de partículas.' },
    { p: 'Como os elementos permanecem no composto, segundo Tomás?', r: 'Virtualmente, por suas qualidades.' },
    { p: 'Que obra de Duhem trata da mistura?', r: 'Le mixte et la combinaison chimique (1902).' },
  ],
  exercicios: [
    mc('Le mixte et la combinaison chimique é de:', ['Duhem', 'Lavoisier', 'Pauling', 'Dalton'], 0, '1902.'),
    mc('O sódio e o cloro formam um composto:', ['Com propriedades novas', 'Idêntico a eles', 'Que é mistura', 'Instável sempre'], 0, 'NaCl.'),
    mc('Para o hilemorfismo, na combinação surge:', ['Uma nova forma substancial', 'Nada novo', 'Só um agregado', 'Vazio'], 0, 'Tese.'),
    mc('A filosofia da química se consolidou a partir dos anos:', ['1990', '1790', '1890', '1950'], 0, 'Área.'),
    mc('Uma propriedade do todo ausente nas partes é:', ['Emergente', 'Elementar', 'Isotópica', 'Molar'], 0, 'Termo.'),
    disc('Monte o quadro comparativo das três concepções.', ['Teses', 'Autores', 'Exemplos', 'Objeções']),
  ],
  resumo: ['Atomismo: arranjos.', 'Hilemorfismo: nova forma.', 'Elementos virtualmente.', 'Duhem (1902).', 'Duas perguntas, não rivais.'],
  referencias: [
    { texto: 'Santo Tomás de Aquino, A mistura dos elementos.', livro: 'tomas-opusculos-naturais' },
    { texto: 'Pierre Duhem, Le mixte et la combinaison chimique (1902).' },
    { texto: 'Aristóteles, Da geração e da corrupção.', livro: 'aristoteles-geracao' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro', 'Ler a fonte indicada'],
  revisao: [['Atomismo', 'Partículas.'], ['Hilemorfismo', 'Matéria e forma.'], ['Duhem', '1902.']],
  avancado: {
    texto: `<h3>Isômeros</h3>
<p>Isômeros são substâncias com a mesma fórmula molecular e estruturas diferentes ${tag('fato')}. O etanol e o éter dimetílico têm ambos C₂H₆O, mas o primeiro é líquido a temperatura ambiente e o segundo, gás ${tag('fato')}. A isomeria mostra que a identidade de uma substância depende da estrutura, não só da composição ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Theodore L. Brown e outros, Química: a ciência central, capítulo sobre química orgânica.' }],
    exercicios: [
      mc('Isômeros têm a mesma:', ['Fórmula molecular', 'Estrutura', 'Temperatura de ebulição sempre', 'Densidade'], 0, 'Definição.'),
      mc('Etanol e éter dimetílico têm fórmula:', ['C₂H₆O', 'CH₄O', 'C₂H₄', 'H₂O'], 0, 'Isômeros.'),
      mc('A isomeria mostra a importância da:', ['Estrutura', 'Massa apenas', 'Cor', 'Origem'], 0, 'Interpretação.'),
      disc('Explique como a isomeria ajuda a discutir o que é uma substância.', ['Isomeria', 'Composição', 'Estrutura', 'Filosofia'])],
  },
}),

aula({
  id: 'qu3-2', titulo: 'Química verde, risco e sustentabilidade', duracao: '150 min',
  aprendera: ['Conhecer os princípios da química verde', 'Conhecer casos de desastres químicos e suas lições', 'Explicar o princípio da precaução', 'Relacionar química e cuidado da casa comum'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A química produz remédios, alimentos e materiais, mas também poluição e acidentes. Como fazer uma química responsável?</p>
<h3>Química verde</h3>
<p>Paul Anastas e John Warner propuseram em 1998 doze princípios, entre eles: prevenir resíduos em vez de tratá-los, maximizar a economia atômica, usar solventes e reagentes menos perigosos, poupar energia, preferir matérias-primas renováveis, usar catalisadores e projetar produtos que se degradem sem dano ${tag('fato')}.</p>
<h3>Casos</h3>
<p>Em Bhopal, na Índia (1984), um vazamento de isocianato de metila matou milhares de pessoas ${tag('fato')}. Os CFCs, usados em refrigeração, destruíam a camada de ozônio; o Protocolo de Montreal (1987) os eliminou progressivamente, e Molina, Rowland e Crutzen receberam o Nobel de Química de 1995 por esses estudos ${tag('fato')}.</p>
<h3>Precaução</h3>
<p>A Declaração do Rio (1992), no princípio 15, afirma que, havendo ameaça de dano grave ou irreversível, a falta de certeza científica completa não deve adiar medidas eficazes de prevenção ${tag('fato')}.</p>
<h3>Casa comum</h3>
<p>O Papa Francisco, na Laudato si' (2015), chamou a cuidar da casa comum e criticou o paradigma tecnocrático que trata a natureza como objeto de exploração ilimitada ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Química verde', 'Química que reduz ou elimina substâncias perigosas.'],
    ['Catalisador', 'Substância que acelera a reação sem ser consumida.'],
    ['Camada de ozônio', 'Região da estratosfera que absorve radiação ultravioleta.'],
    ['Princípio da precaução', 'Prevenir dano grave mesmo sem certeza científica completa.'],
    ['Resíduo', 'Material indesejado gerado num processo.'],
  ],
  exemplos: `<p><strong>O Protocolo de Montreal:</strong> descoberto o mecanismo de destruição do ozônio pelos CFCs, os países concordaram em substituí-los. Medições indicam recuperação gradual da camada de ozônio ao longo das décadas. É um exemplo de ciência química orientando uma decisão política eficaz.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Protocolo de Montreal é frequentemente citado como um dos acordos ambientais mais bem-sucedidos ${tag('fato')}. <strong>No Brasil:</strong> a Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010) estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que prevenir é melhor que remediar', tag: 'argumento',
    premissas: ['Tratar resíduos depois de gerados custa e nem sempre elimina o dano.', 'Projetar processos sem resíduos perigosos evita o problema na origem.', 'O que evita o dano na origem é mais seguro e, a longo prazo, mais barato.'],
    conclusao: 'Logo, a química deve priorizar a prevenção.',
    nota: 'É o primeiro dos doze princípios da química verde.',
  },
  objecoes: [
    { objecao: 'O princípio da precaução paralisa a inovação.', tag: 'debate',
      resposta: 'Aplicado sem proporção, pode paralisar. Bem aplicado, exige medidas proporcionais a riscos graves e plausíveis, não proibir tudo o que é novo. O debate é sobre a medida, e envolve prudência.' },
  ],
  aplicacao: `<p>Escolha um produto do cotidiano (garrafa plástica, detergente, bateria) e analise seu ciclo de vida: matérias-primas, produção, uso, descarte; aponte dois riscos e proponha duas melhorias segundo os princípios da química verde.</p>`,
  fonte: {
    obra: 'Papa Francisco, Laudato si\' (2015), capítulo III (a raiz humana da crise ecológica)', link: null,
    orientacao: `<p>Observe a crítica ao paradigma tecnocrático e a proposta de uma técnica a serviço do bem comum.</p>`,
  },
  perguntas: [
    { p: 'Qual o primeiro princípio da química verde?', r: 'Prevenir resíduos em vez de tratá-los.' },
    { p: 'O que eliminou o Protocolo de Montreal?', r: 'Os CFCs, que destruíam a camada de ozônio.' },
    { p: 'O que diz o princípio 15 da Declaração do Rio?', r: 'Que a falta de certeza científica completa não deve adiar medidas contra dano grave ou irreversível.' },
  ],
  exercicios: [
    mc('Os doze princípios da química verde são de:', ['1998', '1987', '1992', '2015'], 0, 'Anastas e Warner.'),
    mc('O desastre de Bhopal foi em:', ['1984', '1987', '1992', '2010'], 0, 'Índia.'),
    mc('O Protocolo de Montreal é de:', ['1987', '1995', '1992', '2015'], 0, 'CFCs.'),
    mc('A Política Nacional de Resíduos Sólidos é de:', ['2010', '1998', '2015', '1992'], 0, 'Lei 12.305.'),
    mc('Um catalisador:', ['Acelera sem ser consumido', 'É consumido', 'Retarda sempre', 'É resíduo'], 0, 'Definição.'),
    disc('Analise o ciclo de vida do produto escolhido.', ['Ciclo de vida', 'Riscos', 'Princípios aplicados', 'Melhorias']),
  ],
  resumo: ['Doze princípios (1998).', 'Bhopal (1984).', 'CFCs e Montreal (1987).', 'Precaução (Rio, 1992).', 'Laudato si\' (2015).'],
  referencias: [
    { texto: 'Paul Anastas e John Warner, Green Chemistry: Theory and Practice (1998).' },
    { texto: 'Papa Francisco, Laudato si\' (2015).' },
    { texto: 'Declaração do Rio sobre Meio Ambiente e Desenvolvimento (1992).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise de ciclo de vida', 'Ler a fonte indicada'],
  revisao: [['Prevenção', '1º princípio.'], ['Montreal', 'CFCs.'], ['Precaução', 'Rio 15.']],
  avancado: {
    texto: `<h3>A química do ozônio</h3>
<p>Na estratosfera, a radiação ultravioleta quebra moléculas de CFC e libera átomos de cloro ${tag('fato')}. Um átomo de cloro reage com o ozônio (Cl + O₃ → ClO + O₂) e é regenerado em reações seguintes, de modo que um único átomo pode destruir muitas moléculas de ozônio ${tag('fato')}. É um exemplo de reação em cadeia catalítica ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Paul Anastas e John Warner, Green Chemistry: Theory and Practice (1998).' }],
    exercicios: [
      mc('O cloro na estratosfera vem da quebra de:', ['CFCs', 'Água', 'Ozônio', 'Gás carbônico'], 0, 'Fonte.'),
      mc('O cloro atua como:', ['Catalisador', 'Produto final', 'Reagente consumido de vez', 'Solvente'], 0, 'Regenerado.'),
      mc('Cl + O₃ produz:', ['ClO + O₂', 'Cl₂ + O', 'HCl', 'CO₂'], 0, 'Reação.'),
      disc('Explique por que poucos átomos de cloro podem destruir muito ozônio.', ['Reação', 'Regeneração', 'Cadeia', 'Consequência'])],
  },
}),

aula({
  id: 'qu3-3', titulo: 'A química se reduz à física? Reducionismo e emergência', duracao: '150 min',
  aprendera: ['Formular a questão da redução da química à física', 'Conhecer a frase de Dirac e seu contexto', 'Explicar argumentos a favor e contra a redução', 'Avaliar a autonomia da química'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Se os átomos obedecem às leis da física quântica, a química é apenas física aplicada?</p>
<h3>Dirac</h3>
<p>Paul Dirac escreveu em 1929 que as leis físicas necessárias para a teoria de grande parte da física e de toda a química já eram completamente conhecidas, e que a dificuldade estava em resolver as equações, complicadas demais ${tag('fato')}.</p>
<h3>A favor da redução</h3>
<p>A química quântica calcula com precisão crescente propriedades de moléculas a partir da física ${tag('fato')}. Não há indício de forças "químicas" que violem a física ${tag('fato')}.</p>
<h3>Contra a redução forte</h3>
<p>Para moléculas reais, os cálculos exigem aproximações e conceitos químicos (ligação, forma molecular, grupo funcional) que não se deduzem diretamente da equação fundamental ${tag('interpretacao')}. A tabela periódica e a química orgânica organizam o conhecimento em níveis próprios ${tag('interpretacao')}. Filósofos da química, como Eric Scerri, discutem esses limites ${tag('fato')}.</p>
<h3>Emergência</h3>
<p>A posição emergentista sustenta que a química depende da física, mas tem leis, conceitos e explicações próprios, assim como a biologia em relação à química ${tag('interpretacao')}. O debate é aberto ${tag('debate')}.</p>`,
  vocabulario: [
    ['Redução', 'Explicação completa de uma teoria por outra mais básica.'],
    ['Química quântica', 'Aplicação da mecânica quântica a átomos e moléculas.'],
    ['Aproximação', 'Simplificação que torna um cálculo possível.'],
    ['Emergência', 'Surgimento de propriedades e leis próprias num nível de organização.'],
    ['Autonomia de uma ciência', 'Posse de conceitos e métodos próprios.'],
  ],
  exemplos: `<p><strong>A forma da molécula de água:</strong> a química diz que a água é angular, com ângulo de cerca de 104,5°, e explica isso por pares de elétrons. A química quântica reproduz esse resultado com cálculos aproximados. Mas a própria noção de "forma molecular" pressupõe tratar os núcleos como fixos, uma aproximação. Dependência da física não elimina conceitos próprios.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Nobel de Química de 1998 premiou Walter Kohn e John Pople por métodos de química computacional ${tag('fato')}. <strong>No Brasil:</strong> grupos de química teórica e computacional atuam em universidades públicas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que dependência não é redução', tag: 'argumento',
    premissas: ['A química depende da física: nada na química viola as leis físicas.', 'Mas explicações químicas usam conceitos que não se definem diretamente nas equações físicas.', 'Depender de algo não é ser idêntico a ele.'],
    conclusao: 'Logo, a química pode depender da física sem se reduzir a ela.',
    nota: 'É uma posição comum na filosofia da química, não um consenso absoluto.',
  },
  objecoes: [
    { objecao: 'Com computadores mais potentes, tudo será física.', tag: 'debate',
      resposta: 'Computadores ampliam o que se calcula, e isso é real. Mas calcular não é o mesmo que compreender; os químicos continuam a precisar de conceitos que organizem e expliquem os resultados. Se isso será sempre assim é questão aberta.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (parte 2): ensaio "a química é apenas física aplicada?", com a frase de Dirac, um argumento a favor da redução, um contra e sua posição, distinguindo dado, modelo e tese filosófica.</p>`,
  fonte: {
    obra: 'Paul Dirac, "Quantum Mechanics of Many-Electron Systems" (1929), introdução', link: null,
    orientacao: `<p>Leia a frase sobre as leis da química e o contexto: Dirac fala também da necessidade de métodos aproximados.</p>`,
  },
  perguntas: [
    { p: 'O que afirmou Dirac em 1929?', r: 'Que as leis físicas da química eram conhecidas, mas as equações eram complicadas demais para resolver.' },
    { p: 'Qual um argumento contra a redução forte?', r: 'Os cálculos exigem aproximações e conceitos químicos que não se deduzem diretamente.' },
    { p: 'O que sustenta o emergentismo?', r: 'Que a química depende da física, mas tem leis e conceitos próprios.' },
  ],
  exercicios: [
    mc('A frase de Dirac é de:', ['1929', '1869', '1998', '1789'], 0, 'Data.'),
    mc('O Nobel de Química de 1998 premiou:', ['Química computacional', 'Radioatividade', 'Ozônio', 'Polímeros'], 0, 'Kohn e Pople.'),
    mc('O ângulo da molécula de água é cerca de:', ['104,5°', '180°', '90°', '120°'], 0, 'Geometria.'),
    mc('Depender de algo implica ser idêntico a ele?', ['Não', 'Sim', 'Sempre', 'Só em química'], 0, 'Argumento.'),
    mc('Eric Scerri é conhecido pela:', ['Filosofia da química', 'Química verde', 'Radioatividade', 'Bioquímica'], 0, 'Autor.'),
    disc('Escreva o ensaio sobre química e física.', ['Dirac', 'Argumento a favor', 'Argumento contra', 'Posição']),
  ],
  resumo: ['Dirac (1929).', 'A favor: química quântica.', 'Contra: aproximações e conceitos.', 'Emergência.', 'Dependência ≠ redução.'],
  referencias: [
    { texto: 'Paul Dirac, "Quantum Mechanics of Many-Electron Systems" (1929).' },
    { texto: 'Eric Scerri, The Periodic Table: Its Story and Its Significance (2007).' },
    { texto: 'Pierre Duhem, Le mixte et la combinaison chimique (1902).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler a fonte indicada'],
  revisao: [['Dirac', '1929.'], ['Emergência', 'Leis próprias.'], ['Redução', 'Debate.']],
  avancado: {
    texto: `<h3>A aproximação de Born-Oppenheimer</h3>
<p>Como os núcleos são muito mais pesados que os elétrons, Born e Oppenheimer (1927) propuseram tratar o movimento eletrônico com os núcleos fixos ${tag('fato')}. Essa aproximação permite falar de geometria molecular e de superfícies de energia ${tag('fato')}. Alguns filósofos veem nela um ponto em que a química introduz algo além da física fundamental ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Eric Scerri, The Periodic Table: Its Story and Its Significance (2007).' }],
    exercicios: [
      mc('A aproximação de Born-Oppenheimer trata os núcleos como:', ['Fixos', 'Leves', 'Inexistentes', 'Elétrons'], 0, 'Massa.'),
      mc('Ela é de:', ['1927', '1929', '1869', '1998'], 0, 'Data.'),
      mc('Ela permite falar de:', ['Geometria molecular', 'Radioatividade', 'Isótopos', 'Mol'], 0, 'Consequência.'),
      disc('Explique por que a aproximação de Born-Oppenheimer é relevante para o debate sobre redução.', ['Aproximação', 'Forma molecular', 'Debate', 'Posição'])],
  },
}),

aula({
  id: 'qu3-4', titulo: 'Química e origem da vida', duracao: '150 min',
  aprendera: ['Conhecer a refutação da geração espontânea', 'Conhecer o experimento de Miller-Urey', 'Conhecer hipóteses atuais sobre a origem da vida', 'Relacionar ciência e doutrina da criação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como surgiu a vida a partir da matéria não viva? O que a química sabe e o que não sabe sobre isso?</p>
<h3>Geração espontânea</h3>
<p>Louis Pasteur, nos anos 1860, mostrou com frascos de pescoço de cisne que caldos esterilizados não geram micróbios se protegidos da contaminação ${tag('fato')}. A vida atual vem de vida preexistente ${tag('fato')}.</p>
<h3>Química prebiótica</h3>
<p>Oparin e Haldane, nos anos 1920, propuseram que moléculas orgânicas poderiam formar-se na Terra primitiva ${tag('fato')}. Stanley Miller e Harold Urey (1953) obtiveram aminoácidos a partir de uma mistura de gases submetida a descargas elétricas ${tag('fato')}.</p>
<h3>Hipóteses atuais</h3>
<p>A hipótese do "mundo de RNA" sugere que moléculas de RNA, capazes de guardar informação e catalisar reações, precederam DNA e proteínas ${tag('hipotese')}. Fontes hidrotermais e outros ambientes são investigados ${tag('hipotese')}. Não há ainda explicação completa e consensual da origem da vida ${tag('fato')}.</p>
<h3>Criação</h3>
<p>Para a doutrina católica, a criação não é um processo físico entre outros, mas a dependência de todo o ser em relação a Deus; causas naturais e criação não competem ${tag('doutrina')}. Por isso, explicar processos químicos da origem da vida, se se chegar a isso, não excluiria a criação ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Geração espontânea', 'Antiga tese de que seres vivos surgem da matéria não viva diretamente.'],
    ['Química prebiótica', 'Estudo das reações que poderiam preceder a vida.'],
    ['Aminoácido', 'Molécula que forma proteínas.'],
    ['Mundo de RNA', 'Hipótese de uma fase da vida baseada em RNA.'],
    ['Causa primeira', 'Para Tomás, Deus como fonte do ser de todas as coisas.'],
  ],
  exemplos: `<p><strong>O frasco de pescoço de cisne:</strong> Pasteur ferveu caldo em frascos com gargalo curvo, que deixava entrar ar mas retinha poeira e micróbios na curva. O caldo ficou estéril. Quebrado o gargalo, logo se contaminou. Um experimento simples encerrou uma controvérsia antiga.</p>`,
  contexto: `<p><strong>No mundo:</strong> a astrobiologia busca sinais de química prebiótica em outros corpos do Sistema Solar ${tag('fato')}. <strong>No Brasil:</strong> pesquisadores brasileiros participam de estudos de astrobiologia em universidades públicas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ciência e criação não competem', tag: 'doutrina',
    premissas: ['A ciência estuda como causas naturais produzem efeitos naturais.', 'A criação, segundo Tomás, é a causa do próprio ser das coisas e de suas causas.', 'Uma explicação no nível das causas naturais não responde à pergunta pelo ser.'],
    conclusao: 'Logo, uma explicação química da origem da vida não excluiria a criação.',
    nota: 'Tomás distingue causa primeira e causas segundas; ver Suma Teológica, I, q. 105, a. 5.',
  },
  objecoes: [
    { objecao: 'Se não sabemos como a vida surgiu, isso prova que Deus a criou diretamente.', tag: 'debate',
      resposta: 'Usar lacunas do conhecimento como prova de Deus ("Deus das lacunas") é arriscado, pois lacunas podem ser preenchidas. A doutrina da criação não depende dessas lacunas: afirma Deus como causa do ser de tudo, inclusive das causas naturais que a ciência descobrir.' },
  ],
  aplicacao: `<p>Escreva um texto de uma página distinguindo, sobre a origem da vida, o que é fato (Pasteur, Miller-Urey), o que é hipótese (mundo de RNA) e o que é doutrina (criação), com um exemplo de confusão entre esses níveis.</p>`,
  fonte: {
    obra: 'Santo Tomás de Aquino, Suma Teológica, I, q. 105, a. 5 (se Deus age em todo agente)', link: null,
    orientacao: `<p>Observe como Tomás explica que Deus age nas causas naturais sem as anular.</p>`,
  },
  perguntas: [
    { p: 'O que mostrou Pasteur?', r: 'Que caldos esterilizados não geram micróbios se protegidos da contaminação.' },
    { p: 'O que obtiveram Miller e Urey?', r: 'Aminoácidos a partir de gases submetidos a descargas elétricas.' },
    { p: 'O que é a hipótese do mundo de RNA?', r: 'Que moléculas de RNA precederam DNA e proteínas.' },
  ],
  exercicios: [
    mc('O experimento de Miller-Urey é de:', ['1953', '1860', '1929', '1998'], 0, 'Aminoácidos.'),
    mc('Os frascos de Pasteur tinham:', ['Pescoço de cisne', 'Tampa de ouro', 'Vácuo total', 'Gelo'], 0, 'Experimento.'),
    mc('O mundo de RNA é:', ['Hipótese', 'Fato comprovado', 'Doutrina', 'Lei'], 0, 'Nível.'),
    mc('Oparin e Haldane propuseram suas ideias nos anos:', ['1920', '1860', '1950', '1990'], 0, 'Química prebiótica.'),
    mc('Para Tomás, Deus e as causas naturais:', ['Não competem', 'Competem', 'São iguais', 'Não existem'], 0, 'Causa primeira.'),
    disc('Escreva o texto distinguindo fato, hipótese e doutrina.', ['Fatos', 'Hipóteses', 'Doutrina', 'Exemplo de confusão']),
  ],
  resumo: ['Pasteur (anos 1860).', 'Oparin e Haldane.', 'Miller-Urey (1953).', 'Mundo de RNA: hipótese.', 'Criação e causas naturais.'],
  referencias: [
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 105.' },
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
    { texto: 'Catecismo da Igreja Católica, §§ 279–314.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o texto', 'Ler a fonte indicada'],
  revisao: [['Pasteur', 'Sem geração espontânea.'], ['1953', 'Miller-Urey.'], ['RNA', 'Hipótese.']],
  avancado: {
    texto: `<h3>Quiralidade e vida</h3>
<p>Muitas moléculas existem em duas formas espelhadas (enantiômeros) ${tag('fato')}. Os aminoácidos das proteínas dos seres vivos são quase todos da forma L, e os açúcares do DNA e do RNA, da forma D ${tag('fato')}. Como surgiu essa preferência é uma das questões abertas da química prebiótica ${tag('hipotese')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química, capítulo sobre estereoquímica.' }],
    exercicios: [
      mc('Enantiômeros são formas:', ['Espelhadas', 'Idênticas', 'Isotópicas', 'Ionizadas'], 0, 'Quiralidade.'),
      mc('Os aminoácidos das proteínas são quase todos da forma:', ['L', 'D', 'Meio a meio', 'Nenhuma'], 0, 'Homoquiralidade.'),
      mc('A origem da homoquiralidade é:', ['Questão aberta', 'Resolvida', 'Irrelevante', 'Mito'], 0, 'Hipótese.'),
      disc('Explique o que é quiralidade e por que a homoquiralidade da vida é um problema para a química prebiótica.', ['Quiralidade', 'Exemplo', 'Problema', 'Hipóteses'])],
  },
}),

avaliacao('qu3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre concepções da matéria, química verde e debates da química, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu quadro comparativo.</li><li>Releia seu ensaio.</li></ul>`,
[
  disc('Compare atomismo e hilemorfismo a partir de um exemplo de composto e discuta se a química se reduz à física, com Dirac e um argumento contra a redução forte.', ['Atomismo e hilemorfismo', 'Exemplo', 'Dirac', 'Posição']),
  disc('Explique os princípios da química verde e o princípio da precaução com um caso real, e distinga fato, hipótese e doutrina sobre a origem da vida.', ['Química verde', 'Caso', 'Precaução', 'Origem da vida']),
]),
];
