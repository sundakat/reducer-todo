export const todo = [
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589
    },
    {
        item: "Create React Todo App",
        completed: false,
        id: 389298
    },
    {
        item: "Get 💩 Done",
        completed: false,
        id: 3892987
    }
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { item: action.payload, completed: false, id: Date.now() }
            ];

        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });

        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
};

