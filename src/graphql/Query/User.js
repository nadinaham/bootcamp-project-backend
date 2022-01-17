const User = require('../../models/User')

const users = async () => {
  try 
  {
    const user = await User.query()
    return user
  } 
  catch (e)
  {
    throw new Error('Failed to return Users')
  }
}

const user = async (obj, { id }, context) => {
  const user = await User.query().findOne('id', id)
  return user
}


const resolver = {
  Query: { 
    users,
    user,
   },
}

module.exports = resolver
