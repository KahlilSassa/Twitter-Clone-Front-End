import axios from "axios";

export const loginCall = async (userCredential, dispatch, ) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}auth/login`, 
    userCredential, 
     {headers: {
      "Content-Type": "application/json", credentials: "include",
  }},
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};