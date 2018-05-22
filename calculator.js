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
    var nb = calc.split('-');
    var result = nb[0]
    for (var i = 1; i < nb.length; i++) {
        result -= parseInt(nb[i]);
      }
    return result;
}


// version avec eval(string)

var calculation = Array();
function get_calculation(calc_numbers) {
    if (calc_numbers != '=') {
        calculation.push(calc_numbers);
        document.getElementById("calc_result").value = calculation.join('');
    } else if (calc_numbers == '=') {
        var calc = calculation.toString().replace(/,/g,"");
        document.getElementById("calc_result").value = eval(calc)
    }
}