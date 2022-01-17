const casual = require('casual')
const userData = require('./user')
const bookData = require('./books')

casual.define('saved', (userID, bookID) => ({
  id: casual.uuid,
  userID,
  bookID,
}))

const savedData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  const bookID = casual.random_element(bookData).API_id
  savedData.push(casual.saved(userID, bookID))
}

module.exports = savedData
