// Biologia V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Biologia).
// Epidemiologia e doenças transmitidas por mosquitos, biotecnologia e agricultura, conservação e áreas
// protegidas, e a investigação de quatro semanas. A avaliação final integra BI1 a BI5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'bi5-1', titulo: 'Saúde pública e epidemiologia: dengue, Aedes aegypti e controle de vetores', duracao: '150 min',
  aprendera: ['Explicar o ciclo de transmissão da dengue', 'Ler indicadores epidemiológicos (incidência, letalidade)', 'Comparar estratégias de controle do Aedes aegypti', 'Avaliar uma política de saúde com dados'],
  prereq: ['Biologia IV (módulo BI4)'],
  explicacao: `
<h3>O problema</h3>
<p>Dengue, zika e chikungunya são transmitidas pelo mesmo mosquito, o <em>Aedes aegypti</em>. Como a biologia ajuda a entendê-las e combatê-las?</p>
<h3>Ciclo de transmissão</h3>
<p>A fêmea do <em>Aedes aegypti</em>, ao picar uma pessoa infectada, adquire o vírus; depois de alguns dias, pode transmiti-lo a outras pessoas ${tag('fato')}. O mosquito se reproduz em água parada, sobretudo em recipientes domésticos ${tag('fato')}.</p>
<h3>Indicadores</h3>
<p>A <strong>incidência</strong> mede casos novos por população num período (por exemplo, por 100 mil habitantes); a <strong>letalidade</strong>, a proporção de mortes entre os casos ${tag('fato')}. O Ministério da Saúde publica boletins epidemiológicos com esses dados ${tag('fato')}.</p>
<h3>Estratégias</h3>
<ul>
<li><strong>Eliminação de criadouros</strong>: a medida mais básica, que depende da população ${tag('fato')}.</li>
<li><strong>Método Wolbachia</strong>: mosquitos com a bactéria <em>Wolbachia</em>, que reduz a capacidade de transmitir o vírus, são liberados para substituir a população local; no Brasil, o método é aplicado pela Fiocruz desde 2014 ${tag('fato')}.</li>
<li><strong>Vacinas</strong>: vacinas contra a dengue foram incorporadas ao SUS em 2024 para grupos prioritários ${tag('fato')}.</li>
</ul>
<h3>Avaliação</h3>
<p>Como em toda política, é preciso comparar com áreas ou períodos sem a intervenção e considerar outras causas, como o clima (aula e5-2) ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Vetor', 'Ser vivo que transmite o agente de uma doença.'],
    ['Incidência', 'Casos novos por população num período.'],
    ['Letalidade', 'Proporção de mortes entre os casos.'],
    ['Criadouro', 'Local onde o mosquito deposita os ovos (água parada).'],
    ['Wolbachia', 'Bactéria que reduz a transmissão de vírus pelo Aedes aegypti.'],
  ],
  exemplos: `<p><strong>Calculando a incidência:</strong> uma cidade de 250 mil habitantes registrou 1.500 casos de dengue num ano: 1.500 ÷ 250.000 × 100.000 = 600 casos por 100 mil habitantes. Se houve 3 mortes, a letalidade foi 3 ÷ 1.500 = 0,2%.</p>`,
  contexto: `<p><strong>No mundo:</strong> a dengue se expandiu em regiões tropicais e subtropicais nas últimas décadas. <strong>No Brasil:</strong> epidemias de dengue são recorrentes, com variação forte entre anos e regiões, influenciada por clima, urbanização e sorotipos circulantes ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a eliminação de criadouros reduz a dengue', tag: 'argumento',
    premissas: ['O Aedes aegypti se reproduz em água parada.', 'Sem criadouros, menos mosquitos chegam à fase adulta.', 'Com menos mosquitos, diminuem as chances de transmissão.'],
    conclusao: 'Logo, eliminar criadouros reduz a transmissão da dengue, sobretudo quando feito de forma ampla e contínua.',
    nota: 'O efeito depende de adesão coletiva: um só quintal com criadouros pode manter mosquitos no bairro.',
  },
  objecoes: [
    { objecao: 'Liberar mosquitos com Wolbachia é perigoso porque aumenta o número de mosquitos.', tag: 'debate',
      resposta: 'A liberação aumenta temporariamente a população, mas substitui os mosquitos locais por outros com menor capacidade de transmitir vírus. A avaliação dos efeitos é feita com dados de incidência comparados a áreas sem liberação, e os resultados devem ser acompanhados.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: com dados do Ministério da Saúde, calcule a incidência de dengue no seu município ou estado em dois anos, compare e explique a diferença com duas hipóteses (clima, ações de controle, sorotipos), indicando o dado necessário para testar cada uma.</p>`,
  fonte: {
    obra: 'Ministério da Saúde, boletins epidemiológicos de arboviroses; Fiocruz, Método Wolbachia', link: { url: 'https://portal.fiocruz.br', rotulo: 'Fiocruz' },
    orientacao: `<p>No boletim, localize os casos e a incidência do seu estado. No material da Fiocruz, o funcionamento do Método Wolbachia. Use ambos no exercício.</p>`,
  },
  perguntas: [
    { p: 'Que doenças o Aedes aegypti transmite?', r: 'Dengue, zika e chikungunya, entre outras.' },
    { p: 'O que é incidência?', r: 'Casos novos por população num período.' },
    { p: 'Como funciona o Método Wolbachia?', r: 'Mosquitos com a bactéria, que reduz a transmissão de vírus, substituem a população local.' },
  ],
  exercicios: [
    mc('Cidade de 100 mil habitantes com 800 casos tem incidência de:', ['8', '80', '800', '8.000'], 2, 'Por 100 mil.'),
    mc('1.000 casos e 5 mortes dão letalidade de:', ['0,05%', '0,5%', '5%', '50%'], 1, '5 ÷ 1.000.'),
    mc('O Método Wolbachia é aplicado no Brasil pela:', ['Embrapa', 'Fiocruz', 'INPE', 'IBGE'], 1, 'Desde 2014.'),
    mc('O Aedes aegypti se reproduz em:', ['Água corrente', 'Água parada', 'Solo seco', 'Árvores'], 1, 'Criadouros.'),
    mc('Avaliar uma ação de controle exige:', ['Só contar casos', 'Comparar com áreas ou períodos sem a ação', 'Ignorar o clima', 'Opinião'], 1, 'Contrafactual.'),
    disc('Entregue o cálculo da incidência de dengue em dois anos, a comparação e duas hipóteses com o dado necessário para testá-las.', ['Dados com fonte', 'Cálculos', 'Hipóteses', 'Testes propostos']),
  ],
  resumo: ['Aedes aegypti: dengue, zika, chikungunya.', 'Incidência e letalidade.', 'Criadouros, Wolbachia (Fiocruz, 2014), vacinas (SUS, 2024).', 'Avaliação com comparação.', 'Epidemias variáveis no Brasil.'],
  referencias: [
    { texto: 'Ministério da Saúde, boletins epidemiológicos de arboviroses.' },
    { texto: 'Fiocruz, Método Wolbachia.', link: { url: 'https://portal.fiocruz.br', rotulo: 'Fiocruz' } },
    { texto: 'Organização Mundial da Saúde, dengue: nota descritiva.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o exercício de incidência', 'Consultar os boletins'],
  revisao: [['Incidência', 'Por 100 mil.'], ['Wolbachia', 'Fiocruz.'], ['Criadouro', 'Água parada.']],
  avancado: {
    texto: `<h3>Zika e microcefalia</h3>
<p>Em 2015, médicos e pesquisadores brasileiros associaram o aumento de casos de microcefalia em recém-nascidos à infecção pelo vírus zika na gestação; a relação causal foi confirmada por estudos posteriores ${tag('fato')}. O episódio mostrou o papel da vigilância epidemiológica e da pesquisa nacional ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Fiocruz, publicações sobre o vírus zika.' }],
    exercicios: [
      mc('A associação entre zika e microcefalia foi identificada no Brasil em:', ['2005', '2010', '2015', '2020'], 2, 'Vigilância.'),
      mc('A relação causal foi:', ['Refutada', 'Confirmada por estudos posteriores', 'Nunca estudada', 'Doutrina'], 1, 'Pesquisa.'),
      mc('O zika é transmitido principalmente pelo:', ['Barbeiro', 'Aedes aegypti', 'Caramujo', 'Carrapato'], 1, 'Mosquito.'),
      disc('Explique como a vigilância epidemiológica permitiu identificar a relação entre zika e microcefalia.', ['Sinal observado', 'Investigação', 'Confirmação', 'Lição'])],
  },
}),

aula({
  id: 'bi5-2', titulo: 'Biotecnologia e agricultura: melhoramento, transgênicos e controle biológico', duracao: '150 min',
  aprendera: ['Distinguir melhoramento genético convencional e transgenia', 'Explicar a regulação de transgênicos no Brasil', 'Explicar o controle biológico de pragas', 'Avaliar riscos e benefícios com critérios explícitos'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A agricultura brasileira é das mais produtivas do mundo. Que papel tiveram a genética e a biotecnologia, e com que riscos?</p>
<h3>Melhoramento</h3>
<p>O melhoramento convencional seleciona e cruza plantas com características desejadas, como se faz há milênios ${tag('fato')}. A Embrapa desenvolveu, entre outros, cultivares de soja adaptadas ao clima tropical e ao Cerrado ${tag('fato')}.</p>
<h3>Transgênicos</h3>
<p>Organismos geneticamente modificados recebem genes de outras espécies por técnicas de laboratório ${tag('fato')}. No Brasil, a Lei de Biossegurança (Lei nº 11.105/2005) atribui à Comissão Técnica Nacional de Biossegurança (CTNBio) a avaliação de riscos; produtos com transgênicos devem ser rotulados ${tag('fato')}. Os riscos e benefícios — produtividade, uso de agrotóxicos, resistência de pragas, concentração do mercado de sementes — são objeto de debate com dados ${tag('debate')}.</p>
<h3>Controle biológico</h3>
<p>Consiste em usar inimigos naturais (insetos, fungos, bactérias) para controlar pragas ${tag('fato')}. No Brasil, a vespa <em>Cotesia flavipes</em> é usada no controle da broca da cana-de-açúcar ${tag('fato')}.</p>
<h3>Critérios</h3>
<p>A avaliação de uma tecnologia deve considerar segurança para a saúde e o ambiente, benefícios reais, justiça para pequenos agricultores e o princípio da precaução ${tag('argumento')}. A <em>Laudato si'</em> (n. 130–136) pede um debate amplo e com informação completa sobre os organismos geneticamente modificados ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Melhoramento genético', 'Seleção e cruzamento de organismos com características desejadas.'],
    ['Transgênico', 'Organismo que recebeu gene de outra espécie por técnica de laboratório.'],
    ['CTNBio', 'Comissão Técnica Nacional de Biossegurança.'],
    ['Controle biológico', 'Uso de inimigos naturais para controlar pragas.'],
    ['Princípio da precaução', 'Prudência diante de riscos ainda incertos.'],
  ],
  exemplos: `<p><strong>Comparando estratégias contra uma praga:</strong> agrotóxico — ação rápida, mas pode afetar outros organismos e gerar resistência; planta transgênica resistente — reduz algumas aplicações, mas pode selecionar pragas resistentes; controle biológico — mais seletivo, mas exige conhecimento e manejo. A escolha depende do caso e de dados.</p>`,
  contexto: `<p><strong>No mundo:</strong> o cultivo de transgênicos cresceu desde os anos 1990, com regras diferentes entre países. <strong>No Brasil:</strong> a expansão da soja no Cerrado, apoiada em pesquisa agronômica (bi1, e4-4), transformou a economia e a paisagem do Centro-Oeste ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que avaliar caso a caso e não "transgênicos" em bloco', tag: 'argumento',
    premissas: ['Cada organismo modificado tem genes, usos e efeitos diferentes.', 'Riscos e benefícios dependem do gene inserido, da cultura, do manejo e do ambiente.', 'Uma avaliação em bloco ignora essas diferenças.'],
    conclusao: 'Logo, a avaliação de transgênicos deve ser feita caso a caso, com dados e critérios explícitos.',
    nota: 'É o princípio adotado pelas comissões de biossegurança.',
  },
  objecoes: [
    { objecao: 'Mexer nos genes é "brincar de Deus" e sempre ilícito.', tag: 'debate',
      resposta: 'A Igreja não condena em bloco a biotecnologia: a inteligência humana pode intervir na natureza, com responsabilidade. O critério é moral — respeito ao bem das pessoas e da criação, justiça e prudência —, aplicado a cada caso (Laudato si\', 131–133).' },
  ],
  aplicacao: `<p>Escolha uma tecnologia agrícola usada no Brasil (cultivar melhorada, transgênico ou controle biológico) e avalie com quatro critérios: segurança, benefício comprovado, efeitos sobre pequenos agricultores e precaução, citando fontes.</p>`,
  fonte: {
    obra: 'Lei nº 11.105, de 2005 (Lei de Biossegurança); Embrapa, publicações sobre controle biológico; Papa Francisco, Laudato si\' (2015), n. 130–136', link: { url: 'https://www.embrapa.br', rotulo: 'Embrapa' },
    orientacao: `<p>Na lei, localize as competências da CTNBio. Na Embrapa, um caso de controle biológico. Na Laudato si', os critérios sobre organismos geneticamente modificados. Use-os na avaliação.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre melhoramento convencional e transgenia?', r: 'O melhoramento seleciona e cruza organismos; a transgenia insere genes de outras espécies em laboratório.' },
    { p: 'Que órgão avalia os riscos de transgênicos no Brasil?', r: 'A CTNBio.' },
    { p: 'O que é controle biológico?', r: 'O uso de inimigos naturais para controlar pragas.' },
  ],
  exercicios: [
    mc('A Lei de Biossegurança é de:', ['1998', '2005', '2012', '2020'], 1, 'Lei 11.105.'),
    mc('A vespa Cotesia flavipes controla:', ['A broca da cana', 'O Aedes', 'A ferrugem da soja', 'Ratos'], 0, 'Controle biológico.'),
    mc('Um transgênico recebe:', ['Só cruzamentos', 'Gene de outra espécie por técnica de laboratório', 'Agrotóxico', 'Adubo'], 1, 'Definição.'),
    mc('A Laudato si\' trata dos OGMs nos n.:', ['1–5', '130–136', '200–210', '240–246'], 1, 'Debate amplo.'),
    mc('Avaliar tecnologias caso a caso é preferível porque:', ['É mais rápido', 'Riscos e benefícios variam com cada caso', 'Proíbe tudo', 'Libera tudo'], 1, 'Prudência.'),
    disc('Avalie uma tecnologia agrícola brasileira com os quatro critérios e fontes.', ['Tecnologia descrita', 'Quatro critérios', 'Fontes', 'Conclusão']),
  ],
  resumo: ['Melhoramento convencional (Embrapa).', 'Transgênicos: Lei 11.105/2005, CTNBio, rotulagem.', 'Controle biológico (Cotesia flavipes).', 'Avaliação caso a caso.', 'Laudato si\' 130–136.'],
  referencias: [
    { texto: 'Lei nº 11.105, de 2005 (Lei de Biossegurança).' },
    { texto: 'Embrapa, publicações sobre controle biológico.', link: { url: 'https://www.embrapa.br', rotulo: 'Embrapa' } },
    { texto: 'Papa Francisco, Laudato si\' (2015).', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os documentos indicados'],
  revisao: [['CTNBio', 'Biossegurança.'], ['Controle biológico', 'Inimigos naturais.'], ['Caso a caso', 'Avaliação.']],
  avancado: {
    texto: `<h3>Fixação biológica de nitrogênio</h3>
<p>Pesquisas brasileiras, com destaque para Johanna Döbereiner, mostraram que bactérias associadas às plantas podem fornecer nitrogênio à soja e a outras culturas, reduzindo o uso de adubos nitrogenados ${tag('fato')}. É um exemplo de biotecnologia baseada em processos naturais ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Embrapa, publicações sobre fixação biológica de nitrogênio.' }],
    exercicios: [
      mc('A fixação biológica de nitrogênio na soja reduz o uso de:', ['Água', 'Adubos nitrogenados', 'Sementes', 'Tratores'], 1, 'Bactérias.'),
      mc('Uma pesquisadora de destaque nessa área no Brasil foi:', ['Johanna Döbereiner', 'Rosalind Franklin', 'Vera Rubin', 'Cecilia Payne'], 0, 'Embrapa.'),
      mc('A fixação é feita por:', ['Fungos', 'Bactérias', 'Insetos', 'Vírus'], 1, 'Rizóbios.'),
      disc('Explique a fixação biológica de nitrogênio e sua importância econômica e ambiental para a agricultura brasileira.', ['Mecanismo', 'Importância econômica', 'Importância ambiental', 'Fontes'])],
  },
}),

aula({
  id: 'bi5-3', titulo: 'Conservação da biodiversidade: unidades de conservação, restauração e espécies-bandeira', duracao: '120 min',
  aprendera: ['Explicar o Sistema Nacional de Unidades de Conservação', 'Distinguir unidades de proteção integral e de uso sustentável', 'Explicar a restauração ecológica', 'Avaliar um caso de conservação brasileiro'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como proteger a biodiversidade num país com grande território, populações locais e pressão econômica?</p>
<h3>O SNUC</h3>
<p>A Lei nº 9.985, de 2000, instituiu o Sistema Nacional de Unidades de Conservação (SNUC), com dois grupos: <strong>proteção integral</strong> (como parques nacionais e reservas biológicas, que admitem só uso indireto) e <strong>uso sustentável</strong> (como reservas extrativistas e áreas de proteção ambiental, que conciliam conservação e uso dos recursos) ${tag('fato')}. O primeiro parque nacional brasileiro foi o de Itatiaia, criado em 1937 ${tag('fato')}.</p>
<h3>Restauração</h3>
<p>A restauração ecológica ajuda áreas degradadas a recuperar a vegetação, por regeneração natural, plantio de mudas nativas ou técnicas mistas ${tag('fato')}. O Pacto pela Restauração da Mata Atlântica, lançado em 2009, reúne instituições com esse objetivo ${tag('fato')}.</p>
<h3>Espécies-bandeira</h3>
<p>O mico-leão-dourado, ameaçado de extinção, tornou-se símbolo da conservação da Mata Atlântica; programas de reprodução, reintrodução e corredores florestais ajudaram a aumentar sua população ${tag('fato')}.</p>
<h3>Pessoas e natureza</h3>
<p>Reservas extrativistas surgiram da luta de seringueiros como Chico Mendes, assassinado em 1988 ${tag('fato')}. A <em>Laudato si'</em> pede que a proteção ambiental inclua as populações que vivem nos territórios (n. 146) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['SNUC', 'Sistema Nacional de Unidades de Conservação (Lei 9.985/2000).'],
    ['Proteção integral', 'Unidades que admitem só uso indireto dos recursos.'],
    ['Uso sustentável', 'Unidades que conciliam conservação e uso dos recursos.'],
    ['Restauração ecológica', 'Recuperação de ecossistemas degradados.'],
    ['Espécie-bandeira', 'Espécie carismática que mobiliza a conservação de um ecossistema.'],
  ],
  exemplos: `<p><strong>Dois tipos de unidade:</strong> no Parque Nacional da Tijuca (proteção integral), visitação e pesquisa são permitidas, mas não a extração de recursos; na Reserva Extrativista Chico Mendes (uso sustentável), famílias coletam castanha e látex segundo um plano de manejo. Os dois tipos atendem a objetivos diferentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Marco Global de Biodiversidade de Kunming-Montreal (2022) estabeleceu metas de proteção de áreas até 2030 ${tag('fato')}. <strong>No Brasil:</strong> o ICMBio administra as unidades de conservação federais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que conservação e populações locais podem caminhar juntas', tag: 'argumento',
    premissas: ['Populações tradicionais conhecem e usam os recursos de modo que muitas vezes mantém a floresta em pé.', 'Excluí-las sem alternativa pode gerar conflito e degradação.', 'Unidades de uso sustentável aliam renda e conservação com planos de manejo.'],
    conclusao: 'Logo, em muitos casos, envolver as populações locais fortalece a conservação.',
    nota: 'Áreas de proteção integral continuam necessárias para ecossistemas e espécies mais sensíveis.',
  },
  objecoes: [
    { objecao: 'Unidades de conservação atrasam o desenvolvimento.', tag: 'debate',
      resposta: 'Há custos de oportunidade reais, mas as unidades protegem água, solo, clima e espécies, geram turismo e renda sustentável, e mantêm serviços de que a economia depende. A avaliação exige dados de custos e benefícios, não só de um lado.' },
  ],
  aplicacao: `<p>Escolha uma unidade de conservação do seu estado: categoria no SNUC, ano de criação, bioma, principais espécies, ameaças e uma ação de gestão, com fontes.</p>`,
  fonte: {
    obra: 'Lei nº 9.985, de 18 de julho de 2000 (SNUC); ICMBio, fichas das unidades de conservação', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na lei do SNUC, localize as categorias de proteção integral e de uso sustentável. No ICMBio, a ficha da unidade escolhida.</p>`,
  },
  perguntas: [
    { p: 'Quais os dois grupos de unidades do SNUC?', r: 'Proteção integral e uso sustentável.' },
    { p: 'Qual foi o primeiro parque nacional brasileiro?', r: 'O de Itatiaia, criado em 1937.' },
    { p: 'De onde surgiram as reservas extrativistas?', r: 'Da luta de seringueiros como Chico Mendes.' },
  ],
  exercicios: [
    mc('A lei do SNUC é de:', ['1937', '1988', '2000', '2012'], 2, 'Lei 9.985.'),
    mc('Parques nacionais pertencem ao grupo de:', ['Uso sustentável', 'Proteção integral', 'Propriedade privada', 'Área urbana'], 1, 'SNUC.'),
    mc('Reservas extrativistas são unidades de:', ['Proteção integral', 'Uso sustentável', 'Mineração', 'Defesa'], 1, 'Manejo.'),
    mc('O mico-leão-dourado é símbolo da conservação da:', ['Amazônia', 'Mata Atlântica', 'Caatinga', 'Pampa'], 1, 'Espécie-bandeira.'),
    mc('Chico Mendes foi assassinado em:', ['1964', '1988', '2000', '2005'], 1, 'Seringueiro do Acre.'),
    disc('Apresente uma unidade de conservação do seu estado com categoria, criação, bioma, espécies, ameaças e uma ação de gestão, com fontes.', ['Categoria e criação', 'Bioma e espécies', 'Ameaças', 'Gestão e fontes']),
  ],
  resumo: ['SNUC (Lei 9.985/2000): proteção integral e uso sustentável.', 'Itatiaia (1937).', 'Restauração; Pacto da Mata Atlântica (2009).', 'Mico-leão-dourado.', 'Chico Mendes (1988); LS 146.'],
  referencias: [
    { texto: 'Lei nº 9.985, de 2000 (SNUC).' },
    { texto: 'ICMBio, unidades de conservação federais.' },
    { texto: 'Papa Francisco, Laudato si\' (2015), n. 146.', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a apresentação da unidade', 'Ler a lei do SNUC'],
  revisao: [['SNUC', '2000.'], ['Itatiaia', '1937.'], ['Resex', 'Uso sustentável.']],
  avancado: {
    texto: `<h3>Serviços ecossistêmicos e valoração</h3>
<p>Economistas e ecólogos tentam estimar o valor monetário de serviços como polinização e regulação hídrica, para orientar políticas ${tag('interpretacao')}. Críticos lembram que nem todo valor da natureza pode ser expresso em dinheiro, posição próxima à da Laudato si' ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Papa Francisco, Laudato si\' (2015), n. 190.' }],
    exercicios: [
      mc('Valorar serviços ecossistêmicos é estimar seu valor:', ['Religioso', 'Monetário', 'Estético apenas', 'Político'], 1, 'Para políticas.'),
      mc('A crítica à valoração afirma que:', ['Tudo tem preço', 'Nem todo valor da natureza é monetário', 'A natureza não vale nada', 'Só o mercado decide'], 1, 'Limites.'),
      mc('A polinização é exemplo de:', ['Serviço ecossistêmico', 'Praga', 'Imposto', 'Doença'], 0, 'Benefício.'),
      disc('Avalie as vantagens e os limites de atribuir valor monetário à polinização no Brasil.', ['Vantagens', 'Limites', 'Exemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'bi5-4', titulo: 'Investigação biológica de quatro semanas: pergunta, desenho, registros e relatório', duracao: '180 min',
  aprendera: ['Formular pergunta e hipótese testáveis', 'Escolher entre experimento e levantamento de campo', 'Registrar e analisar dados com tabelas e gráficos', 'Redigir o relatório com conclusão proporcional'],
  prereq: ['Todas as aulas anteriores de Biologia'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma investigação própria de quatro semanas: um experimento simples ou um levantamento de campo, com registros e relatório. Esta aula é o roteiro.</p>
<h3>1. Pergunta e hipótese</h3>
<p>Exemplos: "a luz influi na germinação do feijão?"; "a quantidade de água influi no crescimento de mudas?"; "quantas espécies de aves visitam uma praça em horários diferentes?" A hipótese deve ser testável e prever um resultado ${tag('argumento')}.</p>
<h3>2. Desenho</h3>
<p>No experimento: variável independente, variável dependente, constantes, grupo de controle e repetições (bi1-3) ${tag('fato')}. No levantamento: local, horários, método de contagem padronizado, ficha de registro e identificação com guias ${tag('fato')}.</p>
<h3>3. Registro e análise</h3>
<p>Registre data, hora, condições e medidas; use tabelas e gráficos; calcule médias; compare os grupos; discuta as fontes de erro ${tag('fato')}.</p>
<h3>4. Relatório</h3>
<p>Pergunta e hipótese; método; resultados (tabelas e gráficos); discussão (a hipótese foi apoiada?); limites; conclusão proporcional; referências ABNT ${tag('fato')}.</p>
<h3>Ética e segurança</h3>
<p>Não capture nem machuque animais; observe sem interferir; respeite áreas protegidas e propriedades; use luvas ao manipular solo e plantas desconhecidas ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Hipótese testável', 'Afirmação que prevê um resultado que pode ser verificado.'],
    ['Levantamento de campo', 'Registro sistemático de seres vivos num local.'],
    ['Média', 'Soma dos valores dividida pelo número de valores.'],
    ['Repetição', 'Realização do mesmo tratamento várias vezes.'],
    ['Fonte de erro', 'Causa de diferença entre o medido e o real.'],
  ],
  exemplos: `<p><strong>Resultado e conclusão proporcional:</strong> três potes com luz germinaram 8, 9 e 7 sementes (média 8); três no escuro, 8, 7 e 9 (média 8). Conclusão: nesse experimento, a luz não alterou a germinação do feijão em 7 dias. Não se pode concluir que a luz nunca importe para nenhuma semente.</p>`,
  contexto: `<p><strong>No mundo:</strong> plataformas de ciência cidadã reúnem registros de biodiversidade feitos por voluntários. <strong>No Brasil:</strong> iniciativas de ciência cidadã registram aves, plantas e insetos, contribuindo para o conhecimento da biodiversidade ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que repetir as medidas fortalece a conclusão', tag: 'argumento',
    premissas: ['Uma medida isolada pode ser afetada por acaso ou erro.', 'Repetições mostram a variação natural dos resultados.', 'Diferenças maiores que a variação natural indicam efeito do tratamento.'],
    conclusao: 'Logo, sem repetições não se distingue um efeito real de uma flutuação casual.',
    nota: 'A estatística formaliza esse raciocínio.',
  },
  objecoes: [
    { objecao: 'Se o resultado não confirmou a hipótese, o trabalho falhou.', tag: 'debate',
      resposta: 'Um resultado que não apoia a hipótese é informação científica válida, se o desenho foi correto. O relatório deve apresentá-lo com honestidade e discutir as razões. Falhar seria esconder ou distorcer o resultado.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: pergunta, hipótese, tipo de investigação, desenho (variáveis ou método de levantamento), cronograma de quatro semanas, ficha de registro e cuidados éticos.</p>`,
  fonte: {
    obra: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982), introdução sobre método; ABNT, NBR 10520 e NBR 6023', link: null,
    orientacao: `<p>Em Mayr, leia a discussão sobre observação, comparação e experimento em biologia. Nas normas da ABNT, o formato das referências do relatório.</p>`,
  },
  perguntas: [
    { p: 'Quanto dura a investigação final?', r: 'Quatro semanas.' },
    { p: 'O que é uma hipótese testável?', r: 'Uma afirmação que prevê um resultado que pode ser verificado.' },
    { p: 'Um resultado que não apoia a hipótese invalida o trabalho?', r: 'Não, se o desenho foi correto e o resultado é apresentado com honestidade.' },
  ],
  exercicios: [
    mc('Qual destas é uma hipótese testável?', ['A natureza é bela', 'Mudas regadas diariamente crescem mais que as regadas a cada três dias', 'As plantas sentem amor', 'Tudo é energia'], 1, 'Prevê resultado.'),
    mc('Médias 8 e 8 entre dois grupos indicam:', ['Efeito forte', 'Ausência de diferença nesse experimento', 'Erro certo', 'Nada'], 1, 'Conclusão proporcional.'),
    mc('No levantamento de aves, o método deve ser:', ['Variável a cada dia', 'Padronizado', 'Secreto', 'Opcional'], 1, 'Comparabilidade.'),
    mc('Repetições servem para:', ['Atrasar', 'Distinguir efeito real de acaso', 'Mudar a hipótese', 'Nada'], 1, 'Variação natural.'),
    mc('Em campo, deve-se:', ['Capturar animais para observar', 'Observar sem interferir', 'Arrancar plantas raras', 'Ignorar propriedades'], 1, 'Ética.'),
    disc('Apresente o pré-projeto: pergunta, hipótese, tipo de investigação, desenho, cronograma, ficha de registro e ética.', ['Pergunta e hipótese', 'Desenho adequado', 'Cronograma', 'Ficha de registro', 'Ética']),
  ],
  resumo: ['Pergunta e hipótese testável.', 'Experimento ou levantamento padronizado.', 'Registros, médias, gráficos, fontes de erro.', 'Relatório com conclusão proporcional.', 'Ética e segurança.'],
  referencias: [
    { texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' },
    { texto: 'ABNT, NBR 10520 (citações) e NBR 6023 (referências).' },
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Iniciar os registros'],
  revisao: [['Quatro semanas', 'Duração.'], ['Repetições', 'Contra o acaso.'], ['Resultado negativo', 'Também é informação.']],
  avancado: {
    texto: `<h3>Teste estatístico simples</h3>
<p>Para comparar duas médias com poucas repetições, usa-se, por exemplo, o teste t de Student, que avalia se a diferença é grande em relação à variação dentro dos grupos ${tag('fato')}. O resultado é expresso por um valor p, frequentemente mal interpretado: ele não é a probabilidade de a hipótese ser verdadeira ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Manuais introdutórios de bioestatística.' }],
    exercicios: [
      mc('O teste t compara:', ['Duas médias', 'Duas cores', 'Duas espécies sempre', 'Nada'], 0, 'Student.'),
      mc('O valor p é:', ['A probabilidade de a hipótese ser verdadeira', 'Uma medida da compatibilidade dos dados com a hipótese nula', 'O tamanho da amostra', 'A média'], 1, 'Frequentemente mal interpretado.'),
      mc('Com variação grande dentro dos grupos, uma diferença pequena entre médias é:', ['Muito significativa', 'Pouco convincente', 'Certa', 'Impossível'], 1, 'Ruído.'),
      disc('Aplique, com ajuda de uma planilha, um teste t aos dados da sua investigação e interprete com cautela.', ['Dados', 'Teste', 'Interpretação', 'Cautela'])],
  },
}),

avaliacao('bi5-5', 'Avaliação integradora de Biologia', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Biologia. Reúne questões de todos os módulos (BI1 a BI5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça os cálculos (Harvey, Punnett, energia, incidência).</li><li>Releia a rubrica da investigação (bi5-4).</li></ul>`,
[
  disc('Interprete um experimento biológico (histórico ou atual): pergunta, hipótese, desenho, controle, resultados e se a conclusão é proporcional, usando conceitos de todo o percurso.', ['Pergunta e hipótese', 'Desenho e controle', 'Resultados', 'Proporcionalidade', 'Conceitos do percurso']),
  disc('Responda como biólogo católico: o que a biologia pode e o que não pode afirmar sobre a vida e sobre o ser humano? Use três exemplos de módulos diferentes e a distinção entre ciência, filosofia e doutrina.', ['Distingue ciência, filosofia e doutrina', 'Três exemplos de módulos diferentes', 'Argumentação clara', 'Conclusão fundamentada']),
]),
];
