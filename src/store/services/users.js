import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ pageSize, page }) => ({
        url: 'users',
        params: {
          _limit: pageSize,
          _start: (page - 1) * pageSize,
        },
      }),
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi;
