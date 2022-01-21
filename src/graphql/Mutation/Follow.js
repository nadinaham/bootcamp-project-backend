const Follow = require('../../models/Follow')

const addFollow = async (obj, { input }, context) => {
  try {
    return Follow.query().insert({
      followedUserID: input.followedUserID,
      followingUserID: input.followingUserID,
    })
  } catch (e) {
    throw new Error('Failed to add Following Pair')
  }
}

const deleteFollow = async (obj, { input }, context) => {
  try {
    return Follow.query().delete().where('followedUserID', input.followedUserID).where('followingUserID', input.followingUserID)
  } catch (e) {
    throw new Error('Failed to add Following Pair')
  }
}

const resolver = {
  Mutation: {
    addFollow,
    deleteFollow,
  },
}

module.exports = resolver
