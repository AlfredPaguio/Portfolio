import TechnologyReducer from "../features/technology/technology-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { technology: TechnologyReducer },
  // middleware: () => new Tuple(additionalMiddleware, logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
