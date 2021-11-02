// helper function to convert array of photo objects to list of image urls

import mapToURL from "./mapToURL";

export function coalesceToList(photos) {
  return photos.map((photo) => mapToURL(photo));
}
