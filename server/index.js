const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/foo", (req, res) => {
  res.json({
    message: "foo from backend",
  });
});
