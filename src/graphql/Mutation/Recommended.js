const Recommended = require('../../models/Recommended')

const addBooktoRecs = async (obj, { input }, context) => {
  try 
  {
    return Recommended.query().insert({
      userID: input.userID,
      bookID: input.bookID,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Recommended Book')
  }
}

const resolver = {
  Mutation: { 
    addBooktoRecs,
  }
}

module.exports = resolver