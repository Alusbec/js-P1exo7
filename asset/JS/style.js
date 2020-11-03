document.getElementById('clickButton').onclick = showAlert;
function showAlert(){
    var age = document.getElementById('age').value;
    if(age >= 18){
    alert("Vous êtes majeur");
        }
    else{
    alert("Vous êtes mineur");
        }
    }