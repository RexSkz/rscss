function toggleNavBar(){
	var ul=document.getElementById("navUl"),
		btn=document.getElementById("navCtrl"),
		lis=ul.getElementsByTagName("li");
	ul.style.height=(btn.innerHTML=="↑")?(0):(lis.length*lis[0].offsetHeight+"px");
	btn.innerHTML=(btn.innerHTML=="↑")?"↓":"↑";
}