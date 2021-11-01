import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([null]);
  useEffect(() => {
    fetch("/foo")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="flex flex-wrap justify-center py-5">
      <div className="flex-1 px-10 text-lg font-bold leading-relaxed text-gray-600">
        cai mem generator
      </div>
      <div className="flex-1 text-md italic text-green-600">
        {!data ? "fetching from backend..." : data}
      </div>
      <div className="flex-1 text-md italic text-red-400">meme goes here</div>
    </div>
  );
}

export default App;
