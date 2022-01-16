const TransferMessage = ({transactionMessageList}) => {

    return (
        <>
            <ul className="list-group">
                {transactionMessageList.map((transferMessage) => (
                    <li className="list-group-item" key={transferMessage}>{transferMessage}</li>
                ))}           
            </ul>
        </>
    )
}

export default TransferMessage
