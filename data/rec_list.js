const casual = require('casual')
const userData = require('./user')
const bookData = require('./books')

casual.define('rec_list', (userID, bookID) => ({
  id: casual.uuid,
  userID,
  bookID,
}))

const recListData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  const bookID = casual.random_element(bookData).API_id
  recListData.push(casual.rec_list(userID, bookID))
}

module.exports = recListData
