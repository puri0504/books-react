export default (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return state.tasks[0].title = 'new title 1'
    }
}