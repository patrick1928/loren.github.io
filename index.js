var lognin = document.querySelector('button#sign-in');
lognin.addEventListener('click', function(){
	
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
if(email == user1[0] && password == user1[1]){
	window.alert(`login success`);
}
else{
	alert("user is not correct");
}
})
import {user1 ,user2} from "/Banco-dados.js";
