import { useEffect, useState } from "react";

export default function ImageSlider() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);

  async function fetchData() {
    try {
      setLoading(true);
      const resp = await fetch("https://picsum.photos/v2/list?page=5&limit=10");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (active < data.length - 1) {
        setActive(active + 1);
      } else if (data.length) {
        setActive(0);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [active, data]);

  return (
    <div className="px-10 py-5">
      <p className="font-bold text-xl">Image slider</p>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              if (active > 0) {
                setActive(active - 1);
              } else if (active === 0) {
                setActive(data.length - 1);
              }
            }}
            className="px-10 bg-gray-300 cursor-pointer hover:bg-gray-400 self-stretch"
          >{`<`}</button>
          <img
            className="w-256"
            src={data[active]?.download_url}
            alt="image to display"
          />
          <button
            onClick={() => {
              if (active < data.length - 1) {
                setActive(active + 1);
              } else if (data.length) {
                setActive(0);
              }
            }}
            className="px-10 bg-gray-300 cursor-pointer hover:bg-gray-400 self-stretch"
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}
