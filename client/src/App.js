import { useState } from "react";

import { coalesceToList } from "./utils/coalesceToList.js";
import { makeListForGrid } from "./utils/makeListForGrid.js";

import Gallery from "react-photo-gallery";
import Search from "./components/Search";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(-1);

  const fetchImages = async (searchQuery) => {
    setLoading(true);
    console.log(searchQuery);
    try {
      const response = await fetch(`/search/?q=${searchQuery}`);
      const data = await response.json();
      if (response.status === 404) {
        setImages(data.images);
        setError(data.error);
        setLoading(false);
        return;
      }
      setImages(coalesceToList(data.images));
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center py-5">
        <div className="flex-1 px-5 font-bold leading-relaxed text-gray-600">
          <h1 className="lg:text-3xl text-xl leading-relaxed">
            cai meme generator
          </h1>
          <div className="pt-5">
            <Search fetchImages={fetchImages} />
          </div>
        </div>
        {loading && (
          <div className="flex-1 text-xl italic text-green-600">
            <p>loading images...</p>
          </div>
        )}
        {/* todo: better error component */}

        {error && (
          <div className="flex-1 text-xl font-bold text-red-400">
            <p>{error}</p>
          </div>
        )}
      </div>
      {images.length !== 0 && (
        <Gallery photos={makeListForGrid(images)} direction={"column"} />
      )}
    </>
  );
}

export default App;
