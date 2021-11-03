import { useCallback } from "react";
import Gallery from "react-photo-gallery";

export default function ImgGrid(props) {
  const onImageClick = useCallback(
    (e, { photo, index }) => {
      props.setCurrentImage(index);
    },
    [props]
  );

  return (
    <Gallery
      photos={props.images}
      direction={"column"}
      onClick={onImageClick}
    />
  );
}
