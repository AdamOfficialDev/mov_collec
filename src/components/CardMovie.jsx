import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Menggunakan useNavigate dari react-router-dom
import { movies } from "../api/Api.js"; // Sesuaikan dengan path yang benar ke file Api.js
import Navbar from "./Navbar";

const CardMovie = () => {
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    // Mengambil data dari movies (Api.js) pada saat komponen dipasang
    setMoviesData(movies);
  }, []); // Gunakan array kosong agar useEffect hanya dijalankan sekali saat komponen dipasang

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="flex flex-wrap">
          {moviesData.map((movie) => (
            <div key={movie.id} className="w-full md:w-1/3 p-4 text-slate-100">
              <div className="bg-gray-800 rounded-lg shadow-lg p-3">
                <h1 className="text-2xl font-bold">{movie.title}</h1>
                <p className="text-gray-200 text-sm my-2">
                  Directed by <span className="italic">{movie.director}</span>
                </p>
                <p>{movie.summary}</p>
                <div className="flex">
                  <span className="font-semibold">Genre: </span>
                  <p>{movie.genres}</p>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4"
          onClick={() => {
            navigate("/add-movie"); // Menggunakan navigate untuk navigasi ke halaman AddMovie
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default CardMovie;
