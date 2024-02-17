import TechnologyReducer from "./technology/technology-slice";
import ProjectReducer from "./project/project-slice";
import { Tuple, configureStore } from "@reduxjs/toolkit";
import { createReduxMiddleware } from "@karmaniverous/serify-deserify";
const serifyMiddleware = createReduxMiddleware();

export const store = configureStore({
  reducer: { technology: TechnologyReducer, projects: ProjectReducer },
  // Add the serify middleware last, or Redux Toolkit's serializableCheck
  // will reject values before they are serified!
  middleware: () => new Tuple(serifyMiddleware),
  // middleware: () => new Tuple(additionalMiddleware, logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
