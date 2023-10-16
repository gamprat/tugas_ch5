import React from 'react'

export const MovieList = (props) => {
  return (
    <div className='flex items-center justify-center px-5'>
      <div className="relative w-[15rem] h-[8rem] m-4 rounded-lg overflow-hidden">
        <img className='items-center justify-center rounded-lg hover:scale-110' src={`https://image.tmdb.org/t/p/original/${props.dataMovie.backdrop_path}`}></img>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-end pb-3 text-white">
          <h3 className='text-center'>{props.dataMovie.title}</h3>
        </div>
      </div>
    </div>
  )
}
