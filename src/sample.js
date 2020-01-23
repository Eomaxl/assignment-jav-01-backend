//CRUD operations

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionUri =
  "mongodb+srv://dbUser:Welcome1Github@cluster0-mtqxw.mongodb.net/test?retryWrites=true&w=majority";
const databaseName = "sample_airbnb";

MongoClient.connect(
  connectionUri,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database :: " + error);
    }

    console.log("Connected correctly");
  }
);
