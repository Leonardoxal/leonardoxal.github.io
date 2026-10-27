// Autores para a linha do tempo e o mapa de relações.
// ano: número usado só para ordenar (negativo = a.C.). influencias: autores que este leu/recebeu.
// As relações de influência listadas são as amplamente documentadas na historiografia.
const A = (id, nome, datas, ano, periodo, influencias, resumo) => ({ id, nome, datas, ano, periodo, influencias, resumo });

export const AUTORES = [
  A('socrates', 'Sócrates', 'c. 470–399 a.C.', -470, 'Antiga', [], 'Não deixou escritos; conhecido sobretudo por Platão e Xenofonte. Exame racional das opiniões.'),
  A('platao', 'Platão', 'c. 428/427–348/347 a.C.', -428, 'Antiga', ['socrates'], 'Diálogos; teoria das Formas; justiça, conhecimento e alma.'),
  A('aristoteles', 'Aristóteles', '384–322 a.C.', -384, 'Antiga', ['platao'], 'Lógica, física, metafísica, ética, política, retórica, poética.'),
  A('epicuro', 'Epicuro', '341–270 a.C.', -341, 'Helenística', [], 'Ética do prazer como ausência de dor e de perturbação.'),
  A('epicteto', 'Epicteto', 'c. 50–c. 135', 50, 'Helenística', [], 'Estoico; ensinamentos registrados por Arriano.'),
  A('marco-aurelio', 'Marco Aurélio', '121–180', 121, 'Helenística', ['epicteto'], 'Imperador romano e estoico; Meditações.'),
  A('agostinho', 'Santo Agostinho', '354–430', 354, 'Patrística', ['platao'], 'Bispo de Hipona; Confissões, A Cidade de Deus; recebe o neoplatonismo.'),
  A('boecio', 'Boécio', 'c. 477–524', 477, 'Medieval', ['platao', 'aristoteles', 'agostinho'], 'Tradutor de Aristóteles para o latim; A Consolação da Filosofia.'),
  A('anselmo', 'Santo Anselmo', '1033–1109', 1033, 'Medieval', ['agostinho', 'boecio'], 'Arcebispo de Cantuária; fé que busca compreender; Proslógio.'),
  A('tomas', 'Santo Tomás de Aquino', 'c. 1225–1274', 1225, 'Medieval', ['aristoteles', 'agostinho', 'boecio', 'anselmo'], 'Dominicano; síntese entre aristotelismo e teologia cristã; Suma Teológica.'),
  A('descartes', 'René Descartes', '1596–1650', 1596, 'Moderna', ['agostinho'], 'Dúvida metódica, cogito, racionalismo.'),
  A('pascal', 'Blaise Pascal', '1623–1662', 1623, 'Moderna', ['agostinho', 'descartes'], 'Matemático e apologista; Pensamentos.'),
  A('locke', 'John Locke', '1632–1704', 1632, 'Moderna', ['descartes'], 'Empirismo; teoria política liberal.'),
  A('hume', 'David Hume', '1711–1776', 1711, 'Moderna', ['locke'], 'Empirismo cético; crítica da causalidade e dos milagres.'),
  A('rousseau', 'Jean-Jacques Rousseau', '1712–1778', 1712, 'Moderna', ['locke'], 'Contrato social e vontade geral.'),
  A('kant', 'Immanuel Kant', '1724–1804', 1724, 'Moderna', ['descartes', 'hume', 'rousseau'], 'Filosofia crítica; limites da razão; ética do dever.'),
  A('hegel', 'G. W. F. Hegel', '1770–1831', 1770, 'Contemporânea', ['kant', 'platao', 'aristoteles'], 'Idealismo absoluto; dialética histórica.'),
  A('kierkegaard', 'Søren Kierkegaard', '1813–1855', 1813, 'Contemporânea', ['hegel', 'socrates'], 'Fé, angústia e existência individual; crítico de Hegel.'),
  A('marx', 'Karl Marx', '1818–1883', 1818, 'Contemporânea', ['hegel'], 'Materialismo histórico; crítica da economia política.'),
  A('nietzsche', 'Friedrich Nietzsche', '1844–1900', 1844, 'Contemporânea', ['platao', 'kant'], 'Genealogia dos valores; crítica do cristianismo e da metafísica.'),
  A('maritain', 'Jacques Maritain', '1882–1973', 1882, 'Contemporânea', ['tomas'], 'Neotomista francês.'),
  A('gilson', 'Étienne Gilson', '1884–1978', 1884, 'Contemporânea', ['tomas', 'agostinho'], 'Historiador da filosofia medieval.'),
  A('wittgenstein', 'Ludwig Wittgenstein', '1889–1951', 1889, 'Contemporânea', [], 'Filosofia da linguagem; Tractatus e Investigações.'),
  A('popper', 'Karl Popper', '1902–1994', 1902, 'Contemporânea', ['hume', 'kant'], 'Falseabilidade; filosofia da ciência; crítica ao historicismo.'),
  A('sartre', 'Jean-Paul Sartre', '1905–1980', 1905, 'Contemporânea', ['kierkegaard', 'hegel'], 'Existencialismo ateu; liberdade radical.'),
  A('mfs', 'Mário Ferreira dos Santos', '1907–1968', 1907, 'Contemporânea', ['platao', 'aristoteles', 'tomas'], 'Filósofo brasileiro; Enciclopédia de Ciências Filosóficas e Sociais; filosofia concreta.'),
  A('jp2', 'João Paulo II', '1920–2005', 1920, 'Contemporânea', ['tomas'], 'Papa de 1978 a 2005; Fides et Ratio (1998).'),
  A('macintyre', 'Alasdair MacIntyre', '1929–2025', 1929, 'Contemporânea', ['aristoteles', 'tomas', 'nietzsche'], 'Ética das virtudes; Depois da Virtude.'),
  A('olavo', 'Olavo de Carvalho', '1947–2022', 1947, 'Contemporânea', ['aristoteles', 'platao', 'mfs'], 'Ensaísta e professor brasileiro; teoria dos quatro discursos; crítica cultural.'),
];

export const autorPorId = Object.fromEntries(AUTORES.map((a) => [a.id, a]));
