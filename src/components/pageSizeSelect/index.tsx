import React from 'react';
import { PAGE_ALBUMS_SIZES } from 'constants/enums/pageSizes';
import { TPageSizeSelectProps } from './type';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/colors/colors.constants';


const PageSizeSelect: React.FC<TPageSizeSelectProps> = (props) => {
  const { onChange } = props;
  return (
    <div className="h-20 py-4 flex items-center">
      <label className="flex justify-between place-items-center space-x-1">
        <p
          className={`text-lg text-${COLOR_CONTRAST}-900 dark:text-${COLOR_CONTRAST}-300`}
        >
          Отображать на странице:
        </p>
        <select
          //   defaultValue={['orange', 'banana']}
          className={`max-h-7 w-10 text-center px-2 focus:outline-none appearance-none
          dark:bg-${COLOR_MAIN}-700
          rounded-sm border-2 border-${COLOR_MAIN}-600 dark:border-${COLOR_MAIN}-700
          text-${COLOR_CONTRAST}-900 dark:text-${COLOR_CONTRAST}-300 cursor-pointer`}
          onChange={(e) => onChange(e)}
        >
          {PAGE_ALBUMS_SIZES.map((option) => (
            <option
              key={option}
              className={`text-${COLOR_CONTRAST}-900 dark:text-${COLOR_CONTRAST}-300`}
            >
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default PageSizeSelect;
