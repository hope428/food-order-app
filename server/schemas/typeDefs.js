const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type MenuItem {
        _id: ID
        name: String
        description: String
        price: Float
        image: String
    }

    type Query {
        allMenuItems: [MenuItem]
    }

`;

module.exports = typeDefs;