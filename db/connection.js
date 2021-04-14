var mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const config = require("config");

var mongoDbconnection = function () {
  return new Promise( async(resolve, reject) => {
    var url = await config.get("mongoUrl");
    // var url = 'mongodb://localhost:27017/employee-management';
    await mongoose.connect(
      url,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
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
