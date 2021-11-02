// helper function to get the filename with extension to download meme

export const getFileName = (url) => {
  const fileExtension = url.split(".").pop();
  // download extension bugged, only option is to append fileextension later
  return url.split("/").pop() + "." + fileExtension;
};
