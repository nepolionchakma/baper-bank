// Deposit

document.getElementById('deposit-submit').addEventListener('click', function(){

    // Deposit Submit
    const depositInput = document.getElementById('deposit-input');
    const newDepositeText = depositInput.value;
    const mainNewDeposite = parseFloat(newDepositeText);

    // Deposit input
    const depositTotalInput = document.getElementById('deposit-total');
    const newDepositeTotalText = depositTotalInput.innerText;
    const mainNewDepositeTotal = parseFloat(newDepositeTotalText);
    const mainTotalDeposite = mainNewDepositeTotal + mainNewDeposite
    depositTotalInput.innerText = mainTotalDeposite;

    // Total Blance
    const totalBlance = document.getElementById('total-blance');
    const totalBlanceText = totalBlance.innerText;
    const mainTotalBlance = parseFloat(totalBlanceText);
    const newTotalBlance = mainTotalBlance + mainNewDeposite;
    totalBlance.innerText = newTotalBlance;


    // empty field 
    depositInput.value = '';

})





// Withdraw

document.getElementById('withdraw-submit').addEventListener('click', function(){
    // withdraw Input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const mainInputWithdrawTotal = parseFloat(withdrawInputText);

    // Withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotaltext = withdrawTotal.innerText;
    const mainWithdrawTextTotal = parseFloat(withdrawTotaltext);
    const mainWithdrawTotal = mainWithdrawTextTotal + mainInputWithdrawTotal;

    withdrawTotal.innerText = mainWithdrawTotal;

    // Main Blance
    const mainBlance = document.getElementById('total-blance');
    const mainBlanceText = mainBlance.innerText;
    const mainTotalBlanceText = parseFloat(mainBlanceText);
    const newTotalBlanceText = mainTotalBlanceText - mainInputWithdrawTotal;
    mainBlance.innerText = newTotalBlanceText;



    // emptu=e Field
    withdrawInput.value = '';
})