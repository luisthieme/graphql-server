import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
  // https://www.youtube.com/watch?v=mjqfYgFyziU&list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y&index=5
});

const PORT = 4000;

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });

console.log(`Server ready at port ${PORT}`);
