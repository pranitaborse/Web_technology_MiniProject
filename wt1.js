function talk() {
var know = {
 "Who are you":"Hello, I am chatbot here",
 "How are you":"Good:)",
 "How many field in SNJB COE":"Their are total 5 field",
 "ok":"Thank you so much",
 "Bye":"Okay!"
};
var user=
document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML
= user +"<br>";
if(user is know){
document.getElementById('chatLog').innerHTML
=know[user]+"<br>";
}else{
document.getElementById('chatLog').innerHTML
="Sorry,I didn't understand <br>";
}
}