import {ADD_FAVORITE} from '../consts/ActionTypes';

const initialState = [
    {
        id: 1,
        title: 'Три товарища',
        desc: 'Роман Ремарка, работу над которым он начал в 1932 году.',
        favorite: true,
    },
    {
        id: 2,
        title: 'Вишневый сад',
        desc: 'Лирическая пьеса в четырёх действиях',
        favorite: false,
    },
    {
        id: 3,
        title: 'Портрет Дориана Грея',
        desc: 'Единственный опубликованный роман Уайльда',
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
