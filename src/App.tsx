import Form from "./components/form";
import ExpenseList from "./components/ExpenseList";
import {useState} from "react";
export const categories = ["Groceries", "Utilities","Entertainment"]



function App() {
   const[expenses, setExpenses] = useState([
        {id:1, description: 'aaa', amount: 10, category: "Utilities"},
        {id:2, description: 'bbb', amount: 10, category: "Utilities"},
        {id:3, description: 'ccc', amount: 10, category: "Utilities"},
        {id:4, description: 'ddd', amount: 10, category: "Utilities"}
    ])

  return (
      <>
          <div>
              <Form></Form>
          </div>
          <div>
              <ExpenseList expense={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
          </div>
      </>

  )
}

export default App
