import { ApolloError } from 'apollo-server';
import { GraphQLFieldResolver } from 'graphql';
import { sign } from 'jsonwebtoken';
import { toLower } from 'lodash';
import { tokenSecret } from '../../utils/configHelper';
import { Context } from '../../utils/Context';
import { compareHash, saltAndHash } from '../../utils/hash';

export interface AuthenticationInputArgs {
  email: string;
  password: string;
}

interface Authentication {
  authArgs: AuthenticationInputArgs;
}

export const login: GraphQLFieldResolver<any, Context, Authentication> = async (
  _,
  { authArgs: { email, password } },
  ctx,
) => {
  throw new Error('no implemented');
};

export const signup: GraphQLFieldResolver<any, Context, Authentication> = async (
  _,
  { authArgs: { email, password } },
  ctx,
) => {
  throw new Error('no implemented');
};
