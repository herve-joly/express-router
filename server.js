const express = require("express");
const app = express();
const port = 3000;
const Userrouter = require("./router/userRouter");
const Fruitrouter = require("./router/fruitRouter");

app.use(express.json());
// Express Routes
app.use("/api", Userrouter);
app.use("/api", Fruitrouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
