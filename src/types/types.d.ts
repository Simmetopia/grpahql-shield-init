import { GraphQLFieldResolver } from 'graphql';
import { Context } from '../utils/Context';

export type Resolver<TArgs, Parent = {}> = GraphQLFieldResolver<Parent, Context, TArgs>;
