// Módulo 12 — Olavo de Carvalho: aulas 7 a 11.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

const classificacao = (confirmado, controverso, insuficiente) => `
<h3>Classificação</h3>
<ul>
<li><strong>Confirmado</strong> ${tag('fato')}: ${confirmado}</li>
<li><strong>Controverso</strong> ${tag('debate')}: ${controverso}</li>
<li><strong>Insuficientemente fundamentado</strong> ${tag('hipotese')}: ${insuficiente}</li>
</ul>`;

export const AULAS = [
aula({
  id: 'm12-7', titulo: 'O Jardim das Aflições: tese e fontes',
  aprendera: ['O ponto de partida do livro: uma conferência sobre Epicuro', 'A tese sobre materialismo e religião civil', 'O percurso histórico de Epicuro a César e ao Estado moderno', 'Como verificar as fontes históricas do livro'],
  prereq: ['Módulo 5: filosofia helenística'],
  explicacao: `
<h3>Ocasião</h3>
<p>O Jardim das Aflições: de Epicuro à Ressurreição de César — Ensaio sobre o Materialismo e a Religião Civil (1995) parte de uma conferência do filósofo José Américo Motta Pessanha sobre Epicuro, num ciclo de palestras em São Paulo ${tag('fato')}. Olavo toma a conferência como sintoma de uma tendência intelectual e a critica ${tag('interpretacao')}.</p>
<h3>Tese</h3>
<p>O materialismo epicurista, ao negar a transcendência, não liberta o homem: deixa o lugar do sagrado vago, que acaba ocupado pelo poder político divinizado — a "religião civil" que culmina no culto imperial romano e reaparece nos Estados modernos ${tag('interpretacao')}.</p>
<h3>Argumento</h3>
<ol>
<li>O homem não pode viver sem alguma referência ao absoluto.</li>
<li>Se a transcendência é negada, algo imanente ocupa esse lugar.</li>
<li>Historicamente, o Estado foi o candidato mais forte (culto do imperador; religiões civis modernas).</li>
<li>Logo, o materialismo prepara a divinização do poder ${tag('argumento')}.</li>
</ol>
<h3>Fontes a verificar</h3>
<p>O livro percorre Epicuro, Lucrécio, o culto imperial, Maquiavel, Rousseau (religião civil, Contrato IV, 8) e outros. Verifique: (a) o que Epicuro diz dos deuses (Carta a Meneceu; deuses existem, mas não intervêm); (b) a história do culto imperial; (c) o capítulo de Rousseau ${tag('argumento')}.</p>
<h3>Leituras alternativas</h3>
<p>Estudiosos do epicurismo o leem como ética da tranquilidade (<em>ataraxia</em>) e de retiro da política, não como preparação do culto ao Estado ${tag('debate')}. A ligação histórica entre epicurismo e cesarismo é o ponto mais discutível ${tag('debate')}.</p>
${classificacao('a ocasião do livro; o conteúdo da religião civil em Rousseau; a existência do culto imperial.', 'a tese de que a negação da transcendência tende a produzir divinização do poder.', 'a ligação causal direta entre o epicurismo antigo e o cesarismo, se não documentada por fontes.')}`,
  vocabulario: [['Religião civil', 'Culto que sacraliza a ordem política.'], ['Ataraxia', 'Tranquilidade da alma (epicurismo).'], ['Culto imperial', 'Veneração do imperador romano.'], ['Cesarismo', 'Concentração e sacralização do poder.'], ['Transcendência', 'Realidade que excede o mundo.']],
  exemplos: '<p>Chesterton é citado com frequência dizendo que quem deixa de crer em Deus passa a crer em qualquer coisa — a frase não aparece nessa forma em seus escritos conhecidos. Use o exemplo para treinar: confira a fonte antes de citar.</p>',
  contexto: `<p>O livro foi escrito no debate intelectual paulista dos anos 1990 ${tag('fato')}.</p>`,
  argumento: { titulo: 'Materialismo e religião civil (reconstruído)', tag: 'argumento',
    premissas: ['O homem precisa de uma referência absoluta para orientar a vida.', 'Negada a transcendência, a referência absoluta será algo imanente.', 'O poder político é o imanente mais capaz de exigir lealdade total.'],
    conclusao: 'Logo, a negação da transcendência tende à divinização do poder político.',
    nota: 'A premissa 1 é antropológica e discutível; a 3 exige comparação histórica. A conclusão é de tendência, não de necessidade.' },
  objecoes: [{ objecao: 'Epicuro aconselhava retirar-se da política ("vive escondido"), o oposto do cesarismo.', tag: 'argumento', resposta: 'O livro poderia responder que o retiro privado deixa o espaço público sem limite transcendente. Mas a objeção mostra que a ligação não é doutrinal, e sim, no máximo, de consequência histórica, que precisa ser provada.' }],
  aplicacao: '<p>Leia a Carta a Meneceu de Epicuro e escreva no Caderno se ela apoia ou não a leitura de Olavo.</p>',
  fonte: { obra: 'Olavo de Carvalho, O Jardim das Aflições (1995), primeira parte; Epicuro, Carta a Meneceu', link: null, orientacao: '<p>Leia a primeira parte do livro e a Carta a Meneceu inteira (é curta). Compare o Epicuro de cada uma.</p>' },
  perguntas: [
    { p: 'Qual a ocasião do livro?', r: 'Uma conferência de José Américo Motta Pessanha sobre Epicuro.' },
    { p: 'Qual a tese central?', r: 'O materialismo prepara a divinização do poder (religião civil).' },
    { p: 'Qual o ponto mais discutível?', r: 'A ligação histórica entre epicurismo e cesarismo.' },
  ],
  exercicios: [
    mc('"Vive escondido" é máxima de:', ['Zenão', 'Epicuro', 'César', 'Rousseau'], 1, 'Láthe biósas.'),
    mc('A religião civil em Rousseau está em:', ['Emílio', 'Contrato Social IV, 8', 'Discurso', 'Confissões'], 1, 'Último capítulo.'),
    mc('Para Epicuro, os deuses:', ['Não existem', 'Existem, mas não intervêm', 'Governam tudo', 'São o Estado'], 1, 'Carta a Meneceu.'),
    mc('A conclusão do argumento reconstruído é de:', ['Necessidade lógica', 'Tendência', 'Fato provado', 'Dogma'], 1, 'Indutiva.'),
    disc('Avalie a tese de O Jardim das Aflições: reconstrua o argumento, confira duas fontes e classifique as afirmações.', ['Reconstrução fiel', 'Duas fontes conferidas', 'Classificação', 'Conclusão justificada'])],
  resumo: ['Ocasião: conferência sobre Epicuro.', 'Tese: materialismo e religião civil.', 'Argumento de tendência.', 'Fontes a verificar.', 'Leituras alternativas do epicurismo.'],
  referencias: [{ texto: 'Olavo de Carvalho, O Jardim das Aflições (1995).' }, { texto: 'Epicuro, Carta a Meneceu.' }, { texto: 'Rousseau, Do Contrato Social IV, 8.' }],
  revisao: [['O Jardim das Aflições', '1995; materialismo e religião civil.'], ['Carta a Meneceu', 'Epicuro sobre os deuses e a morte.'], ['Religião civil', 'Rousseau, Contrato IV, 8.']],
  avancado: {
    texto: `<h3>Religião civil moderna</h3>
<p>Robert Bellah ("Civil Religion in America", 1967) descreveu uma religião civil americana sem a conotação negativa de Olavo ${tag('fato')}. Emilio Gentile estudou as "religiões políticas" do século XX (fascismo, comunismo) ${tag('fato')}.</p>
<h3>Agostinho</h3>
<p>Na Cidade de Deus (livro VI), Agostinho critica a "teologia civil" de Varrão ${tag('fato')}. Compare com a tese de Olavo: há continuidade com a crítica agostiniana?</p>`,
    leituras: [{ texto: 'Agostinho, Cidade de Deus VI (teologia civil de Varrão).' }, { texto: 'Robert Bellah, "Civil Religion in America" (1967).' }],
    exercicios: [
      mc('A "teologia civil" de Varrão é criticada por:', ['Tomás', 'Agostinho', 'Rousseau', 'Bellah'], 1, 'Cidade de Deus VI.'),
      mc('"Civil Religion in America" (1967) é de:', ['Gentile', 'Bellah', 'Voegelin', 'Taylor'], 1, 'Sociologia da religião.'),
      mc('Gentile estudou:', ['Epicurismo', 'Religiões políticas do século XX', 'Escolástica', 'Platonismo'], 1, 'Fascismo e comunismo.'),
      disc('Compare a crítica de Agostinho à teologia civil com a tese de O Jardim das Aflições.', ['Expõe Agostinho', 'Expõe Olavo', 'Compara', 'Conclusão'])],
  },
}),

aula({
  id: 'm12-8', titulo: 'Dialética simbólica',
  aprendera: ['A proposta de uma "dialética simbólica"', 'Símbolo e conhecimento em Olavo', 'Influências: Guénon, Schuon, Mário Ferreira dos Santos', 'Riscos e limites da interpretação simbólica'],
  prereq: ['Módulo 11, aula 10: Simbólica'],
  explicacao: `
<h3>Tese</h3>
<p>Em ensaios reunidos sob o título A Dialética Simbólica, Olavo propõe que os símbolos (religiosos, míticos, literários) contêm conhecimento articulado que pode ser explicitado por uma dialética: examinar as relações entre os sentidos de um símbolo até alcançar sua unidade ${tag('interpretacao')}. Confira dados de edição na versão que usar.</p>
<h3>Argumento</h3>
<p>Se o real tem estrutura analógica (como sustentam Platão, Tomás e Mário Ferreira dos Santos), os símbolos não são arbitrários; sua interpretação pode ser rigorosa, não meramente subjetiva ${tag('argumento')}.</p>
<h3>Influências</h3>
<p>Olavo reconheceu leituras de René Guénon e Frithjof Schuon (tradicionalismo) e de Mário Ferreira dos Santos (simbólica) ${tag('fato')}. Mais tarde criticou o tradicionalismo guenoniano em pontos importantes ${tag('fato')}.</p>
<h3>Riscos</h3>
<p>A interpretação simbólica corre o risco de arbitrariedade: qualquer coisa pode ser lida como símbolo de qualquer outra. Critérios de controle: coerência com o texto e a tradição, economia, convergência de indícios, distinção entre sentido literal e espiritual ${tag('argumento')}. A Igreja ensina que o sentido literal é o fundamento dos sentidos espirituais (CIC §115–117; Tomás, ST I, q. 1, a. 10) ${tag('doutrina')}.</p>
${classificacao('as influências declaradas; a tradição clássica dos sentidos da Escritura.', 'a possibilidade de uma dialética rigorosa dos símbolos.', 'interpretações simbólicas específicas sem critérios de controle explícitos.')}`,
  vocabulario: [['Dialética simbólica', 'Explicitação rigorosa do sentido dos símbolos.'], ['Tradicionalismo', 'Corrente de Guénon e Schuon sobre uma tradição primordial.'], ['Sentido literal', 'O que o texto diz diretamente.'], ['Sentidos espirituais', 'Alegórico, moral, anagógico.'], ['Critérios de controle', 'Regras que evitam a arbitrariedade.']],
  exemplos: '<p>A travessia do Mar Vermelho é fato narrado (literal), figura do batismo (alegórico), apelo à conversão (moral) e imagem da passagem à vida eterna (anagógico) — CIC §117.</p>',
  contexto: `<p>Os ensaios datam sobretudo dos anos 1980–1990 ${tag('fato')}.</p>`,
  argumento: { titulo: 'Símbolos não são arbitrários (reconstruído)', tag: 'argumento',
    premissas: ['O real tem estrutura analógica: os entes se assemelham em graus.', 'Um símbolo usa uma semelhança real entre o que mostra e o que significa.', 'Semelhanças reais podem ser examinadas e comparadas.'],
    conclusao: 'Logo, a interpretação de símbolos pode ter critérios objetivos.',
    nota: 'A conclusão não garante que cada interpretação proposta esteja certa; só que pode ser testada.' },
  objecoes: [{ objecao: 'Símbolos são convenções culturais; o mesmo símbolo significa coisas diferentes em culturas diferentes.', tag: 'debate', resposta: 'Há símbolos convencionais e símbolos com base natural (luz, água, alto e baixo). A variação cultural é real, mas não prova que toda simbologia seja arbitrária. A objeção obriga a distinguir os casos.' }],
  aplicacao: '<p>Escolha uma passagem bíblica e interprete-a nos quatro sentidos, indicando os critérios de controle usados.</p>',
  fonte: { obra: 'Catecismo §115–119; Tomás, ST I, q. 1, a. 10; ensaios de Olavo sobre dialética simbólica', link: null, orientacao: '<p>Leia o CIC §115–119 e o artigo de Tomás. Compare com o método proposto por Olavo.</p>' },
  perguntas: [
    { p: 'O que é a dialética simbólica?', r: 'Explicitação rigorosa do sentido dos símbolos.' },
    { p: 'Quais os quatro sentidos da Escritura?', r: 'Literal, alegórico, moral, anagógico.' },
    { p: 'Qual o fundamento dos sentidos espirituais?', r: 'O sentido literal.' },
  ],
  exercicios: [
    mc('Os quatro sentidos da Escritura estão no Catecismo em:', ['§115–117', '§1–25', '§385', '§2558'], 0, 'Sentidos da Escritura.'),
    mc('Guénon e Schuon representam o:', ['Tomismo', 'Tradicionalismo', 'Positivismo', 'Existencialismo'], 1, 'Tradição primordial.'),
    mc('Para Tomás, o sentido literal:', ['É irrelevante', 'É fundamento dos espirituais', 'É só alegoria', 'Não existe'], 1, 'ST I, q. 1, a. 10.'),
    mc('Um critério de controle da interpretação simbólica é:', ['Originalidade máxima', 'Convergência de indícios', 'Fama do intérprete', 'Gosto pessoal'], 1, 'Evita arbitrariedade.'),
    disc('A interpretação simbólica pode ser rigorosa? Proponha critérios e aplique-os a um símbolo.', ['Critérios explícitos', 'Aplicação', 'Objeção cultural', 'Conclusão justificada'])],
  resumo: ['Símbolos com conhecimento articulado.', 'Estrutura analógica do real.', 'Influências tradicionalistas e de Mário.', 'Quatro sentidos.', 'Critérios de controle.'],
  referencias: [{ texto: 'Catecismo, §115–119.' }, { texto: 'Tomás de Aquino, Suma Teológica I, q. 1, a. 10.' }, { texto: 'Henri de Lubac, Exégèse médiévale (1959–1964).' }],
  revisao: [['Quatro sentidos', 'CIC §115–117.'], ['Sentido literal', 'Fundamento dos demais.'], ['Tradicionalismo', 'Guénon, Schuon.']],
  avancado: {
    texto: `<h3>De Lubac</h3>
<p>Henri de Lubac (Exégèse médiévale, 4 volumes) reconstruiu a doutrina dos quatro sentidos na Idade Média ${tag('fato')}.</p>
<h3>Crítica católica ao tradicionalismo</h3>
<p>Autores católicos criticaram o "transcendentalismo" de Schuon e a ideia de uma unidade esotérica de todas as religiões como incompatível com a unicidade da mediação de Cristo (cf. Dominus Iesus, 2000) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Congregação para a Doutrina da Fé, Dominus Iesus (2000).' }, { texto: 'Henri de Lubac, Exégèse médiévale.' }],
    exercicios: [
      mc('Exégèse médiévale é de:', ['Daniélou', 'De Lubac', 'Congar', 'Ratzinger'], 1, '1959–1964.'),
      mc('Dominus Iesus (2000) trata da:', ['Liturgia', 'Unicidade e universalidade salvífica de Cristo e da Igreja', 'Moral sexual', 'Doutrina social'], 1, 'CDF.'),
      mc('A tese da unidade esotérica das religiões é associada a:', ['Schuon', 'Tomás', 'Agostinho', 'De Lubac'], 0, 'Perenialismo.'),
      disc('A dialética simbólica é compatível com a doutrina católica dos sentidos da Escritura? Avalie.', ['Expõe a doutrina', 'Expõe a proposta', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm12-9', titulo: 'Pensamento brasileiro',
  aprendera: ['As teses de O Futuro do Pensamento Brasileiro', 'O diagnóstico sobre a cultura intelectual brasileira', 'Comparação com outros diagnósticos (Sérgio Buarque, Gilberto Freyre, Paulo Mercadante)', 'Avaliar generalizações sobre culturas nacionais'],
  explicacao: `
<h3>Tese</h3>
<p>Em O Futuro do Pensamento Brasileiro: Estudos sobre o Nosso Lugar no Mundo (1997), Olavo sustenta que a cultura intelectual brasileira sofre de imitação de modas estrangeiras e de falta de tradição filosófica própria, e que o país poderia ter papel original se cultivasse a alta cultura ${tag('interpretacao')}.</p>
<h3>Argumento</h3>
<p>Uma cultura filosófica exige continuidade: leitura dos clássicos, debate entre gerações, instituições que preservem a memória. Onde isso falta, as ideias são importadas sem digestão ${tag('argumento')}.</p>
<h3>Comparações</h3>
<ul>
<li>Sérgio Buarque de Holanda, Raízes do Brasil (1936): o "homem cordial" e a herança ibérica.</li>
<li>Gilberto Freyre, Casa-Grande & Senzala (1933): formação social e cultural.</li>
<li>Paulo Mercadante, A Consciência Conservadora no Brasil (1965) ${tag('fato')}.</li>
</ul>
<h3>Generalizações</h3>
<p>Diagnósticos de "cultura nacional" correm o risco de generalização apressada. Pergunte: que amostra se usa? Há contraexemplos (Machado de Assis, Lima Vaz, Mário Ferreira, Reale, Newton da Costa)? ${tag('argumento')}</p>
${classificacao('a influência de modas estrangeiras na universidade brasileira; a fragilidade histórica das instituições filosóficas no país.', 'o grau dessa fragilidade; o papel futuro que o autor atribui ao Brasil.', 'generalizações sobre "o brasileiro" sem dados.')}`,
  vocabulario: [['Alta cultura', 'Tradição de obras e pensamento de grande nível.'], ['Imitação cultural', 'Adoção de modas estrangeiras sem digestão.'], ['Homem cordial', 'Tipo descrito por Sérgio Buarque.'], ['Tradição', 'Continuidade de leitura e debate entre gerações.'], ['Generalização apressada', 'Conclusão ampla com base estreita.']],
  exemplos: '<p>Se você diz "o Brasil nunca teve filósofos", teste com nomes: Farias Brito, Lima Vaz, Mário Ferreira dos Santos, Vicente Ferreira da Silva, Miguel Reale. A tese precisa ser reformulada como tese de tradição institucional, não de indivíduos.</p>',
  contexto: `<p>Debates sobre "filosofia brasileira" ocorrem desde o século XIX (Sílvio Romero) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Tradição e continuidade (reconstruído)', tag: 'argumento',
    premissas: ['A filosofia progride pelo debate entre gerações sobre os mesmos problemas.', 'Isso exige instituições que preservem e transmitam esse debate.', 'Se as instituições mudam de referência a cada moda, o debate não se acumula.'],
    conclusao: 'Logo, uma cultura que importa modas sem continuidade não forma tradição filosófica.',
    nota: 'O argumento é geral e plausível. A aplicação ao Brasil depende de dados históricos.' },
  objecoes: [{ objecao: 'Desde os anos 1970 a pós-graduação em filosofia no Brasil cresceu e produziu pesquisa sólida em história da filosofia.', tag: 'debate', resposta: 'A objeção mostra avanço institucional. Olavo poderia responder que historiografia não é o mesmo que filosofia original. A questão é empírica e de critério.' }],
  aplicacao: '<p>Liste cinco pensadores brasileiros e, para cada um, uma tese e um continuador. Há tradição?</p>',
  fonte: { obra: 'Olavo de Carvalho, O Futuro do Pensamento Brasileiro (1997); Sérgio Buarque de Holanda, Raízes do Brasil, cap. 5', link: null, orientacao: '<p>Leia a introdução de Olavo e o capítulo "O homem cordial" de Sérgio Buarque. Compare os diagnósticos.</p>' },
  perguntas: [
    { p: 'Qual a tese de O Futuro do Pensamento Brasileiro?', r: 'Falta tradição filosófica própria; há imitação de modas.' },
    { p: 'O que é o "homem cordial"?', r: 'Tipo descrito por Sérgio Buarque em Raízes do Brasil.' },
    { p: 'Qual o risco de diagnósticos nacionais?', r: 'Generalização apressada.' },
  ],
  exercicios: [
    mc('Raízes do Brasil é de:', ['Freyre', 'Sérgio Buarque de Holanda', 'Mercadante', 'Olavo'], 1, '1936.'),
    mc('Casa-Grande & Senzala é de:', ['1933', '1936', '1965', '1997'], 0, 'Gilberto Freyre.'),
    mc('"O Brasil nunca teve filósofos" é:', ['Fato', 'Generalização refutável por contraexemplos', 'Dogma', 'Tese de Olavo literalmente'], 1, 'Teste.'),
    mc('A Consciência Conservadora no Brasil é de:', ['Mercadante', 'Reale', 'Freyre', 'Buarque'], 0, '1965.'),
    disc('Avalie o diagnóstico de O Futuro do Pensamento Brasileiro com dados e contraexemplos.', ['Expõe a tese', 'Dados', 'Contraexemplos', 'Conclusão justificada'])],
  resumo: ['Imitação de modas.', 'Tradição e continuidade.', 'Comparação com Buarque, Freyre, Mercadante.', 'Contraexemplos.', 'Generalizações.'],
  referencias: [{ texto: 'Olavo de Carvalho, O Futuro do Pensamento Brasileiro (1997).' }, { texto: 'Sérgio Buarque de Holanda, Raízes do Brasil (1936).' }, { texto: 'Paulo Mercadante, A Consciência Conservadora no Brasil (1965).' }],
  revisao: [['Homem cordial', 'Sérgio Buarque.'], ['Tradição filosófica', 'Continuidade institucional.'], ['Generalização apressada', 'Falácia indutiva.']],
  avancado: {
    texto: `<h3>Paulo Arantes</h3>
<p>Paulo Arantes (Um Departamento Francês de Ultramar, 1994) analisou a formação do departamento de filosofia da USP sob influência francesa — diagnóstico de outro campo político que também discute a dependência intelectual ${tag('fato')}.</p>
<h3>Lima Vaz</h3>
<p>Henrique Cláudio de Lima Vaz (Escritos de Filosofia; Antropologia Filosófica) construiu obra sistemática em diálogo com Tomás, Hegel e a filosofia moderna ${tag('fato')}. É contraexemplo relevante para testar o diagnóstico.</p>`,
    leituras: [{ texto: 'Paulo Arantes, Um Departamento Francês de Ultramar (1994).' }, { texto: 'Henrique C. de Lima Vaz, Antropologia Filosófica (1991–1992).' }],
    exercicios: [
      mc('Um Departamento Francês de Ultramar é de:', ['Olavo', 'Paulo Arantes', 'Lima Vaz', 'Reale'], 1, '1994.'),
      mc('Lima Vaz dialogou sobretudo com:', ['Tomás e Hegel', 'Comte', 'Wittgenstein', 'Marx apenas'], 0, 'Obra sistemática.'),
      mc('Diagnósticos de dependência intelectual vêm:', ['Só da direita', 'Só da esquerda', 'De campos diferentes', 'Só de Olavo'], 2, 'Arantes e Olavo.'),
      disc('Compare os diagnósticos de Olavo e de Paulo Arantes sobre a filosofia no Brasil.', ['Expõe os dois', 'Compara', 'Usa um contraexemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'm12-10', titulo: 'Comparação com os autores estudados',
  aprendera: ['Situar as teses de Olavo diante de Aristóteles, Tomás, Voegelin e Mário', 'Identificar o que é original, o que é retomada e o que é divergência', 'Construir uma avaliação própria', 'Evitar tanto a idolatria quanto a demonização'],
  prereq: ['Aulas 1 a 9 deste módulo'],
  explicacao: `
<h3>Mapa de comparação</h3>
<ul>
<li><strong>Aristóteles</strong>: quatro discursos (retomada e sistematização; atribuição debatida).</li>
<li><strong>Tomás</strong>: realismo, primado da verdade; Olavo cita Tomás, mas não é tomista de escola ${tag('interpretacao')}.</li>
<li><strong>Voegelin</strong>: crítica à modernidade como "gnosticismo"; próxima da "inversão" ${tag('interpretacao')}.</li>
<li><strong>Mário Ferreira dos Santos</strong>: simbólica, valorização da filosofia como sistema; Olavo foi divulgador de Mário ${tag('fato')}.</li>
<li><strong>Benda, Ortega</strong>: crítica aos intelectuais e às massas ${tag('interpretacao')}.</li>
</ul>
<h3>Original, retomada, divergência</h3>
<p>Para cada tese, pergunte: (1) já existia na tradição? (2) Olavo a reformula ou a aplica de modo novo? (3) diverge de suas fontes? Só depois avalie a verdade da tese ${tag('argumento')}.</p>
<h3>Avaliação própria</h3>
<p>Uma avaliação madura reconhece contribuições (por exemplo, a ênfase na formação da personalidade intelectual e o resgate de autores) e problemas (generalizações, atribuições históricas não documentadas, intervenções públicas sem rigor) ${tag('interpretacao')}. Use as classificações das aulas anteriores como base.</p>`,
  vocabulario: [['Originalidade', 'Contribuição que não estava na tradição.'], ['Retomada', 'Reformulação de tese anterior.'], ['Divergência', 'Afastamento das próprias fontes.'], ['Idolatria intelectual', 'Aceitar tudo de um autor.'], ['Demonização', 'Rejeitar tudo de um autor.']],
  exemplos: '<p>A "paralaxe cognitiva" pode ser retomada (autorrefutação, contradição performativa) com aplicação nova (diagnóstico de autores modernos). A originalidade está na aplicação, não no princípio.</p>',
  contexto: `<p>Esta aula fecha o estudo do autor com síntese própria ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que avaliar tese por tese (reconstruído)', tag: 'argumento',
    premissas: ['Autores produzem teses de valor desigual.', 'Avaliações globais ignoram essa desigualdade.', 'A justiça intelectual exige dar a cada tese o juízo que merece.'],
    conclusao: 'Logo, a avaliação deve ser feita tese por tese.',
    nota: 'O mesmo princípio vale para Marx, Nietzsche, Tomás ou Mário.' },
  objecoes: [{ objecao: 'Avaliar tese por tese perde a visão de conjunto do autor.', tag: 'debate', resposta: 'A visão de conjunto deve vir depois, como síntese das avaliações parciais, não como pressuposto.' }],
  aplicacao: '<p>Preencha no Caderno uma tabela: tese de Olavo | fonte na tradição | original/retomada/divergência | classificação | sua avaliação.</p>',
  fonte: { obra: 'Seleção de textos das aulas anteriores', link: null, orientacao: '<p>Reúna as passagens lidas no módulo e preencha a tabela de comparação.</p>' },
  perguntas: [
    { p: 'Que três perguntas fazer a cada tese antes de avaliá-la?', r: 'Já existia? Foi reformulada ou aplicada de modo novo? Diverge das fontes?' },
    { p: 'Com quem a "inversão" se aproxima?', r: 'Com o "gnosticismo" de Voegelin e a crítica de Benda.' },
    { p: 'Por que avaliar tese por tese?', r: 'Porque o valor das teses é desigual.' },
  ],
  exercicios: [
    mc('Olavo foi divulgador de:', ['Lima Vaz', 'Mário Ferreira dos Santos', 'Reale', 'Arantes'], 1, 'Reedições e aulas.'),
    mc('Aceitar tudo de um autor é:', ['Rigor', 'Idolatria intelectual', 'Caridade', 'Método'], 1, 'Erro simétrico ao da demonização.'),
    mc('A visão de conjunto deve vir:', ['Antes da leitura', 'Depois das avaliações parciais', 'Nunca', 'Do comentador'], 1, 'Síntese.'),
    mc('A originalidade da paralaxe estaria:', ['No princípio', 'Na aplicação', 'Em lugar nenhum', 'No nome apenas'], 1, 'Discutível.'),
    disc('Faça a tabela de comparação de cinco teses de Olavo e redija uma avaliação de conjunto em uma página.', ['Cinco teses', 'Fontes', 'Classificação', 'Síntese equilibrada'])],
  resumo: ['Mapa de comparação.', 'Original, retomada, divergência.', 'Avaliação tese por tese.', 'Síntese própria.', 'Nem idolatria nem demonização.'],
  referencias: [{ texto: 'Textos de Olavo de Carvalho estudados no módulo.' }, { texto: 'Eric Voegelin, A Nova Ciência da Política (1952).' }],
  revisao: [['Três perguntas', 'Existia? Reformula? Diverge?'], ['Idolatria × demonização', 'Erros simétricos.'], ['Síntese', 'Depois das avaliações parciais.']],
  avancado: {
    texto: `<h3>Recepção crítica</h3>
<p>Busque artigos acadêmicos e resenhas críticas da obra de Olavo (favoráveis e desfavoráveis) e avalie se discutem argumentos ou apenas a pessoa ${tag('argumento')}.</p>
<h3>Comparação com Gustavo Corção</h3>
<p>Gustavo Corção (1896–1978), escritor católico brasileiro, também criticou a modernidade e os intelectuais ${tag('fato')}. Compare estilos e fontes.</p>`,
    leituras: [{ texto: 'Gustavo Corção, O Século do Nada (1973).' }],
    exercicios: [
      mc('O Século do Nada é de:', ['Corção', 'Olavo', 'Mercadante', 'Reale'], 0, '1973.'),
      mc('Uma resenha que só ataca a pessoa comete:', ['Ad hominem', 'Espantalho', 'Petição de princípio', 'Indução'], 0, 'Módulo 4.'),
      mc('Corção era:', ['Positivista', 'Escritor católico', 'Marxista', 'Existencialista'], 1, '1896–1978.'),
      disc('Analise uma resenha crítica e uma favorável da obra de Olavo: discutem argumentos?', ['Duas resenhas', 'Análise de argumentos', 'Identifica falácias', 'Conclusão'])],
  },
}),

avaliacao('m12-11', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>As teses de Olavo de Carvalho estudadas — método, paralaxe, erística, quatro discursos, cultura, inversão, religião civil, dialética simbólica, pensamento brasileiro — com argumento, fontes, leituras alternativas e objeções.</p>
<h3>Critério do Degrau 10</h3>
<p>Você deve expor uma tese do autor com seu argumento, confrontá-la com a fonte primária e com uma leitura alternativa, e classificá-la como confirmada, controversa ou insuficientemente fundamentada. A primeira discursiva treina isso.</p>`,
[
  disc('Escolha uma tese de Olavo. Exponha-a com argumento em premissas, confira uma fonte primária citada por ele, apresente uma leitura alternativa e classifique cada afirmação.', ['Tese fiel', 'Argumento reconstruído', 'Fonte conferida', 'Leitura alternativa', 'Classificação justificada']),
  disc('A teoria dos quatro discursos é original? Compare com a tradição árabe (al-Fārābī, Averróis) e com Aristóteles.', ['Expõe a teoria', 'Fontes árabes', 'Aristóteles', 'Conclusão honesta']),
  disc('Distinga, em Olavo, o uso legítimo e o ilegítimo do argumento da paralaxe cognitiva, com exemplos.', ['Define', 'Uso legítimo', 'Uso ilegítimo', 'Clareza']),
]),
];
