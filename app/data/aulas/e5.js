// Economia V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Economia).
// Economia brasileira recente, finanças pessoais e avaliação de políticas, economia no debate público
// e o projeto de pesquisa econômica. A avaliação final integra E1 a E5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'e5-1', titulo: 'A economia brasileira contemporânea: do Plano Real às reformas recentes', duracao: '150 min',
  aprendera: ['Explicar o desenho do Plano Real e da URV', 'Situar as regras fiscais brasileiras desde 2000', 'Relacionar ciclos de crescimento e crises recentes às políticas adotadas', 'Avaliar reformas com dados e critérios explícitos'],
  prereq: ['Economia IV (módulo E4)'],
  explicacao: `
<h3>O problema</h3>
<p>Depois de décadas de inflação alta, o Brasil estabilizou a moeda em 1994 e passou a discutir, a cada governo, como equilibrar contas públicas, crescimento e redução da pobreza. Esta aula aplica os instrumentos do percurso ao período recente.</p>
<h3>O Plano Real</h3>
<p>O plano teve três etapas: ajuste fiscal inicial, criação da Unidade Real de Valor (URV) em 1994 — uma unidade de conta que alinhou preços e salários antes da troca da moeda — e a introdução do real em 1º de julho de 1994 ${tag('fato')}. A URV atacou a inflação inercial ao sincronizar os reajustes ${tag('interpretacao')}. Até 1999, o câmbio funcionou como âncora; depois vieram o câmbio flutuante e as metas de inflação ${tag('fato')}.</p>
<h3>Regras fiscais</h3>
<ul>
<li>Lei de Responsabilidade Fiscal (Lei Complementar nº 101, de 2000) ${tag('fato')}.</li>
<li>Teto de gastos (Emenda Constitucional nº 95, de 2016) ${tag('fato')}.</li>
<li>Novo arcabouço fiscal (Lei Complementar nº 200, de 2023), que substituiu o teto ${tag('fato')}.</li>
</ul>
<h3>Crescimento, crise e reformas</h3>
<p>Nos anos 2000, a alta dos preços das commodities e a expansão do crédito sustentaram o crescimento; o Bolsa Família (2003) ampliou a transferência de renda focalizada ${tag('fato')}. Entre 2014 e 2016, o país viveu uma das recessões mais profundas de sua história, com causas debatidas: deterioração fiscal, queda das commodities, intervenções setoriais, crise política ${tag('debate')}. Seguiram-se a reforma trabalhista (Lei nº 13.467, de 2017), a reforma da Previdência (Emenda Constitucional nº 103, de 2019), o auxílio emergencial na pandemia (2020) e a reforma tributária do consumo (Emenda Constitucional nº 132, de 2023) ${tag('fato')}.</p>
<h3>Como avaliar</h3>
<p>Cada medida deve ser avaliada pelo objetivo declarado, pelos efeitos medidos (com grupo de comparação, quando possível) e pelos custos, separando a análise do juízo normativo ${tag('argumento')}.</p>`,
  vocabulario: [
    ['URV', 'Unidade Real de Valor: unidade de conta de transição para o real (1994).'],
    ['Âncora cambial', 'Uso do câmbio estável para conter a inflação.'],
    ['LRF', 'Lei de Responsabilidade Fiscal (LC 101/2000).'],
    ['Teto de gastos', 'Limite ao crescimento da despesa federal (EC 95/2016).'],
    ['Arcabouço fiscal', 'Regra de 2023 que liga despesa à receita e a metas de resultado.'],
  ],
  exemplos: `<p><strong>Como a URV funcionava:</strong> durante alguns meses, preços e salários eram expressos em URV, cujo valor em cruzeiros reais era corrigido diariamente. Quando todos os valores estavam alinhados na mesma unidade, a URV virou o real. A memória inflacionária perdeu o ponto de apoio dos reajustes defasados.</p>`,
  contexto: `<p><strong>No mundo:</strong> a crise financeira de 2008, o ciclo das commodities e a pandemia afetaram todos os emergentes. <strong>No Brasil:</strong> o debate entre responsabilidade fiscal e gasto social atravessa todos os governos desde 1994 e reaparece em cada regra fiscal nova ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a URV ajudou onde planos anteriores falharam', tag: 'argumento',
    premissas: ['A inflação inercial se alimenta de reajustes defasados e não sincronizados.', 'Congelamentos (Cruzado, por exemplo) suprimiam preços sem alinhar contratos, e a inflação voltava quando eram suspensos.', 'A URV alinhou voluntariamente preços e salários numa mesma unidade antes da troca da moeda.'],
    conclusao: 'Logo, a URV removeu um mecanismo central da inércia sem congelamento — embora a estabilidade duradoura tenha dependido também do ajuste fiscal e da política monetária posteriores.',
    nota: 'O peso relativo de cada fator é debatido pela literatura.',
  },
  objecoes: [
    { objecao: 'Regras fiscais impedem o Estado de cuidar dos pobres.', tag: 'debate',
      resposta: 'Regras fiscais limitam o total, não a composição do gasto; a escolha de prioridades continua política. Por outro lado, regras mal desenhadas podem comprimir investimentos. A avaliação depende do desenho concreto e dos dados.' },
  ],
  aplicacao: `<p>Escolha uma das reformas citadas e faça um quadro: objetivo declarado, mecanismo esperado, dados antes e depois (com fonte), possíveis outras causas da mudança e seu juízo normativo, separado da análise.</p>`,
  fonte: {
    obra: 'Lei Complementar nº 101, de 2000 (Lei de Responsabilidade Fiscal); Exposição de Motivos da Medida Provisória do Plano Real (1994)', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na LRF, localize os limites de despesa com pessoal e as regras de endividamento. Na exposição de motivos do Plano Real, identifique o diagnóstico da inflação. Relacione os dois textos ao conceito de inflação inercial (aula e3-1).</p>`,
  },
  perguntas: [
    { p: 'Qual a função da URV?', r: 'Alinhar preços e salários numa unidade de conta antes da troca da moeda.' },
    { p: 'Qual lei estabeleceu a responsabilidade fiscal no Brasil?', r: 'A Lei Complementar nº 101, de 2000.' },
    { p: 'Que regra substituiu o teto de gastos?', r: 'O arcabouço fiscal (Lei Complementar nº 200, de 2023).' },
  ],
  exercicios: [
    mc('O real entrou em circulação em:', ['1º de março de 1986', '1º de julho de 1994', 'janeiro de 1999', '2000'], 1, 'Depois da fase da URV.'),
    mc('O teto de gastos foi instituído pela:', ['LC 101/2000', 'EC 95/2016', 'Lei 13.467/2017', 'EC 132/2023'], 1, 'Emenda Constitucional 95.'),
    mc('A reforma da Previdência de 2019 foi a:', ['EC 95', 'EC 103', 'EC 132', 'LC 200'], 1, 'Emenda Constitucional 103.'),
    mc('Até 1999, a principal âncora do Plano Real foi:', ['Metas de inflação', 'Câmbio', 'Congelamento de preços', 'Bloqueio da poupança'], 1, 'Âncora cambial.'),
    mc('As causas da recessão de 2014–2016 são:', ['Consensuais', 'Debatidas', 'Desconhecidas', 'Exclusivamente externas'], 1, 'Vários fatores em debate.'),
    disc('Avalie uma reforma econômica brasileira posterior a 2000: objetivo, mecanismo, dados com fonte, causas alternativas e juízo normativo separado.', ['Objetivo e mecanismo', 'Dados com fonte', 'Causas alternativas', 'Juízo normativo separado']),
  ],
  resumo: ['Plano Real: ajuste, URV e real (1994).', 'Âncora cambial até 1999; depois tripé.', 'LRF (2000), teto (2016), arcabouço (2023).', 'Commodities, Bolsa Família, recessão de 2014–2016 (debate).', 'Reformas trabalhista (2017), previdenciária (2019) e tributária (2023).'],
  referencias: [
    { texto: 'Lei Complementar nº 101, de 4 de maio de 2000 (Lei de Responsabilidade Fiscal).' },
    { texto: 'Emenda Constitucional nº 95, de 2016; Lei Complementar nº 200, de 2023.' },
    { texto: 'Fabio Giambiagi e outros (orgs.), Economia brasileira contemporânea (2005).' },
    { texto: 'Marcelo de Paiva Abreu (org.), A ordem do progresso (2014).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Montar o quadro de avaliação da reforma'],
  revisao: [['URV', 'Alinhou preços antes do real.'], ['LRF', 'LC 101/2000.'], ['Arcabouço', 'LC 200/2023.']],
  avancado: {
    texto: `<h3>Dominância fiscal</h3>
<p>Quando a dívida pública é muito alta, juros maiores podem piorar a trajetória da dívida e as expectativas de inflação, reduzindo a eficácia da política monetária; essa situação é chamada de "dominância fiscal" ${tag('fato')}. Se o Brasil esteve perto dela em algum momento é tema de debate ${tag('debate')}.</p>
<h3>Reforma tributária do consumo</h3>
<p>A EC 132/2023 prevê a substituição gradual de tributos sobre o consumo por um imposto sobre valor agregado dual (CBS federal e IBS subnacional) ${tag('fato')}; seus efeitos sobre preços e regiões dependem da regulamentação e da transição ${tag('hipotese')}.</p>`,
    leituras: [{ texto: 'Fabio Giambiagi e outros (orgs.), Economia brasileira contemporânea (2005).' }],
    exercicios: [
      mc('"Dominância fiscal" descreve:', ['Superávit permanente', 'Perda de eficácia da política monetária por causa da dívida', 'Câmbio fixo', 'Inflação zero'], 1, 'Juros altos pioram a dívida.'),
      mc('A reforma tributária de 2023 cria:', ['CPMF', 'CBS e IBS', 'URV', 'IOF'], 1, 'IVA dual.'),
      mc('Os efeitos regionais da reforma tributária são:', ['Fato medido', 'Hipótese dependente da transição', 'Irrelevantes', 'Definidos em 1994'], 1, 'Dependem da regulamentação.'),
      disc('Exponha o conceito de dominância fiscal e avalie, com dados de dívida e juros, se o Brasil esteve próximo dela em algum período.', ['Conceito', 'Dados', 'Avaliação', 'Grau de confiança'])],
  },
}),

aula({
  id: 'e5-2', titulo: 'Economia aplicada: finanças pessoais e avaliação de políticas públicas', duracao: '150 min',
  aprendera: ['Calcular juros compostos, juros reais e o custo de uma dívida', 'Montar um orçamento doméstico com reserva e metas', 'Explicar como se mede o impacto de uma política (grupo de comparação)', 'Ler uma avaliação de impacto brasileira'],
  prereq: ['Aula anterior', 'Matemática: porcentagens e potências'],
  explicacao: `
<h3>O problema</h3>
<p>A economia serve para decidir melhor na vida concreta — da família ao Estado. Esta aula aplica o percurso a duas escalas: o orçamento pessoal e a avaliação de políticas.</p>
<h3>Juros compostos e juros reais</h3>
<p>Com juros compostos, o montante é M = C × (1 + i)<sup>n</sup> ${tag('fato')}. O juro real desconta a inflação: (1 + juro nominal) = (1 + juro real) × (1 + inflação), a relação de Fisher ${tag('fato')}. Uma aplicação que rende 10% com inflação de 6% tem ganho real de cerca de 3,8%, não 4% ${tag('fato')}.</p>
<h3>Orçamento e dívida</h3>
<p>Um orçamento doméstico registra receitas e despesas, separa o essencial do adiável, forma uma reserva de emergência e evita dívidas caras, como o rotativo do cartão de crédito, cujos juros estão entre os mais altos do mercado brasileiro ${tag('fato')}. A tradição moral fala aqui de prudência e temperança: usar os bens com medida, em vista de fins bons ${tag('doutrina')}.</p>
<h3>Avaliação de impacto</h3>
<p>Medir o efeito de uma política exige comparar quem a recebeu com um grupo semelhante que não a recebeu. Experimentos aleatorizados, diferenças em diferenças e regressão descontínua são métodos usuais ${tag('fato')}. Abhijit Banerjee, Esther Duflo e Michael Kremer receberam o Nobel de 2019 pelo uso de experimentos no combate à pobreza; David Card, Joshua Angrist e Guido Imbens, o de 2021, por experimentos naturais e métodos causais ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>O Tesouro Direto, criado em 2002, permite a pessoas físicas comprar títulos públicos ${tag('fato')}. O Bolsa Família foi objeto de muitas avaliações de impacto, com resultados discutidos em saúde, educação e trabalho ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Juros compostos', 'Juros calculados sobre o montante acumulado.'],
    ['Juro real', 'Juro descontada a inflação (relação de Fisher).'],
    ['Reserva de emergência', 'Recurso guardado para imprevistos.'],
    ['Grupo de comparação', 'Grupo semelhante que não recebeu a política.'],
    ['Experimento aleatorizado', 'Sorteio de quem recebe a intervenção.'],
    ['Diferenças em diferenças', 'Compara a variação de tratados e não tratados ao longo do tempo.'],
  ],
  exemplos: `<p><strong>Cálculo:</strong> R$ 1.000 a 1% ao mês por 12 meses: 1.000 × 1,01<sup>12</sup> ≈ R$ 1.126,83. Uma dívida de R$ 1.000 a 10% ao mês por 12 meses: 1.000 × 1,1<sup>12</sup> ≈ R$ 3.138,43. A mesma fórmula que faz o investimento crescer faz a dívida explodir.</p>`,
  contexto: `<p><strong>No mundo:</strong> a avaliação de impacto tornou-se padrão em organismos internacionais e governos. <strong>No Brasil:</strong> o endividamento das famílias e o uso do crédito rotativo são temas recorrentes nas estatísticas do Banco Central; o Cadastro Único e registros administrativos permitem avaliações de programas sociais ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que comparar "antes e depois" não basta para medir uma política', tag: 'argumento',
    premissas: ['Entre o antes e o depois, muitas coisas mudam além da política (economia, clima, outras políticas).', 'Uma comparação simples atribui à política todos esses efeitos.', 'Um grupo de comparação semelhante, exposto às mesmas outras mudanças, isola o efeito da política.'],
    conclusao: 'Logo, a avaliação séria exige um contrafactual: o que teria acontecido sem a política.',
    nota: 'Liga-se à distinção entre correlação e causalidade (aula e1-5).',
  },
  objecoes: [
    { objecao: 'Experimentos com políticas sociais são antiéticos, porque negam o benefício a alguns.', tag: 'debate',
      resposta: 'É uma preocupação séria. Ela se atenua quando o recurso já é insuficiente para todos (o sorteio é então critério justo) ou quando a implantação é gradual. Mas exige consentimento, proteção de dados e revisão ética.' },
  ],
  aplicacao: `<p>Monte um orçamento mensal (real ou fictício) com receitas, despesas essenciais, despesas adiáveis, reserva e uma meta. Calcule quanto tempo leva para formar uma reserva de três meses de despesas essenciais.</p>`,
  fonte: {
    obra: 'Abhijit Banerjee e Esther Duflo, A economia dos pobres (2011), caps. 1 e 7; Banco Central do Brasil, Caderno de Educação Financeira', link: { url: 'https://www.bcb.gov.br', rotulo: 'Banco Central do Brasil' },
    orientacao: `<p>Em Banerjee e Duflo, identifique como um experimento responde a uma pergunta de política. No caderno do Banco Central, localize a explicação sobre juros e orçamento. Aplique ambos ao seu orçamento.</p>`,
  },
  perguntas: [
    { p: 'Qual a fórmula dos juros compostos?', r: 'M = C × (1 + i)^n.' },
    { p: 'O que é juro real?', r: 'O juro descontada a inflação, pela relação de Fisher.' },
    { p: 'Por que uma avaliação precisa de grupo de comparação?', r: 'Para isolar o efeito da política de outras mudanças do período.' },
  ],
  exercicios: [
    mc('Rendimento nominal de 10% e inflação de 6%: o juro real é de cerca de:', ['4%', '3,8%', '16%', '6%'], 1, '1,10 ÷ 1,06 − 1 ≈ 3,8%.'),
    mc('R$ 2.000 a 2% ao mês por 2 meses rendem montante de:', ['R$ 2.080,00', 'R$ 2.080,80', 'R$ 2.040,00', 'R$ 2.400,00'], 1, '2.000 × 1,02² = 2.080,80.'),
    mc('O Nobel de 2019 premiou:', ['Teoria dos jogos', 'Experimentos no combate à pobreza', 'Moeda e bancos', 'Comércio internacional'], 1, 'Banerjee, Duflo e Kremer.'),
    mc('O Tesouro Direto foi criado em:', ['1994', '2002', '2010', '2019'], 1, '2002.'),
    mc('"Diferenças em diferenças" compara:', ['Apenas antes e depois', 'Variações de tratados e não tratados', 'Dois países ricos', 'Preços e salários'], 1, 'Dupla diferença.'),
    disc('Desenhe a avaliação de impacto de um programa municipal (por exemplo, reforço escolar): pergunta, grupo de comparação, método, dados e cuidados éticos.', ['Pergunta clara', 'Grupo de comparação justificado', 'Método e dados', 'Cuidados éticos']),
  ],
  resumo: ['Juros compostos: M = C(1+i)^n.', 'Juro real pela relação de Fisher.', 'Orçamento, reserva, dívidas caras; prudência e temperança.', 'Avaliação de impacto exige contrafactual.', 'Nobel 2019 e 2021; Tesouro Direto (2002).'],
  referencias: [
    { texto: 'Abhijit Banerjee e Esther Duflo, A economia dos pobres (2011).' },
    { texto: 'Joshua Angrist e Jörn-Steffen Pischke, Mastering ’Metrics (2014).' },
    { texto: 'Banco Central do Brasil, Caderno de Educação Financeira.', link: { url: 'https://www.bcb.gov.br', rotulo: 'Banco Central do Brasil' } },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, II-II, q. 47 (prudência) e q. 141 (temperança).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Montar o orçamento com reserva'],
  revisao: [['Fisher', '(1+n) = (1+r)(1+π).'], ['Contrafactual', 'O que aconteceria sem a política.'], ['Nobel 2019', 'Banerjee, Duflo, Kremer.']],
  avancado: {
    texto: `<h3>Valor presente</h3>
<p>O valor presente de um pagamento futuro é VP = VF ÷ (1 + i)<sup>n</sup> ${tag('fato')}. Comparar opções de financiamento, aluguel ou compra exige trazer todos os fluxos ao mesmo momento ${tag('fato')}.</p>
<h3>Regressão descontínua</h3>
<p>Quando um programa tem um corte (por exemplo, renda abaixo de certo valor), comparar quem está logo abaixo com quem está logo acima do corte aproxima um experimento ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Joshua Angrist e Jörn-Steffen Pischke, Mastering ’Metrics (2014).' }],
    exercicios: [
      mc('O valor presente de R$ 1.100 daqui a um ano, a 10% ao ano, é:', ['R$ 1.000', 'R$ 990', 'R$ 1.210', 'R$ 1.100'], 0, '1.100 ÷ 1,1.'),
      mc('A regressão descontínua usa:', ['Um sorteio', 'Um corte de elegibilidade', 'Séries de preços', 'Entrevistas'], 1, 'Compara os dois lados do corte.'),
      mc('Comparar compra à vista e parcelada exige:', ['Somar as parcelas', 'Trazer os fluxos a valor presente', 'Ignorar os juros', 'Usar o PIB'], 1, 'Valor do dinheiro no tempo.'),
      disc('Compare comprar à vista com desconto de 5% ou em 10 parcelas sem juros, com aplicação rendendo 0,8% ao mês. Mostre o cálculo e a decisão.', ['Cálculo do VP', 'Comparação', 'Decisão', 'Ressalvas'])],
  },
}),

aula({
  id: 'e5-3', titulo: 'Economia no debate público: verificar números, gráficos e promessas', duracao: '120 min',
  aprendera: ['Distinguir valores nominais e reais, níveis e variações', 'Identificar erros comuns em gráficos e manchetes econômicas', 'Localizar a fonte primária de um dado econômico', 'Avaliar promessas econômicas por mecanismo e custo'],
  prereq: ['Aulas anteriores do módulo', 'Economia I: indicadores'],
  explicacao: `
<h3>O problema</h3>
<p>Números econômicos aparecem todos os dias em notícias, campanhas e redes sociais, muitas vezes fora de contexto. O estudante do percurso deve ser capaz de verificar um número antes de repeti-lo.</p>
<h3>Cinco perguntas para qualquer dado</h3>
<ol>
<li><strong>Qual a fonte primária?</strong> IBGE (PIB, IPCA, PNAD Contínua), Banco Central (juros, crédito, setor externo), Tesouro Nacional (dívida e resultado fiscal) ${tag('fato')}.</li>
<li><strong>Nominal ou real?</strong> Um gasto que "dobrou" em vinte anos pode ter caído em termos reais.</li>
<li><strong>Nível ou variação?</strong> "O desemprego caiu" pode ser queda de pontos percentuais ou de porcentagem.</li>
<li><strong>Qual a base de comparação?</strong> Variações sobre uma base muito baixa (o "efeito base") parecem enormes.</li>
<li><strong>Correlação ou causa?</strong> Duas séries que sobem juntas não provam que uma causa a outra.</li>
</ol>
<h3>Gráficos enganosos</h3>
<p>Eixos que não começam em zero, escalas diferentes em dois eixos, períodos escolhidos a dedo e valores por pessoa omitidos são distorções frequentes ${tag('fato')}.</p>
<h3>Indicadores que viram metas</h3>
<p>Charles Goodhart observou que um indicador tende a perder confiabilidade quando passa a ser usado como meta de controle; a formulação popular é "quando uma medida vira meta, deixa de ser boa medida" ${tag('interpretacao')}.</p>
<h3>Promessas</h3>
<p>Avalie uma promessa econômica perguntando: qual o mecanismo? Quanto custa e quem paga? Há evidência de que funcionou em outro lugar? Quais efeitos indiretos? A veracidade é dever moral também na economia: apresentar dados de modo enganoso fere a justiça devida ao público ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Valor nominal', 'Valor em moeda corrente, sem descontar a inflação.'],
    ['Valor real', 'Valor descontada a inflação.'],
    ['Ponto percentual', 'Diferença absoluta entre duas porcentagens.'],
    ['Efeito base', 'Variação inflada por uma base de comparação baixa.'],
    ['Lei de Goodhart', 'Indicadores perdem confiabilidade quando viram metas.'],
  ],
  exemplos: `<p><strong>Pontos ou porcentagem:</strong> se o desemprego passa de 10% para 8%, caiu 2 pontos percentuais — ou 20% em relação ao nível inicial. As duas frases são verdadeiras, mas a segunda parece maior. Quem escreve deve dizer qual usa; quem lê deve perguntar.</p>`,
  contexto: `<p><strong>No mundo:</strong> agências de checagem e bancos centrais publicam guias para leitura de estatísticas. <strong>No Brasil:</strong> o IBGE divulga calendário de publicações e notas metodológicas; o Banco Central publica o Boletim Focus, com as expectativas do mercado ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que comparar gastos de décadas diferentes exige deflacionar', tag: 'argumento',
    premissas: ['A inflação altera o poder de compra da moeda ao longo do tempo.', 'Um valor nominal de hoje e um de vinte anos atrás medem coisas diferentes.', 'Deflacionar por um índice de preços converte ambos à mesma base.'],
    conclusao: 'Logo, comparações de longo prazo em valores nominais são enganosas; devem usar valores reais, de preferência também por pessoa ou em proporção do PIB.',
    nota: 'Aplica o conceito de índice de preços (aula e1-4).',
  },
  objecoes: [
    { objecao: 'Estatísticas oficiais são manipuladas; não se pode confiar em nenhuma.', tag: 'debate',
      resposta: 'Suspeita genérica não substitui verificação. Metodologias do IBGE são públicas, comparáveis internacionalmente e criticadas abertamente por especialistas. Desconfiar com método — ler notas técnicas, comparar fontes — é diferente de rejeitar tudo.' },
  ],
  aplicacao: `<p>Escolha uma notícia econômica recente com um número. Aplique as cinco perguntas, encontre o dado na fonte primária e reescreva a frase de forma precisa, registrando data e fonte.</p>`,
  fonte: {
    obra: 'IBGE, notas metodológicas do IPCA e da PNAD Contínua; Darrell Huff, Como mentir com estatística (1954)', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>Leia a nota metodológica do IPCA e identifique o que o índice mede e o que não mede. Em Huff, escolha uma distorção gráfica e encontre um exemplo atual.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre ponto percentual e porcentagem?', r: 'Ponto percentual é diferença absoluta entre taxas; porcentagem é variação relativa.' },
    { p: 'Onde se encontra o dado oficial de inflação?', r: 'No IBGE (IPCA).' },
    { p: 'O que afirma a lei de Goodhart?', r: 'Indicadores tendem a perder confiabilidade quando passam a ser metas.' },
  ],
  exercicios: [
    mc('Desemprego de 12% para 9% é queda de:', ['3%', '3 pontos percentuais', '9 pontos', '33 pontos'], 1, 'E de 25% em termos relativos.'),
    mc('Para comparar gastos de 2005 e de hoje, deve-se usar:', ['Valores nominais', 'Valores reais', 'Apenas porcentagens', 'O câmbio'], 1, 'Deflacionar.'),
    mc('Um eixo vertical que começa em 95 num gráfico de 95 a 100 tende a:', ['Diminuir diferenças', 'Exagerar diferenças', 'Não ter efeito', 'Mostrar valores reais'], 1, 'Distorção comum.'),
    mc('As expectativas de mercado são divulgadas no:', ['Censo', 'Boletim Focus', 'Diário Oficial', 'PNAD'], 1, 'Banco Central.'),
    mc('Duas séries que crescem juntas provam:', ['Causalidade', 'Apenas correlação', 'Nada', 'Inflação'], 1, 'Causalidade exige mais.'),
    disc('Verifique uma afirmação econômica de campanha ou de rede social: as cinco perguntas, a fonte primária, a frase corrigida e seu juízo sobre a boa-fé da apresentação.', ['Cinco perguntas aplicadas', 'Fonte primária', 'Frase corrigida', 'Juízo fundamentado']),
  ],
  resumo: ['Fonte primária: IBGE, Banco Central, Tesouro.', 'Nominal x real; nível x variação; pontos x porcentagem.', 'Efeito base e correlação.', 'Gráficos enganosos.', 'Lei de Goodhart; veracidade como dever.'],
  referencias: [
    { texto: 'Darrell Huff, Como mentir com estatística (1954).' },
    { texto: 'IBGE, notas metodológicas do IPCA e da PNAD Contínua.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Banco Central do Brasil, Boletim Focus.', link: { url: 'https://www.bcb.gov.br', rotulo: 'Banco Central do Brasil' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Verificar uma notícia na fonte primária'],
  revisao: [['Pontos percentuais', 'Diferença absoluta.'], ['Goodhart', 'Medida que vira meta.'], ['Deflacionar', 'Comparar em valores reais.']],
  avancado: {
    texto: `<h3>Revisões de dados</h3>
<p>O PIB trimestral e outras séries são revisados à medida que chegam informações mais completas ${tag('fato')}. Uma análise séria registra a data de consulta e verifica se o dado foi revisado ${tag('argumento')}.</p>
<h3>Paradoxo de Simpson</h3>
<p>Uma tendência que aparece em cada grupo pode se inverter quando os grupos são somados, se a composição muda ${tag('fato')}. Médias nacionais podem esconder movimentos opostos em regiões ou faixas de renda.</p>`,
    leituras: [{ texto: 'Darrell Huff, Como mentir com estatística (1954).' }],
    exercicios: [
      mc('O PIB trimestral pode ser:', ['Imutável', 'Revisado depois', 'Calculado só no Censo', 'Secreto'], 1, 'Revisões são normais.'),
      mc('O paradoxo de Simpson ocorre quando:', ['A inflação é zero', 'A tendência dos grupos se inverte na soma', 'O câmbio é fixo', 'Não há dados'], 1, 'Efeito de composição.'),
      mc('Uma análise deve registrar:', ['Apenas o valor', 'Valor, fonte e data de consulta', 'Só a manchete', 'O nome do jornalista'], 1, 'Por causa das revisões.'),
      disc('Encontre um caso em que a média nacional de um indicador esconda movimentos regionais opostos. Mostre os dados.', ['Indicador', 'Dados por região', 'Explicação', 'Conclusão'])],
  },
}),

aula({
  id: 'e5-4', titulo: 'Projeto de pesquisa econômica: pergunta, dados, método e redação', duracao: '180 min',
  aprendera: ['Formular uma pergunta econômica delimitada e respondível com dados', 'Localizar séries em bases públicas brasileiras', 'Escolher um método proporcional à pergunta', 'Redigir com transparência, citação e reprodutibilidade'],
  prereq: ['Todas as aulas anteriores de Economia'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma pesquisa própria: uma pergunta, dados, um método e uma conclusão proporcional à evidência. Esta aula é o roteiro do trabalho final de Economia.</p>
<h3>1. Da questão ao problema</h3>
<p>"Inflação" é tema; "o reajuste do salário mínimo acompanhou o IPCA entre 2010 e 2020?" é problema. Delimite período, lugar e variável. Umberto Eco recomenda restringir o campo para trabalhar com segurança ${tag('interpretacao')}.</p>
<h3>2. Dados</h3>
<p>Bases públicas brasileiras: SIDRA/IBGE (PIB, IPCA, PNAD Contínua), IPEADATA (séries históricas), Sistema Gerenciador de Séries Temporais do Banco Central e Tesouro Transparente ${tag('fato')}. Registre fonte, código da série, unidade, periodicidade e data de consulta.</p>
<h3>3. Método</h3>
<p>Uma pergunta descritiva pede tabelas, gráficos e taxas de variação em valores reais; uma pergunta causal pede grupo de comparação e cuidado com explicações alternativas (aula e5-2). Use o modelo teórico do percurso que explica o mecanismo e diga quais hipóteses ele supõe ${tag('argumento')}.</p>
<h3>4. Redação e reprodutibilidade</h3>
<p>Estrutura: pergunta; motivação; literatura; dados e método; resultados; limitações; conclusão. Guarde a planilha ou o roteiro de cálculo para que outro leitor possa refazer os números. Cite segundo a ABNT (NBR 10520 e NBR 6023) ${tag('fato')}. Separe a análise positiva do juízo normativo e rotule as afirmações (fato, interpretação, hipótese, debate).</p>
<h3>Rubrica do trabalho final</h3>
<ul>
<li>Pergunta delimitada e relevante.</li>
<li>Dados de fonte primária, documentados.</li>
<li>Método adequado à pergunta; mecanismo teórico explícito.</li>
<li>Limitações e explicações alternativas consideradas.</li>
<li>Juízo normativo separado e fundamentado.</li>
<li>Citações, referências e cálculos reprodutíveis.</li>
</ul>`,
  vocabulario: [
    ['Pergunta descritiva', 'Pergunta sobre o que aconteceu ou como algo está distribuído.'],
    ['Pergunta causal', 'Pergunta sobre o efeito de uma coisa sobre outra.'],
    ['Série temporal', 'Sequência de observações de uma variável ao longo do tempo.'],
    ['Reprodutibilidade', 'Possibilidade de outro pesquisador refazer os resultados.'],
    ['Limitação', 'Restrição dos dados ou do método que limita a conclusão.'],
  ],
  exemplos: `<p><strong>De tema a problema:</strong> "Desigualdade no Brasil" (tema) → "Desigualdade de renda no Nordeste" (ainda amplo) → "A variação do índice de Gini da renda domiciliar per capita no Nordeste entre 2012 e 2019, segundo a PNAD Contínua" (problema pesquisável, com fonte e período definidos).</p>`,
  contexto: `<p><strong>No mundo:</strong> revistas de economia exigem cada vez mais a publicação de dados e códigos de replicação. <strong>No Brasil:</strong> as bases do IBGE, do Ipea e do Banco Central são abertas e permitem pesquisas de iniciação sem custo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a reprodutibilidade faz parte da honestidade científica', tag: 'argumento',
    premissas: ['Um resultado só é conhecimento público se outros puderem examiná-lo.', 'Sem dados e cálculos documentados, erros não podem ser encontrados por terceiros.', 'Erros não detectados passam a ser repetidos como fatos.'],
    conclusao: 'Logo, documentar dados e cálculos é exigência da verdade, não mera formalidade.',
    nota: 'Mesmo princípio da crítica de fontes em História (h1-3).',
  },
  objecoes: [
    { objecao: 'Sem conhecimento avançado de estatística, não dá para pesquisar em economia.', tag: 'debate',
      resposta: 'Perguntas descritivas bem feitas — com valores reais, fontes primárias e comparação cuidadosa — são contribuições legítimas. O método deve ser proporcional à pergunta; o erro está em tirar conclusões causais sem o método adequado.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: tema, pergunta, hipótese, séries de dados com fonte e código, método, modelo teórico do percurso que será usado, duas leituras e o plano de seções.</p>`,
  fonte: {
    obra: 'Umberto Eco, Como se faz uma tese (1977), caps. II e IV; Wayne Booth e outros, A arte da pesquisa (1995)', link: { url: 'http://www.ipeadata.gov.br', rotulo: 'IPEADATA' },
    orientacao: `<p>Em Eco, leia os capítulos sobre escolha do tema e fichamento; em Booth, a passagem de tópico a pergunta. No IPEADATA, localize uma série relevante para o seu pré-projeto e registre seus metadados.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre pergunta descritiva e causal?', r: 'A descritiva pergunta o que aconteceu; a causal, qual o efeito de algo sobre outra coisa.' },
    { p: 'O que registrar ao usar uma série de dados?', r: 'Fonte, código, unidade, periodicidade e data de consulta.' },
    { p: 'Por que guardar a planilha de cálculo?', r: 'Para permitir que outro leitor reproduza os resultados.' },
  ],
  exercicios: [
    mc('Qual destes é um problema de pesquisa, e não apenas um tema?', ['A inflação', 'O Brasil e o comércio', 'O salário mínimo acompanhou o IPCA entre 2010 e 2020?', 'A economia mundial'], 2, 'Delimitado em variável e período.'),
    mc('O Sistema Gerenciador de Séries Temporais é do:', ['IBGE', 'Banco Central', 'Ipea', 'Tesouro'], 1, 'Banco Central.'),
    mc('Uma pergunta causal exige:', ['Só um gráfico', 'Grupo de comparação e explicações alternativas', 'Opinião', 'Valores nominais'], 1, 'Contrafactual.'),
    mc('A norma da ABNT para referências é a:', ['NBR 10520', 'NBR 6023', 'NBR 14724', 'NBR 6028'], 1, 'A 10520 trata de citações.'),
    mc('Documentar dados e cálculos garante:', ['Que o resultado está certo', 'Que outros possam verificá-lo', 'Publicação', 'Nota máxima'], 1, 'Reprodutibilidade, não infalibilidade.'),
    disc('Apresente seu pré-projeto: pergunta, hipótese, séries com fonte e código, método, modelo teórico, limitações previstas e viabilidade.', ['Pergunta delimitada', 'Dados documentados', 'Método adequado', 'Modelo teórico explícito', 'Limitações e viabilidade']),
  ],
  resumo: ['Do tema ao problema delimitado.', 'Bases: SIDRA, IPEADATA, SGS, Tesouro Transparente.', 'Método proporcional à pergunta.', 'Reprodutibilidade e ABNT.', 'Análise separada do juízo normativo.'],
  referencias: [
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
    { texto: 'Wayne C. Booth, Gregory G. Colomb e Joseph M. Williams, A arte da pesquisa (1995).', livro: 'booth-pesquisa' },
    { texto: 'ABNT, NBR 10520 (citações) e NBR 6023 (referências).' },
    { texto: 'IPEADATA — base de dados do Ipea.', link: { url: 'http://www.ipeadata.gov.br', rotulo: 'IPEADATA' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto na questão discursiva', 'Registrar os metadados de uma série'],
  revisao: [['Problema', 'Pergunta delimitada respondível com dados.'], ['Metadados', 'Fonte, código, unidade, periodicidade, data.'], ['Reprodutibilidade', 'Outros refazem os cálculos.']],
  avancado: {
    texto: `<h3>Números-índice e deflação de séries</h3>
<p>Para comparar séries em valores reais, divide-se cada valor nominal pelo índice de preços do período e multiplica-se pelo índice do período-base ${tag('fato')}. A escolha do índice (IPCA, INPC, IGP) muda o resultado e deve ser justificada ${tag('argumento')}.</p>
<h3>Pré-registro</h3>
<p>Em pesquisas causais, registrar a hipótese e o método antes de ver os resultados reduz o risco de escolher a análise que "dá certo" ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Joshua Angrist e Jörn-Steffen Pischke, Mastering ’Metrics (2014).' }],
    exercicios: [
      mc('Para deflacionar um valor nominal, usa-se:', ['A taxa de câmbio', 'Um índice de preços', 'O PIB', 'A taxa Selic'], 1, 'Índice do período e da base.'),
      mc('O pré-registro serve para:', ['Publicar mais rápido', 'Reduzir a escolha seletiva de análises', 'Dispensar dados', 'Evitar citações'], 1, 'Disciplina metodológica.'),
      mc('A escolha do índice de preços:', ['Não importa', 'Muda o resultado e deve ser justificada', 'É sempre o IGP', 'É definida por lei para pesquisas'], 1, 'Índices medem cestas diferentes.'),
      disc('Deflacione uma série nominal do seu pré-projeto por dois índices diferentes e discuta a diferença nos resultados.', ['Série e índices', 'Cálculo', 'Comparação', 'Justificativa da escolha'])],
  },
}),

avaliacao('e5-5', 'Avaliação integradora de Economia', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Economia. Reúne questões de todos os módulos (E1 a E5) e pede duas discursivas de síntese. A conclusão do percurso exige também o trabalho final de pesquisa, planejado na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça os cálculos (elasticidade, custos, juros, deflação).</li><li>Releia a rubrica do trabalho final (e5-4).</li></ul>`,
[
  disc('Escolha um problema da economia brasileira e mostre como o estudaria com todo o percurso: indicadores e dados, um modelo explicativo, uma escola de pensamento, a dimensão internacional e a avaliação ética segundo critérios explícitos.', ['Problema delimitado', 'Dados com fonte', 'Modelo e escola mobilizados', 'Dimensão internacional', 'Avaliação ética separada da análise', 'Conclusão proporcional']),
  disc('Responda como economista: o que a economia pode e o que não pode afirmar com segurança? Use três exemplos de módulos diferentes.', ['Distingue fato, interpretação, hipótese e debate', 'Três exemplos de módulos diferentes', 'Argumentação clara', 'Conclusão fundamentada']),
]),
];
