 


document.getElementById('calculate').addEventListener('click', function () {
      updateCalculate('income')
})

function updateCalculate(inputId){
    const inputTotal = document.getElementById(inputId).value
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
    balance.innerText = Math.abs(minusValue)
    
    
        const success = document.getElementById('success')
        const error = document.getElementById('error')
        if(inputTotal == '' || inputTotal < 0 || food == '' || food < 0 || rent == '' || rent < 0 || clothes == '' || clothes < 0){
            console.log('please valid number')
            error.style.display = 'block'
        }else{
            success.style.display = 'block'
            error.style.display = 'none'
        }


}


document.getElementById('save-btn').addEventListener('click', function(){
        saveAmount('income')
    
})


function saveAmount(inputId){
    const income = document.getElementById(inputId).value
    const incomeTotal = parseFloat(income)

    const saveInput = document.getElementById('save-input').value
    const saveInputFloat = parseFloat(saveInput)

    const savingCalculate = (incomeTotal / 100) * saveInputFloat;
    
    const savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText = savingCalculate.toFixed()

    const balance = document.getElementById('balance').innerText
    const inputCostFloat = parseFloat(balance)
    const remainingTotal = inputCostFloat - savingCalculate

    const remainingAmount = document.getElementById('remaining-amount')
    remainingAmount.innerText = remainingTotal.toFixed()

    const success = document.getElementById('successMsg')
        const error = document.getElementById('errorMsg')
        if(saveInput == '' || saveInput < 0){
            console.log('please valid number')
            error.style.display = 'block'
            success.style.display = 'none'
        }else{
            success.style.display = 'block'
            error.style.display = 'none'
        }
}
    































