const Book = require('../../models/Book')

const addBook = async (obj, { input }, context) => {
  try 
  {
    return Book.query().insert({
      API_id: input.API_id,
      title: input.title,
      author: input.author,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Book')
  }
}

const resolver = {
  Mutation: { 
    addBook,
  }
}

module.exports = resolver

