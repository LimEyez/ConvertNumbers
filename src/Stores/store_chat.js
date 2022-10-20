import { createStore } from 'redux';

const defaultStack = { array: [], date: null };

function reducer(stack = defaultStack, action) {
    switch (action.type) {
        case 'save':
            return { ...stack, array: action.value };
        case 'add':
            stack.array.push(action.value)
            return stack;
        case 'date':
            return { ...stack, date: action.value };
        case 'clean':
            return stack = defaultStack;
        default:
            return stack;
    };
};

const store_chat = createStore(reducer);

export default store_chat