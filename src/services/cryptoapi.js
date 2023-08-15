import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '729f0bcfedmsh9d2f256f9f78b0dp1656f0jsn2b1d3639e9ac',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'      
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({ 
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }), 
    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: (count) => createRequest(`/coins?limit=${count}`),    
        }),
        useGetCryptoDetails: builder.query({
           query: (coinId) => createRequest(`/coin/${coinId}`), 
        })
    })
});

export const {
   useGetCryptosQuery, useGetCryptoDetailsQuery,
}  = cryptoApi;













