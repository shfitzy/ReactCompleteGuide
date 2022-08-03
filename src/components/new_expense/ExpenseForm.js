import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const initialState = {
        title: "",
        amount: "",
        date: "",
    };

    const [userInput, setUserInput] = useState(initialState);
    const [showForm, setShowForm] = useState(false);

    const titleChangeHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, title: e.target.value };
        });
    };

    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, amount: e.target.value };
        });
    };

    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, date: e.target.value };
        });
    };

    const submitHandler = (e) => {
        props.onSaveExpenseData({
            ...userInput,
            amount: +userInput.amount,
            date: new Date(userInput.date),
            id: Math.random().toString(),
        });
        
        clearAndHideExpenseForm(e);
    };

    const showExpenseForm = () => {
        setShowForm(true);
    }

    const clearAndHideExpenseForm = (e) => {
        e.preventDefault();
        setShowForm(false);
        setUserInput(initialState);
    }

    return (showForm ?
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={userInput.amount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={userInput.date}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={clearAndHideExpenseForm}>Cancel</button>
                <button type="Submit">Add Expense</button>
            </div>
        </form> :
        <div className="add-expense__actions">
            <button onClick={showExpenseForm}>Add New Expense</button>
        </div>
    );
};

export default ExpenseForm;