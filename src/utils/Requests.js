const API_KEY = "4c4ee6c94ac03a7d511eece8c8513c51";

const requests = {
  fetchTrending: {
    //yes
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchNetflixOriginal: {
    //yes
    title: "Netflix original",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  fetchTopRated: {
    //yes
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    //yes
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    //yes
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    //yes
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanticMovies: {
    //yes
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchDocumentaries: {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
};

export default requests;
