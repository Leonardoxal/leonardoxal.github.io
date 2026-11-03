// Gerado por ferramentas/publicar-site.mjs do projeto privado da Academia Católica Infantil. Não edite à mão.
// Cada aula tem dois PDFs; os caminhos são relativos a app/index.html.
export const AULAS_INFANTIL = [
  {
    "data": "2026-11-04-f2",
    "titulo": "Deus fez a luz e Deus fez você",
    "tema": "Gênesis 1,3-5",
    "virtude": "Confiança",
    "icone": "estrela",
    "perfil": "menino",
    "filho": "f2",
    "para": "Filho 2",
    "resumo": "Para o bebê de 2 meses: cartões de alto contraste (sol, lua, estrelas, cruz, rosto), voz, canto, luz do dia e a bênção dos pais. Sem exercícios.",
    "arquivos": {
      "aluna": "infantil/aulas/2026-11-04-f2/ACI_2026-11-04-f2_ALUNA.pdf",
      "responsavel": "infantil/aulas/2026-11-04-f2/ACI_2026-11-04-f2_RESPONSAVEL.pdf"
    },
    "paginas": {
      "aluna": 9,
      "responsavel": 11
    }
  },
  {
    "data": "2026-11-04",
    "titulo": "Deus fez a luz, o dia e a noite",
    "tema": "Gênesis 1,3-5 e 1,14-18",
    "virtude": "Confiança",
    "icone": "sol",
    "perfil": "menina",
    "filho": "f1",
    "para": "Filha 1",
    "resumo": "A luz, o dia e a noite; o sol, a lua e as estrelas. Contar até 3, palavras em inglês (sun, moon, star) e a oração da noite.",
    "arquivos": {
      "aluna": "infantil/aulas/2026-11-04/ACI_2026-11-04_ALUNA.pdf",
      "responsavel": "infantil/aulas/2026-11-04/ACI_2026-11-04_RESPONSAVEL.pdf"
    },
    "paginas": {
      "aluna": 11,
      "responsavel": 12
    }
  },
  {
    "data": "2026-11-03",
    "titulo": "Deus fez os animais",
    "tema": "Gênesis 1,20-25",
    "virtude": "Gratidão",
    "icone": "peixe",
    "perfil": "menina",
    "filho": "f1",
    "para": "Filha 1",
    "resumo": "Os peixes, os pássaros e os animais da terra. Contar até 3, palavras em inglês, onde cada animal vive e o Sinal da Cruz.",
    "arquivos": {
      "aluna": "infantil/aulas/2026-11-03/ACI_2026-11-03_ALUNA.pdf",
      "responsavel": "infantil/aulas/2026-11-03/ACI_2026-11-03_RESPONSAVEL.pdf"
    },
    "paginas": {
      "aluna": 11,
      "responsavel": 12
    }
  }
];

export const aulaInfantilPorData = (data) => AULAS_INFANTIL.find((a) => a.data === data);
