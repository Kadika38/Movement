const { User, Todo } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async () => {
        return User.find({});
    },
    oneUser: async (parent, { profileId }) => {
        return User.findOne({ _id: profileId });
    },
  },
  Mutation: {
    //User mutations
    addUser: async (parent, { username, password }) => {
        const user = await User.create({ username, password });
        const token = signToken(user);
  
        return { token, user };
    },
    login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
  
        if (!user) {
          throw new AuthenticationError('No user with this username found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
    },
    deleteUser: async (parent, { profileId }) => {
      return User.findByIdAndDelete({ _id: profileId });
    },
  },
};

module.exports = resolvers;
