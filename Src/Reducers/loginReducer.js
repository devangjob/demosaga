import * as types from '../Actions/actionTypes';

const initialState = {
  isLoading: false,
  hasErrored: false,
  errorMsg: '',
  successMsg: '',
  data: [],
  isLogged: false,
  isLoginSuccess: false,
  isSuccess: false,
  firstTimeLogin: false,
  hasIntercomAccess: false,
  uuid: '',
  user_id: '',
  idno: '',
  latestStatus: '',
  latestVersion: '',
  opponentsIds: null,
  intecomId: '',
  userData:[],
  badgeCount : '10'
};



export default function loginReducer(state = initialState, action = {} ) {

  console.log("login reducer called"); 

    switch (action.type) {
      case types.LOGIN_IS_LOADING:{
        return {
          ...state,
          isLoading: action.isLoading,
          hasErrored: false,
          errorMsg: '',
          badgeCount : '12'
        }
      }
      case types.LOGIN_HAS_ERRORED:{
        return {
          ...state,
          isLoading: false,
          hasErrored: action.hasErrored,
          errorMsg: action.errorMsg,
        }
      }
      case types.LOGIN_FETCH_DATA_SUCCESS:{
        return {
          ...state,
          isLoading: false,
          hasErrored: false,
          errorMsg: '',
          isLogged: true,
          isLoginSuccess: true,
          badgeCount : '12',
          data: action.items,
        }}
        case types.LOGIN_FETCH_DATA_SUCCESS_COMPLETED:{
          return {
            ...state,
            isLoginSuccess: true,
          }}
      default:
        {
        return state;
        }
    }
  }