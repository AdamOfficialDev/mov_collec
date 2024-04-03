// Api.js
export let movies = [
  {
    id: 1,
    title: "Spiderman",
    director: "Sam Raimi",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi id doloremque mollitia corporis magni, fugiat officiis iusto nesciunt laudantium.",
    genres: "Action",
  },
  {
    id: 2,
    title: "Upin ipin",
    director: "Kak ros",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi id doloremque mollitia corporis magni, fugiat officiis iusto nesciunt laudantium.",
    genres: "Action",
  },
];

export const getMovies = () => movies;

export const addMovie = (newMovie) => {
  movies = [...movies, newMovie];
};
