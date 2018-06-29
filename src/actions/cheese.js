import {API_BASE_URL} from '../config.js';

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => {
  return {
    type: FETCH_CHEESE_REQUEST,
  };
}

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = (cheeses) => {
  return {
    type: FETCH_CHEESE_SUCCESS,
    cheeses
  };
}

const FETCH_CHEESE_FAILURE = 'FETCH_CHEESE_FAILURE';
export const fetchCheeseFailure = (error) => {
  return {
    type: FETCH_CHEESE_FAILURE,
    error
  };
}

export function fetchCheese() {
  return function(dispatch) {
    fetch(`${API_BASE_URL}/api/cheese`)
      .then(res => res.json())
      .then(cheeses => dispatch(fetchCheeseSuccess(cheeses)))
      .catch(err => console.error(err));
  };
}
