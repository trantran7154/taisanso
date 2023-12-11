import axios from 'axios'
class AuthClass {
    private url = process.env.VUE_APP_BACKEND_URL + '/api/user/v1/';

    public async Register(email: string, password: string) {
        try {
            const response = await axios.post(this.url + 'register', {
                email, password
            });

            localStorage.setItem('token', response.data.data.token);

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }

    public async Login(email: string, password: string) {
        try {
            const response = await axios.post(this.url + 'login', {
                email, password
            });

            localStorage.setItem('token', response.data.data.token);


            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }

    public async UploadProfile(body: any) {
        try {
            const call = await axios.post(this.url + 'update-profile', body, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            return call.data;
        } catch (err: any) {
            return err.response.data;
        }
    }

    public async SignUp(email: string, password: string) {
        try {
            const response = await axios.post(this.url + 'register', {
                email, password
            });

            localStorage.setItem('token', response.data.data.token);

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }

    public async SendCode() {
        try {
            const response = await axios.post(this.url + 'send-code-mail', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }


    public async ChangePassword(oldPassword: string, newPassword: string, confirmPassword: string, otp: string) {
        try {
            const call = await axios.post(this.url + 'change-password', {
                oldPassword,
                newPassword,
                confirmPassword,
                otp
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            return call.data;
        } catch (err: any) {
            return err.response.data;
        }
    }

    public async ForgotPasswordSendOTP(email: string) {
        try {
            const response = await axios.post(this.url + 'forgot-password', {
                email
            });

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }

    public async ForgotPassword(email: string, confirmPassword: string, newPassword: string, otp: string) {
        try {
            const response = await axios.post(this.url + 'forgot-password', {
                email,
                confirmPassword,
                newPassword,
                otp
            });

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }

    public async GetProfile() {
        try {
            const response = await axios.get(this.url + 'profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            const uuid = localStorage.getItem("uui");

            if (!uuid) {
                localStorage.setItem('uui', response.data.data._id);
            }

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }

    public async Verify(otp: number, email: string) {
        try {
            const response = await axios.post(this.url + 'verify', { email, otp });

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }

    public async kyc(body: any) {
        try {
            const response = await axios.post(this.url + 'kyc', body, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }
}

export default new AuthClass()