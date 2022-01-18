const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class FRecommended extends BaseModel {
  static get tableName() {
    return 'friend_rec'
  }

  static get relationMappings() {
    const User = require('./User')
    const Book = require('./Book')

    return {
      friendRecSent_user: {
        relation: HasManyRelation,
        modelClass: User,
        join: {
          from: 'friend_rec.senderID',
          to: 'users.id',
        },
      },
      friendRecReceived_user: {
        relation: HasManyRelation,
        modelClass: User,
        join: {
          from: 'friend_rec.recipientID',
          to: 'users.id',
        },
      },
      frec_books: {
        relations: HasManyRelation,
        modelClass: Book,
        join: {
          from: 'friend_rec.bookID',
          to: 'books.API_id',
        },
      },
    }
  }
}

module.exports = FRecommended
