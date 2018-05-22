// fonction my_max() qui prend une array et qui retourne le nombre maximum

var nb = my_max([3,7,1,17,33,9,5]);
console.log(nb)
function my_max(numbers) {
    return Math.max(...numbers);
}


// fonction vowel_count() qui prend un string et qui retourne le nombre de voyelles

var vcount = vowel_count("The script calculate how vowel I have :D");
console.log(vcount);
function vowel_count(string) {
    var str = string.split(""); 
    var vcount = 0;
    for(var i= 0; i < str.length; i++){     
    // on créé une boucle for : pour i = 0, si i est inférieur à la longueur de la chaine dans la var str, 
    // excuter le if, on ajoute +1 à chaque fois pour arriver à la longueur de la chaine
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "y"){
            vcount += 1;}
        // ici on compare chaque voyelle avec chaque lettre du str, on aurait pu utiliser du regex sans rien comprendre comme ceci (mais c'est moins fun) :
                // function getVowels(str){
                // var m = str.match(/[aeiou]/gi);
                // return m === null ? 0 : m.length;}
    }
    return vcount;
}


// fonction reverse() qui prend un string et qui renvoie les caractères en position inverse. 

var hi = reverse("Hello word !")
console.log(hi)
function reverse(string) {
    return string.split("").reverse().join("");
    // split retourne un array, reverse inverse les lettres et join permet de ranger les lettres inversés dans l'array
}