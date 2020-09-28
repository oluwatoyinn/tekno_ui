import {GET_ERRORS, CLEAR_ERRORS} from "./types"

// export function IMsg() {
//     msg: string | any;
//   }

  //RETUNR ERRORS
  export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};