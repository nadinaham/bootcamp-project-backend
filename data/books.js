const casual = require('casual')

casual.define('book', () => ({
  id: casual.uuid,
  API_id: casual.string,
  title: casual.string,
  author: casual.full_name,
}))

const bookData = []

for (let i = 0; i < 20; ++i) {
  bookData.push(casual.book)
}

module.exports = bookData
