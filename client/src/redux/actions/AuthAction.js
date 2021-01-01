import { LOGIN_SUCCESS, LOG_OUT } from "../constant/authConstant";

export const loginAction = () => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
  });
};


export const logoutAction=()=>dispatch=>{
    dispatch({
        type: LOG_OUT
    })
}