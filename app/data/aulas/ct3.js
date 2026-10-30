// Ciências da Terra III — escolas e debates (etapas 6 e 7 do percurso de Ciências da Terra).
// Netunismo e plutonismo, catastrofismo e uniformitarismo; fixismo, mobilismo e a tectônica de placas;
// a idade da Terra e a leitura do Gênesis; recursos minerais, mineração e seus limites no Brasil.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ct3-1', titulo: 'Grandes controvérsias: netunismo e plutonismo, catastrofismo e uniformitarismo', duracao: '150 min',
  aprendera: ['Expor as teses do netunismo e do plutonismo', 'Expor o catastrofismo de Cuvier e o uniformitarismo de Lyell', 'Explicar o neocatastrofismo atual', 'Tirar lições de método das controvérsias'],
  prereq: ['Ciências da Terra II (módulo CT2)'],
  explicacao: `
<h3>O problema</h3>
<p>A história da geologia avançou por controvérsias. O que cada lado via corretamente, e que evidência decidiu?</p>
<h3>Netunismo e plutonismo</h3>
<p>Abraham Werner, professor em Freiberg, sustentou que as rochas se precipitaram de um oceano primitivo, em sequência universal ${tag('fato')}. Hutton e os plutonistas sustentaram a origem ígnea de granitos e basaltos e o papel do calor interno ${tag('fato')}. Observações de basaltos ligados a vulcões e de granitos que cortam e alteram rochas vizinhas decidiram a favor dos plutonistas ${tag('fato')}. Os netunistas acertaram sobre a origem aquosa das rochas sedimentares ${tag('interpretacao')}.</p>
<h3>Catastrofismo e uniformitarismo</h3>
<p>Georges Cuvier, no início do século XIX, mostrou que espécies se extinguiram e explicou mudanças bruscas na fauna fóssil por "revoluções" súbitas da superfície ${tag('fato')}. Lyell opôs a isso o uniformitarismo: causas atuais, com intensidade constante, ao longo de muito tempo ${tag('fato')}.</p>
<h3>Neocatastrofismo</h3>
<p>A geologia atual combina as duas intuições: processos lentos predominam, mas eventos raros e intensos — impactos, megaderrames vulcânicos, grandes inundações glaciais — também deixaram marcas decisivas ${tag('interpretacao')}. As inundações catastróficas de Scablands, no estado de Washington, propostas por J Harlen Bretz nos anos 1920 e inicialmente rejeitadas, foram depois aceitas ${tag('fato')}.</p>`,
  vocabulario: [
    ['Netunismo', 'Tese de que as rochas se precipitaram de um oceano primitivo.'],
    ['Plutonismo', 'Tese da origem ígnea de muitas rochas e do papel do calor interno.'],
    ['Catastrofismo', 'Explicação de mudanças por eventos súbitos e violentos.'],
    ['Uniformitarismo', 'Explicação pelo acúmulo lento de causas atuais.'],
    ['Neocatastrofismo', 'Reconhecimento de eventos raros e intensos dentro de uma história longa.'],
  ],
  exemplos: `<p><strong>Um mesmo perfil, duas leituras:</strong> uma camada fina de argila com irídio separa rochas com fósseis de dinossauros de rochas sem eles. Um uniformitarista estrito procuraria uma transição lenta; um catastrofista, um evento súbito. A evidência (irídio, quartzo de impacto, cratera) decidiu por um evento raro, sem negar que as camadas de cima e de baixo se formaram lentamente.</p>`,
  contexto: `<p><strong>No mundo:</strong> a controvérsia de Bretz é citada como exemplo de hipótese ousada rejeitada e depois confirmada ${tag('interpretacao')}. <strong>No Brasil:</strong> os derrames basálticos da Formação Serra Geral, na Bacia do Paraná, estão entre as maiores províncias vulcânicas continentais do planeta ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que nenhuma das escolas venceu inteiramente', tag: 'argumento',
    premissas: ['O registro geológico mostra camadas formadas lentamente ao longo de milhões de anos.', 'O mesmo registro mostra também marcas de eventos súbitos e intensos.', 'Uma teoria que explique só um dos tipos deixa parte da evidência sem explicação.'],
    conclusao: 'Logo, a síntese atual integra processos lentos e eventos raros.',
    nota: 'O critério não foi conciliar escolas por gosto, mas explicar toda a evidência disponível.',
  },
  objecoes: [
    { objecao: 'Se os cientistas mudaram de opinião, nada em geologia é confiável.', tag: 'debate',
      resposta: 'As mudanças ocorreram por novas evidências e preservaram o que estava bem estabelecido: a antiguidade da Terra, a origem ígnea dos granitos, a sucessão dos fósseis. A correção pela evidência é sinal de método, não de arbitrariedade. Distinguir o que é consolidado do que é revisável é parte da leitura crítica.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um quadro comparativo das controvérsias (netunismo e plutonismo, catastrofismo e uniformitarismo), indicando o que cada posição explicava e que evidência decidiu.</p>`,
  fonte: {
    obra: 'Georges Cuvier, Discurso sobre as revoluções da superfície do globo (1825); Charles Lyell, Princípios de geologia (1830), vol. 1', link: null,
    orientacao: `<p>Em Cuvier, as evidências de extinção e de mudanças bruscas. Em Lyell, a crítica ao recurso a catástrofes. Pergunte o que cada um viu bem.</p>`,
  },
  perguntas: [
    { p: 'Quem defendia o netunismo?', r: 'Abraham Werner.' },
    { p: 'O que Cuvier demonstrou sobre as espécies?', r: 'Que espécies se extinguiram.' },
    { p: 'O que é o neocatastrofismo?', r: 'A integração de eventos raros e intensos numa história geológica longa.' },
  ],
  exercicios: [
    mc('A origem ígnea dos granitos favoreceu o:', ['Netunismo', 'Plutonismo', 'Fixismo', 'Catastrofismo'], 1, 'Hutton.'),
    mc('A ideia de "revoluções" súbitas da superfície é de:', ['Lyell', 'Cuvier', 'Hutton', 'Wegener'], 1, 'Catastrofismo.'),
    mc('As inundações de Scablands foram propostas por:', ['Bretz', 'Werner', 'Cuvier', 'Holmes'], 0, 'Anos 1920.'),
    mc('Os netunistas acertaram sobre a origem:', ['Do basalto', 'Das rochas sedimentares', 'Do granito', 'Dos vulcões'], 1, 'Deposição na água.'),
    mc('Os derrames da Serra Geral estão na Bacia do:', ['Amazonas', 'Paraná', 'São Francisco', 'Parnaíba'], 1, 'Província vulcânica.'),
    disc('Apresente o quadro comparativo das controvérsias, com o que cada posição explicava e a evidência decisiva.', ['Duas controvérsias', 'Teses', 'Acertos', 'Evidência decisiva']),
  ],
  resumo: ['Werner: netunismo; Hutton: plutonismo.', 'Cuvier: extinções e revoluções.', 'Lyell: uniformitarismo.', 'Neocatastrofismo; Bretz.', 'Serra Geral.'],
  referencias: [
    { texto: 'Georges Cuvier, Discurso sobre as revoluções da superfície do globo (1825).' },
    { texto: 'Charles Lyell, Princípios de geologia (1830–1833).' },
    { texto: 'Martin Rudwick, Bursting the Limits of Time (2005).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler os textos indicados'],
  revisao: [['Werner', 'Oceano primitivo.'], ['Cuvier', 'Extinções.'], ['Bretz', 'Inundações aceitas depois.']],
  avancado: {
    texto: `<h3>Kuhn e a revolução geológica</h3>
<p>Thomas Kuhn (<em>A estrutura das revoluções científicas</em>, 1962) descreveu a ciência como alternância de períodos normais e revoluções de paradigma ${tag('fato')}. A aceitação da tectônica de placas nos anos 1960 é frequentemente usada como exemplo, embora historiadores discutam se o modelo de Kuhn se aplica bem ao caso ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Thomas Kuhn, A estrutura das revoluções científicas (1962).' }],
    exercicios: [
      mc('A estrutura das revoluções científicas é de:', ['Popper', 'Kuhn', 'Lakatos', 'Feyerabend'], 1, '1962.'),
      mc('A tectônica de placas é usada como exemplo de:', ['Ciência normal', 'Revolução de paradigma', 'Fraude', 'Doutrina'], 1, 'Interpretação.'),
      mc('A aplicação do modelo de Kuhn ao caso é:', ['Consensual', 'Debatida', 'Proibida', 'Irrelevante'], 1, 'Historiadores.'),
      disc('Avalie se a aceitação da tectônica de placas se encaixa no modelo de Kuhn.', ['Modelo de Kuhn', 'Caso histórico', 'Encaixe e diferenças', 'Conclusão'])],
  },
}),

aula({
  id: 'ct3-2', titulo: 'Fixismo, mobilismo e a tectônica de placas como síntese', duracao: '150 min',
  aprendera: ['Distinguir fixismo e mobilismo', 'Descrever os três tipos de limite de placas', 'Explicar subducção, colisão e falhas transformantes', 'Explicar o poder unificador da tectônica de placas'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Montanhas, vulcões, terremotos, fossas oceânicas: fenômenos que pareciam separados ganharam uma explicação comum. Qual?</p>
<h3>Fixismo e mobilismo</h3>
<p>Até meados do século XX, a maioria dos geólogos era fixista: os continentes não se deslocavam lateralmente, e as montanhas resultariam de movimentos verticais ou da contração da Terra ${tag('fato')}. Os mobilistas, como Wegener, Holmes e du Toit, defendiam grandes deslocamentos horizontais ${tag('fato')}.</p>
<h3>A síntese</h3>
<p>A tectônica de placas afirma que a litosfera está dividida em placas rígidas que se movem sobre a astenosfera ${tag('fato')}. Nos limites <strong>divergentes</strong>, como a dorsal meso-atlântica, forma-se crosta nova; nos <strong>convergentes</strong>, uma placa mergulha sob outra (subducção), formando fossas e vulcões, ou continentes colidem e erguem montanhas, como o Himalaia; nos <strong>transformantes</strong>, como a falha de San Andreas, as placas deslizam lado a lado ${tag('fato')}.</p>
<h3>Poder explicativo</h3>
<p>A teoria explica a distribuição de terremotos e vulcões ao longo dos limites, a idade crescente do assoalho oceânico a partir das dorsais, a formação das cordilheiras e a distribuição de fósseis e rochas entre continentes ${tag('fato')}. O mecanismo que move as placas envolve a tração da placa que mergulha e a convecção do manto, com pesos ainda discutidos ${tag('debate')}.</p>
<h3>O Brasil</h3>
<p>O Brasil está no interior da placa Sul-Americana, longe dos limites, o que explica a baixa sismicidade e a ausência de vulcões ativos ${tag('fato')}. Os Andes formam-se pela subducção da placa de Nazca sob a Sul-Americana ${tag('fato')}.</p>`,
  vocabulario: [
    ['Litosfera', 'Camada rígida formada pela crosta e pela parte superior do manto.'],
    ['Astenosfera', 'Camada do manto, abaixo da litosfera, que flui lentamente.'],
    ['Subducção', 'Mergulho de uma placa sob outra.'],
    ['Limite transformante', 'Limite em que as placas deslizam lateralmente.'],
    ['Intraplaca', 'Situado no interior de uma placa, longe dos limites.'],
  ],
  exemplos: `<p><strong>Lendo um mapa de terremotos:</strong> os epicentros desenham linhas estreitas — dorsais oceânicas, fossas do Pacífico, a borda andina — e quase faltam no interior dos continentes estáveis, como o Brasil. Esse padrão é o contorno das placas, e foi uma das evidências que levaram à teoria.</p>`,
  contexto: `<p><strong>No mundo:</strong> o "Anel de Fogo" do Pacífico concentra grande parte dos vulcões ativos e dos terremotos fortes do planeta ${tag('fato')}. <strong>No Brasil:</strong> as ilhas oceânicas de Fernando de Noronha e Trindade são de origem vulcânica antiga ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a tectônica de placas é uma síntese, e não uma hipótese isolada', tag: 'argumento',
    premissas: ['Fenômenos antes estudados separadamente — sismos, vulcões, montanhas, fósseis, magnetismo do fundo oceânico — mostram padrões geográficos coincidentes.', 'A teoria das placas explica todos esses padrões com o mesmo mecanismo.', 'Fez previsões depois confirmadas, como as faixas magnéticas e a idade do assoalho oceânico.'],
    conclusao: 'Logo, a tectônica de placas é uma síntese explicativa ampla, apoiada em evidências independentes.',
    nota: 'O poder de unificar e prever é critério importante de uma boa teoria científica.',
  },
  objecoes: [
    { objecao: 'Se não sabemos exatamente o que move as placas, a teoria é incompleta e duvidosa.', tag: 'debate',
      resposta: 'O movimento das placas é medido diretamente por GPS; que elas se movem não está em dúvida. O peso relativo das forças que as movem é questão aberta. Uma teoria pode estar bem estabelecida quanto ao que ocorre e ainda ter perguntas em aberto sobre como ocorre.' },
  ],
  aplicacao: `<p>Com um mapa mundial de terremotos e vulcões, identifique três limites de placas de tipos diferentes e explique, para cada um, os fenômenos geológicos associados.</p>`,
  fonte: {
    obra: 'J. Tuzo Wilson, "A New Class of Faults and their Bearing on Continental Drift" (1965); Serviço Geológico do Brasil, sismicidade brasileira', link: null,
    orientacao: `<p>Em Wilson, a proposta das falhas transformantes. Nos dados de sismicidade, compare a frequência de tremores no Brasil com a dos Andes.</p>`,
  },
  perguntas: [
    { p: 'Quais os três tipos de limite de placas?', r: 'Divergente, convergente e transformante.' },
    { p: 'Por que o Brasil tem pouca atividade sísmica?', r: 'Porque está no interior da placa Sul-Americana, longe dos limites.' },
    { p: 'Como se formam os Andes?', r: 'Pela subducção da placa de Nazca sob a Sul-Americana.' },
  ],
  exercicios: [
    mc('A dorsal meso-atlântica é um limite:', ['Convergente', 'Divergente', 'Transformante', 'Intraplaca'], 1, 'Crosta nova.'),
    mc('O Himalaia resulta de:', ['Expansão', 'Colisão continental', 'Falha transformante', 'Erosão'], 1, 'Índia e Ásia.'),
    mc('A falha de San Andreas é limite:', ['Divergente', 'Convergente', 'Transformante', 'Nenhum'], 2, 'Deslizamento lateral.'),
    mc('A camada rígida que forma as placas é a:', ['Astenosfera', 'Litosfera', 'Núcleo', 'Atmosfera'], 1, 'Crosta e manto superior.'),
    mc('Fernando de Noronha tem origem:', ['Glacial', 'Vulcânica', 'Coralina apenas', 'Sedimentar'], 1, 'Ilha oceânica.'),
    disc('Identifique três limites de placas de tipos diferentes e explique os fenômenos associados a cada um.', ['Três limites', 'Tipos corretos', 'Fenômenos', 'Mapa usado']),
  ],
  resumo: ['Fixismo e mobilismo.', 'Litosfera e astenosfera.', 'Limites divergente, convergente, transformante.', 'Síntese e previsões.', 'Brasil intraplaca; Andes por subducção.'],
  referencias: [
    { texto: 'J. Tuzo Wilson, "A New Class of Faults and their Bearing on Continental Drift" (1965).' },
    { texto: 'Naomi Oreskes (org.), Plate Tectonics: An Insider\'s History (2001).' },
    { texto: 'Frank Press e outros, Para entender a Terra (manual).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos três limites', 'Ler os textos indicados'],
  revisao: [['Divergente', 'Dorsal.'], ['Convergente', 'Subducção ou colisão.'], ['Transformante', 'San Andreas.']],
  avancado: {
    texto: `<h3>Pontos quentes</h3>
<p>Algumas cadeias de ilhas vulcânicas, como o Havaí, formam-se no interior das placas, sobre "pontos quentes" do manto: a placa se move sobre uma fonte de magma relativamente fixa, e as ilhas ficam mais velhas à medida que se afastam ${tag('fato')}. A origem dos pontos quentes, possivelmente plumas que sobem do manto profundo, é debatida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'W. Jason Morgan, "Convection Plumes in the Lower Mantle" (1971).' }],
    exercicios: [
      mc('O Havaí é exemplo de:', ['Limite divergente', 'Ponto quente', 'Falha transformante', 'Colisão'], 1, 'Intraplaca.'),
      mc('Numa cadeia de ponto quente, as ilhas mais antigas estão:', ['Sobre o ponto quente', 'Mais longe dele', 'No fundo do mar só', 'Em qualquer ordem'], 1, 'Movimento da placa.'),
      mc('A origem dos pontos quentes é:', ['Consensual', 'Debatida', 'Desconhecida por completo', 'Doutrina'], 1, 'Plumas.'),
      disc('Explique como a idade das ilhas do Havaí permite estimar a velocidade da placa do Pacífico.', ['Ponto quente', 'Idades', 'Cálculo', 'Limites'])],
  },
}),

aula({
  id: 'ct3-3', titulo: 'A idade da Terra e a leitura do Gênesis', duracao: '150 min',
  aprendera: ['Explicar o ensino da Igreja sobre os sentidos da Escritura', 'Conhecer a advertência de Santo Agostinho sobre ciência e fé', 'Conhecer pronunciamentos do Magistério sobre a idade do mundo', 'Distinguir dado científico, leitura literalista e doutrina'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A geologia afirma que a Terra tem cerca de 4,54 bilhões de anos. O Gênesis fala de seis dias. Há contradição?</p>
<h3>O que diz a ciência</h3>
<p>A idade da Terra é estabelecida por métodos radiométricos concordantes, pela sucessão estratigráfica e por meteoritos ${tag('fato')}. Essa conclusão não afirma nada sobre se o mundo foi criado; a ciência estuda processos naturais, não a razão de existir algo em vez de nada ${tag('argumento')}.</p>
<h3>O que diz a Igreja</h3>
<p>O Catecismo ensina que a Escritura apresenta a obra do Criador simbolicamente como uma sucessão de seis dias de trabalho divino (CIC 337) ${tag('doutrina')}. Distingue o sentido literal — o que o autor sagrado quis dizer — dos sentidos espirituais (CIC 115–117) e pede atenção aos gêneros literários (CIC 110) ${tag('doutrina')}. O Catecismo afirma que as descobertas sobre a idade e as dimensões do cosmos convidam a admirar o Criador (CIC 283) ${tag('doutrina')}.</p>
<h3>Agostinho</h3>
<p>Santo Agostinho, em <em>O Gênesis literal</em> (I, 19, 39), advertiu que é vergonhoso e danoso um cristão falar disparates sobre a natureza invocando a Escritura diante de quem conhece o assunto por razão e experiência ${tag('fato')}.</p>
<h3>Magistério e posições</h3>
<p>Pio XII, em discurso à Pontifícia Academia das Ciências (1951), referiu-se com apreço às estimativas científicas da idade do universo ${tag('fato')}. A Comissão Teológica Internacional (<em>Comunhão e serviço</em>, 2004, n. 63) descreve o universo surgido há cerca de 15 bilhões de anos, segundo a estimativa então corrente ${tag('fato')}. Há cristãos que defendem uma Terra jovem por leitura literal dos dias; essa posição não é ensino da Igreja Católica e não se sustenta diante da evidência geológica ${tag('debate')}.</p>`,
  vocabulario: [
    ['Sentido literal', 'O que o autor sagrado quis dizer, segundo o gênero literário.'],
    ['Literalismo', 'Leitura que toma cada expressão como descrição técnica.'],
    ['Gênero literário', 'Forma do texto (narrativa, poesia, lei) que orienta a interpretação.'],
    ['Criação', 'Ato pelo qual Deus dá o ser a tudo o que existe.'],
    ['Criacionismo de Terra jovem', 'Posição que afirma uma Terra de poucos milhares de anos.'],
  ],
  exemplos: `<p><strong>Duas perguntas diferentes:</strong> "Quanto tempo levou a formação dos Alpes?" é pergunta científica, respondida com rochas e datações. "Por que existe um mundo, e com que fim?" é pergunta filosófica e teológica. Confundir as duas leva tanto ao cientificismo, que nega a segunda, quanto ao literalismo, que usa o texto bíblico para responder à primeira.</p>`,
  contexto: `<p><strong>No mundo:</strong> o padre e cosmólogo Georges Lemaître propôs em 1927 a expansão do universo e, depois, a hipótese do "átomo primitivo" ${tag('fato')}. <strong>No Brasil:</strong> o debate sobre criação e evolução aparece em escolas e igrejas, muitas vezes sem a distinção entre os planos da ciência e da fé ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a idade da Terra não contradiz a doutrina da criação', tag: 'argumento',
    premissas: ['A doutrina da criação afirma que tudo depende de Deus para existir, não uma data ou duração.', 'A Igreja lê os seis dias como linguagem simbólica (CIC 337), atenta ao gênero literário.', 'A geologia mede a duração de processos naturais, sem pronunciar-se sobre a dependência do ser em relação a Deus.'],
    conclusao: 'Logo, a idade da Terra estabelecida pela geologia não contradiz a doutrina católica da criação.',
    nota: 'A conciliação não é acomodação: decorre de distinguir corretamente o que cada saber afirma.',
  },
  objecoes: [
    { objecao: 'Ler os dias como símbolo é ceder à ciência moderna.', tag: 'debate',
      resposta: 'A leitura não literalista dos dias é antiga: Agostinho, no século V, já propunha que a criação não se deu em dias de 24 horas e advertia contra usar a Escritura para contradizer o que se conhece da natureza. A atenção ao gênero literário é princípio de interpretação da Igreja, não concessão recente.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escreva um ensaio sobre o que a geologia afirma sobre a idade da Terra e o que não afirma sobre a criação, citando o Catecismo e Agostinho.</p>`,
  fonte: {
    obra: 'Santo Agostinho, O Gênesis literal, I, 19, 39; Catecismo da Igreja Católica, §§ 110, 115–117, 283 e 337; Comissão Teológica Internacional, Comunhão e serviço (2004), n. 62–70', link: null,
    orientacao: `<p>Em Agostinho, a advertência sobre cristãos que falam disparates sobre a natureza. No Catecismo, os sentidos da Escritura e os seis dias simbólicos. No documento da CTI, a relação entre cosmologia e criação.</p>`,
  },
  perguntas: [
    { p: 'Como o Catecismo apresenta os seis dias?', r: 'Como apresentação simbólica da obra do Criador (CIC 337).' },
    { p: 'O que adverte Agostinho em O Gênesis literal I, 19, 39?', r: 'Que é danoso um cristão falar disparates sobre a natureza invocando a Escritura.' },
    { p: 'O criacionismo de Terra jovem é ensino da Igreja Católica?', r: 'Não.' },
  ],
  exercicios: [
    mc('Os seis dias como apresentação simbólica estão no CIC:', ['115', '283', '337', '1883'], 2, 'Catecismo.'),
    mc('A advertência sobre falar disparates da natureza é de:', ['Tomás', 'Agostinho', 'Jerônimo', 'Lutero'], 1, 'O Gênesis literal.'),
    mc('A expansão do universo foi proposta em 1927 pelo padre:', ['Lemaître', 'Mendel', 'Steno', 'Secchi'], 0, 'Átomo primitivo.'),
    mc('"Por que existe algo?" é pergunta:', ['Geológica', 'Filosófica e teológica', 'Química', 'Estatística'], 1, 'Planos.'),
    mc('A geologia afirma sobre a criação:', ['Que não houve', 'Que houve em seis dias', 'Nada; estuda processos naturais', 'Que é provada'], 2, 'Limites do método.'),
    disc('Escreva o ensaio sobre o que a geologia afirma sobre a idade da Terra e o que não afirma sobre a criação.', ['Dado científico', 'Limites do método', 'Doutrina citada', 'Agostinho']),
  ],
  resumo: ['Idade da Terra: métodos concordantes.', 'CIC 337: seis dias simbólicos.', 'CIC 110, 115–117: gêneros e sentidos.', 'Agostinho: não falar disparates.', 'Terra jovem não é ensino católico.'],
  referencias: [
    { texto: 'Santo Agostinho, O Gênesis literal.' },
    { texto: 'Catecismo da Igreja Católica (1992).', livro: 'cic' },
    { texto: 'Comissão Teológica Internacional, Comunhão e serviço (2004).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler os textos indicados'],
  revisao: [['CIC 337', 'Seis dias simbólicos.'], ['Agostinho', 'Não falar disparates.'], ['Lemaître', '1927.']],
  avancado: {
    texto: `<h3>Geologia do dilúvio</h3>
<p>No século XX, autores criacionistas propuseram explicar a maior parte das rochas sedimentares por um dilúvio universal recente ${tag('fato')}. A proposta não explica, entre outros dados, a sucessão ordenada dos fósseis, as idades radiométricas concordantes, os solos fósseis e as marcas de deserto e de geleiras intercaladas nas sequências ${tag('argumento')}. A exegese católica lê a narrativa do dilúvio por seu sentido teológico ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Pontifícia Comissão Bíblica, A interpretação da Bíblia na Igreja (1993).' }],
    exercicios: [
      mc('A geologia do dilúvio atribui as rochas sedimentares a:', ['Milhões de anos', 'Um dilúvio recente', 'Vulcões', 'Meteoritos'], 1, 'Proposta criacionista.'),
      mc('Um dado que a proposta não explica é:', ['A existência de água', 'A sucessão ordenada dos fósseis', 'A chuva', 'Os rios'], 1, 'Estratigrafia.'),
      mc('A Interpretação da Bíblia na Igreja é de:', ['1893', '1943', '1993', '2013'], 2, 'Pontifícia Comissão Bíblica.'),
      disc('Explique por que a geologia do dilúvio não se sustenta diante da evidência e como a exegese católica lê a narrativa.', ['Proposta', 'Evidências contrárias', 'Exegese', 'Distinção dos planos'])],
  },
}),

aula({
  id: 'ct3-4', titulo: 'Recursos minerais, mineração e seus limites no Brasil', duracao: '150 min',
  aprendera: ['Distinguir recurso e reserva mineral', 'Conhecer as grandes províncias minerais brasileiras', 'Avaliar os impactos da mineração e do garimpo ilegal', 'Debater o uso dos recursos à luz do bem comum'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Celulares, carros, casas e turbinas eólicas dependem de minerais. Quanto há, onde está e a que custo se extrai?</p>
<h3>Recurso e reserva</h3>
<p>Recurso mineral é a concentração conhecida ou estimada de um mineral; reserva é a parte que pode ser extraída com lucro com a tecnologia e os preços atuais ${tag('fato')}. Por isso as reservas mudam com preços e técnicas, mesmo sem novas descobertas ${tag('fato')}.</p>
<h3>Províncias brasileiras</h3>
<p>O Quadrilátero Ferrífero, em Minas Gerais, explorado desde o ciclo do ouro, e a Província Mineral de Carajás, no Pará, descoberta em 1967, estão entre as grandes regiões de ferro do mundo ${tag('fato')}. O Brasil é o maior produtor mundial de nióbio, com destaque para Araxá (MG) ${tag('fato')}. O petróleo do pré-sal, em rochas abaixo de espessa camada de sal nas bacias de Santos e Campos, foi descoberto em 2006 ${tag('fato')}.</p>
<h3>Impactos</h3>
<p>A mineração gera renda e empregos e também desmatamento, rejeitos, riscos de barragens e conflitos territoriais ${tag('fato')}. O garimpo ilegal de ouro em terras indígenas, como a Terra Indígena Yanomami, contamina rios com mercúrio e provocou crise sanitária, que levou à declaração de emergência em saúde pública em 2023 ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>A <em>Laudato si'</em> aponta a "dívida ecológica" entre o Norte e o Sul, ligada à exportação de matérias-primas com custos ambientais locais (n. 51), e pede que se respeitem as comunidades indígenas, que não são uma simples minoria, mas interlocutores principais (n. 146) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Recurso mineral', 'Concentração conhecida ou estimada de um mineral.'],
    ['Reserva', 'Parte do recurso economicamente extraível hoje.'],
    ['Minério', 'Rocha da qual se extrai um mineral com proveito econômico.'],
    ['Pré-sal', 'Rochas com petróleo situadas abaixo de uma camada de sal.'],
    ['Garimpo', 'Extração mineral, em geral de ouro ou gemas, em pequena escala.'],
  ],
  exemplos: `<p><strong>Reserva que muda sem descoberta:</strong> uma jazida tem 100 milhões de toneladas de minério com teor baixo. Com o preço do metal baixo, só 20 milhões são reserva; se o preço dobra ou uma técnica nova reduz o custo, a reserva pode passar a 60 milhões. A rocha é a mesma; mudou a economia.</p>`,
  contexto: `<p><strong>No mundo:</strong> a demanda por minerais da transição energética, como lítio, cobre e terras raras, cresce com baterias e energias renováveis ${tag('fato')}. <strong>No Brasil:</strong> o Vale do Jequitinhonha, em Minas Gerais, tem depósitos de lítio em pegmatitos explorados recentemente ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que recursos minerais são finitos mesmo quando as reservas crescem', tag: 'argumento',
    premissas: ['Depósitos minerais formam-se em escalas de milhões de anos.', 'A extração ocorre em escala de décadas.', 'O crescimento das reservas por preço e técnica tem limite físico na quantidade de mineral existente e no custo energético de extrair teores cada vez menores.'],
    conclusao: 'Logo, recursos minerais são finitos na escala humana, ainda que as reservas oscilem.',
    nota: 'Reciclagem, substituição e uso eficiente prolongam a disponibilidade.',
  },
  objecoes: [
    { objecao: 'O Brasil deve explorar todos os seus minérios ao máximo para se desenvolver.', tag: 'debate',
      resposta: 'A mineração pode financiar desenvolvimento, mas os benefícios dependem de como a renda é usada e de quem arca com os custos. Experiências de cidades mineradoras mostram que, sem planejamento, sobram passivos quando a mina se esgota. O bem comum exige incluir as comunidades afetadas, os custos ambientais e as gerações futuras na decisão.' },
  ],
  aplicacao: `<p>Escolha uma região mineradora brasileira e analise: mineral, geologia do depósito, empregos e renda, impactos ambientais e sociais, e o que acontecerá quando a mina se esgotar.</p>`,
  fonte: {
    obra: 'Agência Nacional de Mineração, Anuário Mineral Brasileiro; Papa Francisco, Laudato si\' (2015), n. 51 e 146', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' },
    orientacao: `<p>No Anuário Mineral, localize a produção do mineral escolhido. Na Laudato si', a dívida ecológica e o lugar das comunidades indígenas nas decisões.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre recurso e reserva?', r: 'A reserva é a parte do recurso extraível com lucro hoje.' },
    { p: 'De que mineral o Brasil é o maior produtor mundial?', r: 'Do nióbio.' },
    { p: 'Quando foi descoberto o pré-sal?', r: 'Em 2006.' },
  ],
  exercicios: [
    mc('Carajás foi descoberta em:', ['1867', '1967', '2006', '1700'], 1, 'Pará.'),
    mc('O nióbio brasileiro destaca-se em:', ['Araxá', 'Carajás', 'Ouro Preto', 'Santos'], 0, 'Minas Gerais.'),
    mc('Se o preço do metal sobe, a reserva tende a:', ['Diminuir', 'Aumentar', 'Desaparecer', 'Não mudar nunca'], 1, 'Economia.'),
    mc('O garimpo ilegal de ouro contamina rios principalmente com:', ['Sal', 'Mercúrio', 'Ferro', 'Calcário'], 1, 'Amalgamação.'),
    mc('A "dívida ecológica" está na Laudato si\', n.:', ['23', '51', '139', '186'], 1, 'Norte e Sul.'),
    disc('Analise uma região mineradora brasileira: mineral, geologia, renda, impactos e o pós-mina.', ['Mineral e geologia', 'Renda e empregos', 'Impactos', 'Pós-mina']),
  ],
  resumo: ['Recurso e reserva.', 'Quadrilátero Ferrífero, Carajás (1967), nióbio em Araxá.', 'Pré-sal (2006).', 'Garimpo ilegal e mercúrio; Yanomami (2023).', 'LS 51 e 146.'],
  referencias: [
    { texto: 'Agência Nacional de Mineração, Anuário Mineral Brasileiro.' },
    { texto: 'Serviço Geológico do Brasil, recursos minerais.', link: { url: 'https://www.sgb.gov.br', rotulo: 'SGB' } },
    { texto: 'Papa Francisco, Laudato si\' (2015).', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da região mineradora', 'Consultar o Anuário Mineral'],
  revisao: [['Reserva', 'Extraível hoje.'], ['Nióbio', 'Brasil, maior produtor.'], ['LS 146', 'Indígenas.']],
  avancado: {
    texto: `<h3>Formações ferríferas bandadas</h3>
<p>Grande parte do minério de ferro do mundo, inclusive do Quadrilátero Ferrífero e de Carajás, está em formações ferríferas bandadas, depositadas sobretudo entre 2,5 e 1,8 bilhão de anos atrás ${tag('fato')}. Sua formação está ligada ao aumento do oxigênio nos oceanos, produzido por organismos fotossintetizantes, que fez o ferro dissolvido precipitar ${tag('interpretacao')}. O minério que usamos registra uma transformação da atmosfera da Terra ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Literatura sobre o Grande Evento de Oxidação.' }],
    exercicios: [
      mc('As formações ferríferas bandadas depositaram-se sobretudo há:', ['2,5 a 1,8 bilhão de anos', '66 milhões de anos', '10 mil anos', '4,6 bilhões de anos'], 0, 'Pré-cambriano.'),
      mc('Sua formação está ligada ao aumento de:', ['Nitrogênio', 'Oxigênio', 'Metano', 'Hélio'], 1, 'Fotossíntese.'),
      mc('Os itabiritos do Quadrilátero Ferrífero são:', ['Rochas vulcânicas recentes', 'Formações ferríferas metamorfizadas', 'Arenitos', 'Basaltos'], 1, 'Minas Gerais.'),
      disc('Explique por que o minério de ferro brasileiro registra uma mudança na atmosfera da Terra.', ['Formação', 'Oxigênio', 'Datação', 'Grau de certeza'])],
  },
}),

avaliacao('ct3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as controvérsias e sínteses das ciências da Terra e os debates do módulo, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro comparativo das controvérsias e o ensaio sobre a idade da Terra.</li><li>Revise a distinção entre recurso e reserva.</li></ul>`,
[
  disc('Mostre como a tectônica de placas integra evidências de sismos, vulcões, fósseis e magnetismo do fundo oceânico, e explique o que ainda é debatido.', ['Evidências', 'Integração', 'Previsões confirmadas', 'Questões abertas']),
  disc('Responda a quem afirma que a geologia refuta a fé cristã, distinguindo dado científico, filosofia e doutrina, com o Catecismo e Agostinho.', ['Dado científico', 'Limites do método', 'Doutrina', 'Agostinho']),
]),
];
