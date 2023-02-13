const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type MenuItem {
        _id: ID
        name: String
        description: String
        price: Float
        image: String
    }

`

module.exports = typeDefs;