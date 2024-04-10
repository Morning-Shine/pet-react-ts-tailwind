import React from 'react';
import { TUserForCard } from './type';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/styles/colors.constants';
import { LiaEye } from 'react-icons/lia';


const UserCard: React.FC<TUserForCard> = (props) => {
  const { id, name, username, email, showDetail } = props;
  return (
    <div
      className={`flex flex-col justify-between border rounded border-${COLOR_CONTRAST}-200 
                  dark:border-${COLOR_CONTRAST}-500 m-2 px-4 py-2`}
    >
      <div>
        <b className={`block text-${COLOR_MAIN}-700 text-right`}>@{username}</b>
        <div className={'prose'}>
          <h3
            className={`text-${COLOR_CONTRAST}-700 dark:text-${COLOR_CONTRAST}-300`}
          >
            {name}
          </h3>
          <p
            className={`text-${COLOR_CONTRAST}-600 dark:text-${COLOR_CONTRAST}-400 truncate`}
          >
            {email}
          </p>
        </div>
      </div>
      <div className={`mt-2 flex justify-end text-${COLOR_MAIN}-700`}>
        <LiaEye
          className="cursor-pointer"
          onClick={() => showDetail(id)}
        />
      </div>
    </div>
  );
};

export default UserCard;
