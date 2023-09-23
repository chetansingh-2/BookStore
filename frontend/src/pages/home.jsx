import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const { logout, user } = useAuth0();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* User name at the left end on all screen sizes */}
        <div className="flex items-center gap-x-2">
          {user && (
            <>
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-gray-600">{user.name}</p>
            </>
          )}
        </div>
        {/* Logout button at the right end */}
        <div className="flex items-center gap-x-4 mt-4 sm:mt-0">
          {user && (
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-4 mt-4 sm:mt-0">
        <button
          className={`${
            showType === "table" ? "bg-sky-600" : "bg-sky-300"
          } hover:bg-sky-600 px-4 py-1 rounded-lg`}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className={`${
            showType === "card" ? "bg-sky-600" : "bg-sky-300"
          } hover:bg-sky-600 px-4 py-1 rounded-lg`}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl my-4 sm:my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
