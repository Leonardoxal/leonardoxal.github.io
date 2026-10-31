// Física IV — os grandes ramos da física (etapa 8 do percurso de Física).
// Mecânica; energia e termodinâmica; eletricidade, magnetismo e ondas; relatividade e mecânica quântica.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'fi4-1', titulo: 'Mecânica: movimento, forças e leis de Newton', duracao: '150 min',
  aprendera: ['Resolver problemas de movimento uniformemente variado', 'Aplicar as leis de Newton a situações simples', 'Calcular força de atrito e peso', 'Interpretar a terceira lei corretamente'],
  prereq: ['Física III (módulo FI3)'],
  explicacao: `
<h3>O problema</h3>
<p>Quanto espaço um carro precisa para frear? Que força empurra um foguete? A mecânica responde com poucas equações.</p>
<h3>Cinemática</h3>
<p>No movimento uniformemente variado, com aceleração constante a: v = v₀ + a·t, d = v₀·t + ½a·t² e v² = v₀² + 2a·d ${tag('fato')}. Um carro a 20 m/s que freia com desaceleração de 5 m/s² para em 4 s e percorre 20² ÷ (2 × 5) = 40 m ${tag('fato')}.</p>
<h3>As leis de Newton</h3>
<p>Primeira lei: sem força resultante, um corpo mantém repouso ou movimento retilíneo uniforme ${tag('fato')}. Segunda: a força resultante é igual à massa vezes a aceleração, F = m·a ${tag('fato')}. Terceira: a toda ação corresponde reação igual e oposta, aplicada no outro corpo ${tag('fato')}.</p>
<h3>Peso e atrito</h3>
<p>O peso é a força gravitacional, P = m·g; uma pessoa de 70 kg pesa cerca de 686 N ${tag('fato')}. O atrito cinético é aproximadamente proporcional à força normal: f = μ·N ${tag('fato')}. Com μ = 0,7 (pneu em asfalto seco, valor típico), a desaceleração máxima de frenagem é cerca de 0,7 × 9,8 ≈ 6,9 m/s² ${tag('interpretacao')}.</p>
<h3>Terceira lei</h3>
<p>Ação e reação atuam em corpos diferentes, por isso não se anulam: o foguete empurra os gases para trás, e os gases empurram o foguete para frente ${tag('fato')}.</p>`,
  vocabulario: [
    ['Aceleração', 'Taxa de variação da velocidade.'],
    ['Força resultante', 'Soma vetorial de todas as forças sobre um corpo.'],
    ['Peso', 'Força gravitacional sobre um corpo: P = m·g.'],
    ['Força normal', 'Força de contato perpendicular à superfície.'],
    ['Coeficiente de atrito', 'Razão entre a força de atrito e a normal.'],
  ],
  exemplos: `<p><strong>Distância de frenagem e velocidade:</strong> pela fórmula v² = 2a·d, a distância de frenagem cresce com o quadrado da velocidade. A 20 m/s (72 km/h), com 5 m/s², são 40 m; a 30 m/s (108 km/h), 90 m — mais do dobro. Somando o tempo de reação (cerca de 1 s, percorrendo 20 ou 30 m), a diferença fica ainda maior.</p>`,
  contexto: `<p><strong>No mundo:</strong> as leis de Newton permitem calcular trajetórias de satélites e sondas com grande precisão ${tag('fato')}. <strong>No Brasil:</strong> o Código de Trânsito estabelece limites de velocidade cuja lógica se apoia nessas relações ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que pequenos aumentos de velocidade são perigosos', tag: 'argumento',
    premissas: ['A distância de frenagem é proporcional ao quadrado da velocidade.', 'A energia a dissipar numa colisão também cresce com o quadrado da velocidade.', 'Logo, aumentos modestos de velocidade aumentam muito o risco.'],
    conclusao: 'Logo, respeitar limites de velocidade é exigência física de segurança, e não só regra legal.',
    nota: 'A física aqui sustenta um dever moral de prudência em relação à vida alheia.',
  },
  objecoes: [
    { objecao: 'Se ação e reação são iguais e opostas, nada se move.', tag: 'argumento',
      resposta: 'Ação e reação atuam em corpos diferentes. Para saber se um corpo acelera, somam-se apenas as forças sobre ele. O cavalo puxa a carroça, a carroça puxa o cavalo, mas o chão empurra o cavalo para frente, e o conjunto se move.' },
  ],
  aplicacao: `<p>Resolva cinco problemas: tempo e distância de frenagem para duas velocidades, peso de três objetos, força para acelerar um carro, e explique a terceira lei num foguete e numa caminhada.</p>`,
  fonte: {
    obra: 'Isaac Newton, Princípios matemáticos da filosofia natural (1687), axiomas ou leis do movimento', link: null,
    orientacao: `<p>Leia o enunciado original das três leis e os corolários sobre composição de forças.</p>`,
  },
  perguntas: [
    { p: 'Um carro a 20 m/s freia a 5 m/s²: em quanto tempo para?', r: 'Em 4 s.' },
    { p: 'Quanto pesa uma pessoa de 70 kg?', r: 'Cerca de 686 N.' },
    { p: 'Por que ação e reação não se anulam?', r: 'Porque atuam em corpos diferentes.' },
  ],
  exercicios: [
    mc('A 30 m/s com desaceleração de 5 m/s², a distância de frenagem é:', ['45 m', '60 m', '90 m', '150 m'], 2, '900 ÷ 10.'),
    mc('Dobrar a velocidade multiplica a distância de frenagem por:', ['2', '3', '4', '8'], 2, 'Quadrado.'),
    mc('Massa de 10 kg com força resultante de 30 N: aceleração:', ['3 m/s²', '30 m/s²', '0,3 m/s²', '300 m/s²'], 0, 'F/m.'),
    mc('O peso de 2 kg (g = 9,8 m/s²) é:', ['2 N', '9,8 N', '19,6 N', '4,9 N'], 2, 'm·g.'),
    mc('O foguete se move porque:', ['Empurra o ar', 'Os gases o empurram de volta', 'Não há gravidade', 'Ação anula reação'], 1, 'Terceira lei.'),
    disc('Resolva os cinco problemas de frenagem, peso e força e explique a terceira lei em dois casos.', ['Frenagem', 'Peso e força', 'Terceira lei', 'Unidades']),
  ],
  resumo: ['v = v₀ + at; d = v₀t + ½at²; v² = v₀² + 2ad.', 'Três leis de Newton.', 'P = m·g; f = μ·N.', 'Frenagem ∝ v².', 'Ação e reação em corpos diferentes.'],
  referencias: [
    { texto: 'Isaac Newton, Princípios matemáticos da filosofia natural (1687).' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vol. 1.' },
    { texto: 'Richard Feynman, Lições de física, vol. 1.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os problemas resolvidos', 'Ler a fonte indicada'],
  revisao: [['v²', 'Frenagem.'], ['F = m·a', 'Segunda lei.'], ['Ação e reação', 'Corpos diferentes.']],
  avancado: {
    texto: `<h3>Movimento circular</h3>
<p>Um corpo em movimento circular uniforme tem aceleração dirigida ao centro, a = v² ÷ r, e precisa de uma força centrípeta F = m·v² ÷ r ${tag('fato')}. Numa curva de raio 50 m a 20 m/s, a aceleração é 400 ÷ 50 = 8 m/s², próxima do limite do atrito do pneu: por isso curvas fechadas exigem velocidade menor ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Moysés Nussenzveig, Curso de física básica, vol. 1.' }],
    exercicios: [
      mc('A aceleração centrípeta é:', ['v ÷ r', 'v² ÷ r', 'v·r', 'r ÷ v²'], 1, 'Fórmula.'),
      mc('Curva de raio 100 m a 20 m/s: aceleração de:', ['2 m/s²', '4 m/s²', '8 m/s²', '20 m/s²'], 1, '400 ÷ 100.'),
      mc('A força centrípeta aponta para:', ['Fora', 'O centro', 'A frente', 'Trás'], 1, 'Direção.'),
      disc('Calcule a velocidade máxima numa curva de raio 50 m com μ = 0,7 e comente.', ['Fórmula', 'Cálculo', 'Resultado', 'Segurança'])],
  },
}),

aula({
  id: 'fi4-2', titulo: 'Energia, conservação e termodinâmica', duracao: '150 min',
  aprendera: ['Calcular energia cinética e potencial', 'Aplicar a conservação da energia', 'Enunciar a primeira e a segunda leis da termodinâmica', 'Calcular o rendimento máximo de uma máquina térmica'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A energia não se cria nem se destrói — então por que ela "acaba"? E por que nenhum motor aproveita toda a energia do combustível?</p>
<h3>Energia mecânica</h3>
<p>A energia cinética é ½·m·v²; a potencial gravitacional, m·g·h ${tag('fato')}. Sem atrito, a soma se conserva: uma bola de 2 kg solta de 5 m tem 2 × 9,8 × 5 = 98 J de energia potencial, que viram energia cinética; chega ao chão a cerca de √(2 × 9,8 × 5) ≈ 9,9 m/s ${tag('fato')}.</p>
<h3>Trabalho e potência</h3>
<p>Trabalho é força vezes deslocamento na direção da força; potência é energia por unidade de tempo, em watts ${tag('fato')}. Subir 3 m de escada com 70 kg exige cerca de 2.058 J; feito em 4 s, a potência é cerca de 515 W ${tag('fato')}.</p>
<h3>Primeira lei</h3>
<p>A primeira lei da termodinâmica é a conservação da energia incluindo calor: a variação da energia interna de um sistema é o calor recebido menos o trabalho realizado ${tag('fato')}.</p>
<h3>Segunda lei</h3>
<p>A segunda lei afirma que o calor flui espontaneamente do quente para o frio e que nenhuma máquina térmica converte todo o calor em trabalho ${tag('fato')}. O rendimento máximo, de Carnot, é 1 − T<sub>fria</sub> ÷ T<sub>quente</sub>, com temperaturas em kelvin: entre 600 K e 300 K, no máximo 50% ${tag('fato')}. A energia não acaba, mas se degrada em formas menos úteis ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Energia cinética', 'Energia do movimento: ½·m·v².'],
    ['Energia potencial gravitacional', 'Energia associada à altura: m·g·h.'],
    ['Potência', 'Energia por unidade de tempo, em watts.'],
    ['Primeira lei', 'Conservação da energia incluindo calor.'],
    ['Rendimento de Carnot', 'Rendimento máximo de uma máquina térmica: 1 − Tf/Tq.'],
  ],
  exemplos: `<p><strong>Montanha-russa:</strong> um carrinho parte do repouso a 20 m de altura. Sem atrito, no ponto mais baixo teria velocidade √(2 × 9,8 × 20) ≈ 19,8 m/s, independente da forma do trilho. Na prática, o atrito transforma parte da energia em calor, e o carrinho chega um pouco mais devagar — a energia não sumiu, degradou-se.</p>`,
  contexto: `<p><strong>No mundo:</strong> a termodinâmica nasceu no século XIX ligada ao estudo das máquinas a vapor, com Sadi Carnot (1824) ${tag('fato')}. <strong>No Brasil:</strong> usinas termelétricas complementam a matriz elétrica em períodos de seca ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que não existe moto-perpétuo', tag: 'argumento',
    premissas: ['Uma máquina que produzisse trabalho sem consumir energia violaria a primeira lei.', 'Uma que convertesse todo o calor de uma única fonte em trabalho violaria a segunda.', 'Essas leis foram confirmadas em inúmeros experimentos.'],
    conclusao: 'Logo, propostas de moto-perpétuo podem ser rejeitadas sem examinar seus detalhes.',
    nota: 'Escritórios de patentes recusam pedidos de moto-perpétuo por esse motivo.',
  },
  objecoes: [
    { objecao: 'Se a energia se conserva, não há crise energética.', tag: 'argumento',
      resposta: 'A quantidade total se conserva, mas sua qualidade se degrada: calor a baixa temperatura não move máquinas. O problema energético é de energia útil, ligado à segunda lei. Economizar energia é poupar formas úteis dela.' },
  ],
  aplicacao: `<p>Calcule a energia e a potência ao subir as escadas de um prédio que você conhece, compare com a energia de um alimento (1 kcal ≈ 4.184 J) e calcule o rendimento máximo de uma usina com temperaturas dadas.</p>`,
  fonte: {
    obra: 'Sadi Carnot, Reflexões sobre a potência motriz do fogo (1824)', link: null,
    orientacao: `<p>Observe a ideia de que o trabalho resulta da passagem do calor de um corpo quente para um frio.</p>`,
  },
  perguntas: [
    { p: 'Qual a energia potencial de 2 kg a 5 m?', r: 'Cerca de 98 J.' },
    { p: 'O que diz a segunda lei?', r: 'Que o calor flui espontaneamente do quente para o frio e nenhuma máquina converte todo o calor em trabalho.' },
    { p: 'Qual o rendimento máximo entre 600 K e 300 K?', r: '50%.' },
  ],
  exercicios: [
    mc('Energia cinética de 2 kg a 3 m/s:', ['3 J', '6 J', '9 J', '18 J'], 2, '½ × 2 × 9.'),
    mc('Dobrar a velocidade multiplica a energia cinética por:', ['2', '4', '8', '1'], 1, 'Quadrado.'),
    mc('Rendimento de Carnot entre 500 K e 400 K:', ['20%', '80%', '25%', '50%'], 0, '1 − 0,8.'),
    mc('1 kcal equivale a cerca de:', ['4,184 J', '418 J', '4.184 J', '41.840 J'], 2, 'Caloria alimentar.'),
    mc('A Reflexões de Carnot é de:', ['1687', '1824', '1905', '1948'], 1, 'Máquinas térmicas.'),
    disc('Calcule energia e potência ao subir escadas, compare com alimentos e calcule um rendimento de Carnot.', ['Energia', 'Potência', 'Alimento', 'Carnot']),
  ],
  resumo: ['Ec = ½mv²; Ep = mgh.', 'Conservação sem atrito.', 'Potência = energia ÷ tempo.', 'Primeira e segunda leis.', 'Carnot: 1 − Tf/Tq.'],
  referencias: [
    { texto: 'Sadi Carnot, Reflexões sobre a potência motriz do fogo (1824).' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vol. 2.' },
    { texto: 'Richard Feynman, Lições de física, vol. 1.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os cálculos', 'Ler a fonte indicada'],
  revisao: [['½mv²', 'Cinética.'], ['mgh', 'Potencial.'], ['Carnot', 'Máximo.']],
  avancado: {
    texto: `<h3>Calor específico</h3>
<p>Para aquecer uma massa m de uma substância em ΔT, é preciso Q = m·c·ΔT, em que c é o calor específico; o da água é cerca de 4.186 J/(kg·°C) ${tag('fato')}. Aquecer 1 litro de água de 20 °C a 100 °C exige cerca de 335 kJ ${tag('fato')}. O alto calor específico da água explica por que oceanos moderam o clima ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Moysés Nussenzveig, Curso de física básica, vol. 2.' }],
    exercicios: [
      mc('Q = m·c·ΔT. Para 1 kg de água aquecido 10 °C:', ['4,2 kJ', '41,9 kJ', '419 kJ', '4.186 kJ'], 1, '4.186 × 10.'),
      mc('O calor específico da água é:', ['Baixo', 'Alto', 'Zero', 'Negativo'], 1, 'Clima.'),
      mc('Oceanos moderam o clima porque a água:', ['Esquenta rápido', 'Armazena muito calor', 'Não absorve calor', 'Reflete tudo'], 1, 'Calor específico.'),
      disc('Calcule a energia para ferver a água de um café da manhã da família e o custo em kWh.', ['Massa e ΔT', 'Energia', 'kWh', 'Custo'])],
  },
}),

aula({
  id: 'fi4-3', titulo: 'Eletricidade, magnetismo e ondas', duracao: '150 min',
  aprendera: ['Aplicar a lei de Ohm e a fórmula da potência elétrica', 'Explicar a indução eletromagnética e o gerador', 'Relacionar velocidade, frequência e comprimento de onda', 'Situar o espectro eletromagnético'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o chuveiro elétrico exige fio grosso? Como uma usina gera eletricidade? O que têm em comum rádio, luz e raios X?</p>
<h3>Circuitos</h3>
<p>Corrente elétrica é o fluxo de carga, em amperes; tensão, em volts; resistência, em ohms ${tag('fato')}. A lei de Ohm, para muitos materiais, diz V = R·I ${tag('fato')}. A potência elétrica é P = V·I ${tag('fato')}. Um chuveiro de 5.500 W em 220 V puxa I = 5.500 ÷ 220 = 25 A, e sua resistência é cerca de 8,8 Ω ${tag('fato')}. Correntes altas exigem fios grossos para não aquecer demais ${tag('fato')}.</p>
<h3>Magnetismo e indução</h3>
<p>Correntes elétricas produzem campos magnéticos (Ørsted, 1820) ${tag('fato')}. Michael Faraday descobriu em 1831 que um campo magnético variável induz corrente num circuito ${tag('fato')}. Geradores de usinas giram ímãs ou bobinas para induzir corrente; transformadores mudam a tensão da corrente alternada ${tag('fato')}.</p>
<h3>Ondas</h3>
<p>Em toda onda, velocidade = comprimento de onda × frequência ${tag('fato')}. O som no ar viaja a cerca de 340 m/s ${tag('fato')}. As ondas eletromagnéticas viajam no vácuo a cerca de 3 × 10<sup>8</sup> m/s; uma rádio FM de 100 MHz emite ondas de cerca de 3 m ${tag('fato')}.</p>
<h3>O espectro</h3>
<p>Rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e gama são ondas eletromagnéticas que diferem pela frequência ${tag('fato')}.</p>`,
  vocabulario: [
    ['Corrente elétrica', 'Fluxo de carga elétrica, em amperes.'],
    ['Tensão', 'Diferença de potencial elétrico, em volts.'],
    ['Lei de Ohm', 'V = R·I para condutores ôhmicos.'],
    ['Indução eletromagnética', 'Geração de corrente por campo magnético variável (Faraday).'],
    ['Espectro eletromagnético', 'Conjunto das ondas eletromagnéticas ordenadas por frequência.'],
  ],
  exemplos: `<p><strong>Trovão e relâmpago:</strong> a luz chega quase instantaneamente; o som, a 340 m/s. Se o trovão chega 3 s depois do relâmpago, o raio caiu a cerca de 3 × 340 ≈ 1 km. Multiplicar os segundos por um terço dá a distância aproximada em quilômetros.</p>`,
  contexto: `<p><strong>No mundo:</strong> a disputa entre corrente contínua e alternada no fim do século XIX favoreceu a alternada, mais fácil de transformar ${tag('fato')}. <strong>No Brasil:</strong> a tensão residencial é de 127 V ou 220 V, conforme a região ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que transmitir energia em alta tensão', tag: 'argumento',
    premissas: ['Para a mesma potência, P = V·I: tensão maior significa corrente menor.', 'A perda nos fios é proporcional ao quadrado da corrente.', 'Logo, alta tensão reduz muito as perdas na transmissão.'],
    conclusao: 'Logo, linhas de transmissão usam tensões muito altas, reduzidas por transformadores perto do consumo.',
    nota: 'É uma aplicação direta da indução de Faraday.',
  },
  objecoes: [
    { objecao: 'Ondas de celular e rádio são radiação, logo causam câncer como os raios X.', tag: 'debate',
      resposta: 'Raios X e gama são radiações ionizantes, com energia suficiente para quebrar ligações químicas; rádio e micro-ondas não são. Agências de saúde avaliam continuamente os efeitos das ondas de rádio e consideram as exposições dentro dos limites seguros, mas o tema segue sob estudo.' },
  ],
  aplicacao: `<p>Liste cinco aparelhos de casa com potência e tensão, calcule a corrente de cada um e verifique se o disjuntor do circuito comportaria usá-los juntos.</p>`,
  fonte: {
    obra: 'Michael Faraday, Pesquisas experimentais em eletricidade (1831–1855), primeira série', link: null,
    orientacao: `<p>Observe como Faraday descreve o experimento da indução e o papel da variação do campo.</p>`,
  },
  perguntas: [
    { p: 'Qual a corrente de um chuveiro de 5.500 W em 220 V?', r: '25 A.' },
    { p: 'O que descobriu Faraday em 1831?', r: 'A indução eletromagnética.' },
    { p: 'Qual o comprimento de onda de uma FM de 100 MHz?', r: 'Cerca de 3 m.' },
  ],
  exercicios: [
    mc('Resistência de 10 Ω com corrente de 2 A: tensão de:', ['5 V', '12 V', '20 V', '0,2 V'], 2, 'V = R·I.'),
    mc('Lâmpada de 100 W em 127 V: corrente de cerca de:', ['0,8 A', '1,3 A', '12,7 A', '127 A'], 0, 'P ÷ V.'),
    mc('Trovão 6 s após o relâmpago: distância de cerca de:', ['1 km', '2 km', '6 km', '340 m'], 1, '6 × 340.'),
    mc('Radiação ionizante:', ['Rádio', 'Micro-ondas', 'Raios X', 'Infravermelho'], 2, 'Energia alta.'),
    mc('Transformadores funcionam com corrente:', ['Contínua', 'Alternada', 'Nula', 'Qualquer'], 1, 'Indução.'),
    disc('Calcule a corrente de cinco aparelhos e verifique a capacidade do disjuntor.', ['Aparelhos', 'Correntes', 'Disjuntor', 'Segurança']),
  ],
  resumo: ['V = R·I; P = V·I.', 'Ørsted (1820); Faraday (1831).', 'Geradores e transformadores.', 'v = λ·f; som 340 m/s; luz 3 × 10⁸ m/s.', 'Espectro eletromagnético.'],
  referencias: [
    { texto: 'Michael Faraday, Pesquisas experimentais em eletricidade.' },
    { texto: 'James Clerk Maxwell, Tratado de eletricidade e magnetismo (1873).' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vol. 3.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o cálculo dos aparelhos', 'Ler a fonte indicada'],
  revisao: [['P = V·I', 'Potência.'], ['Faraday', 'Indução.'], ['v = λf', 'Ondas.']],
  avancado: {
    texto: `<h3>Segurança elétrica</h3>
<p>O perigo do choque depende sobretudo da corrente que atravessa o corpo; correntes de dezenas de miliamperes pelo coração podem ser fatais ${tag('fato')}. Disjuntores protegem os fios contra sobrecorrente; dispositivos diferenciais residuais (DR) desligam o circuito ao detectar fuga de corrente, protegendo pessoas ${tag('fato')}. A norma brasileira de instalações elétricas de baixa tensão exige DR em várias situações ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Moysés Nussenzveig, Curso de física básica, vol. 3.' }],
    exercicios: [
      mc('O perigo do choque depende sobretudo da:', ['Tensão apenas', 'Corrente pelo corpo', 'Cor do fio', 'Frequência da rede apenas'], 1, 'Fisiologia.'),
      mc('O disjuntor protege principalmente:', ['As pessoas', 'Os fios', 'A lâmpada', 'O medidor'], 1, 'Sobrecorrente.'),
      mc('O DR desliga ao detectar:', ['Fuga de corrente', 'Baixa tensão', 'Calor', 'Luz'], 0, 'Proteção.'),
      disc('Verifique os dispositivos de proteção da instalação elétrica da sua casa e proponha melhorias.', ['Inventário', 'Disjuntores', 'DR', 'Melhorias'])],
  },
}),

aula({
  id: 'fi4-4', titulo: 'Física moderna: relatividade, quanta e tecnologia', duracao: '150 min',
  aprendera: ['Explicar a dilatação do tempo e E = mc²', 'Explicar a correção relativística do GPS', 'Explicar o efeito fotoelétrico e os níveis de energia', 'Relacionar a física quântica a tecnologias cotidianas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Relatividade e mecânica quântica parecem distantes do cotidiano. No entanto, sem elas não haveria GPS, LED ou celular.</p>
<h3>Relatividade restrita</h3>
<p>Einstein postulou que as leis da física são as mesmas em todos os referenciais inerciais e que a velocidade da luz no vácuo é a mesma para todos ${tag('fato')}. Daí segue a dilatação do tempo: um relógio em movimento marca o tempo mais devagar pelo fator γ = 1 ÷ √(1 − v²/c²); a 60% da velocidade da luz, γ = 1,25 ${tag('fato')}. Massa e energia são equivalentes: E = m·c² ${tag('fato')}.</p>
<h3>Relatividade geral e GPS</h3>
<p>Na relatividade geral, relógios em campo gravitacional mais fraco andam mais depressa ${tag('fato')}. Nos satélites de GPS, o efeito gravitacional adianta os relógios em cerca de 45 microssegundos por dia e o da velocidade os atrasa em cerca de 7, saldo de cerca de 38 microssegundos por dia, que precisa ser corrigido ${tag('fato')}. Sem correção, os erros de posição se acumulariam em quilômetros por dia ${tag('fato')}.</p>
<h3>Quanta</h3>
<p>No efeito fotoelétrico, a luz arranca elétrons de um metal só acima de certa frequência, qualquer que seja a intensidade; Einstein explicou com fótons de energia E = h·f ${tag('fato')}. Átomos têm níveis de energia discretos; ao passar de um nível a outro, emitem ou absorvem fótons de frequências definidas ${tag('fato')}.</p>
<h3>Tecnologia</h3>
<p>Semicondutores, transistores, LEDs e lasers dependem da mecânica quântica dos sólidos ${tag('fato')}.</p>`,
  vocabulario: [
    ['Referencial inercial', 'Referencial em que vale a primeira lei de Newton.'],
    ['Dilatação do tempo', 'Relógios em movimento marcam o tempo mais devagar.'],
    ['Fóton', 'Quantum de luz, com energia E = h·f.'],
    ['Efeito fotoelétrico', 'Emissão de elétrons por luz acima de certa frequência.'],
    ['Nível de energia', 'Valor discreto de energia de um elétron num átomo.'],
  ],
  exemplos: `<p><strong>E = mc² em números:</strong> converter 1 grama de massa inteiramente em energia daria 0,001 kg × (3 × 10<sup>8</sup> m/s)² = 9 × 10<sup>13</sup> J — energia da ordem da de uma grande explosão. Em usinas nucleares, só uma pequena fração da massa se converte, mas ainda assim libera muita energia.</p>`,
  contexto: `<p><strong>No mundo:</strong> Einstein recebeu o Nobel de 1921 pelo efeito fotoelétrico, não pela relatividade ${tag('fato')}. <strong>No Brasil:</strong> as usinas de Angra dos Reis geram eletricidade por fissão nuclear ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que teorias "abstratas" acabam sendo práticas', tag: 'argumento',
    premissas: ['A relatividade e a quântica nasceram de perguntas teóricas sobre luz, tempo e átomos.', 'Décadas depois, tornaram-se indispensáveis para GPS, eletrônica e medicina.', 'O valor prático do conhecimento muitas vezes só aparece depois.'],
    conclusao: 'Logo, a pesquisa motivada pela busca da verdade merece valor por si e costuma dar frutos práticos.',
    nota: 'A tradição clássica valoriza o conhecimento como bem em si, não só pela utilidade.',
  },
  objecoes: [
    { objecao: 'A relatividade prova que tudo é relativo, inclusive a verdade e a moral.', tag: 'argumento',
      resposta: 'A relatividade afirma que certas medidas (tempo, comprimento) dependem do referencial, mas também afirma invariantes absolutos, como a velocidade da luz e as leis físicas. Einstein chegou a pensar no nome "teoria dos invariantes". Nada nela trata de verdade moral.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: resolva problemas de mecânica e energia e explique, com conceitos da física moderna, por que o GPS precisa de correções relativísticas.</p>`,
  fonte: {
    obra: 'Albert Einstein, Sobre a eletrodinâmica dos corpos em movimento (1905), introdução', link: null,
    orientacao: `<p>Identifique os dois postulados e o problema que Einstein quer resolver.</p>`,
  },
  perguntas: [
    { p: 'Qual o fator γ a 60% da velocidade da luz?', r: '1,25.' },
    { p: 'Quanto os relógios do GPS se adiantam por dia, no saldo?', r: 'Cerca de 38 microssegundos.' },
    { p: 'Por que Einstein recebeu o Nobel?', r: 'Pelo efeito fotoelétrico.' },
  ],
  exercicios: [
    mc('A 80% da velocidade da luz, γ =', ['1,25', '1,67', '2', '0,6'], 1, '1 ÷ 0,6.'),
    mc('Na relatividade, é invariante:', ['O tempo', 'O comprimento', 'A velocidade da luz', 'A massa aparente'], 2, 'Postulado.'),
    mc('No efeito fotoelétrico, o que importa é:', ['A intensidade', 'A frequência', 'A cor do metal', 'O tempo'], 1, 'Fótons.'),
    mc('Energia de 1 g convertida integralmente:', ['9 × 10¹³ J', '9 × 10⁸ J', '3 × 10⁸ J', '1 J'], 0, 'E = mc².'),
    mc('LEDs dependem da física:', ['Clássica', 'Quântica', 'Aristotélica', 'Nenhuma'], 1, 'Semicondutores.'),
    disc('Explique por que o GPS precisa de correções relativísticas, com os números.', ['Efeito gravitacional', 'Efeito da velocidade', 'Saldo', 'Consequência']),
  ],
  resumo: ['Postulados de Einstein.', 'γ = 1/√(1 − v²/c²); E = mc².', 'GPS: +45 −7 = +38 μs/dia.', 'Fótons: E = hf; níveis discretos.', 'Semicondutores, LED, laser.'],
  referencias: [
    { texto: 'Albert Einstein, Sobre a eletrodinâmica dos corpos em movimento (1905).' },
    { texto: 'Richard Feynman, Lições de física, vol. 3.' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vol. 4.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação do GPS', 'Ler a fonte indicada'],
  revisao: [['γ', 'Dilatação.'], ['38 μs', 'GPS.'], ['E = hf', 'Fóton.']],
  avancado: {
    texto: `<h3>O espectro do hidrogênio</h3>
<p>O hidrogênio emite luz só em certas cores; a série de Balmer, no visível, foi descrita empiricamente em 1885 ${tag('fato')}. Niels Bohr explicou em 1913 essas linhas supondo órbitas com energias discretas; a mecânica quântica posterior refinou o modelo ${tag('fato')}. A espectroscopia permite saber de que são feitas as estrelas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Richard Feynman, Lições de física, vol. 3.' }],
    exercicios: [
      mc('A série de Balmer está no:', ['Ultravioleta', 'Visível', 'Rádio', 'Gama'], 1, 'Hidrogênio.'),
      mc('O modelo atômico com energias discretas é de:', ['Bohr (1913)', 'Newton', 'Dalton', 'Maxwell'], 0, 'Quantização.'),
      mc('A espectroscopia permite saber:', ['A composição das estrelas', 'O futuro', 'A idade de uma pessoa', 'Nada'], 0, 'Aplicação.'),
      disc('Explique como a espectroscopia revela a composição de uma estrela.', ['Linhas', 'Níveis', 'Identificação', 'Exemplo'])],
  },
}),

avaliacao('fi4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas e de cálculo sobre mecânica, energia, termodinâmica, eletricidade, ondas e física moderna, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça os cálculos de frenagem, energia, chuveiro e GPS.</li><li>Confira sempre as unidades.</li></ul>`,
[
  disc('Um carro de 1.200 kg a 25 m/s freia até parar com desaceleração de 5 m/s². Calcule o tempo, a distância e a energia dissipada, e explique para onde vai essa energia.', ['Tempo', 'Distância', 'Energia', 'Explicação']),
  disc('Explique um fenômeno ou tecnologia moderna (GPS, LED, efeito fotoelétrico ou usina nuclear) com os conceitos da física moderna, distinguindo o que a teoria afirma e o que é aplicação.', ['Fenômeno', 'Conceitos', 'Números', 'Distinções']),
]),
];
