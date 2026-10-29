// Avaliações independentes das aulas: provas de módulo, exercícios de lógica, comparações e avaliação final.
// Tipos de item:
//  mc        — múltipla escolha com explicação
//  disc      — discursiva, corrigida por rubrica de autoavaliação (aceita respostas diferentes bem fundamentadas)
//  premissas — classificar cada frase como premissa (p), conclusão (c) ou irrelevante (x)
//  validade  — dizer se o argumento é válido (a conclusão segue das premissas), independentemente da verdade

import { MODULOS } from './curriculo.js';
import { NOTA_MINIMA } from '../core.js';
import { aulaPorId } from './aulas/index.js';

const ESTATICAS = [
  {
    id: 'prova-m1', titulo: 'Prova do Módulo 1', tipo: 'prova', modulo: 'm1', minimo: NOTA_MINIMA,
    descricao: 'Questões de síntese do módulo.',
    itens: [
      { tipo: 'mc', enunciado: 'Qual par está corretamente relacionado?', opcoes: ['Teologia natural — parte da Revelação', 'Teologia revelada — parte do que Deus revelou e o investiga pela razão', 'Fideísmo — só a razão vale', 'Dogma — opinião de um teólogo'], correta: 1,
        explicacao: 'A teologia natural parte só da razão; fideísmo despreza a razão; dogma é verdade proposta como revelada de modo definitivo.' },
      { tipo: 'mc', enunciado: 'Segundo o CIC §156, milagres e profecias são:', opcoes: ['O motivo último da fé', 'Motivos de credibilidade', 'Revelações privadas', 'Dogmas'], correta: 1,
        explicacao: 'São sinais que mostram a razoabilidade da fé; o motivo último é a autoridade de Deus que revela.' },
      { tipo: 'mc', enunciado: 'Segundo Dei Verbum 10, o Magistério:', opcoes: ['Está acima da Palavra de Deus', 'Serve à Palavra de Deus', 'Pode criar novas revelações', 'É exercido por cada teólogo'], correta: 1,
        explicacao: 'DV 10 e CIC §86.' },
      { tipo: 'mc', enunciado: 'A terceira parte do Catecismo trata de:', opcoes: ['Oração', 'Sacramentos', 'Vida moral em Cristo', 'Credo'], correta: 2, explicacao: '§1691–2557.' },
      { tipo: 'mc', enunciado: 'A estrutura do Credo é:', opcoes: ['Cronológica', 'Trinitária', 'Alfabética', 'Moral'], correta: 1, explicacao: 'CIC §190: Pai, Filho, Espírito Santo.' },
      { tipo: 'mc', enunciado: 'Dizer que "o Filho é a mais alta das criaturas" corresponde a:', opcoes: ['Doutrina de Niceia', 'Arianismo', 'Modalismo', 'Calcedônia'], correta: 1, explicacao: 'Tese de Ário, rejeitada em Niceia (325).' },
      { tipo: 'mc', enunciado: 'O CIC §36 ensina que:', opcoes: ['Deus só é conhecido pela fé', 'Deus pode ser conhecido com certeza pela razão a partir das criaturas', 'Todos de fato conhecem Deus', 'A razão demonstra a Trindade'], correta: 1, explicacao: 'Retoma o Vaticano I; o §37 reconhece as dificuldades.' },
      { tipo: 'mc', enunciado: 'Um ser contingente é aquele que:', opcoes: ['Existe necessariamente', 'Poderia não existir', 'Não existe', 'É eterno'], correta: 1, explicacao: 'Definição usada no argumento da contingência.' },
      { tipo: 'premissas', enunciado: 'Classifique cada frase do argumento.', frases: ['Toda verdade procede de Deus.', 'A razão e a Revelação procedem de Deus.', 'Portanto, as verdades da razão e da Revelação não se contradizem.', 'Muitos cientistas são católicos.'], papeis: ['p', 'p', 'c', 'x'],
        explicacao: 'As duas primeiras sustentam a conclusão (introduzida por "portanto"). A última é verdadeira talvez, mas não participa do argumento.' },
      { tipo: 'disc', enunciado: 'Escreva um texto de 15 a 25 linhas: "O que a Igreja Católica entende por fé, e por que ela afirma que a fé é razoável?" Use ao menos três referências ao Catecismo e apresente uma objeção.',
        criterios: ['Define fé nas duas dimensões (CIC §150)', 'Explica graça e ato humano', 'Explica motivos de credibilidade', 'Apresenta objeção séria e responde com honestidade', 'Usa ao menos três referências corretas'] },
    ],
  },
  {
    id: 'logica-1', titulo: 'Exercícios de lógica I: premissas, conclusões e validade', tipo: 'logica', modulo: 'm4', minimo: NOTA_MINIMA,
    descricao: 'Treino preparatório para o Degrau 3. Pode ser feito desde já, junto com a aula de leitura ativa.',
    itens: [
      { tipo: 'premissas', enunciado: 'Classifique cada frase.', frases: ['Sócrates é homem.', 'Todo homem é mortal.', 'Logo, Sócrates é mortal.'], papeis: ['p', 'p', 'c'], explicacao: 'O clássico silogismo: duas premissas e a conclusão indicada por "logo".' },
      { tipo: 'premissas', enunciado: 'Classifique cada frase.', frases: ['A reunião foi cancelada,', 'pois o professor adoeceu', 'e ninguém mais tinha a chave da sala.'], papeis: ['c', 'p', 'p'], explicacao: 'A conclusão pode vir primeiro; "pois" introduz as premissas.' },
      { tipo: 'premissas', enunciado: 'Classifique cada frase.', frases: ['Choveu a noite toda.', 'O céu hoje está azul.', 'Por isso as ruas estão molhadas.'], papeis: ['p', 'x', 'c'], explicacao: 'O céu azul não sustenta a conclusão sobre as ruas molhadas.' },
      { tipo: 'validade', enunciado: 'O argumento é válido?', argumento: ['Todos os peixes voam.', 'Todo tubarão é peixe.', 'Logo, todo tubarão voa.'], valido: true,
        explicacao: 'Válido, embora com premissa falsa. Validade é a forma: se as premissas fossem verdadeiras, a conclusão seria. Um argumento válido com premissas verdadeiras é chamado sólido.' },
      { tipo: 'validade', enunciado: 'O argumento é válido?', argumento: ['Se chove, a rua fica molhada.', 'A rua está molhada.', 'Logo, choveu.'], valido: false,
        explicacao: 'Inválido: falácia da afirmação do consequente. A rua pode estar molhada por outra causa (alguém lavou a calçada).' },
      { tipo: 'validade', enunciado: 'O argumento é válido?', argumento: ['Se chove, a rua fica molhada.', 'A rua não está molhada.', 'Logo, não choveu.'], valido: true,
        explicacao: 'Válido: modus tollens. Negar o consequente permite negar o antecedente.' },
      { tipo: 'validade', enunciado: 'O argumento é válido?', argumento: ['Alguns filósofos são gregos.', 'Alguns gregos são marinheiros.', 'Logo, alguns filósofos são marinheiros.'], valido: false,
        explicacao: 'Inválido: os filósofos gregos e os gregos marinheiros podem ser grupos diferentes. O termo médio ("gregos") não é tomado universalmente em nenhuma premissa.' },
      { tipo: 'mc', enunciado: '"Você não pode criticar a Igreja porque você não vai à missa." Qual o erro?', opcoes: ['Ad hominem', 'Apelo à ignorância', 'Falso dilema', 'Nenhum'], correta: 0,
        explicacao: 'Ataca a pessoa em vez do argumento. Uma crítica pode ser correta ou errada independentemente de quem a faz.' },
      { tipo: 'mc', enunciado: '"Ninguém provou que Deus não existe; logo, Deus existe." Qual o erro?', opcoes: ['Ad hominem', 'Apelo à ignorância', 'Espantalho', 'Petição de princípio'], correta: 1,
        explicacao: 'Falta de prova contrária não é prova. O mesmo erro existe na versão inversa ("ninguém provou que existe; logo, não existe").' },
      { tipo: 'mc', enunciado: '"Ou você aceita tudo o que eu digo sobre política, ou você é inimigo da fé." Qual o erro?', opcoes: ['Falso dilema', 'Apelo à autoridade', 'Generalização apressada', 'Nenhum'], correta: 0,
        explicacao: 'Apresenta apenas duas opções quando há outras.' },
      { tipo: 'mc', enunciado: '"A Bíblia é verdadeira porque diz que é a Palavra de Deus, e a Palavra de Deus é verdadeira." Do ponto de vista lógico, o argumento:', opcoes: ['É uma petição de princípio, se usado para convencer quem ainda não aceita a autoridade da Bíblia', 'É um silogismo perfeito para qualquer público', 'É um ad hominem', 'É um falso dilema'], correta: 0,
        explicacao: 'Pressupõe o que quer provar. Note: a teologia católica não fundamenta a fé assim; recorre aos motivos de credibilidade e à Tradição (aula 2 e 3). Reconhecer o erro de um argumento não é rejeitar a tese.' },
      { tipo: 'mc', enunciado: '"Conheci dois padres arrogantes; os padres são arrogantes." Qual o erro?', opcoes: ['Generalização apressada', 'Ad hominem', 'Apelo à ignorância', 'Nenhum'], correta: 0, explicacao: 'Amostra pequena e não representativa.' },
    ],
  },
  {
    id: 'logica-2', titulo: 'Exercícios de lógica II (avançado): silogística, equivalências e falácias sutis', tipo: 'logica', modulo: 'm4', minimo: NOTA_MINIMA,
    descricao: 'Nível avançado do Degrau 3. Exige as regras do silogismo, o quadrado das oposições e a distinção entre forma e conteúdo.',
    itens: [
      { tipo: 'validade', enunciado: 'Válido?', argumento: ['Nenhum M é P.', 'Todo S é M.', 'Logo, nenhum S é P.'], valido: true, explicacao: 'Válido: modo Celarent da primeira figura.' },
      { tipo: 'validade', enunciado: 'Válido?', argumento: ['Todo P é M.', 'Todo S é M.', 'Logo, todo S é P.'], valido: false, explicacao: 'Inválido: o termo médio não está distribuído em nenhuma premissa (segunda figura com duas afirmativas). Ex.: todo cão é mamífero; todo gato é mamífero; logo todo gato é cão.' },
      { tipo: 'validade', enunciado: 'Válido?', argumento: ['Todo M é P.', 'Nenhum S é M.', 'Logo, nenhum S é P.'], valido: false, explicacao: 'Inválido: ilícito do termo maior — P está distribuído na conclusão (negativa), mas não na premissa maior. Ex.: todo cão é animal; nenhum gato é cão; logo nenhum gato é animal.' },
      { tipo: 'validade', enunciado: 'Válido?', argumento: ['Nenhum M é P.', 'Algum S é M.', 'Logo, algum S não é P.'], valido: true, explicacao: 'Válido: modo Ferio da primeira figura.' },
      { tipo: 'validade', enunciado: 'Válido? ("ou" no sentido inclusivo)', argumento: ['Ou ele estuda lógica ou estuda metafísica.', 'Ele estuda lógica.', 'Logo, não estuda metafísica.'], valido: false, explicacao: 'Inválido: afirmação do disjunto. Com "ou" inclusivo, ele pode estudar as duas. Já negar um disjunto e afirmar o outro (silogismo disjuntivo) é válido.' },
      { tipo: 'mc', enunciado: '"Se é homem, então é mortal" equivale logicamente a:', opcoes: ['Se é mortal, então é homem', 'Se não é homem, então não é mortal', 'Se não é mortal, então não é homem', 'É homem e é mortal'], correta: 2, explicacao: 'A contrapositiva é equivalente. As duas primeiras opções (conversa e inversa) não são equivalentes.' },
      { tipo: 'mc', enunciado: '"Nem todo filósofo é cético" equivale a:', opcoes: ['Nenhum filósofo é cético', 'Algum filósofo não é cético', 'Algum cético não é filósofo', 'Todo cético é filósofo'], correta: 1, explicacao: 'A negação de uma universal afirmativa (A) é a particular negativa (O): são contraditórias no quadrado das oposições.' },
      { tipo: 'mc', enunciado: 'No quadrado das oposições, "Todo S é P" e "Nenhum S é P" são:', opcoes: ['Contraditórias', 'Contrárias', 'Subcontrárias', 'Equivalentes'], correta: 1, explicacao: 'Contrárias: não podem ser ambas verdadeiras, mas podem ser ambas falsas.' },
      { tipo: 'mc', enunciado: '"O fim de uma coisa é sua perfeição; a morte é o fim da vida; logo a morte é a perfeição da vida." O erro é:', opcoes: ['Equivocação', 'Composição', 'Ad hominem', 'Nenhum'], correta: 0, explicacao: '"Fim" muda de sentido: finalidade na primeira premissa, término na segunda. Há quatro termos, não três.' },
      { tipo: 'mc', enunciado: '"Cada jogador do time é excelente; logo o time é excelente." O erro é:', opcoes: ['Divisão', 'Composição', 'Falso dilema', 'Petição de princípio'], correta: 1, explicacao: 'Composição: atribuir ao todo o que vale das partes. O contrário (do todo para as partes) é a divisão.' },
      { tipo: 'mc', enunciado: '"Sócrates é mortal porque é homem." Qual premissa está implícita (entimema)?', opcoes: ['Sócrates é grego', 'Todo homem é mortal', 'Alguns homens são mortais', 'Todo mortal é homem'], correta: 1, explicacao: 'Sem "todo homem é mortal" a conclusão não se segue. "Alguns homens" não basta; "todo mortal é homem" inverte a relação.' },
      { tipo: 'mc', enunciado: 'Concluir a existência de uma causa a partir de seus efeitos é, nos termos dos Analíticos Posteriores e de Tomás, uma demonstração:', opcoes: ['Propter quid', 'Quia', 'Dialética', 'Retórica'], correta: 1, explicacao: 'Quia: dos efeitos para a causa. Propter quid: da causa para os efeitos.' },
      { tipo: 'premissas', enunciado: 'Classifique (atenção à frase que só parece premissa).', frases: ['Todo ato livre é responsável,', 'e muitos filósofos discordam disso;', 'ora, a promessa é um ato livre;', 'portanto, quem promete responde pela promessa.'], papeis: ['p', 'x', 'p', 'c'], explicacao: 'A discordância dos filósofos é informação sobre o debate, não apoio à conclusão.' },
    ],
  },
  {
    id: 'comparacao-1', titulo: 'Comparação entre autores: o que é filosofar?', tipo: 'comparacao', modulo: 'm3', minimo: 0,
    descricao: 'Discursiva. Requer as aulas m1-1, m1-2 e m3-1, e idealmente a leitura da Apologia de Sócrates.',
    itens: [
      { tipo: 'disc', enunciado: 'Compare a atitude de Sócrates na Apologia (examinar as opiniões e reconhecer a própria ignorância) com o lema de Anselmo "a fé que busca compreender". Em que se parecem? Em que diferem? Qual o ponto de partida de cada um?',
        criterios: ['Expõe com fidelidade a atitude socrática', 'Expõe com fidelidade o lema de Anselmo', 'Identifica ao menos uma semelhança e uma diferença', 'Distingue ponto de partida racional e ponto de partida de fé', 'Conclui com justificação própria'] },
    ],
  },
  {
    id: 'final', titulo: 'Avaliação final: projeto de conclusão (Degrau 13)', tipo: 'final', modulo: 'm16', minimo: 0,
    descricao: 'Exige demonstração de competência, não de memorização nem de concordância com uma conclusão predeterminada. Pode ser iniciada a qualquer momento como rascunho.',
    itens: [
      { tipo: 'disc', enunciado: 'Escolha uma grande questão (ex.: Deus existe? O que é a verdade? Existe liberdade humana? Fé e razão podem entrar em contradição? O que caracteriza uma sociedade justa?) e escreva o ensaio final.',
        criterios: ['1. Formulação clara da pergunta', '2. Definição dos conceitos', '3. Contexto histórico', '4. Estudo de fontes primárias identificadas', '5. Reconstrução de pelo menos três argumentos', '6. Objeções relevantes', '7. Comparação entre autores', '8. Conclusão pessoal fundamentada', '9. Bibliografia verificável',
          'Avançado: dialoga com ao menos três estudos acadêmicos recentes sobre a questão', 'Avançado: lê ao menos uma fonte com os termos-chave no original (grego ou latim)', 'Avançado: apresenta a objeção mais forte na versão do melhor adversário (steelman) e responde a ela', 'Avançado: o texto foi submetido a uma arguição (oral ou escrita) e revisado depois dela'] },
    ],
  },
];

const QUESTOES_POR_AULA = 2;

/**
 * Prova de cada módulo: duas questões objetivas de cada aula de conteúdo (as primeiras do questionário,
 * para revisitar o essencial), mais as discursivas de síntese escritas na aula de avaliação.
 * Itens escritos à mão para o módulo (ESTATICAS com o mesmo id) entram primeiro.
 */
function provaDoModulo(m) {
  const av = aulaPorId[m.aulas[m.aulas.length - 1].id];
  if (av?.tipo !== 'avaliacao' || av.prova !== `prova-${m.id}`) return null;
  const extra = ESTATICAS.find((e) => e.id === av.prova);
  const conteudo = m.aulas.map((a) => aulaPorId[a.id]).filter((a) => a && a.tipo !== 'avaliacao');
  // cada questão guarda a aula de origem: um erro indica o que revisar
  const auto = conteudo.flatMap((a) => a.exercicios.filter((e) => e.tipo === 'mc').slice(0, QUESTOES_POR_AULA).map((e) => ({ ...e, aula: a.id })));
  return {
    id: av.prova, titulo: `Prova do Módulo ${m.n}: ${m.titulo}`, tipo: 'prova', modulo: m.id, minimo: NOTA_MINIMA,
    descricao: `${conteudo.length} aulas cobertas: questões objetivas de cada aula e questões discursivas de síntese.`,
    itens: [...(extra?.itens.filter((i) => i.tipo !== 'disc') || []), ...auto, ...(extra?.itens.filter((i) => i.tipo === 'disc') || []), ...av.discursivas],
  };
}

const PROVAS = MODULOS.map(provaDoModulo).filter(Boolean);
export const AVALIACOES = [...PROVAS, ...ESTATICAS.filter((e) => !PROVAS.some((p) => p.id === e.id))];
export const avaliacaoPorId = Object.fromEntries(AVALIACOES.map((a) => [a.id, a]));
