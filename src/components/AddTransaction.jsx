import React from 'react'
import { useState } from 'react'
const data ={
    date: '',
    description: '',
    category: '',
    amount:0
}

function AddTransaction({submission}) {
    const [formData,setFormData] = useState(data)

    const handleInputChange =(e) => {
        setFormData({...formData, [e.target.name]:e.target.value})

    }


    const onSubmit = (e) => {
        e.preventDefault();
        submission(formData)

        setFormData(data)
    }
  return (
    <form id='form' onSubmit={onSubmit}>
        <div id="input">
            <label htmlFor="date">Date</label>
            <input id="input" onChange={handleInputChange} type='date' value={formData.date} name='date' />
            <input id="input" onChange={handleInputChange} type='text' value={formData.description} name='description' placeholder='Description...'/>
            <input id="input" onChange={handleInputChange} type='text' value={formData.category} name='category' placeholder='Category...'/>
            <input id="input" onChange={handleInputChange} type='number' value={formData.amount} name='amount' placeholder='amount...'/>
        </div>
        <button id="input">Add Transaction</button>
    </form>
  )
}


export default AddTransaction;