import React from 'react'
import { useGetTransactions } from '../../hooks/ useGetTransactions'
import './transaction.css'

export function Transaction() {

    const { transactions } = useGetTransactions();
    return (
        <div className='transactions'>
            <div className='transactionsBox'>
                <h2>Transactions</h2>
                <ul>
                    {transactions.map((transaction) => {
                        const { description, amount, type } = transaction
                        if (type === 'expence') {
                            return (

                                <li>
                                    <p>{description}</p>
                                    <p style={{ color: "red" }} className="transAmount" >- {amount}</p>
                                </li>
                            )
                        }
                        else {
                            return (

                                <li>
                                    <p>{description}</p>
                                    <p style={{ color: "green" }} className="transAmount">+ {amount}</p>
                                </li>
                            )
                        }

                    })}
                </ul>
            </div>

        </div>
    )
}

