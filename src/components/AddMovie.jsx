import React, { useState } from "react";
import { addMovie, getMovies } from "../api/Api";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [summary, setSummary] = useState("");
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  const handleAddMovie = (e) => {
    e.preventDefault();
    const movies = getMovies();
    const newMovie = {
      id: movies.length + 1, // Generate unique ID
      title,
      director,
      summary,
      genres,
    };
    addMovie(newMovie);
    setTitle("");
    setDirector("");
    setSummary("");
    setGenres([]);
    console.log("Movie added successfully:", newMovie);

    // Navigasi kembali ke halaman CardMovie setelah menambahkan film
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-14">
      <div className="p-3 m-3 rounded-xl shadow-xl md:w-1/2">
        <h1 className="font-bold text-3xl mb-3 text-center">Add Movie</h1>
        <form onSubmit={handleAddMovie}>
          <label htmlFor="title" className="font-bold block">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-10 px-5 outline-none my-1 outline-0 border-2 border-slate-500 rounded-xl font-semibold"
          />

          <label htmlFor="director" className="font-bold block">
            Director
          </label>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className="w-full h-10 px-5 outline-none my-1 outline-0 border-2 border-slate-500 rounded-xl font-semibold"
          />

          <label htmlFor="summary" className="font-bold block">
            Summary
          </label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            cols="10"
            rows="5"
            className="w-full px-5 outline-none my-1 outline-0 border-2 border-slate-500 rounded-xl"
          />

          <label htmlFor="genres" className="font-bold block">
            Genres
          </label>
          <div className="flex gap-2 flex-wrap">
            <input
              type="checkbox"
              value="Action"
              onChange={(e) =>
                setGenres((prevGenres) =>
                  e.target.checked
                    ? [...prevGenres, e.target.value]
                    : prevGenres.filter((genre) => genre !== e.target.value)
                )
              }
            />
            <label>Action</label>

            <input
              type="checkbox"
              value="Drama"
              onChange={(e) =>
                setGenres((prevGenres) =>
                  e.target.checked
                    ? [...prevGenres, e.target.value]
                    : prevGenres.filter((genre) => genre !== e.target.value)
                )
              }
            />
            <label>Drama</label>

            <input
              type="checkbox"
              value="Animation"
              onChange={(e) =>
                setGenres((prevGenres) =>
                  e.target.checked
                    ? [...prevGenres, e.target.value]
                    : prevGenres.filter((genre) => genre !== e.target.value)
                )
              }
            />
            <label>Animation</label>

            <input
              type="checkbox"
              value="Sci-Fi"
              onChange={(e) =>
                setGenres((prevGenres) =>
                  e.target.checked
                    ? [...prevGenres, e.target.value]
                    : prevGenres.filter((genre) => genre !== e.target.value)
                )
              }
            />
            <label>Sci-Fi</label>

            <input
              type="checkbox"
              value="Horror"
              onChange={(e) =>
                setGenres((prevGenres) =>
                  e.target.checked
                    ? [...prevGenres, e.target.value]
                    : prevGenres.filter((genre) => genre !== e.target.value)
                )
              }
            />
            <label>Horror</label>

            {/* Add more genres checkboxes as needed */}
          </div>

          <div className="flex mt-3 gap-2 justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
