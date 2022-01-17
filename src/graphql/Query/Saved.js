const Saved = require('../../models/Saved')

const saveds = async () => {
  try 
  {
    const saved_books = await Saved.query()
    return saved_books
  } 
  catch (e)
  {
    throw new Error('Failed to return Saved Books')
  }
}

const saved = async (obj, { id }, context) => {
  const saved_book = await Saved.query().findOne('id', id)
  return saved_book
}


const resolver = {
  Query: { 
    saveds,
    saved,
   },
}

module.exports = resolver
