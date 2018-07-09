import { combineReducers} from 'redux';
import ItemsReducers from './reducer_new';
import CsvReducers from './csv.js';
const rootReducer=combineReducers({
  items:ItemsReducers,

  csv:CsvReducers
});

export default rootReducer;
