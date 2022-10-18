export default class Server {
    constructor() {
        this.token = null;
    };

    //Отправка данных на бэкэнд
    async send(params = {}) {
        const query = Object.keys(params).map(key =>
            `${key}=${params[key]}`).join('&');
        const result = (await (await fetch(`http://conversionnumber.loc/?${query}`)).json());
        return result.data;
    }

    async login(login, password) {
        if (login && password) {
            const data = await this.send({ method: 'login', login, password });
            this.token = data.token;
            return data;
        }
        return null;
    }

    async logout() {
        const data = await this.send({ method: 'logout', token: this.token });
        return data;
    }

    convert(params = {}) {
        if (this.token && params.number) {
            params.token = this.token;
            params.method = 'convert';
            return this.send(params);
        }
        return null;
    }
}