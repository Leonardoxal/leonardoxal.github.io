// Teologia V — Escatologia e liturgia (fase teológica, degrau 1).
// Morte, juízo e ressurreição; céu, purgatório e inferno; a liturgia; o ano litúrgico e o domingo.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'tg5-1', titulo: 'Morte, juízo e ressurreição da carne', duracao: '150 min',
  aprendera: ['Explicar o sentido cristão da morte', 'Distinguir juízo particular e juízo final', 'Explicar a ressurreição da carne', 'Ler 1 Coríntios 15 com atenção ao argumento de Paulo'],
  prereq: ['Teologia IV (módulo T4)'],
  explicacao: `
<h3>O problema</h3>
<p>O que acontece depois da morte, e por que os cristãos esperam a ressurreição do corpo e não só a imortalidade da alma?</p>
<h3>A morte</h3>
<p>A morte é o fim da peregrinação terrena; é consequência do pecado, mas foi transformada por Cristo (CIC 1006–1014) ${tag('doutrina')}. Não há reencarnação: "os homens morrem uma só vez" (Hb 9,27; CIC 1013) ${tag('doutrina')}.</p>
<h3>Juízo particular</h3>
<p>Cada pessoa recebe na alma imortal a retribuição eterna logo após a morte, num juízo particular (CIC 1021–1022) ${tag('doutrina')}. A constituição Benedictus Deus, de Bento XII (1336), ensinou que as almas dos justos, purificadas, veem a essência divina antes da ressurreição dos corpos ${tag('fato')}.</p>
<h3>Ressurreição da carne</h3>
<p>No último dia, os mortos ressuscitarão com seus próprios corpos, transformados (CIC 997–1001) ${tag('doutrina')}. Paulo argumenta: se Cristo não ressuscitou, vazia é a nossa fé (1Cor 15,14) ${tag('fato')}. A fé cristã não espera a libertação da alma em relação ao corpo, como em certo platonismo, mas a salvação da pessoa inteira ${tag('interpretacao')}.</p>
<h3>Juízo final</h3>
<p>No juízo final será revelada a verdade da relação de cada um com Deus e o sentido de toda a história (CIC 1038–1041) ${tag('doutrina')}. O critério é o amor, como em Mt 25,31–46 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Escatologia', 'Estudo das realidades últimas.'],
    ['Juízo particular', 'Retribuição de cada alma logo após a morte.'],
    ['Juízo final', 'Manifestação definitiva da verdade de todos no fim da história.'],
    ['Ressurreição da carne', 'Reunião da alma com o próprio corpo, glorificado, no último dia.'],
    ['Parusia', 'A vinda gloriosa de Cristo no fim dos tempos.'],
  ],
  exemplos: `<p><strong>Por que os cristãos sepultam os mortos:</strong> a prática de enterrar e cuidar dos túmulos, desde as catacumbas, exprime a esperança na ressurreição do corpo. A Igreja permite a cremação, desde que não seja escolhida por negação da fé, e pede que as cinzas sejam guardadas em lugar sagrado (instrução Ad resurgendum cum Christo, 2016).</p>`,
  contexto: `<p><strong>No mundo:</strong> a encíclica Spe salvi (2007), de Bento XVI, é dedicada à esperança cristã e trata do juízo como lugar de aprendizado da esperança ${tag('fato')}. <strong>No Brasil:</strong> o Dia de Finados, 2 de novembro, é feriado nacional e reúne multidões nos cemitérios ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a ressurreição do corpo convém à natureza humana', tag: 'argumento',
    premissas: ['O ser humano é unidade de corpo e alma.', 'A alma separada é um estado incompleto da pessoa.', 'A salvação plena é salvação da pessoa inteira.'],
    conclusao: 'Logo, a ressurreição do corpo completa a salvação; não é acréscimo arbitrário.',
    nota: 'Santo Tomás, Suma contra os gentios IV, 79; CIC 997.',
  },
  objecoes: [
    { objecao: 'A ressurreição dos mortos é impossível, porque os corpos se decompõem.', tag: 'debate',
      resposta: 'Paulo responde com a imagem da semente que morre e dá origem a uma planta nova (1Cor 15,35–44): o corpo ressuscitado é o mesmo sujeito, transformado. A fé afirma o fato e reconhece que o "como" excede a nossa imaginação (CIC 1000).' },
  ],
  aplicacao: `<p>Leia 1 Coríntios 15 inteiro e reconstrua o argumento de Paulo em premissas e conclusão, com os versículos.</p>`,
  fonte: {
    obra: 'Primeira Carta aos Coríntios, capítulo 15', link: null,
    orientacao: `<p>Observe a estrutura: o fato da ressurreição de Cristo (vv. 1–11), as consequências de negá-la (vv. 12–19) e o modo da ressurreição (vv. 35–58).</p>`,
  },
  perguntas: [
    { p: 'O que é o juízo particular?', r: 'A retribuição de cada alma logo após a morte.' },
    { p: 'A fé católica admite reencarnação?', r: 'Não; os homens morrem uma só vez.' },
    { p: 'Qual o critério do juízo em Mt 25?', r: 'O amor ao próximo, em especial aos necessitados.' },
  ],
  exercicios: [
    mc('A Benedictus Deus é de:', ['Bento XII (1336)', 'Bento XVI', 'Bento XV', 'Bento XIV'], 0, 'Visão beatífica.'),
    mc('"Se Cristo não ressuscitou, vazia é a nossa fé" está em:', ['1Cor 15', 'Rm 8', 'Jo 11', 'Ap 21'], 0, 'Paulo.'),
    mc('A Spe salvi trata da:', ['Esperança', 'Caridade', 'Economia', 'Liturgia'], 0, '2007.'),
    mc('Hb 9,27 exclui a:', ['Reencarnação', 'Ressurreição', 'Oração', 'Graça'], 0, 'Uma só vez.'),
    mc('A instrução sobre cremação de 2016 é:', ['Ad resurgendum cum Christo', 'Dei Verbum', 'Spe salvi', 'Mitis Iudex'], 0, 'Sepultura.'),
    disc('Reconstrua o argumento de 1Cor 15.', ['Premissas', 'Versículos', 'Conclusão', 'Clareza']),
  ],
  resumo: ['Morte transformada por Cristo.', 'Sem reencarnação.', 'Juízo particular.', 'Ressurreição da carne.', 'Juízo final: o amor.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 988–1060.', livro: 'cic' },
    { texto: 'Santo Agostinho, A Cidade de Deus, livros XX–XXII.', livro: 'agostinho-cidade' },
    { texto: 'Bento XVI, Spe salvi (2007).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a reconstrução', 'Ler a fonte indicada'],
  revisao: [['Juízo particular', 'Após a morte.'], ['1Cor 15', 'Ressurreição.'], ['Mt 25', 'Critério do amor.']],
  avancado: {
    texto: `<h3>A Cidade de Deus e o fim da história</h3>
<p>Nos últimos livros de A Cidade de Deus, Agostinho trata do juízo, do destino das duas cidades e da ressurreição dos corpos ${tag('fato')}. O livro XXII termina com a visão do descanso eterno, o "sábado sem ocaso" ${tag('fato')}. A obra deu forma a uma teologia da história em que o sentido do tempo está no seu fim ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Agostinho, A Cidade de Deus, livro XXII.', livro: 'agostinho-cidade' }],
    exercicios: [
      mc('A Cidade de Deus termina com o:', ['Descanso eterno', 'Saque de Roma', 'Batismo de Agostinho', 'Concílio de Niceia'], 0, 'Livro XXII.'),
      mc('As duas cidades são definidas pelos dois:', ['Amores', 'Impérios', 'Templos', 'Rios'], 0, 'Amor de Deus e amor de si.'),
      mc('A obra propõe uma teologia da:', ['História', 'Natureza', 'Linguagem', 'Música'], 0, 'Sentido do tempo.'),
      disc('Explique como Agostinho relaciona a história e o seu fim.', ['Duas cidades', 'Juízo', 'Fim', 'Juízo crítico'])],
  },
}),

aula({
  id: 'tg5-2', titulo: 'Céu, purgatório e inferno', duracao: '150 min',
  aprendera: ['Explicar o céu como comunhão com Deus', 'Explicar o purgatório e sua base na Tradição', 'Explicar o inferno como autoexclusão', 'Evitar caricaturas das realidades últimas'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Céu, purgatório e inferno são lugares, estados ou metáforas?</p>
<h3>Céu</h3>
<p>O céu é a vida perfeita com a Santíssima Trindade, a comunhão de vida e de amor com ela, com a Virgem Maria, os anjos e os santos: o fim último e a realização das aspirações mais profundas do homem (CIC 1024) ${tag('doutrina')}. A visão de Deus "face a face" chama-se visão beatífica (CIC 1028) ${tag('doutrina')}.</p>
<h3>Purgatório</h3>
<p>Os que morrem na graça de Deus, mas imperfeitamente purificados, passam por uma purificação para entrar na alegria do céu (CIC 1030) ${tag('doutrina')}. A doutrina foi formulada sobretudo nos concílios de Florença (1439) e Trento (1563) ${tag('fato')}. A prática de rezar pelos mortos já aparece em 2Mc 12,46 ${tag('fato')}.</p>
<h3>Inferno</h3>
<p>Morrer em pecado mortal sem arrependimento significa ficar separado de Deus para sempre, por livre escolha; esse estado de autoexclusão definitiva chama-se inferno (CIC 1033) ${tag('doutrina')}. Deus não predestina ninguém ao inferno (CIC 1037) ${tag('doutrina')}. A Igreja nunca declarou que alguém determinado esteja no inferno ${tag('fato')}.</p>
<h3>Linguagem</h3>
<p>As imagens bíblicas (banquete, fogo, trevas) apontam para realidades que excedem a imaginação; o Catecismo fala de "estado" e de comunhão ou exclusão ${tag('interpretacao')}. João Paulo II, em catequeses de 1999, insistiu nesse caráter de estado, sem negar a realidade ${tag('fato')}.</p>`,
  vocabulario: [
    ['Visão beatífica', 'Visão de Deus face a face no céu.'],
    ['Purgatório', 'Purificação final dos eleitos após a morte.'],
    ['Inferno', 'Estado de autoexclusão definitiva da comunhão com Deus.'],
    ['Sufrágio', 'Oração ou boa obra oferecida pelos mortos.'],
    ['Comunhão dos santos', 'União dos fiéis na terra, no purgatório e no céu.'],
  ],
  exemplos: `<p><strong>Missa de sétimo dia:</strong> o costume brasileiro de celebrar a Missa pelo falecido no sétimo dia e no aniversário de morte supõe a doutrina da comunhão dos santos e do purgatório: os vivos podem ajudar os mortos com suas orações (CIC 1032).</p>`,
  contexto: `<p><strong>No mundo:</strong> a Divina Comédia de Dante (início do século XIV) deu forma imaginativa ao inferno, ao purgatório e ao paraíso, e marcou a cultura ocidental ${tag('fato')}. <strong>No Brasil:</strong> o Auto da Compadecida, de Ariano Suassuna (1955), encena um juízo particular com humor e teologia popular ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o inferno é compatível com a bondade de Deus', tag: 'argumento',
    premissas: ['Deus quer que todos se salvem e respeita a liberdade que deu.', 'O amor não pode ser imposto a quem o recusa definitivamente.', 'Recusar definitivamente a Deus é separar-se do bem que ele é.'],
    conclusao: 'Logo, o inferno é consequência da liberdade respeitada, não de crueldade divina.',
    nota: 'CIC 1033–1037; C. S. Lewis desenvolve a ideia em O grande abismo.',
  },
  objecoes: [
    { objecao: 'Um Deus misericordioso salvaria necessariamente todos.', tag: 'debate',
      resposta: 'A Igreja rejeitou a apocatástase (salvação necessária de todos), atribuída a Orígenes, no século VI. Ela reza pela salvação de todos e não afirma que alguém determinado esteja condenado. A possibilidade real da condenação decorre da seriedade da liberdade. Teólogos como Balthasar defenderam a esperança de que todos se salvem, e a posição é discutida.' },
  ],
  aplicacao: `<p>Escolha um canto da Divina Comédia (por exemplo, Inferno III ou Purgatório I) e compare a imagem de Dante com o que o Catecismo ensina.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 1020–1050', link: null,
    orientacao: `<p>Observe a linguagem de "estado" e as citações bíblicas em cada número.</p>`,
  },
  perguntas: [
    { p: 'O que é o céu segundo o CIC 1024?', r: 'A comunhão de vida e de amor com a Trindade, fim último do homem.' },
    { p: 'Onde aparece a oração pelos mortos no Antigo Testamento?', r: 'Em 2Mc 12,46.' },
    { p: 'Deus predestina alguém ao inferno?', r: 'Não.' },
  ],
  exercicios: [
    mc('O inferno é definido como:', ['Autoexclusão definitiva', 'Castigo sem liberdade', 'Purificação', 'Lugar temporário'], 0, 'CIC 1033.'),
    mc('O purgatório foi formulado sobretudo em:', ['Florença e Trento', 'Niceia', 'Vaticano I', 'Éfeso'], 0, 'Concílios.'),
    mc('A apocatástase afirma:', ['Salvação necessária de todos', 'Inferno eterno', 'Purgatório', 'Reencarnação'], 0, 'Rejeitada.'),
    mc('O Auto da Compadecida é de:', ['Ariano Suassuna', 'Jorge Amado', 'Guimarães Rosa', 'Nelson Rodrigues'], 0, '1955.'),
    mc('A Igreja já declarou alguém determinado no inferno?', ['Não', 'Sim, Judas', 'Sim, vários', 'Só hereges'], 0, 'Fato.'),
    disc('Compare um canto de Dante com o Catecismo.', ['Texto de Dante', 'Catecismo', 'Semelhanças e diferenças', 'Juízo']),
  ],
  resumo: ['Céu: comunhão com a Trindade.', 'Purgatório: purificação.', 'Inferno: autoexclusão.', 'Comunhão dos santos.', 'Imagens apontam para estados.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1020–1060.', livro: 'cic' },
    { texto: 'Dante Alighieri, A Divina Comédia.' },
    { texto: 'Compêndio do Catecismo da Igreja Católica.', livro: 'compendio-cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação', 'Ler a fonte indicada'],
  revisao: [['Céu', 'Visão beatífica.'], ['Purgatório', 'Purificação.'], ['Inferno', 'Autoexclusão.']],
  avancado: {
    texto: `<h3>Os novíssimos na pregação</h3>
<p>A tradição chamava morte, juízo, inferno e paraíso de "novíssimos" ${tag('fato')}. Bento XVI, na Spe salvi, observou que a pregação sobre eles se tornou rara e propôs recuperá-la como fonte de esperança, não de medo ${tag('fato')}. O equilíbrio entre seriedade e esperança é tarefa permanente da pregação ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 1036 e 1058.', livro: 'cic' }],
    exercicios: [
      mc('Os novíssimos são:', ['Morte, juízo, inferno e paraíso', 'Os sete sacramentos', 'As três virtudes', 'Os quatro evangelhos'], 0, 'Tradição.'),
      mc('A Spe salvi propõe recuperar a pregação como fonte de:', ['Esperança', 'Medo', 'Poder', 'Riqueza'], 0, 'Bento XVI.'),
      mc('A tarefa da pregação é unir:', ['Seriedade e esperança', 'Medo e silêncio', 'Política e economia', 'Nada'], 0, 'Equilíbrio.'),
      disc('Escreva um breve sermão sobre um dos novíssimos que una seriedade e esperança.', ['Fidelidade', 'Equilíbrio', 'Fontes', 'Clareza'])],
  },
}),

aula({
  id: 'tg5-3', titulo: 'A liturgia: obra de Cristo e da Igreja', duracao: '150 min',
  aprendera: ['Definir liturgia', 'Explicar a liturgia como fonte e ápice', 'Conhecer a Sacrosanctum Concilium', 'Distinguir liturgia e devoções'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A Missa é uma reunião organizada pela comunidade ou uma ação de Cristo?</p>
<h3>O que é liturgia</h3>
<p>Liturgia significa originalmente "obra pública", "serviço da parte do povo"; na tradição cristã, é a participação do povo de Deus na obra de Deus (CIC 1069) ${tag('doutrina')}. É obra de Cristo todo, cabeça e corpo, e exercício do seu sacerdócio (CIC 1070, 1136) ${tag('doutrina')}.</p>
<h3>Sacrosanctum Concilium</h3>
<p>A constituição sobre a sagrada liturgia foi o primeiro documento aprovado pelo Concílio Vaticano II, em 1963 ${tag('fato')}. Ela chama a liturgia de "cume para o qual se dirige a ação da Igreja e fonte de onde promana toda a sua força" (SC 10) ${tag('doutrina')} e pede a participação "plena, consciente e ativa" dos fiéis (SC 14) ${tag('doutrina')}. Também afirma que o canto gregoriano deve ocupar o primeiro lugar, em igualdade de condições, na liturgia romana (SC 116) ${tag('fato')}.</p>
<h3>Liturgia e devoções</h3>
<p>As devoções populares (terço, novenas, procissões) são recomendadas, mas devem harmonizar-se com a liturgia, derivar dela e conduzir a ela (SC 13) ${tag('doutrina')}.</p>
<h3>Ritos</h3>
<p>A Igreja Católica reúne várias tradições litúrgicas: romana, bizantina, ambrosiana, maronita e outras, todas de igual dignidade (CIC 1203) ${tag('fato')}. O Missal Romano reformado após o Concílio foi promulgado por Paulo VI em 1969 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Liturgia', 'Culto público da Igreja, obra de Cristo e do seu corpo.'],
    ['Participação ativa', 'Participação plena, consciente e ativa dos fiéis (SC 14).'],
    ['Rito', 'Tradição litúrgica própria de uma Igreja.'],
    ['Devoção popular', 'Prática piedosa não litúrgica.'],
    ['Canto gregoriano', 'Canto próprio da liturgia romana (SC 116).'],
  ],
  exemplos: `<p><strong>Participação ativa não é só fazer algo:</strong> ouvir com atenção as leituras, responder, cantar e guardar o silêncio sagrado também são formas de participação (SC 30). A participação é antes de tudo interior, unindo-se ao que Cristo faz.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Sacrosanctum Concilium foi aprovada em 4 de dezembro de 1963 ${tag('fato')}. <strong>No Brasil:</strong> as traduções litúrgicas em português são preparadas pela CNBB e aprovadas pela Santa Sé; uma nova tradução do Missal Romano entrou em uso em 2023 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a liturgia é fonte e ápice', tag: 'argumento',
    premissas: ['Toda a vida da Igreja vem da graça de Cristo.', 'Na liturgia, especialmente na Eucaristia, Cristo age e comunica sua graça.', 'Toda a ação da Igreja visa à glorificação de Deus e à santificação dos homens, que se realizam plenamente na liturgia.'],
    conclusao: 'Logo, a liturgia é ao mesmo tempo fonte e ápice da vida da Igreja.',
    nota: 'SC 10; LG 11.',
  },
  objecoes: [
    { objecao: 'A liturgia é apenas uma questão de gosto: cada comunidade deve celebrar como achar melhor.', tag: 'debate',
      resposta: 'A SC 22 estabelece que ninguém, mesmo sacerdote, pode por iniciativa própria acrescentar, tirar ou mudar algo na liturgia. Isso protege o direito dos fiéis a uma celebração que é da Igreja, não de um grupo. A adaptação cultural existe, mas é regulada.' },
  ],
  aplicacao: `<p>Leia SC 1–20. Depois participe atentamente de uma Missa e anote como os princípios da constituição aparecem (ou não) na celebração.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Sacrosanctum Concilium, nn. 1–20', link: null,
    orientacao: `<p>Observe a relação entre a obra da salvação, o mistério pascal e a liturgia (nn. 5–7).</p>`,
  },
  perguntas: [
    { p: 'O que significa liturgia?', r: 'Obra pública; participação do povo de Deus na obra de Deus.' },
    { p: 'O que diz SC 10?', r: 'Que a liturgia é cume e fonte da ação da Igreja.' },
    { p: 'Qual a relação entre liturgia e devoções?', r: 'As devoções devem harmonizar-se com a liturgia e conduzir a ela.' },
  ],
  exercicios: [
    mc('A Sacrosanctum Concilium foi aprovada em:', ['1963', '1965', '1870', '1545'], 0, 'Primeiro documento.'),
    mc('A participação pedida pela SC 14 é:', ['Plena, consciente e ativa', 'Só exterior', 'Opcional', 'Só do clero'], 0, 'SC 14.'),
    mc('O canto que deve ocupar o primeiro lugar:', ['Gregoriano', 'Popular', 'Gospel', 'Instrumental'], 0, 'SC 116.'),
    mc('O Missal reformado foi promulgado por:', ['Paulo VI', 'Pio V', 'João XXIII', 'Pio XII'], 0, '1969.'),
    mc('Os ritos da Igreja têm:', ['Igual dignidade', 'Hierarquia de valor', 'Validade duvidosa', 'Uso proibido'], 0, 'CIC 1203.'),
    disc('Relate a observação da Missa à luz da SC 1–20.', ['Princípios', 'Observação', 'Juízo', 'Respeito']),
  ],
  resumo: ['Liturgia: obra de Cristo e da Igreja.', 'Fonte e ápice (SC 10).', 'Participação plena, consciente e ativa.', 'Devoções conduzem à liturgia.', 'Vários ritos.'],
  referencias: [
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963).' },
    { texto: 'Catecismo da Igreja Católica, §§ 1066–1209.', livro: 'cic' },
    { texto: 'Santo Tomás de Aquino, Ofício de Corpus Christi.', livro: 'tomas-liturgia' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o relato', 'Ler a fonte indicada'],
  revisao: [['SC 10', 'Fonte e ápice.'], ['SC 14', 'Participação.'], ['SC 116', 'Gregoriano.']],
  avancado: {
    texto: `<h3>O movimento litúrgico</h3>
<p>Antes do Concílio, o movimento litúrgico, com nomes como Prosper Guéranger, Lambert Beauduin e Romano Guardini, buscou recuperar a centralidade da liturgia na vida cristã ${tag('fato')}. Guardini publicou O espírito da liturgia em 1918 ${tag('fato')}. Joseph Ratzinger retomou o título num livro de 2000 ${tag('fato')}. A interpretação da reforma pós-conciliar continua debatida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 1145–1162.', livro: 'cic' }],
    exercicios: [
      mc('O espírito da liturgia (1918) é de:', ['Romano Guardini', 'Karl Rahner', 'Hans Küng', 'Jacques Maritain'], 0, 'Movimento litúrgico.'),
      mc('Ratzinger retomou o título em:', ['2000', '1962', '1985', '2013'], 0, 'Livro.'),
      mc('Prosper Guéranger foi abade de:', ['Solesmes', 'Cluny', 'Monte Cassino', 'Maria Laach'], 0, 'Beneditino.'),
      disc('Exponha os objetivos do movimento litúrgico e um ponto de debate sobre a reforma.', ['Movimento', 'Autores', 'Debate', 'Juízo'])],
  },
}),

aula({
  id: 'tg5-4', titulo: 'O ano litúrgico, o domingo e a arte sacra', duracao: '150 min',
  aprendera: ['Descrever os tempos do ano litúrgico', 'Explicar o sentido do domingo', 'Explicar a Liturgia das Horas', 'Relacionar arte sacra e liturgia'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que a Igreja organiza o tempo em ciclos e festas?</p>
<h3>O ano litúrgico</h3>
<p>No ciclo de um ano, a Igreja celebra todo o mistério de Cristo, da Encarnação à espera de sua vinda (CIC 1168–1171) ${tag('doutrina')}. Os tempos são Advento, Natal, Quaresma, Tríduo Pascal, Tempo Pascal e Tempo Comum ${tag('fato')}. A Páscoa é a "festa das festas" (CIC 1169) ${tag('doutrina')}. O Concílio de Niceia (325) tratou da data comum da Páscoa ${tag('fato')}.</p>
<h3>O domingo</h3>
<p>O domingo, dia da Ressurreição, é o dia do Senhor e o principal dia de festa (CIC 2174–2177) ${tag('doutrina')}. A participação na Missa dominical é preceito (CIC 2180–2181) ${tag('doutrina')}. João Paulo II escreveu a carta apostólica Dies Domini (1998) sobre o domingo ${tag('fato')}.</p>
<h3>Liturgia das Horas</h3>
<p>A Liturgia das Horas santifica o curso do dia com a oração dos salmos e das leituras (CIC 1174–1178) ${tag('doutrina')}. As horas principais são as Laudes, de manhã, e as Vésperas, à tarde (SC 89) ${tag('fato')}.</p>
<h3>Arte sacra</h3>
<p>A arte sacra é verdadeira e bela quando corresponde à sua vocação de exprimir o mistério de Deus (CIC 2502) ${tag('doutrina')}. O II Concílio de Niceia (787) defendeu a veneração das imagens contra os iconoclastas ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ano litúrgico', 'Ciclo anual que celebra o mistério de Cristo.'],
    ['Tríduo Pascal', 'Da Missa da Ceia do Senhor às Vésperas do domingo de Páscoa.'],
    ['Dia do Senhor', 'O domingo, dia da Ressurreição.'],
    ['Laudes e Vésperas', 'Orações da manhã e da tarde da Liturgia das Horas.'],
    ['Iconoclasmo', 'Movimento que rejeitava as imagens sagradas.'],
  ],
  exemplos: `<p><strong>As cores litúrgicas:</strong> roxo no Advento e na Quaresma, branco nas festas do Senhor e de Maria, vermelho na Paixão, em Pentecostes e nas festas de mártires, verde no Tempo Comum. A cor ensina ao olhar o que o calendário celebra.</p>`,
  contexto: `<p><strong>No mundo:</strong> o calendário gregoriano, usado hoje pelo mundo civil, foi promulgado pelo papa Gregório XIII em 1582, em parte para fixar corretamente a data da Páscoa ${tag('fato')}. <strong>No Brasil:</strong> a arte sacra barroca de Minas Gerais, com Aleijadinho e Mestre Ataíde, foi feita para a liturgia e a devoção ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que santificar o tempo', tag: 'argumento',
    premissas: ['O ser humano vive no tempo e é formado pelo que repete.', 'A salvação aconteceu na história, em acontecimentos datados.', 'Celebrar esses acontecimentos em ciclos os torna presentes à vida de cada geração.'],
    conclusao: 'Logo, o ano litúrgico é pedagogia da fé que forma o crente pela memória e pela repetição.',
    nota: 'CIC 1163–1165.',
  },
  objecoes: [
    { objecao: 'As festas cristãs são adaptações de festas pagãs; o calendário não tem valor próprio.', tag: 'debate',
      resposta: 'A data de 25 de dezembro tem explicações discutidas pelos historiadores, inclusive cálculos cristãos antigos e a relação com festas solares. Mesmo quando a Igreja assumiu datas ou símbolos de outras culturas, deu-lhes novo sentido, centrado em Cristo. A Páscoa, centro do calendário, deriva da Páscoa judaica e da Ressurreição.' },
  ],
  aplicacao: `<p>Monte o calendário litúrgico do ano corrente com as datas dos tempos e das principais solenidades. Depois reze as Laudes ou as Vésperas de um dia e registre a experiência.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 1163–1209', link: null,
    orientacao: `<p>Observe as seções sobre o tempo litúrgico, o domingo e a Liturgia das Horas.</p>`,
  },
  perguntas: [
    { p: 'Qual é a "festa das festas"?', r: 'A Páscoa.' },
    { p: 'Quais as horas principais?', r: 'Laudes e Vésperas.' },
    { p: 'O que fez o II Concílio de Niceia?', r: 'Defendeu a veneração das imagens contra os iconoclastas.' },
  ],
  exercicios: [
    mc('A Dies Domini trata:', ['Do domingo', 'Da Eucaristia', 'Da família', 'Do trabalho'], 0, '1998.'),
    mc('O calendário gregoriano é de:', ['1582', '325', '1054', '1789'], 0, 'Gregório XIII.'),
    mc('A cor do Tempo Comum é:', ['Verde', 'Roxo', 'Vermelho', 'Preto'], 0, 'Cores.'),
    mc('O II Concílio de Niceia foi em:', ['787', '325', '451', '1215'], 0, 'Imagens.'),
    mc('Artista do barroco mineiro:', ['Aleijadinho', 'Portinari', 'Tarsila', 'Di Cavalcanti'], 0, 'Brasil.'),
    disc('Apresente o calendário litúrgico e o registro da oração das Horas.', ['Calendário correto', 'Solenidades', 'Registro', 'Reflexão']),
  ],
  resumo: ['Ano litúrgico: mistério de Cristo.', 'Páscoa: festa das festas.', 'Domingo: dia do Senhor.', 'Laudes e Vésperas.', 'Arte sacra e Niceia II.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1163–1209 e 2168–2195.', livro: 'cic' },
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium, caps. IV–VII.' },
    { texto: 'João Paulo II, Dies Domini (1998).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o calendário e o registro', 'Ler a fonte indicada'],
  revisao: [['Páscoa', 'Festa das festas.'], ['Laudes', 'Manhã.'], ['787', 'Imagens.']],
  avancado: {
    texto: `<h3>A teologia do ícone</h3>
<p>São João Damasceno defendeu as imagens argumentando que, como o Deus invisível se fez visível na Encarnação, é possível representar Cristo ${tag('fato')}. O II Concílio de Niceia distinguiu a veneração das imagens da adoração devida só a Deus e afirmou que a honra prestada à imagem passa ao seu protótipo ${tag('fato')}. A distinção é a mesma usada no culto aos santos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 1159–1162.', livro: 'cic' }],
    exercicios: [
      mc('Defensor das imagens no século VIII:', ['João Damasceno', 'Agostinho', 'Jerônimo', 'Atanásio'], 0, 'Iconoclasmo.'),
      mc('A honra à imagem passa ao:', ['Protótipo', 'Artista', 'Material', 'Templo'], 0, 'Niceia II.'),
      mc('O fundamento é a:', ['Encarnação', 'Criação apenas', 'Lei mosaica', 'Filosofia grega'], 0, 'Visibilidade de Deus.'),
      disc('Explique o argumento de João Damasceno a favor das imagens.', ['Encarnação', 'Distinção', 'Niceia II', 'Juízo'])],
  },
}),

avaliacao('tg5-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre escatologia e liturgia, e duas discursivas que pedem juízo fundamentado.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia CIC 988–1060 e 1066–1209.</li></ul>`,
[
  disc('Explique as realidades últimas (morte, juízo, céu, purgatório, inferno e ressurreição) evitando caricaturas, e responda a uma objeção.', ['Precisão doutrinal', 'Linguagem', 'Objeção e resposta', 'Fontes']),
  disc('Mostre como a liturgia antecipa a esperança escatológica, usando o ano litúrgico e a Eucaristia.', ['Liturgia', 'Escatologia', 'Exemplos', 'Clareza']),
]),
];
