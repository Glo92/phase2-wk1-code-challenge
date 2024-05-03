
import Transactions from './Transactions'
function TransactionList({transactions}) {
  return (
    <table className='table'>
        <tbody>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
        </tr>
        {transactions.map((transaction) => (
            <Transactions
            key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
            
            />

        ))}
        </tbody>
    </table>
  )
}

export default TransactionList;