import axios from 'axios'
class AuthClass {
    private url = process.env.VUE_APP_BACKEND_URL + '/api/v1/coin/';

    public async GetAll() {
        try {
            const response = await axios.post(this.url + 'get-all');

            localStorage.setItem('token', response.data.data.token);

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }
}

export default new AuthClass()