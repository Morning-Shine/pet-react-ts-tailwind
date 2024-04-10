import React from 'react';
import { TPictureFullscreen } from './type';
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/styles/colors.constants';

const PictureFullscreen: React.FC<TPictureFullscreen> = ({
  picture,
  title,
  nextPicture,
  previousPicture,
  isFirst,
  isLast,
}) => {
  const alter = picture?.slice(picture.lastIndexOf('/') + 1);

  return (
    <div className="p-5 pb-0 max-w-[90vw] max-h-[90vh]">
      <div
        className="w-[600px] h-[600px] max-w-[80vw] max-h-[80vw] "
      >
        <img
          src={picture}
          alt={`Просмотр изображения ${alter}`}
        />
      </div>
      <div
        className={`mt-5 flex justify-around text-4xl text-${COLOR_CONTRAST}-400 relative`}
      >
        {title && (
          <div className="absolute block w-full top-[-1.5rem]">
            <h4 className="text-center text-lg first-letter:uppercase truncate">
              {title}
            </h4>
          </div>
        )}
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
