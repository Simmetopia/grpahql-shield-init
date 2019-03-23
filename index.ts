import { ApolloServer, CorsOptions, makeExecutableSchema } from 'apollo-server-express';
import express from 'express';
import { applyMiddleware } from 'graphql-middleware';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { permissions } from './src/shield/permissions';
import schema from './src/types';
import { createContext } from './src/utils/Context';

const app = express();
const dev = process.env.NODE_ENV !== 'production';
if (dev) {
  app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));
}

const execScheme = makeExecutableSchema({ ...schema });
const withPermissions = applyMiddleware(execScheme, permissions);
const server = new ApolloServer({
  context: ({ req }: any) => createContext(req),
  introspection: true,
  schema: withPermissions,
  // tracing: true,
});

server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.PORT || 4000;

app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
