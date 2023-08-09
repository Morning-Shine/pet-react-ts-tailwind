import { api } from '..';
import { TUsersResponse, TUserRequest } from './type';
import { TUser } from 'types/user';


export const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<TUsersResponse, void>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    getUserById: build.query<TUser, TUserRequest>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
