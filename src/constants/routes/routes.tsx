import { Suspense, lazy } from 'react';
import PageHome from 'pages/main';
// import PageUsers from 'pages/users';
// import PageAlbums from 'pages/albums';
// import PageAlbum from 'pages/album';
// import PagePosts from 'pages/posts';
import { IRouteStatic, IRouteDymanic } from './type.routes.constants';
import LoadingPage from 'components/loadingPage';

const PageUsers = lazy(() => import('pages/users'));
const PageAlbums = lazy(() => import('pages/albums'));
const PageAlbum = lazy(() => import('pages/album'));
const PagePosts = lazy(() => import('pages/posts'));

export const STATIC_ROUTES: IRouteStatic[] = [
  {
    path: '/',
    name: 'Главная',
    element: <PageHome />,
  },
  {
    path: '/users',
    name: 'Пользователи',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PageUsers />,
      </Suspense>
    ),
  },
  {
    path: '/albums',
    name: 'Альбомы',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PageAlbums />
      </Suspense>
    ),
  },
  {
    path: '/posts',
    name: 'Публикации',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PagePosts />
      </Suspense>
    ),
  },
];

export const DYNAMIC_ROUTES: IRouteDymanic[] = [
  {
    path: 'albums/:id',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <PageAlbum />
      </Suspense>
    ),
  },
];
