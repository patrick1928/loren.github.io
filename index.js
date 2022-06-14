var lognin = document.getElementById('sign-in');
let username = document.getElementById('email');
let password = document.getElementById('password');
lognin.addEventListener('click', function(){
if(username.value == user1[0] && password.value == user1[1]){
	window.alert("login success");
}
else{
	alert("user is not correct");
}
})
import {user1 ,user2} from "Banco-dados.js";
