import { useState, useEffect } from "react";

import { coalesceToList } from "./utils/coalesceToList.js";
import { makeListForGrid } from "./utils/makeListForGrid.js";

import ImgGrid from "./components/ImgGrid";
import Playground from "./components/Playground.js";
import { Header } from "./components/Header";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let cachedImages = JSON.parse(localStorage.getItem("images"));
    setImages(!cachedImages || cachedImages.length === 0 ? [] : cachedImages);
    setQuery(localStorage.getItem("query"));
  }, []);

  const [textPos, setTextPos] = useState("below");
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(-1);

  const fetchImages = async (searchQuery) => {
    setLoading(true);
    setCurrentImage(-1);
    setQuery(searchQuery);
    try {
      const response = await fetch(`/search/?q=${searchQuery}`);
      const data = await response.json();
      if (response.status === 404) {
        setImages(data.images);
        setError(data.error);
        setLoading(false);
        setCurrentImage(-1);
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

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
    query === "null"
      ? localStorage.setItem("query", "search for a template")
      : localStorage.setItem("query", query);
  }, [images, query]);

  return (
    <>
      <Header
        loading={loading}
        error={error}
        currentImage={currentImage}
        searchQuery={query}
        handleSearch={fetchImages}
        setTextPos={setTextPos}
        textPos={textPos}
      />

      {images.length !== 0 && currentImage === -1 && (
        <ImgGrid
          images={error ? images : makeListForGrid(images)}
          isError={error}
          setCurrentImage={setCurrentImage}
        />
      )}

      {currentImage !== -1 && (
        <Playground
          src={images[currentImage]}
          reset={setCurrentImage}
          textPos={setTextPos}
        />
      )}
    </>
  );
}

export default App;
