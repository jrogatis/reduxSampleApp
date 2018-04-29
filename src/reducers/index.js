import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  wheather: WeatherReducer,
});

export default rootReducer;
