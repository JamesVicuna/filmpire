import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbApiKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;
// using VITE - have to use import.meta.env to access .env file 
// TO ACCESS ENV FILE :
//      createReactApp - process.env 
//      VITE - improt.meta.env 

const page = 1;
// https://api.themoviedb.org/3/movie/popular

export const tmdbApi = createApi({
    reducerPath: 'tmbdApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
        })
    })

})

export const {
    useGetMoviesQuery,
} = tmdbApi;