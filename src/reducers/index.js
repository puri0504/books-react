import {COMPLETE_TODO} from '../consts/ActionTypes';

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'Watch screencast',
            desc: 'Watch screencast and make redux app',
            completed: true,
        },
        {
            id: 2,
            title: 'Use Redux',
            desc: 'Add redux to your app',
            completed: false,
        },
        {
            id: 3,
            title: 'Use router',
            desc: 'Add router to your app',
            completed: false,
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE_TODO:
            return state.tasks.map(task => task.id === action.id ? {...task, completed: true} : task);
        default:
            return state;
    }
};
