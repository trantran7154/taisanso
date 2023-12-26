class Default {
    public color_green = "#009AA2"
    public color_yellow = "#FFCC25"
    public color_red = "#EE1B42"
    public _VUE_APP_BACKEND_URL = process.env.VUE_APP_BACKEND_URL
    public auth = {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}

export default new Default()