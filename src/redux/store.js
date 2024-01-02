import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersSlice from "./filtersSlice";


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersSlice,
})

export const store = configureStore({
  reducer: rootReducer,
});