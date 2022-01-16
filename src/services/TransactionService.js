import axios from "axios";

const CLIENT_BASE_URL = "http://localhost:8080/api/v1/transaction";


class TransactionService {
   
    getTransactionMessageList(clientId){
        return axios.get(CLIENT_BASE_URL + '/' + clientId);
    }

    createNewTransaction(transcation){
        return axios.post(CLIENT_BASE_URL + '/new',  transcation);
    }
}

export default new TransactionService();