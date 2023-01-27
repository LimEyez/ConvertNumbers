import store from "../../Stores/store";
export default class Checking {
    constructor(props) {
        const {id_number, sys} = props;
        this.sys = sys;
        this.input = document.getElementById(id_number);
        this.string = this.input.value;
        this.result = null;
    }
    funcError(check, checkOnChars = true) {
        if (check && checkOnChars) store.dispatch({ type: 'text', value: 'Строка содержит недопустимые символы!' });
        else if (check && !checkOnChars) store.dispatch({ type: 'text', value: `Строка содержит недопустимые символы системы счисления ${this.sys}!` });
        else if (check) store.dispatch({ type: 'text', value: 'Вы смешали символы!' });
        else store.dispatch({ type: 'text', value: 'Неизвестная ошибка' });
    };

    //Проверка на допустимые символы
    checking() {
        const arr_of_chars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
        const arr_of_nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        this.string = this.input.value;
        let string = this.string.replace(/ /g, '').toUpperCase();
        let arr = string.split('');
        let check = true;
        let checkOnChars = false;
        if (arr.length === 1) {
            const symb_1 = arr[0];
            if (arr_of_chars.indexOf(symb_1) < 0 && arr_of_nums.indexOf(symb_1) < 0) {
                check = false;
                checkOnChars = true;
            }
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (!check) {
                    break;
                };

                const symb_1 = arr[i];
                const symb_2 = arr[i + 1]
                if ((arr_of_chars.indexOf(symb_1) >= 0 && arr_of_nums.indexOf(symb_2) >= 0) ||
                    (arr_of_chars.indexOf(symb_2) >= 0 && arr_of_nums.indexOf(symb_1) >= 0)) {
                    check = false;
                }
                else if ((arr_of_chars.indexOf(symb_1) < 0 && arr_of_nums.indexOf(symb_1) < 0) ||
                    (arr_of_chars.indexOf(symb_1) < 0 && arr_of_nums.indexOf(symb_1) < 0)) {
                    check = false;
                    checkOnChars = true;
                }
            };
        }
        if (check) {
            return true
        }
        else {
            this.funcError(!check, checkOnChars);
        };
    };

    //Проверка записи в системах счисления 2 8 16
    checking_sys() {
        const arr_of_nums = ["0", "1"];
        if (this.sys === '8') {
            arr_of_nums.push("2", "3", "4", "5", "6", "7");
        }
        else if (this.sys === '16') {
            arr_of_nums.push("2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
        };
        this.string = this.input.value;
        let string = this.string.replace(/ /g, '').toUpperCase();
        let arr = string.split('');
        let check = true;
        for (let i = 0; i < arr.length; i++) {
            if (!check) {
                break;
            };
            const symb_1 = arr[i];
            if (arr_of_nums.indexOf(symb_1) < 0) {
                check = false;
            };
        }
        if (check) {
            return true;
        }
        else {
            this.funcError(!check, false);
        };
    };
}