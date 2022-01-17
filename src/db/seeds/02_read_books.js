const readBookData = require('../../../data/read_books')


exports.seed = knex => knex('read_books').del()
  .then(() => knex('read_books').insert(readBookData))
