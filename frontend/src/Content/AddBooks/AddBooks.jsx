import { useForm } from "react-hook-form";

const AddBooks = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch("example"));
  const onSubmit = (data) => console.log(data);
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
          {...register("desc")}
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
