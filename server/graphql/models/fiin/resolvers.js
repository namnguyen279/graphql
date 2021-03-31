async function fiin(root, props, context) {
  return {
    name: 'something',
    age: 'something',
  };
}

exports.resolvers = {
  Query: {
    fiin,
  },
};
