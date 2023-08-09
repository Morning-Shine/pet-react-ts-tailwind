import React from 'react';
import { TPictureFullscreen } from './type';
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/colors/colors.constants';

const PictureFullscreen: React.FC<TPictureFullscreen> = ({
  picture,
  nextPicture,
  previousPicture,
  isFirst,
  isLast,
}) => {
  const title = picture?.slice(picture.lastIndexOf('/') + 1);
  return (
    <div className="p-5">
      <div className="w-[600px] h-[600px] max-w-[90vw]">
        <img
          src={picture}
          alt={`Просмотр изображения ${title}`}
        />
      </div>
      <div
        className={`mt-2 flex justify-around text-4xl text-${COLOR_CONTRAST}-400 dark:text-${COLOR_CONTRAST}-300`}
      >
        <div className="w-9 h-9">
          {!isFirst && (
            <HiArrowCircleLeft
              className={`cursor-pointer hover:text-${COLOR_MAIN}-700`}
              onClick={previousPicture}
            />
          )}
        </div>
        {!isLast ? (
          <HiArrowCircleRight
            className={`cursor-pointer hover:text-${COLOR_MAIN}-700`}
            onClick={nextPicture}
          />
        ) : (
          <div className="w-9 h-9"></div>
        )}
      </div>
    </div>
  );
};

export default PictureFullscreen;
