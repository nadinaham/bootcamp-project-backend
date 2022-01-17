const currentlyReadData = require('../../../data/currently_reading')


exports.seed = knex => knex('currently_reading').del()
  .then(() => knex('currently_reading').insert(currentlyReadData))
