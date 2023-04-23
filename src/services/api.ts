import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Bank } from 'PagaTodo/@types/api';

export const api = createApi({
  reducerPath: 'bankApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev.obtenmas.com/' }),
  endpoints: builder => ({
    getAllBanks: builder.query<Bank[], void>({
      query: () => 'catom/api/challenge/banks',
    }),
  }),
});

export const { useGetAllBanksQuery } = api;
