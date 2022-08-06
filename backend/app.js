const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const errorMiddleware = require("./middleware/error");

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser(process.env.JWT_SECRET));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//routes imports
const productRouting = require("./routes/productRoute");

const userRouting = require("./routes/userRoute");

const orderRouting = require("./routes/orderRoutes");

const paymentRouting = require("./routes/paymentRoute");

app.use("/api/v1", productRouting);
app.use("/api/v1", userRouting);
app.use("/api/v1", orderRouting);
app.use("/api/v1", paymentRouting);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//middleware for errors
app.use(errorMiddleware);

module.exports = app;
