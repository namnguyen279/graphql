let { init: express } = require('./services/express');
let { init: db } = require('./services/mongodb');

async function main() {
  try {
    await db();
    await express();
  } catch (e) {
    console.error(e);
  }
}

main();
