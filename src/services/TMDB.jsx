import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbApiKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;
// using VITE - have to use import.meta.env to access .env file 
// TO ACCESS ENV FILE :
//      createReactApp - process.env 
//      VITE - improt.meta.env

// API DOCS
//* https://developer.themoviedb.org/docs

export const tmdbApi = createApi({
    reducerPath: 'tmbdApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({

        //* Get Genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`
        }),

        //* Get Movies by [Type]
        getMovies: builder.query({
            query: ({genreIdOrCategoryName, page, searchQuery}) => {

                // Get Movies by Search
                if (searchQuery) {
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`
                }
                // Get Movies by Category
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`
                }
                // Get Movies by Genre
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
                }

                // Get Popular Movies
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`
            }
        })
    })

})

export const {
    useGetMoviesQuery,
    useGetGenresQuery,
} = tmdbApi;