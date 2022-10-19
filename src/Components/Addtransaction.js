import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/Globalstate';

export const Addtransaction = () => {
    const [description, setdescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) =>{
        e.preventDefault();
   

    const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        description,
        transactionAmount: +transactionAmount,
    }

    addTransaction(newTransaction);
    }
    return(
        <div>
            <h3> ADD NEW TRANSACTION</h3>
            <form onSubmit= {onSubmit}>
                <div className = "form-comtrol">
                  <label htmlFor = 'description' >
                      DESCRIPTION
                  </label>
                  <input type = "text" 
                      id = "description" 
                      placeholder = "Detail of Transaction" 
                      value = {description}
                      onChange = {(e)=> setdescription(e.target.value) }
                  />
                </div>
                <div className = "form-comtrol">
                  <label htmlFor = 'transactionamount' >
                      TRANSACTION AMOUNT
                   </label>
                   <input type = "number" 
                      id = "transactionamount" 
                      placeholder = "Enter your Transaction amount"
                      value = {transactionAmount}
                      onChange = {(e)=> setTransactionAmount(e.target.value)}
                      required = "required"
                   />
                </div>
                <button className = 'btn'>ADD TRANSACTION </button>
            </form>
        </div>
    )
}