import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
  //   reducerPath: 'jsonplaceholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Albums', 'Posts', 'Users'],
  endpoints: () => ({}),
});
