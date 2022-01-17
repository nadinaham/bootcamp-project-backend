const casual = require('casual')
const userData = require('./user')
const bookData = require('./books')

casual.define('currently_reading', (userID, bookID) => ({
  id: casual.uuid,
  userID,
  bookID,
}))

const currentlyReadData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  const bookID = casual.random_element(bookData).API_id
  currentlyReadData.push(casual.currently_reading(userID, bookID))
}

module.exports = currentlyReadData
