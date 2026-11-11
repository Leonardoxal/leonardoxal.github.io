// Percurso de idiomas da formação adulta: metas por nível, método e textos-alvo de cada língua.
// Línguas modernas seguem os níveis do Quadro Europeu Comum de Referência (Conselho da Europa, 2001; volume
// complementar de 2020). Latim e grego antigo priorizam leitura, compreensão e terminologia.
// Só entram referências de autoria e título amplamente documentados; o restante é orientação da Academia.

export const QECR = { A1: 'Iniciante', A2: 'Básico', B1: 'Intermediário', B2: 'Intermediário superior', C1: 'Avançado', C2: 'Proficiente' };

// Resumo próprio das metas de cada nível (a descrição completa está no Quadro).
const METAS_QECR = {
  A1: 'Entender e usar frases muito simples do dia a dia; apresentar-se.',
  A2: 'Comunicar-se em tarefas simples e rotineiras; descrever o próprio meio.',
  B1: 'Entender o essencial de textos claros sobre assuntos familiares; contar experiências e justificar opiniões.',
  B2: 'Entender textos complexos e discussões técnicas da própria área; falar com fluência e escrever textos claros e detalhados.',
  C1: 'Entender textos longos e exigentes; usar a língua com flexibilidade na vida acadêmica e profissional.',
  C2: 'Entender praticamente tudo o que lê e ouve; exprimir-se com precisão e nuances finas.',
};

/** Princípios comuns: proposta da Academia, apoiada no que a ciência da aprendizagem consolidou (recuperação ativa e prática espaçada). */
export const PRINCIPIOS = [
  'Muita leitura e escuta compreensíveis: textos e áudios um pouco acima do nível atual, todos os dias, em vez de listas soltas de palavras.',
  'Recuperação ativa: tentar lembrar antes de olhar (cartões, resumo sem consulta, tradução de volta).',
  'Prática espaçada: rever o vocabulário em intervalos crescentes; os cartões de revisão das Avaliações servem para isso.',
  'Produção desde cedo: escrever e falar frases próprias, corrigidas, e reescrever.',
  'Um curso de cada vez, até o fim, com um texto-alvo à vista: o que você quer ler ou fazer com a língua.',
];

const moderna = (l) => ({
  foco: 'comunicação',
  niveis: Object.entries(QECR).map(([nivel, nome]) => ({ nivel: `${nivel} (${nome})`, meta: METAS_QECR[nivel] })),
  referencias: [{ autor: 'Conselho da Europa', titulo: 'Quadro Europeu Comum de Referência para as Línguas', nota: 'descrição oficial de cada nível, para se avaliar' }],
  ...l,
});

export const IDIOMAS = [
  {
    id: 'latim', nome: 'Latim', foco: 'leitura',
    porque: 'Língua da liturgia romana, da Vulgata, dos Padres latinos, de Santo Tomás e de boa parte do Magistério; chave da terminologia teológica, filosófica, jurídica e científica.',
    niveis: [
      { nivel: 'Leitura inicial', meta: 'Ler frases e textos adaptados; dominar as cinco declinações e o verbo regular.' },
      { nivel: 'Leitura intermediária', meta: 'Ler textos originais simples com dicionário: orações da Igreja, trechos dos Evangelhos na Vulgata.' },
      { nivel: 'Leitura autônoma', meta: 'Ler o Missal, a Vulgata e textos escolásticos com consulta ocasional ao dicionário.' },
    ],
    alvos: ['Orações tradicionais (Pater Noster, Ave Maria, Credo)', 'Missale Romanum', 'Vulgata', 'Suma Teológica'],
    referencias: [
      { autor: 'Hans H. Ørberg', titulo: 'Lingua Latina per se illustrata, Pars I: Familia Romana', nota: 'método de leitura, inteiro em latim' },
      { autor: 'Frederic M. Wheelock', titulo: "Wheelock's Latin", nota: 'gramática sistemática, em inglês' },
    ],
  },
  {
    id: 'grego', nome: 'Grego antigo', foco: 'leitura',
    porque: 'Língua do Novo Testamento, da Septuaginta, de Platão, Aristóteles e dos Padres gregos; base de grande parte da terminologia filosófica e científica.',
    niveis: [
      { nivel: 'Leitura inicial', meta: 'Ler o alfabeto com fluência; dominar o artigo, as declinações e o presente do verbo.' },
      { nivel: 'Leitura intermediária', meta: 'Ler trechos do Novo Testamento com auxílio do dicionário.' },
      { nivel: 'Leitura autônoma', meta: 'Ler os Evangelhos e diálogos de Platão com consulta ocasional.' },
    ],
    alvos: ['Novo Testamento grego', 'Septuaginta', 'Diálogos de Platão', 'Padres gregos'],
    referencias: [
      { autor: 'Maurice Balme e Gilbert Lawall', titulo: 'Athenaze: An Introduction to Ancient Greek', nota: 'curso por leitura, em inglês' },
      { autor: 'Joint Association of Classical Teachers', titulo: 'Reading Greek', nota: 'curso por leitura, em inglês' },
    ],
  },
  moderna({ id: 'ingles', nome: 'Inglês', porque: 'Língua da maior parte da produção acadêmica atual e de muitas traduções de clássicos.', alvos: ['Artigos acadêmicos', 'Clássicos da literatura inglesa', 'Palestras e cursos'] }),
  moderna({ id: 'espanhol', nome: 'Espanhol', porque: 'Próxima do português; abre a literatura hispânica e os místicos espanhóis no original.', alvos: ['Santa Teresa de Ávila e São João da Cruz', 'Cervantes', 'Literatura hispano-americana'] }),
  moderna({ id: 'frances', nome: 'Francês', porque: 'Língua de muitos autores católicos modernos e de grande parte da filosofia e da historiografia dos séculos XIX e XX.', alvos: ['Pascal', 'Autores católicos franceses', 'Historiografia francesa'] }),
  moderna({ id: 'italiano', nome: 'Italiano', porque: 'Língua de Dante e da vida da Igreja em Roma.', alvos: ['Dante', 'Estudos publicados em Roma'] }),
  moderna({ id: 'alemao', nome: 'Alemão', porque: 'Língua de grande parte da filosofia moderna, da teologia acadêmica e da filologia clássica.', alvos: ['Filosofia alemã no original', 'Estudos de teologia e filologia'] }),
];

export const idiomaPorId = Object.fromEntries(IDIOMAS.map((l) => [l.id, l]));
