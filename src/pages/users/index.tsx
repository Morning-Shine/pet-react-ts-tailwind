import React, { useState } from 'react';
import { useGetUsersQuery } from 'services/api/users';
import UserCard from 'components/userCard';
import Modal from 'components/modal';
import UserDetailInfo from 'components/userDetaiInfo';

const PageUsers: React.FC = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [userIdToDetail, setIdUserToDetail] = useState<number | null>(null);

  const { data } = useGetUsersQuery();

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
      <section className="w-4/5 mx-auto grid grid-cols-grid-cards gap-3 py-6">
        {data &&
          data.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              showDetail={showUserDetail}
            />
          ))}
      </section>
      {isDetailsOpen && (
        <Modal
          children={
            userToDetail ? <UserDetailInfo user={userToDetail} /> : null
          }
          onClose={closeUserDetailInfo}
        />
      )}
    </>
  );
};

export default PageUsers;
