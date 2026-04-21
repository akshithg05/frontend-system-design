export default function ChatMessage({ name, photo, text }) {
  return (
    <div>
      <img src={photo} alt="profile picture" />
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
}
