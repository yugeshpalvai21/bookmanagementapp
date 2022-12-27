const AuthorTypeInject = require('./models/AuthorType');
const BookTypeInject = require('./models/BookType');

const types = {};
types.AuthorType = AuthorTypeInject(types);
types.BookType = BookTypeInject(types);

const AuthorType = types.AuthorType;
const BookType = types.BookType;

module.exports = { AuthorType, BookType };