const casual = require('casual')
const userData = require('./user')

casual.define('read_book', ({ userID }) => ({
  id: casual.uuid,
  userID,
  bookID: casual.string,
  title: casual.string,
  author: casual.string,
  liked: casual.boolean,
}))

const readBookData = []
for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  readBookData.push(casual.read_book({ userID }))
}

module.exports = readBookData
