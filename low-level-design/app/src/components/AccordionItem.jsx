export default function AccordionItem({
  tabIndex,
  key,
  title,
  body,
  accordionIndex,
  setAccordionIndex,
}) {
  return (
    <div className="pt-5">
      <button
        className="cursor-pointer"
        onClick={() => {
          if (tabIndex === accordionIndex) setAccordionIndex(null);
          else setAccordionIndex(tabIndex);
        }}
      >
        <div className="p-5 bg-gray-300 flex justify-between w-200 rounded-lg">
          <h2 className="text-xl">{title}</h2>
          <span>{accordionIndex === tabIndex ? "↓" : "↑"}</span>
        </div>
      </button>

      <div>
        {accordionIndex === tabIndex ? <p className="p-5">{body}</p> : <></>}
      </div>
    </div>
  );
}
