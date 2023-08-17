import React, { useEffect, useState } from 'react';
import OnePage from './OnePage';
import { TCollapsedPages } from './type';
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from 'react-icons/md';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/colors/colors.constants';
import { COLLAPSED_PAGES_STEP } from 'constants/enums/pageSizes';

const CollapsedPages: React.FC<TCollapsedPages> = (props) => {
  const { pages, currentPage, changePage } = props;
  const [pagesToDisplay, setPagesToDisplay] = useState(
    pages.slice(0, COLLAPSED_PAGES_STEP)
  );
  const [isShowForwardArrow, setIsShowForwardArrow] = useState(true);
  console.log('pages', pages);
  console.log('pagesToDisplay', pagesToDisplay);

  const lastPage = pages[pages.length - 1];

  const nextPagesStack = () => {
    const newPagesStack = [];
    const stackEnd = pagesToDisplay[pagesToDisplay.length - 1];
    const supposedStackEnd = stackEnd + COLLAPSED_PAGES_STEP;
    const startNewStack = pages[pages.findIndex((page) => page === stackEnd)];

    if (supposedStackEnd <= lastPage) {
      for (
        let i = startNewStack;
        i < startNewStack + COLLAPSED_PAGES_STEP;
        i++
      ) {
        newPagesStack.push(pages[i]);
      }
    } else {
      for (let i = startNewStack; i < pages[pages.length - 1]; i++) {
        newPagesStack.push(pages[i]);
      }
      setIsShowForwardArrow(false);
    }
    setPagesToDisplay(newPagesStack);
    changePage(newPagesStack[0]);
  };

  const previousPagesStack = () => {
    const newPagesStack = [];
    const stackStartIndex = pages.findIndex(
      (page) => page === pagesToDisplay[0]
    );
    for (let i = 0; i < COLLAPSED_PAGES_STEP; i++) {
      const newPage = pages[stackStartIndex - 1 - i];
      newPagesStack.push(newPage);
    }
    if (!isShowForwardArrow) {
      setIsShowForwardArrow(true);
    }
    changePage(newPagesStack[0]);
    setPagesToDisplay(newPagesStack.reverse());
  };

  useEffect(() => {
    setPagesToDisplay(pages.slice(0, COLLAPSED_PAGES_STEP));
    setIsShowForwardArrow(true);
  }, [pages.length]);

  return (
    <div className="flex space-x-1">
      {pagesToDisplay.map((page) => (
        <OnePage
          key={page}
          page={page}
          isCurrentPage={currentPage === page}
          changePage={changePage}
        />
      ))}
      <div className="flex space-x-1 px-2">
        {isShowForwardArrow && (
          <div
            className={`h-7 w-7 cursor-pointer flex items-center justify-center
                        rounded-sm border-2 border-${COLOR_MAIN}-600 dark:border-${COLOR_MAIN}-700
                        text-${COLOR_CONTRAST}-900 dark:text-${COLOR_CONTRAST}-300`}
            onClick={nextPagesStack}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        )}
        {pagesToDisplay[0] !== 1 && (
          <div
            className={`h-7 w-7 cursor-pointer flex items-center justify-center
                        rounded-sm border-2 border-${COLOR_MAIN}-600 dark:border-${COLOR_MAIN}-700
                        text-${COLOR_CONTRAST}-900 dark:text-${COLOR_CONTRAST}-300`}
            onClick={previousPagesStack}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </div>
        )}
      </div>
      {pagesToDisplay[pagesToDisplay.length - 1] !== lastPage && (
        <OnePage
          key={lastPage}
          page={lastPage}
          isCurrentPage={currentPage === lastPage}
          changePage={changePage}
        />
      )}
    </div>
  );
};

export default CollapsedPages;
