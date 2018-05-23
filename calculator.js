// une fonction add(), qui prend deux nombres et qui les ajoute entre eux.

function add(sum) {
	var nb = sum.split("+");
	var result = 0
    for (var i = 0; i < nb.length; i++) {
        result += parseInt(nb[i]);
      }
    return result;
}


// des fonctions multiply(), divide(), et substract() qui fonctionnent de manière similaire.

function multiply(multi) {
    var nb = multi.split('*');
    var result = 1
    for (var i = 0; i < nb.length; i++) {
        result = result * parseInt(nb[i]);
      }
    return result;


function divide(div) {
    var nb = div.split('/');
    var result = nb[0]
    for (var i = 1; i < nb.length; i++) {
        result = result / parseInt(nb[i]);
      }
    return result;
}


function substract(sub) {
    var nb = sub.split('-');
    var result = nb[0]
    for (var i = 1; i < nb.length; i++) {
        result -= parseInt(nb[i]);
      }
    return result;
}


//calculatrice

var calculate = Array();
function calcul(nbcalcul) {
    if (nbcalcul != '=') {
        calculate.push(nbcalcul);
        document.getElementById("result_of_calcul").value = calculate.join('');
    } else if (nbcalcul == '=') {
        var prod = calculate.toString().replace(/,/g,"");
        document.getElementById("result_of_calcul").value = eval(prod)
    }
}