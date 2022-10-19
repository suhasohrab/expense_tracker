import React, {useContext} from 'react';
import {GlobalContext } from '../Context/Globalstate';
import { Transaction } from './Transaction';

export const Transactionhistory = () => {
    const {transactions} = useContext(GlobalContext);
    return (
      <div>
          <h3> TRANSACTION HISTORY</h3>
          <ul className = "list">
              {transactions.map(transaction => (
                  <Transaction key = {transaction.id} transaction = {transaction} />
                  )
                )}
              
          </ul>
      </div>
  );
}