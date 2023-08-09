export interface IRouteStatic extends IRouteDymanic {
  name: string;
}

export interface IRouteDymanic {
  path: string;
  element: React.ReactNode;
}
