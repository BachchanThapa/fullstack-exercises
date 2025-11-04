// Split the nota
//const buttonRef : HTMLButtonElement= document.querySelector('#calculateButton');
//const buttonRef = document.querySelector<HTMLButtonElement>('#calculateButton'); 
const buttonRef = document.querySelector('#calculateButton');
buttonRef.addEventListener('click', () => {
    const sumRef = document.querySelector('#sum');
    const tipRef = document.querySelector('#tip');
    const nmbrOfFriendsRef = document.querySelector('#numberOfFriends');
    const sum = parseInt(sumRef.value);
    const tip = parseFloat(tipRef.value);
    const friends = parseInt(nmbrOfFriendsRef.value);
    console.log(sum, tip, friends);
    const calculatedTip = calculateTip(sum, tip);
    const sumToPay = sum + calculatedTip;
    const dividedSumToPay = divideSumToPay(sumToPay, friends);
    console.log(dividedSumToPay);
    showDividedSum(dividedSumToPay);
});
const calculateTip = (sum, tip) => {
    return sum * tip;
};
const divideSumToPay = (sum, friends) => {
    return sum / friends;
};
const showDividedSum = (sum) => {
    document.querySelector('#inputForm').classList.toggle('hide');
    document.querySelector('#showSum').classList.toggle('hide');
    document.querySelector('#friendSum').textContent = sum + 'kr';
};
