import axios from 'axios';

const API_URL = "http://localhost:8000/api/clips/getdate/"

const searchRequest = (query) => {
    return axios.get(API_URL + "?q=" + query);
}

export default searchRequest;