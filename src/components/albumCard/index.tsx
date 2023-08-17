import React from 'react';
import { TAlbumCard } from './type';
import { COLOR_CONTRAST } from 'constants/colors/colors.constants';
import { Tooltip } from 'react-tooltip';
import { useGetAlbumPhotoQuery } from 'services/api/albums';
import PicturePreview from 'components/picturePreview';
import { useGetUserByIdQuery } from 'services/api/users';
import { Link } from 'react-router-dom';

const AlbumCard: React.FC<TAlbumCard> = ({ album }) => {
  const limitPictures = 4;

  const { data } = useGetAlbumPhotoQuery({
    id: album.id,
    limit: limitPictures,
  });

  const { data: userInfo } = useGetUserByIdQuery({ id: album.userId });

  const notLoadedPictures = [];
  for (let i = 0; i < limitPictures; i++) {
    notLoadedPictures.push(i);
  }

  return (
    <div
      className={`max-w-md flex flex-col justify-between border rounded border-${COLOR_CONTRAST}-200 dark:border-${COLOR_CONTRAST}-500 m-2 px-4 py-2`}
    >
      <p
        className={`dark:text-${COLOR_CONTRAST}-100 truncate`}
        id={`albumId-${album.id}`}
      >
        {album.title}
      </p>
      <hr className="mb-2" />
      <Link
        className="grid grid-rows-2 grid-cols-2 gap-2 justify-items-center"
        to={`${album.id}`}
        state={{ albumName: album.title }}
      >
        {data && !!data.length
          ? data.map((picture) => (
              <img
                key={picture.id}
                src={picture.thumbnailUrl}
                alt={picture.title}
                className="rounded-md h-16 w-full object-cover"
              />
            ))
          : notLoadedPictures.map((item) => (
              <PicturePreview
                key={item}
                size="xs"
              />
            ))}
      </Link>
      <div className="mt-1 flex justify-between">
        <p className={`dark:text-${COLOR_CONTRAST}-100 truncate`}>автор:</p>
        <p className={`dark:text-${COLOR_CONTRAST}-100 truncate`}>
          {userInfo?.username ? userInfo.username : 'нет информации'}
        </p>
      </div>
      <Tooltip
        anchorSelect={`#albumId-${album.id}`}
        content={album.title}
        place="bottom"
        className={`dark:bg-${COLOR_CONTRAST}-500`}
      />
    </div>
  );
};

export default AlbumCard;
