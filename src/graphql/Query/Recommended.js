const Recommended = require('../../models/Recommended')

const rec_lists = async () => {
  try 
  {
    const rec_list = await Recommended.query()
    return rec_list
  } 
  catch (e)
  {
    throw new Error('Failed to return Recommended Books')
  }
}

const rec_list = async (obj, { id }, context) => {
  const rec_list = await Recommended.query().findOne('id', id)
  return rec_list
}


const resolver = {
  Query: { 
    rec_lists,
    rec_list,
   },
}

module.exports = resolver
