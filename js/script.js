/*select document elements*/
const myText=document.getElementById("text_phrase");
const checkBtn=document.getElementById("check_button");


const message = document.getElementById("message")

if(myText.value==""){
    message.textContent=`please enter a word or phrase`

}else{
    isPalindromeChecker(myText.value);
}

checkBtn.addEventListener("click",()=>{
 
isPalindromeChecker(myText.value);
})




















function isPalindromeChecker(str){
    const myDuty=str.toLowerCase();
    console.log(myDuty);


    const myDaughter=str.split("");
    console.log(myDaughter);

    const myName=myDaughter.reverse()
    console.log(myName)

    const array=myDaughter.join("");
    console.log(array);

    const myWord=array.toLowerCase();
    console.log(myWord);


    if(myDuty==myWord){
        message.textContent=`${str},is a palindrome`

       message.classList.add("success")
       message.classList.remove("error")
    }else {
    message.textContent=`${str},is not a palindrome`;
    message.classList.add("error")
    message.classList.remove("success")

    





}  


    








    
}

console.log(myText);
console.log(checkBtn);

