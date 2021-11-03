import { useCallback, createRef } from "react";
import { toJpeg } from "html-to-image";
import Image from "./Image";

export default function Playground(props) {
  const { src, textPos } = props;
  // prettier-ignore
  const ref = createRef();
  const downloadImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toJpeg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "meme.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  }, [ref]);

  return (
    <div className="py-10 grid justify-center">
      <Image src={src} textPos={textPos} reference={ref} />
      <div className="py-5 justify-self-center">
        <button
          className="bg-green-300 hover:bg-green-400 text-gray-600 font-semibold mx-4 py-2 px-4 rounded"
          onClick={downloadImage}
        >
          download
        </button>
        <a
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold mx-4 py-2 px-4 rounded"
          href="/"
        >
          back
        </a>
      </div>
    </div>
  );
}
