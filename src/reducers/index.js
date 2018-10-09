import { combineReducers} from 'redux';
import ItemsReducers from './reducer_new';
import CsvReducers from './csv.js';
import ImageSelected from './reducer_image_select';
import uploadDocumentRequest from './uploading.js';

const rootReducer=combineReducers({
  items:ItemsReducers,

  csv:CsvReducers,
  imageSelected: ImageSelected,
  upload : uploadDocumentRequest,

});

export default rootReducer;
