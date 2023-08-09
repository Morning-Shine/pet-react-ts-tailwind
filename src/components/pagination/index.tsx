import React from 'react';
import OnePage from './OnePage';
import { TPagination } from './type';

const Pagination: React.FC<TPagination> = (props) => {
  const { totalPages, changePage, currentPage } = props;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return totalPages !== 0 ? (
    <div className="flex space-x-1 items-center">
      {pages.map((page) => (
        <OnePage
          key={page}
          page={page}
          isCurrentPage={currentPage === page}
          changePage={changePage}
        />
      ))}
    </div>
  ) : (
    <div></div>
  );
};

export default Pagination;
