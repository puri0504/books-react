import * as types from '../consts/action-types';

export const toggleFavoriteDispatch = (id) => {
    return dispatch => {
        dispatch(fetchingFavorite())

        setTimeout(() => {
            dispatch(toggleFavorite(id));
        }, 500)
    }
};

const toggleFavorite = (payload) => {
    return {
        type: types.TOGGLE_FAVORITE,
        payload,
    }
}

const fetchingFavorite = () => {
    return {
        type: types.FETCHING_FAVORITE,
    }
}
