var motdepasse= prompt("Entrez votre mot passe: ");
       alert("Mot de passe: "+ motdepasse);
var estvalide;
if ((motdepasse.length<=9&&motdepasse.length>=5)&&(motdepasse.charCodeAt(0) >= 48 && motdepasse.charCodeAt(0) <=57)&&(motdepasse.charCodeAt(motdepasse.length-1) >=33 && motdepasse.charCodeAt(motdepasse.length-1) <=47)){
estvalide=true;


var confirmation=prompt("Entrez le mot de passe une deuxième fois");
if (estvalide=true){
   var estIdentique;
        if(motdepasse==confirmation){
        alert("vous avez bien configuré votre mot de passe");
        }
    else{
    alert("vous navez pas réécrit le même mot de passe");
    }
}
}
else{
alert("ne respecte pas");
}
