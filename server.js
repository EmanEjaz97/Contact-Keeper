const express = require("express");

const app = express();
// app.use(express.json());

//  define routes
app.use('/api/users', require('./routes/users'))
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));




const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
