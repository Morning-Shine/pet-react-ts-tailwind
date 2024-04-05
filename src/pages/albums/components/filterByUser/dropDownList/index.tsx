import React from 'react';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/colors/colors.constants';
import { useGetUsersQuery } from 'services/api/users';
import {
  USERS_SELECT_DISABLED_OPTION,
  USERS_SELECT_NO_USERS_OPTION,
} from 'constants/enums/selectOptions';
import { TFilterByUser } from '../type';


const DropDownList: React.FC<TFilterByUser> = ({
  filteredUserId,
  changeUserHandler,
}) => {
  const { data, isFetching } = useGetUsersQuery();
  //TODO сделать универсальный компонент?
  return (
    <div className={`h-7 flex grow md:grow-0`}>
      {!!data && !isFetching && (
        <select
          value={filteredUserId}
          onChange={(e) => changeUserHandler(+e.target.value)}
          className={`px-2 focus:outline-none w-full
                      bg-${COLOR_CONTRAST}-50 dark:bg-${COLOR_MAIN}-900 
                      dark:text-${COLOR_CONTRAST}-200
                      rounded-sm border border-${COLOR_CONTRAST}-200 dark:border-${COLOR_MAIN}-500 
                      `}
        >
          {!!data.length ? (
            <>
              <option
                disabled
                hidden
                value=""
                className={`disabled:text-${COLOR_MAIN}-100
                            disabled:dark:text-${COLOR_CONTRAST}-100`}
              >
                {USERS_SELECT_DISABLED_OPTION}
              </option>
              {data.map((user) => (
                <option
                  value={user.id}
                  key={user.id}
                  className={`text-${COLOR_CONTRAST}-700 dark:text-${COLOR_CONTRAST}-200`}
                >
                  {user.username}
                </option>
              ))}
            </>
          ) : (
            <option
              disabled
              selected
            >
              {USERS_SELECT_NO_USERS_OPTION}
            </option>
          )}
        </select>
      )}
    </div>
  );
};

export default DropDownList;
