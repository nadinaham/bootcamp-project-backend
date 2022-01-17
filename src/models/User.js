const { BelongsToOneRelation, HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Read = require('./Read')
    const CReading = require('./CReading')
    const Recommended = require('./Recommended')
    const Saved = require('./Saved')
    const FRecommended = require('./FRecommended')
    const Follow = require('./Follow')

    return {
      read: {
        relation: HasManyRelation,
        modelClass: Read,
        join: {
          from: 'users.id',
          to: 'read_books.userID',
        },
      },
      currentlyReading: {
        relation: BelongsToOneRelation,
        modelClass: CReading,
        join: {
          from: 'users.id',
          to: 'currently_reading.userID',
        },
      },
      recommended: {
        relation: HasManyRelation,
        modelClass: Recommended,
        join: {
          from: 'users.id',
          to: 'rec_list.userID',
        },
      },
      saved: {
        relation: HasManyRelation,
        modelClass: Saved,
        join: {
          from: 'users.id',
          to: 'saved.userID',
        },
      },
      follower: {
        relation: HasManyRelation,
        modelClass: Follow,
        join: {
          from: 'users.id',
          to: 'following.followedUserId'
        }
      },
      followed: {
        relation: HasManyRelation,
        modelClass: Follow,
        join: {
          from: 'users.id',
          to: 'following.followingUserId'
        }
      },
      friendRecSent: {
        relation: HasManyRelation,
        modelClass: FRecommended,
        join: {
          from: 'users.id',
          to: 'friend_rec.senderID'
        }
      },
      friendRecReceived: {
        relation: HasManyRelation,
        modelClass: FRecommended,
        join: {
          from: 'users.id',
          to: 'friend_rec.recipientID'
        }
      },
    }
  }
}

module.exports = User
