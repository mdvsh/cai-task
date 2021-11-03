export default function Image(props) {
  const { src } = props;

  return (
    <div className="bg-white py-2 displayImage">
      <div id="topText" className="py-2 text-center font-sans text-4xl"></div>
      <img src={src} alt="" />
      <div
        id="bottomText"
        className="py-2 text-center font-sans text-4xl"
      ></div>
    </div>
  );
}
