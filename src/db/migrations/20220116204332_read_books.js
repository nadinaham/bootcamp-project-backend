const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'read_books', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))
  
  table
    .uuid('userID')
    .notNullable()
    .references('users.id')
  
  table
    .string('bookID')
    .notNullable()
    .references('books.API_id')

  table
    .boolean('liked')
    .defaultTo(true)

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('read_books')
