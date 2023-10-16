import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataMovie = async ({queryKey}) => {
    // v3
    // const { data } = await http.get(`${API_ENDPOINT.NOW_PLAYING}?page=${ page ? page : 1}`)

    // v4
    const [_key, _params] = queryKey
    const { data } = await http.get(_key, { params: _params })
    return data
}

// Untuk dinamis handle
const useMovieDataQuery = (options) => {
    // v3
    // return useQuery(["userData", page], () => fetchDataMovie(page));

    // v4
    return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataMovie);
};

export {fetchDataMovie, useMovieDataQuery}