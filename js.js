function switchDivs() {
	var main1 = document.getElementById("main1");
	var main2 = document.getElementById("main2");
	
	main1.style.display = (main1.style.display == "none" ? "block" : "none");
	main2.style.display = (main2.style.display == "none" ? "block" : "none");
	
	document.getElementById("button").style.visibility="hidden";
}
