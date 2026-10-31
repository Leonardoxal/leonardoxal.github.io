// Relações Internacionais IV — estudos avançados (etapa 8 do percurso de Relações Internacionais).
// Direito internacional; economia política internacional; segurança e conflitos; política externa brasileira.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ri4-1', titulo: 'Direito internacional: fontes, cortes e o Brasil', duracao: '150 min',
  aprendera: ['Identificar as fontes do direito internacional', 'Explicar o jus cogens', 'Conhecer a Corte Internacional de Justiça e o Tribunal Penal Internacional', 'Explicar como tratados entram no direito brasileiro'],
  prereq: ['Relações Internacionais III (módulo RI3)'],
  explicacao: `
<h3>O problema</h3>
<p>Se não há um governo mundial, como existe um direito internacional, e por que os Estados o cumprem?</p>
<h3>Fontes</h3>
<p>O artigo 38 do Estatuto da Corte Internacional de Justiça lista como fontes: as convenções (tratados), o costume internacional e os princípios gerais de direito; decisões judiciais e doutrina são meios auxiliares ${tag('fato')}. O costume exige prática geral e convicção de obrigatoriedade ${tag('fato')}.</p>
<h3>Jus cogens</h3>
<p>A Convenção de Viena sobre o Direito dos Tratados (1969, art. 53) declara nulo o tratado que conflite com norma imperativa de direito internacional geral (jus cogens), como a proibição do genocídio e da escravidão ${tag('fato')}.</p>
<h3>Cortes</h3>
<p>A Corte Internacional de Justiça, em Haia, órgão judicial da ONU, julga litígios entre Estados que aceitam sua jurisdição ${tag('fato')}. O Tribunal Penal Internacional julga indivíduos por genocídio, crimes contra a humanidade, crimes de guerra e agressão ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>Tratados assinados pelo Executivo precisam de aprovação do Congresso Nacional (CF, art. 49, I) ${tag('fato')}. Tratados de direitos humanos aprovados com quórum de emenda constitucional equivalem a emendas (art. 5º, § 3º, incluído pela EC 45/2004) ${tag('fato')}.</p>
<h3>Lei natural</h3>
<p>A tradição de Vitória e Grócio funda o direito internacional também na lei natural, que dá sentido ao jus cogens ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Costume internacional', 'Prática geral aceita como direito.'],
    ['Jus cogens', 'Norma imperativa que nenhum tratado pode derrogar.'],
    ['CIJ', 'Corte Internacional de Justiça, órgão judicial da ONU.'],
    ['TPI', 'Tribunal Penal Internacional, que julga indivíduos.'],
    ['Ratificação', 'Ato pelo qual um Estado confirma sua adesão a um tratado.'],
  ],
  exemplos: `<p><strong>Um tratado de direitos humanos no Brasil:</strong> a Convenção sobre os Direitos das Pessoas com Deficiência foi aprovada pelo Congresso com o rito do § 3º do art. 5º, e por isso tem status equivalente a emenda constitucional. Outros tratados de direitos humanos, aprovados antes, têm status discutido pela jurisprudência.</p>`,
  contexto: `<p><strong>No mundo:</strong> a CIJ tem sede no Palácio da Paz, em Haia ${tag('fato')}. <strong>No Brasil:</strong> o Supremo Tribunal Federal já decidiu sobre a hierarquia dos tratados de direitos humanos no direito interno ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os Estados cumprem o direito internacional', tag: 'argumento',
    premissas: ['A maioria dos Estados cumpre a maioria das normas na maior parte do tempo.', 'Cumprem por interesse em reciprocidade e reputação, e também por convicção de obrigação.', 'Sem convicção de obrigação, o costume internacional nem existiria.'],
    conclusao: 'Logo, o direito internacional funciona por uma mistura de interesse e convicção moral.',
    nota: 'Violações graves existem e são as mais visíveis; não são a regra.',
  },
  objecoes: [
    { objecao: 'O direito internacional não é direito, porque não há polícia mundial.', tag: 'debate',
      resposta: 'É direito de estrutura diferente: descentralizado, com sanções limitadas. Mas é aplicado por tribunais, incorporado por Estados e invocado por todos. A objeção vem de John Austin e foi muito discutida; a maioria dos juristas reconhece seu caráter jurídico.' },
  ],
  aplicacao: `<p>Escolha um tratado de que o Brasil é parte, descreva seu caminho (assinatura, aprovação pelo Congresso, ratificação, promulgação) e explique seu status no direito brasileiro.</p>`,
  fonte: {
    obra: 'Estatuto da Corte Internacional de Justiça (1945), artigo 38', link: null,
    orientacao: `<p>Observe a lista de fontes e a distinção entre fontes e meios auxiliares.</p>`,
  },
  perguntas: [
    { p: 'Quais as fontes do direito internacional segundo o art. 38?', r: 'Tratados, costume internacional e princípios gerais de direito; decisões e doutrina são meios auxiliares.' },
    { p: 'O que é jus cogens?', r: 'Norma imperativa que nenhum tratado pode derrogar.' },
    { p: 'Que dispositivo dá status de emenda a tratados de direitos humanos?', r: 'O art. 5º, § 3º, da Constituição (EC 45/2004).' },
  ],
  exercicios: [
    mc('A Convenção de Viena sobre o Direito dos Tratados é de:', ['1969', '1945', '1961', '1998'], 0, 'Art. 53.'),
    mc('O TPI julga:', ['Indivíduos', 'Só Estados', 'Empresas', 'Igrejas'], 0, 'Crimes.'),
    mc('A CIJ fica em:', ['Haia', 'Genebra', 'Nova York', 'Roma'], 0, 'Palácio da Paz.'),
    mc('A aprovação de tratados pelo Congresso está no art.:', ['49, I', '5º, § 3º', '21, XXIII', '4º'], 0, 'CF.'),
    mc('O costume exige prática geral e:', ['Convicção de obrigatoriedade', 'Assinatura', 'Votação na ONU', 'Nada'], 0, 'Elementos.'),
    disc('Descreva o caminho e o status do tratado escolhido.', ['Assinatura', 'Aprovação e ratificação', 'Promulgação', 'Status']),
  ],
  resumo: ['Fontes: art. 38.', 'Jus cogens (Viena, 1969).', 'CIJ e TPI.', 'Brasil: art. 49, I e art. 5º, § 3º.', 'Interesse e convicção.'],
  referencias: [
    { texto: 'Estatuto da Corte Internacional de Justiça (1945).' },
    { texto: 'Convenção de Viena sobre o Direito dos Tratados (1969).' },
    { texto: 'Hugo Grócio, O direito da guerra e da paz (1625).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do tratado', 'Ler a fonte indicada'],
  revisao: [['Art. 38', 'Fontes.'], ['Jus cogens', 'Imperativo.'], ['§ 3º', 'Emenda.']],
  avancado: {
    texto: `<h3>Imunidade de jurisdição</h3>
<p>Tradicionalmente, um Estado não pode ser julgado pelos tribunais de outro (imunidade de jurisdição) ${tag('fato')}. A prática distingue atos de império (atos soberanos), em geral imunes, de atos de gestão (comerciais, trabalhistas), que podem ser julgados ${tag('fato')}. Tribunais brasileiros aplicam essa distinção, por exemplo, em causas trabalhistas contra embaixadas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Convenção de Viena sobre Relações Diplomáticas (1961).' }],
    exercicios: [
      mc('Atos de império são, em geral:', ['Imunes', 'Sempre julgados', 'Crimes', 'Tratados'], 0, 'Distinção.'),
      mc('Uma causa trabalhista contra embaixada envolve ato de:', ['Gestão', 'Império', 'Guerra', 'Soberania pura'], 0, 'Exemplo.'),
      mc('A imunidade impede que um Estado seja julgado por tribunais de:', ['Outro Estado', 'Si mesmo', 'Nenhum', 'Igrejas'], 0, 'Definição.'),
      disc('Explique a diferença entre atos de império e de gestão com dois exemplos.', ['Império', 'Gestão', 'Exemplos', 'Consequências'])],
  },
}),

aula({
  id: 'ri4-2', titulo: 'Economia política internacional', duracao: '150 min',
  aprendera: ['Conhecer a ordem de Bretton Woods', 'Explicar vantagens comparativas e protecionismo', 'Conhecer a OMC e os BRICS', 'Analisar a inserção econômica do Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Comércio, finanças e desenvolvimento são temas de poder entre Estados. Como funciona a economia mundial e onde está o Brasil?</p>
<h3>Bretton Woods</h3>
<p>Na conferência de Bretton Woods (1944) foram criados o Fundo Monetário Internacional e o Banco Internacional para Reconstrução e Desenvolvimento (Banco Mundial) ${tag('fato')}. O Acordo Geral de Tarifas e Comércio (GATT, 1947) foi sucedido pela Organização Mundial do Comércio (1995) ${tag('fato')}.</p>
<h3>Comércio</h3>
<p>David Ricardo (1817) formulou a teoria das vantagens comparativas: países ganham ao se especializar no que produzem com menor custo relativo ${tag('fato')}. O protecionismo protege setores nacionais com tarifas e barreiras ${tag('fato')}. O debate entre livre comércio e proteção acompanha a história econômica ${tag('debate')}.</p>
<h3>BRICS</h3>
<p>Brasil, Rússia, Índia e China realizaram sua primeira cúpula em 2009; a África do Sul aderiu depois, e o grupo foi ampliado nos anos 2020 ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>O Brasil é grande exportador de produtos agrícolas e minerais, como soja, minério de ferro e petróleo ${tag('fato')}. A China tornou-se o maior parceiro comercial do Brasil em 2009 ${tag('fato')}. A crise da dívida externa marcou os anos 1980 ${tag('fato')}.</p>
<h3>Doutrina social</h3>
<p>São Paulo VI, na Populorum progressio (1967), alertou que o livre comércio entre partes muito desiguais pode não ser justo ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Bretton Woods', 'Conferência de 1944 que criou FMI e Banco Mundial.'],
    ['Vantagem comparativa', 'Menor custo relativo na produção de um bem.'],
    ['Protecionismo', 'Proteção da produção nacional contra a concorrência externa.'],
    ['Commodity', 'Produto básico negociado em grande escala (soja, minério).'],
    ['BRICS', 'Grupo formado por Brasil, Rússia, Índia, China e África do Sul, depois ampliado.'],
  ],
  exemplos: `<p><strong>A soja e a China:</strong> o Brasil exporta grandes volumes de soja para a China, que a usa sobretudo na alimentação animal. O comércio traz renda, mas concentra a pauta em produtos básicos e liga a economia brasileira à demanda chinesa. A análise precisa ver ganhos e vulnerabilidades.</p>`,
  contexto: `<p><strong>No mundo:</strong> a OMC tem sede em Genebra ${tag('fato')}. <strong>No Brasil:</strong> o Brasil venceu na OMC disputas importantes, como o caso do algodão contra os Estados Unidos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o comércio justo exige mais que livre comércio', tag: 'argumento',
    premissas: ['O livre comércio pode beneficiar todos os participantes em termos absolutos.', 'Entre partes muito desiguais, os termos podem favorecer sistematicamente as mais fortes.', 'A justiça exige considerar a situação real das partes, não só a forma do contrato.'],
    conclusao: 'Logo, o comércio internacional deve ser livre e também justo.',
    nota: 'É o argumento da Populorum progressio, nn. 58–59.',
  },
  objecoes: [
    { objecao: 'Exportar commodities é sinal de atraso; o Brasil devia exportar só manufaturados.', tag: 'debate',
      resposta: 'Há quem veja risco na dependência de produtos básicos e quem lembre que o agronegócio brasileiro é altamente tecnológico. O debate é sobre diversificação, agregação de valor e políticas, não sobre abandonar setores competitivos.' },
  ],
  aplicacao: `<p>Pesquise os cinco principais produtos de exportação e os cinco principais parceiros comerciais do Brasil no último ano disponível (com fonte oficial) e analise ganhos e vulnerabilidades dessa inserção.</p>`,
  fonte: {
    obra: 'São Paulo VI, Populorum progressio (1967), nn. 56–61', link: null,
    orientacao: `<p>Observe o argumento sobre a justiça nas relações comerciais entre países desiguais.</p>`,
  },
  perguntas: [
    { p: 'O que se criou em Bretton Woods?', r: 'O FMI e o Banco Mundial.' },
    { p: 'O que é vantagem comparativa?', r: 'Menor custo relativo na produção de um bem.' },
    { p: 'Desde quando a China é o maior parceiro comercial do Brasil?', r: 'Desde 2009.' },
  ],
  exercicios: [
    mc('A conferência de Bretton Woods foi em:', ['1944', '1947', '1995', '1967'], 0, 'FMI.'),
    mc('A OMC foi criada em:', ['1995', '1947', '1944', '2009'], 0, 'Sucessora do GATT.'),
    mc('A teoria das vantagens comparativas é de:', ['Ricardo', 'Smith', 'Keynes', 'Marx'], 0, '1817.'),
    mc('A primeira cúpula dos BRICs foi em:', ['2009', '2001', '1995', '2015'], 0, 'Grupo.'),
    mc('A Populorum progressio é de:', ['1967', '1891', '1963', '2009'], 0, 'Paulo VI.'),
    disc('Analise a pauta e os parceiros comerciais do Brasil.', ['Produtos', 'Parceiros', 'Ganhos', 'Vulnerabilidades']),
  ],
  resumo: ['Bretton Woods (1944).', 'GATT e OMC.', 'Ricardo e protecionismo.', 'BRICS.', 'Brasil: commodities e China; Populorum progressio.'],
  referencias: [
    { texto: 'São Paulo VI, Populorum progressio (1967).' },
    { texto: 'Robert Keohane e Joseph Nye, Poder e interdependência (1977).' },
    { texto: 'Amado Luiz Cervo e Clodoaldo Bueno, História da política exterior do Brasil (1992).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['1944', 'Bretton Woods.'], ['Ricardo', 'Vantagens.'], ['2009', 'China.']],
  avancado: {
    texto: `<h3>Termos de troca</h3>
<p>Os termos de troca comparam os preços das exportações de um país com os de suas importações ${tag('fato')}. Raúl Prebisch e a Cepal sustentaram, nos anos 1950, que os termos de troca tendiam a piorar para exportadores de produtos primários ${tag('fato')}. A tese é debatida, pois os preços de commodities oscilam muito ao longo do tempo ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Amado Luiz Cervo e Clodoaldo Bueno, História da política exterior do Brasil (1992).' }],
    exercicios: [
      mc('Os termos de troca comparam preços de:', ['Exportações e importações', 'Ações', 'Salários', 'Impostos'], 0, 'Definição.'),
      mc('A tese da deterioração é ligada a:', ['Prebisch e Cepal', 'Ricardo', 'Keynes', 'Waltz'], 0, 'Anos 1950.'),
      mc('A tese é:', ['Debatida', 'Provada sempre', 'Irrelevante', 'Proibida'], 0, 'Commodities oscilam.'),
      disc('Explique a tese de Prebisch e avalie-a com dados de preços de uma commodity brasileira.', ['Tese', 'Dados', 'Avaliação', 'Limites'])],
  },
}),

aula({
  id: 'ri4-3', titulo: 'Segurança, conflitos e operações de paz', duracao: '150 min',
  aprendera: ['Distinguir tipos de conflito contemporâneos', 'Conhecer as operações de paz da ONU', 'Conhecer acordos de desarmamento relevantes para o Brasil', 'Explicar o conceito de segurança humana'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>As guerras de hoje são diferentes das do passado? Como a comunidade internacional tenta manter a paz?</p>
<h3>Tipos de conflito</h3>
<p>Além das guerras entre Estados, há guerras civis, insurgências, terrorismo, crime organizado transnacional e ataques cibernéticos ${tag('fato')}. Desde o fim da Guerra Fria, a maioria dos conflitos armados é interna aos Estados ${tag('fato')}.</p>
<h3>Operações de paz</h3>
<p>As operações de paz da ONU ("capacetes azuis") começaram em 1948, com a missão de supervisão da trégua no Oriente Médio ${tag('fato')}. Baseiam-se no consentimento das partes, na imparcialidade e no uso mínimo da força ${tag('fato')}.</p>
<h3>Desarmamento</h3>
<p>O Tratado de Tlatelolco (1967) proibiu armas nucleares na América Latina e no Caribe ${tag('fato')}. Brasil e Argentina criaram em 1991 a Agência Brasileiro-Argentina de Contabilidade e Controle de Materiais Nucleares (ABACC), que inspeciona mutuamente as instalações dos dois países ${tag('fato')}.</p>
<h3>Segurança humana</h3>
<p>O Relatório de Desenvolvimento Humano do PNUD de 1994 propôs a "segurança humana": proteger pessoas de ameaças como fome, doença e violência, além de proteger Estados ${tag('fato')}.</p>`,
  vocabulario: [
    ['Guerra civil', 'Conflito armado dentro de um Estado.'],
    ['Operação de paz', 'Missão da ONU para manter ou construir a paz.'],
    ['Desarmamento', 'Redução ou eliminação de armamentos.'],
    ['Medida de confiança', 'Ação que reduz a desconfiança entre rivais.'],
    ['Segurança humana', 'Proteção das pessoas contra ameaças à vida e à dignidade.'],
  ],
  exemplos: `<p><strong>A ABACC:</strong> nos anos 1970 e 1980, Brasil e Argentina eram vistos como rivais com programas nucleares. Em vez de corrida armamentista, criaram uma agência comum de inspeção mútua. O caso é citado como exemplo de transformação de rivalidade em confiança por meio de instituições.</p>`,
  contexto: `<p><strong>No mundo:</strong> as forças de paz da ONU receberam o Nobel da Paz em 1988 ${tag('fato')}. <strong>No Brasil:</strong> o Centro Conjunto de Operações de Paz do Brasil (CCOPAB) prepara militares e civis para missões de paz ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a segurança humana amplia a visão de segurança', tag: 'argumento',
    premissas: ['Um Estado pode estar seguro contra invasões e sua população viver sob fome e violência.', 'A finalidade da segurança é proteger pessoas.', 'Logo, a segurança deve considerar as ameaças às pessoas, não só ao Estado.'],
    conclusao: 'Logo, a segurança humana completa a segurança estatal.',
    nota: 'Críticos dizem que o conceito pode ficar amplo demais para orientar políticas.',
  },
  objecoes: [
    { objecao: 'Operações de paz nunca funcionam.', tag: 'debate',
      resposta: 'Há fracassos conhecidos, como Ruanda e Srebrenica. Mas estudos indicam que missões de paz reduzem em muitos casos a chance de retomada do conflito. O resultado depende de mandato, recursos e cooperação das partes.' },
  ],
  aplicacao: `<p>Estude uma operação de paz da ONU (mandato, países participantes, resultados, críticas) e uma medida de confiança (como a ABACC), e compare o que cada uma ensina sobre a construção da paz.</p>`,
  fonte: {
    obra: 'Tratado de Tlatelolco (1967), artigos 1 a 5', link: null,
    orientacao: `<p>Observe as obrigações das partes e a definição de arma nuclear.</p>`,
  },
  perguntas: [
    { p: 'Quando começaram as operações de paz da ONU?', r: 'Em 1948.' },
    { p: 'O que é a ABACC?', r: 'A agência brasileiro-argentina de inspeção mútua de materiais nucleares, criada em 1991.' },
    { p: 'O que é segurança humana?', r: 'A proteção das pessoas contra ameaças como fome, doença e violência.' },
  ],
  exercicios: [
    mc('O Tratado de Tlatelolco é de:', ['1967', '1968', '1991', '1948'], 0, 'América Latina.'),
    mc('A ABACC foi criada em:', ['1991', '1967', '1985', '2001'], 0, 'Brasil e Argentina.'),
    mc('As forças de paz da ONU receberam o Nobel em:', ['1988', '1948', '2001', '1994'], 0, 'Prêmio.'),
    mc('O conceito de segurança humana foi proposto pelo PNUD em:', ['1994', '1988', '2005', '1967'], 0, 'Relatório.'),
    mc('Desde o fim da Guerra Fria, a maioria dos conflitos é:', ['Interna aos Estados', 'Entre grandes potências', 'Nuclear', 'Naval'], 0, 'Tendência.'),
    disc('Faça o estudo da operação de paz e da medida de confiança.', ['Operação', 'Medida de confiança', 'Comparação', 'Lições']),
  ],
  resumo: ['Tipos de conflito.', 'Operações de paz (1948).', 'Tlatelolco (1967).', 'ABACC (1991).', 'Segurança humana (1994).'],
  referencias: [
    { texto: 'Tratado de Tlatelolco (1967).' },
    { texto: 'PNUD, Relatório de Desenvolvimento Humano (1994).' },
    { texto: 'Raymond Aron, Paz e guerra entre as nações (1962).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o estudo', 'Ler a fonte indicada'],
  revisao: [['1948', 'Operações de paz.'], ['ABACC', 'Confiança.'], ['1994', 'Segurança humana.']],
  avancado: {
    texto: `<h3>Guerra cibernética</h3>
<p>Ataques cibernéticos podem atingir infraestruturas como energia, hospitais e sistemas financeiros ${tag('fato')}. Especialistas discutem como aplicar o direito internacional (proporcionalidade, distinção, atribuição de responsabilidade) a esse domínio ${tag('debate')}. O Manual de Tallinn, elaborado por especialistas, é uma tentativa de sistematizar essas regras, sem ser tratado oficial ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Raymond Aron, Paz e guerra entre as nações (1962).' }],
    exercicios: [
      mc('Ataques cibernéticos podem atingir:', ['Infraestruturas', 'Só computadores pessoais', 'Nada real', 'Só jogos'], 0, 'Risco.'),
      mc('O Manual de Tallinn é:', ['Obra de especialistas, não tratado', 'Tratado da ONU', 'Lei brasileira', 'Encíclica'], 0, 'Natureza.'),
      mc('Uma dificuldade jurídica é a:', ['Atribuição de responsabilidade', 'Falta de computadores', 'Língua', 'Moeda'], 0, 'Debate.'),
      disc('Discuta como os princípios de distinção e proporcionalidade se aplicam a um ataque cibernético.', ['Distinção', 'Proporcionalidade', 'Atribuição', 'Juízo'])],
  },
}),

aula({
  id: 'ri4-4', titulo: 'Política externa brasileira: princípios, tradição e desafios', duracao: '150 min',
  aprendera: ['Conhecer os princípios constitucionais das relações internacionais do Brasil', 'Identificar linhas de continuidade da política externa', 'Conhecer o Mercosul e a integração regional', 'Analisar desafios atuais'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Que princípios orientam o Brasil no mundo, e quais são os desafios atuais?</p>
<h3>Constituição</h3>
<p>O artigo 4º da Constituição de 1988 lista os princípios das relações internacionais do Brasil: independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, igualdade entre os Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos e concessão de asilo político ${tag('fato')}. O parágrafo único prevê a busca da integração da América Latina ${tag('fato')}.</p>
<h3>Tradição</h3>
<p>Analistas apontam linhas de continuidade: solução pacífica de controvérsias, apoio ao multilateralismo, busca de autonomia e de desenvolvimento ${tag('interpretacao')}. O Brasil pleiteia há décadas um assento permanente num Conselho de Segurança reformado ${tag('fato')}.</p>
<h3>Integração</h3>
<p>O Tratado de Assunção (1991) criou o Mercosul, com Argentina, Paraguai e Uruguai ${tag('fato')}.</p>
<h3>Desafios</h3>
<p>Entre os temas atuais estão a Amazônia e o clima, a relação com Estados Unidos e China, o comércio, a segurança nas fronteiras e as migrações ${tag('interpretacao')}. O Brasil sediou a Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento (Rio 92) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Não intervenção', 'Princípio de não interferir nos assuntos internos de outros Estados.'],
    ['Autodeterminação', 'Direito dos povos de decidir seu destino político.'],
    ['Multilateralismo', 'Cooperação entre muitos Estados por meio de instituições.'],
    ['Integração regional', 'Aproximação econômica e política entre países vizinhos.'],
    ['Asilo político', 'Proteção concedida a perseguidos políticos.'],
  ],
  exemplos: `<p><strong>Princípios em tensão:</strong> diante de graves violações de direitos humanos num país vizinho, a "prevalência dos direitos humanos" e a "não intervenção", ambas do art. 4º, podem apontar em direções diferentes. A política externa precisa equilibrá-las com prudência, por meios diplomáticos e multilaterais.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Rio 92 aprovou a Agenda 21 e abriu para assinatura convenções sobre clima e biodiversidade ${tag('fato')}. <strong>No Brasil:</strong> o Itamaraty tem sede no Palácio Itamaraty, em Brasília, projetado por Oscar Niemeyer ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os princípios do art. 4º exigem prudência', tag: 'argumento',
    premissas: ['O art. 4º reúne princípios que, em casos concretos, podem entrar em tensão.', 'Nenhuma fórmula automática resolve todas as tensões.', 'A virtude que aplica princípios gerais a situações concretas é a prudência.'],
    conclusao: 'Logo, a política externa brasileira exige prudência, não aplicação mecânica de princípios.',
    nota: 'É o que Morgenthau, Aron e a tradição tomista afirmam, cada um à sua maneira.',
  },
  objecoes: [
    { objecao: 'A política externa brasileira muda totalmente a cada governo.', tag: 'debate',
      resposta: 'Há mudanças de ênfase e de alinhamentos conforme os governos. Mas muitos analistas apontam continuidades: negociação, multilateralismo, defesa da integração regional e busca de autonomia. O grau de continuidade é objeto de debate.' },
  ],
  aplicacao: `<p>Escolha um tema atual da política externa brasileira, identifique quais princípios do art. 4º estão em jogo, descreva a posição oficial (com fonte) e avalie-a com prudência, apresentando ao menos uma posição contrária.</p>`,
  fonte: {
    obra: 'Constituição da República Federativa do Brasil (1988), artigo 4º', link: null,
    orientacao: `<p>Leia os dez princípios e o parágrafo único, e pense em casos em que entram em tensão.</p>`,
  },
  perguntas: [
    { p: 'Cite quatro princípios do art. 4º da Constituição.', r: 'Independência nacional, prevalência dos direitos humanos, não intervenção, solução pacífica dos conflitos (entre outros).' },
    { p: 'Que tratado criou o Mercosul?', r: 'O Tratado de Assunção (1991).' },
    { p: 'Que conferência o Brasil sediou em 1992?', r: 'A Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento (Rio 92).' },
  ],
  exercicios: [
    mc('Os princípios das relações internacionais do Brasil estão no art.:', ['4º', '5º', '49', '21'], 0, 'CF/88.'),
    mc('O Mercosul foi criado em:', ['1991', '1988', '1995', '2009'], 0, 'Assunção.'),
    mc('O parágrafo único do art. 4º prevê a integração da:', ['América Latina', 'Europa', 'Ásia', 'África'], 0, 'Texto.'),
    mc('A Rio 92 aprovou a:', ['Agenda 21', 'Carta da ONU', 'Paz de Vestfália', 'OMC'], 0, 'Meio ambiente.'),
    mc('Prevalência dos direitos humanos e não intervenção podem:', ['Entrar em tensão', 'Nunca se relacionar', 'Ser idênticas', 'Anular a Constituição'], 0, 'Prudência.'),
    disc('Analise o tema atual de política externa escolhido.', ['Princípios', 'Posição oficial', 'Avaliação', 'Posição contrária']),
  ],
  resumo: ['Art. 4º: dez princípios.', 'Integração latino-americana.', 'Continuidades.', 'Mercosul (1991).', 'Desafios atuais e prudência.'],
  referencias: [
    { texto: 'Constituição da República Federativa do Brasil (1988), art. 4º.' },
    { texto: 'Rubens Ricupero, A diplomacia na construção do Brasil (1750–2016) (2017).' },
    { texto: 'Amado Luiz Cervo e Clodoaldo Bueno, História da política exterior do Brasil (1992).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['Art. 4º', 'Princípios.'], ['1991', 'Mercosul.'], ['Rio 92', 'Agenda 21.']],
  avancado: {
    texto: `<h3>O Tratado de Cooperação Amazônica</h3>
<p>O Tratado de Cooperação Amazônica (1978), entre os países da bacia amazônica, deu origem à Organização do Tratado de Cooperação Amazônica (OTCA) ${tag('fato')}. Ele afirma a soberania de cada país sobre seu território amazônico e a cooperação para o desenvolvimento e a proteção ambiental ${tag('fato')}. O tema une soberania, meio ambiente e cooperação regional ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Rubens Ricupero, A diplomacia na construção do Brasil (1750–2016) (2017).' }],
    exercicios: [
      mc('O Tratado de Cooperação Amazônica é de:', ['1978', '1991', '1992', '1967'], 0, 'OTCA.'),
      mc('O tratado afirma a soberania de cada país sobre:', ['Seu território amazônico', 'Toda a Amazônia', 'Os oceanos', 'Nada'], 0, 'Princípio.'),
      mc('A OTCA reúne países da:', ['Bacia amazônica', 'Europa', 'Ásia', 'África'], 0, 'Membros.'),
      disc('Discuta como conciliar soberania e cooperação internacional na proteção da Amazônia.', ['Soberania', 'Cooperação', 'Interesses', 'Proposta'])],
  },
}),

avaliacao('ri4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas de direito internacional, economia política, segurança e política externa brasileira, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o art. 4º da Constituição.</li><li>Revise as datas principais.</li></ul>`,
[
  disc('Analise um tema internacional atual que envolva o Brasil sob quatro perspectivas: direito internacional, economia política, segurança e princípios constitucionais da política externa.', ['Direito', 'Economia', 'Segurança', 'Art. 4º']),
  disc('Explique, com a ABACC ou o Tratado de Tlatelolco e com a Populorum progressio, como instituições e justiça podem transformar relações de rivalidade e desigualdade.', ['Caso', 'Instituições', 'Justiça', 'Síntese']),
]),
];
