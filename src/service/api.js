import axios from "axios";

//55385000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;