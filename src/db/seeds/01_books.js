const bookData = require('../../../data/books')

exports.seed = knex => knex('books').del()
  .then(() => knex('books').insert(bookData))
