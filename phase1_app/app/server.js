const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Resort Booking Web App - Running Successfully!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
