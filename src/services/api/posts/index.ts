import { api } from '..';
import { TPostsResponse, TPostsResponseWithHeaders } from './type';


export const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<TPostsResponseWithHeaders, string | void>({
      query: (params) => ({
        url: !!params ? `/posts?${params}` : '/posts',
        method: 'GET',
      }),
      transformResponse: (response: TPostsResponse, meta) => {
        const data = response;
        const headers = {
          xTotalCount: meta?.response?.headers.get('X-Total-Count'),
        };
        return { data, headers };
      },
      providesTags: ['Posts'],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
