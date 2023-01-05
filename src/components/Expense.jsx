import ExpenseItem from './ExpenseItem';

const Expense = () => {
    const expense = [
        {
            id: 'el1',
            title: 'Toilet paper',
            date: new Date(2023, 4, 12),
            amount: 1.5
        },
        {
            id: 'el2',
            title: 'Car Insurance',
            date: new Date(2023, 2, 20),
            amount: 2
        },
        {
            id: 'el3',
            title: 'House Insurance',
            date: new Date(2023, 5, 25),
            amount: 3
        }
    ]

    return (
        <>
        <ExpenseItem
            title={expense[0].title}
            date={expense[0].date}
            amount={expense[0].amount}
        />
        <ExpenseItem
            title={expense[1].title}
            date={expense[1].date}
            amount={expense[1].amount}
        />
        <ExpenseItem
            title={expense[2].title}
            date={expense[2].date}
            amount={expense[2].amount}
        />
        </>
    )
}

export default Expense;