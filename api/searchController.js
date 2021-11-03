const Flickr = require("flickr-sdk");
const express = require("express");
const router = express.Router();

exports.search = async function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const apiKey = process.env.API_KEY;
  var sdk = new Flickr(apiKey.trim());
  try {
    const { q } = req.query;
    const response = await sdk.photos.search({
      text: q,
      page: 1,
      per_page: 30,
      media: "photos",
      sort: "relevance",
      // interestingness-asc was the initial sort option but later changed since gave weird results sometimes
    });
    const photoList = response.body.photos.photo;
    if (photoList.length === 0) {
      res.status(404).json({
        images: ["https://http.cat/404"],
        error: "No image found. Try searching baguette.",
      });
    } else {
      res.status(200).json({ images: photoList, error: "" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
