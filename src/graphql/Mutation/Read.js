const Read = require('../../models/Read')

const addBooktoRead = async (obj, { input }, context) => {
  try 
  {
    return Read.query().insert({
      userID: input.userID,
      bookID: input.bookID,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Read Book')
  }
}

const resolver = {
  Mutation: { 
    addBooktoRead,
  }
}

module.exports = resolver