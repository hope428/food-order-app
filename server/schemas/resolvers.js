const {MenuItem} = require('../models')
const {User} = require('../models')

const resolvers = {
    Query: {
        allMenuItems: async () => {
            return await MenuItem.find()
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const newUser = await User.create(args)

            return newUser
        }
    }
}

module.exports = resolvers;