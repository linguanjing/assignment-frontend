import axios from "axios";

const CLIENT_BASE_URL = "http://localhost:8080/api/v1/client";


class ClientService {

    // /login
    getReceiverList(clientId){
        return axios.get(CLIENT_BASE_URL + '/' + clientId + '/receivers');
    }

    doLogin(client){

        return axios.post(CLIENT_BASE_URL + '/login');
    }
}

export default new ClientService();