// import React from 'react'
// import { useState } from 'react'
// const data ={
//     date: '',
//     description: '',
//     category: '',
//     amount:0
// }

// function AddTransaction({submission}) {
//     const [formData,setFormData] = useState(data)

//     const handleInputChange =(e) => {
//         setFormData({...formData, [e.target.name]:e.target.value})

//     }


//     const onSubmit = (e) => {
//         e.preventDefault();
//         submission(formData)

//         setFormData(data)
//     }
//   return (
//     <form id='form' onSubmit={onSubmit}>
//         <div id="input">
//             <label htmlFor="date">Date</label>
//             <input id="input" onChange={handleInputChange} type='date' value={formData.date} name='date' />
//             <input id="input" onChange={handleInputChange} type='text' value={formData.description} name='description' placeholder='Description...'/>
//             <input id="input" onChange={handleInputChange} type='text' value={formData.category} name='category' placeholder='Category...'/>
//             <input id="input" onChange={handleInputChange} type='number' value={formData.amount} name='amount' placeholder='amount...'/>
//         </div>
//         <button id="input">Add Transaction</button>
//     </form>
//   )
// }


// export default AddTransaction;

import React, { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { description, amount: parseFloat(amount), date, category };
    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setDate("");
    setCategory("");
  };

  return (
    <div className="p-4">
      <form 
        className="flex flex-col space-y-1 border py-4 px-3 shadow-md mx-1" 
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-semibold mb-2 text-center">Add Transaction</h3>

        
        <div className="flex flex-nowrap space-x-4">
          <input
            type="date"
            className="p-1 border rounded-md flex-grow"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="text"
            className="p-1 border rounded-md flex-grow"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            className="p-1 border rounded-md flex-grow"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            type="number"
            className="p-1 border rounded-md flex-grow"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="w-full flex justify-center">
          <button className="p-2 bg-blue-500 text-white mt-3 rounded-md" type="submit">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
