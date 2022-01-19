const CReading = require('../../models/CReading')

const addCurrReading = async (obj, { input }, context) => {
  try 
  {
    return CReading.query().insert({
      userID: input.userID,
      bookID: input.bookID,
      title: input.title,
      author: input.author,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Currently Reading')
  }
}

const deleteCurrReading = async (obj, { input }, context) => {
  try {
    return CReading.query().delete().where('userID', input.userID).where('bookID', input.bookID)
  } catch (e) {
    throw new Error('Failed to delete Current Book')
  }
}

const resolver = {
  Mutation: {
    addCurrReading,
    deleteCurrReading,
  },
}

module.exports = resolver
