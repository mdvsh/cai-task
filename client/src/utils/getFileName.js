// helper function to get the filename with extension to download meme

export const getFileName = (url) => {
  return url.split("/").pop();
};
