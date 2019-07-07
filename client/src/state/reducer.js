import {
  ADD_FOLDER_COMPLETE,
  ADD_FILE_COMPLETE,
  GET_FOLDERS_COMPLETE,
  GET_FOLDER_COMPLETE,
  GET_FILES_COMPLETE,
  DELETE_FOLDER_COMPLETE,
  DELETE_FILE_COMPLETE,
  UPDATE_FOLDER_COMPLETE,
  UPDATE_FILE_COMPLETE,
  CURRENT_USER_SET,
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_SIGNUP
} from './constants';
/** 
type FileT = {
  id: string,
  name: string,
  image: ?string,
  notes: string,
  detectedText: string,
  date: string,
}
type UserT = {
  id: string,
  name: string,
  folders: FileT[],
}
*/

const initialState = {
  folders: [],
  files: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER_SET:
      return {
        ...state,
        user: action.user
      };
    case USER_SIGNOUT:
      return {
        ...state,
        user: null
      };
    case ADD_FOLDER_COMPLETE:
      console.log(action.payload);
      return {
        ...state,
        folders: [...state.folders, action.payload]
      };
    case ADD_FILE_COMPLETE:
      return {
        ...state,
        files: [...state.files, action.payload]
      };
    case GET_FOLDERS_COMPLETE:
      return { ...state, folders: action.payload };
    case GET_FILES_COMPLETE:
      return { ...state, files: action.payload };
    case GET_FOLDER_COMPLETE:
      return {
        ...state,
        folders: state.folders.map(folder => {
          if (folder.id === action.payload.id) {
            return action.payload;
          }
          return folder;
        })
      };
    case DELETE_FILE_COMPLETE:
      return {
        ...state,
        files: state.files.filter(file => file.id !== action.payload)
      };
    case DELETE_FOLDER_COMPLETE:
      return {
        ...state,
        folders: state.folders.filter(folder => folder.id !== action.payload)
      };
    case UPDATE_FILE_COMPLETE:
      return {
        ...state,
        files: state.files.map(file => {
          if (file.id === action.payload.id) {
            return { ...file, ...action.payload };
          }
          return file;
        })
      };
    case UPDATE_FOLDER_COMPLETE:
      return {
        ...state,
        folders: state.folders.map(folder => {
          if (folder.id === action.payload.id) {
            return { ...folder, ...action.payload };
          }
          return folder;
        })
      };

    default:
      return state;
  }
}

export default reducer;
