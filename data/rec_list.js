const casual = require('casual')
const userData = require('./user')

casual.define('rec_list', userID => ({
  id: casual.uuid,
  userID,
  bookID: casual.string,
  title: casual.string,
  author: casual.string,
}))

const recListData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  recListData.push(casual.rec_list(userID))
}

module.exports = recListData
