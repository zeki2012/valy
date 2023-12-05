let azn = +prompt('Neche AZN pulunuz var?')

const usdCurr =  1.7;
const eurCurr =  1.8;
const tryCurr =  11;

function convert(amount, curr) {
    console.log(amount * curr);
}
convert(azn, usdCurr);
convert(azn, eurCurr);
convert(azn, tryCurr);

let netice = `${azn} = ${usdCurr * 1.7.toFixed()} Dollar, ${azn} = ${eurCurr  * 1.8.toFixed()} Euro, ${azn} = ${tryCurr * 11} Turk lirasi`

document.getElementById('valy').innerHTML = netice