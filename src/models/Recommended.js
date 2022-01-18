const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Recommended extends BaseModel {
  static get tableName() {
    return 'rec_list'
  }

  static get relationMappings() {
    const User = require('./User')
    const Book = require('./Book')

    return {
      recommended_user: {
        relation: HasManyRelation,
        modelClass: User,
        join: {
          from: 'rec_list.userID',
          to: 'users.id',
        },
      },
      rec_books: {
        relations: HasManyRelation,
        modelClass: Book,
        join: {
          from: 'rec_list.bookID',
          to: 'books.API_id',
        },
      },
    }
  }
}

module.exports = Recommended
