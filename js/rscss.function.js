function menuToggle(){
	document.body.className=(document.body.className=="menu-toggle"?"":"menu-toggle");
}
(function(){
	document.getElementById("menu-toggle").onclick=menuToggle;
}());