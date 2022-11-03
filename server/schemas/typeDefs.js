const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
    _id: ID!
    username: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]
    oneUser(profileId: ID!): User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    deleteUser(profileId: ID!): User
  }
`;

module.exports = typeDefs;
