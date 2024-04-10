import React, { useCallback, useState } from 'react';
import { useGetUsersQuery } from 'services/api/users';
import UserCard from 'components/userCard';
import Modal from 'components/modal';
import UserDetailInfo from 'components/userDetaiInfo';
import Loader from 'components/loader';
import Notification from 'components/notification';
import { FILED_TO_LOAD } from 'constants/fixedText/notifications';
import ChangeUsersView from './components/ChangeUsersView';
import { useAppSelector } from 'utils/hooks/useRedux';
import UsersTable from 'components/usersTable';
import { HEADER_HEIGTH } from 'constants/styles/sizes.constants';

const PageUsers: React.FC = () => {
  const view = useAppSelector((state) => state.users.view);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [userIdToDetail, setIdUserToDetail] = useState<number | null>(null);

  const { data, isFetching } = useGetUsersQuery();

  const showUserDetail = (id: number) => {
    setIsDetailsOpen(true);
    setIdUserToDetail(id);
  };

  const closeUserDetailInfo = () => {
    setIsDetailsOpen(false);
    setIdUserToDetail(null);
  };

  //TODO геометку на картах?
  const userToDetail =
    !!data && !!data.length && userIdToDetail
      ? data.find((user) => user.id === userIdToDetail)
      : null;

  return (
    <>
      <section className={`w-4/5 mt-${HEADER_HEIGTH} mx-auto flex flex-col grow`}>
        {isFetching && (
          <div className="flex grow align-middle justify-center">
            <Loader />
          </div>
        )}
        {!isFetching &&
          !!data &&
          (!!data.length ? (
            <>
              <ChangeUsersView />
              {view === 'cards' ? (
                <div className="w-full mx-auto grid grid-cols-grid-cards gap-3 py-6">
                  {data.map((user) => (
                    <UserCard
                      key={user.id}
                      id={user.id}
                      name={user.name}
                      username={user.username}
                      email={user.email}
                      showDetail={showUserDetail}
                    />
                  ))}
                </div>
              ) : (
                <UsersTable data={data} showDetail={showUserDetail} />
              )}
            </>
          ) : (
            <Notification
              msg={FILED_TO_LOAD}
              size="xl"
              type={'error'}
            />
          ))}
      </section>
      {isDetailsOpen && (
        <Modal
          children={
            userToDetail ? <UserDetailInfo user={userToDetail} /> : null
          }
          onClose={closeUserDetailInfo}
          size={'sm'}
        />
      )}
    </>
  );
};

export default PageUsers;
