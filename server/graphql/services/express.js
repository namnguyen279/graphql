const express = require('express');
const { graphql } = require('graphql');

let { makeSchema } = require('../models/fiin');

async function init() {
  const app = express();
  let schema = await makeSchema();

  app.use(express.urlencoded({ extended: false }));

  app.get('/graphql/v1', async function (req, res) {
    console.log('yeah');
    let r = await graphql(schema, req.body.query, '_root', '_context', req.body.variables);
    res.json(r);
  });

  app.get('/', async function (req, res) {
    console.log('qqq');

    res.json({ a: 'true ' });
  });

  app.listen(3002, () => {
    console.log(`Fiin - http://localhost:${3002}`);
  });
}

exports.init = init;
