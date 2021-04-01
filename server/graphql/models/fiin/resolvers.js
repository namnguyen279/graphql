async function company(root, props, context) {
  return {
    ISA36: 'something',
    age: 'something',
  };
}

exports.resolvers = {
  Query: {
    company,
  },
};
