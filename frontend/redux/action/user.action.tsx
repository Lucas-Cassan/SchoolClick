import axios from "axios";
import { AnyAction } from "redux";
import { url } from "../../Constant";

export const GET_USER = "GET_USER";

export const getUser = (uid: any | AnyAction) => {
  return async (dispatch: any | AnyAction) => {
    axios({
      method: "get",
      url: `${url}/api/user/${uid}`,
    })
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
