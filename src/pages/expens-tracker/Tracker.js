import React, { useState } from 'react'
import { useAddTransacation } from '../../hooks/useAddTransaction'

export function Tracker() {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expence");


  const { addTransacation } = useAddTransacation();

  const submitTransaction = (e) => {
    e.preventDefault();
    addTransacation({
      description: description,
      amount: amount,
      type: type
    })
  }

  return (
    <div className='tracker' >
      <div className='container'>
        <h1>ExpensXpert</h1>
        <div className='balance'>
          <h3>Balanace</h3>
          <h2>$23</h2>
        </div>
      </div>
      <form className='addTransacation' onSubmit={submitTransaction} >
        <input type="text" placeholder="description" required onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="amount" required onChange={(e) => setAmount(e.target.value)} />
        <input type="radio" id='expence' value='expence' checked={type === "expence"} onChange={(e) => setType(e.target.value)} />
        <label htmlFor="expence">Expence</label>
        <input type="radio" id='income' value='income' checked={type === "income"} onChange={(e) => setType(e.target.value)} />
        <label htmlFor="income">Income</label>
        <button type='submit'>Add Transaction </button>
      </form>
    </div>
  )
}

