// Gerado por ferramentas/publicar-site.mjs do projeto privado da Academia Católica Infantil. Não edite à mão.
// Cada aula tem dois PDFs; os caminhos são relativos a app/index.html.
export const AULAS_INFANTIL = [
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
