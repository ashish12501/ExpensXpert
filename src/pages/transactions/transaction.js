import React from 'react';
import { useGetTransactions } from '../../hooks/ useGetTransactions';
import './transaction.css';
import { Footer } from '../../components/footer';

export function Transaction() {
    const { transactions } = useGetTransactions();

    const formatDateTime = (createdAt) => {
        // Convert the createdAt object to a JavaScript Date
        const date = createdAt.toDate();

        // Extract date components
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        // Extract time components
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        hours = hours % 12 || 12;

        // Format date and time as a string
        const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
        const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

        return { date: formattedDate, time: formattedTime };
    };

    return (
        <>
            <div className='transactions'>
                <div className='transactionsBox'>
                    <h2>Transactions</h2>
                    <ul>
                        {transactions.length > 0 ? (
                            transactions.map((transaction) => {
                                const { description, amount, type, createdAt } = transaction;
                                const { date, time } = formatDateTime(createdAt);
                                return (
                                    <li key={transaction.id}>
                                        <div className='descriptionDate'>
                                            <p className='des' style={{ textAlign: "left" }}>{description}</p>
                                            <p className='dateTime' id="dateTime">{date} at {time} </p>
                                        </div>
                                        <p style={{ color: type === 'expence' ? "red" : "green" }} className="transAmount">{type === 'expence' ? '- ' : '+ '}{amount}</p>
                                    </li>
                                );
                            })
                        ) : (
                            <h4>No Transactions to show, first make some transactions then visit this page</h4>
                        )}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}
