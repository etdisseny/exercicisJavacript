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
var letterMap = new Map(); //creo el map

for(var i=0; i<listName.length; i++){
    if(letterMap.has(listName[i])){  //si al map te la lletra 
        letterMap.set(listName[i], letterMap.get(listName[i])+1 ); //afegeix amb map el contigut que te +1
    }else{
        letterMap.set(listName[i],1);//sino afegeix la clau i el valor 1
    }
}

console.log(letterMap);

/*fase3 sin map*/
/*
var newLetter= [];

for (var i=0; i<listName.length; i++ ){
    console.log(newLetter);
    
    if(newLetter.includes(listName[i]+ ": 1")){
        console.log(listName[i]);
        var num=1;
        newLetter.push(listName[i] + ": "+ (num+1));
        num++;
    }else{
        newLetter.push(listName[i] + ": 1");
    }
}
console.log(newLetter);
*/

/*fase4*/
listName.pop(); //li trec el numero 3 que havia afegit a fase2

var surname=["t","e","r","m","e","n","s"];

/* 
for(i=0; i<surname.length; i++){
    listName.push(surname[i]);  
}
console.log(listName);
*/

var fullName=[];
fullName= listName.concat(surname);
console.log(fullName);

fullName.splice(listName.length,0, " ");
console.log(fullName);











