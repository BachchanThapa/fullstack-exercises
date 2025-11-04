// Split the nota
//const buttonRef : HTMLButtonElement= document.querySelector('#calculateButton');
//const buttonRef = document.querySelector<HTMLButtonElement>('#calculateButton'); 
const buttonRef = document.querySelector('#calculateButton') as  HTMLButtonElement;

buttonRef.addEventListener('click', () : void => {
    const sumRef = document.querySelector('#sum') as HTMLInputElement;
    const tipRef = document.querySelector('#tip') as HTMLInputElement;
    const nmbrOfFriendsRef = document.querySelector('#numberOfFriends') as HTMLInputElement;

    const sum : number = parseInt(sumRef.value);
    const tip : number = parseFloat(tipRef.value);
    const friends : number = parseInt(nmbrOfFriendsRef.value);

    console.log(sum, tip, friends);

    const calculatedTip : number = calculateTip(sum, tip);
    const sumToPay : number = sum + calculatedTip;
    const dividedSumToPay : number = divideSumToPay(sumToPay, friends);

    console.log(dividedSumToPay);

    showDividedSum(dividedSumToPay);

});


const calculateTip = (sum : number, tip : number) : number => {
    return sum*tip;
} 

const divideSumToPay = ( sum : number, friends : number) : number => {
    return sum / friends;
}

const showDividedSum = (sum : number) : void =>{
    document.querySelector<HTMLFormElement>('#inputForm').classList.toggle('hide');
    document.querySelector<HTMLElement>('#showSum').classList.toggle('hide');

    document.querySelector<HTMLHeadingElement>('#friendSum').textContent = sum + 'kr';
}
