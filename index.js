// console.log("hello")
const expenseFormm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenselist');

expenseFormm.addEventListener("submit", function(event) 
{
    event.preventDefault();
    const expensedescription = document.getElementById('giveDesc').value;
   const selectcategory = document.getElementById('selectCategory').value;
   const amount = document.getElementById('giveAmount').value;


   if(expensedescription && selectcategory && !isNaN(amount) && amount > 0)
{
    const newTableRow = document.createElement('tr')
    newTableRow.innerHTML = `<td> ${expensedescription} </td>
    <td> ${selectcategory} </td>
    <td> ${amount} </td>
    `
    expenseList.appendChild(newTableRow)
    document.getElementById('giveDesc').value = '';
    document.getElementById('selectCategory').value = '';
    document.getElementById('giveAmount').value = '';
}
   else
   {
    if(amount <= 0)
        {
            alert("Invalid Amount Entered!!");
            return;
        }
    console.log("failed")
    alert("failed");
   }
})

