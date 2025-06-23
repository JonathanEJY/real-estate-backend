const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const indexRouter = require("./routes/rentals");
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("escutando na porta 3000");
});
