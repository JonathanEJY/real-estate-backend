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

const housesRouter = require("./routes/houses");
app.use("/api/houses", housesRouter);

app.listen(3000, () => {
  console.log("escutando na porta 3000");
});
