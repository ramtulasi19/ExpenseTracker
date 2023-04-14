import React from 'react';
import {string} from "zod";

interface Expense {
    id: number;
    description: string;
    amount: number;
    category:string;
}

interface Props {
    expense: Expense[];
    onDelete: (id: number) => void;
}
function ExpenseList({expense, onDelete} : Props) {
    if(expense.length === 0)
        return null;

    return (

            <table className="table table-bordered">
            <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>category</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {expense.map(expense => <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={() =>onDelete(expense.id)}>Delete</button>
                </td>
            </tr> )}
            </tbody>
                <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${expense.reduce((acc, expense) => acc+ expense.amount, 0).toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
                </tfoot>
                
            </table>

    );
}

export default ExpenseList;
