import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieList } from "../assets/components/MovieList";
import http from "../utils/http";
import { fetchDataMovie, useMovieDataQuery } from "../services/get-data-movie";

export const MovePage = () => {
  const [dataAwal, setDataAwal] = useState([]);
  const [loadData, setLoadData] = useState([]);
  const [dataSearch, setDataSearch] = useState("");
  const [PageNow, setPageNow] = useState(1);

  const { data: fetchUser } = useMovieDataQuery({
    language: "en-US",
    page: PageNow
  })

  console.log(fetchUser, "data")

  return (
    <div className="relative">
        <h1>{PageNow}</h1>
        <button onClick={() => {
            setPageNow(PageNow + 1)
        }}>Plus</button>
    </div>
  )
};
