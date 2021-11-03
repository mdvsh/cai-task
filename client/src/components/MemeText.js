import { TEXT_POSITIONS } from "../utils/textPositions";

export function MemeText(props) {
  const { position } = props;
  let additionalInput;
  if (position === "overlay") {
    additionalInput = (
      <input
        placeholder="EXTRA MEME TEXT"
        type="text"
        className="rounded-md bg-white text-gray-600 font-semibold border-gray-300 ml-2 lg:px-4"
      />
    );
  }
  return (
    <div className="flex-auto py-2">
      <p className="lg:text-xl text-md text-gray-600 leading-6 font-semibold">
        text to add:
        {TEXT_POSITIONS.includes(position) && (
          <input
            placeholder="ADD MEME TEXT"
            type="text"
            className="rounded-md bg-white text-gray-600 font-semibold border-gray-300 ml-6 lg:px-4"
          />
        )}
        {additionalInput}
      </p>
    </div>
  );
}
