import { COLOR_MAIN } from 'constants/colors/colors.constants';
import React from 'react';
import { TPicturePreview } from './type';

const PicturePreview: React.FC<TPicturePreview> = (props) => {
  const { size } = props;
  let dimentions = {
    height: 0
  };

  switch (size) {
    case 'xs':
      dimentions.height = 16;
      break;
    case 'md':
      dimentions.height = 36;
      break;
  }
  return (
    <div
      className={`rounded h-${dimentions.height} w-full border-2
    flex items-center justify-center 
    border-${COLOR_MAIN}-600 dark:border-${COLOR_MAIN}-700`}
    >
      <p
        className={`text-4xl text-center align-middle
      text-${COLOR_MAIN}-600 dark:text-${COLOR_MAIN}-700`}
      >
        ?
      </p>
    </div>
  );
};

export default PicturePreview;
