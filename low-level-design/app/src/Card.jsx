export default function Card({ image }) {
  return (
    <div className="px-3 py-2 w-sm  bg-white rounded-sm shadow-md  hover:shadow-xl ">
      <h2 className="font-bold">{image?.author}</h2>
      <img src={image?.download_url} alt="random image" />
    </div>
  );
}
