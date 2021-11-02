export default function Image(props) {
  const { src } = props;

  return (
    <div className="bg-white py-16">
      <img className="" src={src} alt="" />
    </div>
  );
}
