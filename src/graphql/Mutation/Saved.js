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

const deleteBookfromSaved = async (obj, { input }, context) => {
  try {
    return Saved.query().delete().where('userID', input.userID).where('bookID', input.bookID)
  } catch (e) {
    throw new Error('Failed to delete Saved Book')
  }
}

const resolver = {
  Mutation: {
    addBooktoSaved,
    deleteBookfromSaved,
  },
}

module.exports = resolver
