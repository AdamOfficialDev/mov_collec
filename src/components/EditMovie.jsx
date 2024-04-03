import React from "react";

const EditMovie = () => {
  return (
    <div className="flex justify-center mt-14">
      <div className="p-3 m-3 rounded-xl shadow-xl md:w-1/2">
        <h1 className="font-bold text-3xl mb-3 text-center">Edit Movie</h1>
        <form action="">
          <label htmlFor="title" className="font-bold block">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full h-10 px-5 outline-none my-1 outline-0 border-2 border-slate-500 rounded-xl font-semibold"
          />

          <label htmlFor="diretor" className="font-bold">
            Diretor
          </label>
          <input
            type="text"
            name="title"
            id="director"
            className="w-full h-10 px-5 outline-none my-1 outline-0 border-2 border-slate-500 rounded-xl font-semibold"
          />

          <label htmlFor="summary" className="font-bold block">
            Summary
          </label>
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            className="w-full px-5 outline-none my-1 outline-0 border-2 border-slate-500 rounded-xl"
          />

          <label htmlFor="genres" className="font-bold block">
            Genres
          </label>
          {/* multiple choice input with checkbox */}
          <div className="flex gap-2 flex-wrap">
            <input type="checkbox" name="genre" id="genre" />
            <label htmlFor="genre">Action</label>
            <input type="checkbox" name="genre" id="genre" />
            <label htmlFor="genre">Animation</label>
            <input type="checkbox" name="genre" id="genre" />
            <label htmlFor="genre">Drama</label>
            <input type="checkbox" name="genre" id="genre" />
            <label htmlFor="genre">Horror</label>
            <input type="checkbox" name="genre" id="genre" />
            <label htmlFor="genre">Sci-Fi</label>
          </div>

          <div className="flex mt-3 gap-2 justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Update
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;
