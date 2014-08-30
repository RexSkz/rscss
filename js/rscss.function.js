function toggleNavBar(){
	var ul=document.getElementById("navUl"),
		btn=document.getElementById("navCtrl");
	ul.style.height=(btn.innerHTML=="↑")?(0):(ul.childNodes.length*ul.childNodes[0].offsetHeight+"px");
	btn.innerHTML=(btn.innerHTML=="↑")?"↓":"↑";
}