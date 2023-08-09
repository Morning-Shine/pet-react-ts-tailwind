import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { STATIC_ROUTES } from 'constants/routes/routes';
import { IRouteStatic } from 'constants/routes/type.routes.constants';
import { COLOR_CONTRAST, COLOR_MAIN } from 'constants/colors/colors.constants';
import classNames from 'classnames';

const MainMenu: React.FC = (props) => {
  const { pathname } = useLocation();
  return (
    <nav className="flex items-center justify-center">
      {STATIC_ROUTES.map((route: IRouteStatic) => (
        <Link
          key={route.path}
          to={route.path}
          className={classNames(
            'underline px-5',
            route.path === pathname
              // ? `text-teal-300 dark:text-teal-400`
              ? `text-${COLOR_MAIN}-300 dark:text-${COLOR_MAIN}-400`
              // : `text-neutral-50 dark:text-neutral-300`
              : `text-${COLOR_CONTRAST}-50 dark:text-${COLOR_CONTRAST}-300`
          )}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};

export default MainMenu;
