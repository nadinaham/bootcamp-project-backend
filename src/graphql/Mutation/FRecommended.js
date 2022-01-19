const FRecommended = require('../../models/FRecommended')

const addFriendRec = async (obj, { input }, context) => {
  try 
  {
    return FRecommended.query().insert({
      senderID: input.senderID,
      recipientID: input.recipientID,
      bookID: input.bookID,
      title: input.title,
      author: input.author,
      comment: input.comment,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Friend Recommendation')
  }
}

const deleteFriendRec = async (obj, { id }, context) => {
  try {
    return FRecommended.query().delete().where('id', id)
  } catch (e) {
    throw new Error('Failed to delete Friend Rec')
  }
}

const resolver = {
  Mutation: {
    addFriendRec,
    deleteFriendRec,
  },
}

module.exports = resolver
