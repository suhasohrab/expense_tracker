import React, {createContext, useReducer} from 'react';

//importing reducer
import AppReducer from './AppReducer';

//import { Addtransaction } from '../Components/Addtransaction';


//creating initial state
const initialState = {
    transactions: []
}
//creating global context
export const GlobalContext = createContext(initialState);

//creating a provider for global state
export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState);

//Actions for transactions

      //function for deleting existing transaction
    function delTransaction(id) {
        dispatch({
            type : 'DELETE TRANSACTION',
            payload : id
        });
    }

         //function for adding nnew transaction action
    function addTransaction(transaction) {
        dispatch({
            type : 'ADD TRANSACTION',
            payload : transaction
        });
    }

    return (
        <GlobalContext.Provider value = {
            {transactions : state.transactions,
            delTransaction,
            addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}