import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new_expense/NewExpense";
import { useState } from "react";

const App = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expenseData) => {
        setExpenses((prevState) => [...prevState, expenseData]);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpense} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
