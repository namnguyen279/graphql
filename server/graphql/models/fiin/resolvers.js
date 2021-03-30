async function fiin(root, props, context) {
  return {
    result: 'ABC',
  };
}

exports.resolver = {
  Query: {
    fiin,
  },
};
