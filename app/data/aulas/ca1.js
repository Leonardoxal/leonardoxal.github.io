// Ciências Ambientais I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Ciências Ambientais).
// O ambiente como sistema; conceitos e definições legais; medidas de campo, séries históricas e sensoriamento
// remoto; modelos, cenários, incerteza, princípio da precaução e ética ambiental.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ca1-1', titulo: 'O ambiente como sistema: esferas, energia, ciclos e retroalimentação', duracao: '120 min',
  aprendera: ['Descrever as quatro esferas do sistema Terra', 'Distinguir fluxo de energia e ciclo da matéria', 'Explicar retroalimentação positiva e negativa', 'Situar o ser humano no sistema segundo a ciência e a doutrina'],
  prereq: ['Biologia (recomendado)', 'Química básica (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Um rio, uma floresta e uma cidade parecem coisas separadas. As ciências ambientais os estudam como partes de um mesmo sistema, em que o que acontece num lugar afeta outros.</p>
<h3>As quatro esferas</h3>
<p>Atmosfera (o ar), hidrosfera (as águas), litosfera (rochas e solos) e biosfera (os seres vivos) trocam matéria e energia continuamente ${tag('fato')}. O solo, por exemplo, é produto da rocha alterada pela água, pelo ar e pelos seres vivos ${tag('fato')}.</p>
<h3>Energia e matéria</h3>
<p>A energia vem quase toda do Sol; cerca de 30% da radiação solar que chega à Terra é refletida de volta ao espaço ${tag('fato')}. A energia flui e se dissipa como calor; a matéria circula em ciclos — da água, do carbono, do nitrogênio, do fósforo ${tag('fato')}.</p>
<h3>Retroalimentação</h3>
<p>Na retroalimentação negativa, uma mudança provoca reações que a atenuam; na positiva, reações que a ampliam ${tag('fato')}. Exemplo de positiva: o derretimento do gelo expõe superfícies mais escuras, que absorvem mais radiação e aquecem mais ${tag('fato')}.</p>
<h3>O ser humano no sistema</h3>
<p>A ação humana altera fluxos e ciclos em escala global, por exemplo ao queimar combustíveis fósseis e ao mudar o uso da terra ${tag('fato')}. A Escritura apresenta o homem como quem deve "cultivar e guardar" o jardim (Gn 2,15), e o Catecismo ensina que o domínio sobre a criação não é absoluto, mas regulado pelo cuidado com a qualidade de vida do próximo, inclusive das gerações futuras (CIC 2415) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Sistema', 'Conjunto de partes que interagem e trocam matéria e energia.'],
    ['Biosfera', 'Conjunto dos seres vivos e dos ambientes em que vivem.'],
    ['Ciclo biogeoquímico', 'Circulação de um elemento entre seres vivos e meio físico.'],
    ['Retroalimentação', 'Reação do sistema que atenua (negativa) ou amplia (positiva) uma mudança.'],
    ['Albedo', 'Fração da radiação refletida por uma superfície.'],
  ],
  exemplos: `<p><strong>Um córrego urbano como sistema:</strong> a chuva (hidrosfera) escorre pelo asfalto (litosfera alterada), arrasta lixo e sedimentos; o excesso de matéria orgânica consome oxigênio da água, e os peixes (biosfera) morrem; a decomposição libera gases para a atmosfera. Uma mudança no uso do solo altera todo o sistema.</p>`,
  contexto: `<p><strong>No mundo:</strong> o estudo da Terra como sistema integrado ganhou força com satélites e modelos a partir da segunda metade do século XX ${tag('fato')}. <strong>No Brasil:</strong> a floresta amazônica devolve à atmosfera, por evapotranspiração, grande quantidade de água, parte da qual é levada pelos ventos para outras regiões; a importância desse transporte para as chuvas do Centro-Sul é estudada e discutida ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que pensar em sistemas evita soluções que criam problemas', tag: 'argumento',
    premissas: ['Num sistema, uma intervenção numa parte repercute nas outras.', 'Quem considera só a parte imediata ignora essas repercussões.', 'Repercussões ignoradas podem anular o benefício ou criar novos danos.'],
    conclusao: 'Logo, avaliar intervenções ambientais exige considerar o sistema, e não só o efeito local imediato.',
    nota: 'Exemplo: retificar um rio para evitar alagamentos num bairro pode aumentar as enchentes rio abaixo.',
  },
  objecoes: [
    { objecao: 'Se a natureza é um sistema que se equilibra sozinho, a ação humana não importa.', tag: 'debate',
      resposta: 'Sistemas naturais têm mecanismos de equilíbrio, mas dentro de limites e em escalas de tempo que podem ser muito longas. Retroalimentações positivas também existem e ampliam mudanças. Que o sistema "se equilibre" em milhares de anos não garante condições boas para as pessoas que vivem agora.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: descreva um ambiente do seu entorno (rio, praça, lavoura) mostrando as quatro esferas e pelo menos um fluxo de matéria ou energia entre elas.</p>`,
  fonte: {
    obra: 'Gênesis 1–2; Catecismo da Igreja Católica, §§ 339 e 2415–2418', link: null,
    orientacao: `<p>Em Gênesis, observe a relação entre o homem, o jardim e a tarefa de cultivar e guardar. No Catecismo, a bondade própria de cada criatura (339) e os limites do domínio humano (2415). Compare com a descrição científica do sistema.</p>`,
  },
  perguntas: [
    { p: 'Quais as quatro esferas do sistema Terra?', r: 'Atmosfera, hidrosfera, litosfera e biosfera.' },
    { p: 'Qual a diferença entre fluxo de energia e ciclo da matéria?', r: 'A energia flui e se dissipa como calor; a matéria circula em ciclos.' },
    { p: 'O que é retroalimentação positiva?', r: 'Reação do sistema que amplia a mudança inicial.' },
  ],
  exercicios: [
    mc('O solo pertence principalmente à:', ['Atmosfera', 'Litosfera', 'Hidrosfera', 'Nenhuma esfera'], 1, 'Rocha alterada.'),
    mc('Cerca de quanto da radiação solar é refletida pela Terra?', ['3%', '30%', '70%', '100%'], 1, 'Albedo.'),
    mc('Gelo derrete, superfície escurece, aquece mais: é retroalimentação:', ['Negativa', 'Positiva', 'Nula', 'Química'], 1, 'Amplia.'),
    mc('Na Terra, a matéria:', ['Flui e se perde', 'Circula em ciclos', 'Vem do Sol', 'Não muda'], 1, 'Ciclos.'),
    mc('"Cultivar e guardar" está em:', ['Gn 2,15', 'Ex 20', 'Sl 23', 'Mt 5'], 0, 'Tarefa do homem.'),
    disc('Descreva um ambiente do seu entorno com as quatro esferas e um fluxo entre elas.', ['Quatro esferas', 'Fluxo identificado', 'Exemplo concreto', 'Clareza']),
  ],
  resumo: ['Quatro esferas.', 'Energia flui; matéria circula.', 'Retroalimentação positiva e negativa.', 'Ação humana em escala global.', 'Gn 2,15; CIC 2415.'],
  referencias: [
    { texto: 'Bíblia, Gênesis 1–2.' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 339 e 2415–2418.', livro: 'cic' },
    { texto: 'Papa Francisco, Laudato si\' (2015), cap. 1.', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição do ambiente', 'Ler os textos indicados'],
  revisao: [['Esferas', 'Ar, água, rocha, vida.'], ['Albedo', 'Cerca de 30%.'], ['CIC 2415', 'Domínio não absoluto.']],
  avancado: {
    texto: `<h3>Limites planetários</h3>
<p>Johan Rockström e colegas (2009) propuseram nove "limites planetários", como mudança climática, perda de biodiversidade e alteração dos ciclos de nitrogênio e fósforo, dentro dos quais a humanidade operaria com segurança ${tag('interpretacao')}. A escolha dos limites e de seus valores é objeto de debate científico ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Johan Rockström e outros, "A Safe Operating Space for Humanity" (2009).' }],
    exercicios: [
      mc('Os limites planetários foram propostos em:', ['1972', '1992', '2009', '2020'], 2, 'Rockström e colegas.'),
      mc('Quantos limites foram propostos?', ['Três', 'Cinco', 'Nove', 'Doze'], 2, 'Proposta original.'),
      mc('Os valores dos limites são:', ['Consenso absoluto', 'Objeto de debate', 'Doutrina', 'Lei'], 1, 'Debate.'),
      disc('Escolha um limite planetário e explique o que ele mede e por que seu valor é debatido.', ['Limite escolhido', 'O que mede', 'Debate', 'Fontes'])],
  },
}),

aula({
  id: 'ca1-2', titulo: 'Vocabulário ambiental: ecossistema, serviços, poluição, impacto, risco e sustentabilidade', duracao: '150 min',
  aprendera: ['Definir ecossistema, bioma e serviços ecossistêmicos', 'Distinguir poluição, impacto e risco', 'Usar as definições legais da Lei 6.938/1981', 'Converter e interpretar unidades de concentração'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>"Impacto", "poluição" e "sustentável" são palavras usadas para tudo. Sem definições precisas, o debate ambiental vira slogan.</p>
<h3>Ecossistema, bioma, serviços</h3>
<p>Ecossistema é o conjunto dos seres vivos de um lugar e do meio físico com que interagem; bioma é uma grande unidade de vegetação e clima semelhantes ${tag('fato')}. A Avaliação Ecossistêmica do Milênio (2005) classificou os serviços ecossistêmicos em provisão (alimento, água), regulação (clima, polinização), culturais e de suporte (formação do solo) ${tag('fato')}.</p>
<h3>Definições legais</h3>
<p>A Lei nº 6.938/1981 define meio ambiente como o conjunto de condições, leis, influências e interações de ordem física, química e biológica que permite, abriga e rege a vida em todas as suas formas, e define poluição como a degradação da qualidade ambiental resultante de atividades que prejudiquem a saúde, a segurança e o bem-estar, as atividades sociais e econômicas, a biota ou as condições estéticas e sanitárias do meio (art. 3º) ${tag('fato')}. A Constituição de 1988 afirma que todos têm direito ao meio ambiente ecologicamente equilibrado (art. 225) ${tag('fato')}.</p>
<h3>Impacto e risco</h3>
<p>Impacto ambiental é qualquer alteração do ambiente causada por uma atividade; pode ser positivo ou negativo ${tag('fato')}. Risco combina a probabilidade de um evento e a gravidade de suas consequências ${tag('fato')}.</p>
<h3>Sustentabilidade</h3>
<p>O Relatório Brundtland (1987) definiu desenvolvimento sustentável como o que atende às necessidades do presente sem comprometer a capacidade das gerações futuras de atender às suas ${tag('fato')}. Capacidade de suporte é a população máxima que um ambiente sustenta sem se degradar ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ecossistema', 'Seres vivos de um lugar e o meio físico com que interagem.'],
    ['Serviço ecossistêmico', 'Benefício que as pessoas obtêm dos ecossistemas.'],
    ['Poluição', 'Degradação da qualidade ambiental por atividades humanas (Lei 6.938/1981).'],
    ['Risco', 'Combinação de probabilidade e gravidade de um dano.'],
    ['Desenvolvimento sustentável', 'Atende ao presente sem comprometer as gerações futuras (Brundtland).'],
  ],
  exemplos: `<p><strong>Unidades de concentração:</strong> 1 mg/L é um miligrama de substância por litro de água, aproximadamente uma parte por milhão (ppm) em massa. Se um rio tem 6 mg/L de oxigênio dissolvido e o limite mínimo da sua classe é 5 mg/L, ele está acima do mínimo; se cair para 3 mg/L, muitos peixes não sobrevivem.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Avaliação Ecossistêmica do Milênio reuniu mais de mil cientistas sob coordenação das Nações Unidas ${tag('fato')}. <strong>No Brasil:</strong> a Política Nacional do Meio Ambiente criou o Sistema Nacional do Meio Ambiente (Sisnama) e o Conselho Nacional do Meio Ambiente (Conama) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que distinguir impacto e risco', tag: 'argumento',
    premissas: ['Impacto descreve uma alteração que ocorre ou ocorrerá.', 'Risco descreve a possibilidade de um dano, com probabilidade e gravidade.', 'Uma atividade pode ter impacto pequeno e risco grave, como uma barragem segura na maior parte do tempo mas catastrófica se romper.'],
    conclusao: 'Logo, avaliar uma atividade exige considerar impactos e riscos separadamente.',
    nota: 'Os rompimentos de barragens de rejeitos em Mariana (2015) e Brumadinho (2019) mostraram a gravidade de riscos de baixa probabilidade.',
  },
  objecoes: [
    { objecao: '"Sustentável" virou palavra vazia; não serve para nada.', tag: 'debate',
      resposta: 'O termo é usado de modo vago na propaganda, mas pode ser operacionalizado com critérios: taxa de uso de um recurso menor que sua renovação, emissões dentro de metas, indicadores sociais. A crítica certa é exigir critérios mensuráveis, não abandonar o conceito.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um glossário de 20 termos ambientais com um exemplo brasileiro para cada um, citando a definição legal quando houver.</p>`,
  fonte: {
    obra: 'Lei nº 6.938/1981, art. 3º; Constituição de 1988, art. 225; Comissão Mundial sobre Meio Ambiente e Desenvolvimento, Nosso futuro comum (1987), cap. 2', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na Lei 6.938, compare as definições de degradação e poluição. No art. 225, os deveres do poder público. No Relatório Brundtland, a definição de desenvolvimento sustentável e seus dois conceitos-chave (necessidades e limitações).</p>`,
  },
  perguntas: [
    { p: 'Quais os quatro tipos de serviços ecossistêmicos?', r: 'Provisão, regulação, culturais e de suporte.' },
    { p: 'Onde a Constituição trata do meio ambiente?', r: 'No art. 225.' },
    { p: 'Como o Relatório Brundtland define desenvolvimento sustentável?', r: 'O que atende ao presente sem comprometer a capacidade das gerações futuras de atender às suas necessidades.' },
  ],
  exercicios: [
    mc('A polinização é serviço ecossistêmico de:', ['Provisão', 'Regulação', 'Cultural', 'Nenhum'], 1, 'Avaliação do Milênio.'),
    mc('A Política Nacional do Meio Ambiente é a Lei:', ['6.938/1981', '9.433/1997', '12.651/2012', '12.305/2010'], 0, 'Art. 3º.'),
    mc('1 mg/L equivale aproximadamente a:', ['1 ppm', '1%', '1 ppb', '10%'], 0, 'Em massa, na água.'),
    mc('Risco combina:', ['Custo e preço', 'Probabilidade e gravidade', 'Área e tempo', 'Lei e norma'], 1, 'Definição.'),
    mc('O Relatório Brundtland é de:', ['1972', '1987', '1992', '2015'], 1, 'Nosso futuro comum.'),
    disc('Apresente o glossário de 20 termos ambientais com exemplos brasileiros e definições legais quando houver.', ['20 termos', 'Definições corretas', 'Exemplos brasileiros', 'Definições legais citadas']),
  ],
  resumo: ['Ecossistema e bioma.', 'Serviços: provisão, regulação, culturais, suporte.', 'Lei 6.938/1981 e CF art. 225.', 'Impacto e risco.', 'Brundtland (1987).'],
  referencias: [
    { texto: 'Lei nº 6.938, de 1981 (Política Nacional do Meio Ambiente).' },
    { texto: 'Avaliação Ecossistêmica do Milênio, Ecossistemas e bem-estar humano (2005).' },
    { texto: 'Comissão Mundial sobre Meio Ambiente e Desenvolvimento, Nosso futuro comum (1987).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler os textos indicados'],
  revisao: [['Lei 6.938', 'Definições legais.'], ['Risco', 'Probabilidade e gravidade.'], ['Brundtland', 'Gerações futuras.']],
  avancado: {
    texto: `<h3>Pegada ecológica</h3>
<p>A pegada ecológica estima a área de terra e mar biologicamente produtiva necessária para sustentar o consumo de uma população e absorver seus resíduos ${tag('fato')}. É indicador útil para comunicação, mas criticado por simplificar demais e converter tudo em área ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Mathis Wackernagel e William Rees, Our Ecological Footprint (1996).' }],
    exercicios: [
      mc('A pegada ecológica é medida em:', ['Toneladas de CO2 apenas', 'Área biologicamente produtiva', 'Litros de água', 'Reais'], 1, 'Hectares globais.'),
      mc('A pegada foi proposta por:', ['Wackernagel e Rees', 'Carson', 'Hardin', 'Ostrom'], 0, '1996.'),
      mc('Uma crítica à pegada é:', ['Ser complicada demais', 'Simplificar convertendo tudo em área', 'Não existir', 'Ser lei'], 1, 'Debate.'),
      disc('Compare a pegada ecológica e a pegada de carbono quanto ao que medem e a seus limites.', ['Pegada ecológica', 'Pegada de carbono', 'Diferenças', 'Limites'])],
  },
}),

aula({
  id: 'ca1-3', titulo: 'Métodos: medidas de campo e de laboratório, séries históricas e sensoriamento remoto', duracao: '150 min',
  aprendera: ['Medir parâmetros simples de qualidade da água', 'Interpretar uma série histórica', 'Explicar o funcionamento do sensoriamento remoto', 'Planejar um monitoramento de uma semana'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como saber se um rio está poluído, se o ar piorou ou se a floresta diminuiu? É preciso medir, repetir as medidas no tempo e comparar com referências.</p>
<h3>Medidas de campo e de laboratório</h3>
<p>Na água, medem-se pH, temperatura, oxigênio dissolvido, turbidez, nutrientes e coliformes ${tag('fato')}. A Resolução Conama nº 357/2005 classifica as águas doces em classes conforme os usos, com limites para cada parâmetro; para a classe 2, o oxigênio dissolvido não deve ser inferior a 5 mg/L ${tag('fato')}. No ar, medem-se partículas finas, ozônio e outros poluentes ${tag('fato')}.</p>
<h3>Séries históricas</h3>
<p>Medidas repetidas permitem ver tendências. Charles David Keeling iniciou em 1958 a medição contínua do CO2 atmosférico no observatório de Mauna Loa, no Havaí; a série mostra aumento constante e uma oscilação anual ligada às estações ${tag('fato')}. Distinguir tendência de variação natural exige séries longas ${tag('argumento')}.</p>
<h3>Sensoriamento remoto</h3>
<p>Satélites registram a radiação refletida pela superfície em várias faixas do espectro, o que permite distinguir floresta, pasto, água e área urbana ${tag('fato')}. O INPE mede o desmatamento anual da Amazônia com o PRODES desde 1988 e emite alertas rápidos com o DETER desde 2004 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Oxigênio dissolvido', 'Quantidade de oxigênio na água, essencial aos organismos aquáticos.'],
    ['Turbidez', 'Grau de opacidade da água causado por partículas.'],
    ['Série histórica', 'Sequência de medidas do mesmo parâmetro ao longo do tempo.'],
    ['Tendência', 'Direção de variação de longo prazo numa série.'],
    ['Sensoriamento remoto', 'Obtenção de informações à distância, por satélites ou aviões.'],
  ],
  exemplos: `<p><strong>Lendo uma série:</strong> o oxigênio dissolvido de um córrego, medido semanalmente durante um ano, varia entre 4 e 8 mg/L, mais baixo no verão (água quente retém menos oxigênio). Uma queda brusca para 1 mg/L numa semana, fora desse padrão, indica um evento, como lançamento de esgoto, que precisa ser investigado.</p>`,
  contexto: `<p><strong>No mundo:</strong> os satélites Landsat, lançados a partir de 1972, formam a mais longa série contínua de imagens da superfície terrestre ${tag('fato')}. <strong>No Brasil:</strong> a Agência Nacional de Águas e Saneamento Básico (ANA) mantém redes de monitoramento hidrológico e de qualidade da água ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que uma medida isolada não permite concluir sobre a qualidade ambiental', tag: 'argumento',
    premissas: ['Parâmetros ambientais variam com hora, estação e eventos pontuais.', 'Uma medida isolada pode coincidir com um momento atípico.', 'Só a repetição mostra o padrão normal e os desvios.'],
    conclusao: 'Logo, conclusões sobre qualidade ambiental exigem medidas repetidas no tempo.',
    nota: 'Também é preciso padronizar local, hora e método, para que as medidas sejam comparáveis.',
  },
  objecoes: [
    { objecao: 'Dados de satélite são só imagens; não provam nada sem ir ao campo.', tag: 'debate',
      resposta: 'Imagens de satélite são medidas físicas calibradas, e os sistemas como o PRODES são validados com verificações de campo e imagens de maior resolução. O campo continua importante para calibrar e explicar; satélite e campo se complementam.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: meça e registre três parâmetros simples de um corpo d'água ou do ar local durante uma semana (por exemplo, temperatura, pH com fita indicadora e turbidez com um disco ou garrafa), descrevendo o método.</p>`,
  fonte: {
    obra: 'Resolução Conama nº 357/2005; INPE, metodologia do PRODES; registros de CO2 de Mauna Loa', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' },
    orientacao: `<p>Na Resolução 357, localize as classes de água doce e os limites da classe 2. No INPE, a descrição do PRODES. Na série de Mauna Loa, identifique a tendência e a oscilação anual.</p>`,
  },
  perguntas: [
    { p: 'Qual o limite mínimo de oxigênio dissolvido para a classe 2?', r: '5 mg/L (Resolução Conama 357/2005).' },
    { p: 'Desde quando se mede o CO2 em Mauna Loa?', r: 'Desde 1958.' },
    { p: 'O que é o PRODES?', r: 'O sistema do INPE que mede o desmatamento anual da Amazônia por satélite, desde 1988.' },
  ],
  exercicios: [
    mc('A classificação das águas doces brasileiras está na:', ['Lei 6.938/1981', 'Resolução Conama 357/2005', 'Lei 12.651/2012', 'CF art. 225'], 1, 'Classes de uso.'),
    mc('A série de CO2 de Mauna Loa foi iniciada por:', ['Keeling', 'Carson', 'Humboldt', 'Tansley'], 0, '1958.'),
    mc('Água mais quente retém:', ['Mais oxigênio', 'Menos oxigênio', 'O mesmo', 'Só CO2'], 1, 'Solubilidade.'),
    mc('O DETER do INPE emite:', ['Relatórios anuais', 'Alertas rápidos de desmatamento', 'Multas', 'Licenças'], 1, 'Desde 2004.'),
    mc('Para distinguir tendência de variação natural é preciso:', ['Uma medida', 'Séries longas', 'Opinião', 'Sorte'], 1, 'Repetição.'),
    disc('Entregue o registro de três parâmetros durante uma semana, com método, resultados e limites.', ['Método descrito', 'Registros completos', 'Interpretação', 'Limites']),
  ],
  resumo: ['Parâmetros da água e do ar.', 'Conama 357/2005: classe 2, OD ≥ 5 mg/L.', 'Mauna Loa (1958).', 'PRODES (1988) e DETER (2004).', 'Medidas repetidas e padronizadas.'],
  referencias: [
    { texto: 'Resolução Conama nº 357, de 2005.' },
    { texto: 'INPE, PRODES e DETER.', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' } },
    { texto: 'Agência Nacional de Águas e Saneamento Básico, monitoramento da qualidade da água.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o registro de uma semana', 'Consultar as fontes oficiais'],
  revisao: [['OD', 'Classe 2: ≥ 5 mg/L.'], ['Keeling', '1958.'], ['PRODES', '1988.']],
  avancado: {
    texto: `<h3>Índices de vegetação</h3>
<p>O NDVI (índice de vegetação por diferença normalizada) compara a reflexão no infravermelho próximo e no vermelho: (IVP − V) ÷ (IVP + V) ${tag('fato')}. Vegetação verde reflete muito infravermelho próximo e absorve vermelho, e por isso tem NDVI alto; solo exposto e água têm valores baixos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Manuais introdutórios de sensoriamento remoto.' }],
    exercicios: [
      mc('Com IVP = 0,5 e V = 0,1, o NDVI é:', ['0,4', '0,67', '0,6', '5'], 1, '0,4 ÷ 0,6.'),
      mc('Vegetação verde tem NDVI:', ['Alto', 'Baixo', 'Negativo sempre', 'Zero'], 0, 'Reflete infravermelho.'),
      mc('O NDVI compara:', ['Calor e frio', 'Infravermelho próximo e vermelho', 'Som e luz', 'Chuva e vento'], 1, 'Faixas espectrais.'),
      disc('Explique como o NDVI permite acompanhar a seca numa área do Semiárido.', ['Fórmula', 'Comportamento da vegetação', 'Uso na seca', 'Limites'])],
  },
}),

aula({
  id: 'ca1-4', titulo: 'Modelos, cenários e incerteza; princípio da precaução e ética ambiental', duracao: '120 min',
  aprendera: ['Distinguir medição, projeção e cenário', 'Interpretar a linguagem de probabilidade do IPCC', 'Explicar o princípio da precaução e seus limites', 'Distinguir o juízo científico do juízo ético'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>"A temperatura vai subir tantos graus": isso é medição, previsão ou cenário? Confundir esses planos gera tanto alarmismo quanto negação.</p>
<h3>Medição, projeção, cenário</h3>
<p>Medição registra o que ocorreu; projeção é o resultado de um modelo sob certas hipóteses; cenário é uma hipótese sobre o futuro (por exemplo, quanto se emitirá), não uma previsão ${tag('fato')}. Projeções climáticas são condicionais: "se as emissões seguirem tal cenário, a temperatura tende a tal faixa" ${tag('fato')}.</p>
<h3>Linguagem calibrada</h3>
<p>O IPCC usa termos com probabilidades definidas: "provável" significa 66–100%; "muito provável", 90–100%; "extremamente provável", 95–100% ${tag('fato')}. Assim o leitor sabe quanto confiar em cada afirmação ${tag('argumento')}.</p>
<h3>Princípio da precaução</h3>
<p>A Declaração do Rio (1992), princípio 15, afirma que, quando houver ameaça de danos graves ou irreversíveis, a falta de certeza científica plena não deve ser usada como razão para adiar medidas eficazes ${tag('fato')}. O princípio exige proporcionalidade: não autoriza proibir tudo o que tem algum risco ${tag('argumento')}. A <em>Laudato si'</em> retoma o princípio (n. 186) ${tag('doutrina')}.</p>
<h3>Ciência e ética</h3>
<p>A ciência diz o que acontece e o que provavelmente acontecerá sob certas condições; o que se deve fazer depende também de juízos sobre justiça, prioridades e custos ${tag('argumento')}. A doutrina ensina que o cuidado da criação é parte da responsabilidade moral, sem divinizar a natureza nem esquecer a dignidade da pessoa (Laudato si', 90 e 118) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Modelo', 'Representação simplificada de um sistema, usada para explicar e projetar.'],
    ['Projeção', 'Resultado de um modelo sob hipóteses definidas.'],
    ['Cenário', 'Hipótese sobre condições futuras, não previsão.'],
    ['Incerteza', 'Grau de desconhecimento sobre um valor ou resultado.'],
    ['Princípio da precaução', 'Agir para evitar danos graves mesmo sem certeza científica plena.'],
  ],
  exemplos: `<p><strong>Três frases diferentes:</strong> (1) "A temperatura média global de 2011–2020 foi cerca de 1,1 °C maior que a de 1850–1900" é medição. (2) "No cenário de emissões muito altas, a temperatura no fim do século tende a uma faixa entre tantos graus" é projeção condicional. (3) "Vamos adotar uma meta de redução de emissões" é decisão política, que usa a ciência mas depende de valores.</p>`,
  contexto: `<p><strong>No mundo:</strong> o IPCC, criado em 1988, avalia a literatura científica sobre o clima e publica relatórios periódicos ${tag('fato')}. <strong>No Brasil:</strong> a Política Nacional sobre Mudança do Clima foi instituída pela Lei nº 12.187/2009 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a precaução exige proporcionalidade', tag: 'argumento',
    premissas: ['Quase toda atividade humana tem algum risco.', 'Proibir tudo o que tem risco impediria também atividades necessárias e benefícios importantes.', 'A Declaração do Rio limita a precaução a ameaças de danos graves ou irreversíveis e a medidas eficazes.'],
    conclusao: 'Logo, a precaução bem aplicada pondera gravidade, probabilidade, custos e alternativas.',
    nota: 'Precaução não é paralisia; é prudência diante da incerteza.',
  },
  objecoes: [
    { objecao: 'Modelos erram; logo projeções climáticas não valem nada.', tag: 'debate',
      resposta: 'Todo modelo é simplificação e tem incerteza, que os relatórios quantificam em faixas. Modelos climáticos são testados reproduzindo o clima passado e projeções feitas décadas atrás foram comparadas com o que ocorreu depois. A pergunta correta é quanta confiança cada projeção merece, não se modelos são perfeitos.' },
  ],
  aplicacao: `<p>Escolha uma notícia ambiental e classifique cada afirmação como medição, projeção, cenário ou decisão política, indicando o grau de confiança declarado quando houver.</p>`,
  fonte: {
    obra: 'Declaração do Rio sobre Meio Ambiente e Desenvolvimento (1992), princípio 15; Papa Francisco, Laudato si\' (2015), n. 90, 118 e 186', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' },
    orientacao: `<p>No princípio 15, as duas condições (dano grave ou irreversível; medidas eficazes). Na Laudato si', o equilíbrio entre não divinizar a natureza (90), não esquecer a pessoa (118) e agir com precaução (186).</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre projeção e cenário?', r: 'O cenário é a hipótese sobre condições futuras; a projeção é o resultado do modelo sob essa hipótese.' },
    { p: 'O que significa "muito provável" no IPCC?', r: 'Probabilidade de 90 a 100%.' },
    { p: 'Onde está o princípio da precaução na Declaração do Rio?', r: 'No princípio 15.' },
  ],
  exercicios: [
    mc('"Provável" no IPCC significa:', ['50%', '66–100%', '90–100%', '100%'], 1, 'Linguagem calibrada.'),
    mc('"Se as emissões dobrarem, a temperatura tende a subir X" é:', ['Medição', 'Projeção condicional', 'Doutrina', 'Lei'], 1, 'Modelo e cenário.'),
    mc('O princípio da precaução está no princípio __ da Declaração do Rio:', ['1', '10', '15', '27'], 2, '1992.'),
    mc('A Política Nacional sobre Mudança do Clima é a Lei:', ['12.187/2009', '6.938/1981', '9.433/1997', '12.305/2010'], 0, '2009.'),
    mc('A precaução bem aplicada:', ['Proíbe tudo', 'Pondera gravidade, probabilidade e custos', 'Ignora a ciência', 'Só vale para o clima'], 1, 'Proporcionalidade.'),
    disc('Classifique as afirmações de uma notícia ambiental em medição, projeção, cenário e decisão política, com o grau de confiança.', ['Notícia citada', 'Classificação correta', 'Graus de confiança', 'Justificativa']),
  ],
  resumo: ['Medição, projeção, cenário.', 'IPCC: provável, muito provável, extremamente provável.', 'Precaução: Rio 92, princípio 15.', 'Proporcionalidade.', 'LS 90, 118, 186.'],
  referencias: [
    { texto: 'Declaração do Rio sobre Meio Ambiente e Desenvolvimento (1992).' },
    { texto: 'IPCC, Sexto Relatório de Avaliação, Grupo de Trabalho I (2021).', link: { url: 'https://www.ipcc.ch', rotulo: 'IPCC' } },
    { texto: 'Papa Francisco, Laudato si\' (2015).', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação da notícia', 'Ler os textos indicados'],
  revisao: [['Cenário', 'Hipótese, não previsão.'], ['Muito provável', '90–100%.'], ['Princípio 15', 'Precaução.']],
  avancado: {
    texto: `<h3>Sensibilidade climática</h3>
<p>A sensibilidade climática de equilíbrio é o aquecimento de longo prazo esperado se a concentração de CO2 dobrar em relação à pré-industrial ${tag('fato')}. O Sexto Relatório do IPCC estimou como "muito provável" a faixa de 2 °C a 5 °C, com melhor estimativa de 3 °C ${tag('fato')}. Estreitar essa faixa é um dos grandes objetivos da pesquisa climática ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'IPCC, Sexto Relatório de Avaliação, Grupo de Trabalho I (2021), cap. 7.' }],
    exercicios: [
      mc('A sensibilidade climática refere-se a:', ['Dobrar o CO2', 'Dobrar a população', 'Dobrar a área urbana', 'Dobrar o vapor'], 0, 'Definição.'),
      mc('A melhor estimativa do AR6 é:', ['1 °C', '3 °C', '6 °C', '10 °C'], 1, 'Faixa 2–5 °C.'),
      mc('A faixa de 2 a 5 °C é qualificada como:', ['Provável', 'Muito provável', 'Certa', 'Improvável'], 1, 'AR6.'),
      disc('Explique por que a sensibilidade climática tem uma faixa, e não um valor exato.', ['Definição', 'Fontes de incerteza', 'Faixa', 'Consequência'])],
  },
}),

avaliacao('ca1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o ambiente como sistema, o vocabulário e as definições legais, os métodos de medição e a distinção entre medição, projeção e decisão, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário e o registro de uma semana.</li><li>Revise a linguagem calibrada do IPCC e o princípio 15.</li></ul>`,
[
  disc('Planeje o monitoramento de um problema ambiental do seu município: parâmetros, locais, frequência, referências legais e como distinguiria tendência de evento pontual.', ['Parâmetros', 'Locais e frequência', 'Referências legais', 'Tendência e evento']),
  disc('Explique, com um exemplo, a diferença entre o que a ciência ambiental mede, o que ela projeta e o que cabe à decisão ética e política, usando o princípio da precaução.', ['Medição', 'Projeção', 'Decisão', 'Precaução aplicada']),
]),
];
