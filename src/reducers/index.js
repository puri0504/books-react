const initialState = [
    {
        id: 0,
        text: 'Use Redux',
        desc: 'Use Redux desc',
        completed: false,
    }
]

export default (state, action) => {
    switch (action.type) {
        case 'COMPLETE_TODO':
            return state.map(task => {
                if (task.id === action.id) {

                }
            })
    }
}