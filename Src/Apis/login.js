import Global from "../Config/Global/global";

import axios from "axios";

const apiURL = Global.apiUrl;

var api = {
  postlogin(username, password) {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.movies;
      })
      .catch(error => {
        console.error(error);
        return error;
      });

    // var reqData = `https://facebook.github.io/react-native/movies.json`;

    // axios({
    //     method: 'get',
    //     url: reqData,

    //     headers: {
    //       "Content-Type": "application/json",
    //     }
    //   }).then((response) =>{

    //      //console.log(response);

    //      return response;


    //     }).catch((error) =>{

    //      // console.log(error);


    //      }).finally(()=>{

    //       //console.log("finally Called");

    //      })

         },
};;

export default api;

