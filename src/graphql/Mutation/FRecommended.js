const FRecommended = require('../../models/FRecommended')

const addFriendRec = async (obj, { input }, context) => {
  try 
  {
    return FRecommended.query().insert({
      senderID: input.senderID,
      recipientID: input.recipientID,
      bookID: input.bookID,
      comment: input.comment,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Friend Recommendation')
  }
}

const resolver = {
  Mutation: { 
    addFriendRec,
  }
}

module.exports = resolver