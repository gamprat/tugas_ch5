import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

const fetchUserData = async ({ queryKey }) => {
    const [_key] = queryKey
    const { data } =  await http3.get(_key).then((value) => {
      // then berisi respon dari api yg berhasil
      let dataHasil = {
        agam: value.data.data.name,
        email: value.data.data.email
      }
      return {data : dataHasil}

    }).catch((err) => {
      // akan dijalankan ketika terjadi eror dalam api
      if (err.response.status === 401) {
        window.location.href = "/login"
      }
    })
    return data
}

const useGetData = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
};

export {fetchUserData, useGetData}