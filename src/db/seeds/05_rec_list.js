const recListData = require('../../../data/rec_list')


exports.seed = knex => knex('rec_list').del()
  .then(() => knex('rec_list').insert(recListData))
