const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Book extends BaseModel {
  static get tableName() {
    return 'books'
  }

  static get relationMappings() {
    const Read = require('./Read')
    const CReading = require('./CReading')
    const Recommended = require('./Recommended')
    const Saved = require('./Saved')
    const FRecommended = require('./FRecommended')

    return {
      read_book: {
        relations: HasManyRelation,
        modelClass: Read,
        join: {
          from: 'books.API_id',
          to: 'read_books.bookID',
        },
      },
      rec_book: {
        relations: HasManyRelation,
        modelClass: Recommended,
        join: {
          from: 'books.API_id',
          to: 'rec_list.bookID',
        },
      },
      cread_book: {
        relations: HasManyRelation,
        modelClass: CReading,
        join: {
          from: 'books.API_id',
          to: 'currently_reading.bookID',
        }
      },
      frec_book: {
        relations: HasManyRelation,
        modelClass: FRecommended,
        join: {
          from: 'books.API_id',
          to: 'friend_rec.bookID'
        }
      },
      saved_book: {
        relations: HasManyRelation,
        modelClass: Saved,
        join: {
          from: 'books.API_id',
          to: 'saved.bookID'
        }
      },
    }
  }
}

module.exports = Book
