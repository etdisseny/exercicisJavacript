/*fase1*/
var listName = ["e", "s", "t", "e", "r", 3];

var nameList = listName.forEach(elemento=>{
    console.log(elemento); 
    /*fase2*/
    if(isNaN(elemento)){
        if( elemento=="a"||elemento=="e"||elemento=="i"||elemento=="o"||elemento=="u"){
        console.log("He trobat la VOCAL: "+ elemento);
    }else{
        console.log("He trobat la CONSONANT: " +elemento);
    }
    }else{
        console.log("Els noms de persones no contenen el número: " + elemento);
    }

});
/*fase3*/



/*fase4*/

var surname=["t","e","r","m","e","n","s"];
console.log(surname);
for(i=0; i<surname.length; i++){
    listName.push(surname[i]);
   
}
console.log(nameList);











