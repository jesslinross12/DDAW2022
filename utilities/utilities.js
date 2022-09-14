//inserte funcion de paindromo
function validatePalin(str){

    var re = /[\W_]/g;   //Idica los non-word characters: A word character is a character a-z, A-Z, 0-9, including _ (underscore).
    var lowRegStr = str.toLowerCase().replace(re, '');  //Coloca la palabra en minúsculas y remplaza los carácteres no deseados por ''
    var reverseStr = lowRegStr.split('').reverse().join('');

    if(lowRegStr==reverseStr){
        return("es palíndromo");
    }else{
        return("no es palíndromo")
    }

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