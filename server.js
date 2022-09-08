const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeUrls = require("./routes/routes");
const cors = require("cors");
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

mongoose
  .connect(mongoose, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection succesful`);
  })
  .catch((err) => console.log(`no connection`));

const middleware = (req, res, next) => {
  console.log(`hello my middleware`);
};

app.use(express.json());
app.use(cors());
app.use("/app", routeUrls);

app.listen(4000, () => console.log("server is up and running"));