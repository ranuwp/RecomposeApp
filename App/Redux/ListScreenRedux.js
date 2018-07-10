import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  listScreenChangeText: [],
});

export const ContainerTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  title: 'Title',
});

/* ------------- Selectors ------------- */

export const ContainerSelectors = {
  getTitle: state => state.title,
};

/* ------------- Reducers ------------- */

// change text to 'Clicked'
export const changeText = (state) => {
  return state.merge({
    title: 'Title Changed',
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [ Types.LIST_SCREEN_CHANGE_TEXT ]: changeText,
});
