export type TAlbum = {
  userId: number;
  id: number;
  title: string;
};

export type TAlbumWithPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
