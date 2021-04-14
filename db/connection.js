var mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const config = require("config");

var mongoDbconnection = async function () {
  return new Promise((resolve, reject) => {
    var url = config.get("mongoUrl");
    // var url = 'mongodb://localhost:27017/employee-management';
    mongoose.connect(
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
