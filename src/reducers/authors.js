import {RENAME_AUTHOR} from '../consts/action-types';

const initialState = [
    {
        id: 1,
        name: 'О.Уайльд',
    },
    {
        id: 2,
        name: 'Э.Ремарк',
    },
    {
        id: 3,
        name: 'А.Чехов',
    },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case RENAME_AUTHOR:
            return state.map(user => user.id === action.id ? {...user, name: action.name} : user);
        default:
            return state;
    }
};
