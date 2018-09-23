import {RENAME_USER} from '../consts/ActionTypes';

const initialState = [
    {
        id: 1,
        name: 'О.Уайльд',
    },
    {
        id: 1,
        name: 'Э.Ремарк',
    },
    {
        id: 1,
        name: 'А.Чехов',
    },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case RENAME_USER:
            return state.map(user => user.id === action.id ? {...user, name: action.name} : user);
        default:
            return state;
    }
};
