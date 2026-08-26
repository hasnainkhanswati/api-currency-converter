const Base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const button = document.querySelector("form button");
const dropdowns = document.querySelectorAll("select");
const fromCurrency = document.querySelector(".from-currency select");
const toCurrency = document.querySelector(".to-currency select");
for(let Select of dropdowns){
  for(let country_code in countryList){
    
    let newOption = document.createElement("option");
    newOption.value = country_code;
    newOption.innerText = country_code;
    Select.appendChild(newOption);
  }

Select.addEventListener("change", e => {
  updateFlag(e.target);
});
}
const updateFlag=(code)=>{
let countrycode=(countryList[code.value]);
let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
code.parentElement.querySelector("img").src=newsrc;
 };
 button.addEventListener("click",async (event)=>{
  event.preventDefault();
  let amount=document.querySelector("form input").value;
   if(amount===""|| amount<1){
  amount=1;
  document.querySelector("form input").value=1;
   }

   
let fromCurr = fromCurrency.value.toLowerCase();
let toCurr = toCurrency.value.toLowerCase();

const url = `${Base_URL}/${fromCurr}.json`;
let response = await fetch(url);
let data = await response.json();

let rate = data[fromCurr][toCurr];
let finalAmount = (amount * rate).toFixed(2);

document.querySelector("#converted-amount").innerText = `${finalAmount} ${toCurrency.value}`;});