import axios from "axios";

const CLIENT_BASE_URL = "http://localhost:8080/api/v1/client";


class ClientService {

    // get receiver's list
    getReceiverList(clientId){
        return axios.get(CLIENT_BASE_URL + '/' + clientId + '/receivers');
    }

    // login service call
    doLogin(client){
        return axios.post(CLIENT_BASE_URL + '/login', client);
    }


    //assume all client is new
    createClientAccount(client){
        return axios.post(CLIENT_BASE_URL + '/signup', client);
    }
    

}

export default new ClientService();