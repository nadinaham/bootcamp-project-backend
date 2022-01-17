const merge = require('lodash.merge')
const User = require('./User')
const Book = require('./Book')
const Read = require('./Read')
const Recommended = require('./Recommended')
const CReading = require('./CReading')
const FRecommended = require('./FRecommended')
const Saved = require('./Saved')
const Follow = require('./Follow')

const resolvers = [User, Book, Read, Recommended, CReading, FRecommended, Saved, Follow]

module.exports = merge(...resolvers)
