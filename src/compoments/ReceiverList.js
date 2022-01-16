const ReceiverList = ({receiverList, onReceiverSelecte}) => {

    return (
           <div className="input-group mb-3">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                <ul className="dropdown-menu">
                    {receiverList.map(receiver =>
                        <li key={receiver.loginId}><a className="dropdown-item" href="#" > {receiver.displayName}</a></li>
                    )}
                </ul>
                <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
            </div>
    )
}

export default ReceiverList;