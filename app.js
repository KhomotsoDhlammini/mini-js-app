//init values
let incomeTransaction = 0;
let expenseTransaction = 0;
let balanceTransaction = 0;

//glolbal state variables
let state = {
    income: 0,
    expense: 0,
    balance: 0,
    transactions: [
        { id: 1, type: "income", amount: 10, detail: "salary" },
        { id: 2, type: "expense", amount: 5, detail: "transport" },
        { id: 3, type: "expense", amount: 1, detail: "rent" }
    ]
}


//calculator
function calculate() {
    for (let i = 0; i < state.transactions.length; i++) {

        if (state.transactions[i].type == 'income') {
            incomeTransaction += state.transactions[i].amount
        }

        if (state.transactions[i].type == 'expense') {
            expenseTransaction += state.transactions[i].amount
        }
    }
    balanceTransaction = incomeTransaction - expenseTransaction
}

//displaying values
function display() {
    document.getElementById('income').innerHTML = 'R' + incomeTransaction
    document.getElementById('expense').innerHTML = 'R' + expenseTransaction
    document.getElementById('balance').innerHTML = 'R' + balanceTransaction
}

function render() {
    calculate()
    display()
    console.log("sanibonani world")
}

render()``