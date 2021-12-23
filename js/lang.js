function ChangeLang(lang){
	if (lang == 1)
	{
		console.log(1);
		var swtchLang = document.getElementById("html");
		swtchLang.setAttribute("lang", "ru");
		localStorage.setItem("selectedLang",1);
	}
	else if(lang == 2)
	{
		console.log(2);
		var swtchLang = document.getElementById("html");
		swtchLang.setAttribute("lang", "en");
		localStorage.setItem("selectedLang",2);
	}

}

function reload() {
	window.location.reload();
}

window.onload = function (){
	ChangeLang(localStorage.getItem("selectedLang"));
}
