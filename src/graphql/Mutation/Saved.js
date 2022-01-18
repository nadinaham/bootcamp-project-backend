const Saved = require('../../models/Saved')

const addBooktoSaved = async (obj, { input }, context) => {
  try 
  {
    return Saved.query().insert({
      userID: input.userID,
      bookID: input.bookID,
      title: input.title,
      author: input.author,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Saved Book')
  }
}

const resolver = {
  Mutation: { 
    addBooktoSaved,
  }
}

module.exports = resolver