import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import counterReducer from "@/store/counter/counterSlice";
import pokemonsReducer from "@/store/pokemons/pokemonsSlice";

import { localStorageMiddleware } from "./middlewares/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    counterReducer,
    pokemonsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(localStorageMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;