export default function Search(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.fetchImages(e.target.elements.search.value);
      }}
    >
      <input
        className="w-auto lg:px-5 lg:py-2 px-3 py-1 text-gray-700 bg-gray-200 rounded-lg"
        type="text"
        name="search"
        placeholder="search for a meme"
      />
    </form>
  );
}
