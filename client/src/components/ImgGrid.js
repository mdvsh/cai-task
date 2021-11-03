import { useCallback } from "react";
import Gallery from "react-photo-gallery";

export default function ImgGrid(props) {
  const onImageClick = useCallback(
    (e, { photo, index }) => {
      props.setCurrentImage(index);
    },
    [props]
  );

  const rickRoll = () => {
    alert("never gonna give you up, never gonna let you down . . .");
  };

  return (
    <Gallery
      photos={props.images}
      direction={"column"}
      onClick={props.isError == null ? onImageClick : rickRoll}
    />
  );
}
