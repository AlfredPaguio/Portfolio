// https://github.com/vercel/next.js/issues/7117#issuecomment-485833115
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";

//https://github.com/karmaniverous/serify-deserify/issues/13
declare module "@karmaniverous/serify-deserify" {
  let createReduxMiddleware: () => any;
  let deserify: <T>(obj: any) => T;
  let serify: <T>(obj: any) => T;
}