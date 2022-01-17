const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Saved extends BaseModel {
  static get tableName() {
    return 'saved'
  }

  static get relationMappings() {
    const User = require('./User')
    const Book = require('./Book')

    return {
      saved_user: {
        relation: HasManyRelation,
        modelClass: User,
        join: {
          from: 'saved.userID',
          to: 'users.id',
        },
      },
      saved_books: {
        relations: HasManyRelation,
        modelClass: Book,
        join: {
          from: 'saved.bookID',
          to: 'books.API_id',
        }
      },
    }
  }
}

module.exports = Saved
