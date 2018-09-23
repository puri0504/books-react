import * as types from '../consts/action-types';

export const toggleFavorite = (id) => {
    return dispatch => {
        dispatch({ type: types.FETCHING_FAVORITE, id })

        setTimeout(() => {
            dispatch({ type: types.TOGGLE_FAVORITE, id });
        }, 500)
    }
};
