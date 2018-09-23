import {ADD_FAVORITE} from '../consts/ActionTypes';

const initialState = [
    {
        id: 1,
        title: 'Watch screencast',
        desc: 'Watch screencast and make redux app',
        favorite: true,
    },
    {
        id: 2,
        title: 'Use Redux',
        desc: 'Add redux to your app',
        favorite: false,
    },
    {
        id: 3,
        title: 'Use router',
        desc: 'Add router to your app',
        favorite: false,
    },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return state.map(book => book.id === action.id ? {...book, favorite: !book.favorite} : book);
        default:
            return state;
    }
};
