const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb Connected with server : ${data.connection.host}`);
    });
};
module.exports = connectDatabase;

//DB_URI = mongodb+srv://itsmatheen:matheen%40mongodb8@fragzonedb.dfbwcii.mongodb.net/?retryWrites=true&w=majority
