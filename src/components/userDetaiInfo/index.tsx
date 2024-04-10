import React from 'react';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/styles/colors.constants';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import { TUserDetail } from './type';
import { formatAddressObjToSrg } from 'utils/formatAddress';



const UserDetailInfo: React.FC<TUserDetail> = ({ user }) => {

  const iconsStyles = `text-${COLOR_MAIN}-700 mr-3 self-center`;
  const pStyles = `text-${COLOR_CONTRAST}-600 dark:text-${COLOR_CONTRAST}-400 truncate`;

  return (
    <div className="w-96 sm:w-[450px]">
      <div
        className={`text-${COLOR_CONTRAST}-700 dark:text-${COLOR_CONTRAST}-300 
        `}
        // prose-p:text-${COLOR_CONTRAST}-600 dark:prose-p:text-${COLOR_CONTRAST}-50
      >
        <h3 className="text-2xl font-bold">{user.name}</h3>
        <b className={`text-${COLOR_MAIN}-700`}>@{user.username}</b>
        <p className={pStyles}>{user.email}</p>
      </div>
          <hr className="my-3" />
      <div className="flex">
        <BsFillTelephoneFill className={iconsStyles} />
        <p className={pStyles}>{user.phone}</p>
      </div>
      <div className="flex">
        <TbWorldWww className={iconsStyles} />
        <p className={pStyles}>{user.website}</p>
      </div>
      {user.address && (
        <>
          <hr className="my-3" />
          <div>
            <p className={`text-${COLOR_CONTRAST}-600 dark:text-${COLOR_CONTRAST}-400`}>
              адрес: {formatAddressObjToSrg(user.address)}
            </p>
          </div>
        </>
      )}
      {user.company && (
        <div>
          <p className={`text-${COLOR_CONTRAST}-600 dark:text-${COLOR_CONTRAST}-400`}>организация: {user.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetailInfo;
