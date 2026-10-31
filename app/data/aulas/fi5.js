// Física V — aplicações, projeto experimental e avaliação integradora (etapas 9 a 11 do percurso de Física).
// Energia elétrica em casa e matriz brasileira; segurança no trânsito; física na tecnologia cotidiana;
// projeto experimental de quatro semanas; avaliação integradora.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'fi5-1', titulo: 'Energia elétrica em casa e a matriz brasileira', duracao: '150 min',
  aprendera: ['Calcular o consumo em kWh e o custo de aparelhos', 'Ler uma conta de luz', 'Conhecer a composição da matriz elétrica brasileira', 'Propor economias com base em cálculo'],
  prereq: ['Física IV (módulo FI4)'],
  explicacao: `
<h3>O problema</h3>
<p>A conta de luz chega em kWh. O que isso mede, e quais aparelhos pesam mais?</p>
<h3>kWh</h3>
<p>O quilowatt-hora é a energia consumida por um aparelho de 1.000 W ligado por 1 hora, igual a 3,6 milhões de joules ${tag('fato')}. Consumo = potência (kW) × tempo (h) ${tag('fato')}. Um chuveiro de 5.500 W usado 15 minutos por dia consome 5,5 × 0,25 = 1,375 kWh por dia, cerca de 41 kWh por mês ${tag('fato')}. Uma lâmpada LED de 9 W acesa 5 horas por dia consome cerca de 1,35 kWh por mês ${tag('fato')}.</p>
<h3>A conta</h3>
<p>A conta mostra o consumo medido, a tarifa, tributos e, no Brasil, as bandeiras tarifárias definidas pela ANEEL, que indicam o custo de geração no período ${tag('fato')}.</p>
<h3>A matriz brasileira</h3>
<p>A matriz elétrica brasileira tem grande participação de fontes renováveis, com predominância histórica da hidrelétrica e crescimento recente da eólica e da solar ${tag('fato')}. Em secas, termelétricas são acionadas, o que encarece a geração ${tag('fato')}. Os percentuais exatos mudam a cada ano e devem ser consultados nas publicações oficiais, como o Balanço Energético Nacional ${tag('interpretacao')}.</p>
<h3>Cuidado da casa comum</h3>
<p>O papa Francisco, na Laudato si' (2015), pediu a substituição progressiva de combustíveis fósseis por fontes renováveis e a redução do desperdício ${tag('doutrina')}. Economizar energia é também questão de justiça e de responsabilidade ${tag('argumento')}.</p>`,
  vocabulario: [
    ['kWh', 'Energia de 1 kW por 1 hora, igual a 3,6 MJ.'],
    ['Potência nominal', 'Potência indicada pelo fabricante do aparelho.'],
    ['Bandeira tarifária', 'Sinal da ANEEL sobre o custo de geração no período.'],
    ['Matriz elétrica', 'Composição das fontes de geração de eletricidade.'],
    ['Fonte renovável', 'Fonte que se repõe naturalmente (água, vento, sol).'],
  ],
  exemplos: `<p><strong>Onde está o gasto:</strong> numa casa, chuveiro (cerca de 41 kWh/mês), geladeira (cerca de 30 a 50 kWh/mês, conforme o modelo), ferro de passar e ar-condicionado costumam pesar mais que a iluminação LED. Reduzir 5 minutos do banho diário economiza cerca de 14 kWh por mês com um chuveiro de 5.500 W.</p>`,
  contexto: `<p><strong>No mundo:</strong> a maioria dos países ainda depende fortemente de combustíveis fósseis para gerar eletricidade ${tag('fato')}. <strong>No Brasil:</strong> a Empresa de Pesquisa Energética publica o Balanço Energético Nacional ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que medir antes de economizar', tag: 'argumento',
    premissas: ['A intuição sobre consumo costuma errar: lâmpadas parecem gastar muito, chuveiros parecem gastar pouco.', 'O cálculo potência × tempo mostra onde está o gasto real.', 'Economias eficazes atacam os maiores consumos.'],
    conclusao: 'Logo, uma economia racional começa pelo cálculo do consumo de cada aparelho.',
    nota: 'É a física a serviço da prudência doméstica.',
  },
  objecoes: [
    { objecao: 'Energia renovável não tem impacto ambiental.', tag: 'debate',
      resposta: 'Toda fonte tem impactos: hidrelétricas alagam áreas e afetam populações e ecossistemas; parques eólicos e solares usam terra e materiais. A questão é comparar impactos e benefícios, e não supor que alguma fonte seja neutra.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: liste os aparelhos de sua casa com potência e tempo de uso, calcule o consumo mensal de cada um, compare com a conta de luz e proponha três economias justificadas.</p>`,
  fonte: {
    obra: 'Empresa de Pesquisa Energética, Balanço Energético Nacional (edição mais recente); Francisco, Laudato si\' (2015), n. 26', link: { url: 'https://www.epe.gov.br', rotulo: 'Empresa de Pesquisa Energética' },
    orientacao: `<p>No Balanço, localize a composição da matriz elétrica. Na Laudato si', o apelo às fontes renováveis.</p>`,
  },
  perguntas: [
    { p: 'Quanto consome um chuveiro de 5.500 W em 15 min por dia, por mês?', r: 'Cerca de 41 kWh.' },
    { p: 'Quantos joules há em 1 kWh?', r: '3,6 milhões.' },
    { p: 'O que indicam as bandeiras tarifárias?', r: 'O custo de geração no período.' },
  ],
  exercicios: [
    mc('Aparelho de 2.000 W por 3 h consome:', ['0,6 kWh', '6 kWh', '60 kWh', '600 kWh'], 1, '2 × 3.'),
    mc('LED de 10 W acesa 6 h/dia por 30 dias:', ['1,8 kWh', '18 kWh', '0,18 kWh', '180 kWh'], 0, '10 × 6 × 30 = 1.800 Wh.'),
    mc('A fonte historicamente predominante na matriz elétrica brasileira é:', ['Carvão', 'Hidrelétrica', 'Nuclear', 'Petróleo'], 1, 'Matriz.'),
    mc('As bandeiras tarifárias são definidas pela:', ['ANEEL', 'ANVISA', 'ANATEL', 'IBGE'], 0, 'Regulação.'),
    mc('Laudato si\' é de:', ['1991', '2005', '2015', '2020'], 2, 'Francisco.'),
    disc('Calcule o consumo dos aparelhos de casa, compare com a conta e proponha três economias.', ['Inventário', 'Cálculos', 'Comparação', 'Economias']),
  ],
  resumo: ['kWh = kW × h = 3,6 MJ.', 'Chuveiro pesa mais que LED.', 'Bandeiras da ANEEL.', 'Matriz renovável, predominância hidrelétrica.', 'Laudato si\': renováveis e menos desperdício.'],
  referencias: [
    { texto: 'Empresa de Pesquisa Energética, Balanço Energético Nacional.' },
    { texto: 'Francisco, Laudato si\' (2015).' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vol. 3.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o cálculo de consumo', 'Consultar a fonte oficial'],
  revisao: [['kWh', 'kW × h.'], ['Chuveiro', 'Maior gasto.'], ['ANEEL', 'Bandeiras.']],
  avancado: {
    texto: `<h3>Painéis solares</h3>
<p>Painéis fotovoltaicos convertem luz em eletricidade pelo efeito fotovoltaico em semicondutores, parente do efeito fotoelétrico ${tag('fato')}. A eficiência dos painéis comerciais costuma ficar em torno de 20% ${tag('interpretacao')}. Com irradiação típica de alguns kWh por m² por dia em boa parte do Brasil, um painel de 2 m² gera da ordem de 1 kWh por dia ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Empresa de Pesquisa Energética, Balanço Energético Nacional.' }],
    exercicios: [
      mc('Painéis fotovoltaicos usam:', ['Combustão', 'Semicondutores', 'Turbinas', 'Ímãs girando'], 1, 'Efeito fotovoltaico.'),
      mc('Eficiência típica de painéis comerciais:', ['2%', '20%', '80%', '100%'], 1, 'Ordem de grandeza.'),
      mc('2 m² com 5 kWh/m²/dia a 20% geram:', ['0,2 kWh', '2 kWh', '10 kWh', '20 kWh'], 1, '2 × 5 × 0,2.'),
      disc('Estime quantos painéis seriam necessários para suprir o consumo da sua casa.', ['Consumo', 'Irradiação', 'Cálculo', 'Limites'])],
  },
}),

aula({
  id: 'fi5-2', titulo: 'Física da segurança no trânsito', duracao: '150 min',
  aprendera: ['Relacionar velocidade, energia e gravidade das colisões', 'Explicar cinto e airbag pelo impulso', 'Calcular a distância de parada com tempo de reação', 'Fundamentar fisicamente normas de trânsito'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que "só um pouco acima do limite" é tão perigoso? Por que o cinto salva vidas?</p>
<h3>Velocidade e energia</h3>
<p>A energia cinética cresce com o quadrado da velocidade ${tag('fato')}. Bater a 50 km/h (cerca de 13,9 m/s) equivale, em energia, a cair de cerca de 13,9² ÷ (2 × 9,8) ≈ 9,8 m — um prédio de três andares ${tag('fato')}. A 100 km/h, a altura equivalente é quatro vezes maior ${tag('fato')}.</p>
<h3>Distância de parada</h3>
<p>Distância de parada = distância percorrida durante o tempo de reação + distância de frenagem ${tag('fato')}. A 72 km/h (20 m/s), com 1 s de reação e desaceleração de 7 m/s², são 20 m + 400 ÷ 14 ≈ 29 m, total de cerca de 49 m ${tag('fato')}. Álcool, sono e celular aumentam o tempo de reação ${tag('fato')}.</p>
<h3>Cinto e airbag</h3>
<p>A variação da quantidade de movimento é igual à força média vezes o tempo de parada (impulso) ${tag('fato')}. Cinto e airbag aumentam o tempo e a área de contato da parada do corpo, reduzindo a força e a pressão ${tag('fato')}. Sem cinto, o corpo continua em movimento pela inércia e se choca contra o painel ou é lançado ${tag('fato')}.</p>
<h3>Normas e dever moral</h3>
<p>O Código de Trânsito Brasileiro torna obrigatório o uso do cinto (art. 65) e proíbe dirigir sob influência de álcool ${tag('fato')}. O Catecismo inclui entre os deveres do quinto mandamento evitar pôr em perigo a vida própria e alheia por imprudência, inclusive ao volante (CIC 2290) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Tempo de reação', 'Tempo entre perceber o perigo e começar a frear.'],
    ['Distância de parada', 'Distância de reação mais distância de frenagem.'],
    ['Quantidade de movimento', 'Massa vezes velocidade (p = m·v).'],
    ['Impulso', 'Força média vezes intervalo de tempo; igual à variação de p.'],
    ['Inércia', 'Tendência do corpo a manter seu movimento.'],
  ],
  exemplos: `<p><strong>Celular ao volante:</strong> olhar o celular por 2 s a 72 km/h significa percorrer 40 m sem olhar a estrada — quase metade de um campo de futebol. Se nesse intervalo algo surgir, o tempo de reação já começou atrasado. A física transforma "só uma olhadinha" em metros concretos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Organização Mundial da Saúde aponta os acidentes de trânsito entre as principais causas de morte de jovens ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 11.705/2008, a "Lei Seca", endureceu as regras sobre álcool e direção ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o cinto reduz a força sobre o corpo', tag: 'argumento',
    premissas: ['Na colisão, o corpo precisa perder toda a sua quantidade de movimento.', 'Pelo impulso, força × tempo = variação da quantidade de movimento, que é fixa.', 'Aumentar o tempo de parada (cinto que estica, airbag que cede) reduz a força média.'],
    conclusao: 'Logo, cinto e airbag salvam vidas por prolongar e distribuir a desaceleração.',
    nota: 'Por isso carros modernos têm zonas de deformação programada.',
  },
  objecoes: [
    { objecao: 'Em trajetos curtos e lentos não é preciso cinto.', tag: 'argumento',
      resposta: 'Mesmo a 40 km/h a energia equivale a uma queda de cerca de 6 m, e a maioria dos acidentes ocorre perto de casa. A física da inércia não depende da distância da viagem. A lei, aliás, não faz essa exceção.' },
  ],
  aplicacao: `<p>Calcule a distância de parada a 40, 60, 80 e 100 km/h com 1 s de reação e 7 m/s² de desaceleração, monte uma tabela e escreva uma orientação para jovens motoristas fundamentada nos números.</p>`,
  fonte: {
    obra: 'Lei nº 9.503/1997 (Código de Trânsito Brasileiro), art. 65; Catecismo, § 2290', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Leia a obrigação do cinto no CTB e o dever moral de prudência no Catecismo.</p>`,
  },
  perguntas: [
    { p: 'A que altura de queda equivale uma colisão a 50 km/h?', r: 'Cerca de 10 m.' },
    { p: 'Qual a distância de parada a 72 km/h nas condições do texto?', r: 'Cerca de 49 m.' },
    { p: 'Como o cinto reduz a força?', r: 'Aumentando o tempo de parada do corpo.' },
  ],
  exercicios: [
    mc('A 100 km/h, a altura equivalente em relação a 50 km/h é:', ['2 vezes', '4 vezes', '8 vezes', 'Igual'], 1, 'Quadrado.'),
    mc('A 72 km/h, em 1 s de reação percorre-se:', ['7,2 m', '20 m', '72 m', '3,6 m'], 1, '20 m/s.'),
    mc('Impulso = força média ×', ['Distância', 'Tempo', 'Massa', 'Velocidade'], 1, 'Definição.'),
    mc('O uso do cinto é obrigatório pelo CTB, art.:', ['65', '165', '5', '302'], 0, 'Norma.'),
    mc('A "Lei Seca" é de:', ['1997', '2008', '2015', '1988'], 1, 'Lei 11.705.'),
    disc('Monte a tabela de distâncias de parada e escreva uma orientação para jovens motoristas.', ['Cálculos', 'Tabela', 'Orientação', 'Fundamentação']),
  ],
  resumo: ['Energia ∝ v².', '50 km/h ≈ queda de 10 m.', 'Parada = reação + frenagem.', 'Impulso: cinto e airbag.', 'CTB art. 65; CIC 2290.'],
  referencias: [
    { texto: 'Lei nº 9.503, de 1997 (Código de Trânsito Brasileiro).' },
    { texto: 'Catecismo da Igreja Católica (1992), § 2290.', livro: 'cic' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vol. 1.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a tabela e a orientação', 'Ler as fontes indicadas'],
  revisao: [['v²', 'Energia.'], ['Reação', 'Metros perdidos.'], ['Impulso', 'Cinto.']],
  avancado: {
    texto: `<h3>Força numa colisão</h3>
<p>Uma pessoa de 70 kg a 14 m/s que para em 0,1 s (com cinto) sofre força média de 70 × 14 ÷ 0,1 = 9.800 N; se parar em 0,01 s contra o painel, a força é dez vezes maior ${tag('fato')}. A diferença entre lesão e morte pode estar nesse fator ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Moysés Nussenzveig, Curso de física básica, vol. 1 (impulso e quantidade de movimento).' }],
    exercicios: [
      mc('70 kg a 14 m/s parando em 0,1 s: força média de:', ['980 N', '9.800 N', '98.000 N', '98 N'], 1, 'm·v ÷ t.'),
      mc('Parando em 0,01 s, a força fica:', ['Igual', '10 vezes maior', '10 vezes menor', 'Nula'], 1, 'Tempo menor.'),
      mc('O cinto atua aumentando o:', ['Tempo de parada', 'Peso', 'Atrito do pneu', 'Motor'], 0, 'Impulso.'),
      disc('Explique zonas de deformação programada com o conceito de impulso.', ['Conceito', 'Cálculo', 'Projeto do carro', 'Conclusão'])],
  },
}),

aula({
  id: 'fi5-3', titulo: 'Física na tecnologia cotidiana', duracao: '150 min',
  aprendera: ['Explicar o funcionamento do micro-ondas', 'Explicar a fibra óptica pela reflexão total', 'Explicar a geladeira como máquina térmica invertida', 'Relacionar tecnologias a conceitos estudados'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Usamos todos os dias aparelhos que dependem de física sofisticada. Entender como funcionam dá domínio e prudência no uso.</p>
<h3>Micro-ondas</h3>
<p>O forno de micro-ondas emite ondas eletromagnéticas de cerca de 2,45 GHz, que fazem moléculas de água oscilarem e aquecerem o alimento ${tag('fato')}. As paredes metálicas e a grade da porta, com furos muito menores que o comprimento de onda (cerca de 12 cm), impedem a saída das ondas ${tag('fato')}.</p>
<h3>Fibra óptica</h3>
<p>Na fibra óptica, a luz é guiada por reflexão total: ao passar de um meio de índice de refração maior para um menor, acima de um ângulo crítico, a luz é toda refletida ${tag('fato')}. Assim, pulsos de luz levam dados da internet por milhares de quilômetros ${tag('fato')}.</p>
<h3>Geladeira</h3>
<p>A geladeira é uma máquina térmica invertida: usa trabalho do motor para retirar calor do interior frio e liberá-lo no ambiente quente, pela grade de trás ${tag('fato')}. Isso não viola a segunda lei, porque há consumo de trabalho ${tag('fato')}.</p>
<h3>Sensores e telas</h3>
<p>Câmeras de celular usam sensores semicondutores que convertem luz em sinais elétricos; telas sensíveis ao toque, em geral, detectam variações de capacitância ${tag('fato')}.</p>
<h3>Uso prudente</h3>
<p>Conhecer a física dos aparelhos ajuda a usá-los com segurança e a avaliar alegações falsas, como as de que o micro-ondas torna os alimentos radioativos ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Micro-ondas', 'Ondas eletromagnéticas de alta frequência usadas para aquecer.'],
    ['Índice de refração', 'Razão entre a velocidade da luz no vácuo e no meio.'],
    ['Reflexão total', 'Reflexão completa da luz acima do ângulo crítico.'],
    ['Máquina térmica invertida', 'Dispositivo que usa trabalho para levar calor do frio ao quente.'],
    ['Capacitância', 'Capacidade de armazenar carga, usada em telas sensíveis ao toque.'],
  ],
  exemplos: `<p><strong>Por que a geladeira aberta não esfria a cozinha:</strong> a geladeira retira calor do interior e o libera atrás, somando ainda o calor do motor. Com a porta aberta, ela retira e devolve calor do mesmo ambiente, e o motor acrescenta mais: a cozinha esquenta. É a primeira e a segunda leis no cotidiano.</p>`,
  contexto: `<p><strong>No mundo:</strong> cabos submarinos de fibra óptica conectam continentes ${tag('fato')}. <strong>No Brasil:</strong> a ANATEL regula equipamentos de telecomunicações e as faixas de frequência ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o micro-ondas não torna o alimento radioativo', tag: 'argumento',
    premissas: ['Radioatividade é a emissão de radiação por núcleos instáveis.', 'O micro-ondas emite radiação não ionizante, que agita moléculas, sem alterar núcleos.', 'Ao desligar o aparelho, cessa a emissão.'],
    conclusao: 'Logo, o alimento aquecido no micro-ondas não fica radioativo.',
    nota: 'Os cuidados reais são outros: aquecimento desigual e recipientes inadequados.',
  },
  objecoes: [
    { objecao: 'Tecnologia é neutra; basta saber usar.', tag: 'debate',
      resposta: 'Uma ferramenta pode servir a bons ou maus fins, mas tecnologias também moldam hábitos e relações, como mostram os debates sobre telas. A Laudato si\' fala do "paradigma tecnocrático". Saber usar inclui discernir quando e para quê.' },
  ],
  aplicacao: `<p>Escolha três aparelhos de casa, explique o princípio físico de cada um com os conceitos do curso e indique um cuidado de uso fundamentado na física.</p>`,
  fonte: {
    obra: 'Richard Feynman, Lições de física, vol. 1 (óptica e termodinâmica)', link: null,
    orientacao: `<p>Revise a refração, a reflexão total e o ciclo de máquinas térmicas.</p>`,
  },
  perguntas: [
    { p: 'Por que as ondas não saem do micro-ondas?', r: 'Porque paredes metálicas e a grade com furos pequenos as refletem.' },
    { p: 'Que fenômeno guia a luz na fibra óptica?', r: 'A reflexão total.' },
    { p: 'A geladeira viola a segunda lei?', r: 'Não, porque consome trabalho.' },
  ],
  exercicios: [
    mc('A frequência típica do micro-ondas doméstico é cerca de:', ['2,45 GHz', '100 MHz', '50 Hz', '5 kHz'], 0, 'Aquecimento.'),
    mc('O comprimento de onda correspondente é cerca de:', ['1,2 mm', '12 cm', '3 m', '120 m'], 1, 'c ÷ f.'),
    mc('A fibra óptica funciona por:', ['Absorção', 'Reflexão total', 'Difração', 'Polarização'], 1, 'Ângulo crítico.'),
    mc('Geladeira aberta numa cozinha fechada:', ['Esfria a cozinha', 'Esquenta a cozinha', 'Não muda nada', 'Desliga'], 1, 'Termodinâmica.'),
    mc('A radiação do micro-ondas é:', ['Ionizante', 'Não ionizante', 'Nuclear', 'Gama'], 1, 'Segurança.'),
    disc('Explique três aparelhos de casa com os conceitos do curso e um cuidado de uso para cada.', ['Aparelhos', 'Princípios', 'Cuidados', 'Fundamentação']),
  ],
  resumo: ['Micro-ondas: 2,45 GHz, água, gaiola metálica.', 'Fibra óptica: reflexão total.', 'Geladeira: máquina térmica invertida.', 'Sensores e telas: semicondutores e capacitância.', 'Uso prudente.'],
  referencias: [
    { texto: 'Richard Feynman, Lições de física, vol. 1.' },
    { texto: 'Moysés Nussenzveig, Curso de física básica, vols. 2 a 4.' },
    { texto: 'Francisco, Laudato si\' (2015), cap. III.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação dos aparelhos', 'Ler a fonte indicada'],
  revisao: [['2,45 GHz', 'Micro-ondas.'], ['Reflexão total', 'Fibra.'], ['Geladeira', 'Trabalho.']],
  avancado: {
    texto: `<h3>Coeficiente de desempenho</h3>
<p>O desempenho de geladeiras e aparelhos de ar-condicionado é medido pelo coeficiente de desempenho: calor retirado dividido pelo trabalho consumido ${tag('fato')}. Pode ser maior que 1, porque o aparelho não produz o calor, apenas o transporta ${tag('fato')}. O selo do Procel informa a eficiência de aparelhos vendidos no Brasil ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Moysés Nussenzveig, Curso de física básica, vol. 2.' }],
    exercicios: [
      mc('Coeficiente de desempenho = calor retirado ÷', ['Calor liberado', 'Trabalho consumido', 'Temperatura', 'Tempo'], 1, 'Definição.'),
      mc('Ele pode ser maior que 1?', ['Sim', 'Não', 'Só no inverno', 'Nunca'], 0, 'Transporte de calor.'),
      mc('O selo de eficiência de aparelhos no Brasil é o:', ['Procel', 'INSS', 'Enem', 'PIS'], 0, 'Consumo.'),
      disc('Compare dois aparelhos com selos Procel diferentes e estime a economia anual.', ['Aparelhos', 'Consumo', 'Economia', 'Decisão'])],
  },
}),

aula({
  id: 'fi5-4', titulo: 'Projeto experimental de quatro semanas', duracao: '180 min',
  aprendera: ['Formular uma pergunta experimental e uma hipótese', 'Planejar montagem, variáveis e medidas', 'Analisar dados com incerteza e gráficos', 'Redigir um relatório científico honesto'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como fazer física de verdade em casa, com material simples, e chegar a uma conclusão confiável?</p>
<h3>Pergunta e hipótese</h3>
<p>Uma boa pergunta experimental relaciona uma variável que se controla (independente) com outra que se mede (dependente): "como o período do pêndulo varia com o comprimento?" ${tag('fato')}. A hipótese é uma previsão testável, idealmente ligada a um modelo: T ∝ √L ${tag('fato')}.</p>
<h3>Projetos possíveis</h3>
<p>Pêndulo (período × comprimento); queda de objetos (tempo × altura, com vídeo do celular); resfriamento de uma xícara de água (temperatura × tempo); plano inclinado (aceleração × ângulo); mola (alongamento × massa, lei de Hooke) ${tag('fato')}.</p>
<h3>Planejamento</h3>
<p>Mantenha constantes as outras variáveis; repita cada medida pelo menos cinco vezes; registre tudo num caderno com data, condições e imprevistos ${tag('interpretacao')}.</p>
<h3>Análise</h3>
<p>Calcule médias e incertezas, faça gráficos (linearizando quando possível), compare com o modelo e discuta erros sistemáticos ${tag('fato')}.</p>
<h3>Relatório</h3>
<p>Introdução (pergunta e modelo), material e método, resultados (tabelas e gráficos), discussão, conclusão e limites ${tag('interpretacao')}. A honestidade exige relatar também os resultados que contrariam a hipótese ${tag('argumento')}.</p>
<h3>Segurança</h3>
<p>Evite fogo, eletricidade de rede e alturas perigosas; experimentos com água quente exigem cuidado e, para menores, supervisão de adulto ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Variável independente', 'Grandeza que o experimentador escolhe e varia.'],
    ['Variável dependente', 'Grandeza medida em resposta.'],
    ['Variável controlada', 'Grandeza mantida constante.'],
    ['Lei de Hooke', 'Alongamento de uma mola proporcional à força.'],
    ['Caderno de laboratório', 'Registro datado de procedimentos e medidas.'],
  ],
  exemplos: `<p><strong>Resfriamento do café:</strong> mede-se a temperatura de uma xícara a cada 2 minutos por 30 minutos, com a mesma xícara e o mesmo lugar. O gráfico mostra queda rápida no início e lenta depois. A lei de resfriamento de Newton prevê decaimento exponencial da diferença de temperatura com o ambiente — um gráfico do logaritmo dessa diferença deve ser aproximadamente uma reta.</p>`,
  contexto: `<p><strong>No mundo:</strong> feiras de ciências estimulam projetos experimentais de estudantes ${tag('fato')}. <strong>No Brasil:</strong> a Feira Brasileira de Ciências e Engenharia (Febrace) reúne projetos de estudantes da educação básica ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que repetir e registrar tudo', tag: 'argumento',
    premissas: ['Uma única medida pode ser afetada por acaso ou erro.', 'Sem registro, não se pode reconstruir nem conferir o que foi feito.', 'Repetição e registro permitem estimar a incerteza e permitem que outros verifiquem.'],
    conclusao: 'Logo, repetição e registro são o mínimo para uma conclusão confiável.',
    nota: 'É o mesmo princípio de honestidade que governa a ciência profissional.',
  },
  objecoes: [
    { objecao: 'Experimento caseiro não tem valor porque não é de laboratório.', tag: 'argumento',
      resposta: 'A precisão é menor, mas o método é o mesmo: pergunta, controle, medida, incerteza e comparação com modelo. Muitas descobertas históricas usaram equipamentos simples. O valor formativo está em praticar o método com honestidade.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: pergunta, hipótese e modelo, variáveis (independente, dependente, controladas), material, procedimento, cuidados de segurança, cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'Galileu Galilei, Duas novas ciências (1638), descrição do experimento do plano inclinado', link: null,
    orientacao: `<p>Observe como Galileu descreve material, repetição das medidas e precisão alcançada.</p>`,
  },
  perguntas: [
    { p: 'O que é variável independente?', r: 'A grandeza que o experimentador escolhe e varia.' },
    { p: 'Quantas vezes, no mínimo, repetir cada medida?', r: 'Pelo menos cinco vezes.' },
    { p: 'O que fazer com resultados que contrariam a hipótese?', r: 'Relatá-los honestamente.' },
  ],
  exercicios: [
    mc('No pêndulo, o comprimento é variável:', ['Dependente', 'Independente', 'Controlada', 'Irrelevante'], 1, 'Escolhida.'),
    mc('Na mola, a lei de Hooke prevê alongamento:', ['Proporcional à força', 'Constante', 'Quadrático', 'Aleatório'], 0, 'Linear.'),
    mc('A Febrace reúne projetos de:', ['Universidades estrangeiras', 'Estudantes da educação básica', 'Empresas', 'Militares'], 1, 'Feira.'),
    mc('No resfriamento, a lei de Newton prevê decaimento:', ['Linear', 'Exponencial', 'Quadrático', 'Nenhum'], 1, 'Diferença de temperatura.'),
    mc('Um experimento com água quente para menores exige:', ['Nada', 'Supervisão de adulto', 'Fogo aberto', 'Pressa'], 1, 'Segurança.'),
    disc('Apresente o pré-projeto experimental completo, com segurança e rubrica.', ['Pergunta e hipótese', 'Variáveis e método', 'Segurança', 'Cronograma e rubrica']),
  ],
  resumo: ['Pergunta com variáveis.', 'Hipótese ligada a modelo.', 'Repetir e registrar.', 'Análise com incerteza e gráfico.', 'Relatório honesto; segurança.'],
  referencias: [
    { texto: 'Galileu Galilei, Duas novas ciências (1638).' },
    { texto: 'John R. Taylor, Introdução à análise de erros.' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir o projeto em quatro semanas'],
  revisao: [['Independente', 'Escolhida.'], ['Cinco vezes', 'Repetir.'], ['Honestidade', 'Relatar tudo.']],
  avancado: {
    texto: `<h3>Análise de vídeo</h3>
<p>Filmar o movimento com o celular, ao lado de uma régua, e avançar quadro a quadro permite medir posições em intervalos de tempo conhecidos (por exemplo, 1/30 s a 30 quadros por segundo) ${tag('fato')}. Programas gratuitos de análise de vídeo facilitam o processo ${tag('fato')}. A precisão depende da nitidez e da taxa de quadros ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'John R. Taylor, Introdução à análise de erros.' }],
    exercicios: [
      mc('A 30 quadros por segundo, o intervalo entre quadros é:', ['1/30 s', '30 s', '1/3 s', '3 s'], 0, 'Taxa.'),
      mc('A régua no vídeo serve para:', ['Enfeitar', 'Calibrar distâncias', 'Medir tempo', 'Nada'], 1, 'Escala.'),
      mc('A precisão depende da:', ['Nitidez e taxa de quadros', 'Cor do objeto apenas', 'Marca do celular apenas', 'Nada'], 0, 'Interpretação.'),
      disc('Planeje uma análise de vídeo da queda de um objeto e como obter g.', ['Montagem', 'Medidas', 'Análise', 'Cálculo de g'])],
  },
}),

avaliacao('fi5-5', 'Avaliação integradora de Física', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Física. Reúne questões de todos os módulos (FI1 a FI5) e pede duas discursivas de síntese. A conclusão do percurso exige também o projeto experimental de quatro semanas, planejado na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça à mão: conversões, pêndulo, frenagem, energia, consumo em kWh e correção do GPS.</li><li>Releia a rubrica do projeto (fi5-4).</li></ul>`,
[
  disc('Resolva um problema que una mecânica e energia (por exemplo, uma frenagem ou uma queda), com unidades e incerteza, e interprete o resultado numa situação real de segurança ou consumo.', ['Modelagem', 'Cálculo', 'Unidades', 'Interpretação']),
  disc('Mostre, com um caso da história da física (Galileu, Newton, Lemaître ou a mecânica quântica), a distinção entre o que a física afirma, o que é interpretação filosófica e o que é juízo de fé.', ['Caso', 'Física', 'Filosofia', 'Fé']),
]),
];
