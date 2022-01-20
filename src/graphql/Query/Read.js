const Read = require('../../models/Read')

const read_books = async () => {
  try 
  {
    const read = await Read.query()
    return read
  } 
  catch (e)
  {
    throw new Error('Failed to return Read Books')
  }
}

const user_read_books = async (obj, { userID }, context) => {
  try {
    const read = await Read.query().where('userID', userID)
    return read
  } catch (e) {
    throw new Error('Failed to return Read Books')
  }
}

const user_liked_books = async (obj, { userID }, context) => {
  try {
    const read = await Read.query().where('userID', userID).where('liked', true)
    return read
  } catch (e) {
    throw new Error('Failed to return Liked Books')
  }
}

const user_disliked_books = async (obj, { userID }, context) => {
  try {
    const read = await Read.query().where('userID', userID).where('liked', false)
    return read
  } catch (e) {
    throw new Error('Failed to return Disliked Books')
  }
}

const read_book = async (obj, { id }, context) => {
  const read = await Read.query().findOne('id', id)
  return read
}

const resolver = {
  Query: {
    read_books,
    user_read_books,
    user_liked_books,
    user_disliked_books,
    read_book,
  },
}

module.exports = resolver
