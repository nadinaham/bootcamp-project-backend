const Recommended = require('../../models/Recommended')

const rec_lists = async () => {
  try {
    const recLists = await Recommended.query()
    return recLists
  } catch (e) {
    throw new Error('Failed to return Recommended Books')
  }
}

const rec_list = async (obj, { id }, context) => {
  const recList = await Recommended.query().findOne('id', id)
  return recList
}

const rec_listByUser = async (obj, { userID }, context) => {
  const recListByUser = await Recommended.query().where('userID', userID)
  return recListByUser
}

const resolver = {
  Query: {
    rec_lists,
    rec_list,
    rec_listByUser,
  },
}

module.exports = resolver
