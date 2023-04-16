import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import {useState} from "react";
import FormFilter from "./components/FormFilter";

function App() {
    const [selectedCategory, setSelectedCategory] = useState('')
   const[expenses, setExpenses] = useState([
        {id:1, description: 'aaa', amount: 10, category: "Utilities"},
        {id:2, description: 'bbb', amount: 10, category: "Utilities"},
        {id:3, description: 'ccc', amount: 10, category: "Utilities"},
        {id:4, description: 'ddd', amount: 10, category: "Utilities"}
    ]);

    const visibleExoenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return (
      <>
          <div>
              <Form onSubmit={expense => setExpenses([...expenses, {...expense, id:expenses.length+1}])}></Form>
          </div>
          <div className="mt-3">
              <FormFilter onSelectCategory={category => setSelectedCategory(category)}></FormFilter>
          </div>
          <div>
              <ExpenseList expense={visibleExoenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
          </div>
      </>

  )
}

export default App
