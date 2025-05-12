let submitBtn=document.getElementById("submit");
let usernameEle=document.getElementById("username");
let passwordEle=document.getElementById("password");
let successEle=document.getElementById("success");
let usererrorEle=document.getElementById("usererror");
let passerrorEle=document.getElementById("passerror");

submitBtn.addEventListener("click",function(){
    let user=usernameEle.value;
    let pass=passwordEle.value;
    if (user==="" || !user.includes("@gmail.com")){
        usererrorEle.textContent="Enter valid Email!";
        usererrorEle.classList.add("error");
        successEle.textContent=""

    }
    if(pass===""){
        passerrorEle.textContent="Enter valid Password!";
        passerrorEle.classList.add("error");
        successEle.textContent=""

    }
    if(user!=="" && user.includes("@gmail.com") && pass!=="") {
        successEle.textContent="Successfully Login..."
        successEle.classList.add("color");
        usererrorEle.textContent="";
        passerrorEle.textContent="";
    }
    



});
