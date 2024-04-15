const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://sai:1234@saibende.bdyksz5.mongodb.net/?retryWrites=true&w=majority&appName=SaiBende", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
