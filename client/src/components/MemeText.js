import { TEXT_POSITIONS } from "../utils/textPositions";

export function MemeText(props) {
  const { position } = props;

  let additionalInput;
  if (position === "overlay") {
    additionalInput = (
      <input
        placeholder="BOTTOM TEXT"
        type="text"
        className="rounded-md bg-white text-gray-600 font-semibold border-gray-300 ml-2 lg:px-4"
        onChange={(e) => memeTextBottom(e)}
      />
    );
  }

  const memeTextTop = (e) => {
    document.getElementById("topText").textContent =
      e.target.value.toUpperCase();
  };

  const memeTextBottom = (e) => {
    document.getElementById("bottomText").textContent =
      e.target.value.toUpperCase();
  };

  return (
    <div className="flex-auto py-2">
      <p className="lg:text-xl text-md text-gray-600 leading-6 font-semibold">
        make meme:
        {TEXT_POSITIONS.includes(position) && (
          <input
            placeholder={position !== "bottom" ? "TOP TEXT" : "BOTTOM TEXT"}
            type="text"
            onChange={(e) =>
              position === "bottom" ? memeTextBottom(e) : memeTextTop(e)
            }
            className="rounded-md bg-white text-gray-600 font-semibold border-gray-300 ml-4 lg:px-4"
          />
        )}
        {additionalInput}
      </p>
    </div>
  );
}
