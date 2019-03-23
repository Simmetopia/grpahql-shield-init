import { gql } from 'apollo-server';

import { Schema } from '..';
import { login, signup } from './resolvers';

const type = gql`
  type AuthPayload {
    token: String!
    user: User!
    role: UserRole!
  }
`;

const queries = gql`
  extend type Mutation {
    signup(authArgs: AuthenticationArgs): AuthPayload
    login(authArgs: AuthenticationArgs): AuthPayload
  }
`;

const inputTypes = gql`
  input AuthenticationArgs {
    email: String!
    password: String!
  }
`;

const resolvers = {
  Mutation: {
    login,
    signup,
  },
  Query: {},
};

export const AuthenticationSchema: Schema = {
  resolvers,
  typeDefs: [type, queries, inputTypes],
};
