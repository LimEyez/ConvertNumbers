import { createStore } from 'redux';

const defaultStack = { messages: [], hash: null };

function reducer(stack = defaultStack, action) {
    switch (action.type) {
        case 'save':
            return { ...stack, messages: action.value };
        case 'hash':
            return { ...stack, hash: action.value };
        case 'update':
            return stack = action.value;
        case 'clean':
            return stack = defaultStack;
        default:
            return stack;
    };
};

const store_chat = createStore(reducer);

export default store_chat