export default function PrdouctCard({ title, desc, image, price }) {
  return (
    <div className="p-3 w-100 bg-gray-300 rounded-lg">
      <h3 className="flex justify-center font-bold text-lg">{title}</h3>
      <img src={image[0]} alt={desc} />
      <h4 className="font-bold">{`Price - € ${price}`}</h4>
    </div>
  );
}
