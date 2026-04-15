import { useEffect, useState } from "react";
import { LIMIT } from "../../utils/constants";
import PrdouctCard from "./ProductCard";
import ShimmerCard from "./ShimmerCard";

const shimmerArray = Array(10).fill(0);

export default function Pagination() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);
  const [totalEntities, setTotalEntities] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const resp = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${page * LIMIT}`,
      );
      const json = await resp.json();
      setData(json.products);
      setTotalEntities(json.total);
      setTotalPages(Math.ceil(json.total / LIMIT));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  const pageBar = [];
  for (let i = 0; i < totalPages; i++) {
    pageBar.push(i + 1);
  }
  console.log(page);

  return (
    <div className="py-5 px-10 ">
      <h2 className="font-bold text-xl py-3">Pagination</h2>
      <div className=" flex flex-wrap  gap-3">
        {loading && shimmerArray.map((_, i) => <ShimmerCard key={i} />)}
        {!loading &&
          data?.map((product) => {
            return (
              <PrdouctCard
                key={product?.id}
                title={product?.title}
                desc={product?.description}
                image={product?.images}
                price={product?.price}
              />
            );
          })}
      </div>
      <div className="flex justify-center gap-5 py-4">
        {page >= 1 && (
          <span>
            <button
              onClick={() => {
                if (page >= 1) setPage(page - 1);
              }}
              className="bg-gray-200 rounded-lg cursor-pointer font-bold p-1"
            >
              Prev
            </button>
          </span>
        )}
        {!loading &&
          pageBar.map((ele) => {
            return (
              <span
                key={ele}
                className={`rounded-xl justify-center ${page === ele - 1 ? "bg-gray-400" : "bg-gray-200"} p-1`}
              >
                <button
                  onClick={() => {
                    setPage(ele - 1);
                  }}
                  className="cursor-pointer"
                >
                  {ele}
                </button>
              </span>
            );
          })}

        {page < totalPages - 1 && (
          <span>
            <button
              disabled={page >= totalPages - 1}
              onClick={() => {
                if (page < totalPages - 1) setPage(page + 1);
              }}
              className="bg-gray-200 rounded-xl cursor-pointer font-bold p-1"
            >
              Next
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
