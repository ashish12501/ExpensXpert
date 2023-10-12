import React, { useState, useContext } from 'react'
import { useAddTransacation } from '../../hooks/useAddTransaction'
import { AppContext } from '../../App';
import './tracker.css'
import { useGetTransactions } from '../../hooks/ useGetTransactions'


export function Tracker() {
  const { userData } = useContext(AppContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expence");
  const { addTransacation } = useAddTransacation();
  const { totalTransaction } = useGetTransactions();

  const submitTransaction = (e) => {
    e.preventDefault();
    addTransacation({
      description: description,
      amount: amount,
      type: type
    })
    console.log(description)
    setDescription("");
    setAmount(0)
    console.log(description)
  }



  let userName = "GuestUser";
  if (userData) {
    if (userData.displayName) {
      userName = userData.displayName;
    }
    else userName = "Guest";
    return (
      <div className='tracker' >
        <div className='container'>
          <h1 className='userName'>{userName}'s <span>Expence Tracker</span></h1>
          <div className='balance'>
            <h3>Current Balance:</h3>
            {totalTransaction !== null ? <h2>₹ {totalTransaction}</h2> : <p>Loading balance...</p>}

          </div>
        </div>
        <form className='addTransacation' onSubmit={submitTransaction} >
          <h2 className='addtransinfo'>Add New Transaction</h2>
          <textarea type="text" rows={3} className='inputDescription' placeholder="description" required onChange={(e) => setDescription(e.target.value)} />

          <div className='inputBlock2'>
            <input type="number" placeholder="amount" required onChange={(e) => setAmount(e.target.value)} />
            <div className='radio'>
              <div className='label'>
                <input type="radio" id='expence' value='expence' checked={type === "expence"} onChange={(e) => setType(e.target.value)} />
                <label htmlFor="expence">Expence</label>
              </div>
              <div className='label'>
                <input type="radio" id='income' value='income' checked={type === "income"} onChange={(e) => setType(e.target.value)} />
                <label htmlFor="income">Income</label>
              </div>
            </div>
          </div>
          <button type='submit'>Add Transaction </button>
        </form>
      </div>
    )
  }

}

