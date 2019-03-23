import { ApolloError } from 'apollo-server';
import { allow, deny, or, shield } from 'graphql-shield';
import { isAuthenticated } from './rules/isAuthenticated';
import { isAdmin } from './rules/roleRules';

export const permissionObject = {
  Mutation: {
    deleteUser: isAdmin,
    login: allow,
    signup: allow,
  },
  Query: {
    getMe: isAuthenticated,
    getUser: isAdmin,
    getUsers: isAdmin,
  },
  UserCredentails: { email: allow, password: deny },
};

export const permissions = shield(permissionObject, {
  fallbackError: new ApolloError('Permission denied'),
});
