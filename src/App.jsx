import { useEffect, useState } from "react"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import SearchForm from "./components/SearchForm"

function App() {
  const [transactions,setTransactions] = useState([])
  useEffect(() => {
    
    fetch('http://localhost:3000/transactions')
    .then((res) => res.json())
    .then(data => setTransactions(data))
    
  },[])
  console.log(transactions)

  const handleNewTransaction = (newTransaction) => {
    console.log(newTransaction)

    setTransactions(transactions => [...transactions,newTransaction])

  }
  return (
    <div>
      <div>
      <h1 className="head">The Royal Bank of Flatiron</h1> 
      </div>
      <SearchForm/>
      <AddTransaction submission={handleNewTransaction}/>
      <TransactionList transactions={transactions}/>
    </div>
  )
}

export default App;