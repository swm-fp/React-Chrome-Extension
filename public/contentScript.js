alert("execute");
document.querySelector("div").addEventLisener('click',function(){
chrome.storage.local.get(["token"],function(r){
	alert(r);
	document.querySelector("div").textContent=r.token;
});	
});
