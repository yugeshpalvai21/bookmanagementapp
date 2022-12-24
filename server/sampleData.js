const authors = [
  {
    id: '1122',
    name: 'author1',
    location: 'location1'
  },
  {
    id: '1133',
    name: 'author1',
    location: 'location1'
  },
  {
    id: '1144',
    name: 'author1',
    location: 'location1'
  }
];

const books = [
  {
    id: '1',
    title: 'Book1',
    genre: 'finance',
    authorId: '1122'
  },
  {
    id: '2',
    title: 'Book2',
    genre: 'science',
    authorId: '1133'
  },
  {
    id: '3',
    title: 'Book3',
    genre: 'social',
    authorId: '1144'
  },
  {
    id: '4',
    title: 'Book4',
    genre: 'computers',
    authorId: '1122'
  },
];

module.exports = { authors, books };