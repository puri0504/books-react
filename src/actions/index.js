import * as types from '../consts/action-types';

export const toggleFavoriteDispatch = (id) => {
    return dispatch => {
        dispatch(fetchingAction())

        setTimeout(() => {
            dispatch(toggleFavorite(id));
        }, 500)
    }
};

export const removeDispatch = (id) => {
    return dispatch => {
        dispatch(removeBook(id));
    }
};

const removeBook = (payload) => {
    return {
        type: types.REMOVE_BOOK,
        payload,
    }
}

const toggleFavorite = (payload) => {
    return {
        type: types.TOGGLE_FAVORITE,
        payload,
    }
}

const fetchingAction = () => {
    return {
        type: types.FETCHING_ACTION,
    }
}
