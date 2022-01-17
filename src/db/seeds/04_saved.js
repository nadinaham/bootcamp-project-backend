const savedData = require('../../../data/saved')


exports.seed = knex => knex('saved').del()
  .then(() => knex('saved').insert(savedData))
