import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/dist/query";

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '729f0bcfedmsh9d2f256f9f78b0dp1656f0jsn2b1d3639e9ac',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
   reducerPath: 'cryptoNewsApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
    getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
   }) 
});

export const { getCryptoNewQuery } = cryptoNewsApi;





