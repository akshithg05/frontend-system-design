import { useState, useEffect } from "react";
import Card from "./Card";
import ShimmerCard from "./ShimmerCard";

export default function Body() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const shimmerArray = Array(30).fill(0);

  async function fetchData() {
    try {
      setLoading(true);
      const resp = await fetch("https://picsum.photos/v2/list?page=2&limit=30");
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

  console.log("Data", data);

  if (loading) {
    return (
      <div className="px-10 flex flex-wrap gap-4">
        {shimmerArray?.map((_, i) => {
          return <ShimmerCard key={i} />;
        })}
      </div>
    );
  }
  return (
    <div className="px-10 flex flex-wrap gap-4">
      {data?.map((image) => {
        return <Card image={image} key={image.id} />;
      })}
    </div>
  );
}
