import { gql } from 'apollo-server';
import { Schema } from '..';
import { deleteUser, getMe, getUser, getUsers } from './resolvers';

const type = gql`
  """
  A user on the platform
  """
  type User {
    id: ID!
    details: UserDetails
    credentails: UserCredentails
  }

  type UserCredentails {
    password: String!
    email: String!
  }

  type UserRole {
    roles: [Role!]!
  }
  """
  Denotes the details of the user
  """
  type UserDetails {
    firstName: String
    lastName: String
    phoneNumber: String
    role: UserRole
  }
  """
  Different roles a user can acquire on the platform
  """
  enum Role {
    ADMINISTRATOR
    USER
    DEPARTMENTLEADER
  }
`;

const queries = gql`
  extend type Query {
    """
    Gets a single user by email
    """
    getUser(id: ID!): User
    """
    gets users
    """
    getUsers(pagination: Pagination!): [User!]
    """
    Gets the user from token Id
    """
    getMe: User!
  }
`;

const mutations = gql`
  extend type Mutation {
    """
    Deletes a single user by email
    """
    deleteUser(id: ID!): String!
  }
`;

const inputTypes = gql`
  """
  Used to control how many items to get from the db
  """
  input Pagination {
    take: Int!
    skip: Int!
  }
`;

const resolvers = {
  Mutation: {
    deleteUser,
  },
  Query: {
    getMe,
    getUser,
    getUsers,
  },
};

export const UserSchema: Schema = {
  resolvers,
  typeDefs: [type, queries, inputTypes, mutations],
};
