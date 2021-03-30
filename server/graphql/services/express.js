const express = require('express');
const { graphql } = require('graphql');

let { makeSchema } = require('../models/fiin');

async function init() {
  const app = express();
  let schema = await makeSchema();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.post('/graph/v1', async function (req, res) {
    let r = await graphql(schema, req.body.query, '_root', '_context', req.body.variables);
    res.json(r);
  });

  app.listen(3002, () => {
    console.log(`Fiin - http://localhost:${3002}`);
  });
}

exports.init = init;
