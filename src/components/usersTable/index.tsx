import React from 'react';
import { USERS_TABLE_HEADERS } from 'constants/enums/usersTableHeaders';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/styles/colors.constants';
import { TUserForTable } from './type';
import { Tooltip } from 'react-tooltip';
import { LiaEye } from 'react-icons/lia';

const UsersTable: React.FC<TUserForTable> = ({ data, showDetail }) => {
  const columns = Object.keys(USERS_TABLE_HEADERS);

  const tdStyles = `ml-2 flex items-center
                    text-${COLOR_CONTRAST}-600 dark:text-${COLOR_CONTRAST}-400
                    `;

  return (
    <table className={`mt-5 w-full overflow-x-hidden
                      border border-b-0 border-${COLOR_CONTRAST}-200 dark:border-${COLOR_CONTRAST}-500`}>
      <thead>
        <tr className="flex justify-around">
          {Object.values(USERS_TABLE_HEADERS).map((header) => (
            <th
              key={header}
              className={`m-3 text-${COLOR_CONTRAST}-700 dark:text-${COLOR_CONTRAST}-500`}
            >
              {header.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex flex-col">
        {data.map((user) => (
          <tr
            className={`grid grid-cols-${columns.length} gap-x-10
                          pt-3 pb-2 border-b
                          border-${COLOR_CONTRAST}-200 dark:border-${COLOR_CONTRAST}-500
                          `}
            key={user.id}
          >
            {columns.map((column) => (
              <td
                className={tdStyles}
                /**
                 * @Morning-Shine: замена на нижнее подчёркивание,
                 * т.к. точки не отрабатывают в Tooltip
                 * */
                id={`username-${column}_${user.username}`.replaceAll('.', '_')}
                key={`username-${column}`}
              >
                {column === 'username' && (
                  <div className="w-4 h-4 mr-2">
                    <LiaEye
                      className={`text-${COLOR_MAIN}-700 cursor-pointer`}
                      onClick={() => showDetail(user.id)}
                    />
                  </div>
                )}
                <span className={'truncate'}>
                  {user[column]}
                </span>
                <Tooltip
                  className={`dark:bg-${COLOR_CONTRAST}-500`}
                  anchorSelect={`#username-${column}_${user.username}`.replaceAll(
                    '.',
                    '_'
                  )}
                  content={user[column]}
                  delayShow={1500}
                  place="bottom-start"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
