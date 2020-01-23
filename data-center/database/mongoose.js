const mongoose = require("mongoose");
const connectionUrl =
  "mongodb+srv://dbUser:<Welcome1Github>@cluster0-mtqxw.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(
  connectionUrl,
  { useUnifiedTopology: true },
  { useCreateIndex: true }
);

const User = mongoose.model("user", {
  customerID: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Customer ID can't be negative");
      }
    }
  },
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  birthday: {
    type: String
  },
  gender: {
    type: String
  },
  lastContact: {
    type: Date
  },
  customerLifetimeValue: {
    type: Number
  }
});

const me = new User({
  customerID: 1,
  name: { first: "Andrew", last: "Mead" },
  birthday: "1996-10-12",
  gender: "m",
  lastContact: "2017-06-01T23:28:56.782Z",
  customerLifetimeValue: 191.12
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error while creating a model object. ", error);
  });
