// let { init: express } = require('./services/express');
// let { init: db } = require('./services/mongodb');
// let { init: fiin } = require('./models/fiin');

// async function main() {
//   try {
//     await db();
//     await fiin();
//     await express();
//   } catch (e) {
//     console.error(e);
//   }
// }

// main();

const express = require('express');

const app = express();

app.get('/*', async function (req, res) {
  console.log('qqq');
  //  sadas
  res.json({ a: 'true ' });
});

app.get('/graph', async function (req, res) {
  console.log('ccc');

  res.json({ a: 'true ' });
});

app.listen(3002, () => {
  console.log(`Fiin - http://localhost:${3002}`);
});
