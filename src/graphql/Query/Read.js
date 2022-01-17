const Read = require('../../models/Read')

const read_books = async () => {
  try 
  {
    const read = await Read.query()
    return read
  } 
  catch (e)
  {
    throw new Error('Failed to return Recommended Books')
  }
}

const read_book = async (obj, { id }, context) => {
  const read = await Read.query().findOne('id', id)
  return read
}


const resolver = {
  Query: { 
    read_books,
    read_book,
   },
}

module.exports = resolver
