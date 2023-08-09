import { api } from '..';
import {
  TAlbumsResponse,
  TAlbumsResponseWithHeaders,
  TAlbumWithPhotoResponse,
  TAlbumWithPhotoRequest,
} from './type';

export const albumsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<TAlbumsResponseWithHeaders, string | void>({
      query: (params) => ({
        url: !!params ? `/albums?${params}` : '/albums',
        method: 'GET',
      }),
      transformResponse: (response: TAlbumsResponse, meta) => {
        const data = response;
        const headers = {
          xTotalCount: meta?.response?.headers.get('X-Total-Count'),
        };
        return { data, headers };
      },
      providesTags: ['Albums'],
    }),
    getAlbumPhoto: build.query<TAlbumWithPhotoResponse, TAlbumWithPhotoRequest>(
      {
        query: ({ id, limit }) => ({
          url: !!limit
            ? `/albums/${id}/photos?_limit=${limit}`
            : `/albums/${id}/photos`,
          method: 'GET',
        }),
      }
    ),
  }),
});

export const { useGetAlbumsQuery, useGetAlbumPhotoQuery } = albumsApi;
