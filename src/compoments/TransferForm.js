import { useState } from "react"

const  TransferForm = ({loginUserId, receiverList}) => {

    const [receiverId, setReceiverId] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) =>{
        e.preventDefault();

        if (!receiverId){
            alert('Please select Receiver');
            return ;
        }

        alert(loginUserId + " -> " + receiverId + ":" + amount);


        setReceiverId('');
        setAmount(0);
    }

    return (
       <form className='transfer-form' onSubmit={onSubmit}>
            <div className='form-control'>
       
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul className="dropdown-menu" onChange ={(e) => setReceiverId(e.target.value)}>
                        {receiverList.map(receiver =>
                            <li key={receiver.loginId}><a className="dropdown-item" href="#" > {receiver.displayName}</a></li>
                        )}
                    </ul>

                    <input type="text"
                            className="form-control" 
                            name='transactionRequest.amount' 
                            id='transactionRequest.amount' 
                            placeholder='Amount'
                            value={amount} 
                            onChange ={(e) => setAmount(e.target.value)}/>
                </div>
            
            </div>           
            <br />
            <input type='submit' className="btn btn-success" value='Pay' />
        </form>
    )
}

export default TransferForm
