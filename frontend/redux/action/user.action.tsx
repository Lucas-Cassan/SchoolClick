import axios from "axios";
import { url } from "../../Constant";

export const GET_USER = "GET_USER";

export const getUser = (uid: any) => {
  return async (dispatch: any) => {
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
