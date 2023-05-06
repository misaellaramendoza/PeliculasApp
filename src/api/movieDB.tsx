import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'cfe247f306cdc3aa54e295b89eae7481',
        language: 'es-ES'

    }
});
export default movieDB