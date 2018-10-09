export default function(state=null, action){
switch(action.type){
  case 'UPLOAD_DOCUMENT_SUCCESS':
   return action.payload;
  case 'UPLOAD_DOCUMENT_FAI':
   return action.payload;
}

  return state;
}
