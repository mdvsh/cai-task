var Flickr = require("flickr-sdk");

exports.search = async function (req, res) {
  const apiKey = process.env.API_KEY;
  var sdk = new Flickr(apiKey.trim());
  try {
    const { q } = req.query;
    const response = await sdk.photos.search({
      text: q,
      page: 1,
      per_page: 30,
      sort: "relevance",
    });
    res.json({
      images: response.body.photos.photo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
