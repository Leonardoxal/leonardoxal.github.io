// Antropologia V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Antropologia).
// Patrimônio imaterial, saúde e cultura, territórios indígenas e quilombolas, e a etnografia breve final.
// A avaliação final integra AN1 a AN5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'an5-1', titulo: 'Patrimônio cultural imaterial: o que é, quem o pratica e o que o registro protege', duracao: '150 min',
  aprendera: ['Explicar o conceito de patrimônio imaterial na Constituição e na UNESCO', 'Descrever o processo de registro do Iphan', 'Analisar um bem registrado com fontes', 'Avaliar riscos e limites da patrimonialização'],
  prereq: ['Antropologia IV (módulo AN4)'],
  explicacao: `
<h3>O problema</h3>
<p>Saberes, festas e modos de fazer não são edifícios, mas também podem desaparecer. Como protegê-los sem congelá-los?</p>
<h3>Marco legal</h3>
<p>A Constituição de 1988 (art. 216) inclui no patrimônio cultural brasileiro os bens de natureza material e imaterial, como formas de expressão e modos de criar, fazer e viver ${tag('fato')}. O Decreto nº 3.551, de 2000, instituiu o registro de bens culturais imateriais pelo Iphan, em quatro livros: Saberes, Celebrações, Formas de Expressão e Lugares ${tag('fato')}. A UNESCO adotou em 2003 a Convenção para a Salvaguarda do Patrimônio Cultural Imaterial ${tag('fato')}.</p>
<h3>Exemplos</h3>
<p>Entre os primeiros bens registrados pelo Iphan, em 2002, estão o Ofício das Paneleiras de Goiabeiras (Espírito Santo) e a Arte Kusiwa dos Wajãpi (Amapá) ${tag('fato')}. O Círio de Nazaré, em Belém, foi registrado em 2004 ${tag('fato')}. O samba de roda do Recôncavo Baiano foi proclamado pela UNESCO em 2005 ${tag('fato')}.</p>
<h3>Antropologia e registro</h3>
<p>O registro exige pesquisa — inventário, dossiê, plano de salvaguarda — e participação dos detentores do bem ${tag('fato')}. Riscos apontados por antropólogos: "folclorizar" práticas vivas, transformá-las em espetáculo turístico ou fixar uma versão "autêntica" ${tag('debate')}.</p>
<h3>Fé e patrimônio</h3>
<p>Muitos bens registrados são celebrações religiosas. O reconhecimento como patrimônio não muda seu sentido para quem crê: para os católicos, o Círio é ato de fé e devoção mariana antes de ser bem cultural ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Patrimônio imaterial', 'Saberes, celebrações, formas de expressão e lugares de valor cultural.'],
    ['Registro', 'Instrumento do Iphan de reconhecimento de bens imateriais (Decreto 3.551/2000).'],
    ['Detentores', 'Comunidades e pessoas que praticam e transmitem o bem.'],
    ['Plano de salvaguarda', 'Conjunto de ações para apoiar a continuidade do bem.'],
    ['Folclorização', 'Redução de uma prática viva a espetáculo ou curiosidade.'],
  ],
  exemplos: `<p><strong>Análise de um bem registrado (modelo):</strong> o que é (ofício de fazer panelas de barro); quem pratica (paneleiras de Goiabeiras, Vitória); como se transmite (de mãe para filha, em associação); que ameaças enfrentava (acesso à argila, concorrência); o que o registro protege e propõe (reconhecimento, apoio ao acesso à matéria-prima). Cada item com o dossiê do Iphan como fonte.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Convenção da UNESCO de 2003 mantém listas de patrimônio imaterial da humanidade. <strong>No Brasil:</strong> o Iphan mantém a lista de bens registrados e os dossiês de cada um em seu site ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que proteger o patrimônio imaterial não é congelá-lo', tag: 'argumento',
    premissas: ['Bens imateriais existem enquanto são praticados por pessoas vivas.', 'Práticas vivas mudam com o tempo, e essa mudança faz parte de sua continuidade.', 'Fixar uma forma "autêntica" e proibir mudanças interromperia a prática.'],
    conclusao: 'Logo, a salvaguarda deve apoiar as condições de continuidade, não impor uma forma imutável.',
    nota: 'É a orientação dos planos de salvaguarda do Iphan.',
  },
  objecoes: [
    { objecao: 'Registrar uma festa religiosa como patrimônio a seculariza.', tag: 'debate',
      resposta: 'O registro reconhece o valor cultural, não define o sentido religioso, que continua sendo dado pelos fiéis e pela Igreja. Há risco de turistificação, que deve ser acompanhado; mas o reconhecimento também pode proteger a festa e seus espaços.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise um bem registrado como patrimônio imaterial pelo Iphan — o que é, quem o pratica, como se transmite, que ameaças enfrenta e o que o registro protege —, com o dossiê como fonte.</p>`,
  fonte: {
    obra: 'Decreto nº 3.551, de 4 de agosto de 2000; Constituição Federal de 1988, art. 216; Iphan, dossiê de registro do bem escolhido', link: { url: 'https://www.gov.br/iphan', rotulo: 'Iphan' },
    orientacao: `<p>No decreto, identifique os quatro livros de registro. No art. 216, a definição de patrimônio cultural. No site do Iphan, o dossiê do bem escolhido.</p>`,
  },
  perguntas: [
    { p: 'Quais os quatro livros de registro do Iphan?', r: 'Saberes, Celebrações, Formas de Expressão e Lugares.' },
    { p: 'Qual decreto instituiu o registro de bens imateriais?', r: 'O Decreto nº 3.551, de 2000.' },
    { p: 'Quando a UNESCO adotou a convenção sobre patrimônio imaterial?', r: 'Em 2003.' },
  ],
  exercicios: [
    mc('O art. 216 da Constituição trata do:', ['Meio ambiente', 'Patrimônio cultural', 'Sistema tributário', 'Direito indígena'], 1, 'Material e imaterial.'),
    mc('O Círio de Nazaré foi registrado em:', ['2000', '2002', '2004', '2010'], 2, 'Iphan.'),
    mc('Um dos primeiros bens registrados (2002) foi:', ['Samba de roda', 'Ofício das Paneleiras de Goiabeiras', 'Frevo', 'Capoeira'], 1, 'Com a Arte Kusiwa.'),
    mc('Transformar uma prática viva em espetáculo é risco de:', ['Salvaguarda', 'Folclorização', 'Registro', 'Inventário'], 1, 'Crítica antropológica.'),
    mc('A salvaguarda deve:', ['Congelar a prática', 'Apoiar as condições de continuidade', 'Proibir mudanças', 'Substituir os detentores'], 1, 'Prática viva.'),
    disc('Entregue a análise de um bem imaterial registrado: o que é, quem pratica, transmissão, ameaças e o que o registro protege, com o dossiê como fonte.', ['Cinco itens', 'Dossiê citado', 'Detentores identificados', 'Avaliação']),
  ],
  resumo: ['CF art. 216: patrimônio material e imaterial.', 'Decreto 3.551/2000: quatro livros.', 'UNESCO 2003.', 'Paneleiras e Kusiwa (2002), Círio (2004), samba de roda (2005).', 'Salvaguarda sem congelamento.'],
  referencias: [
    { texto: 'Decreto nº 3.551, de 4 de agosto de 2000.' },
    { texto: 'UNESCO, Convenção para a Salvaguarda do Patrimônio Cultural Imaterial (2003).' },
    { texto: 'Iphan, dossiês de registro de bens imateriais.', link: { url: 'https://www.gov.br/iphan', rotulo: 'Iphan' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do bem registrado', 'Ler o Decreto 3.551/2000'],
  revisao: [['Decreto 3.551', '2000; quatro livros.'], ['UNESCO', '2003.'], ['Círio', 'Registrado em 2004.']],
  avancado: {
    texto: `<h3>Inventário Nacional de Referências Culturais</h3>
<p>O Iphan desenvolveu o Inventário Nacional de Referências Culturais (INRC) como metodologia de pesquisa para identificar e documentar bens culturais com a participação das comunidades ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Iphan, Inventário Nacional de Referências Culturais: manual de aplicação (2000).' }],
    exercicios: [
      mc('O INRC é:', ['Uma lei', 'Uma metodologia de inventário do Iphan', 'Um museu', 'Uma festa'], 1, 'Pesquisa participativa.'),
      mc('O INRC envolve:', ['Só técnicos', 'A participação das comunidades', 'Só o turismo', 'Só arqueólogos'], 1, 'Detentores.'),
      mc('O inventário precede:', ['O registro', 'A destruição', 'A venda', 'Nada'], 0, 'Base do dossiê.'),
      disc('Planeje um inventário de uma referência cultural do seu município: o que levantar, com quem e com que fontes.', ['Bem escolhido', 'Itens a levantar', 'Participantes', 'Fontes'])],
  },
}),

aula({
  id: 'an5-2', titulo: 'Saúde, doença e cultura: antropologia da saúde e saúde indígena', duracao: '150 min',
  aprendera: ['Distinguir doença biológica e experiência da enfermidade', 'Explicar modelos explicativos da doença', 'Descrever o subsistema de saúde indígena no Brasil', 'Aplicar a antropologia ao cuidado sem relativismo sobre a eficácia'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Médico e paciente podem falar da mesma doença e entender coisas diferentes. A antropologia da saúde estuda como as culturas explicam, vivem e tratam a doença.</p>
<h3>Doença e enfermidade</h3>
<p>Arthur Kleinman, em <em>Patients and Healers in the Context of Culture</em> (1980), distinguiu a <em>disease</em> (alteração biológica, tal como a medicina a descreve) e a <em>illness</em> (a experiência da pessoa e do grupo com o sofrimento), e propôs os <strong>modelos explicativos</strong>: o que cada parte acha que causou a doença, como deve ser tratada e o que se espera ${tag('fato')}.</p>
<h3>Itinerários terapêuticos</h3>
<p>As pessoas combinam recursos: posto de saúde, farmácia, benzedeira, oração, terreiro, igreja ${tag('fato')}. Estudar esses itinerários ajuda os serviços a compreender o paciente ${tag('interpretacao')}.</p>
<h3>Saúde indígena no Brasil</h3>
<p>A Lei nº 9.836, de 1999 (conhecida como Lei Arouca), criou o Subsistema de Atenção à Saúde Indígena no SUS, organizado em Distritos Sanitários Especiais Indígenas ${tag('fato')}. A Secretaria Especial de Saúde Indígena (Sesai) foi criada em 2010 ${tag('fato')}. A política prevê atenção diferenciada, que considere as práticas de cada povo ${tag('fato')}.</p>
<h3>Limites</h3>
<p>Compreender os modelos culturais não significa considerar todos os tratamentos igualmente eficazes: a eficácia é questão empírica ${tag('argumento')}. A Igreja ensina o cuidado integral do doente — corpo e alma — e o valor do sofrimento unido a Cristo (<em>Salvifici Doloris</em>, 1984) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Disease', 'Alteração biológica descrita pela medicina (Kleinman).'],
    ['Illness', 'Experiência pessoal e social do sofrimento (Kleinman).'],
    ['Modelo explicativo', 'Concepção sobre causa, tratamento e prognóstico da doença.'],
    ['Itinerário terapêutico', 'Percurso de busca de cuidado entre vários recursos.'],
    ['DSEI', 'Distrito Sanitário Especial Indígena.'],
  ],
  exemplos: `<p><strong>Dois modelos explicativos:</strong> para o médico, a criança tem diarreia por infecção e precisa de reidratação; para a avó, tem "quebranto" e precisa de benzimento. Um serviço atento pode reidratar a criança e respeitar a benzedeira, explicando o risco de desidratação. Compreender não é abandonar o tratamento eficaz.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Organização Mundial da Saúde discute a integração de práticas tradicionais nos sistemas de saúde, com critérios de segurança e eficácia ${tag('fato')}. <strong>No Brasil:</strong> a atenção à saúde indígena é feita por meio de 34 Distritos Sanitários Especiais Indígenas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que compreender o modelo do paciente melhora o cuidado', tag: 'argumento',
    premissas: ['O paciente age segundo o que acredita sobre sua doença.', 'Se o tratamento contradiz seu modelo sem explicação, ele tende a abandoná-lo.', 'Conhecer o modelo permite explicar, negociar e manter o tratamento eficaz.'],
    conclusao: 'Logo, a compreensão antropológica do paciente aumenta a eficácia do cuidado.',
    nota: 'Não substitui o critério empírico de eficácia.',
  },
  objecoes: [
    { objecao: 'Respeitar crenças sobre doença é aceitar qualquer tratamento.', tag: 'debate',
      resposta: 'Respeitar a pessoa e compreender sua crença é diferente de dispensar tratamentos eficazes ou aceitar práticas perigosas. O profissional pode dialogar, explicar e combinar cuidados, mantendo o critério da eficácia e da segurança.' },
  ],
  aplicacao: `<p>Entreviste, com consentimento, uma pessoa sobre um episódio de doença na família: que recursos procurou (itinerário terapêutico), como explicou a causa e o que esperava de cada recurso. Analise com os conceitos de Kleinman.</p>`,
  fonte: {
    obra: 'Arthur Kleinman, Patients and Healers in the Context of Culture (1980), cap. 4; Lei nº 9.836, de 23 de setembro de 1999', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Em Kleinman, localize a definição de modelos explicativos. Na Lei 9.836/1999, a criação do subsistema e o princípio da atenção diferenciada.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre disease e illness?', r: 'Disease é a alteração biológica; illness, a experiência pessoal e social do sofrimento.' },
    { p: 'Que lei criou o Subsistema de Atenção à Saúde Indígena?', r: 'A Lei nº 9.836, de 1999.' },
    { p: 'Compreender modelos culturais implica igualar a eficácia dos tratamentos?', r: 'Não; a eficácia é questão empírica.' },
  ],
  exercicios: [
    mc('Patients and Healers in the Context of Culture é de:', ['Kleinman', 'Geertz', 'Mauss', 'Velho'], 0, '1980.'),
    mc('A Sesai foi criada em:', ['1999', '2003', '2010', '2023'], 2, 'Saúde indígena.'),
    mc('O percurso entre posto, farmácia e benzedeira é o:', ['Modelo explicativo', 'Itinerário terapêutico', 'DSEI', 'Rito de passagem'], 1, 'Busca de cuidado.'),
    mc('O número de DSEIs no Brasil é:', ['10', '27', '34', '100'], 2, 'Distritos sanitários.'),
    mc('Salvifici Doloris (1984) trata do:', ['Trabalho', 'Sentido do sofrimento', 'Matrimônio', 'Meio ambiente'], 1, 'João Paulo II.'),
    disc('Entregue a análise do itinerário terapêutico de um episódio de doença com os conceitos de Kleinman, mantendo a distinção entre compreensão e eficácia.', ['Entrevista com consentimento', 'Itinerário descrito', 'Modelos explicativos', 'Compreensão x eficácia']),
  ],
  resumo: ['Kleinman (1980): disease x illness; modelos explicativos.', 'Itinerários terapêuticos.', 'Lei 9.836/1999; Sesai (2010); 34 DSEIs.', 'Compreender ≠ igualar eficácia.', 'Cuidado integral; Salvifici Doloris (1984).'],
  referencias: [
    { texto: 'Arthur Kleinman, Patients and Healers in the Context of Culture (1980).' },
    { texto: 'Lei nº 9.836, de 1999 (Subsistema de Atenção à Saúde Indígena).' },
    { texto: 'São João Paulo II, Salvifici Doloris (1984).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do itinerário', 'Ler o capítulo de Kleinman'],
  revisao: [['Kleinman', 'Disease x illness.'], ['Lei 9.836', 'Saúde indígena.'], ['Eficácia', 'Questão empírica.']],
  avancado: {
    texto: `<h3>Pandemia e povos indígenas</h3>
<p>Durante a pandemia de covid-19, povos indígenas do Brasil adotaram barreiras sanitárias próprias e cobraram medidas do Estado; o tema chegou ao Supremo Tribunal Federal em 2020 ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Fiocruz, publicações sobre saúde indígena (consultar o site da Fiocruz).' }],
    exercicios: [
      mc('Na pandemia, povos indígenas adotaram:', ['Nada', 'Barreiras sanitárias próprias', 'Mudança de território', 'Abandono do SUS'], 1, 'Autoproteção.'),
      mc('O tema chegou ao STF em:', ['2018', '2020', '2022', '2024'], 1, 'Covid-19.'),
      mc('A Fiocruz é instituição de:', ['Economia', 'Saúde pública', 'Patrimônio', 'Estatística'], 1, 'Pesquisa em saúde.'),
      disc('Analise uma resposta indígena à pandemia com fontes, relacionando cultura, organização e políticas de saúde.', ['Caso', 'Fontes', 'Cultura e organização', 'Políticas'])],
  },
}),

aula({
  id: 'an5-3', titulo: 'Territórios indígenas e quilombolas: laudos, demarcação e conflitos', duracao: '150 min',
  aprendera: ['Explicar o processo de demarcação de terras indígenas', 'Explicar a titulação de territórios quilombolas', 'Descrever o papel do laudo antropológico', 'Analisar o debate sobre o marco temporal com justiça às partes'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A terra é, para muitos povos e comunidades, base de vida, memória e fé. Como o Estado reconhece esses territórios, e por que há tantos conflitos?</p>
<h3>Terras indígenas</h3>
<p>A Constituição reconhece aos índios os direitos originários sobre as terras que tradicionalmente ocupam, cabendo à União demarcá-las (art. 231) ${tag('fato')}. O procedimento administrativo é regulado pelo Decreto nº 1.775, de 1996, e inclui estudos de identificação com participação de antropólogo ${tag('fato')}.</p>
<h3>Territórios quilombolas</h3>
<p>O art. 68 do ADCT reconhece a propriedade das terras ocupadas por remanescentes de quilombos; o Decreto nº 4.887, de 2003, regulou a titulação, com o critério da autoatribuição, e foi considerado constitucional pelo STF em 2018 ${tag('fato')}.</p>
<h3>O laudo antropológico</h3>
<p>O laudo descreve a ocupação tradicional, a história, a organização social e os usos do território, com método etnográfico e fontes documentais ${tag('fato')}. Ele é peça técnica, sujeita a contestação, e deve distinguir dados, interpretação e conclusões ${tag('argumento')}.</p>
<h3>O marco temporal</h3>
<p>A tese do "marco temporal" condiciona a demarcação à ocupação em 5 de outubro de 1988 ${tag('fato')}. Em setembro de 2023, o STF rejeitou a tese no julgamento do RE 1.017.365; no mesmo ano, o Congresso aprovou a Lei nº 14.701, que a incorporou, e o tema seguiu em disputa judicial ${tag('fato')}. Os argumentos envolvem segurança jurídica de proprietários, direitos originários e expulsões anteriores a 1988 ${tag('debate')}.</p>
<h3>Critério cristão</h3>
<p>A <em>Laudato si'</em> (146) pede atenção especial às comunidades aborígenes e às suas tradições culturais, para as quais a terra não é um bem econômico, mas dom de Deus e dos antepassados ${tag('doutrina')}. O critério não decide sozinho cada caso jurídico, mas orienta o juízo ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Demarcação', 'Procedimento da União para delimitar terras indígenas.'],
    ['Ocupação tradicional', 'Uso do território segundo usos, costumes e tradições do povo.'],
    ['Autoatribuição', 'Critério de identificação quilombola pela própria comunidade.'],
    ['Laudo antropológico', 'Estudo técnico sobre ocupação, história e organização de um grupo.'],
    ['Marco temporal', 'Tese que condiciona a demarcação à ocupação em 5/10/1988.'],
  ],
  exemplos: `<p><strong>Ler um conflito com justiça:</strong> numa área disputada, ouça os indígenas (memória, cemitérios, roças antigas), os agricultores (títulos, compra de boa-fé, trabalho de gerações) e os documentos (laudos, registros, decisões). Uma análise honesta expõe todos os lados antes de concluir, e distingue o que é fato documentado do que é alegação.</p>`,
  contexto: `<p><strong>No mundo:</strong> conflitos entre direitos territoriais de povos originários e propriedade privada ocorrem em vários países das Américas. <strong>No Brasil:</strong> as terras indígenas e quilombolas estão no centro de debates sobre agricultura, meio ambiente e direitos ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'O argumento contra o marco temporal em premissas', tag: 'argumento',
    premissas: ['A Constituição fala em direitos originários, anteriores ao próprio Estado.', 'Muitos povos foram expulsos de suas terras antes de 1988, e não por vontade própria.', 'Exigir presença em 1988 premiaria as expulsões anteriores.'],
    conclusao: 'Logo, segundo esse argumento, o marco temporal é incompatível com o caráter originário dos direitos.',
    nota: 'O argumento contrário enfatiza a segurança jurídica e a boa-fé de quem tem título; o aluno deve expor os dois.',
  },
  objecoes: [
    { objecao: 'Laudos antropológicos são sempre parciais a favor dos indígenas.', tag: 'debate',
      resposta: 'Todo laudo pode ser contestado, e é bom que o seja com outros dados. A qualidade se julga pelo método, pelas fontes e pela coerência, não pela conclusão. Desqualificar o gênero inteiro impede o exame técnico de cada caso.' },
  ],
  aplicacao: `<p>Escolha um conflito territorial indígena ou quilombola documentado. Exponha a posição de cada parte, os documentos disponíveis (laudo, decisões, títulos), a legislação aplicável e sua avaliação, separando fatos, alegações e juízo.</p>`,
  fonte: {
    obra: 'Constituição Federal de 1988, art. 231 e ADCT art. 68; Decreto nº 1.775/1996; Decreto nº 4.887/2003; Papa Francisco, Laudato si\' (2015), n. 146', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'Laudato si\' (vatican.va)' },
    orientacao: `<p>Leia os dispositivos constitucionais e os decretos. Em Laudato si' 146, a relação dos povos com a terra. Use-os na análise do conflito.</p>`,
  },
  perguntas: [
    { p: 'Que decreto regula a demarcação de terras indígenas?', r: 'O Decreto nº 1.775, de 1996.' },
    { p: 'Qual o critério de identificação quilombola no Decreto 4.887/2003?', r: 'A autoatribuição.' },
    { p: 'O que decidiu o STF sobre o marco temporal em 2023?', r: 'Rejeitou a tese no julgamento do RE 1.017.365.' },
  ],
  exercicios: [
    mc('A titulação quilombola é regulada pelo Decreto:', ['1.775/1996', '3.551/2000', '4.887/2003', '5.051/2004'], 2, 'Autoatribuição.'),
    mc('O marco temporal toma como referência:', ['22/4/1500', '13/5/1888', '5/10/1988', '1/1/2000'], 2, 'Promulgação da Constituição.'),
    mc('A Lei 14.701/2023 trata de:', ['Patrimônio', 'Demarcação de terras indígenas', 'Saúde', 'Educação'], 1, 'Incorporou o marco temporal.'),
    mc('O laudo antropológico deve distinguir:', ['Nada', 'Dados, interpretação e conclusões', 'Só opiniões', 'Só leis'], 1, 'Peça técnica.'),
    mc('Laudato si\' 146 trata da relação com a terra das:', ['Cidades', 'Comunidades aborígenes', 'Empresas', 'Nações ricas'], 1, 'Dom de Deus e dos antepassados.'),
    disc('Analise um conflito territorial indígena ou quilombola com as posições das partes, os documentos, a legislação e sua avaliação, separando fatos, alegações e juízo.', ['Partes expostas com justiça', 'Documentos', 'Legislação', 'Fatos, alegações e juízo separados']),
  ],
  resumo: ['CF art. 231; Decreto 1.775/1996.', 'ADCT art. 68; Decreto 4.887/2003 (STF, 2018).', 'Laudo antropológico: método e fontes.', 'Marco temporal: STF (2023) x Lei 14.701/2023; debate.', 'Laudato si\' 146.'],
  referencias: [
    { texto: 'Constituição da República Federativa do Brasil (1988), art. 231 e ADCT art. 68.' },
    { texto: 'Decreto nº 1.775, de 1996; Decreto nº 4.887, de 2003.' },
    { texto: 'Papa Francisco, Laudato si\' (2015), n. 146.', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
    { texto: 'Associação Brasileira de Antropologia, publicações sobre laudos antropológicos.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do conflito', 'Ler os dispositivos legais'],
  revisao: [['Decreto 1.775', 'Demarcação.'], ['Decreto 4.887', 'Quilombos.'], ['Marco temporal', 'Debate.']],
  avancado: {
    texto: `<h3>Povos isolados</h3>
<p>O Brasil tem registros de povos indígenas em isolamento voluntário, sobretudo na Amazônia; a política oficial adota o princípio do não contato, salvo risco grave ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Funai, política para povos indígenas isolados (consultar o site da Funai).' }],
    exercicios: [
      mc('A política para povos isolados adota o princípio do:', ['Contato forçado', 'Não contato', 'Integração', 'Remoção'], 1, 'Salvo risco grave.'),
      mc('Os povos isolados estão sobretudo na:', ['Região Sul', 'Amazônia', 'Litoral nordestino', 'Pampa'], 1, 'Registros oficiais.'),
      mc('O isolamento desses povos é considerado:', ['Voluntário', 'Imposto pelo Estado', 'Inexistente', 'Temporário por lei'], 0, 'Escolha própria.'),
      disc('Exponha os argumentos da política de não contato e uma objeção, com fontes.', ['Argumentos', 'Objeção', 'Fontes', 'Conclusão'])],
  },
}),

aula({
  id: 'an5-4', titulo: 'Etnografia breve: do campo ao texto final', duracao: '180 min',
  aprendera: ['Escolher e delimitar um grupo, rito ou espaço', 'Planejar o trabalho de campo com ética', 'Organizar diário de campo e entrevistas', 'Redigir a etnografia segundo a rubrica'],
  prereq: ['Todas as aulas anteriores de Antropologia'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma etnografia breve de 8 a 12 páginas sobre um grupo, rito ou espaço, com diário de campo e entrevistas. Esta aula é o roteiro.</p>
<h3>1. Objeto</h3>
<p>Escolha algo acessível e delimitado: uma festa de padroeiro, um grupo de oração, uma feira, uma roda de capoeira, um clube de idosos. Formule uma pergunta: "como os participantes da feira X constroem a confiança entre feirantes e clientes?" ${tag('argumento')}.</p>
<h3>2. Campo</h3>
<p>Pelo menos seis visitas em dias diferentes, diário de campo com registro descritivo e reflexivo (an1-3), e 4 a 8 entrevistas semiestruturadas com consentimento ${tag('fato')}. Respeite a Resolução CNS nº 510/2016 e, se houver povos indígenas, a legislação e a organização própria ${tag('fato')}.</p>
<h3>3. Análise</h3>
<p>Releia o diário e as entrevistas, codifique por temas, use os conceitos do percurso (rito, dádiva, estrutura, sentido, projeto) e procure casos que contrariem sua interpretação ${tag('fato')}.</p>
<h3>4. Texto</h3>
<p>Estrutura: apresentação do grupo e da pergunta; o pesquisador e sua entrada no campo; descrição densa; análise com conceitos; o que os participantes dizem; limites; conclusão proporcional; referências ABNT ${tag('fato')}.</p>
<h3>Rubrica</h3>
<ul>
<li>Ética respeitada e documentada.</li>
<li>Descrição densa e datada.</li>
<li>Voz dos participantes presente e fiel.</li>
<li>Conceitos usados corretamente.</li>
<li>Separação entre descrição, interpretação e juízo; conclusão proporcional.</li>
</ul>`,
  vocabulario: [
    ['Entrada no campo', 'Modo como o pesquisador é apresentado e aceito no grupo.'],
    ['Porteiro', 'Pessoa que facilita o acesso do pesquisador ao grupo.'],
    ['Descrição densa', 'Registro das camadas de sentido de uma ação (Geertz).'],
    ['Codificação', 'Organização do material por temas.'],
    ['Reflexividade', 'Atenção ao lugar do pesquisador na produção do conhecimento.'],
  ],
  exemplos: `<p><strong>Parágrafo de entrada no campo:</strong> "Cheguei à roda de capoeira pela indicação de um colega que treina ali há dez anos. O mestre aceitou minha presença com a condição de que eu também treinasse. Essa condição me deu acesso às conversas antes e depois dos treinos, mas também me colocou numa posição de aprendiz, o que influenciou o que me contaram." O parágrafo situa o pesquisador e seus limites.</p>`,
  contexto: `<p><strong>No mundo:</strong> etnografias breves são exercício comum na formação de antropólogos. <strong>No Brasil:</strong> festas, feiras, grupos religiosos e associações oferecem campos acessíveis e ricos para iniciação ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que situar o pesquisador fortalece o texto', tag: 'argumento',
    premissas: ['O que o pesquisador vê e ouve depende de quem ele é para o grupo.', 'Esconder essa posição dá ao leitor uma falsa impressão de neutralidade.', 'Expor a posição permite ao leitor avaliar os dados.'],
    conclusao: 'Logo, situar o pesquisador é condição de honestidade e de rigor do texto etnográfico.',
    nota: 'É a reflexividade discutida desde Malinowski e Clifford.',
  },
  objecoes: [
    { objecao: 'Uma etnografia de oito páginas é superficial demais para valer algo.', tag: 'debate',
      resposta: 'É limitada, e o texto deve dizê-lo. Mas uma etnografia breve bem feita treina o método, pode revelar aspectos não estudados e preparar pesquisas maiores. O valor está no rigor, não no tamanho.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto da etnografia: objeto, pergunta, porteiro e entrada no campo, cronograma de seis visitas, roteiro de entrevista, termo de consentimento e conceitos que pretende usar.</p>`,
  fonte: {
    obra: 'Bronisław Malinowski, Argonautas do Pacífico Ocidental (1922), introdução; Roberto Cardoso de Oliveira, O trabalho do antropólogo (1998); Conselho Nacional de Saúde, Resolução nº 510/2016', link: null,
    orientacao: `<p>Releia os princípios de campo de Malinowski, os três atos de Cardoso de Oliveira e os princípios éticos da Resolução 510. Aplique-os ao pré-projeto.</p>`,
  },
  perguntas: [
    { p: 'Qual a extensão da etnografia breve?', r: 'De 8 a 12 páginas.' },
    { p: 'Quantas visitas e entrevistas o roteiro pede?', r: 'Pelo menos seis visitas e de 4 a 8 entrevistas.' },
    { p: 'Por que situar o pesquisador no texto?', r: 'Porque o que ele vê depende de sua posição, e o leitor precisa avaliar os dados.' },
  ],
  exercicios: [
    mc('Qual destes é uma pergunta etnográfica delimitada?', ['A cultura brasileira', 'A religião', 'Como os participantes da feira X constroem a confiança entre feirantes e clientes?', 'O comércio'], 2, 'Grupo e tema definidos.'),
    mc('A pessoa que facilita o acesso ao grupo é chamada:', ['Informante-chave ou porteiro', 'Juiz', 'Orientador', 'Leitor'], 0, 'Entrada no campo.'),
    mc('O registro das camadas de sentido de uma ação é a:', ['Codificação', 'Descrição densa', 'Estatística', 'Genealogia'], 1, 'Geertz.'),
    mc('A Resolução CNS 510/2016 trata de:', ['Patrimônio', 'Ética em pesquisa em ciências humanas', 'Saúde indígena', 'Terras'], 1, 'Pesquisa com pessoas.'),
    mc('Procurar casos contrários à interpretação serve para:', ['Atrasar', 'Fortalecer a análise', 'Mudar o tema', 'Nada'], 1, 'Contra o viés.'),
    disc('Apresente o pré-projeto: objeto, pergunta, entrada no campo, cronograma, roteiro, consentimento e conceitos.', ['Objeto e pergunta', 'Entrada no campo', 'Cronograma e roteiro', 'Ética', 'Conceitos']),
  ],
  resumo: ['Objeto acessível e pergunta delimitada.', 'Seis visitas, diário, 4 a 8 entrevistas.', 'Ética: CNS 510/2016.', 'Análise com conceitos e casos contrários.', 'Texto: situar o pesquisador; conclusão proporcional.'],
  referencias: [
    { texto: 'Bronisław Malinowski, Argonautas do Pacífico Ocidental (1922).' },
    { texto: 'Roberto Cardoso de Oliveira, O trabalho do antropólogo (1998).' },
    { texto: 'Clifford Geertz, A interpretação das culturas (1973).' },
    { texto: 'Conselho Nacional de Saúde, Resolução nº 510, de 2016.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Iniciar o diário de campo'],
  revisao: [['Etnografia breve', '8 a 12 páginas.'], ['Campo', 'Seis visitas.'], ['Reflexividade', 'Situar o pesquisador.']],
  avancado: {
    texto: `<h3>Etnografia e fotografia</h3>
<p>A fotografia e o vídeo são recursos de pesquisa, como mostram os trabalhos de Pierre Verger ${tag('fato')}; exigem consentimento específico, cuidado com a imagem das pessoas e legendas que informem lugar, data e contexto ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Pierre Verger, fotografias e textos (Fundação Pierre Verger).' }],
    exercicios: [
      mc('O uso de imagens em pesquisa exige:', ['Nada', 'Consentimento específico', 'Só boa câmera', 'Autorização do IBGE'], 1, 'Direito de imagem.'),
      mc('Uma legenda de fotografia etnográfica deve informar:', ['Só o fotógrafo', 'Lugar, data e contexto', 'O preço', 'Nada'], 1, 'Valor documental.'),
      mc('Pierre Verger usou:', ['Estatística', 'Fotografia e etnografia', 'Arqueologia', 'Cartografia'], 1, 'Bahia e Benim.'),
      disc('Planeje o uso de imagens na sua etnografia: o que fotografar, como obter consentimento e como legendar.', ['O que fotografar', 'Consentimento', 'Legendas', 'Cuidados'])],
  },
}),

avaliacao('an5-5', 'Avaliação integradora de Antropologia', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Antropologia. Reúne questões de todos os módulos (AN1 a AN5) e pede duas discursivas de síntese. A conclusão do percurso exige também a etnografia breve, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Releia o glossário, o quadro das correntes e o ensaio sobre relativismo.</li><li>Releia a rubrica da etnografia (an5-4).</li></ul>`,
[
  disc('Interprete um trecho de etnografia (clássica ou brasileira): identifique o método, os conceitos usados, a posição do pesquisador, os limites e se a conclusão é proporcional.', ['Método identificado', 'Conceitos corretos', 'Posição do pesquisador', 'Limites', 'Proporcionalidade']),
  disc('Responda como antropólogo católico: o que a antropologia pode e o que não pode afirmar sobre as culturas e sobre a religião? Use três exemplos de módulos diferentes e a distinção entre relativismo metodológico e moral.', ['Distingue os relativismos', 'Três exemplos de módulos diferentes', 'Argumentação clara', 'Conclusão fundamentada']),
]),
];
