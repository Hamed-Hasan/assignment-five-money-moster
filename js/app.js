    //  Total Calculate 
     document.getElementById('calculate').addEventListener('click', function () {
         //   Get All Input Id 
         const inputTotal = document.getElementById('income').value
         const food = document.getElementById('food').value
         const rent = document.getElementById('rent').value
         const clothes = document.getElementById('clothes').value

         // Total Expenses 
         const total = parseFloat(food) + parseFloat(rent) + parseFloat(clothes)
         const totalExpenses = document.getElementById('total-expenses')
         const totalExpensesFloat = parseFloat(totalExpenses.innerText)
         totalExpenses.innerText = total
         let minusValue = inputTotal - total

         const balance = document.getElementById('balance')
         const inputCostFloat = parseFloat(balance)
         balance.innerText = minusValue

         // Input Validation 
         const success = document.getElementById('success')
         const error = document.getElementById('error')
         if (inputTotal == '' || inputTotal < 0 || food == '' || food < 0 || rent == '' || rent < 0 || clothes == '' || clothes < 0) {
             console.log('please valid number')
             error.style.display = 'block'
         } else {
             success.style.display = 'block'
             error.style.display = 'none'
         }


     })

    //  save amount 
     document.getElementById('save-btn').addEventListener('click', function () {
         const income = document.getElementById('income').value
         const incomeTotal = parseFloat(income)

         const saveInput = document.getElementById('save-input').value
         const saveInputFloat = parseFloat(saveInput)
        // multiply save Input 
         const savingCalculate = (incomeTotal / 100) * saveInputFloat;

         const savingAmount = document.getElementById('saving-amount')
         savingAmount.innerText = savingCalculate

         const remainingTotal = incomeTotal - savingCalculate

         const remainingAmount = document.getElementById('remaining-amount')
         remainingAmount.innerText = remainingTotal

        //  Input Validation 
         const success = document.getElementById('successMsg')
         const error = document.getElementById('errorMsg')
         if (saveInput == '' || saveInput < 0) {
             console.log('please valid number')
             error.style.display = 'block'
         } else {
             success.style.display = 'block'
             error.style.display = 'none'
         }

     })