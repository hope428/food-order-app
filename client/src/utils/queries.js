import { gql } from "@apollo/client";

export const QUERY_MENU = gql`
  {
    allMenuItems {
      _id
      description
      image
      name
      price
    }
  }
`;
