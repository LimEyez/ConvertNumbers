import { createStore } from 'redux';

const defaultObject = {
    sys: '10'
};

function reducer(stack = defaultObject, action) {
    switch (action.type) {
        case 'sys':
            return { ...stack, sys: action.value };
        case 'clear':
            return stack = defaultObject;
        default:
            return stack;
    };
};

const store2 = createStore(reducer);

export default store2