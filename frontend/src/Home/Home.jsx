import { Link } from "react-router-dom";
import HomeContent from "./HomeContent/HomeContent";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto py-[2%]">
        <div className="py-[15px]">
          <Link
            className="inline-block bg-orange-300 text-xl py-2 px-3"
            to={"/addBooks"}
          >
            Add Books
          </Link>
        </div>
        <HomeContent></HomeContent>
      </div>
    </div>
  );
};

export default Home;
