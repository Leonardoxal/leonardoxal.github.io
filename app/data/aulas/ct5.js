// Ciências da Terra V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Ciências da Terra).
// Como se formam e se encontram recursos minerais e petróleo; riscos geológicos (deslizamentos e erosão);
// água subterrânea; a investigação de quatro semanas. A avaliação final integra CT1 a CT5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ct5-1', titulo: 'Recursos minerais e energéticos: como se formam e como se encontram', duracao: '150 min',
  aprendera: ['Explicar os elementos de um sistema petrolífero', 'Conhecer os principais métodos de prospecção', 'Explicar a concentração de minérios por processos geológicos', 'Avaliar o fechamento de minas'],
  prereq: ['Ciências da Terra IV (módulo CT4)'],
  explicacao: `
<h3>O problema</h3>
<p>Petróleo e minérios não estão em qualquer lugar. Que processos os concentram, e como os geólogos sabem onde procurar?</p>
<h3>Sistema petrolífero</h3>
<p>Para haver acumulação de petróleo são necessários: rocha geradora rica em matéria orgânica, aquecida o suficiente para gerar hidrocarbonetos; rocha reservatório porosa e permeável; rocha selante impermeável; armadilha que retenha o fluido; e a ordem certa no tempo entre geração, migração e formação da armadilha ${tag('fato')}. No pré-sal, carbonatos formam o reservatório e o sal, o selo ${tag('fato')}.</p>
<h3>Concentração de minérios</h3>
<p>Minérios formam-se por processos que concentram elementos: fluidos quentes que depositam metais em fraturas (depósitos hidrotermais), cristalização de magmas, precipitação em mares antigos (como as formações ferríferas) e intemperismo tropical, que concentra alumínio na bauxita e enriquece minérios de ferro e de níquel ${tag('fato')}.</p>
<h3>Prospecção</h3>
<p>Combinam-se mapeamento geológico, geoquímica de solos e sedimentos, geofísica — sísmica de reflexão no petróleo, magnetometria e gravimetria em minérios — e sondagens que retiram amostras do subsolo ${tag('fato')}.</p>
<h3>Fechamento de mina</h3>
<p>Toda mina se esgota; o plano de fechamento prevê estabilização de pilhas e barragens, recuperação da área e destinação econômica e social da região ${tag('fato')}. A Constituição obriga quem explora recursos minerais a recuperar o ambiente degradado (art. 225, § 2º) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Rocha geradora', 'Rocha rica em matéria orgânica que gera hidrocarbonetos.'],
    ['Rocha reservatório', 'Rocha porosa e permeável que armazena fluidos.'],
    ['Rocha selante', 'Rocha impermeável que impede a fuga do petróleo.'],
    ['Depósito hidrotermal', 'Concentração de metais depositados por fluidos quentes.'],
    ['Sísmica de reflexão', 'Método que usa ondas refletidas para mapear camadas do subsolo.'],
  ],
  exemplos: `<p><strong>Faltando um elemento:</strong> uma bacia tem rocha geradora madura e reservatórios excelentes, mas nenhuma camada selante acima deles. O petróleo gerado migra para cima e escapa para a superfície ou é degradado. Sem selo, não há campo de petróleo, por melhor que seja o resto do sistema.</p>`,
  contexto: `<p><strong>No mundo:</strong> a sísmica de reflexão tornou-se o principal instrumento de exploração de petróleo a partir do século XX ${tag('fato')}. <strong>No Brasil:</strong> a bauxita da Amazônia, formada por intemperismo tropical, abastece a produção de alumínio ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o clima tropical concentra certos minérios', tag: 'argumento',
    premissas: ['Chuva abundante e calor aceleram a decomposição química das rochas.', 'Elementos solúveis, como sódio, cálcio e parte da sílica, são lixiviados.', 'Elementos pouco solúveis, como alumínio e ferro, ficam e se concentram.'],
    conclusao: 'Logo, o intemperismo tropical prolongado pode concentrar alumínio e ferro em depósitos economicamente úteis.',
    nota: 'É por isso que grandes depósitos de bauxita estão em regiões tropicais ou que já foram tropicais.',
  },
  objecoes: [
    { objecao: 'Com a transição energética, o petróleo e a mineração não importam mais.', tag: 'debate',
      resposta: 'A transição reduz o uso de combustíveis fósseis em ritmo debatido, mas aumenta a demanda por minerais como cobre, lítio, níquel e terras raras para redes, baterias e turbinas. A geologia de recursos continua essencial; o que muda é quais recursos e com que padrões ambientais e sociais.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escolha um depósito mineral ou campo de petróleo brasileiro e explique sua formação (elementos do sistema ou processo de concentração), o método de descoberta e o plano previsto para o fechamento.</p>`,
  fonte: {
    obra: 'Agência Nacional do Petróleo (ANP), boletins de exploração e produção; Serviço Geológico do Brasil, recursos minerais', link: { url: 'https://www.sgb.gov.br', rotulo: 'Serviço Geológico do Brasil' },
    orientacao: `<p>Na ANP, os dados de produção do campo escolhido. No SGB, a descrição geológica do depósito mineral. Identifique cada elemento do sistema.</p>`,
  },
  perguntas: [
    { p: 'Quais os elementos de um sistema petrolífero?', r: 'Rocha geradora, reservatório, selante, armadilha e a ordem certa no tempo.' },
    { p: 'Como se forma a bauxita?', r: 'Por intemperismo tropical, que concentra o alumínio.' },
    { p: 'O que exige a Constituição de quem explora minérios?', r: 'Que recupere o ambiente degradado (art. 225, § 2º).' },
  ],
  exercicios: [
    mc('No pré-sal, o selo é formado por:', ['Arenito', 'Sal', 'Basalto', 'Argila apenas'], 1, 'Camada evaporítica.'),
    mc('A sísmica de reflexão é usada sobretudo na exploração de:', ['Ouro em rios', 'Petróleo', 'Água de chuva', 'Fósseis'], 1, 'Camadas do subsolo.'),
    mc('Depósitos hidrotermais formam-se por:', ['Vento', 'Fluidos quentes', 'Gelo', 'Seres vivos'], 1, 'Fraturas.'),
    mc('O intemperismo tropical concentra:', ['Sódio', 'Alumínio e ferro', 'Cálcio', 'Potássio'], 1, 'Lixiviação.'),
    mc('Sem rocha selante, o petróleo:', ['Acumula-se melhor', 'Escapa', 'Vira carvão', 'Não é gerado'], 1, 'Migração.'),
    disc('Explique a formação, a descoberta e o fechamento previsto de um depósito ou campo brasileiro.', ['Formação', 'Descoberta', 'Fechamento', 'Fontes']),
  ],
  resumo: ['Sistema petrolífero: geradora, reservatório, selo, armadilha, tempo.', 'Minérios: hidrotermal, magmático, sedimentar, intemperismo.', 'Bauxita tropical.', 'Prospecção: mapa, geoquímica, geofísica, sondagem.', 'Fechamento de mina; CF art. 225 § 2º.'],
  referencias: [
    { texto: 'Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP), boletins.' },
    { texto: 'Serviço Geológico do Brasil, recursos minerais.', link: { url: 'https://www.sgb.gov.br', rotulo: 'SGB' } },
    { texto: 'Constituição da República Federativa do Brasil (1988), art. 225.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do depósito', 'Consultar as fontes indicadas'],
  revisao: [['Sistema petrolífero', 'Cinco elementos.'], ['Bauxita', 'Intemperismo.'], ['Art. 225 § 2º', 'Recuperar.']],
  avancado: {
    texto: `<h3>Captura e armazenamento geológico de carbono</h3>
<p>Uma aplicação proposta da geologia de reservatórios é injetar CO2 em formações profundas, como aquíferos salinos ou campos esgotados, para retê-lo por longo tempo ${tag('fato')}. No pré-sal brasileiro, parte do CO2 separado do gás produzido é reinjetado nos reservatórios ${tag('fato')}. O potencial de escala, o custo e a segurança de longo prazo são debatidos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'IPCC, Relatório especial sobre captura e armazenamento de carbono (2005).' }],
    exercicios: [
      mc('O armazenamento geológico de carbono injeta CO2 em:', ['A atmosfera', 'Formações profundas', 'Rios', 'Florestas'], 1, 'Reservatórios.'),
      mc('No pré-sal, o CO2 separado do gás é em parte:', ['Liberado', 'Reinjetado', 'Vendido como gelo', 'Queimado'], 1, 'Prática.'),
      mc('O potencial do armazenamento em grande escala é:', ['Consenso', 'Debatido', 'Nulo', 'Ilimitado'], 1, 'Debate.'),
      disc('Avalie o armazenamento geológico de carbono quanto a geologia necessária, riscos e escala.', ['Geologia', 'Riscos', 'Escala', 'Conclusão'])],
  },
}),

aula({
  id: 'ct5-2', titulo: 'Riscos geológicos: deslizamentos, erosão e defesa civil', duracao: '150 min',
  aprendera: ['Explicar os fatores que causam deslizamentos', 'Ler uma carta de suscetibilidade', 'Conhecer a Política Nacional de Proteção e Defesa Civil', 'Avaliar uma área de risco'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Deslizamentos estão entre os desastres que mais matam no Brasil. Por que acontecem, e como reduzir as perdas?</p>
<h3>Fatores</h3>
<p>Deslizamentos ocorrem quando a força da gravidade sobre uma massa de solo ou rocha supera a resistência que a mantém ${tag('fato')}. Contribuem: declividade alta, solo espesso sobre rocha, chuva acumulada que satura o solo e aumenta a pressão da água nos poros, retirada da vegetação, cortes e aterros mal feitos, lançamento de água servida e lixo nas encostas ${tag('fato')}.</p>
<h3>Desastres recentes</h3>
<p>Em janeiro de 2011, chuvas intensas causaram deslizamentos e enxurradas na região serrana do Rio de Janeiro, com mais de 900 mortes ${tag('fato')}. Em fevereiro de 2022, deslizamentos em Petrópolis (RJ) mataram mais de 230 pessoas ${tag('fato')}.</p>
<h3>Erosão</h3>
<p>Voçorocas são grandes sulcos de erosão, comuns em solos arenosos desprotegidos, que avançam com a concentração da água da chuva ${tag('fato')}.</p>
<h3>Prevenção</h3>
<p>O Serviço Geológico do Brasil elabora cartas de suscetibilidade e setorizações de risco; o Cemaden emite alertas a partir de chuva medida e prevista ${tag('fato')}. A Lei nº 12.608/2012 instituiu a Política Nacional de Proteção e Defesa Civil, com ênfase na prevenção e no mapeamento de áreas de risco ${tag('fato')}. O risco combina a ameaça natural e a vulnerabilidade da ocupação (ca5-3) ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Deslizamento', 'Movimento rápido de massa de solo ou rocha encosta abaixo.'],
    ['Suscetibilidade', 'Predisposição natural de uma área a um processo.'],
    ['Saturação', 'Preenchimento dos poros do solo por água.'],
    ['Voçoroca', 'Grande sulco de erosão no solo.'],
    ['Setorização de risco', 'Delimitação de áreas ocupadas com risco e seu grau.'],
  ],
  exemplos: `<p><strong>Chuva acumulada:</strong> 50 mm de chuva num dia, após uma semana seca, podem não causar deslizamentos; os mesmos 50 mm depois de três dias de chuva contínua, com o solo já saturado, podem desencadeá-los. Por isso os alertas consideram a chuva acumulada, não só a do dia.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Marco de Sendai (2015) orienta os países na redução do risco de desastres ${tag('fato')}. <strong>No Brasil:</strong> o desastre da região serrana de 2011 levou à criação do Cemaden e à aprovação da Lei 12.608/2012 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a chuva acumulada é decisiva para os deslizamentos', tag: 'argumento',
    premissas: ['A resistência do solo depende do atrito entre os grãos.', 'A água nos poros reduz a pressão entre os grãos e, portanto, o atrito.', 'A chuva acumulada aumenta a água nos poros até a saturação.'],
    conclusao: 'Logo, a chuva acumulada reduz a resistência do solo e favorece os deslizamentos.',
    nota: 'Encostas desmatadas e cortadas ficam ainda mais suscetíveis, porque perdem raízes e apoio.',
  },
  objecoes: [
    { objecao: 'A culpa dos deslizamentos é da chuva; não há o que fazer.', tag: 'debate',
      resposta: 'A chuva é o gatilho, mas a suscetibilidade da encosta e a ocupação definem o dano. Mapeamento, obras de contenção, drenagem, controle da ocupação, alertas e planos de evacuação reduzem mortes. Os desastres de 2011 e 2022 mostram que a ocupação de áreas de alto risco aumenta muito as perdas.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise uma área de risco geológico brasileira com a carta de suscetibilidade ou a setorização do SGB — fatores naturais, ocupação, histórico e medidas de redução de risco.</p>`,
  fonte: {
    obra: 'Lei nº 12.608/2012 (Política Nacional de Proteção e Defesa Civil); Serviço Geológico do Brasil, cartas de suscetibilidade e setorização de risco', link: { url: 'https://www.sgb.gov.br', rotulo: 'Serviço Geológico do Brasil' },
    orientacao: `<p>Na Lei 12.608, as diretrizes de prevenção. No SGB, a carta ou setorização do município escolhido.</p>`,
  },
  perguntas: [
    { p: 'Por que a chuva acumulada favorece deslizamentos?', r: 'Porque a água nos poros reduz o atrito entre os grãos do solo.' },
    { p: 'O que instituiu a Lei 12.608/2012?', r: 'A Política Nacional de Proteção e Defesa Civil.' },
    { p: 'O que é uma voçoroca?', r: 'Um grande sulco de erosão no solo.' },
  ],
  exercicios: [
    mc('O desastre da região serrana do RJ foi em:', ['2001', '2011', '2022', '2024'], 1, 'Mais de 900 mortes.'),
    mc('Os deslizamentos de Petrópolis com mais de 230 mortes foram em:', ['2011', '2015', '2022', '2024'], 2, 'Fevereiro.'),
    mc('A água nos poros do solo:', ['Aumenta o atrito', 'Reduz o atrito entre os grãos', 'Não muda nada', 'Endurece o solo'], 1, 'Saturação.'),
    mc('Cartas de suscetibilidade são elaboradas pelo:', ['SGB', 'IBGE', 'TSE', 'Inmet'], 0, 'Serviço Geológico.'),
    mc('Um fator humano que aumenta o risco é:', ['Vegetação nas encostas', 'Cortes e aterros mal feitos', 'Drenagem adequada', 'Contenção'], 1, 'Ocupação.'),
    disc('Analise uma área de risco geológico com a carta do SGB: fatores naturais, ocupação, histórico e medidas.', ['Fatores naturais', 'Ocupação', 'Histórico', 'Medidas']),
  ],
  resumo: ['Gravidade contra resistência.', 'Chuva acumulada e saturação.', 'Região serrana 2011; Petrópolis 2022.', 'Voçorocas.', 'SGB, Cemaden, Lei 12.608/2012.'],
  referencias: [
    { texto: 'Lei nº 12.608, de 2012.' },
    { texto: 'Serviço Geológico do Brasil, cartas de suscetibilidade.', link: { url: 'https://www.sgb.gov.br', rotulo: 'SGB' } },
    { texto: 'Cemaden, Centro Nacional de Monitoramento e Alertas de Desastres Naturais.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da área de risco', 'Consultar as cartas do SGB'],
  revisao: [['Saturação', 'Menos atrito.'], ['2011', 'Região serrana.'], ['Lei 12.608', 'Defesa civil.']],
  avancado: {
    texto: `<h3>Fator de segurança</h3>
<p>Engenheiros e geólogos avaliam a estabilidade de uma encosta pelo fator de segurança: a razão entre as forças que resistem e as que tendem a mover a massa ${tag('fato')}. Valores acima de 1 indicam estabilidade; abaixo de 1, ruptura; obras de contenção e drenagem buscam elevar o fator com margem de segurança ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Manuais de geotecnia e estabilidade de taludes.' }],
    exercicios: [
      mc('Fator de segurança abaixo de 1 indica:', ['Estabilidade', 'Ruptura', 'Ausência de chuva', 'Rocha dura'], 1, 'Forças.'),
      mc('A drenagem de uma encosta tende a:', ['Reduzir o fator de segurança', 'Aumentar o fator de segurança', 'Não mudar', 'Causar sismos'], 1, 'Menos água nos poros.'),
      mc('O fator de segurança é a razão entre forças:', ['Que resistem e que movem', 'Magnéticas', 'Elétricas', 'Térmicas'], 0, 'Definição.'),
      disc('Explique como a chuva e a drenagem alteram o fator de segurança de uma encosta.', ['Definição', 'Efeito da chuva', 'Efeito da drenagem', 'Exemplo'])],
  },
}),

aula({
  id: 'ct5-3', titulo: 'Água subterrânea: aquíferos, poços, contaminação e gestão', duracao: '150 min',
  aprendera: ['Distinguir porosidade e permeabilidade', 'Distinguir aquífero livre e confinado', 'Explicar a lei de Darcy em termos simples', 'Avaliar riscos de contaminação e superexplotação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Grande parte dos municípios brasileiros depende, ao menos em parte, de água subterrânea. Como ela se armazena e se move, e como protegê-la?</p>
<h3>Porosidade e permeabilidade</h3>
<p>Porosidade é a fração de vazios de uma rocha ou sedimento; permeabilidade é a facilidade com que a água atravessa esses vazios ${tag('fato')}. A argila pode ter alta porosidade e baixa permeabilidade; areias e arenitos costumam ter ambas altas ${tag('fato')}.</p>
<h3>Aquíferos</h3>
<p>Aquífero é uma formação que armazena e transmite água em quantidade útil ${tag('fato')}. No aquífero livre, o topo da água (lençol freático) está em contato com a atmosfera pelos poros; no confinado, a água está entre camadas pouco permeáveis e sob pressão, o que pode fazê-la subir num poço acima do topo do aquífero (poço artesiano) ${tag('fato')}.</p>
<h3>Lei de Darcy</h3>
<p>Henry Darcy (1856) mostrou que o fluxo de água num meio poroso é proporcional à permeabilidade e ao gradiente de carga hidráulica ${tag('fato')}. Em geral, a água subterrânea move-se lentamente, de centímetros a metros por dia ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>O Sistema Aquífero Guarani e o Sistema Aquífero Alter do Chão, na Amazônia, estão entre os grandes reservatórios subterrâneos do país ${tag('fato')}. Fossas mal construídas, lixões, postos de combustível e agrotóxicos podem contaminar aquíferos, e a extração excessiva rebaixa o nível dos poços ${tag('fato')}. A perfuração de poços depende de outorga do órgão gestor (Lei 9.433/1997) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Porosidade', 'Fração de vazios de uma rocha ou sedimento.'],
    ['Permeabilidade', 'Facilidade com que um fluido atravessa um material.'],
    ['Lençol freático', 'Superfície superior da zona saturada num aquífero livre.'],
    ['Aquífero confinado', 'Aquífero entre camadas pouco permeáveis, sob pressão.'],
    ['Superexplotação', 'Extração de água acima da recarga do aquífero.'],
  ],
  exemplos: `<p><strong>Por que a contaminação é lenta e persistente:</strong> se a água subterrânea se move 0,5 metro por dia, um contaminante leva cerca de 2.000 dias — mais de cinco anos — para percorrer 1 km. Quando chega a um poço, a fonte pode ter sido esquecida, e a limpeza do aquífero é difícil e cara. Prevenir é muito melhor que remediar.</p>`,
  contexto: `<p><strong>No mundo:</strong> a superexplotação de aquíferos causa rebaixamento do terreno em cidades como a Cidade do México ${tag('fato')}. <strong>No Brasil:</strong> o Serviço Geológico do Brasil mantém o Siagas, sistema de informações sobre poços ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que um aquífero pode se esgotar mesmo sendo "renovável"', tag: 'argumento',
    premissas: ['A recarga de um aquífero depende da infiltração da chuva, que pode ser lenta.', 'Se a extração supera a recarga, o volume armazenado diminui.', 'Em aquíferos confinados profundos, a recarga pode levar séculos ou milênios.'],
    conclusao: 'Logo, um aquífero pode se esgotar na escala humana se for explorado acima de sua recarga.',
    nota: 'A gestão exige conhecer a recarga, monitorar o nível dos poços e controlar a extração.',
  },
  objecoes: [
    { objecao: 'O Aquífero Guarani é um "mar subterrâneo" inesgotável.', tag: 'debate',
      resposta: 'O volume armazenado é grande, mas a água não está disponível em toda parte: em muitas áreas está profunda, confinada ou com qualidade inadequada, e a recarga ocorre sobretudo nas áreas onde aflora. A ideia de um "mar" inesgotável é imprecisa e pode estimular uso descontrolado.' },
  ],
  aplicacao: `<p>Use o Siagas para localizar poços no seu município: profundidade, vazão e tipo de aquífero. Identifique uma possível fonte de contaminação próxima e proponha uma medida de proteção.</p>`,
  fonte: {
    obra: 'Henry Darcy, Les fontaines publiques de la ville de Dijon (1856); Serviço Geológico do Brasil, Siagas', link: { url: 'https://www.sgb.gov.br', rotulo: 'Serviço Geológico do Brasil' },
    orientacao: `<p>Em Darcy, o apêndice com os experimentos de filtração. No Siagas, os dados dos poços do seu município.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre porosidade e permeabilidade?', r: 'Porosidade é a fração de vazios; permeabilidade, a facilidade com que a água os atravessa.' },
    { p: 'O que é um poço artesiano?', r: 'Poço em aquífero confinado em que a água sobe acima do topo do aquífero por pressão.' },
    { p: 'O que diz a lei de Darcy?', r: 'Que o fluxo é proporcional à permeabilidade e ao gradiente de carga hidráulica.' },
  ],
  exercicios: [
    mc('A argila costuma ter:', ['Alta permeabilidade', 'Alta porosidade e baixa permeabilidade', 'Nenhuma porosidade', 'Alta permeabilidade e nenhuma porosidade'], 1, 'Poros pequenos.'),
    mc('A lei do fluxo em meios porosos é de:', ['Darcy', 'Darwin', 'Dalton', 'Daly'], 0, '1856.'),
    mc('A 1 m por dia, um contaminante percorre 500 m em cerca de:', ['5 dias', '50 dias', '500 dias', '5.000 dias'], 2, '500 ÷ 1.'),
    mc('A perfuração de poços no Brasil depende de:', ['Nada', 'Outorga do órgão gestor', 'Licença de pesca', 'Autorização do TSE'], 1, 'Lei 9.433/1997.'),
    mc('O sistema de informações sobre poços do SGB é o:', ['PRODES', 'Siagas', 'SNIS', 'DETER'], 1, 'Água subterrânea.'),
    disc('Localize poços do seu município no Siagas, identifique uma fonte de contaminação e proponha uma proteção.', ['Dados dos poços', 'Aquífero', 'Fonte de contaminação', 'Medida proposta']),
  ],
  resumo: ['Porosidade e permeabilidade.', 'Aquífero livre e confinado; poço artesiano.', 'Darcy (1856).', 'Guarani e Alter do Chão.', 'Contaminação lenta; outorga; Siagas.'],
  referencias: [
    { texto: 'Henry Darcy, Les fontaines publiques de la ville de Dijon (1856).' },
    { texto: 'Serviço Geológico do Brasil, Siagas.', link: { url: 'https://www.sgb.gov.br', rotulo: 'SGB' } },
    { texto: 'Lei nº 9.433, de 1997.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos poços', 'Consultar o Siagas'],
  revisao: [['Darcy', 'Fluxo em meio poroso.'], ['Confinado', 'Sob pressão.'], ['Siagas', 'Poços.']],
  avancado: {
    texto: `<h3>Perímetros de proteção de poços</h3>
<p>Para proteger poços de abastecimento, delimitam-se perímetros em torno deles, calculados pelo tempo que a água leva para chegar ao poço; dentro deles, restringem-se atividades poluidoras ${tag('fato')}. É aplicação direta da lei de Darcy à gestão da água ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Manuais de hidrogeologia aplicada.' }],
    exercicios: [
      mc('Perímetros de proteção são calculados pelo:', ['Preço da água', 'Tempo de trânsito da água até o poço', 'Número de moradores', 'Clima'], 1, 'Hidrogeologia.'),
      mc('Dentro do perímetro, restringem-se:', ['Árvores', 'Atividades poluidoras', 'Chuvas', 'Rios'], 1, 'Proteção.'),
      mc('Esses perímetros aplicam a lei de:', ['Darcy', 'Hooke', 'Ohm', 'Kepler'], 0, 'Fluxo.'),
      disc('Proponha um perímetro de proteção para um poço, com a lógica do cálculo e as atividades a restringir.', ['Lógica', 'Cálculo aproximado', 'Restrições', 'Limites'])],
  },
}),

aula({
  id: 'ct5-4', titulo: 'Investigação de quatro semanas em Ciências da Terra: campo, coleção ou registro', duracao: '180 min',
  aprendera: ['Formular uma pergunta e uma hipótese testável', 'Escolher entre coleção de rochas, perfil de afloramento e registro meteorológico', 'Registrar e analisar observações com método', 'Redigir o relatório com conclusão proporcional'],
  prereq: ['Todas as aulas anteriores de Ciências da Terra'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma investigação de quatro semanas. Esta aula é o roteiro, com três caminhos.</p>
<h3>1. Coleção comentada de rochas</h3>
<p>Reunir de 10 a 15 amostras de rochas e minerais da região, com local de coleta, descrição (cor, textura, dureza, reação a ácido fraco quando seguro), classificação e relação com o mapa geológico do SGB ${tag('fato')}.</p>
<h3>2. Perfil de um afloramento</h3>
<p>Desenhar em escala um corte de estrada ou barranco, descrever camadas, medir espessuras, reconhecer estruturas e reconstruir a sequência de eventos pelos princípios de Steno ${tag('fato')}.</p>
<h3>3. Registro meteorológico</h3>
<p>Medir diariamente, à mesma hora, temperatura, chuva (pluviômetro caseiro) e nebulosidade; comparar com dados de uma estação do Inmet e com a normal climatológica ${tag('fato')}.</p>
<h3>Relatório</h3>
<p>Pergunta e hipótese; método; resultados com tabelas, desenhos e gráficos; discussão; limites; conclusão proporcional; referências ABNT ${tag('fato')}.</p>
<h3>Ética e segurança</h3>
<p>Não colete em unidades de conservação nem em propriedades sem autorização; não colete fósseis, que são bens da União; evite barrancos instáveis e beiras de estrada com tráfego; use óculos ao quebrar rochas ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Amostra de mão', 'Fragmento de rocha do tamanho da mão, usado para descrição.'],
    ['Perfil', 'Desenho vertical das camadas de um afloramento.'],
    ['Espessura', 'Medida perpendicular de uma camada.'],
    ['Normal climatológica', 'Média de 30 anos de um parâmetro meteorológico.'],
    ['Conclusão proporcional', 'Conclusão que não vai além do que os dados sustentam.'],
  ],
  exemplos: `<p><strong>Conclusão proporcional num registro:</strong> em quatro semanas, a chuva medida no quintal somou 180 mm, enquanto a estação do Inmet mais próxima registrou 150 mm e a normal do mês é 120 mm. Conclusão: neste mês choveu acima da normal, e o pluviômetro caseiro registrou um pouco mais que a estação, o que pode refletir variação local ou erro de medida. Um mês não indica mudança climática.</p>`,
  contexto: `<p><strong>No mundo:</strong> redes de observadores voluntários de chuva existem há mais de um século em vários países ${tag('fato')}. <strong>No Brasil:</strong> geoparques e museus de geologia oferecem roteiros de campo e coleções de referência ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que comparar com uma estação oficial fortalece o registro caseiro', tag: 'argumento',
    premissas: ['Instrumentos caseiros têm erros desconhecidos.', 'Uma estação oficial próxima mede o mesmo fenômeno com instrumentos calibrados.', 'A comparação revela se o registro caseiro acompanha o padrão e qual o tamanho típico da diferença.'],
    conclusao: 'Logo, comparar com a estação oficial permite avaliar a confiabilidade do registro caseiro.',
    nota: 'Diferenças consistentes podem indicar erro do instrumento; diferenças em dias isolados, chuvas locais.',
  },
  objecoes: [
    { objecao: 'Uma coleção de pedras não é pesquisa científica.', tag: 'debate',
      resposta: 'Uma coleção sem método é passatempo; com localização, descrição padronizada, classificação justificada e relação com o mapa geológico, é trabalho de campo genuíno, como o que fundou a geologia. O que a torna científica é o método, não o objeto.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: caminho escolhido, pergunta, hipótese, materiais, locais ou horários, cronograma de quatro semanas, ficha de registro e cuidados de ética e segurança.</p>`,
  fonte: {
    obra: 'Serviço Geológico do Brasil, mapa geológico do seu estado; Inmet, dados de estações e normais climatológicas; Decreto-Lei nº 4.146/1942', link: { url: 'https://portal.inmet.gov.br', rotulo: 'Inmet' },
    orientacao: `<p>No mapa do SGB, as unidades de rocha da sua região. No Inmet, a estação mais próxima. No Decreto-Lei, a proteção dos fósseis.</p>`,
  },
  perguntas: [
    { p: 'Quais os três caminhos da investigação?', r: 'Coleção comentada de rochas, perfil de afloramento e registro meteorológico.' },
    { p: 'Por que não coletar fósseis?', r: 'Porque são bens da União e sua extração depende de autorização.' },
    { p: 'O que é a normal climatológica?', r: 'A média de 30 anos de um parâmetro.' },
  ],
  exercicios: [
    mc('Uma coleção de rochas é científica quando tem:', ['Pedras bonitas', 'Localização, descrição e classificação justificada', 'Muitas amostras', 'Etiquetas coloridas'], 1, 'Método.'),
    mc('O perfil de afloramento usa sobretudo os princípios de:', ['Darcy', 'Steno', 'Coriolis', 'Lorenz'], 1, 'Estratigrafia.'),
    mc('Um mês de chuva acima da normal indica:', ['Mudança climática comprovada', 'Um mês acima da média', 'Erro', 'Nada'], 1, 'Proporcionalidade.'),
    mc('Ao quebrar rochas, deve-se usar:', ['Luvas de lã', 'Óculos de proteção', 'Nada', 'Capacete de bicicleta'], 1, 'Segurança.'),
    mc('Comparar com estação oficial serve para:', ['Copiar os dados', 'Avaliar a confiabilidade do registro', 'Substituir a medida', 'Nada'], 1, 'Controle.'),
    disc('Apresente o pré-projeto: caminho, pergunta, hipótese, materiais, cronograma, ficha e cuidados.', ['Caminho e pergunta', 'Hipótese', 'Cronograma e ficha', 'Ética e segurança']),
  ],
  resumo: ['Três caminhos: coleção, perfil, registro.', 'Relação com mapa do SGB e dados do Inmet.', 'Relatório com conclusão proporcional.', 'Não coletar fósseis nem em áreas protegidas.', 'Segurança em campo.'],
  referencias: [
    { texto: 'Serviço Geológico do Brasil, mapas geológicos.', link: { url: 'https://www.sgb.gov.br', rotulo: 'SGB' } },
    { texto: 'Instituto Nacional de Meteorologia, dados de estações.', link: { url: 'https://portal.inmet.gov.br', rotulo: 'Inmet' } },
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Iniciar os registros'],
  revisao: [['Três caminhos', 'Coleção, perfil, registro.'], ['Fósseis', 'Não coletar.'], ['Estação oficial', 'Comparação.']],
  avancado: {
    texto: `<h3>Teste de reação ao ácido</h3>
<p>Geólogos usam ácido clorídrico diluído para reconhecer carbonatos: calcário e mármore fazem efervescência, porque o ácido libera CO2 da calcita ${tag('fato')}. Em casa, vinagre produz reação fraca e mais segura em algumas amostras; ácidos fortes não devem ser usados sem supervisão ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Guias de campo de identificação de rochas.' }],
    exercicios: [
      mc('Rochas que fazem efervescência com ácido contêm:', ['Quartzo', 'Calcita', 'Mica', 'Feldspato'], 1, 'Carbonato.'),
      mc('O gás liberado na reação é:', ['Oxigênio', 'CO2', 'Hidrogênio', 'Nitrogênio'], 1, 'Calcita.'),
      mc('Ácidos fortes devem ser usados:', ['Livremente', 'Só com supervisão', 'Nunca em laboratório', 'Em casa'], 1, 'Segurança.'),
      disc('Descreva com segurança um teste simples para distinguir calcário de granito numa coleção.', ['Teste', 'Resultado esperado', 'Segurança', 'Limites'])],
  },
}),

avaliacao('ct5-5', 'Avaliação integradora de Ciências da Terra', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Ciências da Terra. Reúne questões de todos os módulos (CT1 a CT5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça os cálculos (meia-vida, distância sísmica, velocidade de placas, tempo de trânsito da água).</li><li>Releia a rubrica da investigação (ct5-4).</li></ul>`,
[
  disc('Interprete um perfil geológico ou um mapa geológico brasileiro: reconstrua a sequência de eventos, indique como datá-los, relacione com a tectônica de placas e aponte um recurso e um risco da área.', ['Sequência de eventos', 'Datação', 'Tectônica', 'Recurso e risco']),
  disc('Responda como estudante católico: o que as ciências da Terra podem e o que não podem afirmar sobre a origem e o sentido do mundo? Use três exemplos de módulos diferentes e a distinção entre dado, interpretação, filosofia e doutrina.', ['Três exemplos', 'Distinção dos planos', 'Doutrina citada', 'Argumentação']),
]),
];
