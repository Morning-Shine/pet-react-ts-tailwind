import { TPost } from 'types/post';


export type TPostsResponse = TPost[];

export type TPostsResponseWithHeaders = {
    data: TPost[];
    headers: { [key: string]: string | undefined | null };
  };