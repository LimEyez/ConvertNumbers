import { createStore } from 'redux';

const defaultObject = {
    rim: '',
    dec: '',
    bin: '',
    oct: '',
    hex: '',
    text: '',
};

function reducer(stack = defaultObject, action) {
    switch (action.type) {
        case 'rim':
            return { ...stack, rim: action.value };
        case 'dec':
            return { ...stack, dec: action.value };
        case 'bin':
            return { ...stack, bin: action.value };
        case 'oct':
            return { ...stack, oct: action.value };
        case 'hex':
            return { ...stack, hex: action.value };
        case 'text':
            return { ...stack, text: action.value };
        case 'clear':
            return stack=defaultObject;
        default:
            return stack;
    };
};

const store = createStore(reducer);

export default store