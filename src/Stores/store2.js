import { createStore } from 'redux';
import Server from '../Scripts/Classes/Server';

const defaultObject = {
    sys: '10',
    server: new Server()
};

function reducer(stack = defaultObject, action) {
    switch (action.type) {
        case 'sys':
            return { ...stack, sys: action.value };
        case 'clear':
            return { ...stack, sys: 10 };
        default:
            return stack;
    };
};

const store2 = createStore(reducer);

export default store2