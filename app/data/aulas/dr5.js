// Direito V — aplicações, pesquisa de jurisprudência e avaliação integradora (etapas 9 a 11 do percurso de Direito).
// Direitos do consumidor; família e sucessões na prática; acesso à justiça e meios consensuais;
// pesquisa de jurisprudência; avaliação integradora.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dr5-1', titulo: 'Direitos do consumidor: o Código de Defesa do Consumidor na prática', duracao: '150 min',
  aprendera: ['Conhecer os direitos básicos do consumidor', 'Distinguir vício do produto e fato do produto', 'Identificar práticas e cláusulas abusivas', 'Saber reclamar pelos canais oficiais'],
  prereq: ['Direito IV (módulo DR4)'],
  explicacao: `
<h3>O problema</h3>
<p>Todos somos consumidores. Quando um produto quebra, uma cobrança é indevida ou um contrato traz cláusula injusta, o que fazer?</p>
<h3>Fundamento</h3>
<p>A Constituição manda o Estado promover a defesa do consumidor (art. 5º, XXXII) ${tag('fato')}. O Código de Defesa do Consumidor é a Lei nº 8.078/1990 ${tag('fato')}. Ele parte da vulnerabilidade do consumidor diante do fornecedor ${tag('fato')}.</p>
<h3>Direitos básicos</h3>
<p>O art. 6º lista, entre outros, a proteção da vida e da saúde, a informação adequada e clara, a proteção contra publicidade enganosa e práticas abusivas, e a facilitação da defesa, inclusive com inversão do ônus da prova em certos casos ${tag('fato')}.</p>
<h3>Vício e fato do produto</h3>
<p>Vício é o defeito que torna o produto impróprio ou diminui seu valor; o fornecedor tem trinta dias para saná-lo, e depois o consumidor pode escolher troca, devolução do dinheiro ou abatimento do preço (art. 18) ${tag('fato')}. Fato do produto é o defeito que causa dano à pessoa, como um aparelho que explode; o fabricante responde independentemente de culpa (art. 12) ${tag('fato')}. O prazo para reclamar de vício aparente é de trinta dias para produtos não duráveis e de noventa dias para duráveis (art. 26) ${tag('fato')}.</p>
<h3>Práticas e cláusulas abusivas</h3>
<p>A venda casada é prática abusiva (art. 39, I) ${tag('fato')}. São nulas as cláusulas abusivas, como as que exoneram o fornecedor de responsabilidade (art. 51) ${tag('fato')}. Nas compras fora do estabelecimento, como pela internet, o consumidor pode desistir em sete dias (art. 49) ${tag('fato')}. Quem paga quantia cobrada indevidamente tem direito à devolução em dobro, salvo engano justificável (art. 42, parágrafo único) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Vulnerabilidade', 'Posição mais fraca do consumidor na relação de consumo.'],
    ['Vício do produto', 'Defeito que torna o produto impróprio ou diminui seu valor (CDC art. 18).'],
    ['Fato do produto', 'Defeito que causa dano à pessoa (CDC art. 12).'],
    ['Venda casada', 'Condicionar a venda de um produto à compra de outro (CDC art. 39, I).'],
    ['Direito de arrependimento', 'Desistência em sete dias nas compras fora do estabelecimento (CDC art. 49).'],
  ],
  exemplos: `<p><strong>Geladeira com defeito:</strong> uma geladeira para de gelar dois meses após a compra. É vício de produto durável: o consumidor reclama dentro de noventa dias, o fornecedor tem trinta dias para consertar; se não consertar, o consumidor escolhe troca, devolução do valor ou abatimento. Se o defeito tivesse causado um incêndio, seria fato do produto, com dever de indenizar os danos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a defesa do consumidor ganhou força na segunda metade do século XX, com a expansão do consumo de massa ${tag('fato')}. <strong>No Brasil:</strong> além do Judiciário, há os Procons e a plataforma pública consumidor.gov.br, em que empresas cadastradas respondem às reclamações ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o direito trata desigualmente as partes na relação de consumo', tag: 'argumento',
    premissas: ['Justiça é dar a cada um o que lhe é devido, considerando a situação real das partes.', 'O fornecedor conhece o produto, redige o contrato e tem mais recursos; o consumidor, em regra, não.', 'Tratar como iguais partes muito desiguais favorece o mais forte.'],
    conclusao: 'Logo, proteger o consumidor vulnerável realiza a igualdade material, e não a contraria.',
    nota: 'A proteção tem limites: o CDC não autoriza o consumidor a agir de má-fé.',
  },
  objecoes: [
    { objecao: 'A proteção ao consumidor encarece os produtos e prejudica a todos.', tag: 'debate',
      resposta: 'Há custos de conformidade, e economistas discutem seu tamanho. Mas também há ganhos: produtos mais seguros, informação mais clara e confiança no mercado. A questão é calibrar regras, não abandonar a proteção diante da assimetria real de informação.' },
  ],
  aplicacao: `<p>Escolha um problema de consumo real ou plausível (cobrança indevida, produto com defeito, cancelamento de serviço) e redija uma reclamação fundamentada, indicando os artigos do CDC, o pedido e o canal adequado.</p>`,
  fonte: {
    obra: 'Lei nº 8.078/1990 (Código de Defesa do Consumidor), arts. 6º, 12, 18, 26, 39, 42, 49 e 51', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Leia os direitos básicos (art. 6º), a responsabilidade (arts. 12 e 18), os prazos (art. 26) e as práticas e cláusulas abusivas (arts. 39 e 51).</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre vício e fato do produto?', r: 'Vício torna o produto impróprio ou desvalorizado; fato do produto causa dano à pessoa.' },
    { p: 'Em quanto tempo se pode desistir de uma compra pela internet?', r: 'Em sete dias (CDC art. 49).' },
    { p: 'Qual o prazo para reclamar de vício aparente em produto durável?', r: 'Noventa dias (CDC art. 26).' },
  ],
  exercicios: [
    mc('O Código de Defesa do Consumidor é a Lei nº:', ['8.078/1990', '10.406/2002', '9.099/1995', '13.105/2015'], 0, 'CDC.'),
    mc('Condicionar a venda de um produto à compra de outro é:', ['Permitido', 'Venda casada, prática abusiva', 'Arrependimento', 'Vício'], 1, 'Art. 39, I.'),
    mc('Após reclamação de vício, o fornecedor tem para saná-lo:', ['7 dias', '30 dias', '90 dias', '1 ano'], 1, 'Art. 18.'),
    mc('Cobrança indevida paga gera, em regra, devolução:', ['Simples', 'Em dobro', 'Nenhuma', 'Em triplo'], 1, 'Art. 42, parágrafo único.'),
    mc('Defeito que causa dano à pessoa é:', ['Vício do produto', 'Fato do produto', 'Arrependimento', 'Cláusula abusiva'], 1, 'Art. 12.'),
    disc('Redija uma reclamação fundamentada sobre um problema de consumo, com artigos, pedido e canal.', ['Fatos', 'Artigos do CDC', 'Pedido', 'Canal']),
  ],
  resumo: ['CF art. 5º, XXXII; CDC (Lei 8.078/1990).', 'Direitos básicos (art. 6º).', 'Fato (art. 12) e vício (art. 18) do produto.', 'Prazos: 30 e 90 dias (art. 26); arrependimento em 7 dias (art. 49).', 'Práticas e cláusulas abusivas (arts. 39 e 51).'],
  referencias: [
    { texto: 'Lei nº 8.078, de 1990 (Código de Defesa do Consumidor).' },
    { texto: 'Constituição da República Federativa do Brasil (1988), art. 5º, XXXII.' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2409–2411 (justiça nas trocas).', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a reclamação fundamentada', 'Ler os artigos indicados'],
  revisao: [['Art. 18', 'Vício: 30 dias para sanar.'], ['Art. 49', 'Arrependimento: 7 dias.'], ['Art. 51', 'Cláusulas abusivas.']],
  avancado: {
    texto: `<h3>Superendividamento</h3>
<p>A Lei nº 14.181/2021 alterou o CDC para tratar do superendividamento do consumidor pessoa natural de boa-fé, com regras de crédito responsável e um processo de repactuação das dívidas que preserve o mínimo existencial ${tag('fato')}. A tradição moral condena a usura e pede que o crédito sirva à pessoa (CIC 2269, 2449) ${tag('doutrina')}. A eficácia da lei depende de sua aplicação pelos tribunais e da educação financeira ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Lei nº 14.181, de 2021 (superendividamento).' }],
    exercicios: [
      mc('A lei do superendividamento é de:', ['1990', '2002', '2021', '2023'], 2, 'Lei 14.181.'),
      mc('A repactuação deve preservar o:', ['Lucro do banco', 'Mínimo existencial', 'Limite do cartão', 'Score'], 1, 'Dignidade.'),
      mc('A lei protege o consumidor:', ['De má-fé', 'Pessoa natural de boa-fé', 'Empresas', 'Bancos'], 1, 'Requisito.'),
      disc('Proponha três critérios de crédito responsável à luz da lei e da tradição moral.', ['Critérios', 'Lei', 'Doutrina', 'Limites'])],
  },
}),

aula({
  id: 'dr5-2', titulo: 'Família e sucessões na prática: casamento, guarda, alimentos, testamento e inventário', duracao: '150 min',
  aprendera: ['Conhecer as formas de constituição da família no direito brasileiro', 'Entender guarda e alimentos', 'Conhecer as formas de testamento', 'Saber quando o inventário pode ser feito em cartório'],
  prereq: ['Aula anterior', 'Direito civil (dr4-2)'],
  explicacao: `
<h3>O problema</h3>
<p>Casamento, filhos, separação, morte de um familiar: são momentos em que o direito entra na vida de toda família. O que é preciso saber?</p>
<h3>Constituição da família</h3>
<p>A Constituição protege a família, reconhece a união estável e manda a lei facilitar sua conversão em casamento (art. 226, § 3º) ${tag('fato')}. O Código Civil caracteriza a união estável como convivência pública, contínua e duradoura com objetivo de constituir família (art. 1.723) ${tag('fato')}. O casamento religioso pode ter efeitos civis, cumpridos os requisitos legais (CF art. 226, § 2º) ${tag('fato')}.</p>
<h3>Filhos: guarda e alimentos</h3>
<p>A guarda pode ser unilateral ou compartilhada (CC art. 1.583); desde a Lei nº 13.058/2014, a compartilhada é a regra quando ambos os pais estão aptos ${tag('fato')}. Os alimentos são fixados na proporção das necessidades de quem pede e dos recursos de quem paga (CC art. 1.694, § 1º) ${tag('fato')}.</p>
<h3>Testamento e inventário</h3>
<p>O Código Civil prevê os testamentos ordinários público, cerrado e particular (art. 1.862) ${tag('fato')}. Não havendo testamento, a herança segue a ordem de vocação hereditária (art. 1.829) ${tag('fato')}. Desde a Lei nº 11.441/2007, inventário, partilha, separação e divórcio consensuais podem ser feitos por escritura pública em cartório quando as partes são capazes e concordes, com assistência de advogado ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>A Igreja ensina que o casamento é uma aliança indissolúvel entre um homem e uma mulher, ordenada ao bem dos cônjuges e à geração e educação dos filhos (CIC 1601, 1644) ${tag('doutrina')}. O direito civil brasileiro admite o divórcio, simplificado pela Emenda Constitucional nº 66/2010 ${tag('fato')}. O católico distingue o efeito civil do vínculo sacramental, que a Igreja considera não dissolvido pelo divórcio civil (CIC 2384) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['União estável', 'Convivência pública, contínua e duradoura com objetivo de família (CC art. 1.723).'],
    ['Guarda compartilhada', 'Responsabilização conjunta dos pais pelos filhos; regra desde 2014.'],
    ['Alimentos', 'Prestação para o sustento, fixada pelo binômio necessidade e possibilidade.'],
    ['Ordem de vocação hereditária', 'Sequência legal de herdeiros na falta de testamento (CC art. 1.829).'],
    ['Inventário extrajudicial', 'Inventário por escritura em cartório, com herdeiros capazes e concordes.'],
  ],
  exemplos: `<p><strong>Planejando a sucessão:</strong> um casal com três filhos quer deixar parte dos bens a uma obra social. Pode fazer testamento público em cartório destinando até a metade disponível; a legítima continua dos herdeiros necessários. Mais tarde, se os herdeiros forem maiores e estiverem de acordo, poderão fazer o inventário em cartório, com advogado, sem processo judicial, salvo exigências específicas da lei e das normas vigentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> o direito de família muda muito entre países, sobretudo quanto ao divórcio e à definição de casamento ${tag('fato')}. <strong>No Brasil:</strong> o divórcio foi introduzido pela Emenda Constitucional nº 9/1977 e pela Lei nº 6.515/1977 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os meios consensuais convêm especialmente às famílias', tag: 'argumento',
    premissas: ['Nos conflitos de família, as pessoas continuarão ligadas depois da decisão, sobretudo quando há filhos.', 'Um processo litigioso tende a acirrar o conflito e expor a intimidade.', 'Acordos construídos pelas partes costumam ser mais cumpridos e preservar a convivência.'],
    conclusao: 'Logo, nas questões de família convém priorizar a mediação e o acordo, sem renunciar à proteção dos vulneráveis.',
    nota: 'O CPC prevê regras próprias para as ações de família, com ênfase na solução consensual (arts. 693 a 699).',
  },
  objecoes: [
    { objecao: 'Se o Estado admite o divórcio, o ensino da Igreja sobre a indissolubilidade não tem relevância jurídica.', tag: 'debate',
      resposta: 'A lei civil e a lei moral não coincidem necessariamente: a lei civil regula efeitos civis numa sociedade plural, e a Igreja ensina sobre o vínculo e a consciência. A doutrina continua relevante para o fiel e para o debate público sobre políticas de proteção à família, ainda que não determine o texto da lei.' },
  ],
  aplicacao: `<p>Monte um guia prático de uma página para uma família da sua comunidade: como formalizar a união, como funcionam guarda e alimentos, como fazer um testamento e quando o inventário pode ser feito em cartório, com os artigos de cada ponto.</p>`,
  fonte: {
    obra: 'Lei nº 10.406/2002 (Código Civil), arts. 1.583, 1.694, 1.723, 1.829 e 1.862; Lei nº 11.441/2007; Constituição de 1988, art. 226; Catecismo, §§ 1601, 1644 e 2384', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>No Código Civil, guarda, alimentos, união estável e sucessão. Na Lei 11.441, o procedimento em cartório. No Catecismo, o casamento e o divórcio.</p>`,
  },
  perguntas: [
    { p: 'Desde quando a guarda compartilhada é a regra?', r: 'Desde a Lei nº 13.058/2014.' },
    { p: 'Quais os testamentos ordinários?', r: 'Público, cerrado e particular.' },
    { p: 'Quando o inventário pode ser feito em cartório?', r: 'Quando os herdeiros são capazes e concordes, com assistência de advogado.' },
  ],
  exercicios: [
    mc('A união estável está caracterizada no CC, art.:', ['1.583', '1.694', '1.723', '1.862'], 2, 'Convivência pública.'),
    mc('Os alimentos são fixados segundo:', ['Só a necessidade', 'Necessidade e possibilidade', 'Só a renda do pai', 'Tabela fixa'], 1, 'Art. 1.694, § 1º.'),
    mc('O inventário em cartório foi permitido pela Lei:', ['6.515/1977', '11.441/2007', '13.058/2014', '8.078/1990'], 1, 'Extrajudicial.'),
    mc('A ordem de vocação hereditária está no CC, art.:', ['1.723', '1.829', '1.845', '1.862'], 1, 'Sem testamento.'),
    mc('Para a Igreja, o divórcio civil:', ['Dissolve o vínculo sacramental', 'Não dissolve o vínculo sacramental válido', 'É sacramento', 'É indiferente'], 1, 'CIC 2384.'),
    disc('Monte um guia prático de família e sucessões com os artigos de cada ponto.', ['União', 'Guarda e alimentos', 'Testamento', 'Inventário']),
  ],
  resumo: ['CF art. 226: família, casamento, união estável.', 'Guarda compartilhada como regra (2014).', 'Alimentos: necessidade e possibilidade.', 'Testamentos: público, cerrado, particular; ordem do art. 1.829.', 'Inventário e divórcio em cartório (Lei 11.441/2007).'],
  referencias: [
    { texto: 'Lei nº 10.406, de 2002 (Código Civil), livros de família e sucessões.' },
    { texto: 'João Paulo II, Familiaris consortio (1981).', livro: 'jp2-familiaris' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1601–1666 e 2384.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o guia prático', 'Ler os artigos indicados'],
  revisao: [['13.058/2014', 'Guarda compartilhada.'], ['11.441/2007', 'Cartório.'], ['CIC 2384', 'Divórcio.']],
  avancado: {
    texto: `<h3>Alienação parental</h3>
<p>A Lei nº 12.318/2010 define a alienação parental como a interferência na formação psicológica da criança promovida por um dos genitores para que repudie o outro, e prevê medidas judiciais ${tag('fato')}. A lei é objeto de críticas e de propostas de revogação, sob o argumento de que poderia ser usada contra mães que denunciam abusos; seus defensores respondem que protege o vínculo da criança com ambos os pais ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Lei nº 12.318, de 2010 (alienação parental).' }],
    exercicios: [
      mc('A lei da alienação parental é de:', ['2002', '2010', '2014', '2021'], 1, 'Lei 12.318.'),
      mc('A alienação parental visa a que a criança:', ['Estude mais', 'Repudie um dos genitores', 'Mude de escola', 'Herde'], 1, 'Definição.'),
      mc('A lei é hoje:', ['Consensual', 'Objeto de debate', 'Revogada desde 2010', 'Constitucional pétrea'], 1, 'Debate.'),
      disc('Apresente os argumentos de críticos e defensores da lei da alienação parental e avalie-os pelo interesse da criança.', ['Críticos', 'Defensores', 'Interesse da criança', 'Avaliação'])],
  },
}),

aula({
  id: 'dr5-3', titulo: 'Acesso à justiça e meios consensuais: Defensoria, Juizados, conciliação, mediação e arbitragem', duracao: '150 min',
  aprendera: ['Conhecer as garantias de acesso à justiça', 'Saber quando usar os Juizados Especiais', 'Distinguir conciliação, mediação e arbitragem', 'Relacionar a solução pacífica de conflitos com a tradição cristã'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Ter um direito não basta: é preciso poder exercê-lo. Como alguém sem recursos chega à Justiça, e quando é melhor nem chegar ao processo?</p>
<h3>Garantias</h3>
<p>A lei não excluirá da apreciação do Judiciário lesão ou ameaça a direito (CF art. 5º, XXXV) ${tag('fato')}. O Estado prestará assistência jurídica integral e gratuita aos que comprovarem insuficiência de recursos (art. 5º, LXXIV), função da Defensoria Pública (art. 134) ${tag('fato')}.</p>
<h3>Juizados Especiais</h3>
<p>Os Juizados Especiais Cíveis (Lei nº 9.099/1995) julgam causas de menor complexidade de até quarenta salários mínimos, com procedimento simples; nas de até vinte salários mínimos a parte pode atuar sem advogado (art. 9º) ${tag('fato')}.</p>
<h3>Meios consensuais</h3>
<p>O Código de Processo Civil de 2015 (Lei nº 13.105) manda o Estado promover, sempre que possível, a solução consensual dos conflitos (art. 3º, § 2º) e prevê audiência de conciliação ou mediação no início do processo (art. 334) ${tag('fato')}. Na conciliação, um terceiro pode sugerir soluções, sobretudo quando as partes não tinham vínculo anterior; na mediação, o terceiro ajuda as partes a retomar o diálogo e encontrar a solução, sobretudo quando há vínculo (CPC art. 165, §§ 2º e 3º) ${tag('fato')}. A mediação é regulada também pela Lei nº 13.140/2015 ${tag('fato')}. Na arbitragem (Lei nº 9.307/1996), as partes escolhem um árbitro privado cuja sentença tem força de sentença judicial, para direitos patrimoniais disponíveis ${tag('fato')}.</p>
<h3>A tradição</h3>
<p>O Evangelho exorta a reconciliar-se com o adversário enquanto se está a caminho (Mt 5,25), e São Paulo repreende os cristãos de Corinto por levarem seus litígios a tribunais em vez de resolvê-los entre irmãos (1Cor 6,1–7) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Inafastabilidade da jurisdição', 'Toda lesão ou ameaça a direito pode ser levada ao Judiciário (CF art. 5º, XXXV).'],
    ['Defensoria Pública', 'Instituição que presta assistência jurídica gratuita aos necessitados (CF art. 134).'],
    ['Conciliação', 'Método em que um terceiro pode sugerir soluções às partes.'],
    ['Mediação', 'Método em que um terceiro ajuda as partes a dialogar e construir a solução.'],
    ['Arbitragem', 'Solução por árbitro escolhido pelas partes, com força de sentença.'],
  ],
  exemplos: `<p><strong>Escolhendo o caminho:</strong> uma vizinha cobra de outra R$ 3 mil pelo conserto de um vazamento. O valor está abaixo de vinte salários mínimos: pode ir ao Juizado Especial sem advogado. Mas, como serão vizinhas por muitos anos, a mediação — no próprio Juizado, num centro judiciário de solução de conflitos ou numa câmara comunitária — pode resolver o caso e preservar a convivência.</p>`,
  contexto: `<p><strong>No mundo:</strong> o estudo de Mauro Cappelletti e Bryant Garth sobre o acesso à justiça (anos 1970) descreveu "ondas" de reforma: assistência jurídica aos pobres, tutela de interesses coletivos e novos métodos de solução de conflitos ${tag('fato')}. <strong>No Brasil:</strong> o Conselho Nacional de Justiça instituiu em 2010 a política de tratamento adequado dos conflitos (Resolução nº 125) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o acesso à justiça é exigência do bem comum', tag: 'argumento',
    premissas: ['Direitos que não podem ser exercidos são promessas vazias.', 'Os mais pobres são os que mais dependem da proteção da lei e os que menos podem pagar por ela.', 'Uma ordem jurídica que só protege quem pode pagar trai a igualdade perante a lei.'],
    conclusao: 'Logo, assistência jurídica gratuita e procedimentos simples são exigências do bem comum.',
    nota: 'A tradição cristã tem uma longa história de defesa jurídica dos pobres; Santo Ivo, padroeiro dos advogados, é lembrado por isso.',
  },
  objecoes: [
    { objecao: 'Incentivar acordos é forçar o mais fraco a aceitar menos do que tem direito.', tag: 'debate',
      resposta: 'O risco é real quando há grande desigualdade de poder ou informação. Por isso a mediação exige voluntariedade, informação e, em regra, assistência jurídica, e o acordo pode ser recusado. Acordo bom é o consentido e informado; o mau acordo deve ser evitado, não o método em si.' },
  ],
  aplicacao: `<p>Faça o mapa do acesso à justiça no seu município: onde fica a Defensoria Pública, o Juizado Especial, o centro de solução de conflitos (CEJUSC) e o Procon, que casos cada um atende e como se chega a eles.</p>`,
  fonte: {
    obra: 'Constituição de 1988, art. 5º, XXXV e LXXIV, e art. 134; Lei nº 9.099/1995; Lei nº 13.105/2015 (CPC), arts. 3º, 165 e 334; Lei nº 13.140/2015; Lei nº 9.307/1996', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na Constituição, as garantias. Na Lei 9.099, os limites dos Juizados. No CPC, a definição de conciliação e mediação. Na Lei 9.307, a arbitragem.</p>`,
  },
  perguntas: [
    { p: 'Até que valor se pode ir ao Juizado Especial Cível sem advogado?', r: 'Até vinte salários mínimos.' },
    { p: 'Qual a diferença entre conciliação e mediação?', r: 'Na conciliação o terceiro pode sugerir soluções; na mediação ajuda as partes a construir a solução, sobretudo quando há vínculo.' },
    { p: 'Quem presta assistência jurídica gratuita?', r: 'A Defensoria Pública.' },
  ],
  exercicios: [
    mc('A inafastabilidade da jurisdição está na CF, art. 5º, inciso:', ['XXXV', 'LVII', 'LXXIV', 'XXXII'], 0, 'Acesso.'),
    mc('Os Juizados Especiais Cíveis julgam causas de até:', ['10 salários mínimos', '40 salários mínimos', '100 salários mínimos', 'Qualquer valor'], 1, 'Lei 9.099.'),
    mc('Em conflitos entre pessoas com vínculo anterior, o CPC indica preferencialmente:', ['Arbitragem', 'Mediação', 'Ação penal', 'Recurso'], 1, 'Art. 165, § 3º.'),
    mc('A Lei de Arbitragem é a nº:', ['9.307/1996', '9.099/1995', '13.140/2015', '8.078/1990'], 0, 'Árbitro privado.'),
    mc('"Reconcilia-te com teu adversário enquanto estás a caminho" está em:', ['Mt 5,25', 'Rm 13,1', 'Gn 1,27', 'Jo 3,16'], 0, 'Sermão da Montanha.'),
    disc('Faça o mapa do acesso à justiça no seu município, com instituições, casos e caminhos.', ['Defensoria', 'Juizado', 'CEJUSC e Procon', 'Caminhos']),
  ],
  resumo: ['CF art. 5º, XXXV e LXXIV; Defensoria (art. 134).', 'Juizados: até 40 SM; sem advogado até 20 SM.', 'CPC 2015: solução consensual (arts. 3º, 165, 334).', 'Mediação (Lei 13.140/2015); arbitragem (Lei 9.307/1996).', 'Mt 5,25; 1Cor 6,1–7.'],
  referencias: [
    { texto: 'Lei nº 13.105, de 2015 (Código de Processo Civil).' },
    { texto: 'Lei nº 9.099, de 1995 (Juizados Especiais).' },
    { texto: 'Mauro Cappelletti e Bryant Garth, Acesso à justiça (trad. bras. 1988).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o mapa do acesso à justiça', 'Ler os artigos indicados'],
  revisao: [['Art. 5º, XXXV', 'Acesso.'], ['9.099', 'Juizados.'], ['Art. 165', 'Conciliação e mediação.']],
  avancado: {
    texto: `<h3>Justiça restaurativa</h3>
<p>A justiça restaurativa busca, por encontros voluntários entre ofensor, vítima e comunidade, a reparação do dano e a responsabilização, ao lado ou dentro do processo penal ${tag('fato')}. O CNJ editou em 2016 a Resolução nº 225 sobre o tema ${tag('fato')}. Seus defensores veem nela uma via de reconciliação; críticos alertam para o risco de pressionar a vítima e para a falta de avaliações rigorosas ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Conselho Nacional de Justiça, Resolução nº 225, de 2016.' }],
    exercicios: [
      mc('A resolução do CNJ sobre justiça restaurativa é de:', ['2010', '2016', '2021', '1995'], 1, 'Res. 225.'),
      mc('A justiça restaurativa depende de participação:', ['Obrigatória', 'Voluntária', 'Secreta', 'Paga'], 1, 'Encontros.'),
      mc('Um risco apontado pelos críticos é:', ['Pressionar a vítima', 'Excesso de pena', 'Falta de juízes', 'Nenhum'], 0, 'Debate.'),
      disc('Avalie a justiça restaurativa à luz da finalidade da pena (CIC 2266) e dos riscos apontados.', ['Proposta', 'Doutrina', 'Riscos', 'Avaliação'])],
  },
}),

aula({
  id: 'dr5-4', titulo: 'Pesquisa de jurisprudência: como um tribunal decide um tema', duracao: '180 min',
  aprendera: ['Pesquisar jurisprudência nos portais oficiais', 'Ler ementa, relatório, voto e dispositivo', 'Identificar precedentes vinculantes', 'Planejar e redigir um relatório de pesquisa'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>A lei diz uma coisa; como os tribunais a aplicam? A pesquisa de jurisprudência responde a essa pergunta com documentos, não com impressões.</p>
<h3>Onde pesquisar</h3>
<p>Os tribunais mantêm buscas públicas de jurisprudência em seus portais, como o Supremo Tribunal Federal e o Superior Tribunal de Justiça ${tag('fato')}. Use palavras-chave, operadores e filtros de data e órgão julgador ${tag('fato')}.</p>
<h3>Como ler um acórdão</h3>
<p>A ementa resume a decisão; o relatório narra o caso; os votos trazem os fundamentos; o dispositivo diz o que foi decidido ${tag('fato')}. A ementa ajuda a selecionar, mas a análise deve apoiar-se nos votos ${tag('interpretacao')}.</p>
<h3>Precedentes</h3>
<p>O CPC manda juízes e tribunais observarem, entre outros, as decisões do STF em controle concentrado, as súmulas vinculantes e os acórdãos em recursos repetitivos e incidentes de resolução de demandas repetitivas (art. 927) ${tag('fato')}. Por isso, na pesquisa, verifique primeiro se há precedente vinculante sobre o tema ${tag('interpretacao')}.</p>
<h3>O projeto</h3>
<p>O exercício da etapa é pesquisar a jurisprudência de um tema num tribunal: escolha um tema delimitado (por exemplo, dano moral por negativação indevida no STJ, ou fornecimento de medicamentos pelo Estado no STF), reúna de dez a vinte decisões num período, registre fundamentos e resultado, e descreva a tendência e suas variações ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Jurisprudência', 'Conjunto de decisões dos tribunais sobre um tema.'],
    ['Acórdão', 'Decisão colegiada de um tribunal.'],
    ['Ementa', 'Resumo oficial da decisão.'],
    ['Súmula', 'Enunciado que sintetiza o entendimento reiterado de um tribunal.'],
    ['Precedente vinculante', 'Decisão que juízes e tribunais devem observar (CPC art. 927).'],
  ],
  exemplos: `<p><strong>Ficha de decisão:</strong> para cada acórdão, registre número do processo, tribunal e órgão, data, relator, fatos em duas linhas, questão jurídica, fundamentos principais, resultado e citação de precedentes. Com vinte fichas, você pode contar resultados, ver quais fundamentos se repetem e identificar decisões divergentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> nos países de common law, o precedente é a fonte central do direito; nos de tradição romano-germânica, a lei ocupa esse lugar ${tag('fato')}. <strong>No Brasil:</strong> a súmula vinculante foi criada pela Emenda Constitucional nº 45/2004 e o CPC de 2015 reforçou o sistema de precedentes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a coerência dos precedentes é exigência de justiça', tag: 'argumento',
    premissas: ['Justiça exige tratar casos iguais de modo igual.', 'Se tribunais decidem casos iguais de modo diferente, o resultado depende da sorte do sorteio do juiz.', 'Seguir precedentes, salvo razão para superá-los, garante igualdade e previsibilidade.'],
    conclusao: 'Logo, a coerência dos precedentes é exigência de justiça e de segurança jurídica.',
    nota: 'O CPC exige que os tribunais mantenham sua jurisprudência estável, íntegra e coerente (art. 926).',
  },
  objecoes: [
    { objecao: 'Precedentes vinculantes engessam o direito e impedem sua evolução.', tag: 'debate',
      resposta: 'Os sistemas de precedentes preveem a distinção (o caso é diferente) e a superação (o entendimento mudou, com fundamentação). O risco de engessamento existe, mas a alternativa — decisões imprevisíveis — fere a igualdade. O debate é sobre como superar bem, não sobre abandonar a coerência.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto da pesquisa: tema, tribunal, período, palavras-chave, critério de seleção das decisões, modelo de ficha e cronograma de quatro semanas.</p>`,
  fonte: {
    obra: 'Lei nº 13.105/2015 (Código de Processo Civil), arts. 926 e 927; portais de jurisprudência do STF e do STJ', link: { url: 'https://portal.stf.jus.br', rotulo: 'Portal do Supremo Tribunal Federal' },
    orientacao: `<p>No CPC, os deveres de coerência e o rol de precedentes. Nos portais, a busca de jurisprudência com filtros.</p>`,
  },
  perguntas: [
    { p: 'Quais as partes de um acórdão?', r: 'Ementa, relatório, votos e dispositivo.' },
    { p: 'Onde está o rol de precedentes a observar?', r: 'No art. 927 do CPC.' },
    { p: 'Por que não basta ler a ementa?', r: 'Porque ela resume; os fundamentos estão nos votos.' },
  ],
  exercicios: [
    mc('A súmula vinculante foi criada pela EC:', ['1/1969', '45/2004', '66/2010', '132/2023'], 1, 'Reforma do Judiciário.'),
    mc('O resumo oficial de um acórdão é a:', ['Ementa', 'Petição', 'Súmula', 'Citação'], 0, 'Leitura.'),
    mc('O dever de jurisprudência estável, íntegra e coerente está no CPC, art.:', ['3º', '334', '926', '1.829'], 2, 'Coerência.'),
    mc('Mostrar que o caso é diferente do precedente chama-se:', ['Superação', 'Distinção', 'Súmula', 'Ementa'], 1, 'Distinguishing.'),
    mc('Uma boa amostra para a pesquisa da etapa tem:', ['Uma decisão', 'De dez a vinte decisões delimitadas', 'Todas as decisões do país', 'Só notícias'], 1, 'Delimitação.'),
    disc('Apresente o pré-projeto de pesquisa de jurisprudência com tema, tribunal, período, critério, ficha e cronograma.', ['Tema e tribunal', 'Critério de seleção', 'Ficha', 'Cronograma']),
  ],
  resumo: ['Portais oficiais de jurisprudência.', 'Ementa, relatório, votos, dispositivo.', 'CPC arts. 926–927: coerência e precedentes.', 'Distinção e superação.', 'Projeto: 10 a 20 decisões, fichas, tendência.'],
  referencias: [
    { texto: 'Lei nº 13.105, de 2015 (Código de Processo Civil), arts. 926 e 927.' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
    { texto: 'Emenda Constitucional nº 45, de 2004.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a pesquisa em quatro semanas'],
  revisao: [['Art. 927', 'Precedentes.'], ['Ementa', 'Resumo.'], ['Distinção', 'Caso diferente.']],
  avancado: {
    texto: `<h3>Repercussão geral e recursos repetitivos</h3>
<p>Para recorrer ao STF por recurso extraordinário, é preciso demonstrar a repercussão geral da questão constitucional (CF art. 102, § 3º) ${tag('fato')}. No STJ, os recursos repetitivos permitem julgar uma tese aplicada a muitos processos iguais ${tag('fato')}. Esses mecanismos reduzem o volume de processos e uniformizam entendimentos; críticos apontam o risco de decisões abstratas, distantes dos casos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Constituição da República Federativa do Brasil (1988), art. 102, § 3º.' }],
    exercicios: [
      mc('A repercussão geral é exigida no recurso:', ['Extraordinário', 'Especial', 'De apelação', 'De agravo simples'], 0, 'STF.'),
      mc('Os recursos repetitivos são julgados no:', ['STJ (e STF)', 'Juizado', 'Procon', 'Cartório'], 0, 'Teses.'),
      mc('Um risco apontado é o de decisões:', ['Abstratas demais', 'Rápidas demais', 'Sem relator', 'Sem ementa'], 0, 'Debate.'),
      disc('Encontre um tema de repercussão geral ou repetitivo ligado à sua pesquisa e explique seu impacto.', ['Tema', 'Tese', 'Impacto', 'Fonte'])],
  },
}),

avaliacao('dr5-5', 'Avaliação integradora de Direito', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Direito. Reúne questões de todos os módulos (DR1 a DR5) e pede duas discursivas de síntese. A conclusão do percurso exige também a pesquisa de jurisprudência de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Releia os artigos da Constituição, do Código Civil, do Código Penal, do CDC e do CPC estudados.</li><li>Releia a rubrica da pesquisa (dr5-4).</li></ul>`,
[
  disc('Resolva um caso hipotético de consumo ou de família: identifique os fatos relevantes, as normas aplicáveis, as garantias constitucionais e o caminho mais adequado (judicial ou consensual), justificando a escolha.', ['Fatos', 'Normas', 'Garantias', 'Caminho e justificativa']),
  disc('Responda se a lei injusta obriga, usando ao menos uma escola do pensamento jurídico, um caso do direito brasileiro e a tradição da lei natural, e distinguindo doutrina, fato e interpretação.', ['Escola jurídica', 'Caso brasileiro', 'Lei natural', 'Distinções']),
]),
];
