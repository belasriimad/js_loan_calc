const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const interest = document.querySelector('#ints');
const years = document.querySelector('#years');
const calcBtn = document.querySelector('#calc');
const TotalInterest = document.querySelector('#tinter');
const monthlyPayement = document.querySelector('#monthly');
const totalPayament = document.querySelector('#total');

form.addEventListener('submit',calculateAmount);
function calculateAmount(e){
    const AmountP = parseFloat(amount.value);
    const InterestCalcule = parseFloat(interest.value) / 100 / 12;
    const MonthCount = parseFloat(years.value) * 12;
    //calculate monthly payements
    const count = Math.pow(1+InterestCalcule,MonthCount);
    const monthPayment = (AmountP*count*InterestCalcule)/(count-1);
    if(isFinite(monthPayment)){
        monthlyPayement.value = monthPayment.toFixed(2);
        totalPayament.value = (monthPayment * MonthCount).toFixed(2);
        TotalInterest.value = ((monthPayment * MonthCount) - AmountP).toFixed(2);
        document.getElementById('error').textContent = '';
    }else{
       const div = document.createElement('div');
       div.className = 'alert alert-danger';
       div.appendChild(document.createTextNode('المرجو ملء جميع الخانات'));
       document.getElementById('error').appendChild(div);
    }
    e.preventDefault();
}
