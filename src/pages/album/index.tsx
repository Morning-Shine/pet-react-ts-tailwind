import React, { useState } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { COLOR_MAIN } from 'constants/styles/colors.constants';
import { useGetAlbumPhotoQuery } from 'services/api/albums';
import { skipToken } from '@reduxjs/toolkit/query/react';
import Modal from 'components/modal';
import PictureFullscreen from 'components/pictureFullscreen';
import { TPictureToFullscreen } from './type';
import { HEADER_HEIGTH } from 'constants/styles/sizes.constants';

const PageAlbum: React.FC = () => {
  const [isFullscreenView, setFullscreenView] = useState(false);
  const [pictureToFullscreen, setPictureToFullscreen] =
    useState<TPictureToFullscreen | null>(null);

  const { id } = useParams();
  const { state: linkProps } = useLocation();

  const { data } = useGetAlbumPhotoQuery(
    {
      id: (id as string) ?? skipToken,
    },
    { skip: !id }
  );

  const showFullscreen = (picture: TPictureToFullscreen) => {
    setFullscreenView(true);
    setPictureToFullscreen(picture);
  };

  const closeFullscreenView = () => {
    setFullscreenView(false);
    setPictureToFullscreen(null);
  };

  /**TODO можно объединить функции смены */
  const nextPicture = () => {
    if (data && !!data.length) {
      const currentItem = data.findIndex(
        (item) => item.id === pictureToFullscreen?.id
      );
      const nextItem = data[currentItem + 1];
      if (nextItem) {
        setPictureToFullscreen({
          id: nextItem.id,
          url: nextItem.url,
          title: nextItem.title,
        });
      }
    }
  };

  const previousPicture = () => {
    if (data && !!data.length) {
      const currentItem = data.findIndex(
        (item) => item.id === pictureToFullscreen?.id
      );
      const previousItem = data[currentItem - 1];
      if (previousItem) {
        setPictureToFullscreen({
          id: previousItem.id,
          url: previousItem.url,
          title: previousItem.title,
        });
      }
    }
  };

  return linkProps?.albumName ? (
    <section className={`w-4/5 mx-auto mt-${HEADER_HEIGTH}`}>
      <div
        className={`flex items-center
          mt-5 space-x-2
          text-${COLOR_MAIN}-600`}
      >
        <Link
          to="/albums"
          className="underline"
        >
          Альбомы
        </Link>
        <SlArrowRight />
        <p>{linkProps.albumName}</p>
      </div>
      {data && !!data.length && (
        <div className="my-5 grid grid-cols-grid-cards gap-5 justify-items-center">
          {data.map((picture) => (
            <img
              key={picture.id}
              src={picture.thumbnailUrl}
              alt={picture.title}
              className="rounded-md h-36 w-full object-cover transform transition duration-400 hover:scale-110 cursor-pointer"
              onClick={() =>
                showFullscreen({
                  url: picture.url,
                  id: picture.id,
                  title: picture.title,
                })
              }
            />
          ))}
        </div>
      )}
      {isFullscreenView && (
        <Modal
          children={
            pictureToFullscreen ? (
              <PictureFullscreen
                picture={pictureToFullscreen.url}
                title={pictureToFullscreen.title}
                nextPicture={nextPicture}
                previousPicture={previousPicture}
                isFirst={
                  data?.findIndex(
                    (item) => item.id === pictureToFullscreen?.id
                  ) === 0
                }
                isLast={
                  data
                    ? data.findIndex(
                        (item) => item.id === pictureToFullscreen?.id
                      ) ===
                      data.length - 1
                    : false
                }
              />
            ) : null
          }
          onClose={closeFullscreenView}
          size={'md'}
        />
      )}
    </section>
  ) : (
    <Navigate to="/albums" />
  );
};

export default PageAlbum;
