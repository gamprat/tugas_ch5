import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MovieList } from '../assets/components/MovieList';
import http from '../utils/http';
import { fetchDataMovie, useMovieDataQuery } from '../services/get-data-movie';

export const MoviePage = () => {
  const [dataAwal, setDataAwal] = useState([]);
  const [loadData, setLoadData] = useState([]);
  const [dataSearch, setDataSearch] = useState("");
  const [PageNow, setPageNow] = useState(1);

  const getDataMovie = async () => {
    const data =  await fetchDataMovie()
    setLoadData(data.results)
  };

  useEffect(() => {
    getDataMovie();
  }, []);

  const filterData = (e) => {
    setLoadData(
      dataAwal.filter((valueFilter) => valueFilter.name.includes(dataSearch))
    );
  };

  return (
    <div className='bg-[#1e1e2a]'>
        <div className='mb-[1rem] items-center justify-center flex flex-row space-x-4'>
            <h1 className='text-[#ffb43a] text-[55px]'>Agam's Movie</h1>
            <input className='border' onChange={(e) => {setDataSearch(e.target.value)}}></input>
            <button className='text-[white] bg-[#ffb43a] px-[15px] py-[5px] rounded-sm' onClick={() => {filterData()}}>Search</button>
        </div>
        <div className='flex flex-wrap'>
        {loadData.map((value, index) => {
            return <MovieList key={index} setData={setLoadData} dataMovie={value} dataAll={loadData}></MovieList>
        })}
        </div>
    </div>
  )
}
