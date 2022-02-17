document.getElementById('calculate').addEventListener('click', function () {
    const inputTotal = document.getElementById('income').value
    const food = document.getElementById('food').value
    const rent = document.getElementById('rent').value
    const clothes = document.getElementById('clothes').value

    const total = parseFloat(food) + parseFloat(rent) + parseFloat(clothes)
    const totalExpenses = document.getElementById('total-expenses')
    const totalExpensesFloat = parseFloat(totalExpenses.innerText)
    totalExpenses.innerText = total
    let minusValue = inputTotal - total
 
    const balance = document.getElementById('balance')
    const inputCostFloat = parseFloat(balance)
    balance.innerText = minusValue
    
})
document.getElementById('save-btn').addEventListener('click', function(){
    const income = document.getElementById('income').value
    const incomeTotal = parseFloat(income)

    const saveInput = document.getElementById('save-input').value
    const saveInputFloat = parseFloat(saveInput)

    const savingCalculate = (incomeTotal / 100) * saveInputFloat;
    
    const savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText = savingCalculate

    const remainingTotal = incomeTotal - savingCalculate

    const remainingAmount = document.getElementById('remaining-amount')
    remainingAmount.innerText = remainingTotal

})