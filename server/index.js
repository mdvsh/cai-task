const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

require("dotenv").config();

const searchController = require("./controllers/searchController");

app.use(cors());

app.get("/foo", (req, res) => {
  res.json({
    message: "foo from backend",
  });
});

app.get("/search", searchController.search);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
