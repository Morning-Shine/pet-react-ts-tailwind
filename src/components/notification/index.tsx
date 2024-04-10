import React from 'react';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/styles/colors.constants';
import { TNotification } from './type';
import { IoWarning } from 'react-icons/io5';
import { MdError } from 'react-icons/md';
import { FaCircleInfo } from 'react-icons/fa6';

const Notification: React.FC<TNotification> = ({ msg, size, type }) => {
  let icon;
  switch (type) {
    case 'warning':
      icon = <IoWarning />;
      break;
    case 'error':
      icon = <MdError />;
      break;
    case 'info':
      icon = <FaCircleInfo />;
      break;
  }

  return (
    <article className={`flex grow align-middle justify-center text-${size}`}>
      <p
        className={`text-${COLOR_MAIN}-700 dark:text-${COLOR_MAIN}-500 place-self-center h-min pr-1`}
      >
        {icon}
      </p>
      <p
        className={`text-${COLOR_CONTRAST}-700 dark:text-${COLOR_CONTRAST}-300 
        h-min place-self-center`}
      >
        {msg}
      </p>
    </article>
  );
};

export default Notification;
