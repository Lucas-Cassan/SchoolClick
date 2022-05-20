import { GET_LIST_SCHOOL } from "../action/user.action";

const initialState = {};

export default function schoolReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_LIST_SCHOOL:
      return action.payload;
    default:
      return state;
  }
}
