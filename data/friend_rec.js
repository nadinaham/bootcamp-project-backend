const casual = require('casual')
const userData = require('./user')
const bookData = require('./books')

casual.define('friend_rec', (userID1, userID2, bookID) => ({
  id: casual.uuid,
  senderID: userID1,
  recipientID: userID2,
  bookID,
  comment: casual.description,
}))

const friendRecData = []

for (let i = 0; i < 20; ++i) {
  const userID1 = casual.random_element(userData).id
  let userID2 = casual.random_element(userData).id
  while (userID2 === userID1)
  {
    userID2 = casual.random_element(userData).id
  }
  const bookID = casual.random_element(bookData).API_id
  friendRecData.push(casual.friend_rec(userID1, userID2, bookID))
}

module.exports = friendRecData
