import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import searchReducer from './searchReducer';
import individualCityReducer from './individualCityReducer';
import individualOrgReducer from './individualOrgReducer';
import countriesReducer from './countriesReducer';
import cityMedicationsReducer from './cityMedicationsReducer';
import allCitiesReducer from './allCitiesReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga


const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  searchReducer,
  individualCityReducer, //will get single city from database
  individualOrgReducer, //will store individual organizations from database
  countriesReducer, // will hold array of countries from database
  cityMedicationsReducer, // will hold array of medications attached to one city
  allCitiesReducer, //will hold array of cities from database
});

export default rootReducer;
