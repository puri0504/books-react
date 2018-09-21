import {COMPLETE_TODO} from '../consts/ActionTypes'

const initialState = [
    {
        id: 1,
        text: 'Watch screencast',
        desc: 'Watch screencast and make redux app',
        completed: true,
    },
    {
        id: 2,
        text: 'Use Redux',
        desc: 'Add redux to your app',
        completed: false,
    },
    {
        id: 3,
        text: 'Use router',
        desc: 'Add router to your app',
        completed: false,
    }
]

export default (state, action) => {
    switch (action.type) {
        case COMPLETE_TODO:
            return state.map(task => task.id === action.id ? {...task, completed: true} : task)
    }
}