import React, { useEffect } from 'react';
import { useGetPostsQuery } from 'services/api/posts';
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux';
import PageSizeSelect from 'components/pageSizeSelect';
import Pagination from 'components/pagination';
import Loader from 'components/loader';
import { changePage, setPagesTotal } from 'store/postsSlice';
import { changePostsPageSize } from 'store/pageSizesSlice';
import { PAGE_POST_SIZES } from 'constants/enums/pageSizes';

//TODO в роутах добавить lazy?
const PagePosts: React.FC = () => {
  const pageSize = useAppSelector((state) => state.pageSizes.posts);
  const currentPage = useAppSelector((state) => state.posts.page);
  const totalPages = useAppSelector((state) => state.posts.pagesTotal);

  const params = new URLSearchParams({
      _limit: pageSize.toString(),
      _page: currentPage.toString(),
  }).toString();

  const { data, isFetching } = useGetPostsQuery(params);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.headers?.xTotalCount) {
      const calcTotal = +data.headers.xTotalCount / pageSize;
      dispatch(setPagesTotal(calcTotal));
    }
    return () => {
      dispatch(setPagesTotal(0));
    };
  }, [data, dispatch, pageSize]);

  const onPageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +e.target.value as (typeof PAGE_POST_SIZES)[number];
    dispatch(changePostsPageSize(value));
    dispatch(changePage(1));
  };

  const onPageChange = (page: number) => dispatch(changePage(page));

  console.log('data', data);

  return (
    <section className="w-4/5 mx-auto flex flex-col justify-between grow">
      {isFetching && (
        <div className="flex grow align-middle justify-center">
          <Loader />
        </div>
      )}
      POSTS
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-3">
        <Pagination
          totalPages={totalPages}
          changePage={onPageChange}
          currentPage={currentPage}
        />
        <PageSizeSelect 
          pageSizes={PAGE_POST_SIZES}
          pageSize={pageSize}
          onChange={onPageSizeChange} />
      </div>
    </section>
  );
};

export default PagePosts;
