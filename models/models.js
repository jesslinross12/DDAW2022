//inserte funcion de paindromo
export function validatePalin(str){

    const len = str.length;

    for (i=0; i<len/2 ; i++){
        if(str[i] !== str[len -1 -i]){
            return('La entrada no es palíndromo');
        }else{
            return ('La entrada es palíndromo');
        }
    }
}