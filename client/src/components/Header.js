import Search from "./Search";

export function Header(props) {
  // load props
  const { loading, currentImage, error, searchQuery, handleSearch } = props;

  return (
    <div className="flex flex-wrap justify-center py-5">
      <div className="flex-1 px-5 font-bold leading-relaxed text-gray-600">
        <h1 className="lg:text-3xl text-xl leading-relaxed">
          cai meme generator
        </h1>
        <div className="pt-5">
          <Search handleSearch={handleSearch} placeholder={searchQuery} />
        </div>
      </div>

      {loading && (
        <div className="flex-1 text-xl italic text-green-600">
          <p>loading images...</p>
        </div>
      )}

      {currentImage !== -1 && (
        <div className="px-5">
          <p className="lg:text-xl text-lg text-gray-500 leading-12 font-semibold">
            add meme description
          </p>
        </div>
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
