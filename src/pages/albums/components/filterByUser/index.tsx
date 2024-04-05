import React from 'react';
import DropDownList from './dropDownList';
import { TFilterByUser } from './type';
import { LuFilterX } from 'react-icons/lu';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/colors/colors.constants';

const FilterByUser: React.FC<TFilterByUser> = ({
  filteredUserId,
  changeUserHandler,
}) => {
  return (
    <div className="flex items-center
                    justify-stretch md:justify-normal">
      <DropDownList
        filteredUserId={filteredUserId}
        changeUserHandler={changeUserHandler}
      />
      <div
        className={`text-xl ml-2
                    text-${COLOR_CONTRAST}-600 dark:text-${COLOR_MAIN}-600
                    hover:text-red-600 dark:hover:text-red-800
                    cursor-pointer`}
      >
        <LuFilterX onClick={() => changeUserHandler('')} />
      </div>
    </div>
  );
};

export default FilterByUser;
