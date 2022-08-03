import axios from "axios";

const getTrendingMoviesAndShows =  async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=ab2ea070f9aa3c1aa576539e31964dd5`);
    return response?.data?.results
}

export default getTrendingMoviesAndShows