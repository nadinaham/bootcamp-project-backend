const Read = require('../../models/Read')

const addBooktoRead = async (obj, { input }, context) => {
  try 
  {
    const a = await Read.query().insert({
      userID: input.userID,
      bookID: input.bookID,
      title: input.title,
      author: input.author,
    })
    return a
  } 
  catch (e)
  {
    throw new Error('Failed to add Read Book')
  }
}

const addDislikedBooktoRead = async (obj, { input }, context) => {
  try 
  {
    return Read.query().insert({
      userID: input.userID,
      bookID: input.bookID,
      title: input.title,
      author: input.author,
      liked: false,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Disliked Book')
  }
}

const deleteBookfromRead = async (obj, { input }, context) => {
  try {
    await Read.query().delete().where('userID', input.userID).where('bookID', input.bookID)
    return true
  } catch (e) {
    throw new Error('Failed to delete Read Book')
  }
}

const resolver = {
  Mutation: {
    addBooktoRead,
    addDislikedBooktoRead,
    deleteBookfromRead,
  },
}

module.exports = resolver
