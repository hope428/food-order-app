import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $password: String!
    $profilePic: String
  ) {
    addUser(username: $username, password: $password, profilePic: $profilePic) {
      _id
      username
      profilePic
    }
  }
`;
