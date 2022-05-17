import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (uid: any) => {
  return async (dispatch: any) => {
    axios({
      method: "get",
      url: `http://10.50.37.223:5000/api/user/${uid}`,
    })
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
