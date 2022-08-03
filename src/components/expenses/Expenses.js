import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
    const [year, setYear] = useState("2022");
    
    const expensesFromYear = props.items.filter(e => e.date.getFullYear() === parseInt(year));

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter setYear={setYear} year={year} />
                <ExpensesChart expenses={expensesFromYear}/>
                <ExpensesList expenses={expensesFromYear}/>
            </Card>
        </div>
    );
};

export default Expenses;
