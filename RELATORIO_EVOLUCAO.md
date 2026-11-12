# Relatório da evolução da Academia (novembro de 2026)

Relatório pedido na etapa 5 do plano de execução: o que se encontrou, o que se aproveitou, o que se fez, o que mudou no banco, como foi testado e o que ainda falta. Foram 17 entregas, uma por commit, e cada uma só é publicada depois de o responsável confirmar. Este documento não substitui o `RELATORIO_FINAL.md`, que trata de uma etapa anterior.

## 1. O que a auditoria encontrou

- O site é um app em JavaScript puro, com roteador por âncora (`app/app.js`), dados em `app/data/` e telas em `app/views/`.
- **Formação adulta:** curso por degraus, 25 disciplinas com 25 aulas cada, avaliações, caderno, biblioteca de 607 livros e mediateca. O progresso fica na tabela `progresso`, uma linha por membro e parte, com RLS por `user_id`.
- **Formação infantil:** aulas em PDF geradas no projeto privado, anexos de tarefas, "aula feita" e observações por filho. Os dados ficam nas tabelas `aci_*`, que só a família lê e grava (RLS por `aci_na_familia()`).
- **O que faltava:** personalização, histórico e recordes dos jogos, registro de domínio por habilidade, filmes e séries, biblioteca pessoal, idiomas e método por formato.

## 2. O que já existia e foi aproveitado

- O sistema de aulas infantis: não foi criado um segundo gerador de atividades.
- O cadastro de filhos, o código da família e o armazenamento no aparelho ou na nuvem, que foram só ampliados.
- Os jogos e o leitor de PDF.
- No curso adulto: o registro de leitura, a comprovação para concluir, as notas e as revisões espaçadas.
- A identidade visual: vitral, iluminura e a paleta. Não houve redesenho.

## 3. O que foi implementado

**Formação infantil**

- Interesses por filho. Eles mudam as figuras dos jogos, mas não o objetivo.
- 15 jogos com níveis adaptativos, cada um com idade indicativa:
  - matemática: Quantos são?, Que número é? e Cálculo de cabeça (até a equação do 1º grau);
  - raciocínio: O que vem depois?;
  - linguagem e leitura: Ouvir e achar (com inglês), O que combina?, Que sílaba falta? e Ler e entender;
  - espanhol: Escuchar y encontrar;
  - ciências e geografia: Onde vive? e Onde fica?;
  - história: O que veio primeiro?;
  - formação moral: O que você faria?;
  - música: Agudo ou grave?;
  - estratégia: A melhor jogada.
- Desenho livre, sem placar, e 13 brincadeiras fora da tela filtradas pela idade.
- Para cada partida: histórico, recorde pessoal, desafios por marcos de nível e observação do adulto. Há jogos sugeridos por reforço, novidade ou revisão. O nível acompanha a criança entre aparelhos. Não há ranking entre irmãos.
- Texto para IA externa, anônimo ("Aluno A"), para analisar a tarefa. Outro texto monta o ciclo de reforço de uma habilidade e um terceiro prepara a conversa ao fim de um arco de série.
- Registro do que foi confirmado por habilidade. Ele separa observação, sugestão da IA conferida e resultado confirmado, e tem situação e data de reavaliação.
- Painel de habilidades, cartão "Continuar" (aula, livro, jogos, séries) e um guia por etapa, dos 2 aos 15 anos, com o caminho acadêmico a partir dos 9.
- Biblioteca da família: 30 livros por ano de idade dos 4 aos 15 anos (360 livros) e, à parte, 37 histórias em quadrinhos e mangás marcados pelo formato, todos escolhidos pelo valor formativo. Os livros que o curso da Verdade já pede continuam fora (um teste confere).
- Filmes, séries e animações: 68 fichas pedagógicas e acompanhamento de episódios. Cada ficha diz o que foi conferido em fonte; o que não pôde ser conferido ficou de fora. O catálogo foi fechado em novembro de 2026: o critério é o valor formativo (virtude, fé, verdade, família), não a fama da obra, e por isso 12 animações que formavam pouco ou traziam religiosidade alheia apresentada como verdadeira foram retiradas. Obra nova só entra a pedido da família e pelo mesmo critério. A estrutura de episódios é informada pela família e a tela não traz resumo da história.

**Formação adulta**

- Biblioteca pessoal: obras e edições que só o membro vê.
- Ficha de estudo por obra, com campos que mudam conforme o formato e as distinções exigidas (o que o autor declarou, o que está na obra, interpretação acadêmica, interpretação do membro e hipóteses).
- Método de estudo por formato na mediateca.
- Lista de possíveis duplicatas para revisão humana.
- Aba Idiomas: latim e grego com foco em leitura; línguas modernas pelos níveis A1 a C2 do Quadro Europeu.

**Documentos:** `ARQUITETURA_PUBLICOS.md` (separação dos públicos) e `FUNDAMENTOS_PEDAGOGICOS.md` (evidências, com a força de cada uma).

## 4. O que mudou no banco de dados

Todas as migrações foram aditivas; nenhuma linha foi apagada ou alterada.

- `aci_filho.interesses`, nova coluna.
- `aci_jogo`, nova tabela de partidas, e depois a coluna `obs` nela.
- `aci_registro`, nova tabela do domínio por habilidade.
- `aci_serie`, nova tabela do acompanhamento de séries.
- `progresso`: a regra da coluna `parte` passou a aceitar também `'fichas'`.

As tabelas `aci_*` novas seguem a mesma regra da família. Os scripts `supabase.sql` e `supabase-infantil.sql` foram atualizados igual.

## 5. Funcionalidades preservadas

Continuam funcionando, e os testes antigos continuam passando:

- curso, avaliações, caderno, revisões, plano, mapa e atlas;
- biblioteca, leitor e mediateca;
- aulas infantis, anexos e backup da família.

Os backups antigos continuam abrindo.

## 6. Testes executados

- `node --test app/tests/core.test.mjs app/tests/infantil.test.mjs`: 100 testes passando. Eles cobrem, entre outros pontos:
  - as respostas certas de todos os jogos em todos os níveis;
  - o saneamento do estado vindo de backup ou da conta;
  - a sincronização simulada com a nuvem;
  - a validação dos registros e das séries;
  - a parte `fichas` do progresso.
- Conferência no navegador em cada entrega: computador e celular (375 px), sem erro no console. Os dados de teste foram apagados depois.
- Cada publicação foi acompanhada no GitHub Actions até o fim.

## 7. Problemas que ainda existem

- O nível dos jogos acompanha a criança entre aparelhos quando a família usa o código da nuvem: cada partida sobe com o nível final, e ao abrir o jogo vale o mais recente entre o nível do aparelho e a última partida da família (`nivelAtual` em `app/infantil/historico.js`). A partida em andamento é gravada a cada 10 segundos, ao esconder a aba e ao sair do jogo; se o navegador for fechado à força, as respostas dos últimos segundos podem não subir. Sem o código da família, tudo fica só no aparelho.
- Os sons de "Agudo ou grave?" dependem do navegador e só tocam depois de um toque na tela. Não foram testados com fone ou caixa de som.
- A lista de possíveis duplicatas tem 191 grupos. Cada grupo agora traz uma sugestão automática, que compara os nomes dos autores: 87 parecem a mesma obra (juntar), 100 parecem obras diferentes de mesmo título (manter) e 4 misturam os dois casos. Juntar registros continua sendo decisão de uma pessoa; nada é fundido sozinho.

## 8. O que depende de revisão profissional

- A sequência dos jogos, os critérios de domínio, o guia por etapa e os textos para IA, por pedagogo.
- As fichas de filmes e séries: a idade é da Academia, e a classificação oficial (ClassInd) continua "a conferir", porque o portal público de consulta do Ministério da Justiça não respondeu. Os fatos de enredo, as datas e o número de episódios de Naruto e Fullmetal foram conferidos em fontes de referência em novembro de 2026. A leitura moral continua sendo interpretação da Academia.
- As 27 capitais do jogo de geografia foram conferidas com listas de referência; vale uma última olhada na lista do IBGE.
- Os textos de doutrina, revistos com o critério do projeto.

## 9. Limitações técnicas

- O push para o GitHub é feito pelo responsável, porque a permissão do assistente não o permite.
- Não há servidor próprio: tudo roda no navegador com o Supabase. A IA é externa e o site só monta o texto.
- A aba Idiomas tem agora 12 aulas de latim e 10 de grego antigo, que cobrem a meta "Leitura inicial" (declinações, verbos básicos, orações e trechos da Vulgata e do Novo Testamento, com respostas). Daí em diante o estudante segue com os cursos indicados nas referências; as línguas modernas continuam só com as metas do Quadro Europeu. As tabelas e traduções foram escritas pela Academia e merecem a revisão de um professor de línguas clássicas.
- As fichas de estudo das obras adultas são do próprio membro (o que ele leu e concluiu); por isso o site traz o formulário, não fichas prontas.

## 10. Como a arquitetura permite separar os sites

Ver `ARQUITETURA_PUBLICOS.md`. Em resumo, o infantil tem:

- telas próprias: `infantil.js`, `jogos.js`, `assistir.js` e `desenho.js`;
- lógica própria, em `app/infantil/`;
- tabelas próprias, as `aci_*`, que não dependem de `progresso`.

Separar é copiar essas pastas para outro app e tirar as rotas do menu adulto, sem migrar dados.
