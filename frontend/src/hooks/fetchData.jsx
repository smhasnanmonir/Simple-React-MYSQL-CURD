// const fetchData = () => {
//   const { isPending, error, data, isFetching } = useQuery({
//     queryKey: ["repoData"],
//     queryFn: () =>
//       fetch("http://localhost:8080/books").then((res) => res.json()),
//   });

//   if (isPending) return "Loading...";

//   if (error) return "An error has occurred: " + error.message;

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{" "}
//       <strong>✨ {data.stargazers_count}</strong>{" "}
//       <strong>🍴 {data.forks_count}</strong>
//       <div>{isFetching ? "Updating..." : ""}</div>
//     </div>
//   );
// };

// export default fetchData;
