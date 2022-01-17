const User = require('../../models/User')

const addUser = async (obj, { input }, context) => {
  try 
  {
    return User.query().insert({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: input.password,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add User')
  }
}

const resolver = {
  Mutation: { 
    addUser,
  }
}

module.exports = resolver
