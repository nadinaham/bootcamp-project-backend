const casual = require('casual')
const userData = require('./user')

casual.define('follow', (userID1, userID2) => ({
  id: casual.uuid,
  followedUserID: userID1,
  followingUserID: userID2,
}))

const followingData = []

for (let i = 0; i < 20; ++i) {
  const userID1 = casual.random_element(userData).id
  let userID2 = casual.random_element(userData).id
  while (userID2 === userID1) {
    userID2 = casual.random_element(userData).id
  }
  followingData.push(casual.follow(userID1, userID2))
}

module.exports = followingData
