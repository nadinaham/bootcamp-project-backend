const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class CReading extends BaseModel {
  static get tableName() {
    return 'currently_reading'
  }

  static get relationMappings() {
    const User = require('./User')
    const Book = require('./Book')

    return {
      currentlyReading_user: {
        relation: HasManyRelation,
        modelClass: User,
        join: {
          from: 'currently_reading.userID',
          to: 'users.id',
        },
      },
      cread_books: {
        relations: HasManyRelation,
        modelClass: Book,
        join: {
          from: 'currently_reading.bookID',
          to: 'books.API_id',
        }
      },
    }
  }
}

module.exports = CReading
