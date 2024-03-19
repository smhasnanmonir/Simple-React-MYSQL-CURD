import { useEffect, useState } from "react";

const HomeContent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {data.map((dat, i) => (
          <div
            className="py-[13px] px-[17px] w-[250px] border-2 border-black"
            key={i}
          >
            <div>
              <img
                className="w-[175px] h-full object-cover"
                src={dat?.cover}
                alt={dat?.title}
              />
              <h1 className="py-[5px] font-semibold text-xl">{dat?.title}</h1>
              <p>{dat?.decs}</p>
            </div>
            <div className="flex gap-2 py-[5px">
              <button className="py-[3px] bg-green-300 px-[7px] text-xl">
                Edit
              </button>
              <button className="py-[3px] bg-red-300 px-[7px] text-xl">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
