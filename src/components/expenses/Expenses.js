import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
    const [year, setYear] = useState("2022");

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter setYear={setYear} year={year} />
                {props.items.map((e) => (
                    <ExpenseItem
                        key={e.id}
                        title={e.title}
                        amount={e.amount}
                        date={e.date}
                    />
                ))}
                ;
            </Card>
        </div>
    );
};

export default Expenses;
