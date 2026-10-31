# Auditoria técnica e pedagógica — Academia da Verdade

Data: 31/10/2026.

Os números abaixo vêm do script `scripts/auditoria.mjs`, que lê os dados reais do site e pode ser executado de novo a qualquer momento:

```
node scripts/auditoria.mjs
```

A interface foi conferida no navegador, no servidor local de desenvolvimento.

## 1. Os 607 livros

| Verificação | Resultado |
|---|---|
| Livros no catálogo | 607 |
| Ids originais (`app/tests/ids-originais.json`) presentes | 607 de 607 |
| Ids repetidos | 0 |
| Possíveis duplicatas (título normalizado + sobrenome do autor) | 0 |
| Livros com `verificacao` diferente de "confirmado" | 74 |
| Livros com questionário próprio | 69 |

Os 74 livros "a confirmar" têm dados de edição ou de existência que não puderam ser conferidos. Eles continuam no catálogo e não foram alterados. A conferência deve ser feita em catálogos de bibliotecas.

## 2. Edições e divergências

Não há registros duplicados por edição. A edição concreta de cada livro é registrada pelo próprio estudante, no campo `edicao` do progresso. Não há dois registros apontando para a mesma obra.

## 3. Degraus e pré-requisitos

Nenhum livro exige outro livro de degrau posterior, nem de ordem posterior no mesmo degrau.

Os ids de 11 módulos não coincidem com o número do degrau:

| Módulo | Degrau |
|---|---|
| m2 | 1 |
| m7 | 6 |
| m8 | 7 |
| m9 | 8 |
| m10 | 9 |
| m11 | 10 |
| m12 | 11 |
| m13, m14, m15 | 12 |
| m16 | 13 |

A divergência é intencional: a escada foi reorganizada duas vezes (v2 e v3), e os ids foram mantidos para não perder o progresso salvo (as migrações estão em `core.js`). Não há conflito funcional, porque toda a lógica usa o campo `degrau`, e não o id. O risco é só de leitura: um rótulo como "Módulo 8" pode confundir. A correção prevista é exibir o degrau junto do número do módulo, sem trocar ids.

## 4. Fase teológica

- A fase teológica corresponde aos degraus 0, 1 e 2 (`FASE_TEOLOGICA` em `core.js`).
- `bloqueadoPelaFase` impede que se **conclua** conteúdo do degrau 3 em diante enquanto a fase não termina.
- Os conteúdos futuros continuam **consultáveis**: as rotas abrem normalmente.
- As disciplinas regulares só registram progresso depois da fase (`views/disciplina.js`).

**Diagnóstico de conteúdo:** a fase tem 4 módulos e 27 aulas completas:

| Módulo | Conteúdo | Aulas |
|---|---|---|
| m0 | Método | 1 |
| m1 | Fundamentos | 12 |
| m2 | Bíblia e Igreja antiga | 7 |
| m2b | Patrística | 7 |

Ela tem também 65 livros. É pouco para uma formação teológica "principal e exclusiva".

| Área exigida | Cobertura atual | Situação |
|---|---|---|
| Sagrada Escritura | m1-3, m2-1 a m2-3 | parcial |
| Revelação e Tradição | m1-2, m1-3 | suficiente |
| Fé e razão | m1-2 (e m3-8, já fora da fase) | suficiente |
| Credo | m1-5 | suficiente |
| Trindade | m1-6 (indireto) e m2-5 | **insuficiente** |
| Cristologia | m1-7, m2-6 | parcial |
| Criação, pecado original, graça e salvação | uma única aula (m1-8) | **insuficiente** |
| Igreja | m1-9 (junto com sacramentos) | **insuficiente** |
| Sacramentos | m1-9 | **insuficiente** |
| Teologia moral | m1-10 | **insuficiente** |
| Espiritualidade | — | **ausente** |
| Escatologia | m1-10 (vida eterna) | **insuficiente** |
| Patrística | m2b | suficiente |
| Escolástica teológica | só no degrau 7 (filosofia) | **ausente na fase** |
| Doutrina social da Igreja | — | **ausente na fase** |
| História da Igreja | só a Igreja antiga (m2-4 a m2-6) | **insuficiente** |
| Ferramentas de estudo (fichamento, resumo crítico, citação, fontes) | m0 tem uma aula | **insuficiente** |

## 5. Introdução à Filosofia e metodologia intelectual

- m3 (degrau 3) e m4 (degrau 4) cobrem a introdução à filosofia e a lógica.
- As disciplinas regulares são liberadas logo após a fase teológica. Assim, não existe hoje uma **fase 2 de iniciação intelectual** exigida antes da formação multidisciplinar.
- A introdução à história da filosofia aparece só como uma aula (m3-9).

## 6. Disciplinas

São 25 disciplinas, todas com percurso de 11 etapas, bibliografia, 5 módulos e 25 aulas completas. A exceção é Simbologia: trilha própria de 12 módulos e 15 aulas. Nenhuma aula citada está sem conteúdo.

Limites conhecidos:
- Datas, números de leis e parágrafos de documentos foram escritos de memória e não verificados (lista em `RELATORIO-IA.md`).
- Filosofia não é uma "disciplina" no mesmo formato: ela é a própria escada (degraus 3 a 13).

## 7. Avaliações e critério de aprovação

- `NOTA_MINIMA = 80`, aplicada a 147 das 149 avaliações.
- Duas avaliações têm mínimo 0:
  - `comparacao-1` é um trabalho só discursivo;
  - `final` é o projeto de conclusão, avaliado por rubrica.
- Exceção justificada: não há nota objetiva a medir, e o domínio é verificado pelos critérios discursivos. Fica documentada aqui.
- Discursivas são marcadas como cumpridas pelos próprios critérios de autoavaliação do estudante. Esse é um limite: não há correção humana.

## 8. Persistência do progresso

O estado é salvo no aparelho (IndexedDB) e, se o estudante entrar com conta, também no Supabase (`store.js`, `nuvem.js`). `normalizarEstado` migra versões antigas (v1, v2 e v3) sem apagar dados, e os testes cobrem essas migrações.

Qualquer novo campo deve entrar em `estadoInicial` e ser tolerado por `normalizarEstado`.

## 9. Mapa do conhecimento

São 73 nós. Nenhum aponta para livro, módulo ou aula inexistente, e nenhum ficou em situação "planejada" (`P(`).

## 10. Biblioteca e ferramentas

- A biblioteca tem só livros (607). Não há registros de filmes, música, artes, documentos ou outras mídias: **a mediateca não existe**.
- A busca global (`#busca`) indexa aulas, livros, conceitos, autores, ideias, áreas, símbolos e disciplinas.

## 11. Santos

Há 20 santos cadastrados. Nenhuma referência aponta para santo inexistente.

## 12. Navegação, responsividade e erros

- Navegação: foram percorridas 28 rotas, sem nenhum erro de JavaScript no console.
- Celular (375 px): nas rotas painel, mapa, curso, biblioteca, plano, aula, livro, disciplina, ideias, avaliações e escada, a página não ganha rolagem horizontal. Tabelas, a linha do tempo e o mapa SVG rolam dentro dos próprios contêineres.

## 13. Controles que aparentam funcionar

Nenhum erro foi encontrado nas rotas percorridas. A verificação de cada botão, um a um, fica para a fase 9 (testes funcionais), com registro em `RELATORIO_TESTES.md`.

## 14. Ids e consistência

Não há ids repetidos em livros nem em aulas (801 aulas completas). Todos os módulos, avaliações e conceitos têm id único.

## Conclusão

A integridade dos dados está boa.

As lacunas reais são pedagógicas:
1. a fase teológica é curta demais para ser a "formação principal";
2. falta uma fase de iniciação intelectual entre a teologia e as disciplinas;
3. não há calendário por períodos letivos nem carga semanal;
4. não há módulos integradores;
5. não há mediateca.

O plano para cada lacuna está em `PLANO_EXECUCAO.md`.
