import { call, put, select, delay } from 'redux-saga/effects';

import api from '../Apis/login';
import { itemsFetchDataSuccess, itemsHasErrored, itemIsLoading ,loginitemsFetchDataSuccess} from '../Actions/loginActions';


export function* fetchUserLogin(action) {

  console.log("called fetchUserLogin saga");

  console.log(action);

  // try {
  //   yield put(itemIsLoading(true));

  //   const response = yield call(api.postlogin, action.payload.username, action.payload.password);
  //   console.log(response);
  //   yield delay(3000);
  //   console.log('devang');
    
  //   // 1 = success or  0 = error
  //   console.log("response start " + JSON.stringify(response));

  //   yield delay(3000);
  //   // if (data.status == 0) {
  //     console.log("response start loading false" );
  //    yield put(itemIsLoading(false));
  //   //   yield delay(400);
  //   //   alert("Invalid username or password");

  //   console.log("response start loading end" );
    
  //   //   yield put(itemIsLoading(false));
  //   //   yield delay(400);
  //   //   yield put(itemsFetchDataSuccess(data, 1))
  //   // }
  // } catch (e) {
  //   yield put(itemIsLoading(false));
  //   yield delay(400);
  //   alert('Network Error');
  //   console.log(e.message);
  //   yield put(itemsHasErrored(true, e.message));
  // }
}

export function* fetchnewuser(action) {

 
  // console.log("called fetchUserLogin saga");

  // console.log(action);

  yield delay(4000);

  yield put(loginitemsFetchDataSuccess());

  console.log("loginitemsFetchDataSuccess called");
  
  
}

