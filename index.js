import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/Resolver";

const server = new GraphQLServer({
  typeDefs: "./graphql/Schema.graphql",
  resolvers,
});

server.start(() => console.log(`Graph QL Server running`));
