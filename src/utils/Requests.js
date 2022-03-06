const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchNetflixOriginal: {
    //yes
    title: "NETFLIX ORIGINAL",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLargeRow: true,
  },
  fetchTrending: {
    //yes
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    isLargeRow: false,
  },
  fetchTopRated: {
    //yes
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    isLargeRow: false,
  },
  fetchActionMovies: {
    //yes
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    isLargeRow: false,
  },
  fetchComedyMovies: {
    //yes
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    isLargeRow: false,
  },
  fetchHorrorMovies: {
    //yes
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    isLargeRow: false,
  },
  fetchRomanticMovies: {
    //yes
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    isLargeRow: false,
  },
  fetchDocumentaries: {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    isLargeRow: false,
  },
};

export default requests;
