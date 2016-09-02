  //      function switchToSheet(id) {
//		baseSheet = "https://docs.google.com/spreadsheets/d/17u9aeAeqj-0ThSDDRcdVowWed0i-SX2KM68RvR7HOXE/pubhtml";
	//	document.getElementById('Freimi').src = baseSheet + "?gid=" + id + "&single=true";;
     //     }
		function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}