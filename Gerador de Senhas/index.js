function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]
    );
}

for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatePassword += randomFunc[funcName]();
    });
}
const finalPassword = generatePassword.slice(0, length);
return finalPassword;



let button = document.getElementById("clipboardBtn");
button.addEventListener("click", (e) => {
    e.preventDefault();
    document.execCommand(
        "copy",
        false,
        document.getElementById("PasswordResult").select()

    );
});

const generate = document.getElementById("generateBtn");
generate.addEventListener("click", () =>{
    const length = document.getElementById("Passwordlength").value;
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasSymbol = document.getElementById("symbols").checked;
    const hasNumber = document.getElementById("numbers").checked;
    const result = document.getElementById("PasswordResult");
    result.innerText = generatePassword(
        hasLower,
        hasNumber,
        hasUpper,
        hasSymbol,
        length


    );
}
);

 function getRadomLower(){
       return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

   }
   function getRandomUpper(){
       return String.fromCharCode(Math.fromCharCode(Math.random() * 26) + 65);
   }
   function getRandomNumber(){
       return +String.fromCharCode(Math.fromCharCode(Math.random() * 10) + 48);
   }
   function getRandomSymbol(){
       const symbols = "!@#$%¨&*(){}[]=<>/,.";
       return symbols[Math.floor(Math.random() * symbols.length)];
   }
   const randomFunc = {
       lower : getRadomLower,
       upper : getRandomUpper,
       number : getRandomNumber, 
       symbol : getRandomSymbol,
       
       
   };

