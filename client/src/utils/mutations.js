import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: password!) {
    login(email: $email, password: $password) {token user {_id username email}}
  } 
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: password!) {
    addUser(username: $username, email: $email, password: $password)
    {token, user {_id username email}}
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput) {
    saveBook(BookInput: $BookInput)
    {_id username email}
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId)
    {_id username email}
  }
`;