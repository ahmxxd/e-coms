const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser")


dbConnect();

// app.use("/", (req, res) => {
//   res.send("hello from server side");
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Apis exe
app.use("/api/user", authRouter);

// Error handling
// app.use(notFound)
// app.use(errorHandler)

// port listening
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
