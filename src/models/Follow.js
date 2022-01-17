const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Follow extends BaseModel {
  static get tableName() {
    return 'following'
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      follower_user: {
        relation: HasManyRelation,
        modelClass: User,
        join: {
          from: 'following.followedUserId',
          to: 'users.id',
        },
      },
      followed_user: {
        relation: HasManyRelation,
        modelClass: User,
        join: {
          from: 'following.followingUserId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Follow
