import React from 'react'
import { useGetTransactions } from '../../hooks/ useGetTransactions'


export function Transaction() {

    const { transactions } = useGetTransactions();
    return (
        <div className='transactions'>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((transaction) => {
                    const { description, amount, type } = transaction
                    return (
                        <li>
                            <p>{description}</p>
                            <p>{amount}</p>
                            <p>{type}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

