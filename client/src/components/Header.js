import Search from "./Search";

import { Options } from "./Options";

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
        <h1 className="lg:text-3xl text-xl leading-relaxed">
          cai meme generator
        </h1>
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
          <div className="flex-auto px-5 pb-2">
            <p className="lg:text-xl text-lg text-gray-500 leading-12 font-semibold">
              where to add text ?
              <Options setTextPos={setTextPos} />
            </p>
          </div>
          <div className="py-2 px-3">
            <p className="lg:text-lg text-md text-gray-700">
              current text position: <b>{textPos}</b>
            </p>
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
