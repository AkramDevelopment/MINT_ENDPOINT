const express = require("express");
const { mintNFT, sleep } = require("./methods/mint");
const cors = require("cors");
const helmet = require("helmet");
const { parse } = require("dotenv");
app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());


//POST(address,tokenID)
app.post("/api/v1/mint",async (req, res) => {
  try {
    const mintResult = await mintNFT(
      req.body.address.toLowerCase(),
      req.body.tokenID
    );

    res.status(200);
  } catch {
    res.status(500);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  console.log(`MINT SERVICE IS RUNNING ON PORT: ${PORT}`);
});
