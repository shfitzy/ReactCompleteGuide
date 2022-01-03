import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={props.onAddExpense} />
        </div>
    );
};

export default NewExpense;
