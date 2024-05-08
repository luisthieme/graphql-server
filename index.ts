import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import db from "./_db";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = 4000;

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });

console.log(`Server ready at port ${PORT}`);
