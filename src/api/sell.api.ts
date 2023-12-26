import axios from 'axios'
import default_ from "../config/default"

export interface ISell {
    salesRegistration: (phone: string, linkFacebook: string, nameBank: string) => void
}

export class SellService implements ISell {

    public url: string;
    public link: string;
    public api: string

    constructor(url: string, link: string) {
        this.url = url;
        this.link = link;
        this.api = this.url + this.link;
    }

    public async salesRegistration(phone: string, linkFacebook: string, nameBank: string) {
        try {
            const key = "/register"
            const data = {
                phone, linkFacebook, nameBank
            }
            const response = await axios.post(this.api + key, data, {
                headers: {
                    ...default_.auth
                }
            });

            return response.data;
        } catch (err: any) {
            return err.response.data;
        }
    }
}

const link = "/api/v1/sell";
export const sellService = new SellService(default_._VUE_APP_BACKEND_URL, link);