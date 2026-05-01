import { useEffect, useState } from "react";

export default function SearchUI() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [areResultsVisible, setAreResultsVisible] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);

      // If cache has data fetch data from cache
      if (sessionStorage.getItem(input)) {
        setResults(JSON.parse(sessionStorage.getItem(input)));
        setLoading(false);
        return;
      }

      // If no cachhe, first fetch data then cache
      const resp = await fetch(
        `/api/complete/search?client=firefox&q=${input}`,
      );
      const data = await resp.json();
      sessionStorage.setItem(input, JSON.stringify(data));
      setResults(data);
      setLoading(false);
    } catch (err) {
      console.log("ERROR : ", err);
    }
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    // Debouncing
    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    // Removing the previous timer if delay is less than 200ms
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <div className="flex justify-center   mx-3 px-3">
        <input
          className="p-2 border rounded-lg w-96"
          value={input}
          onChange={handleChange}
          onFocus={() => setAreResultsVisible(true)}
          onBlur={() => setAreResultsVisible(false)}
        />
      </div>
      {results.length > 1 && areResultsVisible && (
        <div className="flex justify-center    px-3">
          <ul className="border w-96 bg-gray-200 ">
            {results[1]?.map((item) => {
              return (
                <li
                  key={item}
                  className="p-1 text-center cursor-pointer hover:bg-gray-300"
                >
                  <button>{item}</button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
