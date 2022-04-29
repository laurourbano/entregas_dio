function verificaPalindromo(string){
    if(!string)return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//console.log(verificaPalindromo(""));

function verificaPalindromo2(string){
    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}