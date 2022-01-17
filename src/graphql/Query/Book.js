const Book = require('../../models/Book')

const books = async () => {
  try 
  {
    const boo = await Book.query()
    return boo
  } 
  catch (e)
  {
    throw new Error('Failed to return Books')
  }
}

const book = async (obj, { id }, context) => {
  const boo = await Book.query().findOne('id', id)
  return boo
}


const resolver = {
  Query: { 
    books,
    book,
   },
}

module.exports = resolver
