const { transpileSchema } = require('graphql-s2s').graphqls2s;
const { makeExecutableSchema, loadSchema, addResolversToSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

async function makeSchema() {
  return addResolversToSchema({
    schema: await loadSchema('./schema.graphql'),
    resolvers,
  });
}

exports.module = {
  makeSchema,
};
