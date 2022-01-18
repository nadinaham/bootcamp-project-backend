const casual = require('casual')
const userData = require('./user')

casual.define('currently_reading', userID => ({
  id: casual.uuid,
  userID,
  bookID: casual.string,
  title: casual.string,
  author: casual.string,
}))

const currentlyReadData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  currentlyReadData.push(casual.currently_reading(userID))
}

module.exports = currentlyReadData
