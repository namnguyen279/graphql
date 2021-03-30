async function fiin(root, props, context) {
  return 'string';
}

exports.resolvers = {
  Query: {
    fiin,
  },
};
