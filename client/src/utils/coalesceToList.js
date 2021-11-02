// helper function to convert array of photo objects to list of image urls

import mapToURL from "./mapToURL";

export function coalesceToList(photos, forGrid = false) {
  // grid component requires a list of image objects
  let urlList = photos.map((photo) => mapToURL(photo));
  if (!forGrid) {
    return urlList;
  } else {
    return urlList.map((url) => ({
      src: url,
      width: 150,
      height: 95,
    }));
  }
}
