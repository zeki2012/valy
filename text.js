let azn = +prompt('Neche AZN pulunuz var?')

const usdCurr =  1.7;
const eurCurr =  1.8;
const tryCurr =  11;

function convert(amount, curr) {
    console.log((amount * curr).toFixed());
}
convert(azn, usdCurr);
convert(azn, eurCurr);
convert(azn, tryCurr);

let netice = `${azn}AZN = ${azn * usdCurr} Dollar, ${azn} = ${azn  * eurCurr} Euro, ${azn} = ${azn * tryCurr} Turk lirasi`

document.getElementById('valy').innerHTML = netice