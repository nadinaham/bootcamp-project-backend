const casual = require('casual')
const userData = require('./user')

casual.define('saved', userID => ({
  id: casual.uuid,
  userID,
  bookID: casual.string,
  title: casual.string,
  author: casual.string,
}))

const savedData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  savedData.push(casual.saved(userID))
}

module.exports = savedData
