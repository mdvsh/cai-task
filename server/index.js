const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const PORT = process.env.PORT || 3001;
const app = express();

require("dotenv").config();

const searchController = require("../api/searchController");

app.use(cors());
app.use(helmet());
app.use(express.json({ extended: false }));

// test route
app.get("/api/foo", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.json({
    message: "foo from backend",
  });
});

app.get("/api/search", searchController.search);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
