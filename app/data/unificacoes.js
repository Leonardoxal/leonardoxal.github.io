// Gerado por scripts/unificar-obras.mjs. Pode ser corrigido à mão: apague a linha de um grupo errado e ponha o
// título de base em MANTER_SEPARADOS, no script, para ele não voltar.
// Cada linha: [id da obra principal, [[id do registro unificado, tipo], …], título comum (só para obra em volumes)]. Tipo 'd': outro registro da mesma obra
// (edição, tradução ou grafia do título); 'p': volume ou parte. 't': tradução identificada. Nos comentários, "=" marca 'd', "+" marca 'p' e "~" marca 't'.
// 205 obras reúnem 292 registros além do principal.
export const UNIFICACOES = [
  // [acervo] Além do Bem e do Mal — Friedrich Nietzsche
  //   = Além do Bem e do Mal — Friedrich Wilhelm Nietzsche
  ["livro-nietzsche-alem", [["ext-friedrich-wilhelm-nietzsche-alem-do-bem-e-do-mal", 'd']]],
  // Almagesto — Ptolomeu
  //   = Almagesto — Cláudio Ptolomeu
  ["ext-ptolomeu-almagesto", [["obra-claudio-ptolomeu-almagesto", 'd']]],
  // [acervo] Aristóteles em Nova Perspectiva: Introdução à Teoria dos Quatro Discursos — Olavo de Carvalho
  //   = Aristóteles em Nova Perspectiva — Olavo de Carvalho
  ["livro-olavo-quatro-discursos", [["ext-olavo-de-carvalho-aristoteles-em-nova-perspectiva", 'd']]],
  // [acervo] Assim Falou Zaratustra — Friedrich Nietzsche
  //   = Assim Falou Zaratustra — Friedrich Wilhelm Nietzsche
  ["livro-nietzsche-zaratustra", [["ext-friedrich-wilhelm-nietzsche-assim-falou-zaratustra", 'd']]],
  // Astronomia e Astrofísica — Kepler de Souza Oliveira Filho
  //   = Astronomia e astrofísica — Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva
  ["ext-kepler-de-souza-oliveira-filho-astronomia-e-astrofisica", [["obra-kepler-de-souza-oliveira-filho-e-maria-de-fatima-saraiva-astronomia-e-astrofisic", 'd']]],
  // [acervo] Aurora — Friedrich Nietzsche
  //   = Aurora — Friedrich Wilhelm Nietzsche
  ["livro-nietzsche-aurora", [["ext-friedrich-wilhelm-nietzsche-aurora", 'd']]],
  // Beleza — Roger Scruton
  //   = Beleza (2009) — Roger Scruton
  ["ext-roger-scruton-beleza", [["ext-roger-scruton-beleza-2009", 'd']]],
  // O Cálculo com Geometria Analítica  (obra em volumes)
  //   + O Cálculo com Geometria Analítica (Volume I) — Louis Leithold
  //   + O Cálculo com Geometria Analítica (Volume II) — Louis Leithold
  ["ext-louis-leithold-o-calculo-com-geometria-analitica-volume-i", [["ext-louis-leithold-o-calculo-com-geometria-analitica-volume-ii", 'p']], "O Cálculo com Geometria Analítica"],
  // Cálculo das Funções de Uma Variável  (obra em volumes)
  //   + Cálculo das Funções de Uma Variável (volumes 1) — Geraldo Ávila
  //   + Cálculo das Funções de Uma Variável (volumes 2) — Geraldo Ávila
  ["ext-geraldo-avila-calculo-das-funcoes-de-uma-variavel-volumes-1", [["ext-geraldo-avila-calculo-das-funcoes-de-uma-variavel-volumes-2", 'p']], "Cálculo das Funções de Uma Variável"],
  // Capital  (obra em volumes)
  //   + Capital: Essência e aparência – Volume 1 — Reinaldo Carcanholo
  //   + Capital: Essência e aparência – Volume 2 — Reinaldo Carcanholo
  ["ext-reinaldo-carcanholo-capital-essencia-e-aparencia-volume-1", [["ext-reinaldo-carcanholo-capital-essencia-e-aparencia-volume-2", 'p']], "Capital"],
  // Castelo — Franz Kafka
  //   = O Castelo — Franz Kafka
  ["ext-franz-kafka-castelo", [["ext-franz-kafka-o-castelo", 'd']]],
  // [acervo] Categorias — Aristóteles
  //   = (1a) Categorias (Κατηγοριαι, Categoriae) — Aristóteles
  ["livro-aristoteles-categorias", [["ext-aristoteles-1a-categorias-categoriae", 'd']]],
  // [acervo] Catena Aurea (Corrente de Ouro sobre os quatro Evangelhos) — Tomás de Aquino
  //   + Catena Aurea Volume 1 — São Tomás de Aquino
  //   + Catena Aurea Volume 2 — São Tomás de Aquino
  ["livro-tomas-catena", [["ext-sao-tomas-de-aquino-catena-aurea-volume-1", 'p'], ["ext-sao-tomas-de-aquino-catena-aurea-volume-2", 'p']]],
  // Catilinárias — Marco Túlio Cícero
  //   = As Catilinárias — Marco Túlio Cícero
  ["ext-marco-tulio-cicero-catilinarias", [["ext-marco-tulio-cicero-as-catilinarias", 'd']]],
  // [acervo] A Cidade de Deus — Santo Agostinho
  //   + A Cidade de Deus Vol.1 — Santo Agostinho de Hipona
  //   + A Cidade de Deus Vol.2 — Santo Agostinho de Hipona
  //   + A Cidade de Deus Parte I — Santo Agostinho
  //   + A Cidade de Deus Parte II — Santo Agostinho
  //   + A Cidade de Deus Parte III — Santo Agostinho
  ["livro-agostinho-cidade", [["ext-santo-agostinho-de-hipona-a-cidade-de-deus-vol-1", 'p'], ["ext-santo-agostinho-de-hipona-a-cidade-de-deus-vol-2", 'p'], ["ext-santo-agostinho-a-cidade-de-deus-parte-i", 'p'], ["ext-santo-agostinho-a-cidade-de-deus-parte-ii", 'p'], ["ext-santo-agostinho-a-cidade-de-deus-parte-iii", 'p']]],
  // Civilização do Ocidente Medieval — Jacques Le Goff
  //   = A civilização do Ocidente medieval — Jacques Le Goff
  ["ext-jacques-le-goff-civilizacao-do-ocidente-medieval", [["obra-jacques-le-goff-a-civilizacao-do-ocidente-medieval", 'd']]],
  // Clarice Lispector Todos os Romances  (obra em volumes)
  //   + Clarice Lispector Todos os Romances – Caixa 1 — Clarice Lispector
  //   + Clarice Lispector Todos os Romances – Caixa 2 — Clarice Lispector
  ["ext-clarice-lispector-clarice-lispector-todos-os-romances-caixa-1", [["ext-clarice-lispector-clarice-lispector-todos-os-romances-caixa-2", 'p']], "Clarice Lispector Todos os Romances"],
  // Classical Recursion Theory  (obra em volumes)
  //   + Classical Recursion Theory Volume I — P. G. Odifreddi
  //   + Classical Recursion Theory Volume II — P. G. Odifreddi
  ["ext-p-g-odifreddi-classical-recursion-theory-volume-i", [["ext-p-g-odifreddi-classical-recursion-theory-volume-ii", 'p']], "Classical Recursion Theory"],
  // Coleção Agatha Christie  (obra em volumes)
  //   + Coleção Agatha Christie – Box 1 — Agatha Christie
  //   + Coleção Agatha Christie – Box 2 — Agatha Christie
  //   + Coleção Agatha Christie – Box 3 — Agatha Christie
  //   + Coleção Agatha Christie – Box 4 — Agatha Christie
  //   + Coleção Agatha Christie – Box 5 — Agatha Christie
  //   + Coleção Agatha Christie – Box 6 — Agatha Christie
  //   + Coleção Agatha Christie – Box 7 — Agatha Christie
  //   + Coleção Agatha Christie – Box 8 — Agatha Christie
  ["ext-agatha-christie-colecao-agatha-christie-box-1", [["ext-agatha-christie-colecao-agatha-christie-box-2", 'p'], ["ext-agatha-christie-colecao-agatha-christie-box-3", 'p'], ["ext-agatha-christie-colecao-agatha-christie-box-4", 'p'], ["ext-agatha-christie-colecao-agatha-christie-box-5", 'p'], ["ext-agatha-christie-colecao-agatha-christie-box-6", 'p'], ["ext-agatha-christie-colecao-agatha-christie-box-7", 'p'], ["ext-agatha-christie-colecao-agatha-christie-box-8", 'p']], "Coleção Agatha Christie"],
  // Comentário ao Sobre a Interpretação de Aristóteles — S. Tomás de Aquino
  //   = Comentário ao Sobre a Interpretação de Aristóteles — Sto. Tomás de Aquino
  ["ext-s-tomas-de-aquino-comentario-ao-sobre-a-interpretacao-de-aristoteles", [["ext-sto-tomas-de-aquino-comentario-ao-sobre-a-interpretacao-de-aristoteles", 'd']]],
  // Comentário aos Salmos  (obra em volumes)
  //   + Comentário aos Salmos (1-50) — Santo Agostinho de Hipona
  //   + Comentário aos Salmos (51-100) — Santo Agostinho de Hipona
  //   + Comentário aos Salmos (101-150) — Santo Agostinho de Hipona
  ["ext-santo-agostinho-de-hipona-comentario-aos-salmos-1-50", [["ext-santo-agostinho-de-hipona-comentario-aos-salmos-51-100", 'p'], ["ext-santo-agostinho-de-hipona-comentario-aos-salmos-101-150", 'p']], "Comentário aos Salmos"],
  // [acervo] Como Ler Livros — Mortimer J. Adler e Charles Van Doren
  //   = Como Ler Livros — Mortimer Adler
  //   = Como Ler Livros — Mortimer J. Adler / Charles Van Doren
  ["livro-adler-como-ler", [["ext-mortimer-adler-como-ler-livros", 'd'], ["ext-mortimer-j-adler-charles-van-doren-como-ler-livros", 'd']]],
  // [acervo] Como Vencer um Debate sem Precisar Ter Razão — Arthur Schopenhauer (introdução, notas e comentários de Olavo de Carvalho)
  //   = Como Vencer um Debate sem Precisar Ter Razão — Arthur Schopenhauer
  //   = Como Vencer um Debate sem Precisar Ter Razão — Olavo de Carvalho
  ["livro-olavo-como-vencer", [["ext-arthur-schopenhauer-como-vencer-um-debate-sem-precisar-ter-razao", 'd'], ["ext-olavo-de-carvalho-como-vencer-um-debate-sem-precisar-ter-razao", 'd']]],
  // [acervo] Compêndio dos símbolos, definições e declarações de fé e moral — Heinrich Denzinger (ed. Peter Hünermann)
  //   = Compêndio dos símbolos, definições e declarações de fé e moral — Heinrich Denzinger
  ["livro-denzinger", [["ext-heinrich-denzinger-compendio-dos-simbolos-definicoes-e-declaracoes-de-", 'd']]],
  // [acervo] O Conceito de Angústia — Søren Kierkegaard
  //   = O Conceito de Angústia — Soren Kierkegaard
  //   = (1844) O Conceito de Angústia — Søren Kierkegaard
  ["livro-kierkegaard-angustia", [["ext-soren-kierkegaard-o-conceito-de-angustia", 'd'], ["ext-s-ren-kierkegaard-1844-o-conceito-de-angustia", 'd']]],
  // O Conceito de Direito — L. A. Hart
  //   = O conceito de direito — H. L. A. Hart
  ["ext-l-a-hart-o-conceito-de-direito", [["obra-h-l-a-hart-o-conceito-de-direito", 'd']]],
  // [acervo] O Conceito de Ironia, Constantemente Referido a Sócrates — Søren Kierkegaard
  //   = (1840) O Conceito de Ironia constantemente Referido a Sócrates — Søren Kierkegaard
  ["livro-kierkegaard-ironia", [["ext-s-ren-kierkegaard-1840-o-conceito-de-ironia-constantemente-referido-a-", 'd']]],
  // [acervo] Confissões — Santo Agostinho
  //   = Confissões — Santo Agostinho de Hipona
  ["livro-agostinho-confissoes", [["ext-santo-agostinho-de-hipona-confissoes", 'd']]],
  // [acervo] Confissões — Jean-Jacques Rousseau
  //   = As Confissões — Jean-Jacques Rousseau
  ["livro-rousseau-confissoes", [["ext-jean-jacques-rousseau-as-confissoes", 'd']]],
  // [acervo] O Conflito das Faculdades — Immanuel Kant
  //   = O Conflito das Faculdades (1797) — Immanuel Kant
  ["livro-kant-conflito", [["ext-immanuel-kant-o-conflito-das-faculdades-1797", 'd']]],
  // [acervo] A Consolação da Filosofia — Boécio
  //   = A Consolação da Filosofia — Severino Boécio
  //   = A Consolação da Filosofia – Boécio
  ["livro-boecio-consolacao", [["ext-severino-boecio-a-consolacao-da-filosofia", 'd'], ["ext-a-consolacao-da-filosofia-boecio", 'd']]],
  // [acervo] Crátilo — Platão
  //   = O Crátilo — Platão
  ["livro-platao-cratilo", [["ext-platao-o-cratilo", 'd']]],
  // [acervo] Crepúsculo dos Ídolos — Friedrich Nietzsche
  //   = O Crepúsculo dos Ídolos — Friedrich Wilhelm Nietzsche
  ["livro-nietzsche-crepusculo", [["ext-friedrich-wilhelm-nietzsche-o-crepusculo-dos-idolos", 'd']]],
  // Crítica da Faculdade do Juízo — Immanuel Kant
  //   = Crítica da Faculdade do Juízo (1790) — Immanuel Kant
  ["ext-immanuel-kant-critica-da-faculdade-do-juizo", [["ext-immanuel-kant-critica-da-faculdade-do-juizo-1790", 'd']]],
  // [acervo] Crítica da Razão Prática — Immanuel Kant
  //   = Crítica da Razão Prática (1788) — Immanuel Kant
  ["livro-kant-crpratica", [["ext-immanuel-kant-critica-da-razao-pratica-1788", 'd']]],
  // [acervo] Crítica da Razão Pura — Immanuel Kant
  //   = Crítica da Razão Pura (1781) — Immanuel Kant
  ["livro-kant-crp", [["ext-immanuel-kant-critica-da-razao-pura-1781", 'd']]],
  // A Cultura Brasileira — Fernando Azevedo
  //   = A Cultura Brasileira — Fernando de Azevedo
  ["ext-fernando-azevedo-a-cultura-brasileira", [["ext-fernando-de-azevedo-a-cultura-brasileira", 'd']]],
  // Um Curso de Cálculo  (obra em volumes)
  //   + Um Curso de Cálculo (Volume I) — H. Guidorizzi
  //   + Um Curso de Cálculo (Volume II) — H. Guidorizzi
  //   + Um Curso de Cálculo (Volume IV) — H. Guidorizzi
  //   + Um Curso de Cálculo (Volume III) — H. Guidorizzi
  ["ext-h-guidorizzi-um-curso-de-calculo-volume-i", [["ext-h-guidorizzi-um-curso-de-calculo-volume-ii", 'p'], ["ext-h-guidorizzi-um-curso-de-calculo-volume-iv", 'p'], ["ext-h-guidorizzi-um-curso-de-calculo-volume-iii", 'p']], "Um Curso de Cálculo"],
  // Curso de física básica — Moysés Nussenzveig
  //   + Curso de Física Básica Volume 1 — H. Moysés Nussenzveig
  //   + Curso de Física Básica Volume 2 — H. Moysés Nussenzveig
  //   + Curso de Física Básica Volume 3 — H. Moysés Nussenzveig
  //   + Curso de Física Básica Volume 4 — H. Moysés Nussenzveig
  ["obra-moyses-nussenzveig-curso-de-fisica-basica", [["ext-h-moyses-nussenzveig-curso-de-fisica-basica-volume-1", 'p'], ["ext-h-moyses-nussenzveig-curso-de-fisica-basica-volume-2", 'p'], ["ext-h-moyses-nussenzveig-curso-de-fisica-basica-volume-3", 'p'], ["ext-h-moyses-nussenzveig-curso-de-fisica-basica-volume-4", 'p']]],
  // Curso de linguística geral — Ferdinand de Saussure
  //   = Curso de Linguística Geral — Ferdinand Saussure
  ["obra-ferdinand-de-saussure-curso-de-linguistica-geral", [["ext-ferdinand-saussure-curso-de-linguistica-geral", 'd']]],
  // [acervo] Da Alma (De Anima) — Aristóteles
  //   = (402a) Da alma (Περὶ ψυχης, De anima) — Aristóteles
  ["livro-aristoteles-alma", [["ext-aristoteles-402a-da-alma-de-anima", 'd']]],
  // [acervo] Da Geração dos Animais — Aristóteles
  //   = (715a) Da geração dos animais (Περὶ ζωων γενεσεως, De generatione animalium) — Aristóteles
  ["livro-aristoteles-geracao-animais", [["ext-aristoteles-715a-da-geracao-dos-animais-de-generatione-animalium", 'd']]],
  // [acervo] Da Geração e da Corrupção — Aristóteles
  //   = (314a) Da geração e da corrupção(Περὶ γενεσεως και φθορας, De generatione et corruptione) — Aristóteles
  ["livro-aristoteles-geracao", [["ext-aristoteles-314a-da-geracao-e-da-corrupcao-de-generatione-et-corruptio", 'd']]],
  // [acervo] Das Partes dos Animais — Aristóteles
  //   = (639a) Das partes dos animais (Περὶ ζωων μοριων, De partibus animalium) — Aristóteles
  ["livro-aristoteles-partes-animais", [["ext-aristoteles-639a-das-partes-dos-animais-de-partibus-animalium", 'd']]],
  // O Decadência do Ocidente — Oswald Spengler
  //   = A decadência do Ocidente — Oswald Spengler
  //   = A Decadência do Ocidente: Esboço de uma Morfologia da História Universal — Oswald Spengler
  ["ext-oswald-spengler-o-decadencia-do-ocidente", [["obra-oswald-spengler-a-decadencia-do-ocidente", 'd'], ["ext-oswald-spengler-a-decadencia-do-ocidente-esboco-de-uma-morfologia-da-h", 'd']]],
  // O desenvolvimento da Lógica — W. Kneale; M. Kneale
  //   = O Desenvolvimento da Lógica — Willian Kneale e Martha Kneale
  ["ext-w-kneale-m-kneale-o-desenvolvimento-da-logica", [["ext-willian-kneale-e-martha-kneale-o-desenvolvimento-da-logica", 'd']]],
  // O Desespero Humano — Soren Kierkegaard
  //   = (1849) O Desespero Humano — Søren Kierkegaard
  ["ext-soren-kierkegaard-o-desespero-humano", [["ext-s-ren-kierkegaard-1849-o-desespero-humano", 'd']]],
  // Desobediência Civil — Henry David Thoreau
  //   = A Desobediência Civil — Henry David Thoreau
  ["ext-henry-david-thoreau-desobediencia-civil", [["ext-henry-david-thoreau-a-desobediencia-civil", 'd']]],
  // Dialética do Eterno presente  (obra em volumes)
  //   + Dialética do Eterno presente Volume 1: O Ser — Louis Lavelle
  //   + Dialética do Eterno presente Volume 2: O Ato [De l’acte] — Louis Lavelle
  //   + Dialética do Eterno presente Volume 4: O Amor Humano [De l’âme humaine] — Louis Lavelle
  //   + Dialética do Eterno presente Volume 3: O Tempo e a Eternidade [Du temps et de l’éternité] — Louis Lavelle
  //   + Dialética do Eterno presente Volume 5: A Sabedoria [De La Sagesse] [Não escrito devido à morte do Autor] — Louis Lavelle
  ["ext-louis-lavelle-dialetica-do-eterno-presente-volume-1-o-ser", [["ext-louis-lavelle-dialetica-do-eterno-presente-volume-2-o-ato-de-l-acte", 'p'], ["ext-louis-lavelle-dialetica-do-eterno-presente-volume-4-o-amor-humano-de-l", 'p'], ["ext-louis-lavelle-dialetica-do-eterno-presente-volume-3-o-tempo-e-a-eterni", 'p'], ["ext-louis-lavelle-dialetica-do-eterno-presente-volume-5-a-sabedoria-de-la-", 'p']], "Dialética do Eterno presente"],
  // Diálogos I — Teeteto, Sofista, Protágoras – Platão
  //   = Diálogos I – Teeteto, Sofista, Protágoras — Platão
  ["ext-teeteto-sofista-protagoras-platao-dialogos-i", [["ext-platao-dialogos-i-teeteto-sofista-protagoras", 'd']]],
  // Diálogos II — Górgias, Eutidemo, Hípias maior e Hípias menor – Platão
  //   = Diálogos II – Górgias, Eutidemo, Hípias maior e Hípias menor — Platão
  ["ext-gorgias-eutidemo-hipias-maior-e-hipias-menor-platao-dialogos-ii", [["ext-platao-dialogos-ii-gorgias-eutidemo-hipias-maior-e-hipias-menor", 'd']]],
  // Diálogos III — Fedro, Eutífron, Apologia de Sócrates, Críton, Fédon – Platão
  //   = Diálogos III – Fedro, Eutífron, Apologia de Sócrates, Críton, Fédon — Platão
  ["ext-fedro-eutifron-apologia-de-socrates-criton-fedon-platao-dialogos-iii", [["ext-platao-dialogos-iii-fedro-eutifron-apologia-de-socrates-criton-fedon", 'd']]],
  // Dicionário de Símbolos — Alain Gheerbrant
  //   = Dicionário de símbolos — Jean Chevalier e Alain Gheerbrant
  ["ext-alain-gheerbrant-dicionario-de-simbolos", [["obra-jean-chevalier-e-alain-gheerbrant-dicionario-de-simbolos", 'd']]],
  // Didascálicon — Hugo de São Vítor
  //   = Didascalicon: Sobre a Arte de Ler — Hugo de São Vitor
  ["obra-hugo-de-sao-vitor-didascalicon", [["ext-hugo-de-sao-vitor-didascalicon-sobre-a-arte-de-ler", 'd']]],
  // Dinâmicas da História do Mundo — Christopher Dawson
  //   = Dinâmicas da História do Mundo (1957) — Christopher Dawson
  ["ext-christopher-dawson-dinamicas-da-historia-do-mundo", [["ext-christopher-dawson-dinamicas-da-historia-do-mundo-1957", 'd']]],
  // [acervo] Discursos Cristãos — Søren Kierkegaard
  //   = (1848) Discursos Cristãos — Søren Kierkegaard
  ["livro-kierkegaard-discursos-cristaos", [["ext-s-ren-kierkegaard-1848-discursos-cristaos", 'd']]],
  // Divina Comédia — Dante Alighieri
  //   = A Divina Comédia — Dante Alighieri
  //   = A Divina Comédia – Dante Alighieri
  ["obra-dante-alighieri-divina-comedia", [["ext-dante-alighieri-a-divina-comedia", 'd'], ["ext-a-divina-comedia-dante-alighieri", 'd']]],
  // A Divisão da Cristandade — Christopher Dawson
  //   = A Divisão da Cristandade (1965) — Christopher Dawson
  ["ext-christopher-dawson-a-divisao-da-cristandade", [["ext-christopher-dawson-a-divisao-da-cristandade-1965", 'd']]],
  // [acervo] Do Céu — Aristóteles
  //   = (268a) Do céu (Περὶ ουρανου, De caelo) — Aristóteles
  ["livro-aristoteles-ceu", [["ext-aristoteles-268a-do-ceu-de-caelo", 'd']]],
  // Don Juan — George Gordon, Lord Byron
  //   = Don Juan — Lord Byron
  ["ext-george-gordon-lord-byron-don-juan", [["ext-lord-byron-don-juan", 'd']]],
  // [acervo] A Doutrina Cristã — Santo Agostinho
  //   = A doutrina cristã — Santo Agostinho de Hipona
  ["livro-agostinho-doutrina-crista", [["ext-santo-agostinho-de-hipona-a-doutrina-crista", 'd']]],
  // Doutrina do Direito — Immanuel Kant
  //   = Doutrina do Direito (1796) — Immanuel Kant
  ["ext-immanuel-kant-doutrina-do-direito", [["ext-immanuel-kant-doutrina-do-direito-1796", 'd']]],
  // [acervo] Ecce Homo — Friedrich Nietzsche
  //   = Ecce Homo — Friedrich Wilhelm Nietzsche
  ["livro-nietzsche-ecce", [["ext-friedrich-wilhelm-nietzsche-ecce-homo", 'd']]],
  // [acervo] Edmund Husserl contra o Psicologismo (aulas transcritas) — Olavo de Carvalho
  //   = Edmund Husserl Contra O Psicologismo — Olavo de Carvalho
  ["livro-olavo-husserl", [["ext-olavo-de-carvalho-edmund-husserl-contra-o-psicologismo", 'd']]],
  // Elementos — Euclides
  //   = Os Elementos — Euclides
  //   = Elementos (de Geometria) — Euclides
  ["obra-euclides-elementos", [["ext-euclides-os-elementos", 'd'], ["ext-euclides-elementos-de-geometria", 'd']]],
  // Elementos de Geometria e Desenho Geométrico (Volume especial para o vestibulando) — Jota Putnoki
  //   + Elementos de Geometria e Desenho Geométrico (Volume 1 + Caderno de Atividades) — Jota Putnoki
  //   + Elementos de Geometria e Desenho Geométrico (Volume 2 + Caderno de Atividades) — Jota Putnoki
  ["ext-jota-putnoki-elementos-de-geometria-e-desenho-geometrico-volume-especi", [["ext-jota-putnoki-elementos-de-geometria-e-desenho-geometrico-volume-1-cade", 'p'], ["ext-jota-putnoki-elementos-de-geometria-e-desenho-geometrico-volume-2-cade", 'p']]],
  // Em busca de sentido — Viktor Frankl
  //   = Em Busca De Sentido: Um psicólogo no campo de concentração — Viktor Emil Frankl
  //   = Em busca de sentido: um psicólogo no campo de concentração — Viktor Frankl
  ["obra-viktor-frankl-em-busca-de-sentido", [["ext-viktor-emil-frankl-em-busca-de-sentido-um-psicologo-no-campo-de-concen", 'd'], ["ext-viktor-frankl-em-busca-de-sentido-um-psicologo-no-campo-de-concentraca", 'd']]],
  // Emoção e Personalidade  (obra em volumes)
  //   + Emoção e Personalidade: aspectos psicológicos — Magda B. Arnold (VOL. I)
  //   + Emoção e Personalidade: aspectos neurológicos e fisiológicos — Magda B. Arnold (VOL. II)
  ["ext-magda-b-arnold-vol-i-emocao-e-personalidade-aspectos-psicologicos", [["ext-magda-b-arnold-vol-ii-emocao-e-personalidade-aspectos-neurologicos-e-f", 'p']], "Emoção e Personalidade"],
  // Ensaios Reunidos  (obra em volumes)
  //   + Ensaios Reunidos Vols. 1 — Otto Maria Carpeaux
  //   + Ensaios Reunidos Vols. 2 — Otto Maria Carpeaux
  ["ext-otto-maria-carpeaux-ensaios-reunidos-vols-1", [["ext-otto-maria-carpeaux-ensaios-reunidos-vols-2", 'p']], "Ensaios Reunidos"],
  // O Espelho Partido — Marques Rebelo
  //   = O Espelho Partido (3 Vols.) — Marques Rebelo
  ["ext-marques-rebelo-o-espelho-partido", [["ext-marques-rebelo-o-espelho-partido-3-vols", 'd']]],
  // O espírito das leis — Montesquieu
  //   = O Espírito das Leis — Charles de Secondat, barão de Montesquieu
  //   = O Espírito das Leis — Charles-Louis de Secondat, Barão de Montesquieu
  ["obra-montesquieu-o-espirito-das-leis", [["ext-charles-de-secondat-barao-de-montesquieu-o-espirito-das-leis", 'd'], ["ext-charles-louis-de-secondat-barao-de-montesquieu-o-espirito-das-leis", 'd']]],
  // O Espírito das Revoluções — J. O. de Meira Penna
  //   = O Espírito das Revoluções — José Osvaldo de Meira Penna
  ["ext-j-o-de-meira-penna-o-espirito-das-revolucoes", [["ext-jose-osvaldo-de-meira-penna-o-espirito-das-revolucoes", 'd']]],
  // [acervo] Estádios no Caminho da Vida — Søren Kierkegaard
  //   = (1845) Estádios no Caminho da Vida — Søren Kierkegaard
  ["livro-kierkegaard-estadios", [["ext-s-ren-kierkegaard-1845-estadios-no-caminho-da-vida", 'd']]],
  // [acervo] A Estrutura das Revoluções Científicas — Thomas S. Kuhn
  //   = A estrutura das revoluções científicas — Thomas Kuhn
  ["livro-kuhn-estrutura", [["ext-thomas-kuhn-a-estrutura-das-revolucoes-cientificas", 'd']]],
  // [acervo] Ética a Eudemo — Aristóteles
  //   = (1214a) Ética a Eudemo (Ηθικα Ευδημεια, Ethica Eudemia) — Aristóteles
  ["livro-aristoteles-eudemo", [["ext-aristoteles-1214a-etica-a-eudemo-ethica-eudemia", 'd']]],
  // [acervo] Ética a Nicômaco — Aristóteles
  //   = (1094a) Ética a Nicômaco (Ηθικα Νικομαχεια, Ethica Nicomachea) — Aristóteles
  ["livro-aristoteles-etica", [["ext-aristoteles-1094a-etica-a-nicomaco-ethica-nicomachea", 'd']]],
  // [acervo] Os EUA e a Nova Ordem Mundial (debate com Alexandr Dugin) — Olavo de Carvalho
  //   = Os EUA e a Nova Ordem Mundial — Olavo de Carvalho
  ["livro-olavo-dugin", [["ext-olavo-de-carvalho-os-eua-e-a-nova-ordem-mundial", 'd']]],
  // Um experimento na crítica literária — Clive Staples Lewis
  //   = Um experimento na crítica literária — C. S. Lewis
  ["ext-clive-staples-lewis-um-experimento-na-critica-literaria", [["obra-c-s-lewis-um-experimento-na-critica-literaria", 'd']]],
  // [acervo] Exposição sobre o Credo (Collationes in Symbolum Apostolorum) — Tomás de Aquino
  //   = Exposição Sobre o Credo — São Tomás de Aquino
  ["livro-tomas-credo", [["ext-sao-tomas-de-aquino-exposicao-sobre-o-credo", 'd']]],
  // Farsalia (Biblioteca Clásica Gredos) — Lucano
  //   + Farsália: Cantos de I a V — Lucano
  ["ext-lucano-farsalia-biblioteca-clasica-gredos", [["ext-lucano-farsalia-cantos-de-i-a-v", 'p']]],
  // Fausto — Johann Wolfgang von Goethe
  //   + Fausto (Segundo) — Wolfgang von Goethe
  //   + Fausto (Primeiro) — Wolfgang von Goethe
  ["ext-johann-wolfgang-von-goethe-fausto", [["ext-wolfgang-von-goethe-fausto-segundo", 'p'], ["ext-wolfgang-von-goethe-fausto-primeiro", 'p']]],
  // O Federalista — Hamilton, James Madison, John Jay
  //   = O Federalista — Alexander Hamilton, James Madison e John Jay
  //   = O Federalista (também Artigos da Confederação, Constituição dos Estados Unidos Declaração de Independência) — John Jay , James Madison e Alexander Hamilton
  ["ext-hamilton-james-madison-john-jay-o-federalista", [["obra-alexander-hamilton-james-madison-e-john-jay-o-federalista", 'd'], ["ext-john-jay-james-madison-e-alexander-hamilton-o-federalista-tambem-artig", 'd']]],
  // [acervo] Fenomenologia do Espírito — G. W. F. Hegel
  //   = Fenomenologia do Espírito — Georg Wilhelm Friedrich Hegel
  ["livro-hegel-fenomenologia", [["ext-georg-wilhelm-friedrich-hegel-fenomenologia-do-espirito", 'd']]],
  // Filosofia  (obra em volumes)
  //   + Filosofia: Idade Moderna — Giovanni Reale
  //   + Filosofia: Idade Contemporânea — Giovanni Reale
  //   + Filosofia: Antiguidade e Idade Média — Giovanni Reale
  ["ext-giovanni-reale-filosofia-idade-moderna", [["ext-giovanni-reale-filosofia-idade-contemporanea", 'p'], ["ext-giovanni-reale-filosofia-antiguidade-e-idade-media", 'p']], "Filosofia"],
  // [acervo] Filosofia Concreta (vol. I, II e III) — Mário Ferreira dos Santos
  //   = Filosofia Concreta — Mário Ferreira dos Santos
  ["livro-mfs-filosofia-concreta", [["ext-mario-ferreira-dos-santos-filosofia-concreta", 'd']]],
  // Filosofia da Linguagem — Alexander Miller
  //   = Filosofia da Linguagem — Alexandre Miller
  ["ext-alexander-miller-filosofia-da-linguagem", [["ext-alexandre-miller-filosofia-da-linguagem", 'd']]],
  // A filosofia das formas simbólicas — Ernst Cassirer
  //   + A Filosofia das Formas Simbólicas: A Linguagem — Ernst Cassirer
  //   + A Filosofia das Formas Simbólicas Vol.1: A Linguagem — Ernst Cassirer
  //   + A Filosofia das Formas Simbólicas Vol.2: O Pensamento Mítico — Ernst Cassirer
  //   + A Filosofia das Formas Simbólicas Vol.3: Fenomenologia do Conhecimento — Ernst Cassirer
  ["obra-ernst-cassirer-a-filosofia-das-formas-simbolicas", [["ext-ernst-cassirer-a-filosofia-das-formas-simbolicas-a-linguagem", 'p'], ["ext-ernst-cassirer-a-filosofia-das-formas-simbolicas-vol-1-a-linguagem", 'p'], ["ext-ernst-cassirer-a-filosofia-das-formas-simbolicas-vol-2-o-pensamento-mi", 'p'], ["ext-ernst-cassirer-a-filosofia-das-formas-simbolicas-vol-3-fenomenologia-d", 'p']]],
  // Filosofía de la naturaleza — Juan José Sanguinetti, Mariano Artigas
  //   = Filosofía de la naturaleza — Mariano Artigas
  ["ext-juan-jose-sanguinetti-mariano-artigas-filosofia-de-la-naturaleza", [["ext-mariano-artigas-filosofia-de-la-naturaleza", 'd']]],
  // [acervo] Física (livros I–VIII) — Aristóteles
  //   = (184a) Física (Φυσικη, Physica) — Aristóteles
  ["livro-aristoteles-fisica", [["ext-aristoteles-184a-fisica-physica", 'd']]],
  // A Formação da Cristandade — Christopher Dawson
  //   = A Formação da Cristandade (1967) — Christopher Dawson
  ["ext-christopher-dawson-a-formacao-da-cristandade", [["ext-christopher-dawson-a-formacao-da-cristandade-1967", 'd']]],
  // A formação das almas — José Murilo de Carvalho
  //   = A formação das almas: o imaginário da República no Brasil — José Murilo de Carvalho
  ["obra-jose-murilo-de-carvalho-a-formacao-das-almas", [["obra-jose-murilo-de-carvalho-a-formacao-das-almas-o-imaginario-da-republica-no-brasil", 'd']]],
  // Formação do Brasil contemporâneo — Caio Prado Jr
  //   = Formação do Brasil contemporâneo — Caio Prado Júnior
  ["ext-caio-prado-jr-formacao-do-brasil-contemporaneo", [["obra-caio-prado-junior-formacao-do-brasil-contemporaneo", 'd']]],
  // [acervo] Fundamentação da Metafísica dos Costumes — Immanuel Kant
  //   = Fundamentação da Metafísica dos Costumes (1785) — Immanuel Kant
  ["livro-kant-fundamentacao", [["ext-immanuel-kant-fundamentacao-da-metafisica-dos-costumes-1785", 'd']]],
  // Fundamentos de Física  (obra em volumes)
  //   + Fundamentos de Física Volume 1: Mecânica — David Halliday
  //   + Fundamentos de Física Volume 3: Eletromagnetismo — David Halliday
  //   + Fundamentos de Física Volume 4: Óptica e Física Moderna — David Halliday
  //   + Fundamentos de Física Volume 2: Gravitação, Ondas e Termodinâmica — David Halliday
  ["ext-david-halliday-fundamentos-de-fisica-volume-1-mecanica", [["ext-david-halliday-fundamentos-de-fisica-volume-3-eletromagnetismo", 'p'], ["ext-david-halliday-fundamentos-de-fisica-volume-4-optica-e-fisica-moderna", 'p'], ["ext-david-halliday-fundamentos-de-fisica-volume-2-gravitacao-ondas-e-termo", 'p']], "Fundamentos de Física"],
  // [acervo] A Gaia Ciência — Friedrich Nietzsche
  //   = A Gaia Ciência — Friedrich Wilhelm Nietzsche
  ["livro-nietzsche-gaia", [["ext-friedrich-wilhelm-nietzsche-a-gaia-ciencia", 'd']]],
  // [acervo] Genealogia da Moral — Friedrich Nietzsche
  //   = Genealogia da Moral — Friedrich Wilhelm Nietzsche
  ["livro-nietzsche-genealogia", [["ext-friedrich-wilhelm-nietzsche-genealogia-da-moral", 'd']]],
  // Glórias de Maria — Santo Afonso de Ligório
  //   = As Glórias de Maria — Santo Afonso Maria de Ligório
  ["ext-santo-afonso-de-ligorio-glorias-de-maria", [["ext-santo-afonso-maria-de-ligorio-as-glorias-de-maria", 'd']]],
  // A Graça (I) — Santo Agostinho de Hipona
  //   = A Graça (II) — Santo Agostinho de Hipona
  ["ext-santo-agostinho-de-hipona-a-graca-i", [["ext-santo-agostinho-de-hipona-a-graca-ii", 'd']]],
  // Gramática do Português — Volume 1 – Eduardo Buzaglo Paiva Raposo
  //   + Gramática do Português — Volume 2 – Eduardo Buzaglo Paiva Raposo
  ["ext-volume-1-eduardo-buzaglo-paiva-raposo-gramatica-do-portugues", [["ext-volume-2-eduardo-buzaglo-paiva-raposo-gramatica-do-portugues", 'p']]],
  // Gramática do português culto falado no Brasil — vol. VI – A construção morfológica da palavra
  //   + Gramática do português culto falado no Brasil — vol. VII – A construção fonológica da palavra
  ["ext-vol-vi-a-construcao-morfologica-da-palavra-gramatica-do-portugues-cult", [["ext-vol-vii-a-construcao-fonologica-da-palavra-gramatica-do-portugues-cult", 'p']]],
  // Gramática latina — Napoleão Mendes de Almeida
  //   = Gramática latina – Napoleão Mendes de Almeida
  ["ext-napoleao-mendes-de-almeida-gramatica-latina", [["ext-gramatica-latina-napoleao-mendes-de-almeida", 'd']]],
  // Gregório de Matos  (obra em volumes)
  //   + Gregório de Matos – Vol. 1: Poemas atribuídos — Gregório de Matos Guerra
  //   + Gregório de Matos – Vol. 2: Poemas atribuídos — Gregório de Matos Guerra
  //   + Gregório de Matos – Vol. 3: Poemas atribuídos — Gregório de Matos Guerra
  //   + Gregório de Matos – Vol. 4: Poemas atribuídos — Gregório de Matos Guerra
  //   + Gregório de Matos – Vol. 5: Letrados, manuscritura, retórica, autoria — Gregório de Matos Guerra
  ["ext-gregorio-de-matos-guerra-gregorio-de-matos-vol-1-poemas-atribuidos", [["ext-gregorio-de-matos-guerra-gregorio-de-matos-vol-2-poemas-atribuidos", 'p'], ["ext-gregorio-de-matos-guerra-gregorio-de-matos-vol-3-poemas-atribuidos", 'p'], ["ext-gregorio-de-matos-guerra-gregorio-de-matos-vol-4-poemas-atribuidos", 'p'], ["ext-gregorio-de-matos-guerra-gregorio-de-matos-vol-5-letrados-manuscritura", 'p']], "Gregório de Matos"],
  // Guerra e Paz — Leon Tolstói
  //   = Guerra e Paz — Liev Tolstói
  ["ext-leon-tolstoi-guerra-e-paz", [["ext-liev-tolstoi-guerra-e-paz", 'd']]],
  // Handbook of Logic in Artificial Intelligence and Logic Programming  (obra em volumes)
  //   + Handbook of Logic in Artificial Intelligence and Logic Programming: Volume 2: Deduction Methodologies — Dov M. Gabbay, C.J. Hogger
  //   + Handbook of Logic in Artificial Intelligence and Logic Programming: Volume 4: Epistemic and Temporal Logics — Dov M. Gabbay, C.J. Hogger
  //   + Handbook of Logic in Artificial Intelligence and Logic Programming: Volume 3 Nonmonotonic Reasoning and Uncertain Reasoning — Dov M. Gabbay, C.J. Hogger
  ["ext-dov-m-gabbay-c-j-hogger-handbook-of-logic-in-artificial-intelligence-a", [["ext-dov-m-gabbay-c-j-hogger-handbook-of-logic-in-artificial-intelligence-a-3", 'p'], ["ext-dov-m-gabbay-c-j-hogger-handbook-of-logic-in-artificial-intelligence-a-2", 'p']], "Handbook of Logic in Artificial Intelligence and Logic Programming"],
  // Harmonia — Arnold Schoenberg
  //   = (Schoenberg) Harmonia
  ["obra-arnold-schoenberg-harmonia", [["ext-schoenberg-harmonia", 'd']]],
  // História da Arte — Ernst Gombrich
  //   = A história da arte — Ernst H. Gombrich
  ["ext-ernst-gombrich-historia-da-arte", [["obra-ernst-h-gombrich-a-historia-da-arte", 'd']]],
  // História da Filosofia  (obra em volumes)
  //   + História da Filosofia: de Freud à Atualidade (Volume 7) — Giovanni Reale
  //   + História da Filosofia: Filosofia Pagã Antiga (Volume 1) — Giovanni Reale
  //   + História da Filosofia: do Humanismo a Descartes (Volume 3) — Giovanni Reale
  //   + História da Filosofia: Patrística e Escolástica (Volume 2) — Giovanni Reale
  ["ext-giovanni-reale-historia-da-filosofia-de-freud-a-atualidade-volume-7", [["ext-giovanni-reale-historia-da-filosofia-filosofia-paga-antiga-volume-1", 'p'], ["ext-giovanni-reale-historia-da-filosofia-do-humanismo-a-descartes-volume-3", 'p'], ["ext-giovanni-reale-historia-da-filosofia-patristica-e-escolastica-volume-2", 'p']], "História da Filosofia"],
  // História da filosofia grega e romana  (obra em volumes)
  //   + História da filosofia grega e romana: Volume I — Giovanni Reale
  //   + História da filosofia grega e romana: Volume V — Giovanni Reale
  //   + História da filosofia grega e romana: Volume II — Giovanni Reale
  //   + História da filosofia grega e romana: Volume IV — Giovanni Reale
  //   + História da filosofia grega e romana: Volume IX — Giovanni Reale
  //   + História da filosofia grega e romana: Volume VI — Giovanni Reale
  //   + História da filosofia grega e romana: Volume III — Giovanni Reale
  //   + História da filosofia grega e romana: Volume VII — Giovanni Reale
  //   + História da filosofia grega e romana: Volume VIII — Giovanni Reale
  ["ext-giovanni-reale-historia-da-filosofia-grega-e-romana-volume-i", [["ext-giovanni-reale-historia-da-filosofia-grega-e-romana-volume-v", 'p'], ["ext-giovanni-reale-historia-da-filosofia-grega-e-romana-volume-ii", 'p'], ["ext-giovanni-reale-historia-da-filosofia-grega-e-romana-volume-iv", 'p'], ["ext-giovanni-reale-historia-da-filosofia-grega-e-romana-volume-ix", 'p'], ["ext-giovanni-reale-historia-da-filosofia-grega-e-romana-volume-vi", 'p'], ["ext-giovanni-reale-historia-da-filosofia-grega-e-romana-volume-iii", 'p'], ["ext-giovanni-reale-historia-da-filosofia-grega-e-romana-volume-vii", 'p'], ["ext-giovanni-reale-historia-da-filosofia-grega-e-romana-volume-viii", 'p']], "História da filosofia grega e romana"],
  // História das crenças e das ideias religiosas  (obra em volumes)
  //   + História das crenças e das ideias religiosas: Volume 3: De Maomé à Idade das Reformas — Mircea Eliade
  //   + História das crenças e das ideias religiosas: Volume 1: Da Idade da Pedra aos mistérios de Elêusis — Mircea Eliade
  //   + História das crenças e das ideias religiosas: Volume 2: De Gautama Buda ao triunfo do cristianismo — Mircea Eliade
  ["ext-mircea-eliade-historia-das-crencas-e-das-ideias-religiosas-volume-3-de", [["ext-mircea-eliade-historia-das-crencas-e-das-ideias-religiosas-volume-1-da", 'p'], ["ext-mircea-eliade-historia-das-crencas-e-das-ideias-religiosas-volume-2-de", 'p']], "História das crenças e das ideias religiosas"],
  // História das Ideias Políticas  (obra em volumes)
  //   + História das Ideias Políticas (Volumes I-VIII) — Eric Voegelin
  //   + História das Ideias Políticas (Volume III): Idade Média Tardia — Eric Voegelin
  //   + História das Ideias Políticas (Volume IV): Renascença e Reforma — Eric Voegelin
  //   + História das Ideias Políticas (Volume VI): Revolução e Nova Ciência — Eric Voegelin
  //   + História das Ideias Políticas (Volume II): A Idade Média até Tomás de Aquino — Eric Voegelin
  //   + História das Ideias Políticas (Volume VIII): A Crise e o Apocalipse do Homem — Eric Voegelin
  //   + História das Ideias Políticas (Volume V): Religião e a Ascensão da Modernidade — Eric Voegelin
  //   + História das Ideias Políticas (Volume VII): A Nova Ordem e a Última Orientação — Eric Voegelin
  //   + História das Ideias Políticas (Volume I): Helenismo, Roma, e Cristianismo Primitivo — Eric Voegelin
  //   + História das ideias políticas (vol. VII): A nova ordem e a última orientação, É Realizações, São Paulo, 2017 — VOEGELIN, V
  ["ext-eric-voegelin-historia-das-ideias-politicas-volumes-i-viii", [["ext-eric-voegelin-historia-das-ideias-politicas-volume-iii-idade-media-tar", 'p'], ["ext-eric-voegelin-historia-das-ideias-politicas-volume-iv-renascenca-e-ref", 'p'], ["ext-eric-voegelin-historia-das-ideias-politicas-volume-vi-revolucao-e-nova", 'p'], ["ext-eric-voegelin-historia-das-ideias-politicas-volume-ii-a-idade-media-at", 'p'], ["ext-eric-voegelin-historia-das-ideias-politicas-volume-viii-a-crise-e-o-ap", 'p'], ["ext-eric-voegelin-historia-das-ideias-politicas-volume-v-religiao-e-a-asce", 'p'], ["ext-eric-voegelin-historia-das-ideias-politicas-volume-vii-a-nova-ordem-e-", 'p'], ["ext-eric-voegelin-historia-das-ideias-politicas-volume-i-helenismo-roma-e-", 'p'], ["ext-voegelin-v-historia-das-ideias-politicas-vol-vii-a-nova-ordem-e-a-ulti", 'p']], "História das Ideias Políticas"],
  // História econômica do Brasil — Caio Prado Jr
  //   = História Econômica do Brasil — Caio Prado Júnior
  ["ext-caio-prado-jr-historia-economica-do-brasil", [["ext-caio-prado-junior-historia-economica-do-brasil", 'd']]],
  // [acervo] História Essencial da Filosofia — Olavo de Carvalho
  //   = História Essencial da Filosofia (32 vols.) — Olavo de Carvalho
  ["livro-olavo-historia-essencial", [["ext-olavo-de-carvalho-historia-essencial-da-filosofia-32-vols", 'd']]],
  // História Natural  (obra em volumes)
  //   + História Natural: Livro III. Geografia do Mediterrâneo Ocidental — Plínio, o Velho
  //   + História Natural: Livro I. Dedicatória Livro II. O mundo e seus elementos — Plínio, o Velho
  ["ext-plinio-o-velho-historia-natural-livro-iii-geografia-do-mediterraneo-oc", [["ext-plinio-o-velho-historia-natural-livro-i-dedicatoria-livro-ii-o-mundo-e", 'p']], "História Natural"],
  // História social do Brasil  (obra em volumes)
  //   + História social do Brasil Vol.1 — Pedro Calmon
  //   + História social do Brasil Vol.2 — Pedro Calmon
  //   + História social do Brasil Vol.3 — Pedro Calmon
  ["ext-pedro-calmon-historia-social-do-brasil-vol-1", [["ext-pedro-calmon-historia-social-do-brasil-vol-2", 'p'], ["ext-pedro-calmon-historia-social-do-brasil-vol-3", 'p']], "História social do Brasil"],
  // Histórias — Heródoto
  //   + Histórias Volume 1 — Heródoto
  //   + Histórias Volume 2 — Heródoto
  //   + Histórias Volume 3 — Heródoto
  //   + Histórias Volume 4 — Heródoto
  //   + Histórias Volume 5 — Heródoto
  ["obra-herodoto-historias", [["ext-herodoto-historias-volume-1", 'p'], ["ext-herodoto-historias-volume-2", 'p'], ["ext-herodoto-historias-volume-3", 'p'], ["ext-herodoto-historias-volume-4", 'p'], ["ext-herodoto-historias-volume-5", 'p']]],
  // [acervo] Humano, Demasiado Humano (com Opiniões e Sentenças Diversas e O Andarilho e sua Sombra) — Friedrich Nietzsche
  //   = Humano, Demasiado Humano — Friedrich Wilhelm Nietzsche
  ["livro-nietzsche-humano", [["ext-friedrich-wilhelm-nietzsche-humano-demasiado-humano", 'd']]],
  // Ideia de uma história universal de um ponto de vista cosmopolita — Immanuel Kant
  //   = Ideia de uma História Universal de um Ponto de Vista Cosmopolita (1784) — Immanuel Kant
  ["ext-immanuel-kant-ideia-de-uma-historia-universal-de-um-ponto-de-vista-cos", [["ext-immanuel-kant-ideia-de-uma-historia-universal-de-um-ponto-de-vista-cos-2", 'd']]],
  // A Ideologia do Século XX — J. O. de Meira Penna
  //   = A Ideologia do Século XX — José Osvaldo de Meira Penna
  ["ext-j-o-de-meira-penna-a-ideologia-do-seculo-xx", [["ext-jose-osvaldo-de-meira-penna-a-ideologia-do-seculo-xx", 'd']]],
  // Ilíada e Odisseia — Homero
  //   ~ Ilíada e Odisséia (Tradução de Christian Werner) — Homero
  //   ~ Ilíada e Odisséia (Tradução de Frederico Lourenço) — Homero
  //   ~ Ilíada e Odisséia (Tradução de Carlos Alberto Nunes) — Homero
  ["obra-homero-iliada-e-odisseia", [["ext-homero-iliada-e-odisseia-traducao-de-christian-werner", 't'], ["ext-homero-iliada-e-odisseia-traducao-de-frederico-lourenco", 't'], ["ext-homero-iliada-e-odisseia-traducao-de-carlos-alberto-nunes", 't']]],
  // Imitação de Cristo — Tomás de Kempis
  //   = A Imitação de Cristo — Tomás de Kempis
  ["ext-tomas-de-kempis-imitacao-de-cristo", [["ext-tomas-de-kempis-a-imitacao-de-cristo", 'd']]],
  // Iniciação à Estética — Ariano Suassuna
  //   = Iniciação à Estética (Biblioteca Áurea) — Ariano Suassuna
  ["ext-ariano-suassuna-iniciacao-a-estetica", [["ext-ariano-suassuna-iniciacao-a-estetica-biblioteca-aurea", 'd']]],
  // Inquéritos sobre Religião e Cultura — Christopher Dawson
  //   = Inquéritos sobre Religião e Cultura (1933) — Christopher Dawson
  ["ext-christopher-dawson-inqueritos-sobre-religiao-e-cultura", [["ext-christopher-dawson-inqueritos-sobre-religiao-e-cultura-1933", 'd']]],
  // Instituição oratória — Quintiliano
  //   + Instituição Oratória: Tomo I — Quintiliano
  //   + Instituição Oratória: Tomo II — Quintiliano
  //   + Instituição Oratória: Tomo IV — Quintiliano
  //   + Instituição Oratória: Tomo III — Quintiliano
  ["obra-quintiliano-instituicao-oratoria", [["ext-quintiliano-instituicao-oratoria-tomo-i", 'p'], ["ext-quintiliano-instituicao-oratoria-tomo-ii", 'p'], ["ext-quintiliano-instituicao-oratoria-tomo-iv", 'p'], ["ext-quintiliano-instituicao-oratoria-tomo-iii", 'p']]],
  // A interpretação dos sonhos — Sigmund Freud
  //   = Interpretação dos Sonhos — Sigmund Freud
  ["obra-sigmund-freud-a-interpretacao-dos-sonhos", [["ext-sigmund-freud-interpretacao-dos-sonhos", 'd']]],
  // Introdução a Economia — Nicholas Gregory Mankiw
  //   = Introdução à economia — N. Gregory Mankiw
  ["ext-nicholas-gregory-mankiw-introducao-a-economia", [["obra-n-gregory-mankiw-introducao-a-economia", 'd']]],
  // [acervo] Introdução à Lógica — Irving M. Copi, Carl Cohen e Kenneth McMahon (conforme a edição)
  //   = Introdução à Lógica — Irving M. Copi
  ["livro-copi-logica", [["ext-irving-m-copi-introducao-a-logica", 'd']]],
  // Introdução à Lógica — César Mortari
  //   = Introdução à lógica — Cezar A. Mortari
  ["ext-cesar-mortari-introducao-a-logica", [["obra-cezar-a-mortari-introducao-a-logica", 'd']]],
  // Introdução à Lógica — Harry J. Gensler
  //   = Introdução à Lógica — Henry J. Gensler
  ["ext-harry-j-gensler-introducao-a-logica", [["ext-henry-j-gensler-introducao-a-logica", 'd']]],
  // Introdução ao estudo da medicina experimental — Claude Bernard
  //   = Uma Introdução ao Estudo da Medicina Experimental — Claude Bernard
  ["ext-claude-bernard-introducao-ao-estudo-da-medicina-experimental", [["ext-claude-bernard-uma-introducao-ao-estudo-da-medicina-experimental", 'd']]],
  // Introdução aos princípios da moral e da legislação — Jeremy Bentham
  //   = Uma Introdução aos Princípios da Moral e da Legislação — Jeremy Bentham
  ["ext-jeremy-bentham-introducao-aos-principios-da-moral-e-da-legislacao", [["ext-jeremy-bentham-uma-introducao-aos-principios-da-moral-e-da-legislacao", 'd']]],
  // Introduction to Analysis of the Infinite  (obra em volumes)
  //   + Introduction to Analysis of the Infinite (Book I) — Leonhard Euler
  //   + Introduction to Analysis of the Infinite (Book II) — Leonhard Euler
  ["ext-leonhard-euler-introduction-to-analysis-of-the-infinite-book-i", [["ext-leonhard-euler-introduction-to-analysis-of-the-infinite-book-ii", 'p']], "Introduction to Analysis of the Infinite"],
  // [acervo] Investigação sobre o Entendimento Humano — David Hume
  //   = Uma Investigação sobre o Entendimento Humano — David Hume
  ["livro-hume-investigacao", [["ext-david-hume-uma-investigacao-sobre-o-entendimento-humano", 'd']]],
  // Jean-Christophe  (obra em volumes)
  //   + Jean-Christophe – Volume 1 — Romain Rolland
  //   + Jean-Christophe – Volume 2 — Romain Rolland
  //   + Jean-Christophe – Volume 3 — Romain Rolland
  ["ext-romain-rolland-jean-christophe-volume-1", [["ext-romain-rolland-jean-christophe-volume-2", 'p'], ["ext-romain-rolland-jean-christophe-volume-3", 'p']], "Jean-Christophe"],
  // O Julgamento das Nações — Christopher Dawson
  //   = O Julgamento das Nações (1942) — Christopher Dawson
  ["ext-christopher-dawson-o-julgamento-das-nacoes", [["ext-christopher-dawson-o-julgamento-das-nacoes-1942", 'd']]],
  // Lições de física — Richard Feynman
  //   + Lições de Física — 3 Volumes – Richard P. Feynman
  ["obra-richard-feynman-licoes-de-fisica", [["ext-3-volumes-richard-p-feynman-licoes-de-fisica", 'p']]],
  // Lingva Latina per se Illvstrata — Familia Romana
  //   = Lingva Latina per se Illvstrata – Familia Romana
  ["ext-familia-romana-lingva-latina-per-se-illvstrata", [["ext-lingva-latina-per-se-illvstrata-familia-romana", 'd']]],
  // [acervo] O Livre-Arbítrio — Santo Agostinho
  //   = O Livre Arbítrio — Agostinho de Hipona
  ["livro-agostinho-livre-arbitrio", [["ext-agostinho-de-hipona-o-livre-arbitrio", 'd']]],
  // [acervo] Lógica Menor (Elementos de Filosofia II) — Jacques Maritain
  //   = Lógica Menor — Jacques Maritain
  ["livro-maritain-logica", [["ext-jacques-maritain-logica-menor", 'd']]],
  // The Logical Basis for Computer Progamming  (obra em volumes)
  //   + The Logical Basis for Computer Progamming: Deductive Systems Vol.2 — Zohar Manna
  //   + The Logical Basis for Computer Progamming: Deductive Reasoning Vol.1 — Zohar Manna
  ["ext-zohar-manna-the-logical-basis-for-computer-progamming-deductive-system", [["ext-zohar-manna-the-logical-basis-for-computer-progamming-deductive-reason", 'p']], "The Logical Basis for Computer Progamming"],
  // Madame Bovary — Gustave Flaubert
  //   = Madame Bovary: Costumes de província — Gustave Flaubert
  ["ext-gustave-flaubert-madame-bovary", [["ext-gustave-flaubert-madame-bovary-costumes-de-provincia", 'd']]],
  // [acervo] Manifesto do Partido Comunista — Karl Marx e Friedrich Engels
  //   = Manifesto do Partido Comunista — Karl Marx
  ["livro-marx-manifesto", [["ext-karl-marx-manifesto-do-partido-comunista", 'd']]],
  // Marília de Dirceu  (obra em volumes)
  //   + Marília de Dirceu Tomo I — Tomás Antonio Gonzaga
  //   + Marília de Dirceu Tomo II — Tomás Antonio Gonzaga
  ["ext-tomas-antonio-gonzaga-marilia-de-dirceu-tomo-i", [["ext-tomas-antonio-gonzaga-marilia-de-dirceu-tomo-ii", 'p']], "Marília de Dirceu"],
  // [acervo] Metafísica dos Costumes (Doutrina do Direito e Doutrina da Virtude) — Immanuel Kant
  //   = A Metafísica dos Costumes (1797) — Immanuel Kant
  ["livro-kant-metafisica-costumes", [["ext-immanuel-kant-a-metafisica-dos-costumes-1797", 'd']]],
  // Metamorfoses [Bilingue] — Ovídio
  //   ~ Metamorfoses: Tradução de Bocage e comentários de Rafael Falcón — Ovídio
  ["ext-ovidio-metamorfoses-bilingue", [["ext-ovidio-metamorfoses-traducao-de-bocage-e-comentarios-de-rafael-falcon", 't']]],
  // Métodos Lógicos e Dialéticos — Mário Ferreira dos Santos
  //   + Métodos Lógicos e Dialéticos (2 volumes) — Mário Ferreira dos Santos
  ["ext-mario-ferreira-dos-santos-metodos-logicos-e-dialeticos", [["ext-mario-ferreira-dos-santos-metodos-logicos-e-dialeticos-2-volumes", 'p']]],
  // [acervo] Migalhas Filosóficas — Søren Kierkegaard
  //   = (1844) Migalhas Filosóficas — Søren Kierkegaard
  ["livro-kierkegaard-migalhas", [["ext-s-ren-kierkegaard-1844-migalhas-filosoficas", 'd']]],
  // Miguel Mahfoud — Edith Stein e a Psicologia – Teoria e Pesquisa
  //   = Miguel Mahfoud — Psicologia com Alma – A Fenomenologia de Edtih Stein
  ["ext-edith-stein-e-a-psicologia-teoria-e-pesquisa-miguel-mahfoud", [["ext-psicologia-com-alma-a-fenomenologia-de-edtih-stein-miguel-mahfoud", 'd']]],
  // Mimesis — Erich Auerbach
  //   = Mimesis: The Representation of Reality in Western Literature — Erich Auerbach
  ["obra-erich-auerbach-mimesis", [["ext-erich-auerbach-mimesis-the-representation-of-reality-in-western-litera", 'd']]],
  // [acervo] O Mínimo que Você Precisa Saber para Não Ser um Idiota — Olavo de Carvalho (coletânea organizada por Felipe Moura Brasil)
  //   = O mínimo que você precisa saber para não ser um idiota — Olavo de Carvalho
  ["livro-olavo-minimo", [["ext-olavo-de-carvalho-o-minimo-que-voce-precisa-saber-para-nao-ser-um-idio", 'd']]],
  // The Modern Regime  (obra em volumes)
  //   + The Modern Regime Vol.1 — Hippolyte Taine
  //   + The Modern Regime Vol.2 — Hippolyte Taine
  ["ext-hippolyte-taine-the-modern-regime-vol-1", [["ext-hippolyte-taine-the-modern-regime-vol-2", 'p']], "The Modern Regime"],
  // [acervo] Monadologia — G. W. Leibniz
  //   = A Monadologia — Gottfried Wilhem von Leibniz
  ["livro-leibniz-monadologia", [["ext-gottfried-wilhem-von-leibniz-a-monadologia", 'd']]],
  // [acervo] Monadologia Física — Immanuel Kant
  //   = Monadologia Física (1756) — Immanuel Kant
  ["livro-kant-monadologia-fisica", [["ext-immanuel-kant-monadologia-fisica-1756", 'd']]],
  // As múltiplas expressões da Idade Média  (obra em volumes)
  //   + As múltiplas expressões da Idade Média: Filosofia, Artes, Letras, História e Direito Vol.1 — Ricardo da Costa
  //   + As múltiplas expressões da Idade Média: Filosofia, Artes, Letras, História e Direito Vol.2 — Ricardo da Costa
  ["ext-ricardo-da-costa-as-multiplas-expressoes-da-idade-media-filosofia-arte", [["ext-ricardo-da-costa-as-multiplas-expressoes-da-idade-media-filosofia-arte-2", 'p']], "As múltiplas expressões da Idade Média"],
  // O Mundo como Vontade e como Representação (1819) — Arthur Schopenhauer
  //   + O Mundo Como Vontade e Como Representação Tomo I — Arthur Schopenhauer
  //   + O Mundo como Vontade e como Representação Tomo II (1841) — Arthur Schopenhauer
  ["ext-arthur-schopenhauer-o-mundo-como-vontade-e-como-representacao-1819", [["ext-arthur-schopenhauer-o-mundo-como-vontade-e-como-representacao-tomo-i", 'p'], ["ext-arthur-schopenhauer-o-mundo-como-vontade-e-como-representacao-tomo-ii-", 'p']]],
  // [acervo] O Nascimento da Tragédia — Friedrich Nietzsche
  //   = O Nascimento da Tragédia — Friedrich Wilhelm Nietzsche
  ["livro-nietzsche-tragedia", [["ext-friedrich-wilhelm-nietzsche-o-nascimento-da-tragedia", 'd']]],
  // [acervo] A Nova Ciência da Política — Eric Voegelin
  //   = Nova Ciência da Política — Eric Voegelin
  ["livro-voegelin-nova-ciencia", [["ext-eric-voegelin-nova-ciencia-da-politica", 'd']]],
  // [acervo] A Nova Era e a Revolução Cultural: Fritjof Capra & Antonio Gramsci — Olavo de Carvalho
  //   = A Nova Era e a Revolução Cultural — Olavo de Carvalho
  ["livro-olavo-nova-era", [["ext-olavo-de-carvalho-a-nova-era-e-a-revolucao-cultural", 'd']]],
  // [acervo] As Nuvens — Aristófanes (testemunho sobre Sócrates)
  //   = As Nuvens — Aristófanes
  ["livro-aristofanes-nuvens", [["ext-aristofanes-as-nuvens", 'd']]],
  // Obras Completas de Castro Alves  (obra em volumes)
  //   + Obras Completas de Castro Alves Volume 1 — Castro Alves
  //   + Obras Completas de Castro Alves Volume 2 — Castro Alves
  ["ext-castro-alves-obras-completas-de-castro-alves-volume-1", [["ext-castro-alves-obras-completas-de-castro-alves-volume-2", 'p']], "Obras Completas de Castro Alves"],
  // [acervo] As Obras do Amor — Søren Kierkegaard
  //   = (1847) As Obras do Amor — Søren Kierkegaard
  ["livro-kierkegaard-obras-amor", [["ext-s-ren-kierkegaard-1847-as-obras-do-amor", 'd']]],
  // [acervo] Ordem e História — Eric Voegelin
  //   + Ordem e História: A Era Ecumênica — Eric Voegelin
  //   + Ordem e História: O Mundo da Pólis — Eric Voegelin
  //   + Ordem e História: Em Busca da Ordem — Eric Voegelin
  //   + Ordem e História: Israel e a Revelação — Eric Voegelin
  //   + Ordem e História: Platão e Aristóteles — Eric Voegelin
  //   + Ordem e História (Volumes I-V) — Eric Voegelin
  ["livro-voegelin-ordem", [["ext-eric-voegelin-ordem-e-historia-a-era-ecumenica", 'p'], ["ext-eric-voegelin-ordem-e-historia-o-mundo-da-polis", 'p'], ["ext-eric-voegelin-ordem-e-historia-em-busca-da-ordem", 'p'], ["ext-eric-voegelin-ordem-e-historia-israel-e-a-revelacao", 'p'], ["ext-eric-voegelin-ordem-e-historia-platao-e-aristoteles", 'p'], ["ext-eric-voegelin-ordem-e-historia-volumes-i-v", 'p']]],
  // Orestéia — Ésquilo
  //   = A Oresteia — Ésquilo
  ["ext-esquilo-oresteia", [["ext-esquilo-a-oresteia", 'd']]],
  // Ortodoxia — G. K. Chesterton
  //   = Ortodoxia — Gilbert Keith Chesterton
  ["ext-g-k-chesterton-ortodoxia", [["ext-gilbert-keith-chesterton-ortodoxia", 'd']]],
  // Palavra e objeto — Willard Van Orman Quine
  //   = Palavra e Objeto — Willian van Ormam Quine
  ["ext-willard-van-orman-quine-palavra-e-objeto", [["ext-willian-van-ormam-quine-palavra-e-objeto", 'd']]],
  // [acervo] À Paz Perpétua — Immanuel Kant
  //   = A Paz Perpétua (1795) — Immanuel Kant
  ["livro-kant-paz", [["ext-immanuel-kant-a-paz-perpetua-1795", 'd']]],
  // Pesquisa Histórica no Brasil — José Honório Rodrigues
  //   = A Pesquisa Histórica no Brasil — José Honório Rodrigues
  ["ext-jose-honorio-rodrigues-pesquisa-historica-no-brasil", [["ext-jose-honorio-rodrigues-a-pesquisa-historica-no-brasil", 'd']]],
  // Peter Atkins e Julio de Paula — Físico-química Volume 1
  //   + Peter Atkins e Julio de Paula — Físico-química Volume 2
  ["ext-fisico-quimica-volume-1-peter-atkins-e-julio-de-paula", [["ext-fisico-quimica-volume-2-peter-atkins-e-julio-de-paula", 'p']]],
  // Peter Atkins, Ronald Friedaman, e Julio de Paula — Quanta, Matéria e Mudança: Uma Abordagem Molecular para a Físico-Química Vol. 1
  //   + Peter Atkins. Ronald Friedaman, e Julio de Paula — Quanta, Matéria e Mudança: Uma Abordagem Molecular para a Físico-Química Vol. 2
  ["ext-quanta-materia-e-mudanca-uma-abordagem-molecular-para-a-fisico-quimica", [["ext-quanta-materia-e-mudanca-uma-abordagem-molecular-para-a-fisico-quimica-2", 'p']]],
  // Platão
  //   = Platão [Cambridge] — Platão
  ["ext-platao", [["ext-platao-platao-cambridge", 'd']]],
  // [acervo] Poética — Aristóteles
  //   = (1447a) Poética (Περὶ ποιητικης, Poetica) — Aristóteles
  ["livro-aristoteles-poetica", [["ext-aristoteles-1447a-poetica-poetica", 'd']]],
  // [acervo] Política — Aristóteles
  //   = (1252a) Política (Πολιτικα, Politica) — Aristóteles
  ["livro-aristoteles-politica", [["ext-aristoteles-1252a-politica-politica", 'd']]],
  // Política Entre as Nações — Hans Morgenthau
  //   = A política entre as nações — Hans Morgenthau
  ["ext-hans-morgenthau-politica-entre-as-nacoes", [["obra-hans-morgenthau-a-politica-entre-as-nacoes", 'd']]],
  // [acervo] O Ponto de Vista Explicativo da Minha Obra como Escritor — Søren Kierkegaard
  //   = (1859) Ponto de Vista Explicativo da minha Obra como Escritor — Søren Kierkegaard
  ["livro-kierkegaard-ponto-vista", [["ext-s-ren-kierkegaard-1859-ponto-de-vista-explicativo-da-minha-obra-como-e", 'd']]],
  // [acervo] Prática do Cristianismo (Exercício no Cristianismo) — Søren Kierkegaard
  //   = (1850) Prática do Cristianismo — Søren Kierkegaard
  ["livro-kierkegaard-pratica", [["ext-s-ren-kierkegaard-1850-pratica-do-cristianismo", 'd']]],
  // O Príncipe — Nicolau Maquiavel
  //   = O Príncipe — Maquiavel
  ["obra-nicolau-maquiavel-o-principe", [["ext-maquiavel-o-principe", 'd']]],
  // Principia Mathematica — Russel/Whitehead
  //   = Principia Mathematica — Bertrand Russell e Alfred N. Whitehead
  //   = Principia Mathematica (I Volume) — Bertrand Russell/ Alfred N. Whitehead
  //   = Principia Mathematica (II Volume) — Bertrand Russell/ Alfred N. Whitehead
  ["ext-russel-whitehead-principia-mathematica", [["obra-bertrand-russell-e-alfred-n-whitehead-principia-mathematica", 'd'], ["ext-bertrand-russell-alfred-n-whitehead-principia-mathematica-i-volume", 'd'], ["ext-bertrand-russell-alfred-n-whitehead-principia-mathematica-ii-volume", 'd']]],
  // Principia, Principios Matemáticos de Filosofia Natural (Livros I) — Isaac Newton
  //   = Principia, Principios Matemáticos de Filosofia Natural (Livros II e III) — Isaac Newton
  ["ext-isaac-newton-principia-principios-matematicos-de-filosofia-natural-liv", [["ext-isaac-newton-principia-principios-matematicos-de-filosofia-natural-liv-2", 'd']]],
  // [acervo] Princípios da Filosofia do Direito — G. W. F. Hegel
  //   = Princípios da Filosofia do Direito — Georg Wilhelm Friedrich Hegel
  ["livro-hegel-direito", [["ext-georg-wilhelm-friedrich-hegel-principios-da-filosofia-do-direito", 'd']]],
  // O Processo Civilizador.  (obra em volumes)
  //   + O Processo Civilizador. Vol.1 — Norbert Elias
  //   + O Processo Civilizador. Vol.2 — Norbert Elias
  ["ext-norbert-elias-o-processo-civilizador-vol-1", [["ext-norbert-elias-o-processo-civilizador-vol-2", 'p']], "O Processo Civilizador."],
  // Psicoterapia para todos — Viktor Emil Frankl
  //   = Psicoterapia para todos — Viktor Frankl
  ["ext-viktor-emil-frankl-psicoterapia-para-todos", [["ext-viktor-frankl-psicoterapia-para-todos", 'd']]],
  // [acervo] A Repetição — Søren Kierkegaard
  //   = (1843) A Repetição — Søren Kierkegaard
  ["livro-kierkegaard-repeticao", [["ext-s-ren-kierkegaard-1843-a-repeticao", 'd']]],
  // [acervo] A República (livros I–X) — Platão
  //   = Republica — Platão
  ["livro-platao-republica", [["ext-platao-republica", 'd']]],
  // [acervo] Retórica — Aristóteles
  //   = (1354a) Retórica(Τέχνη ρητορική, Ars Rhetorica) — Aristóteles
  ["livro-aristoteles-retorica", [["ext-aristoteles-1354a-retorica-ars-rhetorica", 'd']]],
  // A riqueza das nações — Adam Smith
  //   = Riqueza das Nações — Adam Smith
  ["obra-adam-smith-a-riqueza-das-nacoes", [["ext-adam-smith-riqueza-das-nacoes", 'd']]],
  // O Rosto de Deus — Roger Scruton
  //   = O Rosto de Deus (2012) — Roger Scruton
  ["ext-roger-scruton-o-rosto-de-deus", [["ext-roger-scruton-o-rosto-de-deus-2012", 'd']]],
  // Santo Tomás de Aquino — Chesterton
  //   = Santo Tomás de Aquino — Gilbert Keith Chesterton
  ["ext-chesterton-santo-tomas-de-aquino", [["ext-gilbert-keith-chesterton-santo-tomas-de-aquino", 'd']]],
  // São Francisco de Assis — Chesterton
  //   = São Francisco de Assis — Gilbert Keith Chesterton
  ["ext-chesterton-sao-francisco-de-assis", [["ext-gilbert-keith-chesterton-sao-francisco-de-assis", 'd']]],
  // Saudades do Carnaval — José Guilherme Merquior
  //   = Saudades do Carnaval – Introdução à Crise da Cultura — José Guilherme Merquior
  ["ext-jose-guilherme-merquior-saudades-do-carnaval", [["ext-jose-guilherme-merquior-saudades-do-carnaval-introducao-a-crise-da-cul", 'd']]],
  // The Semantic Foundations of Logic  (obra em volumes)
  //   + The Semantic Foundations of Logic: Predicate Logics — Richard L. Epstein
  //   + The Semantic Foundations of Logic: Propositional Logics — Richard L. Epstein
  ["ext-richard-l-epstein-the-semantic-foundations-of-logic-predicate-logics", [["ext-richard-l-epstein-the-semantic-foundations-of-logic-propositional-logi", 'p']], "The Semantic Foundations of Logic"],
  // O Senhor dos Anéis — J. R. R. Tolkien
  //   = O Senhor dos Anéis – Volume Único — J. R. R. Tolkien
  ["ext-j-r-r-tolkien-o-senhor-dos-aneis", [["ext-j-r-r-tolkien-o-senhor-dos-aneis-volume-unico", 'd']]],
  // [acervo] Ser e Tempo (seleções) — Martin Heidegger
  //   = ⦁ Ser e Tempo (1927) – Versão Bilíngüe — Martin Heidegger
  ["livro-heidegger-ser-tempo", [["ext-martin-heidegger-ser-e-tempo-1927-versao-bilingue", 'd']]],
  // Os Sertões — Euclides da Cunha
  //   = Os Sertões – Edição Crítica — Euclides da Cunha
  ["ext-euclides-da-cunha-os-sertoes", [["ext-euclides-da-cunha-os-sertoes-edicao-critica", 'd']]],
  // [acervo] A Sociedade Aberta e Seus Inimigos — Karl Popper
  //   + A Sociedade Aberta e seus Inimigos Volume 1 — Karl Popper
  //   + A Sociedade Aberta e seus Inimigos Volume 2 — Karl Popper
  ["livro-popper-sociedade-aberta", [["ext-karl-popper-a-sociedade-aberta-e-seus-inimigos-volume-1", 'p'], ["ext-karl-popper-a-sociedade-aberta-e-seus-inimigos-volume-2", 'p']]],
  // [acervo] Sofista — Platão
  //   = O Sofista — Platão
  ["livro-platao-sofista", [["ext-platao-o-sofista", 'd']]],
  // A Study of History  (obra em volumes)
  //   + A Study of History: Abridgement of Volumes I-VI — Arnold J. Toynbee
  //   + A Study of History: Abridgement of Volumes VII-X — Arnold J. Toynbee
  ["ext-arnold-j-toynbee-a-study-of-history-abridgement-of-volumes-i-vi", [["ext-arnold-j-toynbee-a-study-of-history-abridgement-of-volumes-vii-x", 'p']], "A Study of History"],
  // [acervo] Suma contra os Gentios (livros I–IV) — Tomás de Aquino
  //   = Suma Contra os Gentios — Tomás de Aquino
  //   = Suma contra os Gentios — S. Tomás de Aquino
  ["livro-suma-contra-gentios", [["ext-tomas-de-aquino-suma-contra-os-gentios", 'd'], ["ext-s-tomas-de-aquino-suma-contra-os-gentios", 'd']]],
  // [acervo] Temor e Tremor — Søren Kierkegaard
  //   = Temor e Tremor — Soren Kierkegaard
  //   = (1843) Temor e Tremor — Søren Kierkegaard
  ["livro-kierkegaard-temor", [["ext-soren-kierkegaard-temor-e-tremor", 'd'], ["ext-s-ren-kierkegaard-1843-temor-e-tremor", 'd']]],
  // O Tempo e o Vento — Érico Veríssimo
  //   + O tempo e o vento – O retrato — Érico Veríssimo
  //   + O tempo e o vento – O continente — Érico Veríssimo
  //   + O tempo e o vento – O arquipélago — Érico Veríssimo
  //   + O Tempo e o Vento Vol.I — Érico Veríssimo
  //   + O Tempo e o Vento Vol. II — Érico Veríssimo
  //   + O Tempo e o Vento Vol. III — Érico Veríssimo
  ["ext-erico-verissimo-o-tempo-e-o-vento", [["ext-erico-verissimo-o-tempo-e-o-vento-o-retrato", 'p'], ["ext-erico-verissimo-o-tempo-e-o-vento-o-continente", 'p'], ["ext-erico-verissimo-o-tempo-e-o-vento-o-arquipelago", 'p'], ["ext-erico-verissimo-o-tempo-e-o-vento-vol-i", 'p'], ["ext-erico-verissimo-o-tempo-e-o-vento-vol-ii", 'p'], ["ext-erico-verissimo-o-tempo-e-o-vento-vol-iii", 'p']]],
  // [acervo] Teologia do Corpo (Homem e Mulher os Criou: catequeses) — João Paulo II
  //   = Teologia do Corpo — São João Paulo II
  ["livro-jp2-teologia-corpo", [["ext-sao-joao-paulo-ii-teologia-do-corpo", 'd']]],
  // Teoria e Terapia das Neuroses — Viktor Emil Frankl
  //   = Teoria e Terapia das Neuroses — Viktor Frankl
  ["ext-viktor-emil-frankl-teoria-e-terapia-das-neuroses", [["ext-viktor-frankl-teoria-e-terapia-das-neuroses", 'd']]],
  // Teoria Geral do Emprego, do Juro, e da Moeda — John Maynard Keynes
  //   = A teoria geral do emprego, do juro e da moeda — John Maynard Keynes
  ["ext-john-maynard-keynes-teoria-geral-do-emprego-do-juro-e-da-moeda", [["obra-john-maynard-keynes-a-teoria-geral-do-emprego-do-juro-e-da-moeda", 'd']]],
  // Tratado dos Valores  (obra em volumes)
  //   + Tratado dos Valores Tomo I – Teoria Geral dos Valores [Théorie générale de la valeur] — Louis Lavelle
  //   + Tratado dos Valores Tomo II – O Sistema dos Diferentes Valores [Le système des différentes valeurs] — Louis Lavelle
  ["ext-louis-lavelle-tratado-dos-valores-tomo-i-teoria-geral-dos-valores-theo", [["ext-louis-lavelle-tratado-dos-valores-tomo-ii-o-sistema-dos-diferentes-val", 'p']], "Tratado dos Valores"],
  // [acervo] A Trindade — Santo Agostinho
  //   = A Trindade — Santo Agostinho de Hipona
  ["livro-agostinho-trindade", [["ext-santo-agostinho-de-hipona-a-trindade", 'd']]],
  // Viagens de Gulliver — Jonathan Swift
  //   = As Viagens de Gulliver — Jonathan Swift
  ["ext-jonathan-swift-viagens-de-gulliver", [["ext-jonathan-swift-as-viagens-de-gulliver", 'd']]],
  // [acervo] Visões de Descartes: Entre o Gênio Mau e o Espírito da Verdade — Olavo de Carvalho
  //   = Visões De Descartes — Olavo de Carvalho
  ["livro-olavo-descartes", [["ext-olavo-de-carvalho-visoes-de-descartes", 'd']]],
];
