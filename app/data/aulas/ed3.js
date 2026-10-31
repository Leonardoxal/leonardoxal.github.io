// Educação III — correntes pedagógicas e grandes debates (etapas 6 e 7 do percurso de Educação).
// Educação clássica e Escola Nova; comportamentalismo, construtivismo e pedagogia crítica;
// direito dos pais, liberdade de ensino e educação domiciliar; alfabetização e telas.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ed3-1', titulo: 'Educação clássica e Escola Nova: o conteúdo ou o aluno no centro?', duracao: '150 min',
  aprendera: ['Caracterizar a educação clássica e liberal', 'Caracterizar a Escola Nova e o progressivismo', 'Conhecer o Manifesto dos Pioneiros (1932)', 'Avaliar a oposição entre centrar no conteúdo e centrar no aluno'],
  prereq: ['Educação II (módulo ED2)'],
  explicacao: `
<h3>O problema</h3>
<p>Uma escola deve transmitir a herança de conhecimentos da civilização ou partir dos interesses e experiências do aluno? Essa oposição marcou o século XX.</p>
<h3>Educação clássica</h3>
<p>A educação clássica e liberal organiza o ensino em torno das artes liberais, das grandes obras e das línguas, com o professor como mestre que transmite e corrige ${tag('fato')}. Em As ferramentas perdidas do aprendizado (1947), Dorothy L. Sayers propôs reorganizar a escola pelo trivium, associando gramática, lógica e retórica a fases do desenvolvimento da criança ${tag('fato')}. Essa associação a fases é uma proposta dela, não uma doutrina medieval ${tag('interpretacao')}.</p>
<h3>Escola Nova</h3>
<p>A Escola Nova, ou progressivismo, deslocou o centro para o aluno: atividade, interesse, experiência e vida em comunidade, com o professor como orientador ${tag('fato')}. Dewey e Montessori são referências, embora diferentes entre si ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>O Manifesto dos Pioneiros da Educação Nova (1932), redigido por Fernando de Azevedo e assinado por Anísio Teixeira, Lourenço Filho e outros, defendeu uma escola pública, gratuita, laica, obrigatória e única ${tag('fato')}. Educadores católicos, como Alceu Amoroso Lima, opuseram-se à laicidade proposta e defenderam o ensino religioso e a liberdade das famílias ${tag('fato')}.</p>
<h3>A síntese possível</h3>
<p>Muitos autores sustentam que a oposição é parcialmente falsa: há conteúdos que todos devem aprender, e eles são mais bem aprendidos com a atividade do aluno ${tag('interpretacao')}. A pesquisa cognitiva indica que o pensamento crítico depende de conhecimento prévio sólido, o que limita propostas que desprezam o conteúdo ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Educação clássica', 'Ensino centrado nas artes liberais, nas grandes obras e na transmissão da herança cultural.'],
    ['Escola Nova', 'Movimento que coloca o aluno, sua atividade e seus interesses no centro.'],
    ['Progressivismo', 'Nome dado à Escola Nova sobretudo nos Estados Unidos.'],
    ['Manifesto dos Pioneiros', 'Documento de 1932 que defendeu a escola pública, laica e única no Brasil.'],
    ['Conhecimento prévio', 'O que o aluno já sabe e que permite compreender o novo.'],
  ],
  exemplos: `<p><strong>Ensinar a Revolução Francesa:</strong> numa aula clássica, o professor expõe os fatos, lê um trecho de Burke e pede uma redação. Numa aula escolanovista, os alunos simulam uma assembleia e pesquisam em grupos. Uma síntese: exposição clara dos fatos e leitura de fontes, seguida de debate em que os alunos usam o que aprenderam.</p>`,
  contexto: `<p><strong>No mundo:</strong> nos Estados Unidos, o debate entre tradicionalistas e progressivistas atravessou o século XX ${tag('fato')}. <strong>No Brasil:</strong> a disputa entre pioneiros e católicos influenciou a Constituição de 1934, que manteve o ensino religioso facultativo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que não há pensamento crítico sem conhecimento', tag: 'argumento',
    premissas: ['Criticar um argumento exige entender seus termos e seu assunto.', 'Entender exige conhecimento prévio do assunto.', 'Uma escola que despreza o conteúdo priva o aluno das condições para pensar por si.'],
    conclusao: 'Logo, a transmissão de conhecimentos é condição, e não obstáculo, do pensamento crítico.',
    nota: 'Isso não justifica um ensino passivo: o aluno precisa ser ativo para aprender bem o conteúdo.',
  },
  objecoes: [
    { objecao: 'A educação clássica é elitista e alheia à realidade dos alunos pobres.', tag: 'debate',
      resposta: 'A herança cultural foi historicamente acessível a poucos; justamente por isso, negá-la aos pobres pode perpetuar a desigualdade. Muitos defensores do ensino clássico argumentam que ele deve ser oferecido a todos. A crítica legítima é ao método excludente, não ao valor das grandes obras.' },
  ],
  aplicacao: `<p>Inicie o quadro comparativo da etapa: para a educação clássica e a Escola Nova, descreva como cada uma entende o aluno, o professor, o conteúdo e o fim da educação.</p>`,
  fonte: {
    obra: 'Manifesto dos Pioneiros da Educação Nova (1932); Dorothy L. Sayers, As ferramentas perdidas do aprendizado (1947)', link: null,
    orientacao: `<p>No Manifesto, identifique os princípios da escola única e laica. Em Sayers, a proposta de reorganizar a escola pelo trivium.</p>`,
  },
  perguntas: [
    { p: 'O que propõe Sayers em 1947?', r: 'Reorganizar a escola pelo trivium, associando-o a fases do desenvolvimento.' },
    { p: 'Que escola defendeu o Manifesto de 1932?', r: 'Pública, gratuita, laica, obrigatória e única.' },
    { p: 'Por que o pensamento crítico depende do conteúdo?', r: 'Porque criticar exige entender, e entender exige conhecimento prévio.' },
  ],
  exercicios: [
    mc('O Manifesto dos Pioneiros é de:', ['1889', '1932', '1961', '1996'], 1, 'Escola Nova.'),
    mc('O Manifesto foi redigido por:', ['Paulo Freire', 'Fernando de Azevedo', 'Rui Barbosa', 'Alceu Amoroso Lima'], 1, 'Redação.'),
    mc('A Escola Nova coloca no centro:', ['O programa', 'O aluno', 'O Estado', 'A prova'], 1, 'Atividade.'),
    mc('Alceu Amoroso Lima defendeu:', ['A escola laica', 'O ensino religioso e a liberdade das famílias', 'A extinção da escola', 'O tecnicismo'], 1, 'Católicos.'),
    mc('Associar gramática, lógica e retórica a fases da criança é proposta de:', ['Tomás', 'Sayers', 'Dewey', 'Quintiliano'], 1, 'Interpretação.'),
    disc('Compare educação clássica e Escola Nova quanto ao aluno, ao professor, ao conteúdo e ao fim.', ['Aluno', 'Professor', 'Conteúdo', 'Fim']),
  ],
  resumo: ['Clássica: artes liberais, grandes obras, mestre.', 'Sayers (1947): trivium e fases.', 'Escola Nova: aluno, atividade, interesse.', 'Manifesto (1932) e reação católica.', 'Sem conhecimento não há pensamento crítico.'],
  referencias: [
    { texto: 'Manifesto dos Pioneiros da Educação Nova (1932).' },
    { texto: 'Dorothy L. Sayers, As ferramentas perdidas do aprendizado (1947).' },
    { texto: 'Daniel T. Willingham, Por que os alunos não gostam da escola? (2009).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar o quadro comparativo', 'Ler as fontes indicadas'],
  revisao: [['1932', 'Pioneiros.'], ['Sayers', 'Trivium.'], ['Conhecimento prévio', 'Base do pensamento.']],
  avancado: {
    texto: `<h3>Anísio Teixeira</h3>
<p>Anísio Teixeira, que estudou com Dewey, dirigiu a instrução pública no Distrito Federal nos anos 1930, criou na Bahia a Escola Parque (1950) e presidiu o INEP, que hoje leva seu nome ${tag('fato')}. Defendeu a educação como direito de todos e a escola pública de tempo integral ${tag('fato')}. Sua defesa da laicidade escolar o opôs a educadores católicos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Anísio Teixeira, Educação não é privilégio (1957).' }],
    exercicios: [
      mc('Anísio Teixeira estudou com:', ['Montessori', 'Dewey', 'Piaget', 'Freire'], 1, 'Estados Unidos.'),
      mc('A Escola Parque foi criada na:', ['Bahia', 'São Paulo', 'Minas', 'Paraná'], 0, '1950.'),
      mc('O INEP leva o nome de:', ['Paulo Freire', 'Anísio Teixeira', 'Darcy Ribeiro', 'Lourenço Filho'], 1, 'Instituto.'),
      disc('Avalie a proposta de escola de tempo integral de Anísio Teixeira.', ['Proposta', 'Méritos', 'Críticas', 'Avaliação'])],
  },
}),

aula({
  id: 'ed3-2', titulo: 'Comportamentalismo, construtivismo e pedagogia crítica', duracao: '150 min',
  aprendera: ['Explicar o comportamentalismo e o tecnicismo', 'Explicar o construtivismo de Piaget e Vygotsky', 'Explicar a pedagogia de Paulo Freire', 'Avaliar cada corrente por sua antropologia e seus resultados'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como se aprende? Por reforço, por construção própria, por diálogo e conscientização? Cada resposta gerou uma corrente pedagógica.</p>
<h3>Comportamentalismo e tecnicismo</h3>
<p>B. F. Skinner estudou a aprendizagem como mudança de comportamento reforçada por consequências, e propôs a instrução programada, em pequenos passos com retorno imediato (A tecnologia do ensino, 1968) ${tag('fato')}. O tecnicismo transpôs à escola a ideia de planejamento por objetivos mensuráveis ${tag('fato')}.</p>
<h3>Construtivismo</h3>
<p>Jean Piaget descreveu estágios do desenvolvimento cognitivo — sensório-motor, pré-operatório, operatório concreto e operatório formal — e afirmou que o conhecimento é construído pela ação do sujeito sobre o objeto ${tag('fato')}. Lev Vygotsky destacou o papel da linguagem e da interação social e propôs a zona de desenvolvimento proximal: o que a criança faz com ajuda e ainda não faz sozinha ${tag('fato')}.</p>
<h3>Pedagogia crítica</h3>
<p>Paulo Freire criticou a "educação bancária", que deposita conteúdos no aluno, e propôs uma educação problematizadora e dialógica, ligada à conscientização (Pedagogia do oprimido) ${tag('fato')}. Seu método de alfabetização de adultos partia de palavras geradoras do universo dos alunos e ficou conhecido pela experiência de Angicos (RN), em 1963 ${tag('fato')}. Freire é patrono da educação brasileira por lei (Lei nº 12.612/2012) ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>Cada corrente traz contribuições — o retorno imediato, a atividade do aluno, a mediação, o diálogo — e pressupostos discutíveis: o comportamentalismo reduz a pessoa ao comportamento; o construtivismo, aplicado sem cuidado, pode desvalorizar a instrução explícita; a pedagogia de Freire tem inspiração marxista que muitos críticos rejeitam ${tag('debate')}.</p>`,
  vocabulario: [
    ['Reforço', 'Consequência que aumenta a frequência de um comportamento (Skinner).'],
    ['Instrução programada', 'Ensino em pequenos passos com retorno imediato.'],
    ['Estágios de Piaget', 'Fases do desenvolvimento cognitivo da criança.'],
    ['Zona de desenvolvimento proximal', 'O que a criança faz com ajuda e ainda não faz sozinha (Vygotsky).'],
    ['Educação bancária', 'Crítica de Freire ao ensino que apenas deposita conteúdos.'],
  ],
  exemplos: `<p><strong>A mesma lição de multiplicação:</strong> com Skinner, exercícios curtos com correção imediata e elogio; com Piaget, material concreto para a criança descobrir a regra; com Vygotsky, a professora resolve um problema junto e retira a ajuda aos poucos; com Freire, adultos partem de um problema real, como o preço do feijão, para aprender a calcular.</p>`,
  contexto: `<p><strong>No mundo:</strong> pesquisas sobre instrução explícita e guiada, como as revisões de Kirschner, Sweller e Clark (2006), questionaram o ensino com mínima orientação para iniciantes ${tag('fato')}. <strong>No Brasil:</strong> Freire é o autor brasileiro mais citado em educação no mundo, e também um dos mais disputados no debate público ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o iniciante precisa de instrução explícita', tag: 'argumento',
    premissas: ['A memória de trabalho é limitada.', 'O iniciante, sem conhecimento prévio, sobrecarrega-a ao tentar descobrir tudo sozinho.', 'Explicações claras e exemplos resolvidos liberam a mente para entender.'],
    conclusao: 'Logo, para iniciantes, a instrução explícita costuma ser mais eficaz que a descoberta livre.',
    nota: 'Com o avanço, a autonomia e a resolução de problemas abertos ganham lugar.',
  },
  objecoes: [
    { objecao: 'Criticar Paulo Freire é atacar a educação dos pobres.', tag: 'debate',
      resposta: 'Pode-se reconhecer o valor de seu compromisso com os adultos analfabetos e do diálogo, e ao mesmo tempo discutir seus pressupostos filosóficos e a evidência sobre os resultados de suas propostas. Avaliar um autor com justiça às partes não é atacar os pobres.' },
  ],
  aplicacao: `<p>Complete o quadro comparativo da etapa com comportamentalismo, construtivismo e pedagogia crítica, indicando para cada uma a visão do aluno, do professor, do conteúdo e do fim, e um mérito e um limite.</p>`,
  fonte: {
    obra: 'Paulo Freire, Pedagogia do oprimido, cap. 2', link: null,
    orientacao: `<p>Observe a descrição da educação bancária e da educação problematizadora; distinga a crítica pedagógica dos pressupostos filosóficos.</p>`,
  },
  perguntas: [
    { p: 'O que é a zona de desenvolvimento proximal?', r: 'O que a criança faz com ajuda e ainda não faz sozinha.' },
    { p: 'O que Freire chama de educação bancária?', r: 'O ensino que apenas deposita conteúdos no aluno.' },
    { p: 'Por que o iniciante precisa de instrução explícita?', r: 'Porque a memória de trabalho é limitada e ele ainda não tem conhecimento prévio.' },
  ],
  exercicios: [
    mc('A instrução programada é proposta de:', ['Piaget', 'Skinner', 'Freire', 'Vygotsky'], 1, 'Reforço.'),
    mc('O estágio operatório formal é descrito por:', ['Piaget', 'Skinner', 'Dewey', 'Locke'], 0, 'Estágios.'),
    mc('A experiência de Angicos ocorreu em:', ['1932', '1963', '1988', '2012'], 1, 'Alfabetização de adultos.'),
    mc('Freire é patrono da educação brasileira pela Lei:', ['9.394/1996', '12.612/2012', '13.415/2017', '4.024/1961'], 1, 'Patrono.'),
    mc('Ensino com mínima orientação foi questionado para:', ['Especialistas', 'Iniciantes', 'Professores', 'Ninguém'], 1, 'Kirschner, Sweller e Clark.'),
    disc('Complete o quadro com as três correntes, com um mérito e um limite de cada.', ['Correntes', 'Méritos', 'Limites', 'Antropologia']),
  ],
  resumo: ['Skinner: reforço e instrução programada.', 'Piaget: estágios e construção.', 'Vygotsky: linguagem e zona proximal.', 'Freire: crítica à educação bancária.', 'Iniciantes: instrução explícita.'],
  referencias: [
    { texto: 'Paulo Freire, Pedagogia do oprimido.' },
    { texto: 'B. F. Skinner, Tecnologia do ensino (1968).' },
    { texto: 'Paul A. Kirschner, John Sweller e Richard E. Clark, "Why minimal guidance during instruction does not work", Educational Psychologist (2006).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar o quadro comparativo', 'Ler a fonte indicada'],
  revisao: [['Skinner', 'Reforço.'], ['Vygotsky', 'Zona proximal.'], ['Freire', 'Educação bancária.']],
  avancado: {
    texto: `<h3>Carga cognitiva</h3>
<p>A teoria da carga cognitiva, de John Sweller, parte da limitação da memória de trabalho e recomenda, para iniciantes, exemplos resolvidos e eliminação de informações supérfluas ${tag('fato')}. Um achado conhecido é o "efeito de reversão da expertise": o que ajuda o iniciante pode atrapalhar o especialista ${tag('fato')}. A teoria é influente, mas também criticada por dificuldades de medir a carga ${tag('debate')}.</p>`,
    leituras: [{ texto: 'John Sweller, trabalhos sobre a teoria da carga cognitiva (desde 1988).' }],
    exercicios: [
      mc('A teoria da carga cognitiva parte da limitação da:', ['Memória de longo prazo', 'Memória de trabalho', 'Visão', 'Vontade'], 1, 'Sweller.'),
      mc('Para iniciantes, recomenda:', ['Problemas abertos sem ajuda', 'Exemplos resolvidos', 'Nenhuma instrução', 'Só testes'], 1, 'Exemplos.'),
      mc('O que ajuda o iniciante pode atrapalhar o especialista: é o efeito de:', ['Reversão da expertise', 'Placebo', 'Halo', 'Espaçamento'], 0, 'Expertise.'),
      disc('Planeje uma explicação para iniciantes aplicando a teoria da carga cognitiva.', ['Objetivo', 'Exemplo resolvido', 'Redução do supérfluo', 'Progressão'])],
  },
}),

aula({
  id: 'ed3-3', titulo: 'A quem cabe educar? Direito dos pais, liberdade de ensino e educação domiciliar', duracao: '150 min',
  aprendera: ['Conhecer as normas sobre direito dos pais e liberdade de ensino', 'Conhecer a decisão do STF sobre educação domiciliar', 'Expor a doutrina da Igreja sobre o direito dos pais', 'Discutir educação moral e religiosa na escola'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Pais, Estado e escola disputam o direito de educar. Quem tem a palavra principal, e até onde vai a liberdade de cada um?</p>
<h3>As normas</h3>
<p>A Constituição garante a liberdade de aprender e ensinar, o pluralismo de ideias e a coexistência de instituições públicas e privadas (art. 206, II e III) ${tag('fato')}. A Convenção Americana sobre Direitos Humanos reconhece aos pais o direito de que os filhos recebam a educação religiosa e moral de acordo com suas convicções (art. 12, 4) ${tag('fato')}. O Estatuto da Criança e do Adolescente obriga os pais a matricular os filhos na rede regular de ensino (art. 55) ${tag('fato')}.</p>
<h3>Educação domiciliar</h3>
<p>Em 2018, o STF decidiu (RE 888.815, Tema 822) que a educação domiciliar não é proibida pela Constituição, mas não pode ser praticada sem lei que a regulamente ${tag('fato')}. Projetos de regulamentação tramitaram no Congresso; verifique a situação atual na fonte oficial ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>A Igreja ensina que os pais têm o direito de escolher para os filhos uma escola que corresponda às suas convicções, e que os poderes públicos devem garantir esse direito e as condições de seu exercício (CIC 2229; Gravissimum educationis, 6) ${tag('doutrina')}. O Estado, pela subsidiariedade, apoia a família e zela pelo bem comum, sem monopolizar a educação ${tag('doutrina')}.</p>
<h3>Educação moral e religiosa</h3>
<p>Toda escola transmite valores, mesmo quando se diz neutra ${tag('argumento')}. O debate é sobre quais valores e com que consentimento dos pais, tema de controvérsias sobre currículos e materiais ${tag('debate')}.</p>`,
  vocabulario: [
    ['Liberdade de ensino', 'Liberdade de ensinar, aprender e criar escolas (CF art. 206).'],
    ['Educação domiciliar', 'Ensino dado pelos pais em casa, em vez da escola.'],
    ['Tema 822', 'Tema de repercussão geral do STF sobre educação domiciliar.'],
    ['Pluralismo pedagógico', 'Coexistência de diferentes propostas e instituições de ensino.'],
    ['Subsidiariedade', 'O Estado apoia a família sem tomar seu lugar.'],
  ],
  exemplos: `<p><strong>Três famílias:</strong> uma escolhe a escola pública do bairro e acompanha de perto; outra escolhe uma escola católica, com custo; outra quer ensinar em casa. As duas primeiras escolhas são legais; a terceira, pela decisão do STF de 2018, depende de lei regulamentadora. O princípio do direito dos pais está presente em todas; os meios e limites variam.</p>`,
  contexto: `<p><strong>No mundo:</strong> a educação domiciliar é regulamentada em países como os Estados Unidos e proibida, em regra, em outros, como a Alemanha ${tag('fato')}. <strong>No Brasil:</strong> a matrícula é obrigatória dos 4 aos 17 anos (LDB, art. 6º; CF, art. 208, I) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o direito dos pais é anterior ao do Estado', tag: 'argumento',
    premissas: ['Os pais dão a vida aos filhos e têm com eles uma relação natural de cuidado.', 'A família existe antes do Estado, que surge para ajudar as famílias no bem comum.', 'Quem tem o dever primário de educar tem o direito correspondente.'],
    conclusao: 'Logo, o direito dos pais de educar é primário, e o do Estado, subsidiário.',
    nota: 'O Estado conserva o dever de proteger a criança contra abusos e de garantir um mínimo comum.',
  },
  objecoes: [
    { objecao: 'O direito da criança à educação pode exigir protegê-la das convicções dos pais.', tag: 'debate',
      resposta: 'A criança tem direitos próprios, e o Estado deve agir em casos de abuso ou negligência. Mas daí não se segue que o Estado possa substituir as convicções dos pais pelas suas. O equilíbrio é proteger a criança sem retirar dos pais a educação moral e religiosa.' },
  ],
  aplicacao: `<p>Escreva o ensaio da etapa: "A quem cabe primeiro educar?". Responda com a Constituição, o ECA, a decisão do STF de 2018, a doutrina da Igreja e um argumento contrário apresentado com justiça.</p>`,
  fonte: {
    obra: 'Constituição de 1988, arts. 205, 206 e 229; Lei nº 8.069/1990 (ECA), art. 55; Catecismo, § 2229; Gravissimum educationis, 6', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Leia os artigos constitucionais e do ECA; depois o Catecismo e a Gravissimum educationis; anote onde as fontes coincidem e onde se tensionam.</p>`,
  },
  perguntas: [
    { p: 'O que decidiu o STF em 2018 sobre educação domiciliar?', r: 'Que não é proibida pela Constituição, mas não pode ser praticada sem lei regulamentadora.' },
    { p: 'O que diz o art. 12, 4 da Convenção Americana?', r: 'Que os pais têm direito a que os filhos recebam educação religiosa e moral conforme suas convicções.' },
    { p: 'O que ensina o CIC 2229?', r: 'Que os pais têm o direito de escolher a escola conforme suas convicções.' },
  ],
  exercicios: [
    mc('O recurso do STF sobre educação domiciliar é o:', ['RE 888.815', 'ADI 4439', 'ADI 4277', 'HC 124.306'], 0, 'Tema 822.'),
    mc('A obrigação de matrícula está no ECA, art.:', ['5º', '55', '98', '227'], 1, 'Pais.'),
    mc('O pluralismo de ideias está na CF, art.:', ['5º', '205', '206', '229'], 2, 'Princípios do ensino.'),
    mc('O direito dos pais de escolher a escola está no CIC:', ['1883', '2229', '2240', '2402'], 1, 'Escolha.'),
    mc('Pela subsidiariedade, o Estado:', ['Monopoliza a educação', 'Apoia a família', 'Ignora a família', 'Proíbe escolas privadas'], 1, 'Princípio.'),
    disc('Escreva o ensaio "A quem cabe primeiro educar?" com normas, doutrina e um argumento contrário.', ['Normas', 'Doutrina', 'Argumento contrário', 'Conclusão']),
  ],
  resumo: ['CF art. 206: liberdade e pluralismo.', 'Convenção Americana, art. 12, 4.', 'ECA art. 55: matrícula.', 'STF 2018: educação domiciliar depende de lei.', 'CIC 2229; GE 6: direito dos pais.'],
  referencias: [
    { texto: 'Concílio Vaticano II, Gravissimum educationis (1965).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2221–2229.', livro: 'cic' },
    { texto: 'João Paulo II, Familiaris consortio (1981), n. 36–40.', livro: 'jp2-familiaris' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler as fontes indicadas'],
  revisao: [['RE 888.815', 'Depende de lei.'], ['CIC 2229', 'Escolha da escola.'], ['Art. 206', 'Pluralismo.']],
  avancado: {
    texto: `<h3>Familiaris consortio e a educação</h3>
<p>João Paulo II afirmou que o direito-dever educativo dos pais é essencial, original e primário, insubstituível e inalienável, não podendo ser totalmente delegado nem usurpado por outros (Familiaris consortio, 36) ${tag('doutrina')}. O texto inclui a educação para o amor e a educação sexual, que deve ser dada sob a orientação dos pais (n. 37) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'João Paulo II, Familiaris consortio (1981), n. 36–40.', livro: 'jp2-familiaris' }],
    exercicios: [
      mc('O direito educativo dos pais é chamado "original e primário" na:', ['Laborem exercens', 'Familiaris consortio', 'Fides et ratio', 'Centesimus annus'], 1, 'N. 36.'),
      mc('Esse direito pode ser totalmente delegado?', ['Sim', 'Não', 'Só ao Estado', 'Só à escola'], 1, 'Inalienável.'),
      mc('A educação sexual deve ser dada sob orientação:', ['Do Estado', 'Dos pais', 'Da mídia', 'De ninguém'], 1, 'N. 37.'),
      disc('Proponha critérios para a colaboração entre escola e pais em temas morais.', ['Critérios', 'Fontes', 'Exemplo', 'Limites'])],
  },
}),

aula({
  id: 'ed3-4', titulo: 'Debates atuais: métodos de alfabetização e telas na aprendizagem', duracao: '150 min',
  aprendera: ['Distinguir métodos fônicos e globais de alfabetização', 'Conhecer a evidência sobre o ensino da fonética', 'Situar as políticas brasileiras de alfabetização', 'Discutir o uso de telas e celulares na escola'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como ensinar uma criança a ler? E as telas ajudam ou atrapalham a aprender? São dois debates em que dados, teorias e valores se cruzam.</p>
<h3>Métodos de alfabetização</h3>
<p>Os métodos fônicos ensinam explicitamente a relação entre letras e sons; os métodos globais partem de palavras e textos inteiros, com o sentido em primeiro plano ${tag('fato')}. No Brasil, a psicogênese da língua escrita, de Emilia Ferreiro e Ana Teberosky (1979), influenciou fortemente as práticas, enfatizando as hipóteses que a criança constrói sobre a escrita ${tag('fato')}.</p>
<h3>A evidência</h3>
<p>O National Reading Panel dos Estados Unidos (2000) concluiu que o ensino sistemático da fonética beneficia a aprendizagem da leitura ${tag('fato')}. Hoje há amplo apoio na pesquisa ao ensino explícito da relação letra-som, ao lado do vocabulário, da fluência e da compreensão ${tag('interpretacao')}. O debate continua sobre como combinar esses componentes e sobre a interpretação das pesquisas ${tag('debate')}.</p>
<h3>Políticas brasileiras</h3>
<p>A Política Nacional de Alfabetização (Decreto nº 9.765/2019) deu ênfase à consciência fonêmica e à instrução fônica ${tag('fato')}. Em 2023, o governo federal instituiu o Compromisso Nacional Criança Alfabetizada (Decreto nº 11.556/2023), que substituiu a política anterior ${tag('fato')}.</p>
<h3>Telas</h3>
<p>A Lei nº 15.100/2025 restringiu o uso de aparelhos eletrônicos portáteis pessoais, como celulares, nas escolas de educação básica, com exceções pedagógicas e de saúde ${tag('fato')}. O Relatório de Monitoramento Global da Educação da UNESCO (2023) recomendou cautela com a tecnologia, que deve servir à aprendizagem e não substituí-la ${tag('fato')}. Os efeitos das telas sobre a saúde mental e a atenção são objeto de debate científico ${tag('debate')}.</p>`,
  vocabulario: [
    ['Método fônico', 'Ensino explícito da relação entre letras e sons.'],
    ['Método global', 'Ensino a partir de palavras e textos inteiros.'],
    ['Consciência fonêmica', 'Capacidade de perceber e manipular os sons da fala.'],
    ['Psicogênese da língua escrita', 'Teoria de Ferreiro e Teberosky sobre as hipóteses da criança sobre a escrita.'],
    ['Fluência', 'Leitura precisa, rápida e com entonação adequada.'],
  ],
  exemplos: `<p><strong>Ensinando "pato":</strong> no método fônico, a criança aprende os sons de p, a, t, o e os junta; no global, reconhece a palavra com a figura e o contexto. Uma sequência equilibrada usa o fônico para dar a chave da decodificação e, desde o início, lê histórias em voz alta para ampliar vocabulário e compreensão.</p>`,
  contexto: `<p><strong>No mundo:</strong> vários países, como a Inglaterra, tornaram obrigatório o ensino sistemático da fonética nos anos iniciais ${tag('fato')}. <strong>No Brasil:</strong> avaliações nacionais mostram que muitas crianças não estão alfabetizadas ao fim do 2º ano, o que motiva as políticas recentes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ensinar a relação letra-som explicitamente', tag: 'argumento',
    premissas: ['O português é escrito num alfabeto, que representa sons por letras.', 'Muitas crianças não descobrem sozinhas essa relação, sobretudo as que têm menos contato com livros em casa.', 'Ensiná-la explicitamente dá a todas a chave da decodificação.'],
    conclusao: 'Logo, o ensino explícito da fonética é especialmente importante para a equidade.',
    nota: 'Decodificar não basta: é preciso também vocabulário e compreensão.',
  },
  objecoes: [
    { objecao: 'Proibir celulares na escola é retrocesso diante do mundo digital.', tag: 'debate',
      resposta: 'A lei permite usos pedagógicos e restringe o uso pessoal. Defensores apontam ganhos de atenção e convivência; críticos temem perder oportunidades de educação digital. O ponto de acordo possível é ensinar o uso responsável sem deixar a tela competir com a aula.' },
  ],
  aplicacao: `<p>Escolha um dos dois debates e escreva uma síntese de uma página: posições, evidências, normas brasileiras e sua avaliação, distinguindo dado, teoria e valor.</p>`,
  fonte: {
    obra: 'Decreto nº 9.765/2019; Decreto nº 11.556/2023; Lei nº 15.100/2025', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Compare os objetivos dos dois decretos e leia as exceções da lei sobre celulares.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre os métodos fônico e global?', r: 'O fônico ensina a relação letra-som; o global parte de palavras e textos inteiros.' },
    { p: 'O que concluiu o National Reading Panel (2000)?', r: 'Que o ensino sistemático da fonética beneficia a aprendizagem da leitura.' },
    { p: 'O que fez a Lei nº 15.100/2025?', r: 'Restringiu o uso de celulares nas escolas de educação básica, com exceções.' },
  ],
  exercicios: [
    mc('A psicogênese da língua escrita é de:', ['Piaget', 'Ferreiro e Teberosky', 'Freire', 'Skinner'], 1, '1979.'),
    mc('A Política Nacional de Alfabetização é de:', ['2007', '2019', '2023', '2025'], 1, 'Decreto 9.765.'),
    mc('O Compromisso Nacional Criança Alfabetizada é de:', ['2019', '2023', '2012', '1996'], 1, 'Decreto 11.556.'),
    mc('A lei que restringe celulares nas escolas é de:', ['2019', '2023', '2025', '2014'], 2, 'Lei 15.100.'),
    mc('O ensino explícito da fonética favorece sobretudo:', ['Quem já lê', 'A equidade', 'Os professores', 'Nada'], 1, 'Argumento.'),
    disc('Escreva uma síntese de um debate (alfabetização ou telas) com posições, evidências e normas.', ['Posições', 'Evidências', 'Normas', 'Avaliação']),
  ],
  resumo: ['Fônico × global.', 'Ferreiro e Teberosky (1979).', 'National Reading Panel (2000).', 'PNA (2019) e Compromisso (2023).', 'Lei 15.100/2025; UNESCO (2023).'],
  referencias: [
    { texto: 'National Reading Panel, Teaching Children to Read (2000).' },
    { texto: 'UNESCO, Relatório de Monitoramento Global da Educação: a tecnologia na educação (2023).' },
    { texto: 'Lei nº 15.100, de 2025.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a síntese do debate', 'Consultar as fontes oficiais'],
  revisao: [['NRP 2000', 'Fonética.'], ['2019/2023', 'Políticas.'], ['15.100', 'Celulares.']],
  avancado: {
    texto: `<h3>O modelo simples da leitura</h3>
<p>O "modelo simples da leitura", proposto por Gough e Tunmer (1986), afirma que a compreensão da leitura resulta da decodificação multiplicada pela compreensão da linguagem oral ${tag('fato')}. Se um dos fatores for zero, a compreensão também o será ${tag('fato')}. O modelo é útil para diagnosticar dificuldades, embora simplifique processos complexos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Philip B. Gough e William E. Tunmer, "Decoding, reading, and reading disability" (1986).' }],
    exercicios: [
      mc('O modelo simples da leitura é de:', ['Piaget', 'Gough e Tunmer', 'Freire', 'Ferreiro'], 1, '1986.'),
      mc('Compreensão leitora = decodificação ×:', ['Velocidade', 'Compreensão oral', 'Memória', 'Idade'], 1, 'Modelo.'),
      mc('Uma criança que decodifica bem mas não entende tem dificuldade na:', ['Decodificação', 'Compreensão da linguagem', 'Visão', 'Escrita'], 1, 'Diagnóstico.'),
      disc('Use o modelo simples para diagnosticar dois casos hipotéticos de dificuldade de leitura.', ['Caso 1', 'Caso 2', 'Diagnóstico', 'Intervenção'])],
  },
}),

avaliacao('ed3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as correntes pedagógicas e os grandes debates, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro comparativo das correntes.</li><li>Releia seu ensaio sobre o direito de educar.</li></ul>`,
[
  disc('Compare três correntes pedagógicas quanto à visão do aluno, do professor, do conteúdo e do fim da educação, com um mérito e um limite de cada.', ['Correntes', 'Comparação', 'Méritos e limites', 'Fontes']),
  disc('A quem cabe primeiro educar? Responda com a Constituição, a decisão do STF de 2018, a doutrina da Igreja e um argumento contrário, distinguindo norma, dado e doutrina.', ['Normas', 'Doutrina', 'Argumento contrário', 'Distinções']),
]),
];
