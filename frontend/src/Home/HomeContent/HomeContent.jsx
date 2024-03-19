import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const HomeContent = () => {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [reload]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(`http://localhost:8080/books/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          console.log(response.message);
        }
        const responseData = await response.json();
        console.log("Response:", responseData);
        if (responseData?.affectedRows) {
          setReload("Deleted");
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

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
                className="w-[175px] h-[275px] object-cover"
                src={dat?.cover}
                alt={dat?.title}
              />
              <h1 className="py-[5px] font-semibold text-xl">{dat?.title}</h1>
              <p>{dat?.decs}</p>
            </div>
            <div className="flex gap-2 py-[5px">
              <Link
                to={`/updateBooks/${dat?.id}`}
                className="block py-[3px] bg-green-300 px-[7px] text-xl"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(dat?.id)}
                className="py-[3px] bg-red-300 px-[7px] text-xl"
              >
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
