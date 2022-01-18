const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'friend_rec', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('senderID')
    .notNullable()
    .references('users.id')

  table
    .uuid('recipientID')
    .notNullable()
    .references('users.id')

  table
    .string('bookID')
    .notNullable()

  table
    .string('title')
    .notNullable()

  table
    .string('author')
    .notNullable()

  table
    .text('comment')
    .notNullable()
    .defaultTo('')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('friend_rec')
