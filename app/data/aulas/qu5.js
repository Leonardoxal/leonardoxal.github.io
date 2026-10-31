// Química V — aplicações, pesquisa e avaliação integradora (etapas 9 a 11 do percurso de Química).
// Cotidiano e saúde; indústria, agricultura e ambiente; patrimônio cultural; investigação; avaliação final.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'qu5-1', titulo: 'Química no cotidiano e na saúde', duracao: '150 min',
  aprendera: ['Ler rótulos de alimentos, produtos de limpeza e medicamentos', 'Explicar a relação entre dose e efeito', 'Reconhecer riscos de misturar produtos', 'Conhecer o papel da Anvisa'],
  prereq: ['Química IV (módulo QU4)'],
  explicacao: `
<h3>O problema</h3>
<p>Usamos dezenas de substâncias por dia: em alimentos, remédios e limpeza. Como usá-las com segurança e sem medo infundado?</p>
<h3>Dose</h3>
<p>Atribui-se a Paracelso a ideia de que "a dose faz o veneno": toda substância pode ser tóxica em quantidade suficiente, e muitas tóxicas são inofensivas em doses mínimas ${tag('fato')}. Até a água, em excesso extremo, causa intoxicação ${tag('fato')}.</p>
<h3>Alimentos</h3>
<p>Rótulos informam ingredientes em ordem decrescente de quantidade e aditivos (conservantes, corantes, acidulantes) ${tag('fato')}. No Brasil, a rotulagem nutricional frontal, com lupa indicando alto teor de açúcar, sódio ou gordura saturada, passou a ser exigida pela Anvisa ${tag('fato')}.</p>
<h3>Medicamentos</h3>
<p>O princípio ativo é a substância responsável pelo efeito ${tag('fato')}. Medicamentos genéricos, regulados no Brasil pela Lei nº 9.787/1999, têm o mesmo princípio ativo, dose e forma do medicamento de referência ${tag('fato')}. Automedicação traz riscos, como interações e mascaramento de doenças ${tag('fato')}.</p>
<h3>Limpeza</h3>
<p>Nunca se deve misturar água sanitária (hipoclorito) com produtos ácidos ou com amoníaco: formam-se gases tóxicos ${tag('fato')}.</p>
<h3>Anvisa</h3>
<p>A Agência Nacional de Vigilância Sanitária (Anvisa), criada em 1999, regula alimentos, medicamentos, cosméticos e saneantes ${tag('fato')}.</p>`,
  vocabulario: [
    ['Dose', 'Quantidade de substância administrada ou ingerida.'],
    ['Aditivo alimentar', 'Substância adicionada para conservar, colorir ou ajustar sabor e textura.'],
    ['Princípio ativo', 'Substância responsável pelo efeito do medicamento.'],
    ['Genérico', 'Medicamento equivalente ao de referência, identificado pelo princípio ativo.'],
    ['Saneante', 'Produto de limpeza e desinfecção.'],
  ],
  exemplos: `<p><strong>O paracetamol:</strong> em doses recomendadas, é um analgésico seguro para a maioria das pessoas; em doses excessivas, pode causar lesão grave no fígado. A mesma substância é remédio ou veneno conforme a dose, e por isso é preciso seguir a bula e a orientação profissional.</p>`,
  contexto: `<p><strong>No mundo:</strong> centros de controle de intoxicações orientam a população em casos de exposição a substâncias ${tag('fato')}. <strong>No Brasil:</strong> os Centros de Informação e Assistência Toxicológica (CIATox) atendem casos de intoxicação, e o Disque-Intoxicação da Anvisa é 0800 722 6001 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o medo da "química" é mal formulado', tag: 'argumento',
    premissas: ['Tudo o que existe materialmente é feito de substâncias químicas.', 'O risco depende da substância, da dose e da exposição, não de ser natural ou sintética.', 'Medo genérico impede escolhas informadas.'],
    conclusao: 'Logo, a resposta adequada é conhecimento, não medo genérico.',
    nota: 'Isso inclui levar a sério riscos reais e respeitar a regulação.',
  },
  objecoes: [
    { objecao: 'Produtos "sem química" são sempre mais seguros.', tag: 'debate',
      resposta: 'Não existe produto "sem química". Produtos naturais também contêm substâncias que podem ser tóxicas ou alergênicas. A segurança depende de testes, dose e uso correto.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise os rótulos de três produtos (um alimento, um produto de limpeza e um medicamento), identificando substâncias, funções, advertências e cuidados de segurança.</p>`,
  fonte: {
    obra: 'Anvisa, normas e cartilhas sobre rotulagem nutricional e uso de saneantes', link: null,
    orientacao: `<p>Observe as informações obrigatórias e as advertências de segurança.</p>`,
  },
  perguntas: [
    { p: 'O que significa "a dose faz o veneno"?', r: 'Que a toxicidade depende da quantidade.' },
    { p: 'O que é um medicamento genérico?', r: 'Um medicamento com o mesmo princípio ativo, dose e forma do de referência.' },
    { p: 'Por que não misturar água sanitária com ácidos?', r: 'Porque se formam gases tóxicos.' },
  ],
  exercicios: [
    mc('A ideia "a dose faz o veneno" é atribuída a:', ['Paracelso', 'Lavoisier', 'Dalton', 'Pauling'], 0, 'Século XVI.'),
    mc('A lei dos genéricos no Brasil é de:', ['1999', '1988', '2010', '1975'], 0, 'Lei 9.787.'),
    mc('Os ingredientes no rótulo aparecem em ordem:', ['Decrescente de quantidade', 'Alfabética', 'Crescente', 'Aleatória'], 0, 'Regra.'),
    mc('A Anvisa foi criada em:', ['1999', '1977', '2005', '1962'], 0, 'Agência.'),
    mc('O excesso de paracetamol pode lesar o:', ['Fígado', 'Cabelo', 'Osso', 'Dente'], 0, 'Toxicidade.'),
    disc('Analise os rótulos dos três produtos.', ['Substâncias', 'Funções', 'Advertências', 'Cuidados']),
  ],
  resumo: ['A dose faz o veneno.', 'Rótulos e aditivos.', 'Princípio ativo e genéricos.', 'Não misturar saneantes.', 'Anvisa e CIATox.'],
  referencias: [
    { texto: 'Anvisa, normas de rotulagem e saneantes.' },
    { texto: 'Lei nº 9.787/1999 (medicamentos genéricos).' },
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos rótulos', 'Ler a fonte indicada'],
  revisao: [['Dose', 'Faz o veneno.'], ['Genérico', 'Mesmo princípio ativo.'], ['Anvisa', '1999.']],
  avancado: {
    texto: `<h3>DL50</h3>
<p>A dose letal mediana (DL50) é a dose que mata metade dos animais de teste, expressa em mg por kg de massa corporal ${tag('fato')}. Quanto menor a DL50, mais tóxica a substância ${tag('fato')}. Hoje se buscam métodos alternativos para reduzir o uso de animais em testes de toxicidade ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química.' }],
    exercicios: [
      mc('Quanto menor a DL50:', ['Mais tóxica a substância', 'Menos tóxica', 'Nada indica', 'Mais nutritiva'], 0, 'Definição.'),
      mc('A DL50 é expressa em:', ['mg/kg', 'mol/L', '°C', 'Hz'], 0, 'Unidade.'),
      mc('Métodos alternativos buscam reduzir:', ['O uso de animais', 'A precisão', 'A segurança', 'Nada'], 0, 'Ética.'),
      disc('Discuta os aspectos éticos dos testes de toxicidade em animais.', ['Necessidade', 'Alternativas', 'Ética', 'Posição'])],
  },
}),

aula({
  id: 'qu5-2', titulo: 'Indústria, agricultura, água e ambiente', duracao: '150 min',
  aprendera: ['Conhecer processos químicos industriais importantes no Brasil', 'Explicar o tratamento de água', 'Discutir fertilizantes e agrotóxicos com equilíbrio', 'Relacionar química e saneamento'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Combustíveis, alimentos e água potável dependem de processos químicos. Como funcionam, e que cuidados exigem?</p>
<h3>Combustíveis</h3>
<p>O petróleo é refinado por destilação fracionada em gás, gasolina, diesel e outros produtos ${tag('fato')}. O etanol de cana é produzido por fermentação e destilação ${tag('fato')}.</p>
<h3>Agricultura</h3>
<p>Fertilizantes fornecem nitrogênio, fósforo e potássio (NPK) ${tag('fato')}. Agrotóxicos controlam pragas, mas podem contaminar água, solo e pessoas se mal usados ${tag('fato')}. O uso seguro exige receituário agronômico, equipamentos de proteção e respeito aos intervalos de segurança ${tag('fato')}. O manejo integrado de pragas combina métodos para reduzir o uso de agrotóxicos ${tag('fato')}.</p>
<h3>Água</h3>
<p>O tratamento convencional inclui coagulação e floculação (agregar impurezas), decantação, filtração, desinfecção com cloro e, em muitos lugares, fluoretação ${tag('fato')}. O tratamento de esgoto reduz a carga orgânica antes do retorno aos rios ${tag('fato')}.</p>
<h3>Saneamento e justiça</h3>
<p>O acesso à água potável e ao saneamento é condição de saúde e dignidade ${tag('fato')}. No Brasil, o Marco Legal do Saneamento (Lei nº 14.026/2020) estabeleceu metas de universalização até 2033 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Refino', 'Separação e transformação do petróleo em derivados.'],
    ['NPK', 'Nitrogênio, fósforo e potássio, nutrientes dos fertilizantes.'],
    ['Floculação', 'Agregação de partículas em flocos que decantam.'],
    ['Desinfecção', 'Eliminação de microrganismos patogênicos.'],
    ['Manejo integrado de pragas', 'Combinação de métodos para controlar pragas com menos agrotóxicos.'],
  ],
  exemplos: `<p><strong>Da represa à torneira:</strong> a água bruta recebe sulfato de alumínio, que forma flocos com a sujeira; os flocos decantam; a água passa por filtros de areia e carvão; recebe cloro para desinfecção e flúor para prevenir cáries. Cada etapa aplica química estudada no percurso.</p>`,
  contexto: `<p><strong>No mundo:</strong> a ONU reconheceu em 2010 o direito humano à água e ao saneamento ${tag('fato')}. <strong>No Brasil:</strong> parte significativa da população ainda não tem coleta e tratamento de esgoto, o que motivou o Marco Legal do Saneamento ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o saneamento é questão de justiça', tag: 'argumento',
    premissas: ['Água contaminada e falta de esgoto causam doenças, sobretudo entre os mais pobres.', 'A química e a engenharia sabem tratar água e esgoto.', 'Negar o acesso a um bem básico possível é injusto.'],
    conclusao: 'Logo, universalizar o saneamento é exigência de justiça social.',
    nota: 'A doutrina social da Igreja fala do destino universal dos bens.',
  },
  objecoes: [
    { objecao: 'Agrotóxicos devem ser simplesmente proibidos.', tag: 'debate',
      resposta: 'Seu uso intensivo traz riscos reais à saúde e ao ambiente, e muitos defendem reduções e proibições de produtos específicos. Mas a produção de alimentos em grande escala também depende de controle de pragas. O debate envolve regulação, alternativas, pesquisa e prudência.' },
  ],
  aplicacao: `<p>Visite (presencialmente ou pelo site) a empresa de saneamento da sua cidade, descreva as etapas de tratamento usadas e os indicadores de cobertura de água e esgoto, e proponha uma ação de conscientização local.</p>`,
  fonte: {
    obra: 'Lei nº 14.026/2020 (Marco Legal do Saneamento), artigos sobre metas', link: null,
    orientacao: `<p>Observe as metas de atendimento de água e esgoto e os prazos.</p>`,
  },
  perguntas: [
    { p: 'Quais as etapas do tratamento convencional de água?', r: 'Coagulação e floculação, decantação, filtração, desinfecção e, em muitos lugares, fluoretação.' },
    { p: 'O que significa NPK?', r: 'Nitrogênio, fósforo e potássio.' },
    { p: 'Qual a meta do Marco Legal do Saneamento?', r: 'Universalização até 2033.' },
  ],
  exercicios: [
    mc('O petróleo é separado por:', ['Destilação fracionada', 'Filtração', 'Floculação', 'Imantação'], 0, 'Refino.'),
    mc('O cloro na água serve para:', ['Desinfecção', 'Coloração', 'Adoçar', 'Floculação'], 0, 'Microrganismos.'),
    mc('O Marco Legal do Saneamento é de:', ['2020', '2010', '1999', '2033'], 0, 'Lei 14.026.'),
    mc('A ONU reconheceu o direito à água em:', ['2010', '1992', '2020', '1948'], 0, 'Direito humano.'),
    mc('O manejo integrado de pragas busca:', ['Reduzir o uso de agrotóxicos', 'Aumentar agrotóxicos', 'Eliminar a agricultura', 'Nada'], 0, 'Combinação.'),
    disc('Descreva o tratamento de água da sua cidade e proponha a ação.', ['Etapas', 'Indicadores', 'Ação', 'Fontes']),
  ],
  resumo: ['Refino e etanol.', 'NPK e agrotóxicos.', 'Tratamento de água.', 'Esgoto.', 'Saneamento e justiça (2020, 2033).'],
  referencias: [
    { texto: 'Lei nº 14.026/2020 (Marco Legal do Saneamento).' },
    { texto: 'Papa Francisco, Laudato si\' (2015), capítulo I, sobre a água.' },
    { texto: 'Theodore L. Brown e outros, Química: a ciência central.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição e a proposta', 'Ler a fonte indicada'],
  revisao: [['Floculação', 'Flocos.'], ['NPK', 'Nutrientes.'], ['2033', 'Universalização.']],
  avancado: {
    texto: `<h3>Eutrofização</h3>
<p>O excesso de nutrientes (nitrogênio e fósforo), vindo de esgoto e fertilizantes, favorece a proliferação de algas em lagos e represas ${tag('fato')}. Quando as algas morrem e se decompõem, o oxigênio da água diminui, causando morte de peixes ${tag('fato')}. É um exemplo de como substâncias úteis em um lugar causam dano em outro ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Papa Francisco, Laudato si\' (2015), capítulo I.' }],
    exercicios: [
      mc('A eutrofização é causada por excesso de:', ['Nutrientes', 'Oxigênio', 'Sal', 'Areia'], 0, 'N e P.'),
      mc('Na eutrofização, o oxigênio da água:', ['Diminui', 'Aumenta', 'Não muda', 'Vira ozônio'], 0, 'Decomposição.'),
      mc('Uma fonte de nutrientes é o:', ['Esgoto', 'Vidro', 'Ferro', 'Granito'], 0, 'Poluição.'),
      disc('Proponha medidas para prevenir a eutrofização de uma represa.', ['Causas', 'Medidas', 'Responsáveis', 'Monitoramento'])],
  },
}),

aula({
  id: 'qu5-3', titulo: 'Química e patrimônio cultural', duracao: '150 min',
  aprendera: ['Conhecer a contribuição da química para a conservação e a restauração', 'Conhecer técnicas de análise de obras', 'Explicar a degradação de materiais', 'Valorizar a preservação do patrimônio'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Pinturas, igrejas, livros e esculturas envelhecem. Como a química ajuda a entendê-los e preservá-los?</p>
<h3>Materiais e pigmentos</h3>
<p>Pigmentos históricos são substâncias químicas: o azul ultramar vinha do lápis-lazúli; o branco de chumbo é tóxico; o azul da Prússia foi um dos primeiros pigmentos sintéticos modernos, no século XVIII ${tag('fato')}. Identificar pigmentos ajuda a datar e autenticar obras ${tag('fato')}.</p>
<h3>Técnicas</h3>
<p>Fluorescência de raios X, espectroscopia, radiografia e reflectografia no infravermelho permitem analisar obras sem destruí-las ${tag('fato')}. A datação por carbono-14 aplica-se a materiais orgânicos, como madeira e tecidos ${tag('fato')}.</p>
<h3>Degradação</h3>
<p>Papel ácido amarelece e se fragiliza; metais corroem; pedras sofrem com poluição e umidade; o fogo destrói ${tag('fato')}. O incêndio do Museu Nacional, no Rio de Janeiro, em 2018, destruiu grande parte de um acervo de milhões de itens ${tag('fato')}.</p>
<h3>Conservação</h3>
<p>A conservação preventiva controla temperatura, umidade, luz e poluentes; a restauração intervém com materiais compatíveis e reversíveis ${tag('fato')}. Preservar o patrimônio sacro e cultural é preservar a memória de uma comunidade ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Pigmento', 'Substância colorida usada em tintas.'],
    ['Análise não destrutiva', 'Análise que não danifica o objeto estudado.'],
    ['Conservação preventiva', 'Controle do ambiente para evitar danos.'],
    ['Restauração', 'Intervenção para recuperar um objeto danificado.'],
    ['Reversibilidade', 'Possibilidade de desfazer uma intervenção.'],
  ],
  exemplos: `<p><strong>Um retábulo mineiro:</strong> restauradores analisam a douração e as tintas de um retábulo barroco de uma igreja de Minas Gerais, identificam camadas de repintura posteriores, estabilizam a madeira atacada por cupins e escolhem materiais reversíveis. Química, história da arte e fé se encontram no cuidado do patrimônio.</p>`,
  contexto: `<p><strong>No mundo:</strong> grandes museus mantêm laboratórios científicos de conservação ${tag('fato')}. <strong>No Brasil:</strong> o Instituto do Patrimônio Histórico e Artístico Nacional (Iphan), criado em 1937, protege o patrimônio cultural ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a restauração deve ser reversível', tag: 'argumento',
    premissas: ['O conhecimento técnico melhora com o tempo.', 'Intervenções irreversíveis podem impedir tratamentos melhores no futuro.', 'Materiais reversíveis permitem corrigir e aperfeiçoar.'],
    conclusao: 'Logo, a restauração deve preferir intervenções reversíveis e mínimas.',
    nota: 'É um princípio consagrado nas cartas internacionais de restauro.',
  },
  objecoes: [
    { objecao: 'Restaurar é deixar a obra "como nova".', tag: 'debate',
      resposta: 'A ética contemporânea da restauração busca preservar a autenticidade e a história do objeto, não apagá-la. Deixar "como nova" pode destruir camadas originais. O debate entre limpeza e preservação de pátina é antigo e delicado.' },
  ],
  aplicacao: `<p>Escolha um bem do patrimônio da sua região (igreja, casarão, documento, imagem sacra), descreva os materiais, os riscos de degradação e proponha medidas de conservação preventiva.</p>`,
  fonte: {
    obra: 'Iphan, publicações sobre conservação preventiva de bens culturais', link: null,
    orientacao: `<p>Observe os fatores de risco (luz, umidade, pragas, fogo) e as medidas recomendadas.</p>`,
  },
  perguntas: [
    { p: 'De onde vinha o azul ultramar?', r: 'Do lápis-lazúli.' },
    { p: 'O que é análise não destrutiva?', r: 'Análise que não danifica o objeto estudado.' },
    { p: 'Quando foi criado o Iphan?', r: 'Em 1937.' },
  ],
  exercicios: [
    mc('O carbono-14 data materiais:', ['Orgânicos', 'Metálicos', 'Pétreos', 'Vítreos'], 0, 'Aplicação.'),
    mc('O incêndio do Museu Nacional foi em:', ['2018', '2008', '1937', '2022'], 0, 'Rio de Janeiro.'),
    mc('O branco de chumbo é:', ['Tóxico', 'Inócuo', 'Orgânico', 'Moderno'], 0, 'Pigmento.'),
    mc('A conservação preventiva controla:', ['Temperatura, umidade, luz e poluentes', 'Só o preço', 'Só o público', 'Nada'], 0, 'Ambiente.'),
    mc('Intervenções de restauro devem ser preferencialmente:', ['Reversíveis', 'Irreversíveis', 'Invisíveis sempre', 'Totais'], 0, 'Ética.'),
    disc('Analise o bem cultural escolhido e proponha medidas.', ['Materiais', 'Riscos', 'Medidas', 'Valor cultural']),
  ],
  resumo: ['Pigmentos e datação.', 'Técnicas não destrutivas.', 'Degradação.', 'Conservação e restauração reversível.', 'Iphan (1937).'],
  referencias: [
    { texto: 'Iphan, publicações sobre conservação preventiva.' },
    { texto: 'Peter Atkins e Loretta Jones, Princípios de química.' },
    { texto: 'Primo Levi, A tabela periódica (1975).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do bem cultural', 'Ler a fonte indicada'],
  revisao: [['Ultramar', 'Lápis-lazúli.'], ['Reversível', 'Restauro.'], ['1937', 'Iphan.']],
  avancado: {
    texto: `<h3>Papel ácido</h3>
<p>Papéis produzidos com polpa de madeira a partir do século XIX frequentemente contêm compostos ácidos que degradam a celulose ${tag('fato')}. Bibliotecas usam processos de desacidificação, que neutralizam os ácidos e deixam uma reserva alcalina ${tag('fato')}. Papéis permanentes são produzidos hoje com controle de acidez ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Iphan, publicações sobre conservação de acervos documentais.' }],
    exercicios: [
      mc('O papel ácido degrada a:', ['Celulose', 'Tinta apenas', 'Capa metálica', 'Nada'], 0, 'Química.'),
      mc('A desacidificação deixa uma reserva:', ['Alcalina', 'Ácida', 'Neutra zero', 'Metálica'], 0, 'Proteção.'),
      mc('O problema do papel ácido aumentou a partir do século:', ['XIX', 'XII', 'V', 'XXI'], 0, 'Polpa de madeira.'),
      disc('Explique como a química do papel influencia a preservação de arquivos e bibliotecas.', ['Composição', 'Degradação', 'Tratamento', 'Prevenção'])],
  },
}),

aula({
  id: 'qu5-4', titulo: 'Pesquisa: um experimento seguro ou uma substância regional', duracao: '180 min',
  aprendera: ['Escolher um tema de investigação química viável e seguro', 'Planejar procedimento e registro', 'Analisar dados com cuidado', 'Redigir um relatório científico'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como investigar um tema de química de modo próprio, seguro e honesto?</p>
<h3>Escolha</h3>
<p>Duas vias: (a) um experimento caseiro seguro (indicador de repolho roxo, velocidade de dissolução e temperatura, cristalização de sal ou açúcar); (b) um estudo sobre substância ou processo de importância regional (cana e etanol, minério de ferro, qualidade da água de um rio, produção de cachaça, sabão artesanal) ${tag('interpretacao')}.</p>
<h3>Segurança</h3>
<p>Nada de experimentos com fogo, ácidos fortes, misturas de saneantes ou substâncias desconhecidas sem supervisão adequada ${tag('fato')}. Quando houver dúvida, escolha a via de estudo documental ${tag('argumento')}.</p>
<h3>Procedimento</h3>
<p>Pergunta; hipótese; materiais; procedimento; variáveis controladas; registro de dados em tabela com unidades; repetição; análise; conclusão ${tag('interpretacao')}.</p>
<h3>Relatório</h3>
<p>Estrutura: introdução e pergunta, materiais e métodos, resultados (tabelas e gráficos), discussão, conclusão proporcional, referências ${tag('interpretacao')}. Registre também o que deu errado ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Hipótese', 'Resposta provisória a ser testada.'],
    ['Variável controlada', 'Fator mantido constante no experimento.'],
    ['Repetição', 'Realização do teste mais de uma vez.'],
    ['Discussão', 'Parte do relatório que interpreta os resultados.'],
    ['Conclusão proporcional', 'Conclusão do tamanho que os dados permitem.'],
  ],
  exemplos: `<p><strong>Temperatura e dissolução:</strong> um estudante mede o tempo de dissolução de um comprimido efervescente em água a 10 °C, 25 °C e 40 °C, três vezes em cada, com o mesmo volume de água. Registra em tabela, faz um gráfico e conclui que, nas condições testadas, o tempo diminui com a temperatura, discutindo as fontes de erro.</p>`,
  contexto: `<p><strong>No mundo:</strong> feiras de ciências estimulam investigações de estudantes ${tag('fato')}. <strong>No Brasil:</strong> a Olimpíada Brasileira de Química e feiras como a Febrace incentivam projetos de estudantes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que registrar o que deu errado', tag: 'argumento',
    premissas: ['Erros e resultados inesperados revelam limites do procedimento.', 'Escondê-los dá uma imagem falsa da investigação.', 'A ciência avança também com resultados negativos.'],
    conclusao: 'Logo, um relatório honesto registra também o que deu errado.',
    nota: 'É a mesma honestidade exigida no caderno de laboratório.',
  },
  objecoes: [
    { objecao: 'Um experimento caseiro não tem valor científico.', tag: 'debate',
      resposta: 'Não substitui pesquisa profissional, mas exercita o método: pergunta, controle, medida, análise e honestidade. Bem feito, ensina mais que muitas aulas teóricas.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: via escolhida, pergunta, hipótese, materiais, procedimento seguro (ou plano de estudo documental), cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'Sociedade Brasileira de Química, Química Nova na Escola (artigos de experimentação)', link: null,
    orientacao: `<p>Procure um artigo com experimento seguro relacionado ao seu tema e adapte-o com cuidado.</p>`,
  },
  perguntas: [
    { p: 'Quais as duas vias da pesquisa?', r: 'Um experimento caseiro seguro ou um estudo sobre substância ou processo regional.' },
    { p: 'O que é variável controlada?', r: 'Um fator mantido constante no experimento.' },
    { p: 'Por que repetir medidas?', r: 'Para reduzir o efeito de erros aleatórios.' },
  ],
  exercicios: [
    mc('Experimentos com ácidos fortes em casa são:', ['Inadequados sem supervisão', 'Recomendados', 'Obrigatórios', 'Inofensivos'], 0, 'Segurança.'),
    mc('A tabela de dados deve ter:', ['Unidades', 'Só números', 'Cores', 'Nada'], 0, 'Registro.'),
    mc('A conclusão deve ser:', ['Proporcional aos dados', 'A mais ousada', 'Escrita antes', 'Sem dados'], 0, 'Honestidade.'),
    mc('A Febrace é uma:', ['Feira de ciências', 'Agência reguladora', 'Indústria', 'Lei'], 0, 'Brasil.'),
    mc('Resultados negativos devem ser:', ['Registrados', 'Escondidos', 'Inventados', 'Apagados'], 0, 'Ciência.'),
    disc('Apresente o pré-projeto completo.', ['Via e pergunta', 'Procedimento seguro', 'Cronograma', 'Rubrica']),
  ],
  resumo: ['Duas vias.', 'Segurança primeiro.', 'Procedimento e controle.', 'Registro e repetição.', 'Relatório honesto.'],
  referencias: [
    { texto: 'Sociedade Brasileira de Química, Química Nova na Escola.' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
    { texto: 'Peter Atkins e Loretta Jones, Princípios de química.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a pesquisa em quatro semanas'],
  revisao: [['Controle', 'Variáveis.'], ['Repetição', 'Erro aleatório.'], ['Honestidade', 'Registrar erros.']],
  avancado: {
    texto: `<h3>Gráficos</h3>
<p>Um bom gráfico tem título, eixos com grandeza e unidade, escala adequada e pontos experimentais distintos de linhas de tendência ${tag('fato')}. A variável independente costuma ir no eixo horizontal ${tag('fato')}. Não se devem ligar pontos de modo a sugerir precisão maior que a dos dados ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Peter Atkins e Loretta Jones, Princípios de química, apêndice sobre gráficos.' }],
    exercicios: [
      mc('A variável independente costuma ir no eixo:', ['Horizontal', 'Vertical', 'Nenhum', 'Diagonal'], 0, 'Convenção.'),
      mc('Os eixos devem indicar:', ['Grandeza e unidade', 'Só cores', 'Só números', 'Nada'], 0, 'Clareza.'),
      mc('Ligar pontos pode sugerir:', ['Precisão falsa', 'Mais dados', 'Nada', 'Honestidade'], 0, 'Cuidado.'),
      disc('Faça o gráfico dos dados do exemplo da aula (tempo × temperatura) com todos os elementos.', ['Título', 'Eixos', 'Pontos', 'Interpretação'])],
  },
}),

avaliacao('qu5-5', 'Avaliação integradora de Química', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Química. Reúne questões de todos os módulos (QU1 a QU5) e pede duas discursivas de síntese. A conclusão do percurso exige também a pesquisa de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça um problema de estequiometria e um cálculo de pH.</li><li>Releia a rubrica da pesquisa (qu5-4).</li></ul>`,
[
  disc('Analise um processo químico do cotidiano ou da sua região (por exemplo, produção de etanol ou tratamento de água): reações envolvidas, estequiometria simples, energia, segurança e impacto ambiental.', ['Reações', 'Cálculo', 'Energia e segurança', 'Ambiente']),
  disc('Responda, com base em Aristóteles ou Tomás, em Lavoisier e na Laudato si\', à pergunta: o que a química nos ensina sobre a natureza da matéria e sobre nossa responsabilidade com ela?', ['Filosofia da matéria', 'Lavoisier', 'Laudato si\'', 'Argumentação']),
]),
];
