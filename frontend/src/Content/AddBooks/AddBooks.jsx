import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBooks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(watch("example"));
  const onSubmit = async (data) => {
    console.log(data);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Insert the Data!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch("http://localhost:8080/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error(response.message);
        }

        const responseData = await response.json();
        console.log("Response:", responseData);

        if (responseData?.affectedRows === 1) {
          Swal.fire({
            title: "Inserted",
            text: "Your Book has been inserted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="max-w-6xl mx-auto py-[3%]">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label className="my-2 font-medium block">Enter Title</label>
        <input
          placeholder="Title"
          className="bg-red-100 block py-2 px-2 rounded-md"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <label className="my-2 block font-medium">Enter Description</label>
        <input
          placeholder="Description"
          className="bg-red-100 block py-2 px-2 rounded-md"
          {...register("decs")}
        />

        <label className="my-2 block font-medium">Enter Cover URL</label>
        <input
          placeholder="URL"
          className="bg-red-100 block py-2 px-2 rounded-md"
          {...register("cover")}
        />
        <input
          className="my-2 block cursor-pointer bg-red-500 text-white px-4 py-2 hover:text-black duration-200 ease-linear transition-all"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddBooks;
