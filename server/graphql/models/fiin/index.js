const { transpileSchema } = require('graphql-s2s').graphqls2s;
const { makeExecutableSchema, loadSchema, addResolversToSchema } = require('graphql-tools');

const { resolvers } = require('./resolvers');

async function makeSchema() {
  try {
    return makeExecutableSchema({
      typeDefs: `   
      type Query {
        fiin: String
      }

      schema {
        query: Query
      }
      `,
      resolvers,
    });
  } catch (e) {
    console.error(e);
  }
}

exports.makeSchema = makeSchema;
