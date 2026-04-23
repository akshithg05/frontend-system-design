export default function ChatMessage({ name, photo, text }) {
  return (
    <div className="py-3 my-2 bg-gray-100 px-2 w-full">
      <div className="flex">
        <img
          className="w-10 h-10 rounded-full m-2"
          src={photo}
          alt="profile picture"
        />
        <h3 className="font-bold">{name}</h3>
      </div>
      <p className="px-15">{text}</p>
    </div>
  );
}
