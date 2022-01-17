const friendRecData = require('../../../data/friend_rec')


exports.seed = knex => knex('friend_rec').del()
  .then(() => knex('friend_rec').insert(friendRecData))
