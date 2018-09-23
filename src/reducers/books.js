import {TOGGLE_FAVORITE} from '../consts/action-types';

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
        case TOGGLE_FAVORITE:
            return state.map(book => book.id === action.payload ? {...book, favorite: !book.favorite} : book);
        default:
            return state;
    }
};

export function getBooks(state) {
    return state.books;
}
