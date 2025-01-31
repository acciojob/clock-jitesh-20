const displayDate=document.getElementById("timer");

let date=new Date();

setInterval(()=>{
	date=new Date();
	displayDate.innerText=date.toLocaleString();
},1000)