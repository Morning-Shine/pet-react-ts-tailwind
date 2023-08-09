import React from 'react';
import { TUserForCard } from './type';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/colors/colors.constants';
import { LiaEye } from 'react-icons/lia';

//TODO включить обратные кавычки
const UserCard: React.FC<TUserForCard> = (props) => {
  const { id, name, username, email, showDetail } = props;
  return (
    <div
      // className="flex flex-col justify-between border rounded border-neutral-200 dark:border-neutral-500 m-2 px-4 py-2"
      className={`flex flex-col justify-between border rounded border-${COLOR_CONTRAST}-200 dark:border-${COLOR_CONTRAST}-500 m-2 px-4 py-2`}
    >
      <div>
        <b
          // className="block text-teal-700 text-right"
          className={`block text-${COLOR_MAIN}-700 text-right`}
        >
          @{username}
        </b>
        <div
          // className="prose prose-headings:text-neutral-700 dark:prose-headings:text-neutral-300
          //  prose-p:text-neutral-600 dark:prose-p:text-neutral-50"
          className={`prose prose-headings:text-${COLOR_CONTRAST}-700 dark:prose-headings:text-${COLOR_CONTRAST}-300
          prose-p:text-${COLOR_CONTRAST}-600 dark:prose-p:text-${COLOR_CONTRAST}-50`}
        >
          <h3>{name}</h3>
          <p
            // className="text-neutral-600 dark:text-neutral-400 truncate"
            className={`text-${COLOR_CONTRAST}-600 dark:text-${COLOR_CONTRAST}-400 truncate`}
          >
            {email}
          </p>
        </div>
      </div>
      <div
        // className="mt-2 flex justify-end text-teal-700"
        className={`mt-2 flex justify-end text-${COLOR_MAIN}-700`}
      >
        <LiaEye
          className="cursor-pointer"
          onClick={() => showDetail(id)}
        />
      </div>
    </div>
  );
};

export default UserCard;
