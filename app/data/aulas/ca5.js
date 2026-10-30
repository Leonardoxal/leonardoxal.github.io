// Ciências Ambientais V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Ciências Ambientais).
// Avaliação de impacto e licenciamento; energia e clima; cidades, drenagem e adaptação; a investigação ambiental
// de quatro semanas. A avaliação final integra CA1 a CA5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ca5-1', titulo: 'Avaliação de impacto ambiental e licenciamento: EIA/RIMA, licenças e segurança de barragens', duracao: '150 min',
  aprendera: ['Explicar o EIA/RIMA e o licenciamento em três fases', 'Ler um RIMA com espírito crítico', 'Analisar os desastres de Mariana e Brumadinho', 'Distinguir impacto previsto, risco e responsabilidade'],
  prereq: ['Ciências Ambientais IV (módulo CA4)'],
  explicacao: `
<h3>O problema</h3>
<p>Antes de construir uma usina, uma estrada ou uma mina, como prever e reduzir seus danos ambientais?</p>
<h3>EIA/RIMA</h3>
<p>A Resolução Conama nº 001/1986 exige, para atividades de significativo impacto, um Estudo de Impacto Ambiental (EIA) e o respectivo Relatório de Impacto Ambiental (RIMA), em linguagem acessível ao público ${tag('fato')}. O EIA deve diagnosticar a área, prever impactos, propor medidas mitigadoras e programas de monitoramento e comparar alternativas, inclusive a de não executar o projeto ${tag('fato')}.</p>
<h3>Licenciamento</h3>
<p>A Resolução Conama nº 237/1997 define três licenças: prévia (aprova a localização e a concepção), de instalação (autoriza a obra) e de operação (autoriza o funcionamento) ${tag('fato')}. A Lei Complementar nº 140/2011 reparte as competências de licenciamento entre União, estados e municípios ${tag('fato')}.</p>
<h3>Barragens</h3>
<p>Em 5 de novembro de 2015, rompeu-se a barragem de Fundão, em Mariana (MG), matando 19 pessoas e levando rejeitos de mineração pelo rio Doce até o mar ${tag('fato')}. Em 25 de janeiro de 2019, rompeu-se a barragem da mina Córrego do Feijão, em Brumadinho (MG), matando cerca de 270 pessoas ${tag('fato')}. A Lei nº 14.066/2020 alterou a Política Nacional de Segurança de Barragens e proibiu barragens de rejeitos construídas pelo método a montante ${tag('fato')}.</p>
<h3>Responsabilidade</h3>
<p>A Constituição prevê que condutas lesivas ao meio ambiente sujeitam os infratores a sanções penais e administrativas, independentemente da obrigação de reparar os danos (art. 225, § 3º) ${tag('fato')}. A <em>Laudato si'</em> pede que os estudos de impacto sejam feitos antes dos projetos, de forma interdisciplinar, transparente e com participação dos afetados (n. 183) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['EIA', 'Estudo de Impacto Ambiental, documento técnico completo.'],
    ['RIMA', 'Relatório de Impacto Ambiental, síntese acessível ao público.'],
    ['Licença prévia', 'Aprova localização e concepção do empreendimento.'],
    ['Medida mitigadora', 'Ação que reduz um impacto negativo.'],
    ['Barragem a montante', 'Barragem de rejeitos alteada sobre o próprio rejeito.'],
  ],
  exemplos: `<p><strong>Lendo um RIMA:</strong> um RIMA de rodovia prevê supressão de 200 hectares de vegetação e propõe compensação em área equivalente. Perguntas críticas: a vegetação compensada é do mesmo bioma e qualidade? Foram consideradas alternativas de traçado? Há monitoramento de atropelamento de fauna? Quem fiscaliza o cumprimento das condicionantes?</p>`,
  contexto: `<p><strong>No mundo:</strong> os Estados Unidos introduziram a avaliação de impacto ambiental em 1969, com a National Environmental Policy Act ${tag('fato')}. <strong>No Brasil:</strong> a Política Nacional do Meio Ambiente (1981) incluiu a avaliação de impactos e o licenciamento entre seus instrumentos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que avaliar alternativas, inclusive a de não fazer', tag: 'argumento',
    premissas: ['Um projeto pode atingir seu objetivo de vários modos, com impactos diferentes.', 'Avaliar só a alternativa proposta impede saber se havia opção menos danosa.', 'A alternativa de não fazer serve de referência para medir os ganhos e perdas do projeto.'],
    conclusao: 'Logo, um estudo de impacto sério compara alternativas, inclusive a de não executar o projeto.',
    nota: 'A comparação deve ser feita antes da decisão, e não para justificar uma escolha já tomada.',
  },
  objecoes: [
    { objecao: 'O licenciamento ambiental só atrasa obras e não protege nada.', tag: 'debate',
      resposta: 'Há atrasos e problemas de qualidade em processos de licenciamento, e propostas de reforma buscam torná-lo mais ágil. Mas os desastres de Mariana e Brumadinho mostram o custo de falhas de avaliação e fiscalização. O debate razoável é sobre como tornar o licenciamento mais rápido sem enfraquecê-lo.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise um RIMA brasileiro disponível em órgão ambiental — impactos previstos, medidas propostas, alternativas consideradas e lacunas.</p>`,
  fonte: {
    obra: 'Resolução Conama nº 001/1986; Resolução Conama nº 237/1997; Lei nº 14.066/2020; Papa Francisco, Laudato si\' (2015), n. 183', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' },
    orientacao: `<p>Na Resolução 001, o conteúdo mínimo do EIA. Na 237, as três licenças. Na Lei 14.066, a proibição das barragens a montante. Na Laudato si', as condições de um estudo de impacto honesto.</p>`,
  },
  perguntas: [
    { p: 'Quais as três licenças ambientais?', r: 'Prévia, de instalação e de operação.' },
    { p: 'O que é o RIMA?', r: 'O relatório de impacto em linguagem acessível ao público.' },
    { p: 'O que a Lei 14.066/2020 proibiu?', r: 'Barragens de rejeitos construídas pelo método a montante.' },
  ],
  exercicios: [
    mc('A exigência de EIA/RIMA está na Resolução Conama:', ['001/1986', '237/1997', '357/2005', '491/2018'], 0, 'Impacto significativo.'),
    mc('A licença que autoriza a obra é a:', ['Prévia', 'De instalação', 'De operação', 'Provisória'], 1, 'Resolução 237.'),
    mc('O rompimento de Fundão, em Mariana, foi em:', ['2011', '2015', '2019', '2020'], 1, 'Rio Doce.'),
    mc('O EIA deve considerar:', ['Só a alternativa proposta', 'Alternativas, inclusive a de não executar', 'Só o custo', 'Só a opinião do empreendedor'], 1, 'Comparação.'),
    mc('A Laudato si\' trata dos estudos de impacto no n.:', ['23', '139', '183', '240'], 2, 'Antes, transparente, participativo.'),
    disc('Analise um RIMA brasileiro: impactos, medidas, alternativas e lacunas.', ['RIMA identificado', 'Impactos e medidas', 'Alternativas', 'Lacunas']),
  ],
  resumo: ['EIA/RIMA (Conama 001/1986).', 'LP, LI, LO (Conama 237/1997).', 'LC 140/2011: competências.', 'Mariana 2015, Brumadinho 2019; Lei 14.066/2020.', 'CF art. 225 § 3º; LS 183.'],
  referencias: [
    { texto: 'Resolução Conama nº 001, de 1986.' },
    { texto: 'Resolução Conama nº 237, de 1997.' },
    { texto: 'Lei nº 14.066, de 2020.' },
    { texto: 'Papa Francisco, Laudato si\' (2015), n. 183.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do RIMA', 'Ler as normas indicadas'],
  revisao: [['EIA/RIMA', 'Conama 001.'], ['LP, LI, LO', 'Três licenças.'], ['Lei 14.066', 'Sem barragem a montante.']],
  avancado: {
    texto: `<h3>Avaliação ambiental estratégica</h3>
<p>A avaliação ambiental estratégica examina políticas, planos e programas antes dos projetos individuais, considerando efeitos cumulativos de vários empreendimentos numa região ${tag('fato')}. No Brasil, não há obrigação legal geral de realizá-la, e sua adoção é defendida para planejar, por exemplo, conjuntos de hidrelétricas numa bacia ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Literatura sobre avaliação ambiental estratégica.' }],
    exercicios: [
      mc('A avaliação ambiental estratégica examina:', ['Só um projeto', 'Políticas, planos e programas', 'Só multas', 'Só obras prontas'], 1, 'Nível estratégico.'),
      mc('Efeitos cumulativos são os de:', ['Um só empreendimento', 'Vários empreendimentos somados', 'Nenhum', 'Só do clima'], 1, 'Região.'),
      mc('No Brasil, a avaliação estratégica é:', ['Obrigatória em todos os casos', 'Sem obrigação legal geral', 'Proibida', 'Exigida pela Constituição'], 1, 'Situação.'),
      disc('Explique por que avaliar hidrelétricas uma a uma pode subestimar os impactos numa bacia.', ['Projeto isolado', 'Efeitos cumulativos', 'Exemplo', 'Proposta'])],
  },
}),

aula({
  id: 'ca5-2', titulo: 'Energia e clima: matriz energética, eficiência e transição', duracao: '150 min',
  aprendera: ['Distinguir matriz energética e matriz elétrica', 'Calcular o consumo de energia de equipamentos', 'Comparar fontes de energia por critérios', 'Avaliar a transição energética no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A energia move a economia e responde por grande parte das emissões mundiais. Que fontes usar e como usar menos energia para o mesmo serviço?</p>
<h3>Matriz energética e elétrica</h3>
<p>A matriz energética inclui toda a energia usada (transporte, indústria, residências); a matriz elétrica, só a eletricidade ${tag('fato')}. No Brasil, a maior parte da eletricidade vem de fontes renováveis, sobretudo hidrelétricas, com crescimento rápido da eólica e da solar; na matriz energética total, a participação renovável é menor, por causa dos derivados de petróleo no transporte ${tag('fato')}.</p>
<h3>Eficiência</h3>
<p>Energia consumida é potência vezes tempo: um aparelho de 1.000 W ligado por 1 hora consome 1 kWh ${tag('fato')}. O Programa Nacional de Conservação de Energia Elétrica (Procel), criado em 1985, mantém um selo que identifica equipamentos mais eficientes ${tag('fato')}.</p>
<h3>Comparar fontes</h3>
<p>Cada fonte tem vantagens e custos: hidrelétricas são renováveis e despacháveis, mas alagam áreas e afetam rios; eólica e solar não emitem na operação, mas são intermitentes; termelétricas a gás são flexíveis, mas emitem CO2; a nuclear tem baixa emissão, mas exige gestão de resíduos e segurança rigorosa ${tag('fato')}. O peso de cada critério é escolha política informada por dados ${tag('debate')}.</p>
<h3>No Brasil</h3>
<p>O Proálcool, lançado em 1975, tornou o etanol de cana parte importante dos combustíveis do país ${tag('fato')}. A Empresa de Pesquisa Energética publica anualmente o Balanço Energético Nacional ${tag('fato')}.</p>`,
  vocabulario: [
    ['Matriz energética', 'Conjunto das fontes de toda a energia usada num país.'],
    ['Matriz elétrica', 'Conjunto das fontes de geração de eletricidade.'],
    ['kWh', 'Quilowatt-hora, energia de 1.000 W durante uma hora.'],
    ['Fonte intermitente', 'Fonte cuja geração varia com condições naturais, como sol e vento.'],
    ['Eficiência energética', 'Obter o mesmo serviço com menos energia.'],
  ],
  exemplos: `<p><strong>Calculando o consumo:</strong> um chuveiro de 5.500 W usado 20 minutos por dia consome 5,5 kW × (1/3) h ≈ 1,83 kWh por dia, cerca de 55 kWh por mês. Trocar uma lâmpada incandescente de 60 W por uma LED de 9 W, acesa 5 horas por dia, economiza (60 − 9) × 5 = 255 Wh por dia, cerca de 7,7 kWh por mês.</p>`,
  contexto: `<p><strong>No mundo:</strong> a queima de combustíveis fósseis para energia é a principal fonte de emissões de CO2 ${tag('fato')}. <strong>No Brasil:</strong> por causa da matriz elétrica renovável, a eletrificação de usos como transporte tende a reduzir emissões mais do que em países de matriz fóssil ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a eficiência é a fonte de energia mais barata', tag: 'argumento',
    premissas: ['Toda energia gerada tem custo de instalação, operação e impacto ambiental.', 'A energia economizada por eficiência não precisa ser gerada.', 'Muitas medidas de eficiência se pagam com a economia em pouco tempo.'],
    conclusao: 'Logo, investir em eficiência costuma ser a forma mais barata e menos impactante de atender à demanda.',
    nota: 'O efeito rebote — usar mais porque ficou mais barato — pode reduzir parte do ganho.',
  },
  objecoes: [
    { objecao: 'Energia renovável é sempre limpa e sem impacto.', tag: 'debate',
      resposta: 'Nenhuma fonte é isenta de impacto: hidrelétricas alteram rios e deslocam populações; parques eólicos afetam paisagens, aves e comunidades; painéis solares exigem mineração e descarte adequado. Renovável indica que o recurso se renova, não que não haja impacto. A comparação deve ser feita com critérios explícitos.' },
  ],
  aplicacao: `<p>Faça um levantamento do consumo de energia da sua casa ou escola: liste os principais equipamentos, potência e horas de uso, calcule o consumo mensal e proponha três medidas de eficiência com a economia estimada.</p>`,
  fonte: {
    obra: 'Empresa de Pesquisa Energética, Balanço Energético Nacional (edição mais recente); Procel, Selo Procel de Economia de Energia', link: { url: 'https://www.epe.gov.br', rotulo: 'EPE' },
    orientacao: `<p>No Balanço Energético Nacional, compare a participação renovável na matriz elétrica e na matriz energética. No Procel, os critérios do selo.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre matriz energética e elétrica?', r: 'A energética inclui toda a energia; a elétrica, só a eletricidade.' },
    { p: 'Quanto consome um aparelho de 2.000 W em 30 minutos?', r: '1 kWh.' },
    { p: 'Quando foi lançado o Proálcool?', r: 'Em 1975.' },
  ],
  exercicios: [
    mc('Um aparelho de 500 W ligado 4 horas consome:', ['0,5 kWh', '2 kWh', '4 kWh', '20 kWh'], 1, '0,5 kW × 4 h.'),
    mc('A maior parte da eletricidade brasileira vem de fontes:', ['Fósseis', 'Renováveis', 'Nucleares', 'Importadas'], 1, 'Matriz elétrica.'),
    mc('O Procel foi criado em:', ['1975', '1985', '2001', '2015'], 1, 'Eficiência elétrica.'),
    mc('Uma fonte intermitente é a:', ['Hidrelétrica com reservatório', 'Solar', 'Térmica a gás', 'Nuclear'], 1, 'Depende do sol.'),
    mc('O Balanço Energético Nacional é publicado pela:', ['ANA', 'EPE', 'IBGE', 'INPE'], 1, 'Empresa de Pesquisa Energética.'),
    disc('Entregue o levantamento de consumo de energia com três medidas de eficiência e a economia estimada.', ['Equipamentos e potências', 'Cálculo do consumo', 'Três medidas', 'Economia estimada']),
  ],
  resumo: ['Matriz energética e elétrica.', 'kWh = kW × h.', 'Procel (1985).', 'Toda fonte tem impactos.', 'Proálcool (1975); BEN da EPE.'],
  referencias: [
    { texto: 'Empresa de Pesquisa Energética, Balanço Energético Nacional.', link: { url: 'https://www.epe.gov.br', rotulo: 'EPE' } },
    { texto: 'Procel, Programa Nacional de Conservação de Energia Elétrica.' },
    { texto: 'Agência Internacional de Energia, World Energy Outlook.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o levantamento de consumo', 'Consultar o Balanço Energético Nacional'],
  revisao: [['kWh', 'Potência × tempo.'], ['Matriz elétrica', 'Majoritariamente renovável.'], ['Procel', '1985.']],
  avancado: {
    texto: `<h3>Emissões no ciclo de vida das fontes</h3>
<p>Comparar fontes pelas emissões só na operação engana: a análise de ciclo de vida inclui fabricação, construção, operação e desmonte ${tag('fato')}. Estudos compilados pelo IPCC indicam emissões por kWh muito menores para eólica, solar, hidrelétrica e nuclear do que para carvão e gás, embora hidrelétricas em regiões tropicais possam emitir metano dos reservatórios em quantidades variáveis ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'IPCC, Sexto Relatório de Avaliação, Grupo de Trabalho III (2022), cap. 6.' }],
    exercicios: [
      mc('A análise de ciclo de vida de uma fonte inclui:', ['Só a operação', 'Fabricação, construção, operação e desmonte', 'Só o preço', 'Só a fábrica'], 1, 'Ciclo completo.'),
      mc('Reservatórios tropicais podem emitir:', ['Oxigênio', 'Metano', 'Ozônio estratosférico', 'Nada'], 1, 'Decomposição.'),
      mc('Por kWh, o carvão emite em geral:', ['Menos que a eólica', 'Mais que a eólica', 'O mesmo', 'Zero'], 1, 'Ciclo de vida.'),
      disc('Compare duas fontes de eletricidade usadas no Brasil por emissões no ciclo de vida e outros dois critérios.', ['Duas fontes', 'Emissões', 'Outros critérios', 'Conclusão'])],
  },
}),

aula({
  id: 'ca5-3', titulo: 'Cidades, drenagem e adaptação: ilhas de calor, enchentes e soluções baseadas na natureza', duracao: '150 min',
  aprendera: ['Explicar a ilha de calor urbana', 'Explicar como a impermeabilização agrava enchentes', 'Distinguir mitigação e adaptação na escala da cidade', 'Propor soluções baseadas na natureza'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A maior parte dos brasileiros vive em cidades. Calor extremo, enchentes e deslizamentos atingem com mais força os bairros mais pobres. O que a ciência ambiental pode propor?</p>
<h3>Ilha de calor</h3>
<p>Áreas urbanas, com asfalto, concreto, pouca vegetação e calor de veículos e máquinas, tendem a ser mais quentes que o entorno rural, sobretudo à noite ${tag('fato')}. Árvores e áreas verdes reduzem a temperatura pela sombra e pela evapotranspiração ${tag('fato')}.</p>
<h3>Drenagem e enchentes</h3>
<p>A impermeabilização do solo faz a água da chuva escoar mais depressa e em maior volume para rios e galerias, aumentando os picos de cheia ${tag('fato')}. A ocupação de várzeas e encostas expõe pessoas a enchentes e deslizamentos ${tag('fato')}. As enchentes de maio de 2024 no Rio Grande do Sul atingiram centenas de municípios e causaram mais de 180 mortes ${tag('fato')}.</p>
<h3>Mitigação e adaptação</h3>
<p>Mitigar é reduzir emissões; adaptar é reduzir a vulnerabilidade aos efeitos do clima ${tag('fato')}. Soluções baseadas na natureza — parques lineares, jardins de chuva, telhados verdes, recuperação de matas ciliares — combinam drenagem, conforto térmico e biodiversidade ${tag('fato')}.</p>
<h3>Instrumentos</h3>
<p>O Estatuto da Cidade (Lei nº 10.257/2001) regula o plano diretor e a função social da propriedade urbana ${tag('fato')}. A <em>Laudato si'</em> lembra que a qualidade de vida nas cidades inclui espaços verdes, transporte e moradia dignos (n. 147–154) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Ilha de calor', 'Área urbana mais quente que o entorno.'],
    ['Impermeabilização', 'Cobertura do solo que impede a infiltração da água.'],
    ['Pico de cheia', 'Vazão máxima de um rio durante uma chuva.'],
    ['Adaptação', 'Redução da vulnerabilidade aos efeitos do clima.'],
    ['Solução baseada na natureza', 'Intervenção que usa processos naturais para resolver problemas urbanos.'],
  ],
  exemplos: `<p><strong>Infiltração em números:</strong> uma chuva de 50 mm sobre um terreno de 1.000 m² traz 50.000 litros de água. Num gramado, grande parte infiltra; num pátio cimentado, quase tudo escoa para a rua. Multiplicado por milhares de terrenos, isso explica por que bairros impermeabilizados alagam com chuvas que antes não causavam problema.</p>`,
  contexto: `<p><strong>No mundo:</strong> cidades como Copenhague e Roterdã adotaram planos de adaptação com praças que armazenam água da chuva ${tag('fato')}. <strong>No Brasil:</strong> o Centro Nacional de Monitoramento e Alertas de Desastres Naturais (Cemaden), criado em 2011, emite alertas de risco de deslizamentos e enchentes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os mais pobres são mais vulneráveis aos eventos extremos', tag: 'argumento',
    premissas: ['Moradias mais baratas costumam estar em áreas de risco, como encostas e várzeas.', 'Famílias com menos recursos têm menos meios de proteger a casa e de se recuperar depois do desastre.', 'Os serviços públicos de drenagem e contenção costumam ser piores nessas áreas.'],
    conclusao: 'Logo, os eventos extremos atingem com mais força os mais pobres.',
    nota: 'Por isso a adaptação é também questão de justiça social, como insiste a Laudato si\' (n. 25).',
  },
  objecoes: [
    { objecao: 'Enchentes são fenômenos naturais; não há o que fazer.', tag: 'debate',
      resposta: 'Chuvas intensas são naturais, mas o dano depende de onde e como se ocupa o território, da drenagem, dos alertas e da preparação. Cidades com planejamento, áreas de inundação preservadas e sistemas de alerta reduzem mortes e prejuízos. O risco combina o evento natural e a vulnerabilidade, que é construída socialmente.' },
  ],
  aplicacao: `<p>Escolha um bairro da sua cidade e avalie sua vulnerabilidade a enchentes ou calor: proporção aproximada de áreas verdes, ocupação de várzeas ou encostas, histórico de eventos e uma solução baseada na natureza adequada.</p>`,
  fonte: {
    obra: 'Lei nº 10.257/2001 (Estatuto da Cidade), arts. 2º e 39–42; Papa Francisco, Laudato si\' (2015), n. 25 e 147–154', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' },
    orientacao: `<p>No Estatuto da Cidade, as diretrizes da política urbana e o plano diretor. Na Laudato si', os pobres diante da mudança do clima (25) e a ecologia da vida cotidiana nas cidades (147–154).</p>`,
  },
  perguntas: [
    { p: 'O que causa a ilha de calor?', r: 'Superfícies que absorvem calor, pouca vegetação e calor de atividades humanas.' },
    { p: 'Por que a impermeabilização agrava enchentes?', r: 'Porque a água escoa mais depressa e em maior volume, aumentando os picos de cheia.' },
    { p: 'Qual a diferença entre mitigação e adaptação?', r: 'Mitigar reduz emissões; adaptar reduz a vulnerabilidade aos efeitos do clima.' },
  ],
  exercicios: [
    mc('Uma chuva de 20 mm sobre 500 m² traz:', ['1.000 litros', '10.000 litros', '100.000 litros', '20 litros'], 1, '1 mm sobre 1 m² = 1 litro.'),
    mc('Jardins de chuva são:', ['Mitigação apenas', 'Solução baseada na natureza para drenagem', 'Usinas', 'Barragens'], 1, 'Infiltração.'),
    mc('O Cemaden foi criado em:', ['2001', '2011', '2015', '2024'], 1, 'Alertas.'),
    mc('O Estatuto da Cidade é a Lei:', ['10.257/2001', '12.305/2010', '9.433/1997', '6.938/1981'], 0, 'Plano diretor.'),
    mc('Árvores reduzem a temperatura urbana por:', ['Sombra e evapotranspiração', 'Emitirem frio', 'Bloquearem o vento sempre', 'Nada'], 0, 'Mecanismos.'),
    disc('Avalie a vulnerabilidade de um bairro a enchentes ou calor e proponha uma solução baseada na natureza.', ['Bairro descrito', 'Fatores de vulnerabilidade', 'Histórico', 'Solução proposta']),
  ],
  resumo: ['Ilha de calor.', 'Impermeabilização e picos de cheia.', 'RS 2024: enchentes.', 'Mitigação e adaptação; soluções baseadas na natureza.', 'Estatuto da Cidade; LS 25 e 147–154.'],
  referencias: [
    { texto: 'Lei nº 10.257, de 2001 (Estatuto da Cidade).' },
    { texto: 'Cemaden, Centro Nacional de Monitoramento e Alertas de Desastres Naturais.' },
    { texto: 'Papa Francisco, Laudato si\' (2015), n. 147–154.', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação do bairro', 'Ler os textos indicados'],
  revisao: [['1 mm', '1 litro por m².'], ['Adaptação', 'Menos vulnerabilidade.'], ['Cemaden', '2011.']],
  avancado: {
    texto: `<h3>Risco = ameaça × exposição × vulnerabilidade</h3>
<p>A literatura de desastres decompõe o risco em ameaça (o evento físico), exposição (pessoas e bens no lugar) e vulnerabilidade (capacidade de resistir e se recuperar) ${tag('fato')}. Políticas podem atuar sobre cada fator: obras e reflorestamento sobre a ameaça; zoneamento sobre a exposição; renda, moradia e alerta sobre a vulnerabilidade ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Marco de Sendai para a Redução do Risco de Desastres (2015).' }],
    exercicios: [
      mc('O evento físico de um desastre é a:', ['Exposição', 'Ameaça', 'Vulnerabilidade', 'Resiliência'], 1, 'Decomposição.'),
      mc('Proibir moradias em várzeas atua sobre a:', ['Ameaça', 'Exposição', 'Chuva', 'Temperatura'], 1, 'Zoneamento.'),
      mc('O Marco de Sendai é de:', ['2005', '2015', '2020', '1992'], 1, 'Redução de risco.'),
      disc('Analise um desastre brasileiro recente pelos três fatores de risco e proponha uma ação para cada um.', ['Ameaça', 'Exposição', 'Vulnerabilidade', 'Ações'])],
  },
}),

aula({
  id: 'ca5-4', titulo: 'Investigação ambiental de quatro semanas: pergunta, monitoramento, análise e relatório', duracao: '180 min',
  aprendera: ['Formular uma pergunta ambiental e uma hipótese testável', 'Planejar monitoramento de campo ou análise de dados públicos', 'Registrar, organizar e analisar dados', 'Redigir o relatório com conclusão proporcional'],
  prereq: ['Todas as aulas anteriores de Ciências Ambientais'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma investigação própria de quatro semanas. Esta aula é o roteiro.</p>
<h3>1. Pergunta e hipótese</h3>
<p>Exemplos: "a qualidade da água do córrego piora depois do bairro X?"; "quanto e que tipo de resíduo a escola produz por semana, e quanto poderia ser evitado?"; "como mudou a cobertura de vegetação do município desde 1985?" A hipótese deve prever um resultado verificável ${tag('argumento')}.</p>
<h3>2. Desenho</h3>
<p>No campo: pontos de coleta definidos (por exemplo, acima e abaixo de uma possível fonte de poluição), mesma hora e método, registro de chuva e temperatura ${tag('fato')}. Com dados públicos: fonte, período, variáveis e data de acesso (MapBiomas, PRODES, SNIS, ANA) ${tag('fato')}.</p>
<h3>3. Análise</h3>
<p>Tabelas, gráficos, médias, comparação entre pontos ou períodos, discussão da variação natural e das fontes de erro ${tag('fato')}. Comparar com referências legais (por exemplo, as classes da Resolução Conama 357) quando cabível ${tag('fato')}.</p>
<h3>4. Relatório</h3>
<p>Pergunta e hipótese; método; resultados; discussão; limites; conclusão proporcional; referências ABNT ${tag('fato')}.</p>
<h3>Ética e segurança</h3>
<p>Não entre em propriedades sem autorização; use luvas e não beba nem toque os olhos ao coletar água; não colete em locais perigosos; não exponha pessoas nem acuse responsáveis sem prova; comunique resultados relevantes aos órgãos competentes ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Ponto de coleta', 'Local definido onde as amostras ou medidas são tomadas.'],
    ['Montante e jusante', 'Acima e abaixo de um ponto, no sentido da correnteza.'],
    ['Linha de base', 'Situação de referência antes ou longe da intervenção.'],
    ['Fonte de erro', 'Causa de diferença entre o medido e o real.'],
    ['Conclusão proporcional', 'Conclusão que não vai além do que os dados sustentam.'],
  ],
  exemplos: `<p><strong>Montante e jusante:</strong> em quatro semanas, a turbidez média acima de uma saída de esgoto foi baixa e abaixo dela foi bem maior, com o mesmo método. Conclusão proporcional: nesse período, a água ficou mais turva abaixo da saída. A causa provável é o lançamento, mas confirmar exigiria outros parâmetros (oxigênio, coliformes) e verificar se não há outra fonte entre os pontos.</p>`,
  contexto: `<p><strong>No mundo:</strong> programas de ciência cidadã monitoram rios com voluntários treinados e métodos padronizados ${tag('fato')}. <strong>No Brasil:</strong> iniciativas de monitoramento voluntário da qualidade da água em rios e córregos reúnem escolas e comunidades ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que comparar montante e jusante fortalece a conclusão', tag: 'argumento',
    premissas: ['Chuva, temperatura e estação afetam a água nos dois pontos da mesma forma, se as coletas forem simultâneas.', 'A principal diferença entre os pontos é o que acontece entre eles.', 'Uma diferença consistente entre os pontos aponta para uma causa situada entre eles.'],
    conclusao: 'Logo, comparar montante e jusante isola melhor o efeito de uma fonte de poluição.',
    nota: 'É a lógica do grupo de controle aplicada ao campo.',
  },
  objecoes: [
    { objecao: 'Medidas caseiras não valem nada; só laboratório certificado serve.', tag: 'debate',
      resposta: 'Medidas simples têm precisão menor e não servem como prova legal, mas, com método padronizado e repetição, mostram padrões e diferenças relevantes. Servem para formar o aluno, levantar hipóteses e alertar órgãos competentes, que podem fazer análises certificadas. O relatório deve declarar o limite da precisão.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: pergunta, hipótese, tipo de investigação, pontos ou fontes de dados, parâmetros, cronograma de quatro semanas, ficha de registro e cuidados de ética e segurança.</p>`,
  fonte: {
    obra: 'Resolução Conama nº 357/2005; MapBiomas; ABNT, NBR 6023', link: { url: 'https://mapbiomas.org', rotulo: 'MapBiomas' },
    orientacao: `<p>Na Resolução 357, os limites de referência para os parâmetros que você medir. No MapBiomas, as estatísticas do município, se for essa a investigação. Na NBR 6023, o formato das referências.</p>`,
  },
  perguntas: [
    { p: 'Quanto dura a investigação final?', r: 'Quatro semanas.' },
    { p: 'Para que comparar montante e jusante?', r: 'Para isolar o efeito de uma fonte situada entre os pontos.' },
    { p: 'Que cuidados de segurança tomar ao coletar água?', r: 'Usar luvas, não beber nem tocar os olhos e não coletar em locais perigosos.' },
  ],
  exercicios: [
    mc('Qual destas é uma pergunta ambiental testável?', ['A natureza é sagrada?', 'A turbidez é maior abaixo da saída de esgoto?', 'O rio é bonito?', 'Devemos amar a terra?'], 1, 'Verificável.'),
    mc('Coletar nos dois pontos ao mesmo tempo serve para:', ['Economizar', 'Igualar efeitos de chuva e temperatura', 'Atrasar', 'Nada'], 1, 'Controle.'),
    mc('A conclusão correta de uma diferença entre pontos é:', ['Afirmar o culpado', 'Descrever a diferença e indicar causa provável com limites', 'Ignorar', 'Exagerar'], 1, 'Proporcionalidade.'),
    mc('Medidas caseiras:', ['São prova legal', 'Mostram padrões, com precisão declarada', 'Não valem nada', 'Substituem laboratório'], 1, 'Limites.'),
    mc('Ao encontrar resultado relevante, deve-se:', ['Acusar publicamente alguém', 'Comunicar aos órgãos competentes', 'Esconder', 'Mudar os dados'], 1, 'Ética.'),
    disc('Apresente o pré-projeto: pergunta, hipótese, desenho, parâmetros, cronograma, ficha e cuidados.', ['Pergunta e hipótese', 'Desenho', 'Cronograma e ficha', 'Ética e segurança']),
  ],
  resumo: ['Pergunta e hipótese testável.', 'Campo (montante/jusante) ou dados públicos.', 'Análise com referências legais.', 'Relatório com conclusão proporcional.', 'Ética e segurança.'],
  referencias: [
    { texto: 'Resolução Conama nº 357, de 2005.' },
    { texto: 'MapBiomas, plataforma de dados.', link: { url: 'https://mapbiomas.org', rotulo: 'MapBiomas' } },
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Iniciar os registros'],
  revisao: [['Quatro semanas', 'Duração.'], ['Montante e jusante', 'Controle no campo.'], ['Precisão', 'Declarar limites.']],
  avancado: {
    texto: `<h3>Índice de Qualidade da Água</h3>
<p>Órgãos ambientais usam índices que combinam vários parâmetros — oxigênio dissolvido, coliformes, pH, demanda bioquímica de oxigênio, nitrogênio, fósforo, temperatura, turbidez e sólidos — num único valor de 0 a 100 ${tag('fato')}. O índice resume a informação, mas pode esconder um parâmetro crítico; por isso convém apresentar também os valores individuais ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Agência Nacional de Águas e Saneamento Básico, Índice de Qualidade das Águas.' }],
    exercicios: [
      mc('O Índice de Qualidade da Água varia de:', ['0 a 10', '0 a 100', '−1 a 1', '1 a 5'], 1, 'Escala.'),
      mc('Um risco de usar só o índice é:', ['Ser preciso demais', 'Esconder um parâmetro crítico', 'Ser proibido', 'Nenhum'], 1, 'Síntese.'),
      mc('O índice combina:', ['Um só parâmetro', 'Vários parâmetros', 'Só cor', 'Só cheiro'], 1, 'Composição.'),
      disc('Explique as vantagens e os riscos de resumir a qualidade da água num índice único, com um exemplo.', ['Vantagens', 'Riscos', 'Exemplo', 'Recomendação'])],
  },
}),

avaliacao('ca5-5', 'Avaliação integradora de Ciências Ambientais', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Ciências Ambientais. Reúne questões de todos os módulos (CA1 a CA5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça os cálculos (níveis tróficos, reserva legal, consumo de energia, volume de chuva).</li><li>Releia a rubrica da investigação (ca5-4).</li></ul>`,
[
  disc('Interprete uma série histórica ambiental brasileira à sua escolha (desmatamento, CO2, qualidade da água, cobertura do solo): descreva a tendência, explique o mecanismo, distinga medição, interpretação e projeção, e indique os limites dos dados.', ['Série com fonte', 'Tendência', 'Mecanismo', 'Distinções e limites']),
  disc('Proponha, à luz da ecologia integral, uma resposta a um problema ambiental brasileiro, mostrando o que vem da ciência, o que é juízo ético e político e o que ensina a Igreja, e responda a uma objeção forte.', ['Problema e dados', 'Proposta', 'Três planos distinguidos', 'Objeção e resposta']),
]),
];
