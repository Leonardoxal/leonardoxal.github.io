# RelatÃ³rio da evoluÃ§Ã£o da Academia (novembro de 2026)

RelatÃ³rio pedido na etapa 5 do plano de execuÃ§Ã£o: o que se encontrou, o que se aproveitou, o que se fez, o que mudou no banco, como foi testado e o que ainda falta. Foram 17 entregas, uma por commit, e cada uma sÃ³ Ã© publicada depois de o responsÃ¡vel confirmar. Este documento nÃ£o substitui o `RELATORIO_FINAL.md`, que trata de uma etapa anterior.

## 1. O que a auditoria encontrou

- O site Ã© um app em JavaScript puro, com roteador por Ã¢ncora (`app/app.js`), dados em `app/data/` e telas em `app/views/`.
- **FormaÃ§Ã£o adulta:** curso por degraus, 25 disciplinas com 25 aulas cada, avaliaÃ§Ãµes, caderno, biblioteca de 607 livros e mediateca. O progresso fica na tabela `progresso`, uma linha por membro e parte, com RLS por `user_id`.
- **FormaÃ§Ã£o infantil:** aulas em PDF geradas no projeto privado, anexos de tarefas, "aula feita" e observaÃ§Ãµes por filho. Os dados ficam nas tabelas `aci_*`, que sÃ³ a famÃ­lia lÃª e grava (RLS por `aci_na_familia()`).
- **O que faltava:** personalizaÃ§Ã£o, histÃ³rico e recordes dos jogos, registro de domÃ­nio por habilidade, filmes e sÃ©ries, biblioteca pessoal, idiomas e mÃ©todo por formato.

## 2. O que jÃ¡ existia e foi aproveitado

- O sistema de aulas infantis: nÃ£o foi criado um segundo gerador de atividades.
- O cadastro de filhos, o cÃ³digo da famÃ­lia e o armazenamento no aparelho ou na nuvem, que foram sÃ³ ampliados.
- Os jogos e o leitor de PDF.
- No curso adulto: o registro de leitura, a comprovaÃ§Ã£o para concluir, as notas e as revisÃµes espaÃ§adas.
- A identidade visual: vitral, iluminura e a paleta. NÃ£o houve redesenho.

## 3. O que foi implementado

**FormaÃ§Ã£o infantil**

- Interesses por filho. Eles mudam as figuras dos jogos, mas nÃ£o o objetivo.
- 15 jogos com nÃ­veis adaptativos, cada um com idade indicativa:
  - matemÃ¡tica: Quantos sÃ£o?, Que nÃºmero Ã©? e CÃ¡lculo de cabeÃ§a (atÃ© a equaÃ§Ã£o do 1Âº grau);
  - raciocÃ­nio: O que vem depois?;
  - linguagem e leitura: Ouvir e achar (com inglÃªs), O que combina?, Que sÃ­laba falta? e Ler e entender;
  - espanhol: Escuchar y encontrar;
  - ciÃªncias e geografia: Onde vive? e Onde fica?;
  - histÃ³ria: O que veio primeiro?;
  - formaÃ§Ã£o moral: O que vocÃª faria?;
  - mÃºsica: Agudo ou grave?;
  - estratÃ©gia: A melhor jogada.
- Desenho livre, sem placar, e 13 brincadeiras fora da tela filtradas pela idade.
- Para cada partida: histÃ³rico, recorde pessoal, desafios por marcos de nÃ­vel e observaÃ§Ã£o do adulto. HÃ¡ jogos sugeridos por reforÃ§o, novidade ou revisÃ£o. O nÃ­vel acompanha a crianÃ§a entre aparelhos. NÃ£o hÃ¡ ranking entre irmÃ£os.
- Texto para IA externa, anÃ´nimo ("Aluno A"), para analisar a tarefa. Outro texto monta o ciclo de reforÃ§o de uma habilidade e um terceiro prepara a conversa ao fim de um arco de sÃ©rie.
- Registro do que foi confirmado por habilidade. Ele separa observaÃ§Ã£o, sugestÃ£o da IA conferida e resultado confirmado, e tem situaÃ§Ã£o e data de reavaliaÃ§Ã£o.
- Painel de habilidades, cartÃ£o "Continuar" (aula, livro, jogos, sÃ©ries) e um guia por etapa, dos 2 aos 15 anos, com o caminho acadÃªmico a partir dos 9.
- Filmes, sÃ©ries e animaÃ§Ãµes: 67 fichas pedagÃ³gicas e acompanhamento de episÃ³dios. Cada ficha diz o que foi conferido em fonte; o que nÃ£o pÃ´de ser conferido ficou de fora. A estrutura de episÃ³dios Ã© informada pela famÃ­lia e a tela nÃ£o traz resumo da histÃ³ria.

**FormaÃ§Ã£o adulta**

- Biblioteca pessoal: obras e ediÃ§Ãµes que sÃ³ o membro vÃª.
- Ficha de estudo por obra, com campos que mudam conforme o formato e as distinÃ§Ãµes exigidas (o que o autor declarou, o que estÃ¡ na obra, interpretaÃ§Ã£o acadÃªmica, interpretaÃ§Ã£o do membro e hipÃ³teses).
- MÃ©todo de estudo por formato na mediateca.
- Lista de possÃ­veis duplicatas para revisÃ£o humana.
- Aba Idiomas: latim e grego com foco em leitura; lÃ­nguas modernas pelos nÃ­veis A1 a C2 do Quadro Europeu.

**Documentos:** `ARQUITETURA_PUBLICOS.md` (separaÃ§Ã£o dos pÃºblicos) e `FUNDAMENTOS_PEDAGOGICOS.md` (evidÃªncias, com a forÃ§a de cada uma).

## 4. O que mudou no banco de dados

Todas as migraÃ§Ãµes foram aditivas; nenhuma linha foi apagada ou alterada.

- `aci_filho.interesses`, nova coluna.
- `aci_jogo`, nova tabela de partidas, e depois a coluna `obs` nela.
- `aci_registro`, nova tabela do domÃ­nio por habilidade.
- `aci_serie`, nova tabela do acompanhamento de sÃ©ries.
- `progresso`: a regra da coluna `parte` passou a aceitar tambÃ©m `'fichas'`.

As tabelas `aci_*` novas seguem a mesma regra da famÃ­lia. Os scripts `supabase.sql` e `supabase-infantil.sql` foram atualizados igual.

## 5. Funcionalidades preservadas

Continuam funcionando, e os testes antigos continuam passando:

- curso, avaliaÃ§Ãµes, caderno, revisÃµes, plano, mapa e atlas;
- biblioteca, leitor e mediateca;
- aulas infantis, anexos e backup da famÃ­lia.

Os backups antigos continuam abrindo.

## 6. Testes executados

- `node --test app/tests/core.test.mjs app/tests/infantil.test.mjs`: 100 testes passando. Eles cobrem, entre outros pontos:
  - as respostas certas de todos os jogos em todos os nÃ­veis;
  - o saneamento do estado vindo de backup ou da conta;
  - a sincronizaÃ§Ã£o simulada com a nuvem;
  - a validaÃ§Ã£o dos registros e das sÃ©ries;
  - a parte `fichas` do progresso.
- ConferÃªncia no navegador em cada entrega: computador e celular (375 px), sem erro no console. Os dados de teste foram apagados depois.
- Cada publicaÃ§Ã£o foi acompanhada no GitHub Actions atÃ© o fim.

## 7. Problemas que ainda existem

- O nÃ­vel dos jogos acompanha a crianÃ§a entre aparelhos quando a famÃ­lia usa o cÃ³digo da nuvem: cada partida sobe com o nÃ­vel final, e ao abrir o jogo vale o mais recente entre o nÃ­vel do aparelho e a Ãºltima partida da famÃ­lia (`nivelAtual` em `app/infantil/historico.js`). A partida em andamento Ã© gravada a cada 10 segundos, ao esconder a aba e ao sair do jogo; se o navegador for fechado Ã  forÃ§a, as respostas dos Ãºltimos segundos podem nÃ£o subir. Sem o cÃ³digo da famÃ­lia, tudo fica sÃ³ no aparelho.
- Os sons de "Agudo ou grave?" dependem do navegador e sÃ³ tocam depois de um toque na tela. NÃ£o foram testados com fone ou caixa de som.
- A lista de possÃ­veis duplicatas tem 191 grupos e precisa de uma pessoa para decidir cada um.

## 8. O que depende de revisÃ£o profissional

- A sequÃªncia dos jogos, os critÃ©rios de domÃ­nio, o guia por etapa e os textos para IA, por pedagogo.
- As fichas de filmes e sÃ©ries: a idade Ã© da Academia, e a classificaÃ§Ã£o oficial (ClassInd) continua "a conferir", porque o portal pÃºblico de consulta do MinistÃ©rio da JustiÃ§a nÃ£o respondeu. Os fatos de enredo, as datas e o nÃºmero de episÃ³dios de Naruto e Fullmetal foram conferidos em fontes de referÃªncia em novembro de 2026. A leitura moral continua sendo interpretaÃ§Ã£o da Academia.
- As 27 capitais do jogo de geografia foram conferidas com listas de referÃªncia; vale uma Ãºltima olhada na lista do IBGE.
- Os textos de doutrina, revistos com o critÃ©rio do projeto.

## 9. LimitaÃ§Ãµes tÃ©cnicas

- O push para o GitHub Ã© feito pelo responsÃ¡vel, porque a permissÃ£o do assistente nÃ£o o permite.
- NÃ£o hÃ¡ servidor prÃ³prio: tudo roda no navegador com o Supabase. A IA Ã© externa e o site sÃ³ monta o texto.
- Aulas completas de idiomas e fichas preenchidas de cada obra adulta pedem conteÃºdo escrito por pessoas. Nada disso foi inventado.

## 10. Como a arquitetura permite separar os sites

Ver `ARQUITETURA_PUBLICOS.md`. Em resumo, o infantil tem:

- telas prÃ³prias: `infantil.js`, `jogos.js`, `assistir.js` e `desenho.js`;
- lÃ³gica prÃ³pria, em `app/infantil/`;
- tabelas prÃ³prias, as `aci_*`, que nÃ£o dependem de `progresso`.

Separar Ã© copiar essas pastas para outro app e tirar as rotas do menu adulto, sem migrar dados.
