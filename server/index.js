const express = require("express");
const app = express();
const { connection } = require("./config/database");
const PORT = 8080;
const userRouter = require("./routes/user.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);

app.listen(PORT, async (error) => {
  try {
    if (error) {
      console.error("Server failed to start:", error);
    } else {
      console.log(`Server is listening on port ${PORT}`);
    }
    await connection();
  } catch (err) {
    console.log(err, "Error in connection");
  }
});
