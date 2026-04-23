import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";

const testMessages = [
  {
    id: "user-1",
    name: "Aarav Mehta",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The streaming quality is insanely smooth. I switched from another platform and never looked back.",
  },
];

export default function ChatWindow() {
  const [messages, setMessages] = useState(testMessages);
  const bottomRef = useRef(null);

  async function fetchData() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    const newMessage = {
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      photo: user.picture.thumbnail,
      text: "Hey, just joined the chat!",
    };
    setMessages((prev) => [...prev, newMessage].slice(-5));
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full h-[600px] bg-gray-200 m-5 border gap-2 rounded-lg overflow-y-scroll">
      {messages.map((message) => {
        return (
          <ChatMessage
            key={message?.id}
            name={message?.name}
            photo={message?.photo}
            text={message?.text}
          />
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}
