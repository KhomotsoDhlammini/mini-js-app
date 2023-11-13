let transactions =
[
    {
        id: 3442,
        type: "income",
        amount: 4000,
        detail: "salary"
    }
];
 
let state= 
{
    income:0,
    expense:0,
    balance:0,

    transactions :  
    [
        { id: 3442, type: "income", amount: 4000, detail: "salary"},
        { id: 8434, type: "income", amount: 2000, detail: "transport"}, 
        { id: 9442, type: "income", amount: 2600, detail: "rent"},
    ]
}   

//DOM - connecting to the UI

const income = document.getElementById('income')
const expense = document.getElementById('expense')
const balance = document.getElementById('balance')

income.innerHTML = 'R' + 2000


function calculate ()
{
    let incomeTransaction, expenseTransaction, balanceTransaction = o;

    for (let i =0; i < state.transactions; i++)
    {
        let transaction = state.transactions[i];

        if(transaction.type == 'income')
        
        {
            incomeTransaction +=  transaction.amount;
        }

        else if(transaction.type == 'income')
        {
            expenseTransaction +=  transaction.amount; 
        }
    }

    balanceTransaction = incomeTransaction - expenseTransaction;

}


function display ()
{
    income.innerHTML= 'R' + incomeTransaction,
    expense.innerHTML= 'R' + expenseTransaction,
    balance.innerHTML= 'R' + balanceTransaction
}

function render()
{
    calculate(),
    display()
}