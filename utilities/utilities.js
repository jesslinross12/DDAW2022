//inserte funcion de paindromo
function validatePalin(str){

    // get the total length of the words  
    const len = string.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (string[i] !== string[len - 1 - i]) {  
            return( 'La frase o palabra no es palíndormo');  
        }  
    }  
    return( 'La frase o palabra es palíndromo'); 

};



function validateF(str){

    var initStr = str.toLowerCase();
    const vocals = {'aifi':'ai','eifi':'ei','iafa':'ia','oifi':'oi','uafa':'ua',
    'aufu':'au','eufu':'eu','iefe':'ie','oufu':'ou','uefe':'ue',
    'iofo':'io','uifi':'ui',
    'iufu':'iu','uofo':'uo',
    'afa':'a', 'efe':'e','ifi':'i','ofo':'o','ufu':'u'}; 

    var voc = /aifi|eifi|iafi|oifi|uafa|aufu|eufu|iefe|oufu|uefe|iofo|uifi|iufu|uofo|afa|efe|ifi|ofo|ufu/g;

    var newStr= initStr.replace(voc, m => vocals[m]);

    return("La palabra o frase es: " + newStr);
}


module.exports={validatePalin, validateF}