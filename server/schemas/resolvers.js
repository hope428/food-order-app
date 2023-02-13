const {MenuItem} = require('../models')

const resolvers = {
    Query: {
        allMenuItems: async () => {
            return await MenuItem.find()
        }
    }
}