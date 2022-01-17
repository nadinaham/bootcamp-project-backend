const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Read extends BaseModel {
  static get tableName() {
    return 'read_books'
  }

  static get relationMappings() {
    const User = require('./User')
    const Book = require('./Book')

    return {
      read_user: {
        relation: HasManyRelation,
        modelClass: User,
        join: {
          from: 'read_books.userID',
          to: 'users.id',
        },
      },
      read_books: {
        relations: HasManyRelation,
        modelClass: Book,
        join: {
          from: 'read_books.bookID',
          to: 'books.API_id',
        },
      },
    }
  }
}

module.exports = Read
