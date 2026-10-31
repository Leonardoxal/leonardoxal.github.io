// Relações Internacionais I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Relações Internacionais).
// O que são as relações internacionais; conceitos básicos; leitura de fontes diplomáticas; casos, comparação e dados.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ri1-1', titulo: 'O que são as relações internacionais: Estados, soberania e bem comum', duracao: '150 min',
  aprendera: ['Definir o objeto das relações internacionais', 'Explicar soberania e sistema internacional', 'Distinguir fato, interpretação e juízo normativo', 'Conhecer a noção de bem comum universal'],
  prereq: ['Lógica (módulo M4)'],
  explicacao: `
<h3>O problema</h3>
<p>Guerras, acordos comerciais, migrações e mudanças climáticas atravessam fronteiras. Como estudar as relações entre Estados e povos?</p>
<h3>Objeto</h3>
<p>As relações internacionais estudam as interações entre Estados, organizações internacionais, empresas, igrejas e outros atores além das fronteiras nacionais ${tag('fato')}. Como disciplina acadêmica, consolidaram-se após a Primeira Guerra Mundial; a primeira cátedra é geralmente datada de 1919, em Aberystwyth, no País de Gales ${tag('fato')}.</p>
<h3>Soberania</h3>
<p>Jean Bodin, em Os seis livros da República (1576), definiu a soberania como poder absoluto e perpétuo de uma república ${tag('fato')}. Os tratados da Paz de Vestfália (1648) são tradicionalmente vistos como marco do sistema de Estados soberanos, embora historiadores discutam esse papel ${tag('debate')}.</p>
<h3>Sistema internacional</h3>
<p>Diz-se que o sistema internacional é "anárquico" no sentido técnico: não há autoridade acima dos Estados com poder de impor decisões, o que não significa caos ${tag('fato')}.</p>
<h3>Bem comum universal</h3>
<p>São João XXIII, na Pacem in terris (1963), afirmou que o bem comum universal exige uma autoridade pública de alcance mundial, estabelecida por consenso e respeitando a subsidiariedade ${tag('doutrina')}. A doutrina social pede que as nações se reconheçam como membros de uma família humana ${tag('doutrina')}.</p>
<h3>Níveis</h3>
<p>"O país X invadiu o país Y" é fato; "invadiu por razões econômicas" é interpretação; "a invasão é injusta" é juízo normativo ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Soberania', 'Poder supremo de um Estado sobre seu território e independente de outros.'],
    ['Sistema internacional', 'Conjunto dos atores e de suas relações no plano mundial.'],
    ['Anarquia internacional', 'Ausência de autoridade acima dos Estados.'],
    ['Ator internacional', 'Entidade que age no plano internacional (Estado, organização, empresa).'],
    ['Bem comum universal', 'Bem de toda a família humana, além de cada nação.'],
  ],
  exemplos: `<p><strong>Uma notícia, três níveis:</strong> "O Brasil votou a favor de uma resolução na Assembleia Geral da ONU" (fato). "O voto buscou aproximar o país de parceiros comerciais" (interpretação, a verificar). "O voto foi correto" (juízo normativo, a argumentar). Ler bem o noticiário exige separar os três.</p>`,
  contexto: `<p><strong>No mundo:</strong> a ONU tem 193 Estados-membros ${tag('fato')}. <strong>No Brasil:</strong> o Ministério das Relações Exteriores (Itamaraty) conduz a política externa, e há cursos de graduação em Relações Internacionais em várias universidades ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que as relações entre nações estão sujeitas à moral', tag: 'argumento',
    premissas: ['Os Estados são comunidades de pessoas e agem por meio de pessoas.', 'As ações humanas estão sujeitas à lei moral.', 'A lei natural vale também entre os povos (direito das gentes).'],
    conclusao: 'Logo, as relações internacionais não estão fora da moral.',
    nota: 'O realismo político questiona esse ponto, como se verá na etapa de escolas.',
  },
  objecoes: [
    { objecao: 'Na política internacional só conta o poder; moral é ingenuidade.', tag: 'debate',
      resposta: 'O poder é real e não deve ser ignorado. Mas Estados também invocam direitos, tratados e justiça, e as opiniões públicas os cobram por isso. A tradição clássica sustenta que prudência política e moral não se opõem.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: selecione dez trechos de notícias internacionais e classifique cada afirmação como fato, interpretação ou juízo normativo, justificando.</p>`,
  fonte: {
    obra: 'São João XXIII, Pacem in terris (1963), quarta parte', link: null,
    orientacao: `<p>Observe o argumento sobre a necessidade de uma autoridade pública universal e o princípio de subsidiariedade.</p>`,
  },
  perguntas: [
    { p: 'Como Bodin definiu a soberania?', r: 'Como poder absoluto e perpétuo de uma república.' },
    { p: 'O que significa "anarquia internacional"?', r: 'Ausência de autoridade acima dos Estados, não caos.' },
    { p: 'O que pede a Pacem in terris sobre o bem comum universal?', r: 'Uma autoridade pública mundial estabelecida por consenso e respeitando a subsidiariedade.' },
  ],
  exercicios: [
    mc('Os seis livros da República é de:', ['Bodin', 'Maquiavel', 'Kant', 'Grócio'], 0, '1576.'),
    mc('A Paz de Vestfália é de:', ['1648', '1576', '1815', '1945'], 0, 'Tratados.'),
    mc('A Pacem in terris é de:', ['1963', '1891', '1991', '2015'], 0, 'João XXIII.'),
    mc('"A invasão é injusta" é:', ['Juízo normativo', 'Fato', 'Dado estatístico', 'Interpretação econômica'], 0, 'Nível.'),
    mc('A ONU tem quantos Estados-membros?', ['193', '50', '120', '250'], 0, 'Dado.'),
    disc('Classifique as afirmações das dez notícias.', ['Fatos', 'Interpretações', 'Juízos', 'Justificativas']),
  ],
  resumo: ['Atores e interações.', 'Soberania (Bodin, 1576).', 'Vestfália (1648).', 'Anarquia técnica.', 'Bem comum universal.'],
  referencias: [
    { texto: 'São João XXIII, Pacem in terris (1963).' },
    { texto: 'Santo Agostinho, A Cidade de Deus, livro XIX.', livro: 'agostinho-cidade' },
    { texto: 'Raymond Aron, Paz e guerra entre as nações (1962).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação', 'Ler a fonte indicada'],
  revisao: [['Soberania', 'Bodin.'], ['1648', 'Vestfália.'], ['Anarquia', 'Sem autoridade superior.']],
  avancado: {
    texto: `<h3>Subsidiariedade no plano internacional</h3>
<p>O princípio de subsidiariedade, formulado por Pio XI na Quadragesimo anno (1931), diz que uma comunidade superior não deve absorver o que a inferior pode fazer, mas ajudá-la ${tag('doutrina')}. Aplicado ao plano internacional, limita as autoridades mundiais aos problemas que os Estados não conseguem resolver sozinhos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'São João XXIII, Pacem in terris (1963), nn. 140–141.' }],
    exercicios: [
      mc('O princípio de subsidiariedade foi formulado na:', ['Quadragesimo anno', 'Rerum novarum', 'Pacem in terris', 'Laudato si\''], 0, '1931.'),
      mc('A subsidiariedade impede que a comunidade superior:', ['Absorva o que a inferior pode fazer', 'Ajude', 'Exista', 'Legisle'], 0, 'Princípio.'),
      mc('No plano mundial, ela limita a autoridade aos problemas:', ['Que os Estados não resolvem sozinhos', 'De todos os tipos', 'Locais', 'Nenhum'], 0, 'Aplicação.'),
      disc('Dê um exemplo de problema que exige cooperação internacional e outro que deve ficar com cada Estado.', ['Exemplo global', 'Exemplo nacional', 'Subsidiariedade', 'Justificativa'])],
  },
}),

aula({
  id: 'ri1-2', titulo: 'Conceitos básicos: poder, diplomacia, tratados e organizações', duracao: '150 min',
  aprendera: ['Distinguir formas de poder', 'Conhecer as funções da diplomacia', 'Explicar o valor jurídico dos tratados', 'Conhecer a estrutura básica da ONU'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Que palavras precisamos dominar para entender o noticiário internacional com precisão?</p>
<h3>Poder e interesse</h3>
<p>Poder é a capacidade de influenciar outros atores ${tag('fato')}. Joseph Nye distinguiu o "poder duro" (militar e econômico) do "poder brando" (atração cultural e de valores) ${tag('fato')}. Interesse nacional é o conjunto de objetivos que um Estado considera vitais ${tag('fato')}.</p>
<h3>Diplomacia</h3>
<p>A diplomacia conduz as relações entre Estados por negociação, representação e informação ${tag('fato')}. A Convenção de Viena sobre Relações Diplomáticas (1961) regula embaixadas e imunidades ${tag('fato')}.</p>
<h3>Tratados</h3>
<p>Tratados são acordos escritos entre Estados regidos pelo direito internacional ${tag('fato')}. O princípio pacta sunt servanda ("os pactos devem ser cumpridos") está na Convenção de Viena sobre o Direito dos Tratados (1969) ${tag('fato')}.</p>
<h3>Organizações</h3>
<p>A ONU foi criada em 1945 pela Carta de São Francisco ${tag('fato')}. O Conselho de Segurança tem cinco membros permanentes com direito de veto (Estados Unidos, Rússia, China, Reino Unido e França) ${tag('fato')}. Há também organizações regionais, como o Mercosul (1991) ${tag('fato')}.</p>
<h3>Geopolítica</h3>
<p>Geopolítica estuda a relação entre espaço geográfico e poder ${tag('fato')}.</p>`,
  vocabulario: [
    ['Poder brando', 'Influência por atração cultural e de valores.'],
    ['Interesse nacional', 'Objetivos considerados vitais por um Estado.'],
    ['Tratado', 'Acordo escrito entre Estados regido pelo direito internacional.'],
    ['Pacta sunt servanda', 'Princípio de que os pactos devem ser cumpridos.'],
    ['Veto', 'Poder de impedir uma decisão do Conselho de Segurança.'],
  ],
  exemplos: `<p><strong>O veto:</strong> uma resolução do Conselho de Segurança recebe a maioria dos votos, mas um membro permanente vota contra; a resolução não é aprovada. O mecanismo, criado em 1945, reflete o poder das potências vencedoras da Segunda Guerra e é alvo de propostas de reforma.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Carta da ONU foi assinada em 26 de junho de 1945, em São Francisco ${tag('fato')}. <strong>No Brasil:</strong> o Brasil é membro fundador da ONU e, por tradição, o chefe da delegação brasileira faz o primeiro discurso do debate geral da Assembleia Geral ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que cumprir tratados é exigência de justiça', tag: 'argumento',
    premissas: ['Um tratado é uma promessa entre comunidades políticas.', 'Cumprir promessas é exigência de justiça e da confiança mútua.', 'Sem confiança, a cooperação entre Estados se torna impossível.'],
    conclusao: 'Logo, pacta sunt servanda tem fundamento moral, não só jurídico.',
    nota: 'O direito admite exceções, como mudança fundamental das circunstâncias, em condições restritas.',
  },
  objecoes: [
    { objecao: 'A ONU é inútil, pois não impede guerras.', tag: 'debate',
      resposta: 'A ONU não impediu muitas guerras, sobretudo quando potências com veto estão envolvidas. Mas coordena ajuda humanitária, missões de paz, saúde e agricultura, e oferece um fórum permanente. Avaliá-la exige distinguir suas funções.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: glossário de vinte termos de relações internacionais, cada um com um exemplo atual verificável.</p>`,
  fonte: {
    obra: 'Carta das Nações Unidas (1945), capítulos I e V', link: null,
    orientacao: `<p>Observe os propósitos da ONU e a composição e o funcionamento do Conselho de Segurança.</p>`,
  },
  perguntas: [
    { p: 'O que é poder brando?', r: 'Influência por atração cultural e de valores.' },
    { p: 'O que significa pacta sunt servanda?', r: 'Que os pactos devem ser cumpridos.' },
    { p: 'Quais os membros permanentes do Conselho de Segurança?', r: 'Estados Unidos, Rússia, China, Reino Unido e França.' },
  ],
  exercicios: [
    mc('A ONU foi criada em:', ['1945', '1919', '1961', '1991'], 0, 'Carta de São Francisco.'),
    mc('A Convenção de Viena sobre Relações Diplomáticas é de:', ['1961', '1969', '1945', '1815'], 0, 'Embaixadas.'),
    mc('O Mercosul foi criado em:', ['1991', '1945', '2001', '1969'], 0, 'Tratado de Assunção.'),
    mc('A distinção entre poder duro e brando é de:', ['Joseph Nye', 'Bodin', 'Kant', 'Clausewitz'], 0, 'Conceito.'),
    mc('Quantos membros permanentes tem o Conselho de Segurança?', ['5', '10', '15', '193'], 0, 'Veto.'),
    disc('Faça o glossário de vinte termos com exemplos.', ['Termos', 'Definições', 'Exemplos', 'Verificabilidade']),
  ],
  resumo: ['Poder duro e brando.', 'Diplomacia (Viena, 1961).', 'Tratados (Viena, 1969).', 'ONU (1945) e veto.', 'Geopolítica.'],
  referencias: [
    { texto: 'Carta das Nações Unidas (1945).' },
    { texto: 'Raymond Aron, Paz e guerra entre as nações (1962).' },
    { texto: 'Amado Luiz Cervo e Clodoaldo Bueno, História da política exterior do Brasil (1992).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler a fonte indicada'],
  revisao: [['Nye', 'Poder brando.'], ['Pacta', 'Cumprir.'], ['1945', 'ONU.']],
  avancado: {
    texto: `<h3>Geopolítica clássica</h3>
<p>Halford Mackinder propôs em 1904 que o controle do "coração da terra" (a massa central da Eurásia) seria chave do poder mundial ${tag('fato')}. Alfred Mahan, no fim do século XIX, enfatizou o poder naval ${tag('fato')}. As teorias geopolíticas clássicas influenciaram estrategistas, mas são criticadas por determinismo geográfico ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Raymond Aron, Paz e guerra entre as nações (1962), parte sobre a geopolítica.' }],
    exercicios: [
      mc('A teoria do "coração da terra" é de:', ['Mackinder', 'Mahan', 'Nye', 'Bodin'], 0, '1904.'),
      mc('Mahan enfatizou o poder:', ['Naval', 'Aéreo', 'Cultural', 'Religioso'], 0, 'Mar.'),
      mc('Uma crítica comum à geopolítica clássica é o:', ['Determinismo geográfico', 'Excesso de dados', 'Uso de mapas', 'Nada'], 0, 'Debate.'),
      disc('Analise a posição geográfica do Brasil (Atlântico Sul, Amazônia, fronteiras) do ponto de vista geopolítico.', ['Posição', 'Recursos', 'Vizinhos', 'Avaliação'])],
  },
}),

aula({
  id: 'ri1-3', titulo: 'Ler fontes diplomáticas: tratados, discursos e documentos', duracao: '150 min',
  aprendera: ['Identificar tipos de fontes diplomáticas', 'Aplicar um roteiro de leitura crítica', 'Reconhecer a linguagem diplomática', 'Analisar um tratado histórico brasileiro'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Documentos diplomáticos são escritos com cuidado para dizer e não dizer. Como lê-los criticamente?</p>
<h3>Tipos</h3>
<p>Tratados, comunicados conjuntos, notas diplomáticas, discursos em organizações internacionais, telegramas de embaixadas e memórias de diplomatas ${tag('fato')}.</p>
<h3>Roteiro</h3>
<p>1. Autor e destinatários. 2. Data e contexto. 3. Objetivos declarados e prováveis. 4. Argumentos e valores invocados. 5. O que é dito, o que é sugerido e o que é omitido. 6. Efeitos e recepção ${tag('interpretacao')}.</p>
<h3>Linguagem</h3>
<p>Expressões como "conversas francas" podem indicar desacordo; "profunda preocupação" é crítica moderada; a ordem dos temas sinaliza prioridades ${tag('interpretacao')}.</p>
<h3>Um caso brasileiro</h3>
<p>O Tratado de Madri (1750), entre Portugal e Espanha, substituiu em grande parte a linha de Tordesilhas pelo princípio do uti possidetis, segundo o qual cada parte fica com o que efetivamente ocupa ${tag('fato')}. O diplomata brasileiro Alexandre de Gusmão teve papel destacado na negociação ${tag('fato')}.</p>`,
  vocabulario: [
    ['Nota diplomática', 'Comunicação oficial escrita entre governos.'],
    ['Comunicado conjunto', 'Declaração assinada por dois ou mais governos.'],
    ['Uti possidetis', 'Princípio de que cada parte fica com o que ocupa.'],
    ['Linha de Tordesilhas', 'Divisão de 1494 entre Portugal e Espanha.'],
    ['Leitura crítica', 'Leitura atenta a autor, contexto, intenção e omissões.'],
  ],
  exemplos: `<p><strong>Um comunicado:</strong> após uma visita presidencial, o comunicado fala longamente de cooperação em energia e só no fim menciona "diálogo construtivo sobre direitos humanos". A ordem e a fórmula sugerem que o segundo tema foi tratado com cautela, ou que houve divergência. A leitura crítica registra a hipótese sem tomá-la como certa.</p>`,
  contexto: `<p><strong>No mundo:</strong> arquivos diplomáticos de muitos países são abertos aos pesquisadores após prazos legais ${tag('fato')}. <strong>No Brasil:</strong> o Arquivo Histórico do Itamaraty e a Fundação Alexandre de Gusmão (Funag) publicam documentos e estudos sobre a diplomacia brasileira ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ler o que não está escrito sem inventar', tag: 'argumento',
    premissas: ['Documentos diplomáticos usam fórmulas convencionais e omissões calculadas.', 'O leitor atento percebe sinais de intenção nessas fórmulas.', 'Mas interpretações de omissões são hipóteses, não fatos.'],
    conclusao: 'Logo, a leitura crítica deve registrar hipóteses como hipóteses e buscar confirmação em outras fontes.',
    nota: 'É a mesma honestidade exigida na crítica histórica de documentos.',
  },
  objecoes: [
    { objecao: 'Documentos oficiais só trazem propaganda; não servem para nada.', tag: 'argumento',
      resposta: 'Trazem a posição oficial, que é um fato relevante, e revelam prioridades e linguagem. Lidos em conjunto com outras fontes, permitem reconstruir decisões. Descartá-los empobrece a análise.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise um tratado, comunicado ou discurso diplomático (por exemplo, um discurso brasileiro na abertura da Assembleia Geral da ONU) seguindo o roteiro de seis pontos.</p>`,
  fonte: {
    obra: 'Tratado de Madri (1750), artigos iniciais', link: null,
    orientacao: `<p>Observe a justificativa para abandonar Tordesilhas e o critério da ocupação efetiva.</p>`,
  },
  perguntas: [
    { p: 'Quais os seis pontos do roteiro de leitura?', r: 'Autor e destinatários, data e contexto, objetivos, argumentos, o dito e o omitido, efeitos.' },
    { p: 'O que é o uti possidetis?', r: 'O princípio de que cada parte fica com o que efetivamente ocupa.' },
    { p: 'Quem teve papel destacado no Tratado de Madri?', r: 'Alexandre de Gusmão.' },
  ],
  exercicios: [
    mc('O Tratado de Madri é de:', ['1750', '1494', '1648', '1822'], 0, 'Portugal e Espanha.'),
    mc('Tordesilhas é de:', ['1494', '1750', '1500', '1648'], 0, 'Linha.'),
    mc('"Profunda preocupação" costuma indicar:', ['Crítica moderada', 'Aprovação', 'Declaração de guerra', 'Nada'], 0, 'Linguagem.'),
    mc('A Funag leva o nome de:', ['Alexandre de Gusmão', 'Rio Branco', 'José Bonifácio', 'Rui Barbosa'], 0, 'Fundação.'),
    mc('Interpretações de omissões são:', ['Hipóteses', 'Fatos', 'Leis', 'Dogmas'], 0, 'Honestidade.'),
    disc('Analise o documento escolhido com o roteiro de seis pontos.', ['Autor e contexto', 'Objetivos e argumentos', 'Dito e omitido', 'Efeitos']),
  ],
  resumo: ['Tipos de fontes.', 'Roteiro de seis pontos.', 'Linguagem diplomática.', 'Madri (1750) e uti possidetis.', 'Hipóteses como hipóteses.'],
  referencias: [
    { texto: 'Amado Luiz Cervo e Clodoaldo Bueno, História da política exterior do Brasil (1992).' },
    { texto: 'Rubens Ricupero, A diplomacia na construção do Brasil (1750–2016) (2017).' },
    { texto: 'Raymond Aron, Paz e guerra entre as nações (1962).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['1750', 'Madri.'], ['Uti possidetis', 'Ocupação.'], ['Roteiro', 'Seis pontos.']],
  avancado: {
    texto: `<h3>Rio Branco e a arbitragem</h3>
<p>José Maria da Silva Paranhos Júnior, o Barão do Rio Branco, defendeu o Brasil em arbitragens internacionais, como a questão de Palmas com a Argentina (laudo de 1895) e a do Amapá com a França (laudo de 1900) ${tag('fato')}. Como ministro das Relações Exteriores (1902–1912), negociou o Tratado de Petrópolis (1903) sobre o Acre ${tag('fato')}. É considerado patrono da diplomacia brasileira ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Rubens Ricupero, A diplomacia na construção do Brasil (1750–2016) (2017).' }],
    exercicios: [
      mc('O laudo da questão do Amapá é de:', ['1900', '1895', '1903', '1750'], 0, 'França.'),
      mc('O Tratado de Petrópolis tratou do:', ['Acre', 'Amapá', 'Rio Grande do Sul', 'Uruguai'], 0, '1903.'),
      mc('Rio Branco foi ministro de:', ['1902 a 1912', '1889 a 1899', '1922 a 1930', '1945 a 1950'], 0, 'Período.'),
      disc('Explique por que a solução pacífica das fronteiras é considerada marca da diplomacia brasileira.', ['Casos', 'Métodos', 'Resultados', 'Avaliação'])],
  },
}),

aula({
  id: 'ri1-4', titulo: 'Estudo de caso, comparação e dados internacionais', duracao: '150 min',
  aprendera: ['Usar o método do estudo de caso', 'Comparar casos com critérios explícitos', 'Usar indicadores e fontes de dados internacionais', 'Ler rankings com cautela'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como tirar conclusões confiáveis sobre a política internacional, onde não se fazem experimentos?</p>
<h3>Estudo de caso</h3>
<p>O estudo de caso examina em profundidade um episódio (uma crise, uma negociação, uma guerra) para entender seus mecanismos ${tag('fato')}. É útil para explicar como algo aconteceu, mas generaliza com cuidado ${tag('interpretacao')}.</p>
<h3>Comparação</h3>
<p>Comparar casos semelhantes com resultados diferentes (ou diferentes com resultados semelhantes) ajuda a identificar fatores relevantes ${tag('fato')}. Os critérios de comparação devem ser explícitos ${tag('argumento')}.</p>
<h3>Dados</h3>
<p>Indicadores comuns: PIB, comércio exterior, gastos militares, índice de desenvolvimento humano (IDH), fluxos de refugiados ${tag('fato')}. Fontes: ONU e suas agências, Banco Mundial, FMI, o Instituto Internacional de Pesquisa para a Paz de Estocolmo (SIPRI), o Acnur ${tag('fato')}. No Brasil, o Ministério do Desenvolvimento, Indústria, Comércio e Serviços divulga dados de comércio exterior ${tag('fato')}.</p>
<h3>Cautelas</h3>
<p>Rankings dependem de critérios e ponderações escolhidos por seus autores; é preciso ler a metodologia ${tag('argumento')}. Dados de países diferentes nem sempre são comparáveis ${tag('fato')}.</p>`,
  vocabulario: [
    ['Estudo de caso', 'Exame aprofundado de um episódio.'],
    ['Método comparativo', 'Comparação sistemática de casos para identificar fatores.'],
    ['Indicador', 'Medida quantitativa de um fenômeno.'],
    ['IDH', 'Índice de Desenvolvimento Humano, que combina renda, educação e saúde.'],
    ['Metodologia', 'Conjunto de critérios e procedimentos de uma medida.'],
  ],
  exemplos: `<p><strong>Comparar dois acordos:</strong> um estudante compara duas negociações comerciais do Mercosul, uma concluída e outra fracassada, com os mesmos critérios: interesses envolvidos, contexto econômico, pressões internas e atores. A comparação sugere hipóteses sobre por que uma deu certo e a outra não, a verificar em mais casos.</p>`,
  contexto: `<p><strong>No mundo:</strong> o SIPRI publica anualmente dados sobre gastos militares mundiais ${tag('fato')}. <strong>No Brasil:</strong> o Ipea produz estudos sobre inserção internacional e comércio ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que comparar exige critérios explícitos', tag: 'argumento',
    premissas: ['Sem critérios, escolhemos traços que confirmam o que já pensávamos.', 'Critérios explícitos permitem que outros verifiquem e contestem a comparação.', 'A verificabilidade é condição do conhecimento compartilhado.'],
    conclusao: 'Logo, toda comparação séria deve declarar seus critérios.',
    nota: 'É uma forma de combater o viés de confirmação.',
  },
  objecoes: [
    { objecao: 'Números dizem tudo; basta olhar os dados.', tag: 'debate',
      resposta: 'Dados são indispensáveis, mas dependem de definições, coleta e contexto. Sem interpretação e sem conhecer o caso, números enganam. A boa análise une dados e conhecimento qualitativo.' },
  ],
  aplicacao: `<p>Escolha dois países e compare-os com cinco indicadores de fontes confiáveis (citando fonte e ano), explicando o que os dados mostram e o que não mostram.</p>`,
  fonte: {
    obra: 'Programa das Nações Unidas para o Desenvolvimento (PNUD), Relatório de Desenvolvimento Humano, nota metodológica do IDH', link: null,
    orientacao: `<p>Observe quais dimensões compõem o IDH e como são combinadas.</p>`,
  },
  perguntas: [
    { p: 'Para que serve o estudo de caso?', r: 'Para entender em profundidade os mecanismos de um episódio.' },
    { p: 'Que dimensões compõem o IDH?', r: 'Renda, educação e saúde.' },
    { p: 'Por que ler a metodologia de um ranking?', r: 'Porque o resultado depende dos critérios e ponderações escolhidos.' },
  ],
  exercicios: [
    mc('O SIPRI publica dados sobre:', ['Gastos militares', 'Música', 'Clima apenas', 'Esportes'], 0, 'Estocolmo.'),
    mc('O IDH combina:', ['Renda, educação e saúde', 'Só renda', 'Só exército', 'Só território'], 0, 'PNUD.'),
    mc('O Acnur trata de:', ['Refugiados', 'Comércio', 'Petróleo', 'Patentes'], 0, 'Agência.'),
    mc('Comparar sem critérios favorece:', ['Viés de confirmação', 'Objetividade', 'Precisão', 'Nada'], 0, 'Risco.'),
    mc('Estudos de caso generalizam:', ['Com cuidado', 'Sempre', 'Nunca servem', 'Automaticamente'], 0, 'Limite.'),
    disc('Compare os dois países com cinco indicadores.', ['Indicadores', 'Fontes e anos', 'Interpretação', 'Limites']),
  ],
  resumo: ['Estudo de caso.', 'Comparação com critérios.', 'Indicadores e fontes.', 'Rankings: metodologia.', 'Dados + contexto.'],
  referencias: [
    { texto: 'PNUD, Relatório de Desenvolvimento Humano (notas metodológicas).' },
    { texto: 'Raymond Aron, Paz e guerra entre as nações (1962).' },
    { texto: 'Amado Luiz Cervo e Clodoaldo Bueno, História da política exterior do Brasil (1992).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação', 'Ler a fonte indicada'],
  revisao: [['Caso', 'Profundidade.'], ['Critérios', 'Explícitos.'], ['IDH', 'Renda, educação, saúde.']],
  avancado: {
    texto: `<h3>Os métodos de Mill</h3>
<p>John Stuart Mill, no Sistema de lógica (1843), descreveu o método da concordância (casos diferentes com um fator comum e o mesmo resultado) e o da diferença (casos semelhantes que diferem em um fator e no resultado) ${tag('fato')}. Esses métodos inspiram a comparação em ciências sociais, com o limite de que fatores raramente estão isolados ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'John Stuart Mill, Sistema de lógica (1843), livro III.' }],
    exercicios: [
      mc('O Sistema de lógica de Mill é de:', ['1843', '1789', '1919', '1962'], 0, 'Data.'),
      mc('O método da diferença compara casos:', ['Semelhantes que diferem em um fator', 'Totalmente diferentes', 'Idênticos', 'Imaginários'], 0, 'Definição.'),
      mc('Um limite dos métodos de Mill é que fatores:', ['Raramente estão isolados', 'Sempre estão isolados', 'Não existem', 'São números'], 0, 'Ciências sociais.'),
      disc('Aplique o método da diferença a dois casos internacionais de sua escolha.', ['Casos', 'Fator', 'Resultado', 'Limites'])],
  },
}),

avaliacao('ri1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o objeto, os conceitos e os métodos das relações internacionais, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário.</li><li>Releia a análise do documento diplomático.</li></ul>`,
[
  disc('Analise uma notícia internacional recente: separe fatos, interpretações e juízos normativos, identifique os atores, os conceitos envolvidos (soberania, poder, tratado, organização) e as fontes de dados que poderiam esclarecê-la.', ['Níveis', 'Atores e conceitos', 'Fontes', 'Conclusão']),
  disc('Explique, com a Pacem in terris e um conceito realista, a tensão entre interesse nacional e bem comum universal, usando um exemplo da política externa brasileira.', ['Bem comum universal', 'Interesse nacional', 'Exemplo brasileiro', 'Síntese']),
]),
];
