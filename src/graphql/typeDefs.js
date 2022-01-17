const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    addUser(input: AddUser!): User!
    addBook(input: AddBook!): Book!
    addBooktoRead(input: AddBookList!): Read!
    addBooktoRecs(input: AddBookList!): Recommended!
    addBooktoSaved(input: AddBookList!): Saved!
    addFollow(input: AddFollowPair!): Follow!
    addFriendRec(input: AddFriendRecBook!): FRecommended!
    addCurrReading(input: AddCurrReading!): CReading!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    read_books: [Read!]!
    read_book(id: ID!): Read!
    rec_lists: [Recommended!]!
    rec_list(id: ID!): Recommended!
    saveds: [Saved!]!
    saved(id: ID!): Saved!
    books: [Book!]!
    book(id: ID!): Book!
    following: [Follow!]!
    follow(id: ID!): Follow!
    friend_recs: [FRecommended!]!
    friend_rec(id: ID!): FRecommended!
    currently_readings: [CReading!]!
    currently_reading(id: ID!): CReading!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Book {
    id: ID!
    API_id: String!
    title: String!
    author: String!
  }

  type Read {
    id: ID!
    userID: String!
    bookID: String!
  }

  type Recommended {
    id: ID!
    userID: String!
    bookID: String!
  }

  type CReading {
    id: ID!
    userID: String!
    bookID: String!
  }

  type FRecommended {
    id: ID!
    senderID: String!
    recipientID: String!
    bookID: String!
    comment: String
  }

  type Saved {
    id: ID!
    userID: String!
    bookID: String!
  }

  type Follow {
    id: ID!
    followedUserID: String!
    followingUserID: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  input AddUser {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input AddBook {
    API_id: String!
    title: String!
    author: String!
  }

  input AddBookList {
    userID: String!
    bookID: String!
  }

  input AddFollowPair {
    followedUserId: String!
    followingUserId: String!
  }

  input AddFriendRecBook {
    senderID: String!
    recipientID: String!
    bookID: String!
    comment: String
  }
  
  input AddCurrReading {
    userID: String!
    bookID: String!
  }
`
