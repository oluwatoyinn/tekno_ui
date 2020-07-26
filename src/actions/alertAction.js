import {SUCCESS,ERROR} from './types'


export const alertActions = {
    success,
    error
};

function success(message) {
    return { type: SUCCESS, message };
}

function error(message) {
    return { type: ERROR, message };
}
