import React from 'react';
import { TOnePage } from './type';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/colors/colors.constants';
import classNames from 'classnames';

const OnePage: React.FC<TOnePage> = ({ page, isCurrentPage, changePage }) => {
  return (
    <div
      className={classNames(
        `h-7 w-7 min-w-min text-center
      rounded-sm border-2 border-${COLOR_MAIN}-600 dark:border-${COLOR_MAIN}-700
      text-${COLOR_CONTRAST}-900 dark:text-${COLOR_CONTRAST}-300`,
        isCurrentPage
          ? `bg-${COLOR_MAIN}-600 dark:bg-${COLOR_MAIN}-700`
          : `cursor-pointer 
            hover:bg-${COLOR_MAIN}-500 hover:dark:bg-${COLOR_MAIN}-600 
      `
      )}
      onClick={isCurrentPage ? undefined : () => changePage(page)}
    >
      {page}
    </div>
  );
};

export default OnePage;
