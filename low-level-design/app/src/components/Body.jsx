import { useState, useEffect, useRef, useMemo, memo } from "react";
import Card from "./Card";
import ShimmerCard from "./ShimmerCard";

const shimmerArray = Array(20).fill(0);

export default function Body() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const pageRef = useRef(1);
  const isFetching = useRef(false);

  async function fetchData() {
    if (isFetching.current) return;
    isFetching.current = true;
    try {
      setLoading(true);
      const resp = await fetch(
        `https://picsum.photos/v2/list?page=${pageRef.current}&limit=10`,
      );
      const json = await resp.json();
      pageRef.current = pageRef.current + 1;
      setData((prev) => [...prev, ...json]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  }

  function handleScroll() {
    // scrolly - how much I have scrolled on the web page
    // innerHeight - visible section
    // scrollHeight - total height of webpage
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = useMemo(() => {
    return data?.map((image) => <Card image={image} key={image.id} />);
  }, [data]);

  return (
    <div className="mt-5 px-10 flex flex-wrap gap-4">
      {!loading && cards}
      {loading && shimmerArray.map((_, i) => <ShimmerCard key={i} />)}
    </div>
  );
}
