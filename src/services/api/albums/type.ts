import { TAlbum, TAlbumWithPhoto } from 'types/album';

export type TAlbumsResponse = TAlbum[];

export type TAlbumsResponseWithHeaders = {
  data: TAlbum[];
  headers: { [key: string]: string | undefined | null };
};

export type TAlbumWithPhotoResponse = TAlbumWithPhoto[];

export type TAlbumWithPhotoRequest = { id: number | string; limit?: number | string };
