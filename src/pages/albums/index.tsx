import React, { useEffect } from 'react';
import AlbumCard from 'components/albumCard';
import { useGetAlbumsQuery } from 'services/api/albums';
import PageSizeSelect from 'components/pageSizeSelect';
import Pagination from 'components/pagination';
import Loader from 'components/loader';
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux';
import { changePage, setPagesTotal } from 'store/albumsSlice';
import { changeAlbumsPageSize } from 'store/pageSizesSlice';
import { PAGE_ALBUMS_SIZES } from 'constants/enums/pageSizes';

const PageAlbums: React.FC = () => {
  const pageSize = useAppSelector((state) => state.pageSizes.albums);
  const currentPage = useAppSelector((state) => state.albums.page);
  const totalPages = useAppSelector((state) => state.albums.pagesTotal);
  const params = new URLSearchParams({
    _limit: pageSize.toString(),
    _page: currentPage.toString(),
  }).toString();

  const { data, isFetching } = useGetAlbumsQuery(params);
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

  //TODO геометку на картах?
  const onPageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +e.target.value as (typeof PAGE_ALBUMS_SIZES)[number];
    dispatch(changeAlbumsPageSize(value));
    dispatch(changePage(1));
  };

  const onPageChange = (page: number) => dispatch(changePage(page));

  return (
    <section className="w-4/5 mx-auto flex flex-col justify-between grow">
      {isFetching && (
        <div className="flex grow align-middle justify-center">
          <Loader />
        </div>
      )}
      {!isFetching && !!data?.data && (
        <div className="grid grid-cols-grid-cards gap-3 py-6">
          {data.data.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
            />
          ))}
        </div>
      )}
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-3">
        <Pagination
          totalPages={totalPages}
          changePage={onPageChange}
          currentPage={currentPage}
        />
        <PageSizeSelect onChange={onPageSizeChange} />
      </div>
    </section>
  );
};

export default PageAlbums;
