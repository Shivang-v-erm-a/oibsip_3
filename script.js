const btn = document.querySelector("#btn");
const input = document.querySelector("#in");
const result = document.querySelector("#output");
const from = document.querySelector("#from");
const to = document.querySelector("#to");

window.addEventListener("load",()=>{
    result.value = "";
    input.value = "";
})

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    setTimeout(()=>btn.innerHTML = "Converting...")
    setTimeout(()=>btn.innerHTML = "Convert",1500);
    setTimeout(()=>converting(),1500);
})

function converting(){
    let fromValue =  from.value;
    let toValue = to.value;
    let inputValue = input.value;

    if(fromValue == "Celsius" && toValue == "Fahrenheit"){
        let outputF = (inputValue * (9/5)) + 32;
        result.innerHTML = `${outputF} &deg;F`;
    }

    else if(fromValue == "Fahrenheit" && toValue == "Celsius"){
        let outputC = (inputValue - 32)*(5/9);
        result.innerHTML = `${outputC} &deg;C`;
    }

    else{
        result.innerHTML = "Something Went Wrong !!";
    }
}