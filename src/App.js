import Expenses from "./components/expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Video Game",
      amount: 69.99,
      date: new Date(2021, 3, 5),
    },
  ];

  return (
    <div>
      <h2>Let's get started!!!!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
