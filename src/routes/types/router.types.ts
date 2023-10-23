import { ElementType } from "react";

export interface routerType {
  title: string;
  path: string;
  description?: string;
  element: JSX.Element;
  Icon?: ElementType;
}