import axios from "axios";
import { AnyAction } from "redux";
import { url } from "../../Constant";
import userReducer from "../reducer/user.reducer";

export const GET_USER = "GET_USER";
export const GET_LIST_SCHOOL = "GET_LIST_SCHOOL";

export const getUser = (uid: any | AnyAction) => {
  return async (dispatch: any | AnyAction) => {
    axios({
      method: "get",
      url: `${url}/api/user/${uid}`,
    })
      .then((res) => {
        console.log(res.data);

        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log("error user reducer"));
  };
};

export const getListSchool = (uid: any | AnyAction) => {
  console.log("uid : " + uid);

  return async (dispatch: any | AnyAction) => {
    axios({
      method: "get",
      url: `${url}/api/swipe/getList/${uid}`,
    })
      .then((res) => {
        dispatch({ type: GET_LIST_SCHOOL, payload: res.data });
      })
      .catch((err) => console.log("error list school reducer"));
  };
};
