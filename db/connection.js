var mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const config = require("config");

var mongoDbconnection = function () {
  return new Promise( async(resolve, reject) => {
    var url = await config.get("mongoUrl");
    await mongoose.connect(
      url,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        console.log("Db successfully connected!");
        return resolve("Db successfully connected!");
      }
    );
  });
};

autoIncrement.initialize(mongoose);

module.exports = {
  mongoDbconnection: mongoDbconnection,
};
