const followingData = require('../../../data/following')


exports.seed = knex => knex('following').del()
  .then(() => knex('following').insert(followingData))
