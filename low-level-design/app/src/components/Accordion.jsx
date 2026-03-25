import { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = {
  items: [
    {
      id: 1,
      title: "Getting Started with Running",
      body: "Start with short distances and gradually increase your mileage to avoid injuries.",
    },
    {
      id: 2,
      title: "Healthy Eating Tips",
      body: "Include more whole foods like fruits, vegetables, and lean proteins in your diet.",
    },
    {
      id: 3,
      title: "Improving Sleep Quality",
      body: "Maintain a consistent sleep schedule and avoid screens before bedtime.",
    },
    {
      id: 4,
      title: "Productivity Hacks",
      body: "Break your tasks into smaller chunks and use techniques like Pomodoro for better focus.",
    },
  ],
};

export default function Accordion() {
  const [accordionIndex, setAccordionIndex] = useState(null);

  return (
    <div className="px-10">
      <h1 className="text-2xl ">Accordion</h1>
      <div>
        {data?.items?.map((item) => (
          <AccordionItem
            tabIndex={item.id}
            key={item.id}
            title={item.title}
            body={item.body}
            accordionIndex={accordionIndex}
            setAccordionIndex={setAccordionIndex}
          />
        ))}
      </div>
    </div>
  );
}
