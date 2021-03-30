const mongoose = require('mongoose');

function init() {
  return new Promise((resolve, reject) => {
    try {
      mongoose.connect('mongodb://mongodb/fiin', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      mongoose.connection.on('error', () => {
        throw new Error('Connection Error');
      });

      mongoose.connection.once('open', function () {
        resolve();
      });
    } catch (e) {
      //ss
      console.error('-- Error try to connect to DB ' + e);
      reject();
    }
  });
}

exports.init = init;
