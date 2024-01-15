console.log('03-array-filter-sort-map');

// Dado uma lista de estudantes, filtre os estudantes que nasceram em 2019 e que possuem ranking maior ou igual a 5.
// ordene o resultado pelo ranking, ascendente e descentente. (Dica: use as funções filter, sort e map)
const studentsArray = [
  { name: 'Suraj', year: 2019, ranking: 4 },
  { name: 'Amit', year: 2019, ranking: 5 },
  { name: 'Akash', year: 2018, ranking: 4 },
  { name: 'Dinanath', year: 2019, ranking: 7 },
  { name: 'Sagar', year: 2017, ranking: 3 },
]

console.log('Higest Rank Holders:',
  studentsArray
    .filter(student => student.year === 2019 && student.ranking >= 5)
    .sort((n1, n2) => n1.ranking - n2.ranking)
    .reverse()
    .map(student => student.name)
);