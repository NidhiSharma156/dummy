const mongoose = require('mongoose');

module.exports = function (app) {
  mongoose.connect(
    app.get('mongodb'),
    { useNewUrlParser: true }
  ).catch(err => {
    console.log(err)
    process.exit(1);
  });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
