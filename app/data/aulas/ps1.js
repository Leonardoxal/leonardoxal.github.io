// Psicologia I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Psicologia).
// O que é a psicologia; conceitos básicos; experimento, correlação e medida; estudo de caso e ética da pesquisa.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ps1-1', titulo: 'O que é a psicologia: alma, mente e comportamento', duracao: '150 min',
  aprendera: ['Distinguir psicologia filosófica e científica', 'Explicar a concepção aristotélico-tomista da alma', 'Situar o nascimento da psicologia experimental', 'Distinguir níveis de afirmação sobre a pessoa'],
  prereq: ['Lógica (módulo M4)'],
  explicacao: `
<h3>O problema</h3>
<p>"Psicologia" significa, pela etimologia, estudo da alma (psyché). Hoje fala-se de mente, comportamento e cérebro. O que, afinal, a psicologia estuda?</p>
<h3>Psicologia filosófica</h3>
<p>Para Aristóteles, em Sobre a alma, a alma é a forma do corpo vivo, princípio da vida, da sensação e do pensamento ${tag('fato')}. Santo Tomás retoma essa tese: a alma humana é forma do corpo e, por ter uma operação intelectual que não é de órgão corporal, é subsistente ${tag('doutrina')}. A pessoa é unidade de corpo e alma, não uma alma presa num corpo ${tag('doutrina')}.</p>
<h3>Psicologia científica</h3>
<p>Wilhelm Wundt fundou em 1879, em Leipzig, um laboratório de psicologia experimental, marco convencional da psicologia científica ${tag('fato')}. A psicologia científica estuda processos mentais e comportamentos por observação, experimento e medida ${tag('fato')}.</p>
<h3>Níveis de afirmação</h3>
<p>Dizer que "a memória de curto prazo retém poucos itens" é dado empírico; dizer que "a mente é um processador de informação" é teoria psicológica; dizer que "a pessoa é espiritual e livre" é tese filosófica e, para o cristão, também doutrina ${tag('interpretacao')}. Confundir os níveis gera erros nas duas direções ${tag('argumento')}.</p>
<h3>Cuidado</h3>
<p>Estudar psicologia não habilita ninguém a diagnosticar nem a tratar: isso cabe a profissionais habilitados ${tag('fato')}.</p>`,
  vocabulario: [
    ['Psyché', 'Termo grego para alma, princípio vital.'],
    ['Forma do corpo', 'Para Aristóteles, a alma como princípio que faz do corpo um ser vivo.'],
    ['Psicologia experimental', 'Estudo dos processos psíquicos por experimentos controlados.'],
    ['Comportamento', 'Ação observável de um organismo.'],
    ['Pessoa', 'Ser individual de natureza racional.'],
  ],
  exemplos: `<p><strong>Três afirmações sobre o medo:</strong> "O medo acelera os batimentos cardíacos" (dado empírico). "O medo resulta de uma avaliação cognitiva de ameaça" (teoria psicológica). "A coragem é a virtude que modera o medo segundo a razão" (tese filosófica e moral). As três podem ser verdadeiras, mas respondem a perguntas diferentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> a psicologia é hoje uma das áreas com maior número de estudantes universitários ${tag('fato')}. <strong>No Brasil:</strong> a profissão de psicólogo foi regulamentada pela Lei nº 4.119, de 1962, e é fiscalizada pelo sistema de Conselhos de Psicologia ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a psicologia precisa da filosofia da pessoa', tag: 'argumento',
    premissas: ['Toda teoria psicológica supõe alguma ideia do que é a pessoa (máquina, animal, sujeito livre).', 'Essa ideia não é obtida só por experimento; é questão filosófica.', 'Uma ideia errada da pessoa distorce a interpretação dos dados.'],
    conclusao: 'Logo, a psicologia científica se beneficia de uma filosofia da pessoa bem fundamentada.',
    nota: 'O inverso também vale: a filosofia da pessoa deve levar em conta os dados da psicologia.',
  },
  objecoes: [
    { objecao: 'A ciência mostrou que não existe alma, só cérebro.', tag: 'debate',
      resposta: 'A neurociência mostra a dependência das operações psíquicas em relação ao cérebro, o que a tradição aristotélica também afirma para as sensações e imagens. Se há algo no pensamento e na liberdade que não se reduz ao cérebro é questão filosófica, que o experimento sozinho não decide.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: classifique dez afirmações (tiradas de notícias, livros e conversas) como dado empírico, teoria psicológica ou tese filosófica, justificando.</p>`,
  fonte: {
    obra: 'Aristóteles, Sobre a alma, livro II, caps. 1–2', link: null,
    orientacao: `<p>Observe a definição da alma como "ato primeiro de um corpo natural organizado".</p>`,
  },
  perguntas: [
    { p: 'O que é a alma para Aristóteles?', r: 'A forma do corpo vivo, princípio da vida, da sensação e do pensamento.' },
    { p: 'Que marco convencional inicia a psicologia científica?', r: 'O laboratório de Wundt em Leipzig, em 1879.' },
    { p: 'Por que distinguir níveis de afirmação?', r: 'Para não confundir dado empírico, teoria e tese filosófica.' },
  ],
  exercicios: [
    mc('O laboratório de Wundt é de:', ['1879', '1890', '1900', '1962'], 0, 'Leipzig.'),
    mc('"Psicologia" vem de psyché, que significa:', ['Alma', 'Cérebro', 'Comportamento', 'Sonho'], 0, 'Etimologia.'),
    mc('"O medo acelera o coração" é:', ['Dado empírico', 'Tese filosófica', 'Doutrina', 'Opinião'], 0, 'Nível.'),
    mc('A profissão de psicólogo no Brasil foi regulamentada em:', ['1962', '1879', '1988', '2005'], 0, 'Lei 4.119.'),
    mc('Para Tomás, a alma humana é:', ['Forma do corpo e subsistente', 'Só o cérebro', 'Prisioneira do corpo', 'Ilusão'], 0, 'Doutrina.'),
    disc('Classifique as dez afirmações da aplicação.', ['Classificação', 'Justificativa', 'Exemplos', 'Clareza']),
  ],
  resumo: ['Psicologia filosófica e científica.', 'Aristóteles e Tomás: alma forma do corpo.', 'Wundt (1879).', 'Três níveis de afirmação.', 'Limites: não diagnosticar.'],
  referencias: [
    { texto: 'Aristóteles, Sobre a alma.', livro: 'aristoteles-alma' },
    { texto: 'Santo Tomás de Aquino, Questões disputadas sobre a alma.', livro: 'tomas-alma' },
    { texto: 'Mário Ferreira dos Santos, Psicologia.', livro: 'mfs-psicologia' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação', 'Ler a fonte indicada'],
  revisao: [['Psyché', 'Alma.'], ['1879', 'Wundt.'], ['Níveis', 'Dado, teoria, tese.']],
  avancado: {
    texto: `<h3>As potências da alma</h3>
<p>Na psicologia tomista, a alma age por potências: vegetativas (nutrição, crescimento, reprodução), sensitivas (sentidos externos, sentidos internos e apetite sensível) e intelectivas (inteligência e vontade) ${tag('doutrina')}. Os sentidos internos são o senso comum, a imaginação, a estimativa (no homem, cogitativa) e a memória ${tag('fato')}. Muitos temas da psicologia moderna (percepção, memória, emoção) correspondem a essas potências ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, I, qq. 77–83.' }],
    exercicios: [
      mc('A vontade é potência:', ['Intelectiva', 'Vegetativa', 'Sensitiva', 'Corporal'], 0, 'Apetite racional.'),
      mc('A imaginação é sentido:', ['Interno', 'Externo', 'Vegetativo', 'Intelectivo'], 0, 'Tomás.'),
      mc('No homem, a estimativa chama-se:', ['Cogitativa', 'Memória', 'Senso comum', 'Vontade'], 0, 'Termo.'),
      disc('Relacione as potências da alma tomistas com três temas da psicologia moderna.', ['Potências', 'Temas modernos', 'Correspondências', 'Diferenças'])],
  },
}),

aula({
  id: 'ps1-2', titulo: 'Conceitos básicos: percepção, memória, aprendizagem, emoção e personalidade', duracao: '150 min',
  aprendera: ['Definir os principais processos psíquicos', 'Distinguir memória de curto e longo prazo', 'Distinguir condicionamento clássico e operante', 'Conhecer os conceitos de personalidade e saúde mental'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Que palavras precisamos dominar para falar com precisão sobre a vida psíquica?</p>
<h3>Percepção e atenção</h3>
<p>Percepção é a organização das sensações em objetos com sentido ${tag('fato')}. A atenção seleciona parte da informação disponível; somos menos capazes de fazer várias tarefas exigentes ao mesmo tempo do que costumamos pensar ${tag('fato')}.</p>
<h3>Memória</h3>
<p>Distinguem-se memória de trabalho (curto prazo, capacidade limitada) e memória de longo prazo ${tag('fato')}. Hermann Ebbinghaus (1885) descreveu a curva do esquecimento; a revisão espaçada favorece a retenção ${tag('fato')}.</p>
<h3>Aprendizagem</h3>
<p>No condicionamento clássico (Pavlov), um estímulo neutro passa a provocar uma resposta por associação ${tag('fato')}. No operante (Skinner), comportamentos se tornam mais ou menos frequentes conforme suas consequências ${tag('fato')}.</p>
<h3>Emoção, motivação e personalidade</h3>
<p>Emoções envolvem avaliação, reação corporal e tendência à ação ${tag('fato')}. Motivação é o que inicia e dirige o comportamento ${tag('fato')}. Na pesquisa atual, o modelo dos Cinco Grandes Fatores (abertura, conscienciosidade, extroversão, amabilidade, neuroticismo) é muito usado para descrever traços de personalidade ${tag('fato')}.</p>
<h3>Saúde mental</h3>
<p>A Organização Mundial da Saúde descreve a saúde mental como um estado de bem-estar em que a pessoa realiza suas capacidades, enfrenta o estresse normal da vida, trabalha produtivamente e contribui para a comunidade ${tag('fato')}. Os transtornos mentais são classificados em manuais como a CID-11 e o DSM-5 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Percepção', 'Organização das sensações em objetos com sentido.'],
    ['Memória de trabalho', 'Memória de curto prazo, de capacidade limitada.'],
    ['Condicionamento operante', 'Aprendizagem pelas consequências do comportamento.'],
    ['Traço de personalidade', 'Disposição relativamente estável de pensar, sentir e agir.'],
    ['Transtorno mental', 'Padrão clinicamente significativo de sofrimento ou prejuízo.'],
  ],
  exemplos: `<p><strong>Estudar para a prova:</strong> reler o capítulo cinco vezes na véspera dá sensação de domínio, mas a curva do esquecimento mostra que muito se perde em dias. Revisar em intervalos crescentes (um dia, três dias, uma semana) e testar-se com perguntas, como fazem os cartões deste site, retém mais.</p>`,
  contexto: `<p><strong>No mundo:</strong> a CID-11, da OMS, entrou em vigor em 2022 ${tag('fato')}. <strong>No Brasil:</strong> a Rede de Atenção Psicossocial (RAPS), com os Centros de Atenção Psicossocial (CAPS), integra o cuidado em saúde mental no SUS ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a virtude e o hábito se encontram com a psicologia da aprendizagem', tag: 'interpretacao',
    premissas: ['A psicologia mostra que comportamentos repetidos se tornam mais fáceis e automáticos.', 'A ética clássica ensina que virtudes são hábitos adquiridos por atos repetidos.', 'Ambas reconhecem o poder formativo da repetição.'],
    conclusao: 'Logo, a psicologia da aprendizagem ilumina, sem substituir, a doutrina clássica das virtudes.',
    nota: 'A virtude, porém, inclui escolha racional do bem, não só automatismo.',
  },
  objecoes: [
    { objecao: 'Se aprendemos por condicionamento, não há liberdade.', tag: 'debate',
      resposta: 'O condicionamento explica parte do comportamento, sobretudo o automático. Mas as pessoas também deliberam, avaliam razões e mudam hábitos por decisão. Reconhecer influências não equivale a negar a liberdade; esse tema volta na etapa de debates.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: glossário de vinte termos de psicologia, cada um com definição precisa e um exemplo do cotidiano.</p>`,
  fonte: {
    obra: 'William James, Princípios de psicologia (1890), capítulo sobre o hábito', link: null,
    orientacao: `<p>Observe as máximas práticas que James propõe para formar bons hábitos.</p>`,
  },
  perguntas: [
    { p: 'O que é percepção?', r: 'A organização das sensações em objetos com sentido.' },
    { p: 'O que é condicionamento operante?', r: 'Aprendizagem em que o comportamento muda de frequência conforme suas consequências.' },
    { p: 'O que favorece a retenção na memória?', r: 'A revisão espaçada e a recuperação ativa.' },
  ],
  exercicios: [
    mc('A curva do esquecimento é de:', ['Ebbinghaus', 'Pavlov', 'Skinner', 'Wundt'], 0, '1885.'),
    mc('O cão que saliva ao ouvir a campainha ilustra o condicionamento:', ['Clássico', 'Operante', 'Vicário', 'Nenhum'], 0, 'Pavlov.'),
    mc('Um dos Cinco Grandes Fatores é:', ['Conscienciosidade', 'Inteligência', 'Fé', 'Altura'], 0, 'Personalidade.'),
    mc('A CID-11 entrou em vigor em:', ['2022', '2013', '1990', '1962'], 0, 'OMS.'),
    mc('Os CAPS pertencem ao:', ['SUS', 'Conselho de Psicologia', 'MEC', 'IBGE'], 0, 'RAPS.'),
    disc('Faça o glossário de vinte termos.', ['Termos', 'Definições', 'Exemplos', 'Precisão']),
  ],
  resumo: ['Percepção e atenção.', 'Memória de trabalho e de longo prazo.', 'Condicionamento clássico e operante.', 'Emoção, motivação, personalidade.', 'Saúde mental e CID-11.'],
  referencias: [
    { texto: 'William James, Princípios de psicologia (1890).' },
    { texto: 'B. F. Skinner, Ciência e comportamento humano (1953).' },
    { texto: 'Aristóteles, Sobre a alma.', livro: 'aristoteles-alma' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler a fonte indicada'],
  revisao: [['Ebbinghaus', 'Esquecimento.'], ['Pavlov', 'Clássico.'], ['Skinner', 'Operante.']],
  avancado: {
    texto: `<h3>O efeito de teste</h3>
<p>Pesquisas sobre aprendizagem mostram que tentar lembrar uma informação (recuperação ativa) fortalece mais a memória do que reler ${tag('fato')}. Esse "efeito de teste" foi estudado, entre outros, por Henry Roediger e Jeffrey Karpicke em trabalhos dos anos 2000 ${tag('fato')}. Por isso perguntas e cartões de revisão são ferramentas de estudo, não só de avaliação ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Peter C. Brown, Henry Roediger e Mark McDaniel, Fixe o conhecimento (2014).' }],
    exercicios: [
      mc('Recuperação ativa é:', ['Tentar lembrar', 'Reler', 'Sublinhar', 'Ouvir'], 0, 'Definição.'),
      mc('O efeito de teste indica que testar-se:', ['Fortalece a memória', 'Só mede', 'Prejudica', 'É indiferente'], 0, 'Pesquisa.'),
      mc('Fixe o conhecimento é de:', ['Brown, Roediger e McDaniel', 'Skinner', 'James', 'Piaget'], 0, '2014.'),
      disc('Monte um plano de estudo de duas semanas usando revisão espaçada e recuperação ativa.', ['Cronograma', 'Intervalos', 'Perguntas', 'Avaliação'])],
  },
}),

aula({
  id: 'ps1-3', titulo: 'Métodos: experimento, correlação e medida', duracao: '150 min',
  aprendera: ['Distinguir variável independente e dependente', 'Explicar grupo controle e aleatorização', 'Distinguir correlação e causalidade', 'Conhecer validade, confiabilidade e o problema da replicação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como saber se uma afirmação sobre a mente ou o comportamento é verdadeira, e não só uma impressão?</p>
<h3>Experimento</h3>
<p>No experimento, o pesquisador manipula uma variável independente e mede o efeito numa variável dependente ${tag('fato')}. A distribuição aleatória dos participantes entre grupo experimental e grupo controle torna os grupos comparáveis ${tag('fato')}.</p>
<h3>Correlação</h3>
<p>Estudos correlacionais medem se duas variáveis variam juntas, sem manipulação ${tag('fato')}. Correlação não prova causalidade: pode haver causa inversa ou uma terceira variável ${tag('fato')}.</p>
<h3>Medida</h3>
<p>Questionários e escalas devem ter confiabilidade (resultados consistentes) e validade (medir o que pretendem) ${tag('fato')}. Estatísticas descrevem os dados (média, desvio-padrão) e testam se diferenças são prováveis por acaso ${tag('fato')}.</p>
<h3>Replicação</h3>
<p>Em 2015, um grande projeto colaborativo tentou replicar 100 estudos de psicologia e obteve resultados significativos em cerca de 36% deles ${tag('fato')}. A chamada "crise de replicação" levou a práticas como pré-registro de estudos e amostras maiores ${tag('fato')}. Por isso um estudo isolado deve ser lido com cautela ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Variável independente', 'A que o pesquisador manipula.'],
    ['Variável dependente', 'A que é medida como efeito.'],
    ['Grupo controle', 'Grupo que não recebe a intervenção, para comparação.'],
    ['Confiabilidade', 'Consistência de uma medida.'],
    ['Replicação', 'Repetição de um estudo para verificar seus resultados.'],
  ],
  exemplos: `<p><strong>Celular e notas:</strong> um estudo encontra que alunos que usam mais o celular têm notas menores. Isso não prova que o celular cause as notas baixas: talvez alunos com dificuldades fujam para o celular, ou ambos dependam de sono ruim. Um experimento (por exemplo, restringir o celular em um grupo sorteado) daria evidência causal mais forte.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Open Science Collaboration publicou em 2015, na revista Science, o projeto de replicação de estudos de psicologia ${tag('fato')}. <strong>No Brasil:</strong> a Iniciativa Brasileira de Reprodutibilidade buscou replicar experimentos de pesquisa biomédica feitos no país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o grupo controle é indispensável', tag: 'argumento',
    premissas: ['Muitas pessoas melhoram com o tempo, por expectativa ou por acaso.', 'Sem comparação, não se distingue o efeito da intervenção desses fatores.', 'O grupo controle sorteado oferece essa comparação.'],
    conclusao: 'Logo, sem grupo controle não se pode atribuir o efeito à intervenção.',
    nota: 'O efeito placebo é um exemplo clássico de melhora sem a intervenção específica.',
  },
  objecoes: [
    { objecao: 'A crise de replicação mostra que a psicologia não é ciência.', tag: 'debate',
      resposta: 'Mostra que muitos resultados eram frágeis e que práticas precisavam mudar. Mas foi a própria comunidade científica que identificou e corrigiu o problema, o que é sinal de ciência funcionando. Resultados replicados continuam sólidos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: leia o resumo e os métodos de um estudo empírico (por exemplo, no SciELO) e identifique hipótese, desenho (experimental ou correlacional), amostra, variáveis, resultados e limites.</p>`,
  fonte: {
    obra: 'Open Science Collaboration, "Estimating the reproducibility of psychological science", Science (2015)', link: null,
    orientacao: `<p>Leia o resumo e observe como a replicabilidade foi medida e quais as conclusões dos autores.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre variável independente e dependente?', r: 'A independente é manipulada; a dependente é medida como efeito.' },
    { p: 'Por que correlação não prova causalidade?', r: 'Porque pode haver causa inversa ou terceira variável.' },
    { p: 'O que é validade de uma medida?', r: 'Medir de fato o que pretende medir.' },
  ],
  exercicios: [
    mc('No experimento, a variável manipulada é a:', ['Independente', 'Dependente', 'Confusa', 'Aleatória'], 0, 'Definição.'),
    mc('A distribuição aleatória serve para:', ['Tornar os grupos comparáveis', 'Escolher os melhores', 'Esconder dados', 'Nada'], 0, 'Controle.'),
    mc('O projeto de replicação de 2015 obteve resultados significativos em cerca de:', ['36%', '90%', '5%', '100%'], 0, 'Crise.'),
    mc('Consistência de uma medida é:', ['Confiabilidade', 'Validade', 'Significância', 'Amostra'], 0, 'Definição.'),
    mc('Uma resposta à crise foi:', ['Pré-registro', 'Amostras menores', 'Abolir estatística', 'Nada'], 0, 'Prática.'),
    disc('Analise o estudo empírico escolhido.', ['Hipótese e desenho', 'Amostra e variáveis', 'Resultados', 'Limites']),
  ],
  resumo: ['Experimento: VI e VD.', 'Grupo controle e aleatorização.', 'Correlação ≠ causalidade.', 'Validade e confiabilidade.', 'Replicação (2015).'],
  referencias: [
    { texto: 'Open Science Collaboration, "Estimating the reproducibility of psychological science", Science (2015).' },
    { texto: 'William James, Princípios de psicologia (1890).' },
    { texto: 'B. F. Skinner, Ciência e comportamento humano (1953).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do estudo', 'Ler a fonte indicada'],
  revisao: [['VI', 'Manipulada.'], ['Correlação', 'Não é causa.'], ['2015', 'Replicação.']],
  avancado: {
    texto: `<h3>Tamanho de efeito</h3>
<p>Um resultado "estatisticamente significativo" pode ser pequeno na prática ${tag('fato')}. O tamanho de efeito (como o d de Cohen) indica a magnitude da diferença ${tag('fato')}. Com amostras muito grandes, efeitos mínimos se tornam significativos; por isso é preciso olhar a magnitude, não só o valor p ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Open Science Collaboration, Science (2015).' }],
    exercicios: [
      mc('O tamanho de efeito indica:', ['A magnitude da diferença', 'Só se há diferença', 'O número de participantes', 'O nome do teste'], 0, 'Definição.'),
      mc('Com amostras enormes, efeitos mínimos tendem a ser:', ['Significativos', 'Sempre nulos', 'Invisíveis', 'Impossíveis'], 0, 'Estatística.'),
      mc('O d de Cohen é uma medida de:', ['Tamanho de efeito', 'Confiabilidade', 'Validade', 'Amostra'], 0, 'Estatística.'),
      disc('Explique, com exemplo, por que "significativo" não quer dizer "importante".', ['Significância', 'Magnitude', 'Exemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'ps1-4', titulo: 'Estudo de caso e ética da pesquisa', duracao: '150 min',
  aprendera: ['Reconhecer o valor e os limites do estudo de caso', 'Conhecer casos clássicos da neuropsicologia', 'Discutir experimentos eticamente controversos', 'Conhecer as normas éticas de pesquisa no Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quando um experimento não é possível, um único caso pode ensinar muito. E até onde se pode ir para obter conhecimento sobre pessoas?</p>
<h3>Estudo de caso</h3>
<p>O estudo de caso descreve em profundidade uma pessoa ou situação ${tag('fato')}. Phineas Gage sofreu em 1848 uma lesão no lobo frontal por uma barra de ferro e teve mudanças de personalidade relatadas ${tag('fato')}. O paciente H. M. (Henry Molaison), operado em 1953, perdeu a capacidade de formar novas memórias declarativas, o que ensinou muito sobre a memória ${tag('fato')}. Casos ilustram e sugerem hipóteses, mas não permitem generalizar sozinhos ${tag('argumento')}.</p>
<h3>Experimentos controversos</h3>
<p>Nos experimentos de obediência de Stanley Milgram (publicados em 1963), muitos participantes aplicaram o que pensavam ser choques elétricos fortes por ordem de uma autoridade ${tag('fato')}. Os resultados e a ética do estudo, que enganou e estressou os participantes, são discutidos até hoje ${tag('debate')}.</p>
<h3>Ética</h3>
<p>Pesquisas com pessoas exigem consentimento livre e esclarecido, proteção da privacidade, avaliação de riscos e direito de desistir ${tag('fato')}. No Brasil, a Resolução CNS nº 510/2016 trata da ética em pesquisas em ciências humanas e sociais, e o Código de Ética Profissional do Psicólogo orienta a prática ${tag('fato')}. A dignidade da pessoa não pode ser sacrificada ao conhecimento ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Estudo de caso', 'Descrição aprofundada de uma pessoa ou situação.'],
    ['Lobo frontal', 'Região do cérebro ligada a planejamento e controle do comportamento.'],
    ['Memória declarativa', 'Memória de fatos e acontecimentos que podem ser relatados.'],
    ['Consentimento livre e esclarecido', 'Concordância informada e voluntária em participar de pesquisa.'],
    ['Comitê de ética', 'Instância que avalia a ética de projetos de pesquisa.'],
  ],
  exemplos: `<p><strong>Pesquisar na escola:</strong> um estudante quer aplicar um questionário sobre ansiedade a colegas. Precisa explicar o objetivo, garantir anonimato, obter consentimento (e dos responsáveis, se menores), permitir desistência e ter um encaminhamento caso alguém revele sofrimento grave. A ética começa antes da primeira pergunta.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Código de Nuremberg (1947) estabeleceu princípios de ética em pesquisa com seres humanos após os crimes médicos nazistas ${tag('fato')}. <strong>No Brasil:</strong> o sistema CEP/Conep avalia pesquisas com seres humanos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a dignidade limita a pesquisa', tag: 'argumento',
    premissas: ['A pessoa humana tem dignidade e não pode ser tratada apenas como meio.', 'Certas pesquisas tratariam pessoas apenas como meio para obter dados.', 'Logo, essas pesquisas são ilícitas, por maior que seja o conhecimento esperado.'],
    conclusao: 'Logo, o conhecimento psicológico deve ser buscado dentro de limites éticos.',
    nota: 'A fórmula ecoa Kant e a doutrina católica sobre a dignidade da pessoa.',
  },
  objecoes: [
    { objecao: 'Sem enganar os participantes, certas pesquisas seriam impossíveis.', tag: 'debate',
      resposta: 'Algumas pesquisas usam engano leve com esclarecimento posterior e aprovação ética; outras foram consideradas inaceitáveis. O debate é sobre limites: o engano não pode causar dano sério nem violar a dignidade. Nem tudo o que é cientificamente útil é moralmente permitido.' },
  ],
  aplicacao: `<p>Escreva um protocolo ético simples para uma pesquisa de questionário com colegas: objetivo, termo de consentimento, garantia de anonimato, riscos, direito de desistir e encaminhamento em caso de necessidade.</p>`,
  fonte: {
    obra: 'Conselho Nacional de Saúde, Resolução nº 510/2016', link: null,
    orientacao: `<p>Leia os princípios e as definições de consentimento e assentimento.</p>`,
  },
  perguntas: [
    { p: 'O que ensinou o caso H. M.?', r: 'Que certas estruturas cerebrais são necessárias para formar novas memórias declarativas.' },
    { p: 'Por que os estudos de Milgram são discutidos?', r: 'Pelos resultados sobre obediência e pela ética, que envolveu engano e estresse.' },
    { p: 'Que resolução trata da ética em pesquisas de ciências humanas no Brasil?', r: 'A Resolução CNS nº 510/2016.' },
  ],
  exercicios: [
    mc('O acidente de Phineas Gage foi em:', ['1848', '1953', '1963', '1879'], 0, 'Caso.'),
    mc('H. M. perdeu sobretudo a capacidade de:', ['Formar novas memórias declarativas', 'Falar', 'Ver', 'Andar'], 0, 'Memória.'),
    mc('Os estudos de Milgram trataram de:', ['Obediência à autoridade', 'Memória', 'Percepção visual', 'Sono'], 0, 'Tema.'),
    mc('O Código de Nuremberg é de:', ['1947', '1963', '2016', '1848'], 0, 'Ética.'),
    mc('Estudos de caso servem sobretudo para:', ['Ilustrar e sugerir hipóteses', 'Generalizar sozinhos', 'Provar leis universais', 'Nada'], 0, 'Limites.'),
    disc('Escreva o protocolo ético da aplicação.', ['Consentimento', 'Anonimato', 'Riscos', 'Encaminhamento']),
  ],
  resumo: ['Estudo de caso: profundidade, não generalização.', 'Gage (1848), H. M. (1953).', 'Milgram (1963).', 'Consentimento e privacidade.', 'CNS 510/2016; dignidade.'],
  referencias: [
    { texto: 'Conselho Nacional de Saúde, Resolução nº 510/2016.' },
    { texto: 'Conselho Federal de Psicologia, Código de Ética Profissional do Psicólogo (2005).' },
    { texto: 'Catecismo da Igreja Católica, §§ 2292–2296.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o protocolo', 'Ler a fonte indicada'],
  revisao: [['Gage', 'Lobo frontal.'], ['H. M.', 'Memória.'], ['510/2016', 'Ética.']],
  avancado: {
    texto: `<h3>O experimento da prisão de Stanford</h3>
<p>Em 1971, Philip Zimbardo conduziu um estudo em que estudantes fizeram papéis de guardas e prisioneiros, interrompido após seis dias ${tag('fato')}. Por décadas foi citado como prova do poder da situação sobre a conduta ${tag('fato')}. Análises posteriores de arquivos questionaram o método, apontando instruções aos guardas e encenação ${tag('debate')}. O caso ensina a ler criticamente até os estudos mais famosos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Open Science Collaboration, Science (2015).' }],
    exercicios: [
      mc('O estudo de Stanford é de:', ['1971', '1963', '1848', '2015'], 0, 'Zimbardo.'),
      mc('Foi interrompido após:', ['Seis dias', 'Seis meses', 'Um ano', 'Uma hora'], 0, 'Duração.'),
      mc('Análises posteriores:', ['Questionaram o método', 'Confirmaram tudo sem ressalvas', 'Não existem', 'Proibiram citá-lo'], 0, 'Debate.'),
      disc('Explique o que o caso de Stanford ensina sobre a leitura crítica de estudos famosos.', ['Estudo', 'Críticas', 'Lição', 'Aplicação'])],
  },
}),

avaliacao('ps1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o objeto da psicologia, seus conceitos básicos e métodos, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário.</li><li>Releia a análise do estudo empírico.</li></ul>`,
[
  disc('Um estudo diz que "quem pratica esporte tem menos sintomas de ansiedade". Explique se isso prova causalidade, que desenho de pesquisa daria evidência mais forte e que cuidados éticos ele exigiria.', ['Correlação', 'Desenho experimental', 'Ética', 'Conclusão']),
  disc('Distinga, sobre a memória, o que é dado empírico, teoria psicológica e tese filosófica, usando Aristóteles ou Tomás e um resultado de pesquisa moderno.', ['Dado', 'Teoria', 'Tese filosófica', 'Síntese']),
]),
];
