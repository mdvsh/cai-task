// helper function to generate flickr image url from photo object

export default function mapToURL(photo) {
  if (typeof photo === "object") {
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  } else {
    // hehe :^)
    return "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png";
  }
}
