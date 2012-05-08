function swap(id) {
	if (document.getElementById(id).style.display == "block") {
		document.getElementById(id).style.display = "none";
		document.getElementById(id + "-Text").style.display = "none";
	} else {
		document.getElementById(id).style.display = "block";
		document.getElementById(id + "-Text").style.display = "inline";
	}
}