// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getChar = () => dispatch => {
  dispatch({
    type: FETCHING
  });
  axios.get('https://swapi.co/api/people')
    .then(response => {
      console.log('data from API', response);
      dispatch({
        type: SUCCESS,
        payload: response.data.results
      })
    })
    .catch(error => {
      console.log('error getting data from API', error);
      dispatch({
        type: FAILURE
      })
    })
}