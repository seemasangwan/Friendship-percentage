
document.getElementById("friendhip").addEventListener("click",function()
{
const myname=document.getElementById("myname").value;
const othername=document.getElementById("othername").value;
let res=Math.floor(Math.random()*100)
const result=document.getElementById('result');
result.style.width='30%';
result.style.border="10px solid red";
result.style.marginLeft='35%';
result.style.marginRight='35%';
result.style.marginTop="20px";
result.style.padding="20px";
result.style.fontfamily="cursive";
result.style.borderRadius="20px";
result.style.textAlign="center";
result.innerHTML=`The Friendship between ${myname} and ${othername} is ${res}% `;

});