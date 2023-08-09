import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { STATIC_ROUTES, DYNAMIC_ROUTES } from 'constants/routes/routes';
import { IRouteStatic, IRouteDymanic } from 'constants/routes/type.routes.constants';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {STATIC_ROUTES.map((route: IRouteStatic) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
      {DYNAMIC_ROUTES.map((route: IRouteDymanic) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
