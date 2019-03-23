import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';
import { merge } from 'lodash';
import { AuthenticationSchema } from './Authentication/type';
import { UserSchema } from './User/type';

export interface Schema {
  typeDefs: DocumentNode[];
  resolvers: {
    Query: any;
    Mutation: any;
  };
}

const rootSchema: Schema = {
  resolvers: { Query: {}, Mutation: {} },
  typeDefs: [
    gql`
      type Query {
        _empty: String @deprecated(reason: "doesn't do anything")
      }
      type Mutation {
        _empty: String @deprecated(reason: "doesn't do anything")
      }
    `,
  ],
};

const schema = [rootSchema, UserSchema, AuthenticationSchema].reduce((prev, next) => {
  return {
    resolvers: merge(prev.resolvers, next.resolvers),
    typeDefs: [...prev.typeDefs, ...next.typeDefs],
  };
});

export default schema;
