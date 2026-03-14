import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="bg-green-300 flex flex-row items-center p-4 gap-5 shadow-lg">
      <Link
        to="/"
        className="text-2xl font-bold text-gray-800 hover:text-white mt-4"
      >
        Home
      </Link>

      <Link
        to="/contact"
        className="text-2xl font-bold text-gray-800 hover:text-white mt-4"
      >
        Contact
      </Link>
      <Link
        to="/about"
        className="text-2xl font-bold text-gray-800 hover:text-white mt-4"
      >
        About
      </Link>
      <Link
        to="/footer"
        className="text-2xl font-bold textF-gray-800 hover:text-white mt-4"
      >
        Footer
      </Link>
    </div>
  );
};

export default HomePage;
