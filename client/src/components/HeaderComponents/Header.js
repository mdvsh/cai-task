import Search from "./Search";

import { Options } from "./Options";
import { MemeText } from "./MemeText";

export function Header(props) {
  // load props
  const {
    loading,
    currentImage,
    error,
    searchQuery,
    handleSearch,
    textPos,
    setTextPos,
  } = props;

  return (
    <div className="flex flex-wrap justify-center py-4">
      <div className="flex-1 px-5 font-bold leading-relaxed text-gray-600">
        <a className="lg:text-2xl text-xl leading-relaxed" href="/">
          cai meme maker
        </a>
        <div className="py-3">
          <Search handleSearch={handleSearch} placeholder={searchQuery} />
        </div>
      </div>

      {loading && (
        <div className="flex-1 text-xl italic text-green-600">
          <p>loading images...</p>
        </div>
      )}

      {currentImage !== -1 && (
        <>
          <MemeText position={textPos} />
          <div className="flex-1 py-2">
            <Options setTextPos={setTextPos} />
          </div>
        </>
      )}

      {/* todo: better error component */}
      {error && (
        <div className="flex-1 text-xl font-bold text-red-400">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
