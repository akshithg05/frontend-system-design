import ChatWindow from "./ChatWindow";
import VideoStream from "./VideoStream";

export default function LiveChat() {
  return (
    <div className="flex ">
      <VideoStream />
      <ChatWindow />
    </div>
  );
}
