const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

// (function () {
//   const token = jwt.sign({ _id: "abc123" }, "secret");
//   const data = jwt.verify(token, "secret");
//   console.log(data);
// })();
