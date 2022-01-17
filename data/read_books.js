const casual = require('casual')
const userData = require('./user')
const bookData = require('./books')

casual.define('read_book', (userID, bookID) => ({
  id: casual.uuid,
  userID,
  bookID,
  liked: casual.boolean,
}))


const readBookData = []
for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  const bookID = casual.random_element(bookData).API_id
  readBookData.push(casual.read_book(userID, bookID))
}

module.exports = readBookData
