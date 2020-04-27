export interface RouteInfo {
  path?: string;
  title: string;
  icon: string;
  class: string;
  child?: ChildRoute[];
}
export interface ChildRoute {
  path: string;
  title: string;
  class: string;
}
