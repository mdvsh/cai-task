import { getFileName } from "../utils/getFileName";

import Image from "./Image";

export default function Playground(props) {
  const { src } = props;

  return (
    <div className="py-10 grid justify-center">
      <Image src={src} />
      <div className="py-5 justify-self-center">
        <a
          className="bg-blue-400 hover:bg-blue-500 text-white font-semibold mx-4 py-2 px-4 rounded"
          href="/"
          download={getFileName(src)}
        >
          download
        </a>
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
