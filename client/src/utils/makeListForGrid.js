// generate image list for the grid

// REQUIRES: list with valid image urls
export function makeListForGrid(images) {
  return images.map((url) => ({
    src: url,
    width: 150,
    height: 100,
  }));
}
