# Arquitetura dos dois projetos

Estado real em 12/11/2026. A separação de públicos está em `ARQUITETURA_PUBLICOS.md`; este arquivo trata do que os dois sites têm em comum e do contrato entre eles.

## O que existe

| | Academia da Verdade | Academia da Verdade Jr. |
|---|---|---|
| Repositório | `Leonardoxal/leonardoxal.github.io` | `Leonardoxal/academia-para-verdade-jr` |
| Endereço | `https://leonardoxal.github.io/` | `https://leonardoxal.github.io/academia-para-verdade-jr/` |
| Forma | site estático (JavaScript puro, sem etapa de build), publicado pelo GitHub Pages depois dos testes | igual |
| Conteúdo | arquivos em `app/data/` | `app/infantil/`; aulas em PDF geradas por um projeto privado |
| Estado no aparelho | IndexedDB (`store.js`) | IndexedDB `aci-tarefas` e `localStorage` `aci-*` |
| Nuvem | Supabase, tabela `progresso` (uma linha por usuário e parte) | mesmo projeto Supabase, tabelas `aci_*` e pasta privada `aci-tarefas` |
| Acesso | cada usuário vê só as próprias linhas | quem entrou na família com o código vê tudo da família |
| IA | nenhuma | nenhuma chamada; o site só monta texto para o adulto levar a uma IA externa |

Os dois sites estão na mesma origem (`leonardoxal.github.io`), então a sessão de login e o armazenamento do aparelho são compartilhados. Não há servidor próprio nem custo de IA.

## Limites conhecidos

- **Uma família só.** As tabelas `aci_*` não têm coluna de família. `aci_na_familia()` responde sim ou não. Uma segunda família enxergaria os dados da primeira.
- **Habilidade ligada por nome.** `aci_registro.habilidade` é texto. O mapa (`habilidades.js`) casa pelo nome, sem acento nem maiúscula. Renomear uma habilidade do mapa desliga os registros antigos: para corrigir um nome, mantenha o antigo como sinônimo ou migre os registros.
- **Aula sem habilidade.** `aulas.js` não diz que habilidades cada aula trabalha.
- **Adulto sem habilidades.** O estado da Academia registra conclusão de aula, nota e leitura, não habilidade.

## Modelo comum

```
Pessoa → percurso → disciplina → habilidade → conteúdo → atividade → avaliação → domínio → progressão
```

| Conceito | No Jr. hoje | Na Academia hoje |
|---|---|---|
| Pessoa | `aci_filho` (código `f1`, `f2`…) | usuário do Supabase |
| Percurso | trilha (`TRILHAS`) | escada de degraus e semestres |
| Disciplina | área (`AREAS`) | disciplina |
| Habilidade | `HABILIDADES` (uma trilha) | não existe; o mais próximo são as competências do degrau |
| Conteúdo | aula em PDF, livro, ficha de mídia | aula, livro, obra |
| Atividade | caderno da aula, jogo | exercícios da aula, discursivas |
| Avaliação | texto para IA e conferência do responsável | prova objetiva; discursiva por autoavaliação |
| Domínio | `estadoDaHabilidade` | nota mínima de 80% |
| Progressão | `proximasHabilidades` | `proximaAtividade`, `degrauConcluivel` |

## Contrato de dados proposto

Ainda não implementado nos dois lados. Serve para que qualquer peça nova nasça compatível.

- **Identificadores**: texto em minúsculas, com hífen, estável para sempre (`mat-quantos-3`). Prefixo pela área. Nunca reaproveitar um id.
- **Habilidade**: os campos de `PEDAGOGICAL_STANDARDS.md`.
- **Registro de aprendizagem**: `{ id, pessoa, habilidade, situacao, origem, evidencia, dificuldade, intervencao, reavaliar, criadoEm }`.
  - `situacao`: `nao-iniciado`, `em-desenvolvimento`, `parcial`, `dominado`, `revisar` (os valores já usados em `aci_registro`).
  - `origem`: `observacao`, `ia-conferida`, `confirmado`.
- **Permissões**: o registro de um menor pertence à família; o de um adulto, a ele. Nenhum dos dois é público.
- **Migração Jr. → Academia**: por exportação do adulto responsável (o backup do Jr. já sai em um arquivo), nunca por leitura automática entre tabelas.

## Decisão de arquitetura

Veredito atual: **dois sites independentes sobre o mesmo projeto Supabase, com contrato comum de habilidade e registro.** É o que já existe; falta só o contrato.

- Backend comum: adiar. Não há carga, equipe nem requisito que o justifique.
- Plataforma única com duas experiências: adiar. Juntaria código de públicos que hoje estão corretamente separados.

Rever quando houver uma segunda família ou um estudante passando do Jr. para a Academia.

## Mudanças de banco

Sempre por arquivo SQL versionado (`supabase.sql`, `supabase-infantil.sql`), aplicado pelo responsável. A separação por família é a próxima mudança prevista e precisa de: coluna de família em cada tabela `aci_*`, regra de acesso por família, e o caminho dos arquivos da pasta `aci-tarefas` começando pelo identificador da família.
