import PageHome from 'pages/main';
import PageUsers from 'pages/users';
import PageAlbums from 'pages/albums';
import PageAlbum from 'pages/album';
import { IRouteStatic, IRouteDymanic } from './type.routes.constants';

export const STATIC_ROUTES: IRouteStatic[] = [
  {
    path: '/',
    name: 'Главная',
    element: <PageHome />,
  },
  {
    path: '/users',
    name: 'Пользователи',
    element: <PageUsers />,
  },
  {
    path: '/albums',
    name: 'Альбомы',
    element: <PageAlbums />,
  },
  {
    path: '/posts',
    name: 'Публикации',
    element: null,
  },
];

export const DYNAMIC_ROUTES: IRouteDymanic[] = [
  {
    path: 'albums/:id',
    element: <PageAlbum />,
  },
];
