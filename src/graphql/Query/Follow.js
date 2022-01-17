const Follow = require('../../models/Follow')

const following = async () => {
  try 
  {
    const fol = await Follow.query()
    return fol
  } 
  catch (e)
  {
    throw new Error('Failed to return Friend Recommendations')
  }
}

const follow = async (obj, { id }, context) => {
  const fol = await Follow.query().findOne('id', id)
  return fol
}

const followsByFollower = async (obj, { followingUserID }, context) => {
  const fol = await Follow.query().where('followingUserID', followingUserID)
  return fol
}

const followsByFollowed = async (obj, { followedUserID }, context) => {
  const fol = await Follow.query().where('followedUserID', followedUserID)
  return fol
}

const resolver = {
  Query: { 
    following,
    follow,
    followsByFollower,
    followsByFollowed,
   },
}

module.exports = resolver
