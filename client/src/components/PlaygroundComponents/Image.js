export default function Image(props) {
  const { src, reference } = props;

  return (
    <div id="meme" ref={reference} className="bg-white py-2 displayImage">
      <div id="topText" className="py-2 text-center font-sans text-4xl"></div>
      <img src={src} alt="" />
      <div
        id="bottomText"
        className="py-2 text-center font-sans text-4xl"
      ></div>
    </div>
  );
}
