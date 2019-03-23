import { ApolloError } from 'apollo-server';
import { GraphQLFieldResolver } from 'graphql';
import { Context } from '../../utils/Context';

interface FindUserInputArgs {
  id: string;
}

export interface PaginationInputArgs {
  take: number;
  skip: number;
}

interface GetUsers {
  pagination: PaginationInputArgs;
}

export const getUser: GraphQLFieldResolver<any, Context, FindUserInputArgs> = async (_, { id }, ctx) => {
  throw new Error('no implemented');
  expect(false).toBeTruthy();
};

export const getUsers: GraphQLFieldResolver<any, Context, GetUsers> = (_, args, ctx) => {
  throw new Error('no implemented');
  expect(false).toBeTruthy();
};

export const deleteUser: GraphQLFieldResolver<any, Context, FindUserInputArgs> = async (_, { id }, ctx) => {
  throw new Error('no implemented');
  expect(false).toBeTruthy();
};

export const getMe: GraphQLFieldResolver<any, Context, any> = (_, args, ctx) => {
  throw new Error('no implemented');
  expect(false).toBeTruthy();
};
