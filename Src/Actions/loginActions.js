import * as types from './actionTypes';


export function itemIsLoading(bool) {
    return {
      type: types.LOGIN_IS_LOADING,
      isLoading: bool,
    }
  }
  
  export function itemsHasErrored(bool, msg) {
    return {
      type: types.LOGIN_HAS_ERRORED,
      hasErrored: bool,
      errorMsg: msg,
    }
  }
   
  
  export function itemsFetchDataSuccess(items) {
   
      return {
        type: types.LOGIN_FETCH_DATA_SUCCESS,
        items,
      }
    
  }

  export function loginitemsFetchDataSuccess() {
   
    return {
      type: types.LOGIN_FETCH_DATA_SUCCESS_COMPLETED,
    }
  
}
  // export function loginFetchRequested(username, password) {
  //   return {
  //     type: types.LOGIN_FETCH_REQUESTED,
  //     payload: {username, password},
  //   }
  // }

  export function newloginFetchRequested(username, password) {
    return {
      type: types.NLOGIN_FETCH_REQUESTED,
      payload: {username, password},
    }
  }
  