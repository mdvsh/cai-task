export default function Image(props) {
  const { src } = props;

  return (
    <div className="bg-white py-16">
      <img src={src} alt="" />
    </div>
  );
}
