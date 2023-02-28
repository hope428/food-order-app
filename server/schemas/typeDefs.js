const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type MenuItem {
        _id: ID
        name: String
        description: String
        price: Float
        image: String
    }

    type User {
        _id: ID
        username: String
        password: String
        profilePic: String
    }

    type Query {
        allMenuItems: [MenuItem]
    }

    type Mutation {
        addUser(username: String!, password: String!, profilePic: String): User
    }

`;

module.exports = typeDefs;
